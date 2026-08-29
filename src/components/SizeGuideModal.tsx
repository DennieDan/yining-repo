import React, { useState } from 'react';
import { X, Ruler, Sparkles, Check, Info, HelpCircle } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MEASUREMENTS_DATA = [
  { size: 'XS', chestCm: 104, lengthCm: 68, shoulderCm: 50, sleeveCm: 22, chestIn: 41.0, lengthIn: 26.8, shoulderIn: 19.7, sleeveIn: 8.7 },
  { size: 'S', chestCm: 110, lengthCm: 71, shoulderCm: 52, sleeveCm: 23, chestIn: 43.3, lengthIn: 28.0, shoulderIn: 20.5, sleeveIn: 9.1 },
  { size: 'M', chestCm: 116, lengthCm: 73, shoulderCm: 54, sleeveCm: 24, chestIn: 45.7, lengthIn: 28.7, shoulderIn: 21.3, sleeveIn: 9.4 },
  { size: 'L', chestCm: 122, lengthCm: 75, shoulderCm: 56, sleeveCm: 25, chestIn: 48.0, lengthIn: 29.5, shoulderIn: 22.0, sleeveIn: 9.8 },
  { size: 'XL', chestCm: 128, lengthCm: 77, shoulderCm: 58, sleeveCm: 26, chestIn: 50.4, lengthIn: 30.3, shoulderIn: 22.8, sleeveIn: 10.2 },
  { size: 'XXL', chestCm: 134, lengthCm: 79, shoulderCm: 60, sleeveCm: 27, chestIn: 52.8, lengthIn: 31.1, shoulderIn: 23.6, sleeveIn: 10.6 },
];

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [height, setHeight] = useState('180');
  const [weight, setWeight] = useState('78');
  const [fitPref, setFitPref] = useState<'fitted' | 'regular' | 'oversized'>('oversized');
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const calculateRecommendation = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight) || 75;
    let base = 'M';
    if (w < 60) base = 'S';
    else if (w < 70) base = 'M';
    else if (w < 82) base = 'L';
    else if (w < 95) base = 'XL';
    else base = 'XXL';

    if (fitPref === 'fitted') {
      if (base === 'XXL') base = 'XL';
      else if (base === 'XL') base = 'L';
      else if (base === 'L') base = 'M';
      else if (base === 'M') base = 'S';
      else base = 'XS';
    } else if (fitPref === 'oversized') {
      if (base === 'XS') base = 'S';
      else if (base === 'S') base = 'M';
      else if (base === 'M') base = 'L';
      else if (base === 'L') base = 'XL';
      else base = 'XXL';
    }

    setRecommendation(base);
  };

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
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl uppercase tracking-tight text-white">
                Fit Guide & Sizing
              </h2>
              <p className="text-xs text-neutral-400">
                Heavyweight Cotton Pre-Shrunk Garment Specifications
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

        {/* Unit Toggle & Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Boxy Heavyweight Size Matrix
            </h3>
            <div className="flex bg-[#1F1F1F] p-0.5 rounded-lg text-xs font-bold border border-white/10">
              <button
                onClick={() => setUnit('in')}
                className={`px-3 py-1 rounded cursor-pointer transition-all uppercase tracking-wider font-mono text-[11px] ${
                  unit === 'in' ? 'bg-[#D4FF00] text-black font-black shadow-xs' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Inches (in)
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 rounded cursor-pointer transition-all uppercase tracking-wider font-mono text-[11px] ${
                  unit === 'cm' ? 'bg-[#D4FF00] text-black font-black shadow-xs' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-xl bg-[#191919]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#111111] text-white font-display border-b border-white/10">
                <tr>
                  <th className="p-3 uppercase tracking-wider text-[11px] font-black">Size</th>
                  <th className="p-3 uppercase tracking-wider text-[11px] font-black">Chest Width</th>
                  <th className="p-3 uppercase tracking-wider text-[11px] font-black">Total Length</th>
                  <th className="p-3 uppercase tracking-wider text-[11px] font-black">Shoulder Width</th>
                  <th className="p-3 uppercase tracking-wider text-[11px] font-black">Sleeve Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-mono">
                {MEASUREMENTS_DATA.map((row) => (
                  <tr key={row.size} className="hover:bg-white/5 font-medium text-neutral-300">
                    <td className="p-3 font-black text-white font-display">{row.size}</td>
                    <td className="p-3">{unit === 'in' ? `${row.chestIn}"` : `${row.chestCm} cm`}</td>
                    <td className="p-3">{unit === 'in' ? `${row.lengthIn}"` : `${row.lengthCm} cm`}</td>
                    <td className="p-3">{unit === 'in' ? `${row.shoulderIn}"` : `${row.shoulderCm} cm`}</td>
                    <td className="p-3">{unit === 'in' ? `${row.sleeveIn}"` : `${row.sleeveCm} cm`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Smart Fit Recommendation Calculator */}
        <div className="bg-[#191919] border border-white/10 text-white rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 text-[#D4FF00] font-display font-black text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#D4FF00]" />
            <span>Interactive Fit Advisor</span>
          </div>

          <form onSubmit={calculateRecommendation} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-[#141414] text-white px-3 py-2 rounded-xl text-xs font-mono border border-white/10 focus:border-[#D4FF00] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-[#141414] text-white px-3 py-2 rounded-xl text-xs font-mono border border-white/10 focus:border-[#D4FF00] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">Silhouette</label>
              <select
                value={fitPref}
                onChange={(e) => setFitPref(e.target.value as any)}
                className="w-full bg-[#141414] text-white px-3 py-2 rounded-xl text-xs border border-white/10 focus:border-[#D4FF00] focus:outline-none"
              >
                <option value="fitted">Tailored / Fitted</option>
                <option value="regular">Regular Classic</option>
                <option value="oversized">Boxy Oversized</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 bg-[#D4FF00] hover:bg-[#bde600] text-black font-black uppercase tracking-wider rounded-xl text-xs transition-colors cursor-pointer"
              >
                Recommend
              </button>
            </div>
          </form>

          {recommendation && (
            <div className="p-3 bg-[#141414] border border-[#D4FF00]/40 text-white rounded-xl flex items-center justify-between animate-in fade-in">
              <div className="flex items-center gap-2 text-xs">
                <Check className="w-4 h-4 text-[#D4FF00]" />
                <span>
                  Based on your measurements, we recommend size <strong className="text-[#D4FF00]">{recommendation}</strong> for your preferred {fitPref} look.
                </span>
              </div>
              <span className="px-3 py-1 bg-[#D4FF00] text-black font-black font-display uppercase tracking-wider rounded text-xs">
                Size {recommendation}
              </span>
            </div>
          )}
        </div>

        {/* How to Measure Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-400">
          <div className="p-3.5 bg-[#191919] rounded-xl border border-white/10 space-y-1">
            <span className="font-black uppercase tracking-wider text-white block">Chest Width</span>
            <p>Measured flat across garment 1 inch below the armholes from seam to seam.</p>
          </div>
          <div className="p-3.5 bg-[#191919] rounded-xl border border-white/10 space-y-1">
            <span className="font-black uppercase tracking-wider text-white block">Total Length</span>
            <p>Measured from the highest shoulder point at the collar seam straight down to the bottom hemline.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
