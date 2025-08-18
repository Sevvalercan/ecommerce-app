// app/page.tsx
import Slider from '@/components/Slider';
import CategoryGrid from '@/components/CategoryGrid';
import ProductGrid from '@/components/ProductGrid';
import CountdownTimer from '@/components/CountdownTimer';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Slider Section */}
      <section className="relative">
        <Slider />
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Kategoriler</h2>
        <CategoryGrid />
      </section>

      {/* Flash Sale Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Flash Sale</h2>
            <CountdownTimer targetDate={new Date('2025-08-25T23:59:59')} />
          </div>
          <ProductGrid variant="flashSale" />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Öne Çıkan Ürünler</h2>
        <ProductGrid variant="featured" />
      </section>
    </div>
  );
}
