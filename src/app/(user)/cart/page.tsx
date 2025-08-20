"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<string[]>([]); // Sepet boş

  return (
    <ProtectedRoute>
      <div className="min-h-[calc(100vh-128px)] flex flex-col justify-center items-center px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Sepetiniz</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">
            Ürün bulunmamaktadır.
          </p>
        ) : (
          <ul className="w-full max-w-4xl space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="border p-4 rounded-md flex justify-between items-center"
              >
                <span>{item}</span>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => {
                    const newCart = cartItems.filter((_, i) => i !== index);
                    setCartItems(newCart);
                  }}
                >
                  Sil
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </ProtectedRoute>
  );
}
