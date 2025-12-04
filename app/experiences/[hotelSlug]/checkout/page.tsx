'use client';

import React, { useState, useEffect } from 'react';
import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/hooks/useCart';
import { useToast } from '@/lib/hooks/useToast';
import { GuestForm } from '@/components/checkout/GuestForm';
import { PaymentForm } from '@/components/checkout/PaymentForm';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { TermsCheckbox } from '@/components/checkout/TermsCheckbox';
import { Button } from '@/components/ui/Button';
import { GuestFormData, PaymentFormData } from '@/lib/utils/validation';
import { ToastContainer } from '@/components/ui/Toast';

export default function CheckoutPage({
  params,
}: {
  params: Promise<{ hotelSlug: string }>;
}) {
  const { hotelSlug } = use(params);
  const router = useRouter();
  const { items, getTotal, clearCart } = useCart();
  const { toasts, showToast, removeToast } = useToast();
  const [guestData, setGuestData] = useState<GuestFormData | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentFormData | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState('');
  
  useEffect(() => {
    if (items.length === 0) {
      router.push(`/experiences/${hotelSlug}`);
    }
  }, [items.length, hotelSlug, router]);
  
  if (items.length === 0) {
    return null;
  }
  
  const handleGuestSubmit = (data: GuestFormData) => {
    setGuestData(data);
    setTermsError('');
  };
  
  const handlePaymentSubmit = (data: PaymentFormData) => {
    setPaymentData(data);
    setTermsError('');
  };
  
  const handleCompleteBooking = () => {
    if (!guestData || !paymentData) {
      showToast('Please complete all forms', 'error');
      return;
    }
    
    if (!termsAccepted) {
      setTermsError('You must accept the terms and conditions');
      return;
    }
    
    // Create booking
    const bookingId = `booking-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const booking = {
      id: bookingId,
      hotelSlug: hotelSlug,
      items,
      guest: guestData,
      totalCents: getTotal(),
      createdAt: new Date().toISOString(),
    };
    
    // Store booking in localStorage (in a real app, this would go to a server)
    if (typeof window !== 'undefined') {
      localStorage.setItem(`traverum_booking_${bookingId}`, JSON.stringify(booking));
    }
    
    // Clear cart
    clearCart();
    
    // Redirect to confirmation
    router.push(`/experiences/${hotelSlug}/confirmation/${bookingId}`);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8">
        Checkout
      </h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Guest Information
            </h2>
            <GuestForm onSubmit={handleGuestSubmit} />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Payment Information
            </h2>
            <PaymentForm onSubmit={handlePaymentSubmit} />
          </div>
          
          <div>
            <TermsCheckbox
              checked={termsAccepted}
              onChange={(checked) => {
                setTermsAccepted(checked);
                setTermsError('');
              }}
              error={termsError}
            />
          </div>
          
          <div className="flex justify-end">
            <Button
              onClick={handleCompleteBooking}
              size="lg"
              disabled={!guestData || !paymentData || !termsAccepted}
            >
              Complete Booking
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-20">
            <OrderSummary hotelSlug={hotelSlug} />
          </div>
        </div>
      </div>
      
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}

