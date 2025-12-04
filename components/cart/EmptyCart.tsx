import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface EmptyCartProps {
  hotelSlug: string;
}

export function EmptyCart({ hotelSlug }: EmptyCartProps) {
  return (
    <div className="text-center py-12">
      <svg
        className="w-24 h-24 mx-auto text-[var(--color-text-muted)] mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-2">
        Your cart is empty
      </h2>
      <p className="text-[var(--color-text-muted)] mb-6">
        Start exploring our experiences and add them to your cart.
      </p>
      <Link href={`/experiences/${hotelSlug}`}>
        <Button>Browse Experiences</Button>
      </Link>
    </div>
  );
}



