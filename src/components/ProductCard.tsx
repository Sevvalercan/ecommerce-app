import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductCard({ id, name, price, image }: Product) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <div className="w-full h-40 relative mb-4">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-red-500 font-bold">{price}₺</p>
    </div>
  );
}
