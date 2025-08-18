// app/layout.tsx
import '../globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'E-Commerce Home',
  description: 'Figma uyumlu e-ticaret ana sayfa',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
