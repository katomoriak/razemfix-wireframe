"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Hammer,
  Settings,
  Activity,
  ArrowRight,
  MessageSquare,
  FileText,
  Star,
  Quote,
  Zap,
  Building,
  Anchor,
  Compass,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [activeTestimonialTab, setActiveTestimonialTab] = useState(0);

  const differentials = [
    { text: "Estoque Regulador Amplo", icon: Building },
    { text: "Rastreabilidade Rigorosa", icon: ShieldCheck },
    { text: "Projetos Sob Medida", icon: Settings },
    { text: "Alta Performance Mecânica", icon: Activity },
    { text: "Atendimento Técnico Especializado", icon: Hammer },
  ];

  const categories = [
    {
      id: "cat-1",
      title: "Parafusos Sextavados, Linha Pesada e Estojos",
      emoji: "🛠️",
      techName: "Alta Responsabilidade Mecânica",
      desc: "Fixação de alta responsabilidade mecânica para montagens estruturais, flanges e maquinários. Produzidos sob rigorosos padrões normativos. Modelos em rosca inteira/parcial, parafusos estruturais (ASTM A325 / A490), prisioneiros para alta pressão (A193 B7/B8) e barras roscadas sob medida.",
      standards: ["ASTM A325 / A490", "A193 B7/B8", "DIN 931 / 933", "ISO 4014 / 4017"],
      badge: "Grau Estrutural"
    },
    {
      id: "cat-2",
      title: "Linha Sextavado Interno (Allen) e Fixação Rápida",
      emoji: "🔩",
      techName: "Ajuste de Alta Precisão",
      desc: "Componentes essenciais para ajustes mecânicos de precisão, maquinários internos e montagens faceadas ou niveladas. Inclui parafusos Allen (cabeça cilíndrica, chata, abaulada e sem cabeça), parafusos de ombro (Shoulder) e parafusos auto-brocantes técnicos.",
      standards: ["DIN 912 (Cilíndrica)", "DIN 7991 (Chata)", "ISO 7380 (Abaulada)", "DIN 913/916 (Sem cabeça)"],
      badge: "Precisão Interna"
    },
    {
      id: "cat-3",
      title: "Porcas, Arruelas Técnicas e Rebites de Repuxo",
      emoji: "⚙️",
      techName: "Distribuição Ideal de Cargas",
      desc: "Soluções robustas para distribuição ideal de carga, fixações comerciais cotidianas e sistemas de travamento de segurança mecânica. Ampla variedade de porcas sextavadas estruturais, auto-travantes com inserto de nylon, arruelas lisas de alta resistência (ASTM F436) e arruelas de pressão mecânica.",
      standards: ["ASTM F436 (Arruelas)", "DIN 985 (Auto-travantes)", "DIN 125 (Lisas)", "DIN 934 (Porcas)"],
      badge: "Segurança de Travamento"
    }
  ];

  const testimonials = [
    {
      sector: "Setor Automotivo Pesado",
      author: "Marcos S.",
      role: "Comprador Industrial",
      quote: "Excelente atendimento B2B. Estávamos com problemas de paradas frequentes na nossa linha de montagem por falta de parafusos com a classe de resistência adequada. A equipe técnica da Razemfix realizou um atendimento consultivo excelente e nos entregou lotes de parafusos classe 10.9 homologados com extrema rapidez.",
      icon: Building,
      rating: 5,
    },
    {
      sector: "Construção Civil Estrutural",
      author: "Ricardo A.",
      role: "Engenheiro de Estruturas",
      quote: "O grande diferencial operacional da Razemfix é a rastreabilidade e a conformidade rigorosa com as normas DIN e ISO. Para nós, no setor de construção pesada, a segurança estrutural é inegociável. Os parafusos estruturais ASTM A325 fornecidos cumprem perfeitamente todos os requisitos técnicos.",
      icon: Compass,
      rating: 5,
    },
    {
      sector: "Indústria Química e Naval",
      author: "Juliana M.",
      role: "Gestora de Suprimentos",
      quote: "Tínhamos uma demanda complexa e sob medida para elementos de fixação em aço inoxidável grau 316 para resistir a ambientes marítimos altamente corrosivos. Eles desenvolveram as peças sob desenho técnico com perfeição e o lote foi homologado sem restrições. Excelente distribuidor.",
      icon: Anchor,
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Decorative Grid Line Overlays */}
      <div className="absolute top-20 left-10 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block" />
      <div className="absolute top-20 right-10 bottom-0 w-px bg-white/[0.02] pointer-events-none hidden lg:block" />

      {/* SECTION 01: HERO (INTRODUÇÃO DE IMPACTO) */}
      <section className="relative pt-12 pb-20 md:py-28 lg:py-36 overflow-hidden grid-bg border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-[#0b0f17]/40 z-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase animate-pulse">
                <Zap className="h-3 w-3 fill-orange-400" />
                Especificação Exata & Segurança Mecânica
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Distribuidor de Parafusos, <br className="hidden sm:inline" />
                <span className="font-extrabold text-black">
                  Porcas e Arruelas
                </span> <br />
                para Fixação Industrial
              </h1>
              
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest block border-l-2 border-orange-500 pl-3 max-w-xl mx-auto lg:mx-0">
                “A especificação exata e a segurança que sua linha exige.”
              </p>

              <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Unimos atendimento técnico qualificado a um amplo estoque regulador para abastecer indústrias, montadoras e o setor da construção civil com máxima segurança mecânica.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/contato"
                  className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-sm tracking-wider shadow-lg shadow-orange-500/15 hover:shadow-orange-500/25 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group border border-orange-400/20"
                >
                  <FileText className="h-4 w-4" />
                  SOLICITAR ORÇAMENTO B2B
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="https://wa.me/551143182878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-sm tracking-wider border border-white/10 hover:border-white/20 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-500" />
                  WHATSAPP COMERCIAL
                </a>
              </div>
            </div>

            {/* Right Tech Drawing */}
            <div className="lg:col-span-5 hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/5 rounded-2xl blur-xl" />
              <div className="border border-white/10 rounded-2xl p-4 glass-panel relative">
                <div className="absolute top-2 right-4 text-[9px] font-mono text-slate-500 z-10 bg-black/50 px-2 rounded">SYS_VIEW_01 // SEC_BLUEPRINT</div>
                <img src="https://placehold.co/600x400" alt="Fixadores Industriais" className="w-full h-auto drop-shadow-2xl rounded-xl object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: DIFERENCIAIS OPERACIONAIS (LISTA HORIZONTAL CONTÍNUA) */}
      <section className="bg-slate-950 border-b border-white/5 py-6 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
        
        {/* Infinite Marquee Scroll Container */}
        <div className="flex select-none">
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
            {/* First Set of Items */}
            {differentials.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div key={`d1-${index}`} className="flex items-center gap-3.5 bg-[#0f172a]/40 px-5 py-2.5 rounded-full border border-white/5 shadow-sm">
                  <div className="bg-orange-500/10 p-1.5 rounded-full text-orange-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-bold tracking-wide text-slate-200">
                    {diff.text}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center" aria-hidden="true">
            {/* Second Set of Items (Duplicate for seamless loop) */}
            {differentials.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div key={`d2-${index}`} className="flex items-center gap-3.5 bg-[#0f172a]/40 px-5 py-2.5 rounded-full border border-white/5 shadow-sm">
                  <div className="bg-orange-500/10 p-1.5 rounded-full text-orange-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-bold tracking-wide text-slate-200">
                    {diff.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03: SOBRE NÓS (POSICIONAMENTO INSTITUCIONAL) */}
      <section className="py-20 bg-[#0b0f17] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Column Left (Visual) */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent rounded-2xl blur-xl" />
              <div className="border border-white/10 rounded-2xl overflow-hidden glass-panel relative group">
                <div className="absolute top-3 left-4 text-[9px] font-mono text-slate-500 z-10 bg-black/50 px-2 rounded">INFRASTRUCTURE_MODULE // RAW_STOCK_3D</div>
                <div className="aspect-[4/3] bg-slate-900/50 relative overflow-hidden">
                  <img src="https://placehold.co/800x600" alt="Estoque Razemfix" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                </div>
                {/* Visual Label overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-white/10 rounded-lg p-3 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-orange-500 font-bold block uppercase tracking-wider">Estoque Regulador Razemfix</span>
                    <span className="text-xs text-slate-300">Infraestrutura automatizada B2B</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">100% Ativo</span>
                </div>
              </div>
            </div>

            {/* Column Right (Text Content) */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block">
                  SOBRE A EMPRESA
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Engenharia de Fixação e Parceria Estratégica B2B
                </h2>
              </div>

              <div className="w-16 h-1 bg-orange-500 rounded-full" />

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light space-y-4">
                Há anos no mercado, a Razemfix é referência na fabricação e distribuição de uma linha completa de elementos de fixação desenvolvidos para alta performance e máxima segurança industrial. Unimos atendimento técnico qualificado a um amplo estoque regulador para abastecer indústrias, montadoras, o setor da construção civil e o varejo.
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                Atuamos com suporte consultivo direto de nossa engenharia para encontrar a especificação exata da sua necessidade, fornecendo produtos 100% normalizados e testados em total conformidade com as normas ANSI, DIN, ISO e ABNT.
              </p>

              <div className="pt-4">
                <Link
                  href="/sobre-nos"
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors group relative py-1"
                >
                  CONHEÇA NOSSA INFRAESTRUTURA
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 04: PRODUTOS (VITRINE DE CATEGORIAS) */}
      <section className="py-20 bg-slate-950 relative border-t border-b border-white/5">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block">
              PORTFÓLIO TÉCNICO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Soluções Completas em Elementos de Fixação Industrial
            </h2>
            <p className="text-sm md:text-base text-slate-400">
              Conheça as 3 categorias principais desenvolvidas para alta responsabilidade mecânica:
            </p>
            <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto" />
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                className="border border-white/10 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:border-orange-500/30 group flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-orange-500/5 relative"
              >
                {/* Accent stripe on card header */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Category Header */}
                  <div className="flex items-start justify-between">
                    <div className="text-3xl bg-slate-800/80 p-3 rounded-lg border border-white/5 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-colors">
                      {cat.emoji}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase border border-slate-700/50 px-2.5 py-1 rounded">
                      {cat.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs text-orange-400 font-mono tracking-wider block">
                      // {cat.techName}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-orange-400 transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {cat.desc}
                  </p>

                  {/* Standards specs tags */}
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Principais Normas:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.standards.map((std) => (
                        <span key={std} className="text-[10px] font-mono bg-slate-950/80 text-slate-400 border border-white/5 px-2 py-0.5 rounded">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 bg-slate-950/40 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors">Visualizar no Catálogo</span>
                  <Link
                    href={`/produtos?cat=${index}`}
                    className="p-2 bg-slate-850 group-hover:bg-orange-500 text-slate-300 group-hover:text-white rounded-lg transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Catalog CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 px-6 py-3 border border-orange-500/30 hover:border-orange-500/80 bg-orange-500/5 hover:bg-orange-500/10 text-orange-400 rounded-lg font-bold text-sm tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5"
            >
              ACESSAR CATÁLOGO GERAL DE PRODUTOS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 05: AVALIAÇÕES (PROVA SOCIAL REAL) */}
      <section className="py-20 bg-[#0b0f17] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block">
              RECONHECIMENTO B2B
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Garantia de Qualidade e Confiança B2B
            </h2>
            <p className="text-sm md:text-base text-slate-400">
              Depoimentos reais de quem atesta a conformidade regulatória e a agilidade logística da Razemfix:
            </p>
            <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto" />
          </div>

          {/* Interactive Review Showcase */}
          <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl bg-slate-900/30 overflow-hidden glass-panel relative shadow-xl">
            {/* Tab buttons */}
            <div className="flex border-b border-white/10 overflow-x-auto bg-slate-950/60 scrollbar-none">
              {testimonials.map((test, index) => {
                const Icon = test.icon;
                const isActive = activeTestimonialTab === index;
                return (
                  <button
                    key={test.sector}
                    onClick={() => setActiveTestimonialTab(index)}
                    className={`flex-1 min-w-[200px] text-center py-4 px-6 font-bold text-xs tracking-wider transition-all duration-200 uppercase flex items-center justify-center gap-2 border-b-2 ${
                      isActive
                        ? "border-orange-500 text-orange-500 bg-orange-500/5 font-extrabold"
                        : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {test.sector}
                  </button>
                );
              })}
            </div>

            {/* Tab content panel */}
            <div className="p-8 sm:p-10 space-y-6 min-h-[260px] flex flex-col justify-between relative">
              <Quote className="absolute top-6 right-8 h-20 w-20 text-orange-500/5 pointer-events-none" />
              
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[activeTestimonialTab].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed italic">
                  "{testimonials[activeTestimonialTab].quote}"
                </p>
              </div>

              {/* Author metadata */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className="h-10 w-10 bg-orange-500/10 border border-orange-500/30 text-orange-500 rounded-full flex items-center justify-center font-bold text-sm">
                  {testimonials[activeTestimonialTab].author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">
                    {testimonials[activeTestimonialTab].author}
                  </div>
                  <div className="text-xs text-slate-500">
                    {testimonials[activeTestimonialTab].role} • {testimonials[activeTestimonialTab].sector}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 06: CONTATO & COTAÇÃO RÁPIDA */}
      <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Left */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-widest">
                Atendimento B2B Ágil e Eficiente
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Peça um Orçamento para Sua Indústria
              </h2>
              <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Envie sua listagem de materiais, especificações normativas ou desenhos de peças customizadas. Nossa equipe comercial responderá com agilidade agressiva para garantir o abastecimento da sua produção.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-sm font-semibold text-slate-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500" /> Resposta em até 2 horas úteis
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500" /> Faturamento flexível corporativo
                </span>
              </div>
            </div>

            {/* Action CTA Box Right */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-orange-500/15 rounded-2xl blur-lg pointer-events-none" />
              <div className="border border-white/10 rounded-2xl p-8 bg-slate-900/60 backdrop-blur-md relative space-y-6 text-center shadow-2xl">
                
                {/* Background Image Deco */}
                <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-2xl">
                  <img src="https://placehold.co/400x400" alt="Consultoria Técnica" className="object-cover w-full h-full" />
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="text-lg font-bold text-white">Canal de Cotações Rápidas</h3>
                  <p className="text-xs text-slate-400">Tem uma lista de materiais pronta? Envie em poucos segundos.</p>
                </div>

                <div className="pt-2 relative z-10 space-y-3">
                  <Link
                    href="/contato"
                    className="w-full px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-sm tracking-wider shadow-lg shadow-orange-500/15 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group border border-orange-400/20"
                  >
                    <FileText className="h-4 w-4" />
                    ACESSAR FORMULÁRIO DE COTAÇÃO
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="mailto:contato@razemfix.com.br"
                    className="block w-full px-6 py-3 border border-white/10 hover:border-orange-500/30 bg-slate-950/80 hover:bg-slate-950 text-slate-300 hover:text-orange-400 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 text-center"
                  >
                    Enviar e-mail: contato@razemfix.com.br
                  </a>
                </div>

                <div className="text-[10px] text-slate-500 leading-normal font-mono relative z-10 pt-2 border-t border-white/5">
                  MATRIZ INDUSTRIAL: SÃO CAETANO DO SUL - SP <br />
                  FONE: (11) 4318-2878
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
