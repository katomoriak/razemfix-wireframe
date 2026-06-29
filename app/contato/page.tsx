"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  FileText,
  Building,
  Upload,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  X,
  FileCheck,
} from "lucide-react";
import { ConsultingSVG } from "../components/TechnicalDrawings";

function ContatoContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  const whatsappUrl = `https://wa.me/5511930736051?text=${encodeURIComponent(
    "Olá, estava vendo a página Contato do site e decidi entrar em contato com vocês! Gostaria de mais informações, podem me ajudar?"
  )}`;

  // Form State
  const [cnpj, setCnpj] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [materialList, setMaterialList] = useState("");
  const [timeline, setTimeline] = useState("imediato");
  const [observations, setObservations] = useState("");
  const [attachedFile, setAttachedFile] = useState<{ name: string; size: string } | null>(null);
  
  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");

  // Load prefilled product from URL parameter
  useEffect(() => {
    if (productParam) {
      setMaterialList(`Item solicitado para cotação: ${productParam}\nQuantidade estimada: [Preencher aqui]`);
    }
  }, [productParam]);

  const mockFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setAttachedFile({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + " KB",
      });
    }
  };

  const removeAttachedFile = () => {
    setAttachedFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = "RF-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
    setQuoteId(randomId);
    setIsSubmitted(true);
  };

  return (
    <div className="flex-grow grid-bg py-12 relative min-h-screen bg-zinc-50 text-zinc-900 overflow-hidden">
      {/* Background Decorative Tech Hexagons */}
      <div className="absolute left-[-10%] sm:left-[-12%] top-[15%] w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[620px] lg:h-[620px] text-accent-yellow opacity-[0.15] pointer-events-none select-none z-0 animate-slow-spin">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <path 
            d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" 
            stroke="currentColor" 
            strokeWidth="0.8" 
          />
        </svg>
      </div>

      <div className="absolute right-[-10%] sm:right-[-12%] bottom-[15%] w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[620px] lg:h-[620px] text-zinc-400 opacity-[0.2] pointer-events-none select-none z-0 animate-slow-spin-reverse">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <path 
            d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" 
            stroke="currentColor" 
            strokeWidth="0.8" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Title */}
        <div className="mb-12 space-y-3 text-center lg:text-left">
          <span className="text-xs font-bold text-accent-yellow-hover uppercase tracking-wider block">
            Canais de Atendimento comercial
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Cotação de Parafusos e Fixadores de Alta Qualidade
          </h1>
          <p className="text-sm text-zinc-655 max-w-2xl font-light">
            Preencha os dados abaixo para cotar itens de linha ou solicitar o desenvolvimento de seu <strong className="font-semibold text-zinc-900">parafuso sob medida</strong>, <strong className="font-semibold text-zinc-900">parafuso personalizado</strong> ou outros <strong className="font-semibold text-zinc-900">fixadores personalizados</strong> conforme desenho técnico ou amostra.
          </p>
          <div className="w-16 h-1.5 bg-accent-yellow rounded-full mx-auto lg:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: UNIFIED FORM PANEL */}
          <div className="lg:col-span-8">
            
            {!isSubmitted ? (
              <div className="border border-zinc-200 rounded-2xl bg-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
                {/* Visual caliper blueprint deco inside the form */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                  <ConsultingSVG />
                </div>

                {/* Brand decorative hexagon inside form */}
                <div className="absolute -left-6 bottom-10 w-24 h-24 text-accent-yellow/15 pointer-events-none select-none z-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-none" stroke="currentColor" strokeWidth="1">
                    <path d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" />
                  </svg>
                </div>

                <div className="mb-8 border-b border-zinc-100 pb-4 relative z-10">
                  <h2 className="text-xl sm:text-2xl font-black text-zinc-950">Solicite Orçamento Técnico</h2>
                  <p className="text-sm text-zinc-500 mt-1 font-light">Preencha os dados abaixo e nossa equipe comercial entrará em contato com você em breve.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  
                  {/* Seção 1: Dados Corporativos */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider flex items-center gap-1.5 border-b border-zinc-100 pb-2">
                      <Building className="h-4 w-4 text-accent-yellow-hover" /> 1. Identificação da Empresa
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">CNPJ</label>
                        <input
                          type="text"
                          placeholder="00.000.000/0000-00"
                          required
                          value={cnpj}
                          onChange={(e) => setCnpj(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-accent-yellow rounded-lg p-3 text-sm text-zinc-850 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Razão Social</label>
                        <input
                          type="text"
                          placeholder="Razão Social ou Nome Fantasia"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-accent-yellow rounded-lg p-3 text-sm text-zinc-850 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Nome do Responsável pelo Orçamento</label>
                      <input
                        type="text"
                        placeholder="Nome Completo"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-accent-yellow rounded-lg p-3 text-sm text-zinc-850 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">E-mail Corporativo</label>
                        <input
                          type="email"
                          placeholder="exemplo@suaempresa.com.br"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-accent-yellow rounded-lg p-3 text-sm text-zinc-850 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Telefone / WhatsApp</label>
                        <input
                          type="tel"
                          placeholder="(11) 90000-0000"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-accent-yellow rounded-lg p-3 text-sm text-zinc-850 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Seção 2: Especificações Técnicas */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider flex items-center gap-1.5 border-b border-zinc-100 pb-2">
                      <FileText className="h-4 w-4 text-accent-yellow-hover" /> 2. Relação de Fixadores Necessários
                    </h3>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block font-semibold">
                        Descreva sua lista de materiais ou quantidades desejadas
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={materialList}
                        onChange={(e) => setMaterialList(e.target.value)}
                        placeholder="Exemplo: &#10;500un - Parafuso Sextavado ASTM A325 3/4 x 2&#10;1000un - Porca Sextavada Auto-Travante DIN 985 M12 Classe 8&#10;Desenho Técnico customizado (anexado abaixo)..."
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-accent-yellow rounded-lg p-3 text-xs sm:text-sm text-zinc-850 focus:outline-none font-mono placeholder-zinc-400"
                      />
                    </div>

                    {/* File Upload Component */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Anexar Desenho Técnico ou Planilha de Materiais</label>
                      
                      {!attachedFile ? (
                        <div className="border-2 border-dashed border-zinc-200 hover:border-accent-yellow/50 rounded-xl p-6 bg-zinc-50 text-center transition-colors relative cursor-pointer">
                          <input
                            type="file"
                            onChange={mockFileUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            accept=".xlsx,.xls,.pdf,.csv,.dwg,.dxf,.png,.jpg"
                          />
                          <Upload className="h-8 w-8 text-zinc-400 mx-auto mb-2" />
                          <span className="text-xs font-bold text-zinc-800 block">Selecionar arquivo do computador</span>
                          <span className="text-[10px] text-zinc-450 block mt-1">Formatos aceitos: PDF, XLSX, CSV, DWG ou imagens (máx 15MB)</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between bg-zinc-50 border border-accent-yellow/35 p-4 rounded-xl text-xs">
                          <div className="flex items-center gap-3">
                            <div className="bg-accent-yellow/10 p-2.5 rounded-lg text-accent-yellow-hover">
                              <FileCheck className="h-5 w-5" />
                            </div>
                            <div>
                              <span className="font-bold text-zinc-850 block truncate max-w-[200px] sm:max-w-[300px]">{attachedFile.name}</span>
                              <span className="text-[10px] text-zinc-400 block font-mono font-semibold">{attachedFile.size}</span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeAttachedFile}
                            className="p-1.5 rounded bg-zinc-200/50 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-800 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Seção 3: Prazos e Observações */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider flex items-center gap-1.5 border-b border-zinc-100 pb-2">
                      <Clock className="h-4 w-4 text-accent-yellow-hover" /> 3. Prazos e Condições Técnicas
                    </h3>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Necessidade de Abastecimento</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { value: "imediato", label: "Imediato / Urgente", desc: "Necessário para linha de montagem imediata" },
                          { value: "30-dias", label: "Programado (30 Dias)", desc: "Abastecimento periódico programado" },
                          { value: "customizado", label: "Desenho / Amostra", desc: "Peça sob medida com fabricação especial" },
                        ].map((item) => (
                          <label
                            key={item.value}
                            className={`border rounded-xl p-4 flex flex-col justify-between cursor-pointer transition-all ${
                              timeline === item.value
                                ? "border-accent-yellow bg-accent-yellow/5 text-accent-yellow-hover font-bold"
                                : "border-zinc-200 bg-zinc-50 text-zinc-500 hover:text-zinc-800 hover:border-zinc-350"
                            }`}
                          >
                            <input
                              type="radio"
                              name="timeline"
                              value={item.value}
                              checked={timeline === item.value}
                              onChange={() => setTimeline(item.value)}
                              className="sr-only"
                            />
                            <div>
                              <span className="font-bold text-xs block">{item.label}</span>
                              <span className="text-[10px] text-zinc-450 block mt-1 leading-snug font-light">{item.desc}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Tratamentos Superficiais ou Exigências Específicas</label>
                      <textarea
                        rows={3}
                        value={observations}
                        onChange={(e) => setObservations(e.target.value)}
                        placeholder="Especifique exigências adicionais como galvanização a fogo, zincagem, organometálico, certificado de qualidade, etc."
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-accent-yellow rounded-lg p-3 text-xs sm:text-sm text-zinc-850 focus:outline-none placeholder-zinc-400"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-zinc-100 mt-8">
                    <button
                      type="submit"
                      className="w-full py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 rounded-lg font-black text-sm tracking-wider shadow active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-accent-yellow/25 uppercase"
                    >
                      Enviar Solicitação de Cotação
                    </button>
                  </div>

                </form>
              </div>
            ) : (
              <div className="border border-zinc-200 rounded-2xl bg-white p-8 sm:p-12 text-center space-y-6 shadow-xl relative">
                {/* SUCCESS PROTOCOL CARD */}
                <div className="h-16 w-16 bg-accent-yellow/10 text-accent-yellow-hover rounded-full flex items-center justify-center mx-auto border border-accent-yellow/20">
                  <CheckCircle className="h-8 w-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-accent-yellow-hover font-bold uppercase tracking-wider block">PROPOSTA EM PROCESSAMENTO</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">Cotação Recebida!</h2>
                  <p className="text-sm text-zinc-600 font-light max-w-lg mx-auto leading-relaxed">
                    Agradecemos o envio de sua solicitação de orçamento. Nossa equipe de engenharia comercial já foi notificada para analisar as especificações e elaborar a proposta técnica.
                  </p>
                </div>

                {/* Technical Protocol Ticket */}
                <div className="max-w-md mx-auto bg-zinc-50 border border-zinc-200 rounded-xl p-5 font-mono text-left space-y-3.5 shadow-inner">
                  <div className="flex justify-between items-center text-xs pb-2.5 border-b border-zinc-200">
                    <span className="text-zinc-400">TÍQUETE PROTOCOLO:</span>
                    <strong className="text-accent-yellow-hover font-extrabold">{quoteId}</strong>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-[10px] text-zinc-600">
                    <div>
                      <span className="text-zinc-400 block font-bold">EMPRESA:</span>
                      <span className="truncate block font-bold text-zinc-900">{companyName}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block font-bold">CNPJ:</span>
                      <span className="truncate block font-bold text-zinc-900">{cnpj}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block font-bold">PRAZO DE ENTREGA:</span>
                      <span className="block font-bold text-accent-yellow-hover uppercase">{timeline === "imediato" ? "IMEDIATO (URGENTE)" : timeline === "30-dias" ? "30 DIAS" : "PROJETO"}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block font-bold">ARQUIVO ANEXO:</span>
                      <span className="block font-bold text-zinc-900 truncate">{attachedFile ? attachedFile.name : "NENHUM"}</span>
                    </div>
                  </div>
                </div>

                {/* Estimate reply indicator */}
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-zinc-655 bg-zinc-50 w-fit mx-auto px-4 py-2 rounded-full border border-zinc-200 shadow-sm">
                  <Clock className="h-4 w-4 text-accent-yellow-hover" />
                  Retorno Comercial Estimado: <strong className="text-zinc-850">48 minutos úteis</strong>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCnpj("");
                      setCompanyName("");
                      setContactName("");
                      setEmail("");
                      setPhone("");
                      setMaterialList("");
                      setObservations("");
                      setAttachedFile(null);
                    }}
                    className="px-6 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-900 rounded-lg text-xs font-bold tracking-wider transition-colors border border-zinc-250 uppercase"
                  >
                    Solicitar Outro Orçamento
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT: CONTACT INFORMATION & CHANNELS */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="border border-zinc-200 rounded-2xl bg-white p-6 space-y-5 shadow-sm relative overflow-hidden">
              {/* Brand decorative hexagon */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-20 h-20 text-accent-yellow/20 pointer-events-none select-none z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none" stroke="currentColor" strokeWidth="1">
                  <path d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" />
                </svg>
              </div>

              <div className="relative z-10 space-y-5">
                <h3 className="text-sm font-bold tracking-widest text-zinc-950 uppercase border-l-2 border-accent-yellow pl-3">
                  Canais Diretos
                </h3>
              
              <ul className="space-y-4 text-sm text-zinc-600 font-light">
                <li className="flex gap-3 items-start">
                  <div className="bg-accent-yellow/10 p-2.5 rounded-lg text-accent-yellow-hover mt-0.5 border border-accent-yellow/15">
                    <Phone className="h-4 w-4 text-accent-yellow-hover" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold block uppercase tracking-wider">Telefone Comercial</span>
                    <a href="tel:+551143182878" className="font-bold text-zinc-950 hover:text-accent-yellow-hover transition-colors block mt-0.5">
                      (11) 4318-2878
                    </a>
                    <span className="text-[10px] text-zinc-400 block mt-0.5 font-semibold">Atendimento e vendas imediatas</span>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="bg-accent-yellow/10 p-2.5 rounded-lg text-accent-yellow-hover mt-0.5 border border-accent-yellow/15">
                    <Mail className="h-4 w-4 text-accent-yellow-hover" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold block uppercase tracking-wider">E-mail Comercial</span>
                    <a href="mailto:contato@razemfix.com.br" className="font-bold text-zinc-950 hover:text-accent-yellow-hover transition-colors block mt-0.5">
                      contato@razemfix.com.br
                    </a>
                    <span className="text-[10px] text-zinc-400 block mt-0.5 font-semibold">Envio de planilhas e projetos CAD</span>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="bg-accent-yellow/10 p-2.5 rounded-lg text-accent-yellow-hover mt-0.5 border border-accent-yellow/15">
                    <Clock className="h-4 w-4 text-accent-yellow-hover" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold block uppercase tracking-wider">Horário Operacional</span>
                    <span className="font-bold text-zinc-950 block mt-0.5">
                      Seg a Sex: 08:00 às 17:48
                    </span>
                    <span className="text-[10px] text-zinc-400 block mt-0.5 font-semibold">
                      Com almoço das 12:00 às 13:00
                    </span>
                  </div>
                </li>
              </ul>

              <div className="pt-2 border-t border-zinc-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group z-0 w-full px-5 py-3.5 bg-zinc-900 text-white rounded-lg font-bold text-xs tracking-wider active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap animate-pulse-subtle hover:animate-none shadow-sm cursor-pointer"
                >
                  {/* Expanding circle background */}
                  <span className="absolute inset-0 bg-emerald-600 rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 ease-out -z-10 origin-center" />
                  
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent-yellow shrink-0 group-hover:text-white transition-colors duration-300">
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
                    className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shrink-0 text-white"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
              </div>
            </div>

            {/* Headquarters Address Card */}
            <div className="border border-zinc-200 rounded-2xl bg-white p-6 space-y-4 shadow-sm relative overflow-hidden">
              {/* Brand decorative hexagon */}
              <div className="absolute -right-6 top-12 w-20 h-20 text-accent-yellow/20 pointer-events-none select-none z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none" stroke="currentColor" strokeWidth="1">
                  <path d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" />
                </svg>
              </div>

              <div className="relative z-10 space-y-4">
                <h3 className="text-sm font-bold tracking-widest text-zinc-950 uppercase border-l-2 border-accent-yellow pl-3">
                  Matriz Industrial
                </h3>
              
              <div className="flex gap-3 items-start text-sm text-zinc-650 font-light">
                <MapPin className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-zinc-900 block">Razemfix Indústria Metalúrgica</span>
                  <span>Rua Cavalheiro Ernesto Giuliano, 236</span>
                  <span className="block">Olímpico • São Caetano do Sul - SP</span>
                  <span className="block text-xs font-semibold mt-1">CEP 09570-400</span>
                </div>
              </div>

              {/* Google Maps Iframe Embed */}
              <div className="w-full h-48 rounded-xl overflow-hidden border border-zinc-200 shadow-inner mt-4 relative">
                <iframe
                  title="Localização da Matriz Industrial Razemfix"
                  src="https://maps.google.com/maps?q=Rua%20Cavalheiro%20Ernesto%20Giuliano,%20236,%20Ol%C3%ADmpico,%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default function Contato() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin"></div></div>}>
      <ContatoContent />
    </Suspense>
  );
}
