import type { MetadataRoute } from "next";
import { CATALOG_PAGES } from "./data/catalog-pages-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.razemfix.com.br";
  const lastModified = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/produtos`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/parafusos`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/parafusos/parafusos-inox`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/elementos-fixacao`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/catalogo-online`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/especificacoes-fixadores-tabelas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre-nos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const catalogRoutes: MetadataRoute.Sitemap = CATALOG_PAGES.flatMap((item) => {
    // Both clean and .html legacy endpoints
    const routes: MetadataRoute.Sitemap = [
      {
        url: `${baseUrl}/${item.category}/${item.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${item.category}/${item.slug}.html`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.7,
      },
    ];

    if (item.aliases) {
      item.aliases.forEach((alias) => {
        routes.push({
          url: `${baseUrl}/${item.category}/${alias}`,
          lastModified,
          changeFrequency: "weekly",
          priority: 0.6,
        });
        routes.push({
          url: `${baseUrl}/${item.category}/${alias}.html`,
          lastModified,
          changeFrequency: "weekly",
          priority: 0.6,
        });
      });
    }

    return routes;
  });

  return [...coreRoutes, ...catalogRoutes];
}
