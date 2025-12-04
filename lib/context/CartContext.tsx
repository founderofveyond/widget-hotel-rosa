'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { CartItem } from '../data/types';
import { getCartFromStorage, saveCartToStorage, clearCartFromStorage } from '../utils/localStorage';

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateItem: (itemId: string, updates: Partial<CartItem>) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ 
  children, 
  hotelSlug 
}: { 
  children: React.ReactNode; 
  hotelSlug: string;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedItems = getCartFromStorage(hotelSlug);
    setItems(storedItems);
    setIsHydrated(true);
  }, [hotelSlug]);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (isHydrated) {
      saveCartToStorage(hotelSlug, items);
    }
  }, [items, hotelSlug, isHydrated]);

  const addItem = useCallback((item: CartItem) => {
    setItems(prev => [...prev, item]);
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  const updateItem = useCallback((itemId: string, updates: Partial<CartItem>) => {
    setItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, ...updates } : item
    ));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    clearCartFromStorage(hotelSlug);
  }, [hotelSlug]);

  const getTotal = useCallback(() => {
    return items.reduce((sum, item) => sum + item.totalCents, 0);
  }, [items]);

  const getItemCount = useCallback(() => {
    return items.length;
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateItem,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}



