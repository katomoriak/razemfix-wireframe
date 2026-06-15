import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 border-t border-zinc-300 relative overflow-hidden text-zinc-800">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 grid-bg !bg-transparent opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Sobre a Razemfix */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/razemfix.png"
                alt="Razemfix"
                width={150}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed font-normal">
              Referência na fabricação e distribuição de uma linha completa de elementos de fixação desenvolvidos para alta performance e máxima segurança industrial. Abastecemos indústrias, máquinas, equipamentos e engenharia estrutural.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-accent-yellow/15 text-zinc-900 border border-accent-yellow/40">
                Normas ANSI • DIN • ISO • ABNT
              </span>
            </div>
          </div>

          {/* Col 2: Sitemap */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-zinc-950 uppercase border-l-2 border-accent-yellow pl-3">
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
                    className="text-sm text-zinc-700 hover:text-zinc-950 transition-colors duration-150 flex items-center gap-1 group font-bold"
                  >
                    <span className="h-1.5 w-1.5 bg-zinc-400 group-hover:bg-accent-yellow rounded-full transition-all duration-150" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Soluções Técnicas */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-zinc-950 uppercase border-l-2 border-accent-yellow pl-3">
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
                    className="text-xs text-zinc-700 hover:text-zinc-950 transition-colors duration-150 block font-semibold"
                  >
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Canais & Localização */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest text-zinc-950 uppercase border-l-2 border-accent-yellow pl-3">
              Contato & Matriz
            </h3>
            <ul className="space-y-3 text-sm text-zinc-700">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-zinc-600 font-extrabold">Central Comercial</span>
                  <a href="tel:+551143182878" className="hover:text-zinc-950 font-extrabold text-zinc-900 transition-colors">
                    (11) 4318-2878
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-zinc-600 font-extrabold">E-mail Corporativo</span>
                  <a href="mailto:contato@razemfix.com.br" className="hover:text-zinc-950 font-extrabold text-zinc-900 transition-colors">
                    contato@razemfix.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-zinc-600 font-extrabold">Horário de Atendimento</span>
                  <span className="font-bold text-zinc-900">Seg a Sex: 08:00 às 17:48</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-zinc-600 font-extrabold">Matriz Industrial</span>
                  <span className="block font-bold text-zinc-900">
                    Rua Cavalheiro Ernesto Giuliano, 236
                  </span>
                  <span className="block text-xs text-zinc-750">
                    CEP 09570-400 • São Caetano do Sul - SP
                  </span>
                </div>
              </li>
            </ul>

            {/* Micro Map Integration */}
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Rua+Cavalheiro+Ernesto+Giuliano,+236,+S%C3%A3o+Caetano+do+Sul"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden border border-zinc-300 relative h-28 hover:border-zinc-500 transition-all duration-300 shadow-sm"
              >
                {/* Real Google Maps Embed */}
                <iframe
                  src="https://maps.google.com/maps?q=Rua%20Cavalheiro%20Ernesto%20Giuliano,%20236,%20S%C3%A3o%20Caetano%20do%20Sul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  title="Razemfix Localização"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded border border-zinc-200 flex items-center gap-1.5 shadow-sm transition-all duration-300 group-hover:bg-accent-yellow group-hover:border-accent-yellow">
                  <MapPin className="h-3.5 w-3.5 text-zinc-900" />
                  <span className="text-[10px] font-bold text-zinc-900">
                    Ver no Google Maps
                  </span>
                  <ExternalLink className="h-3 w-3 text-zinc-650" />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-300 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600 font-sans">
          <p>© {currentYear} Razemfix Fixadores Industriais. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacidade" className="hover:text-zinc-950 transition-colors font-bold">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-zinc-950 transition-colors font-bold">Políticas de Privacidade</Link>
            <Link href="/produtos" className="hover:text-zinc-950 transition-colors font-extrabold text-zinc-900">Catálogo Técnico</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
