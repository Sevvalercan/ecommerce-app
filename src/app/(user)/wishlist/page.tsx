"use client";

import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-[calc(100vh-200px)] py-36 px-24 bg-gray-50">
      <h1 className="text-3xl font-bold mb-10 text-center">Wishlist</h1>

      {wishlistProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          Your wishlist is currently empty.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </div>
  );
}
