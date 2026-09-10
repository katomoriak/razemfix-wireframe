import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato e Cotação de Parafusos e Fixadores Industriais",
  description:
    "Solicite uma cotação rápida com os especialistas da Razemfix. Fornecimento direto da fábrica de parafusos, porcas, arruelas e fixadores sob medida com agilidade para todo o Brasil.",
  keywords: [
    "contato",
    "cotação de fixadores",
    "orçamento parafusos e porcas",
    "comprar fixadores industriais",
    "central de vendas razemfix",
    "telefone fixadores",
    "fornecedor parafusos atacado",
    "atendimento técnico fixadores",
  ],
  alternates: {
    canonical: "https://www.razemfix.com.br/contato",
  },
  openGraph: {
    title: "Contato e Cotação de Parafusos e Fixadores Industriais | Razemfix",
    description:
      "Envie sua lista de fixadores ou projeto técnico e receba um atendimento consultivo ágil para sua empresa.",
    url: "https://www.razemfix.com.br/contato",
    type: "website",
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
