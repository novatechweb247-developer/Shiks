export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Eveningwear' | 'Suits & Tailoring' | 'Silk & Velvet' | 'Runway Edit' | 'Accessories';
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  fabric: string;
  fit: string;
  care: string;
  primaryImage: string;
  hoverImage: string;
  additionalImages?: string[];
  sizes: string[];
  colors: { name: string; hex: string; class: string }[];
  inStock: boolean;
  featured?: boolean;
  badge?: string;
  lookNumber?: string;
}

export interface HeroSlide {
  id: number;
  slideNumber: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaTarget: string;
  image: string;
  tagline: string;
  highlightCategory: string;
}

export interface Collection {
  id: string;
  name: string;
  season: string;
  description: string;
  image: string;
  itemCount: number;
  categoryTag: string;
}

export interface LookbookHotspot {
  x: number; // percentage
  y: number; // percentage
  productId: string;
  title: string;
  price: number;
}

export interface LookbookItem {
  id: string;
  lookNumber: string;
  title: string;
  season: string;
  description: string;
  image: string;
  model: string;
  hotspots: LookbookHotspot[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  serviceType: 'Private Haute Couture Atelier' | 'Red Carpet & Gala Styling' | 'Bespoke Suiting Consultation' | 'Virtual Styling VIP';
  salonLocation: 'London — Mayfair Flagship' | 'Paris — Rue Saint-Honoré' | 'New York — Madison Avenue' | 'Milan — Via Montenapoleone';
  date: string;
  time: string;
  notes?: string;
}
