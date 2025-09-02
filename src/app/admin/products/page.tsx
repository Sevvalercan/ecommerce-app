"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Product, products as productsData } from "@/data/products";
import { AdminTable, Column } from "@/components/admin/AdminTable";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(productsData);

  const handleEdit = (id: number) => toast("Edit product id: " + id);
  const handleDelete = (id: number) => {
    if (confirm("Ürünü silmek istediğine emin misin?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Ürün silindi!");
    }
  };

  const columns: Column<Product>[] = [
    { key: "id", label: "ID" },
    {
      key: "image",
      label: "Görsel",
      render: (p) => <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-md" />,
    },
    { key: "name", label: "Ürün Adı" },
    { key: "price", label: "Fiyat", render: (p) => `${p.price} ₺` },
  ];

  return (
    <>
      <Toaster />
      <AdminTable
        title="Admin - Ürünler"
        data={products}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage="Ürün bulunamadı"
      />
    </>
  );
}
