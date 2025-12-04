import React from 'react';
import { ThemeProvider } from '@/lib/context/ThemeContext';
import { getHotelBySlug } from '@/lib/data/hotels';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function WidgetLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ hotelSlug: string }>;
}) {
  const { hotelSlug } = use(params);
  const hotel = getHotelBySlug(hotelSlug);
  
  if (!hotel) {
    notFound();
  }
  
  return (
    <ThemeProvider theme={hotel.theme}>
      <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>
        {children}
      </div>
    </ThemeProvider>
  );
}

