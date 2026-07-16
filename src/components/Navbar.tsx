import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2F5D50]/95 backdrop-blur-md py-4 shadow-lg border-b border-brand-gold/15'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Compass className="w-7 h-7 text-[#C9A66B] group-hover:rotate-45 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-[#FBF9F6] leading-none">
                KAROO HAVEN
              </span>
              <span className="text-[10px] font-sans tracking-[0.25em] text-[#C9A66B] uppercase leading-none mt-1">
                GUEST HOUSE
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans tracking-widest text-slate-100/90 hover:text-[#C9A66B] transition-colors uppercase font-medium relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A66B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://wa.me/27821234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-sans tracking-wider text-slate-100 hover:text-[#C9A66B] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C9A66B]" />
              <span>+27 (0)82 123 4567</span>
            </a>
            <button
              onClick={onBookClick}
              className="bg-[#C9A66B] hover:bg-[#b08e53] text-[#2F5D50] hover:text-[#1c3d34] font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Book Your Stay
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#C9A66B] p-2 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-45 lg:hidden"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#2F5D50] text-white z-50 p-8 flex flex-col justify-between border-l border-brand-gold/20 shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-white/10">
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-bold tracking-widest text-white">
                      KAROO HAVEN
                    </span>
                    <span className="text-[9px] font-sans tracking-[0.25em] text-[#C9A66B] uppercase mt-0.5">
                      GUEST HOUSE
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-[#C9A66B] p-1 cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-6 pt-10">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-serif tracking-widest text-slate-100 hover:text-[#C9A66B] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <a
                  href="https://wa.me/27821234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm tracking-wide text-slate-200 hover:text-[#C9A66B] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C9A66B]" />
                  <span>+27 82 123 4567</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full bg-[#C9A66B] hover:bg-[#b08e53] text-[#2F5D50] font-bold tracking-widest uppercase py-3.5 rounded-lg shadow-lg text-sm transition-all cursor-pointer"
                >
                  Book Your Stay
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
