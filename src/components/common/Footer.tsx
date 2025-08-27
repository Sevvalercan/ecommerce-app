"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Exclusive */}
        <div>
          <h3 className="text-xl font-bold mb-4">Exclusive</h3>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4 text-sm text-gray-400">
            Get 10% off your first order
          </p>
          <div className="flex border border-gray-600 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 bg-black text-white placeholder:text-gray-400 w-full focus:outline-none"
            />
            <button className="px-4 bg-white text-black hover:bg-gray-200 transition">
              →
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <p>Diyarbakır / Turkey</p>
          <p className="mt-2">ecommerce@gmail.com</p>
          <p>+444******* </p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-xl font-bold mb-4">Account</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/admin">My Account</Link>
            </li>
            <li>
              <Link href="/login">Login / Register</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/">Shop</Link>
            </li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms Of Use</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-xl font-bold mb-4">Download App</h3>
          <p className="text-gray-400 text-sm mb-4">
            Save $3 with App New User Only
          </p>
          <div className="flex items-center gap-2 mb-4">
            <img src="/QrCode.png" alt="QR Code" className="w-20 h-20" />
            <div className="flex flex-col gap-2">
              <img src="/GooglePlay.png" alt="Google Play" className="h-10" />
              <img src="/AppStore.png" alt="App Store" className="h-10" />
            </div>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="/" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="/" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="/" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
        © Copyright 2025. All rights reserved.
      </div>
    </footer>
  );
}
