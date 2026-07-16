export interface Room {
  id: string;
  name: string;
  description: string;
  size: string;
  guests: string;
  price: number;
  image: string;
  secondaryImages: string[];
  amenities: string[];
  rating: number;
  featured: boolean;
}

export interface AmenityItem {
  name: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  origin: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'rooms' | 'gardens' | 'dining' | 'exterior';
}

export interface BookingInquiry {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  comments?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
}
