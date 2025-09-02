"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
};

export type AdminTableProps<T extends { id: number }> = {
  title: string;
  data: T[];
  columns: Column<T>[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  emptyMessage?: string;
};

export function AdminTable<T extends { id: number }>({
  title,
  data,
  columns,
  onEdit,
  onDelete,
  emptyMessage = "Kayıt bulunamadı",
}: AdminTableProps<T>) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={String(col.key)}>{col.label}</TableHead>
              ))}
              <TableHead>İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="text-center text-gray-500 py-4">
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              data.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((col) => (
                    <TableCell key={String(col.key)}>
                      {col.render ? col.render(row) : String(row[col.key])}
                    </TableCell>
                  ))}
                  <TableCell className="space-x-2">
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                      onClick={() => onEdit(row.id)}
                    >
                      Düzenle
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      onClick={() => onDelete(row.id)}
                    >
                      Sil
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
