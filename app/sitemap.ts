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

  const seenUrls = new Set<string>();
  const finalRoutes: MetadataRoute.Sitemap = [];

  function addRoute(route: MetadataRoute.Sitemap[number]) {
    if (!seenUrls.has(route.url)) {
      seenUrls.add(route.url);
      finalRoutes.push(route);
    }
  }

  coreRoutes.forEach(addRoute);

  CATALOG_PAGES.forEach((item) => {
    const cleanSlug = item.slug.replace(/^\/+|\/+$/g, "").replace(/\.html$/, "");

    addRoute({
      url: `${baseUrl}/${item.category}/${cleanSlug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    addRoute({
      url: `${baseUrl}/${item.category}/${cleanSlug}.html`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });

    if (item.aliases) {
      item.aliases.forEach((rawAlias) => {
        const cleanAlias = rawAlias.replace(/^\/+|\/+$/g, "").replace(/\.html$/, "");

        addRoute({
          url: `${baseUrl}/${item.category}/${cleanAlias}`,
          lastModified,
          changeFrequency: "weekly",
          priority: 0.6,
        });

        addRoute({
          url: `${baseUrl}/${item.category}/${cleanAlias}.html`,
          lastModified,
          changeFrequency: "weekly",
          priority: 0.6,
        });
      });
    }
  });

  return finalRoutes;
}
