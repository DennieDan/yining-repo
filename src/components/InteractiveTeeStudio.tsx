import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShoppingBag, 
  RotateCcw, 
  Upload, 
  Check, 
  Layers, 
  Type, 
  Image as ImageIcon,
  Palette,
  Move
} from 'lucide-react';
import { TShirtProduct, ColorVariant, CartItem } from '../types';

interface InteractiveTeeStudioProps {
  products: TShirtProduct[];
  isOpen: boolean;
  onClose: () => void;
  onAddCustomToCart: (
    baseProduct: TShirtProduct,
    color: ColorVariant,
    size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL',
    customPrint: {
      designName: string;
      placement: 'center-chest' | 'back-oversized' | 'pocket-left';
      previewUrl: string;
    }
  ) => void;
}

const PRESET_ARTWORKS = [
  {
    id: 'art-kyoto',
    name: 'Kyoto Botanical Archive',
    type: 'illustration',
    preview: '🌿 京都 BOTANICAL ARCHIVE 1984',
    textColor: '#ffffff',
    subtext: 'KYOTO BOTANICAL ARCHIVE • NO. 84',
    iconText: '京都 🌿',
  },
  {
    id: 'art-tokyo-cyber',
    name: 'Neo Cyber Typo',
    type: 'streetwear',
    preview: '⚡ CYBER MATRIX SYSTEM // 01',
    textColor: '#38bdf8',
    subtext: 'AUTONOMOUS DIVISION // SYSTEM RUNTIME',
    iconText: '⚡ NEOCYBER',
  },
  {
    id: 'art-vintage-tour',
    name: '1979 Heavyweight Tour',
    type: 'vintage',
    preview: '✦ NORTHERN SOUNDS // 1979 ✦',
    textColor: '#f59e0b',
    subtext: 'SUMMER FESTIVAL • COPENHAGEN',
    iconText: '✦ 1979',
  },
  {
    id: 'art-kanji-minimal',
    name: 'Minimal Kanji Craft',
    type: 'minimal',
    preview: '職 人 [CRAFTSMANSHIP]',
    textColor: '#e2e8f0',
    subtext: 'PURITY OF FORM • ZERO PLASTIC',
    iconText: '職人',
  },
];

const FABRIC_COLORS = [
  { id: 'c-black', name: 'Washed Onyx', hex: '#1c1b1a', textContrast: '#ffffff' },
  { id: 'c-bone', name: 'Bone Chalk', hex: '#f4f1ea', textContrast: '#171717' },
  { id: 'c-sage', name: 'Vintage Pine', hex: '#3d4d44', textContrast: '#ffffff' },
  { id: 'c-terracotta', name: 'Sunbaked Clay', hex: '#b35d46', textContrast: '#ffffff' },
  { id: 'c-indigo', name: 'Midnight Navy', hex: '#1b2432', textContrast: '#ffffff' },
  { id: 'c-charcoal', name: 'Mineral Concrete', hex: '#4a4b4d', textContrast: '#ffffff' },
];

export const InteractiveTeeStudio: React.FC<InteractiveTeeStudioProps> = ({
  products,
  isOpen,
  onClose,
  onAddCustomToCart,
}) => {
  if (!isOpen) return null;

  // Selected base tee
  const [selectedProductId, setSelectedProductId] = useState<string>(products[0]?.id || 'tee-01');
  const baseProduct = products.find((p) => p.id === selectedProductId) || products[0];

  const [activeColor, setActiveColor] = useState(FABRIC_COLORS[0]);
  const [activeArt, setActiveArt] = useState(PRESET_ARTWORKS[0]);
  const [customSlogan, setCustomSlogan] = useState('ATELIER ARCHIVE // 2026');
  const [useCustomText, setUseCustomText] = useState(false);
  const [placement, setPlacement] = useState<'center-chest' | 'back-oversized' | 'pocket-left'>('center-chest');
  const [selectedSize, setSelectedSize] = useState<'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'>('L');
  const [isFrontView, setIsFrontView] = useState(true);
  const [isSuccessAdded, setIsSuccessAdded] = useState(false);

  const handleAddCustom = () => {
    // map activeColor to a matching ColorVariant
    const mappedColor: ColorVariant = {
      id: activeColor.id,
      name: activeColor.name,
      hex: activeColor.hex,
      images: {
        front: baseProduct.colors[0]?.images.front || '',
        back: baseProduct.colors[0]?.images.back || '',
      },
      inStock: true,
    };

    onAddCustomToCart(baseProduct, mappedColor, selectedSize, {
      designName: useCustomText ? `Custom: "${customSlogan}"` : activeArt.name,
      placement,
      previewUrl: '',
    });

    setIsSuccessAdded(true);
    setTimeout(() => {
      setIsSuccessAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#141414] text-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:px-8 border-b border-white/10 flex items-center justify-between bg-[#111111]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#D4FF00] text-black rounded-xl flex items-center justify-center font-black">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-lg uppercase tracking-tight text-white leading-tight">
                Live Mockup Studio
              </h2>
              <p className="text-xs text-neutral-400">
                Interactive real-time 2D preview with heavy cotton drape
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 bg-[#222222] hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors cursor-pointer border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 flex-1">
          {/* Left Canvas: Realtime T-shirt 2D SVG Render Stage (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0D0D0D] flex flex-col items-center justify-center relative select-none border-b lg:border-b-0 lg:border-r border-white/10">
            {/* View Angle Pill */}
            <div className="absolute top-4 left-4 z-10 flex bg-[#191919] rounded-full p-1 border border-white/10">
              <button
                onClick={() => {
                  setIsFrontView(true);
                  if (placement === 'back-oversized') setPlacement('center-chest');
                }}
                className={`px-3 py-1 text-xs font-black uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                  isFrontView ? 'bg-[#D4FF00] text-black' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Front View
              </button>
              <button
                onClick={() => {
                  setIsFrontView(false);
                  setPlacement('back-oversized');
                }}
                className={`px-3 py-1 text-xs font-black uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                  !isFrontView ? 'bg-[#D4FF00] text-black' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Back View
              </button>
            </div>

            {/* Spec Tag */}
            <div className="absolute top-4 right-4 z-10 bg-[#191919] text-[#D4FF00] text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-white/10">
              {baseProduct.fabric.gsm} GSM • {activeColor.name}
            </div>

            {/* Interactive Vector T-Shirt Rendering with Realistic Fabric Lighting */}
            <div className="relative w-full max-w-sm aspect-[4/5] flex items-center justify-center my-4">
              <svg
                viewBox="0 0 500 600"
                className="w-full h-full drop-shadow-2xl transition-colors duration-300"
                style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.8))' }}
              >
                {/* Defs for realistic fabric gradient overlay */}
                <defs>
                  <linearGradient id="fabricShading" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
                    <stop offset="20%" stopColor="#ffffff" stopOpacity="0.08" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.02" />
                    <stop offset="80%" stopColor="#ffffff" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
                  </linearGradient>

                  <linearGradient id="sleeveShadingL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
                  </linearGradient>

                  <linearGradient id="sleeveShadingR" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Main Boxy T-Shirt Body Path */}
                <g fill={activeColor.hex}>
                  {/* Left Sleeve (Wide Heavyweight Cut) */}
                  <path
                    d="M 170 85 L 60 170 L 110 250 L 175 195 Z"
                    stroke="#111"
                    strokeWidth="1.5"
                  />
                  {/* Right Sleeve */}
                  <path
                    d="M 330 85 L 440 170 L 390 250 L 325 195 Z"
                    stroke="#111"
                    strokeWidth="1.5"
                  />

                  {/* Body Torso */}
                  <path
                    d="M 170 85 Q 250 110 330 85 L 330 85 L 325 195 L 340 540 L 160 540 L 175 195 Z"
                    stroke="#111"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Fabric Texture Shading Overlays */}
                <path
                  d="M 170 85 Q 250 110 330 85 L 340 540 L 160 540 Z"
                  fill="url(#fabricShading)"
                />
                <path
                  d="M 170 85 L 60 170 L 110 250 L 175 195 Z"
                  fill="url(#sleeveShadingL)"
                />
                <path
                  d="M 330 85 L 440 170 L 390 250 L 325 195 Z"
                  fill="url(#sleeveShadingR)"
                />

                {/* Thick Heavy Collar Construction */}
                <path
                  d="M 195 85 Q 250 120 305 85 Q 250 98 195 85 Z"
                  fill={activeColor.hex}
                  stroke="#000"
                  strokeWidth="2.5"
                  opacity="0.9"
                />
                <path
                  d="M 195 85 Q 250 120 305 85"
                  fill="none"
                  stroke="rgba(0,0,0,0.3)"
                  strokeWidth="3"
                />

                {/* Sleeve & Hem Stitch Lines */}
                <path d="M 68 180 L 115 242" stroke="rgba(0,0,0,0.3)" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 432 180 L 385 242" stroke="rgba(0,0,0,0.3)" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 165 530 L 335 530" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeDasharray="4,4" />
              </svg>

              {/* Live Print Overlay on the Canvas */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {/* Center Chest Placement */}
                {placement === 'center-chest' && isFrontView && (
                  <div className="w-48 text-center p-3 rounded-lg border border-white/10 bg-black/40 backdrop-blur-[1px] shadow-sm transform -translate-y-8 animate-in zoom-in-95 duration-200">
                    <div className="text-sm font-black font-display tracking-wider" style={{ color: activeColor.textContrast }}>
                      {useCustomText ? customSlogan : activeArt.preview}
                    </div>
                    <div className="text-[10px] tracking-widest font-mono mt-1 opacity-80" style={{ color: activeColor.textContrast }}>
                      {useCustomText ? 'HEAVYWEIGHT ARCHIVE 280GSM' : activeArt.subtext}
                    </div>
                  </div>
                )}

                {/* Left Chest Pocket Placement */}
                {placement === 'pocket-left' && isFrontView && (
                  <div className="absolute top-[34%] left-[34%] text-left p-2 rounded border border-white/10 bg-black/40 backdrop-blur-[1px] shadow-xs transform animate-in zoom-in-95 duration-200">
                    <div className="text-xs font-black font-display tracking-tight" style={{ color: activeColor.textContrast }}>
                      {useCustomText ? customSlogan.slice(0, 10) : activeArt.iconText}
                    </div>
                    <div className="text-[8px] font-mono tracking-widest opacity-75" style={{ color: activeColor.textContrast }}>
                      EST. 2026
                    </div>
                  </div>
                )}

                {/* Large Back Print Placement */}
                {(!isFrontView || placement === 'back-oversized') && (
                  <div className="w-56 text-center p-5 rounded-xl border border-white/15 bg-black/50 backdrop-blur-[1px] shadow-lg transform -translate-y-4 animate-in zoom-in-95 duration-200">
                    <div className="text-base font-black font-display tracking-widest uppercase mb-1" style={{ color: activeColor.textContrast }}>
                      {useCustomText ? customSlogan : activeArt.preview}
                    </div>
                    <div className="text-xs tracking-wider font-mono opacity-85 leading-relaxed" style={{ color: activeColor.textContrast }}>
                      {useCustomText ? '100% GOTS ORGANIC COTTON • PRE-SHRUNK' : activeArt.subtext}
                    </div>
                    <div className="mt-2 text-[9px] font-mono text-neutral-400">
                      ATELIER COTTON WORKSHOP • 2026
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Disclaimer */}
            <p className="text-neutral-500 text-[11px] mt-2">
              *Printed with water-based eco inks that infuse into the cotton knit without sticky plastic feel.
            </p>
          </div>

          {/* Right Configuration Controls (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-5 overflow-y-auto max-h-[80vh] bg-[#141414]">
            {/* Base Product Model Selection */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-neutral-300 block">
                1. Select Base Silhouette
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full p-2.5 bg-[#191919] border border-white/10 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#D4FF00] cursor-pointer"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id} className="bg-[#141414] text-white">
                    {p.title} (${p.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Color Swatches */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-neutral-300 block">
                2. Base Fabric Color ({activeColor.name})
              </label>
              <div className="grid grid-cols-6 gap-2">
                {FABRIC_COLORS.map((c) => {
                  const isSelected = activeColor.id === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveColor(c)}
                      title={c.name}
                      className={`h-9 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
                        isSelected
                          ? 'ring-2 ring-[#D4FF00] scale-105 border-white'
                          : 'border-white/10 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {isSelected && (
                        <Check
                          className={`w-4 h-4 ${
                            c.hex === '#f4f1ea' ? 'text-black' : 'text-white'
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Graphic Preset or Custom Slogan */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-neutral-300 block">
                  3. Artwork / Typography
                </label>
                <button
                  onClick={() => setUseCustomText(!useCustomText)}
                  className="text-xs text-[#D4FF00] font-black uppercase tracking-wider hover:underline cursor-pointer"
                >
                  {useCustomText ? 'Use Curated Graphics' : 'Type Custom Text'}
                </button>
              </div>

              {useCustomText ? (
                <div className="space-y-2 animate-in fade-in">
                  <input
                    type="text"
                    value={customSlogan}
                    onChange={(e) => setCustomSlogan(e.target.value)}
                    placeholder="Enter your slogan or brand typography..."
                    className="w-full p-2.5 bg-[#191919] border border-white/10 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-[#D4FF00]"
                    maxLength={35}
                  />
                  <span className="text-[10px] text-neutral-400 block text-right font-mono">
                    {customSlogan.length}/35 characters
                  </span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 animate-in fade-in">
                  {PRESET_ARTWORKS.map((art) => {
                    const isSelected = activeArt.id === art.id;
                    return (
                      <button
                        key={art.id}
                        onClick={() => setActiveArt(art)}
                        className={`p-2.5 text-left rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#D4FF00] bg-[#1F1F1F] text-white shadow-sm'
                            : 'border-white/10 bg-[#191919] text-neutral-300 hover:border-white/30'
                        }`}
                      >
                        <p className="text-xs font-black uppercase tracking-tight truncate text-white">{art.name}</p>
                        <p className="text-[10px] text-neutral-400 truncate mt-0.5 font-mono">{art.preview}</p>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Placement Selection */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-neutral-300 block">
                4. Print Placement
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'center-chest', label: 'Center Chest' },
                  { id: 'pocket-left', label: 'Left Pocket' },
                  { id: 'back-oversized', label: 'Oversized Back' },
                ].map((item) => {
                  const isSelected = placement === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setPlacement(item.id as any);
                        if (item.id === 'back-oversized') setIsFrontView(false);
                        else setIsFrontView(true);
                      }}
                      className={`py-2 px-1 text-center text-xs font-black uppercase tracking-wider rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#D4FF00] text-black border-[#D4FF00]'
                          : 'bg-[#191919] text-neutral-400 border-white/10 hover:text-white hover:border-white/30'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Choice */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-neutral-300 block">
                5. Select Garment Size
              </label>
              <div className="grid grid-cols-6 gap-1.5 font-mono">
                {(['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-black rounded-lg border transition-all cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-[#D4FF00] text-black border-[#D4FF00]'
                        : 'bg-[#191919] text-neutral-400 border-white/10 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Order Action Button */}
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={handleAddCustom}
                className={`w-full py-3.5 px-6 rounded-xl font-display font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                  isSuccessAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#D4FF00] hover:bg-[#bde600] text-black active:scale-98'
                }`}
              >
                {isSuccessAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Custom Tee Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-black" />
                    <span>Add Custom Piece to Bag • ${(baseProduct.price + 6).toFixed(2)}</span>
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-neutral-500 mt-2">
                Includes custom screenprint setup + 100% heavy cotton blank
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
