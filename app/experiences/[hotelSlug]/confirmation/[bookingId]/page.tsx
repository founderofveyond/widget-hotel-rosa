'use client';

import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { useRouter } from 'next/navigation';
import { Booking } from '@/lib/data/types';
import { SuccessMessage } from '@/components/confirmation/SuccessMessage';
import { BookingDetails } from '@/components/confirmation/BookingDetails';
import { BookedExperiences } from '@/components/confirmation/BookedExperiences';
import { NextSteps } from '@/components/confirmation/NextSteps';

export default function ConfirmationPage({
  params,
}: {
  params: Promise<{ hotelSlug: string; bookingId: string }>;
}) {
  const { hotelSlug, bookingId } = use(params);
  const router = useRouter();
  const [booking, setBooking] = useState<Booking | null>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`traverum_booking_${bookingId}`);
      if (stored) {
        setBooking(JSON.parse(stored));
      } else {
        // Booking not found, redirect to catalog
        router.push(`/experiences/${hotelSlug}`);
      }
    }
  }, [bookingId, hotelSlug, router]);
  
  if (!booking) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-[var(--color-text-muted)]">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SuccessMessage />
      
      <div className="mt-12 space-y-8">
        <BookingDetails booking={booking} />
        <BookedExperiences items={booking.items} hotelSlug={hotelSlug} />
        <NextSteps />
      </div>
    </div>
  );
}

