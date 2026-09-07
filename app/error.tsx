"use client";

import React, { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold mb-3 text-foreground">Algo deu errado</h2>
      <p className="text-muted-foreground mb-6 text-sm max-w-md">
        {error.message || "Não foi possível carregar a página solicitada."}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition-colors"
      >
        Tentar novamente
      </button>
    </div>
  );
}
