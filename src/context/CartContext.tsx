'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { CartItem, Part } from '@/types';

interface CartContextType {
  items: CartItem[];
  addItem: (part: Part, moduleName: string) => void;
  removeItem: (partId: string) => void;
  updateQuantity: (partId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((part: Part, moduleName: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.part.id === part.id);
      if (existing) {
        return prev.map((item) =>
          item.part.id === part.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { part, moduleName, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((partId: string) => {
    setItems((prev) => prev.filter((item) => item.part.id !== partId));
  }, []);

  const updateQuantity = useCallback((partId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.part.id !== partId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.part.id === partId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.part.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
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
