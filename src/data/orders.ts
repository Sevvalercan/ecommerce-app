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
