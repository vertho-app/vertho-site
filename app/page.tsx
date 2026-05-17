/* ───────────────────────────────────────────────────────────────────────────
 * Home (/) — Redesign 2026 · Inteligência de Pessoas.
 *
 * Tema CLARO (branco gelo / cinza azulado) com 2 blocos de acento em azul
 * profundo (Diferenciação e CTA final). Vende a SOLUÇÃO INTEGRADA — não
 * módulos isolados. Estrutura (11 blocos do brief; o "Header" é a NavBar
 * global em app/layout.tsx):
 *   Hero → Problema → Promessa → Jornada → Como funciona → Diferenciação →
 *   IA+Humano → Portas de entrada → Segurança → CTA final.
 *
 * SEO: title/description/canonical/OpenGraph aqui; og:image via
 * app/opengraph-image.tsx. NavBar/Footer são chrome global.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import {
  Hero,
  Problem,
  Promise,
  Journey,
  HowItWorks,
  Differentiation,
  AiHuman,
  Entries,
  Security,
  FinalCta,
} from "@/components/sections/home";

const DESCRIPTION =
  "Plataforma de Inteligência de Pessoas. A Vertho conecta perfil comportamental, função, cultura, desenvolvimento e decisão em uma única jornada — para empresas, escolas e redes.";

export const metadata: Metadata = {
  title: { absolute: "Vertho.ai — Inteligência de Pessoas" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vertho.ai — Inteligência de Pessoas",
    description: DESCRIPTION,
    url: "https://vertho.ai",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertho.ai — Inteligência de Pessoas",
    description: DESCRIPTION,
  },
};

export default function Home() {
  return (
    <div className="bg-paper">
      <Hero />
      <RevealOnScroll>
        <Problem />
      </RevealOnScroll>
      <RevealOnScroll>
        <Promise />
      </RevealOnScroll>
      <RevealOnScroll>
        <Journey />
      </RevealOnScroll>
      <RevealOnScroll>
        <HowItWorks />
      </RevealOnScroll>
      <RevealOnScroll>
        <Differentiation />
      </RevealOnScroll>
      <RevealOnScroll>
        <AiHuman />
      </RevealOnScroll>
      <RevealOnScroll>
        <Entries />
      </RevealOnScroll>
      <RevealOnScroll>
        <Security />
      </RevealOnScroll>
      <RevealOnScroll>
        <FinalCta />
      </RevealOnScroll>
    </div>
  );
}
