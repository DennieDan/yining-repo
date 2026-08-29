import React from 'react';
import { ArrowRight, Sparkles, Feather, ShieldCheck, Shirt, Ruler } from 'lucide-react';
import { TShirtCategory } from '../types';

interface HeroBannerProps {
  onSelectCategory: (cat: TShirtCategory) => void;
  onOpenStudio: () => void;
  onOpenSizeGuide: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onSelectCategory,
  onOpenStudio,
  onOpenSizeGuide,
}) => {
  return (
    <div className="relative overflow-hidden bg-[#141414] text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-4 mb-8 shadow-2xl border border-white/10">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4FF00] rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-neutral-700 rounded-full blur-3xl opacity-20" />
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,255,0,0.15) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 sm:py-14 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-w-2xl space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1F1F1F] border border-white/15 rounded-full text-xs font-black uppercase tracking-[0.2em] text-[#D4FF00]">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-ping" />
            2026 ARCHITECTURAL HEAVYWEIGHT ARCHIVE
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] text-white">
            STRUCTURED COTTON. <br className="hidden sm:inline" />
            <span className="text-[#D4FF00]">HEAVYWEIGHT DRAPE.</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Curated archives of 180 to 310 GSM combed organic cotton tees, vintage stone-washed mineral dyes, and architectural boxy silhouettes engineered for lasting structure.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <button
              onClick={() => onSelectCategory('heavyweight')}
              className="px-6 py-3.5 bg-[#D4FF00] text-black hover:bg-[#bde600] rounded-full text-xs sm:text-sm font-black uppercase tracking-[0.15em] shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Explore 280+ GSM Archival</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenStudio}
              className="px-5 py-3.5 bg-[#1C1C1C] hover:bg-[#282828] text-white border border-white/15 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D4FF00]" />
              <span>Interactive Mockup Studio</span>
            </button>

            <button
              onClick={onOpenSizeGuide}
              className="px-4 py-3.5 text-neutral-400 hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Ruler className="w-4 h-4" />
              <span>Fit Matrix</span>
            </button>
          </div>
        </div>

        {/* Right Stats & Highlights Bento Box */}
        <div className="grid grid-cols-2 gap-3 w-full lg:w-auto lg:min-w-[340px]">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 space-y-1">
            <div className="flex items-center gap-1.5 text-[#D4FF00] text-xs font-bold uppercase tracking-wider">
              <Shirt className="w-4 h-4" />
              <span>Fabric Density</span>
            </div>
            <p className="text-xl font-black font-display text-white">180 – 310 GSM</p>
            <p className="text-[11px] text-neutral-400">Custom heavy combed ring-spun jersey</p>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 space-y-1">
            <div className="flex items-center gap-1.5 text-[#D4FF00] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>GOTS Organic</span>
            </div>
            <p className="text-xl font-black font-display text-white">100% Certified</p>
            <p className="text-[11px] text-neutral-400">Pesticide-free long staple fibers</p>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 space-y-1">
            <div className="flex items-center gap-1.5 text-[#D4FF00] text-xs font-bold uppercase tracking-wider">
              <Feather className="w-4 h-4" />
              <span>Pre-Shrunk</span>
            </div>
            <p className="text-xl font-black font-display text-white">0% Shrinkage</p>
            <p className="text-[11px] text-neutral-400">Enzyme & hot water washed</p>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 space-y-1">
            <div className="flex items-center gap-1.5 text-[#D4FF00] text-xs font-bold uppercase tracking-wider">
              <Ruler className="w-4 h-4" />
              <span>Proportions</span>
            </div>
            <p className="text-xl font-black font-display text-white">Boxy & Relaxed</p>
            <p className="text-[11px] text-neutral-400">Thick 1.25" non-sagging collars</p>
          </div>
        </div>
      </div>
    </div>
  );
};
