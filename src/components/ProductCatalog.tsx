import React, { useState, useMemo } from 'react';
import { Eye, Heart, ShoppingBag, SlidersHorizontal, Check } from 'lucide-react';
import { Product } from '../types/fashion';
import { MediaImage } from './MediaImage';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size?: string) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds
}) => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories = ['All', 'Eveningwear', 'Suits & Tailoring', 'Silk & Velvet', 'Runway Edit', 'Accessories'];

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, selectedCategory, sortBy]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, product.sizes[0]);
    setAddedAnimationId(product.id);
    setTimeout(() => setAddedAnimationId(null), 1800);
  };

  return (
    <section id="catalog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Filter Bar */}
        <div className="border-b border-zinc-200 pb-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[1.5px] bg-purple-700" />
                <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-900">
                  HAUTE COUTURE CATALOG
                </span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
                THE ATELIER COLLECTION
              </h2>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
              <span>SHOWING {filteredProducts.length} CREATIONS</span>
              <span className="text-zinc-300">|</span>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-purple-900" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort creations by"
                  className="bg-transparent text-zinc-900 font-semibold tracking-wider uppercase text-xs focus:outline-none cursor-pointer border-b border-transparent hover:border-purple-600 pb-0.5"
                >
                  <option value="featured">Sort: Editorial Edit</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-purple-950 text-white shadow-xs'
                      : 'bg-zinc-100/80 text-zinc-700 hover:bg-purple-50 hover:text-purple-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => {
            const isHovered = hoveredCardId === product.id;
            const isWishlisted = wishlistIds.includes(product.id);
            const isJustAdded = addedAnimationId === product.id;

            return (
              <div
                key={product.id}
                className="group flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredCardId(product.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => onQuickView(product)}
              >
                {/* Image Showcase Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50 border border-zinc-100/80 shadow-xs">
                  {/* Primary & Hover Images */}
                  <div className="w-full h-full relative transition-transform duration-700 ease-out group-hover:scale-105">
                    <MediaImage
                      src={isHovered ? product.hoverImage : product.primaryImage}
                      alt={product.name}
                      className="w-full h-full object-cover object-top transition-opacity duration-500"
                      containerClassName="w-full h-full"
                    />
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-start justify-between pointer-events-none z-10">
                    <div className="flex flex-col gap-1 items-start">
                      {product.badge && (
                        <span className="bg-purple-950 text-white text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 shadow-xs">
                          {product.badge}
                        </span>
                      )}
                      {product.lookNumber && (
                        <span className="bg-white/90 backdrop-blur-xs text-zinc-900 text-[9px] font-semibold tracking-widest px-1.5 py-0.5">
                          {product.lookNumber}
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product.id);
                      }}
                      aria-label="Save to wishlist"
                      className={`pointer-events-auto p-2 rounded-full transition-all duration-200 cursor-pointer shadow-xs ${
                        isWishlisted
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/80 backdrop-blur-xs text-zinc-700 hover:text-purple-600 hover:bg-white'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Quick Action Overlay on Card Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="flex-1 py-2.5 bg-white text-zinc-900 hover:bg-zinc-100 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(product, e)}
                      className={`px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-1.5 shadow-xs ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Product Meta & Typography */}
                <div className="pt-3.5 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-purple-900 uppercase font-semibold tracking-[0.18em]">
                    <span>{product.category}</span>
                    <div className="flex items-center gap-1.5">
                      {product.colors.map((c) => (
                        <span
                          key={c.name}
                          className={`w-2.5 h-2.5 rounded-full border border-zinc-200 ${c.class}`}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-zinc-950 group-hover:text-purple-900 transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-zinc-500 font-light line-clamp-1">
                    {product.subtitle}
                  </p>

                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="text-sm font-semibold text-zinc-950">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-zinc-400 line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
