import ProductCard from './ProductCard';
import { products } from '@/data/products';

type ProductCarouselProps = {
  variant?: 'flashSale' | 'featured';
};

export default function ProductCarousel({ variant }: ProductCarouselProps) {
  const filteredProducts =
    variant === 'flashSale' ? products.slice(0, 5) : products;

  return (
    <div className="relative">
      <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="flex-shrink-0 w-1/4 sm:w-1/4 lg:w-1/4 snap-start"
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
