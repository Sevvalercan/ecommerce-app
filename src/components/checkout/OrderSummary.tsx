"use client";

import { useEffect, useState } from "react";
import { CartItem } from "@/context/CartContext";
import OrderItem from "./OrderItem";

type Props = {
  cart: CartItem[];
};

export default function OrderSummary({ cart }: Props) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <ul className="space-y-3">
        {cart.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="flex justify-between mt-6 font-bold text-lg">
        <span>Total</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
}
