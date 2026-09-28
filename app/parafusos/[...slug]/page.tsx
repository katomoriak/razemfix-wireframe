import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATALOG_PAGES, getCatalogItemBySlug } from "../../data/catalog-pages-data";
import ProductLandingTemplate from "../../components/ProductLandingTemplate";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const parafusoItems = CATALOG_PAGES.filter((p) => p.category === "parafusos");
  const paramsList: { slug: string[] }[] = [];

  parafusoItems.forEach((item) => {
    const segments = item.slug.split("/");
    // clean url
    paramsList.push({ slug: segments });
    // .html url
    const lastSegWithHtml = `${segments[segments.length - 1]}.html`;
    paramsList.push({
      slug: [...segments.slice(0, -1), lastSegWithHtml],
    });

    if (item.aliases) {
      item.aliases.forEach((alias) => {
        const aliasSegs = alias.split("/");
        paramsList.push({ slug: aliasSegs });
        const aliasLastWithHtml = `${aliasSegs[aliasSegs.length - 1]}.html`;
        paramsList.push({
          slug: [...aliasSegs.slice(0, -1), aliasLastWithHtml],
        });
      });
    }
  });

  return paramsList;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const item = getCatalogItemBySlug(path);

  if (!item) {
    return {
      title: "Parafusos Industriais | Razemfix",
      description: "Catálogo completo de parafusos industriais no Grande ABC e São Paulo.",
    };
  }

  const canonicalUrl = `https://www.razemfix.com.br/parafusos/${path}`;

  return {
    title: item.title,
    description: item.description,
    keywords: item.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url: canonicalUrl,
      images: [item.image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [item.image],
    },
  };
}

export default async function ParafusoDynamicPage({ params }: Props) {
  const { slug } = await params;
  const path = slug.join("/");
  const item = getCatalogItemBySlug(path);

  if (!item) {
    notFound();
  }

  return <ProductLandingTemplate item={item} currentPath={`/parafusos/${path}`} />;
}
