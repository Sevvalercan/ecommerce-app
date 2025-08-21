"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();

  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return (
      <div className="flex h-screen">
        <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-6">Sayfa Bulunamadı!</p>
          <Link
            href="/admin"
            className="px-6 py-3 bg-red-600 text-white rounded-lg"
          >
            Admin Anasayfaya Dön
          </Link>
        </main>
      </div>
    );
  }

  // User/Global 404
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
      <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Sayfa Bulunamadı!</p>
      <Link href="/" className="px-6 py-3 bg-red-600 text-white rounded-lg">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
