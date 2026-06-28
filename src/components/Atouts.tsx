import { Wind, Trophy, Compass } from 'lucide-react';

export default function Atouts() {
  return (
    <section id="atouts" className="py-32 bg-studio-bg overflow-hidden relative border-t border-studio-border/30">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -z-10">
        <span className="text-[25vw] font-bold text-studio-ink/5 uppercase tracking-tighter">
          BenslimaneHills
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <span className="text-xs uppercase tracking-[0.4em] font-bold text-studio-accent mb-6 block">
          Le Domaine Benslimane Hills
        </span>
        <h2 className="text-5xl md:text-7xl font-serif text-studio-ink leading-tight">
          Pourquoi investir <br /> à Benslimane ?
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {/* Card 1 */}
        <div className="bg-white border border-studio-border/40 p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-studio-accent/5 rounded-full flex items-center justify-center text-studio-accent mb-8">
            <Wind size={24} />
          </div>
          <h3 className="text-xl font-serif text-studio-ink mb-4">Microclimat Unique</h3>
          <p className="text-studio-muted text-sm font-light leading-relaxed">
            Profitez d'un air purifié par la forêt de chênes-lièges environnante, avec des températures douces toute l'année, idéal pour votre bien-être.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-studio-border/40 p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-studio-accent/5 rounded-full flex items-center justify-center text-studio-accent mb-8">
            <Trophy size={24} />
          </div>
          <h3 className="text-xl font-serif text-studio-ink mb-4">Loisirs & Sports</h3>
          <p className="text-studio-muted text-sm font-light leading-relaxed">
            À proximité de parcours de golf de renommée internationale, de centres équestres et de complexes sportifs modernes de premier plan.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-studio-border/40 p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-studio-accent/5 rounded-full flex items-center justify-center text-studio-accent mb-8">
            <Compass size={24} />
          </div>
          <h3 className="text-xl font-serif text-studio-ink mb-4">36 km de Plages</h3>
          <p className="text-studio-muted text-sm font-light leading-relaxed">
            Rejoignez les magnifiques plages de Mohammedia, Bouznika et l'océan Atlantique en seulement 20 minutes de route.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group overflow-hidden rounded-[3rem] shadow-lg aspect-video md:aspect-[4/5] relative">
          <img
            src="/Immeubble_r2.png"
            alt="Vue Extérieure"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-8">
            <h4 className="text-xl font-serif text-white mb-1">Architecture Moderne</h4>
            <p className="text-white/70 text-xs font-light">
              Des structures contemporaines s'intégrant parfaitement dans l'environnement forestier.
            </p>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[3rem] shadow-lg aspect-video md:aspect-[4/5] relative">
          <img
            src="/vue_hotels.jpeg"
            alt="Vue Hôtels"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-8">
            <h4 className="text-xl font-serif text-white mb-1">Complexe Hôtelier</h4>
            <p className="text-white/70 text-xs font-light">
              Infrastructures hôtelières haut de gamme offrant des services de bien-être exclusifs.
            </p>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[3rem] shadow-lg aspect-video md:aspect-[4/5] relative">
          <img
            src="/vue_bungalow.jpeg"
            alt="Vue Bungalow"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-8">
            <h4 className="text-xl font-serif text-white mb-1">Havre de Paix</h4>
            <p className="text-white/70 text-xs font-light">
              Une tranquillité absolue au cœur de paysages d'exception préservés du bruit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
