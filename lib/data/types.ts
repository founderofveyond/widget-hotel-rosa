export type Hotel = {
  slug: string;
  name: string;
  logo?: string;
  theme: HotelTheme;
  content: {
    catalogTitle: string;
    catalogDescription: string;
  };
};

export type HotelTheme = {
  colors: {
    primary: string;        // Buttons, links
    primaryHover: string;
    accent: string;         // Headings, highlights
    background: string;
    backgroundAlt: string;
    text: string;
    textMuted: string;
    border: string;
  };
  fonts: {
    body: string;
    heading: string;
    bodyUrl?: string;
    headingUrl?: string;
  };
  borderRadius: {
    card: number;
    button: number;
    input: number;
  };
};

export type Experience = {
  id: string;
  slug: string;
  hotelSlug: string;
  title: string;
  shortDescription: string;    // For cards (2 lines max)
  fullDescription: string;     // For detail page
  images: string[];            // First is main, rest are gallery
  category: 'adventure' | 'food' | 'culture' | 'family' | 'wellness';
  priceCents: number;
  currency: string;
  durationMinutes: number;
  maxParticipants: number;
  included: string[];
  notIncluded: string[];
  meetingPoint: {
    address: string;
    instructions: string;
  };
  cancellationPolicy: string;
  reviews: Review[];
  supplier: Supplier;
  availability: {
    dates: string[];           // Available dates (YYYY-MM-DD)
    timeSlots: string[];       // Available times (HH:MM)
  };
};

export type Review = {
  id: string;
  rating: number;             // 1-5
  text: string;
  author: string;
  date: string;
};

export type Supplier = {
  name: string;
  logo?: string;
  rating: number;
  reviewCount: number;
};

export type CartItem = {
  id: string;                  // Unique cart item ID
  experienceId: string;
  experienceSlug: string;
  experienceTitle: string;
  experienceImage: string;
  date: string;                // YYYY-MM-DD
  time: string;                // HH:MM
  adults: number;
  children: number;
  pricePerAdult: number;
  pricePerChild: number;
  totalCents: number;
};

export type Guest = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type Booking = {
  id: string;
  hotelSlug: string;
  items: CartItem[];
  guest: Guest;
  totalCents: number;
  createdAt: string;
};



