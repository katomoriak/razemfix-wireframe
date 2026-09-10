import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Download,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";
import HexBgWrapper from "../components/HexBgWrapper";
import CatalogViewer from "./CatalogViewer";
import TabelasFixadoresSection from "../components/TabelasFixadoresSection";

export const metadata: Metadata = {
  title: "Catálogo Técnico de Parafusos, Porcas e Arruelas PDF Online | Razemfix",
  description:
    "Consulte online o Catálogo Técnico Razemfix de parafusos sextavados, allen, inox, porcas, arruelas e fixadores industriais. Especificações completas, bitolas e normas DIN, ISO, ASTM e ABNT.",
  keywords:
    "catálogo parafusos pdf, catálogo fixadores industriais, tabela parafusos sextavados, catálogo porcas e arruelas, especificações técnicas fixadores, normas din iso astm parafusos, parafusos inox 304 316, chumbadores mecânicos, barras roscadas, razemfix catálogo",
  alternates: {
    canonical: "https://www.razemfix.com.br/catalogo-online",
  },
  openGraph: {
    title: "Catálogo Técnico de Parafusos, Porcas e Arruelas PDF Online | Razemfix",
    description:
      "Visualize online ou baixe o Catálogo Técnico Completo de Fixadores Industriais Razemfix.",
    url: "https://www.razemfix.com.br/catalogo-online",
    images: [
      {
        url: "/capa_catalogo.png",
        width: 700,
        height: 990,
        alt: "Capa do Catálogo Razemfix - Parafusos, Porcas e Arruelas",
      },
    ],
    type: "website",
  },
};

export default function CatalogoOnlinePage() {
  const pdfUrl = "/catalogo-parafusos-arruelas-porcas_razemfix.pdf";
  const pdfFileName = "catalogo-parafusos-arruelas-porcas_razemfix.pdf";
  const whatsappUrl = `https://wa.me/5511930736051?text=${encodeURIComponent(
    "Olá! Estava consultando o Catálogo Técnico Online no site da Razemfix e gostaria de solicitar uma cotação."
  )}`;

  // Structured Data Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DigitalDocument",
        name: "Catálogo Técnico de Parafusos, Porcas e Arruelas Razemfix",
        description:
          "Catálogo técnico e comercial completo com especificações de parafusos sextavados, allen, porcas, arruelas, chumbadores e barras roscadas segundo normas DIN, ISO, ASTM e ABNT.",
        encodingFormat: "application/pdf",
        url: "https://www.razemfix.com.br/catalogo-parafusos-arruelas-porcas_razemfix.pdf",
        publisher: {
          "@type": "Organization",
          name: "Razemfix Fixadores Industriais",
          url: "https://www.razemfix.com.br",
          logo: "https://www.razemfix.com.br/simbolo_favicon.png",
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.razemfix.com.br",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Produtos",
            item: "https://www.razemfix.com.br/produtos",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Catálogo Técnico Online",
            item: "https://www.razemfix.com.br/catalogo-online",
          },
        ],
      },
    ],
  };

  const catalogSections = [
    {
      title: "Parafusos Industriais",
      items: [
        "Sextavados Rosca Inteira e Parcial (DIN 933 / DIN 931)",
        "Allen Cabeça Cilíndrica (DIN 912) e Abaulada (ISO 7380)",
        "Allen Cabeça Escareada (DIN 7991) e Sem Cabeça (DIN 913/916)",
        "Parafusos Franceses, Martelo (T-Bolt) e Flangeados",
        "Autobrocantes para estruturas metálicas e painéis solares",
      ],
      standards: "DIN 933, DIN 931, DIN 912, ISO 7380, DIN 7991, ASTM A325",
    },
    {
      title: "Porcas Técnicas e Estruturais",
      items: [
        "Porcas Sextavadas (DIN 934 - Grau 2, 5, 8 e Classe 8, 10)",
        "Porcas Auto-Travantes com Inserto de Nylon (DIN 985)",
        "Porcas Flangeadas com Serrilha de Travamento (DIN 6923)",
        "Porcas Pesadas para Linha Petroquímica (ASTM A194 2H)",
        "Porcas Borboleta, Castelo e Porcas Prolongadoras",
      ],
      standards: "DIN 934, DIN 985, DIN 6923, ASTM A194",
    },
    {
      title: "Arruelas de Precisão Mecânica",
      items: [
        "Arruelas Lisas Padrão Industrial (DIN 125 A/B e ABNT)",
        "Arruelas de Pressão para Segurança Anti-Vibração (DIN 127)",
        "Arruelas Estruturais Temperadas (ASTM F436)",
        "Arruelas Funileiro (DIN 9021) de Grande Diâmetro",
        "Arruelas Dentadas e Onduladas de Travamento Elástico",
      ],
      standards: "DIN 125, DIN 127, DIN 9021, ASTM F436",
    },
    {
      title: "Barras Roscadas e Prisioneiros",
      items: [
        "Barras Roscadas DIN 975 / DIN 976 (Comprimentos 1m, 2m, 3m)",
        "Hastes Roscadas e Prisioneiros em Aço Carbono e Inox",
        "Classes de Resistência 4.8, 8.8, 10.9 e Inox 304 / 316",
        "Cortes e Roscas Sob Medida Conforme Desenho Técnico",
      ],
      standards: "DIN 975, DIN 976, ASTM A193 B7",
    },
    {
      title: "Chumbadores e Ancoragens",
      items: [
        "Chumbadores Mecânicos de Expansão (Parabolts e CBA)",
        "Chumbadores de Impacto e Chumbadores Tipo Cunha",
        "Sistemas de Ancoragem Química com Resinas e Ampolas",
        "Hastes para Fixação Estrutural em Concreto Fissurado",
      ],
      standards: "ABNT NBR, Homologações Estruturais",
    },
    {
      title: "Ligas Metálicas e Tratamentos",
      items: [
        "Aço Inoxidável AISI 304 (A2) e AISI 316 (A4)",
        "Aço Carbono e Aços Liga (G2, G5, G8, Classe 8.8, 10.9, 12.9)",
        "Zinco Branco Trivalente, Zinco Amarelo Bicromatizado",
        "Galvanização a Fogo (HDG), Geomet e Fosfatizado",
      ],
      standards: "ISO 3506, ASTM A307, ASTM A325, ASTM A490",
    },
  ];

  return (
    <>
      {/* Inject JSON-LD Schema for Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HexBgWrapper className="flex-grow py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
            <Link href="/" className="hover:text-zinc-950 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/produtos" className="hover:text-zinc-950 transition-colors">
              Produtos
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-zinc-900 font-bold">Catálogo Técnico PDF</span>
          </nav>

          {/* Page Header */}
          <div className="mb-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-yellow/15 border border-accent-yellow/35 text-accent-yellow-hover text-xs font-bold tracking-wider uppercase">
              <Sparkles className="h-3.5 w-3.5 fill-accent-yellow text-accent-yellow" />
              Documento Técnico Oficial Razemfix • Edição 2026
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Catálogo Técnico de Parafusos, Porcas e Arruelas
            </h1>

            <p className="text-sm sm:text-base text-zinc-650 max-w-3xl font-light leading-relaxed">
              Consulte online e faça o download do catálogo oficial da Razemfix. Documento completo com tabelas dimensionais, bitolas em milímetros e polegadas, normas técnicas regulamentadas (<strong className="font-semibold text-zinc-900">DIN, ISO, ASTM, ABNT</strong>) e classes de resistência para indústrias, montagens mecânicas e infraestrutura.
            </p>

            <div className="w-16 h-1.5 bg-accent-yellow rounded-full" />
          </div>

          {/* Quick Action Badges */}
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-700">
            <div className="flex items-center gap-2 bg-white border border-zinc-200 px-3.5 py-2 rounded-lg shadow-sm">
              <ShieldCheck className="h-4 w-4 text-yellow-600" />
              <span>Certificação ISO 9001</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-zinc-200 px-3.5 py-2 rounded-lg shadow-sm">
              <Zap className="h-4 w-4 text-yellow-600" />
              <span>Classes 8.8, 10.9, 12.9 e Inox A2/A4</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-zinc-200 px-3.5 py-2 rounded-lg shadow-sm">
              <Layers className="h-4 w-4 text-yellow-600" />
              <span>Normas DIN, ISO, ASTM e ABNT</span>
            </div>
          </div>

          {/* Embedded Online PDF Viewer */}
          <div className="mb-16">
            <CatalogViewer pdfUrl={pdfUrl} pdfFileName={pdfFileName} />
          </div>

          {/* SEO Content Section: Catalog Technical Index */}
          <div className="mt-16 pt-12 border-t border-zinc-200 space-y-10">
            
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider text-yellow-700 uppercase block">
                CONTEÚDO TÉCNICO E ESPECIFICAÇÕES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                Principais Linhas e Normas Abrangidas no Catálogo
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-3xl leading-relaxed">
                Abaixo apresentamos o resumo dos elementos de fixação industrial detalhados em nosso catálogo digital para consulta rápida de projetistas, engenheiros mecânicos e departamentos de compras industriais.
              </p>
            </div>

            {/* Grid of Catalog Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalogSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm hover:border-accent-yellow/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-zinc-100 pb-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent-yellow shrink-0" />
                      <h3 className="font-extrabold text-zinc-950 text-sm tracking-tight uppercase">
                        {sec.title}
                      </h3>
                    </div>

                    <ul className="space-y-2 text-xs text-zinc-650">
                      {sec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="h-3.5 w-3.5 text-yellow-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-100 text-[10px] text-zinc-500 font-mono">
                    <strong className="text-zinc-700 font-bold block mb-0.5">Normatização:</strong>
                    <span>{sec.standards}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabelas de Pesos de Fixadores Section */}
            <TabelasFixadoresSection variant="card" className="my-10" />

            {/* Direct Commercial Contact Banner */}
            <div className="bg-zinc-950 text-white rounded-2xl p-8 sm:p-10 relative overflow-hidden border border-zinc-800 shadow-xl">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                
                <div className="space-y-3 text-center lg:text-left max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-yellow/15 border border-accent-yellow/30 text-accent-yellow text-xs font-bold uppercase tracking-wider">
                    <Phone className="h-3.5 w-3.5" /> Suporte Técnico Direto
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Precisa de uma cotação com base no catálogo?
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    Envie os códigos, normas, bitolas ou lista de materiais. Nossa equipe comercial técnica retorna com agilidade e condições exclusivas para fornecimento industrial.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Solicitar Cotação no WhatsApp</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <Link
                    href="/contato"
                    className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 border border-zinc-700"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Formulário de Contato</span>
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>
      </HexBgWrapper>
    </>
  );
}
