'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { paymentFormSchema, PaymentFormData } from '@/lib/utils/validation';
import { Input } from '@/components/ui/Input';

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
  });
  
  const [cardNumber, setCardNumber] = useState('');
  
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted.substring(0, 19);
  };
  
  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
    }
    return cleaned;
  };
  
  const { onChange: cardNumberOnChange, onBlur: cardNumberOnBlur, ...cardNumberRegister } = register('cardNumber', {
    setValueAs: (value) => value.replace(/\s/g, ''),
  });
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Card Number"
        placeholder="1234 5678 9012 3456"
        value={cardNumber}
        onChange={(e) => {
          const formatted = formatCardNumber(e.target.value);
          setCardNumber(formatted);
          cardNumberOnChange(e);
        }}
        onBlur={cardNumberOnBlur}
        {...cardNumberRegister}
        error={errors.cardNumber?.message}
        maxLength={19}
      />
      
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Expiry Date"
          placeholder="MM/YY"
          {...register('expiryDate', {
            onChange: (e) => {
              e.target.value = formatExpiry(e.target.value);
            },
          })}
          error={errors.expiryDate?.message}
          maxLength={5}
        />
        <Input
          label="CVV"
          placeholder="123"
          type="password"
          {...register('cvv')}
          error={errors.cvv?.message}
          maxLength={4}
        />
      </div>
      
      <Input
        label="Cardholder Name"
        placeholder="John Doe"
        {...register('cardholderName')}
        error={errors.cardholderName?.message}
      />
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This is a demo. No real payment will be processed.
        </p>
      </div>
      
      <button type="submit" className="hidden" />
    </form>
  );
}

