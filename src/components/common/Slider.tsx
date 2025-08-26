"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { id: 1, text: "En Yeni Ürünler", img: "/slider/slider1.png" },
  { id: 2, text: "Büyük İndirimler", img: "/slider/slider2.png" },
  { id: 3, text: "Yaz Koleksiyonu", img: "/slider/slider3.png" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  // Otomatik geçiş (her 3 sn)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute w-full h-full transition-opacity duration-700 
          ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.img}
            alt={s.text}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold">{s.text}</h2>
          </div>
        </div>
      ))}

      {/* Slider Kontroller */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
