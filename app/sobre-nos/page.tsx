"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Building,
  Award,
  Zap,
  Hammer,
  Layers,
} from "lucide-react";
import HexBgWrapper from "../components/HexBgWrapper";

export default function SobreNos() {
  const compliancePoints = [
    {
      title: "Suporte Consultivo Direto",
      desc: "Nossos técnicos auxiliam os departamentos de compras e manutenção industrial para identificar a liga, classe de resistência, tipo de rosca e dimensões exatas para cada aplicação mecânica.",
      icon: Hammer,
    },
    {
      title: "Rastreabilidade e Certificados",
      desc: "Disponibilizamos certificados de qualidade para cada lote fornecido, garantindo conformidade dimensional e especificações metalúrgicas da matéria-prima com total transparência.",
      icon: ShieldCheck,
    },
    {
      title: "Estoque Pulmão Estruturado",
      desc: "Trabalhamos com fornecimento programado e manutenção de estoque pulmonar para suprir demandas de indústrias parceiras, reduzindo riscos de paradas de linha.",
      icon: Building,
    },
  ];

  const standards = [
    { name: "ANSI / ASME", desc: "Normatizações americanas para roscas em polegadas, fixadores estruturais pesados (ASTM A325) e prisioneiros de alta pressão." },
    { name: "DIN / ISO", desc: "Diretrizes métricas para precisão dimensional e classes de resistência (dureza 8.8, 10.9 e 12.9) para maquinários." },
    { name: "ABNT", desc: "Normas brasileiras para conformidade e controle de qualidade no mercado de fixação nacional." },
  ];

  return (
    <HexBgWrapper className="flex-grow py-16 text-zinc-900 overflow-hidden min-h-screen">
      {/* Background Decorative Tech Hexagons */}
      <div className="absolute left-[-10%] sm:left-[-12%] top-[10%] w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[620px] lg:h-[620px] text-accent-yellow opacity-[0.12] pointer-events-none select-none z-0 animate-slow-spin">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <path 
            d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" 
            stroke="currentColor" 
            strokeWidth="0.8" 
          />
        </svg>
      </div>

      <div className="absolute right-[-10%] sm:right-[-12%] top-[40%] w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[620px] lg:h-[620px] text-zinc-400 opacity-[0.15] pointer-events-none select-none z-0 animate-slow-spin-reverse">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <path 
            d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" 
            stroke="currentColor" 
            strokeWidth="0.8" 
          />
        </svg>
      </div>

      <div className="absolute left-[-8%] sm:left-[-10%] bottom-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] text-accent-yellow opacity-[0.08] pointer-events-none select-none z-0 animate-slow-spin">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <path 
            d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" 
            stroke="currentColor" 
            strokeWidth="0.8" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Header Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-accent-yellow/10 text-accent-yellow-hover border border-accent-yellow/20 uppercase tracking-wider">
              Parceria Técnica e Fornecimento Industrial
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-950 tracking-tight leading-tight">
              Parafusos e Fixadores de <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow to-accent-yellow-hover font-extrabold">
                Alta Qualidade
              </span>
            </h1>
            <p className="text-sm font-bold text-accent-yellow-hover uppercase tracking-wider block border-l-2 border-accent-yellow pl-3">
              “A especificação exata e a segurança que sua linha exige.”
            </p>
            <p className="text-base sm:text-lg text-zinc-650 leading-relaxed font-light">
              Fundada com o compromisso de ser a melhor <strong className="font-semibold text-zinc-900">fabricante de parafusos</strong> e distribuidora de <strong className="font-semibold text-zinc-900">fixadores industriais</strong>, a Razemfix destaca-se no mercado pelo fornecimento de uma linha completa de produtos de alto padrão. Oferecemos <strong className="font-semibold text-zinc-900">parafusos de aço</strong>, <strong className="font-semibold text-zinc-900">parafusos inox</strong>, <strong className="font-semibold text-zinc-900">parafusos sextavados</strong> e <strong className="font-semibold text-zinc-900">fixadores de alta resistencia</strong> para indústrias de máquinas, equipamentos e engenharia estrutural.
            </p>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block relative rounded-2xl overflow-hidden shadow-xl border border-zinc-200" style={{ minHeight: '360px' }}>
            <Image
              src="/prateleiras 2.png"
              alt="Prateleiras com estoque de fixadores Razemfix"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 0px, 40vw"
              priority
            />
            {/* Subtle gradient overlay at the bottom for a polished look */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow animate-pulse" />
                Estoque Regulador — São Caetano do Sul
              </span>
            </div>
          </div>
        </div>

        {/* Certificação ISO 9001 Prominente */}
        <div className="group bg-white border-2 border-accent-yellow rounded-2xl p-8 lg:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 text-accent-yellow opacity-35 pointer-events-none select-none transition-all duration-500 ease-out group-hover:scale-115 group-hover:opacity-50">
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
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="bg-accent-yellow/10 p-2.5 rounded-lg text-accent-yellow-hover border border-accent-yellow/20">
                  <Award className="h-7 w-7 text-accent-yellow-hover" />
                </div>
                <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight">Certificação ISO 9001</h2>
              </div>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                A Razemfix opera sob a certificação internacional de qualidade **ISO 9001**. Este selo comprova nossa padronização operacional, controle severo de processos produtivos, verificação dimensional de lotes e atendimento qualificado.
              </p>
            </div>
            <span className="px-4 py-2 bg-accent-yellow/10 text-accent-yellow-hover border border-accent-yellow/30 rounded-xl text-xs font-black uppercase tracking-wider shrink-0 self-start md:self-center">
              Sistema Certificado
            </span>
          </div>
        </div>

        {/* Core Pillars / Compliance Points */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-wider text-accent-yellow-hover uppercase block">Diferenciais Técnicos</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">Metodologia e Rigor Operacional</h2>
            <div className="w-16 h-1 bg-accent-yellow rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {compliancePoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="border border-zinc-200 rounded-xl bg-white p-6 sm:p-8 space-y-4 shadow-sm hover:border-accent-yellow/30 transition-all duration-300 group">
                  <div className="bg-accent-yellow/10 p-3 rounded-lg text-accent-yellow-hover w-fit group-hover:bg-accent-yellow group-hover:text-zinc-950 transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 group-hover:text-accent-yellow-hover transition-colors">{point.title}</h3>
                  <p className="text-sm text-zinc-550 font-light leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Physical Headquarters / Infrastructure Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-zinc-200">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-wider text-accent-yellow-hover uppercase block">Estrutura e Localização</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Sede Estratégica em São Caetano do Sul
            </h2>
            <p className="text-sm sm:text-base text-zinc-650 font-light leading-relaxed">
              Contamos com uma estrutura logística integrada para garantir o fluxo contínuo de fornecimento. Nossa localização estratégica na região do ABC Paulista nos permite distribuir fixadores industriais com rapidez e eficiência para as principais rodovias e polos industriais de todo o Brasil.
            </p>
            <p className="text-sm sm:text-base text-zinc-650 font-light leading-relaxed">
              Com processos otimizados de recebimento, inspeção rigorosa de qualidade e expedição ágil, asseguramos que cada pedido atenda às especificações técnicas e prazos mais estritos de nossos parceiros de negócios.
            </p>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-zinc-200 group" style={{ minHeight: '320px' }}>
            <Image
              src="/fachada.png"
              alt="Fachada da Razemfix"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950/75 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/10">
                Sede Razemfix — São Caetano do Sul / SP
              </span>
            </div>
          </div>
        </div>

        {/* Technical Drawings & Precision Blueprint Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-zinc-200">
          <div className="lg:col-span-5 border border-zinc-200 rounded-2xl p-10 bg-white shadow-xl flex items-center justify-center min-h-[250px] lg:min-h-[350px]">
            <Image
              src="/razemfix_logotipocompleto.svg"
              alt="Logo Razemfix"
              width={500}
              height={200}
              className="w-full h-auto max-w-[280px] sm:max-w-[360px] object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-wider text-accent-yellow-hover uppercase block">Garantia Regulatória & Projetos Especiais</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Padronização Conforme Normas ou Sob Desenho
            </h2>
            <p className="text-sm sm:text-base text-zinc-650 font-light leading-relaxed">
              Trabalhamos sob controle estrito de normas técnicas que regem a resistência física e dimensional dos elementos de fixação. Como especialistas em <strong className="font-semibold text-zinc-900">fixadores personalizados</strong>, desenvolvemos qualquer tipo de <strong className="font-semibold text-zinc-900">parafuso sob medida</strong> ou <strong className="font-semibold text-zinc-900">parafuso personalizado</strong> de acordo com a sua necessidade ou amostra física.
            </p>

            <div className="space-y-4 pt-2">
              {standards.map((std) => (
                <div key={std.name} className="flex gap-4 items-start bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
                  <div className="bg-accent-yellow/10 text-accent-yellow-hover font-extrabold font-mono text-xs px-2.5 py-1.5 rounded h-fit border border-accent-yellow/15">
                    {std.name}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-950 text-sm">Normativa {std.name}</h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed mt-1">{std.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate Trust Figures */}
        <div className="border border-zinc-200 rounded-2xl bg-zinc-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-5 pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-accent-yellow font-mono block">100%</span>
              <span className="text-xs text-zinc-400 font-bold tracking-wide uppercase">Lotes Certificados</span>
            </div>
            <div className="space-y-2 border-l border-zinc-850">
              <span className="text-3xl sm:text-4xl font-extrabold text-accent-yellow font-mono block">ISO 9001</span>
              <span className="text-xs text-zinc-400 font-bold tracking-wide uppercase">Qualidade Homologada</span>
            </div>
            <div className="space-y-2 border-l border-zinc-850">
              <span className="text-3xl sm:text-4xl font-extrabold text-accent-yellow font-mono block">Métrica/Pol.</span>
              <span className="text-xs text-zinc-400 font-bold tracking-wide uppercase">Linha Completa</span>
            </div>
            <div className="space-y-2 border-l border-zinc-850">
              <span className="text-3xl sm:text-4xl font-extrabold text-accent-yellow font-mono block">Rápido</span>
              <span className="text-xs text-zinc-400 font-bold tracking-wide uppercase">Retorno Comercial</span>
            </div>
          </div>
        </div>

      </div>
    </HexBgWrapper>
  );
}
