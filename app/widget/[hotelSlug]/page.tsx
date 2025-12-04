'use client';

import React, { useEffect, useMemo } from 'react';
import { getTheme } from '@/lib/widget/themes';
import { getExperiencesByHotel } from '@/lib/widget/experiences';
import WidgetContainer from '@/components/widget/WidgetContainer';

export default function WidgetPage({
  params,
}: {
  params: { hotelSlug: string };
}) {
  const { hotelSlug } = params;

  const theme = useMemo(() => getTheme(hotelSlug), [hotelSlug]);
  const experiences = useMemo(
    () => getExperiencesByHotel(hotelSlug),
    [hotelSlug],
  );

  // Apply theme CSS variables
  useEffect(() => {
    const root = document.documentElement;

    // Colors
    root.style.setProperty('--trv-primary', theme.colors.primary);
    root.style.setProperty('--trv-primary-hover', theme.colors.primaryHover);
    root.style.setProperty('--trv-secondary', theme.colors.secondary);
    root.style.setProperty('--trv-bg', theme.colors.background);
    root.style.setProperty('--trv-bg-light', theme.colors.backgroundLight);
    root.style.setProperty('--trv-text', theme.colors.text);
    root.style.setProperty('--trv-text-muted', theme.colors.textMuted);
    root.style.setProperty('--trv-text-heading', theme.colors.textHeading);
    root.style.setProperty('--trv-border', theme.colors.border);

    // Fonts
    root.style.setProperty('--trv-font-body', theme.fonts.body);
    root.style.setProperty('--trv-font-heading', theme.fonts.heading);

    // Sizing
    root.style.setProperty(
      '--trv-card-radius',
      `${theme.sizing.cardRadius}px`,
    );
    root.style.setProperty(
      '--trv-button-radius',
      `${theme.sizing.buttonRadius}px`,
    );
    root.style.setProperty(
      '--trv-card-image-height',
      `${theme.sizing.cardImageHeight}px`,
    );

    // Load Google Fonts
    if (theme.fonts.bodyUrl) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = theme.fonts.bodyUrl;
      document.head.appendChild(link);
    }
    if (theme.fonts.headingUrl && theme.fonts.headingUrl !== theme.fonts.bodyUrl) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = theme.fonts.headingUrl;
      document.head.appendChild(link);
    }
  }, [theme]);

  return (
    <WidgetContainer hotelId={hotelSlug} theme={theme} experiences={experiences} />
  );
}

