import "../globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata = {
  title: "E-Commerce Home",
  description: "Figma uyumlu e-ticaret ana sayfa",
};

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white text-gray-900">
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </div>
  );
}
