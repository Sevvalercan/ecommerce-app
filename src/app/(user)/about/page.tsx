"use client";

import { FaUsers, FaShoppingCart, FaStore, FaTags } from "react-icons/fa";
import Image from "next/image";

// Tekrar kullanılabilir istatistik kartı componenti
function StatsCard({
  icon: Icon,
  number,
  label,
}: {
  icon: any;
  number: string;
  label: string;
}) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <Icon className="text-4xl text-red-600 mb-4" />
      <h3 className="text-2xl font-bold">{number}</h3>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      {/* Our Story */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Launched in 2015,{" "}
            <span className="text-red-600 font-semibold">Exclusive</span>
            is South Asia’s premier online shopping marketplace with an active
            presence in Bangladesh. <br />
            <br />
            Supported by a wide range of tailored marketing, data and service
            solutions, Exclusive has 10,500 sellers and 300 brands and serves 3
            million customers across the region. With more than 1 million
            products, Exclusive offers a diverse assortment in categories
            ranging from consumer goods to lifestyle products — growing at a
            very fast pace.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center ">
          <Image
            src="/about-image.png" // buraya kendi görselin yolunu koy
            alt="Our Story"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatsCard icon={FaUsers} number="3M+" label="Customers" />
        <StatsCard icon={FaStore} number="10,500+" label="Sellers" />
        <StatsCard icon={FaTags} number="300+" label="Brands" />
        <StatsCard icon={FaShoppingCart} number="1M+" label="Products" />
      </div>
    </section>
  );
}
