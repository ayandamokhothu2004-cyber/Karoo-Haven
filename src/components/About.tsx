import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Compass, Calendar, Award, Star } from 'lucide-react';

interface AboutProps {
  onBookClick: () => void;
}

export default function About({ onBookClick }: AboutProps) {
  const highlights = [
    {
      title: '4-Star Luxury Standard',
      desc: 'Impeccable housekeeping, orthopedic beds, and pristine quality standards.',
    },
    {
      title: 'Ultimate Secure Overnighting',
      desc: 'High walls, perimeter electric fences, and remote-gated under-roof parking.',
    },
    {
      title: 'Authentic Karoo Cooking',
      desc: 'Our morning farm breakfasts are crafted from fresh, local free-range ingredients.',
    },
    {
      title: 'Tranquil Garden Sanctuary',
      desc: 'Acres of manicured rosebeds, quiet lavender walks, and a solar pool.',
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FBF9F6] border-b border-brand-gold/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Collage */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Primary Big Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md md:max-w-lg aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-brand-gold/10"
            >
              <img
                src="https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1000&q=80"
                alt="Karoo Haven Garden Walks"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 right-4 sm:-right-4 w-1/2 max-w-xs aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FBF9F6] hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80"
                alt="Karoo Haven Luxury Bedroom Detail"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Rich Typography */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-[#C9A66B] font-semibold uppercase"
              >
                <Award className="w-4 h-4" />
                Welcome to Karoo Haven
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F5D50] leading-tight"
              >
                A Peaceful Sanctuary in Historic Colesberg
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              Established as an elegant oasis in the heart of South Africa’s Great Karoo region, **Karoo Haven** was designed specifically to provide restorative, high-end comfort. Whether you are driving the long distance between Pretoria, Johannesburg and Cape Town, or looking to escape the city rush, our guesthouse combines centuries of warm Cape hospitality with modern 4-star comforts.
            </motion.p>

            {/* Structured Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#2F5D50]/10 text-[#2F5D50] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-brand-dark uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-brand-gold/10"
            >
              <button
                onClick={onBookClick}
                className="bg-[#2F5D50] hover:bg-brand-green-light text-white font-medium text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-98 text-center cursor-pointer"
              >
                Book Your Bed Tonight
              </button>
              
              <div className="flex items-center gap-1 text-slate-500 justify-center">
                <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                <span className="text-xs font-sans font-medium text-brand-dark ml-2">4.9/5 Guest Average</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
