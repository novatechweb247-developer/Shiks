import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { BOUTIQUES, BRAND_INFO } from '../data/fashionData';
import { MediaImage } from './MediaImage';

interface BoutiquesSectionProps {
  onOpenAppointment: () => void;
}

export const BoutiquesSection: React.FC<BoutiquesSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="boutiques" className="py-24 bg-[#faf9fc] border-b border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Pop */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 space-y-3"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-purple-700" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-900">
              PHYSICAL LOCATIONS & SALONS
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            FLAGSHIP HUB & SALONS
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-light">
            Visit our primary facility in Jos, Plateau State, or reserve private styling sessions with our bridal couture team.
          </p>
        </motion.div>

        {/* Boutiques 4-column cards with Staggered Scroll Pop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOUTIQUES.map((b, idx) => (
            <motion.div
              key={b.city}
              initial={{ opacity: 0, y: 45, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-purple-100/80 shadow-xs overflow-hidden flex flex-col justify-between group hover:border-purple-300 transition-all"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <MediaImage
                    src={b.image}
                    alt={`${b.city} Salon`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-950 text-white text-[9px] font-bold tracking-[0.25em] uppercase px-2.5 py-1">
                    {b.city}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-zinc-950">
                      {b.district}
                    </h3>
                    <div className="flex items-start gap-1.5 text-xs text-zinc-500 mt-1 font-light">
                      <MapPin className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                      <span>{b.address}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-zinc-600 border-t border-zinc-100 pt-3">
                    <div className="flex items-start gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                      <span className="text-[11px]">{b.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                      <span className="text-[11px] font-mono">{b.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="w-full py-2.5 border border-purple-900/30 text-purple-950 hover:bg-purple-950 hover:text-white text-[10px] uppercase tracking-[0.18em] font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Book Fitting</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
