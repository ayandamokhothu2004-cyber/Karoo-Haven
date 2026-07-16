import React from 'react';
import { motion } from 'motion/react';
import { Bed, Users, Maximize, Star, CalendarRange } from 'lucide-react';
import { ROOMS_DATA } from '../data';

interface RoomsProps {
  onBookClick: (roomId: string) => void;
}

export default function Rooms({ onBookClick }: RoomsProps) {
  return (
    <section id="rooms" className="py-24 bg-white border-b border-brand-gold/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
            viewport={{ once: true }}
            className="text-xs font-sans font-semibold text-[#C9A66B] uppercase tracking-[0.2em]"
          >
            Refined Living Spaces
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F5D50]"
          >
            Our Luxurious Guest Rooms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base font-light"
          >
            Each chamber is uniquely styled to showcase the historical Cape-Dutch heritage of Colesberg while delivering 4-star modern hospitality and pure tranquil rest.
          </motion.p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-[#FBF9F6] rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-brand-gold/10 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Image Cover */}
              <div className="relative overflow-hidden aspect-4/3 w-full bg-slate-100">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Price Tag Overlay */}
                <div className="absolute top-4 left-4 bg-[#2F5D50]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs tracking-wider uppercase font-sans font-semibold border border-brand-gold/20 shadow-md">
                  From <span className="text-[#dfc599] font-serif font-bold text-sm">R {room.price.toLocaleString()}</span> / Night
                </div>

                {/* Rating Badge Overlay */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-brand-dark px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 shadow-sm border border-slate-100">
                  <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                  <span>{room.rating}</span>
                </div>
              </div>

              {/* Room Body Details */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark group-hover:text-[#2F5D50] transition-colors leading-tight">
                    {room.name}
                  </h3>
                  
                  {/* Key dimensions and stats */}
                  <div className="flex items-center gap-4 text-xs font-sans text-slate-500 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-1">
                      <Maximize className="w-3.5 h-3.5 text-[#C9A66B]" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C9A66B]" />
                      <span>{room.guests}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-[#C9A66B]" />
                      <span>Rest assured</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                    {room.description}
                  </p>
                </div>

                {/* Individual Room Amenities */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {room.amenities.slice(0, 4).map((amenity, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] sm:text-xs bg-white text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full font-sans"
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="text-[10px] sm:text-xs text-brand-gold font-medium bg-brand-gold/5 px-2 py-0.5 rounded-full border border-brand-gold/10">
                        +{room.amenities.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onBookClick(room.id)}
                      className="w-full bg-[#2F5D50] hover:bg-brand-green-light group-hover:bg-[#C9A66B] text-white group-hover:text-brand-dark py-3 rounded-lg font-medium tracking-wider text-xs uppercase shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <CalendarRange className="w-3.5 h-3.5" />
                      Book Accommodation
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
