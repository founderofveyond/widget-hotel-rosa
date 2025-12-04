import React from 'react';

interface MeetingPointProps {
  address: string;
  instructions: string;
}

export function MeetingPoint({ address, instructions }: MeetingPointProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">
        Meeting Point
      </h3>
      <p className="text-[var(--color-text)]">{address}</p>
      <p className="text-sm text-[var(--color-text-muted)] whitespace-pre-line">
        {instructions}
      </p>
    </div>
  );
}



