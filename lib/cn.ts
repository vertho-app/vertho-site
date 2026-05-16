/* ───────────────────────────────────────────────────────────────────────────
 * cn() — junta classNames condicionais. Sem dependências (clsx/tw-merge não
 * estão no Mentor IA). Não faz merge de conflitos Tailwind: escreva variantes
 * que não colidam ou passe overrides por último.
 * ─────────────────────────────────────────────────────────────────────────── */
export type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const i of inputs) {
    if (!i) continue;
    if (Array.isArray(i)) {
      const r = cn(...i);
      if (r) out.push(r);
    } else {
      out.push(String(i));
    }
  }
  return out.join(" ");
}
