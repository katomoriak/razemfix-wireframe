"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Hammer, FileText, PhoneCall } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-2 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300">
                <Hammer className="h-6 w-6 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <span className="font-extrabold text-2xl tracking-wider text-white">
                RAZEM<span className="text-orange-500">FIX</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-semibold tracking-wider transition-colors duration-200 relative py-2 ${
                    isActive
                      ? "text-orange-500"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contato"
              className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-sm tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 group border border-orange-400/20"
            >
              <FileText className="h-4 w-4" />
              SOLICITAR ORÇAMENTO
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
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
        className={`md:hidden fixed inset-x-0 top-[73px] bg-slate-950/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500/10 text-orange-500 border-l-4 border-orange-500"
                    : "text-slate-300 hover:text-white hover:bg-slate-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 px-4 flex flex-col gap-3">
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-center text-sm tracking-wider transition-all duration-300"
            >
              <FileText className="h-4 w-4" />
              SOLICITAR ORÇAMENTO
            </Link>
            <a
              href="https://wa.me/551143182878"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-center text-sm tracking-wider transition-all duration-300"
            >
              <PhoneCall className="h-4 w-4" />
              WHATSAPP COMERCIAL
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
