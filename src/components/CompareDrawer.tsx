import React, { useState } from 'react';
import { Layers, X, Check, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { TShirtProduct, ColorVariant } from '../types';

interface CompareDrawerProps {
  compareProducts: TShirtProduct[];
  onRemove: (productId: string) => void;
  onClearAll: () => void;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: TShirtProduct, color: ColorVariant, size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  onOpenQuickView: (product: TShirtProduct) => void;
}

export const CompareDrawer: React.FC<CompareDrawerProps> = ({
  compareProducts,
  onRemove,
  onClearAll,
  isOpen,
  onClose,
  onAddToCart,
  onOpenQuickView,
}) => {
  if (!isOpen && compareProducts.length === 0) return null;

  if (!isOpen && compareProducts.length > 0) {
    return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#141414] text-white px-5 py-3 rounded-full shadow-2xl border border-white/20 flex items-center gap-4 animate-in slide-in-from-bottom-5">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider font-display">
          <Layers className="w-4 h-4 text-[#D4FF00]" />
          <span>{compareProducts.length} T-Shirts Selected</span>
        </div>

        <div className="flex items-center gap-2">
          {compareProducts.map((p) => (
            <img
              key={p.id}
              src={p.colors[0]?.images.front}
              alt={p.title}
              className="w-8 h-8 rounded-full object-cover border border-white/20"
            />
          ))}
        </div>

        <button
          onClick={onClose}
          className="px-4 py-1.5 bg-[#D4FF00] text-black hover:bg-[#bde600] text-xs font-black uppercase tracking-wider rounded-full transition-all cursor-pointer"
        >
          Compare Matrix
        </button>

        <button
          onClick={onClearAll}
          className="text-neutral-400 hover:text-white p-1 cursor-pointer"
          title="Clear all"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div 
        className="relative bg-[#141414] text-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-white/10 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1F1F1F] text-[#D4FF00] border border-white/10 rounded-xl flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl uppercase tracking-tight text-white">
                T-Shirt Spec Comparison Matrix
              </h2>
              <p className="text-xs text-neutral-400">
                Compare fabric density, silhouette architecture, and materials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClearAll}
              className="text-xs text-rose-400 hover:text-rose-300 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear All
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#222222] hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {compareProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#191919] rounded-2xl p-4 border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Image & Remove */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#111111] border border-white/10">
                  <img
                    src={product.colors[0]?.images.front}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => onRemove(product.id)}
                    className="absolute top-2 right-2 w-7 h-7 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center shadow-xs cursor-pointer border border-white/20"
                    title="Remove from comparison"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <span className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/90 text-[#D4FF00] font-mono text-xs font-black rounded border border-white/10">
                    {product.fabric.gsm} GSM
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-xs uppercase tracking-tight text-white line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-base font-black font-display text-[#D4FF00] mt-1">
                    ${product.price}
                  </p>
                </div>

                {/* Specs List */}
                <div className="space-y-2 text-xs divide-y divide-white/10 text-neutral-300">
                  <div className="pt-2 flex justify-between">
                    <span className="text-neutral-400">Silhouette</span>
                    <span className="font-bold text-white font-mono">{product.fit}</span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <span className="text-neutral-400">Neckline</span>
                    <span className="font-bold text-white">{product.neckline}</span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <span className="text-neutral-400">Fabric</span>
                    <span className="font-medium text-white text-right max-w-[150px] truncate">
                      {product.fabric.material}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <span className="text-neutral-400">Certifications</span>
                    <span className="text-[#D4FF00] font-bold text-right">
                      {product.fabric.certifications[0] || 'Standard'}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <span className="text-neutral-400">Pre-Shrunk</span>
                    <span className="font-bold text-white">
                      {product.fabric.preShrunk ? 'Yes (0% Shrink)' : 'Standard'}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <span className="text-neutral-400">Made In</span>
                    <span className="font-medium text-white">{product.fabric.madeIn}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-white/10 flex gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuickView(product);
                  }}
                  className="flex-1 py-2 bg-[#222222] hover:bg-white text-white hover:text-black rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer border border-white/10"
                >
                  Details
                </button>
                <button
                  onClick={() => onAddToCart(product, product.colors[0], 'M')}
                  className="flex-1 py-2 bg-[#D4FF00] hover:bg-[#bde600] text-black rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-black" />
                  <span>+ Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
