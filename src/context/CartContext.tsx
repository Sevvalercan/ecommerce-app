"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "cart_items";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // LocalStorage’dan yükle
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(CART_KEY);
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Her değişimde kaydet
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + item.qty } : p
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: Math.max(qty, 1) } : p))
    );
  };

  const clearCart = () => setCart([]);

  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
