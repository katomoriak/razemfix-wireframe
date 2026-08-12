import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

  // Otimização de pacotes para Tree Shaking automático e redução do bundle JS
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
