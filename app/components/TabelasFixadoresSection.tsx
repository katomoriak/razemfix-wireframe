"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileSpreadsheet,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ExternalLink,
} from "lucide-react";

interface TabelasFixadoresSectionProps {
  variant?: "section" | "card";
  className?: string;
}

export default function TabelasFixadoresSection({
  variant = "section",
  className = "",
}: TabelasFixadoresSectionProps) {
  const content = (
    <div className="relative">
      {/* Background subtle light ambient glow */}
      <div className="absolute -top-20 -right-16 w-96 h-96 bg-accent-yellow/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-16 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle blueprint hexagon watermark for technical flair */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-80 h-80 text-zinc-900/[0.04] pointer-events-none select-none -z-10 hidden xl:block">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <path
            d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Typography, Highlights & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-yellow/20 border border-accent-yellow/50 text-zinc-950 text-xs font-extrabold tracking-wider uppercase shadow-xs">
            <FileSpreadsheet className="h-3.5 w-3.5 text-yellow-750" />
            <span>Engenharia & Especificações • Download em PDF</span>
          </div>

          {/* Section Title */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
              Tabelas de Pesos de{" "}
              <span className="relative inline-block text-zinc-950">
                Fixadores Industriais
                <span className="absolute bottom-1.5 left-0 right-0 h-2.5 bg-accent-yellow/45 -z-10 rounded-sm" />
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-650 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Consulte os pesos teóricos por cento e por milheiro de <strong className="font-semibold text-zinc-900">parafusos sextavados</strong>, <strong className="font-semibold text-zinc-900">porcas</strong> e <strong className="font-semibold text-zinc-900">arruelas</strong> conforme normas DIN, ISO e ASTM. Arquivos técnicos padronizados para download gratuito imediato.
          </p>

          {/* Highlights Grid (Light cards with crisp borders and hover effects) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-medium text-zinc-700 max-w-2xl mx-auto lg:mx-0 text-left">
            <div className="bg-white border border-zinc-200/90 rounded-xl p-3.5 shadow-sm hover:border-accent-yellow hover:shadow-md transition-all group">
              <div className="font-extrabold text-zinc-950 flex items-center gap-2 mb-1 group-hover:text-yellow-850 transition-colors">
                <span className="text-base">🔩</span>
                <span>Parafusos</span>
              </div>
              <p className="text-[11px] text-zinc-550 font-mono">DIN 933, 931, ASTM A325, GR.2/5/8</p>
            </div>

            <div className="bg-white border border-zinc-200/90 rounded-xl p-3.5 shadow-sm hover:border-accent-yellow hover:shadow-md transition-all group">
              <div className="font-extrabold text-zinc-950 flex items-center gap-2 mb-1 group-hover:text-yellow-850 transition-colors">
                <span className="text-base">⚙️</span>
                <span>Porcas</span>
              </div>
              <p className="text-[11px] text-zinc-550 font-mono">DIN 934, ASTM A194 2H, Grau 2/5/8</p>
            </div>

            <div className="bg-white border border-zinc-200/90 rounded-xl p-3.5 shadow-sm hover:border-accent-yellow hover:shadow-md transition-all group">
              <div className="font-extrabold text-zinc-950 flex items-center gap-2 mb-1 group-hover:text-yellow-850 transition-colors">
                <span className="text-base">🔘</span>
                <span>Arruelas</span>
              </div>
              <p className="text-[11px] text-zinc-550 font-mono">DIN 125, DIN 994, ASTM F436</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <Link
              href="/especificacoes-fixadores-tabelas"
              className="w-full sm:w-auto px-6 py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 rounded-lg font-extrabold text-sm tracking-wider shadow-md hover:shadow-lg hover:shadow-accent-yellow/20 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group border border-accent-yellow/50 uppercase"
            >
              <FileSpreadsheet className="h-4.5 w-4.5 shrink-0" />
              <span>Acessar Tabelas de Pesos</span>
              <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Verification Badge */}
          <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-[11px] text-zinc-550 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-yellow-750" />
              10 Tabelas Oficiais Disponíveis em PDF
            </span>
            <span className="text-zinc-300">•</span>
            <span>Edição Técnica 2026</span>
          </div>

        </div>

        {/* Right Column: Clean Light-Themed Visual Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <Link
            href="/especificacoes-fixadores-tabelas"
            className="relative group/photo block cursor-pointer w-full max-w-md"
            title="Clique para acessar as Tabelas de Pesos"
          >
            {/* Soft shadow / glow behind image */}
            <div className="absolute inset-0 bg-accent-yellow/20 rounded-2xl blur-2xl transform scale-95 group-hover/photo:scale-105 transition-transform duration-500 opacity-60" />

            {/* Photo Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-200 group-hover/photo:border-accent-yellow shadow-xl group-hover/photo:shadow-2xl transition-all duration-500 group-hover/photo:-translate-y-1.5 bg-white">
              <div className="relative aspect-[4/3] w-full bg-zinc-100">
                <Image
                  src="/tabela_fixadores_macro.jpg"
                  alt="Tabelas de Pesos e Fixadores Industriais Razemfix"
                  fill
                  className="object-cover object-center select-none transition-transform duration-700 group-hover/photo:scale-105"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-70" />
              </div>

              {/* Card Footer Banner */}
              <div className="p-4 sm:p-5 bg-white border-t border-zinc-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold text-zinc-950 block">
                    Especificações de Parafusos, Porcas e Arruelas
                  </span>
                  <span className="text-[11px] text-zinc-550 font-light">
                    Normas DIN 933, DIN 931, ASTM A325 e mais
                  </span>
                </div>
                <div className="h-8 w-8 rounded-lg bg-accent-yellow flex items-center justify-center text-zinc-950 group-hover/photo:scale-110 transition-transform shadow-xs">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5">
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-yellow text-zinc-950 font-extrabold text-xs uppercase tracking-wider shadow-lg">
                  <FileSpreadsheet className="h-4 w-4" /> Ver Todas as Tabelas
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
        className={`my-10 relative overflow-hidden rounded-2xl bg-white text-zinc-900 border border-zinc-200/90 p-6 sm:p-10 lg:p-12 shadow-xl shadow-zinc-200/40 ${className}`}
      >
        {/* Top subtle decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-yellow via-yellow-400 to-amber-400" />
        {content}
      </section>
    );
  }

  return (
    <section
      className={`py-16 md:py-20 bg-white text-zinc-900 border-y border-zinc-200 relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {content}
      </div>
    </section>
  );
}
