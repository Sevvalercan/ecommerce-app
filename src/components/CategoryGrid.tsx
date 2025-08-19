"use client";
import { useState, useRef } from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaGamepad,
  FaCamera,
} from "react-icons/fa";
import { MdWatch } from "react-icons/md";

interface CategoryCardProps {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

function CategoryCard({ label, icon, active, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className={`min-w-[200px] h-[145px] border border-black flex flex-col items-center justify-center gap-4 cursor-pointer transition rounded-lg
        ${active ? "bg-red-500 text-white" : "bg-white text-black"}`}
    >
      <div className="text-3xl">{icon}</div>
      <span className="font-medium">{label}</span>
    </div>
  );
}

export default function CategoryGrid() {
  const [active, setActive] = useState("Phones");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    { label: "Phones", icon: <FaMobileAlt /> },
    { label: "Computers", icon: <FaLaptop /> },
    { label: "SmartWatch", icon: <MdWatch /> },
    { label: "Camera", icon: <FaCamera /> },
    { label: "HeadPhones", icon: <FaHeadphones /> },
    { label: "Gaming", icon: <FaGamepad /> },
    { label: "Accessories", icon: <FaHeadphones /> },
    { label: "Tablets", icon: <FaLaptop /> },
    { label: "Audio", icon: <FaHeadphones /> },
    { label: "Wearables", icon: <MdWatch /> },
  ];

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto scrollbar-hide space-x-4 py-4"
    >
      {categories.map((cat) => (
        <CategoryCard
          key={cat.label}
          label={cat.label}
          icon={cat.icon}
          active={active === cat.label}
          onClick={() => setActive(cat.label)}
        />
      ))}
    </div>
  );
}
