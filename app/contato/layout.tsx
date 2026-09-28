import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato e Cotação de Fixadores | Razemfix",
  description:
    "Cotação rápida de parafusos, porcas e fixadores industriais no Grande ABC e SP. Atendimento técnico sob medida.",
  keywords: [
    "contato",
    "cotação de fixadores",
    "orçamento parafusos e porcas",
    "comprar fixadores industriais",
    "central de vendas razemfix",
    "telefone fixadores",
    "fornecedor parafusos atacado",
    "atendimento técnico fixadores",
    "fixadores são caetano do sul",
    "parafusos grande abc",
  ],
  alternates: {
    canonical: "https://www.razemfix.com.br/contato",
  },
  openGraph: {
    title: "Contato e Cotação de Fixadores | Razemfix",
    description:
      "Envie sua lista de fixadores ou projeto técnico e receba atendimento consultivo ágil em SP e Grande ABC.",
    url: "https://www.razemfix.com.br/contato",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato e Cotação de Fixadores | Razemfix",
    description:
      "Envie sua lista de fixadores ou projeto técnico e receba atendimento consultivo ágil em SP e Grande ABC.",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.razemfix.com.br/contato#webpage",
      url: "https://www.razemfix.com.br/contato",
      name: "Contato e Cotação Técnica Razemfix",
      description:
        "Canal direto para envio de listas de compras, desenhos técnicos e cotações de parafusos e fixadores industriais.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.razemfix.com.br" },
          { "@type": "ListItem", position: 2, name: "Contato", item: "https://www.razemfix.com.br/contato" },
        ],
      },
      mainEntity: {
        "@id": "https://www.razemfix.com.br/#organization",
      },
    },
  ],
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}

