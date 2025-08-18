import Header from "@/components/Header";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <section className="max-w-7xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Popüler Ürünler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Şimdilik placeholder ürünler */}
          <div className="p-4 border rounded shadow">Ürün 1</div>
          <div className="p-4 border rounded shadow">Ürün 2</div>
          <div className="p-4 border rounded shadow">Ürün 3</div>
          <div className="p-4 border rounded shadow">Ürün 4</div>
        </div>
      </section>
    </>
  );
}
