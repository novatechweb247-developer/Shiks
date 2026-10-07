import { Product, HeroSlide, Collection, LookbookItem } from '../types/fashion';

export const BRAND_INFO = {
  name: "SHIKS FASHION",
  legalName: "Shiks Fashion & Innovation Hub",
  founder: "Maryam Sadiq Shikra",
  founderTitle: "Founder & CEO, Award-Winning Fashion Designer & Youth Advocate",
  motto: "BUILDING SKILLS · CREATING OPPORTUNITIES · SHAPING THE FUTURE OF FASHION",
  established: 2016,
  headquarters: "British American Junction, Right Beside Kingsbite, Jos, Plateau State, Nigeria",
  phone1: "07035623741",
  phone2: "09050788214",
  email: "shiksfashion2014@gmail.com",
  instagram: "@shiksfashionacademy",
  facebook: "shiksFashionBoutiq",
  alumniTrained: "500+",
  awardTitle: "Best Fashion School in Plateau State (Multiple Award Winner)",
  alumniSummitDate: "9 January 2027",
  sharedFacilityBudget: "₦119,000,000"
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    slideNumber: "01",
    kicker: "SHIKS FASHION // HAUTE COUTURE & INNOVATION HUB",
    title: "REGAL SILHOUETTES. ARCHITECTURAL TAILORING.",
    subtitle: "SHAPING THE FUTURE OF AFRICAN & GLOBAL FASHION",
    description: "Founded in 2016 by Maryam Sadiq Shikra in Jos, Plateau State. An unapologetic dialogue of royal purple, alabaster white, bespoke bridal couture, and master garment construction.",
    ctaText: "EXPLORE COLLECTION",
    ctaTarget: "#catalog",
    image: "/images/IMG_9791.jpg",
    tagline: "COUTURE & BRIDAL // EDITORIAL I",
    highlightCategory: "Bridal & Reception"
  },
  {
    id: 2,
    slideNumber: "02",
    kicker: "THE 3-IN-1 MODEL // TRAINING · INCUBATION · PRODUCTION",
    title: "THE ROYAL VELVET, ABAYA & BRIDAL GOWNS",
    subtitle: "BRIDAL EXCELLENCE & MODEST HAUTE COUTURE",
    description: "From reception and bridal masterpieces to modest fashion, abayas, and ready-to-wear collections crafted with industrial precision in our state-of-the-art facility.",
    ctaText: "DISCOVER SIX",
    ctaTarget: "#collections",
    image: "/images/IMG_9727.jpg",
    tagline: "BRIDAL & READY-TO-WEAR // RUNWAY II",
    highlightCategory: "Eveningwear"
  },
  {
    id: 3,
    slideNumber: "03",
    kicker: "ALUMNI IMPACT SUMMIT 2027 & SHARED PRODUCTION FACILITY",
    title: "FROM SKILLS TO SUSTAINABLE ENTERPRISE",
    subtitle: "OVER 500+ GRADUATES · AWARD-WINNING INNOVATION",
    description: "Recognized as Best Fashion School in Plateau State. Powering the next generation through our ₦119M shared production facility and bespoke client commissions.",
    ctaText: "SHOP NOW",
    ctaTarget: "#catalog",
    image: "/images/DTO_3524.jpeg",
    tagline: "ENTERPRISE & ATELIER // COMMISSIONS III",
    highlightCategory: "Bespoke & Academy"
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: "royal-bridal",
    name: "Reception & Royal Bridal Couture",
    season: "Signature Bridal Edition",
    description: "Bespoke bridal gowns, crystal-encrusted reception dresses, and custom hand-draped veils crafted for unforgettable celebrations.",
    image: "/images/IMG_9722.jpg",
    itemCount: 8,
    categoryTag: "Eveningwear"
  },
  {
    id: "architectural-blanche",
    name: "Alabaster Architectural Tailoring",
    season: "Power Suiting & Monograph",
    description: "Razor-cut ivory lapels, structured blazers, and cinched power silhouettes made from premium double-faced wool twill.",
    image: "/images/ELS_9208.jpg",
    itemCount: 6,
    categoryTag: "Suits & Tailoring"
  },
  {
    id: "modest-abaya",
    name: "Modest Fashion & Royal Abayas",
    season: "Heritage & Contemporary Cut",
    description: "Flowing luxury abayas, modest silhouettes, and sensory purple silks tailored with modest elegance.",
    image: "/images/IMG_9788.jpg",
    itemCount: 7,
    categoryTag: "Silk & Velvet"
  },
  {
    id: "lifestyle-duvets",
    name: "Luxury Duvets, Bedspreads & Pillows",
    season: "Shiks Home & Souvenirs",
    description: "Handcrafted luxury duvets, bespoke bedspreads, decorative throw pillows, and corporate event souvenirs.",
    image: "/images/IMG_0081.jpg",
    itemCount: 5,
    categoryTag: "Accessories"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "six-01",
    name: "The Royal Amethyst Reception & Bridal Gown",
    subtitle: "Hand-beaded silk velvet bodice with floor-sweeping ceremonial train",
    category: "Eveningwear",
    price: 1850,
    originalPrice: 2200,
    description: "The crown jewel of Shiks Fashion couture. Crafted from royal purple mulberry silk velvet with structural internal boning, Swarovski crystal neckline accents, and a dramatic detachable reception train.",
    details: [
      "Signature Shiks internal boned corset for sculpted waistline",
      "Detachable ceremonial train for reception transitions",
      "Hand-finished invisible back closure with pearl buttons",
      "Mulberry silk lining designed for climate comfort"
    ],
    fabric: "100% Pure Mulberry Silk Velvet (450gsm)",
    fit: "Sculpted royal column with cathedral flare",
    care: "Specialist couture dry clean only",
    primaryImage: "/images/IMG_9727.jpg",
    hoverImage: "/images/IMG_9722.jpg",
    additionalImages: ["/images/IMG_9727.jpg", "/images/IMG_9722.jpg", "/images/IMG_0370.jpg"],
    sizes: ["FR 34 (XS)", "FR 36 (S)", "FR 38 (M)", "FR 40 (L)", "Bespoke Made-to-Measure"],
    colors: [
      { name: "Royal Amethyst", hex: "#4a154b", class: "bg-purple-900" },
      { name: "Pure Blanche", hex: "#ffffff", class: "bg-white" },
      { name: "Obsidian Noir", hex: "#111116", class: "bg-zinc-950" }
    ],
    inStock: true,
    featured: true,
    badge: "BRIDAL EDIT",
    lookNumber: "LOOK 01"
  },
  {
    id: "six-02",
    name: "The Blanche Architectural Tuxedo Blazer",
    subtitle: "Precision-tailored double-faced wool with silk faille peak lapels",
    category: "Suits & Tailoring",
    price: 1250,
    description: "Designed by Maryam Sadiq Shikra. Engineered with architectural shoulders, razor peak lapels, and custom purple contrast buttonhole stitching.",
    details: [
      "Structured hourglass silhouette with chest canvas construction",
      "Hand-rolled silk faille contrast lapels",
      "Hand-stitched purple monogram interior lining",
      "Functional four-button surgeon cuffs"
    ],
    fabric: "100% Italian Virgin Wool Twill (Lining: 100% Cupro)",
    fit: "Tailored architectural hourglass fit",
    care: "Dry clean with luxury garment protector",
    primaryImage: "/images/ELS_9208.jpg",
    hoverImage: "/images/IMG_0245.jpg",
    additionalImages: ["/images/ELS_9208.jpg", "/images/IMG_0245.jpg", "/images/IMG-20261007-WA0001.jpg"],
    sizes: ["FR 34 (XS)", "FR 36 (S)", "FR 38 (M)", "FR 40 (L)", "FR 42 (XL)"],
    colors: [
      { name: "Pure Blanche", hex: "#ffffff", class: "bg-white" },
      { name: "Deep Violet", hex: "#3b0764", class: "bg-purple-950" }
    ],
    inStock: true,
    featured: true,
    badge: "SIGNATURE PIECE",
    lookNumber: "LOOK 04"
  },
  {
    id: "six-03",
    name: "The Imperial Modest Abaya & Silk Slip",
    subtitle: "Fluid French crepe abaya with delicate purple crystal cuffs",
    category: "Silk & Velvet",
    price: 890,
    description: "A triumph of modest elegance. Fluid cascading crepe with raglan batwing sleeves, subtle violet satin piping, and coordinated bias-cut underdress.",
    details: [
      "Full-coverage flowing silhouette with graceful motion",
      "Hand-applied amethyst crystal embellishment on cuffs",
      "Concealed snap front fastening with matching silk Sheila wrap",
      "Breathable high-thread-count fabric"
    ],
    fabric: "Luxury Dubai Nida & Mulberry Silk Crepe",
    fit: "Fluid modest drape",
    care: "Delicate hand wash or gentle dry clean",
    primaryImage: "/images/IMG_9791.jpg",
    hoverImage: "/images/IMG_9788.jpg",
    additionalImages: ["/images/IMG_9791.jpg", "/images/IMG_9788.jpg", "/images/IMG_0403.jpg"],
    sizes: ["Length 52 (XS)", "Length 54 (S)", "Length 56 (M)", "Length 58 (L)", "Length 60 (XL)"],
    colors: [
      { name: "Royal Purple", hex: "#6b21a8", class: "bg-purple-700" },
      { name: "Midnight Black", hex: "#09090b", class: "bg-zinc-900" },
      { name: "Pearl Cream", hex: "#f5f3ef", class: "bg-amber-50" }
    ],
    inStock: true,
    featured: true,
    badge: "MODEST EDIT",
    lookNumber: "LOOK 06"
  },
  {
    id: "six-04",
    name: "The Sovereign Double-Breasted Cashmere Coat",
    subtitle: "Floor-length cocoon coat with oversized notched lapels",
    category: "Runway Edit",
    price: 2450,
    originalPrice: 2800,
    description: "Spun from double-faced pure Mongolian cashmere. Accented with subtle purple pick-stitch detailing along the lapel and belt tie.",
    details: [
      "Pure Mongolian unbrushed double-faced cashmere",
      "Detachable self-tie cashmere belt with sculpted horn buckle",
      "Deep storm welt pockets",
      "Hand-rolled internal seams"
    ],
    fabric: "100% Pure Mongolian Cashmere",
    fit: "Relaxed tailored cocoon silhouette",
    care: "Specialist cashmere cleaner only",
    primaryImage: "/images/IMG_0081.jpg",
    hoverImage: "/images/IMG_0278.jpg",
    additionalImages: ["/images/IMG_0081.jpg", "/images/IMG_0278.jpg", "/images/IMG-20261007-WA0004.jpg"],
    sizes: ["FR 36 (S)", "FR 38 (M)", "FR 40 (L)", "FR 42 (XL)"],
    colors: [
      { name: "Snow Blanche", hex: "#ffffff", class: "bg-white" },
      { name: "Amethyst Smoke", hex: "#581c87", class: "bg-purple-800" }
    ],
    inStock: true,
    featured: true,
    badge: "RUNWAY EXCLUSIVE",
    lookNumber: "LOOK 08"
  },
  {
    id: "six-05",
    name: "The High-Waist Pleated Atelier Trouser",
    subtitle: "Wide-leg fluid tailoring with purple satin tuxedo stripe",
    category: "Suits & Tailoring",
    price: 680,
    description: "Engineered with double reverse pleats for dramatic movement. Featuring an elongated waistband, interior curtain lining, and tonal purple grosgrain piping down the outer seams.",
    details: [
      "Ultra high-rise structured waistband",
      "Double forward pleats falling into a generous wide leg",
      "Bespoke purple satin outer seam stripe",
      "Adjustable hidden inner waist cinch tabs"
    ],
    fabric: "98% Italian Virgin Wool, 2% Elastane",
    fit: "High-rise wide leg",
    care: "Dry clean only",
    primaryImage: "/images/IMG_0245.jpg",
    hoverImage: "/images/ELS_9208.jpg",
    additionalImages: ["/images/IMG_0245.jpg", "/images/IMG-20261007-WA0002.jpg"],
    sizes: ["FR 34 (XS)", "FR 36 (S)", "FR 38 (M)", "FR 40 (L)", "FR 42 (XL)"],
    colors: [
      { name: "Optic White", hex: "#ffffff", class: "bg-white" },
      { name: "Midnight Amethyst", hex: "#3b0764", class: "bg-purple-950" }
    ],
    inStock: true,
    featured: false,
    lookNumber: "LOOK 05"
  },
  {
    id: "six-06",
    name: "Shiks Heritage Luxury Duvet & Throw Pillow Ensemble",
    subtitle: "Mastercrafted bridal duvet with quilted embroidery and 4 matching pillows",
    category: "Accessories",
    price: 750,
    description: "A signature specialty of Shiks Fashion & Innovations Hub. Quilted in our Jos production facility from premium Egyptian cotton and purple damask silk. Includes 1 king duvet, 1 bedspread, and 4 embroidered decorative throw pillows.",
    details: [
      "Custom monogram embroidery from our computerized embroidery machines",
      "800-thread-count Egyptian cotton with silk damask jacquard",
      "Hypoallergenic microfiber filling for cloud-soft warmth",
      "Includes 4 tailored throw pillows with invisible zippers"
    ],
    fabric: "Egyptian Cotton & Damask Silk Jacquard",
    fit: "King Bedspread (260cm x 240cm) + 4 Throw Pillows (45cm x 45cm)",
    care: "Machine wash cold gentle or professional laundering",
    primaryImage: "/images/IMG-20261007-WA0016.jpg",
    hoverImage: "/images/IMG-20261007-WA0017.jpg",
    additionalImages: ["/images/IMG-20261007-WA0016.jpg", "/images/IMG-20261007-WA0017.jpg"],
    sizes: ["King Set", "Queen Set", "Super King Custom"],
    colors: [
      { name: "Royal Purple & Gold", hex: "#581c87", class: "bg-purple-800" },
      { name: "Bridal White", hex: "#ffffff", class: "bg-white" }
    ],
    inStock: true,
    featured: true,
    badge: "HUB SPECIALTY",
    lookNumber: "HOME 01"
  },
  {
    id: "six-07",
    name: "The Sculpted Amethyst Corset Bodysuit",
    subtitle: "Architectural cupped bodice with boned velvet construction",
    category: "Silk & Velvet",
    price: 520,
    description: "Designed to be worn standalone or layered beneath an open tuxedo. Hand-cut from crushed royal purple velvet with sweetheart neckline and flex-steel boning.",
    details: [
      "Sweetheart neckline with underwire support",
      "12 flexible steel bones for flattering posture support",
      "Snap gusset fastening with soft stretch cotton base",
      "Gold-tone Six Fashion signature back zip"
    ],
    fabric: "82% Rayon, 18% Silk Velvet",
    fit: "Form-fitting sculpted silhouette",
    care: "Spot clean or dry clean",
    primaryImage: "/images/IMG-20261007-WA0030.jpg",
    hoverImage: "/images/IMG-20261007-WA0026.jpg",
    additionalImages: ["/images/IMG-20261007-WA0030.jpg", "/images/IMG-20261007-WA0026.jpg"],
    sizes: ["FR 34 (XS)", "FR 36 (S)", "FR 38 (M)", "FR 40 (L)"],
    colors: [
      { name: "Royal Purple", hex: "#6b21a8", class: "bg-purple-700" },
      { name: "Alabaster", hex: "#ffffff", class: "bg-white" }
    ],
    inStock: true,
    featured: false,
    badge: "TRENDING",
    lookNumber: "LOOK 07"
  },
  {
    id: "six-08",
    name: "The Opera Drape Cape Gown",
    subtitle: "Floor-length crepe gown with dramatic pleated shoulder cape",
    category: "Eveningwear",
    price: 2100,
    description: "Created for red-carpet and wedding reception entrances. A fluid column dress with an integrated royal cape attached at the shoulders that billows as you move.",
    details: [
      "Integrated full-length flowing capelet back",
      "High jewel neckline with subtle keyhole fastening",
      "Floor-length fitted column skirt with center back split",
      "Invisible hand-hemmed finish"
    ],
    fabric: "100% Silk Crepe de Chine (Lining: Silk Georgette)",
    fit: "Regal column with floating cape",
    care: "Couture dry clean only",
    primaryImage: "/images/IMG_0370.jpg",
    hoverImage: "/images/IMG_0403.jpg",
    additionalImages: ["/images/IMG_0370.jpg", "/images/IMG_0403.jpg"],
    sizes: ["FR 34 (XS)", "FR 36 (S)", "FR 38 (M)", "FR 40 (L)", "Bespoke"],
    colors: [
      { name: "Royal Amethyst", hex: "#3b0764", class: "bg-purple-950" },
      { name: "Pure Blanche", hex: "#ffffff", class: "bg-white" }
    ],
    inStock: true,
    featured: false,
    badge: "RED CARPET",
    lookNumber: "LOOK 03"
  }
];

export const SHIKS_PROGRAMS = [
  {
    title: "Fashion Design & Garment Construction",
    description: "Comprehensive technical training covering pattern drafting, cutting, assembly, and fine finishes on industrial machinery.",
    icon: "Scissors"
  },
  {
    title: "Modest Fashion & Abaya Design",
    description: "Artisanal mastery in draped modest luxury, couture hijabs, bespoke abayas, and bridal coverage.",
    icon: "Sparkles"
  },
  {
    title: "Textile & Surface Design",
    description: "Hand and digital surface embellishment, fabric manipulation, beadwork, and computerized monogramming.",
    icon: "Layers"
  },
  {
    title: "Fashion Illustration & Digital CAD",
    description: "Digital design systems, 3D prototyping, tech-packs, and visual portfolio development.",
    icon: "Palette"
  },
  {
    title: "Fashion Entrepreneurship & Business",
    description: "Enterprise planning, pricing, marketing, financial literacy, and supply chain management for MSMEs.",
    icon: "Briefcase"
  },
  {
    title: "Production & Quality Control",
    description: "Industrial garment manufacturing standards, finishing, and packaging to service bulk institutional contracts.",
    icon: "ShieldCheck"
  }
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: "look-01",
    lookNumber: "LOOK 01",
    title: "The Regal Empress Bridal & Reception Gown",
    season: "Alumni Impact Showcase",
    description: "Handcrafted in our Jos Innovation Hub. Amethyst silk velvet contoured with architectural boning and fluid train.",
    image: "/images/IMG_9727.jpg",
    model: "Shiks Master Artisan (Jos Plateau State)",
    hotspots: [
      { x: 50, y: 35, productId: "six-01", title: "Amethyst Empress Sculpted Gown", price: 1850 },
      { x: 65, y: 70, productId: "six-06", title: "Luxury Embroidered Pillows", price: 750 }
    ]
  },
  {
    id: "look-02",
    lookNumber: "LOOK 02",
    title: "Blanche Tailoring & Power Shoulders",
    season: "Signature Monograph Edit",
    description: "A masterclass in restraint. Heavy Italian wool twill paired with razor-sharp peak lapels in alabaster white.",
    image: "/images/ELS_9208.jpg",
    model: "Shiks Graduate Runway (Plateau Fashion Week)",
    hotspots: [
      { x: 45, y: 40, productId: "six-02", title: "Blanche Tuxedo Blazer", price: 1250 },
      { x: 52, y: 80, productId: "six-05", title: "High-Waist Pleated Trouser", price: 680 }
    ]
  },
  {
    id: "look-03",
    lookNumber: "LOOK 03",
    title: "Midnight Violet Evening Slip & Modest Cut",
    season: "Nightfall Atelier Capsule",
    description: "Sensual 30mm heavy silk satin moving effortlessly against dark purple runway backdrops.",
    image: "/images/IMG_9791.jpg",
    model: "Shiks Academy Alumni Showcase",
    hotspots: [
      { x: 48, y: 50, productId: "six-03", title: "Imperial Modest Abaya & Silk Slip", price: 890 }
    ]
  },
  {
    id: "look-04",
    lookNumber: "LOOK 04",
    title: "Sovereign Cashmere & Tailored Volumes",
    season: "Winter Haute Couture",
    description: "Double-faced cashmere draped in an oversized cocoon silhouette with hand-rolled borders.",
    image: "/images/IMG_0081.jpg",
    model: "Shiks Runway Series",
    hotspots: [
      { x: 50, y: 45, productId: "six-04", title: "Sovereign Double-Breasted Coat", price: 2450 }
    ]
  }
];

export const BOUTIQUES = [
  {
    city: "Jos, Plateau State",
    district: "Main Flagship Hub & Academy",
    address: "British American Junction Right Beside Kingsbite, Jos, Plateau State, Nigeria",
    hours: "Mon – Sat: 08:30 – 18:00 · Walk-ins & Consultations Welcome",
    phone: "07035623741 / 09050788214",
    email: "shiksfashion2014@gmail.com",
    image: "/images/DTO_3524.jpeg"
  },
  {
    city: "London",
    district: "Mayfair Private Client Representative",
    address: "34 Old Bond Street, London W1S 4QR",
    hours: "By Private Appointment",
    phone: "+44 (0)20 7946 0892",
    email: "international@sixfashion.com",
    image: "/images/IMG_0278.jpg"
  },
  {
    city: "Paris",
    district: "Rue Saint-Honoré Client Salon",
    address: "18 Rue Saint-Honoré, 75001 Paris",
    hours: "Sur Rendez-vous",
    phone: "+33 1 42 68 55 00",
    email: "paris@sixfashion.com",
    image: "/images/IMG_9788.jpg"
  },
  {
    city: "Abuja",
    district: "VIP Liaison Suite",
    address: "Maitama / Central Business District, Abuja, Nigeria",
    hours: "Bespoke Bridal & Couture Consultations",
    phone: "09050788214",
    email: "shiksfashion2014@gmail.com",
    image: "/images/IMG_0403.jpg"
  }
];

export const ECOSYSTEM_PARTNERS = [
  "ITF (Industrial Training Fund)",
  "GIZ (German International Cooperation)",
  "PLASMIDA (Plateau Micro Enterprise Agency)",
  "NYSC (National Youth Service Corps)",
  "NDE (National Directorate of Employment)",
  "IDEAS / TVET World Bank Project",
  "NASME (National Association of Small & Medium Enterprises)",
  "PLAFDA (Plateau Fashion Designers Association)"
];

export const PRESS_QUOTES = [
  {
    quote: "Honoured multiple times as The Best Fashion School in Plateau State, Shiks Fashion is transforming vocational skills into world-class sustainable enterprises.",
    publication: "PLATEAU EXCELLENCE AWARDS",
    year: "ANNUAL WINNER"
  },
  {
    quote: "Maryam Sadiq Shikra's vision bridges traditional craftsmanship and modern haute couture, empowering hundreds of women into thriving businesses.",
    publication: "YOUTH EMPOWERMENT MERIT AWARD",
    year: "RECOGNITION"
  },
  {
    quote: "A beacon of structured industrial fashion training, blending bridal luxury, modest couture, and manufacturing prowess in Nigeria.",
    publication: "MSME INNOVATION DIGEST",
    year: "2026 EDITORIAL"
  }
];
