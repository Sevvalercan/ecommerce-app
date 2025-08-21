"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import RelatedProducts from "./RelatedProducts";
import { Product } from "@/data/products";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [favorite, setFavorite] = useState(false);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
  };

  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };
  const increaseQty = () => setQty(qty + 1);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10 bg-white rounded-3xl overflow-hidden border border-gray-200">
        {/* Ürün Görseli */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-6 transition-transform duration-300 hover:scale-105">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-3xl object-contain"
          />
        </div>

        {/* Ürün Bilgileri */}
        <div className="flex-1 flex flex-col justify-between p-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-900">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-gray-800">
              {product.price}₺
            </p>

            {/* Favori Butonu */}
            <button
              onClick={() => setFavorite(!favorite)}
              className={`flex items-center gap-2 text-gray-600 transition font-medium ${
                favorite ? "text-pink-500 animate-pulse" : "hover:text-gray-800"
              }`}
            >
              {favorite ? <FaHeart /> : <FaRegHeart />}
              {favorite ? "Favorilerden Kaldır" : "Favorilere Ekle"}
            </button>

            {/* Miktar ve Sepete Ekle */}
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={decreaseQty}
                  className="px-3 py-1 text-gray-700 hover:bg-gray-300 transition rounded-l-lg"
                >
                  <FaMinus />
                </button>
                <input
                  type="text"
                  value={qty}
                  readOnly
                  className="w-16 text-center border-x border-gray-200 py-1 focus:outline-none"
                />
                <button
                  onClick={increaseQty}
                  className="px-3 py-1  text-gray-700 hover:bg-gray-300 transition rounded-r-lg"
                >
                  <FaPlus />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-gray-800 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
              >
                <FaShoppingCart />
                Sepete Ekle
              </button>
            </div>

            {/* Açıklama */}
            {/* {product.description && (
              <p className="mt-6 text-gray-700 text-lg">{product.description}</p>
            )} */}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          İlgili Ürünler
        </h2>
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
}
