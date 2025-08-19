"use client";

import { useState, useRef } from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/category";

interface CategoryGridProps {
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export default function CategoryGrid({ scrollRef }: CategoryGridProps) {
  const [active, setActive] = useState("Phones");
  const internalRef = useRef<HTMLDivElement | null>(null);
  const ref = scrollRef || internalRef;

  return (
    <div ref={ref} className="flex overflow-x-auto scrollbar-hide space-x-4 py-4">
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
