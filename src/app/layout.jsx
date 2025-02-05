"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Durasi animasi scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Fungsi easing
      smooth: true, // Mengaktifkan smooth scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup saat unmount
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
