export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  priceLabel: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interiors' | 'Hair & Draping' | 'Skincare & Nails' | 'Bridal';
  caption: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  serviceTag: string;
  sampleLabel: string;
  quote: string;
}

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_salon_sanctuary_1795163496602.jpg',
  alt: 'Sunlit luxury salon interior at Lumière Beauty Studio featuring arched brass mirrors, travertine counters, and nude beige styling chairs',
};

export const ABOUT_IMAGE = {
  src: '/src/assets/images/about_salon_lounge_1795163498124.jpg',
  alt: 'Serene cream and beige consultation lounge with curved boucle seating and travertine coffee table',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'hair-styling',
    title: 'Hair Styling',
    category: 'Hair Artistry',
    duration: '45–60 mins',
    priceLabel: '₹499 onwards',
    description:
      'Precision cuts, signature blowouts, soft waves, and occasion-ready updos tailored to your facial structure and natural texture.',
    image: '/src/assets/images/service_hair_styling_1795163496427.jpg',
    imageAlt: 'Soft glossy waves styled in a sunlit luxury salon chair',
  },
  {
    id: 'hair-spa',
    title: 'Hair Spa',
    category: 'Scalp & Renewal',
    duration: '60 mins',
    priceLabel: '₹999 onwards',
    description:
      'Deeply restorative botanical oil infusions, warm steam conditioning, and calming scalp therapy to restore strength and lustre.',
    image: '/src/assets/images/service_hair_spa_1795163496515.jpg',
    imageAlt: 'Botanical hair oil amber bottle, ceramic bowls, and warm cream towels on travertine stone',
  },
  {
    id: 'facial-treatment',
    title: 'Facial Treatment',
    category: 'Skin Therapy',
    duration: '60–75 mins',
    priceLabel: '₹799 onwards',
    description:
      'Gentle lymphatic massage, rosewater hydration masks, and barrier-calming botanical serums designed for luminous, balanced skin.',
    image: '/src/assets/images/service_facial_treatment_1795163496394.jpg',
    imageAlt: 'Skincare specialist performing a calming facial massage in a linen-draped treatment room',
  },
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup',
    category: 'Bridal Atelier',
    duration: '2.5–3 hrs',
    priceLabel: '₹4,999 onwards',
    description:
      'Timeless, skin-first bridal artistry crafted to photograph effortlessly from morning ceremonies through evening receptions.',
    image: '/src/assets/images/service_bridal_makeup_1795163496048.jpg',
    imageAlt: 'Luminous Indian bridal makeup with soft dusty rose tones and fresh jasmine floral bun',
  },
  {
    id: 'manicure-pedicure',
    title: 'Manicure & Pedicure',
    category: 'Hand & Foot Ritual',
    duration: '60 mins',
    priceLabel: '₹699 onwards',
    description:
      'Warm rosewater soak, detailed cuticle care, mineral exfoliation, and breathable sheer or dusty rose polish finishes.',
    image: '/src/assets/images/service_manicure_pedicure_1795163496200.jpg',
    imageAlt: 'Minimalist manicure ritual with rose petal bowl, warm linen towel, and sheer nude nails',
  },
  {
    id: 'saree-draping',
    title: 'Saree Draping',
    category: 'Occasion Styling',
    duration: '30–45 mins',
    priceLabel: '₹499 onwards',
    description:
      'Crisp, weightless box-pleating and secure traditional or contemporary draping for silk Kanjeevarams, organzas, and heirloom weaves.',
    image: '/src/assets/images/service_saree_draping_1795163496460.jpg',
    imageAlt: 'Finely pleated ivory and dusty rose silk saree with muted gold zari border',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-salon-sanctuary',
    title: 'Main Styling Atelier',
    category: 'Interiors',
    caption: 'Sunlit travertine counters and arched brass mirrors designed for unhurried sessions.',
    image: '/src/assets/images/hero_salon_sanctuary_1795163496602.jpg',
    imageAlt: 'Main styling atelier with arched mirrors and cream drapes',
    featured: true,
  },
  {
    id: 'gal-bridal-portrait',
    title: 'Soft-Glam Bridal Finish',
    category: 'Bridal',
    caption: 'Skin-luminous bridal artistry paired with classic fresh jasmine hair adornment.',
    image: '/src/assets/images/service_bridal_makeup_1795163496048.jpg',
    imageAlt: 'Bridal portrait showcasing soft dusty rose makeup and jasmine bun',
  },
  {
    id: 'gal-reception-lounge',
    title: 'Consultation & Reception Lounge',
    category: 'Interiors',
    caption: 'Quiet boucle seating and warm plaster tones where every appointment begins with herbal tea.',
    image: '/src/assets/images/about_salon_lounge_1795163498124.jpg',
    imageAlt: 'Minimalist cream and beige salon reception lounge',
  },
  {
    id: 'gal-hair-waves',
    title: 'Signature Soft Waves',
    category: 'Hair & Draping',
    caption: 'Effortless movement and natural shine achieved with heat-protected silk brushing.',
    image: '/src/assets/images/service_hair_styling_1795163496427.jpg',
    imageAlt: 'Glossy sculpted hair waves in warm natural daylight',
  },
  {
    id: 'gal-facial-suite',
    title: 'Private Facial Treatment Suite',
    category: 'Skincare & Nails',
    caption: 'Acoustic calm, organic linens, and tailored botanical skincare rituals.',
    image: '/src/assets/images/service_facial_treatment_1795163496394.jpg',
    imageAlt: 'Private skincare suite with warm ambient lighting',
  },
  {
    id: 'gal-saree-pleats',
    title: 'Heirloom Silk Draping',
    category: 'Hair & Draping',
    caption: 'Precision pallu pleating and comfortable pinning for all-day celebration poise.',
    image: '/src/assets/images/service_saree_draping_1795163496460.jpg',
    imageAlt: 'Detailed ivory and dusty rose silk saree pleating',
  },
  {
    id: 'gal-botanical-spa',
    title: 'Botanical Scalp Apothecary',
    category: 'Hair & Draping',
    caption: 'Cold-pressed oils and steamed cotton towels prepared fresh for every hair spa session.',
    image: '/src/assets/images/service_hair_spa_1795163496515.jpg',
    imageAlt: 'Botanical hair oil and ceramic spa bowls on travertine stone',
  },
  {
    id: 'gal-nail-ritual',
    title: 'Rosewater Nail Sanctuary',
    category: 'Skincare & Nails',
    caption: 'Gentle soaking, cuticle refinement, and natural sheer polish care.',
    image: '/src/assets/images/service_manicure_pedicure_1795163496200.jpg',
    imageAlt: 'Manicure station with rose petals in ceramic bowl and folded linen towel',
  },
];

export const PILLARS: PillarItem[] = [
  {
    number: '01.',
    title: 'Professional Care',
    description:
      'Every session is guided by trained stylists, aestheticians, and bridal artists dedicated to refined technique and attentive hospitality.',
  },
  {
    number: '02.',
    title: 'Relaxing Atmosphere',
    description:
      'Warm cream plaster interiors, soft acoustics, and unhurried appointment pacing transform routine grooming into quiet restoration.',
  },
  {
    number: '03.',
    title: 'Personalised Beauty Services',
    description:
      'We begin each visit with an unhurried consultation to tailor formulations, tones, and silhouettes to your hair, skin, and occasion.',
  },
  {
    number: '04.',
    title: 'Hygiene and Comfort',
    description:
      'Hospital-grade tool sterilisation, single-use spa linens, and fresh sanitised suites before every client arrival.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'demo-1',
    name: 'Ananya Deshmukh',
    serviceTag: 'Bridal Makeup & Saree Draping',
    sampleLabel: 'Illustrative Demo Testimonial · Sample Profile',
    quote:
      '“I wanted bridal makeup that still looked like my own skin in daylight photographs. The team listened closely during my trial, draped my Kanjeevaram effortlessly, and kept the morning completely calm.”',
  },
  {
    id: 'demo-2',
    name: 'Meera Krishnan',
    serviceTag: 'Botanical Hair Spa & Styling',
    sampleLabel: 'Illustrative Demo Testimonial · Sample Profile',
    quote:
      '“Stepping into the studio felt like pausing a busy week. The warm oil scalp therapy left my hair noticeably softer without feeling heavy, and the blowout held naturally for days.”',
  },
  {
    id: 'demo-3',
    name: 'Rhea Malhotra',
    serviceTag: 'Facial Treatment & Manicure',
    sampleLabel: 'Illustrative Demo Testimonial · Sample Profile',
    quote:
      '“Every detail—from the rosewater soak to the gentle lymphatic facial—felt thoughtful and spotless. There was no rush at any point, just calm, restorative care.”',
  },
];

export const FICTIONAL_CONTACT = {
  studioName: 'LUMIÈRE BEAUTY STUDIO',
  addressLine1: 'Suite 204, Rosemont Arcade (Fictional Demo Address)',
  addressLine2: '14 Maple Avenue, Indiranagar · Demo District 560000',
  phoneDisplay: '+91 00000 00000 (Placeholder)',
  whatsappNumber: '910000000000',
  whatsappDisplay: '+91 00000 00000',
  email: 'hello@lumierebeautystudio.example',
  hours: 'Tuesday – Sunday · 10:00 AM – 8:00 PM',
  closedDay: 'Closed on Mondays (Illustrative Schedule)',
};
