import type { HotelTheme } from './types';

const themes: Record<string, HotelTheme> = {
  // Demo hotel - clean modern style
  demo: {
    hotelId: 'demo',
    hotelName: 'Hotel Rosa',
    colors: {
      primary: '#2563eb',
      primaryHover: '#1d4ed8',
      secondary: '#1e40af',
      background: '#ffffff',
      backgroundLight: '#f8fafc',
      text: '#1e293b',
      textMuted: '#64748b',
      textHeading: '#1e40af',
      border: '#e2e8f0',
    },
    fonts: {
      body: "'Inter', sans-serif",
      heading: "'Inter', sans-serif",
      bodyUrl:
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    },
    sizing: {
      cardRadius: 12,
      buttonRadius: 8,
      cardImageHeight: 200,
    },
    content: {
      title: 'Local Experiences',
      description:
        'Discover the best tours and activities in our area. Book directly and create unforgettable memories.',
      buttonText: 'View Details',
    },
  },

  // Luxury hotel - elegant serif style
  'grand-palace': {
    hotelId: 'grand-palace',
    hotelName: 'Grand Palace Hotel',
    colors: {
      primary: '#92702e',
      primaryHover: '#7d5f27',
      secondary: '#92702e',
      background: '#fdfbf7',
      backgroundLight: '#f5f0e6',
      text: '#3d3d3d',
      textMuted: '#6b6b6b',
      textHeading: '#92702e',
      border: '#e8e0d0',
    },
    fonts: {
      body: "'Lato', sans-serif",
      heading: "'Playfair Display', serif",
      bodyUrl:
        'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@500;700&display=swap',
    },
    sizing: {
      cardRadius: 4,
      buttonRadius: 2,
      cardImageHeight: 220,
    },
    content: {
      title: 'Curated Experiences',
      description:
        'Handpicked activities selected by our concierge team for discerning travelers.',
      buttonText: 'Discover More',
    },
  },
};

export function getTheme(hotelId: string): HotelTheme {
  return themes[hotelId] ?? themes.demo;
}


