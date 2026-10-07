import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { AppointmentData } from '../types/fashion';

interface BespokeAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BespokeAppointmentModal: React.FC<BespokeAppointmentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Private Haute Couture Atelier',
    salonLocation: 'London — Mayfair Flagship',
    date: '',
    time: '14:00',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `SIX-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white shadow-2xl border border-purple-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-zinc-950 text-white p-6 sm:p-8">
          <div className="flex items-center gap-2 text-purple-300 text-xs uppercase tracking-[0.3em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Maison Six VIP Concierge</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold">
            PRIVATE SALON & BESPOKE ATELIER
          </h2>
          <p className="text-xs sm:text-sm text-purple-200 font-light mt-1 max-w-lg">
            Schedule a private one-on-one styling consultation with our Head Tailor in London, Paris, New York, or Milan.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-purple-700 mx-auto" />
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.25em] text-purple-900 font-bold">
                  APPOINTMENT RESERVED
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-zinc-950">
                  We look forward to welcoming you, {formData.name}.
                </h3>
              </div>

              <div className="max-w-md mx-auto bg-purple-50 p-4 border border-purple-200 text-xs text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-500 uppercase tracking-wider">Booking Ref:</span>
                  <span className="font-mono font-bold text-purple-950">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 uppercase tracking-wider">Salon:</span>
                  <span className="font-semibold text-zinc-900">{formData.salonLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 uppercase tracking-wider">Date & Time:</span>
                  <span className="font-semibold text-zinc-900">{formData.date || 'To be confirmed'} at {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 uppercase tracking-wider">Service:</span>
                  <span className="font-semibold text-purple-900">{formData.serviceType}</span>
                </div>
              </div>

              <p className="text-xs text-zinc-500 font-light max-w-sm mx-auto">
                Our Private Client Director has received your request and will contact you via email ({formData.email}) to finalize champagne service preferences.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-purple-950 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-purple-900 transition-colors"
              >
                Return to Digital Flagship
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lady Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@luxury.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-700 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7911 123456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-700 mb-1.5">
                    Salon Location *
                  </label>
                  <select
                    value={formData.salonLocation}
                    onChange={(e) => setFormData({ ...formData, salonLocation: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                  >
                    <option value="London — Mayfair Flagship">London — Mayfair Flagship</option>
                    <option value="Paris — Rue Saint-Honoré">Paris — Rue Saint-Honoré</option>
                    <option value="New York — Madison Avenue">New York — Madison Avenue</option>
                    <option value="Milan — Via Montenapoleone">Milan — Via Montenapoleone</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-700 mb-1.5">
                    Service Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50 text-xs"
                  >
                    <option value="Private Haute Couture Atelier">Haute Couture Fitting</option>
                    <option value="Red Carpet & Gala Styling">Red Carpet & Gala</option>
                    <option value="Bespoke Suiting Consultation">Bespoke Suiting</option>
                    <option value="Virtual Styling VIP">Virtual VIP Styling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-700 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-700 mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                  >
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="18:30">6:30 PM (VIP Evening)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-700 mb-1.5">
                  Garment Vision & Specific Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Interested in the Amethyst Sculpted Gown for Venice Film Festival gala..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 border border-zinc-300 text-xs focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-purple-950 text-white font-semibold uppercase tracking-[0.22em] text-xs hover:bg-purple-900 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <span>Request Private Appointment</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
