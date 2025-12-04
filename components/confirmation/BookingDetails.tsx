import React from 'react';
import { Booking } from '@/lib/data/types';

interface BookingDetailsProps {
  booking: Booking;
}

export function BookingDetails({ booking }: BookingDetailsProps) {
  return (
    <div className="bg-[var(--color-background-alt)] p-6 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-[var(--color-text)]">
        Booking Details
      </h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-[var(--color-text-muted)]">Booking Reference</span>
          <span className="font-mono font-semibold text-[var(--color-text)]">
            {booking.id}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--color-text-muted)]">Guest Name</span>
          <span className="text-[var(--color-text)]">
            {booking.guest.firstName} {booking.guest.lastName}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--color-text-muted)]">Email</span>
          <span className="text-[var(--color-text)]">{booking.guest.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--color-text-muted)]">Phone</span>
          <span className="text-[var(--color-text)]">{booking.guest.phone}</span>
        </div>
      </div>
    </div>
  );
}



