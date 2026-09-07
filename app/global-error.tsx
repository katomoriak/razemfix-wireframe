"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-6 font-sans">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Algo deu errado</h2>
          <p className="text-gray-400 mb-6 text-sm">
            {error.message || "Ocorreu um erro inesperado no carregamento da aplicação."}
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
