import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BRAND_INFO } from '../data/fashionData';
import { MediaImage } from './MediaImage';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-white border-b border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Founder Portrait & Award Honors with Scroll Pop */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] bg-zinc-100 overflow-hidden shadow-2xl border border-purple-200/80">
              <MediaImage
                src="/images/ELS_9208.jpg"
                alt="Maryam Sadiq Shikra"
                className="w-full h-full object-cover object-top"
                containerClassName="w-full h-full"
              />
            </div>

            {/* Overlapping Gold Award Banner */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-purple-950 to-purple-900 text-white p-5 sm:p-6 shadow-2xl border border-purple-600/40 max-w-xs">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-semibold mb-1">
                <Award className="w-4 h-4 text-purple-400" />
                <span>MULTIPLE AWARD WINNER</span>
              </div>
              <p className="font-cinzel text-xs font-bold text-white tracking-wider">
                BEST FASHION SCHOOL IN PLATEAU STATE
              </p>
              <p className="text-[10px] text-zinc-300 font-light mt-1">
                Youth Empowerment Merit Award · Stylist & Designer of the Year
              </p>
            </div>
          </motion.div>

          {/* Right: Founder Narrative & Leadership Credentials with Scroll Pop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-purple-700" />
                <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-900">
                  MEET THE FOUNDER & CEO
                </span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
                MARYAM SADIQ SHIKRA
              </h2>
              <p className="text-sm font-medium text-purple-900 uppercase tracking-widest">
                Fashion Enterprise Development Advocate · Entrepreneur · Educator
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
              Maryam Sadiq Shikra holds a degree in Business Administration and Entrepreneurship from Bayero University, Kano (2014, NYSC 2015). Under her stewardship, Shiks Fashion & Innovation Hub has established itself as Nigeria's preeminent fashion training academy and enterprise development engine.
            </p>

            {/* Leadership Record */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-700">
                  <strong className="text-zinc-950">Former President, Plateau Fashion Designers Association (PLAFDA):</strong> Facilitated industrial machinery acquisition from SMEDAN, grant support and equipment via PLASMIDA and NG CARES for emerging designers.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-700">
                  <strong className="text-zinc-950">Public Relations Officer, NASME:</strong> Championing MSME expansion and federal policies across the small and medium enterprise sector in Nigeria.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-700">
                  <strong className="text-zinc-950">Lady President, ASNAT:</strong> Spearheading national advancement for artisans and technical craftswomen in Nigeria.
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="p-4 bg-purple-50/60 border-l-2 border-purple-800 text-xs sm:text-sm italic font-cormorant text-zinc-800">
              "The real measure of a skills programme is not only how many people are trained, but how many are able to use their skills to earn, produce and create opportunities for others."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
