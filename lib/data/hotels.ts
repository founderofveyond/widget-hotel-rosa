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
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return hotels.find(hotel => hotel.slug === slug);
}



