import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Calendar, ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Background Image with Parallax & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85"
          alt="Karoo Haven Dusk Exterior"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-[#FBF9F6]/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Decorative Crown/Shield Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-12 h-12 border border-brand-gold/40 rounded-full flex items-center justify-center mb-6"
        >
          <span className="font-serif text-[#C9A66B] font-bold text-lg tracking-wider">KH</span>
        </motion.div>

        {/* Small Tagline */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.25em' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm font-sans font-semibold text-[#C9A66B] uppercase tracking-[0.25em] mb-4"
        >
          Historic Colesberg, South Africa
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring' }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl tracking-tight"
        >
          Experience Authentic <br className="hidden sm:inline" />
          <span className="text-[#dfc599]">Karoo Hospitality</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl font-sans text-slate-200 mb-10 max-w-2xl font-light"
        >
          Refined 4-star luxury accommodation. The perfect halfway oasis between Johannesburg and Cape Town.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onBookClick}
            className="bg-[#C9A66B] hover:bg-brand-gold-dark text-brand-dark hover:text-white font-semibold tracking-wider text-sm uppercase px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            Book Your Stay
          </button>
          
          <a
            href="https://wa.me/27821234567?text=Hello%20Karoo%20Haven%2C%20I%20would%20like%20to%20inquire%20about%20your%2520rates%20and%20availability."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/80 hover:border-brand-gold hover:bg-white/10 text-white hover:text-brand-gold-light font-semibold tracking-wider text-sm uppercase px-8 py-4 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-transparent" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      {/* Elegant Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-slate-400">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-[#C9A66B]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
