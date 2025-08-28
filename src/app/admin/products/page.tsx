"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { products as productsData, Product } from "@/data/products";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(productsData);

  const handleEdit = (id: number) => toast("Edit product id: " + id);
  const handleDelete = (id: number) => {
    if (confirm("Ürünü silmek istediğine emin misin?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Ürün silindi!");
    }
  };

  return (
    <div className="min-h-screen p-8 ">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">Admin - Ürünler</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600">ID</th>
              <th className="py-3 px-4 text-left text-gray-600">Görsel</th>
              <th className="py-3 px-4 text-left text-gray-600">Ürün Adı</th>
              <th className="py-3 px-4 text-left text-gray-600">Fiyat</th>
              <th className="py-3 px-4 text-left text-gray-600">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-100  hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{product.id}</td>
                <td className="py-3 px-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="py-3 px-4 font-medium">{product.name}</td>
                <td className="py-3 px-4">{product.price} ₺</td>
                <td className="py-3 px-4 space-x-2">
                  <button
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                    onClick={() => handleEdit(product.id)}
                  >
                    Düzenle
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(product.id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Ürün bulunamadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
