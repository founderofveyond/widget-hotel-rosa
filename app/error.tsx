'use client';

import React from 'react';

export default function Error({ reset }: { reset: () => void }) {
  // Optionally log the error to an error reporting service
  // console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
      <div className="max-w-md text-center px-4">
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-2">
          Something went wrong
        </h1>
        <p className="text-[var(--color-text-muted)] mb-6">
          An unexpected error occurred while loading this page. You can try
          again, or go back and continue browsing experiences.
        </p>
        <button
          type="button"
          onClick={reset}
          className="px-4 py-2 rounded-md bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}


