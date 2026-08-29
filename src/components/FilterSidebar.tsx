import React from 'react';
import { 
  Filter, 
  RotateCcw, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Sliders,
  DollarSign
} from 'lucide-react';
import { FilterState, FitType, NeckType } from '../types';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
  availableColors: { name: string; hex: string }[];
  totalResults: number;
}

const FIT_OPTIONS: FitType[] = [
  'Boxy Oversized',
  'Relaxed Fit',
  'Classic Regular',
  'Drop Shoulder',
];

const NECK_OPTIONS: NeckType[] = [
  'Ribbed Heavy Crew',
  'Classic Crewneck',
  'Mock Neck',
  'Raw Edge',
];

const WEIGHT_OPTIONS = [
  { label: 'Light (160-180 GSM)', value: '180' },
  { label: 'Midweight (190-220 GSM)', value: '220' },
  { label: 'Heavyweight (240-280 GSM)', value: '280' },
  { label: 'Ultra Heavy (300+ GSM)', value: '300' },
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  availableColors,
  totalResults,
}) => {
  const toggleFit = (fit: FitType) => {
    const next = filters.fitTypes.includes(fit)
      ? filters.fitTypes.filter((f) => f !== fit)
      : [...filters.fitTypes, fit];
    onFilterChange({ ...filters, fitTypes: next });
  };

  const toggleNeck = (neck: NeckType) => {
    const next = filters.neckTypes.includes(neck)
      ? filters.neckTypes.filter((n) => n !== neck)
      : [...filters.neckTypes, neck];
    onFilterChange({ ...filters, neckTypes: next });
  };

  const toggleColor = (hex: string) => {
    const next = filters.colorHexes.includes(hex)
      ? filters.colorHexes.filter((c) => c !== hex)
      : [...filters.colorHexes, hex];
    onFilterChange({ ...filters, colorHexes: next });
  };

  const toggleWeight = (w: string) => {
    const next = filters.gsmWeights.includes(w)
      ? filters.gsmWeights.filter((item) => item !== w)
      : [...filters.gsmWeights, w];
    onFilterChange({ ...filters, gsmWeights: next });
  };

  const toggleSize = (size: string) => {
    const next = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ ...filters, sizes: next });
  };

  const hasActiveFilters =
    filters.fitTypes.length > 0 ||
    filters.neckTypes.length > 0 ||
    filters.colorHexes.length > 0 ||
    filters.gsmWeights.length > 0 ||
    filters.sizes.length > 0 ||
    filters.maxPrice < 60 ||
    filters.minPrice > 30 ||
    filters.onlyInStock ||
    filters.onlyOrganic ||
    filters.onlySale;

  return (
    <aside className="w-full lg:w-64 space-y-6 text-sm text-neutral-300 bg-[#141414] p-5 rounded-2xl border border-white/10 shadow-xl">
      {/* Header with Results & Reset */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#D4FF00]" />
          <span className="font-black font-display uppercase tracking-[0.15em] text-xs text-white">
            Filters ({totalResults})
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-xs text-[#D4FF00] hover:text-white flex items-center gap-1 font-bold uppercase tracking-wider cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        )}
      </div>

      {/* Special Quick Badges / Toggles */}
      <div className="space-y-2">
        <label className="flex items-center justify-between p-2.5 bg-[#1C1C1C] hover:bg-[#242424] rounded-xl cursor-pointer transition-colors border border-white/5">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">In-Stock Only</span>
          <input
            type="checkbox"
            checked={filters.onlyInStock}
            onChange={(e) => onFilterChange({ ...filters, onlyInStock: e.target.checked })}
            className="w-4 h-4 rounded text-black accent-[#D4FF00] cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between p-2.5 bg-[#1C1C1C] hover:bg-[#242424] rounded-xl cursor-pointer transition-colors border border-white/5">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            100% Organic
          </span>
          <input
            type="checkbox"
            checked={filters.onlyOrganic}
            onChange={(e) => onFilterChange({ ...filters, onlyOrganic: e.target.checked })}
            className="w-4 h-4 rounded text-black accent-[#D4FF00] cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between p-2.5 bg-[#1C1C1C] hover:bg-[#242424] rounded-xl cursor-pointer transition-colors border border-white/5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4FF00] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#D4FF00]" />
            Sale Archive
          </span>
          <input
            type="checkbox"
            checked={filters.onlySale}
            onChange={(e) => onFilterChange({ ...filters, onlySale: e.target.checked })}
            className="w-4 h-4 rounded text-black accent-[#D4FF00] cursor-pointer"
          />
        </label>
      </div>

      {/* Price Range Slider */}
      <div className="space-y-3 pt-3 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-[0.15em] text-white">
            Max Price
          </span>
          <span className="text-xs font-mono font-black text-[#D4FF00]">
            ${filters.minPrice} – ${filters.maxPrice}
          </span>
        </div>
        <input
          type="range"
          min="25"
          max="65"
          step="1"
          value={filters.maxPrice}
          onChange={(e) =>
            onFilterChange({ ...filters, maxPrice: Number(e.target.value) })
          }
          className="w-full accent-[#D4FF00] cursor-pointer h-1.5 bg-[#2A2A2A] rounded-lg"
        />
        <div className="flex justify-between text-[10px] text-neutral-400 font-mono font-bold">
          <span>Min: $25</span>
          <span>Max: $65</span>
        </div>
      </div>

      {/* Fabric Weight (GSM) */}
      <div className="space-y-2.5 pt-3 border-t border-white/10">
        <span className="text-xs font-black uppercase tracking-[0.15em] text-white block">
          Density (GSM)
        </span>
        <div className="space-y-1.5">
          {WEIGHT_OPTIONS.map((opt) => {
            const checked = filters.gsmWeights.includes(opt.value);
            return (
              <label
                key={opt.value}
                className="flex items-center gap-2.5 text-xs text-neutral-300 hover:text-white cursor-pointer select-none font-medium"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleWeight(opt.value)}
                  className="w-4 h-4 rounded accent-[#D4FF00] cursor-pointer"
                />
                <span>{opt.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Silhouette & Fit */}
      <div className="space-y-2.5 pt-3 border-t border-white/10">
        <span className="text-xs font-black uppercase tracking-[0.15em] text-white block">
          Silhouette / Fit
        </span>
        <div className="space-y-1.5">
          {FIT_OPTIONS.map((fit) => {
            const checked = filters.fitTypes.includes(fit);
            return (
              <label
                key={fit}
                className="flex items-center gap-2.5 text-xs text-neutral-300 hover:text-white cursor-pointer select-none font-medium"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleFit(fit)}
                  className="w-4 h-4 rounded accent-[#D4FF00] cursor-pointer"
                />
                <span>{fit}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Size Availability */}
      <div className="space-y-2.5 pt-3 border-t border-white/10">
        <span className="text-xs font-black uppercase tracking-[0.15em] text-white block">
          Size
        </span>
        <div className="grid grid-cols-3 gap-1.5">
          {SIZES.map((sz) => {
            const active = filters.sizes.includes(sz);
            return (
              <button
                key={sz}
                onClick={() => toggleSize(sz)}
                className={`py-1.5 text-xs font-black font-mono rounded-lg border transition-all cursor-pointer ${
                  active
                    ? 'bg-[#D4FF00] text-black border-[#D4FF00] shadow-sm'
                    : 'bg-[#1F1F1F] text-neutral-300 border-white/10 hover:border-white/30'
                }`}
              >
                {sz}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Palette Swatches */}
      <div className="space-y-2.5 pt-3 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-[0.15em] text-white">
            Colorways
          </span>
          {filters.colorHexes.length > 0 && (
            <span className="text-[10px] text-[#D4FF00] font-mono font-bold">
              {filters.colorHexes.length} Active
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {availableColors.map((color) => {
            const isSelected = filters.colorHexes.includes(color.hex);
            return (
              <button
                key={color.hex + color.name}
                onClick={() => toggleColor(color.hex)}
                title={color.name}
                className={`w-6 h-6 rounded-full border flex items-center justify-center transition-transform cursor-pointer relative ${
                  isSelected
                    ? 'scale-115 ring-2 ring-[#D4FF00] ring-offset-2 ring-offset-[#141414] border-white'
                    : 'border-white/20 hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {isSelected && (
                  <Check
                    className={`w-3 h-3 ${
                      color.hex === '#fafafa' || color.hex === '#f5f5f0' || color.hex === '#f5f0e6' || color.hex === '#eeebe2' || color.hex === '#dedad2'
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

      {/* Neck Construction */}
      <div className="space-y-2.5 pt-3 border-t border-white/10">
        <span className="text-xs font-black uppercase tracking-[0.15em] text-white block">
          Neckline Construction
        </span>
        <div className="space-y-1.5">
          {NECK_OPTIONS.map((neck) => {
            const checked = filters.neckTypes.includes(neck);
            return (
              <label
                key={neck}
                className="flex items-center gap-2.5 text-xs text-neutral-300 hover:text-white cursor-pointer select-none font-medium"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleNeck(neck)}
                  className="w-4 h-4 rounded accent-[#D4FF00] cursor-pointer"
                />
                <span>{neck}</span>
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
