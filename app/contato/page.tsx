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
  Calendar,
  Layers,
  ArrowRight,
  ArrowLeft,
  X,
  Trash2,
  FileCheck,
} from "lucide-react";
import { ConsultingSVG } from "../components/TechnicalDrawings";

interface CartItem {
  product: {
    id: string;
    title: string;
    norm: string;
    grade: string;
  };
  quantity: number;
}

function ContatoContent() {
  const searchParams = useSearchParams();
  const prepopulated = searchParams.get("prepopulated");

  // Form State
  const [step, setStep] = useState(1);
  const [cnpj, setCnpj] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [materialList, setMaterialList] = useState("");
  const [timeline, setTimeline] = useState("imediato");
  const [observations, setObservations] = useState("");
  const [attachedFile, setAttachedFile] = useState<{ name: string; size: string } | null>(null);
  
  // Cart integration state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");

  // Load cart on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("razemfix_quote_cart");
    if (savedCart && prepopulated === "true") {
      try {
        const parsed = JSON.parse(savedCart);
        setCartItems(parsed);
      } catch (e) {
        console.error("Erro ao carregar itens de cotação:", e);
      }
    }
  }, [prepopulated]);

  const handleRemoveCartItem = (id: string) => {
    const updated = cartItems.filter(item => item.product.id !== id);
    setCartItems(updated);
    localStorage.setItem("razemfix_quote_cart", JSON.stringify(updated));
  };

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
    // Simulate generation of a unique quote ticket ID
    const randomId = "RF-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
    setQuoteId(randomId);
    setIsSubmitted(true);
    
    // Clear cart on success
    localStorage.removeItem("razemfix_quote_cart");
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex-grow grid-bg py-12 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="mb-12 space-y-3 text-center lg:text-left">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block">
            ATENDIMENTO B2B
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Peça um Orçamento para Sua Indústria
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl font-light">
            Preencha os dados da sua empresa e envie sua listagem de materiais em poucos minutos. Retornamos com proposta formal calibrada pela nossa engenharia.
          </p>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto lg:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: STEP FORM PANEL */}
          <div className="lg:col-span-8">
            
            {!isSubmitted ? (
              <div className="border border-white/10 rounded-2xl bg-slate-900/30 p-6 sm:p-10 shadow-2xl glass-panel relative overflow-hidden">
                {/* Visual caliper blueprint deco inside the form */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                  <ConsultingSVG />
                </div>

                {/* Form Progress Bar */}
                <div className="mb-10">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 tracking-wider uppercase mb-3">
                    <span className={step >= 1 ? "text-orange-500 font-extrabold" : ""}>1. Dados B2B</span>
                    <span className={step >= 2 ? "text-orange-500 font-extrabold" : ""}>2. Lista de Itens</span>
                    <span className={step >= 3 ? "text-orange-500 font-extrabold" : ""}>3. Condições</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300"
                      style={{ width: `${((step - 0.5) / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* STEP 1: DADOS B2B */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-2 mb-4">
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                          <Building className="h-4 w-4 text-orange-500" /> Informações Corporativas
                        </h3>
                        <p className="text-[11px] text-slate-400">Atendimento exclusivo para pessoas jurídicas, indústrias, distribuidores e varejos.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">CNPJ da Empresa</label>
                          <input
                            type="text"
                            placeholder="00.000.000/0000-00"
                            required
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                            className="w-full bg-slate-950 border border-white/10 focus:border-orange-500/50 rounded-lg p-3 text-sm text-white focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Razão Social</label>
                          <input
                            type="text"
                            placeholder="Razão Social ou Nome Fantasia"
                            required
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full bg-slate-950 border border-white/10 focus:border-orange-500/50 rounded-lg p-3 text-sm text-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Nome do Responsável Comercial</label>
                        <input
                          type="text"
                          placeholder="Digite seu nome completo"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full bg-slate-950 border border-white/10 focus:border-orange-500/50 rounded-lg p-3 text-sm text-white focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">E-mail Corporativo</label>
                          <input
                            type="email"
                            placeholder="compras@suaempresa.com.br"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-950 border border-white/10 focus:border-orange-500/50 rounded-lg p-3 text-sm text-white focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Telefone / WhatsApp Comercial</label>
                          <input
                            type="tel"
                            placeholder="(11) 90000-0000"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-slate-950 border border-white/10 focus:border-orange-500/50 rounded-lg p-3 text-sm text-white focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: LISTA DE MATERIAIS */}
                  {step === 2 && (
                    <div className="space-y-5">
                      
                      {/* Show imported items from quote cart if present */}
                      {cartItems.length > 0 && (
                        <div className="space-y-3 bg-orange-500/5 p-4 rounded-xl border border-orange-500/15">
                          <h3 className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Layers className="h-4 w-4" /> Itens Importados do Portfólio:
                          </h3>
                          <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
                            {cartItems.map((item) => (
                              <div key={item.product.id} className="flex items-center justify-between bg-slate-950/80 border border-white/5 p-3 rounded-lg text-xs">
                                <div>
                                  <span className="text-[9px] font-mono text-slate-500 block uppercase">{item.product.norm}</span>
                                  <strong className="text-white font-semibold">{item.product.title}</strong>
                                </div>
                                <div className="flex items-center gap-4">
                                  <span className="font-mono text-orange-400 font-bold">{item.quantity} un</span>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveCartItem(item.product.id)}
                                    className="text-slate-600 hover:text-red-400 transition-colors p-1"
                                    title="Remover item"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                          <span className="text-[10px] text-slate-400 block font-light leading-normal">
                            * Estes itens serão anexados diretamente ao seu tíquete de cotação final.
                          </span>
                        </div>
                      )}

                      {/* Plain text input list */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Descreva sua listagem de materiais (ou itens adicionais)
                        </label>
                        <textarea
                          rows={5}
                          value={materialList}
                          onChange={(e) => setMaterialList(e.target.value)}
                          placeholder="Exemplo: &#10;500un - Parafuso Sextavado ASTM A325 3/4 x 2&#10;1000un - Porca Sextavada Auto-Travante DIN 985 M12 Classe 8&#10;Desenho Técnico customizado (anexado abaixo)..."
                          className="w-full bg-slate-950 border border-white/10 focus:border-orange-500/50 rounded-lg p-3 text-xs sm:text-sm text-white focus:outline-none font-mono placeholder-slate-600"
                        />
                      </div>

                      {/* File Upload Simulation */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Anexar Lista / Desenhos de Peças Customizadas</label>
                        
                        {!attachedFile ? (
                          <div className="border-2 border-dashed border-white/10 hover:border-orange-500/30 rounded-xl p-6 bg-slate-950/20 text-center transition-colors relative cursor-pointer">
                            <input
                              type="file"
                              onChange={mockFileUpload}
                              className="absolute inset-0 opacity-0 cursor-pointer"
                              accept=".xlsx,.xls,.pdf,.csv,.dwg,.dxf,.png,.jpg"
                            />
                            <Upload className="h-8 w-8 text-slate-500 mx-auto mb-2" />
                            <span className="text-xs font-bold text-white block">Escolher arquivo ou arrastar</span>
                            <span className="text-[10px] text-slate-500 block mt-1">Formatos aceitos: PDF, XLSX, CSV, DWG ou Imagens (máx 15MB)</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between bg-slate-950/80 border border-emerald-500/30 p-4 rounded-xl text-xs">
                            <div className="flex items-center gap-3">
                              <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400">
                                <FileCheck className="h-5 w-5" />
                              </div>
                              <div>
                                <span className="font-bold text-white block truncate max-w-[200px] sm:max-w-[300px]">{attachedFile.name}</span>
                                <span className="text-[10px] text-slate-500 block font-mono">{attachedFile.size}</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={removeAttachedFile}
                              className="p-1.5 rounded bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  )}

                  {/* STEP 3: PRAZOS E CONDIÇÕES */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Necessidade de Abastecimento</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { value: "imediato", label: "Abastecimento Imediato", desc: "Urgente na linha de produção" },
                            { value: "30-dias", label: "Programado (30 Dias)", desc: "Estoque regulador mensal" },
                            { value: "customizado", label: "Projeto sob Desenho", desc: "Cronograma de engenharia" },
                          ].map((item) => (
                            <label
                              key={item.value}
                              className={`border rounded-xl p-4 flex flex-col justify-between cursor-pointer transition-all ${
                                timeline === item.value
                                  ? "border-orange-500 bg-orange-500/5 text-orange-500"
                                  : "border-white/10 bg-slate-950/40 text-slate-400 hover:text-white hover:border-white/20"
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
                                <span className="text-[10px] text-slate-500 block mt-1 leading-snug">{item.desc}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Observações Técnicas / Requisitos de Tratamento</label>
                        <textarea
                          rows={4}
                          value={observations}
                          onChange={(e) => setObservations(e.target.value)}
                          placeholder="Especifique exigências adicionais como galvanização a fogo, zincagem eletrolítica, organometálico, rosca esquerda, certificado de qualidade, etc."
                          className="w-full bg-slate-950 border border-white/10 focus:border-orange-500/50 rounded-lg p-3 text-xs sm:text-sm text-white focus:outline-none placeholder-slate-600"
                        />
                      </div>
                    </div>
                  )}

                  {/* Form Action Controls */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-8">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-5 py-2.5 border border-white/10 hover:border-white/20 hover:bg-slate-900/50 text-slate-300 hover:text-white rounded-lg text-xs font-bold tracking-wider transition-colors flex items-center gap-1.5"
                      >
                        <ArrowLeft className="h-4 w-4" /> VOLTAR
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-xs tracking-wider transition-all duration-200 flex items-center gap-1.5 border border-orange-400/20 active:scale-95"
                      >
                        AVANÇAR <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-lg font-extrabold text-sm tracking-wider shadow-lg shadow-orange-500/15 active:scale-95 transition-all duration-300 flex items-center gap-2 border border-orange-400/25"
                      >
                        ENVIAR COTAÇÃO INDUSTRIAL <CheckCircle className="h-4 w-4 animate-bounce" />
                      </button>
                    )}
                  </div>

                </form>
              </div>
            ) : (
              // B2B QUOTATION SUCCESS SCREEN
              <div className="border border-emerald-500/20 rounded-2xl bg-slate-900/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl glass-panel relative">
                <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl pointer-events-none" />
                
                <div className="h-16 w-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle className="h-8 w-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">PROPOSTA EM PROCESSAMENTO</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Cotação Enviada com Sucesso!</h2>
                  <p className="text-sm text-slate-300 font-light max-w-lg mx-auto leading-relaxed">
                    Agradecemos seu contato. Nossa engenharia e equipe comercial já foram notificadas e estão analisando sua listagem de materiais.
                  </p>
                </div>

                {/* Technical Protocol Ticket */}
                <div className="max-w-md mx-auto bg-slate-950 border border-white/5 rounded-xl p-5 font-mono text-left space-y-3.5 shadow-inner">
                  <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/5">
                    <span className="text-slate-500">TÍQUETE PROTOCOLO:</span>
                    <strong className="text-orange-500 font-extrabold">{quoteId}</strong>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400">
                    <div>
                      <span className="text-slate-600 block">EMPRESA:</span>
                      <span className="truncate block font-semibold text-white">{companyName || "Razemfix Cliente B2B"}</span>
                    </div>
                    <div>
                      <span className="text-slate-600 block">RESPONSÁVEL:</span>
                      <span className="truncate block font-semibold text-white">{contactName}</span>
                    </div>
                    <div>
                      <span className="text-slate-600 block">PRAZO EXIGIDO:</span>
                      <span className="block font-semibold text-orange-400 uppercase">{timeline === "imediato" ? "IMEDIATO (URGENTE)" : timeline === "30-dias" ? "30 DIAS" : "PROJETO"}</span>
                    </div>
                    <div>
                      <span className="text-slate-600 block">ARQUIVO ANEXO:</span>
                      <span className="block font-semibold text-emerald-400 truncate">{attachedFile ? attachedFile.name : "NENHUM"}</span>
                    </div>
                  </div>
                </div>

                {/* Estimate reply indicator */}
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 bg-slate-950/50 w-fit mx-auto px-4 py-2 rounded-full border border-white/5">
                  <Clock className="h-4 w-4 text-orange-500 animate-spin" style={{ animationDuration: "3s" }} />
                  Retorno Comercial Estimado: <strong className="text-white">48 minutos úteis</strong>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                      setCnpj("");
                      setCompanyName("");
                      setContactName("");
                      setEmail("");
                      setPhone("");
                      setMaterialList("");
                      setObservations("");
                      setAttachedFile(null);
                      setCartItems([]);
                    }}
                    className="px-6 py-2.5 bg-slate-900 border border-white/10 hover:border-white/20 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-bold tracking-wider transition-colors"
                  >
                    SOLICITAR NOVA COTAÇÃO
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT: CONTACT INFORMATION & CHANNELS */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="border border-white/10 rounded-2xl bg-slate-900/30 p-6 space-y-6 glass-panel">
              <h3 className="text-sm font-bold tracking-widest text-white uppercase border-l-2 border-orange-500 pl-3">
                Canais Diretos
              </h3>
              
              <ul className="space-y-4 text-sm text-slate-300 font-light">
                <li className="flex gap-3 items-start">
                  <div className="bg-orange-500/10 p-2.5 rounded-lg text-orange-500 mt-0.5">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Central Comercial</span>
                    <a href="tel:+551143182878" className="font-bold text-white hover:text-orange-400 transition-colors block mt-0.5">
                      (11) 4318-2878
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Agilidade imediata em vendas</span>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="bg-orange-500/10 p-2.5 rounded-lg text-orange-500 mt-0.5">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">E-mail Corporativo</span>
                    <a href="mailto:contato@razemfix.com.br" className="font-bold text-white hover:text-orange-400 transition-colors block mt-0.5">
                      contato@razemfix.com.br
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Envio de planilhas e desenhos CAD</span>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="bg-orange-500/10 p-2.5 rounded-lg text-orange-500 mt-0.5">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Horário Operacional</span>
                    <span className="font-semibold text-white block mt-0.5">
                      Seg a Sex: 08:00 às 17:48
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Expediente de produção e logística</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Headquarters Address Card */}
            <div className="border border-white/10 rounded-2xl bg-slate-900/30 p-6 space-y-4 glass-panel">
              <h3 className="text-sm font-bold tracking-widest text-white uppercase border-l-2 border-orange-500 pl-3">
                Matriz Industrial
              </h3>
              
              <div className="flex gap-3 items-start text-sm text-slate-300 font-light">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Razemfix Indústria Metalúrgica</span>
                  <span>Rua Cavalheiro Ernesto Giuliano, 236</span>
                  <span className="block">Bairro: Olímpico</span>
                  <span className="block">CEP 09570-400 • São Caetano do Sul - SP</span>
                </div>
              </div>

              {/* Map Illustration Grid */}
              <div className="rounded-xl border border-white/5 overflow-hidden h-32 relative bg-[#070c14] flex flex-col items-center justify-center p-4">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:8px_8px]" />
                <MapPin className="h-6 w-6 text-orange-500 mb-1 animate-bounce" />
                <span className="text-[10px] font-bold text-slate-300">São Caetano do Sul - SP</span>
                <span className="text-[8px] text-slate-500">Rua Cavalheiro Ernesto Giuliano, 236</span>
                
                <a
                  href="https://maps.google.com/?q=Rua+Cavalheiro+Ernesto+Giuliano,+236,+S%C3%A3o+Caetano+do+Sul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 px-2.5 py-1 bg-slate-900 border border-white/10 text-white rounded text-[8px] font-bold hover:border-orange-500 transition-colors"
                >
                  ABRIR MAPA
                </a>
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
    <Suspense fallback={<div className="min-h-screen grid-bg flex items-center justify-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <ContatoContent />
    </Suspense>
  );
}
