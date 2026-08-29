import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  CheckCircle2, 
  Truck, 
  ShoppingBag,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  appliedDiscount: { code: string; percent: number } | null;
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  appliedDiscount,
  onOrderCompleted,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google'>('card');
  const [formData, setFormData] = useState({
    fullName: 'Alex Vance',
    email: 'alex.vance@example.com',
    address: '742 Evergreen Terrace',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '888',
  });

  const subtotal = items.reduce((acc, item) => {
    const itemPrice = item.customPrint ? item.product.price + 6 : item.product.price;
    return acc + itemPrice * item.quantity;
  }, 0);

  const discountAmount = appliedDiscount
    ? (subtotal * appliedDiscount.percent) / 100
    : 0;

  const shippingCost = subtotal >= 50 ? 0 : 6;
  const total = subtotal - discountAmount + shippingCost;
  const orderId = `AT-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#171717', '#f59e0b', '#10b981', '#6366f1'],
      });
    } catch {
      // fallback
    }

    onOrderCompleted();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#141414] text-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-white/10 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 bg-[#222222] hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors cursor-pointer border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div className="border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-[10px] font-black text-[#D4FF00] uppercase tracking-[0.2em] mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
              <h2 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                Complete Order
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">
                Review your items and shipping details below
              </p>
            </div>

            {/* Quick Order Breakdown Summary */}
            <div className="p-4 bg-[#1C1C1C] rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-white">
                <span>Items ({items.reduce((s, i) => s + i.quantity, 0)})</span>
                <span className="font-mono">${subtotal.toFixed(2)}</span>
              </div>

              {appliedDiscount && (
                <div className="flex items-center justify-between text-xs text-[#D4FF00] font-bold">
                  <span>Promo Discount ({appliedDiscount.code})</span>
                  <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Standard Shipping</span>
                <span className="font-mono text-white font-bold">
                  {shippingCost === 0 ? <strong className="text-[#D4FF00]">FREE</strong> : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>

              <div className="flex items-center justify-between text-base font-black text-white pt-2 border-t border-white/10">
                <span className="uppercase tracking-wider">Total Due</span>
                <span className="font-display text-xl text-[#D4FF00]">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D4FF00]" />
                <span>Shipping Address</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-2.5 bg-[#1C1C1C] border border-white/10 rounded-xl text-xs text-white placeholder:text-neutral-600 focus:border-[#D4FF00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 bg-[#1C1C1C] border border-white/10 rounded-xl text-xs text-white placeholder:text-neutral-600 focus:border-[#D4FF00] focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full p-2.5 bg-[#1C1C1C] border border-white/10 rounded-xl text-xs text-white placeholder:text-neutral-600 focus:border-[#D4FF00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2.5 bg-[#1C1C1C] border border-white/10 rounded-xl text-xs text-white placeholder:text-neutral-600 focus:border-[#D4FF00] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">State</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full p-2.5 bg-[#1C1C1C] border border-white/10 rounded-xl text-xs text-white placeholder:text-neutral-600 focus:border-[#D4FF00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">ZIP</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full p-2.5 bg-[#1C1C1C] border border-white/10 rounded-xl text-xs text-white placeholder:text-neutral-600 focus:border-[#D4FF00] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#D4FF00]" />
                <span>Payment Method</span>
              </h3>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'card', label: 'Credit Card' },
                  { id: 'apple', label: 'Apple Pay' },
                  { id: 'google', label: 'Google Pay' },
                ].map((pm) => (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setPaymentMethod(pm.id as any)}
                    className={`py-2.5 px-3 text-xs font-black uppercase tracking-wider rounded-xl border transition-all cursor-pointer ${
                      paymentMethod === pm.id
                        ? 'bg-[#D4FF00] text-black border-[#D4FF00] shadow-sm'
                        : 'bg-[#1C1C1C] text-neutral-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {pm.label}
                  </button>
                ))}
              </div>

              {paymentMethod === 'card' && (
                <div className="grid grid-cols-3 gap-2 p-3.5 bg-[#1C1C1C] rounded-xl border border-white/10 animate-in fade-in">
                  <div className="col-span-3">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-0.5">Card Number</label>
                    <input
                      type="text"
                      defaultValue="4242 •••• •••• 4242"
                      className="w-full p-2 bg-[#141414] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#D4FF00] focus:outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-0.5">Expiry</label>
                    <input
                      type="text"
                      defaultValue="12/28"
                      className="w-full p-2 bg-[#141414] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#D4FF00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-0.5">CVC</label>
                    <input
                      type="text"
                      defaultValue="888"
                      className="w-full p-2 bg-[#141414] border border-white/10 rounded-lg text-xs font-mono text-white focus:border-[#D4FF00] focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Place Order CTA */}
            <button
              type="submit"
              className="w-full py-4 bg-[#D4FF00] hover:bg-[#bde600] text-black font-display font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
            >
              <span>Pay & Place Order • ${total.toFixed(2)}</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </form>
        ) : (
          /* Success Screen */
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#1F1F1F] text-[#D4FF00] border border-[#D4FF00]/40 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-black tracking-[0.2em] text-[#D4FF00]">
                Order Confirmed
              </span>
              <h2 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                Thank You, {formData.fullName}!
              </h2>
              <p className="text-xs text-neutral-400 max-w-md mx-auto">
                We're carefully packing your organic heavyweight tees in compostable paper packaging. A receipt has been sent to <strong className="text-white">{formData.email}</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#1C1C1C] rounded-2xl border border-white/10 max-w-sm mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-400">Order Number:</span>
                <span className="font-mono font-bold text-[#D4FF00]">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Estimated Delivery:</span>
                <span className="font-bold text-white">3-5 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Shipping To:</span>
                <span className="font-bold text-white">{formData.city}, {formData.state}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 bg-[#D4FF00] text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#bde600] transition-colors cursor-pointer"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
