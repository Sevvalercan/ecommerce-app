"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const success = await login(data.email, data.password);
    if (success) {
      toast.success("Login successful!");
      setTimeout(() => {
        window.location.href = "/"; // Ana sayfaya yönlendir
      }, 1000);
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex">
      <Toaster />
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
        <div className="relative w-full h-full">
          <Image src="/loginImage.png" alt="Login Visual" fill className="object-cover" />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6">Login to your account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-lg font-medium hover:bg-red-600 transition"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-red-500 font-medium">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
