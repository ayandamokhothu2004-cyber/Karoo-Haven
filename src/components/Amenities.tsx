import React from 'react';
import { motion } from 'motion/react';
import * as Lucide from 'lucide-react';
import { AMENITIES_DATA } from '../data';

// Custom typed map of icons to avoid bloated full-bundle imports
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi: Lucide.Wifi,
  ShieldCheck: Lucide.ShieldCheck,
  Wind: Lucide.Wind,
  Tv: Lucide.Tv,
  Coffee: Lucide.Coffee,
  Waves: Lucide.Waves,
  Flame: Lucide.Flame,
  Shirt: Lucide.Shirt
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-[#FBF9F6] border-b border-brand-gold/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-sans font-semibold text-[#C9A66B] uppercase tracking-[0.2em] block">
              Exceptional Hospitalities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F5D50]">
              Designed for Absolute Comfort
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-light">
              From the extreme temperatures of the South African Karoo plains to your connectivity and physical safety, we have thought of every details to elevate your overnight stay.
            </p>
          </div>
          <div className="bg-white border border-brand-gold/20 rounded-xl px-5 py-4 shrink-0 flex items-center gap-3 shadow-sm max-w-sm">
            <div className="w-10 h-10 rounded-full bg-[#2F5D50]/10 flex items-center justify-center text-[#2F5D50] shrink-0">
              <Lucide.Compass className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-brand-dark uppercase tracking-wide">Secure Electric Gate Access</p>
              <p className="text-slate-500 text-[11px] leading-tight mt-0.5">Guests receive custom electronic gate remotes upon arrival.</p>
            </div>
          </div>
        </div>

        {/* Amenities Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_DATA.map((amenity, index) => {
            const IconComponent = iconMap[amenity.iconName] || Lucide.HelpCircle;
            
            return (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-6 border border-brand-gold/10 hover:border-brand-gold/30 shadow-sm hover:shadow-md transition-all flex flex-col items-start space-y-4"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-[#2F5D50]/5 text-[#2F5D50] flex items-center justify-center border border-brand-green/5">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Info Text */}
                <div className="space-y-1">
                  <h3 className="font-sans font-semibold text-sm sm:text-base text-brand-dark tracking-wide">
                    {amenity.name}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-light">
                    {amenity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
