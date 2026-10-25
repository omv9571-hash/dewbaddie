import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "DewBaddie — Skin so dewy it’s rude",
  description: "A beauty, personal style, and college-lifestyle destination for Gen Z women. Honest editorial guides, routine breakdowns, and realistic inspiration.",
  keywords: ["beauty", "Gen Z", "college style", "dewy skin", "lifestyle", "trending ingredients", "personal style"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FFFAFC] text-[#2A0F1E] flex flex-col font-sans selection:bg-[#FFE9F1] selection:text-[#FF2E88]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
