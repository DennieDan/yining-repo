import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Leaf, 
  Truck, 
  RotateCcw, 
  Mail, 
  ArrowRight,
  Check
} from 'lucide-react';

interface FooterProps {
  onOpenStudio: () => void;
  onOpenSizeGuide: () => void;
  onOpenLookbook: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenStudio,
  onOpenSizeGuide,
  onOpenLookbook,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0A0A0A] text-neutral-300 border-t border-white/10 mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Value Pillars Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-white/10">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#D4FF00] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white font-display">1.25" Non-Sagging Collars</h4>
              <p className="text-xs text-neutral-400 mt-0.5">High density ribbing with zero neck baconing after machine washes.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#D4FF00] shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white font-display">100% GOTS Organic Cotton</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Harvested without toxic pesticides; gentle on your skin and the soil.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#D4FF00] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white font-display">Free Shipping over $50</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Dispatched in 100% recyclable, plastic-free kraft mailers.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#D4FF00] shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white font-display">30-Day Free Size Swaps</h4>
              <p className="text-xs text-neutral-400 mt-0.5">If the drape or boxy cut doesn't fit your aesthetic, exchange for free.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#D4FF00] text-black rounded-lg flex items-center justify-center font-black text-sm">
                AT
              </div>
              <span className="font-display text-lg font-black text-white tracking-[0.15em] uppercase">
                ATELIER // TEE
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              We design heavy cotton wardrobe staples with architectural structure. No synthetic fillers, no razor-thin fast fashion blanks. Cut, knit, and dyed with uncompromising European and American craftsmanship.
            </p>
            <div className="pt-2 text-[11px] font-mono font-bold text-[#D4FF00]">
              EST. 2026 • PORTO / LOS ANGELES / KYOTO
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white">
              Catalogue & Tools
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button onClick={onOpenStudio} className="hover:text-[#D4FF00] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4FF00]" />
                  <span>Interactive Mockup Studio</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenLookbook} className="hover:text-white transition-colors cursor-pointer">
                  Editorial Lookbook & Styling
                </button>
              </li>
              <li>
                <button onClick={onOpenSizeGuide} className="hover:text-white transition-colors cursor-pointer">
                  Fit Matrix & Size Advisor
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Fabric Density Guide (180 - 300 GSM)
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Garment Wash Care Protocols
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Discount Reward */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white">
              Join the Cotton Archive
            </h4>
            <p className="text-xs text-neutral-400">
              Subscribe for secret heavyweight drop dates and receive an instant 10% discount promo code.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#141414] border border-[#D4FF00]/40 rounded-xl text-xs text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4FF00]" />
                <span>You're in! Use coupon <strong className="text-[#D4FF00]">COTTON10</strong> at checkout for 10% off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  className="flex-1 px-3.5 py-2.5 bg-[#141414] border border-white/10 rounded-xl text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#D4FF00]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#D4FF00] text-black hover:bg-[#bde600] text-xs font-black uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <p>© 2026 Atelier Tee Co. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Traceability</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
