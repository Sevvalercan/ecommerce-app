"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        {/* Sol - İletişim Bilgileri */}
        <div className="bg-gray-100 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Bize Ulaşın</h2>
          <p className="text-gray-600 mb-8">
            Her türlü soru, öneri veya iş birliği için bizimle iletişime geçin.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-600 text-2xl" />
              <span className="text-gray-700">Diyarbakır, Türkiye</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-red-600 text-2xl" />
              <span className="text-gray-700">+90 444 *** ** **</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-600 text-2xl" />
              <span className="text-gray-700">ecommerce@ecommerce.com</span>
            </div>
          </div>
        </div>

        {/* Sağ - İletişim Formu */}
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Mesaj Gönder</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Adınız"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
            />
            <input
              type="email"
              placeholder="E-posta Adresiniz"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
            />
            <textarea
              placeholder="Mesajınız"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-red-500 outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
