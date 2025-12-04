import type { Experience } from './types';

export const DEMO_EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    slug: 'scenic-island-tour',
    title: 'Scenic Island Tour',
    description:
      'Discover hidden coves, pristine beaches, and breathtaking viewpoints on this 2-hour guided exploration.',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    priceCents: 6000,
    currency: 'EUR',
    durationMinutes: 120,
    category: 'adventure',
  },
  {
    id: 'exp-2',
    slug: 'wine-tasting-experience',
    title: 'Wine Tasting Experience',
    description:
      'Savor local wines at a beautiful vineyard. Includes 6 tastings with cheese pairing and cellar tour.',
    imageUrl:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop',
    priceCents: 4500,
    currency: 'EUR',
    durationMinutes: 90,
    category: 'food',
  },
  {
    id: 'exp-3',
    slug: 'guided-nature-hike',
    title: 'Guided Nature Hike',
    description:
      'Explore pristine trails with an expert naturalist. Spot local wildlife and discover native flora.',
    imageUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    priceCents: 5500,
    currency: 'EUR',
    durationMinutes: 180,
    category: 'adventure',
  },
  {
    id: 'exp-4',
    slug: 'traditional-cooking-class',
    title: 'Traditional Cooking Class',
    description:
      'Learn authentic local recipes from a professional chef. Prepare and enjoy a 3-course meal.',
    imageUrl:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
    priceCents: 8500,
    currency: 'EUR',
    durationMinutes: 150,
    category: 'food',
  },
  {
    id: 'exp-5',
    slug: 'coastal-boat-tour',
    title: 'Coastal Boat Tour',
    description:
      'Sail along stunning coastline, visit sea caves, and swim in crystal-clear waters.',
    imageUrl:
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop',
    priceCents: 7500,
    currency: 'EUR',
    durationMinutes: 180,
    category: 'adventure',
  },
  {
    id: 'exp-6',
    slug: 'luxury-spa-day',
    title: 'Luxury Spa Day',
    description:
      'Full day of relaxation with massage, facial, and access to premium spa facilities.',
    imageUrl:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
    priceCents: 12000,
    currency: 'EUR',
    durationMinutes: 240,
    category: 'wellness',
  },
];

export function getExperiencesByHotel(hotelId: string): Experience[] {
  // For MVP, all hotels show same demo experiences.
  // Later: filter by hotel partnership.
  // hotelId is kept for future filtering.
  void hotelId;
  return DEMO_EXPERIENCES;
}


