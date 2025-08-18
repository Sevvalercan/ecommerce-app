// data/products.ts
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: 1, name: 'Ürün 1', price: 120, image: '/products/1.png' },
  { id: 2, name: 'Ürün 2', price: 99, image: '/products/2.png' },
  { id: 3, name: 'Ürün 3', price: 150, image: '/products/3.png' },
  { id: 4, name: 'Ürün 4', price: 75, image: '/products/4.png' },
  { id: 5, name: 'Ürün 5', price: 200, image: '/products/5.png' },
  { id: 6, name: 'Ürün 6', price: 50, image: '/products/6.png' },
  { id: 7, name: 'Ürün 7', price: 180, image: '/products/7.png' },
];
