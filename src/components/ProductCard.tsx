"use client";

import Image from "next/image";
import { Product } from "@/data/products";
import { FaHeart, FaRegHeart, FaStar, FaEye, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ id, name, price, image }: Product) {
  const [favorite, setFavorite] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-100  rounded-lg p-4 hover:shadow-lg transition group relative overflow-hidden">
      <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
        <button onClick={() => setFavorite(!favorite)} className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
          {favorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-600" />}
        </button>
        <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <FaEye className="text-gray-600" />
        </button>
      </div>

      <div className="w-full h-40 relative mb-4">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>

      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-red-500 font-bold">{price}₺</p>

      <div className="flex items-center space-x-1 mt-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className={`${i < 4 ? "text-yellow-400" : "text-gray-300"}`} />
        ))}
        <span className="text-sm text-gray-500 ml-1">(88)</span>
      </div>

    <button
  onClick={() => addToCart({ id, name, price, qty: 1 })} // qty ekledik
  className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center gap-2
             opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 
             transition-all duration-300"
>
  <FaShoppingCart /> Add to Cart
</button>

    </div>
  );
}
