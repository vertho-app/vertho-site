/* sitemap.xml dinâmico — todas as rotas públicas. /design fica de fora
 * (QA interno, bloqueado no robots). Páginas legais entram (úteis), mesmo
 * com noindex por metadata. */
import type { MetadataRoute } from "next";

const BASE = "https://vertho.ai";

const ROUTES = [
  "",
  "/produto",
  "/produto/onboarding",
  "/produto/pulso",
  "/manifesto",
  "/quem-somos",
  "/radar",
  "/contato",
  "/legal/privacidade",
  "/legal/termos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/legal") ? 0.3 : 0.7,
  }));
}
