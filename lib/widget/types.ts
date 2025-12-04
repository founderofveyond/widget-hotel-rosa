export interface Experience {
  id: string;
  slug: string;
  title: string;
  description: string; // Short, 2-3 sentences for card
  imageUrl: string;
  priceCents: number;
  currency: string;
  durationMinutes: number;
  category: 'adventure' | 'food' | 'culture' | 'wellness' | 'family';
}

export interface HotelTheme {
  hotelId: string;
  hotelName: string;
  colors: {
    primary: string; // Buttons, links
    primaryHover: string;
    secondary: string; // Accents
    background: string; // Widget background
    backgroundLight: string;
    text: string; // Main text
    textMuted: string; // Secondary text
    textHeading: string; // Headings (can match secondary)
    border: string;
  };
  fonts: {
    body: string; // e.g., "'Inter', sans-serif"
    heading: string; // e.g., "'Playfair Display', serif"
    bodyUrl?: string; // Google Fonts URL
    headingUrl?: string;
  };
  sizing: {
    cardRadius: number;
    buttonRadius: number;
    cardImageHeight: number;
  };
  content: {
    title: string; // e.g., "Local Experiences"
    description: string; // e.g., "Discover curated activities..."
    buttonText: string; // e.g., "View Details"
  };
}

export interface WidgetConfig {
  hotelId: string;
  baseUrl: string; // Full page base URL
  maxCards: number; // 3 or 6 typically
  layout: 'grid' | 'carousel';
}


