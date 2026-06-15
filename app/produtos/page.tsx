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

interface Product {
  id: string;
  category: number; // 0: Parafusos, 1: Porcas, 2: Arruelas, 3: Chumbadores, 4: Barras/Rebites, 5: Acessórios
  title: string;
  norm: string;
  material: string;
  grade: string;
  application: string;
  description: string;
  sizes: string[];
  svgType: string;
}

// Inline component to draw clean, technical vector blueprints of products
function ProductBlueprintSVG({ type }: { type: string }) {
  const strokeColor = "#71717a"; // slate-500
  const brandYellow = "var(--accent-yellow)"; // amarelo da marca
  const fillYellow = "rgba(239, 201, 78, 0.1)"; // brand yellow 10%

  switch (type) {
    case "parafuso-sextavado":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          <line x1="10" y1="50" x2="150" y2="50" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="6 4" />
          {/* Hex Head */}
          <path d="M 20 25 L 45 25 L 58 50 L 45 75 L 20 75 L 8 50 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="45" y1="25" x2="45" y2="75" stroke={strokeColor} strokeWidth="1" />
          <line x1="20" y1="25" x2="20" y2="75" stroke={strokeColor} strokeWidth="1" />
          {/* Bolt Shank */}
          <path d="M 58 38 L 130 38 L 130 62 L 58 62 Z" stroke={strokeColor} strokeWidth="1.5" />
          {/* Threads */}
          <path d="M 95 38 L 98 44 L 101 38 M 101 38 L 104 44 L 107 38 M 107 38 L 110 44 L 113 38 M 113 38 L 116 44 L 119 38 M 119 38 L 122 44 L 125 38 M 125 38 L 128 44 L 130 38" stroke={strokeColor} strokeWidth="1" />
          <path d="M 95 62 L 98 56 L 101 62 M 101 62 L 104 56 L 107 62 M 107 62 L 110 56 L 113 62 M 113 62 L 116 56 L 119 62 M 119 62 L 122 56 L 125 62 M 125 62 L 128 56 L 130 62" stroke={strokeColor} strokeWidth="1" />
          {/* Chamfer */}
          <path d="M 130 38 L 136 44 L 136 56 L 130 62 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1" />
        </svg>
      );
    case "parafuso-allen":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          <line x1="10" y1="50" x2="150" y2="50" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="6 4" />
          {/* Socket Head */}
          <path d="M 15 28 L 50 28 L 50 72 L 15 72 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" strokeLinejoin="round" />
          {/* Internal Hex Drive */}
          <path d="M 22 40 L 30 35 L 38 40 L 38 50 L 30 55 L 22 50 Z" stroke={brandYellow} strokeWidth="1" />
          {/* Shank */}
          <path d="M 50 36 L 135 36 L 135 64 L 50 64 Z" stroke={strokeColor} strokeWidth="1.5" />
          {/* Threads */}
          <path d="M 95 36 L 98 42 L 101 36 M 101 36 L 104 42 L 107 36 M 107 36 L 110 42 L 113 36 M 113 36 L 116 42 L 119 36 M 119 36 L 122 42 L 125 36 M 125 36 L 128 42 L 131 36 M 131 36 L 134 42 L 135 36" stroke={strokeColor} strokeWidth="1" />
          <path d="M 95 64 L 98 58 L 101 64 M 101 64 L 104 58 L 107 64 M 107 64 L 110 58 L 113 64 M 113 64 L 116 58 L 119 64 M 119 64 L 122 58 L 125 64 M 125 64 L 128 58 L 131 64 M 131 64 L 134 58 L 135 64" stroke={strokeColor} strokeWidth="1" />
        </svg>
      );
    case "parafuso-frances":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          <line x1="10" y1="50" x2="150" y2="50" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="6 4" />
          {/* Dome Head */}
          <path d="M 12 50 C 12 28, 42 28, 42 50 C 42 72, 12 72, 12 50 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" />
          {/* Square Neck */}
          <rect x="42" y="36" width="12" height="28" stroke={strokeColor} strokeWidth="1.5" />
          {/* Shank */}
          <path d="M 54 38 L 130 38 L 130 62 L 54 62 Z" stroke={strokeColor} strokeWidth="1.5" />
          {/* Threads */}
          <path d="M 95 38 L 98 44 L 101 38 M 101 38 L 104 44 L 107 38 M 107 38 L 110 44 L 113 38 M 113 38 L 116 44 L 119 38 M 119 38 L 122 44 L 125 38 M 125 38 L 128 44 L 130 38" stroke={strokeColor} strokeWidth="1" />
          <path d="M 95 62 L 98 56 L 101 62 M 101 62 L 104 56 L 107 62 M 107 62 L 110 56 L 113 62 M 113 62 L 116 56 L 119 62 M 119 62 L 122 56 L 125 62 M 125 62 L 128 56 L 130 62" stroke={strokeColor} strokeWidth="1" />
        </svg>
      );
    case "parafuso-martelo":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          <line x1="10" y1="50" x2="150" y2="50" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="6 4" />
          {/* T-Head */}
          <path d="M 12 25 L 35 25 L 35 75 L 12 75 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" />
          {/* Shank */}
          <path d="M 35 38 L 130 38 L 130 62 L 35 62 Z" stroke={strokeColor} strokeWidth="1.5" />
          {/* Threads */}
          <line x1="90" y1="38" x2="90" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="96" y1="38" x2="96" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="102" y1="38" x2="102" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="108" y1="38" x2="108" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="114" y1="38" x2="114" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="120" y1="38" x2="120" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="126" y1="38" x2="126" y2="62" stroke={strokeColor} strokeWidth="1" />
        </svg>
      );
    case "parafuso-autobrocante":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          <line x1="10" y1="50" x2="150" y2="50" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="6 4" />
          {/* Flanged Hex Head */}
          <path d="M 12 32 L 28 32 L 28 22 L 36 22 L 42 50 L 36 78 L 28 78 L 28 68 L 12 68 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" />
          {/* Shank */}
          <path d="M 42 40 L 115 40 L 115 60 L 42 60 Z" stroke={strokeColor} strokeWidth="1.5" />
          {/* Spaced sharp threads */}
          <path d="M 55 40 L 60 35 L 65 40 M 75 40 L 80 35 L 85 40 M 95 40 L 100 35 L 105 40" stroke={strokeColor} strokeWidth="1" />
          <path d="M 55 60 L 60 65 L 65 60 M 75 60 L 80 65 L 85 60 M 95 60 L 100 65 L 105 60" stroke={strokeColor} strokeWidth="1" />
          {/* Drill tip */}
          <path d="M 115 40 L 135 50 L 115 60 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" />
          <line x1="115" y1="50" x2="135" y2="50" stroke={strokeColor} strokeWidth="1" />
        </svg>
      );
    case "porca-sextavada":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          {/* Hex Nut Face View */}
          <path d="M 50 15 L 110 15 L 140 50 L 110 85 L 50 85 L 20 50 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" strokeLinejoin="round" />
          {/* Inner Thread Circle */}
          <circle cx="80" cy="50" r="24" stroke={strokeColor} strokeWidth="1.5" />
          <circle cx="80" cy="50" r="20" stroke={brandYellow} strokeWidth="1" strokeDasharray="5 3" />
        </svg>
      );
    case "porca-flangeada":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          {/* Flanged Nut Side View */}
          <path d="M 40 30 L 120 30 L 125 68 L 145 74 L 145 80 L 15 80 L 15 74 L 35 68 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" strokeLinejoin="round" />
          {/* Flange serrations */}
          <line x1="25" y1="80" x2="20" y2="76" stroke={strokeColor} strokeWidth="1" />
          <line x1="45" y1="80" x2="40" y2="76" stroke={strokeColor} strokeWidth="1" />
          <line x1="65" y1="80" x2="60" y2="76" stroke={strokeColor} strokeWidth="1" />
          <line x1="85" y1="80" x2="80" y2="76" stroke={strokeColor} strokeWidth="1" />
          <line x1="105" y1="80" x2="100" y2="76" stroke={strokeColor} strokeWidth="1" />
          <line x1="125" y1="80" x2="120" y2="76" stroke={strokeColor} strokeWidth="1" />
          <line x1="140" y1="80" x2="135" y2="76" stroke={strokeColor} strokeWidth="1" />
          {/* Center line */}
          <line x1="80" y1="15" x2="80" y2="90" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="6 4" />
        </svg>
      );
    case "arruela-lisa":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          {/* Flat Washer concentric circles */}
          <circle cx="80" cy="50" r="38" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" />
          <circle cx="80" cy="50" r="18" stroke={strokeColor} strokeWidth="1.5" />
          {/* Dim line */}
          <line x1="42" y1="50" x2="118" y2="50" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
      );
    case "arruela-pressao":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          {/* Spring Lock Washer side/slanted loop */}
          <circle cx="80" cy="50" r="36" fill={fillYellow} stroke={strokeColor} strokeWidth="2.5" strokeDasharray="210 20" />
          <line x1="90" y1="20" x2="104" y2="28" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="square" />
          <line x1="88" y1="18" x2="82" y2="30" stroke={brandYellow} strokeWidth="1" />
        </svg>
      );
    case "chumbador-mecanico":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          <line x1="10" y1="50" x2="150" y2="50" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="6 4" />
          {/* Parabolt expansion anchor body */}
          <rect x="25" y="44" width="8" height="12" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" /> {/* Nut */}
          <rect x="33" y="40" width="4" height="20" stroke={strokeColor} strokeWidth="1" /> {/* Washer */}
          <path d="M 37 45 L 105 45 L 105 55 L 37 55 Z" stroke={strokeColor} strokeWidth="1.5" /> {/* Shank */}
          <path d="M 85 45 L 115 42 L 125 50 L 115 58 L 85 55 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1" /> {/* Expand sleeve */}
          <path d="M 125 43 L 138 50 L 125 57 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" /> {/* Cone */}
        </svg>
      );
    case "chumbador-quimico":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          {/* Chemical capsule + rod */}
          <path d="M 15 45 L 75 45 C 80 45, 80 55, 75 55 L 15 55 C 10 55, 10 45, 15 45 Z" fill="rgba(239, 201, 78, 0.15)" stroke={brandYellow} strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M 50 48 L 140 48 L 140 52 L 50 52 Z" stroke={strokeColor} strokeWidth="1.5" /> {/* Stud rod */}
          <line x1="80" y1="42" x2="80" y2="58" stroke={strokeColor} strokeWidth="1" />
          <line x1="90" y1="42" x2="90" y2="58" stroke={strokeColor} strokeWidth="1" />
          <line x1="100" y1="42" x2="100" y2="58" stroke={strokeColor} strokeWidth="1" />
          <line x1="110" y1="42" x2="110" y2="58" stroke={strokeColor} strokeWidth="1" />
          <line x1="120" y1="42" x2="120" y2="58" stroke={strokeColor} strokeWidth="1" />
        </svg>
      );
    case "barra-roscada":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          <line x1="10" y1="50" x2="150" y2="50" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="6 4" />
          {/* Threaded Rod */}
          <rect x="15" y="38" width="130" height="24" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" />
          {/* Diagonal thread lines */}
          <line x1="25" y1="38" x2="35" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="35" y1="38" x2="45" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="45" y1="38" x2="55" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="55" y1="38" x2="65" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="65" y1="38" x2="75" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="75" y1="38" x2="85" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="85" y1="38" x2="95" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="95" y1="38" x2="105" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="105" y1="38" x2="115" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="115" y1="38" x2="125" y2="62" stroke={strokeColor} strokeWidth="1" />
          <line x1="125" y1="38" x2="135" y2="62" stroke={strokeColor} strokeWidth="1" />
        </svg>
      );
    case "rebite":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          <line x1="10" y1="50" x2="150" y2="50" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="6 4" />
          {/* Pop rivet blueprint */}
          <path d="M 65 34 L 140 49 L 140 51 L 65 66 Z" stroke={strokeColor} strokeWidth="1" /> {/* Pull mandrel wire */}
          <path d="M 22 43 L 60 43 L 60 57 L 22 57 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" /> {/* Rivet body */}
          <path d="M 60 36 L 65 36 L 65 64 L 60 64 Z" fill={fillYellow} stroke={strokeColor} strokeWidth="1.5" /> {/* Flange */}
          <circle cx="20" cy="50" r="4.5" fill={strokeColor} /> {/* Mandrel head */}
        </svg>
      );
    case "acessorio":
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          {/* Cable Clip / Thimble or structural loop */}
          <path d="M 80 15 C 50 15, 30 35, 30 50 C 30 65, 50 85, 80 85 C 110 85, 130 65, 130 50 C 130 35, 110 15, 80 15 Z" stroke={strokeColor} strokeWidth="2" />
          <path d="M 80 25 C 60 25, 45 38, 45 50 C 45 62, 60 75, 80 75 C 100 75, 115 62, 115 50 C 115 38, 100 25, 80 25 Z" fill={fillYellow} stroke={brandYellow} strokeWidth="1" />
          <line x1="30" y1="50" x2="130" y2="50" stroke={brandYellow} strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 160 100" className="w-full h-32 mx-auto drop-shadow-sm fill-none">
          <circle cx="80" cy="50" r="30" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 65 50 L 95 50 M 80 35 L 80 65" stroke={brandYellow} strokeWidth="1.5" />
        </svg>
      );
  }
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
      if (catIndex >= 0 && catIndex <= 5) {
        setSelectedCategory(catIndex);
      }
    }
  }, [catParam]);

  const categories = [
    "Parafusos",
    "Porcas",
    "Arruelas",
    "Chumbadores",
    "Barras Roscadas e Rebites",
    "Acessórios e Fixadores Civis",
  ];

  const products: Product[] = [
    // Categoria 0: Parafusos
    {
      id: "p1",
      category: 0,
      title: "Parafuso Sextavado Estrutural ASTM A325",
      norm: "ASTM A325 / ASME B18.2.6",
      material: "Aço Carbono Temperado e Revenido",
      grade: "Classe A325 Tipo 1",
      application: "Ligações estruturais pesadas, flanges de pontes e sustentação metálica.",
      description: "Desenvolvido especificamente para conexões estruturais de alta resistência mecânica, fornecendo força de fixação garantida sob conformidade rígida de tração.",
      sizes: ["1/2\"", "5/8\"", "3/4\"", "7/8\"", "1\"", "1.1/4\""],
      svgType: "parafuso-sextavado",
    },
    {
      id: "p2",
      category: 0,
      title: "Parafuso Allen Cabeça Cilíndrica DIN 912",
      norm: "DIN 912 / ISO 4762",
      material: "Aço Liga de Alta Resistência",
      grade: "Classe 12.9",
      application: "Maquinários internos de precisão, matrizes industriais e motores de alta vibração.",
      description: "A cabeça cilíndrica com sextavado interno permite aperto de torque elevado em espaços limitados de montagem.",
      sizes: ["M3", "M4", "M5", "M6", "M8", "M10", "M12", "M16", "M20"],
      svgType: "parafuso-allen",
    },
    {
      id: "p3",
      category: 0,
      title: "Parafuso Allen Cabeça Abaulada ISO 7380",
      norm: "ISO 7380",
      material: "Aço Inoxidável AISI 304 A2 / 316 A4",
      grade: "Classe 70 / 80",
      application: "Fixação leve e montagem de chapas onde o design exige acabamento arredondado.",
      description: "Apresenta perfil baixo de cabeça arredondada para segurança contra acidentes de contato mecânico e acabamento clean.",
      sizes: ["M4", "M5", "M6", "M8", "M10", "M12"],
      svgType: "parafuso-allen",
    },
    {
      id: "p4",
      category: 0,
      title: "Parafuso Allen Cabeça Chata DIN 7991",
      norm: "DIN 7991 / ISO 10642",
      material: "Aço Carbono e Liga / Inox",
      grade: "Classe 10.9 / 8.8",
      application: "Superfícies faceadas ou niveladas onde a cabeça do parafuso deve ficar embutida na chapa.",
      description: "Cabeça escareada de precisão para acabamento nivelado impecável em chapas metálicas e guias deslizantes.",
      sizes: ["M4", "M5", "M6", "M8", "M10", "M12", "M16"],
      svgType: "parafuso-allen",
    },
    {
      id: "p5",
      category: 0,
      title: "Parafuso Francês DIN 603",
      norm: "DIN 603 / ASME B18.5",
      material: "Aço Carbono Grau 2 / Inox",
      grade: "Classe 4.6 / 8.8",
      application: "Fixação de madeira em metal, carrocerias, divisórias industriais e suportes.",
      description: "Cabeça de cogumelo sem fendas com pescoço quadrado inferior auto-travante contra giro no aperto.",
      sizes: ["1/4\"", "5/16\"", "3/8\"", "1/2\"", "M6", "M8", "M10", "M12"],
      svgType: "parafuso-frances",
    },
    {
      id: "p6",
      category: 0,
      title: "Parafuso Martelo (T-Head)",
      norm: "Norma Interna / DIN 186 / DIN 261",
      material: "Aço Carbono Zincado e Inox",
      grade: "Classe 8.8 / 10.9",
      application: "Fixação rápida e ajustável em perfis metálicos estruturais e guias de fixação rápida.",
      description: "Cabeça retangular estreita projetada para encaixar e girar 90 graus dentro de canais ou perfis metálicos.",
      sizes: ["M8 x 20", "M10 x 25", "M12 x 30", "M16 x 40"],
      svgType: "parafuso-martelo",
    },
    {
      id: "p7",
      category: 0,
      title: "Parafuso Autobrocante Técnico Cabeça Flangeada",
      norm: "DIN 7504 K / SAE J78",
      material: "Aço Carbono Cementado / Revestido",
      grade: "Tratamento Térmico Especial",
      application: "Fixação rápida de telhas metálicas, painéis solares e perfis metálicos sem pré-furo.",
      description: "Ponta broca de alta capacidade de perfuração instantânea. Modelo técnico focado em painéis solares.",
      sizes: ["#8 x 1/2\"", "#10 x 3/4\"", "#12 x 1\"", "#14 x 1.1/2\""],
      svgType: "parafuso-autobrocante",
    },
    // Categoria 1: Porcas
    {
      id: "p8",
      category: 1,
      title: "Porca Sextavada Standard DIN 934",
      norm: "DIN 934 / ISO 4032 / ASME B18.2.2",
      material: "Aço Carbono, Liga e Inox",
      grade: "Grau 2, 5, 8 / Classe 8, 10",
      application: "Fixação geral com parafusos sextavados e prisioneiros em flanges e estruturas.",
      description: "Porca sextavada de bitolas métricas e polegadas calibrada para torque elevado sob conformidade normativa.",
      sizes: ["M4", "M6", "M8", "M10", "M12", "M16", "M20", "M24", "1/2\"", "5/8\"", "3/4\""],
      svgType: "porca-sextavada",
    },
    {
      id: "p9",
      category: 1,
      title: "Porca Flangeada Serrilhada DIN 6923",
      norm: "DIN 6923 / EN 1661",
      material: "Aço Carbono Zincado e Inox",
      grade: "Classe 8 / 10",
      application: "Sistemas sujeitos a micro-vibrações, fixação de suportes e painéis metálicos.",
      description: "Possui uma arruela cônica flangeada incorporada na base com serrilhas de travamento que evitam o afrouxamento.",
      sizes: ["M5", "M6", "M8", "M10", "M12", "M16"],
      svgType: "porca-flangeada",
    },
    {
      id: "p10",
      category: 1,
      title: "Porca Sextavada Auto-Travante DIN 985",
      norm: "DIN 985 / ISO 7040",
      material: "Aço Carbono / Inox com Inserto de Nylon",
      grade: "Classe 8 / 10 / Inox A2",
      application: "Sistemas automotivos, chassis, guias mecânicas e motores sujeitos a vibrações rotacionais severas.",
      description: "O anel interno de nylon deforma no aperto, travando mecanicamente a rosca do parafuso contra afrouxamento por vibração.",
      sizes: ["M4", "M5", "M6", "M8", "M10", "M12", "M16", "M20", "M24"],
      svgType: "porca-sextavada",
    },
    // Categoria 2: Arruelas
    {
      id: "p11",
      category: 2,
      title: "Arruela Lisa Industrial DIN 125",
      norm: "DIN 125 / ISO 7089 / ASTM F436",
      material: "Aço Carbono, Inox e Latão",
      grade: "Grau Estrutural / Dureza 140 e 300 HV",
      application: "Distribuição de carga em conexões estruturais de chapas e maquinários gerais.",
      description: "Garante superfície lisa de assentamento, protegendo a chapa e distribuindo a pressão do aperto do parafuso.",
      sizes: ["M4", "M6", "M8", "M10", "M12", "M16", "M20", "M24", "1/4\"", "1/2\"", "3/4\""],
      svgType: "arruela-lisa",
    },
    {
      id: "p12",
      category: 2,
      title: "Arruela de Pressão Helicoidal DIN 127",
      norm: "DIN 127 B / ASME B18.21.1",
      material: "Aço Mola Temperado / Inox A2 e A4",
      grade: "Mola Temperada",
      application: "Fixações de motores, caixas de engrenagem e juntas mecânicas com vibração frequente.",
      description: "Perfil helicoidal que fornece força de mola constante, mantendo a tensão do fixador e prevenindo folgas.",
      sizes: ["M5", "M6", "M8", "M10", "M12", "M16", "M20", "1/4\"", "3/8\"", "1/2\"", "5/8\""],
      svgType: "arruela-pressao",
    },
    // Categoria 3: Chumbadores
    {
      id: "p13",
      category: 3,
      title: "Chumbador Mecânico de Expansão Parabolt",
      norm: "ASME B18.2.1 / Especificação Técnica",
      material: "Aço Carbono Zincado e Inox",
      grade: "Grau Industrial",
      application: "Instalação de colunas metálicas, máquinas pesadas, pontes rolantes e portões.",
      description: "Chumbador de expansão controlada por torque, fornecendo fixação definitiva em concreto estrutural de alta resistência.",
      sizes: ["1/4\" x 2\"", "3/8\" x 3\"", "1/2\" x 4\"", "5/8\" x 5\"", "3/4\" x 6\""],
      svgType: "chumbador-mecanico",
    },
    {
      id: "p14",
      category: 3,
      title: "Chumbador de Expansão Controlada por Deformação",
      norm: "Normas Técnicas / DIN 325",
      material: "Aço Carbono com Banho de Zinco",
      grade: "Alta Resistência à Tração",
      application: "Montagem de suportes suspensos, passagens de tubulações e estruturas de apoio civil.",
      description: "Oferece expansão interna uniforme por deformação da bucha metálica no furo, garantindo fixação em concreto maciço.",
      sizes: ["M6", "M8", "M10", "M12", "M16"],
      svgType: "chumbador-mecanico",
    },
    {
      id: "p15",
      category: 3,
      title: "Ancoragem Química em Ampola / Resinas",
      norm: "Homologação Técnica Europeia (ETA)",
      material: "Resina Vinilester / Epóxi de Alta Performance",
      grade: "Fixação Química de Segurança",
      application: "Conexão de arranques de vigas, colunas pesadas e fixação em estruturas sujeitas a cargas dinâmicas.",
      description: "Garante adesão sem tensões de expansão no concreto, permitindo distâncias mínimas de borda e alta carga estática.",
      sizes: ["M8", "M10", "M12", "M16", "M20", "M24"],
      svgType: "chumbador-quimico",
    },
    // Categoria 4: Barras Roscadas e Rebites
    {
      id: "p16",
      category: 4,
      title: "Barra Roscada Contínua DIN 975",
      norm: "DIN 975 / DIN 976",
      material: "Aço Carbono, Inox e Latão",
      grade: "Grau 5.6 / 8.8 / Classe 70",
      application: "Suspensão de dutos, acoplamento de flanges distantes e tirantes de ancoragem civil.",
      description: "Barras roscadas contínuas de 1 ou 2 metros, cortadas ou adaptadas sob especificação de comprimento da obra.",
      sizes: ["1/4\"", "3/8\"", "1/2\"", "5/8\"", "M6", "M8", "M10", "M12", "M16", "M20"],
      svgType: "barra-roscada",
    },
    {
      id: "p17",
      category: 4,
      title: "Rebite de Repuxo Técnico (Fixação Cega)",
      norm: "DIN 7337 / ISO 15977",
      material: "Corpo Alumínio / Mandril Aço Carbono ou Inox",
      grade: "Industrial",
      application: "União cega de chapas finas, gabinetes elétricos, dutos e painéis de revestimento.",
      description: "Garante fixação mecânica durável e estanque em chapas operando a montagem por apenas um lado do furo.",
      sizes: ["3.2 x 8mm", "4.0 x 10mm", "4.8 x 12mm", "4.8 x 16mm", "6.4 x 20mm"],
      svgType: "rebite",
    },
    // Categoria 5: Acessórios e Fixadores Civis
    {
      id: "p18",
      category: 5,
      title: "Acessórios para Cabos de Aço",
      norm: "Normas DIN 1142 / DIN 741 / DIN 6899",
      material: "Aço Carbono Galvanizado e Inox",
      grade: "Grau Comercial e Industrial",
      application: "Sistemas de tensionamento, amarração de cargas e fixação de cabos de sustentação.",
      description: "Inclui clipes de aperto, esticadores de rosca fechada/aberta e sapatilhas de proteção contra desgaste.",
      sizes: ["1/8\"", "3/16\"", "1/4\"", "5/16\"", "3/8\"", "1/2\"", "5/8\""],
      svgType: "acessorio",
    },
    {
      id: "p19",
      category: 5,
      title: "Fixadores Estruturais para Construção Civil",
      norm: "Especificação ABNT / Normas de Engenharia",
      material: "Aço Carbono Galvanizado a Fogo / Inox",
      grade: "Classe de Alta Durabilidade",
      application: "Fixações pesadas de terças, terças de telhado, contraventamentos e reforços metálicos.",
      description: "Parafusos estruturais especiais e presilhas específicas para montagens rígidas na construção de galpões e edifícios.",
      sizes: ["3/8\"", "1/2\"", "5/8\"", "3/4\"", "7/8\"", "M12", "M16", "M20"],
      svgType: "acessorio",
    },
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
          <button
            onClick={() => handleRequestQuote("Fixadores Especiais Sob Desenho/Amostra")}
            className="self-start sm:self-center px-4 py-2.5 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 rounded-lg text-xs font-bold tracking-wider transition-colors shrink-0 uppercase"
          >
            Consultar Especial
          </button>
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
                    {/* Top Focused Visual Blueprint Box */}
                    <div className="bg-zinc-50/70 p-6 border-b border-zinc-100 flex items-center justify-center relative min-h-[180px] group-hover:bg-zinc-50 transition-colors">
                      <ProductBlueprintSVG type={product.svgType} />
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
                      <button
                        onClick={() => handleRequestQuote(product.title)}
                        className="w-full py-2.5 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 rounded-lg text-xs font-black tracking-wider transition-all duration-250 flex items-center justify-center gap-1.5 uppercase border border-accent-yellow/20 cursor-pointer"
                      >
                        <FileText className="h-4 w-4" />
                        Solicitar Cotação
                      </button>
                      
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
              
              {/* Blueprint Display in Modal */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 flex items-center justify-center">
                <div className="w-48">
                  <ProductBlueprintSVG type={selectedProduct.svgType} />
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
              <button
                onClick={() => {
                  handleRequestQuote(selectedProduct.title);
                  setSelectedProduct(null);
                }}
                className="px-6 py-3 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 rounded-lg font-black text-sm tracking-wider active:scale-95 transition-all duration-300 flex items-center gap-2 border border-accent-yellow/20"
              >
                <FileText className="h-4 w-4" />
                SOLICITAR COTAÇÃO
              </button>
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
