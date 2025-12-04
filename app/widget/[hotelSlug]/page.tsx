'use client';

import React from 'react';
import { getExperiencesByHotelSlug } from '@/lib/data/experiences';
import { WidgetContainer } from '@/components/widget/WidgetContainer';
import { use } from 'react';

export default function WidgetPage({
  params,
}: {
  params: Promise<{ hotelSlug: string }>;
}) {
  const { hotelSlug } = use(params);
  const experiences = getExperiencesByHotelSlug(hotelSlug);
  
  if (experiences.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-[var(--color-text-muted)]">No experiences found.</p>
      </div>
    );
  }
  
  return (
    <WidgetContainer
      experiences={experiences}
      hotelSlug={hotelSlug}
    />
  );
}

