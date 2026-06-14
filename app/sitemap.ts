import type { MetadataRoute } from "next";
import { collections, products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const statics = ["", "/home-atelier", "/collections", "/customise", "/consultation", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" || path === "/home-atelier" ? 1 : 0.8,
    })
  );
  const collectionUrls = collections.map((c) => ({
    url: `${site.url}/collections/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  const productUrls = products.map((p) => ({
    url: `${site.url}/jewellery/${p.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
  return [...statics, ...collectionUrls, ...productUrls];
}
