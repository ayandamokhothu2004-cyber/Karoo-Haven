import React from 'react';
import { Compass, Facebook, Instagram, Mail, Phone, MapPin, Award } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2c5348] text-white pt-20 pb-8 border-t border-brand-gold/20 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
        
        {/* Logo / Brand block */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#home" className="flex items-center gap-2 group">
            <Compass className="w-8 h-8 text-[#C9A66B] group-hover:rotate-45 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-white leading-none">
                KAROO HAVEN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C9A66B] uppercase leading-none mt-1">
                GUEST HOUSE
              </span>
            </div>
          </a>

          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
            Providing exceptional 4-star South African graded accommodation, securing restful stopovers and tranquil memories in the historic center of Colesberg.
          </p>

          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:text-[#C9A66B] hover:bg-white/10 transition-colors"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-4.5 h-4.5 fill-current" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:text-[#C9A66B] hover:bg-white/10 transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            {/* Custom TripAdvisor representation using standard Award icon */}
            <a 
              href="https://tripadvisor.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:text-[#C9A66B] hover:bg-white/10 transition-colors gap-0.5"
              aria-label="TripAdvisor Reviews"
            >
              <Award className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-[#dfc599]">
            Quick Links
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm font-light text-slate-300">
            <li>
              <a href="#home" className="hover:text-[#C9A66B] hover:underline transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#C9A66B] hover:underline transition-colors">About Us</a>
            </li>
            <li>
              <a href="#rooms" className="hover:text-[#C9A66B] hover:underline transition-colors">Luxury Rooms</a>
            </li>
            <li>
              <a href="#amenities" className="hover:text-[#C9A66B] hover:underline transition-colors">Amenities</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#C9A66B] hover:underline transition-colors">Visual Gallery</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#C9A66B] hover:underline transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Room Links Column */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-[#dfc599]">
            Accommodations
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm font-light text-slate-300">
            <li>
              <a href="#rooms" className="hover:text-[#C9A66B] hover:underline transition-colors block">
                The Karoo Oasis Suite
              </a>
            </li>
            <li>
              <a href="#rooms" className="hover:text-[#C9A66B] hover:underline transition-colors block">
                The Lavender Cottage
              </a>
            </li>
            <li>
              <a href="#rooms" className="hover:text-[#C9A66B] hover:underline transition-colors block">
                The Colesberg Classic Room
              </a>
            </li>
          </ul>
          <div className="pt-2">
            <span className="inline-block bg-[#C9A66B]/15 border border-[#C9A66B]/30 text-[#dfc599] text-[10px] px-2.5 py-1 rounded-md uppercase font-sans tracking-widest font-semibold">
              ⭐ Graded 4-Star AA Travel
            </span>
          </div>
        </div>

        {/* Direct Contact column */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-[#dfc599]">
            Overnight Office
          </h4>
          <ul className="space-y-4 text-xs sm:text-sm font-light text-slate-300">
            <li className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
              <span>36 Stockenstrom St, Colesberg, 9795</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-[#C9A66B] shrink-0" />
              <a href="tel:+27821234567" className="hover:text-[#C9A66B] hover:underline transition-colors">
                +27 (0)82 123 4567
              </a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail className="w-4 h-4 text-[#C9A66B] shrink-0" />
              <a href="mailto:stay@karoohaven.co.za" className="hover:text-[#C9A66B] hover:underline transition-colors">
                stay@karoohaven.co.za
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400">
        <div>
          <p>© {year} Karoo Haven Guest House. All Rights Reserved.</p>
          <p className="mt-1 text-[10px] text-slate-500 font-sans">
            Colesberg Boutique Lodging • High-Security Midpoint Overnights
          </p>
        </div>
        <div className="flex gap-4">
          <span className="hover:text-white transition-colors">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-white transition-colors">Terms of Stay</span>
        </div>
      </div>
    </footer>
  );
}
