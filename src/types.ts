export type TShirtCategory = 
  | 'all'
  | 'heavyweight'
  | 'vintage-wash'
  | 'graphic-streetwear'
  | 'minimal-basics'
  | 'organic-cotton'
  | 'pocket-henley';

export type FitType = 'Boxy Oversized' | 'Relaxed Fit' | 'Classic Regular' | 'Slim Fit' | 'Drop Shoulder';

export type NeckType = 'Ribbed Heavy Crew' | 'Classic Crewneck' | 'Mock Neck' | 'V-Neck' | 'Raw Edge';

export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  images: {
    front: string;
    back: string;
    model?: string;
    detail?: string;
  };
  inStock: boolean;
}

export interface SizeStock {
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  stock: number;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  fitFeedback: 'Runs Small' | 'True to Size' | 'Runs Large';
  comment: string;
  verified: boolean;
  sizePurchased: string;
  colorPurchased: string;
  heightWeight?: string;
}

export interface FabricDetails {
  gsm: number; // e.g. 240, 280
  weightLabel: 'Lightweight (160-180 GSM)' | 'Midweight (190-220 GSM)' | 'Heavyweight (240-280 GSM)' | 'Ultra Heavy (300+ GSM)';
  material: string; // e.g. "100% Combed Ring-Spun Organic Cotton"
  certifications: string[]; // e.g. ["GOTS Organic", "OEKO-TEX Standard 100", "Fair Trade"]
  preShrunk: boolean;
  weave: string;
  careInstructions: string[];
  madeIn: string;
}

export interface SizeMeasurement {
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  chestCm: number;
  lengthCm: number;
  shoulderCm: number;
  sleeveCm: number;
  chestIn: number;
  lengthIn: number;
  shoulderIn: number;
  sleeveIn: number;
}

export interface TShirtProduct {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: TShirtCategory;
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isOrganic?: boolean;
  isSale?: boolean;
  rating: number;
  reviewCount: number;
  description: string;
  fit: FitType;
  neckline: NeckType;
  colors: ColorVariant[];
  sizes: SizeStock[];
  measurements: SizeMeasurement[];
  fabric: FabricDetails;
  modelInfo: {
    height: string;
    wearingSize: string;
  };
  features: string[];
  reviews: ReviewItem[];
}

export interface CartItem {
  id: string; // unique item cart key (productId-colorId-size)
  product: TShirtProduct;
  selectedColor: ColorVariant;
  selectedSize: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  quantity: number;
  customPrint?: {
    designName: string;
    placement: 'center-chest' | 'back-oversized' | 'pocket-left';
    previewUrl: string;
  };
}

export interface FilterState {
  searchQuery: string;
  category: TShirtCategory;
  fitTypes: FitType[];
  neckTypes: NeckType[];
  colorHexes: string[];
  gsmWeights: string[];
  minPrice: number;
  maxPrice: number;
  sizes: string[];
  onlyInStock: boolean;
  onlyOrganic: boolean;
  onlySale: boolean;
  sortBy: 'featured' | 'newest' | 'price-low' | 'price-high' | 'rating' | 'heaviest';
}

export interface LookbookItem {
  id: string;
  title: string;
  styleTag: string;
  image: string;
  description: string;
  featuredProductId: string;
  outfitItems: {
    item: string;
    note: string;
  }[];
}
