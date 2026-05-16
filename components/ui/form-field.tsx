/* ───────────────────────────────────────────────────────────────────────────
 * <FormField> — label + controle + ajuda/erro. Envolve <Input>.
 *
 * Passe `htmlFor` igual ao `id` do controle (acessibilidade).
 * `error` (string) tem precedência visual sobre `hint`.
 * Label em Inter 13px 600; hint/erro 12px.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function FormField({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  className,
  children,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="text-[13px] font-semibold text-ink"
      >
        {label}
        {required && <span className="ml-1 text-cyan">*</span>}
      </label>
      {children}
      {error ? (
        <p className="text-[12px] leading-[1.5] text-coral">{error}</p>
      ) : hint ? (
        <p className="text-[12px] leading-[1.5] text-ink-faint">{hint}</p>
      ) : null}
    </div>
  );
}
