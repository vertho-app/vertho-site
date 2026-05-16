"use client";
/* ───────────────────────────────────────────────────────────────────────────
 * <NavBar> — fixa no topo. Transparente sobre o hero; ao rolar > 40px ganha
 * fundo navy translúcido + blur + borda inferior.
 *
 * Desktop: logo · menu (Produto · Manifesto · Quem somos) · CTA WhatsApp.
 * Mobile (< md): logo · hambúrguer → drawer da direita com os 4 itens.
 * Active state por rota (cyan + underline sutil). Decisão: sem "Contato"
 * (o CTA WhatsApp cobre) e sem submenu de Produto (/produto é o hub).
 * ─────────────────────────────────────────────────────────────────────────── */
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const WHATSAPP =
  "https://wa.me/5511975404356?text=" +
  encodeURIComponent("Olá! Vim pelo site da Vertho e quero saber mais.");

const LINKS = [
  { href: "/produto", label: "Produto" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/quem-somos", label: "Quem somos" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o drawer ao trocar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Esc fecha + trava o scroll do body com o drawer aberto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b transition-all duration-300",
        scrolled || open
          ? "border-card-border bg-[rgba(6,23,44,0.88)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="/"
          aria-label="Vertho — página inicial"
          className="inline-flex items-center no-underline"
        >
          <Image
            src="/logo-vertho.png"
            alt="Vertho"
            width={3148}
            height={744}
            priority
            className="h-7 w-auto"
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-[14px] font-medium no-underline transition-colors duration-150 ease-out",
                  active
                    ? "text-cyan after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-cyan"
                    : "text-ink-dim hover:text-cyan",
                )}
              >
                {l.label}
              </a>
            );
          })}
          <Button href={WHATSAPP} variant="nav" external>
            Falar com a gente
          </Button>
        </div>

        {/* Mobile: hambúrguer */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative h-10 w-10 md:hidden"
        >
          <span
            className={cn(
              "absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 bg-white transition-all duration-300 ease-out",
              open ? "rotate-45" : "-translate-y-[6px]",
            )}
          />
          <span
            className={cn(
              "absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 bg-white transition-all duration-200 ease-out",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 bg-white transition-all duration-300 ease-out",
              open ? "-rotate-45" : "translate-y-[6px]",
            )}
          />
        </button>
      </Container>

      {/* Mobile: overlay + drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[90] md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onTouchStart={(e) => {
            (e.currentTarget as HTMLElement).dataset.x = String(
              e.touches[0].clientX,
            );
          }}
          onTouchEnd={(e) => {
            const x0 = Number((e.currentTarget as HTMLElement).dataset.x || 0);
            if (e.changedTouches[0].clientX - x0 > 60) setOpen(false);
          }}
          className={cn(
            "absolute right-0 top-0 flex h-full w-[80%] max-w-[320px] flex-col gap-1 border-l border-card-border bg-navy-deep px-6 pb-8 pt-24 transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          {LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-3 text-[16px] font-medium no-underline transition-colors duration-150",
                  active
                    ? "bg-[rgba(52,197,204,0.10)] text-cyan"
                    : "text-ink-dim hover:text-cyan",
                )}
              >
                {l.label}
              </a>
            );
          })}
          <div className="mt-4">
            <Button href={WHATSAPP} variant="primary" external className="w-full">
              Falar com a gente
            </Button>
          </div>
        </aside>
      </div>
    </nav>
  );
}
