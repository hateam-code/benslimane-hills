import { InvestmentFeature, ProjectCard, PlanMasseLegend } from './types';

// Structured content for Benslimane Hills website
export const SITE_METADATA = {
  title: 'Benslimane Hills',
  subtitle: 'ALLIANT NATURE, MODERNITÉ ET CROISSANCE ÉCONOMIQUE.',
  slogan: 'L’exception devenue standard.',
  priceFrom: '2000 dh/m²',
};

export const HERO_CONTENT = {
  badge: 'VISION 2030 : BENSLIMANE AU CŒUR DU MONDE',
  heading: 'Anticiper la croissance.',
  description: 'Le Domaine Benslimane Hills s’inscrit dans la transformation spectaculaire de la région, entre nature préservée et infrastructures d’envergure mondiale. Investissez dès aujourd’hui à partir de 2000 dh/m².',
  mainImage: '/villa jumellee.webp',
  priceBadge: {
    title: 'PRIX DE LANCEMENT',
    price: '2000',
    unit: 'dh / m²',
    desc: 'Lots de terrain titrés au cœur de la nature.'
  },
  lifeBadge: {
    title: 'CADRE DE VIE',
    desc: 'Lots de terrain pour villas jumelées & isolées'
  },
  stats: [
    { label: 'CASABLANCA & RABAT', value: '30 min' },
    { label: 'GARE TGV & RER', value: 'À proximité' },
    { label: 'GRAND STADE HASSAN II', value: 'Rayonnement Mondial' }
  ]
};

export const INFRASTRUCTURES_CONTENT = {
  subtitle: 'INFRASTRUCTURES D’EXCEPTION',
  heading: 'Un emplacement stratégique, un investissement sécurisé.',
  description: 'Le Domaine Benslimane Hills bénéficie directement de l’essor des grands projets nationaux. La proximité immédiate du futur Grand Stade Hassan II et de la nouvelle gare TGV assure une plus-value exceptionnelle à votre investissement foncier.',
  cards: [
    {
      id: 'stade',
      tag: 'PROJET MONDIAL',
      title: 'Grand Stade Hassan II',
      description: '115 000 places, un monument architectural d’exception au rayonnement planétaire, à quelques minutes seulement de votre futur terrain.',
      imageUrl: '/grand_stade_hassan_2.jpg'
    },
    {
      id: 'tgv',
      tag: 'CONNECTIVITÉ NATIONALE',
      title: 'Pôle Ferroviaire TGV',
      description: 'Connectez Benslimane à Casablanca, Rabat et Tanger en un temps record grâce à la future infrastructure ferroviaire moderne.',
      imageUrl: '/gare_tgv_benslimane.webp'
    }
  ] as ProjectCard[]
};

export const PLAN_MASSE_CONTENT = {
  subtitle: 'VISION URBAINE',
  heading: 'Un Plan de Masse d’Exception.',
  imageUrl: '/plan masse.webp',
  legend: [
    {
      id: 'residentiel',
      title: 'Secteur Résidentiel',
      description: 'Des lots de terrains optimisés pour des villas spacieuses avec jardins privatifs.',
      iconName: 'Home'
    },
    {
      id: 'hotel',
      title: 'Complexe Hôtelier & Loisirs',
      description: 'Hôtel de luxe, club équestre, et parc aquatique intégrés au projet pour une expérience resort totale.',
      iconName: 'Palmtree'
    },
    {
      id: 'services',
      title: 'Services & Commerces',
      description: 'Mosquée, clinique, école, commerces et station service à portée de main au sein du domaine.',
      iconName: 'Building'
    }
  ] as PlanMasseLegend[]
};

export const ATOUTS_CONTENT = {
  watermark: 'BENSLIMANE',
  subtitle: 'LE DOMAINE BENSLIMANE HILLS',
  heading: 'Pourquoi investir à Benslimane ?',
  features: [
    {
      id: 'climat',
      title: 'Microclimat Unique',
      description: 'Un air purifié par les vastes forêts environnantes, offrant une fraîcheur naturelle toute l’année, loin du stress des métropoles.',
      iconName: 'Wind'
    },
    {
      id: 'loisirs',
      title: 'Loisirs & Sports',
      description: 'Piscines, terrains de Padel, club équestre de classe mondiale et parc aquatique directement intégrés dans le resort.',
      iconName: 'Trophy'
    },
    {
      id: 'plages',
      title: '36 km de Plages',
      description: 'La sérénité d’une nature forestière préservée alliée à la proximité immédiate de l’océan et du littoral atlantique.',
      iconName: 'Compass'
    }
  ] as InvestmentFeature[],
  gallery: [
    {
      id: 'g1',
      imageUrl: '/vue_bungalow.jpeg',
      alt: 'Aperçu Piscine & Villa'
    },
    {
      id: 'g2',
      imageUrl: '/vue_hotels.jpeg',
      alt: 'Vue d’Ensemble Resort'
    },
    {
      id: 'g3',
      imageUrl: '/lot de terrain pour villa.jpg',
      alt: 'Rue Résidentielle Moderne'
    }
  ]
};

export const DOCUMENTS_CONTENT = {
  subtitle: 'E-WORKSPACE ET CONTRATS',
  heading: 'Documents Officiels & Contrats de Vente',
  description: 'Gérez vos contrats de réservation, accédez aux brochures officielles et modifiez vos documents clients en temps réel grâce à notre intégration fluide et sécurisée.',
  files: [
    {
      id: 'brochure',
      name: 'Brochure_Benslimane_Hills_2026.pdf',
      size: '12.4 MB',
      type: 'PDF',
      category: 'Présentation'
    },
    {
      id: 'plan_detail',
      name: 'Plan_de_Masse_Architectural_A0.pdf',
      size: '18.7 MB',
      type: 'PDF',
      category: 'Plan'
    },
    {
      id: 'cahier_charges',
      name: 'Cahier_des_Charges_Techniques.pdf',
      size: '5.2 MB',
      type: 'PDF',
      category: 'Règlement'
    },
    {
      id: 'modele_contrat',
      name: 'Contrat_Type_Reservation_Signe.docx',
      size: '1.8 MB',
      type: 'DOCX',
      category: 'Légal'
    }
  ]
};

export const CONTACT_CONTENT = {
  subtitle: 'ENTRER EN CONTACT',
  heading: 'Demain commence Aujourd’hui.',
  description: 'Saisissez l’opportunité unique de posséder un lot de terrain d’exception dans la ville de demain. Lots disponibles immédiatement.',
  details: {
    phone: '06 10 360 360',
    email: 'contact@benslimanehills.com',
    web: 'www.benslimanehills.com',
    socials: {
      facebook: '#',
      instagram: '#',
      tiktok: '#'
    }
  }
};
