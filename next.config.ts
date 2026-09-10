import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Define a raiz do projeto explicitamente para o Turbopack (evita detecção incorreta de lockfile na pasta de usuário)
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Desativa o header x-powered-by para reduzir tamanho de cabeçalho e segurança
  poweredByHeader: false,

  // Modo estrito do React ativado para detectar efeitos e potenciais re-renders
  reactStrictMode: true,

  // Otimização de Imagens (Vercel Edge Image Optimization API)
  images: {
    // Dá prioridade ao AVIF (20-30% menor que WebP) com fallback para WebP
    formats: ["image/avif", "image/webp"],
    // Cache de imagens otimizadas no Edge da Vercel por 1 ano
    minimumCacheTTL: 31536000,
    // Tamanhos de tela responsivos otimizados para evitar downloads excessivos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Remoção de logs em produção para reduzir tamanho do bundle e tempo de execução JS
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  // Redirecionamento permanente canônico (308) do apex domain para www
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "razemfix.com.br" }],
        destination: "https://www.razemfix.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
