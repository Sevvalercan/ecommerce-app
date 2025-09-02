"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { User, users as usersData } from "@/data/users";
import { AdminTable, Column } from "@/components/admin/AdminTable";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>(usersData);

  const handleEdit = (id: number) => toast("Edit user id: " + id);
  const handleDelete = (id: number) => {
    if (confirm("Kullanıcıyı silmek istediğine emin misin?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
      toast.success("Kullanıcı silindi!");
    }
  };

  const columns: Column<User>[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Ad Soyad" },
    { key: "email", label: "Email" },
    { key: "role", label: "Rol" },
  ];

  return (
    <>
      <Toaster />
      <AdminTable
        title="Admin - Kullanıcılar"
        data={users}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage="Kullanıcı bulunamadı"
      />
    </>
  );
}
