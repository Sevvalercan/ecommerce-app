"use client";

import ProductCard from "./ProductCard";
import { Product, products } from "@/data/products";

type RelatedProductsProps = {
  currentProductId: number;
};

export default function RelatedProducts({
  currentProductId,
}: RelatedProductsProps) {
  // Aynı kategoriden veya rastgele 4 ürün
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {related.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
