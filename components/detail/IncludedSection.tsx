import React from 'react';

interface IncludedSectionProps {
  included: string[];
  notIncluded: string[];
}

export function IncludedSection({ included, notIncluded }: IncludedSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
          What&apos;s Included
        </h3>
        <ul className="space-y-2">
          {included.map((item, index) => (
            <li key={index} className="flex items-start text-[var(--color-text)]">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
          Not Included
        </h3>
        <ul className="space-y-2">
          {notIncluded.map((item, index) => (
            <li key={index} className="flex items-start text-[var(--color-text-muted)]">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

