import React, { useState } from 'react';
import { 
  ShoppingBag, 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Tag, 
  Truck, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: () => void;
  appliedDiscount: { code: string; percent: number } | null;
  onApplyPromoCode: (code: string) => boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  appliedDiscount,
  onApplyPromoCode,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState<string | null>(null);

  if (!isOpen) return null;

  // Calculations
  const subtotal = items.reduce((acc, item) => {
    const itemPrice = item.customPrint ? item.product.price + 6 : item.product.price;
    return acc + itemPrice * item.quantity;
  }, 0);

  const discountAmount = appliedDiscount
    ? (subtotal * appliedDiscount.percent) / 100
    : 0;

  const freeShippingThreshold = 50;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCost = subtotal >= freeShippingThreshold || items.length === 0 ? 0 : 6;
  const total = subtotal - discountAmount + (items.length > 0 ? shippingCost : 0);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const ok = onApplyPromoCode(promoInput.trim());
    if (!ok) {
      setPromoError('Invalid code. Try "COTTON10" for 10% off.');
    } else {
      setPromoError(null);
      setPromoInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#141414] text-white h-full shadow-2xl flex flex-col justify-between border-l border-white/10 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#111111]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4FF00]" />
            <h2 className="font-display font-black text-base uppercase tracking-[0.15em] text-white">
              Shopping Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#222222] hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer border border-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="p-4 bg-[#0A0A0A] border-b border-white/10 text-white space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
              <Truck className="w-3.5 h-3.5 text-[#D4FF00]" />
              {remainingForFreeShipping === 0 ? (
                <span className="text-[#D4FF00]">UNLOCKED FREE SHIPPING</span>
              ) : (
                <span>
                  Add <strong className="text-[#D4FF00] font-black">${remainingForFreeShipping.toFixed(2)}</strong> for FREE shipping
                </span>
              )}
            </span>
            <span className="font-mono font-bold text-[#D4FF00]">{Math.round(progressToFreeShipping)}%</span>
          </div>

          <div className="w-full bg-[#222222] rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                remainingForFreeShipping === 0 ? 'bg-[#D4FF00]' : 'bg-[#D4FF00]'
              }`}
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-white/10 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 bg-[#1F1F1F] border border-white/10 rounded-full flex items-center justify-center mx-auto text-neutral-400">
                <ShoppingBag className="w-8 h-8 text-[#D4FF00]" />
              </div>
              <p className="text-sm font-black uppercase tracking-wider text-white">Your Cart is empty</p>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                Discover our heavyweight cotton archives or test the interactive mockup studio.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-6 py-2.5 bg-[#D4FF00] text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#bde600] transition-colors cursor-pointer"
              >
                Browse Archive
              </button>
            </div>
          ) : (
            items.map((item) => {
              const itemPrice = item.customPrint
                ? item.product.price + 6
                : item.product.price;

              return (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5">
                  {/* Thumbnail */}
                  <img
                    src={item.selectedColor.images.front}
                    alt={item.product.title}
                    className="w-18 h-22 object-cover rounded-xl bg-[#1C1C1C] border border-white/10"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="font-display font-black text-xs text-white uppercase tracking-tight line-clamp-1">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-neutral-400 hover:text-rose-500 p-0.5 cursor-pointer transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Variant Specs */}
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px] text-neutral-400">
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-white/20"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          {item.selectedColor.name}
                        </span>
                        <span>•</span>
                        <span className="font-bold text-white font-mono">Size: {item.selectedSize}</span>
                        <span>•</span>
                        <span className="font-mono text-[#D4FF00]">{item.product.fabric.gsm} GSM</span>
                      </div>

                      {/* Custom Print Badge */}
                      {item.customPrint && (
                        <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 bg-[#1F1F1F] border border-white/15 text-white rounded text-[10px] font-bold">
                          <Sparkles className="w-3 h-3 text-[#D4FF00]" />
                          <span>{item.customPrint.designName}</span>
                        </div>
                      )}
                    </div>

                    {/* Stepper and Price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-white/10 rounded-lg bg-[#1C1C1C] px-1.5 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-neutral-400 hover:text-white cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-black font-mono text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-neutral-400 hover:text-white cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-black font-display text-white">
                        ${(itemPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Bottom: Coupons & Checkout Summary */}
        {items.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-[#0F0F0F] space-y-4">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="space-y-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder='Promo code ("COTTON10")'
                    className="w-full pl-8 pr-3 py-2 text-xs uppercase font-mono bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder:text-neutral-500 focus:border-[#D4FF00] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#222222] border border-white/15 text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>

              {appliedDiscount && (
                <p className="text-[11px] text-[#D4FF00] font-bold flex items-center gap-1">
                  ✓ Code "{appliedDiscount.code}" applied ({appliedDiscount.percent}% discount)
                </p>
              )}
              {promoError && (
                <p className="text-[11px] text-rose-400 font-medium">{promoError}</p>
              )}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-white">${subtotal.toFixed(2)}</span>
              </div>

              {appliedDiscount && (
                <div className="flex justify-between text-[#D4FF00] font-bold">
                  <span>Discount ({appliedDiscount.percent}%)</span>
                  <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Standard Shipping</span>
                <span className="font-mono text-white">
                  {shippingCost === 0 ? <strong className="text-[#D4FF00]">FREE</strong> : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-white/10">
                <span className="uppercase tracking-wider">Estimated Total</span>
                <span className="font-display text-base text-[#D4FF00]">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-3.5 bg-[#D4FF00] hover:bg-[#bde600] text-black font-display font-black text-xs uppercase tracking-[0.15em] rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-wider text-neutral-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4FF00]" />
                Encrypted Checkout
              </span>
              <span>•</span>
              <span>30-Day Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
