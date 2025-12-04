'use client';

import React, { useEffect } from 'react';
import type { Experience, HotelTheme } from '@/lib/widget/types';
import ExperienceCard from './ExperienceCard';

interface Props {
  hotelId: string;
  theme: HotelTheme;
  experiences: Experience[];
}

export default function WidgetContainer({ hotelId, theme, experiences }: Props) {
  // Auto-resize iframe via postMessage
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'traverum:resize', height }, '*');
      }
    };

    sendHeight();

    const observer = new ResizeObserver(sendHeight);
    observer.observe(document.body);

    return () => observer.disconnect();
  }, [experiences]);

  const getOrigin = () =>
    typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <div className="trv-widget">
      {/* Header */}
      <div className="trv-header">
        <h2 className="trv-title">{theme.content.title}</h2>
        <p className="trv-description">{theme.content.description}</p>
      </div>

      {/* Experience Grid */}
      <div className="trv-grid">
        {experiences.slice(0, 6).map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            bookingUrl={`${getOrigin()}/book/${hotelId}/${experience.slug}`}
          />
        ))}
      </div>

      {/* Learn more link */}
      <div className="mt-4 text-center">
        <a
          href={`${getOrigin()}/book/${hotelId}`}
          className="text-sm text-[var(--trv-text-muted)] hover:text-[var(--trv-primary)] underline-offset-2 hover:underline"
        >
          Explore all experiences &rarr;
        </a>
      </div>
    </div>
  );
}
