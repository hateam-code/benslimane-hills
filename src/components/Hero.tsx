import { motion } from 'motion/react';
import { Trophy, Leaf } from 'lucide-react';

export default function Hero() {
  const stats = [
    { label: 'Casablanca & Rabat', value: '30 min' },
    { label: 'Gare TGV & RER', value: 'À proximité' },
    { label: 'Grand Stade Hassan II', value: 'Rayonnement Mondial' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 px-6">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-studio-highlight/5 -skew-x-12 -z-10 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-studio-earth/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 text-[10px] font-bold tracking-[0.3em] text-studio-accent uppercase bg-studio-accent/5 border border-studio-accent/20 rounded-full">
              <Trophy size={12} />
              Vision 2030 : Benslimane au cœur du monde
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif font-light text-studio-ink mb-10 leading-[1.1]">
              Anticiper la <br />
              <span className="text-studio-accent italic">croissance.</span>
            </h1>
            
            <p className="text-lg text-studio-muted max-w-xl mb-12 leading-relaxed">
              Le Domaine Benslimane Hills s'inscrit dans la transformation spectaculaire de la ville, entre nature préservée et infrastructures mondiales. Investissez dès aujourd'hui à partir de <span className="font-bold text-studio-ink">2000 dh/m²</span>.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-5 bg-studio-ink text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-xl shadow-studio-ink/20 transition-all cursor-pointer"
              >
                Réserver mon Lot
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "rgb(243, 244, 246)" }}
                onClick={() => {
                  document.getElementById('vision-2030')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-5 bg-transparent border border-studio-border text-studio-ink rounded-full font-bold uppercase tracking-widest text-xs transition-all cursor-pointer"
              >
                Voir les Chantiers TGV & Stade
              </motion.button>
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="border-l border-studio-earth/30 pl-4">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-studio-earth mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm font-serif text-studio-ink">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white">
              <img
                src="villa jumellee.webp"
                alt="Villa Jumelée - Benslimane Hills"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-studio-highlight rounded-full">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">
                      Cadre de Vie
                    </p>
                    <p className="text-lg font-serif">
                      Lots de terrain pour villas jumelées
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-20 bg-studio-accent p-8 rounded-3xl shadow-xl border border-white max-w-[220px] text-white"
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">
                Prix de Lancement
              </p>
              <h3 className="text-3xl font-bold">2000</h3>
              <p className="text-xs font-bold mb-4">dh / m²</p>
              <p className="text-[10px] leading-relaxed opacity-90 italic">
                Lots de terrain titrés au cœur de la nature.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
