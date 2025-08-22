"use client";

import { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaBox,
  FaMapMarkerAlt,
  FaEdit,
} from "react-icons/fa";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  useEffect(() => {
    // Burada API'den veya localStorage'dan user verisini alabilirsin
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser({ name: "John Doe", email: "johndoe@example.com" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <FaUserCircle className="text-gray-400" size={80} />
          <h2 className="text-2xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/profile/edit"
            className="flex items-center gap-3 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 px-5 py-3 rounded-xl shadow-sm transition"
          >
            <FaEdit /> Edit Profile
          </Link>
          <Link
            href="/orders"
            className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 text-blue-700 px-5 py-3 rounded-xl shadow-sm transition"
          >
            <FaBox /> My Orders
          </Link>
          <Link
            href="/addresses"
            className="flex items-center gap-3 bg-green-50 hover:bg-green-100 text-green-700 px-5 py-3 rounded-xl shadow-sm transition"
          >
            <FaMapMarkerAlt /> My Addresses
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 bg-red-50 hover:bg-red-100 text-red-600 px-5 py-3 rounded-xl shadow-sm transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
