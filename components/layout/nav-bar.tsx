"use client";
/* ───────────────────────────────────────────────────────────────────────────
 * <NavBar> — fixa no topo, ciente de tema.
 *
 * Home ("/") = tema CLARO: transparente sobre o hero claro; ao rolar ganha
 * fundo branco translúcido + blur + hairline. Marca = "V" ciano + wordmark
 * em azul profundo (o PNG completo tem o texto branco, invisível no claro).
 *
 * Demais páginas = tema NAVY escuro: comportamento anterior preservado
 * (logo completo branco, texto claro, fundo navy translúcido ao rolar).
 *
 * Menu (redesign 2026): Solução · Empresas · Educação · IA e Segurança ·
 * Quem somos · CTA "Agendar demonstração" → WhatsApp.
 *
 * O drawer mobile é renderizado FORA do <nav> (o nav usa backdrop-filter,
 * que cria bloco de contenção e prenderia um fixed à barra de 64px).
 * ─────────────────────────────────────────────────────────────────────────── */
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

const WHATSAPP =
  "https://wa.me/5511911807809?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da Vertho e quero agendar uma demonstração.",
  );

/* hrefs são âncoras da home; fora da home recebem o prefixo "/" */
const LINKS = [
  { hash: "#jornada", label: "Solução" },
  { hash: "#empresas", label: "Empresas" },
  { hash: "#educacao", label: "Educação" },
  { hash: "#ia-humano", label: "IA e Segurança" },
  { href: "/quem-somos", label: "Quem somos" },
] as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const light = pathname === "/";

  const links = LINKS.map((l) =>
    "href" in l
      ? { href: l.href, label: l.label }
      : { href: light ? l.hash : `/${l.hash}`, label: l.label },
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

  /* ── classes por tema ────────────────────────────────────────────────── */
  const shell = light
    ? scrolled
      ? "border-line bg-[rgba(247,250,252,0.82)] backdrop-blur-md shadow-[var(--shadow-soft)]"
      : "border-transparent bg-transparent"
    : scrolled
      ? "border-card-border bg-[rgba(6,23,44,0.88)] backdrop-blur-md"
      : "border-transparent bg-transparent";

  const linkCls = light
    ? "text-ink-body hover:text-brand"
    : "text-ink-dim hover:text-cyan";

  const burger = light ? "bg-brand" : "bg-white";

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-[100] border-b transition-all duration-300",
          shell,
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          <a
            href="/"
            aria-label="Vertho.ai — página inicial"
            className="inline-flex items-center gap-2 no-underline"
          >
            {light ? (
              <>
                <Image
                  src="/logo-vertho-sem-texto.png"
                  alt=""
                  width={1140}
                  height={1196}
                  priority
                  className="h-7 w-auto"
                />
                <span className="font-display text-[20px] font-extrabold tracking-[-0.02em] text-ink-strong">
                  vertho<span className="text-cyan">.ai</span>
                </span>
              </>
            ) : (
              <Image
                src="/logo-vertho.png"
                alt="Vertho"
                width={3148}
                height={744}
                priority
                className="h-7 w-auto"
              />
            )}
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={cn(
                  "relative py-1 text-[14px] font-medium no-underline transition-colors duration-150 ease-out",
                  linkCls,
                )}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-pill bg-[linear-gradient(135deg,#34C5CC,#2FB9C0)] px-5 py-2.5 text-[13.5px] font-bold text-[#071B33] no-underline shadow-[var(--shadow-cta)] transition-all duration-200 hover:-translate-y-px hover:shadow-[var(--shadow-cta-hover)]"
            >
              Agendar demonstração
            </a>
          </div>

          {/* Mobile: abrir */}
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span className={cn("h-[2px] w-6 rounded", burger)} />
            <span className={cn("h-[2px] w-6 rounded", burger)} />
            <span className={cn("h-[2px] w-6 rounded", burger)} />
          </button>
        </Container>
      </nav>

      {/* Mobile: overlay + drawer — FORA do <nav> */}
      <div
        className={cn(
          "fixed inset-0 z-[120] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-[rgba(7,27,51,0.55)] backdrop-blur-sm transition-opacity duration-300",
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
            "absolute right-0 top-0 flex h-full w-[82%] max-w-[330px] flex-col border-l border-line bg-paper shadow-[var(--shadow-lift)] transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-16 items-center justify-between px-6">
            <span className="inline-flex items-center gap-2">
              <Image
                src="/logo-vertho-sem-texto.png"
                alt=""
                width={1140}
                height={1196}
                className="h-6 w-auto"
              />
              <span className="font-display text-[18px] font-extrabold tracking-[-0.02em] text-ink-strong">
                vertho<span className="text-cyan">.ai</span>
              </span>
            </span>
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="relative h-10 w-10"
            >
              <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 rotate-45 rounded bg-brand" />
              <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -rotate-45 rounded bg-brand" />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-1 px-6 pt-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-[12px] px-3 py-3 text-[16px] font-semibold text-ink-strong no-underline transition-colors duration-150 hover:bg-mist hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-pill bg-[linear-gradient(135deg,#34C5CC,#2FB9C0)] px-6 py-3.5 text-[15px] font-bold text-[#071B33] no-underline shadow-[var(--shadow-cta)]"
            >
              Agendar demonstração
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
