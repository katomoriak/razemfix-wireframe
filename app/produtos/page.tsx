"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  Hammer,
  FileText,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  X,
  Info,
  CheckCircle2,
  Zap,
} from "lucide-react";

interface Product {
  id: string;
  category: number; // 0, 1, 2
  title: string;
  norm: string;
  material: string;
  grade: string;
  application: string;
  description: string;
  sizes: string[];
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
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Sync category from URL query parameter
  useEffect(() => {
    if (catParam !== null) {
      const catIndex = parseInt(catParam, 10);
      if (catIndex >= 0 && catIndex <= 2) {
        setSelectedCategory(catIndex);
      }
    }
  }, [catParam]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("razemfix_quote_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Erro ao carregar o carrinho:", e);
      }
    }
  }, []);

  // Save cart to localStorage
  const saveCartToStorage = (newCart: typeof cart) => {
    setCart(newCart);
    localStorage.setItem("razemfix_quote_cart", JSON.stringify(newCart));
  };

  const showNotification = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const addToCart = (product: Product) => {
    const existingIndex = cart.findIndex((item) => item.product.id === product.id);
    let newCart = [...cart];
    
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += 1;
    } else {
      newCart.push({ product, quantity: 100 }); // B2B default lot size
    }
    
    saveCartToStorage(newCart);
    showNotification(`Lote de "${product.title}" adicionado ao carrinho!`);
  };

  const updateCartQty = (productId: string, qty: number) => {
    if (qty <= 0) {
      const newCart = cart.filter((item) => item.product.id !== productId);
      saveCartToStorage(newCart);
    } else {
      const newCart = cart.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      );
      saveCartToStorage(newCart);
    }
  };

  const removeFromCart = (productId: string) => {
    const newCart = cart.filter((item) => item.product.id !== productId);
    saveCartToStorage(newCart);
  };

  const proceedToQuote = () => {
    router.push("/contato?prepopulated=true");
  };

  const categories = [
    "Parafusos Sextavados, Linha Pesada e Estojos",
    "Sextavado Interno (Allen) e Fixação Rápida",
    "Porcas, Arruelas Técnicas e Rebites",
  ];

  const products: Product[] = [
    // Category 0
    {
      id: "p1",
      category: 0,
      title: "Parafuso Sextavado Estrutural ASTM A325",
      norm: "ASTM A325 / ASME B18.2.6",
      material: "Aço Carbono Temperado e Revenido",
      grade: "Classe A325 Tipo 1",
      application: "Ligações estruturais pesadas, flanges de pontes, estruturas metálicas de galpões e obras de grande porte.",
      description: "Desenvolvido especificamente para conexões estruturais de alta resistência mecânica. Fornece força de fixação garantida sob conformidade rígida de tração.",
      sizes: ["1/2\"", "5/8\"", "3/4\"", "7/8\"", "1\"", "1.1/4\""]
    },
    {
      id: "p2",
      category: 0,
      title: "Prisioneiro para Alta Pressão ASTM A193 B7",
      norm: "ASTM A193 Grau B7 / ASME B18.31.2",
      material: "Aço Cromo-Molibdênio",
      grade: "Grau B7 (Alta Temperatura/Pressão)",
      application: "Flanges de tubulações petroquímicas, vasos de pressão, conexões de caldeiras e montagens mecânicas industriais.",
      description: "Prisioneiros de alta resistência à tração e temperatura. Projetados para manter a estanqueidade em ambientes críticos.",
      sizes: ["3/8\"", "1/2\"", "5/8\"", "3/4\"", "1\"", "1.1/2\"", "2\""]
    },
    {
      id: "p3",
      category: 0,
      title: "Parafuso Sextavado DIN 933 (Rosca Inteira)",
      norm: "DIN 933 / ISO 4017",
      material: "Aço Inoxidável A2 (304) e A4 (316)",
      grade: "Classe 70 / 80",
      application: "Montagens industriais alimentícias, químicas, farmacêuticas e ambientes marítimos corrosivos.",
      description: "Parafusos de cabeça sextavada inteiramente roscados. Excelente resistência à oxidação e agentes químicos.",
      sizes: ["M5", "M6", "M8", "M10", "M12", "M16", "M20", "M24"]
    },
    {
      id: "p4",
      category: 0,
      title: "Barra Roscada sob Medida DIN 975",
      norm: "DIN 975 / DIN 976",
      material: "Aço Carbono e Inox (304/316)",
      grade: "Grau 5.6 / 8.8 / Classe 70",
      application: "Instalações elétricas suspensas, ancoragens em concreto, passagens de tubulações e cortes personalizados.",
      description: "Barras roscadas contínuas de 1 ou 2 metros, cortadas sob especificação direta para suspensão de cargas industriais.",
      sizes: ["1/4\"", "3/8\"", "1/2\"", "5/8\"", "M6", "M8", "M10", "M12", "M16", "M20"]
    },
    // Category 1
    {
      id: "p5",
      category: 1,
      title: "Parafuso Allen Cabeça Cilíndrica DIN 912",
      norm: "DIN 912 / ISO 4762",
      material: "Aço Liga de Alta Resistência / Inox",
      grade: "Classe 12.9 (Extrema Resistência)",
      application: "Maquinários internos de precisão, matrizes industriais, motores e componentes mecânicos de alta vibração.",
      description: "A cabeça cilíndrica com sextavado interno permite aperto de torque elevado em espaços limitados de montagem.",
      sizes: ["M3", "M4", "M5", "M6", "M8", "M10", "M12", "M16", "M20"]
    },
    {
      id: "p6",
      category: 1,
      title: "Parafuso Allen Cabeça Chata DIN 7991",
      norm: "DIN 7991 / ISO 10642",
      material: "Aço Carbono / Aço Inox",
      grade: "Classe 10.9 / 8.8",
      application: "Superfícies faceadas ou niveladas onde a cabeça do parafuso não pode sobressair da chapa.",
      description: "Cabeça escareada de precisão para acabamento nivelado impecável em chapas metálicas e guias lineares.",
      sizes: ["M4", "M5", "M6", "M8", "M10", "M12", "M16"]
    },
    {
      id: "p7",
      category: 1,
      title: "Parafuso de Ombro (Shoulder) ISO 7379",
      norm: "ISO 7379 / ASME B18.3",
      material: "Aço Liga Temperado / Retificado",
      grade: "Classe 12.9",
      application: "Pivôs de articulações, eixos de rotação para polias, guias de estampas e movimentos deslizantes controlados.",
      description: "Tolerância decimal retificada no corpo não roscado, funcionando como eixo de alta precisão para movimentos mecânicos.",
      sizes: ["D6 x M5", "D8 x M6", "D10 x M8", "D12 x M10", "D16 x M12", "D20 x M16"]
    },
    {
      id: "p8",
      category: 1,
      title: "Parafuso Auto-Brocante Técnico Cabeça Flangeada",
      norm: "DIN 7504 K / SAE J78",
      material: "Aço Carbono Cementado / Revestido",
      grade: "Tratamento Térmico Especial",
      application: "Fixação rápida de chapas metálicas, perfis em estruturas de Drywall, coberturas de telhados e painéis solares.",
      description: "Ponta broca de alta capacidade de perfuração instantânea, eliminando a necessidade de pré-furo em perfis metálicos.",
      sizes: ["#8 x 1/2\"", "#10 x 3/4\"", "#12 x 1\"", "#14 x 1.1/2\"", "#14 x 2\""]
    },
    // Category 2
    {
      id: "p9",
      category: 2,
      title: "Porca Sextavada Auto-Travante DIN 985",
      norm: "DIN 985 / ISO 7040",
      material: "Aço Carbono / Inox com Inserto de Nylon",
      grade: "Classe 8 / 10 / Inox A2",
      application: "Sistemas sujeitos a fortes vibrações, motores, chassis automotivos e acionamentos mecânicos contínuos.",
      description: "O anel interno de nylon deforma no aperto, travando mecanicamente a rosca e impedindo o afrouxamento acidental por fadiga.",
      sizes: ["M4", "M5", "M6", "M8", "M10", "M12", "M16", "M20", "M24"]
    },
    {
      id: "p10",
      category: 2,
      title: "Arruela Lisa de Alta Resistência ASTM F436",
      norm: "ASTM F436 / ASME B18.21.1",
      material: "Aço Carbono Temperado",
      grade: "Temperada / Galvanizada a Fogo",
      application: "Flanges e conexões estruturais sujeitas a torques extremos junto aos parafusos ASTM A325 e A490.",
      description: "Dureza elevada para resistir a esmagamentos sob carga severa de montagens industriais e estruturais metálicas.",
      sizes: ["1/2\"", "5/8\"", "3/4\"", "7/8\"", "1\"", "1.1/4\"", "1.1/2\""]
    },
    {
      id: "p11",
      category: 2,
      title: "Arruela de Pressão Mecânica DIN 127 B",
      norm: "DIN 127 B / ASME B18.21.1",
      material: "Aço Mola / Aço Inoxidável A2/A4",
      grade: "Mola Temperada",
      application: "Fixações mecânicas gerais de motores, equipamentos fabris e tampas metálicas sujeitas a vibrações rotacionais.",
      description: "Perfil helicoidal que fornece força elástica constante à cabeça do fixador, evitando vibrações de micro-espaço.",
      sizes: ["1/4\"", "5/16\"", "3/8\"", "1/2\"", "M5", "M6", "M8", "M10", "M12", "M16", "M20"]
    },
    {
      id: "p12",
      category: 2,
      title: "Rebite de Repuxo Técnico (Fixação Cega)",
      norm: "DIN 7337 / ISO 15977",
      material: "Corpo Alumínio / Mandril Aço Carbono",
      grade: "Grau Industrial",
      application: "Fixação cega de painéis, gabinetes elétricos, carrocerias de caminhão e montagens sem acesso à contrapeça.",
      description: "Permite fixação mecânica durável em chapas metálicas finas operando apenas por um lado do furo.",
      sizes: ["3.2 x 8mm", "4.0 x 10mm", "4.8 x 12mm", "4.8 x 16mm", "6.4 x 20mm"]
    }
  ];

  // Filtering Logic
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.norm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMaterial =
      selectedMaterial === "all" || p.material.toLowerCase().includes(selectedMaterial.toLowerCase());
    const matchesNorm = selectedNorm === "all" || p.norm.toLowerCase().includes(selectedNorm.toLowerCase());
    return matchesCategory && matchesSearch && matchesMaterial && matchesNorm;
  });

  return (
    <div className="flex-grow grid-bg py-12 relative min-h-screen">
      
      {/* Toast Notification */}
      <div
        className={`fixed bottom-5 right-5 z-50 bg-slate-900 border border-orange-500 text-white px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-300 transform flex items-center gap-3 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <CheckCircle2 className="h-5 w-5 text-orange-500 animate-bounce" />
        <span className="text-sm font-semibold">{toastMessage}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest">
            <Zap className="h-3.5 w-3.5 fill-orange-500 animate-pulse" />
            Catálogo Técnico de Alta Performance B2B
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Elementos de Fixação Industrial
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl font-light">
            Navegue por nossa linha de elementos calibrados e testados. Adicione produtos na quantidade estimada para compor sua solicitação de orçamento B2B e exportar diretamente para nossa equipe comercial.
          </p>
          <div className="w-16 h-1 bg-orange-500 rounded-full" />
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
                className="w-full bg-slate-900/80 border border-white/10 focus:border-orange-500/50 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none placeholder-slate-500 transition-colors"
              />
              <Search className="absolute left-3.5 top-3 h-4.5 w-4.5 text-slate-500" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3.5 text-slate-500 hover:text-white text-xs"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Sidebar Box Filters */}
            <div className="border border-white/10 rounded-xl bg-slate-900/30 p-5 space-y-6 glass-panel">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="font-bold text-xs tracking-wider uppercase text-white flex items-center gap-1.5">
                  <SlidersHorizontal className="h-4.5 w-4.5 text-orange-500" /> Filtros Técnicos
                </span>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedMaterial("all");
                    setSelectedNorm("all");
                    setSearchQuery("");
                  }}
                  className="text-[10px] font-bold text-slate-500 hover:text-orange-500 transition-colors uppercase"
                >
                  Resetar
                </button>
              </div>

              {/* Category selector */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase block">Categoria</span>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left text-xs px-3 py-2 rounded-lg font-semibold transition-all ${
                      selectedCategory === "all"
                        ? "bg-orange-500/15 text-orange-500 border border-orange-500/30"
                        : "bg-slate-950/40 text-slate-400 border border-transparent hover:text-white"
                    }`}
                  >
                    Todos os Elementos
                  </button>
                  {categories.map((catName, index) => (
                    <button
                      key={catName}
                      onClick={() => setSelectedCategory(index)}
                      className={`w-full text-left text-xs px-3 py-2 rounded-lg font-semibold transition-all ${
                        selectedCategory === index
                          ? "bg-orange-500/15 text-orange-500 border border-orange-500/30"
                          : "bg-slate-950/40 text-slate-400 border border-transparent hover:text-white"
                      }`}
                    >
                      {catName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Selector */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase block">Material Metalúrgico</span>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 focus:border-orange-500/50 rounded-lg p-2 text-xs text-slate-300 focus:outline-none"
                >
                  <option value="all">Todos os Materiais</option>
                  <option value="carbono">Aço Carbono / Liga</option>
                  <option value="inox">Aço Inox (304 / 316)</option>
                  <option value="latão">Latão Técnico</option>
                </select>
              </div>

              {/* Norm Selector */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase block">Norma Regulamentadora</span>
                <select
                  value={selectedNorm}
                  onChange={(e) => setSelectedNorm(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 focus:border-orange-500/50 rounded-lg p-2 text-xs text-slate-300 focus:outline-none"
                >
                  <option value="all">Todas as Normas</option>
                  <option value="astm">Normas ASTM (A325, F436, B7)</option>
                  <option value="din">Normas DIN / ISO (Métricas)</option>
                </select>
              </div>

            </div>

            {/* Quick Quote B2B Floating Info */}
            <div className="hidden lg:block border border-orange-500/10 rounded-xl bg-gradient-to-tr from-orange-500/5 to-transparent p-5 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/5 rounded-full blur-lg" />
              <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-1.5">
                <Zap className="h-4 w-4" /> Atendimento Corporativo
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Empresas cadastradas possuem suporte de faturamento estendido, cotação por lote misto e rastreabilidade documental integral com certificado de matéria-prima.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: PRODUCTS LIST */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Active filters indicators */}
            <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950/40 p-4 rounded-xl border border-white/5">
              <span>
                Exibindo <strong className="text-orange-500">{filteredProducts.length}</strong> produtos
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1.5 px-3 rounded-lg flex items-center gap-2 transition-all relative active:scale-95 border border-orange-400/20"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Carrinho ({cart.reduce((acc, curr) => acc + curr.quantity, 0)} un)
                  {cart.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-white text-orange-600 font-extrabold text-[9px] rounded-full h-4 w-4 flex items-center justify-center border border-orange-500 shadow-md">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Grid display */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border border-white/10 rounded-xl bg-slate-900/20 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between group p-6 shadow-md hover:shadow-orange-500/5 hover:border-orange-500/20"
                  >
                    <div className="space-y-4">
                      {/* Top tags */}
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-mono text-orange-400 uppercase font-semibold">
                          {product.norm}
                        </span>
                        <span className="text-slate-500 bg-slate-950/80 px-2 py-0.5 rounded border border-white/5 font-mono">
                          {product.grade}
                        </span>
                      </div>

                      {/* Product Title */}
                      <h3 className="text-base font-extrabold text-white group-hover:text-orange-400 transition-colors leading-snug">
                        {product.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 font-light">
                        {product.description}
                      </p>

                      {/* Material Spec Detail */}
                      <div className="bg-slate-950/50 p-2.5 rounded-lg border border-white/5 space-y-1">
                        <span className="text-[9px] text-slate-500 font-bold block uppercase tracking-wider">Liga Metálica</span>
                        <span className="text-xs text-slate-300 font-light">{product.material}</span>
                      </div>

                      {/* Size listing summary */}
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.slice(0, 4).map((size) => (
                          <span
                            key={size}
                            className="text-[9px] font-mono text-slate-400 bg-slate-950/80 px-1.5 py-0.5 rounded"
                          >
                            {size}
                          </span>
                        ))}
                        {product.sizes.length > 4 && (
                          <span className="text-[9px] text-slate-500 px-1 py-0.5 font-bold">
                            +{product.sizes.length - 4} tam
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 pt-6 border-t border-white/5 mt-6">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 py-2 border border-white/10 hover:border-white/20 bg-slate-950/50 hover:bg-slate-950 text-slate-300 hover:text-white rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-1"
                      >
                        <Info className="h-3.5 w-3.5" />
                        Detalhes
                      </button>
                      
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 py-2 bg-orange-500/10 hover:bg-orange-500 border border-orange-500/20 hover:border-orange-500 text-orange-400 hover:text-white rounded-lg text-xs font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-1"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        Adicionar
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-white/5 rounded-2xl bg-slate-900/10 p-8">
                <ShoppingBag className="h-12 w-12 text-slate-600 mx-auto mb-4 stroke-1" />
                <h3 className="font-bold text-white text-base">Nenhum fixador encontrado</h3>
                <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
                  Tente alterar seus termos de pesquisa ou remover alguns dos filtros de norma ou material.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedMaterial("all");
                    setSelectedNorm("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 text-xs rounded-lg font-semibold transition-colors"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="border border-white/15 rounded-2xl bg-slate-900 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative glass-panel">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 flex items-start justify-between bg-slate-950/50">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-orange-500 uppercase font-semibold">
                  Normativa: {selectedProduct.norm}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  {selectedProduct.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Technical properties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5">
                  <span className="text-[9px] text-slate-500 font-bold block uppercase tracking-wider">Normas Técnicas</span>
                  <span className="text-xs text-slate-200 font-semibold">{selectedProduct.norm}</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5">
                  <span className="text-[9px] text-slate-500 font-bold block uppercase tracking-wider">Classe/Grau de Resistência</span>
                  <span className="text-xs text-slate-200 font-semibold">{selectedProduct.grade}</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5">
                  <span className="text-[9px] text-slate-500 font-bold block uppercase tracking-wider">Material</span>
                  <span className="text-xs text-slate-200 font-semibold">{selectedProduct.material}</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5">
                  <span className="text-[9px] text-slate-500 font-bold block uppercase tracking-wider">Categoria Razemfix</span>
                  <span className="text-xs text-slate-200 font-semibold">{categories[selectedProduct.category]}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Descrição Detalhada:</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Application details */}
              <div className="space-y-2 bg-orange-500/5 p-4 rounded-xl border border-orange-500/15">
                <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Hammer className="h-4 w-4" /> Recomendação de Aplicação Industrial:
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {selectedProduct.application}
                </p>
              </div>

              {/* Size details */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Medidas Disponíveis em Estoque Regulador:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <span
                      key={size}
                      className="text-xs font-mono text-slate-300 bg-slate-950 border border-white/5 px-2.5 py-1 rounded"
                    >
                      {size}
                    </span>
                  ))}
                </div>
                <span className="text-[9px] text-slate-500 leading-relaxed block font-mono">
                  * Outras bitolas e comprimentos podem ser fabricados sob desenho pela engenharia.
                </span>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/5 bg-slate-950/50 flex items-center justify-between">
              <span className="text-xs text-slate-400">Embalagem padrão: Lotes industriais fracionados.</span>
              <button
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-sm tracking-wider shadow-lg shadow-orange-500/10 active:scale-95 transition-all duration-300 flex items-center gap-2 border border-orange-400/20"
              >
                <Plus className="h-4 w-4" />
                ADICIONAR AO ORÇAMENTO
              </button>
            </div>

          </div>
        </div>
      )}

      {/* SLIDING B2B QUOTE CART DRAWER */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[450px] bg-slate-950 border-l border-white/10 shadow-2xl transition-all duration-300 transform flex flex-col justify-between ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">Lista de Cotação B2B</h3>
              <span className="text-[10px] text-slate-500 block uppercase font-mono">Razemfix procurement</span>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-grow p-6 overflow-y-auto space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="border border-white/5 bg-slate-900/40 rounded-xl p-4 flex flex-col justify-between gap-3 shadow-md hover:border-white/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">{item.product.norm}</span>
                    <h4 className="font-bold text-white text-xs leading-snug">{item.product.title}</h4>
                    <span className="text-[10px] text-slate-400 mt-1 block">Ref: {item.product.grade}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-1 text-slate-600 hover:text-red-400 transition-colors"
                    title="Remover produto"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-xs text-slate-400 font-light">Quant. Estimada:</span>
                  <div className="flex items-center gap-2 bg-slate-950 border border-white/10 rounded-lg p-1">
                    <button
                      onClick={() => updateCartQty(item.product.id, item.quantity - 50)}
                      className="p-1 text-slate-400 hover:text-white hover:bg-slate-850 rounded"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateCartQty(item.product.id, parseInt(e.target.value) || 0)}
                      className="bg-transparent text-white font-mono text-xs text-center w-16 focus:outline-none"
                    />
                    <button
                      onClick={() => updateCartQty(item.product.id, item.quantity + 50)}
                      className="p-1 text-slate-400 hover:text-white hover:bg-slate-850 rounded"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-slate-500 space-y-4">
              <ShoppingBag className="h-10 w-10 text-slate-700 mx-auto stroke-1" />
              <h4 className="font-bold text-white text-xs">Sua lista está vazia</h4>
              <p className="text-[11px] text-slate-500 max-w-[200px] mx-auto leading-relaxed">
                Adicione fixadores clicando em "Adicionar" nos cartões do portfólio.
              </p>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-white/5 bg-slate-900/50 space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-400">Total de Itens:</span>
            <span className="text-white font-mono text-sm">{cart.length} itens</span>
          </div>
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-400">Unidades Estimadas:</span>
            <span className="text-orange-500 font-mono text-sm">
              {cart.reduce((acc, curr) => acc + curr.quantity, 0).toLocaleString()} un
            </span>
          </div>
          
          <button
            disabled={cart.length === 0}
            onClick={proceedToQuote}
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-800 disabled:border-slate-800 disabled:text-slate-500 disabled:shadow-none text-white rounded-lg font-bold text-sm tracking-wider shadow-lg shadow-orange-500/15 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-orange-400/20"
          >
            <FileText className="h-4 w-4" />
            PROSSEGUIR COM ORÇAMENTO
          </button>
        </div>

      </div>

    </div>
  );
}

export default function Produtos() {
  return (
    <Suspense fallback={<div className="min-h-screen grid-bg flex items-center justify-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <ProdutosContent />
    </Suspense>
  );
}
