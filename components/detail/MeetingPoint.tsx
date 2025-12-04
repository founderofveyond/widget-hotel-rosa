import React from 'react';

interface MeetingPointProps {
  address: string;
  instructions: string;
}

export function MeetingPoint({ address, instructions }: MeetingPointProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[var(--color-text)] flex items-center">
        <svg className="w-6 h-6 mr-2 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Meeting Point
      </h3>
      <div className="bg-[var(--color-background-alt)] p-4 rounded-lg">
        <p className="font-medium text-[var(--color-text)] mb-2">{address}</p>
        <p className="text-sm text-[var(--color-text-muted)] whitespace-pre-line">
          {instructions}
        </p>
      </div>
      <div className="w-full h-64 bg-[var(--color-background-alt)] rounded-lg flex items-center justify-center border border-[var(--color-border)]">
        <p className="text-[var(--color-text-muted)]">Map placeholder</p>
      </div>
    </div>
  );
}



