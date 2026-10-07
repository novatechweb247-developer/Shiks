import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAppointment: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAppointment,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Catalog', href: '#catalog' },
    { name: 'The Runway', href: '#runway' },
    { name: 'The Lookbook', href: '#lookbook' },
    { name: 'Atelier Story', href: '#story' },
    { name: 'Boutiques', href: '#boutiques' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Luxury Announcement Ticker */}
      <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-zinc-950 text-white text-[11px] tracking-[0.25em] uppercase py-2 px-4 font-medium transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2 text-purple-200">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping inline-block"></span>
            <span>AUTUMN / WINTER 2026 COUTURE RUNWAY</span>
          </div>
          <div className="mx-auto md:mx-0 text-center font-light tracking-[0.2em] text-white/95">
            Complimentary White-Glove Couture Shipping Worldwide · VIP Appointments in London, Paris & NY
          </div>
          <div className="hidden md:flex items-center gap-4 text-purple-200 text-[10px]">
            <button 
              onClick={onOpenAppointment}
              className="hover:text-white transition-colors cursor-pointer underline underline-offset-4 decoration-purple-400"
            >
              Book Atelier
            </button>
            <span className="text-purple-600">|</span>
            <span className="text-white/80">EN / USD ($)</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-purple-100/60 py-3.5'
            : 'bg-white py-5 border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile menu button & Desktop Nav */}
            <div className="flex items-center gap-8">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zinc-900 hover:text-purple-700 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <nav className="hidden lg:flex items-center gap-7">
                {navLinks.slice(0, 3).map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-xs uppercase tracking-[0.22em] text-zinc-800 hover:text-purple-700 font-medium transition-colors relative py-1 group cursor-pointer"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-purple-700 transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-cinzel text-2xl sm:text-3xl lg:text-3xl font-extrabold tracking-[0.28em] text-zinc-950 flex items-center gap-1.5">
                SIX
                <span className="w-1.5 h-1.5 bg-purple-700 inline-block mb-1"></span>
              </span>
              <span className="text-[9px] tracking-[0.45em] text-purple-900 uppercase font-semibold -mt-0.5">
                FASHION
              </span>
            </div>

            {/* Right: Secondary Nav + Utility Actions */}
            <div className="flex items-center gap-4 sm:gap-6">
              <nav className="hidden lg:flex items-center gap-7 mr-2">
                {navLinks.slice(3).map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-xs uppercase tracking-[0.22em] text-zinc-800 hover:text-purple-700 font-medium transition-colors relative py-1 group cursor-pointer"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-purple-700 transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </nav>

              {/* VIP Appointment CTA on desktop */}
              <button
                onClick={onOpenAppointment}
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 border border-purple-900/20 text-purple-900 hover:bg-purple-950 hover:text-white transition-all text-[11px] font-semibold tracking-[0.18em] uppercase cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Atelier VIP</span>
              </button>

              {/* Search Icon */}
              <button
                onClick={onOpenSearch}
                aria-label="Search collection"
                className="p-2 text-zinc-800 hover:text-purple-700 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={onOpenWishlist}
                aria-label="Wishlist"
                className="p-2 text-zinc-800 hover:text-purple-700 transition-colors relative cursor-pointer"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-purple-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Drawer Trigger */}
              <button
                onClick={onOpenCart}
                aria-label="Shopping Bag"
                className="p-2 text-zinc-900 hover:text-purple-700 transition-colors relative flex items-center gap-1.5 cursor-pointer"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 sm:w-5 sm:h-5 stroke-[1.6]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-purple-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline-block text-[11px] font-medium tracking-widest text-zinc-700">
                  BAG
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-purple-100 shadow-xl p-6 transition-all">
            <div className="flex flex-col space-y-4">
              <div className="pb-3 border-b border-zinc-100 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-purple-900 font-bold">Navigation</span>
                <span className="text-[10px] text-zinc-400">MAISON SIX</span>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 text-sm uppercase tracking-[0.2em] font-medium text-zinc-900 hover:text-purple-700 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full py-3 bg-purple-950 text-white text-center text-xs uppercase tracking-[0.2em] font-medium hover:bg-purple-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-purple-300" />
                  <span>Book Private Salon Session</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
