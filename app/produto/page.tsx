/* ───────────────────────────────────────────────────────────────────────────
 * /produto (Mentor IA) — Fase 2. Ordem fiel a "Vertho Produto.html":
 * Hero → Como funciona (zigzag) → Três papéis → Casos de uso → CTA.
 * og:image herdada de app/opengraph-image.tsx (mesma da Home por ora).
 * ─────────────────────────────────────────────────────────────────────────── */
import type { Metadata } from "next";
import { SectionDivider } from "@/components/ui/section-divider";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { ProdutoHero } from "@/components/sections/produto/hero";
import { ZigzagSection } from "@/components/sections/produto/zigzag";
import { RolesSection } from "@/components/sections/produto/roles";
import { UseCasesSection } from "@/components/sections/produto/use-cases";
import { ProdutoCTA } from "@/components/sections/produto/cta";

const DESCRIPTION =
  "O Mentor IA é a plataforma que conhece cada profissional para desenvolvê-lo com profundidade: diagnóstico, plano individual e trilha guiada de 14 semanas, personalizados por empresa.";

export const metadata: Metadata = {
  title: { absolute: "Mentor IA · Vertho.ai" },
  description: DESCRIPTION,
  alternates: { canonical: "/produto" },
  openGraph: {
    title: "Mentor IA · Vertho.ai",
    description: DESCRIPTION,
    url: "https://vertho.ai/produto",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentor IA · Vertho.ai",
    description: DESCRIPTION,
  },
};

export default function ProdutoPage() {
  return (
    <>
      <ProdutoHero />
      <SectionDivider />
      <RevealOnScroll>
        <ZigzagSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <RolesSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <UseCasesSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <ProdutoCTA />
      </RevealOnScroll>
    </>
  );
}
