import React, { useState } from 'react';
import { X, Heart, ShoppingBag, ShieldCheck, Truck, Sparkles, Check } from 'lucide-react';
import { Product } from '../types/fashion';
import { MediaImage } from './MediaImage';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.primaryImage);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'FR 36 (S)');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Royal Amethyst');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const galleryImages = [
    product.primaryImage,
    product.hoverImage,
    ...(product.additionalImages || [])
  ].filter((v, i, a) => a.indexOf(v) === i);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden border border-purple-100 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-zinc-900 bg-white/80 backdrop-blur-xs rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Gallery Visuals */}
        <div className="md:w-1/2 bg-zinc-50 flex flex-col justify-between p-6 border-b md:border-b-0 md:border-r border-zinc-100 overflow-y-auto">
          <div className="relative aspect-[3/4] w-full overflow-hidden shadow-xs mb-4">
            <MediaImage
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover object-top"
              containerClassName="w-full h-full"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-purple-950 text-white text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-20 shrink-0 border-2 overflow-hidden transition-all cursor-pointer ${
                    activeImage === img ? 'border-purple-700 ring-2 ring-purple-200' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Specifications & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-900 uppercase tracking-[0.25em] mb-1">
                <span>{product.category}</span>
                <span>·</span>
                <span className="text-zinc-500 font-normal">{product.lookNumber || 'RUNWAY COLLECTION'}</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950 leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-zinc-500 font-light mt-1">
                {product.subtitle}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-2xl font-bold text-zinc-950">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-zinc-400 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-[11px] text-emerald-700 font-semibold tracking-wider uppercase ml-auto">
                In Stock · Atelier Ready
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light border-t border-b border-zinc-100 py-3">
              {product.description}
            </p>

            {/* Color selection */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-800 mb-2">
                Color: <span className="text-purple-900 font-bold">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 border text-xs transition-all cursor-pointer ${
                      selectedColor === c.name
                        ? 'border-purple-900 bg-purple-50 text-purple-950 font-medium'
                        : 'border-zinc-200 text-zinc-600 hover:border-zinc-300'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full border border-zinc-300 ${c.class}`} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-800">
                  Select Size
                </label>
                <span className="text-[10px] text-purple-700 underline cursor-pointer tracking-wider">
                  Bespoke Fit Guide
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                      selectedSize === s
                        ? 'border-purple-900 bg-purple-950 text-white'
                        : 'border-zinc-200 text-zinc-800 hover:border-purple-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Details */}
            <div className="bg-purple-50/50 p-3 border border-purple-100 text-[11px] text-zinc-700 space-y-1">
              <div><strong className="text-purple-950">Fabric:</strong> {product.fabric}</div>
              <div><strong className="text-purple-950">Silhouette:</strong> {product.fit}</div>
              <div><strong className="text-purple-950">Care:</strong> {product.care}</div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-zinc-100 space-y-3">
            <div className="flex items-center gap-3">
              {/* Quantity */}
              <div className="flex items-center border border-zinc-300">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-zinc-600 hover:text-zinc-950 cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 py-3 text-xs font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-zinc-600 hover:text-zinc-950 cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Add to Bag */}
              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-6 font-semibold uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  isAdded
                    ? 'bg-emerald-700 text-white'
                    : 'bg-purple-950 hover:bg-purple-900 text-white'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Shopping Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag · ${(product.price * quantity).toLocaleString()}</span>
                  </>
                )}
              </button>

              {/* Wishlist */}
              <button
                type="button"
                onClick={() => onToggleWishlist(product.id)}
                className={`p-3.5 border transition-colors cursor-pointer ${
                  isWishlisted
                    ? 'border-purple-600 bg-purple-50 text-purple-600'
                    : 'border-zinc-300 text-zinc-600 hover:text-purple-600 hover:border-purple-400'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Reassurance pills */}
            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1">
              <div className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-purple-700" />
                <span>Complimentary Express Courier</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
                <span>Six Fashion Authenticity Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
