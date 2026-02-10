import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC, Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const maShanZheng = Ma_Shan_Zheng({
  variable: "--font-calligraphy",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "周易学习 - 探索易经智慧",
  description: "周易学习应用，支持摇卦、查卦、分享功能。探索六十四卦的智慧，了解卦辞、爻辞原文及白话解释。",
  keywords: ["周易", "易经", "六十四卦", "摇卦", "卦辞", "爻辞"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${notoSerifSC.variable} ${notoSansSC.variable} ${maShanZheng.variable} font-sans antialiased bg-stone-50 text-stone-800 min-h-screen`}
      >
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
