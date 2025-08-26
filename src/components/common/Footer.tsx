"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive */}
        <div>
          <h3 className="text-xl font-bold mb-4">Exclusive</h3>
          <p className="mb-4">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex border border-amber-50 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email "
              className="px-3 py-2 rounded-l-md text-white w-full"
            />
            <button className=" px-4 ">→</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <p>Diyarbakır / Turkey</p>
          <p className="mt-2">ecommerce@gmail.com</p>
          <p>+444*******</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-xl font-bold mb-4">Account</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Login / Register</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
          <div className="flex gap-4">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
