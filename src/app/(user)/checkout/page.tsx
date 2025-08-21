"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "card",
  });

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Order placed successfully!");
    clearCart();
    router.push("/thank-you");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md space-y-4"
        >
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <h2 className="text-xl font-semibold mt-6 mb-2">Payment Method</h2>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={form.payment === "card"}
                onChange={handleChange}
              />
              Credit/Debit Card
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={form.payment === "cash"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </form>

        {/* Right Side - Order Summary */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border-b pb-2"
              >
                <span>
                  {item.name} x {item.qty}
                </span>
                <span>${item.price * item.qty}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 font-bold text-lg">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
