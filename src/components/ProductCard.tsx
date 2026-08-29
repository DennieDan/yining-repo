import React, { useState } from 'react';
import { 
  Heart, 
  Eye, 
  ShoppingBag, 
  Star, 
  Check, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { TShirtProduct, ColorVariant } from '../types';

interface ProductCardProps {
  product: TShirtProduct;
  onQuickView: (product: TShirtProduct, initialColor?: ColorVariant) => void;
  onAddToCart: (product: TShirtProduct, color: ColorVariant, size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: TShirtProduct) => void;
  isCompared: boolean;
  onToggleCompare: (product: TShirtProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  isCompared,
  onToggleCompare,
}) => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickSize, setShowQuickSize] = useState(false);
  const [addedSize, setAddedSize] = useState<string | null>(null);

  // Available image to show: Front normally, Back or Model on hover
  const currentImg = isHovered && selectedColor.images.back
    ? selectedColor.images.back
    : selectedColor.images.front;

  const handleQuickAdd = (size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL') => {
    onAddToCart(product, selectedColor, size);
    setAddedSize(size);
    setTimeout(() => {
      setAddedSize(null);
      setShowQuickSize(false);
    }, 1200);
  };

  return (
    <div 
      className="group relative flex flex-col bg-[#171717] text-white rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4FF00]/60 hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickSize(false);
      }}
    >
      {/* Top Image Box */}
      <div className="relative aspect-[3/4] w-full bg-[#101010] overflow-hidden">
        {/* Main Image */}
        <img
          src={currentImg}
          alt={`${product.title} in ${selectedColor.name}`}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="px-2.5 py-1 bg-[#D4FF00] text-black text-[11px] font-black rounded-md uppercase tracking-wider shadow-sm">
            {product.fabric.gsm} GSM
          </span>

          {product.isBestseller && (
            <span className="px-2 py-0.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-md shadow-xs">
              Bestseller
            </span>
          )}

          {product.isOrganic && (
            <span className="px-2 py-0.5 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest rounded-md shadow-xs">
              Organic
            </span>
          )}

          {product.isSale && (
            <span className="px-2 py-0.5 bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest rounded-md shadow-xs">
              Sale
            </span>
          )}
        </div>

        {/* Top Right Quick Actions: Wishlist & Compare */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm ${
              isWishlisted
                ? 'bg-rose-500 text-white scale-105'
                : 'bg-[#0F0F0F]/80 text-neutral-300 hover:text-white hover:bg-black backdrop-blur-xs border border-white/10'
            }`}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white text-white' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(product);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm ${
              isCompared
                ? 'bg-[#D4FF00] text-black scale-105'
                : 'bg-[#0F0F0F]/80 text-neutral-300 hover:text-white hover:bg-black opacity-0 group-hover:opacity-100 backdrop-blur-xs border border-white/10'
            }`}
            title={isCompared ? 'Remove from comparison' : 'Compare this T-shirt'}
          >
            <Layers className="w-4 h-4" />
          </button>
        </div>

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-x-3 bottom-3 flex gap-2 z-10">
          <button
            onClick={() => onQuickView(product, selectedColor)}
            className="flex-1 py-2.5 bg-[#1F1F1F]/90 hover:bg-white text-white hover:text-black text-xs font-black uppercase tracking-wider rounded-xl shadow-lg backdrop-blur-xs border border-white/15 flex items-center justify-center gap-1.5 transition-all opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>

          <button
            onClick={() => setShowQuickSize(!showQuickSize)}
            className="px-3.5 py-2.5 bg-[#D4FF00] hover:bg-[#bde600] text-black text-xs font-black uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-1.5 transition-all opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer"
            title="Quick Add Size"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-black" />
            <span>+ Add</span>
          </button>
        </div>

        {/* Quick Size Popover overlay */}
        {showQuickSize && (
          <div className="absolute inset-x-0 bottom-0 bg-[#0F0F0F]/95 text-white p-3.5 z-20 backdrop-blur-md border-t border-white/10 animate-in slide-in-from-bottom duration-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">
                Select Size ({selectedColor.name})
              </span>
              <button
                onClick={() => setShowQuickSize(false)}
                className="text-neutral-400 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-6 gap-1">
              {product.sizes.map((s) => {
                const isOutOfStock = s.stock === 0;
                const isJustAdded = addedSize === s.size;
                return (
                  <button
                    key={s.size}
                    disabled={isOutOfStock}
                    onClick={() => handleQuickAdd(s.size)}
                    className={`py-1.5 text-xs font-black font-mono rounded flex items-center justify-center transition-all cursor-pointer ${
                      isJustAdded
                        ? 'bg-[#D4FF00] text-black font-black'
                        : isOutOfStock
                        ? 'bg-[#1F1F1F] text-neutral-600 line-through cursor-not-allowed'
                        : 'bg-[#222222] text-white hover:bg-[#D4FF00] hover:text-black'
                    }`}
                  >
                    {isJustAdded ? <Check className="w-3 h-3" /> : s.size}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Product Details Section */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        {/* Colors & Category line */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {product.colors.map((color) => {
              const isSelected = selectedColor.id === color.id;
              return (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color)}
                  title={color.name}
                  className={`w-4 h-4 rounded-full border transition-transform cursor-pointer ${
                    isSelected
                      ? 'scale-125 ring-2 ring-[#D4FF00] ring-offset-1 ring-offset-[#171717] border-white'
                      : 'border-neutral-600 hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              );
            })}
            <span className="text-[10px] uppercase font-bold text-neutral-400 pl-1">
              {product.colors.length} {product.colors.length === 1 ? 'color' : 'colors'}
            </span>
          </div>

          <span className="text-[10px] font-bold text-[#D4FF00] uppercase tracking-widest">
            {product.fit}
          </span>
        </div>

        {/* Title */}
        <div className="cursor-pointer" onClick={() => onQuickView(product, selectedColor)}>
          <h3 className="font-display font-black text-sm text-white group-hover:text-[#D4FF00] uppercase tracking-tight transition-colors line-clamp-1">
            {product.title}
          </h3>
          <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Rating Bottom Line */}
        <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-black font-display text-white tracking-tight">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs text-neutral-300">
            <Star className="w-3.5 h-3.5 fill-[#D4FF00] text-[#D4FF00]" />
            <span className="font-bold text-white">{product.rating}</span>
            <span className="text-[10px] text-neutral-400">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};
