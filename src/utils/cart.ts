export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

// LocalStorage Key
const CART_KEY = "cart_items";

// Sepeti localStorage’dan al
export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};

//  Sepeti kaydet
export const saveCart = (items: CartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

//  Ürün ekle
export const addToCart = (item: CartItem) => {
  const cart = getCart();
  const existing = cart.find((p) => p.id === item.id);

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }

  saveCart(cart);
  return cart;
};

//  Ürün sil
export const removeFromCart = (id: number) => {
  const cart = getCart().filter((p) => p.id !== id);
  saveCart(cart);
  return cart;
};

//  Adet güncelle
export const updateQty = (id: number, qty: number) => {
  const cart = getCart().map((p) =>
    p.id === id ? { ...p, qty: Math.max(qty, 1) } : p
  );
  saveCart(cart);
  return cart;
};

//  Sepeti tamamen temizle
export const clearCart = () => {
  saveCart([]);
  return [];
};

//  Toplam adet
export const getCartCount = (): number => {
  return getCart().reduce((acc, item) => acc + item.qty, 0);
};

//  Toplam fiyat
export const getCartTotal = (): number => {
  return getCart().reduce((acc, item) => acc + item.price * item.qty, 0);
};
