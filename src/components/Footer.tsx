import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenAppointment: () => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-purple-950/80">
      {/* Newsletter / Inner Circle VIP Bar */}
      <div className="border-b border-zinc-900 bg-gradient-to-r from-purple-950/60 via-zinc-950 to-purple-950/60 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-purple-300 text-xs uppercase tracking-[0.3em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Maison Six Private Circle</span>
          </div>
          <h3 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight">
            BE THE FIRST TO RECEIVE PRIVATE COUTURE DROPS
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto">
            Invitations to runway presentations, private salon fittings, and numbered capsule releases directly to your personal correspondence.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs tracking-widest uppercase">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Welcome to the Inner Circle. An invitation will be dispatched shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 pt-2">
              <input
                type="email"
                required
                placeholder="Enter your personal email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 text-xs focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-zinc-950 hover:bg-purple-600 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-bold cursor-pointer"
              >
                Join Circle
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-cinzel text-3xl font-extrabold tracking-[0.25em] text-white flex items-center gap-2">
                SIX
                <span className="w-2 h-2 bg-purple-600 inline-block"></span>
              </span>
              <span className="text-[10px] tracking-[0.45em] text-purple-300 uppercase font-semibold">
                FASHION
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              The pinnacle of contemporary Haute Couture. Architectural tailoring, pure alabaster lines, and regal royal amethyst velvet crafted for discerning vanguards across the globe.
            </p>
            <div className="text-[11px] text-purple-300 font-mono">
              PARIS · LONDON · NEW YORK · MILAN
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300 font-cinzel">
              COLLECTIONS
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-light">
              <li>
                <button onClick={() => onSelectCategory('Eveningwear')} className="hover:text-white transition-colors">
                  Eveningwear & Gala
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Suits & Tailoring')} className="hover:text-white transition-colors">
                  Architectural Tailoring
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Silk & Velvet')} className="hover:text-white transition-colors">
                  Silk & Velvet Capsules
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Runway Edit')} className="hover:text-white transition-colors">
                  Runway Statements
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Accessories')} className="hover:text-white transition-colors">
                  Fine Leather & Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* Client Concierge */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300 font-cinzel">
              CONCIERGE
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-light">
              <li>
                <button onClick={onOpenAppointment} className="hover:text-white transition-colors">
                  Book Private Salon Fitting
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Complimentary White-Glove Shipping
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Provenance & Authenticity
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Bespoke Made-to-Measure
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Private Client Styling Services
                </span>
              </li>
            </ul>
          </div>

          {/* Maison Salons */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300 font-cinzel">
              MAISON SALONS
            </h4>
            <div className="space-y-2 text-xs text-zinc-400 font-light">
              <div>
                <strong className="text-white block font-medium">Mayfair, London</strong>
                <span>34 Old Bond Street</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Saint-Honoré, Paris</strong>
                <span>18 Rue Saint-Honoré</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Madison Ave, New York</strong>
                <span>712 Madison Avenue</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} SIX FASHION ATELIER. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-300 cursor-pointer">Couture Provenance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
