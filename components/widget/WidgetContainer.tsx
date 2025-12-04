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
  // Base URL for full booking experience.
  // For production, this should point to the /book route, e.g. https://app.traverum.com/book
  // For local dev, you can use http://localhost:3000/experiences
  const baseUrl =
    process.env.NEXT_PUBLIC_BOOKING_URL || 'https://app.traverum.com/book';

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
            buttonText={theme.content.buttonText}
            bookingUrl={`${baseUrl}/${hotelId}/${experience.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
