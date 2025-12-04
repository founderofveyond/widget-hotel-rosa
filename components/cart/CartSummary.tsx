'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/hooks/useCart';
import { formatPrice } from '@/lib/utils/formatters';
import { Button } from '@/components/ui/Button';

interface CartSummaryProps {
  hotelSlug: string;
}

export function CartSummary({ hotelSlug }: CartSummaryProps) {
  const { getTotal, items } = useCart();
  const total = getTotal();
  
  return (
    <div className="bg-[var(--color-background-alt)] p-6 rounded-lg sticky top-20">
      <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">
        Order Summary
      </h2>
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-[var(--color-text)]">
          <span>Items ({items.length})</span>
          <span>{formatPrice(total, 'EUR')}</span>
        </div>
        <div className="border-t border-[var(--color-border)] pt-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-[var(--color-text)]">Total</span>
            <span className="text-2xl font-bold text-[var(--color-primary)]">
              {formatPrice(total, 'EUR')}
            </span>
          </div>
        </div>
      </div>
      <Link href={`/experiences/${hotelSlug}/checkout`}>
        <Button className="w-full" size="lg" disabled={items.length === 0}>
          Proceed to Checkout
        </Button>
      </Link>
      <Link href={`/experiences/${hotelSlug}`}>
        <Button variant="ghost" className="w-full mt-3">
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}



