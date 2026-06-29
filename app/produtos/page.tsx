"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  FileText,
  Info,
  CheckCircle2,
  Zap,
  X,
  Hammer,
  Settings,
} from "lucide-react";

import { Product, productsData as products } from "./products-data";

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="w-full h-32 flex flex-col items-center justify-center bg-zinc-100/60 rounded-lg text-zinc-400">
        <Settings className="h-7 w-7 animate-spin text-zinc-300 mb-1" style={{ animationDuration: "3s" }} />
        <span className="text-[9px] font-mono tracking-wider uppercase text-zinc-400">Imagem em breve</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-32 object-contain mx-auto drop-shadow-sm transition-transform duration-305 group-hover:scale-105"
      onError={() => setError(true)}
    />
  );
}

function ProdutosContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");

  // State
  const [selectedCategory, setSelectedCategory] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [selectedNorm, setSelectedNorm] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync category from URL query parameter
  useEffect(() => {
    if (catParam !== null) {
      const catIndex = parseInt(catParam, 10);
      if (catIndex >= 0 && catIndex <= 8) {
        setSelectedCategory(catIndex);
      }
    }
  }, [catParam]);

  const categories = [
    "Parafusos",
    "Porcas",
    "Arruelas",
    "Chumbadores Mecânicos",
    "Chumbadores Químicos",
    "Rebites",
    "Fixadores Para Painéis Solares",
    "Acessórios e Fixadores",
    "Barras Roscadas",
  ];
  // Filtering Logic
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.norm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Simple filter matching
    let matchesMaterial = true;
    if (selectedMaterial !== "all") {
      if (selectedMaterial === "carbono") {
        matchesMaterial = p.material.toLowerCase().includes("carbono") || p.material.toLowerCase().includes("liga");
      } else if (selectedMaterial === "inox") {
        matchesMaterial = p.material.toLowerCase().includes("inox") || p.material.toLowerCase().includes("inoxidável");
      } else if (selectedMaterial === "latão") {
        matchesMaterial = p.material.toLowerCase().includes("latão") || p.material.toLowerCase().includes("não-ferroso");
      }
    }

    let matchesNorm = true;
    if (selectedNorm !== "all") {
      if (selectedNorm === "astm") {
        matchesNorm = p.norm.toLowerCase().includes("astm") || p.norm.toLowerCase().includes("asme");
      } else if (selectedNorm === "din") {
        matchesNorm = p.norm.toLowerCase().includes("din") || p.norm.toLowerCase().includes("iso") || p.norm.toLowerCase().includes("en");
      }
    }

    return matchesCategory && matchesSearch && matchesMaterial && matchesNorm;
  });

  const handleRequestQuote = (productName: string) => {
    router.push(`/contato?product=${encodeURIComponent(productName)}`);
  };

  const getWhatsAppUrl = (productName: string) => {
    const baseText = `Olá, vim pelo site! Gostaria de cotar o ${productName}, poderia me ajudar?`;
    return `https://wa.me/5511930736051?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <div className="flex-grow grid-bg py-12 relative min-h-screen bg-zinc-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-accent-yellow-hover uppercase tracking-wider">
            <Zap className="h-3.5 w-3.5 fill-accent-yellow text-accent-yellow" />
            Portfólio Técnico de Fixação Industrial
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Parafusos e Fixadores de Alta Qualidade
          </h1>
          <p className="text-sm text-zinc-600 max-w-2xl font-light">
            Navegue por nossa linha completa como <strong className="font-semibold text-zinc-900">fabricante de parafusos</strong> e distribuidor de <strong className="font-semibold text-zinc-900">fixadores industriais</strong>. Fornecemos <strong className="font-semibold text-zinc-900">parafusos inox</strong>, <strong className="font-semibold text-zinc-900">parafusos de aço</strong>, <strong className="font-semibold text-zinc-900">parafusos sextavados</strong> e <strong className="font-semibold text-zinc-900">fixadores de alta resistencia</strong>. Selecione o item de interesse para cotação comercial rápida.
          </p>
          <div className="w-16 h-1.5 bg-accent-yellow rounded-full" />
        </div>

        {/* SPECIAL FABRICATION BANNER */}
        <div className="mb-10 border-l-4 border-accent-yellow bg-zinc-900 text-white rounded-r-xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-[10px] text-accent-yellow font-mono tracking-wider uppercase block">// Engenharia Especializada</span>
            <p className="text-sm sm:text-base font-bold">
              Desenvolvemos <strong className="text-accent-yellow font-bold">fixadores personalizados</strong> — Solicite a fabricação de seu <strong className="text-accent-yellow font-bold">parafuso sob medida</strong> ou <strong className="text-accent-yellow font-bold">parafuso personalizado</strong> diretamente com nossa engenharia.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Fixadores Especiais Sob Desenho/Amostra")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group/btn z-0 self-start sm:self-center px-4 py-2.5 bg-zinc-950 text-white rounded-lg text-xs font-bold tracking-wider active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 shrink-0 uppercase cursor-pointer"
          >
            {/* Expanding circle background */}
            <span className="absolute inset-0 bg-emerald-600 rounded-full scale-0 group-hover/btn:scale-[2.5] transition-transform duration-500 ease-out -z-10 origin-center" />
            
            {/* WhatsApp Icon SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-accent-yellow shrink-0 group-hover/btn:text-white transition-colors duration-300">
              <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.414 1.258 4.86L2 22l5.312-1.394c1.408.767 3.013 1.206 4.698 1.206 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.78 13.06c-.2.56-1.16 1.08-1.6 1.12-.4.04-.92.22-2.74-.5-2.32-.92-3.8-3.28-3.92-3.44-.12-.16-1.04-1.38-1.04-2.63 0-1.25.64-1.86.88-2.12.2-.22.44-.28.58-.28.14 0 .28 0 .4.02.12.02.28-.04.44.34.16.38.56 1.36.6 1.48.04.1.06.22 0 .34-.06.12-.1.2-.2.32-.1.1-.2.24-.3.34-.1.12-.22.24-.1.44.12.2.54.88 1.14 1.42.78.7 1.44.92 1.64 1.02.2.1.32.08.44-.06.12-.14.52-.6.66-.8.14-.2.28-.16.48-.08.2.08 1.26.6 1.48.7.22.1.36.16.42.26.06.1.06.56-.14 1.12z" />
            </svg>
            
            <span>Consultar Especial</span>

            {/* Sliding External Arrow Icon */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-3 w-0 opacity-0 group-hover/btn:w-3 group-hover/btn:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/btn:translate-x-0 shrink-0 text-white"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: FILTERS */}
          <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">
            
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar fixador, norma..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-zinc-350 focus:border-yellow-500 rounded-lg py-2.5 pl-10 pr-4 text-sm text-zinc-800 focus:outline-none placeholder-zinc-400 shadow-sm"
              />
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3.5 text-zinc-500 hover:text-zinc-800 text-xs"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Sidebar Box Filters */}
            <div className="border border-zinc-200 rounded-xl bg-white p-5 space-y-6 shadow-sm">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                <span className="font-bold text-xs tracking-wider uppercase text-zinc-900 flex items-center gap-1.5">
                  <SlidersHorizontal className="h-4 w-4 text-accent-yellow-hover" /> Filtros Técnicos
                </span>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedMaterial("all");
                    setSelectedNorm("all");
                    setSearchQuery("");
                  }}
                  className="text-[10px] font-bold text-zinc-500 hover:text-accent-yellow-hover transition-colors uppercase"
                >
                  Resetar
                </button>
              </div>

              {/* Category selector */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase block">Categoria</span>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left text-xs px-3 py-2 rounded-lg font-bold transition-all ${
                      selectedCategory === "all"
                        ? "bg-accent-yellow/10 text-accent-yellow-hover border border-accent-yellow/20"
                        : "bg-zinc-50 text-zinc-600 border border-transparent hover:text-zinc-900"
                    }`}
                  >
                    Todos os Elementos
                  </button>
                  {categories.map((catName, index) => (
                    <button
                      key={catName}
                      onClick={() => setSelectedCategory(index)}
                      className={`w-full text-left text-xs px-3 py-2 rounded-lg font-bold transition-all ${
                        selectedCategory === index
                          ? "bg-accent-yellow/10 text-accent-yellow-hover border border-accent-yellow/20"
                          : "bg-zinc-50 text-zinc-600 border border-transparent hover:text-zinc-900"
                      }`}
                    >
                      {catName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Selector */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase block">Liga Metalúrgica</span>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 focus:border-yellow-500 rounded-lg p-2.5 text-xs text-zinc-700 focus:outline-none"
                >
                  <option value="all">Todos os Materiais</option>
                  <option value="carbono">Aço Carbono / Liga</option>
                  <option value="inox">Aço Inox (304 / 316)</option>
                  <option value="latão">Latão / Não-Ferrosos</option>
                </select>
              </div>

              {/* Norm Selector */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase block">Norma Regulamentadora</span>
                <select
                  value={selectedNorm}
                  onChange={(e) => setSelectedNorm(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 focus:border-yellow-500 rounded-lg p-2.5 text-xs text-zinc-700 focus:outline-none"
                >
                  <option value="all">Todas as Normas</option>
                  <option value="astm">Normas ASTM / ASME</option>
                  <option value="din">Normas DIN / ISO (Métricas)</option>
                </select>
              </div>

            </div>

            {/* Quick Contact Info */}
            <div className="hidden lg:block border border-zinc-200 rounded-xl bg-white p-5 space-y-4 shadow-sm">
              <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-1.5">
                <Settings className="h-4 w-4 text-accent-yellow-hover" /> Rastreabilidade Garantida
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Todos os lotes acompanham certificado de qualidade e laudo de ensaios mecânicos de tração e dureza, em conformidade com as exigências técnicas da auditoria.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: PRODUCTS LIST */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Active filters indicators */}
            <div className="flex items-center justify-between text-xs text-zinc-600 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
              <span>
                Exibindo <strong className="text-accent-yellow-hover">{filteredProducts.length}</strong> produtos
              </span>
              <span className="font-semibold text-zinc-400">
                Selecione um produto para cotação direta
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border border-zinc-200 rounded-xl bg-white hover:border-accent-yellow/35 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-sm"
                  >
                    {/* Top Focused Visual Box */}
                    <div className="bg-zinc-50/70 p-6 border-b border-zinc-100 flex items-center justify-center relative min-h-[180px] group-hover:bg-zinc-50 transition-colors">
                      <ProductImage src={product.image} alt={product.title} />
                      <span className="absolute top-2 left-3 text-[8px] font-mono text-zinc-400 border border-zinc-200 bg-white px-1.5 py-0.5 rounded">
                        NORM: {product.norm.split(" / ")[0]}
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        {/* Grade and specifications */}
                        <div className="flex items-center justify-between text-[9px] text-zinc-500 font-mono">
                          <span className="font-bold uppercase tracking-wider text-accent-yellow-hover">
                            {categories[product.category]}
                          </span>
                          <span className="bg-zinc-100 px-1.5 py-0.5 rounded font-bold text-zinc-655">
                            {product.grade}
                          </span>
                        </div>

                        {/* Product Title */}
                        <h3 className="text-sm font-black text-zinc-900 group-hover:text-accent-yellow-hover transition-colors leading-tight line-clamp-1">
                          {product.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-[11px] text-zinc-500 leading-normal line-clamp-1 font-light">
                          {product.description}
                        </p>
                      </div>

                      {/* Technical Specs Tags inside card */}
                      <div className="space-y-3 pt-3 border-t border-zinc-100">
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <div>
                            <span className="text-[8px] text-zinc-400 font-bold block uppercase tracking-wider">Liga</span>
                            <span className="text-zinc-700 truncate block font-semibold">{product.material.split(" / ")[0]}</span>
                          </div>
                          <div>
                            <span className="text-[8px] text-zinc-400 font-bold block uppercase tracking-wider">Bitolas</span>
                            <span className="text-zinc-700 truncate block font-mono font-semibold">{product.sizes[0]} a {product.sizes[product.sizes.length - 1]}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="p-5 pt-0 mt-auto space-y-2">
                      <a
                        href={getWhatsAppUrl(product.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden group/btn z-0 w-full py-2.5 bg-zinc-900 text-white rounded-lg font-bold text-xs tracking-wider active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 uppercase cursor-pointer border border-zinc-800/10 shadow-sm"
                      >
                        {/* Expanding circle background */}
                        <span className="absolute inset-0 bg-emerald-600 rounded-full scale-0 group-hover/btn:scale-[2.5] transition-transform duration-500 ease-out -z-10 origin-center" />
                        
                        {/* WhatsApp Icon SVG */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent-yellow shrink-0 group-hover/btn:text-white transition-colors duration-300">
                          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.414 1.258 4.86L2 22l5.312-1.394c1.408.767 3.013 1.206 4.698 1.206 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.78 13.06c-.2.56-1.16 1.08-1.6 1.12-.4.04-.92.22-2.74-.5-2.32-.92-3.8-3.28-3.92-3.44-.12-.16-1.04-1.38-1.04-2.63 0-1.25.64-1.86.88-2.12.2-.22.44-.28.58-.28.14 0 .28 0 .4.02.12.02.28-.04.44.34.16.38.56 1.36.6 1.48.04.1.06.22 0 .34-.06.12-.1.2-.2.32-.1.1-.2.24-.3.34-.1.12-.22.24-.1.44.12.2.54.88 1.14 1.42.78.7 1.44.92 1.64 1.02.2.1.32.08.44-.06.12-.14.52-.6.66-.8.14-.2.28-.16.48-.08.2.08 1.26.6 1.48.7.22.1.36.16.42.26.06.1.06.56-.14 1.12z" />
                        </svg>
                        
                        <span>Cote pelo Whatsapp</span>

                        {/* Sliding External Arrow Icon */}
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="h-3.5 w-0 opacity-0 group-hover/btn:w-3.5 group-hover/btn:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/btn:translate-x-0 shrink-0 text-white"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                      
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full py-1.5 text-zinc-500 hover:text-zinc-800 text-[10px] font-bold tracking-wider transition-all duration-250 flex items-center justify-center gap-1 uppercase cursor-pointer"
                      >
                        <Info className="h-3.5 w-3.5" />
                        Ficha Técnica
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-zinc-250 rounded-2xl bg-white p-8">
                <Search className="h-12 w-12 text-zinc-300 mx-auto mb-4 stroke-1" />
                <h3 className="font-bold text-zinc-900 text-base">Nenhum fixador encontrado</h3>
                <p className="text-xs text-zinc-500 mt-2 max-w-sm mx-auto leading-relaxed">
                  Tente alterar seus termos de pesquisa ou remover alguns dos filtros de norma ou liga metálica.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedMaterial("all");
                    setSelectedNorm("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 bg-zinc-100 hover:bg-zinc-250 text-zinc-800 text-xs rounded-lg font-bold transition-colors border border-zinc-250"
                >
                  Limpar Todos os Filtros
                </button>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-sm">
          <div className="border border-zinc-200 rounded-2xl bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-100 flex items-start justify-between bg-zinc-50">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-accent-yellow-hover uppercase font-bold">
                  Especificação Técnica: {selectedProduct.norm}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950">
                  {selectedProduct.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1 rounded-lg text-zinc-450 hover:text-zinc-800 hover:bg-zinc-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Product Image Display in Modal */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 flex items-center justify-center">
                <div className="w-48">
                  <ProductImage src={selectedProduct.image} alt={selectedProduct.title} />
                </div>
              </div>

              {/* Technical properties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                  <span className="text-[9px] text-zinc-450 font-bold block uppercase tracking-wider">Normas Técnicas</span>
                  <span className="text-xs text-zinc-800 font-bold">{selectedProduct.norm}</span>
                </div>
                <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                  <span className="text-[9px] text-zinc-450 font-bold block uppercase tracking-wider">Classe/Grau de Resistência</span>
                  <span className="text-xs text-zinc-800 font-bold">{selectedProduct.grade}</span>
                </div>
                <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                  <span className="text-[9px] text-zinc-450 font-bold block uppercase tracking-wider">Material / Dureza</span>
                  <span className="text-xs text-zinc-800 font-bold">{selectedProduct.material}</span>
                </div>
                <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                  <span className="text-[9px] text-zinc-450 font-bold block uppercase tracking-wider">Categoria Geral</span>
                  <span className="text-xs text-zinc-800 font-bold">{categories[selectedProduct.category]}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">Especificação do Produto:</h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Application details */}
              <div className="space-y-2 bg-accent-yellow/5 p-4 rounded-xl border border-accent-yellow/15">
                <h4 className="text-xs font-bold text-accent-yellow-hover uppercase tracking-wider flex items-center gap-1.5">
                  <Hammer className="h-4 w-4" /> Recomendação Operacional:
                </h4>
                <p className="text-xs text-zinc-650 leading-relaxed font-light font-semibold">
                  {selectedProduct.application}
                </p>
              </div>

              {/* Size details */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">Medidas Disponíveis em Estoque Regulador:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <span
                      key={size}
                      className="text-xs font-mono text-zinc-700 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded font-bold"
                    >
                      {size}
                    </span>
                  ))}
                </div>
                <span className="text-[9px] text-zinc-400 leading-relaxed block font-mono">
                  * Fabricamos outras bitolas e comprimentos sob desenho pela nossa equipe comercial.
                </span>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-zinc-150 bg-zinc-50 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-medium">Fornecimento em lotes e embalagem industrial.</span>
              <a
                href={getWhatsAppUrl(selectedProduct.title)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedProduct(null)}
                className="relative overflow-hidden group/btn z-0 px-6 py-3 bg-zinc-900 text-white rounded-lg font-bold text-sm tracking-wider active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                {/* Expanding circle background */}
                <span className="absolute inset-0 bg-emerald-600 rounded-full scale-0 group-hover/btn:scale-[2.5] transition-transform duration-500 ease-out -z-10 origin-center" />
                
                {/* WhatsApp Icon SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent-yellow shrink-0 group-hover/btn:text-white transition-colors duration-300">
                  <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.414 1.258 4.86L2 22l5.312-1.394c1.408.767 3.013 1.206 4.698 1.206 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.78 13.06c-.2.56-1.16 1.08-1.6 1.12-.4.04-.92.22-2.74-.5-2.32-.92-3.8-3.28-3.92-3.44-.12-.16-1.04-1.38-1.04-2.63 0-1.25.64-1.86.88-2.12.2-.22.44-.28.58-.28.14 0 .28 0 .4.02.12.02.28-.04.44.34.16.38.56 1.36.6 1.48.04.1.06.22 0 .34-.06.12-.1.2-.2.32-.1.1-.2.24-.3.34-.1.12-.22.24-.1.44.12.2.54.88 1.14 1.42.78.7 1.44.92 1.64 1.02.2.1.32.08.44-.06.12-.14.52-.6.66-.8.14-.2.28-.16.48-.08.2.08 1.26.6 1.48.7.22.1.36.16.42.26.06.1.06.56-.14 1.12z" />
                </svg>
                
                <span>Cote pelo Whatsapp</span>

                {/* Sliding External Arrow Icon */}
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-3.5 w-0 opacity-0 group-hover/btn:w-3.5 group-hover/btn:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/btn:translate-x-0 shrink-0 text-white"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default function Produtos() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin"></div></div>}>
      <ProdutosContent />
    </Suspense>
  );
}
