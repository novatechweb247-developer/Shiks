import React from 'react';
import { motion } from 'motion/react';
import { PRESS_QUOTES, BRAND_INFO } from '../data/fashionData';
import { MediaImage } from './MediaImage';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white border-b border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Kicker with Scroll Pop */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-purple-700" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-900">
              SHIKS FASHION HERITAGE & MANIFESTO
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
            THE ARCHITECTURE OF MODERN REGALITY
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Founded in Jos, Plateau State, Shiks Fashion stands on a transformative principle: vocational training must translate directly into industrial production capacity, sustainable income, and dignified job creation.
          </p>
        </motion.div>

        {/* 2-Column Split: Visual & Pillars with Scroll Pop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left: Editorial Image Composite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/5] bg-zinc-100 overflow-hidden shadow-xl border border-zinc-100">
              <MediaImage
                src="/images/DTO_3524.jpeg"
                alt="Shiks Fashion Atelier"
                className="w-full h-full object-cover object-center"
                containerClassName="w-full h-full"
              />
            </div>
            {/* Overlapping small accent card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-purple-950 text-white p-6 sm:p-8 max-w-xs shadow-2xl border border-purple-800 hidden sm:block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-purple-300 font-semibold block mb-2">
                ATELIER STANDARD
              </span>
              <p className="font-cormorant text-xl italic leading-snug">
                "From initial sketch to industrial finish: closing the gap between skills and commercial viability."
              </p>
            </div>
          </motion.div>

          {/* Right: 3 Manifesto Pillars with Staggered Scroll Pop */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="border-l-2 border-purple-900 pl-6 space-y-2"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-purple-800 font-bold">
                01. ARCHITECTURAL DRAPERY & BRIDAL
              </div>
              <h3 className="font-cinzel text-xl font-bold text-zinc-900">
                Structure, Veils & Reception Couture
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Specialists in reception and bridal dresses. We engineer custom internal boning and fluid drapery that command attention at ceremonial occasions and high-profile galas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-l-2 border-purple-900 pl-6 space-y-2"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-purple-800 font-bold">
                02. THE AMETHYST & ALABASTER CODE
              </div>
              <h3 className="font-cinzel text-xl font-bold text-zinc-900">
                White Purity Meets Imperial Violet
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                The visual signature of Shiks Fashion: deep purple velvets contrasting against stark optic whites. A sovereign aesthetic paired with modest elegance and modern silhouettes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-2 border-purple-900 pl-6 space-y-2"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-purple-800 font-bold">
                03. ENTERPRISE INCUBATION
              </div>
              <h3 className="font-cinzel text-xl font-bold text-zinc-900">
                Building Self-Sustaining Producers
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                We empower youth and women through practical fashion, computerized embroidery, and shared industrial infrastructure—creating viable businesses rather than temporary trainees.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Press Quotes Ticker with Scroll Pop */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-purple-50/70 border border-purple-100 p-8 sm:p-12"
        >
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.35em] text-purple-900 font-bold">
              AWARD RECOGNITIONS & CITATIONS
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-purple-200">
            {PRESS_QUOTES.map((item, idx) => (
              <div key={idx} className="px-4 pt-6 md:pt-0 space-y-3">
                <p className="font-cormorant text-lg sm:text-xl text-zinc-800 italic leading-snug">
                  "{item.quote}"
                </p>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-purple-950 font-cinzel">
                  {item.publication}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
