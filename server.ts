import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY is not defined. AI Concierge will run in simulated fallback mode.");
      throw new Error("GEMINI_API_KEY is missing");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// In-memory mock database for reservations
interface Reservation {
  id: string;
  name: string;
  phone: string;
  email?: string;
  createdAt: string;
  status: string;
}

const reservations: Reservation[] = [
  {
    id: 'res-1',
    name: 'Hatim Akar',
    phone: '0610360360',
    email: 'hatimakarchark@gmail.com',
    createdAt: new Date().toISOString(),
    status: 'En attente'
  }
];

// API: Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// API: Fetch Reservations (For internal dashboard visualization)
app.get('/api/reservations', (req, res) => {
  res.json({ reservations });
});

// API: Submit Reservation Lead
app.post('/api/reservation', (req, res) => {
  const { name, phone, email } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Le nom et le téléphone sont obligatoires.' });
  }

  const newRes: Reservation = {
    id: `res-${Date.now()}`,
    name,
    phone,
    email: email || '',
    createdAt: new Date().toISOString(),
    status: 'Nouveau lead'
  };

  reservations.push(newRes);
  console.log('New Reservation received:', newRes);

  return res.json({
    success: true,
    message: 'Votre demande a été enregistrée avec succès. Un conseiller Benslimane Hills vous rappellera sous 24h.',
    reservation: newRes
  });
});

// API: AI Advisor Chat Route (Queries Gemini)
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Format des messages invalide.' });
  }

  const userPrompt = messages[messages.length - 1]?.text || '';

  try {
    const ai = getGeminiClient();

    const systemInstruction = `
      Tu es l'assistant de prestige et conseiller en investissement officiel du projet immobilier de luxe "Benslimane Hills" au Maroc.
      Ton style est extrêmement professionnel, courtois, élégant et axé sur le prestige. Tu vouvoies toujours l'utilisateur.
      
      Voici les détails cruciaux du projet Benslimane Hills à connaître :
      - Concept : Un domaine exclusif de lots de terrains résidentiels titrés (titre de propriété individuel) destinés à la construction de villas modernes (jumelées ou isolées), alliant nature forestière préservée et modernité.
      - Tarifs : À partir de 2000 MAD (dh) par m². Les prix de lancement sont de 2000 dh/m².
      - Localisation stratégique : Benslimane, une ville réputée pour son microclimat exceptionnel (forêt environnante, air le plus pur du Maroc, fraîcheur naturelle).
      - Distances : À seulement 30 minutes de Casablanca et de Rabat. Idéal pour résidence principale ou secondaire haut de gamme.
      - Proximité des grands chantiers nationaux :
        1. Grand Stade Hassan II (115 000 places) : le futur plus grand stade du monde pour la Coupe du Monde 2030, situé à quelques minutes. Une garantie d'une valorisation foncière extraordinaire !
        2. Nouveau pôle ferroviaire TGV et RER : Gare TGV à proximité immédiate connectant Benslimane à Casablanca, Rabat et Tanger en un temps record.
      - Équipements du domaine (Resort complet) : 
        - Sécurisé 24h/24 (gated community).
        - Espaces verts immenses, parcs.
        - Complexe hôtelier de luxe, club équestre professionnel, parc aquatique de niveau mondial.
        - Équipements sportifs complets : piscines, terrains de padel.
        - Services intégrés : Mosquée, clinique de soins, école privée, commerces, station-service.
        - À proximité : 36 km de plages de l'Atlantique, mêlant ainsi cadre forestier et côtier.
      - Processus d'achat : Le client réserve un lot, signe un contrat de réservation, puis l'acte définitif chez le notaire. Il peut construire sa villa selon ses goûts en respectant le cahier des charges esthétique du domaine (garantissant l'harmonie visuelle du resort).
      
      Règles de réponse :
      1. Réponds en français (sauf si l'utilisateur s'adresse en arabe ou anglais, auquel cas réponds dans sa langue préférée).
      2. Ne mentionne pas de détails techniques internes comme le port ou l'API.
      3. Reste toujours axé sur l'incitation à l'action : invite l'utilisateur à remplir le formulaire de contact ou à laisser son numéro pour être rappelé par un conseiller commercial officiel sous 24h.
      4. Si la clé d'API ne marche pas, une simulation polie sera renvoyée.
    `;

    // Map message format
    // role 'user' | 'model' mapped to parts
    const chatHistory = messages.map((msg) => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...chatHistory
      ],
    });

    const replyText = response.text || "Je m'excuse, je ne parviens pas à traiter votre demande pour le moment. Un conseiller commercial reste à votre entière disposition au 06 10 360 360.";
    return res.json({ text: replyText });

  } catch (err: any) {
    console.error("Gemini API Error in server:", err.message);

    // Simulated high-quality fallback responder when API Key is missing or fails
    const mockReplies = [
      `Bienvenue chez Benslimane Hills. Le Domaine propose des lots de terrain titrés pour villas à partir de 2000 dh/m². Idéalement situé à 30 minutes de Casablanca et de Rabat, à proximité du nouveau Grand Stade Hassan II de 115 000 places et de la future gare TGV. Comment puis-je vous accompagner dans votre projet d'investissement aujourd'hui ?`,
      `C'est un excellent choix d'investissement. La proximité immédiate du Grand Stade Hassan II de Casablanca (Coupe du Monde 2030) et du futur pôle ferroviaire TGV garantit une valorisation foncière exceptionnelle et rapide. Souhaitez-vous qu'un conseiller commercial vous appelle pour vous présenter les plans de masse de nos lots ?`,
      `Le cahier des charges de Benslimane Hills autorise la construction de magnifiques villas jumelées ou isolées au style contemporain, dans le respect de l'harmonie paysagère du domaine. Le resort comprendra également un club équestre, des terrains de padel, des piscines et des commerces de proximité. Laissez-nous vos coordonnées dans le formulaire ci-dessous pour recevoir la brochure complète !`
    ];

    // Pick a response depending on query keywords
    const textQuery = userPrompt.toLowerCase();
    let reply = mockReplies[0];
    if (textQuery.includes('stade') || textQuery.includes('grand stade') || textQuery.includes('invest') || textQuery.includes('prix')) {
      reply = mockReplies[1];
    } else if (textQuery.includes('villa') || textQuery.includes('construct') || textQuery.includes('terrain') || textQuery.includes('plan')) {
      reply = mockReplies[2];
    }

    return res.json({ text: reply, isSimulated: true });
  }
});

// Vite Middleware & Static Files configuration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Benslimane Hills Full-Stack server is running on http://localhost:${PORT}`);
  });
}

startServer();
