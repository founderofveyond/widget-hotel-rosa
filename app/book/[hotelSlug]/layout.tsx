import React from 'react';
import { ThemeProvider } from '@/lib/context/ThemeContext';
import { CartProvider } from '@/lib/context/CartContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getHotelBySlug } from '@/lib/data/hotels';
import { notFound } from 'next/navigation';

export default function ExperiencesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { hotelSlug: string };
}) {
  const { hotelSlug } = params;
  const hotel = getHotelBySlug(hotelSlug);
  
  if (!hotel) {
    notFound();
  }
  
  return (
    <ThemeProvider theme={hotel.theme}>
      <CartProvider hotelSlug={hotelSlug}>
        <div className="min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-body)' }}>
          <Header hotelSlug={hotelSlug} />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

