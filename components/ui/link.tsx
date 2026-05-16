/* ───────────────────────────────────────────────────────────────────────────
 * <TextLink> — link de texto (não confundir com <Button variant="ghost">).
 *
 * variant:
 *   nav     → 13px, cinza→branco. Itens da NavBar.
 *   default → herda tamanho, cinza→branco. Links em parágrafo/footer.
 *   accent  → cyan, clareia no hover. Links de destaque.
 *   arrow   → accent + seta que "anda" no hover ("Saber mais →").
 * external adiciona target=_blank + rel seguro.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowIcon } from "@/components/ui/icons";

type LinkVariant = "nav" | "default" | "accent" | "arrow";

const VARIANT: Record<LinkVariant, string> = {
  nav: "text-[13px] font-medium text-ink-dim hover:text-white",
  default: "text-ink-dim hover:text-white",
  accent: "text-cyan hover:text-cyan-soft font-semibold",
  arrow:
    "inline-flex items-center gap-1.5 text-[13px] font-bold text-cyan hover:text-cyan-soft",
};

export function TextLink({
  href,
  variant = "default",
  external = false,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: LinkVariant;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">) {
  return (
    <a
      href={href}
      className={cn(
        "group no-underline transition-all duration-150 ease-out",
        VARIANT[variant],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
      {variant === "arrow" && (
        <ArrowIcon
          size={12}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
