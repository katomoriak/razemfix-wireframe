"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileDown,
  CheckCircle2,
  ShieldCheck,
  Download,
  Eye,
  ArrowRight,
} from "lucide-react";

interface PdfCatalogSectionProps {
  variant?: "section" | "card";
  className?: string;
}

export default function PdfCatalogSection({
  variant = "section",
  className = "",
}: PdfCatalogSectionProps) {
  const whatsappUrl = `https://wa.me/5511930736051?text=${encodeURIComponent(
    "Olá! Estava no site da Razemfix e gostaria de receber o Catálogo Técnico em PDF."
  )}`;

  const content = (
    <div className="relative">
      {/* Ambient background glow */}
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Background Decorative Tech Hexagon */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-80 h-80 text-accent-yellow/10 pointer-events-none select-none -z-10 hidden xl:block">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <path
            d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-yellow/15 border border-accent-yellow/35 text-accent-yellow text-xs font-bold tracking-wider uppercase shadow-sm">
            <FileDown className="h-3.5 w-3.5" />
            <span>Especificações Técnicas • Download Imediato</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Acesse nosso{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow via-yellow-400 to-amber-300">
              catálogo em PDF
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Consulte nossa linha industrial completa em formato digital. Tenha à disposição tabelas dimensionais, bitolas, normas técnicas (<strong className="text-white font-semibold">DIN, ISO, ASTM, ABNT</strong>), classes de resistência mecânica e materiais especiais para facilitar suas cotações e especificações técnicas de engenharia.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-medium text-zinc-300 max-w-2xl mx-auto lg:mx-0 text-left">
            <div className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800 rounded-lg px-3 py-2.5 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-accent-yellow shrink-0" />
              <span>Tabelas dimensionais e de roscas</span>
            </div>
            <div className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800 rounded-lg px-3 py-2.5 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-accent-yellow shrink-0" />
              <span>Normas DIN, ISO, ASTM e ABNT</span>
            </div>
            <div className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800 rounded-lg px-3 py-2.5 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-accent-yellow shrink-0" />
              <span>Classes 8.8, 10.9, 12.9 e Inox A2/A4</span>
            </div>
            <div className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800 rounded-lg px-3 py-2.5 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-accent-yellow shrink-0" />
              <span>Fixadores sob medida e especiais</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
            {/* Visualizar Online Button */}
            <Link
              href="/catalogo-online"
              className="w-full sm:w-auto px-6 py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 rounded-lg font-bold text-sm tracking-wider shadow-lg hover:shadow-accent-yellow/20 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group border border-accent-yellow/30 uppercase"
            >
              <Eye className="h-4.5 w-4.5 shrink-0" />
              <span>Visualizar Online</span>
              <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Direct Download Button */}
            <a
              href="/catalogo-parafusos-arruelas-porcas_razemfix.pdf"
              download="catalogo-parafusos-arruelas-porcas_razemfix.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-4 bg-zinc-900 hover:bg-zinc-850 text-white rounded-lg font-bold text-sm tracking-wider border border-zinc-700/80 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group uppercase"
            >
              <Download className="h-4 w-4 shrink-0 group-hover:-translate-y-0.5 transition-transform" />
              <span>Baixar PDF</span>
            </a>

            {/* Secondary WhatsApp Request Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group z-0 w-full sm:w-auto px-5 py-4 bg-zinc-900 hover:bg-zinc-850 text-white rounded-lg font-bold text-sm tracking-wider border border-zinc-700/80 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 uppercase"
            >
              <span className="absolute inset-0 bg-emerald-600 rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 ease-out -z-10 origin-center" />
              
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-accent-yellow shrink-0 group-hover:text-white transition-colors duration-300"
              >
                <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.414 1.258 4.86L2 22l5.312-1.394c1.408.767 3.013 1.206 4.698 1.206 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.78 13.06c-.2.56-1.16 1.08-1.6 1.12-.4.04-.92.22-2.74-.5-2.32-.92-3.8-3.28-3.92-3.44-.12-.16-1.04-1.38-1.04-2.63 0-1.25.64-1.86.88-2.12.2-.22.44-.28.58-.28.14 0 .28 0 .4.02.12.02.28-.04.44.34.16.38.56 1.36.6 1.48.04.1.06.22 0 .34-.06.12-.1.2-.2.32-.1.1-.2.24-.3.34-.1.12-.22.24-.1.44.12.2.54.88 1.14 1.42.78.7 1.44.92 1.64 1.02.2.1.32.08.44-.06.12-.14.52-.6.66-.8.14-.2.28-.16.48-.08.2.08 1.26.6 1.48.7.22.1.36.16.42.26.06.1.06.56-.14 1.12z" />
              </svg>
              <span className="group-hover:text-white transition-colors duration-300">WhatsApp</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-[11px] text-zinc-400 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-yellow" />
              Arquivo verificado e seguro
            </span>
            <span className="text-zinc-600">•</span>
            <span>Edição 2026</span>
          </div>

        </div>

        {/* Right Column: Visual Catalog Cover */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <Link
            href="/catalogo-online"
            className="relative group/cover block cursor-pointer"
            title="Clique para visualizar o catálogo online"
          >
            {/* Subtle ambient glow behind the cover */}
            <div className="absolute inset-0 bg-accent-yellow/25 rounded-2xl blur-3xl transform scale-95 group-hover/cover:scale-110 transition-transform duration-500 opacity-70" />

            {/* Book Cover Container */}
            <div className="relative w-[260px] sm:w-[300px] md:w-[330px] rounded-2xl overflow-hidden border-2 border-zinc-700/80 group-hover/cover:border-accent-yellow shadow-[0_20px_50px_rgba(0,0,0,0.85)] group-hover/cover:shadow-[0_25px_60px_rgba(239,201,78,0.25)] transition-all duration-500 group-hover/cover:-translate-y-2 group-hover/cover:scale-[1.02] bg-zinc-950">
              <Image
                src="/capa_catalogo.png"
                alt="Capa do Catálogo Razemfix - Parafusos, Porcas e Arruelas"
                width={700}
                height={990}
                priority
                className="w-full h-auto object-cover select-none transition-transform duration-500"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-0 group-hover/cover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-5">
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-yellow text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Eye className="h-4 w-4" /> Visualizar Online
                </span>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );

  if (variant === "card") {
    return (
      <section
        className={`my-10 relative overflow-hidden rounded-2xl bg-zinc-950 text-white border border-zinc-800 p-6 sm:p-10 lg:p-12 shadow-2xl ${className}`}
      >
        {content}
      </section>
    );
  }

  return (
    <section
      className={`py-16 md:py-20 bg-zinc-950 text-white border-y border-zinc-800 relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {content}
      </div>
    </section>
  );
}
