import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--color-text)] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
          Page Not Found
        </h2>
        <p className="text-[var(--color-text-muted)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}

