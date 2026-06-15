import React from "react";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export default function Privacidade() {
  return (
    <div className="flex-grow grid-bg py-16 relative bg-zinc-50 text-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-accent-yellow-hover hover:text-accent-yellow transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> VOLTAR PARA A HOME
        </Link>

        {/* Card Panel */}
        <div className="border border-zinc-200 rounded-2xl bg-white p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-accent-yellow/10 p-3 rounded-lg text-accent-yellow border border-accent-yellow/15">
              <Shield className="h-6 w-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">Política de Privacidade</h1>
          </div>

          <div className="w-16 h-1.5 bg-accent-yellow rounded-full" />

          <div className="space-y-4 text-xs sm:text-sm text-zinc-650 font-light leading-relaxed">
            <p className="font-bold text-zinc-950">Última atualização: Junho de 2026</p>
            
            <p>
              A Razemfix compromete-se com a proteção e privacidade dos dados de nossos clientes, parceiros e fornecedores. Esta política descreve como tratamos informações de acordo com a Lei Geral de Proteção de Dados (LGPD).
            </p>

            <h3 className="font-bold text-zinc-950 uppercase text-xs tracking-wider pt-4">1. Coleta de Informações Corporativas</h3>
            <p>
              Coletamos informações estritamente necessárias para a elaboração de propostas comerciais de fixadores industriais, tais como CNPJ, Razão Social, E-mail de compras e Telefone Comercial do responsável pelo orçamento.
            </p>

            <h3 className="font-bold text-zinc-950 uppercase text-xs tracking-wider pt-4">2. Finalidade do Tratamento</h3>
            <p>
              Os dados coletados pelo formulário de cotação são processados unicamente para a elaboração da proposta de fornecimento de parafusos, porcas e arruelas, cotação logística e faturamento corporativo programado.
            </p>

            <h3 className="font-bold text-zinc-950 uppercase text-xs tracking-wider pt-4">3. Segurança Documental</h3>
            <p>
              A Razemfix armazena e protege documentos e especificações técnicas sob rígidos padrões de segurança digital, garantindo que listagens de materiais e desenhos CAD de peças customizadas sob medida não sejam expostos a terceiros.
            </p>

            <h3 className="font-bold text-zinc-950 uppercase text-xs tracking-wider pt-4">4. Contato</h3>
            <p>
              Para dúvidas adicionais sobre o tratamento de seus dados corporativos, entre em contato através de nossa Central Comercial no telefone (11) 4318-2878 ou e-mail contato@razemfix.com.br.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
