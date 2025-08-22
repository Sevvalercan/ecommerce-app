"use client";

import Image from "next/image";
import { FaHeart, FaRegHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const favorite = wishlist.includes(id);

  const goToDetail = () => router.push(`/products/${id}`);

  return (
    <div className="border border-gray-100 rounded-lg p-4 hover:shadow-lg transition group relative overflow-hidden">
      {/* Favori ve göz ikonu */}
      <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
        <button
          onClick={() => toggleWishlist(id)}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          {favorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-600" />}
        </button>
        <button
          onClick={goToDetail}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaEye className="text-gray-600" />
        </button>
      </div>

      {/* Ürün görseli */}
      <div
        onClick={goToDetail}
        className="w-full h-40 relative mb-4 cursor-pointer"
      >
        <Image src={image} alt={name} fill className="object-contain" />
      </div>

      {/* Ürün bilgileri */}
      <h3 onClick={goToDetail} className="font-semibold text-lg cursor-pointer">
        {name}
      </h3>
      <p className="text-red-500 font-bold">{price}₺</p>

      {/* Sepete ekle */}
      <button
        onClick={() => addToCart({ id, name, price, qty: 1 })}
        className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center gap-2
                   opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 
                   transition-all duration-300"
      >
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
}
