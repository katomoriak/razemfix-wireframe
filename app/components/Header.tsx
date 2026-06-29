"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, PhoneCall } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const getPageFriendlyName = (path: string) => {
    if (path === "/") return "Home";
    if (path.startsWith("/produtos")) return "Produtos";
    if (path.startsWith("/sobre-nos")) return "Sobre Nós";
    if (path.startsWith("/contato")) return "Contato";
    if (path.startsWith("/privacidade")) return "Política de Privacidade";
    return "Razemfix";
  };

  const getWhatsAppUrl = () => {
    const pageName = getPageFriendlyName(pathname);
    const baseText = `Olá, estava vendo a página ${pageName} do site e decidi entrar em contato com vocês! Gostaria de mais informações, podem me ajudar?`;
    return `https://wa.me/5511930736051?text=${encodeURIComponent(baseText)}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PRODUTOS", path: "/produtos" },
    { name: "SOBRE NÓS", path: "/sobre-nos" },
    { name: "CONTATO", path: "/contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3 shadow-md shadow-zinc-100"
          : "bg-white/85 backdrop-blur-sm py-5 border-b border-zinc-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/razemfix_logotipocompleto.svg"
                alt="Razemfix"
                width={180}
                height={50}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.name === "PRODUTOS") {
                const isActive = pathname.startsWith("/produtos");
                return (
                  <div key={item.name} className="relative group py-2">
                    <Link
                      href={item.path}
                      className={`text-sm font-bold tracking-wider transition-colors duration-200 flex items-center gap-1 ${
                        isActive
                          ? "text-zinc-950"
                          : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      {item.name}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 text-zinc-500 transition-transform duration-200 group-hover:rotate-180"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-yellow rounded-full" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white border border-zinc-200 rounded-xl shadow-xl overflow-hidden py-2 relative">
                        {/* Background Decorative Tech Hexagon */}
                        <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 text-accent-yellow opacity-[0.07] pointer-events-none select-none z-0">
                          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                            <path 
                              d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" 
                              stroke="currentColor" 
                              strokeWidth="1.5" 
                            />
                          </svg>
                        </div>

                        <div className="max-h-[350px] overflow-y-auto relative z-10 pt-1">

                          {categories.map((cat, index) => (
                            <Link
                              key={cat}
                              href={`/produtos?cat=${index}`}
                              className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 transition-colors group/item"
                            >
                              <svg
                                viewBox="0 0 100 100"
                                className="h-2 w-2 text-zinc-350 group-hover/item:text-accent-yellow transition-colors duration-250 shrink-0"
                                fill="currentColor"
                              >
                                <path d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" />
                              </svg>
                              <span>{cat}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-bold tracking-wider transition-colors duration-200 relative py-2 ${
                    isActive
                      ? "text-zinc-950"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-yellow rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group z-0 flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-yellow text-zinc-950 rounded-lg font-bold text-xs tracking-wider active:scale-95 transition-all duration-300 border border-accent-yellow/20 whitespace-nowrap animate-pulse-subtle hover:animate-none"
            >
              {/* Expanding circle background */}
              <span className="absolute inset-0 bg-emerald-600 rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 ease-out -z-10 origin-center" />
              
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-zinc-950 shrink-0 group-hover:text-white transition-colors duration-300">
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

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-500 hover:text-zinc-850 hover:bg-zinc-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bg-white/95 backdrop-blur-lg border-b border-zinc-200 transition-all duration-300 transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl bg-white">
          {navItems.map((item) => {
            if (item.name === "PRODUTOS") {
              const isActive = pathname.startsWith("/produtos");
              return (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-bold tracking-wider transition-all duration-200">
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex-grow ${
                        isActive
                          ? "text-zinc-950 font-extrabold"
                          : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="p-2 text-zinc-500 hover:text-zinc-900"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileProductsOpen ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </div>
                  
                  {mobileProductsOpen && (
                    <div className="pl-6 space-y-1 border-l border-zinc-250 ml-4 mb-2">

                      {categories.map((cat, index) => (
                        <Link
                          key={cat}
                          href={`/produtos?cat=${index}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 py-2 text-sm text-zinc-500 hover:text-zinc-900 group/item"
                        >
                          <svg
                            viewBox="0 0 100 100"
                            className="h-1.5 w-1.5 text-zinc-300 group-hover/item:text-accent-yellow transition-colors duration-250 shrink-0"
                            fill="currentColor"
                          >
                            <path d="M 46.54,4 Q 50,2 53.46,4 L 88.14,24 Q 91.6,26 91.6,30 L 91.6,70 Q 91.6,74 88.14,76 L 53.46,96 Q 50,98 46.54,96 L 11.86,76 Q 8.4,74 8.4,70 L 8.4,30 Q 8.4,26 11.86,24 Z" />
                          </svg>
                          <span>{cat}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-bold tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-accent-yellow/10 text-zinc-950 border-l-4 border-accent-yellow"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 px-4 flex flex-col gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="relative overflow-hidden group z-0 flex items-center justify-center gap-2 w-full px-5 py-3 bg-accent-yellow text-zinc-950 rounded-lg font-bold text-center text-sm tracking-wider transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-zinc-950 shrink-0">
                <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.414 1.258 4.86L2 22l5.312-1.394c1.408.767 3.013 1.206 4.698 1.206 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.78 13.06c-.2.56-1.16 1.08-1.6 1.12-.4.04-.92.22-2.74-.5-2.32-.92-3.8-3.28-3.92-3.44-.12-.16-1.04-1.38-1.04-2.63 0-1.25.64-1.86.88-2.12.2-.22.44-.28.58-.28.14 0 .28 0 .4.02.12.02.28-.04.44.34.16.38.56 1.36.6 1.48.04.1.06.22 0 .34-.06.12-.1.2-.2.32-.1.1-.2.24-.3.34-.1.12-.22.24-.1.44.12.2.54.88 1.14 1.42.78.7 1.44.92 1.64 1.02.2.1.32.08.44-.06.12-.14.52-.6.66-.8.14-.2.28-.16.48-.08.2.08 1.26.6 1.48.7.22.1.36.16.42.26.06.1.06.56-.14 1.12z" />
              </svg>
              CONTATE-NOS PELO WHATSAPP
            </a>
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg font-bold text-center text-sm tracking-wider transition-all duration-300"
            >
              <FileText className="h-4 w-4" />
              SOLICITAR ORÇAMENTO
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
