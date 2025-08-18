"use client";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      {/* Üst Bar */}
      <div className="bg-black text-white text-sm text-center py-1">
        %15 İndirim Fırsatı – Kaçırma!
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            ECOMMERCE
          </Link>

          {/* Menü */}
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/category">Category</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/signup">Signup</Link></li>
          </ul>

          {/* Sağ Taraf */}
          <div className="flex items-center gap-4">
            {/* Dil Seçeneği */}
            <select className="border px-2 py-1 rounded text-sm">
              <option>TR</option>
              <option>EN</option>
            </select>
            <FaHeart className="cursor-pointer text-gray-600" />
            <FaShoppingCart className="cursor-pointer text-gray-600" />
          </div>
        </div>
      </nav>
    </header>
  );
}
