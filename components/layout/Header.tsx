'use client';

import React from 'react';
import Link from 'next/link';
import { CartIcon } from './CartIcon';
import { getHotelBySlug } from '@/lib/data/hotels';

export function Header({ hotelSlug }: { hotelSlug: string }) {
  const hotel = getHotelBySlug(hotelSlug);
  
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-background)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={`/experiences/${hotelSlug}`}
            className="flex items-center space-x-3"
          >
            {hotel?.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={hotel.logo}
                alt={hotel.name}
                className="h-8 w-auto"
              />
            ) : (
              <span className="text-xl font-bold text-[var(--color-accent)]">
                {hotel?.name || 'Experiences'}
              </span>
            )}
          </Link>
          <CartIcon hotelSlug={hotelSlug} />
        </div>
      </div>
    </header>
  );
}

