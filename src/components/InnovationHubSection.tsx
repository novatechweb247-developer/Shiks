import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Briefcase, Factory, Award, Users, CheckCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_INFO, ECOSYSTEM_PARTNERS, SHIKS_PROGRAMS } from '../data/fashionData';
import { MediaImage } from './MediaImage';

interface InnovationHubSectionProps {
  onOpenAppointment: () => void;
}

export const InnovationHubSection: React.FC<InnovationHubSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="hub" className="py-24 bg-[#faf8fc] border-b border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Pop-Up */}
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
              INSTITUTIONAL COMPENDIUM // EST. 2016
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            THE SHIK'S 3-IN-1 MODEL
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            Bridging the gap between vocational training and commercially viable enterprise. Shiks Fashion & Innovation Hub in Jos, Plateau State, powers a proven pathway from technical competence to sustainable enterprise.
          </p>
        </motion.div>

        {/* 3 Pillars Grid with Staggered Scroll Pop-Up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1: Training Centre */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-4 relative group"
          >
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-900">
              <Scissors className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-purple-700 font-bold block">
              PILLAR 01 // ACADEMY
            </span>
            <h3 className="font-cinzel text-xl font-bold text-zinc-900">
              Training Centre
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
              Practical fashion, textile, pattern making, and garment-construction skills on industrial machinery leading to technical competence and mastery.
            </p>
            <div className="pt-2 border-t border-zinc-100 text-xs text-purple-900 font-medium">
              Over 500+ individuals trained since 2016
            </div>
          </motion.div>

          {/* Pillar 2: Incubation Centre */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-purple-950 text-white p-8 border border-purple-900 shadow-md transition-all space-y-4 relative group"
          >
            <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center text-purple-300">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-purple-300 font-bold block">
              PILLAR 02 // ENTERPRISE
            </span>
            <h3 className="font-cinzel text-xl font-bold text-white">
              Incubation Centre
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Professional workspace, equipment access, technical guidance, business planning, and enterprise clinics to ensure readiness and commercial survival.
            </p>
            <div className="pt-2 border-t border-purple-900 text-xs text-purple-200 font-medium">
              Mentorship, market access & industry linkages
            </div>
          </motion.div>

          {/* Pillar 3: Production Hub */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-4 relative group"
          >
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-900">
              <Factory className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-purple-700 font-bold block">
              PILLAR 03 // MANUFACTURING
            </span>
            <h3 className="font-cinzel text-xl font-bold text-zinc-900">
              Production Hub
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
              Ready-to-wear lines, bespoke bridal dresses, custom uniforms, modest abayas, and luxury home duvets fulfilling large institutional contracts.
            </p>
            <div className="pt-2 border-t border-zinc-100 text-xs text-purple-900 font-medium">
              Generating income & sustainable employment
            </div>
          </motion.div>
        </div>

        {/* The Core Proposition Banner with Scroll Pop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white border border-purple-200/80 p-6 sm:p-8 mb-20 shadow-xs"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-purple-900 mb-2">
            THE CORE PROPOSITION
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-cinzel text-xs sm:text-sm font-bold text-zinc-900 uppercase">
            <span>SKILLS</span>
            <span className="text-purple-600">→</span>
            <span>BUSINESS READINESS</span>
            <span className="text-purple-600">→</span>
            <span>PRODUCTIVE SUPPORT</span>
            <span className="text-purple-600">→</span>
            <span>PRODUCTION</span>
            <span className="text-purple-600">→</span>
            <span>MARKET</span>
            <span className="text-purple-600">→</span>
            <span>INCOME</span>
            <span className="text-purple-600">→</span>
            <span className="text-purple-800">JOBS</span>
          </div>
        </motion.div>

        {/* Proposed Shared Production Facility & Summit Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-purple-700 font-bold">
                STRATEGIC PROPOSAL // ₦119,000,000 INFRASTRUCTURE
              </span>
              <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-zinc-950">
                PROPOSED SHARED PRODUCTION FACILITY
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-light">
                Reducing the prohibitive capital barrier for emerging Nigerian fashion designers. The facility features 80 industrial straight-stitch machines, overlock and coverstitch units, computerized embroidery, and laser cutting.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 border border-purple-100">
                <span className="font-cinzel text-2xl font-bold text-purple-950 block">80+</span>
                <span className="text-xs text-zinc-600 font-light">Industrial Straight Machines</span>
              </div>
              <div className="bg-white p-4 border border-purple-100">
                <span className="font-cinzel text-2xl font-bold text-purple-950 block">3-in-1</span>
                <span className="text-xs text-zinc-600 font-light">Training, Incubation & Production</span>
              </div>
              <div className="bg-white p-4 border border-purple-100">
                <span className="font-cinzel text-2xl font-bold text-purple-950 block">2027</span>
                <span className="text-xs text-zinc-600 font-light">Alumni Impact Summit (Jan 9)</span>
              </div>
              <div className="bg-white p-4 border border-purple-100">
                <span className="font-cinzel text-2xl font-bold text-purple-950 block">500+</span>
                <span className="text-xs text-zinc-600 font-light">Alumni & Women Empowered</span>
              </div>
            </div>

            <button
              onClick={onOpenAppointment}
              className="px-6 py-3.5 bg-purple-950 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-purple-900 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span>Inquire for Sponsorship & Partnerships</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative aspect-[4/3] bg-zinc-100 overflow-hidden shadow-xl border border-purple-100"
          >
            <MediaImage
              src="/images/IMG_9722.jpg"
              alt="Shared Production Facility"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
                ALUMNI IMPACT SUMMIT
              </span>
              <h4 className="font-cinzel text-xl font-bold">
                Runway Showcase, Business Pitching & Support
              </h4>
            </div>
          </motion.div>
        </div>

        {/* Institutional Ecosystem Partners Marquee */}
        <div className="pt-8 border-t border-purple-100">
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">
              PROGRAMME & ECOSYSTEM ENGAGEMENTS
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {ECOSYSTEM_PARTNERS.map((partner, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-white border border-purple-100 text-zinc-700 text-xs font-medium tracking-wide shadow-2xs"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
