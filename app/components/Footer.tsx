import React from "react";
import Link from "next/link";
import { Hammer, Phone, Mail, Clock, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Sobre a Razemfix */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-1.5 rounded-lg text-white">
                <Hammer className="h-5 w-5 rotate-45" />
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                RAZEM<span className="text-orange-500">FIX</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Referência na fabricação e distribuição de uma linha completa de elementos de fixação desenvolvidos para alta performance e máxima segurança industrial. Abastecemos indústrias, montadoras e engenharia civil estrutural.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                Normas ANSI • DIN • ISO • ABNT
              </span>
            </div>
          </div>

          {/* Col 2: Sitemap */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase border-l-2 border-orange-500 pl-3">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "HOME", path: "/" },
                { name: "PRODUTOS", path: "/produtos" },
                { name: "SOBRE NÓS", path: "/sobre-nos" },
                { name: "CONTATO", path: "/contato" },
                { name: "POLÍTICA DE PRIVACIDADE", path: "/privacidade" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-sm text-slate-400 hover:text-orange-400 transition-colors duration-150 flex items-center gap-1 group"
                  >
                    <span className="h-1 w-1 bg-slate-600 group-hover:bg-orange-500 rounded-full transition-all duration-150" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Soluções Técnicas (SEO) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase border-l-2 border-orange-500 pl-3">
              Soluções Técnicas
            </h3>
            <ul className="space-y-2">
              {[
                "Parafusos Sextavados Industriais",
                "Fixadores em Aço Inox 304 / 316",
                "Parafusos Técnicos em Latão",
                "Porcas Estruturais e Auto-Travantes",
                "Arruelas de Alta Resistência Mecânica",
                "Engenharia de Projetos Customizados",
              ].map((solution) => (
                <li key={solution}>
                  <Link
                    href="/produtos"
                    className="text-xs text-slate-400 hover:text-white transition-colors duration-150 block"
                  >
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Canais & Localização */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase border-l-2 border-orange-500 pl-3">
              Contato & Matriz
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-500">Central Comercial</span>
                  <a href="tel:+551143182878" className="hover:text-white transition-colors">
                    (11) 4318-2878
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-500">E-mail Corporativo</span>
                  <a href="mailto:contato@razemfix.com.br" className="hover:text-white transition-colors">
                    contato@razemfix.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-500">Horário de Atendimento</span>
                  <span>Seg a Sex: 08:00 às 17:48</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-500">Matriz Industrial</span>
                  <span className="block">
                    Rua Cavalheiro Ernesto Giuliano, 236
                  </span>
                  <span className="block text-xs">
                    CEP 09570-400 • São Caetano do Sul - SP
                  </span>
                </div>
              </li>
            </ul>

            {/* Micro Blueprint Map Integration */}
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Rua+Cavalheiro+Ernesto+Giuliano,+236,+S%C3%A3o+Caetano+do+Sul"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden border border-white/10 relative h-24 hover:border-orange-500/40 transition-all duration-300 shadow-md"
              >
                {/* Simulated Blueprint Map Grid */}
                <div className="absolute inset-0 bg-[#070c14] flex flex-col items-center justify-center text-center p-2 font-mono text-[9px] text-orange-500/60 transition-colors duration-300 group-hover:bg-[#091120]">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:8px_8px]" />
                  <MapPin className="h-5 w-5 text-orange-500 mb-1 group-hover:scale-110 transition-transform duration-300 animate-bounce" />
                  <span className="text-[10px] font-bold text-slate-300 group-hover:text-orange-400">Ver no Google Maps</span>
                  <span className="text-[9px] text-slate-500">São Caetano do Sul - SP</span>
                  <ExternalLink className="absolute top-2 right-2 h-3 w-3 text-slate-600 group-hover:text-orange-500 transition-colors" />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {currentYear} Razemfix Fixadores Industriais. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacidade" className="hover:text-slate-400 transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-slate-400 transition-colors">Políticas de Privacidade</Link>
            <Link href="/produtos" className="hover:text-slate-400 transition-colors font-semibold text-orange-500/70 hover:text-orange-500">Catálogo Técnico</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
