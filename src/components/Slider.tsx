"use client";
import { useState } from "react";

const slides = [
  { id: 1, text: "En Yeni Ürünler", img: "/banner1.jpg" },
  { id: 2, text: "Büyük İndirimler", img: "/banner2.jpg" },
  { id: 3, text: "Yaz Koleksiyonu", img: "/banner3.jpg" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute w-full h-full transition-opacity duration-700 
          ${i === current ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${s.img})`, backgroundSize: "cover" }}
        >
          <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
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
          ></button>
        ))}
      </div>
    </div>
  );
}
