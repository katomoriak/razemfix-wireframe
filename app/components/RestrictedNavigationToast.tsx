"use client";

import React, { useState, useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";

export default function RestrictedNavigationToast() {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: "", description: "" });

  useEffect(() => {
    const triggerToast = () => {
      setToastMessage({
        title: "Página em Desenvolvimento",
        description: "Nesta versão de demonstração, apenas a página principal está ativa para homologação.",
      });
      setShow(true);
      // Small delay to trigger transition
      setTimeout(() => setIsVisible(true), 50);
    };

    const handleClick = (e: MouseEvent) => {
      // Find the closest anchor tag
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Normalize href (remove trailing slashes, query params, hashes for matching)
      const path = href.split("?")[0].split("#")[0];

      // Define routes we want to restrict
      const restrictedPaths = [
        "/sobre-nos",
        "/contato",
        "/privacidade",
      ];

      // Check if it's one of our restricted paths
      const isRestricted = restrictedPaths.some(
        (restricted) => path === restricted || path.startsWith(restricted + "/")
      );

      if (isRestricted) {
        e.preventDefault();
        e.stopPropagation();
        triggerToast();
      }
    };

    // Add event listener to capture all clicks on links
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  // Auto-hide toast after 4 seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Delay component unmount to let fade-out finish
        setTimeout(() => setShow(false), 300);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;

  return (
    <div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4 pointer-events-none transition-all duration-300 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-zinc-950/95 border-2 border-accent-yellow backdrop-blur-md text-white rounded-xl shadow-2xl p-4 flex items-start gap-3.5 pointer-events-auto relative overflow-hidden group">
        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-yellow" />
        
        <div className="flex-shrink-0 mt-0.5 text-accent-yellow bg-accent-yellow/10 p-2 rounded-lg">
          <AlertTriangle className="h-5 w-5" />
        </div>

        <div className="flex-grow pr-6">
          <h4 className="font-bold text-sm text-accent-yellow tracking-wide uppercase">
            {toastMessage.title}
          </h4>
          <p className="text-xs text-zinc-300 mt-1 font-medium leading-relaxed">
            {toastMessage.description}
          </p>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-zinc-400 hover:text-white hover:bg-white/10 p-1 rounded-md transition-all duration-200"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
