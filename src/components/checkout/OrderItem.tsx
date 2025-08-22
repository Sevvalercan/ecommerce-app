"use client";

import Image from "next/image";
import { CartItem } from "@/context/CartContext";

type Props = {
  item: CartItem;
};

export default function OrderItem({ item }: Props) {
  return (
    <li className="flex justify-between border-b pb-2 items-center">
      <div className="flex items-center gap-3">
        <Image
          src={`/products/${item.id}.png`}
          alt={item.name}
          width={70}
          height={70}
          className="rounded-lg object-cover"
        />
        <span>
          {item.name} x {item.qty}
        </span>
      </div>
      <span>${item.price * item.qty}</span>
    </li>
  );
}
