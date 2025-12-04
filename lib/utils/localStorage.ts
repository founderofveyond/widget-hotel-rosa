const CART_PREFIX = 'traverum_cart_';
const CART_EXPIRY_HOURS = 24;

import { CartItem } from '../data/types';

export interface StoredCart {
  items: CartItem[];
  updatedAt: string;
}

export function getCartFromStorage(hotelSlug: string): CartItem[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const key = `${CART_PREFIX}${hotelSlug}`;
    const stored = localStorage.getItem(key);
    if (!stored) return [];
    
    const cart: StoredCart = JSON.parse(stored);
    const updatedAt = new Date(cart.updatedAt);
    const now = new Date();
    const hoursDiff = (now.getTime() - updatedAt.getTime()) / (1000 * 60 * 60);
    
    if (hoursDiff > CART_EXPIRY_HOURS) {
      localStorage.removeItem(key);
      return [];
    }
    
    return cart.items || [];
  } catch (error) {
    console.error('Error reading cart from localStorage:', error);
    return [];
  }
}

export function saveCartToStorage(hotelSlug: string, items: CartItem[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    const key = `${CART_PREFIX}${hotelSlug}`;
    const cart: StoredCart = {
      items,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(key, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
}

export function clearCartFromStorage(hotelSlug: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const key = `${CART_PREFIX}${hotelSlug}`;
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error clearing cart from localStorage:', error);
  }
}

