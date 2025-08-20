// Token ve kullanıcı bilgisi yönetimi
export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

export function setToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", token);
}

export function removeToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
}

// Token geçerlilik kontrolü (fake JWT)
export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return Date.now() > payload.exp;
  } catch {
    return true;
  }
}
