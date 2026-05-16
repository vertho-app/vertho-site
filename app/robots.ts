/* ───────────────────────────────────────────────────────────────────────────
 * robots.txt — aberto (SEO é objetivo do projeto), exceto a página interna
 * de QA /design. Sitemap dinâmico entra na Fase 4.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/design",
    },
    sitemap: "https://vertho.ai/sitemap.xml",
    host: "https://vertho.ai",
  };
}
