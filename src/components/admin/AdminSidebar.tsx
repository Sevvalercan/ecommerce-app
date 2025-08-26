// components/AdminSidebar.tsx
"use client";

import Link from "next/link";
import { FaTachometerAlt, FaUsers, FaBox, FaSignOutAlt } from "react-icons/fa";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 flex flex-col justify-between">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="flex flex-col gap-3">
          <Link
            href="/admin"
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition"
          >
            <FaTachometerAlt /> Dashboard
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition"
          >
            <FaUsers /> Users
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition"
          >
            <FaBox /> Products
          </Link>
        </nav>
      </div>

      {/* Logout */}
      <Link
        href="/logout"
        className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition"
      >
        <FaSignOutAlt /> Logout
      </Link>
    </aside>
  );
}
