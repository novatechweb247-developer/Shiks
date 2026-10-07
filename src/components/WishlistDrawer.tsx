import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types/fashion';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveWishlist,
  onAddToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-zinc-950/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden relative border-l border-purple-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-[#fcfbfe]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-900 fill-purple-900" />
            <h2 className="font-cinzel text-lg font-bold text-zinc-950 tracking-wider">
              SAVED CREATIONS ({wishlistProducts.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close wishlist"
            className="p-1.5 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <Heart className="w-12 h-12 text-zinc-300 mx-auto stroke-1" />
              <p className="font-cinzel text-base text-zinc-700">No saved creations yet.</p>
              <p className="text-xs text-zinc-400 font-light">Tap the heart icon on any garment to curate your private wishlist.</p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-purple-950 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-purple-900 transition-colors"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div key={product.id} className="flex gap-4 border-b border-zinc-100 pb-5">
                <div className="w-20 h-24 bg-zinc-100 shrink-0 overflow-hidden border border-zinc-100">
                  <img src={product.primaryImage} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-zinc-950 font-cinzel line-clamp-1">
                        {product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveWishlist(product.id)}
                        className="text-zinc-400 hover:text-rose-600 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">{product.category}</div>
                    <div className="text-xs font-semibold text-zinc-950 mt-1">
                      ${product.price.toLocaleString()}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onAddToCart(product);
                      onRemoveWishlist(product.id);
                    }}
                    className="mt-2 py-2 px-3 bg-purple-950 hover:bg-purple-900 text-white text-[10px] uppercase font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
