import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 700);
          }, 300);
          return 100;
        }
        // Smooth non-linear progress acceleration
        const increment = prev < 50 ? 5 : prev < 85 ? 7 : 4;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0a0512] text-white flex flex-col justify-between p-8 sm:p-12 select-none"
        >
          {/* Top Bar: Established & Coordinates */}
          <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-purple-300 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
              <span>EST. 2016 · JOS, NIGERIA</span>
            </div>
            <button
              onClick={() => {
                setIsDone(true);
                setTimeout(onComplete, 300);
              }}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer underline underline-offset-4"
            >
              SKIP INTRO [ESC]
            </button>
          </div>

          {/* Center: Brand Crest & Counter */}
          <div className="max-w-xl mx-auto w-full text-center space-y-6">
            {/* Glowing Monogram Emblem */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative inline-flex items-center justify-center w-24 h-24 mx-auto"
            >
              <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-2xl animate-pulse-glow" />
              <div className="relative w-20 h-20 border border-purple-400/40 rounded-full flex items-center justify-center bg-purple-950/40 backdrop-blur-md">
                <span className="font-cinzel text-3xl font-black tracking-widest text-white">
                  S
                </span>
                <span className="w-1.5 h-1.5 bg-purple-400 absolute bottom-4 right-5 rounded-full" />
              </div>
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-2"
            >
              <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.25em] text-white">
                SHIKS FASHION
              </h1>
              <p className="text-xs uppercase tracking-[0.4em] text-purple-300 font-medium">
                INNOVATION HUB & HAUTE COUTURE
              </p>
            </motion.div>

            {/* Large Tabular Percentage Display */}
            <div className="pt-4">
              <span className="font-cinzel text-5xl sm:text-6xl font-light tabular-nums tracking-wider text-purple-100">
                {progress.toString().padStart(2, '0')}%
              </span>
            </div>

            {/* Luxury Minimalist Progress Line */}
            <div className="w-full max-w-xs mx-auto h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-purple-300 to-white"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          {/* Bottom Kicker */}
          <div className="text-center text-[10px] tracking-[0.35em] uppercase text-zinc-400 font-light max-w-md mx-auto">
            BUILDING SKILLS · CREATING OPPORTUNITIES · SHAPING THE FUTURE OF FASHION
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
