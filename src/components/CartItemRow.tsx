"use client";

import { CartItem } from "@/context/CartContext";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";

type Props = {
  item: CartItem;
  increment: (id: number, qty: number) => void;
  decrement: (id: number, qty: number) => void;
  remove: (id: number) => void;
};

export default function CartItemRow({ item, increment, decrement, remove }: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b pb-4 hover:bg-gray-50 transition">
      {/* Image + Name */}
      <div className="flex items-center gap-4 flex-1">
        <Image
          src={`/products/${item.id}.png`}
          alt={item.name}
          width={70}
          height={70}
          className="rounded-lg object-cover"
        />
        <span className="font-medium">{item.name}</span>
      </div>

      {/* Price */}
      <div className="w-20 text-center text-gray-700">{item.price.toFixed(2)}₺</div>

      {/* Quantity */}
      <div className="flex items-center border rounded w-28 h-10 overflow-hidden">
        <button
          onClick={() => decrement(item.id, item.qty)}
          className="w-10 h-full bg-gray-100 hover:bg-gray-200 transition"
        >
          –
        </button>
        <input
          type="text"
          value={item.qty}
          readOnly
          className="w-full text-center outline-none"
        />
        <button
          onClick={() => increment(item.id, item.qty)}
          className="w-10 h-full bg-gray-100 hover:bg-gray-200 transition"
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="w-24 text-right font-semibold">{(item.price * item.qty).toFixed(2)}₺</div>

      {/* Sil (çöp kutusu) */}
      <button
        onClick={() => remove(item.id)}
        className="text-red-500 hover:text-red-600 ml-4"
      >
        <FaTrash />
      </button>
    </div>
  );
}
