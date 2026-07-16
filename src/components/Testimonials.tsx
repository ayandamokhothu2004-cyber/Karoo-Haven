import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star, User } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoCycle = () => {
    stopAutoCycle();
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds per review
  };

  const stopAutoCycle = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoCycle();
    return () => stopAutoCycle();
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-[#2F5D50] text-white border-b border-brand-gold/20 overflow-hidden relative"
      onMouseEnter={stopAutoCycle}
      onMouseLeave={startAutoCycle}
    >
      {/* Absolute decorative design elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green-dark/30 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Quote Icon */}
        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner text-[#C9A66B]">
          <Quote className="w-6 h-6 rotate-180 fill-current" />
        </div>

        {/* Dynamic Slidings */}
        <div className="relative h-[250px] sm:h-[180px] md:h-[160px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute w-full space-y-4"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A66B] text-[#C9A66B]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-100 italic max-w-3xl mx-auto">
                "{currentTestimonial.text}"
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Reviewer Details (separate transition to remain smooth and stable) */}
        <div className="mt-8 space-y-1">
          <p className="font-sans font-semibold text-[#dfc599] tracking-wider uppercase text-sm">
            {currentTestimonial.name}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-sans">
            <span>{currentTestimonial.origin}</span>
            <span className="text-[#C9A66B]">•</span>
            <span>{currentTestimonial.date}</span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-white text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-[#C9A66B] w-6' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-white text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
