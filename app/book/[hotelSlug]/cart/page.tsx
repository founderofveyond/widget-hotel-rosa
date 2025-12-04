'use client';

import React from 'react';
import { useCart } from '@/lib/hooks/useCart';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { EmptyCart } from '@/components/cart/EmptyCart';

export default function CartPage({
  params,
}: {
  params: { hotelSlug: string };
}) {
  const { hotelSlug } = params;
  const { items } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EmptyCart hotelSlug={hotelSlug} />
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8">
        Shopping Cart
      </h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-[var(--color-background)] rounded-lg border border-[var(--color-border)]">
            {items.map(item => (
              <CartItem
                key={item.id}
                item={item}
                hotelSlug={hotelSlug}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <CartSummary hotelSlug={hotelSlug} />
        </div>
      </div>
    </div>
  );
}

