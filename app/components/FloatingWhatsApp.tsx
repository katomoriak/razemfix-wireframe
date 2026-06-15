"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const messages = [
    "Olá! Procura parafusos ou fixadores de alta qualidade?",
    "Precisa de uma cotação rápida? Fale comigo agora! 🔩",
  ];

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("whatsapp_cta_dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
      return;
    }

    // Step 1: Initial appearance after 6 seconds
    const initialTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setIsAnimatingIn(true), 50);
    }, 6000);

    // Step 2: Cycle messages every 15 seconds (after the initial 6s)
    let cycleInterval: NodeJS.Timeout;
    const startCycleTimer = setTimeout(() => {
      cycleInterval = setInterval(() => {
        // Fade out
        setIsAnimatingIn(false);
        // Swap message and fade back in after transition ends (500ms)
        setTimeout(() => {
          setCurrentMessage((prev) => (prev + 1) % messages.length);
          setIsAnimatingIn(true);
        }, 500);
      }, 15000);
    }, 6000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(startCycleTimer);
      if (cycleInterval) clearInterval(cycleInterval);
    };
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsAnimatingIn(false);
    setTimeout(() => {
      setShowTooltip(false);
      setIsDismissed(true);
      sessionStorage.setItem("whatsapp_cta_dismissed", "true");
    }, 500);
  };

  return (
    <>
      {/* SVG ClipPath Definition for Rounded Hexagon */}
      <svg width="0" height="0" className="absolute pointer-events-none select-none">
        <defs>
          <clipPath id="hex-clip-rounded" clipPathUnits="objectBoundingBox">
            <path d="M 0.4654,0.04 Q 0.50,0.02 0.5346,0.04 L 0.8814,0.24 Q 0.916,0.26 0.916,0.30 L 0.916,0.70 Q 0.916,0.74 0.8814,0.76 L 0.5346,0.96 Q 0.50,0.98 0.4654,0.96 L 0.1186,0.76 Q 0.084,0.74 0.084,0.70 L 0.084,0.30 Q 0.084,0.26 0.1186,0.24 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="fixed bottom-20 right-6 md:bottom-24 md:right-10 z-50 flex flex-col items-end gap-3 font-sans pointer-events-none">
        {/* Conversational Marketing Tooltip */}
        {showTooltip && !isDismissed && (
          <div 
            className={`pointer-events-auto relative bg-white border border-zinc-200 text-zinc-900 px-4 py-3.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-w-xs transition-all duration-500 ease-out flex items-start gap-2.5 ${
              isAnimatingIn 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-4 scale-95 pointer-events-none"
            }`}
          >
            {/* Decorative small triangle/pointer */}
            <div className="absolute right-6 -bottom-2 w-4 h-4 bg-white border-r border-b border-zinc-200 rotate-45" />
            
            <div className="flex-1 text-xs sm:text-sm font-semibold leading-relaxed">
              {messages[currentMessage]}
            </div>

            <button
              onClick={handleDismiss}
              className="text-zinc-400 hover:text-zinc-650 transition-colors p-0.5 rounded-full hover:bg-zinc-100 shrink-0"
              aria-label="Fechar"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Hexagonal Button with Drop Shadow Wrapper to prevent shadow clipping */}
        <div className="pointer-events-auto filter drop-shadow-md hover:drop-shadow-xl transition-all duration-300">
          <a
            href="https://wa.me/551143182878"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden w-14 h-14 bg-accent-yellow hover:bg-emerald-600 text-zinc-950 hover:text-white rounded-none active:scale-95 transition-all duration-300 flex items-center justify-center group animate-pulse-subtle hover:animate-none cursor-pointer"
            style={{
              clipPath: "url(#hex-clip-rounded)",
            }}
          >
            {/* Expanding circle background from WhatsApp hover effect */}
            <span className="absolute inset-0 bg-emerald-600 rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 ease-out -z-10 origin-center" />

            {/* WhatsApp Icon SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7 text-zinc-950 group-hover:text-white transition-colors duration-300 z-10"
            >
              <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.414 1.258 4.86L2 22l5.312-1.394c1.408.767 3.013 1.206 4.698 1.206 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.78 13.06c-.2.56-1.16 1.08-1.6 1.12-.4.04-.92.22-2.74-.5-2.32-.92-3.8-3.28-3.92-3.44-.12-.16-1.04-1.38-1.04-2.63 0-1.25.64-1.86.88-2.12.2-.22.44-.28.58-.28.14 0 .28 0 .4.02.12.02.28-.04.44.34.16.38.56 1.36.6 1.48.04.1.06.22 0 .34-.06.12-.1.2-.2.32-.1.1-.2.24-.3.34-.1.12-.22.24-.1.44.12.2.54.88 1.14 1.42.78.7 1.44.92 1.64 1.02.2.1.32.08.44-.06.12-.14.52-.6.66-.8.14-.2.28-.16.48-.08.2.08 1.26.6 1.48.7.22.1.36.16.42.26.06.1.06.56-.14 1.12z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
