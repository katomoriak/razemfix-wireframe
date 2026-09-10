import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import RestrictedNavigationToast from "./components/RestrictedNavigationToast";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.razemfix.com.br"),
  title: {
    default: "Razemfix | Fábrica e Fabricante de Parafusos e Fixadores Industriais",
    template: "%s | Razemfix Fixadores Industriais",
  },
  description:
    "A Razemfix é fábrica e indústria fabricante de parafusos, porcas, arruelas e fixadores industriais de alto desempenho. Fornecemos soluções sob medida, fixação pesada e normas DIN, ISO e ASTM para todo o Brasil.",
  keywords: [
    "razemfix",
    "fabrica de parafusos",
    "fixadores",
    "industria de parafusos",
    "fabricante de parafusos",
    "parafusos e porcas",
    "fabricantes de parafusos",
    "industrias de parafusos",
    "fixação parafusos",
    "fabricante parafusos",
    "fixadores industriais",
    "parafusos de aço",
    "parafusos inox",
    "parafusos sextavados",
    "chumbadores mecânicos",
    "barras roscadas",
    "arruelas",
  ],
  alternates: {
    canonical: "https://www.razemfix.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Razemfix | Fábrica e Fabricante de Parafusos e Fixadores Industriais",
    description:
      "Fábrica e indústria de fixadores industriais: parafusos, porcas, arruelas e fixação sob medida com certificação e alta resistência mecânica.",
    url: "https://www.razemfix.com.br",
    siteName: "Razemfix Parafusos e Fixadores Industriais",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/razemfix_logotipocompleto.png",
        width: 1200,
        height: 630,
        alt: "Razemfix Parafusos e Fixadores Industriais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Razemfix | Fábrica e Fabricante de Parafusos e Fixadores Industriais",
    description:
      "Fábrica e indústria de fixadores industriais: parafusos, porcas, arruelas e fixação sob medida com padrão de qualidade e pronta-entrega.",
    images: ["/razemfix_logotipocompleto.png"],
  },
  icons: {
    icon: [
      { url: "/simbolo_favicon.svg", type: "image/svg+xml" },
      { url: "/simbolo_favicon.png", type: "image/png" },
    ],
    shortcut: "/simbolo_favicon.png",
    apple: "/simbolo_favicon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.razemfix.com.br/#organization",
      name: "Razemfix Fixadores Industriais",
      alternateName: ["Razemfix", "Razemfix Parafusos", "Fábrica de Parafusos Razemfix", "Indústria de Parafusos Razemfix"],
      url: "https://www.razemfix.com.br",
      logo: "https://www.razemfix.com.br/simbolo_favicon.png",
      description: "Fábrica e indústria fabricante de parafusos, porcas, arruelas e fixadores industriais de alta resistência.",
      telephone: "+55-11-93073-6051",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-11-93073-6051",
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "BR",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.razemfix.com.br/#website",
      url: "https://www.razemfix.com.br",
      name: "Razemfix",
      publisher: {
        "@id": "https://www.razemfix.com.br/#organization",
      },
      inLanguage: "pt-BR",
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header />
        {/* Spacer for the fixed header */}
        <div className="h-16 md:h-20" />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <RestrictedNavigationToast />
        <SpeedInsights />
      </body>
    </html>
  );
}
