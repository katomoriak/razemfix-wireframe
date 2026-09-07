"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Download,
  Maximize2,
  Minimize2,
  ExternalLink,
  Printer,
  ShieldCheck,
  FileText,
  AlertCircle,
} from "lucide-react";

interface CatalogViewerProps {
  pdfUrl: string;
  pdfFileName: string;
}

export default function CatalogViewer({ pdfUrl, pdfFileName }: CatalogViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // Fallback or permission rejected
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const whatsappUrl = `https://wa.me/5511930736051?text=${encodeURIComponent(
    "Olá! Estava visualizando o Catálogo Online da Razemfix e gostaria de cotar alguns itens."
  )}`;

  return (
    <div
      ref={containerRef}
      className={`flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
        isFullscreen ? "fixed inset-0 z-[9999] rounded-none border-none h-screen" : "w-full"
      }`}
    >
      {/* Viewer Header / Toolbar */}
      <div className="bg-zinc-950 px-4 sm:px-6 py-3.5 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3 select-none">
        
        {/* Title & Badge */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent-yellow/15 border border-accent-yellow/30 text-accent-yellow">
            <FileText className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold text-sm tracking-tight block">
                Catálogo Razemfix 2026
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-accent-yellow/20 text-accent-yellow font-mono text-[10px] font-bold">
                PDF INTERATIVO
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 block font-mono">
              Parafusos • Porcas • Arruelas • Fixadores
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* WhatsApp Quote */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold tracking-wider uppercase transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.414 1.258 4.86L2 22l5.312-1.394c1.408.767 3.013 1.206 4.698 1.206 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.78 13.06c-.2.56-1.16 1.08-1.6 1.12-.4.04-.92.22-2.74-.5-2.32-.92-3.8-3.28-3.92-3.44-.12-.16-1.04-1.38-1.04-2.63 0-1.25.64-1.86.88-2.12.2-.22.44-.28.58-.28.14 0 .28 0 .4.02.12.02.28-.04.44.34.16.38.56 1.36.6 1.48.04.1.06.22 0 .34-.06.12-.1.2-.2.32-.1.1-.2.24-.3.34-.1.12-.22.24-.1.44.12.2.54.88 1.14 1.42.78.7 1.44.92 1.64 1.02.2.1.32.08.44-.06.12-.14.52-.6.66-.8.14-.2.28-.16.48-.08.2.08 1.26.6 1.48.7.22.1.36.16.42.26.06.1.06.56-.14 1.12z" />
            </svg>
            <span>Cotar Itens</span>
          </a>

          {/* Open in new tab */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-lg text-xs font-semibold transition-colors border border-zinc-700"
            title="Abrir PDF em nova aba"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Nova Aba</span>
          </a>

          {/* Download button */}
          <a
            href={pdfUrl}
            download={pdfFileName}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 font-bold rounded-lg text-xs tracking-wider uppercase transition-colors shadow-sm"
            title="Baixar arquivo PDF"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Baixar PDF</span>
          </a>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-lg transition-colors border border-zinc-700"
            title={isFullscreen ? "Sair da tela cheia" : "Modo tela cheia"}
            aria-label="Alternar tela cheia"
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* PDF Viewport */}
      <div
        className={`w-full bg-zinc-950 relative flex items-center justify-center ${
          isFullscreen ? "flex-grow h-[calc(100vh-60px)]" : "h-[650px] sm:h-[750px] lg:h-[880px]"
        }`}
      >
        <object
          data={`${pdfUrl}#view=FitH&toolbar=1&navpanes=1`}
          type="application/pdf"
          className="w-full h-full border-none"
        >
          {/* Fallback for browsers or devices where inline PDF plugin is disabled */}
          <div className="flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto space-y-5 text-white">
            <div className="w-20 h-28 relative rounded-lg overflow-hidden border border-zinc-700 shadow-lg">
              <Image
                src="/capa_catalogo.png"
                alt="Capa Catálogo Razemfix"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-base text-white">
                Visualização do Catálogo em PDF
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Se o seu navegador ou dispositivo móvel não renderizar o PDF diretamente acima, você pode abrir em uma nova aba ou baixar o arquivo completo gratuitamente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 border border-zinc-700"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Abrir em Nova Aba</span>
              </a>

              <a
                href={pdfUrl}
                download={pdfFileName}
                className="w-full px-4 py-2.5 bg-accent-yellow hover:bg-accent-yellow-hover text-zinc-950 rounded-lg text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Baixar PDF</span>
              </a>
            </div>
          </div>
        </object>
      </div>

      {/* Viewer Footer Bar */}
      <div className="bg-zinc-950/90 px-4 sm:px-6 py-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-accent-yellow" />
          <span>Certificação ISO 9001 • Rastreabilidade Integral</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>Normas DIN • ISO • ASTM • ABNT</span>
          <span>•</span>
          <span className="text-accent-yellow font-bold">Edição Oficial 2026</span>
        </div>
      </div>
    </div>
  );
}
