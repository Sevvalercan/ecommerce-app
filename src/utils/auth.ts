
// Token al
export function getToken(): string | null {
  if (typeof window === "undefined") return null; // SSR kontrolü
  return localStorage.getItem("token");
}

// Token set et
export function setToken(token: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", token);
}

// Token sil
export function removeToken(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
}

// Token geçerliliğini kontrol et (fake JWT)
export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    // JWT exp saniye cinsinden, Date.now() milis cinsinde
    return Date.now() > payload.exp * 1000;
  } catch {
    return true;
  }
}
