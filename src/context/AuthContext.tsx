"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { getToken, setToken, removeToken, isTokenExpired } from "@/utils/auth";

type User = { email: string };

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token && !isTokenExpired(token)) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser({ email: payload.email });
      } catch (err) {
        console.error("Invalid token", err);
        removeToken();
      }
    } else {
      removeToken();
    }
  }, []);

  const login = async (email: string, password: string) => {
    if (email && password) {
      const fakeToken = generateJWT(email);
      setToken(fakeToken);
      setUser({ email });
      router.push("/profile"); // ✅ login sonrası yönlendirme
      return true;
    }
    return false;
  };

  const signup = async (email: string, password: string) => {
    return login(email, password);
  };

  const logout = () => {
    removeToken();
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Fake JWT
function generateJWT(email: string) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = btoa(
    JSON.stringify({
      email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60, //  exp artık saniye cinsinden
    })
  );
  const signature = btoa("secret");
  return `${header}.${payload}.${signature}`;
}
