"use client";

import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaSave, FaTimes, FaCamera } from "react-icons/fa";

export default function EditProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, []);

  const handleSave = () => {
    const updatedUser = { name, email };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated successfully!");
    window.location.href = "/profile";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-36 pb-12 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gray-300 text-black py-10 px-6 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center">
            <FaUser className="text-gray-400" size={60} />
            <button className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-md transition">
              <FaCamera size={14} />
            </button>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mt-4">Edit Profile</h1>
          <p className="text-sm text-black/80">
            Update your personal information
          </p>
        </div>

        {/* Form */}
        <div className="p-8 space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Full Name
            </label>
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-purple-400 transition">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-purple-400 transition">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-red-500  text-white px-6 py-2.5 rounded-lg shadow hover:opacity-90 transition font-medium"
            >
              <FaSave /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
