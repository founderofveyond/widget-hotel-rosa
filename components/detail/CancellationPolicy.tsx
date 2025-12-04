import React from 'react';

interface CancellationPolicyProps {
  policy: string;
}

export function CancellationPolicy({ policy }: CancellationPolicyProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-[var(--color-text)] flex items-center">
        <svg className="w-6 h-6 mr-2 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Cancellation Policy
      </h3>
      <p className="text-[var(--color-text)] whitespace-pre-line">
        {policy}
      </p>
    </div>
  );
}



