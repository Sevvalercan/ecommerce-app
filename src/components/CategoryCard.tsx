import React from "react";

interface CategoryCardProps {
  name: string;
  icon: string; // icon url veya sınıf
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon }) => {
  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <img src={icon} alt={name} className="w-12 h-12 mb-2" />
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default CategoryCard;
