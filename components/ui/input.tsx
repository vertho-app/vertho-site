/* ───────────────────────────────────────────────────────────────────────────
 * <Input> — campo de formulário no tema escuro. (Form real chega na Fase 4;
 * o estilo já fica fechado aqui.)
 *
 * as: input (default) | textarea | select
 * Fundo translúcido, borda neutra, foco em cyan. Use sempre dentro de
 * <FormField> para ter label + erro/ajuda consistentes.
 * ─────────────────────────────────────────────────────────────────────────── */
import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

const FIELD =
  "w-full rounded-md border border-card-border bg-[rgba(255,255,255,0.03)] " +
  "px-4 py-3 text-[14px] text-ink placeholder:text-ink-faint outline-none " +
  "transition-colors duration-200 focus:border-cyan focus:bg-[rgba(255,255,255,0.05)] " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

type BaseProps = { invalid?: boolean; className?: string };

type InputProps = BaseProps & { as?: "input" } & Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "className"
  >;
type TextareaProps = BaseProps & { as: "textarea" } & Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "className"
  >;
type SelectProps = BaseProps & { as: "select"; children: ReactNode } & Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "className"
  >;

export function Input(props: InputProps | TextareaProps | SelectProps) {
  const invalidCls = props.invalid ? "border-coral focus:border-coral" : "";

  if (props.as === "textarea") {
    const { as: _as, invalid, className, ...rest } = props;
    return (
      <textarea
        className={cn(FIELD, "min-h-[120px] resize-y", invalidCls, className)}
        {...rest}
      />
    );
  }

  if (props.as === "select") {
    const { as: _as, invalid, className, children, ...rest } = props;
    return (
      <select
        className={cn(FIELD, "appearance-none pr-10", invalidCls, className)}
        {...rest}
      >
        {children}
      </select>
    );
  }

  const { as: _as, invalid, className, ...rest } = props;
  return <input className={cn(FIELD, invalidCls, className)} {...rest} />;
}
