/* ───────────────────────────────────────────────────────────────────────────
 * og:image da Home — 1200×630, gerado com next/og (sem asset externo).
 * Convenção de arquivo: Next injeta automaticamente og:image + twitter:image.
 * Refino tipográfico (Instrument Serif) fica para a Fase 4 (OG dinâmico).
 * ─────────────────────────────────────────────────────────────────────────── */
import { ImageResponse } from "next/og";

export const alt = "Vertho.ai — Inteligência de Pessoas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #06172C 0%, #091D35 45%, #0F2B54 100%)",
          color: "#F3F7FB",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9AE2E6",
          }}
        >
          Inteligência de Pessoas
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1.08,
            maxWidth: 940,
            letterSpacing: "-0.02em",
          }}
        >
          Dificuldade para atrair, desenvolver e reter as pessoas certas?
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          vertho
          <span style={{ color: "#34C5CC" }}>.ai</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
