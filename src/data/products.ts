import { TShirtProduct, LookbookItem } from '../types';

export const PRODUCTS: TShirtProduct[] = [
  {
    id: 'tee-01',
    title: 'Archive 280GSM Heavyweight Boxy Tee',
    subtitle: 'Ultra-dense combed cotton with dropped shoulders & 1.25" reinforced ribbed collar',
    slug: 'archive-280gsm-heavyweight-boxy-tee',
    category: 'heavyweight',
    price: 44,
    originalPrice: 52,
    isBestseller: true,
    isOrganic: true,
    rating: 4.9,
    reviewCount: 142,
    description: 'Constructed from custom-knit 280 GSM long-staple organic cotton. The Archive Boxy Tee features a substantial structure that holds its drape without clinging. Pre-washed to eliminate shrinkage with double-needle hems and a thick, non-sagging collar.',
    fit: 'Boxy Oversized',
    neckline: 'Ribbed Heavy Crew',
    modelInfo: {
      height: "6'1\" (185 cm)",
      wearingSize: 'L',
    },
    features: [
      '280 GSM heavyweight jersey knit',
      'Thick 1.25-inch high-density ribbed neck band',
      'Dropped shoulder seam with boxy body silhouette',
      'Double-stitched reinforced cuffs and bottom hem',
      'Zero shrinkage (garment-washed & pre-shrunk)'
    ],
    fabric: {
      gsm: 280,
      weightLabel: 'Heavyweight (240-280 GSM)',
      material: '100% GOTS Certified Organic Combed Cotton',
      certifications: ['GOTS Organic', 'OEKO-TEX Standard 100', 'Fair Trade Certified'],
      preShrunk: true,
      weave: 'Custom 24-singles Heavy Jersey',
      careInstructions: [
        'Machine wash cold with like colors inside out',
        'Hang dry recommended to prolong fabric richness',
        'Tumble dry low if necessary',
        'Warm iron on reverse side'
      ],
      madeIn: 'Porto, Portugal'
    },
    sizes: [
      { size: 'XS', stock: 4 },
      { size: 'S', stock: 12 },
      { size: 'M', stock: 24 },
      { size: 'L', stock: 18 },
      { size: 'XL', stock: 9 },
      { size: 'XXL', stock: 3 },
    ],
    measurements: [
      { size: 'XS', chestCm: 104, lengthCm: 68, shoulderCm: 50, sleeveCm: 22, chestIn: 41, lengthIn: 26.8, shoulderIn: 19.7, sleeveIn: 8.7 },
      { size: 'S', chestCm: 110, lengthCm: 71, shoulderCm: 52, sleeveCm: 23, chestIn: 43.3, lengthIn: 28.0, shoulderIn: 20.5, sleeveIn: 9.1 },
      { size: 'M', chestCm: 116, lengthCm: 73, shoulderCm: 54, sleeveCm: 24, chestIn: 45.7, lengthIn: 28.7, shoulderIn: 21.3, sleeveIn: 9.4 },
      { size: 'L', chestCm: 122, lengthCm: 75, shoulderCm: 56, sleeveCm: 25, chestIn: 48.0, lengthIn: 29.5, shoulderIn: 22.0, sleeveIn: 9.8 },
      { size: 'XL', chestCm: 128, lengthCm: 77, shoulderCm: 58, sleeveCm: 26, chestIn: 50.4, lengthIn: 30.3, shoulderIn: 22.8, sleeveIn: 10.2 },
      { size: 'XXL', chestCm: 134, lengthCm: 79, shoulderCm: 60, sleeveCm: 27, chestIn: 52.8, lengthIn: 31.1, shoulderIn: 23.6, sleeveIn: 10.6 },
    ],
    colors: [
      {
        id: 'c-washed-black',
        name: 'Washed Onyx',
        hex: '#1c1b1a',
        images: {
          front: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-chalk-white',
        name: 'Chalk White',
        hex: '#f5f5f0',
        images: {
          front: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1622445268121-ac30457e23ca?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-terracotta',
        name: 'Sunbaked Terracotta',
        hex: '#b35d46',
        images: {
          front: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-forest-sage',
        name: 'Washed Pine',
        hex: '#3d4d44',
        images: {
          front: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Julian M.',
        rating: 5,
        date: '2 weeks ago',
        fitFeedback: 'True to Size',
        comment: 'The collar on this is unmatched. It doesn’t bacon or stretch out even after four washes. The 280 GSM weight gives that heavy streetwear silhouette without making you sweat.',
        verified: true,
        sizePurchased: 'L',
        colorPurchased: 'Washed Onyx',
        heightWeight: '6\'0", 180 lbs'
      },
      {
        id: 'rev-2',
        author: 'Elena R.',
        rating: 5,
        date: '1 month ago',
        fitFeedback: 'Runs Large',
        comment: 'Definitely oversized, I sized down to S for a slightly more cropped boxy fit and it is flawless. Best blank tee on the market.',
        verified: true,
        sizePurchased: 'S',
        colorPurchased: 'Chalk White',
        heightWeight: '5\'6", 130 lbs'
      }
    ]
  },
  {
    id: 'tee-02',
    title: 'Vintage Acid Wash Graphic Tour Tee',
    subtitle: 'Distressed mineral-washed finish with water-based back typographic art',
    slug: 'vintage-acid-wash-graphic-tour-tee',
    category: 'graphic-streetwear',
    price: 48,
    isNew: true,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 98,
    description: 'Each piece undergoes a specialized individual enzyme and stone acid wash bath, creating a unique authentic vintage fade with ultra-soft hand feel. Finished with breathable soft-touch water-based botanical & sonic graphics.',
    fit: 'Relaxed Fit',
    neckline: 'Classic Crewneck',
    modelInfo: {
      height: "5'11\" (180 cm)",
      wearingSize: 'M',
    },
    features: [
      '240 GSM vintage washed jersey',
      'Individually hand-treated stone enzyme wash',
      'Breathable water-based graphic print (no plastic sticky feel)',
      'Blind hem stitch on sleeves and bottom line',
      'Slightly distressed neckline trim for authentic aged aesthetic'
    ],
    fabric: {
      gsm: 240,
      weightLabel: 'Heavyweight (240-280 GSM)',
      material: '100% Combed Ring-Spun Cotton',
      certifications: ['OEKO-TEX Standard 100'],
      preShrunk: true,
      weave: 'Single Jersey Stone Wash',
      careInstructions: [
        'Wash inside out in cold water',
        'Line dry in shade to maintain wash pattern',
        'Do not iron directly over graphics'
      ],
      madeIn: 'Izmir, Turkey'
    },
    sizes: [
      { size: 'XS', stock: 2 },
      { size: 'S', stock: 8 },
      { size: 'M', stock: 15 },
      { size: 'L', stock: 14 },
      { size: 'XL', stock: 6 },
      { size: 'XXL', stock: 0 },
    ],
    measurements: [
      { size: 'XS', chestCm: 100, lengthCm: 69, shoulderCm: 48, sleeveCm: 21, chestIn: 39.4, lengthIn: 27.2, shoulderIn: 18.9, sleeveIn: 8.3 },
      { size: 'S', chestCm: 106, lengthCm: 72, shoulderCm: 50, sleeveCm: 22, chestIn: 41.7, lengthIn: 28.3, shoulderIn: 19.7, sleeveIn: 8.7 },
      { size: 'M', chestCm: 112, lengthCm: 74, shoulderCm: 52, sleeveCm: 23, chestIn: 44.1, lengthIn: 29.1, shoulderIn: 20.5, sleeveIn: 9.1 },
      { size: 'L', chestCm: 118, lengthCm: 76, shoulderCm: 54, sleeveCm: 24, chestIn: 46.5, lengthIn: 29.9, shoulderIn: 21.3, sleeveIn: 9.4 },
      { size: 'XL', chestCm: 124, lengthCm: 78, shoulderCm: 56, sleeveCm: 25, chestIn: 48.8, lengthIn: 30.7, shoulderIn: 22.0, sleeveIn: 9.8 },
      { size: 'XXL', chestCm: 130, lengthCm: 80, shoulderCm: 58, sleeveCm: 26, chestIn: 51.2, lengthIn: 31.5, shoulderIn: 22.8, sleeveIn: 10.2 },
    ],
    colors: [
      {
        id: 'c-mineral-grey',
        name: 'Mineral Stone Grey',
        hex: '#4a4b4d',
        images: {
          front: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-faded-slate',
        name: 'Faded Slate Blue',
        hex: '#3f4e59',
        images: {
          front: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Liam C.',
        rating: 5,
        date: '3 weeks ago',
        fitFeedback: 'True to Size',
        comment: 'The graphic has that smooth vintage screenprint texture that integrates right into the knit instead of feeling like a sticker. Will be buying the other colorway.',
        verified: true,
        sizePurchased: 'M',
        colorPurchased: 'Mineral Stone Grey'
      }
    ]
  },
  {
    id: 'tee-03',
    title: 'Essential Supima Luxury Crewneck',
    subtitle: 'Extra-long staple American Supima® cotton with silk-like softness and drape',
    slug: 'essential-supima-luxury-crewneck',
    category: 'minimal-basics',
    price: 38,
    isOrganic: true,
    rating: 4.9,
    reviewCount: 215,
    description: 'Crafted from rare top 1% American-grown Supima cotton, renowned for fiber strength, vivid color retention, and an exceptionally smooth, lustrous feel. Designed with a clean tailored silhouette that transitions effortlessly from daywear to layered tailoring.',
    fit: 'Classic Regular',
    neckline: 'Classic Crewneck',
    modelInfo: {
      height: "6'2\" (188 cm)",
      wearingSize: 'L',
    },
    features: [
      '190 GSM 100% Certified American Supima Cotton',
      'Silky micro-combed finish for frictionless comfort',
      'Form-retaining spandex-rib collar',
      'Clean tailored hemline that stays tucked or untucked cleanly',
      'Ultra colorfast reactive dye technology'
    ],
    fabric: {
      gsm: 190,
      weightLabel: 'Midweight (190-220 GSM)',
      material: '100% Certified California Supima Cotton',
      certifications: ['Supima® Certified', 'OEKO-TEX Standard 100'],
      preShrunk: true,
      weave: 'Fine 40s Double Knit Interlock',
      careInstructions: [
        'Machine wash cold gentle cycle',
        'Tumble dry low or flat dry',
        'Cool iron if needed'
      ],
      madeIn: 'Los Angeles, USA'
    },
    sizes: [
      { size: 'XS', stock: 6 },
      { size: 'S', stock: 20 },
      { size: 'M', stock: 35 },
      { size: 'L', stock: 28 },
      { size: 'XL', stock: 15 },
      { size: 'XXL', stock: 8 },
    ],
    measurements: [
      { size: 'XS', chestCm: 96, lengthCm: 68, shoulderCm: 44, sleeveCm: 20, chestIn: 37.8, lengthIn: 26.8, shoulderIn: 17.3, sleeveIn: 7.9 },
      { size: 'S', chestCm: 102, lengthCm: 70, shoulderCm: 46, sleeveCm: 21, chestIn: 40.2, lengthIn: 27.6, shoulderIn: 18.1, sleeveIn: 8.3 },
      { size: 'M', chestCm: 108, lengthCm: 72, shoulderCm: 48, sleeveCm: 22, chestIn: 42.5, lengthIn: 28.3, shoulderIn: 18.9, sleeveIn: 8.7 },
      { size: 'L', chestCm: 114, lengthCm: 74, shoulderCm: 50, sleeveCm: 23, chestIn: 44.9, lengthIn: 29.1, shoulderIn: 19.7, sleeveIn: 9.1 },
      { size: 'XL', chestCm: 120, lengthCm: 76, shoulderCm: 52, sleeveCm: 24, chestIn: 47.2, lengthIn: 29.9, shoulderIn: 20.5, sleeveIn: 9.4 },
      { size: 'XXL', chestCm: 126, lengthCm: 78, shoulderCm: 54, sleeveCm: 25, chestIn: 49.6, lengthIn: 30.7, shoulderIn: 21.3, sleeveIn: 9.8 },
    ],
    colors: [
      {
        id: 'c-crisp-white',
        name: 'Crisp White',
        hex: '#fafafa',
        images: {
          front: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-navy',
        name: 'Midnight Navy',
        hex: '#1b2432',
        images: {
          front: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-heather-oatmeal',
        name: 'Heather Oatmeal',
        hex: '#dedad2',
        images: {
          front: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'David P.',
        rating: 5,
        date: '5 days ago',
        fitFeedback: 'True to Size',
        comment: 'This is the softest shirt I have ever worn. I wear it under my blazer to work and casually on weekends. Does not pill or fade.',
        verified: true,
        sizePurchased: 'L',
        colorPurchased: 'Midnight Navy'
      }
    ]
  },
  {
    id: 'tee-04',
    title: 'EarthTone Pigment-Dyed Raw Hem Tee',
    subtitle: 'Natural botanical mineral dyes with relaxed drop shoulder and tactile raw edge finish',
    slug: 'earthtone-pigment-dyed-raw-hem-tee',
    category: 'vintage-wash',
    price: 42,
    originalPrice: 48,
    isSale: true,
    isOrganic: true,
    rating: 4.7,
    reviewCount: 76,
    description: 'Dyed using eco-friendly pulverized botanical minerals that produce rich earthy tones with subtle natural variations. Built with relaxed drop-shoulder proportions and subtle raw edge detail on the sleeve cuffs.',
    fit: 'Drop Shoulder',
    neckline: 'Raw Edge',
    modelInfo: {
      height: "5'10\" (178 cm)",
      wearingSize: 'M',
    },
    features: [
      '220 GSM 100% Organic Raw Cotton',
      'Botanical pigment-dye with subtle tonal fading',
      'Relaxed drop-shoulder with loose drape',
      'Clean roll-preventing raw edge hem finishing',
      'Tagless neck print for zero itch'
    ],
    fabric: {
      gsm: 220,
      weightLabel: 'Midweight (190-220 GSM)',
      material: '100% Organic Unbleached Cotton',
      certifications: ['GOTS Organic', 'Botanical Eco-Dye'],
      preShrunk: true,
      weave: 'Slub Jersey',
      careInstructions: [
        'Wash cold on gentle cycle with eco detergent',
        'Dry flat to preserve the garment structure',
        'Avoid bleach or strong spot cleaners'
      ],
      madeIn: 'Oaxaca, Mexico'
    },
    sizes: [
      { size: 'XS', stock: 5 },
      { size: 'S', stock: 14 },
      { size: 'M', stock: 19 },
      { size: 'L', stock: 11 },
      { size: 'XL', stock: 7 },
      { size: 'XXL', stock: 2 },
    ],
    measurements: [
      { size: 'XS', chestCm: 102, lengthCm: 67, shoulderCm: 50, sleeveCm: 22, chestIn: 40.2, lengthIn: 26.4, shoulderIn: 19.7, sleeveIn: 8.7 },
      { size: 'S', chestCm: 108, lengthCm: 70, shoulderCm: 52, sleeveCm: 23, chestIn: 42.5, lengthIn: 27.6, shoulderIn: 20.5, sleeveIn: 9.1 },
      { size: 'M', chestCm: 114, lengthCm: 72, shoulderCm: 54, sleeveCm: 24, chestIn: 44.9, lengthIn: 28.3, shoulderIn: 21.3, sleeveIn: 9.4 },
      { size: 'L', chestCm: 120, lengthCm: 74, shoulderCm: 56, sleeveCm: 25, chestIn: 47.2, lengthIn: 29.1, shoulderIn: 22.0, sleeveIn: 9.8 },
      { size: 'XL', chestCm: 126, lengthCm: 76, shoulderCm: 58, sleeveCm: 26, chestIn: 49.6, lengthIn: 29.9, shoulderIn: 22.8, sleeveIn: 10.2 },
      { size: 'XXL', chestCm: 132, lengthCm: 78, shoulderCm: 60, sleeveCm: 27, chestIn: 52.0, lengthIn: 30.7, shoulderIn: 23.6, sleeveIn: 10.6 },
    ],
    colors: [
      {
        id: 'c-desert-clay',
        name: 'Desert Sand Clay',
        hex: '#bfa287',
        images: {
          front: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-moss-olive',
        name: 'Earthy Olive Moss',
        hex: '#5c6451',
        images: {
          front: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-5',
        author: 'Sora K.',
        rating: 5,
        date: '2 months ago',
        fitFeedback: 'True to Size',
        comment: 'The organic texture has character you just cannot get with fast-fashion shirts. The dye variations look so premium in natural sunlight.',
        verified: true,
        sizePurchased: 'M',
        colorPurchased: 'Desert Sand Clay'
      }
    ]
  },
  {
    id: 'tee-05',
    title: 'Heavyweight Utility Chest Pocket Tee',
    subtitle: 'Workwear reinforced pocket with bar-tack stitching and 260GSM carded cotton',
    slug: 'heavyweight-utility-chest-pocket-tee',
    category: 'pocket-henley',
    price: 45,
    isBestseller: false,
    rating: 4.8,
    reviewCount: 64,
    description: 'An homage to classic American heritage workwear. Constructed from durable 260 GSM open-end carded cotton with a structured square chest pocket featuring reinforced bar-tack stress points and pen slot divider.',
    fit: 'Classic Regular',
    neckline: 'Ribbed Heavy Crew',
    modelInfo: {
      height: "6'0\" (183 cm)",
      wearingSize: 'L',
    },
    features: [
      '260 GSM heavy carded cotton with crisp dry touch',
      'Reinforced square chest pocket with integrated pen slot',
      'Bar-tack corner stitching for heavy everyday utility',
      '1-inch ribbed collar with taped neck seam for structure',
      'Side-split hem for clean mobility'
    ],
    fabric: {
      gsm: 260,
      weightLabel: 'Heavyweight (240-280 GSM)',
      material: '100% Heavy Open-End Cotton',
      certifications: ['OEKO-TEX Standard 100'],
      preShrunk: true,
      weave: 'Carded Heritage Knit',
      careInstructions: [
        'Machine wash warm with like colors',
        'Tumble dry medium',
        'Iron on medium heat'
      ],
      madeIn: 'North Carolina, USA'
    },
    sizes: [
      { size: 'XS', stock: 1 },
      { size: 'S', stock: 9 },
      { size: 'M', stock: 16 },
      { size: 'L', stock: 22 },
      { size: 'XL', stock: 12 },
      { size: 'XXL', stock: 4 },
    ],
    measurements: [
      { size: 'XS', chestCm: 98, lengthCm: 69, shoulderCm: 46, sleeveCm: 22, chestIn: 38.6, lengthIn: 27.2, shoulderIn: 18.1, sleeveIn: 8.7 },
      { size: 'S', chestCm: 104, lengthCm: 71, shoulderCm: 48, sleeveCm: 23, chestIn: 40.9, lengthIn: 28.0, shoulderIn: 18.9, sleeveIn: 9.1 },
      { size: 'M', chestCm: 110, lengthCm: 73, shoulderCm: 50, sleeveCm: 24, chestIn: 43.3, lengthIn: 28.7, shoulderIn: 19.7, sleeveIn: 9.4 },
      { size: 'L', chestCm: 116, lengthCm: 75, shoulderCm: 52, sleeveCm: 25, chestIn: 45.7, lengthIn: 29.5, shoulderIn: 20.5, sleeveIn: 9.8 },
      { size: 'XL', chestCm: 122, lengthCm: 77, shoulderCm: 54, sleeveCm: 26, chestIn: 48.0, lengthIn: 30.3, shoulderIn: 21.3, sleeveIn: 10.2 },
      { size: 'XXL', chestCm: 128, lengthCm: 79, shoulderCm: 56, sleeveCm: 27, chestIn: 50.4, lengthIn: 31.1, shoulderIn: 22.0, sleeveIn: 10.6 },
    ],
    colors: [
      {
        id: 'c-caramel-tobacco',
        name: 'Tobacco Tan',
        hex: '#8d5b38',
        images: {
          front: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-vintage-black',
        name: 'Coal Black',
        hex: '#222224',
        images: {
          front: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-6',
        author: 'Marcus W.',
        rating: 5,
        date: '1 month ago',
        fitFeedback: 'True to Size',
        comment: 'Pocket is sturdy enough to hold sunglasses or a phone without pulling the collar down. Heavy duty quality.',
        verified: true,
        sizePurchased: 'L',
        colorPurchased: 'Tobacco Tan'
      }
    ]
  },
  {
    id: 'tee-06',
    title: 'Minimalist Mock Neck Architectural Tee',
    subtitle: 'Modern 1.5" elevated mock neck with sculpted boxy fit and dense interlock weave',
    slug: 'minimalist-mock-neck-architectural-tee',
    category: 'minimal-basics',
    price: 49,
    isNew: true,
    rating: 4.9,
    reviewCount: 53,
    description: 'Designed for minimalist aesthetic purists. The architectural 1.5-inch micro-rib mock neck sits cleanly against the collarbone, creating a high-fashion layered profile under overcoats, cardigans, or worn standalone with relaxed trousers.',
    fit: 'Boxy Oversized',
    neckline: 'Mock Neck',
    modelInfo: {
      height: "6'1\" (185 cm)",
      wearingSize: 'L',
    },
    features: [
      '270 GSM structured double-knit interlock',
      'Clean standing 1.5" seamless mock neck collar',
      'Drop shoulder tailored architectural block',
      'Ultra smooth non-pilling combed cotton surface',
      'Minimal blind-stitched hem and sleeves'
    ],
    fabric: {
      gsm: 270,
      weightLabel: 'Heavyweight (240-280 GSM)',
      material: '95% Combed Cotton, 5% Elastane for collar retention',
      certifications: ['OEKO-TEX Standard 100', 'ISO 9001 Quality'],
      preShrunk: true,
      weave: 'Structured Interlock',
      careInstructions: [
        'Machine wash cold gentle cycle',
        'Lay flat to dry to maintain collar architecture',
        'Low steam if required'
      ],
      madeIn: 'Seoul, South Korea'
    },
    sizes: [
      { size: 'XS', stock: 4 },
      { size: 'S', stock: 11 },
      { size: 'M', stock: 20 },
      { size: 'L', stock: 17 },
      { size: 'XL', stock: 8 },
      { size: 'XXL', stock: 2 },
    ],
    measurements: [
      { size: 'XS', chestCm: 106, lengthCm: 69, shoulderCm: 51, sleeveCm: 23, chestIn: 41.7, lengthIn: 27.2, shoulderIn: 20.1, sleeveIn: 9.1 },
      { size: 'S', chestCm: 112, lengthCm: 71, shoulderCm: 53, sleeveCm: 24, chestIn: 44.1, lengthIn: 28.0, shoulderIn: 20.9, sleeveIn: 9.4 },
      { size: 'M', chestCm: 118, lengthCm: 73, shoulderCm: 55, sleeveCm: 25, chestIn: 46.5, lengthIn: 28.7, shoulderIn: 21.7, sleeveIn: 9.8 },
      { size: 'L', chestCm: 124, lengthCm: 75, shoulderCm: 57, sleeveCm: 26, chestIn: 48.8, lengthIn: 29.5, shoulderIn: 22.4, sleeveIn: 10.2 },
      { size: 'XL', chestCm: 130, lengthCm: 77, shoulderCm: 59, sleeveCm: 27, chestIn: 51.2, lengthIn: 30.3, shoulderIn: 23.2, sleeveIn: 10.6 },
      { size: 'XXL', chestCm: 136, lengthCm: 79, shoulderCm: 61, sleeveCm: 28, chestIn: 53.5, lengthIn: 31.1, shoulderIn: 24.0, sleeveIn: 11.0 },
    ],
    colors: [
      {
        id: 'c-monolith-black',
        name: 'Monolith Black',
        hex: '#181819',
        images: {
          front: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-raw-chalk',
        name: 'Chalk Bone',
        hex: '#eeebe2',
        images: {
          front: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-7',
        author: 'Kenji T.',
        rating: 5,
        date: '2 weeks ago',
        fitFeedback: 'True to Size',
        comment: 'The collar height is exact. Sits upright without choking. Gives a very clean Japanese contemporary look with wide pleated trousers.',
        verified: true,
        sizePurchased: 'M',
        colorPurchased: 'Monolith Black'
      }
    ]
  },
  {
    id: 'tee-07',
    title: 'Kyoto Botanical Studio Graphic Tee',
    subtitle: 'Back typographic silkscreen print inspired by Japanese botanical garden archives',
    slug: 'kyoto-botanical-studio-graphic-tee',
    category: 'graphic-streetwear',
    price: 46,
    isOrganic: true,
    rating: 4.8,
    reviewCount: 112,
    description: 'Featuring hand-drawn botanical illustrations with bilingual typographic archive detailing on back and micro chest insignia on the front. Screen-printed with Japanese eco-friendly water inks that soften with every wear.',
    fit: 'Boxy Oversized',
    neckline: 'Ribbed Heavy Crew',
    modelInfo: {
      height: "5'9\" (175 cm)",
      wearingSize: 'M',
    },
    features: [
      '250 GSM ring-spun organic cotton',
      'Front micro logo embroidery & large back silkscreen artwork',
      'Pre-washed with organic softening enzymes',
      'Wide cut sleeves for unrestricted movement',
      'Reinforced shoulder-to-shoulder neck tape'
    ],
    fabric: {
      gsm: 250,
      weightLabel: 'Heavyweight (240-280 GSM)',
      material: '100% GOTS Organic Cotton',
      certifications: ['GOTS Certified Organic', 'Water-Based Inks Certified'],
      preShrunk: true,
      weave: 'Heavy Single Jersey',
      careInstructions: [
        'Machine wash cold gentle cycle inside out',
        'Line dry in shade',
        'Do not iron art print directly'
      ],
      madeIn: 'Kyoto, Japan'
    },
    sizes: [
      { size: 'XS', stock: 3 },
      { size: 'S', stock: 10 },
      { size: 'M', stock: 22 },
      { size: 'L', stock: 19 },
      { size: 'XL', stock: 5 },
      { size: 'XXL', stock: 0 },
    ],
    measurements: [
      { size: 'XS', chestCm: 104, lengthCm: 68, shoulderCm: 50, sleeveCm: 22, chestIn: 41.0, lengthIn: 26.8, shoulderIn: 19.7, sleeveIn: 8.7 },
      { size: 'S', chestCm: 110, lengthCm: 71, shoulderCm: 52, sleeveCm: 23, chestIn: 43.3, lengthIn: 28.0, shoulderIn: 20.5, sleeveIn: 9.1 },
      { size: 'M', chestCm: 116, lengthCm: 73, shoulderCm: 54, sleeveCm: 24, chestIn: 45.7, lengthIn: 28.7, shoulderIn: 21.3, sleeveIn: 9.4 },
      { size: 'L', chestCm: 122, lengthCm: 75, shoulderCm: 56, sleeveCm: 25, chestIn: 48.0, lengthIn: 29.5, shoulderIn: 22.0, sleeveIn: 9.8 },
      { size: 'XL', chestCm: 128, lengthCm: 77, shoulderCm: 58, sleeveCm: 26, chestIn: 50.4, lengthIn: 30.3, shoulderIn: 22.8, sleeveIn: 10.2 },
      { size: 'XXL', chestCm: 134, lengthCm: 79, shoulderCm: 60, sleeveCm: 27, chestIn: 52.8, lengthIn: 31.1, shoulderIn: 23.6, sleeveIn: 10.6 },
    ],
    colors: [
      {
        id: 'c-matcha-green',
        name: 'Matcha Moss',
        hex: '#4d5d4b',
        images: {
          front: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-bone-ivory',
        name: 'Natural Unbleached Bone',
        hex: '#f3efe6',
        images: {
          front: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1622445268121-ac30457e23ca?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-8',
        author: 'Maya S.',
        rating: 5,
        date: '3 weeks ago',
        fitFeedback: 'True to Size',
        comment: 'The back print art is gorgeous and the unbleached cotton base has natural cotton flecks throughout that give it so much soul.',
        verified: true,
        sizePurchased: 'M',
        colorPurchased: 'Natural Unbleached Bone'
      }
    ]
  },
  {
    id: 'tee-08',
    title: 'French Terry Relaxed Knit Henley Tee',
    subtitle: 'Subtle micro French terry loopback interior with matte horn button placket',
    slug: 'french-terry-relaxed-knit-henley-tee',
    category: 'pocket-henley',
    price: 52,
    originalPrice: 58,
    isSale: true,
    rating: 4.8,
    reviewCount: 47,
    description: 'An elevated hybrid between a lightweight sweatshirt and an everyday tee. Crafted from micro French terry loopback with a breathable breathable exterior and comfortable moisture-wicking interior loops, finished with genuine corozo nut buttons.',
    fit: 'Relaxed Fit',
    neckline: 'Ribbed Heavy Crew',
    modelInfo: {
      height: "6'2\" (188 cm)",
      wearingSize: 'XL',
    },
    features: [
      '290 GSM Micro French Terry loop interior',
      '3-button reinforced placket with genuine corozo buttons',
      'Ribbed collar and side-seam gussets for natural stretch',
      'Garment dyed for rich matte finish and depth of shade',
      'Split tennis tail hem'
    ],
    fabric: {
      gsm: 290,
      weightLabel: 'Heavyweight (240-280 GSM)',
      material: '100% Ring-Spun Cotton Loopback',
      certifications: ['OEKO-TEX Standard 100'],
      preShrunk: true,
      weave: 'Micro French Terry',
      careInstructions: [
        'Machine wash cold gentle cycle',
        'Tumble dry low or dry flat',
        'Warm iron if desired'
      ],
      madeIn: 'Guimarães, Portugal'
    },
    sizes: [
      { size: 'XS', stock: 2 },
      { size: 'S', stock: 7 },
      { size: 'M', stock: 12 },
      { size: 'L', stock: 15 },
      { size: 'XL', stock: 9 },
      { size: 'XXL', stock: 5 },
    ],
    measurements: [
      { size: 'XS', chestCm: 100, lengthCm: 70, shoulderCm: 47, sleeveCm: 22, chestIn: 39.4, lengthIn: 27.6, shoulderIn: 18.5, sleeveIn: 8.7 },
      { size: 'S', chestCm: 106, lengthCm: 72, shoulderCm: 49, sleeveCm: 23, chestIn: 41.7, lengthIn: 28.3, shoulderIn: 19.3, sleeveIn: 9.1 },
      { size: 'M', chestCm: 112, lengthCm: 74, shoulderCm: 51, sleeveCm: 24, chestIn: 44.1, lengthIn: 29.1, shoulderIn: 20.1, sleeveIn: 9.4 },
      { size: 'L', chestCm: 118, lengthCm: 76, shoulderCm: 53, sleeveCm: 25, chestIn: 46.5, lengthIn: 29.9, shoulderIn: 20.9, sleeveIn: 9.8 },
      { size: 'XL', chestCm: 124, lengthCm: 78, shoulderCm: 55, sleeveCm: 26, chestIn: 48.8, lengthIn: 30.7, shoulderIn: 21.7, sleeveIn: 10.2 },
      { size: 'XXL', chestCm: 130, lengthCm: 80, shoulderCm: 57, sleeveCm: 27, chestIn: 51.2, lengthIn: 31.5, shoulderIn: 22.4, sleeveIn: 10.6 },
    ],
    colors: [
      {
        id: 'c-heather-grey',
        name: 'Washed Heather Grey',
        hex: '#787a7d',
        images: {
          front: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-deep-indigo',
        name: 'Washed Deep Indigo',
        hex: '#273444',
        images: {
          front: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-9',
        author: 'Brian H.',
        rating: 5,
        date: '1 month ago',
        fitFeedback: 'True to Size',
        comment: 'French terry feels luxurious inside. Heavy enough for chilly evenings without being hot. Excellent tailoring on the button placket.',
        verified: true,
        sizePurchased: 'XL',
        colorPurchased: 'Washed Heather Grey'
      }
    ]
  },
  {
    id: 'tee-09',
    title: 'Sun-Bleached Overdyed Oversized Tee',
    subtitle: 'Solar wash technique creating high-contrast gradient marbling and relaxed slouch drape',
    slug: 'sun-bleached-overdyed-oversized-tee',
    category: 'vintage-wash',
    price: 44,
    isNew: true,
    rating: 4.7,
    reviewCount: 38,
    description: 'Each shirt is hand-dipped in solar-reactive indigo and cedar vats, creating a gentle ombre gradient wash effect across shoulders and hem. No two pieces have the exact same color graduation.',
    fit: 'Boxy Oversized',
    neckline: 'Classic Crewneck',
    modelInfo: {
      height: "5'11\" (180 cm)",
      wearingSize: 'L',
    },
    features: [
      '230 GSM organic cotton slub',
      'Artisanal hand-dipped ombre gradient effect',
      'Slightly dropped back tail hem for streetwear drape',
      'Soft enzyme wash for instant lived-in handfeel'
    ],
    fabric: {
      gsm: 230,
      weightLabel: 'Heavyweight (240-280 GSM)',
      material: '100% Organic Cotton',
      certifications: ['GOTS Organic'],
      preShrunk: true,
      weave: 'Artisanal Slub Jersey',
      careInstructions: [
        'Cold wash with mild detergent',
        'Do not bleach',
        'Line dry in shade'
      ],
      madeIn: 'Bali, Indonesia'
    },
    sizes: [
      { size: 'XS', stock: 3 },
      { size: 'S', stock: 8 },
      { size: 'M', stock: 14 },
      { size: 'L', stock: 16 },
      { size: 'XL', stock: 6 },
      { size: 'XXL', stock: 1 },
    ],
    measurements: [
      { size: 'XS', chestCm: 104, lengthCm: 69, shoulderCm: 51, sleeveCm: 22, chestIn: 40.9, lengthIn: 27.2, shoulderIn: 20.1, sleeveIn: 8.7 },
      { size: 'S', chestCm: 110, lengthCm: 72, shoulderCm: 53, sleeveCm: 23, chestIn: 43.3, lengthIn: 28.3, shoulderIn: 20.9, sleeveIn: 9.1 },
      { size: 'M', chestCm: 116, lengthCm: 74, shoulderCm: 55, sleeveCm: 24, chestIn: 45.7, lengthIn: 29.1, shoulderIn: 21.7, sleeveIn: 9.4 },
      { size: 'L', chestCm: 122, lengthCm: 76, shoulderCm: 57, sleeveCm: 25, chestIn: 48.0, lengthIn: 29.9, shoulderIn: 22.4, sleeveIn: 9.8 },
      { size: 'XL', chestCm: 128, lengthCm: 78, shoulderCm: 59, sleeveCm: 26, chestIn: 50.4, lengthIn: 30.7, shoulderIn: 23.2, sleeveIn: 10.2 },
      { size: 'XXL', chestCm: 134, lengthCm: 80, shoulderCm: 61, sleeveCm: 27, chestIn: 52.8, lengthIn: 31.5, shoulderIn: 24.0, sleeveIn: 10.6 },
    ],
    colors: [
      {
        id: 'c-sun-dune',
        name: 'Sunbaked Dune',
        hex: '#a68c74',
        images: {
          front: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-storm-blue',
        name: 'Storm Mirage Blue',
        hex: '#475b6d',
        images: {
          front: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-10',
        author: 'Chloe L.',
        rating: 5,
        date: '2 weeks ago',
        fitFeedback: 'Runs Large',
        comment: 'Stunning artistic gradient wash. It receives compliments every time I wear it out with raw denim.',
        verified: true,
        sizePurchased: 'S',
        colorPurchased: 'Sunbaked Dune'
      }
    ]
  },
  {
    id: 'tee-10',
    title: 'Organic Regenerative Farm-to-Closet Classic',
    subtitle: '100% Climate Beneficial™ regenerative cotton with seed-to-stitch traceability',
    slug: 'organic-regenerative-farm-to-closet-classic',
    category: 'organic-cotton',
    price: 36,
    isOrganic: true,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 180,
    description: 'Sourced directly from regenerative family farms practicing cover cropping, rotational grazing, and zero synthetic pesticides. Every shirt can be tracked back to its specific field harvest lot.',
    fit: 'Classic Regular',
    neckline: 'Classic Crewneck',
    modelInfo: {
      height: "5'10\" (178 cm)",
      wearingSize: 'M',
    },
    features: [
      '200 GSM regenerative upland organic cotton',
      'Full seed-to-stitch traceability QR label inside',
      'Unbleached natural cotton threads',
      'Recycled paper compostable packaging'
    ],
    fabric: {
      gsm: 200,
      weightLabel: 'Midweight (190-220 GSM)',
      material: '100% Regenerative Organic Certified® Cotton',
      certifications: ['Regenerative Organic ROC™', 'GOTS Certified', 'B-Corp Certified'],
      preShrunk: true,
      weave: 'Clean Ring-Spun Jersey',
      careInstructions: [
        'Cold wash with mild eco-detergent',
        'Line dry outside for natural fresh scent',
        'Low iron'
      ],
      madeIn: 'San Joaquin Valley, California'
    },
    sizes: [
      { size: 'XS', stock: 8 },
      { size: 'S', stock: 25 },
      { size: 'M', stock: 40 },
      { size: 'L', stock: 32 },
      { size: 'XL', stock: 18 },
      { size: 'XXL', stock: 6 },
    ],
    measurements: [
      { size: 'XS', chestCm: 98, lengthCm: 68, shoulderCm: 45, sleeveCm: 21, chestIn: 38.6, lengthIn: 26.8, shoulderIn: 17.7, sleeveIn: 8.3 },
      { size: 'S', chestCm: 104, lengthCm: 70, shoulderCm: 47, sleeveCm: 22, chestIn: 40.9, lengthIn: 27.6, shoulderIn: 18.5, sleeveIn: 8.7 },
      { size: 'M', chestCm: 110, lengthCm: 72, shoulderCm: 49, sleeveCm: 23, chestIn: 43.3, lengthIn: 28.3, shoulderIn: 19.3, sleeveIn: 9.1 },
      { size: 'L', chestCm: 116, lengthCm: 74, shoulderCm: 51, sleeveCm: 24, chestIn: 45.7, lengthIn: 29.1, shoulderIn: 20.1, sleeveIn: 9.4 },
      { size: 'XL', chestCm: 122, lengthCm: 76, shoulderCm: 53, sleeveCm: 25, chestIn: 48.0, lengthIn: 29.9, shoulderIn: 20.9, sleeveIn: 9.8 },
      { size: 'XXL', chestCm: 128, lengthCm: 78, shoulderCm: 55, sleeveCm: 26, chestIn: 50.4, lengthIn: 30.7, shoulderIn: 21.7, sleeveIn: 10.2 },
    ],
    colors: [
      {
        id: 'c-pure-seed',
        name: 'Natural Seed Unbleached',
        hex: '#f5f0e6',
        images: {
          front: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1622445268121-ac30457e23ca?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-earth-charcoal',
        name: 'Earth Charcoal',
        hex: '#2b2a29',
        images: {
          front: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-11',
        author: 'Hannah G.',
        rating: 5,
        date: '1 month ago',
        fitFeedback: 'True to Size',
        comment: 'Love supporting regenerative farming. The shirt feels natural, breathable, and honest. The unbleached tone looks super clean.',
        verified: true,
        sizePurchased: 'M',
        colorPurchased: 'Natural Seed Unbleached'
      }
    ]
  },
  {
    id: 'tee-11',
    title: 'Cyber Circuit Typo-Graphic Heavy Tee',
    subtitle: 'Reflective puff-print technical graphics with 260GSM structured box silhouette',
    slug: 'cyber-circuit-typo-graphic-heavy-tee',
    category: 'graphic-streetwear',
    price: 49,
    originalPrice: 55,
    isSale: true,
    rating: 4.8,
    reviewCount: 61,
    description: 'Engineered for night streetwear enthusiasts. Features subtle 3D tactile puff-print typography on the front and high-visibility 3M reflective technical schematic graphics on the lower spine and sleeves.',
    fit: 'Boxy Oversized',
    neckline: 'Ribbed Heavy Crew',
    modelInfo: {
      height: "6'1\" (185 cm)",
      wearingSize: 'L',
    },
    features: [
      '260 GSM heavyweight comb jersey',
      'Dual technique: 3D puff print chest typography & 3M reflective back art',
      'Wide rib collar that stays rigid',
      'Relaxed boxy cut with wide drop sleeves'
    ],
    fabric: {
      gsm: 260,
      weightLabel: 'Heavyweight (240-280 GSM)',
      material: '100% Combed Cotton',
      certifications: ['OEKO-TEX Standard 100'],
      preShrunk: true,
      weave: 'Heavy Carded Knit',
      careInstructions: [
        'Turn inside out before washing',
        'Cold wash only, delicate cycle',
        'Air dry away from direct heat'
      ],
      madeIn: 'Tokyo, Japan'
    },
    sizes: [
      { size: 'XS', stock: 1 },
      { size: 'S', stock: 6 },
      { size: 'M', stock: 15 },
      { size: 'L', stock: 12 },
      { size: 'XL', stock: 4 },
      { size: 'XXL', stock: 0 },
    ],
    measurements: [
      { size: 'XS', chestCm: 106, lengthCm: 70, shoulderCm: 52, sleeveCm: 23, chestIn: 41.7, lengthIn: 27.6, shoulderIn: 20.5, sleeveIn: 9.1 },
      { size: 'S', chestCm: 112, lengthCm: 72, shoulderCm: 54, sleeveCm: 24, chestIn: 44.1, lengthIn: 28.3, shoulderIn: 21.3, sleeveIn: 9.4 },
      { size: 'M', chestCm: 118, lengthCm: 74, shoulderCm: 56, sleeveCm: 25, chestIn: 46.5, lengthIn: 29.1, shoulderIn: 22.0, sleeveIn: 9.8 },
      { size: 'L', chestCm: 124, lengthCm: 76, shoulderCm: 58, sleeveCm: 26, chestIn: 48.8, lengthIn: 29.9, shoulderIn: 22.8, sleeveIn: 10.2 },
      { size: 'XL', chestCm: 130, lengthCm: 78, shoulderCm: 60, sleeveCm: 27, chestIn: 51.2, lengthIn: 30.7, shoulderIn: 23.6, sleeveIn: 10.6 },
      { size: 'XXL', chestCm: 136, lengthCm: 80, shoulderCm: 62, sleeveCm: 28, chestIn: 53.5, lengthIn: 31.5, shoulderIn: 24.4, sleeveIn: 11.0 },
    ],
    colors: [
      {
        id: 'c-pitch-black',
        name: 'Cyber Pitch Black',
        hex: '#111112',
        images: {
          front: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-cyber-cobalt',
        name: 'Deep Cobalt Blue',
        hex: '#1d3557',
        images: {
          front: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-12',
        author: 'Alex N.',
        rating: 5,
        date: '1 week ago',
        fitFeedback: 'True to Size',
        comment: 'Puff printing is super crisp and the reflective hit on the back pops in flash photography. High tier quality.',
        verified: true,
        sizePurchased: 'L',
        colorPurchased: 'Cyber Pitch Black'
      }
    ]
  },
  {
    id: 'tee-12',
    title: 'Signature 300GSM Ultra-Heavy French Terry Tee',
    subtitle: 'Maximum density 300+ GSM heavyweight loop weave for supreme architectural structure',
    slug: 'signature-300gsm-ultra-heavy-french-terry-tee',
    category: 'heavyweight',
    price: 58,
    isNew: true,
    rating: 5.0,
    reviewCount: 42,
    description: 'Our most dense creation to date. Weighing in at over 300 GSM, this tee delivers absolute architectural drape that stands on its own. Built for cold-season layering and statement streetwear silhouettes.',
    fit: 'Boxy Oversized',
    neckline: 'Ribbed Heavy Crew',
    modelInfo: {
      height: "6'3\" (190 cm)",
      wearingSize: 'XL',
    },
    features: [
      '300+ GSM ultra-dense knit',
      'Reinforced double-thick 1.5" collar that never sags',
      'Sculpted drop-shoulder block',
      'Blind stitched heavyweight hem',
      'Silicon-enzyme wash for velvety outer hand'
    ],
    fabric: {
      gsm: 310,
      weightLabel: 'Ultra Heavy (300+ GSM)',
      material: '100% Combed Compact Cotton',
      certifications: ['OEKO-TEX Standard 100', 'GOTS Organic Certified'],
      preShrunk: true,
      weave: 'Compact Double Knit',
      careInstructions: [
        'Cold wash with mild detergent',
        'Lay flat to dry to preserve silhouette',
        'Steam iron on reverse'
      ],
      madeIn: 'Milan, Italy'
    },
    sizes: [
      { size: 'XS', stock: 2 },
      { size: 'S', stock: 5 },
      { size: 'M', stock: 18 },
      { size: 'L', stock: 14 },
      { size: 'XL', stock: 8 },
      { size: 'XXL', stock: 3 },
    ],
    measurements: [
      { size: 'XS', chestCm: 108, lengthCm: 70, shoulderCm: 52, sleeveCm: 23, chestIn: 42.5, lengthIn: 27.6, shoulderIn: 20.5, sleeveIn: 9.1 },
      { size: 'S', chestCm: 114, lengthCm: 72, shoulderCm: 54, sleeveCm: 24, chestIn: 44.9, lengthIn: 28.3, shoulderIn: 21.3, sleeveIn: 9.4 },
      { size: 'M', chestCm: 120, lengthCm: 74, shoulderCm: 56, sleeveCm: 25, chestIn: 47.2, lengthIn: 29.1, shoulderIn: 22.0, sleeveIn: 9.8 },
      { size: 'L', chestCm: 126, lengthCm: 76, shoulderCm: 58, sleeveCm: 26, chestIn: 49.6, lengthIn: 29.9, shoulderIn: 22.8, sleeveIn: 10.2 },
      { size: 'XL', chestCm: 132, lengthCm: 78, shoulderCm: 60, sleeveCm: 27, chestIn: 52.0, lengthIn: 30.7, shoulderIn: 23.6, sleeveIn: 10.6 },
      { size: 'XXL', chestCm: 138, lengthCm: 80, shoulderCm: 62, sleeveCm: 28, chestIn: 54.3, lengthIn: 31.5, shoulderIn: 24.4, sleeveIn: 11.0 },
    ],
    colors: [
      {
        id: 'c-raw-concrete',
        name: 'Raw Concrete Grey',
        hex: '#525456',
        images: {
          front: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      },
      {
        id: 'c-espresso',
        name: 'Deep Espresso Brown',
        hex: '#302621',
        images: {
          front: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
          back: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
          model: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
          detail: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
        },
        inStock: true
      }
    ],
    reviews: [
      {
        id: 'rev-13',
        author: 'Dmitri V.',
        rating: 5,
        date: '3 days ago',
        fitFeedback: 'True to Size',
        comment: 'This is the holy grail of heavyweight tees. It holds its exact shape, feels substantial like armor, yet soft to touch. Worth every cent.',
        verified: true,
        sizePurchased: 'XL',
        colorPurchased: 'Deep Espresso Brown'
      }
    ]
  }
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'look-1',
    title: 'Monochrome Street Architecture',
    styleTag: 'Streetwear / Boxy Cut',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80',
    description: 'Pairing the Archive 280GSM Heavyweight Tee in Washed Onyx with wide-leg carpenter denim and minimalist low-top leather trainers.',
    featuredProductId: 'tee-01',
    outfitItems: [
      { item: 'Archive 280GSM Boxy Tee (Washed Onyx)', note: 'Base Layer' },
      { item: 'Wide-Leg Pleated Raw Denim', note: 'Bottoms' },
      { item: 'Vintage Silver Chain & Signet Ring', note: 'Accessories' }
    ]
  },
  {
    id: 'look-2',
    title: 'Contemporary Botanical Layering',
    styleTag: 'Casual / Minimalist',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    description: 'A relaxed aesthetic featuring the Kyoto Botanical Studio Tee worn under an open unbuttoned linen overshirt.',
    featuredProductId: 'tee-07',
    outfitItems: [
      { item: 'Kyoto Botanical Studio Graphic Tee', note: 'Statement Centerpiece' },
      { item: 'Relaxed Ecru Heavy Twill Overshirt', note: 'Outerwear' },
      { item: 'Olive Chino Trousers', note: 'Bottoms' }
    ]
  },
  {
    id: 'look-3',
    title: 'Earthy Mineral Tones',
    styleTag: 'Vintage / Organic',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80',
    description: 'Combining the Sunbaked Terracotta Boxy Tee with sand utility cargo shorts and suede mule slip-ons for warm weekend wanderings.',
    featuredProductId: 'tee-04',
    outfitItems: [
      { item: 'EarthTone Pigment-Dyed Raw Hem Tee', note: 'Top' },
      { item: 'Heavyweight Sand Utility Cargos', note: 'Bottoms' },
      { item: 'Beige Canvas Crossbody Bag', note: 'Accessories' }
    ]
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'All T-Shirts', count: 12 },
  { id: 'heavyweight', label: 'Heavyweight (280+ GSM)', count: 3 },
  { id: 'vintage-wash', label: 'Vintage & Mineral Wash', count: 3 },
  { id: 'graphic-streetwear', label: 'Graphic & Streetwear', count: 3 },
  { id: 'minimal-basics', label: 'Minimalist Basics & Supima', count: 2 },
  { id: 'organic-cotton', label: '100% Certified Organic', count: 4 },
  { id: 'pocket-henley', label: 'Pocket & Henley', count: 2 },
];
