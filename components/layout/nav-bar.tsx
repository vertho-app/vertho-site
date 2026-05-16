"use client";
/* ───────────────────────────────────────────────────────────────────────────
 * <NavBar> — barra fixa no topo. Transparente sobre o hero; ao rolar > 40px
 * ganha fundo navy translúcido + blur + borda inferior (igual aos mockups).
 * Renderizada uma vez no app/layout.tsx. Radar é link externo.
 * ─────────────────────────────────────────────────────────────────────────── */
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/link";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "/produto", label: "Produto" },
  { href: "/nr-1", label: "NR-1" },
  { href: "/quem-somos", label: "Quem somos" },
];

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
        <div className="flex items-center gap-7">
          {LINKS.map((l) => (
            <TextLink
              key={l.href}
              href={l.href}
              variant="nav"
              className="hidden sm:inline"
            >
              {l.label}
            </TextLink>
          ))}
          <TextLink
            href="https://radar.vertho.ai"
            variant="nav"
            external
            className="hidden sm:inline"
          >
            Radar
          </TextLink>
          <Button href="/contato" variant="nav">
            Falar com a gente
          </Button>
        </div>
      </Container>
    </nav>
  );
}
