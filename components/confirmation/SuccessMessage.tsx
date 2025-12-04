import React from 'react';

export function SuccessMessage() {
  return (
    <div className="text-center py-8">
      <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
        <svg
          className="w-12 h-12 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">
        Booking Confirmed!
      </h1>
      <p className="text-lg text-[var(--color-text-muted)]">
        Thank you for your booking. We&apos;ve sent a confirmation email with all the details.
      </p>
    </div>
  );
}

