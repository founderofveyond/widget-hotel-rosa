import React from 'react';
import { Experience } from '@/lib/data/types';
import { ExperienceCard } from './ExperienceCard';

interface ExperienceGridProps {
  experiences: Experience[];
  hotelSlug: string;
}

export function ExperienceGrid({ experiences, hotelSlug }: ExperienceGridProps) {
  if (experiences.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-[var(--color-text-muted)]">
          No experiences found in this category.
        </p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {experiences.map(experience => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          hotelSlug={hotelSlug}
        />
      ))}
    </div>
  );
}



