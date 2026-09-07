import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileSpreadsheet } from "lucide-react";
import HexBgWrapper from "../components/HexBgWrapper";
import TabelasFixadoresContent from "./TabelasFixadoresContent";

export const metadata: Metadata = {
  title: "Tabelas de Peso e Especificações de Fixadores | Razemfix",
  description:
    "Consulte e baixe as tabelas oficiais de peso de parafusos sextavados (DIN 933, DIN 931, ASTM A325, GR.2/5/8), porcas (DIN 934, ASTM A194 2H) e arruelas lisas (DIN 125, DIN 994, F436). Razemfix Fixadores Industriais.",
  keywords:
    "tabela de peso parafusos, tabela peso porcas, tabela arruelas lisas, peso parafuso sextavado din 933, peso parafuso din 931, peso porca din 934, especificações fixadores, tabela de peso astm a325, tabela astm a194 2h, arruela din 125 peso, razemfix tabelas",
  openGraph: {
    title: "Tabelas de Peso e Especificações de Fixadores | Razemfix",
    description:
      "Tabelas técnicas de peso teórico de parafusos, porcas e arruelas em milímetros e polegadas. Download direto em PDF.",
    url: "https://razemfix.com.br/especificacoes-fixadores-tabelas",
    type: "website",
    images: [
      {
        url: "/tabela_fixadores_macro.jpg",
        width: 1200,
        height: 900,
        alt: "Tabelas de Pesos de Fixadores Razemfix",
      },
    ],
  },
};

export default function EspecificacoesFixadoresTabelasPage() {
  // Structured Data Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        name: "Tabela de Pesos e Especificações Técnicas de Fixadores Razemfix",
        headline: "Tabelas de Pesos Teóricos de Parafusos, Porcas e Arruelas",
        description:
          "Especificações dimensionais e tabelas de peso de fixadores sextavados, porcas e arruelas conforme normas DIN, ISO e ASTM.",
        publisher: {
          "@type": "Organization",
          name: "Razemfix Fixadores Industriais",
          url: "https://razemfix.com.br",
          logo: "https://razemfix.com.br/simbolo_favicon.png",
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
            item: "https://razemfix.com.br",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tabelas",
            item: "https://razemfix.com.br/especificacoes-fixadores-tabelas",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* TOP BANNER: Matching the reference image (Tabelas | Home / Tabelas + blueprint/technical background) */}
        <section className="relative bg-zinc-950 text-white pt-28 pb-14 border-b border-zinc-800 overflow-hidden">
          {/* Blueprint Engineering Background Elements */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#EFC94E_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          {/* Decorative Technical Drawing Watermark in Banner (Nut & Bolt schematic) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none select-none hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full text-accent-yellow" fill="none">
              <path
                d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Left Side: Page Title */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-yellow/15 border border-accent-yellow/30 text-accent-yellow text-xs font-bold uppercase tracking-wider">
                  <FileSpreadsheet className="h-3.5 w-3.5" />
                  <span>Documentação Técnica de Engenharia</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  Tabelas
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl">
                  Tabelas de pesos teóricos, especificações dimensionais e normas regulamentadas para cálculo de fixadores.
                </p>
              </div>

              {/* Right Side: Breadcrumb navigation matching the reference (Home / Tabelas) */}
              <nav aria-label="Breadcrumb" className="self-start md:self-center">
                <ol className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-zinc-900/80 px-4 py-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-accent-yellow transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-zinc-600">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </li>
                  <li className="text-accent-yellow font-bold" aria-current="page">
                    Tabelas
                  </li>
                </ol>
              </nav>

            </div>
          </div>
        </section>

        {/* MAIN BODY WITH TWO COLUMNS */}
        <HexBgWrapper className="flex-grow py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TabelasFixadoresContent />
          </div>
        </HexBgWrapper>
      </div>
    </>
  );
}
