// src/app/admin/page.tsx
"use client";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-gray-500">10,500 Users</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p className="text-gray-500">1,000,000 Products</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p className="text-gray-500">5,000 Orders</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-gray-500">$2,300,000</p>
        </div>
      </div>
    </div>
  );
}
