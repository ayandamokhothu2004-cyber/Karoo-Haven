import { Room, AmenityItem, Testimonial, GalleryItem, FeatureCard } from './types';

export const ROOMS_DATA: Room[] = [
  {
    id: 'karoo-oasis',
    name: 'The Karoo Oasis Suite',
    description: 'Our flagship suite offering an expansive sanctuary of comfort and elegance. Unwind by the wood-burning fireplace, relax in the standalone slipper bath, or step onto your private veranda to watch the classic Karoo sunset with a glass of local wine.',
    size: '55 m²',
    guests: '2 Adults',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['King Size Bed', 'En-Suite Bathroom', 'Stone Fireplace', 'Private Veranda', 'Air Conditioning', 'Fiber WiFi', 'Nespresso Station', 'Smart TV'],
    rating: 4.9,
    featured: true
  },
  {
    id: 'lavender-cottage',
    name: 'The Lavender Family Cottage',
    description: 'Perfect for families or groups seeking privacy and self-catering flexibility. This beautifully restored cottage features high timber-framed ceilings, a fully equipped modern kitchen, an open-plan lounge, and a private stone boma and braai (BBQ) area.',
    size: '75 m²',
    guests: 'Up to 4 Guests',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['2x Queen Beds', 'Full Kitchen', 'Private Braai Area', 'Dining Lounge', 'Air Conditioning', 'Fiber WiFi', 'Secure Parking', 'Smart TV'],
    rating: 4.8,
    featured: true
  },
  {
    id: 'colesberg-classic',
    name: 'The Colesberg Classic Room',
    description: 'Imbued with historic charm, this double room blends original 19th-century Oregon pine floors and sash windows with refined modern elements. Features a plush pillow-top queen bed and immediate access to our main sun-drenched rose gardens.',
    size: '35 m²',
    guests: '2 Guests',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Queen Size Bed', 'Rain Shower', 'Garden Views', 'Sash Windows', 'Air Conditioning', 'Fiber WiFi', 'Coffee Tray', 'Smart TV'],
    rating: 4.7,
    featured: true
  }
];

export const AMENITIES_DATA: AmenityItem[] = [
  {
    name: 'Ultra High-Speed WiFi',
    description: 'Complimentary high-speed fiber internet throughout the entire estate, including all rooms, cottages, and garden areas.',
    iconName: 'Wifi'
  },
  {
    name: 'Secured Guarded Parking',
    description: 'High-security off-street parking behind automated electronic gates, protected by electric fencing and 24/7 camera monitoring.',
    iconName: 'ShieldCheck'
  },
  {
    name: 'Climate Control AC',
    description: 'Whisper-quiet climate control with cooling and heating options to keep you comfortable through both frosty Karoo winters and hot summers.',
    iconName: 'Wind'
  },
  {
    name: '4K Smart TVs & Streaming',
    description: 'Flat-screen UHD Smart TVs equipped with Netflix, Disney+, and high-definition DSTV channels for movie nights and news.',
    iconName: 'Tv'
  },
  {
    name: 'Gourmet Karoo Breakfast',
    description: 'Indulge in our famous freshly baked artisan breads, local farm eggs, sizzling farm sausage, and locally roasted artisanal coffee.',
    iconName: 'Coffee'
  },
  {
    name: 'Sparkling Swimming Pool',
    description: 'A beautiful blue solar-heated swimming pool nestled in the heart of our manicured rose gardens with luxury sun loungers.',
    iconName: 'Waves'
  },
  {
    name: 'Traditional Braai Area',
    description: 'Classic stone-walled South African braai (BBQ) boma with high-quality timber tables, perfect for grilling under the Milky Way.',
    iconName: 'Flame'
  },
  {
    name: 'Same-Day Valet Laundry',
    description: 'Professional laundry, drying, and crisp press service on request, allowing you to refresh after a long South African road trip.',
    iconName: 'Shirt'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Pieter & Elize van der Merwe',
    rating: 5,
    text: 'What an absolute gem on the N1! We always drive from Cape Town to Pretoria and have tried many places, but Karoo Haven is by far the most luxurious and comfortable. The secure parking gave us complete peace of mind with our loaded car, and the bedding felt like a 5-star hotel.',
    date: 'June 2026',
    origin: 'Durbanville, Cape Town'
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    rating: 5,
    text: 'I was blown away by the attention to detail. From the freshly ground coffee in the room to the incredibly friendly check-in after a exhausting 8-hour drive. The gardens are an oasis of green in the dry Karoo, and the farm-style breakfast was delicious! Will definitely be back.',
    date: 'May 2026',
    origin: 'Sandton, Johannesburg'
  },
  {
    id: 't3',
    name: 'David and Chloe Harrison',
    rating: 5,
    text: 'The Lavender Cottage was fantastic for our family of four. The children loved swimming in the rose garden pool, and we cooked a traditional lamb braai in our private stone boma. Sleeping under the Colesberg stars in complete silence was unforgettable. Outstanding service!',
    date: 'April 2026',
    origin: 'Bristol, United Kingdom'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    caption: 'The majestic main building of Karoo Haven showcasing architectural heritage.',
    category: 'exterior'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    caption: 'Luxury details inside the master Karoo Oasis Suite with gold accents.',
    category: 'rooms'
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sparkling swimming pool nestled perfectly amidst the manicured country gardens.',
    category: 'gardens'
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    caption: 'Freshly prepared farm breakfast with handcrafted preserves and local eggs.',
    category: 'dining'
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    caption: 'Classic warm timber and elegant vintage touches in our guest bedrooms.',
    category: 'rooms'
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sunkissed lavender walkways surrounding our private guest cottages.',
    category: 'gardens'
  },
  {
    id: 'g7',
    url: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80',
    caption: 'Morning tea and freshly baked South African rusks served on the main terrace.',
    category: 'dining'
  },
  {
    id: 'g8',
    url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    caption: 'Splendid evening illumination outlining our secure, tranquil estate grounds.',
    category: 'exterior'
  }
];

export const WHY_CHOOSE_US_DATA: FeatureCard[] = [
  {
    title: 'N1 Midpoint Ideal Location',
    description: 'Perfectly positioned in historic Colesberg, exactly halfway between Johannesburg/Pretoria and Cape Town, making it the premier stress-free overnight stopovers.',
    iconName: 'MapPin'
  },
  {
    title: 'Secure & Peaceful Haven',
    description: 'We prioritize your safety with state-of-the-art secure off-street undercover parking, high security fences, motorized gates, and on-property security presence.',
    iconName: 'ShieldCheck'
  },
  {
    title: '4-Star Premium Comforts',
    description: 'Indulge in 4-star hospitality featuring extra-depth posturepedic mattresses, imported crisp Egyptian cotton linens, down pillows, and high-pressure rain showers.',
    iconName: 'Award'
  },
  {
    title: 'True Karoo Hospitality',
    description: 'Experience genuine warmth from our local South African hosts. From personal recommendations to custom dietary breakfast adjustments, you are family.',
    iconName: 'Heart'
  }
];
