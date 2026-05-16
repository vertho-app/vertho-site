"use client";
/* ───────────────────────────────────────────────────────────────────────────
 * <NavBar> — barra fixa no topo. Transparente sobre o hero; ao rolar > 40px
 * ganha fundo navy translúcido + blur + borda inferior.
 *
 * Decisão do cliente (confirmação Fase 1): nav minimalista = só logo +
 * CTA único "Falar com a gente", que abre o WhatsApp (não /contato).
 * Os links Produto/NR-1/Quem somos/Radar do handoff foram removidos.
 * ─────────────────────────────────────────────────────────────────────────── */
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const WHATSAPP =
  "https://wa.me/5511975404356?text=" +
  encodeURIComponent("Olá! Vim pelo site da Vertho e quero saber mais.");

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b transition-all duration-300",
        scrolled
          ? "border-card-border bg-[rgba(6,23,44,0.88)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="/"
          className="font-sans text-[18px] font-bold tracking-[-0.02em] text-white no-underline"
        >
          vertho<span className="text-cyan">.ai</span>
        </a>
        <Button href={WHATSAPP} variant="nav" external>
          Falar com a gente
        </Button>
      </Container>
    </nav>
  );
}
