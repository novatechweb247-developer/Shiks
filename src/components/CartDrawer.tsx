import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Gift, Tag, Check } from 'lucide-react';
import { CartItem } from '../types/fashion';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [giftBoxEnabled, setGiftBoxEnabled] = useState(true);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const freeShippingThreshold = 1000;
  const isFreeShipping = subtotal >= freeShippingThreshold || items.length === 0;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const finalTotal = subtotal - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SIXVIP') {
      setDiscountPercent(10);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "SIXVIP" for 10% private member benefit.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-zinc-950/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden relative border-l border-purple-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-[#fcfbfe]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-purple-950" />
            <h2 className="font-cinzel text-lg font-bold text-zinc-950 tracking-wider">
              YOUR SHOPPING BAG ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close bag"
            className="p-1.5 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="bg-purple-950 text-white px-6 py-2.5 text-xs">
          {isFreeShipping ? (
            <div className="flex items-center gap-2 text-purple-200">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Complimentary White-Glove Couture Shipping unlocked.</span>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-purple-200">
                <span>Add ${amountToFreeShipping.toLocaleString()} for Free White-Glove Shipping</span>
                <span>{Math.round((subtotal / freeShippingThreshold) * 100)}%</span>
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-white"
                  style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <ShoppingBag className="w-12 h-12 text-zinc-300 mx-auto stroke-1" />
              <p className="font-cinzel text-base text-zinc-700">Your bag is currently empty.</p>
              <p className="text-xs text-zinc-400 font-light">Explore our latest Haute Couture collection to begin.</p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-purple-950 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-purple-900 transition-colors"
              >
                Browse Creations
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.product.id}-${item.selectedSize}-${idx}`} className="flex gap-4 border-b border-zinc-100 pb-5">
                {/* Thumbnail */}
                <div className="w-20 h-24 bg-zinc-100 shrink-0 overflow-hidden border border-zinc-100">
                  <img src={item.product.primaryImage} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-zinc-950 font-cinzel line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(idx)}
                        className="text-zinc-400 hover:text-rose-600 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5 space-x-2">
                      <span>Size: <strong>{item.selectedSize}</strong></span>
                      <span>·</span>
                      <span>{item.selectedColor}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-zinc-200">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                        className="px-2 py-0.5 text-xs text-zinc-600 hover:text-zinc-950"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-medium">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-zinc-600 hover:text-zinc-950"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-xs font-semibold text-zinc-950">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Complimentary Signature Packaging option */}
          {items.length > 0 && (
            <div className="bg-purple-50/60 p-3.5 border border-purple-100 flex items-start gap-3">
              <Gift className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
              <div className="flex-1 text-xs">
                <div className="font-semibold text-purple-950">Complimentary Signature Box</div>
                <div className="text-zinc-500 text-[11px]">Includes lavender scented tissue, embossed purple ribbons, and certificate.</div>
              </div>
              <input
                type="checkbox"
                checked={giftBoxEnabled}
                onChange={(e) => setGiftBoxEnabled(e.target.checked)}
                className="mt-1 accent-purple-700 w-4 h-4 cursor-pointer"
              />
            </div>
          )}

          {/* Promo Code Box */}
          {items.length > 0 && (
            <form onSubmit={handleApplyPromo} className="space-y-1 pt-2">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="VIP Code (Try: SIXVIP)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 text-xs border border-zinc-200 uppercase font-mono tracking-wider focus:outline-none focus:border-purple-600"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-zinc-900 text-white text-xs uppercase tracking-wider font-semibold hover:bg-purple-900 transition-colors"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <div className="text-[11px] text-emerald-700 font-medium">✓ 10% VIP Benefit Applied</div>
              )}
              {promoError && (
                <div className="text-[11px] text-rose-600">{promoError}</div>
              )}
            </form>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-zinc-100 bg-[#fbf9fd] space-y-4">
            <div className="space-y-1.5 text-xs text-zinc-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-zinc-950">${subtotal.toLocaleString()}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-purple-700 font-semibold">
                  <span>VIP Benefit (-{discountPercent}%)</span>
                  <span>-${discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{isFreeShipping ? 'Complimentary' : '$45'}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-zinc-200 text-sm font-bold text-zinc-950 font-cinzel">
                <span>TOTAL</span>
                <span>${finalTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onCheckout}
              className="w-full py-4 bg-purple-950 hover:bg-purple-900 text-white text-xs uppercase tracking-[0.22em] font-semibold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
              <span>Encrypted Checkout · Insured Courier Delivery</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
