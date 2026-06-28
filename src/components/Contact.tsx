import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Globe, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setSubmitStatus('error');
      setErrorMessage('Le nom et le numéro de téléphone sont requis.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setName('');
        setPhone('');
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Une erreur est survenue lors de l’envoi.');
      }
    } catch (err) {
      console.error('Submit lead error:', err);
      setSubmitStatus('error');
      setErrorMessage('Impossible de contacter le serveur de réservation.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-studio-bg overflow-hidden relative border-t border-studio-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-studio-accent mb-6 block">
              Entrer en Contact
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-studio-ink leading-tight mb-8">
              Demain commence <br />
              <span className="italic">Aujourd'hui.</span>
            </h2>
            <p className="text-studio-muted text-lg font-light leading-relaxed mb-12">
              Le Domaine Benslimane Hills s'inscrit dans la transformation spectaculaire de la ville, entre nature préservée et infrastructures mondiales. Investissez dès aujourd'hui à partir de 2000 dh/m².
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="tel:0610360360" className="flex items-center gap-4 text-studio-ink hover:text-studio-accent transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-studio-border group-hover:border-studio-accent shadow-sm transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-studio-muted">Téléphone</p>
                  <p className="text-lg font-serif">06 10 360 360</p>
                </div>
              </a>

              <a href="mailto:contact@benslimanehills.com" className="flex items-center gap-4 text-studio-ink hover:text-studio-accent transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-studio-border group-hover:border-studio-accent shadow-sm transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-studio-muted">Email</p>
                  <p className="text-lg font-serif">contact@benslimanehills.com</p>
                </div>
              </a>

              <a href="https://benslimanehills.com" className="flex items-center gap-4 text-studio-ink hover:text-studio-accent transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-studio-border group-hover:border-studio-accent shadow-sm transition-all">
                  <Globe size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-studio-muted">Site Web</p>
                  <p className="text-lg font-serif">benslimanehills.com</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 mt-12 pt-12 border-t border-studio-border/50">
              <a href="#" className="w-10 h-10 rounded-full border border-studio-border hover:border-studio-accent flex items-center justify-center text-xs font-bold text-studio-muted hover:text-studio-ink transition-all">FB</a>
              <a href="#" className="w-10 h-10 rounded-full border border-studio-border hover:border-studio-accent flex items-center justify-center text-xs font-bold text-studio-muted hover:text-studio-ink transition-all">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-studio-border hover:border-studio-accent flex items-center justify-center text-xs font-bold text-studio-muted hover:text-studio-ink transition-all">TK</a>
            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-white border border-studio-border/40 p-8 md:p-16 rounded-[3rem] shadow-xl">
              <div className="absolute -inset-0.5 rounded-[3rem] bg-gradient-to-br from-studio-accent/5 to-transparent opacity-50 blur pointer-events-none"></div>

              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="font-serif text-3xl text-studio-ink">Rappelez-moi</h3>
                  <p className="text-studio-muted text-sm mt-2">
                    Laissez vos coordonnées et un conseiller expert vous rappellera sous 24h.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitStatus === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-studio-highlight/5 border border-studio-highlight/20 p-8 rounded-2xl flex flex-col items-center text-center space-y-4"
                    >
                      <CheckCircle2 className="w-12 h-12 text-studio-accent" />
                      <div>
                        <h4 className="font-serif text-xl text-studio-ink">Demande reçue !</h4>
                        <p className="text-studio-muted text-sm mt-2 leading-relaxed">
                          Merci pour votre intérêt. Un conseiller officiel du Domaine Benslimane Hills se mettra en relation avec vous très prochainement.
                        </p>
                      </div>
                      <button 
                        onClick={() => setSubmitStatus('idle')}
                        className="text-xs tracking-widest text-studio-accent uppercase font-bold hover:text-studio-ink pt-2 cursor-pointer"
                      >
                        Envoyer une autre demande
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Name input */}
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-studio-muted mb-2 block">
                          Votre Nom complet
                        </label>
                        <input 
                          type="text" 
                          required
                          value={name} 
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: Hatim Akar"
                          className="w-full bg-studio-bg border border-studio-border rounded-2xl px-6 py-4 text-studio-ink focus:outline-none focus:border-studio-accent transition-all"
                        />
                      </div>

                      {/* Phone input */}
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-studio-muted mb-2 block">
                          Numéro de Téléphone
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Ex: +212 6 10 36 03 60"
                          className="w-full bg-studio-bg border border-studio-border rounded-2xl px-6 py-4 text-studio-ink focus:outline-none focus:border-studio-accent transition-all"
                        />
                      </div>

                      {submitStatus === 'error' && (
                        <div className="text-red-600 text-xs font-sans leading-relaxed">
                          {errorMessage}
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-studio-ink text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-studio-accent transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-studio-ink/10"
                      >
                        {isSubmitting ? "Envoi en cours..." : "Rappelez-moi"}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
