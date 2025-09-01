export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const users: User[] = [
  { id: 1, name: "Şevval Ercan", email: "sevval@example.com", role: "Admin" },
  { id: 2, name: "Bünyamin Uçar", email: "bünyamin@example.com", role: "User" },
    { id: 3, name: "Ali Veli", email: "ali@example.com", role: "User" },

];
