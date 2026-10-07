import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';
import { LOOKBOOK_ITEMS } from '../data/fashionData';
import { LookbookItem, Product } from '../types/fashion';
import { MediaImage } from './MediaImage';

interface RunwayLookbookProps {
  onQuickViewProductById: (productId: string) => void;
}

export const RunwayLookbook: React.FC<RunwayLookbookProps> = ({ onQuickViewProductById }) => {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const activeLook = LOOKBOOK_ITEMS[activeLookIndex];

  return (
    <section id="runway" className="py-20 lg:py-28 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-zinc-800 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-purple-400" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-300">
                HAUTE COUTURE RUNWAY ARCHIVE
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white">
              SHOP THE RUNWAY
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-md">
            Click garment hotspots directly on the runway models to inspect atelier construction, fabrics, and direct salon orders.
          </p>
        </div>

        {/* Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive Model Visual with Hotspots (Cols 7) */}
          <div className="lg:col-span-7 relative aspect-[3/4] max-h-[720px] bg-zinc-900 overflow-hidden shadow-2xl border border-purple-900/30">
            <MediaImage
              src={activeLook.image}
              alt={activeLook.title}
              className="w-full h-full object-cover object-top filter brightness-95"
              containerClassName="w-full h-full"
            />

            {/* Look Tag */}
            <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 border border-purple-500/30 text-[10px] tracking-[0.25em] font-bold text-white uppercase">
              {activeLook.lookNumber} · {activeLook.season}
            </div>

            {/* Interactive Hotspots */}
            {activeLook.hotspots.map((spot, idx) => (
              <div
                key={idx}
                style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
              >
                {/* Pulsing ring */}
                <button
                  type="button"
                  onClick={() => onQuickViewProductById(spot.productId)}
                  aria-label={`View ${spot.title}`}
                  className="relative w-8 h-8 rounded-full bg-purple-600/80 backdrop-blur-md text-white flex items-center justify-center border border-white hover:scale-125 transition-all shadow-lg cursor-pointer"
                >
                  <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75" />
                  <span className="w-2 h-2 rounded-full bg-white relative z-10" />
                </button>

                {/* Hotspot Floating Tooltip Card */}
                <div 
                  onClick={() => onQuickViewProductById(spot.productId)}
                  className="absolute left-10 top-1/2 -translate-y-1/2 w-56 bg-zinc-900/95 backdrop-blur-xl border border-purple-500/40 p-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto cursor-pointer"
                >
                  <div className="text-[9px] uppercase tracking-[0.2em] text-purple-300 font-semibold mb-0.5">
                    Garment Highlight
                  </div>
                  <div className="text-xs font-bold text-white font-cinzel line-clamp-1">
                    {spot.title}
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-800 text-xs">
                    <span className="font-semibold text-purple-200">${spot.price.toLocaleString()}</span>
                    <span className="text-[10px] uppercase tracking-wider text-white underline flex items-center gap-1">
                      Quick View <Eye className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Look Details & Selector Carousel (Cols 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-400">
                {activeLook.model}
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                {activeLook.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {activeLook.description}
              </p>
            </div>

            {/* Featured Items inside this look */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-purple-300 font-semibold block">
                Garments Featured on Runway:
              </span>
              <div className="space-y-2">
                {activeLook.hotspots.map((spot, idx) => (
                  <div
                    key={idx}
                    onClick={() => onQuickViewProductById(spot.productId)}
                    className="p-3 bg-zinc-900/80 border border-zinc-800 hover:border-purple-600 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {spot.title}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        ${spot.price.toLocaleString()} · Ready for Salon Fitting
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-400 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>

            {/* Look Selector Pills */}
            <div className="pt-4 border-t border-zinc-800">
              <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Select Runway Look:
              </div>
              <div className="grid grid-cols-4 gap-2">
                {LOOKBOOK_ITEMS.map((item, index) => {
                  const isActive = index === activeLookIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveLookIndex(index)}
                      className={`p-2 text-center text-xs font-cinzel font-semibold tracking-wider transition-all cursor-pointer border ${
                        isActive
                          ? 'border-purple-500 bg-purple-950 text-white shadow-md'
                          : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      {item.lookNumber}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
