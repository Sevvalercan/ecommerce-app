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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-36 pb-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl md:p-12 border border-gray-100">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-gradient-to-tr from-blue-100 to-purple-100 p-3 rounded-full">
            <FaUserCircle className="text-gray-500" size={90} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {user?.name}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Actions */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Link
            href="/profile/edit"
            className="flex items-center gap-3 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
          >
            <FaEdit className="text-xl" />{" "}
            <span className="font-medium">Edit Profile</span>
          </Link>

          <Link
            href="/profile/orders"
            className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 text-blue-700 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
          >
            <FaBox className="text-xl" />{" "}
            <span className="font-medium">My Orders</span>
          </Link>

          <Link
            href="/profile/addresses"
            className="flex items-center gap-3 bg-green-50 hover:bg-green-100 text-green-700 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
          >
            <FaMapMarkerAlt className="text-xl" />{" "}
            <span className="font-medium">My Addresses</span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 bg-red-50 hover:bg-red-100 text-red-600 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
          >
            <FaSignOutAlt className="text-xl" />{" "}
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
