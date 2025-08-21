import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetail from "@/components/product/ProductInfo";

type Params = {
  id: string;
};

export default function ProductPage({ params }: { params: Params }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound(); // 404 sayfası gösterir
  }

  return (
    <div className="p-32">
      {/* product prop'u eklenmeli */}
      <ProductDetail product={product} />
    </div>
  );
}
