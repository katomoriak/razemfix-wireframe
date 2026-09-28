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
    default: "Razemfix | Parafusos e Fixadores Industriais",
    template: "%s | Razemfix",
  },
  description:
    "Distribuidora de parafusos, arruelas e fixadores industriais no Grande ABC e SP. Padrão DIN e ASTM pronta-entrega.",
  keywords: [
    "razemfix",
    "distribuidora de parafusos",
    "fixadores industriais",
    "parafusos e porcas",
    "parafusos inox",
    "parafusos sextavados",
    "chumbadores mecânicos",
    "barras roscadas",
    "arruelas",
    "parafusos grande abc",
    "parafusos santo andré",
    "parafusos são caetano do sul",
    "fixadores são bernardo do campo",
    "parafusos são paulo",
    "fixadores guarulhos",
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
    title: "Razemfix | Parafusos e Fixadores Industriais",
    description:
      "Distribuidora de parafusos, porcas, arruelas e fixadores sob medida e pronta-entrega em SP e Grande ABC.",
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
    title: "Razemfix | Parafusos e Fixadores Industriais",
    description:
      "Distribuidora de parafusos, porcas, arruelas e fixadores sob medida e pronta-entrega em SP e Grande ABC.",
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
      "@type": ["LocalBusiness", "WholesaleStore", "Organization"],
      "@id": "https://www.razemfix.com.br/#organization",
      name: "Razemfix Parafusos e Fixadores Industriais",
      alternateName: [
        "Razemfix",
        "Razemfix Fixadores",
        "Razemfix Fixadores Industriais Ltda",
        "Distribuidora de Parafusos Razemfix",
      ],
      legalName: "Razemfix Fixadores Ltda",
      url: "https://www.razemfix.com.br",
      logo: "https://www.razemfix.com.br/simbolo_favicon.png",
      image: "https://www.razemfix.com.br/fachada.png",
      description:
        "Distribuidora de parafusos, porcas, arruelas e fixadores industriais sob medida no Grande ABC e São Paulo.",
      telephone: "+55-11-4318-2878",
      email: "contato@razemfix.com.br",
      priceRange: "$$",
      paymentAccepted: ["Boleto Bancário Faturado", "PIX", "Cartão de Crédito", "Transferência Bancária"],
      currenciesAccepted: "BRL",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Cavalheiro Ernesto Giuliano, 236",
        addressLocality: "São Caetano do Sul",
        addressRegion: "SP",
        postalCode: "09570-400",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.6335,
        longitude: -46.5615,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:48",
        },
      ],
      areaServed: [
        { "@type": "AdministrativeArea", name: "Grande ABC" },
        { "@type": "City", name: "São Caetano do Sul" },
        { "@type": "City", name: "Santo André" },
        { "@type": "City", name: "São Bernardo do Campo" },
        { "@type": "City", name: "Diadema" },
        { "@type": "City", name: "Mauá" },
        { "@type": "City", name: "Ribeirão Pires" },
        { "@type": "City", name: "Rio Grande da Serra" },
        { "@type": "City", name: "São Paulo" },
        { "@type": "City", name: "Guarulhos" },
        { "@type": "AdministrativeArea", name: "Região Metropolitana de São Paulo" },
        { "@type": "State", name: "São Paulo" },
        { "@type": "Country", name: "Brasil" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Catálogo de Produtos e Serviços de Fixação Razemfix",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Parafusos Industriais",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Sextavado (DIN 931 / DIN 933 / ASTM A325)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Allen Sextavado Interno (DIN 912 / ISO 7380 / DIN 7991)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Francês com Porca (DIN 603)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Autobrocante para Telha e Drywall" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Autoatarraxante (DIN 7981 / DIN 7982)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafusos Especiais Sob Medida e Desenho Técnico" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Parafusos Inox 304 e 316",
            url: "https://www.razemfix.com.br/parafusos/parafusos-inox",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Sextavado Inox 304 (DIN 931 / DIN 933 — A2-70)", url: "https://www.razemfix.com.br/parafusos/parafuso-sextavado/sextavado-inox304" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Sextavado Inox 316 (DIN 931 / DIN 933 — A4-80)", url: "https://www.razemfix.com.br/parafusos/parafuso-sextavado/sextavado-inox316" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Allen Inox 316 Cabeça Abaulada (ISO 7380 — A4)", url: "https://www.razemfix.com.br/parafusos/parafuso-allen/cabeca-abaulada-inox316" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Allen Inox 316 Cabeça Chata (DIN 7991 — A4)", url: "https://www.razemfix.com.br/parafusos/parafuso-allen/cabeca-cabeca-chata-inox316" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Francês Inox 316 (DIN 603 — A4-70)", url: "https://www.razemfix.com.br/parafusos/parafuso-frances/parafuso-inox316" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fixador Especial Inox 304 Sob Medida (AISI 304 / A2)", url: "https://www.razemfix.com.br/parafusos/parafuso-especial/fixador-especial-inox304" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fixador Especial Inox 316 Sob Medida (AISI 316 / A4)", url: "https://www.razemfix.com.br/parafusos/parafuso-especial/fixador-inox316" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Porca Sextavada Inox 304 e 316 (DIN 934 — A2/A4)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Arruela Lisa Inox 304 e 316 (DIN 125 — A2/A4)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rebite de Repuxo Pop em Inox (DIN 7337 — A2)" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Porcas Industriais",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Porca Sextavada (DIN 934 Grau 2, 5 e 8)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Porca Autotravante com Nylon (DIN 985)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Porca Pesada de Alta Temperatura (ASTM A194 2H)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Porca Sextavada em Aço Inox 304 e 316" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Arruelas Técnicas",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Arruela Lisa (DIN 125 / DIN 994 / ASTM F436)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Arruela de Pressão Helicoidal (DIN 127)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Arruelas em Aço Inox 304, Inox 316 e Latão" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Chumbadores e Ancoragem",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Chumbador Mecânico Parabolt de Expansão" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Chumbador CBA com Prisioneiro" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ancoragem Química com Ampola e Resina de Injeção" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Barras Roscadas e Tirantes",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Barra Roscada 1m, 2m e 3m (DIN 975)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Barra Roscada de Alta Resistência (ASTM A193 B7)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Tirantes Roscados Sob Medida" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Rebites, Abraçadeiras e Acessórios",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rebite de Repuxo Pop em Alumínio e Inox (DIN 7337)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Contrapinos e Cupilhas de Travamento (DIN 94)" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Abraçadeiras Tipo D, U, Mangote e Gota" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafuso Olhal e Porca Olhal Forjados (DIN 580 / DIN 582)" } },
            ],
          },
        ],
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+55-11-4318-2878",
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+55-11-93073-6051",
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
        },
      ],
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
        <link rel="icon" href="/simbolo_favicon.png" type="image/png" sizes="any" />
        <link rel="icon" href="/simbolo_favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/simbolo_favicon.png" />
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
