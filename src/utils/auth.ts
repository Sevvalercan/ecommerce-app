export function getToken() {
  return localStorage.getItem("token");
}
export function setToken(token: string) {
  localStorage.setItem("token", token);
}
export function removeToken() {
  localStorage.removeItem("token");
}
export function isTokenExpired(token: string) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return Date.now() > payload.exp;
  } catch {
    return true;
  }
}
