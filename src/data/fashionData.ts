import { Product, HeroSlide, Collection, LookbookItem } from '../types/fashion';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    slideNumber: "01",
    kicker: "MAISON SIX // AUTUMN-WINTER COUTURE",
    title: "REGAL SILHOUETTES. ARCHITECTURAL TAILORING.",
    subtitle: "DEFINING MODERN FASHION REGALITY",
    description: "Where bold contemporary vision meets bespoke Parisian craftsmanship. An unapologetic dialogue of alabaster white, regal purple velvet, and sculptured drapery.",
    ctaText: "EXPLORE COLLECTION",
    ctaTarget: "#catalog",
    image: "/images/IMG_9791.jpg",
    tagline: "HAUTE COUTURE // EDITORIAL I",
    highlightCategory: "Runway Capsule"
  },
  {
    id: 2,
    slideNumber: "02",
    kicker: "CAPSULE RELEASE // MONOGRAM & AMETHYST",
    title: "THE ROYAL VELVET & SILK EVENINGWEAR",
    subtitle: "FLUID DRAPE MEETS RAZOR PRECISION",
    description: "Sculpted bodices, layered silk georgette, and midnight amethyst accents crafted for gala appearances and commanding authority.",
    ctaText: "DISCOVER SIX",
    ctaTarget: "#collections",
    image: "/images/IMG_9727.jpg",
    tagline: "EVENINGWEAR // RUNWAY II",
    highlightCategory: "Eveningwear"
  },
  {
    id: 3,
    slideNumber: "03",
    kicker: "PRIVATE ATELIER & SALON SERVICES",
    title: "BESPOKE RUNWAY COMMISSIONS",
    subtitle: "EXCLUSIVE COUTURE TAILORED TO YOU",
    description: "Experience the private salon in Mayfair and Saint-Honoré. Hand-draped couture pieces customized to individual measurement and red-carpet vision.",
    ctaText: "SHOP NOW",
    ctaTarget: "#catalog",
    image: "/images/DTO_3524.jpeg",
    tagline: "THE ATELIER // COMMISSIONS III",
    highlightCategory: "Suits & Tailoring"
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: "royal-amethyst",
    name: "The Royal Amethyst Gala",
    season: "Fall / Winter Haute Couture",
    description: "Deep regal violet, crushed velvet, and luminous silk gowns designed for galas and ceremonial entrances.",
    image: "/images/IMG_9722.jpg",
    itemCount: 8,
    categoryTag: "Eveningwear"
  },
  {
    id: "architectural-blanche",
    name: "Alabaster Architectural Tailoring",
    season: "Signature Monograph",
    description: "Razor-cut ivory lapels, sculptural wool twill blazers, and cinched power silhouettes.",
    image: "/images/ELS_9208.jpg",
    itemCount: 6,
    categoryTag: "Suits & Tailoring"
  },
  {
    id: "velvet-silk",
    name: "Luxe Velvet & Silk Separates",
    season: "Capsule Noir & Violet",
    description: "Sensory textures, French silk crepe, and amethyst piping for modern nightlife elegance.",
    image: "/images/IMG_9788.jpg",
    itemCount: 7,
    categoryTag: "Silk & Velvet"
  },
  {
    id: "runway-edits",
    name: "Runway Statement Silhouettes",
    season: "Limited Edition Drop",
    description: "Hand-finished runway statements, dramatic capes, and architectural outerwear.",
    image: "/images/IMG_0081.jpg",
    itemCount: 5,
    categoryTag: "Runway Edit"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "six-01",
    name: "The Amethyst Empress Sculpted Gown",
    subtitle: "Hand-draped silk velvet with architectural cowl neckline",
    category: "Eveningwear",
    price: 1850,
    originalPrice: 2200,
    description: "A showstopping centerpiece of the Six Fashion runway collection. Crafted from 100% royal purple mulberry silk velvet with hand-molded corsetry and fluid cascading side train.",
    details: [
      "Custom internal boned corsetry for waist definition",
      "Floor-sweeping asymmetrical train",
      "Concealed hand-stitched invisible back zipper",
      "Lined with ultra-soft mulberry silk charmeuse"
    ],
    fabric: "100% Mulberry Silk Velvet (450gsm)",
    fit: "Sculpted column fit with dramatic flare",
    care: "Specialist couture dry clean only",
    primaryImage: "/images/IMG_9727.jpg",
    hoverImage: "/images/IMG_9722.jpg",
    additionalImages: ["/images/IMG_9727.jpg", "/images/IMG_9722.jpg", "/images/IMG_0370.jpg"],
    sizes: ["FR 34 (XS)", "FR 36 (S)", "FR 38 (M)", "FR 40 (L)", "Bespoke Made-to-Measure"],
    colors: [
      { name: "Royal Amethyst", hex: "#4a154b", class: "bg-purple-900" },
      { name: "Alabaster White", hex: "#ffffff", class: "bg-white" },
      { name: "Obsidian Black", hex: "#111116", class: "bg-zinc-950" }
    ],
    inStock: true,
    featured: true,
    badge: "RUNWAY EDIT",
    lookNumber: "LOOK 01"
  },
  {
    id: "six-02",
    name: "The Blanche Architectural Tuxedo Blazer",
    subtitle: "Hourglass tailored silhouette with hand-pressed peaked lapels",
    category: "Suits & Tailoring",
    price: 1250,
    description: "Precision-tailored in our European atelier from heavyweight double-faced Italian wool twill. Finished with silk faille peak lapels and Six Fashion signature horn buttons.",
    details: [
      "Signature sculpted waist and padded structural shoulders",
      "Hand-finished silk faille contrasting peak lapels",
      "Functional surgeon cuffs with purple contrast buttonhole thread",
      "Two flap pockets and chest welt pocket"
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
    name: "The Violet Mist Silk Bias-Cut Slip Dress",
    subtitle: "Fluid 30mm silk satin with delicate French lace inserts",
    category: "Silk & Velvet",
    price: 890,
    description: "Epitomizing ease and sensuality. Draped on the true bias to glide naturally over feminine curves. Features delicate hand-set purple Chantilly lace inserts at the back and neckline.",
    details: [
      "True bias cut for effortless drape and fluid motion",
      "Adjustable dainty spaghetti straps",
      "French lace scalloped hemline",
      "Low cowl back detail"
    ],
    fabric: "100% Heavy Mulberry Silk Satin",
    fit: "Sensual fluid drape",
    care: "Delicate silk wash or specialist clean",
    primaryImage: "/images/IMG_9791.jpg",
    hoverImage: "/images/IMG_9788.jpg",
    additionalImages: ["/images/IMG_9791.jpg", "/images/IMG_9788.jpg", "/images/IMG_0403.jpg"],
    sizes: ["FR 34 (XS)", "FR 36 (S)", "FR 38 (M)", "FR 40 (L)"],
    colors: [
      { name: "Electric Violet", hex: "#7c3aed", class: "bg-purple-600" },
      { name: "Champagne Pearl", hex: "#f5f3ef", class: "bg-amber-50" },
      { name: "Midnight Noir", hex: "#09090b", class: "bg-zinc-900" }
    ],
    inStock: true,
    featured: true,
    badge: "BESTSELLER",
    lookNumber: "LOOK 06"
  },
  {
    id: "six-04",
    name: "The Sovereign Double-Breasted Cashmere Coat",
    subtitle: "Floor-length cocoon coat with oversized notched lapels",
    category: "Runway Edit",
    price: 2450,
    originalPrice: 2800,
    description: "An imperial statement coat spun from double-faced pure Mongolian cashmere. Accented with subtle purple pick-stitch detailing along the lapel and belt tie.",
    details: [
      "Pure Mongolian unbrushed double-faced cashmere",
      "Detachable self-tie cashmere belt with sculpted horn buckle",
      "Deep storm storm welt pockets",
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
    name: "The Sculpted Amethyst Corset Bodysuit",
    subtitle: "Architectural cupped bodice with boned velvet construction",
    category: "Silk & Velvet",
    price: 520,
    description: "Designed to be worn standalone or layered beneath an open tuxedo. Hand-cut from crushed royal purple velvet with sweetheart sweetheart neckline and flex-steel boning.",
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
    id: "six-07",
    name: "The Monogram 'SIX' Leather Minaudière",
    subtitle: "Structured calfskin evening clutch with amethyst crystal clasp",
    category: "Accessories",
    price: 980,
    description: "Handcrafted in Florence from Italian box calfskin. Features an architectural hexagonal silhouette with a faceted purple amethyst crystal lock mechanism and detachable jewelry chain.",
    details: [
      "Custom faceted natural amethyst stone clasp mechanism",
      "Smooth Italian box calf leather with gold foil embossed logo",
      "Supple purple lambskin interior lining with card slot",
      "Detachable 18k gold-dipped snake chain (55cm drop)"
    ],
    fabric: "100% Italian Box Calf Leather, Amethyst Quartz",
    fit: "Structured mini clutch (20cm x 12cm x 6cm)",
    care: "Wipe clean with soft microfiber cloth; store in dust bag",
    primaryImage: "/images/IMG-20261007-WA0016.jpg",
    hoverImage: "/images/IMG-20261007-WA0017.jpg",
    additionalImages: ["/images/IMG-20261007-WA0016.jpg", "/images/IMG-20261007-WA0017.jpg"],
    sizes: ["One Size"],
    colors: [
      { name: "Snow White", hex: "#ffffff", class: "bg-white" },
      { name: "Royal Amethyst", hex: "#581c87", class: "bg-purple-800" },
      { name: "Noir Onyx", hex: "#0f0f13", class: "bg-zinc-950" }
    ],
    inStock: true,
    featured: true,
    badge: "FINE ACCESSORY",
    lookNumber: "LOOK 09"
  },
  {
    id: "six-08",
    name: "The Opera Drape Cape Gown",
    subtitle: "Floor-length crepe gown with dramatic pleated shoulder cape",
    category: "Eveningwear",
    price: 2100,
    description: "Created for red-carpet impact. A fluid column dress with an integrated royal cape attached at the shoulders that billows as you move.",
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
  },
  {
    id: "six-09",
    name: "The Oversized Silk Organza Trench",
    subtitle: "Translucent featherlight trench with mother-of-pearl hardware",
    category: "Runway Edit",
    price: 1620,
    description: "A breathtaking runway piece crafted from crisp 100% silk organza in sheer alabaster. Catches light with an ethereal glow while maintaining sharp structural volume.",
    details: [
      "Crisp sheer 100% silk organza",
      "Wide storm flap with tonal purple binding",
      "Genuine Australian mother-of-pearl buttons",
      "Exaggerated raglan sleeves with cuff buckle straps"
    ],
    fabric: "100% Mulberry Silk Organza",
    fit: "Oversized dramatic silhouette",
    care: "Professional gentle dry clean",
    primaryImage: "/images/IMG_0096.jpg",
    hoverImage: "/images/IMG_0278.jpg",
    additionalImages: ["/images/IMG_0096.jpg", "/images/IMG_0278.jpg"],
    sizes: ["FR 36 (S)", "FR 38 (M)", "FR 40 (L)"],
    colors: [
      { name: "Translucent White", hex: "#fafafa", class: "bg-zinc-100" },
      { name: "Lilac Haze", hex: "#d8b4fe", class: "bg-purple-300" }
    ],
    inStock: true,
    featured: false,
    badge: "AVANT-GARDE",
    lookNumber: "LOOK 11"
  },
  {
    id: "six-10",
    name: "The Amethyst Pavé Silk Headdress & Scarf",
    subtitle: "Printed 90x90cm twill silk scarf with hand-rolled borders",
    category: "Accessories",
    price: 340,
    description: "A collector's silk twill scarf showcasing the Six Fashion geometric monogram intertwined with stylized purple orchids and Parisian architecture.",
    details: [
      "Signature Six Fashion archival geometric monogram print",
      "Hand-rolled and hand-sewn borders by French artisans",
      "14mm pure mulberry silk twill with double-sided vibrancy",
      "Delivered in bespoke Six Fashion purple presentation box"
    ],
    fabric: "100% Mulberry Silk Twill (14mm)",
    fit: "90cm x 90cm square",
    care: "Hand wash cold in silk detergent or dry clean",
    primaryImage: "/images/IMG-20261007-WA0019.jpg",
    hoverImage: "/images/IMG-20261007-WA0020.jpg",
    additionalImages: ["/images/IMG-20261007-WA0019.jpg", "/images/IMG-20261007-WA0020.jpg"],
    sizes: ["90cm x 90cm"],
    colors: [
      { name: "Monogram Violet", hex: "#7e22ce", class: "bg-purple-700" },
      { name: "Blanche Ivory", hex: "#ffffff", class: "bg-white" }
    ],
    inStock: true,
    featured: false,
    badge: "ICONIC GIFT",
    lookNumber: "LOOK 12"
  },
  {
    id: "six-11",
    name: "The Sculpted Backless Velvet Midi",
    subtitle: "High-neck halter with plunging low back and crystal detail",
    category: "Eveningwear",
    price: 1150,
    description: "Modern cocktail glamour refined. Features a dignified high halter neckline contrasting with an ultra-daring low back, accented with a delicate purple crystal harness chain.",
    details: [
      "High halter neck with concealed hook and eye closure",
      "Plunging scooped open back",
      "Removable gold-plated crystal spine chain",
      "Side slit for fluid motion"
    ],
    fabric: "Silk-Blend Velvet",
    fit: "Fitted sheath through hip",
    care: "Dry clean only",
    primaryImage: "/images/IMG-20261007-WA0025.jpg",
    hoverImage: "/images/IMG-20261007-WA0024.jpg",
    additionalImages: ["/images/IMG-20261007-WA0025.jpg", "/images/IMG-20261007-WA0024.jpg"],
    sizes: ["FR 34 (XS)", "FR 36 (S)", "FR 38 (M)", "FR 40 (L)"],
    colors: [
      { name: "Velvet Purple", hex: "#4a154b", class: "bg-purple-900" },
      { name: "Onyx Black", hex: "#18181b", class: "bg-zinc-900" }
    ],
    inStock: true,
    featured: false,
    badge: "ATELIER FAVORITE",
    lookNumber: "LOOK 02"
  },
  {
    id: "six-12",
    name: "The Blanche Minimalist Column Slip Skirt",
    subtitle: "Ankle-skimming heavy silk crepe with asymmetrical hemline",
    category: "Silk & Velvet",
    price: 620,
    description: "A foundational wardrobe investment. Sits smoothly on the hips with an elasticized inner grosgrain waistband and effortless sweeping drape.",
    details: [
      "Pure heavy silk crepe with matte sand-washed finish",
      "Invisible internal grosgrain waistband",
      "Subtle side godet pleat for leg stride",
      "Finished with baby French seams"
    ],
    fabric: "100% Silk Crepe",
    fit: "Sleek low-profile column",
    care: "Dry clean or gentle hand wash",
    primaryImage: "/images/IMG-20261007-WA0021.jpg",
    hoverImage: "/images/IMG-20261007-WA0022.jpg",
    additionalImages: ["/images/IMG-20261007-WA0021.jpg", "/images/IMG-20261007-WA0022.jpg"],
    sizes: ["FR 34 (XS)", "FR 36 (S)", "FR 38 (M)", "FR 40 (L)"],
    colors: [
      { name: "Pure Blanche", hex: "#ffffff", class: "bg-white" },
      { name: "Lilac Smoke", hex: "#c084fc", class: "bg-purple-400" }
    ],
    inStock: true,
    featured: false,
    lookNumber: "LOOK 10"
  }
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: "look-01",
    lookNumber: "LOOK 01",
    title: "The Regal Empress Silhouette",
    season: "Fall / Winter 2026 Runway",
    description: "Opening look from the Paris salon. Amethyst silk velvet contoured with architectural boning and fluid train.",
    image: "/images/IMG_9727.jpg",
    model: "Sasha V. (Paris Haute Couture Week)",
    hotspots: [
      { x: 50, y: 35, productId: "six-01", title: "Amethyst Empress Sculpted Gown", price: 1850 },
      { x: 65, y: 70, productId: "six-07", title: "Monogram Minaudière", price: 980 }
    ]
  },
  {
    id: "look-02",
    lookNumber: "LOOK 02",
    title: "Blanche Tailoring & Power Shoulders",
    season: "Signature Monograph Edit",
    description: "A masterclass in restraint. Heavy Italian wool twill paired with razor-sharp peak lapels in alabaster white.",
    image: "/images/ELS_9208.jpg",
    model: "Elena K. (London Mayfair Salon)",
    hotspots: [
      { x: 45, y: 40, productId: "six-02", title: "Blanche Tuxedo Blazer", price: 1250 },
      { x: 52, y: 80, productId: "six-05", title: "High-Waist Pleated Trouser", price: 680 }
    ]
  },
  {
    id: "look-03",
    lookNumber: "LOOK 03",
    title: "Midnight Violet Evening Slip",
    season: "Nightfall Atelier Capsule",
    description: "Sensual 30mm heavy silk satin moving effortlessly against dark purple runway backdrops.",
    image: "/images/IMG_9791.jpg",
    model: "Camille D. (Milan Presentation)",
    hotspots: [
      { x: 48, y: 50, productId: "six-03", title: "Violet Mist Silk Slip Dress", price: 890 }
    ]
  },
  {
    id: "look-04",
    lookNumber: "LOOK 04",
    title: "Sovereign Cashmere & Tailored Volumes",
    season: "Winter Haute Couture",
    description: "Double-faced cashmere draped in an oversized cocoon silhouette with hand-rolled borders.",
    image: "/images/IMG_0081.jpg",
    model: "Naomi R. (New York Private Salon)",
    hotspots: [
      { x: 50, y: 45, productId: "six-04", title: "Sovereign Double-Breasted Coat", price: 2450 }
    ]
  }
];

export const BOUTIQUES = [
  {
    city: "London",
    district: "Mayfair Flagship",
    address: "34 Old Bond Street, London W1S 4QR",
    hours: "Mon – Sat: 10:00 – 19:00 · Sun: By Private Appointment",
    phone: "+44 (0)20 7946 0892",
    email: "mayfair@sixfashion.com",
    image: "/images/IMG_0278.jpg"
  },
  {
    city: "Paris",
    district: "Rue Saint-Honoré Atelier",
    address: "18 Rue Saint-Honoré, 75001 Paris",
    hours: "Lun – Sam: 10:30 – 19:30 · Dimanche: Sur Rendez-vous",
    phone: "+33 1 42 68 55 00",
    email: "paris@sixfashion.com",
    image: "/images/IMG_9788.jpg"
  },
  {
    city: "New York",
    district: "Madison Avenue Salon",
    address: "712 Madison Avenue, New York, NY 10065",
    hours: "Mon – Sat: 10:00 – 18:30 · VIP Evening Sessions",
    phone: "+1 (212) 555-0196",
    email: "newyork@sixfashion.com",
    image: "/images/IMG_0403.jpg"
  },
  {
    city: "Milan",
    district: "Via Montenapoleone Suite",
    address: "Via Montenapoleone 9, 20121 Milano",
    hours: "Lun – Sab: 10:00 – 19:00",
    phone: "+39 02 8901 3400",
    email: "milano@sixfashion.com",
    image: "/images/IMG_0370.jpg"
  }
];

export const PRESS_QUOTES = [
  {
    quote: "Six Fashion redefines modern royalty with razor-sharp tailoring and rich purple velvet that commands every room.",
    publication: "VOGUE RUNWAY",
    year: "2026"
  },
  {
    quote: "The contrast of purest alabaster white and electric amethyst elevates Six into the upper echelon of contemporary fashion.",
    publication: "HARPER'S BAZAAR",
    year: "2026"
  },
  {
    quote: "A masterclass in modern silhouette. Six proves that architectural structure and sensual drapery can coexist flawlessly.",
    publication: "ELLE INTERNATIONAL",
    year: "2026"
  }
];
