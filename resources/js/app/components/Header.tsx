import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'modeling', label: 'Modeling' },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    menuItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Navigating to section:', id);
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    } else {
      console.error('Element not found:', id);
    }
  };

  return (
    <motion.header
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav 
        className={`relative flex items-center p-1.5 rounded-full border transition-all duration-700 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-2xl border-secondary/20 shadow-[0_8px_32px_rgba(30,58,138,0.15)]' 
            : 'bg-white/40 backdrop-blur-md border-white/30 shadow-sm'
        }`}
      >
        {/* Animated Sliding Background */}
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(item.id, e)}
            className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-500 outline-none group z-10 ${
              activeSection === item.id
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary/60'
            }`}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="activeGlowPill"
                className="absolute inset-0 bg-white shadow-md border border-secondary/10 rounded-full -z-10"
                transition={{ 
                  type: "spring", 
                  stiffness: 350, 
                  damping: 25 
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
              </motion.div>
            )}
            <span className="flex items-center gap-2">
              {item.label}
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeDot"
                  className="w-1 h-1 rounded-full bg-accent"
                />
              )}
            </span>
          </a>
        ))}

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center pl-1 ml-1 border-l border-secondary/20">
          <motion.button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="absolute top-full mt-4 w-[calc(100%-3rem)] max-w-sm bg-white border border-secondary/20 rounded-[2rem] p-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(item.id, e)}
                  className={`w-full text-left px-6 py-4 rounded-2xl text-base font-bold transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'hover:bg-secondary/10 text-muted-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && <Sparkles size={16} className="text-accent" />}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
