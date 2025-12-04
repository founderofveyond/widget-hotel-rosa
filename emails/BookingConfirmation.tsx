/**
 * Email template for booking confirmation
 * This is a reference template - in production, you would use a service like
 * Resend, SendGrid, or AWS SES to send emails
 */

import React from 'react';
import { Booking } from '@/lib/data/types';
import { formatPrice, formatDate, formatTime } from '@/lib/utils/formatters';

interface BookingConfirmationEmailProps {
  booking: Booking;
}

export function BookingConfirmationEmail({ booking }: BookingConfirmationEmailProps) {
  return (
    <html>
      <body style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
          <h1 style={{ color: '#2563eb' }}>Booking Confirmed!</h1>
          
          <p>Dear {booking.guest.firstName} {booking.guest.lastName},</p>
          
          <p>Thank you for your booking! We're excited to have you join us.</p>
          
          <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
            <h2 style={{ marginTop: 0 }}>Booking Details</h2>
            <p><strong>Booking Reference:</strong> {booking.id}</p>
            <p><strong>Total Amount:</strong> {formatPrice(booking.totalCents, 'EUR')}</p>
          </div>
          
          <h2>Your Experiences</h2>
          {booking.items.map(item => (
            <div key={item.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
              <h3 style={{ marginTop: 0 }}>{item.experienceTitle}</h3>
              <p><strong>Date:</strong> {formatDate(item.date)}</p>
              <p><strong>Time:</strong> {formatTime(item.time)}</p>
              <p>
                <strong>Participants:</strong> {item.adults} {item.adults === 1 ? 'adult' : 'adults'}
                {item.children > 0 && `, ${item.children} ${item.children === 1 ? 'child' : 'children'}`}
              </p>
              <p><strong>Price:</strong> {formatPrice(item.totalCents, 'EUR')}</p>
            </div>
          ))}
          
          <div style={{ marginTop: '30px', padding: '20px', background: '#eff6ff', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>What's Next?</h3>
            <ul>
              <li>Arrive at the meeting point 10-15 minutes before the scheduled time</li>
              <li>Bring a valid ID and this confirmation email</li>
              <li>Contact us if you have any questions or need to make changes</li>
            </ul>
          </div>
          
          <p style={{ marginTop: '30px' }}>
            We look forward to seeing you soon!
          </p>
          
          <p>
            Best regards,<br />
            The Traverum Team
          </p>
        </div>
      </body>
    </html>
  );
}



