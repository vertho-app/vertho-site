/* ───────────────────────────────────────────────────────────────────────────
 * <SectionDivider> — linha-gradiente fina entre seções. Estilo em globals.css
 * (.section-divider). Colocar ENTRE dois <Section>, nunca dentro.
 * ─────────────────────────────────────────────────────────────────────────── */
export function SectionDivider() {
  return <div className="section-divider" aria-hidden="true" />;
}
