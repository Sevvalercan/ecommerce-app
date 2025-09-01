"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { users as usersData, User } from "@/data/users"; // users veri dosyası

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>(usersData);

  const handleEdit = (id: number) => toast("Edit user id: " + id);
  const handleDelete = (id: number) => {
    if (confirm("Kullanıcıyı silmek istediğine emin misin?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
      toast.success("Kullanıcı silindi!");
    }
  };

  return (
    <div className="min-h-screen p-8 ">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">Admin - Kullanıcılar</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600">ID</th>
              <th className="py-3 px-4 text-left text-gray-600">Ad Soyad</th>
              <th className="py-3 px-4 text-left text-gray-600">Email</th>
              <th className="py-3 px-4 text-left text-gray-600">Rol</th>
              <th className="py-3 px-4 text-left text-gray-600">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-100  hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{user.id}</td>
                <td className="py-3 px-4 font-medium">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.role}</td>
                <td className="py-3 px-4 space-x-2">
                  <button
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                    onClick={() => handleEdit(user.id)}
                  >
                    Düzenle
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(user.id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Kullanıcı bulunamadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
