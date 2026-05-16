/* ───────────────────────────────────────────────────────────────────────────
 * <MockupFrame> — painel "glass" que segura prints/simulações de produto
 * no lado direito dos heros (Home, Pulso…).
 *
 * É o ÚNICO elemento do site com sombra forte (--shadow-glass) e tilt 3D.
 * title  → rótulo da barra de janela (com os 3 dots). Omita p/ sem header.
 * tilt   → perspectiva 3D (default true; false deixa reto).
 * Largura: controle por className (ex.: "w-[380px]").
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function MockupFrame({
  title,
  tilt = true,
  className,
  children,
}: {
  title?: string;
  tilt?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "shrink-0 overflow-hidden rounded-lg border border-card-border shadow-[var(--shadow-glass)]",
        className,
      )}
      style={{
        background: "rgba(9,29,53,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transform: tilt
          ? "perspective(1200px) rotateY(-4deg) rotateX(2deg)"
          : undefined,
      }}
    >
      {title && (
        <div className="flex items-center gap-2 border-b border-card-border bg-[rgba(255,255,255,0.02)] px-[18px] py-3.5">
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-pill bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-pill bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-pill bg-[#28c840]" />
          </span>
          <span className="flex-1 text-center font-eyebrow text-[10px] font-medium tracking-[0.06em] text-ink-faint">
            {title}
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
