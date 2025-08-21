"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useCart, CartItem } from "@/context/CartContext";
import CartItemRow from "@/components/CartItemRow";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { cart, removeFromCart, updateQty } = useCart();
  const router = useRouter();

  // Component mount olana kadar hiç bir şey render etme
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const totalPrice: number = cart.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.qty,
    0
  );

  const increment = (id: number, qty: number) => {
    updateQty(id, qty + 1);
    toast.success("Ürün miktarı artırıldı!");
  };

  const decrement = (id: number, qty: number) => {
    updateQty(id, qty > 1 ? qty - 1 : 1);
    toast.success("Ürün miktarı güncellendi!");
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
    toast.success("Ürün sepetten çıkarıldı!");
  };

  if (cart.length === 0)
    return (
      <ProtectedRoute>
        <div className="min-h-[calc(100vh-128px)] flex items-center justify-center px-4 mt-24">
          <p className="text-gray-500 text-lg">Sepetiniz boş.</p>
        </div>
      </ProtectedRoute>
    );

  return (
    <ProtectedRoute>
      <div className="min-h-[calc(100vh-128px)] px-4 py-12 mt-24 flex justify-center bg-gray-50">
        <div className="w-full max-w-7xl lg:flex gap-6">
          {/* Ürün Listesi */}
          <div className="flex-1 bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Alışveriş Sepeti</h2>
            <div className="flex flex-col gap-6">
              {cart.map((item: CartItem) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  increment={increment}
                  decrement={decrement}
                  remove={handleRemove}
                />
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button className="text-blue-600 hover:underline">← Return To Shop</button>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => toast.success("Sepet güncellendi!")}
              >
                Update Cart
              </button>
            </div>
          </div>

          {/* Cart Total & Kupon */}
          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-xl p-6 flex flex-col gap-6">
            <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Toplam</span>
              <span className="text-2xl font-bold text-blue-600">{totalPrice.toFixed(2)}₺</span>
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Kupon Kodu"
                className="border rounded-lg px-3 py-2 w-full"
              />
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                onClick={() => toast.success("Kupon uygulandı!")}
              >
                Kupon Uygula
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                onClick={() => router.push("/checkout")}
              >
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
