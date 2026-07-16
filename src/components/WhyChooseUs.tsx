import React from 'react';
import { motion } from 'motion/react';
import * as Lucide from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin: Lucide.MapPin,
  ShieldCheck: Lucide.ShieldCheck,
  Award: Lucide.Award,
  Heart: Lucide.Heart
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-sans font-semibold text-[#C9A66B] uppercase tracking-[0.2em] block">
            Core Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F5D50]">
            Why Travelers Choose Karoo Haven
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            We understand what matters to our guests: a quiet, luxurious night of sound sleep, complete secure protection for vehicle loads, and starting the morning with fresh energy.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_DATA.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || Lucide.HelpCircle;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-[#FBF9F6] hover:bg-[#2F5D50] hover:text-white rounded-2xl border border-brand-gold/10 hover:border-transparent hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center space-y-5"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#2F5D50]/5 text-[#2F5D50] group-hover:bg-white/10 group-hover:text-[#dfc599] flex items-center justify-center transition-colors duration-500">
                  <IconComponent className="w-7 h-7 stroke-[1.5]" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-brand-dark group-hover:text-[#dfc599] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-slate-200 text-xs sm:text-[13px] leading-relaxed font-light transition-colors">
                    {feature.description}
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
