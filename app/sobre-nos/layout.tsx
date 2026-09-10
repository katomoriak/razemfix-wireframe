import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Razemfix | Infraestrutura e Qualidade em Fixadores",
  description:
    "Conheça a história e infraestrutura da Razemfix. Amplo estoque pulmão, rastreabilidade completa e garantia de qualidade segundo as normas ASTM, DIN, ISO e ABNT.",
  keywords: [
    "sobre a razemfix",
    "história da razemfix",
    "qualidade fixadores industriais",
    "certificados de qualidade parafusos",
    "rastreabilidade e normas técnicas",
    "normas astm din iso abnt",
    "estoque regulador parafusos",
    "matriz são caetano do sul",
    "atendimento consultivo parafusos",
  ],
  alternates: {
    canonical: "https://www.razemfix.com.br/sobre-nos",
  },
  openGraph: {
    title: "Sobre a Razemfix | Infraestrutura e Qualidade em Fixadores",
    description:
      "Conheça a história e o compromisso de qualidade técnica da Razemfix no fornecimento de fixadores industriais.",
    url: "https://www.razemfix.com.br/sobre-nos",
    type: "website",
  },
};

export default function SobreNosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
