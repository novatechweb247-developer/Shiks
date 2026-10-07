import React from 'react';
import { PRESS_QUOTES } from '../data/fashionData';
import { MediaImage } from './MediaImage';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white border-b border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Kicker */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-purple-700" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-900">
              MAISON SIX HERITAGE & MANIFESTO
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
            THE ARCHITECTURE OF MODERN REGALITY
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Six Fashion was founded on a singular aesthetic postulate: that modern luxury must command attention not through loud embellishment, but through structural audacity, pure alabaster planes, and deep imperial purple tones.
          </p>
        </div>

        {/* 2-Column Split: Visual & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left: Editorial Image Composite */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] bg-zinc-100 overflow-hidden shadow-xl border border-zinc-100">
              <MediaImage
                src="/images/DTO_3524.jpeg"
                alt="Six Fashion Atelier"
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
                "Every lapel is molded by hand; every drape honors the natural weight of silk."
              </p>
            </div>
          </div>

          {/* Right: 3 Manifesto Pillars */}
          <div className="lg:col-span-6 space-y-10">
            <div className="border-l-2 border-purple-900 pl-6 space-y-2">
              <div className="text-xs uppercase tracking-[0.25em] text-purple-800 font-bold">
                01. ARCHITECTURAL DRAPERY
              </div>
              <h3 className="font-cinzel text-xl font-bold text-zinc-900">
                Structure Without Rigidity
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                We reject shapeless garments. Our tailoring borrows mathematics from monumental architecture—cinched waistlines, cantilevered peak lapels, and flowing silk trains engineered to articulate power.
              </p>
            </div>

            <div className="border-l-2 border-purple-900 pl-6 space-y-2">
              <div className="text-xs uppercase tracking-[0.25em] text-purple-800 font-bold">
                02. THE AMETHYST CODE
              </div>
              <h3 className="font-cinzel text-xl font-bold text-zinc-900">
                White Clarity Meets Imperial Violet
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Historically reserved for sovereigns, purple represents creative intellect and unapologetic presence. By contrasting deep violet velvets against stark optic white, Six Fashion establishes an unmistakable visual identity.
              </p>
            </div>

            <div className="border-l-2 border-purple-900 pl-6 space-y-2">
              <div className="text-xs uppercase tracking-[0.25em] text-purple-800 font-bold">
                03. BESPOKE INTEGRITY
              </div>
              <h3 className="font-cinzel text-xl font-bold text-zinc-900">
                Artisanal European Production
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Zero mass-market excess. Our collections are released in numbered editions with dedicated made-to-measure commissions available for our global clientele.
              </p>
            </div>
          </div>
        </div>

        {/* Press Quotes Ticker */}
        <div className="bg-purple-50/70 border border-purple-100 p-8 sm:p-12">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.35em] text-purple-900 font-bold">
              CRITICAL ACCLAIM // GLOBAL PRESS
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
        </div>
      </div>
    </section>
  );
};
