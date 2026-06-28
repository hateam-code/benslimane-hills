import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Vision', 'Grands Projets', 'Plan de Masse', 'Atouts', 'Contact'];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-studio-bg/90 backdrop-blur-md py-4 border-b border-studio-border shadow-sm'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="logo.png"
            alt="Benslimane Hills Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
          <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-studio-ink">
            Benslimane Hills
          </span>
        </motion.div>

        {/* Desktop Links & CTA */}
        <div className="hidden md:flex gap-12 items-center">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
              }}
              whileHover={{ y: -2 }}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-studio-muted hover:text-studio-ink transition-colors cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-studio-ink text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-studio-accent transition-all shadow-lg shadow-studio-ink/10 cursor-pointer"
          >
            Réserver un Lot
          </motion.button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-studio-ink cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-studio-bg border-b border-studio-border overflow-hidden md:hidden shadow-lg"
          >
            <div className="flex flex-col p-8 gap-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
                  }}
                  className="text-2xl font-serif text-studio-ink"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
