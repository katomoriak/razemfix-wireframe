import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalogItemBySlug } from "../data/catalog-pages-data";
import ProductLandingTemplate from "../components/ProductLandingTemplate";

export const metadata: Metadata = {
  title: "Elementos de Fixação Industrial no ABC | Razemfix",
  description:
    "Distribuição de porcas, arruelas, barras roscadas, chumbadores e rebites para indústrias de São Paulo e Grande ABC.",
  keywords: [
    "elementos de fixação",
    "fixadores industriais",
    "distribuidora de porcas e arruelas",
    "chumbadores e barras roscadas sp",
    "fixadores grande abc",
    "fixadores santo andré",
    "fixadores são caetano do sul",
  ],
  alternates: {
    canonical: "https://www.razemfix.com.br/elementos-fixacao",
  },
  openGraph: {
    title: "Elementos de Fixação Industrial no ABC | Razemfix",
    description:
      "Distribuição de porcas, arruelas, barras roscadas, chumbadores e rebites para indústrias de São Paulo e Grande ABC.",
    url: "https://www.razemfix.com.br/elementos-fixacao",
    images: ["/produtos.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elementos de Fixação Industrial no ABC | Razemfix",
    description:
      "Distribuição de porcas, arruelas, barras roscadas, chumbadores e rebites para indústrias de São Paulo e Grande ABC.",
    images: ["/produtos.png"],
  },
};

export default function ElementosFixacaoIndexPage() {
  const item = getCatalogItemBySlug("elementos-fixacao");
  if (!item) {
    notFound();
  }
  return <ProductLandingTemplate item={item} currentPath="/elementos-fixacao" />;
}
