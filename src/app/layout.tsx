import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GROSS Parts — Spare Parts Ordering",
  description:
    "Order original spare parts for your GROSS industrial machine. Scan, click, order — in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
