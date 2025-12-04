'use client';

import React, { useEffect } from 'react';
import { Experience } from '@/lib/data/types';
import { WidgetCard } from './WidgetCard';
import { Button } from '@/components/ui/Button';

interface WidgetContainerProps {
  experiences: Experience[];
  hotelSlug: string;
}

export function WidgetContainer({ experiences, hotelSlug }: WidgetContainerProps) {
  // Auto-resize iframe via postMessage
  useEffect(() => {
    if (typeof window !== 'undefined' && window.parent !== window) {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ type: 'resize', height }, '*');
    }
  }, [experiences]);
  
  const handleViewAll = () => {
    if (typeof window !== 'undefined') {
      const fullPageUrl = `${window.location.origin}/experiences/${hotelSlug}`;
      window.open(fullPageUrl, '_blank');
    }
  };
  
  return (
    <div className="p-4 bg-[var(--color-background)]">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-2">
          Local Experiences
        </h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Discover amazing tours and activities
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {experiences.slice(0, 3).map(experience => (
          <WidgetCard
            key={experience.id}
            experience={experience}
            hotelSlug={hotelSlug}
          />
        ))}
      </div>
      
      <div className="text-center">
        <Button
          onClick={handleViewAll}
          className="w-full md:w-auto"
        >
          View All Experiences
        </Button>
      </div>
    </div>
  );
}

