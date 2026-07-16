import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Compass } from 'lucide-react';
import { GALLERY_DATA } from '../data';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'gardens' | 'dining' | 'exterior'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filters = [
    { value: 'all', label: 'All Images' },
    { value: 'rooms', label: 'Luxury Rooms' },
    { value: 'gardens', label: 'Gardens & Pool' },
    { value: 'dining', label: 'Country Dining' },
    { value: 'exterior', label: 'Estate Exterior' },
  ];

  // Filtered dataset
  const filteredGallery = GALLERY_DATA.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex === null) return;
    const prevIndex = selectedImageIndex === 0 ? filteredGallery.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(prevIndex);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex === null) return;
    const nextIndex = selectedImageIndex === filteredGallery.length - 1 ? 0 : selectedImageIndex + 1;
    setSelectedImageIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-white border-b border-brand-gold/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-sans font-semibold text-[#C9A66B] uppercase tracking-[0.2em] block">
            Visual Exploration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F5D50]">
            The Sanctuary in Pictures
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            Take a visual tour around our lush manicured gardens, warm sandstone fireplaces, inviting crystal waters, and historical Colesberg guesthouse suites.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setActiveFilter(filter.value as any);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-[#2F5D50] text-white shadow-md border border-brand-green'
                  : 'bg-[#FBF9F6] text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (with beautiful motion and transitions) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-100 aspect-square shadow-sm border border-brand-gold/5"
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Overlay on Hover */}
                <div className="absolute inset-0 bg-[#2F5D50]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10 text-white">
                  <div className="self-end bg-white/15 backdrop-blur-md p-2 rounded-lg">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-[#C9A66B] font-semibold">
                      {item.category}
                    </span>
                    <p className="font-serif text-sm sm:text-base text-slate-100 leading-tight">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
              {/* Overlay Background */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImageIndex(null)}
                className="absolute inset-0"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Selector Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 z-10 bg-white/5 hover:bg-white/15 text-white p-3.5 rounded-full transition-colors cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Content Holder */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center z-10 select-none"
              >
                <img
                  src={filteredGallery[selectedImageIndex].url}
                  alt={filteredGallery[selectedImageIndex].caption}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Text Description Box */}
                <div className="mt-4 text-center max-w-xl px-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A66B] font-semibold font-sans">
                    {filteredGallery[selectedImageIndex].category} • {selectedImageIndex + 1} of {filteredGallery.length}
                  </span>
                  <p className="text-white text-sm sm:text-base font-serif mt-1">
                    {filteredGallery[selectedImageIndex].caption}
                  </p>
                </div>
              </motion.div>

              {/* Right Selector Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 z-10 bg-white/5 hover:bg-white/15 text-white p-3.5 rounded-full transition-colors cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
