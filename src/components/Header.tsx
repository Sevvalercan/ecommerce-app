"use client";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      {/* Üst Bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center py-2 relative">
          {/* Kampanya Yazısı */}
          <p className="text-center">
            Summer Sale For All Swim Suits And Free Express Delivery -{" "}
            <Link
              href="/sale"
              className="underline underline-offset-2 font-semibold hover:text-yellow-300 transition"
            >
              Shop Now
            </Link>
          </p>

          {/* Dil Seçeneği */}
          <div className="absolute right-4">
            <select className="bg-gray border border-gray-600 text-white px-3 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option value="en">ENGLISH</option>
              <option value="tr">TÜRKÇE</option>
            </select>
          </div>
        </div>
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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/category">Category</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/signup">Signup</Link>
            </li>
          </ul>

          {/* Sağ Taraf */}
          <div className="flex items-center gap-4">
            <FaHeart className="cursor-pointer text-gray-600" />
            <FaShoppingCart className="cursor-pointer text-gray-600" />
          </div>
        </div>
      </nav>
    </header>
  );
}
