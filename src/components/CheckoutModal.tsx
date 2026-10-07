import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Lock, Sparkles } from 'lucide-react';
import { CartItem } from '../types/fashion';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: 'United Kingdom',
    postalCode: '',
    cardNumber: '•••• •••• •••• 4242',
    expiry: '12/28',
    cvv: '•••'
  });
  const [orderId, setOrderId] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `SIX-HAUTE-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('success');
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white shadow-2xl border border-purple-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close checkout"
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div>
            <div className="bg-purple-950 text-white p-6 sm:p-8 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-purple-300 font-bold block mb-1">
                  MAISON SIX DIGITAL CHECKOUT
                </span>
                <h2 className="font-cinzel text-xl sm:text-2xl font-bold">
                  SECURE COUTURE CHECKOUT
                </h2>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-zinc-400 block uppercase">TOTAL AMOUNT</span>
                <span className="font-cinzel text-xl font-bold text-white">${subtotal.toLocaleString()}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              {/* Shipping information */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-purple-900 mb-3 flex items-center gap-1.5">
                  <span>1. White-Glove Delivery Destination</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="px-3.5 py-2.5 border border-zinc-200 text-xs focus:outline-none focus:border-purple-700"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="px-3.5 py-2.5 border border-zinc-200 text-xs focus:outline-none focus:border-purple-700"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Client Email (for tracking & provenance) *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="sm:col-span-2 px-3.5 py-2.5 border border-zinc-200 text-xs focus:outline-none focus:border-purple-700"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Street Address & Suite *"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="sm:col-span-2 px-3.5 py-2.5 border border-zinc-200 text-xs focus:outline-none focus:border-purple-700"
                  />
                  <input
                    type="text"
                    required
                    placeholder="City *"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="px-3.5 py-2.5 border border-zinc-200 text-xs focus:outline-none focus:border-purple-700"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Postal Code *"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="px-3.5 py-2.5 border border-zinc-200 text-xs focus:outline-none focus:border-purple-700"
                  />
                </div>
              </div>

              {/* Payment information */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-purple-900 mb-3 flex items-center justify-between">
                  <span>2. Payment Method</span>
                  <span className="text-[10px] text-zinc-400 font-normal flex items-center gap-1">
                    <Lock className="w-3 h-3 text-emerald-600" /> 256-Bit SSL Encrypted
                  </span>
                </h3>
                <div className="p-4 border border-purple-200 bg-purple-50/40 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-900">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-purple-800" />
                      <span>Credit Card / Black Card</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                      <span>VISA</span>
                      <span>MC</span>
                      <span>AMEX</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="col-span-2 px-3 py-2 bg-white border border-zinc-200 text-xs font-mono"
                    />
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      className="px-3 py-2 bg-white border border-zinc-200 text-xs font-mono"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-purple-950 hover:bg-purple-900 text-white font-semibold uppercase tracking-[0.22em] text-xs transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Authorize & Place Order · ${subtotal.toLocaleString()}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-purple-700 mx-auto" />
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-purple-900">
                ORDER CONFIRMED & DISPATCHED TO ATELIER
              </span>
              <h2 className="font-cinzel text-3xl font-bold text-zinc-950">
                Thank you for your order, {formData.firstName}.
              </h2>
            </div>

            <div className="max-w-md mx-auto bg-purple-50 p-6 border border-purple-200 text-xs text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-zinc-500 uppercase tracking-wider">Order Reference:</span>
                <span className="font-mono font-bold text-purple-950">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 uppercase tracking-wider">Estimated Delivery:</span>
                <span className="font-semibold text-zinc-900">2–4 Business Days via White-Glove Courier</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 uppercase tracking-wider">Provenance Certificate:</span>
                <span className="font-semibold text-purple-900">Included in Signature Presentation Box</span>
              </div>
            </div>

            <p className="text-xs text-zinc-500 font-light max-w-sm mx-auto">
              A confirmation receipt and courier tracking details have been forwarded to {formData.email}.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3.5 bg-purple-950 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-purple-900 transition-colors"
            >
              Continue Exploring Collections
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
