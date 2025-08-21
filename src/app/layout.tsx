import "./globals.css";
import { Inter, Playfair_Display, Open_Sans } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${playfair.variable} ${openSans.variable}`}>
      <body className={inter.className}>
        <Suspense>
          <Toaster position="top-right" />
          {children} 
        </Suspense>
      </body>
    </html>
  );
}
