'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/hooks/useCart';
import { formatPrice, formatDate, formatTime } from '@/lib/utils/formatters';

interface OrderSummaryProps {
  hotelSlug: string;
}

export function OrderSummary({ hotelSlug }: OrderSummaryProps) {
  const { items, getTotal } = useCart();
  const total = getTotal();
  
  return (
    <div className="bg-[var(--color-background-alt)] p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">
        Order Summary
      </h2>
      <div className="space-y-4 mb-6">
        {items.map(item => (
          <div key={item.id} className="flex gap-3">
            <Link
              href={`/book/${hotelSlug}/${item.experienceSlug}`}
              className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden"
            >
              <Image
                src={item.experienceImage}
                alt={item.experienceTitle}
                fill
                className="object-cover"
                sizes="80px"
              />
            </Link>
            <div className="flex-1 min-w-0">
              <Link
                href={`/book/${hotelSlug}/${item.experienceSlug}`}
                className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] line-clamp-1"
              >
                {item.experienceTitle}
              </Link>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                {formatDate(item.date)} at {formatTime(item.time)}
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                {item.adults} {item.adults === 1 ? 'adult' : 'adults'}
                {item.children > 0 && `, ${item.children} ${item.children === 1 ? 'child' : 'children'}`}
              </p>
              <p className="text-sm font-semibold text-[var(--color-primary)] mt-1">
                {formatPrice(item.totalCents, 'EUR')}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--color-border)] pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-[var(--color-text)]">Total</span>
          <span className="text-2xl font-bold text-[var(--color-primary)]">
            {formatPrice(total, 'EUR')}
          </span>
        </div>
      </div>
    </div>
  );
}



