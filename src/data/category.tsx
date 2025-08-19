import { ReactNode } from "react";
import { FaMobileAlt, FaLaptop, FaHeadphones, FaGamepad, FaCamera } from "react-icons/fa";
import { MdWatch } from "react-icons/md";

// Category tipi
export interface Category {
  label: string;
  icon: ReactNode; // ReactNode JSX elementleri için doğru tip
}

// Kategoriler
export const categories: Category[] = [
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
