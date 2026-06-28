import { motion } from 'motion/react';

export default function Infrastructures() {
  return (
    <section id="vision-2030" className="py-32 bg-studio-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-studio-accent mb-6 block">
            Infrastructures d'Exception
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-studio-ink leading-tight mb-8">
            Un emplacement stratégique, un investissement <span className="italic">sécurisé.</span>
          </h2>
          <p className="text-lg text-studio-muted font-light leading-relaxed">
            Le Domaine Benslimane Hills bénéficie directement de l'essor des grands projets nationaux. La proximité immédiate du Grand Stade Hassan II et de la nouvelle gare TGV assure une plus-value exceptionnelle à votre investissement foncier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          {/* Card 1: Grand Stade */}
          <motion.div
            whileHover={{ y: -6 }}
            className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-lg border border-studio-border/20 cursor-pointer"
          >
            <img
              src="/grand_stade_hassan_2.jpg"
              alt="Grand Stade Hassan II Render"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
              <span className="text-studio-highlight font-bold uppercase tracking-widest text-[9px] mb-2">
                Projet Mondial
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-2">
                Grand Stade Hassan II
              </h3>
              <p className="text-white/70 font-light text-xs max-w-xs">
                115 000 places. Un monument architectural au rayonnement planétaire, à quelques minutes seulement de votre futur terrain.
              </p>
            </div>
          </motion.div>

          {/* Card 2: TGV Gare */}
          <motion.div
            whileHover={{ y: -6 }}
            className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-lg border border-studio-border/20 cursor-pointer"
          >
            <img
              src="/gare_tgv_benslimane.webp"
              alt="Gare TGV Benslimane Render"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
              <span className="text-studio-highlight font-bold uppercase tracking-widest text-[9px] mb-2">
                Connectivité Nationale
              </span>
              <h3 className="text-2xl md:text-2xl font-serif text-white mb-2">
                Pôle Ferroviaire TGV
              </h3>
              <p className="text-white/70 font-light text-xs max-w-xs">
                Connectez Benslimane à Casablanca, Rabat et Tanger en un temps record grâce à la future infrastructure ferroviaire moderne.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
