"use client";

import { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const categories = [
  "Phones",
  "Computers",
  "SmartWatch",
  "Camera",
  "HeadPhones",
  "Gaming",
  "Accessories",
  "Tablets",
  "Audio",
  "Wearables",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Token kontrolü (localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setProfileOpen(false);
    window.location.href = "/login";
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Üst Bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-2 relative gap-2">
          <p className="text-center md:text-center text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery -{" "}
            <Link
              href="/sale"
              className="underline underline-offset-2 font-semibold hover:text-yellow-300 transition"
            >
              Shop Now
            </Link>
          </p>

          <div className="flex justify-center md:justify-end w-full md:w-auto">
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
          <div className="text-xl font-bold">
            <Link href="/">ECOMMERCE</Link>
          </div>

          {/* Desktop Menü */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-black transition">
                Category
              </button>
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>

          {/* Sağ Taraf */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Ara..."
                className="pl-10 pr-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-sm"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <FaHeart className="cursor-pointer text-gray-600" />
            <Link href="/cart">
              <FaShoppingCart className="cursor-pointer text-gray-600" />
            </Link>

            {/* Kullanıcı durumu */}
            {loggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-black transition"
                >
                  <FaUserCircle size={24} />
                </button>

                {profileOpen && (
                  <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-200">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700">
                      <Link href="/profile">Profile</Link>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link href="/login" className="text-red-500 font-medium">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menü Butonu */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menü */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col gap-2 px-4 py-2">
              <li>
                <button
                  onClick={() => setMobileCatOpen(!mobileCatOpen)}
                  className="w-full text-left flex justify-between items-center py-2"
                >
                  Category
                </button>
                {mobileCatOpen && (
                  <ul className="flex flex-col gap-1 pl-4">
                    {categories.map((cat) => (
                      <li
                        key={cat}
                        className="py-1 text-gray-700 text-sm hover:bg-gray-100 rounded"
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>

              {/* Mobile kullanıcı durumu */}
              <li className="flex items-center gap-2">
                {loggedIn ? (
                  <div className="relative">
                    <button
                      onClick={() => setProfileOpen(!profileOpen)}
                      className="flex items-center gap-1 text-gray-700 hover:text-black transition"
                    >
                      <FaUserCircle size={24} />
                    </button>

                    {profileOpen && (
                      <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-200">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700">
                          <Link href="/profile">Profile</Link>
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={handleLogout}
                        >
                          Logout
                        </li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href="/login" className="text-red-500 font-medium">
                    Login
                  </Link>
                )}
              </li>
            </ul>

            {/* Mobile Search & Icons */}
            <div className="flex items-center gap-4 px-4 py-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Ara..."
                  className="pl-10 pr-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-sm w-full"
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <FaHeart className="cursor-pointer text-gray-600" />
              <Link href="/cart">
                <FaShoppingCart className="cursor-pointer text-gray-600" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
