import React, { useState, useMemo, useEffect } from 'react';
import { 
  SlidersHorizontal, 
  Grid3X3, 
  LayoutGrid, 
  Sparkles, 
  Filter, 
  ArrowUpDown, 
  Check, 
  X,
  Layers,
  Heart,
  ShoppingBag,
  RefreshCw
} from 'lucide-react';
import { 
  TShirtProduct, 
  TShirtCategory, 
  FilterState, 
  CartItem, 
  ColorVariant,
  FitType,
  NeckType 
} from './types';
import { PRODUCTS } from './data/products';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductCard } from './components/ProductCard';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { InteractiveTeeStudio } from './components/InteractiveTeeStudio';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CompareDrawer } from './components/CompareDrawer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { LookbookModal } from './components/LookbookModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  category: 'all',
  fitTypes: [],
  neckTypes: [],
  colorHexes: [],
  gsmWeights: [],
  minPrice: 25,
  maxPrice: 65,
  sizes: [],
  onlyInStock: false,
  onlyOrganic: false,
  onlySale: false,
  sortBy: 'featured',
};

export default function App() {
  // Navigation & Category
  const [activeCategory, setActiveCategory] = useState<TShirtCategory>('all');
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [currency, setCurrency] = useState('USD');
  const [gridCols, setGridCols] = useState<'standard' | 'editorial'>('standard');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Cart & Wishlist State
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('atelier_tee_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('atelier_tee_wishlist');
      return saved ? JSON.parse(saved) : ['tee-01', 'tee-07'];
    } catch {
      return ['tee-01', 'tee-07'];
    }
  });

  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; percent: number } | null>(null);

  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState<TShirtProduct | null>(null);
  const [quickViewColor, setQuickViewColor] = useState<ColorVariant | undefined>(undefined);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save Cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('atelier_tee_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Save Wishlist to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('atelier_tee_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Sync Category to Filters
  const handleSelectCategory = (cat: TShirtCategory) => {
    setActiveCategory(cat);
    setFilters((prev) => ({ ...prev, category: cat }));
  };

  // Add standard product to cart
  const handleAddToCart = (
    product: TShirtProduct,
    color: ColorVariant,
    size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL',
    quantity: number = 1
  ) => {
    const itemKey = `${product.id}-${color.id}-${size}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemKey);
      if (existing) {
        return prev.map((item) =>
          item.id === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: itemKey,
          product,
          selectedColor: color,
          selectedSize: size,
          quantity,
        },
      ];
    });
    showToast(`Added ${product.title} (${color.name}, ${size}) to Bag!`);
  };

  // Add customized studio product to cart
  const handleAddCustomToCart = (
    baseProduct: TShirtProduct,
    color: ColorVariant,
    size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL',
    customPrint: {
      designName: string;
      placement: 'center-chest' | 'back-oversized' | 'pocket-left';
      previewUrl: string;
    }
  ) => {
    const itemKey = `custom-${baseProduct.id}-${color.id}-${size}-${customPrint.designName}`;
    setCart((prev) => [
      ...prev,
      {
        id: itemKey,
        product: baseProduct,
        selectedColor: color,
        selectedSize: size,
        quantity: 1,
        customPrint,
      },
    ]);
    showToast(`Custom piece "${customPrint.designName}" added to bag!`);
  };

  // Wishlist toggle
  const handleToggleWishlist = (product: TShirtProduct) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Added to Saved Wishlist!`);
        return [...prev, product.id];
      }
    });
  };

  // Compare toggle
  const handleToggleCompare = (product: TShirtProduct) => {
    setCompareIds((prev) => {
      if (prev.includes(product.id)) {
        return prev.filter((id) => id !== product.id);
      }
      if (prev.length >= 3) {
        showToast('You can compare up to 3 T-shirts at a time');
        return prev;
      }
      showToast(`Added to comparison matrix`);
      return [...prev, product.id];
    });
  };

  // Promo Code Validation
  const handleApplyPromoCode = (code: string): boolean => {
    const clean = code.toUpperCase().trim();
    if (clean === 'COTTON10' || clean === 'TEELOVER10' || clean === 'WELCOME10') {
      setAppliedDiscount({ code: clean, percent: 10 });
      showToast('10% Discount Applied!');
      return true;
    }
    if (clean === 'HEAVYWEIGHT15') {
      setAppliedDiscount({ code: clean, percent: 15 });
      showToast('15% Heavyweight Discount Applied!');
      return true;
    }
    return false;
  };

  // Extract unique colors for palette filter
  const availableColors = useMemo(() => {
    const map = new Map<string, { name: string; hex: string }>();
    PRODUCTS.forEach((p) => {
      p.colors.forEach((c) => {
        if (!map.has(c.hex)) {
          map.set(c.hex, { name: c.name, hex: c.hex });
        }
      });
    });
    return Array.from(map.values());
  }, []);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // 1. Search Query
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesSub = p.subtitle.toLowerCase().includes(q);
        const matchesFabric = p.fabric.material.toLowerCase().includes(q);
        const matchesFit = p.fit.toLowerCase().includes(q);
        const matchesGsm = `${p.fabric.gsm}`.includes(q);
        if (!matchesTitle && !matchesSub && !matchesFabric && !matchesFit && !matchesGsm) {
          return false;
        }
      }

      // 2. Category
      if (filters.category !== 'all') {
        if (filters.category === 'heavyweight') {
          if (p.fabric.gsm < 280) return false;
        } else if (filters.category === 'organic-cotton') {
          if (!p.isOrganic) return false;
        } else if (p.category !== filters.category) {
          return false;
        }
      }

      // 3. Silhouette / Fit
      if (filters.fitTypes.length > 0) {
        if (!filters.fitTypes.includes(p.fit)) return false;
      }

      // 4. Neckline
      if (filters.neckTypes.length > 0) {
        if (!filters.neckTypes.includes(p.neckline)) return false;
      }

      // 5. Colors
      if (filters.colorHexes.length > 0) {
        const hasColor = p.colors.some((c) => filters.colorHexes.includes(c.hex));
        if (!hasColor) return false;
      }

      // 6. GSM Weights
      if (filters.gsmWeights.length > 0) {
        const matchesWeight = filters.gsmWeights.some((w) => {
          const num = parseInt(w, 10);
          if (num === 180) return p.fabric.gsm <= 190;
          if (num === 220) return p.fabric.gsm > 190 && p.fabric.gsm <= 230;
          if (num === 280) return p.fabric.gsm >= 240 && p.fabric.gsm <= 290;
          if (num === 300) return p.fabric.gsm >= 300;
          return false;
        });
        if (!matchesWeight) return false;
      }

      // 7. Price
      if (p.price < filters.minPrice || p.price > filters.maxPrice) {
        return false;
      }

      // 8. Size availability
      if (filters.sizes.length > 0) {
        const hasAvailableSize = p.sizes.some(
          (s) => filters.sizes.includes(s.size) && s.stock > 0
        );
        if (!hasAvailableSize) return false;
      }

      // 9. Toggles
      if (filters.onlyInStock) {
        const inStock = p.sizes.some((s) => s.stock > 0);
        if (!inStock) return false;
      }

      if (filters.onlyOrganic && !p.isOrganic) {
        return false;
      }

      if (filters.onlySale && !p.isSale) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'heaviest') return b.fabric.gsm - a.fabric.gsm;
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [filters]);

  const wishlistedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  }, [wishlistIds]);

  const comparedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => compareIds.includes(p.id));
  }, [compareIds]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F] text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-22 right-4 sm:right-8 z-50 bg-[#141414] text-white text-xs font-black uppercase tracking-wider px-4 py-3 rounded-2xl shadow-2xl border border-[#D4FF00]/40 flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-200">
          <Sparkles className="w-4 h-4 text-[#D4FF00]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Announcement Bar */}
      <AnnouncementBar
        currency={currency}
        setCurrency={setCurrency}
        onOpenStudio={() => setIsStudioOpen(true)}
      />

      {/* Main Sticky Header */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => setFilters((prev) => ({ ...prev, searchQuery: q }))}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        compareCount={compareIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenStudio={() => setIsStudioOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onOpenLookbook={() => setIsLookbookOpen(true)}
        products={PRODUCTS}
        onSelectProduct={(p) => {
          setQuickViewProduct(p);
          setQuickViewColor(p.colors[0]);
        }}
      />

      {/* Hero Banner Showcase */}
      <HeroBanner
        onSelectCategory={handleSelectCategory}
        onOpenStudio={() => setIsStudioOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Main Catalog View Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full pb-16">
        {/* Top Control Bar: Results count, Active Category Title, Sorting & View Toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-white">
              {activeCategory === 'all'
                ? 'All Engineered T-Shirts'
                : activeCategory === 'heavyweight'
                ? 'Heavyweight 280+ GSM Series'
                : activeCategory === 'vintage-wash'
                ? 'Vintage & Mineral Wash Archive'
                : activeCategory === 'graphic-streetwear'
                ? 'Graphic Silkscreen & Streetwear'
                : activeCategory === 'minimal-basics'
                ? 'Minimalist Supima & Double Knit'
                : activeCategory === 'organic-cotton'
                ? '100% GOTS Certified Organic'
                : 'Utility Pocket & French Terry Henley'}
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Showing <span className="text-[#D4FF00] font-mono font-bold">{filteredProducts.length}</span> of {PRODUCTS.length} curated styles
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3.5 py-2 bg-[#191919] border border-white/10 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-xs cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>Filters</span>
            </button>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 hidden md:inline">Sort:</span>
              <select
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))
                }
                className="bg-[#191919] text-white text-xs font-bold uppercase tracking-wider rounded-xl px-3 py-2 border border-white/10 focus:outline-none focus:border-[#D4FF00] cursor-pointer shadow-xs"
              >
                <option value="featured" className="bg-[#141414] text-white">Featured & Bestsellers</option>
                <option value="heaviest" className="bg-[#141414] text-white">Heaviest Density (GSM)</option>
                <option value="newest" className="bg-[#141414] text-white">New Releases</option>
                <option value="price-low" className="bg-[#141414] text-white">Price: Low to High</option>
                <option value="price-high" className="bg-[#141414] text-white">Price: High to Low</option>
                <option value="rating" className="bg-[#141414] text-white">Top Customer Rating</option>
              </select>
            </div>

            {/* Grid Layout Toggle */}
            <div className="hidden sm:flex bg-[#191919] border border-white/10 rounded-xl p-1 shadow-xs">
              <button
                onClick={() => setGridCols('standard')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  gridCols === 'standard'
                    ? 'bg-[#D4FF00] text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Standard Grid (3-4 columns)"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols('editorial')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  gridCols === 'editorial'
                    ? 'bg-[#D4FF00] text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Editorial Showcase (2 columns)"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Badges Bar */}
        {(filters.fitTypes.length > 0 ||
          filters.neckTypes.length > 0 ||
          filters.colorHexes.length > 0 ||
          filters.gsmWeights.length > 0 ||
          filters.sizes.length > 0 ||
          filters.searchQuery ||
          filters.onlyOrganic ||
          filters.onlySale ||
          filters.onlyInStock) && (
          <div className="flex flex-wrap items-center gap-2 py-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Active Filters:</span>

            {filters.searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#191919] border border-white/10 text-white text-xs rounded-full">
                Search: "{filters.searchQuery}"
                <button
                  onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
                  className="hover:text-[#D4FF00] cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.gsmWeights.map((w) => (
              <span key={w} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#1F1F1F] border border-[#D4FF00]/30 text-[#D4FF00] text-xs font-mono font-bold rounded-full">
                {w} GSM
                <button
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      gsmWeights: prev.gsmWeights.filter((item) => item !== w),
                    }))
                  }
                  className="cursor-pointer hover:text-white"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.fitTypes.map((fit) => (
              <span key={fit} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#191919] border border-white/10 text-white text-xs rounded-full uppercase tracking-wider font-mono">
                {fit}
                <button
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      fitTypes: prev.fitTypes.filter((f) => f !== fit),
                    }))
                  }
                  className="cursor-pointer hover:text-[#D4FF00]"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.sizes.map((s) => (
              <span key={s} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#191919] border border-white/10 text-white text-xs rounded-full font-mono font-bold">
                Size {s}
                <button
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      sizes: prev.sizes.filter((sz) => sz !== s),
                    }))
                  }
                  className="cursor-pointer hover:text-[#D4FF00]"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.onlyOrganic && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase tracking-wider rounded-full">
                Organic Certified
                <button
                  onClick={() => setFilters((prev) => ({ ...prev, onlyOrganic: false }))}
                  className="cursor-pointer hover:text-white"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={() => setFilters(INITIAL_FILTERS)}
              className="text-xs text-[#D4FF00] hover:underline font-black uppercase tracking-wider ml-1 cursor-pointer"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Content Layout: Sidebar + Product Grid */}
        <div className="flex flex-col lg:flex-row gap-8 pt-6">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              onResetFilters={() => setFilters(INITIAL_FILTERS)}
              availableColors={availableColors}
              totalResults={filteredProducts.length}
            />
          </div>

          {/* Mobile Filter Modal */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex justify-end">
              <div className="bg-[#141414] text-white w-full max-w-sm h-full p-6 overflow-y-auto space-y-6 border-l border-white/10">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <h3 className="font-display font-black text-base uppercase tracking-tight text-white">Filter Catalogue</h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1 text-neutral-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar
                  filters={filters}
                  onFilterChange={setFilters}
                  onResetFilters={() => setFilters(INITIAL_FILTERS)}
                  availableColors={availableColors}
                  totalResults={filteredProducts.length}
                />
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3 bg-[#D4FF00] hover:bg-[#bde600] text-black font-black uppercase tracking-wider text-xs rounded-xl"
                >
                  Apply Filters ({filteredProducts.length} Results)
                </button>
              </div>
            </div>
          )}

          {/* Product Grid Area */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center bg-[#141414] rounded-3xl border border-white/10 p-8 space-y-4 shadow-sm">
                <div className="w-16 h-16 bg-[#1F1F1F] rounded-full flex items-center justify-center mx-auto text-[#D4FF00] border border-white/10">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-lg uppercase tracking-tight text-white">
                  No T-shirts matched your filters
                </h3>
                <p className="text-xs text-neutral-400 max-w-md mx-auto">
                  Try clearing your search query or selecting a broader fabric GSM density or color palette.
                </p>
                <button
                  onClick={() => setFilters(INITIAL_FILTERS)}
                  className="px-6 py-2.5 bg-[#D4FF00] text-black rounded-full text-xs font-black uppercase tracking-wider hover:bg-[#bde600] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-5 sm:gap-6 ${
                  gridCols === 'editorial'
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p, col) => {
                      setQuickViewProduct(p);
                      setQuickViewColor(col);
                    }}
                    onAddToCart={(p, col, sz) => handleAddToCart(p, col, sz, 1)}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    isCompared={compareIds.includes(product.id)}
                    onToggleCompare={handleToggleCompare}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Floating Bottom Comparison Bar / Modal */}
      <CompareDrawer
        compareProducts={comparedProducts}
        onRemove={(id) => setCompareIds((prev) => prev.filter((item) => item !== id))}
        onClearAll={() => setCompareIds([])}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(!isCompareOpen)}
        onAddToCart={(p, c, s) => handleAddToCart(p, c, s, 1)}
        onOpenQuickView={(p) => {
          setQuickViewProduct(p);
          setQuickViewColor(p.colors[0]);
        }}
      />

      {/* Quick View Product Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        initialColor={quickViewColor}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        isCompared={quickViewProduct ? compareIds.includes(quickViewProduct.id) : false}
        onToggleCompare={handleToggleCompare}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onOpenStudio={() => setIsStudioOpen(true)}
      />

      {/* Interactive Mockup Studio Modal */}
      <InteractiveTeeStudio
        products={PRODUCTS}
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        onAddCustomToCart={handleAddCustomToCart}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Wishlist Drawer/Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistedProducts}
        onRemove={(id) => setWishlistIds((prev) => prev.filter((item) => item !== id))}
        onAddToCart={(p, c, s) => handleAddToCart(p, c, s, 1)}
        onOpenQuickView={(p) => {
          setQuickViewProduct(p);
          setQuickViewColor(p.colors[0]);
        }}
      />

      {/* Editorial Lookbook Modal */}
      <LookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        products={PRODUCTS}
        onOpenProduct={(p) => {
          setQuickViewProduct(p);
          setQuickViewColor(p.colors[0]);
        }}
      />

      {/* Shopping Bag Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={(cartItemId, newQty) => {
          if (newQty <= 0) {
            setCart((prev) => prev.filter((item) => item.id !== cartItemId));
          } else {
            setCart((prev) =>
              prev.map((item) =>
                item.id === cartItemId ? { ...item, quantity: newQty } : item
              )
            );
          }
        }}
        onRemoveItem={(cartItemId) => {
          setCart((prev) => prev.filter((item) => item.id !== cartItemId));
          showToast('Item removed from Bag');
        }}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        appliedDiscount={appliedDiscount}
        onApplyPromoCode={handleApplyPromoCode}
      />

      {/* Checkout Order Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        appliedDiscount={appliedDiscount}
        onOrderCompleted={() => {
          setCart([]);
        }}
      />

      {/* Footer */}
      <Footer
        onOpenStudio={() => setIsStudioOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onOpenLookbook={() => setIsLookbookOpen(true)}
      />
    </div>
  );
}
