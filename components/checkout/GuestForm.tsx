'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { guestFormSchema, GuestFormData } from '@/lib/utils/validation';
import { Input } from '@/components/ui/Input';

interface GuestFormProps {
  onSubmit: (data: GuestFormData) => void;
  defaultValues?: Partial<GuestFormData>;
}

export function GuestForm({ onSubmit, defaultValues }: GuestFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GuestFormData>({
    resolver: zodResolver(guestFormSchema),
    defaultValues,
  });
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <Input
          label="Last Name"
          {...register('lastName')}
          error={errors.lastName?.message}
        />
      </div>
      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        label="Phone Number"
        type="tel"
        {...register('phone')}
        error={errors.phone?.message}
        placeholder="+1 (555) 123-4567"
      />
      <button type="submit" className="hidden" />
    </form>
  );
}



