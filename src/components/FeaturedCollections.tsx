import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { COLLECTIONS } from '../data/fashionData';
import { MediaImage } from './MediaImage';

interface FeaturedCollectionsProps {
  onSelectCategory: (category: string) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="py-20 lg:py-28 bg-[#fdfcff] border-b border-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header with Pop-up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-purple-600" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-800">
                CURATED CAPSULES // BRIDAL & ATELIER
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
              SIGNATURE COLLECTIONS
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-light max-w-xl">
              An architectural synthesis of crisp white structures, royal purple velvets, reception bridal couture, and luxury home duvets.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-semibold text-purple-950">
            <span>THE ARCHIVES</span>
            <span className="text-zinc-300">/</span>
            <span className="text-purple-600">NEW RELEASES</span>
          </div>
        </motion.div>

        {/* Collections Editorial Grid with Staggered Pop-up Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COLLECTIONS.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectCategory(col.categoryTag)}
              className="group cursor-pointer flex flex-col transition-all"
            >
              {/* Image Container with Editorial Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 shadow-sm border border-purple-50">
                <MediaImage
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  containerClassName="w-full h-full"
                />

                {/* Subtle Purple Sheen overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white" />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[10px] tracking-[0.2em] font-semibold text-zinc-900 uppercase">
                  {col.season}
                </div>

                {/* Hover Action button bottom-right */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white text-zinc-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-purple-900" />
                </div>
              </div>

              {/* Text Info */}
              <div className="pt-4 space-y-1">
                <div className="flex items-center justify-between text-[11px] text-purple-900 font-semibold tracking-[0.2em] uppercase">
                  <span>{col.categoryTag}</span>
                  <span className="text-zinc-400 font-normal">{col.itemCount} PIECES</span>
                </div>
                <h3 className="font-cinzel text-lg font-bold text-zinc-900 group-hover:text-purple-900 transition-colors">
                  {col.name}
                </h3>
                <p className="text-xs text-zinc-600 line-clamp-2 font-light">
                  {col.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
