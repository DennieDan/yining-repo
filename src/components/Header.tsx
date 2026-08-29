import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  SlidersHorizontal, 
  Sparkles, 
  Ruler, 
  Layers, 
  X,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { TShirtCategory, TShirtProduct } from '../types';
import { CATEGORIES_CONFIG } from '../data/products';

interface HeaderProps {
  activeCategory: TShirtCategory;
  onSelectCategory: (cat: TShirtCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  cartCount: number;
  wishlistCount: number;
  compareCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenCompare: () => void;
  onOpenStudio: () => void;
  onOpenSizeGuide: () => void;
  onOpenLookbook: () => void;
  products: TShirtProduct[];
  onSelectProduct: (p: TShirtProduct) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  cartCount,
  wishlistCount,
  compareCount,
  onOpenCart,
  onOpenWishlist,
  onOpenCompare,
  onOpenStudio,
  onOpenSizeGuide,
  onOpenLookbook,
  products,
  onSelectProduct,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Suggestions for live search
  const filteredSuggestions = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.fabric.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.fit.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Click outside to close search popover
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectCategory('all')}
              className="text-left group cursor-pointer flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-[#D4FF00] text-black rounded-lg flex items-center justify-center font-black tracking-tighter text-xl shadow-sm group-hover:scale-105 transition-transform">
                AT
              </div>
              <div>
                <span className="font-display text-xl font-black tracking-tight text-white block leading-tight">
                  ATELIER // TEE
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4FF00] block">
                  Heavyweight Cotton & Blank Archives
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Search Bar with Live Suggestions */}
          <div ref={searchContainerRef} className="hidden md:block relative flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                placeholder="Search by GSM (e.g. 280), fit, fabric..."
                className="w-full pl-10 pr-9 py-2 text-xs font-medium bg-[#1A1A1A] hover:bg-[#222222] focus:bg-[#1A1A1A] text-white rounded-full border border-white/15 focus:border-[#D4FF00] focus:outline-none transition-all placeholder:text-neutral-500"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    onSearchChange('');
                    setIsSearchOpen(false);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Search Dropdown Results */}
            {isSearchOpen && searchQuery.trim() && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-[#171717] rounded-2xl shadow-2xl border border-white/15 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-3 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-neutral-400 flex justify-between items-center bg-[#1F1F1F]">
                  <span>Matching T-Shirts ({filteredSuggestions.length})</span>
                  <span className="text-neutral-500 font-mono text-[10px]">ESC to close</span>
                </div>
                {filteredSuggestions.length > 0 ? (
                  <div className="divide-y divide-white/10 max-h-80 overflow-y-auto">
                    {filteredSuggestions.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          onSelectProduct(product);
                          setIsSearchOpen(false);
                        }}
                        className="w-full p-3 flex items-center gap-3 hover:bg-[#242424] text-left transition-colors cursor-pointer"
                      >
                        <img
                          src={product.colors[0]?.images.front}
                          alt={product.title}
                          className="w-12 h-14 object-cover rounded-lg bg-neutral-900 border border-white/10"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-white truncate font-display">
                            {product.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5 text-xs text-neutral-400">
                            <span className="font-mono font-bold text-[#D4FF00]">
                              {product.fabric.gsm} GSM
                            </span>
                            <span>•</span>
                            <span className="uppercase tracking-wider text-[11px]">{product.fit}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-black text-white font-display">
                            ${product.price}
                          </span>
                          <span className="block text-[10px] text-[#D4FF00] font-bold uppercase tracking-wider">
                            {product.colors.length} colors
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-xs text-neutral-400">
                    No T-shirts matched "{searchQuery}". Try "280 GSM", "Heavyweight", or "Organic".
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Live Studio Button */}
            <button
              onClick={onOpenStudio}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-black uppercase tracking-wider text-black bg-[#D4FF00] hover:bg-[#bde600] rounded-full transition-all cursor-pointer shadow-sm hover:scale-102 active:scale-98"
              title="Custom T-Shirt Mockup Studio"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Studio</span>
            </button>

            {/* Lookbook Button */}
            <button
              onClick={onOpenLookbook}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Lookbook</span>
            </button>

            {/* Size Guide Button */}
            <button
              onClick={onOpenSizeGuide}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>Fit Guide</span>
            </button>

            {/* Compare Button */}
            {compareCount > 0 && (
              <button
                onClick={onOpenCompare}
                className="relative p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                title="Compare Selected Products"
              >
                <Layers className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4FF00] text-black text-[10px] font-black rounded-full flex items-center justify-center">
                  {compareCount}
                </span>
              </button>
            )}

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              title="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-black rounded-full flex items-center justify-center animate-in zoom-in-50">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#D4FF00] hover:bg-[#bde600] text-black px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer ml-1"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="w-5 h-5 bg-black text-[#D4FF00] rounded-full flex items-center justify-center text-[11px] font-black font-mono">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Secondary Category Pills Nav Bar */}
        <div className="py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none border-t border-white/10">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-[0.15em] pl-1 pr-2 hidden md:inline">
            Archives:
          </span>
          {CATEGORIES_CONFIG.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id as TShirtCategory)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#D4FF00] text-black shadow-xs font-black'
                    : 'bg-[#1C1C1C] text-neutral-300 hover:bg-[#2A2A2A] hover:text-white border border-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                    isActive ? 'bg-black text-[#D4FF00]' : 'bg-white/10 text-neutral-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
