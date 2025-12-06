import { Hotel } from './types';

export const hotels: Hotel[] = [
  {
    slug: 'demo',
    name: 'Hotel Rosa',
    logo: '/images/hotels/demo-logo.png',
    theme: {
      colors: {
        primary: '#2563eb',
        primaryHover: '#1d4ed8',
        accent: '#1e40af',
        background: '#ffffff',
        backgroundAlt: '#f8fafc',
        text: '#1e293b',
        textMuted: '#64748b',
        border: '#e2e8f0',
      },
      fonts: {
        body: 'Inter, system-ui, sans-serif',
        heading: 'Inter, system-ui, sans-serif',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800&display=swap',
      },
      borderRadius: {
        card: 12,
        button: 8,
        input: 8,
      },
    },
    content: {
      catalogTitle: 'Discover Local Experiences',
      catalogDescription: 'Explore the best tours, activities, and experiences in the area. Book directly and create unforgettable memories.',
    },
  },
  {
    slug: 'hotel-rosa',
    name: 'Hotel Rosa',
    logo: '/images/hotels/hotel-rosa-logo.png',
    theme: {
      colors: {
        primary: '#92702e',
        primaryHover: '#7d5f27',
        accent: '#92702e',
        background: '#fdfbf7',
        backgroundAlt: '#f5f0e6',
        text: '#3d3d3d',
        textMuted: '#6b6b6b',
        border: '#e8e0d0',
      },
      fonts: {
        body: 'Lato, sans-serif',
        heading: 'Playfair Display, serif',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap',
      },
      borderRadius: {
        card: 4,
        button: 2,
        input: 2,
      },
    },
    content: {
      catalogTitle: 'Curated Experiences',
      catalogDescription: 'Handpicked activities selected by our concierge team for discerning travelers.',
    },
  },
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return hotels.find(hotel => hotel.slug === slug);
}



