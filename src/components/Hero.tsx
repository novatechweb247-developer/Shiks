import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, Pause, Play } from 'lucide-react';
import { HERO_SLIDES } from '../data/fashionData';
import { MediaImage } from './MediaImage';

interface HeroProps {
  onCtaClick: (target: string) => void;
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onOpenAppointment }) => {
  // STRICT RULE: EXACTLY 3 SLIDES ONLY
  const slides = HERO_SLIDES.slice(0, 3);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<number | null>(null);

  const SLIDE_DURATION = 6500; // ms per slide

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlideIndex, isAutoPlaying]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <section className="relative w-full h-[88vh] min-h-[620px] max-h-[920px] bg-zinc-950 text-white overflow-hidden select-none">
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide.id}
          custom={direction}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Fashion Image with Ken Burns drift */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 7, ease: "linear" }}
            className="w-full h-full"
          >
            <MediaImage
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08]"
              containerClassName="w-full h-full"
            />
          </motion.div>

          {/* Luxury Editorial Gradient Overlays (Pure White + Royal Purple + Obsidian) */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-purple-950/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-purple-950/30 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-purple-900/10 to-zinc-950/60" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Haute Couture Watermark / Brand Accent */}
      <div className="absolute top-10 right-8 lg:right-16 pointer-events-none z-10 hidden sm:block">
        <div className="flex flex-col items-end opacity-40">
          <span className="text-[10px] uppercase tracking-[0.4em] font-light text-purple-200">
            MAISON SIX // COLLECTION 2026
          </span>
          <span className="font-cinzel text-5xl font-black tracking-widest text-white/10 mt-1">
            0{currentSlideIndex + 1}
          </span>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-24 sm:pb-28">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    staggerChildren: 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }
                },
                exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
              }}
              className="space-y-4 sm:space-y-5"
            >
              {/* Kicker tag */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -15 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-center gap-3"
              >
                <span className="w-8 h-[1px] bg-purple-400" />
                <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-300">
                  {currentSlide.kicker}
                </span>
                <span className="text-purple-400/60 text-xs hidden sm:inline">·</span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/70 hidden sm:inline">
                  {currentSlide.highlightCategory}
                </span>
              </motion.div>

              {/* Slide Title */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-sm"
              >
                {currentSlide.title}
              </motion.h1>

              {/* Subtitle / Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl leading-relaxed tracking-wide drop-shadow-xs"
              >
                {currentSlide.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6"
              >
                {/* Primary CTA */}
                <button
                  onClick={() => onCtaClick(currentSlide.ctaTarget)}
                  className="px-8 py-3.5 bg-white text-zinc-950 hover:bg-purple-600 hover:text-white transition-all duration-300 text-xs font-semibold uppercase tracking-[0.22em] shadow-lg flex items-center gap-3 group cursor-pointer"
                >
                  <span>{currentSlide.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                {/* Secondary Atelier Action */}
                <button
                  onClick={onOpenAppointment}
                  className="px-6 py-3.5 border border-purple-300/40 text-purple-100 hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-xs flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                  <span>Book Private Atelier</span>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Bar: Exact 3 Slide Indicators + Navigation Controls */}
      <div className="absolute bottom-6 inset-x-0 z-30 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* EXACT 3 SLIDE INDICATORS (01, 02, 03) */}
        <div className="flex items-center gap-4 sm:gap-8">
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className="group flex flex-col items-start gap-1 text-left cursor-pointer transition-opacity"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-cinzel font-semibold tracking-widest transition-colors ${
                      isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    {slide.slideNumber}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] hidden md:inline transition-colors ${
                      isActive ? 'text-purple-300 font-medium' : 'text-zinc-500 group-hover:text-zinc-400'
                    }`}
                  >
                    {idx === 0 ? 'Brand Vision' : idx === 1 ? 'Velvet Evening' : 'Bespoke Atelier'}
                  </span>
                </div>

                {/* Progress Line */}
                <div className="w-12 sm:w-20 lg:w-28 h-[2px] bg-white/20 relative overflow-hidden rounded-full">
                  {isActive && (
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: isAutoPlaying ? SLIDE_DURATION / 1000 : 0,
                        ease: 'linear'
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 to-white"
                    />
                  )}
                  {!isActive && (
                    <div className="w-0 group-hover:w-full h-full bg-white/40 transition-all duration-300" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Controls: Play/Pause and Next/Prev Arrows */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? "Pause slides" : "Play slides"}
            className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title={isAutoPlaying ? "Pause autoplay" : "Play autoplay"}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-2 sm:p-2.5 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-2 sm:p-2.5 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
