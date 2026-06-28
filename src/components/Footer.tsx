import { Facebook, Instagram, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-studio-ink text-white py-24 border-t border-studio-border/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        {/* Brand column */}
        <div>
          <img
            src="logo.png"
            alt="Benslimane Hills Logo"
            className="h-20 w-auto object-contain mb-8"
          />
        </div>

        {/* Projet menu */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-studio-highlight mb-6">Projet</h4>
          <div className="flex flex-col gap-4 text-sm text-white/75 font-light">
            <a href="#vision" className="hover:text-white transition-colors">La Vision</a>
            <a href="#grands-projets" className="hover:text-white transition-colors">Grands Projets</a>
            <a href="#plan-de-masse" className="hover:text-white transition-colors">Plan de Masse</a>
            <a href="#atouts" className="hover:text-white transition-colors">Atouts</a>
          </div>
        </div>

        {/* Découvrir menu */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-studio-highlight mb-6">Découvrir</h4>
          <div className="flex flex-col gap-4 text-sm text-white/75 font-light">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>
        </div>

        {/* Direct menu */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-studio-highlight mb-6">Direct</h4>
          <div className="flex flex-col gap-4 text-sm text-white/75 font-light">
            <a href="tel:0610360360" className="hover:text-white transition-colors">06 10 360 360</a>
            <a href="mailto:contact@benslimanehills.com" className="hover:text-white transition-colors">contact@benslimanehills.com</a>
            <span className="text-studio-highlight/60 mt-2 block text-xs">Ouvert 7j/7 de 9h à 19h</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-white/40 font-light">
          &copy; {new Date().getFullYear()} Benslimane Hills. Tous droits réservés.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <span className="text-white/10">•</span>
          <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <span className="text-white/10">•</span>
          <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="TikTok">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.74-.22-.22-.4-.47-.58-.73v6.56c.02 2.11-.6 4.31-2.12 5.85-1.57 1.57-3.95 2.3-6.19 1.98-2.58-.37-4.83-2.34-5.41-4.9-.76-3.32 1.12-6.97 4.45-7.72.67-.15 1.37-.2 2.06-.14v4.01c-.81-.13-1.68.04-2.35.53-.8.61-1.11 1.71-.85 2.69.29 1.1 1.41 1.83 2.54 1.69 1.13-.1 2.01-1.15 1.99-2.31l-.02-15.98z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
