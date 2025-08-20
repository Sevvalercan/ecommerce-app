"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Sol taraf görsel */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
        <div className="relative w-full h-full">
          <Image
            src="/loginImage.png"
            alt="Signup Visual"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Sağ taraf form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6">Create an account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-lg font-medium hover:bg-red-600 transition"
            >
              Create Account
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-red-500 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
