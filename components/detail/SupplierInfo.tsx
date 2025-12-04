import React from 'react';
import { Supplier } from '@/lib/data/types';

interface SupplierInfoProps {
  supplier: Supplier;
}

export function SupplierInfo({ supplier }: SupplierInfoProps) {
  return (
    <div className="mt-6">
      <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)] mb-1">
        Provided by
      </p>
      <p className="text-sm text-[var(--color-text)]">{supplier.name}</p>
    </div>
  );
}

