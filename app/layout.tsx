import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import RestrictedNavigationToast from "./components/RestrictedNavigationToast";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Razemfix | Parafusos e Fixadores de Alta Qualidade",
  description: "A Razemfix é fabricante de parafusos e fixadores industriais de alto desempenho. Fornecemos parafusos de aço, parafusos inox, parafusos sextavados e fixadores de alta resistência com certificação ISO 9001.",
  keywords: "parafusos, parafusos inox, parafusos de aço, parafusos sextavados, fixadores industriais, fixadores de alta resistencia, fabricante de parafusos, parafuso sob medida, parafuso personalizado, fixadores personalizados, razemfix, parafusos e fixadores de alta qualidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header />
        {/* Spacer for the fixed header */}
        <div className="h-16 md:h-20" />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <RestrictedNavigationToast />
      </body>
    </html>
  );
}
