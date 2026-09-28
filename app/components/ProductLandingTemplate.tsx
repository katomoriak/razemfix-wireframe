import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  FileSpreadsheet,
  Download,
  HelpCircle,
  Package,
  Wrench,
  Sparkles,
} from "lucide-react";
import HexBgWrapper from "./HexBgWrapper";
import { CatalogPageItem, CITIES_SERVED } from "../data/catalog-pages-data";

interface ProductLandingTemplateProps {
  item: CatalogPageItem;
  currentPath: string;
}

export default function ProductLandingTemplate({ item, currentPath }: ProductLandingTemplateProps) {
  const whatsappUrl = `https://wa.me/5511930736051?text=${encodeURIComponent(
    `Olá, estava vendo o produto ${item.h1} no site e gostaria de solicitar uma cotação técnica para minha empresa!`
  )}`;

  const canonicalUrl = `https://www.razemfix.com.br${currentPath}`;

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: item.title,
        description: item.description,
        isPartOf: {
          "@id": "https://www.razemfix.com.br/#website",
        },
        breadcrumb: {
          "@id": `${canonicalUrl}#breadcrumb`,
        },
        mainEntity: {
          "@type": "Service",
          "@id": `${canonicalUrl}#service`,
          name: `Fornecimento e Distribuição de ${item.h1}`,
          serviceType: "Distribuição e Venda no Atacado de Fixadores",
          description: item.description,
          image: `https://www.razemfix.com.br${item.image}`,
          category: item.categoryLabel,
          brand: {
            "@type": "Brand",
            name: "Razemfix",
          },
          provider: {
            "@type": "WholesaleStore",
            "@id": "https://www.razemfix.com.br/#organization",
            name: "Razemfix Parafusos e Fixadores Industriais",
            telephone: "+55-11-4318-2878",
            url: "https://www.razemfix.com.br",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Cavalheiro Ernesto Giuliano, 236",
              addressLocality: "São Caetano do Sul",
              addressRegion: "SP",
              postalCode: "09570-400",
              addressCountry: "BR",
            },
          },
          areaServed: CITIES_SERVED.map((city) => ({
            "@type": "City",
            name: city,
          })),
          potentialAction: {
            "@type": "Action",
            name: "Solicitar Cotação B2B",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `https://wa.me/5511930736051?text=${encodeURIComponent(
                `Olá! Gostaria de solicitar cotação para ${item.h1}.`
              )}`,
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            name: item.categoryLabel,
            item: `https://www.razemfix.com.br${item.categoryPath}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.h1,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: item.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <HexBgWrapper className="py-8 sm:py-12 text-zinc-900 min-h-screen">
      {/* Script JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-semibold text-zinc-500 overflow-x-auto py-2">
          <Link href="/" className="hover:text-zinc-900 transition-colors shrink-0">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
          <Link href={item.categoryPath} className="hover:text-zinc-900 transition-colors shrink-0">
            {item.categoryLabel}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
          <span className="text-zinc-950 font-bold truncate shrink-0 max-w-[260px] sm:max-w-md">
            {item.h1}
          </span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Left: Product Image & Badges */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 flex items-center justify-center p-6 shadow-inner group">
              <Image
                src={item.image}
                alt={item.h1}
                width={500}
                height={500}
                priority
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-sm text-accent-yellow text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-zinc-700/60 uppercase tracking-wider flex items-center gap-1.5 shadow">
                <Sparkles className="h-3 w-3 text-accent-yellow" />
                Linha Industrial
              </div>
            </div>

            {/* Quick Status Badges */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5">
                <span className="text-[10px] font-bold text-emerald-800 uppercase block">Disponibilidade</span>
                <strong className="text-emerald-900 font-extrabold text-xs flex items-center justify-center gap-1 mt-0.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Pronta-Entrega
                </strong>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5">
                <span className="text-[10px] font-bold text-amber-800 uppercase block">Logística SP e ABC</span>
                <strong className="text-amber-900 font-extrabold text-xs flex items-center justify-center gap-1 mt-0.5">
                  <Clock className="h-3.5 w-3.5 text-amber-600" /> Envio Expresso
                </strong>
              </div>
            </div>
          </div>

          {/* Right: Technical Details & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="inline-block bg-accent-yellow/20 text-zinc-900 border border-accent-yellow/40 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.norm}
                </span>
                <span className="inline-block bg-zinc-100 text-zinc-800 border border-zinc-200 text-[11px] font-bold px-3 py-1 rounded-full">
                  {item.grade}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
                {item.h1}
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 font-light leading-relaxed">
                {item.subtitle}
              </p>
            </div>

            {/* Technical Spec Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-zinc-50 border border-zinc-200 rounded-2xl p-4 sm:p-5 text-xs">
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Norma Dimensional</span>
                <strong className="text-zinc-900 font-bold block mt-0.5 text-sm">{item.norm}</strong>
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Material Base</span>
                <strong className="text-zinc-900 font-bold block mt-0.5 text-sm">{item.material}</strong>
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Classe / Grau de Dureza</span>
                <strong className="text-zinc-900 font-bold block mt-0.5 text-sm">{item.grade}</strong>
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Acabamento Superficial</span>
                <strong className="text-zinc-900 font-bold block mt-0.5 text-sm">{item.coating}</strong>
              </div>
            </div>

            {/* Available Sizes Pills */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-zinc-950 uppercase tracking-wider flex items-center gap-1.5">
                <Wrench className="h-4 w-4 text-yellow-600" /> Bitolas e Diâmetros Usuais em Estoque:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-250 text-zinc-850 font-mono text-xs font-bold"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Actions (CTA) */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contato?product=${encodeURIComponent(item.h1)}`}
                className="flex-1 py-3.5 px-6 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl shadow transition-all duration-200 flex items-center justify-center gap-2 border border-accent-yellow/40 text-center"
              >
                <Package className="h-4 w-4" /> Solicitar Cotação com Preço
              </Link>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-zinc-900 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Related PDF Download Button if available */}
            {item.relatedPdf && (
              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between bg-zinc-50/70 p-3 rounded-xl border border-zinc-200">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                  <FileSpreadsheet className="h-4 w-4 text-accent-yellow-hover" />
                  <span>{item.relatedPdf.title}</span>
                </div>
                <a
                  href={item.relatedPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <Download className="h-3.5 w-3.5" /> Baixar PDF
                </a>
              </div>
            )}

          </div>

        </div>

        {/* Industrial Applications & Technical Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-lg sm:text-xl font-black text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-3">
              <ShieldCheck className="h-5 w-5 text-accent-yellow-hover" /> Principais Aplicações Industriais
            </h2>
            <ul className="space-y-3">
              {item.applications.map((app, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-lg sm:text-xl font-black text-zinc-950 flex items-center gap-2 border-b border-zinc-100 pb-3">
              <Sparkles className="h-5 w-5 text-accent-yellow-hover" /> Vantagens e Diferenciais Razemfix
            </h2>
            <ul className="space-y-3">
              {item.features.map((feat, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <div className="h-2 w-2 rounded-full bg-accent-yellow mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Technical Text Description */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-xl font-black text-zinc-950">Especificações e Engenharia de Aplicação</h2>
          <div className="space-y-3 text-sm text-zinc-650 leading-relaxed font-light">
            {item.technicalDetails.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* Regional Coverage Banner */}
        <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-md border border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-bold text-accent-yellow uppercase tracking-wider block">
                Logística Regional Estratégica
              </span>
              <h2 className="text-2xl font-black text-white tracking-tight mt-1">
                Atendimento e Entrega Ágil em São Paulo e Grande ABC
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800/80 px-4 py-2 rounded-xl text-xs font-bold text-zinc-200 border border-zinc-700">
              <MapPin className="h-4 w-4 text-accent-yellow" />
              <span>Matriz em São Caetano do Sul - SP</span>
            </div>
          </div>

          <p className="text-sm text-zinc-300 font-light leading-relaxed max-w-4xl">
            A Razemfix abastece indústrias, construtoras e montadoras de toda a região do Grande ABC, Grande São Paulo e principais polos fabris com frota e logística dedicadas para reposição imediata de linhas produtivas.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 text-xs font-semibold">
            {CITIES_SERVED.map((city) => (
              <div
                key={city}
                className="bg-zinc-800/60 border border-zinc-700/60 rounded-xl p-2.5 text-center text-zinc-200 flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-yellow shrink-0" />
                <span className="truncate">{city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical FAQ */}
        {item.faqs && item.faqs.length > 0 && (
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-black text-zinc-950 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-accent-yellow-hover" /> Dúvidas Técnicas Frequentes
            </h2>
            <div className="space-y-4">
              {item.faqs.map((faq, index) => (
                <div key={index} className="border border-zinc-150 rounded-2xl p-4 bg-zinc-50/50 space-y-2">
                  <h3 className="text-sm font-bold text-zinc-900">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </HexBgWrapper>
  );
}
