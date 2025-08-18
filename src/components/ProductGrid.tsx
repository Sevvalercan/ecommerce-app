import ProductCard from './ProductCard';
import { products } from '@/data/products';

export type ProductGridProps = {
  variant?: 'flashSale' | 'featured'; // string değil, union type
};

export default function ProductGrid({ variant }: ProductGridProps) {
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
