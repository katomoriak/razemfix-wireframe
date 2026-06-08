import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Hammer,
  Settings,
  Activity,
  Award,
  Zap,
  Building,
  Users,
  Compass,
} from "lucide-react";
import { WarehouseSVG, FastenersBlueprintSVG } from "../components/TechnicalDrawings";

export default function SobreNos() {
  const compliancePoints = [
    {
      title: "Suporte Consultivo Direto",
      desc: "Nossos engenheiros auxiliam diretamente os departamentos de compras e manutenção industrial para identificar o material, dureza, rosca e classe exata que sua aplicação de risco mecânico exige.",
      icon: Hammer,
    },
    {
      title: "Rastreabilidade e Ensaios",
      desc: "Fornecemos produtos 100% normalizados e testados. Cada lote é acompanhado do seu respectivo certificado de qualidade de matéria-prima, com testes de carga estática e dimensional controlada.",
      icon: ShieldCheck,
    },
    {
      title: "Estoque Regulador Sob Medida",
      desc: "Oferecemos soluções de fornecimento programado. Atuamos como o estoque pulmão de indústrias e montadoras, mitigando custos de paradas de linha de montagem imprevistas.",
      icon: Building,
    },
  ];

  const standards = [
    { name: "ANSI / ASME", desc: "Normas americanas para roscas polegada, classes de resistência de alta responsabilidade e parafusos estruturais pesados (A325)." },
    { name: "DIN / ISO", desc: "Normas métricas europeias que regem precisão dimensional e classes de dureza (5.8, 8.8, 10.9 e 12.9) para maquinários." },
    { name: "ABNT", desc: "Normas brasileiras para total conformidade legal, homologações públicas e segurança estrutural local no mercado industrial." },
  ];

  return (
    <div className="flex-grow grid-bg py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Header Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-widest">
              PARCERIA ESTRATÉGICA B2B
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engenharia de Fixação para <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Alta Performance Industrial
              </span>
            </h1>
            <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest border-l-2 border-orange-500 pl-3">
              “A especificação exata e a segurança que sua linha exige.”
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Há anos no mercado, a Razemfix é referência na fabricação e distribuição de uma linha completa de elementos de fixação desenvolvidos para alta performance e máxima segurança industrial. Unimos atendimento técnico qualificado a um amplo estoque regulador para abastecer indústrias, montadoras, o setor da construção civil e o varejo.
            </p>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block border border-white/10 rounded-2xl p-4 glass-panel">
            <WarehouseSVG className="w-full h-auto drop-shadow-xl" />
          </div>
        </div>

        {/* Core Pillars / Compliance Points */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block">Diferenciais Técnicos</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">O Rigor que Governa Nossas Operações</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {compliancePoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="border border-white/10 rounded-xl bg-slate-900/30 p-6 sm:p-8 space-y-4 shadow-md hover:border-orange-500/20 transition-all duration-300 group">
                  <div className="bg-orange-500/10 p-3 rounded-lg text-orange-500 w-fit group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{point.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Drawings & Precision Blueprint Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-white/5">
          <div className="lg:col-span-5 hidden lg:block border border-white/10 rounded-2xl p-4 bg-slate-950">
            <FastenersBlueprintSVG className="w-full h-auto" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block">Garantia Regulatória</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Produtos 100% Normalizados e Homologados
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              O grande diferencial operacional da Razemfix é a rastreabilidade e a conformidade rigorosa. Atuamos com suporte consultivo direto de nossa engenharia para encontrar a especificação exata da sua necessidade, fornecendo produtos em total conformidade com as normas internacionais e nacionais.
            </p>

            <div className="space-y-4 pt-2">
              {standards.map((std) => (
                <div key={std.name} className="flex gap-4 items-start bg-slate-900/30 border border-white/5 p-4 rounded-xl">
                  <div className="bg-orange-500/10 text-orange-500 font-extrabold font-mono text-xs px-2.5 py-1.5 rounded h-fit">
                    {std.name}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{std.name} Compliance</h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mt-1">{std.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate Trust Figures */}
        <div className="border border-white/10 rounded-2xl bg-slate-950 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[80px]" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">100%</span>
              <span className="text-xs text-slate-400 font-light tracking-wide uppercase">Produtos Normalizados</span>
            </div>
            <div className="space-y-2 border-l border-white/10">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">2h</span>
              <span className="text-xs text-slate-400 font-light tracking-wide uppercase">Retorno Comercial B2B</span>
            </div>
            <div className="space-y-2 border-l border-white/10">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">+2M</span>
              <span className="text-xs text-slate-400 font-light tracking-wide uppercase">Fixadores em Estoque</span>
            </div>
            <div className="space-y-2 border-l border-white/10">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">Zero</span>
              <span className="text-xs text-slate-400 font-light tracking-wide uppercase">Parada de Linha</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
