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
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-sextavado.html", itemOffered: { "@type": "Product", name: "Parafuso Sextavado (DIN 931 / DIN 933 / ASTM A325)", description: "Parafuso sextavado em aço carbono e inox, normas DIN 931, DIN 933 e ASTM A325, pronta-entrega no Grande ABC e SP.", image: "https://www.razemfix.com.br/produtos/parafuso-sextavado.jpeg", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-allen.html", itemOffered: { "@type": "Product", name: "Parafuso Allen Sextavado Interno (DIN 912 / ISO 7380 / DIN 7991)", description: "Parafuso allen sextavado interno grau 12.9 e inox, normas DIN 912, ISO 7380 e DIN 7991, para uso industrial e mecânico.", image: "https://www.razemfix.com.br/produtos/parafuso_sextavado_interno_-cabeca_cilindrica-.jpeg", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-frances.html", itemOffered: { "@type": "Product", name: "Parafuso Francês com Porca (DIN 603)", description: "Parafuso francês com porca DIN 603 em aço zincado e inox 316, para montagens em madeira e estruturas metálicas.", image: "https://www.razemfix.com.br/produtos/parafuso-frances.jpeg", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-autobrocante.html", itemOffered: { "@type": "Product", name: "Parafuso Autobrocante para Telha e Drywall", description: "Parafuso autobrocante com ponta broca para fixação em telha metálica, drywall e estruturas de aço leve.", image: "https://www.razemfix.com.br/produtos/parafuso_sextavado_brocante.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-autoatarraxante.html", itemOffered: { "@type": "Product", name: "Parafuso Autoatarraxante (DIN 7981 / DIN 7982)", description: "Parafuso autoatarraxante cabeça panela e chata, normas DIN 7981 e DIN 7982, para chapas metálicas e termoplásticos.", image: "https://www.razemfix.com.br/produtos/parafuso_auto_atarraxante_-cabeca_panela-.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-especial.html", itemOffered: { "@type": "Product", name: "Parafusos Especiais Sob Medida e Desenho Técnico", description: "Fabricação de parafusos especiais conforme desenho técnico e amostra, em aço carbono, inox e ligas especiais.", image: "https://www.razemfix.com.br/produtos/parafuso-sextavado.jpeg", brand: { "@type": "Brand", name: "Razemfix" } } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Parafusos Inox 304 e 316",
            url: "https://www.razemfix.com.br/parafusos/parafusos-inox",
            itemListElement: [
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-sextavado/sextavado-inox304", itemOffered: { "@type": "Product", name: "Parafuso Sextavado Inox 304 (DIN 931 / DIN 933 — A2-70)", description: "Parafuso sextavado em aço inoxidável AISI 304, grau A2-70, normas DIN 931 e DIN 933, pronta-entrega no ABC e SP.", image: "https://www.razemfix.com.br/produtos/parafuso-sextavado.jpeg", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-sextavado/sextavado-inox316", itemOffered: { "@type": "Product", name: "Parafuso Sextavado Inox 316 (DIN 931 / DIN 933 — A4-80)", description: "Parafuso sextavado em aço inoxidável AISI 316 com molibdênio, grau A4-80, para ambientes salinos e químicos.", image: "https://www.razemfix.com.br/produtos/parafuso-sextavado.jpeg", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-allen/cabeca-abaulada-inox316", itemOffered: { "@type": "Product", name: "Parafuso Allen Inox 316 Cabeça Abaulada (ISO 7380 — A4)", description: "Parafuso allen cabeça abaulada inox 316, norma ISO 7380, grau A4, para montagens em equipamentos expostos à corrosão.", image: "https://www.razemfix.com.br/produtos/parafuso_sextavado_interno_-cabeca_abaulada-.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-allen/cabeca-cabeca-chata-inox316", itemOffered: { "@type": "Product", name: "Parafuso Allen Inox 316 Cabeça Chata (DIN 7991 — A4)", description: "Parafuso allen cabeça chata inox 316 A4, norma DIN 7991, para fixações rasantes em aço inox e alumínio.", image: "https://www.razemfix.com.br/produtos/parafuso_sextavado_interno_-cabeca_chata-.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-frances/parafuso-inox316", itemOffered: { "@type": "Product", name: "Parafuso Francês Inox 316 (DIN 603 — A4-70)", description: "Parafuso francês inox 316 A4-70, norma DIN 603, para fixações em ambientes úmidos, marinhos e químicos.", image: "https://www.razemfix.com.br/produtos/parafuso-frances.jpeg", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-especial/fixador-especial-inox304", itemOffered: { "@type": "Product", name: "Fixador Especial Inox 304 Sob Medida (AISI 304 / A2)", description: "Fixador especial em aço inoxidável 304 fabricado sob medida para indústrias alimentícia, farmacêutica e química.", image: "https://www.razemfix.com.br/produtos/parafuso-sextavado.jpeg", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafuso-especial/fixador-inox316", itemOffered: { "@type": "Product", name: "Fixador Especial Inox 316 Sob Medida (AISI 316 / A4)", description: "Fixador especial em aço inoxidável 316 com molibdênio, sob medida para petroquímica, naval e offshore.", image: "https://www.razemfix.com.br/produtos/parafuso-sextavado.jpeg", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafusos-inox", itemOffered: { "@type": "Product", name: "Porca Sextavada Inox 304 e 316 (DIN 934 — A2/A4)", description: "Porca sextavada em aço inoxidável 304 e 316, norma DIN 934, graus A2 e A4, para uso com parafusos inox.", image: "https://www.razemfix.com.br/produtos/porca_sextavada.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafusos-inox", itemOffered: { "@type": "Product", name: "Arruela Lisa Inox 304 e 316 (DIN 125 — A2/A4)", description: "Arruela lisa em aço inoxidável 304 e 316, norma DIN 125, graus A2 e A4, para complementar fixações inox.", image: "https://www.razemfix.com.br/produtos/arruela_lisa.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/parafusos/parafusos-inox", itemOffered: { "@type": "Product", name: "Rebite de Repuxo Pop em Inox (DIN 7337 — A2)", description: "Rebite de repuxo pop em aço inoxidável A2, norma DIN 7337, para fixações em chapas expostas à corrosão.", image: "https://www.razemfix.com.br/produtos/rebite_de_repuxo.png", brand: { "@type": "Brand", name: "Razemfix" } } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Porcas Industriais",
            itemListElement: [
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/porca-sextavada.html", itemOffered: { "@type": "Product", name: "Porca Sextavada (DIN 934 Grau 2, 5 e 8)", description: "Porca sextavada DIN 934 em aço carbono graus 2, 5 e 8 e aço inox, pronta-entrega no Grande ABC e SP.", image: "https://www.razemfix.com.br/produtos/porca_sextavada.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/porca-autotravante.html", itemOffered: { "@type": "Product", name: "Porca Autotravante com Nylon (DIN 985)", description: "Porca autotravante com inserto de nylon DIN 985 para travamento seguro em aplicações com vibração.", image: "https://www.razemfix.com.br/produtos/porca_travante_alta_com_nylon.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/porca-sextavada.html", itemOffered: { "@type": "Product", name: "Porca Pesada de Alta Temperatura (ASTM A194 2H)", description: "Porca pesada ASTM A194 2H para aplicações de alta temperatura e pressão em caldeiras e vasos de pressão.", image: "https://www.razemfix.com.br/produtos/porca_sextavada_astm_a194_2h.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/porca-sextavada.html", itemOffered: { "@type": "Product", name: "Porca Sextavada em Aço Inox 304 e 316", description: "Porca sextavada em aço inoxidável AISI 304 e AISI 316, para fixações inox em ambientes corrosivos.", image: "https://www.razemfix.com.br/produtos/porca_sextavada.png", brand: { "@type": "Brand", name: "Razemfix" } } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Arruelas Técnicas",
            itemListElement: [
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/arruela-lisa.html", itemOffered: { "@type": "Product", name: "Arruela Lisa (DIN 125 / DIN 994 / ASTM F436)", description: "Arruela lisa plana DIN 125, DIN 994 e ASTM F436, em aço zincado e inox, para distribuição de carga.", image: "https://www.razemfix.com.br/produtos/arruela_lisa.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/arruela-pressao-inox.html", itemOffered: { "@type": "Product", name: "Arruela de Pressão Helicoidal (DIN 127)", description: "Arruela de pressão helicoidal DIN 127 em aço mola e inox, para travamento contra afrouxamento por vibração.", image: "https://www.razemfix.com.br/produtos/arruela_de_pressao.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/arruela-pressao-inox.html", itemOffered: { "@type": "Product", name: "Arruelas em Aço Inox 304, Inox 316 e Latão", description: "Arruelas técnicas em aço inoxidável 304, 316 e latão para uso em ambientes corrosivos e alta temperatura.", image: "https://www.razemfix.com.br/produtos/arruela_lisa.png", brand: { "@type": "Brand", name: "Razemfix" } } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Chumbadores e Ancoragem",
            itemListElement: [
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/chumbadores.html", itemOffered: { "@type": "Product", name: "Chumbador Mecânico Parabolt de Expansão", description: "Chumbador mecânico tipo parabolt de expansão para fixação em concreto, alvenaria e pedra.", image: "https://www.razemfix.com.br/produtos/chumbadores_mecanicos.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/chumbadores.html", itemOffered: { "@type": "Product", name: "Chumbador CBA com Prisioneiro", description: "Chumbador CBA com prisioneiro rosqueado para ancoragem estrutural pesada em concreto e pedra.", image: "https://www.razemfix.com.br/produtos/chumbadores_mecanicos.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/chumbadores.html", itemOffered: { "@type": "Product", name: "Ancoragem Química com Ampola e Resina de Injeção", description: "Ancoragem química com ampola de resina epóxi e resina de injeção para fixações de alta resistência em concreto.", image: "https://www.razemfix.com.br/produtos/chumbadores_quimicos.png", brand: { "@type": "Brand", name: "Razemfix" } } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Barras Roscadas e Tirantes",
            itemListElement: [
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/barras-roscadas.html", itemOffered: { "@type": "Product", name: "Barra Roscada 1m, 2m e 3m (DIN 975)", description: "Barra roscada DIN 975 em aço carbono classe 4.8 e 8.8, nos comprimentos 1m, 2m e 3m, pronta-entrega.", image: "https://www.razemfix.com.br/produtos/barra_roscada.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/barras-roscadas.html", itemOffered: { "@type": "Product", name: "Barra Roscada de Alta Resistência (ASTM A193 B7)", description: "Barra roscada de alta resistência ASTM A193 B7 em aço cromo-molibdênio para flanges, vasos de pressão e caldeiras.", image: "https://www.razemfix.com.br/produtos/barra_roscada_e_estojo_a193_b7.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/barras-roscadas.html", itemOffered: { "@type": "Product", name: "Tirantes Roscados Sob Medida", description: "Tirantes roscados especiais fabricados sob medida para estruturas metálicas, pontes e equipamentos industriais.", image: "https://www.razemfix.com.br/produtos/barra_roscada.png", brand: { "@type": "Brand", name: "Razemfix" } } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Rebites, Abraçadeiras e Acessórios",
            itemListElement: [
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/rebites.html", itemOffered: { "@type": "Product", name: "Rebite de Repuxo Pop em Alumínio e Inox (DIN 7337)", description: "Rebite de repuxo pop em alumínio e aço inox A2, norma DIN 7337, para fixação de chapas e perfis sem acesso reverso.", image: "https://www.razemfix.com.br/produtos/rebite_de_repuxo.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/rebites.html", itemOffered: { "@type": "Product", name: "Contrapinos e Cupilhas de Travamento (DIN 94)", description: "Contrapinos e cupilhas de travamento DIN 94 em aço e inox para travas de eixos, pinos e fusos.", image: "https://www.razemfix.com.br/produtos/rebite_de_repuxo.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/rebites.html", itemOffered: { "@type": "Product", name: "Abraçadeiras Tipo D, U, Mangote e Gota", description: "Abraçadeiras metálicas tipos D, U, mangote e gota em aço zincado para fixação de tubulações e cabos.", image: "https://www.razemfix.com.br/produtos/itens_para_instalacoes_-prediais_e_industriais-.png", brand: { "@type": "Brand", name: "Razemfix" } } },
              { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", seller: { "@id": "https://www.razemfix.com.br/#organization" }, url: "https://www.razemfix.com.br/elementos-fixacao/rebites.html", itemOffered: { "@type": "Product", name: "Parafuso Olhal e Porca Olhal Forjados (DIN 580 / DIN 582)", description: "Parafuso olhal e porca olhal forjados DIN 580 e DIN 582 para içamento de cargas e movimentação de equipamentos.", image: "https://www.razemfix.com.br/produtos/parafuso_olhal.png", brand: { "@type": "Brand", name: "Razemfix" } } },
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
