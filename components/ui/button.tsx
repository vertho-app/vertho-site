/* ───────────────────────────────────────────────────────────────────────────
 * <Button> — ação. Renderiza <a> quando recebe `href`, senão <button>.
 *
 * variant (1:1 com os mockups):
 *   primary   → cyan sólido, texto navy. Ação principal de hero/seção.
 *   cta       → primary maior + glow. SÓ no CTA final / hero principal.
 *   secondary → contorno cyan, fundo transparente. Ação alternativa.
 *   ghost     → só texto (cinza→claro). Ação terciária (ex.: WhatsApp).
 *   nav       → pill pequena da NavBar ("Falar com a gente").
 *   nr1       → tom lilás/roxo. Exclusiva do callout NR-1.
 *
 * withArrow adiciona a seta dos mockups (anima o gap no hover).
 * Hover é 100% CSS — componente é server-safe.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowIcon } from "@/components/ui/icons";

type ButtonVariant = "primary" | "cta" | "secondary" | "ghost" | "nav" | "nr1";

const BASE =
  "group inline-flex items-center justify-center gap-2 font-sans no-underline " +
  "transition-[background-color,color,border-color,transform,box-shadow] duration-200 " +
  "cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cyan/60 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep";

const VARIANT: Record<ButtonVariant, string> = {
  primary:
    "rounded-md px-7 py-3.5 text-[14px] font-bold bg-cyan text-navy-deep " +
    "hover:bg-cyan-hover hover:-translate-y-px",
  cta:
    "rounded-cta px-9 py-[18px] text-[16px] font-bold bg-cyan text-navy-deep " +
    "shadow-[var(--shadow-cta)] hover:bg-cyan-hover hover:-translate-y-0.5 " +
    "hover:shadow-[0_8px_32px_rgba(52,197,204,0.35)]",
  secondary:
    "rounded-md px-7 py-3.5 text-[14px] font-semibold bg-transparent text-cyan " +
    "border border-[rgba(52,197,204,0.35)] hover:border-[rgba(52,197,204,0.7)] hover:text-white",
  ghost:
    "px-1 py-1 text-[14px] font-medium text-ink-faint hover:text-ink-dim",
  nav:
    "rounded-sm px-[18px] py-2 text-[13px] font-semibold text-cyan " +
    "bg-[rgba(52,197,204,0.12)] border border-[rgba(52,197,204,0.25)] " +
    "hover:bg-[rgba(52,197,204,0.20)]",
  nr1:
    "rounded-md px-6 py-3 text-[14px] font-semibold text-lilac " +
    "bg-[rgba(158,78,221,0.15)] border border-[rgba(158,78,221,0.30)] " +
    "hover:bg-[rgba(158,78,221,0.25)]",
};

type CommonProps = {
  variant?: ButtonVariant;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };
type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    withArrow = false,
    external = false,
    className,
    children,
    ...rest
  } = props;

  const cls = cn(BASE, VARIANT[variant], className);
  const arrow = withArrow ? (
    <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
  ) : null;

  if ("href" in props && props.href !== undefined) {
    const linkRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...linkRest}
      >
        {children}
        {arrow}
      </a>
    );
  }

  const btnRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={cls} type={btnRest.type ?? "button"} {...btnRest}>
      {children}
      {arrow}
    </button>
  );
}
