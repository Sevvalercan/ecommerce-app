// components/ProductGrid.tsx
import ProductCard from './ProductCard';
import { products } from '@/data/products';

type ProductGridProps = {
  variant?: 'flashSale' | 'featured';
};

export default function ProductGrid({ variant }: ProductGridProps) {
  // İstersen variant'a göre filtreleme ekleyebilirsin
  const filteredProducts =
    variant === 'flashSale' ? products.slice(0, 4) : products;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
