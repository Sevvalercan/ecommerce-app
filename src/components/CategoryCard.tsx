"use client";

import React from "react";

interface CategoryCardProps {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export default function CategoryCard({ label, icon, active, onClick }: CategoryCardProps) {
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
