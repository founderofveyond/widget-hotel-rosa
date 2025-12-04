import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartItem } from '@/lib/data/types';
import { formatPrice, formatDate, formatTime } from '@/lib/utils/formatters';

interface BookedExperiencesProps {
  items: CartItem[];
  hotelSlug: string;
}

export function BookedExperiences({ items, hotelSlug }: BookedExperiencesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[var(--color-text)]">
        Your Experiences
      </h2>
      <div className="space-y-4">
        {items.map(item => (
          <div
            key={item.id}
            className="border border-[var(--color-border)] rounded-lg p-4"
          >
            <div className="flex gap-4">
              <Link
                href={`/experiences/${hotelSlug}/${item.experienceSlug}`}
                className="relative w-24 h-24 flex-shrink-0 rounded overflow-hidden"
              >
                <Image
                  src={item.experienceImage}
                  alt={item.experienceTitle}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </Link>
              <div className="flex-1">
                <Link
                  href={`/experiences/${hotelSlug}/${item.experienceSlug}`}
                  className="text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)]"
                >
                  {item.experienceTitle}
                </Link>
                <div className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(item.date)} at {formatTime(item.time)}
                  </p>
                  <p>
                    {item.adults} {item.adults === 1 ? 'adult' : 'adults'}
                    {item.children > 0 && `, ${item.children} ${item.children === 1 ? 'child' : 'children'}`}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-bold text-[var(--color-primary)]">
                    {formatPrice(item.totalCents, 'EUR')}
                  </p>
                  <div className="flex gap-2">
                    <button className="text-sm text-[var(--color-primary)] hover:underline">
                      Add to Calendar
                    </button>
                    <span className="text-[var(--color-border)]">|</span>
                    <button className="text-sm text-[var(--color-primary)] hover:underline">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



