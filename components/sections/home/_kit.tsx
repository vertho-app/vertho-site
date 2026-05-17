/* ───────────────────────────────────────────────────────────────────────────
 * Home redesign 2026 · Kit visual do tema CLARO.
 *
 * Componentes reutilizáveis e mockups feitos 100% em HTML/CSS/SVG (sem
 * imagem de banco). Tudo server-safe (sem hooks) — a animação de scroll
 * fica no <RevealOnScroll> que envolve cada seção em app/page.tsx.
 *
 * REGRA: cores só via tokens do tema claro (paper/mist/brand/ai/cyan/ink-*).
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ── Eyebrow: rótulo curto com tracinho, acima do título ──────────────────── */
const EB_TONE = {
  cyan: "text-[#0E8F96]",
  ai: "text-ai",
  brand: "text-brand",
  light: "text-cyan-soft",
} as const;

export function Eyebrow({
  tone = "cyan",
  align = "left",
  className,
  children,
}: {
  tone?: keyof typeof EB_TONE;
  align?: "left" | "center";
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 font-eyebrow text-[11px] font-bold uppercase tracking-[0.2em]",
        EB_TONE[tone],
        align === "center" && "justify-center",
        className,
      )}
    >
      <span className="h-px w-7 bg-current opacity-40" />
      {children}
    </p>
  );
}

/* ── SectionHead: eyebrow + h2 + intro ────────────────────────────────────── */
export function SectionHead({
  eyebrow,
  title,
  intro,
  tone = "cyan",
  align = "left",
  dark = false,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: keyof typeof EB_TONE;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-[760px] text-center",
        className,
      )}
    >
      <Eyebrow tone={dark ? "light" : tone} align={align}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "mt-5 font-display text-[clamp(28px,3.6vw,46px)] font-bold leading-[1.1] tracking-[-0.02em]",
          dark ? "text-white" : "text-ink-strong",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-[clamp(15px,1.4vw,18px)] leading-[1.65]",
            align === "center" && "mx-auto max-w-[640px]",
            dark ? "text-white/70" : "text-ink-body",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ── Surface: card claro padrão (borda hairline + sombra suave) ───────────── */
export function Surface({
  as: As = "div",
  hover = false,
  className,
  children,
}: {
  as?: ElementType;
  hover?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <As
      className={cn(
        "relative rounded-[20px] border border-line bg-card-light shadow-[var(--shadow-soft)]",
        hover &&
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(52,197,204,0.4)] hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      {children}
    </As>
  );
}

/* ── Pill: tag pequena ────────────────────────────────────────────────────── */
export function Pill({
  tone = "cyan",
  className,
  children,
}: {
  tone?: "cyan" | "ai" | "brand" | "mist";
  className?: string;
  children: ReactNode;
}) {
  const map = {
    cyan: "bg-[rgba(52,197,204,0.12)] text-[#0E8F96] border-[rgba(52,197,204,0.28)]",
    ai: "bg-[rgba(139,92,246,0.12)] text-ai border-[rgba(139,92,246,0.28)]",
    brand: "bg-[rgba(20,47,87,0.07)] text-brand border-[rgba(20,47,87,0.16)]",
    mist: "bg-mist text-ink-soft border-line",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-[11.5px] font-semibold tracking-[0.02em]",
        map[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ── Radar comportamental (SVG) ───────────────────────────────────────────────
   axes: rótulos; values: 0..1 na mesma ordem. Hexagonal por padrão. ─────────── */
export function Radar({
  values,
  axes,
  size = 220,
  color = "#34C5CC",
  showLabels = true,
  sweep = false,
  className,
}: {
  values: number[];
  axes?: string[];
  size?: number;
  color?: string;
  showLabels?: boolean;
  sweep?: boolean;
  className?: string;
}) {
  const n = values.length;
  const c = size / 2;
  const r = size / 2 - (showLabels ? 34 : 10);
  const ang = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const pt = (i: number, rad: number) =>
    `${c + Math.cos(ang(i)) * rad},${c + Math.sin(ang(i)) * rad}`;

  const rings = [0.25, 0.5, 0.75, 1];
  const valuePts = values.map((v, i) => pt(i, r * Math.max(0.06, v))).join(" ");

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={cn("h-auto w-full overflow-visible", className)}
      role="img"
      aria-label="Radar comportamental"
    >
      {rings.map((rr) => (
        <polygon
          key={rr}
          points={values.map((_, i) => pt(i, r * rr)).join(" ")}
          fill="none"
          stroke="rgba(20,47,87,0.10)"
          strokeWidth="1"
        />
      ))}
      {values.map((_, i) => (
        <line
          key={i}
          x1={c}
          y1={c}
          x2={pt(i, r).split(",")[0]}
          y2={pt(i, r).split(",")[1]}
          stroke="rgba(20,47,87,0.10)"
          strokeWidth="1"
        />
      ))}
      <polygon
        points={valuePts}
        fill={color}
        fillOpacity="0.16"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {values.map((v, i) => {
        const [x, y] = pt(i, r * Math.max(0.06, v)).split(",");
        return <circle key={i} cx={x} cy={y} r="3.4" fill={color} />;
      })}
      {sweep && (
        <g
          className="animate-sweep"
          style={{ transformOrigin: `${c}px ${c}px` }}
        >
          <defs>
            <linearGradient id="rsweep" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={color} stopOpacity="0" />
              <stop offset="100%" stopColor={color} stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            d={`M${c},${c} L${c + r},${c} A${r},${r} 0 0 1 ${
              c + Math.cos(-0.7) * r
            },${c + Math.sin(-0.7) * r} Z`}
            fill="url(#rsweep)"
          />
        </g>
      )}
      {showLabels &&
        axes?.map((label, i) => {
          const [x, y] = pt(i, r + 20).split(",").map(Number);
          return (
            <text
              key={label}
              x={x}
              y={y}
              dy="0.32em"
              textAnchor={x < c - 4 ? "end" : x > c + 4 ? "start" : "middle"}
              className="font-eyebrow"
              fontSize="10"
              fontWeight="700"
              fill="#6C819A"
            >
              {label}
            </text>
          );
        })}
    </svg>
  );
}

/* ── Gauge: anel de progresso com % no centro ─────────────────────────────── */
export function Gauge({
  value,
  label,
  size = 96,
  color = "#34C5CC",
}: {
  value: number;
  label?: string;
  size?: number;
  color?: string;
}) {
  const stroke = 8;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(20,47,87,0.10)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - value / 100)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-[20px] font-bold leading-none text-ink-strong">
          {value}
          <span className="text-[12px] text-ink-soft">%</span>
        </span>
        {label && (
          <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Sparkline: mini-tendência ────────────────────────────────────────────── */
export function Sparkline({
  points,
  color = "#34C5CC",
  className,
}: {
  points: number[];
  color?: string;
  className?: string;
}) {
  const w = 120;
  const h = 40;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / span) * (h - 6) - 3;
    return [x, y] as const;
  });
  const d = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const last = coords[coords.length - 1];
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={cn("h-auto w-full overflow-visible", className)}
      aria-hidden
    >
      <polyline
        points={`0,${h} ${d} ${w},${h}`}
        fill={color}
        fillOpacity="0.10"
        stroke="none"
      />
      <polyline
        points={d}
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={last[0]} cy={last[1]} r="3.2" fill={color} />
    </svg>
  );
}

/* ── Bars: mini-barras ────────────────────────────────────────────────────── */
export function Bars({
  values,
  color = "#34C5CC",
  className,
}: {
  values: number[];
  color?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-end gap-1.5", className)}>
      {values.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-[3px]"
          style={{
            height: `${Math.max(8, v)}%`,
            background: i === values.length - 1 ? color : "rgba(20,47,87,0.14)",
          }}
        />
      ))}
    </div>
  );
}

/* ── Connector: linhas de conexão tracejadas (decorativo) ─────────────────── */
export function ConnectorDots({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-flex items-center gap-1", className)}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-pill bg-cyan animate-pulse-dot"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </span>
  );
}
