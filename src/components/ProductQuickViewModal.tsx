import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Heart, 
  Layers, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  Ruler, 
  Check, 
  Info, 
  Shirt, 
  ChevronRight,
  ShoppingBag,
  Plus,
  Minus
} from 'lucide-react';
import { TShirtProduct, ColorVariant } from '../types';

interface ProductQuickViewModalProps {
  product: TShirtProduct | null;
  initialColor?: ColorVariant;
  onClose: () => void;
  onAddToCart: (
    product: TShirtProduct,
    color: ColorVariant,
    size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL',
    quantity: number
  ) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: TShirtProduct) => void;
  isCompared: boolean;
  onToggleCompare: (product: TShirtProduct) => void;
  onOpenSizeGuide: () => void;
  onOpenStudio: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  initialColor,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  isCompared,
  onToggleCompare,
  onOpenSizeGuide,
  onOpenStudio,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    initialColor || product.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'>('M');
  const [quantity, setQuantity] = useState(1);
  const [activeImageKey, setActiveImageKey] = useState<'front' | 'back' | 'model' | 'detail'>('front');
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'fit' | 'reviews'>('details');
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);

  // Unit toggle for measurements inside modal
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  // Interactive Fit advisor calculator inside modal
  const [calcHeight, setCalcHeight] = useState('178');
  const [calcWeight, setCalcWeight] = useState('75');
  const [calcPref, setCalcPref] = useState<'fitted' | 'regular' | 'oversized'>('regular');
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  const calculateFit = () => {
    const h = parseFloat(calcHeight) || 175;
    const w = parseFloat(calcWeight) || 72;
    // Simple ergonomic sizing heuristic
    let base = 'M';
    if (w < 62) base = 'S';
    else if (w < 72) base = 'M';
    else if (w < 82) base = 'L';
    else if (w < 94) base = 'XL';
    else base = 'XXL';

    if (calcPref === 'fitted') {
      if (base === 'XXL') base = 'XL';
      else if (base === 'XL') base = 'L';
      else if (base === 'L') base = 'M';
      else if (base === 'M') base = 'S';
      else base = 'XS';
    } else if (calcPref === 'oversized') {
      if (base === 'XS') base = 'S';
      else if (base === 'S') base = 'M';
      else if (base === 'M') base = 'L';
      else if (base === 'L') base = 'XL';
      else base = 'XXL';
    }
    setRecommendedSize(base);
    setSelectedSize(base as any);
  };

  const currentImgUrl =
    (selectedColor.images as any)[activeImageKey] || selectedColor.images.front;

  const currentSizeStock =
    product.sizes.find((s) => s.size === selectedSize)?.stock ?? 0;

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    setIsAddedSuccess(true);
    setTimeout(() => setIsAddedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#141414] text-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#222222] hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 flex-1">
          {/* Left: Interactive Media Gallery (5 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#0D0D0D] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col gap-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#181818] border border-white/10 shadow-inner">
              <img
                src={currentImgUrl}
                alt={`${product.title} - ${selectedColor.name}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />

              {/* GSM and Origin Badge */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-3 py-1 bg-[#D4FF00] text-black font-mono text-xs font-black rounded-lg shadow-md uppercase tracking-wider">
                  {product.fabric.gsm} GSM
                </span>
                <span className="px-2.5 py-1 bg-[#1F1F1F]/90 border border-white/15 text-white text-[11px] font-bold rounded-lg shadow-sm uppercase tracking-wider">
                  {product.fabric.madeIn}
                </span>
              </div>
            </div>

            {/* Thumbnail View Switcher */}
            <div className="grid grid-cols-4 gap-2">
              {(['front', 'back', 'model', 'detail'] as const).map((key) => {
                const img = (selectedColor.images as any)[key];
                if (!img) return null;
                const isActive = activeImageKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveImageKey(key)}
                    className={`relative aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      isActive
                        ? 'border-[#D4FF00] ring-2 ring-[#D4FF00]/40'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={key} className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 inset-x-1 text-[9px] uppercase tracking-widest font-black bg-[#0F0F0F]/90 text-white text-center py-0.5 rounded backdrop-blur-xs">
                      {key}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Studio Teaser Prompt */}
            <button
              onClick={() => {
                onClose();
                onOpenStudio();
              }}
              className="w-full py-3 px-4 bg-[#1C1C1C] hover:bg-[#252525] border border-white/10 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#D4FF00]" />
              <span>Preview Custom Prints in 2D Studio</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#D4FF00]" />
            </button>
          </div>

          {/* Right: Product Configuration & Tabs (7 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category, Rating & Title */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] font-black text-[#D4FF00]">
                    {product.category.replace('-', ' ')} • {product.fit}
                  </span>
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="w-4 h-4 fill-[#D4FF00] text-[#D4FF00]" />
                    <span className="font-black text-white">{product.rating}</span>
                    <span className="text-neutral-400">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase leading-tight">
                  {product.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400">
                  {product.subtitle}
                </p>
              </div>

              {/* Price Banner */}
              <div className="flex items-baseline gap-3 pb-3 border-b border-white/10">
                <span className="text-3xl font-black font-display text-white">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-neutral-500 line-through font-mono">
                    ${product.originalPrice}
                  </span>
                )}
                {product.isSale && (
                  <span className="px-2.5 py-0.5 bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-black uppercase tracking-wider rounded-md">
                    Save ${product.originalPrice! - product.price}
                  </span>
                )}
              </div>

              {/* Color Selection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-neutral-300">
                    Colorway: <span className="text-[#D4FF00]">{selectedColor.name}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor.id === color.id;
                    return (
                      <button
                        key={color.id}
                        onClick={() => {
                          setSelectedColor(color);
                          setActiveImageKey('front');
                        }}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                          isSelected
                            ? 'scale-115 ring-2 ring-[#D4FF00] ring-offset-2 ring-offset-[#141414] border-white'
                            : 'border-white/20 hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {isSelected && (
                          <Check
                            className={`w-4 h-4 ${
                              color.hex === '#fafafa' || color.hex === '#f5f5f0' || color.hex === '#f5f0e6' || color.hex === '#eeebe2'
                                ? 'text-black'
                                : 'text-white'
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-neutral-300">
                    Select Size
                  </span>
                  <button
                    onClick={() => setActiveTab('fit')}
                    className="text-xs text-[#D4FF00] font-bold uppercase tracking-wider underline underline-offset-4 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    Size Guide & Matrix
                  </button>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((s) => {
                    const isSelected = selectedSize === s.size;
                    const isOutOfStock = s.stock === 0;
                    return (
                      <button
                        key={s.size}
                        disabled={isOutOfStock}
                        onClick={() => setSelectedSize(s.size)}
                        className={`py-2.5 text-xs font-black font-mono rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#D4FF00] text-black border-[#D4FF00] shadow-md'
                            : isOutOfStock
                            ? 'bg-[#1C1C1C] text-neutral-600 border-white/5 cursor-not-allowed line-through'
                            : 'bg-[#1F1F1F] text-neutral-200 border-white/10 hover:border-white/40'
                        }`}
                      >
                        <span>{s.size}</span>
                        {s.stock > 0 && s.stock < 5 && (
                          <span className={`text-[9px] ${isSelected ? 'text-black font-bold' : 'text-rose-400'}`}>
                            {s.stock} left
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                {recommendedSize && (
                  <p className="text-xs text-[#D4FF00] bg-[#1C1C1C] border border-white/10 px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#D4FF00]" />
                    Recommended size based on fit profile: <strong className="font-black text-white">{recommendedSize}</strong>
                  </p>
                )}
              </div>

              {/* Quantity and Add to Cart Section */}
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-white/10 rounded-xl bg-[#1C1C1C] px-2 py-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-30 cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-black font-mono text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(currentSizeStock, quantity + 1))}
                      disabled={quantity >= currentSizeStock}
                      className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-30 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Main Add Button */}
                  <button
                    onClick={handleAdd}
                    disabled={currentSizeStock === 0}
                    className={`flex-1 py-3.5 px-6 rounded-xl font-display font-black text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                      isAddedSuccess
                        ? 'bg-emerald-500 text-black'
                        : currentSizeStock === 0
                        ? 'bg-[#222222] text-neutral-500 cursor-not-allowed'
                        : 'bg-[#D4FF00] hover:bg-[#bde600] text-black active:scale-98'
                    }`}
                  >
                    {isAddedSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-black" />
                        <span>Added to Cart!</span>
                      </>
                    ) : currentSizeStock === 0 ? (
                      <span>Sold Out in {selectedSize}</span>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-black" />
                        <span>Add to Cart • ${(product.price * quantity).toFixed(2)}</span>
                      </>
                    )}
                  </button>

                  {/* Wishlist & Compare Buttons */}
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`p-3.5 rounded-xl border transition-colors cursor-pointer ${
                      isWishlisted
                        ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                        : 'border-white/10 bg-[#1C1C1C] text-neutral-300 hover:border-white/40 hover:text-white'
                    }`}
                    title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                  </button>

                  <button
                    onClick={() => onToggleCompare(product)}
                    className={`p-3.5 rounded-xl border transition-colors cursor-pointer ${
                      isCompared
                        ? 'bg-[#D4FF00] border-[#D4FF00] text-black font-black'
                        : 'border-white/10 bg-[#1C1C1C] text-neutral-300 hover:border-white/40 hover:text-white'
                    }`}
                    title="Compare Specs"
                  >
                    <Layers className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Informational Tabs: Details, Specs, Fit Guide, Reviews */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex border-b border-white/10 gap-4 text-xs font-black uppercase tracking-wider">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'details'
                        ? 'border-[#D4FF00] text-[#D4FF00]'
                        : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    Highlights
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'specs'
                        ? 'border-[#D4FF00] text-[#D4FF00]'
                        : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    Specs & Care
                  </button>
                  <button
                    onClick={() => setActiveTab('fit')}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'fit'
                        ? 'border-[#D4FF00] text-[#D4FF00]'
                        : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    Size Matrix
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'reviews'
                        ? 'border-[#D4FF00] text-[#D4FF00]'
                        : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    Reviews ({product.reviews.length})
                  </button>
                </div>

                {/* Tab 1: Details */}
                {activeTab === 'details' && (
                  <div className="space-y-3 text-xs text-neutral-300 animate-in fade-in">
                    <p className="leading-relaxed">{product.description}</p>
                    <ul className="grid grid-cols-1 gap-1.5 pt-1">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-white">
                          <Check className="w-3.5 h-3.5 text-[#D4FF00] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-2.5 bg-[#1C1C1C] border border-white/5 rounded-xl text-neutral-400 flex items-center justify-between text-[11px]">
                      <span>Model height: <strong className="text-white">{product.modelInfo.height}</strong></span>
                      <span>Wearing size: <strong className="text-[#D4FF00]">{product.modelInfo.wearingSize}</strong></span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Fabric & Care Specs */}
                {activeTab === 'specs' && (
                  <div className="space-y-2.5 text-xs animate-in fade-in">
                    <div className="grid grid-cols-2 gap-2 text-white">
                      <div className="p-2.5 bg-[#1C1C1C] rounded-xl border border-white/5">
                        <span className="text-[10px] text-neutral-400 uppercase font-black tracking-wider block">Weight</span>
                        <span className="font-black text-[#D4FF00]">{product.fabric.gsm} GSM ({product.fabric.weightLabel})</span>
                      </div>
                      <div className="p-2.5 bg-[#1C1C1C] rounded-xl border border-white/5">
                        <span className="text-[10px] text-neutral-400 uppercase font-black tracking-wider block">Material</span>
                        <span className="font-bold">{product.fabric.material}</span>
                      </div>
                      <div className="p-2.5 bg-[#1C1C1C] rounded-xl border border-white/5">
                        <span className="text-[10px] text-neutral-400 uppercase font-black tracking-wider block">Weave</span>
                        <span className="font-bold">{product.fabric.weave}</span>
                      </div>
                      <div className="p-2.5 bg-[#1C1C1C] rounded-xl border border-white/5">
                        <span className="text-[10px] text-neutral-400 uppercase font-black tracking-wider block">Certifications</span>
                        <span className="font-bold text-emerald-400">{product.fabric.certifications.join(', ')}</span>
                      </div>
                    </div>
                    <div className="p-2.5 bg-[#1C1C1C] rounded-xl border border-white/5 text-[11px] text-neutral-300 space-y-1">
                      <span className="font-black text-white uppercase tracking-wider block">Garment Care Instructions:</span>
                      {product.fabric.careInstructions.map((c, idx) => (
                        <p key={idx}>• {c}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Fit & Size Guide Calculator */}
                {activeTab === 'fit' && (
                  <div className="space-y-3 text-xs animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="font-black uppercase tracking-wider text-white">Garment Measurements</span>
                      <div className="flex bg-[#1C1C1C] border border-white/10 rounded-lg p-0.5 text-[11px] font-bold">
                        <button
                          onClick={() => setUnit('in')}
                          className={`px-2 py-0.5 rounded cursor-pointer ${unit === 'in' ? 'bg-[#D4FF00] text-black font-black' : 'text-neutral-400'}`}
                        >
                          Inches
                        </button>
                        <button
                          onClick={() => setUnit('cm')}
                          className={`px-2 py-0.5 rounded cursor-pointer ${unit === 'cm' ? 'bg-[#D4FF00] text-black font-black' : 'text-neutral-400'}`}
                        >
                          CM
                        </button>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px] border border-white/10 rounded-lg overflow-hidden">
                        <thead className="bg-[#1C1C1C] font-black uppercase text-neutral-300">
                          <tr>
                            <th className="p-2">Size</th>
                            <th className="p-2">Chest</th>
                            <th className="p-2">Length</th>
                            <th className="p-2">Shoulder</th>
                            <th className="p-2">Sleeve</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 bg-[#0F0F0F]">
                          {product.measurements.map((m) => (
                            <tr key={m.size} className={selectedSize === m.size ? 'bg-[#1F1F1F] font-bold text-[#D4FF00]' : 'text-neutral-300'}>
                              <td className="p-2 font-mono">{m.size}</td>
                              <td className="p-2">{unit === 'in' ? `${m.chestIn}"` : `${m.chestCm} cm`}</td>
                              <td className="p-2">{unit === 'in' ? `${m.lengthIn}"` : `${m.lengthCm} cm`}</td>
                              <td className="p-2">{unit === 'in' ? `${m.shoulderIn}"` : `${m.shoulderCm} cm`}</td>
                              <td className="p-2">{unit === 'in' ? `${m.sleeveIn}"` : `${m.sleeveCm} cm`}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Interactive Fit Advisor */}
                    <div className="p-3 bg-[#0A0A0A] text-white border border-white/10 rounded-xl space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#D4FF00]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Interactive Fit Calculator</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="text-[10px] text-neutral-400 block font-bold uppercase">Height (cm)</label>
                          <input
                            type="number"
                            value={calcHeight}
                            onChange={(e) => setCalcHeight(e.target.value)}
                            className="w-full bg-[#1A1A1A] text-white px-2 py-1 rounded text-xs border border-white/10 font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-neutral-400 block font-bold uppercase">Weight (kg)</label>
                          <input
                            type="number"
                            value={calcWeight}
                            onChange={(e) => setCalcWeight(e.target.value)}
                            className="w-full bg-[#1A1A1A] text-white px-2 py-1 rounded text-xs border border-white/10 font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-neutral-400 block font-bold uppercase">Fit Silhouette</label>
                          <select
                            value={calcPref}
                            onChange={(e) => setCalcPref(e.target.value as any)}
                            className="w-full bg-[#1A1A1A] text-white px-1.5 py-1 rounded text-xs border border-white/10"
                          >
                            <option value="fitted">Tailored</option>
                            <option value="regular">Regular</option>
                            <option value="oversized">Boxy/Oversized</option>
                          </select>
                        </div>
                      </div>
                      <button
                        onClick={calculateFit}
                        className="w-full py-2 bg-[#D4FF00] hover:bg-[#bde600] text-black font-black uppercase tracking-wider rounded text-xs cursor-pointer transition-colors"
                      >
                        Calculate My Ideal Size
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 4: Reviews */}
                {activeTab === 'reviews' && (
                  <div className="space-y-3 text-xs animate-in fade-in max-h-56 overflow-y-auto pr-1">
                    {product.reviews.map((rev) => (
                      <div key={rev.id} className="p-3 bg-[#1C1C1C] rounded-xl border border-white/5 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-black text-white">{rev.author}</span>
                            {rev.verified && (
                              <span className="text-[10px] bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-1.5 py-0.2 rounded font-bold uppercase">
                                Verified
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-neutral-400 font-mono">{rev.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < rev.rating ? 'fill-[#D4FF00] text-[#D4FF00]' : 'text-neutral-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[10px] text-neutral-400 font-medium">
                            Fit: {rev.fitFeedback} • Size {rev.sizePurchased}
                          </span>
                        </div>
                        <p className="text-neutral-300 text-xs leading-relaxed">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
