export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: 1, name: "Ürün 1", price: 120, image: "/products/1.png" },
  { id: 2, name: "Ürün 2", price: 99, image: "/products/2.png" },
  { id: 3, name: "Ürün 3", price: 150, image: "/products/3.png" },
  { id: 4, name: "Ürün 4", price: 75, image: "/products/4.png" },
  { id: 5, name: "Ürün 5", price: 200, image: "/products/5.png" },
  { id: 6, name: "Ürün 6", price: 50, image: "/products/6.png" },
  { id: 7, name: "Ürün 7", price: 180, image: "/products/7.png" },
  { id: 8, name: "Ürün 8", price: 120, image: "/products/1.png" },
  { id: 9, name: "Ürün 9", price: 99, image: "/products/2.png" },
  { id: 10, name: "Ürün 10", price: 150, image: "/products/3.png" },
  { id: 11, name: "Ürün 11", price: 75, image: "/products/4.png" },
  { id: 12, name: "Ürün 12", price: 200, image: "/products/5.png" },
  { id: 13, name: "Ürün 13", price: 50, image: "/products/6.png" },
  { id: 14, name: "Ürün 14", price: 180, image: "/products/7.png" },
];

export type Order = {
  id: string;       // Örn: ORD-1023
  date: string;     // ISO date format
  total: string;    // ₺ işareti varsa string
  status: string;   // "Delivered", "Processing"
};

export const orders: Order[] = [
  {
    id: "ORD-1023",
    date: "2025-08-20",
    total: "125.00₺",
    status: "Delivered",
  },
  {
    id: "ORD-1024",
    date: "2025-08-22",
    total: "59.00₺",
    status: "Processing",
  },
];
