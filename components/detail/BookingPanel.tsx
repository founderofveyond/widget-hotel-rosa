'use client';

import React, { useState } from 'react';
import { Experience } from '@/lib/data/types';
import { useCart } from '@/lib/hooks/useCart';
import { formatPrice, formatDate, formatTime } from '@/lib/utils/formatters';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { Card } from '@/components/ui/Card';
import { useToast } from '@/lib/hooks/useToast';

interface BookingPanelProps {
  experience: Experience;
  hotelSlug: string;
}

export function BookingPanel({ experience }: BookingPanelProps) {
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [selectedDate, setSelectedDate] = useState(experience.availability.dates[0] || '');
  const [selectedTime, setSelectedTime] = useState(experience.availability.timeSlots[0] || '');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  
  const availableTimes = experience.availability.timeSlots;
  const availableDates = experience.availability.dates;
  
  const pricePerAdult = experience.priceCents;
  const pricePerChild = Math.floor(experience.priceCents * 0.7); // 30% discount for children
  const totalCents = (adults * pricePerAdult) + (children * pricePerChild);
  
  const handleAddToCart = () => {
    if (!selectedDate || !selectedTime) {
      showToast('Please select a date and time', 'error');
      return;
    }
    
    const cartItem = {
      id: `${experience.id}-${selectedDate}-${selectedTime}-${Date.now()}`,
      experienceId: experience.id,
      experienceSlug: experience.slug,
      experienceTitle: experience.title,
      experienceImage: experience.images[0],
      date: selectedDate,
      time: selectedTime,
      adults,
      children,
      pricePerAdult,
      pricePerChild,
      totalCents,
    };
    
    addItem(cartItem);
    showToast('Added to cart!', 'success');
  };
  
  const adultOptions = Array.from({ length: experience.maxParticipants }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
  }));
  
  const childOptions = Array.from({ length: experience.maxParticipants }, (_, i) => ({
    value: String(i),
    label: String(i),
  }));
  
  return (
    <Card className="p-6 sticky top-20">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">
            {formatPrice(experience.priceCents, experience.currency)}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)]">per adult</p>
        </div>
        
        <div className="space-y-4">
          <Select
            label="Select Date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            options={availableDates.map(date => ({
              value: date,
              label: formatDate(date),
            }))}
          />
          
          <Select
            label="Select Time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            options={availableTimes.map(time => ({
              value: time,
              label: formatTime(time),
            }))}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Select
              label="Adults"
              value={String(adults)}
              onChange={(e) => {
                const newAdults = parseInt(e.target.value, 10);
                setAdults(newAdults);
                if (adults + children >= experience.maxParticipants) {
                  setChildren(Math.max(0, experience.maxParticipants - newAdults));
                }
              }}
              options={adultOptions}
            />
            
            <Select
              label="Children"
              value={String(children)}
              onChange={(e) => {
                const newChildren = parseInt(e.target.value, 10);
                if (adults + newChildren <= experience.maxParticipants) {
                  setChildren(newChildren);
                }
              }}
              options={childOptions.filter(opt => parseInt(opt.value, 10) + adults <= experience.maxParticipants)}
            />
          </div>
        </div>
        
        <div className="pt-4 border-t border-[var(--color-border)]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-[var(--color-text-muted)]">Total</span>
            <span className="text-2xl font-bold text-[var(--color-primary)]">
              {formatPrice(totalCents, experience.currency)}
            </span>
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="lg"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}

