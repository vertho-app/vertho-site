/* ───────────────────────────────────────────────────────────────────────────
 * Home (/) — Fase 1. Ordem e ritmo fiéis a "Vertho Home v2.html":
 * Hero → Ciclo → Diferenciais → Públicos → NR-1 → Time → CTA.
 * NavBar e Footer são chrome global (app/layout.tsx).
 * SEO: title/description/canonical/OpenGraph aqui; og:image via
 * app/opengraph-image.tsx. Analytics fica para a Fase 4.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { Metadata } from "next";
import { SectionDivider } from "@/components/ui/section-divider";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { HeroSection } from "@/components/sections/hero";
import { CycleSection } from "@/components/sections/cycle";
import { DifferentialsSection } from "@/components/sections/differentials";
import { AudienceSection } from "@/components/sections/audience";
import { NR1Section } from "@/components/sections/nr1";
import { TeamSection } from "@/components/sections/team";
import { CtaFinal } from "@/components/sections/cta-final";

const DESCRIPTION =
  "Plataforma de IA para atrair, desenvolver e reter pessoas em escolas e empresas. Do diagnóstico ao plano de ação, em uma só ferramenta.";

export const metadata: Metadata = {
  title: { absolute: "Vertho.ai — Inteligência de Pessoas com IA" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vertho.ai — Inteligência de Pessoas com IA",
    description: DESCRIPTION,
    url: "https://vertho.ai",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertho.ai — Inteligência de Pessoas com IA",
    description: DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <RevealOnScroll>
        <CycleSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <AudienceSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <DifferentialsSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <NR1Section />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <TeamSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <CtaFinal />
      </RevealOnScroll>
    </>
  );
}
