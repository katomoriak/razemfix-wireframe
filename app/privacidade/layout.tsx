import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade e proteção de dados da Razemfix Fixadores Industriais em conformidade com a LGPD.",
  alternates: {
    canonical: "https://www.razemfix.com.br/privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
