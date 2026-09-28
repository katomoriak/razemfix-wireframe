import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Razemfix | Fixadores Industriais em SP",
  description:
    "Conheça a Razemfix: distribuidora de fixadores industriais com estoque pulmão e garantia DIN e ASTM em SP.",
  keywords: [
    "sobre a razemfix",
    "história da razemfix",
    "qualidade fixadores industriais",
    "certificados de qualidade parafusos",
    "rastreabilidade e normas técnicas",
    "normas astm din iso abnt",
    "estoque regulador parafusos",
    "matriz são caetano do sul",
    "atendimento fixadores grande abc",
  ],
  alternates: {
    canonical: "https://www.razemfix.com.br/sobre-nos",
  },
  openGraph: {
    title: "Sobre a Razemfix | Fixadores Industriais em SP",
    description:
      "Distribuidora de fixadores industriais com estoque regulador e garantia DIN e ASTM no Grande ABC e SP.",
    url: "https://www.razemfix.com.br/sobre-nos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a Razemfix | Fixadores Industriais em SP",
    description:
      "Distribuidora de fixadores industriais com estoque regulador e garantia DIN e ASTM no Grande ABC e SP.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.razemfix.com.br/sobre-nos#webpage",
      url: "https://www.razemfix.com.br/sobre-nos",
      name: "Sobre a Razemfix Fixadores Industriais",
      description:
        "Conheça a história, infraestrutura e compromisso com a qualidade técnica da Razemfix no fornecimento de fixadores industriais.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.razemfix.com.br" },
          { "@type": "ListItem", position: 2, name: "Sobre Nós", item: "https://www.razemfix.com.br/sobre-nos" },
        ],
      },
      about: {
        "@id": "https://www.razemfix.com.br/#organization",
      },
    },
  ],
};

export default function SobreNosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}

