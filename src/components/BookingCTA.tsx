import React from 'react';
import { motion } from 'motion/react';
import { CalendarRange, Sparkles } from 'lucide-react';

interface BookingCTAProps {
  onBookClick: () => void;
}

export default function BookingCTA({ onBookClick }: BookingCTAProps) {
  return (
    <section className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1920&q=80"
          alt="Karoo Night Sky Backdrop"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#2F5D50]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-8">
        {/* Animated Icon badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#dfc599] border border-white/10"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Rest & Rejuvenate</span>
        </motion.div>

        {/* Big Heading */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Ready to Experience the Perfect <span className="text-[#dfc599]">Karoo Escape</span>?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Secure your luxurious bed and secure parking space for your next journey. Our team of warm hosts is standing by to prepare a comfortable sanctuary just for you.
          </p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-4"
        >
          <button
            onClick={onBookClick}
            className="bg-[#C9A66B] hover:bg-brand-gold-dark text-[#2F5D50] hover:text-white font-bold tracking-widest uppercase text-sm px-10 py-4.5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 flex items-center gap-2.5 mx-auto cursor-pointer"
          >
            <CalendarRange className="w-4.5 h-4.5" />
            Check Availability & Book Stay
          </button>
        </motion.div>

        <p className="text-[11px] text-slate-400 font-sans">
          No credit card required for initial availability holds • 100% Secure SSL Privacy • Immediate WhatsApp Assistance
        </p>
      </div>
    </section>
  );
}
