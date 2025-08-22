"use client";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <CheckoutForm />
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  );
}
