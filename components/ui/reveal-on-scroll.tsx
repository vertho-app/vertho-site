"use client";
/* ───────────────────────────────────────────────────────────────────────────
 * <RevealOnScroll> — fade/slide-up quando o bloco entra na viewport.
 * Replica o IntersectionObserver dos mockups (threshold 0.08, rootMargin
 * -40px no bottom). Respeita prefers-reduced-motion (via globals.css).
 * Envolva seções de conteúdo; NÃO envolva o hero (deve aparecer imediato).
 * ─────────────────────────────────────────────────────────────────────────── */
import { useEffect, useRef } from "react";

export function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
