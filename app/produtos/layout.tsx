import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Parafusos e Fixadores | Razemfix",
  description:
    "Catálogo de parafusos, porcas, arruelas, barras e fixadores industriais no Grande ABC e SP com pronta-entrega.",
  keywords: [
    "parafusos",
    "parafusos inox",
    "parafusos de aço",
    "parafusos sextavados",
    "parafusos allen",
    "parafusos autobrocantes",
    "parafuso francês",
    "porcas industriais",
    "arruelas lisas",
    "arruelas de pressão",
    "chumbadores mecânicos",
    "chumbadores químicos",
    "rebites",
    "barras roscadas",
    "fixadores de alta resistência",
    "parafusos sob medida",
    "parafusos grande abc",
  ],
  alternates: {
    canonical: "https://www.razemfix.com.br/produtos",
  },
  openGraph: {
    title: "Catálogo de Parafusos e Fixadores | Razemfix",
    description:
      "Linha completa de parafusos, porcas, arruelas e fixadores industriais no Grande ABC e SP com pronta-entrega.",
    url: "https://www.razemfix.com.br/produtos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de Parafusos e Fixadores | Razemfix",
    description:
      "Linha completa de parafusos, porcas, arruelas e fixadores industriais no Grande ABC e SP com pronta-entrega.",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.razemfix.com.br/produtos#webpage",
      url: "https://www.razemfix.com.br/produtos",
      name: "Catálogo de Parafusos e Fixadores Industriais Razemfix",
      description:
        "Catálogo completo com especificações técnicas e bitolas de parafusos, porcas, arruelas, barras e chumbadores.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.razemfix.com.br" },
          { "@type": "ListItem", position: 2, name: "Produtos", item: "https://www.razemfix.com.br/produtos" },
        ],
      },
      publisher: {
        "@id": "https://www.razemfix.com.br/#organization",
      },
    },
  ],
};

export default function ProdutosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}

