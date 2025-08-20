"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth"; // AuthContext hook

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const { signup } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Basit email regex kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    const success = await signup(data.email, data.password);
    if (success) {
      toast.success("Signup successful!");
      setTimeout(() => {
        window.location.href = "/"; // Ana sayfaya yönlendir
      }, 1500);
    } else {
      toast.error("Signup failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex">
      <Toaster />
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
        <div className="relative w-full h-full">
          <Image src="/loginImage.png" alt="Signup Visual" fill className="object-cover" />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6">Create an account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Email or Phone Number"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

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
