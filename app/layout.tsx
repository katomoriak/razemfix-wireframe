import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Razemfix | Elementos de Fixação Industrial & Segurança Mecânica",
  description: "Distribuidor de parafusos, porcas e arruelas industriais com alta performance e rastreabilidade rigorosa. Atendimento técnico especializado e projetos sob medida.",
  keywords: "parafusos, porcas, arruelas, fixação industrial, ASTM A325, prisioneiros, allen, rebites, razemfiz, B2B fixadores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f17] text-[#f8fafc]">
        <Header />
        {/* Spacer for the fixed header */}
        <div className="h-16 md:h-20" />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
