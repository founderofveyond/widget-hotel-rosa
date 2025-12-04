import React from 'react';

interface CancellationPolicyProps {
  policy: string;
}

export function CancellationPolicy({ policy }: CancellationPolicyProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">
        Cancellation Policy
      </h3>
      <p className="text-[var(--color-text)] whitespace-pre-line">
        {policy}
      </p>
    </div>
  );
}



