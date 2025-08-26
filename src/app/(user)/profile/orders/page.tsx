"use client";

import { FaBox, FaCalendarAlt, FaMoneyBill, FaEye } from "react-icons/fa";

export default function MyOrdersPage() {
  const orders = [
    {
      id: "ORD-1023",
      date: "2025-08-20",
      total: "125.00₺",
      status: "Delivered",
    },
    {
      id: "ORD-1024",
      date: "2025-08-22",
      total: "59.00₺",
      status: "Processing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-36 pb-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gray-300 text-black py-10 px-6 flex flex-col items-center">
          <FaBox size={50} className="text-gray-600" />
          <h1 className="text-2xl md:text-3xl font-bold mt-3">My Orders</h1>
          <p className="text-sm text-black/70">
            Track and manage all your orders here
          </p>
        </div>

        {/* Orders List */}
        <div className="p-8 space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
            >
              <div>
                <p className="font-semibold text-gray-800 flex items-center gap-2">
                  <FaBox className="text-red-500" /> {order.id}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <FaCalendarAlt className="text-gray-400" /> {order.date}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaMoneyBill className="text-green-500" /> {order.total}
                </p>
                <span
                  className={`inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg shadow transition text-sm">
                <FaEye /> View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
