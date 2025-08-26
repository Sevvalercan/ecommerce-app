"use client";

import { FaMapMarkerAlt, FaEdit, FaTrash } from "react-icons/fa";

export default function MyAddressesPage() {
  const addresses = [
    {
      id: 1,
      title: "Home",
      details: "123 Main Street, New York, USA",
    },
    {
      id: 2,
      title: "Work",
      details: "456 Office Road, San Francisco, USA",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-36 pb-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gray-300 text-black py-10 px-6 flex flex-col items-center">
          <FaMapMarkerAlt size={50} className="text-gray-600" />
          <h1 className="text-2xl md:text-3xl font-bold mt-3">My Addresses</h1>
          <p className="text-sm text-black/70">
            Manage your saved addresses here
          </p>
        </div>

        {/* Addresses List */}
        <div className="p-8 space-y-5">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
            >
              <div>
                <p className="font-semibold text-gray-800 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" /> {addr.title}
                </p>
                <p className="text-sm text-gray-600 mt-1">{addr.details}</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition text-sm">
                  <FaEdit /> Edit
                </button>
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition text-sm">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
