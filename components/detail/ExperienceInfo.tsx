import React from 'react';
import { Experience } from '@/lib/data/types';
import { formatPrice, formatDuration } from '@/lib/utils/formatters';

interface ExperienceInfoProps {
  experience: Experience;
}

export function ExperienceInfo({ experience }: ExperienceInfoProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 text-xs font-medium bg-[var(--color-background-alt)] text-[var(--color-text-muted)] rounded-full capitalize">
          {experience.category}
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
        {experience.title}
      </h1>

      <div className="text-sm text-[var(--color-text-muted)]">
        {formatDuration(experience.durationMinutes)} · Up to{' '}
        {experience.maxParticipants} participants
      </div>

      <div className="text-2xl font-bold text-[var(--color-primary)]">
        {formatPrice(experience.priceCents, experience.currency)}{' '}
        <span className="text-base font-normal text-[var(--color-text-muted)]">
          per person
        </span>
      </div>
    </div>
  );
}

