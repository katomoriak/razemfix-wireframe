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
            url: "https://www.razemfix.com.br/produtos",
            itemListElement: [
              { "@type": "Offer", name: "Parafuso Sextavado (DIN 931 / DIN 933 / ASTM A325)", description: "Parafuso sextavado em aço carbono e inox, normas DIN 931, DIN 933 e ASTM A325, pronta-entrega no Grande ABC e SP.", url: "https://www.razemfix.com.br/parafusos/parafuso-sextavado.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Parafuso Allen Sextavado Interno (DIN 912 / ISO 7380 / DIN 7991)", description: "Parafuso allen sextavado interno grau 12.9 e inox, normas DIN 912, ISO 7380 e DIN 7991, para uso industrial e mecânico.", url: "https://www.razemfix.com.br/parafusos/parafuso-allen.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Parafuso Francês com Porca (DIN 603)", description: "Parafuso francês com porca DIN 603 em aço zincado e inox 316, para montagens em madeira e estruturas metálicas.", url: "https://www.razemfix.com.br/parafusos/parafuso-frances.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Parafuso Autobrocante para Telha e Drywall", description: "Parafuso autobrocante com ponta broca para fixação em telha metálica, drywall e estruturas de aço leve.", url: "https://www.razemfix.com.br/parafusos/parafuso-autobrocante.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Parafuso Autoatarraxante (DIN 7981 / DIN 7982)", description: "Parafuso autoatarraxante cabeça panela e chata, normas DIN 7981 e DIN 7982, para chapas metálicas e termoplásticos.", url: "https://www.razemfix.com.br/parafusos/parafuso-autoatarraxante.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Parafusos Especiais Sob Medida e Desenho Técnico", description: "Fabricação de parafusos especiais conforme desenho técnico e amostra, em aço carbono, inox e ligas especiais.", url: "https://www.razemfix.com.br/parafusos/parafuso-especial.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Parafusos Inox 304 e 316",
            url: "https://www.razemfix.com.br/parafusos/parafusos-inox",
            itemListElement: [
              { "@type": "Offer", name: "Parafuso Sextavado Inox 304 (DIN 931 / DIN 933 — A2-70)", description: "Parafuso sextavado em aço inoxidável AISI 304, grau A2-70, normas DIN 931 e DIN 933, pronta-entrega no ABC e SP.", url: "https://www.razemfix.com.br/parafusos/parafuso-sextavado/sextavado-inox304", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Parafuso Sextavado Inox 316 (DIN 931 / DIN 933 — A4-80)", description: "Parafuso sextavado em aço inoxidável AISI 316 com molibdênio, grau A4-80, para ambientes salinos e químicos.", url: "https://www.razemfix.com.br/parafusos/parafuso-sextavado/sextavado-inox316", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Parafuso Allen Inox 316 Cabeça Abaulada (ISO 7380 — A4)", description: "Parafuso allen cabeça abaulada inox 316, norma ISO 7380, grau A4, para montagens em equipamentos expostos à corrosão.", url: "https://www.razemfix.com.br/parafusos/parafuso-allen/cabeca-abaulada-inox316", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Parafuso Allen Inox 316 Cabeça Chata (DIN 7991 — A4)", description: "Parafuso allen cabeça chata inox 316 A4, norma DIN 7991, para fixações rasantes em aço inox e alumínio.", url: "https://www.razemfix.com.br/parafusos/parafuso-allen/cabeca-cabeca-chata-inox316", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Parafuso Francês Inox 316 (DIN 603 — A4-70)", description: "Parafuso francês inox 316 A4-70, norma DIN 603, para fixações em ambientes úmidos, marinhos e químicos.", url: "https://www.razemfix.com.br/parafusos/parafuso-frances/parafuso-inox316", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Fixador Especial Inox 304 Sob Medida (AISI 304 / A2)", description: "Fixador especial em aço inoxidável 304 fabricado sob medida para indústrias alimentícia, farmacêutica e química.", url: "https://www.razemfix.com.br/parafusos/parafuso-especial/fixador-especial-inox304", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Fixador Especial Inox 316 Sob Medida (AISI 316 / A4)", description: "Fixador especial em aço inoxidável 316 com molibdênio, sob medida para petroquímica, naval e offshore.", url: "https://www.razemfix.com.br/parafusos/parafuso-especial/fixador-inox316", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Porca Sextavada Inox 304 e 316 (DIN 934 — A2/A4)", description: "Porca sextavada em aço inoxidável 304 e 316, norma DIN 934, graus A2 e A4, para uso com parafusos inox.", url: "https://www.razemfix.com.br/parafusos/parafusos-inox", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Arruela Lisa Inox 304 e 316 (DIN 125 — A2/A4)", description: "Arruela lisa em aço inoxidável 304 e 316, norma DIN 125, graus A2 e A4, para complementar fixações inox.", url: "https://www.razemfix.com.br/parafusos/parafusos-inox", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Rebite de Repuxo Pop em Inox (DIN 7337 — A2)", description: "Rebite de repuxo pop em aço inoxidável A2, norma DIN 7337, para fixações em chapas expostas à corrosão.", url: "https://www.razemfix.com.br/parafusos/parafusos-inox", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Porcas Industriais",
            url: "https://www.razemfix.com.br/elementos-fixacao/porca-sextavada.html",
            itemListElement: [
              { "@type": "Offer", name: "Porca Sextavada (DIN 934 Grau 2, 5 e 8)", description: "Porca sextavada DIN 934 em aço carbono graus 2, 5 e 8 e aço inox, pronta-entrega no Grande ABC e SP.", url: "https://www.razemfix.com.br/elementos-fixacao/porca-sextavada.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Porca Autotravante com Nylon (DIN 985)", description: "Porca autotravante com inserto de nylon DIN 985 para travamento seguro em aplicações com vibração.", url: "https://www.razemfix.com.br/elementos-fixacao/porca-autotravante.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Porca Pesada de Alta Temperatura (ASTM A194 2H)", description: "Porca pesada ASTM A194 2H para aplicações de alta temperatura e pressão em caldeiras e vasos de pressão.", url: "https://www.razemfix.com.br/elementos-fixacao/porca-sextavada.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Porca Sextavada em Aço Inox 304 e 316", description: "Porca sextavada em aço inoxidável AISI 304 e AISI 316, para fixações inox em ambientes corrosivos.", url: "https://www.razemfix.com.br/elementos-fixacao/porca-sextavada.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Arruelas Técnicas",
            url: "https://www.razemfix.com.br/elementos-fixacao/arruela-lisa.html",
            itemListElement: [
              { "@type": "Offer", name: "Arruela Lisa (DIN 125 / DIN 994 / ASTM F436)", description: "Arruela lisa plana DIN 125, DIN 994 e ASTM F436, em aço zincado e inox, para distribuição de carga.", url: "https://www.razemfix.com.br/elementos-fixacao/arruela-lisa.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Arruela de Pressão Helicoidal (DIN 127)", description: "Arruela de pressão helicoidal DIN 127 em aço mola e inox, para travamento contra afrouxamento por vibração.", url: "https://www.razemfix.com.br/elementos-fixacao/arruela-pressao-inox.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Arruelas em Aço Inox 304, Inox 316 e Latão", description: "Arruelas técnicas em aço inoxidável 304, 316 e latão para uso em ambientes corrosivos e alta temperatura.", url: "https://www.razemfix.com.br/elementos-fixacao/arruela-pressao-inox.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Chumbadores e Ancoragem",
            url: "https://www.razemfix.com.br/elementos-fixacao/chumbadores.html",
            itemListElement: [
              { "@type": "Offer", name: "Chumbador Mecânico Parabolt de Expansão", description: "Chumbador mecânico tipo parabolt de expansão para fixação em concreto, alvenaria e pedra.", url: "https://www.razemfix.com.br/elementos-fixacao/chumbadores.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Chumbador CBA com Prisioneiro", description: "Chumbador CBA com prisioneiro rosqueado para ancoragem estrutural pesada em concreto e pedra.", url: "https://www.razemfix.com.br/elementos-fixacao/chumbadores.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Ancoragem Química com Ampola e Resina de Injeção", description: "Ancoragem química com ampola de resina epóxi e resina de injeção para fixações de alta resistência em concreto.", url: "https://www.razemfix.com.br/elementos-fixacao/chumbadores.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Barras Roscadas e Tirantes",
            url: "https://www.razemfix.com.br/elementos-fixacao/barras-roscadas.html",
            itemListElement: [
              { "@type": "Offer", name: "Barra Roscada 1m, 2m e 3m (DIN 975)", description: "Barra roscada DIN 975 em aço carbono classe 4.8 e 8.8, nos comprimentos 1m, 2m e 3m, pronta-entrega.", url: "https://www.razemfix.com.br/elementos-fixacao/barras-roscadas.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Barra Roscada de Alta Resistência (ASTM A193 B7)", description: "Barra roscada de alta resistência ASTM A193 B7 em aço cromo-molibdênio para flanges, vasos de pressão e caldeiras.", url: "https://www.razemfix.com.br/elementos-fixacao/barras-roscadas.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Tirantes Roscados Sob Medida", description: "Tirantes roscados especiais fabricados sob medida para estruturas metálicas, pontes e equipamentos industriais.", url: "https://www.razemfix.com.br/elementos-fixacao/barras-roscadas.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Rebites, Abraçadeiras e Acessórios",
            url: "https://www.razemfix.com.br/elementos-fixacao/rebites.html",
            itemListElement: [
              { "@type": "Offer", name: "Rebite de Repuxo Pop em Alumínio e Inox (DIN 7337)", description: "Rebite de repuxo pop em alumínio e aço inox A2, norma DIN 7337, para fixação de chapas e perfis sem acesso reverso.", url: "https://www.razemfix.com.br/elementos-fixacao/rebites.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Contrapinos e Cupilhas de Travamento (DIN 94)", description: "Contrapinos e cupilhas de travamento DIN 94 em aço e inox para travas de eixos, pinos e fusos.", url: "https://www.razemfix.com.br/elementos-fixacao/rebites.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Abraçadeiras Tipo D, U, Mangote e Gota", description: "Abraçadeiras metálicas tipos D, U, mangote e gota em aço zincado para fixação de tubulações e cabos.", url: "https://www.razemfix.com.br/elementos-fixacao/rebites.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
              { "@type": "Offer", name: "Parafuso Olhal e Porca Olhal Forjados (DIN 580 / DIN 582)", description: "Parafuso olhal e porca olhal forjados DIN 580 e DIN 582 para içamento de cargas e movimentação de equipamentos.", url: "https://www.razemfix.com.br/elementos-fixacao/rebites.html", seller: { "@id": "https://www.razemfix.com.br/#organization" } },
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
