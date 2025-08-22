"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";

export default function CheckoutForm() {
  const { clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "card",
  });

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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        type="text"
        name="address"
        placeholder="Shipping Address"
        value={form.address}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <h2 className="text-xl font-semibold mt-6 mb-2">Payment Method</h2>
      <div className="flex items-center gap-6">
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
        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition mt-6"
      >
        Place Order
      </button>
    </form>
  );
}
