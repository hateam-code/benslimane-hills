import { MapPin, Leaf, Globe } from 'lucide-react';

export default function PlanDeMasse() {
  return (
    <section id="plan-de-masse" className="py-32 bg-studio-bg overflow-hidden border-t border-studio-border/30">
      <div className="text-center mb-24 max-w-4xl mx-auto px-6">
        <span className="text-xs uppercase tracking-[0.4em] font-bold text-studio-accent mb-6 block">
          Vision Urbaine
        </span>
        <h2 className="text-5xl md:text-7xl font-serif text-studio-ink leading-tight mb-8">
          Un Plan de Masse <span className="italic">d'Exception.</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-studio-border/30 bg-white p-4">
          <img
            src="/plan masse.webp"
            alt="Plan de Masse Benslimane Hills"
            className="w-full h-auto object-cover rounded-[2.5rem]"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white border border-studio-border/40 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-studio-accent/5 rounded-full flex items-center justify-center text-studio-accent mb-8">
            <MapPin size={24} />
          </div>
          <h3 className="text-xl font-serif text-studio-ink mb-4">Secteur Résidentiel</h3>
          <p className="text-studio-muted text-sm font-light leading-relaxed">
            Lots de terrains titrés pour villas jumelées, conçus pour maximiser l'intimité, l'exposition au soleil et la vue sur la forêt environnante.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-studio-border/40 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-studio-accent/5 rounded-full flex items-center justify-center text-studio-accent mb-8">
            <Leaf size={24} />
          </div>
          <h3 className="text-xl font-serif text-studio-ink mb-4">Complexe Hôtelier & Loisirs</h3>
          <p className="text-studio-muted text-sm font-light leading-relaxed">
            Un resort intégré with infrastructures de loisirs, espaces verts, aires de jeux et terrains de sport pour toute la famille.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-studio-border/40 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-studio-accent/5 rounded-full flex items-center justify-center text-studio-accent mb-8">
            <Globe size={24} />
          </div>
          <h3 className="text-xl font-serif text-studio-ink mb-4">Services & Commerces</h3>
          <p className="text-studio-muted text-sm font-light leading-relaxed">
            Zones commerciales de proximité, cafés, restaurants et services essentiels accessibles à pied pour un quotidien serein.
          </p>
        </div>
      </div>
    </section>
  );
}
