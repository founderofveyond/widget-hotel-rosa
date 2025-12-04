import { z } from 'zod';

export const guestFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required').regex(/^[\d\s\-\+\(\)]+$/, 'Invalid phone number format'),
});

export const paymentFormSchema = z.object({
  cardNumber: z.string().regex(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/, 'Invalid card number'),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date (MM/YY)'),
  cvv: z.string().regex(/^\d{3,4}$/, 'Invalid CVV'),
  cardholderName: z.string().min(1, 'Cardholder name is required').max(100),
});

export const bookingFormSchema = guestFormSchema.merge(paymentFormSchema).extend({
  termsAccepted: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
});

export type GuestFormData = z.infer<typeof guestFormSchema>;
export type PaymentFormData = z.infer<typeof paymentFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;



