/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { FeaturedCollections } from './components/FeaturedCollections';
import { ProductCatalog } from './components/ProductCatalog';
import { RunwayLookbook } from './components/RunwayLookbook';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { BoutiquesSection } from './components/BoutiquesSection';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { BespokeAppointmentModal } from './components/BespokeAppointmentModal';
import { PRODUCTS } from './data/fashionData';
import { Product, CartItem } from './types/fashion';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Starter curated item in the luxury bag
    {
      product: PRODUCTS[0],
      selectedSize: 'FR 36 (S)',
      selectedColor: 'Royal Amethyst',
      quantity: 1
    }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['six-02', 'six-07']);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Drawers & Modals State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Cart Handlers
  const handleAddToCart = (product: Product, size?: string, color?: string, quantity: number = 1) => {
    const chosenSize = size || product.sizes[0] || 'FR 36 (S)';
    const chosenColor = color || product.colors[0]?.name || 'Royal Amethyst';

    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === chosenSize && item.selectedColor === chosenColor
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      } else {
        return [...prev, { product, selectedSize: chosenSize, selectedColor: chosenColor, quantity }];
      }
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    setCartItems((prev) => {
      const next = [...prev];
      if (newQty <= 0) {
        next.splice(index, 1);
      } else {
        next[index].quantity = newQty;
      }
      return next;
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Wishlist Handlers
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  // Navigation handlers
  const handleHeroCta = (target: string) => {
    if (target.startsWith('#')) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    const catEl = document.querySelector('#catalog');
    if (catEl) catEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    const catEl = document.querySelector('#catalog');
    if (catEl) catEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickViewById = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) setQuickViewProduct(prod);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        activeSection="home"
      />

      <main className="flex-1">
        {/* HERO SECTION — EXACTLY 3 SLIDES */}
        <Hero
          onCtaClick={handleHeroCta}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />

        {/* Marquee Banner */}
        <MarqueeBanner />

        {/* Featured Capsules / Collections */}
        <FeaturedCollections onSelectCategory={handleSelectCategory} />

        {/* Main Product Catalog */}
        <ProductCatalog
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* Shop The Runway Lookbook */}
        <RunwayLookbook onQuickViewProductById={handleQuickViewById} />

        {/* Maison Six Philosophy & Atelier Story */}
        <BrandPhilosophy />

        {/* Global Boutiques & Flagship Salons */}
        <BoutiquesSection onOpenAppointment={() => setIsAppointmentOpen(true)} />

        {/* Social Media Energy (@SIXFASHION) */}
        <InstagramFeed />
      </main>

      {/* Luxury Footer */}
      <Footer
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={(p) => handleAddToCart(p)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Bespoke VIP Appointment Modal */}
      <BespokeAppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={() => setCartItems([])}
      />

      {/* Floating Scroll-to-Top Button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-30 p-3 bg-purple-950 text-white rounded-full shadow-xl hover:bg-purple-900 hover:scale-105 transition-all border border-purple-800/50 cursor-pointer"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
