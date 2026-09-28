import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalogItemBySlug } from "../data/catalog-pages-data";
import ProductLandingTemplate from "../components/ProductLandingTemplate";

export const metadata: Metadata = {
  title: "Parafusos Industriais no Grande ABC e SP | Razemfix",
  description:
    "Linha completa de parafusos sextavados, allen, franceses e especiais. Pronta-entrega em Santo André, São Caetano e SP.",
  keywords: [
    "distribuidora de parafusos",
    "parafusos industriais sp",
    "parafusos grande abc",
    "parafusos sextavados e allen",
    "parafusos atacado são paulo",
    "parafusos santo andré",
    "parafusos são caetano do sul",
  ],
  alternates: {
    canonical: "https://www.razemfix.com.br/parafusos",
  },
  openGraph: {
    title: "Parafusos Industriais no Grande ABC e SP | Razemfix",
    description:
      "Linha completa de parafusos sextavados, allen, franceses e especiais. Pronta-entrega em Santo André, São Caetano e SP.",
    url: "https://www.razemfix.com.br/parafusos",
    images: ["/parafusos home.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parafusos Industriais no Grande ABC e SP | Razemfix",
    description:
      "Linha completa de parafusos sextavados, allen, franceses e especiais. Pronta-entrega em Santo André, São Caetano e SP.",
    images: ["/parafusos home.png"],
  },
};

export default function ParafusosIndexPage() {
  const item = getCatalogItemBySlug("parafusos");
  if (!item) {
    notFound();
  }
  return <ProductLandingTemplate item={item} currentPath="/parafusos" />;
}
