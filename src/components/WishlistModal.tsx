import React from 'react';
import { Heart, X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { TShirtProduct, ColorVariant } from '../types';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: TShirtProduct[];
  onRemove: (productId: string) => void;
  onAddToCart: (product: TShirtProduct, color: ColorVariant, size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  onOpenQuickView: (product: TShirtProduct) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemove,
  onAddToCart,
  onOpenQuickView,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#141414] text-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1F1F1F] text-[#D4FF00] border border-white/10 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 fill-[#D4FF00]" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl uppercase tracking-tight text-white">
                Saved Wishlist ({wishlistProducts.length})
              </h2>
              <p className="text-xs text-neutral-400">
                Keep track of your favorite heavy cotton pieces and colorways
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#222222] hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        {wishlistProducts.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <div className="w-16 h-16 bg-[#1F1F1F] rounded-full flex items-center justify-center mx-auto text-[#D4FF00] border border-white/10">
              <Heart className="w-8 h-8" />
            </div>
            <p className="text-sm font-black uppercase tracking-wider text-white">Your wishlist is empty</p>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              Tap the heart icon on any T-shirt card to save pieces for later.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 bg-[#D4FF00] text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#bde600] transition-colors cursor-pointer"
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="p-3 bg-[#191919] rounded-2xl border border-white/10 flex gap-3 group relative"
              >
                <img
                  src={product.colors[0]?.images.front}
                  alt={product.title}
                  className="w-20 h-26 object-cover rounded-xl bg-[#111111] border border-white/10"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4
                        onClick={() => {
                          onClose();
                          onOpenQuickView(product);
                        }}
                        className="font-display font-black text-xs uppercase tracking-tight text-white line-clamp-1 hover:text-[#D4FF00] cursor-pointer"
                      >
                        {product.title}
                      </h4>
                      <button
                        onClick={() => onRemove(product.id)}
                        className="text-neutral-400 hover:text-rose-400 p-0.5 cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-400">
                      <span className="font-mono font-bold text-[#D4FF00]">{product.fabric.gsm} GSM</span>
                      <span>•</span>
                      <span className="font-mono">{product.fit}</span>
                    </div>

                    <p className="text-xs font-black font-display text-white mt-1">
                      ${product.price}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(product, product.colors[0], 'M');
                    }}
                    className="w-full py-2 bg-[#D4FF00] hover:bg-[#bde600] text-black text-xs font-black uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-black" />
                    <span>+ Quick Bag</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
