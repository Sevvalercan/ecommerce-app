// app/not-found.tsx
"use client";
import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Sayfa bulunamadı!</p>
      <Link href="/" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition">
        Anasayfaya Dön
      </Link>
    </div>
  );
}
