"use client";
import { useRef } from "react";
import Slider from "@/components/Slider";
import CountdownTimer from "@/components/CountdownTimer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import CategoryGrid from "@/components/CategoryGrid";

export default function HomePage() {
  const flashSaleRef = useRef<HTMLDivElement | null>(null);
  const categoryRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (!ref.current) return;
    const width = ref.current.clientWidth;
    ref.current.scrollBy({
      left: direction === "left" ? -width / 2 : width / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-16">
      {/* Slider */}
      <section className="relative">
        <Slider />
      </section>

      {/* Flash Sale */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-6 bg-red-500"></div>
                <span className="text-red-500 text-sm font-bold">Today's</span>
              </div>
              <div className="flex items-center space-x-4">
                <h2 className="text-3xl font-bold text-black">Flash Sale</h2>
                <CountdownTimer targetDate={new Date("2025-08-25T23:59:59")} />
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => scrollCarousel(flashSaleRef, "left")}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                &#10094;
              </button>
              <button
                onClick={() => scrollCarousel(flashSaleRef, "right")}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                &#10095;
              </button>
            </div>
          </div>

          <div
            ref={flashSaleRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 py-4"
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[220px] max-w-[220px]">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-6 bg-red-500"></div>
                <span className="text-red-500 text-sm font-bold">
                  Categories
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <h2 className="text-3xl font-bold text-black">
                  Browse By Category
                </h2>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => scrollCarousel(categoryRef, "left")}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                &#10094;
              </button>
              <button
                onClick={() => scrollCarousel(categoryRef, "right")}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                &#10095;
              </button>
            </div>
          </div>

          <div
            ref={categoryRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 py-4"
          >
            {/* CategoryGrid içerisindeki her öğeyi scrollable yap */}
            {Array.isArray(CategoryGrid) ? (
              CategoryGrid.map((category: any, index: number) => (
                <div key={index} className="min-w-[200px] flex-shrink-0">
                  {category}
                </div>
              ))
            ) : (
              <div className="flex space-x-4">
                <CategoryGrid />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Flash Sale */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-6 bg-red-500"></div>
                <span className="text-red-500 text-sm font-bold">
                  This Month
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <h2 className="text-3xl font-bold text-black">
                  Best Selling Products
                </h2>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => scrollCarousel(flashSaleRef, "left")}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                &#10094;
              </button>
              <button
                onClick={() => scrollCarousel(flashSaleRef, "right")}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                &#10095;
              </button>
            </div>
          </div>

          <div
            ref={flashSaleRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 py-4"
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[220px] max-w-[220px]">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>



      
    </div>
  );
}
