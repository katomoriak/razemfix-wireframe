"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Settings,
  ArrowRight,
  FileText,
  Award,
  Zap,
  PhoneCall,
  Hammer,
  Layers,
  Package,
  Activity,
  Wrench,
} from "lucide-react";

export default function Home() {
  const heroRef = React.useRef<HTMLElement>(null);
  const marketsRef = React.useRef<HTMLElement>(null);
  const whatsappUrl = `https://wa.me/5511930736051?text=${encodeURIComponent(
    "Olá, estava vendo a página Home do site e decidi entrar em contato com vocês! Gostaria de mais informações, podem me ajudar?"
  )}`;

  const updateMousePosition = (e: React.MouseEvent<HTMLElement>, ref: React.RefObject<HTMLElement | null>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--mouse-x", `${x}px`);
    ref.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const resetMousePosition = (ref: React.RefObject<HTMLElement | null>) => {
    if (!ref.current) return;
    ref.current.style.setProperty("--mouse-x", `50%`);
    ref.current.style.setProperty("--mouse-y", `50%`);
  };

  const pillars = [
    { text: "Estoque Regulador Amplo", icon: Package },
    { text: "Rastreabilidade Rigorosa", icon: ShieldCheck },
    { text: "Projetos Sob Medida", icon: Settings },
    { text: "Fixadores de Alta Resistência", icon: Activity },
    { text: "Parafusos Inox e Especiais", icon: Wrench },
    { text: "Atendimento Técnico Especializado", icon: Wrench },
  ];

  const sectors = [
    { name: "Indústria Metal Mecânica", desc: "Suprimento estrutural e fixadores para equipamentos mecânicos." },
    { name: "Bens de Capital (Máquinas/Equipamentos)", desc: "Parafusos Allen e porcas técnicas de alta precisão." },
    { name: "Estruturas Metálicas", desc: "Parafusos estruturais e arruelas calibradas para sustentação." },
    { name: "Energia Solar / Fotovoltaica", desc: "Parafusos autobrocantes e fixadores para perfis de alumínio." },
    { name: "Setor Naval", desc: "Elementos de fixação resistentes à corrosão em aço inox 316." },
    { name: "Petroquímico", desc: "Prisioneiros e porcas resistentes à alta temperatura e pressão." },
    { name: "Infraestrutura / Construção Civil Pesada", desc: "Ancoragens químicas e chumbadores mecânicos de expansão." },
  ];

  const categories = [
    {
      title: "Parafusos",
      items: [
        "Sextavados (Rosca Inteira e Parcial)",
        "Allen (Cilíndrico, Abaulado, Escareado e Sem Cabeça)",
        "Francês e Martelo",
        "Autobrocantes (Para fixação de telhas e painéis solares)",
      ],
      desc: "Ampla gama de parafusos sextavados, allen e outras cabeças normatizadas em aço carbono, inox e ligas especiais.",
      image: "/parafusos.png",
    },
    {
      title: "Porcas",
      items: [
        "Porcas Sextavadas (Grau 2, 5, 8, Classe 8 e 10)",
        "Porcas Flangeadas Serrilhadas",
        "Porcas Auto-Travantes (Com inserto de nylon)",
      ],
      desc: "Porcas industriais calibradas para travamento de segurança e distribuição uniforme de esforços.",
      image: "/porcas.png",
    },
    {
      title: "Arruelas",
      items: [
        "Arruelas Lisas (ASTM F436, DIN 125, ABNT)",
        "Arruelas de Pressão (DIN 127)",
      ],
      desc: "Arruelas técnicas para assentamento e segurança mecânica contra afrouxamento por vibração.",
      image: "/arruelas.png",
    },
    {
      title: "Chumbadores Mecânicos",
      items: [
        "Parabolts e Chumbadores de Expansão Controlada",
        "CBA — Chumbador de Barra de Ancoragem",
        "Chumbadores de Impacto e Cunha",
      ],
      desc: "Fixação mecânica de alto desempenho em concreto e alvenaria estrutural, com controle rigoroso de carga.",
      image: "/chumbadores mecanicos.png",
    },
    {
      title: "Chumbadores Químicos",
      items: [
        "Ampolas de Resina para Ancoragem",
        "Resinas Injetáveis (Epóxi e Vinilester)",
        "Hastes Roscadas para Ancoragem Química",
      ],
      desc: "Soluções de ancoragem química para cargas elevadas em concreto fissurado e estruturas especiais.",
      image: "/chumbadores quimicos.png",
    },
    {
      title: "Rebites",
      items: [
        "Rebites de Repuxo Técnico (Alumínio, Aço e Inox)",
        "Rebites Estruturais de Alta Resistência",
        "Rebites Flangeados e de Grande Diâmetro",
      ],
      desc: "Fixação rápida e permanente por repuxo industrial, ideal para uniões de chapas metálicas e perfis.",
      image: "/rebites.png",
    },
    {
      title: "Fixadores Para Painéis Solares",
      items: [
        "Parafusos Autobrocantes para Perfis de Alumínio",
        "Clamps e Fixadores de Módulos Fotovoltaicos",
        "Parafusos e Porcas em Aço Inox para Estruturas",
      ],
      desc: "Elementos de fixação dedicados para sistemas fotovoltaicos, resistentes à corrosão e às intempéries para máxima durabilidade.",
      image: "/paineis solares.png",
    },
    {
      title: "Acessórios e Fixadores",
      items: [
        "Barras Roscadas (DIN 975 — Corte sob medida)",
        "Estojos e Prisioneiros Roscados",
        "Acessórios para Cabos de Aço (Clipes, sapatilhas, esticadores)",
        "Fixadores dedicados para estruturas de construção civil",
      ],
      desc: "Barras estruturais, acessórios de movimentação de carga, suporte logístico e montagem civil pesada.",
      image: "/acessorios.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-zinc-900">
      
      <section 
        ref={heroRef}
        onMouseMove={(e) => updateMousePosition(e, heroRef)}
        onMouseLeave={() => resetMousePosition(heroRef)}
        className="relative pt-16 pb-0 md:pt-28 md:pb-0 lg:pt-32 lg:pb-0 overflow-hidden hex-bg bg-white border-b border-zinc-200"
      >
        
        {/* Background Decorative Tech Hexagons */}
        <div className="absolute right-[-12%] sm:right-[-15%] top-[-8%] sm:top-[-10%] w-[380px] h-[380px] sm:w-[550px] sm:h-[550px] lg:w-[700px] lg:h-[700px] text-accent-yellow opacity-[0.18] pointer-events-none select-none z-10 animate-slow-spin">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <path 
              d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" 
              stroke="currentColor" 
              strokeWidth="0.8" 
            />
          </svg>
        </div>

        <div className="absolute left-[-12%] sm:left-[-15%] bottom-[-10%] sm:bottom-[-12%] w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[620px] lg:h-[620px] text-zinc-400 opacity-[0.25] pointer-events-none select-none z-10 animate-slow-spin-reverse">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <path 
              d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" 
              stroke="currentColor" 
              strokeWidth="0.8" 
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-yellow/10 border border-accent-yellow/30 text-accent-yellow-hover text-xs font-bold tracking-wider uppercase">
                <Zap className="h-3.5 w-3.5 fill-accent-yellow text-accent-yellow" />
                Especificação Normatizada & Qualidade Garantida
              </div>
              
              <h1 className="text-3.5xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-tight">
                Parafusos e Fixadores de <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow to-accent-yellow-hover font-extrabold">
                  Alta Qualidade
                </span>
              </h1>
              
              <p className="text-sm font-bold text-accent-yellow-hover uppercase tracking-wider block border-l-2 border-accent-yellow pl-3 max-w-xl mx-auto lg:mx-0">
                “A especificação exata e a segurança que sua linha exige.”
              </p>

              <p className="text-base md:text-lg text-zinc-650 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Como <strong className="font-semibold text-zinc-900">fabricante de parafusos</strong> e <strong className="font-semibold text-zinc-900">fixadores industriais</strong>, oferecemos soluções completas para o abastecimento de empresas e indústrias, fornecendo parafusos e fixadores variados de alta resistência, desenvolvidos sob medida e conforme normas internacionais.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/contato"
                  className="w-auto sm:min-w-[310px] px-6 sm:px-8 py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 rounded-lg font-bold text-sm tracking-wider shadow-md active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group border border-accent-yellow/20 whitespace-nowrap"
                >
                  <FileText className="h-4 w-4 shrink-0" />
                  SOLICITAR COTAÇÃO RÁPIDA
                  <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group z-0 w-auto sm:min-w-[310px] px-6 sm:px-8 py-4 bg-zinc-900 text-white rounded-lg font-bold text-sm tracking-wider active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap animate-pulse-subtle hover:animate-none"
                >
                  {/* Expanding circle background */}
                  <span className="absolute inset-0 bg-emerald-600 rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 ease-out -z-10 origin-center" />
                  
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 text-accent-yellow shrink-0 group-hover:text-white transition-colors duration-300">
                    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.414 1.258 4.86L2 22l5.312-1.394c1.408.767 3.013 1.206 4.698 1.206 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.78 13.06c-.2.56-1.16 1.08-1.6 1.12-.4.04-.92.22-2.74-.5-2.32-.92-3.8-3.28-3.92-3.44-.12-.16-1.04-1.38-1.04-2.63 0-1.25.64-1.86.88-2.12.2-.22.44-.28.58-.28.14 0 .28 0 .4.02.12.02.28-.04.44.34.16.38.56 1.36.6 1.48.04.1.06.22 0 .34-.06.12-.1.2-.2.32-.1.1-.2.24-.3.34-.1.12-.22.24-.1.44.12.2.54.88 1.14 1.42.78.7 1.44.92 1.64 1.02.2.1.32.08.44-.06.12-.14.52-.6.66-.8.14-.2.28-.16.48-.08.2.08 1.26.6 1.48.7.22.1.36.16.42.26.06.1.06.56-.14 1.12z" />
                  </svg>
                  
                  <span>CONTATE-NOS PELO WHATSAPP</span>

                  {/* Sliding External Arrow Icon */}
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-3.5 w-0 opacity-0 group-hover:w-3.5 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shrink-0 text-white"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side Visual Panel */}
            <div className="lg:col-span-6 relative flex justify-center items-center group">
              {/* Soft decorative background glow for depth and floating ambience */}
              <div className="absolute w-[50%] h-[50%] rounded-full bg-yellow-500/10 blur-3xl opacity-70 pointer-events-none transition-all duration-1000 group-hover:bg-yellow-500/15 group-hover:scale-[1.6] group-hover:opacity-95"></div>
              
              <div className="w-full max-w-lg scale-110 sm:scale-115 lg:scale-[1.28] group-hover:scale-[1.34] transition-all duration-700 ease-out relative z-20 cursor-pointer">
                <img
                  src="/parafusos%20home.png"
                  alt="Fixadores e Parafusos Industriais Razemfix"
                  className="w-full h-auto object-contain select-none drop-shadow-[0_12px_30px_rgba(234,179,8,0.12)] group-hover:drop-shadow-[0_30px_70px_rgba(234,179,8,0.25)] transition-all duration-700 animate-mechanical-float"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1530124566582-a618bc2615ad?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </div>

        </div>
      </div>

        {/* INFINITE ROLLING BANNER (PILL TÓPICOS) */}
        <div className="mt-16 md:mt-24 mb-12 md:mb-16 py-3 overflow-hidden select-none pointer-events-none relative z-20">
          <div className="flex w-max gap-6 animate-marquee">
            {[...pillars, ...pillars, ...pillars, ...pillars].map((pillar, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-zinc-200/90 rounded-full pl-3 pr-5 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.05)] shrink-0"
              >
                <div className="flex items-center justify-center bg-accent-yellow/10 border border-accent-yellow/20 p-1.5 rounded-full text-yellow-650">
                  <pillar.icon className="h-3.5 w-3.5" />
                </div>
                <span className="text-zinc-950 font-extrabold text-[11px] tracking-wider uppercase">
                  {pillar.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. QUEM SOMOS, QUALIDADE E CERTIFICAÇÃO ISO 9001 */}
      <section className="relative py-20 bg-white border-b border-zinc-200 overflow-hidden">
        {/* Background Image with grayscale and transparency */}
        <div className="absolute inset-0 z-0 opacity-12 grayscale pointer-events-none">
          <Image
            src="/prateleiras razemfix.jpg"
            alt="Prateleiras Razemfix"
            fill
            className="object-cover object-center"
          />
          {/* Subtle overlay to ensure high text contrast */}
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Column Left (Text Content) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider text-yellow-700 uppercase block">
                  QUEM SOMOS & QUALIDADE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                  Garantia de Qualidade e Rastreabilidade Integral
                </h2>
              </div>

              <div className="w-16 h-1.5 bg-accent-yellow rounded-full" />

              <p className="text-zinc-650 leading-relaxed text-sm sm:text-base font-light">
                A Razemfix é referência como <strong className="font-semibold text-zinc-900">fabricante de parafusos</strong> e distribuidora de elementos de fixação de alta performance. Atuamos com foco no fornecimento de <strong className="font-semibold text-zinc-900">parafusos e fixadores de alta qualidade para empresas e indústrias</strong>, combinando suporte técnico a um amplo estoque regulador.
              </p>
              
              <p className="text-zinc-650 leading-relaxed text-sm sm:text-base font-light">
                Nosso catálogo conta com <strong className="font-semibold text-zinc-900">fixadores de alta resistencia</strong> que atendem rigorosamente a especificações técnicas nacionais e internacionais. Todos os lotes possuem certificado de qualidade e procedência de matéria-prima, com rastreabilidade completa para auditorias.
              </p>
            </div>

            {/* Column Right (Highlight Certifications - ISO 9001) */}
            <div className="lg:col-span-5">
              <div className="group border-2 border-accent-yellow bg-zinc-50 rounded-2xl p-8 relative overflow-hidden shadow-lg flex flex-col justify-between h-full">
                <div className="absolute -top-24 -right-24 w-80 h-80 text-accent-yellow opacity-35 pointer-events-none select-none transition-all duration-500 ease-out group-hover:scale-115 group-hover:opacity-50">
                  <div className="w-full h-full animate-slow-spin">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                      <path 
                        d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" 
                        stroke="currentColor" 
                        className="card-hexagon-path"
                      />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-500/10 p-4 rounded-xl text-yellow-700 border border-yellow-500/25 flex-shrink-0">
                      <Award className="h-10 w-10 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-zinc-950 uppercase tracking-tight">
                        ISO 9001
                      </h3>
                      <span className="text-xs text-zinc-500 font-bold block uppercase tracking-widest">
                        Sistema de Gestão de Qualidade
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed font-light">
                    Nossos processos de fabricação e distribuição são certificados rigorosamente segundo a norma **ISO 9001**, atestando a padronização dimensional, conformidade regulatória e a excelência no atendimento.
                  </p>

                  <div className="pt-4 border-t border-zinc-200 grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-zinc-400 font-bold block uppercase tracking-wider">Normas Técnicas</span>
                      <span className="text-xs text-zinc-850 font-bold">DIN, ISO, ASTM, ABNT</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-zinc-400 font-bold block uppercase tracking-wider">Rastreabilidade</span>
                      <span className="text-xs text-zinc-850 font-bold">100% dos Lotes Certificados</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs font-bold text-yellow-800 relative z-10">
                  <ShieldCheck className="h-5 w-5 text-yellow-600" />
                  Homologação sem restrições em auditorias industriais
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MERCADOS DE ATUAÇÃO (INSPIRADO SIDER) */}
      <section 
        ref={marketsRef}
        onMouseMove={(e) => updateMousePosition(e, marketsRef)}
        onMouseLeave={() => resetMousePosition(marketsRef)}
        className="py-20 bg-zinc-100 border-b border-zinc-200 hex-bg overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="space-y-3 mb-12 text-center lg:text-left">
            <span className="text-xs font-bold tracking-wider text-yellow-700 uppercase block">
              MERCADOS ATENDIDOS
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-950 tracking-tight">
              Elementos de Fixação de Alta Qualidade e Suporte Técnico para Engenharia
            </h2>
            <p className="text-zinc-650 font-light text-sm max-w-3xl">
              Garantimos o fornecimento qualificado de parafusos e fixadores industriais para aplicações severas, atendendo indústrias, fabricantes de máquinas, equipamentos e engenharia estrutural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden bg-white border border-zinc-200 rounded-xl p-5 pl-7 shadow-sm hover:border-accent-yellow/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Background Hexagon Icon cut off on the left */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-20 h-20 text-accent-yellow/25 pointer-events-none select-none z-0 transition-all duration-500 ease-out group-hover:scale-120 group-hover:opacity-45">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-none" stroke="currentColor">
                    <path d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" className="card-hexagon-path" />
                  </svg>
                </div>

                <div className="space-y-2 relative z-10 pl-2">
                  <div className="h-1.5 w-8 bg-accent-yellow rounded-full" />
                  <h3 className="font-bold text-zinc-950 text-sm">{sector.name}</h3>
                  <p className="text-zinc-600 text-xs font-light leading-relaxed">{sector.desc}</p>
                </div>
              </div>
            ))}

            {/* Extra CTA Card at the end */}
            <Link
              href="/contato"
              className="relative overflow-hidden bg-accent-yellow hover:bg-accent-yellow-hover border border-accent-yellow/20 rounded-xl p-5 pl-7 shadow-sm transition-all duration-300 flex flex-col justify-center group min-h-[140px] cursor-pointer"
            >
              {/* Background Hexagon Icon cut off on the left */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-20 h-20 text-zinc-950/15 pointer-events-none select-none z-0 transition-all duration-500 ease-out group-hover:scale-120 group-hover:opacity-25">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none" stroke="currentColor">
                  <path d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" className="card-hexagon-path" />
                </svg>
              </div>
              
              <div className="space-y-2 relative z-10 pl-2">
                <h3 className="font-black text-zinc-950 text-sm uppercase tracking-wider flex items-center gap-1.5">
                  Falar com Especialista
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-zinc-900 text-xs font-semibold leading-normal">
                  Solicite seu orçamento personalizado ou tire dúvidas técnicas.
                </p>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. MANDATORY BANNER - FABRICAÇÃO DE ESPECIAIS */}
      <section className="py-8 bg-zinc-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 py-2">
            <div className="bg-accent-yellow text-zinc-950 p-2.5 rounded-lg">
              <Settings className="h-6 w-6 animate-spin" style={{ animationDuration: "8s" }} />
            </div>
            <p className="text-base sm:text-lg md:text-xl font-black tracking-tight text-white max-w-4xl text-center md:text-left leading-normal">
              Somos especializados em <strong className="text-accent-yellow">fixadores personalizados</strong> — Envie seu projeto ou amostra para fabricação de <strong className="text-accent-yellow">parafuso sob medida</strong> ou <strong className="text-accent-yellow">parafuso personalizado</strong>.
            </p>
            <Link
              href="/contato"
              className="mt-3 md:mt-0 px-5 py-2.5 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 rounded-lg text-xs font-bold tracking-wider transition-colors uppercase"
            >
              Consultar Engenharia
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CATÁLOGO DE PRODUTOS & MATERIAIS */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-wider text-yellow-700 uppercase block">
              PORTFÓLIO DE PRODUTOS
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-950 tracking-tight">
              Grade de Elementos de Fixação Padronizados
            </h2>
            <p className="text-zinc-600 text-sm font-light">
              Navegue pelas principais categorias mecânicas normatizadas disponíveis:
            </p>
            <div className="w-16 h-1 bg-accent-yellow rounded-full mx-auto" />
          </div>

          {/* Clean Grid of Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-xl overflow-hidden hover:border-accent-yellow/30 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  {/* Category Image Header */}
                  <div className="relative h-40 bg-zinc-100/60 border-b border-zinc-200/80 overflow-hidden flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 to-transparent opacity-60 z-10" />
                    
                    {/* Tiny Hexagon background element in card header */}
                    <div className="absolute -right-4 -top-4 w-20 h-20 text-accent-yellow/15 pointer-events-none select-none z-0 transition-all duration-500 group-hover:scale-110 group-hover:text-accent-yellow/25">
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" />
                      </svg>
                    </div>

                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="max-h-full max-w-full object-contain select-none z-10 drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=85";
                      }}
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent-yellow" />
                      <h3 className="text-base font-bold text-zinc-950 tracking-tight uppercase">{cat.title}</h3>
                    </div>
                    
                    <p className="text-zinc-500 text-xs font-light leading-relaxed border-b border-zinc-200 pb-3 font-normal">
                      {cat.desc}
                    </p>

                    <ul className="space-y-2 text-xs text-zinc-700 font-semibold">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-tight">
                          <CheckCircle2 className="h-3.5 w-3.5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs font-bold text-yellow-700">
                    <Link href={`/produtos?cat=${idx}`} className="hover:text-yellow-800 transition-colors flex items-center gap-1 group/link">
                      Visualizar Produtos <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Materials Section */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-700 uppercase">
                  <Layers className="h-4 w-4" /> Ligas Metálicas
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
                  Disponibilidade de Materiais Técnicos
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
                  Fornecemos fixadores nas normas internacionais e nos materiais exatos que sua aplicação industrial exige para segurança de torque e tração.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Aço Inox */}
                <div className="bg-white border border-zinc-200 p-5 rounded-xl space-y-2.5">
                  <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider border-b border-zinc-100 pb-2">Aço Inox</h4>
                  <ul className="text-xs text-zinc-600 space-y-1.5 font-semibold">
                    <li>• AISI 316 A4</li>
                    <li>• AISI 304 A2</li>
                    <li>• Inox 410/420</li>
                  </ul>
                </div>

                {/* Aço Carbono e Liga */}
                <div className="bg-white border border-zinc-200 p-5 rounded-xl space-y-2.5">
                  <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider border-b border-zinc-100 pb-2">Carbono e Liga</h4>
                  <ul className="text-xs text-zinc-600 space-y-1.5 font-semibold">
                    <li>• C6, C8.8</li>
                    <li>• G2, G5</li>
                    <li>• C10.9, C12.9</li>
                  </ul>
                </div>

                {/* Não-Ferrosos */}
                <div className="bg-white border border-zinc-200 p-5 rounded-xl space-y-2.5">
                  <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider border-b border-zinc-100 pb-2">Não-Ferrosos</h4>
                  <ul className="text-xs text-zinc-600 space-y-1.5 font-semibold">
                    <li>• Latão</li>
                    <li>• Alumínio</li>
                    <li>• Cobre e Bronze</li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-zinc-300 hover:border-yellow-500 bg-white hover:bg-zinc-50 text-zinc-900 rounded-lg font-bold text-sm tracking-wider transition-all duration-250 shadow-sm"
            >
              ACESSAR CATÁLOGO COMPLETO DE PRODUTOS
              <ArrowRight className="h-4 w-4 text-yellow-600" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. CONTATO DIRETO */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Left */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-accent-yellow/10 text-accent-yellow-hover border border-accent-yellow/20 uppercase tracking-wider">
                Atendimento Rápido e Eficiente
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                Solicite uma Proposta Comercial para Sua Linha
              </h2>
              <p className="text-sm md:text-base text-zinc-650 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Envie sua listagem de materiais, normas ou desenhos de peças sob medida. Nossa equipe comercial atua com tempo de resposta rápido para garantir o abastecimento constante da sua produção.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs font-bold text-zinc-700">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-yellow-hover" /> Retorno ágil sob análise comercial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-yellow-hover" /> Rastreabilidade técnica total
                </span>
              </div>
            </div>

            {/* Action CTA Box Right */}
            <div className="lg:col-span-5 relative">
              <div className="border border-zinc-200 rounded-2xl p-8 bg-white backdrop-blur-md relative space-y-6 text-center shadow-xl">
                
                <div className="space-y-2 relative z-10">
                  <h3 className="text-lg font-extrabold text-zinc-950">Canal de Cotações Rápidas</h3>
                  <p className="text-xs text-zinc-500 font-light">Envie sua lista de itens ou desenho técnico em poucos segundos.</p>
                </div>

                <div className="pt-2 relative z-10 space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden group z-0 flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent-yellow text-zinc-950 rounded-lg font-bold text-sm tracking-wider active:scale-95 transition-all duration-300 border border-accent-yellow/20 whitespace-nowrap animate-pulse-subtle hover:animate-none"
                  >
                    {/* Expanding circle background */}
                    <span className="absolute inset-0 bg-emerald-600 rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 ease-out -z-10 origin-center" />
                    
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-zinc-950 shrink-0 group-hover:text-white transition-colors duration-300">
                      <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.414 1.258 4.86L2 22l5.312-1.394c1.408.767 3.013 1.206 4.698 1.206 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.78 13.06c-.2.56-1.16 1.08-1.6 1.12-.4.04-.92.22-2.74-.5-2.32-.92-3.8-3.28-3.92-3.44-.12-.16-1.04-1.38-1.04-2.63 0-1.25.64-1.86.88-2.12.2-.22.44-.28.58-.28.14 0 .28 0 .4.02.12.02.28-.04.44.34.16.38.56 1.36.6 1.48.04.1.06.22 0 .34-.06.12-.1.2-.2.32-.1.1-.2.24-.3.34-.1.12-.22.24-.1.44.12.2.54.88 1.14 1.42.78.7 1.44.92 1.64 1.02.2.1.32.08.44-.06.12-.14.52-.6.66-.8.14-.2.28-.16.48-.08.2.08 1.26.6 1.48.7.22.1.36.16.42.26.06.1.06.56-.14 1.12z" />
                    </svg>
                    
                    <span className="group-hover:text-white transition-colors duration-300">CONTATE-NOS PELO WHATSAPP</span>

                    {/* Sliding External Arrow Icon */}
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="h-3.5 w-0 opacity-0 group-hover:w-3.5 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shrink-0 text-white"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>

                  <a
                    href="mailto:contato@razemfix.com.br"
                    className="block w-full px-6 py-3 border border-zinc-350 hover:border-accent-yellow bg-zinc-50 hover:bg-zinc-100 text-zinc-800 hover:text-accent-yellow-hover rounded-lg text-xs font-bold tracking-wider transition-all duration-250 text-center"
                  >
                    Enviar e-mail: contato@razemfix.com.br
                  </a>
                </div>

                <div className="text-[10px] text-zinc-500 leading-normal font-mono relative z-10 pt-2 border-t border-zinc-200">
                  MATRIZ INDUSTRIAL: SÃO CAETANO DO SUL - SP <br />
                  TELEFONE: (11) 4318-2878
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
