import React from 'react';
import { Supplier } from '@/lib/data/types';

interface SupplierInfoProps {
  supplier: Supplier;
}

export function SupplierInfo({ supplier }: SupplierInfoProps) {
  return (
    <div className="bg-[var(--color-background-alt)] p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
        Experience Provider
      </h3>
      <div className="flex items-center space-x-4">
        {supplier.logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={supplier.logo}
            alt={supplier.name}
            className="w-16 h-16 object-contain"
          />
        )}
        <div>
          <p className="font-semibold text-[var(--color-text)]">{supplier.name}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.round(supplier.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-[var(--color-text-muted)]">
              {supplier.rating.toFixed(1)} ({supplier.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

