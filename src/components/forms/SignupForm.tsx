"use client";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await login(email, password);
    if (ok) router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto flex flex-col gap-2">
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifre" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Giriş Yap</button>
    </form>
  );
}
