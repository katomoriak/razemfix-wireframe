import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Parafusos, Porcas e Fixadores Industriais",
  description:
    "Explore a linha completa de fixadores industriais Razemfix: parafusos sextavados, allen, franceses, autobrocantes, porcas, arruelas, chumbadores mecânicos e químicos, rebites e barras roscadas.",
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
    "parafusos personalizados",
  ],
  alternates: {
    canonical: "https://www.razemfix.com.br/produtos",
  },
  openGraph: {
    title: "Catálogo de Parafusos, Porcas e Fixadores Industriais | Razemfix",
    description:
      "Linha completa de elementos de fixação industrial: parafusos, porcas, arruelas, chumbadores e barras roscadas em aço carbono e inox.",
    url: "https://www.razemfix.com.br/produtos",
    type: "website",
  },
};

export default function ProdutosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
