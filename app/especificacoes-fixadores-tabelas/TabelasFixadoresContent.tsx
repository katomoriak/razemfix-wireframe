"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Download,
  ExternalLink,
  ChevronDown,
  Plus,
  Minus,
  CheckCircle2,
  Mail,
  Send,
  ShieldCheck,
  Phone,
  ArrowRight,
  HelpCircle,
  FileCheck,
} from "lucide-react";

interface TabelaItem {
  titulo: string;
  pdfUrl: string;
  norma: string;
  tipo: string;
}

interface CategoriaTabela {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
  itens: TabelaItem[];
}

const CATEGORIAS_TABELAS: CategoriaTabela[] = [
  {
    id: "collapse1",
    titulo: "Parafusos",
    descricao: "Tabelas de peso teórico por cento e por milheiro em milímetros e polegadas.",
    icone: "🔩",
    itens: [
      {
        titulo: "TABELA DE PESO PARAFUSO SXT GR.2 - GR.5 - GR.8",
        pdfUrl: "/pdf/tabela-de-peso-parafuso-sxt-gr-2-gr5-gr8.pdf",
        norma: "Grau 2 / Grau 5 / Grau 8 (ANSI / ASME B18.2.1)",
        tipo: "Parafuso Sextavado Polegada",
      },
      {
        titulo: "TABELA DE PESO PARAFUSO SXT DIN 933",
        pdfUrl: "/pdf/tabela-de-peso-parafuso-sxt-din-933.pdf",
        norma: "DIN 933 (ISO 4017) - Rosca Inteira",
        tipo: "Parafuso Sextavado Métrico",
      },
      {
        titulo: "TABELA DE PESO PARAFUSO SXT DIN 931",
        pdfUrl: "/pdf/tabela-de-peso-parafuso-sxt-din-931.pdf",
        norma: "DIN 931 (ISO 4014) - Rosca Parcial",
        tipo: "Parafuso Sextavado Métrico",
      },
      {
        titulo: "TABELA DE PESO PARAFUSO SXT ASTM A325",
        pdfUrl: "/pdf/tabela-de-peso-parafuso-sxt-astm-a325.pdf",
        norma: "ASTM A325 / Tipo 1 Estrutural",
        tipo: "Parafuso Sextavado Pesado",
      },
    ],
  },
  {
    id: "collapse2",
    titulo: "Porcas",
    descricao: "Pesos nominais de porcas sextavadas comerciais, métricas e petroquímicas.",
    icone: "⚙️",
    itens: [
      {
        titulo: "TABELA DE PESO PORCA SXT GR.2 - GR.5 - GR.8",
        pdfUrl: "/pdf/tabela-de-peso-porca-sxt-gr2-gr5-gr8.pdf",
        norma: "Grau 2 / Grau 5 / Grau 8 (ANSI / ASME B18.2.2)",
        tipo: "Porca Sextavada Polegada",
      },
      {
        titulo: "TABELA DE PESO PORCA SXT DIN 934",
        pdfUrl: "/pdf/tabela-de-peso-porca-sxt-din-934.pdf",
        norma: "DIN 934 (ISO 4032) - Classe 8 / 10",
        tipo: "Porca Sextavada Métrica",
      },
      {
        titulo: "TABELA DE PESO PORCA SXT ASTM A194 2H",
        pdfUrl: "/pdf/tabela-de-peso-porca-sxt-astm-a194-2h.pdf",
        norma: "ASTM A194 Grau 2H (Alta Pressão e Temperatura)",
        tipo: "Porca Pesada Petroquímica",
      },
    ],
  },
  {
    id: "collapse3",
    titulo: "Arruelas",
    descricao: "Tabelas com especificações de arruelas lisas métricas, DIN e estruturais temperadas.",
    icone: "🔘",
    itens: [
      {
        titulo: "TABELA DE PESO ARRUELA LISA (DIN 994)",
        pdfUrl: "/pdf/tabela-de-peso-arruela-lisa-din-994.pdf",
        norma: "DIN 994 / Padrão Comercial",
        tipo: "Arruela Lisa Padrão",
      },
      {
        titulo: "TABELA DE PESO ARRUELA LISA DIN 125",
        pdfUrl: "/pdf/tabela-de-peso-arruela-lisa-din-125.pdf",
        norma: "DIN 125 Forma A (ISO 7089)",
        tipo: "Arruela Lisa Métrica Industrial",
      },
      {
        titulo: "TABELA DE PESO ARRUELA LISA F436",
        pdfUrl: "/pdf/tabela-de-peso-arruela-lisa-f436.pdf",
        norma: "ASTM F436 Estrutural Temperada",
        tipo: "Arruela para Fixação Pesada",
      },
    ],
  },
];

export default function TabelasFixadoresContent() {
  // State for accordions: open "collapse1" (Parafusos) by default
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    collapse1: true,
    collapse2: false,
    collapse3: false,
  });

  // Newsletter form state
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync with URL hash if loaded with #collapse1, #collapse2, #collapse3
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && (hash === "collapse1" || hash === "collapse2" || hash === "collapse3")) {
        setOpenSections((prev) => ({
          ...prev,
          [hash]: true,
        }));
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }, []);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setEmail("");
    }, 600);
  };

  const whatsappUrl = `https://wa.me/5511930736051?text=${encodeURIComponent(
    "Olá! Estava consultando as Tabelas de Pesos e Especificações no site da Razemfix e gostaria de tirar uma dúvida sobre especificações técnicas."
  )}`;

  return (
    <div className="space-y-12">
      {/* 2-Columns Layout matching the reference print */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Hardware Photo + Newsletter Signup Card */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          
          {/* Hardware Photograph with subtle framing & shine */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-lg group">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/tabela_fixadores_macro.jpg"
                alt="Especificações e tabelas de fixadores - Parafusos, porcas e arruelas Razemfix"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Micro badge overlay on photo */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-white bg-zinc-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-yellow" />
                Padrão Técnico Industrial
              </span>
              <span className="text-zinc-300 font-mono text-[10px]">ISO 9001:2015</span>
            </div>
          </div>

          {/* CADASTRE-SE E RECEBA NOSSAS PROMOÇÕES */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm relative overflow-hidden">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-yellow via-yellow-400 to-amber-300" />

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-accent-yellow/15 text-accent-yellow-hover">
                  <Mail className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-extrabold text-zinc-950 tracking-tight uppercase">
                  Cadastre-se e receba nossas promoções
                </h3>
              </div>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                Receba informativos técnicos, tabelas atualizadas de fixadores e condições comerciais especiais para indústrias.
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Cadastro realizado com sucesso!</span>
                  </div>
                  <p className="text-[11px] text-emerald-700">
                    Obrigado por se inscrever. Em breve você receberá nossas novidades e catálogos no seu e-mail.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] text-emerald-900 underline font-bold mt-1 inline-block hover:text-emerald-950"
                  >
                    Cadastrar outro e-mail
                  </button>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3 pt-1">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail corporativo"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:border-zinc-950 focus:ring-2 focus:ring-accent-yellow/40 outline-none text-xs text-zinc-900 placeholder:text-zinc-400 bg-zinc-50/60 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-4 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {submitting ? (
                      <span className="inline-block animate-pulse">Cadastrando...</span>
                    ) : (
                      <>
                        <span>Cadastrar</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-zinc-400 text-center font-light">
                    Não enviamos spam. Você pode cancelar sua inscrição a qualquer momento.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Quick Support Card */}
          <div className="p-5 rounded-2xl bg-zinc-900 text-white border border-zinc-800 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-accent-yellow text-xs font-bold uppercase tracking-wider">
              <Phone className="h-3.5 w-3.5" />
              <span>Dúvidas Técnicas?</span>
            </div>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              Consulte nosso departamento de engenharia para ligas especiais, normas fora de linha ou parafusos sob desenho.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-accent-yellow hover:text-white transition-colors"
            >
              <span>Falar com especialista no WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Content Text + Interactive PDF Accordions */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Headings and Copy from the original print */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Especificações de Parafusos
            </h2>

            <p className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
              Somos fabricantes e distribuidores de elementos de fixação em geral.
            </p>

            <p className="text-sm sm:text-base text-zinc-650 leading-relaxed font-light">
              Nossos produtos são utilizados em diversos setores como: automobilístico, metalúrgico, construção civil, petroquímico, telecomunicações, mineração, entre outros.
            </p>

            <p className="text-sm sm:text-base text-zinc-650 leading-relaxed font-light">
              Com preços competitivos e excelência na qualidade, garantimos ser a escolha certa para a satisfação de nossos clientes.
            </p>
          </div>

          {/* Divider with accent highlight */}
          <div className="pt-2 pb-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 bg-accent-yellow rounded-full" />
              <h3 className="text-xs sm:text-sm font-extrabold tracking-wider text-zinc-950 uppercase">
                CONHEÇA A TABELA DE PESOS DE FIXADORES RAZEMFIX
              </h3>
            </div>
            <p className="text-xs text-zinc-500 font-light mt-1 pl-11">
              Selecione a categoria abaixo para visualizar e baixar os arquivos em PDF com as tabelas completas.
            </p>
          </div>

          {/* ACCORDION SECTIONS */}
          <div className="space-y-4">
            {CATEGORIAS_TABELAS.map((categoria) => {
              const isOpen = !!openSections[categoria.id];
              return (
                <div
                  key={categoria.id}
                  id={categoria.id}
                  className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition-all duration-200 hover:border-zinc-300"
                >
                  {/* Accordion Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleSection(categoria.id)}
                    aria-expanded={isOpen}
                    className={`w-full px-5 py-4 flex items-center justify-between text-left transition-colors select-none cursor-pointer ${
                      isOpen
                        ? "bg-zinc-50/80 border-b border-zinc-200"
                        : "bg-white hover:bg-zinc-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{categoria.icone}</span>
                      <div>
                        <span className="font-extrabold text-sm sm:text-base text-zinc-950">
                          {categoria.titulo}
                        </span>
                        <span className="text-[11px] text-zinc-500 font-light block">
                          {categoria.itens.length} {categoria.itens.length === 1 ? "tabela disponível" : "tabelas disponíveis"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-zinc-400 hidden sm:inline">
                        {isOpen ? "Recolher" : "Expandir"}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-zinc-700 transition-all ${
                          isOpen ? "bg-accent-yellow text-zinc-950 font-bold" : "bg-zinc-100"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Accordion Content Panel */}
                  {isOpen && (
                    <div className="p-4 sm:p-5 space-y-3 bg-zinc-50/30 animate-fadeIn">
                      <p className="text-xs text-zinc-500 font-light mb-3">
                        {categoria.descricao}
                      </p>

                      <div className="space-y-2.5">
                        {categoria.itens.map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-xl p-3.5 sm:p-4 border border-zinc-200 hover:border-accent-yellow/60 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-2.5 rounded-lg bg-red-50 text-red-600 border border-red-100 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div className="space-y-0.5">
                                <h4 className="font-bold text-xs sm:text-sm text-zinc-950 group-hover:text-yellow-800 transition-colors">
                                  {item.titulo}
                                </h4>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-500">
                                  <span className="font-medium text-zinc-700">{item.tipo}</span>
                                  <span>•</span>
                                  <span className="text-zinc-500 font-mono text-[10px]">{item.norma}</span>
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-100">
                              <a
                                href={item.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                                title="Abrir PDF em nova aba"
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                                <span>Abrir</span>
                              </a>
                              <a
                                href={item.pdfUrl}
                                download
                                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                                title="Fazer download do arquivo PDF"
                              >
                                <Download className="h-3.5 w-3.5" />
                                <span>Baixar PDF</span>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom helper card: Catálogo Online integration */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-zinc-50 to-amber-50/40 border border-yellow-200/70 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-800 uppercase tracking-wider">
                <FileCheck className="h-3.5 w-3.5 text-accent-yellow-hover" />
                Catálogo Técnico Completo
              </div>
              <h4 className="font-extrabold text-sm sm:text-base text-zinc-950">
                Deseja consultar bitolas, normas e linhas especiais?
              </h4>
              <p className="text-xs text-zinc-600 font-light">
                Acesse online o Catálogo Oficial Razemfix com mais de 30 páginas de especificações técnicas.
              </p>
            </div>

            <Link
              href="/catalogo-online"
              className="shrink-0 px-5 py-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md"
            >
              <span>Ver Catálogo Online</span>
              <ArrowRight className="h-3.5 w-3.5 text-accent-yellow" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
