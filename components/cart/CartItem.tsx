'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartItem as CartItemType } from '@/lib/data/types';
import { formatPrice, formatDate, formatTime } from '@/lib/utils/formatters';
import { useCart } from '@/lib/hooks/useCart';
import { Button } from '@/components/ui/Button';

interface CartItemProps {
  item: CartItemType;
  hotelSlug: string;
}

export function CartItem({ item, hotelSlug }: CartItemProps) {
  const { removeItem } = useCart();
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 border-b border-[var(--color-border)] last:border-0">
      <Link
        href={`/experiences/${hotelSlug}/${item.experienceSlug}`}
        className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden"
      >
        <Image
          src={item.experienceImage}
          alt={item.experienceTitle}
          fill
          className="object-cover"
          sizes="128px"
        />
      </Link>
      
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <Link
            href={`/experiences/${hotelSlug}/${item.experienceSlug}`}
            className="text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
          >
            {item.experienceTitle}
          </Link>
          <div className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
            <p>{formatDate(item.date)} at {formatTime(item.time)}</p>
            <p>
              {item.adults} {item.adults === 1 ? 'adult' : 'adults'}
              {item.children > 0 && `, ${item.children} ${item.children === 1 ? 'child' : 'children'}`}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <div className="text-right">
            <p className="text-lg font-bold text-[var(--color-primary)]">
              {formatPrice(item.totalCents, 'EUR')}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeItem(item.id)}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}



