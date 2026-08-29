import React from 'react';
import { Sparkles, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

interface AnnouncementBarProps {
  currency: string;
  setCurrency: (c: string) => void;
  onOpenStudio: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  currency,
  setCurrency,
  onOpenStudio,
}) => {
  return (
    <div className="bg-[#0A0A0A] text-neutral-300 text-xs py-2.5 px-4 border-b border-white/10 tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left perks */}
        <div className="flex items-center gap-4 text-neutral-300">
          <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-[#D4FF00]">
            <Truck className="w-3.5 h-3.5" />
            Free Worldwide Shipping over $50
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-neutral-400 uppercase tracking-wider text-[10px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4FF00]" />
            100% Heavyweight Combed Cotton
          </span>
          <span className="hidden lg:inline-flex items-center gap-1.5 text-neutral-400 uppercase tracking-wider text-[10px] font-semibold">
            <RotateCcw className="w-3.5 h-3.5 text-neutral-300" />
            30-Day Free Size Swaps
          </span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenStudio}
            className="flex items-center gap-1.5 text-[#D4FF00] hover:text-white font-extrabold uppercase tracking-widest text-[11px] transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Custom Mockup Studio
          </button>

          <div className="flex items-center gap-1.5 pl-3 border-l border-white/10">
            <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider">Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-[#141414] text-white text-xs font-mono font-bold rounded px-2 py-0.5 border border-white/15 focus:outline-none focus:border-[#D4FF00] cursor-pointer"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="CAD">CAD (C$)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
