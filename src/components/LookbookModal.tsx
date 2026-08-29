import React from 'react';
import { BookOpen, X, ArrowRight, Sparkles, Shirt } from 'lucide-react';
import { LookbookItem, TShirtProduct } from '../types';
import { LOOKBOOK_ITEMS } from '../data/products';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: TShirtProduct[];
  onOpenProduct: (product: TShirtProduct) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  isOpen,
  onClose,
  products,
  onOpenProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#141414] text-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-white/10 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1F1F1F] text-[#D4FF00] border border-white/10 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl uppercase tracking-tight text-white">
                Editorial Stylebook & Outfits
              </h2>
              <p className="text-xs text-neutral-400">
                Curated silhouette layering guides for every occasion
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

        {/* Lookbook Grid */}
        <div className="space-y-8">
          {LOOKBOOK_ITEMS.map((look, index) => {
            const featuredProd = products.find((p) => p.id === look.featuredProductId);

            return (
              <div
                key={look.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-5 bg-[#191919] rounded-2xl border border-white/10"
              >
                {/* Look Photo */}
                <div className="md:col-span-6 aspect-[4/5] rounded-xl overflow-hidden bg-[#111111] border border-white/10 relative group">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-black/90 backdrop-blur-xs text-[#D4FF00] text-[10px] font-black uppercase tracking-wider rounded-lg border border-white/10 shadow-sm">
                    {look.styleTag}
                  </span>
                </div>

                {/* Look Info & Outfit Breakdown */}
                <div className="md:col-span-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#D4FF00]">
                      Look #{index + 1}
                    </span>
                    <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                      {look.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {look.description}
                    </p>
                  </div>

                  {/* Layering Breakdown */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-white block">
                      Outfit Pairing Formula:
                    </span>
                    <div className="space-y-1.5">
                      {look.outfitItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 bg-[#141414] rounded-lg border border-white/10 text-xs"
                        >
                          <span className="font-bold text-white">{item.item}</span>
                          <span className="text-[10px] text-neutral-400 font-mono">{item.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shop the featured tee button */}
                  {featuredProd && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenProduct(featuredProd);
                      }}
                      className="w-full py-3 px-4 bg-[#D4FF00] hover:bg-[#bde600] text-black rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                    >
                      <Shirt className="w-4 h-4 text-black" />
                      <span>Shop Featured Tee (${featuredProd.price})</span>
                      <ArrowRight className="w-3.5 h-3.5 text-black" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
