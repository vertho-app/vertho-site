/* ───────────────────────────────────────────────────────────────────────────
 * Root layout — fontes, metadata base e chrome global (NavBar + Footer).
 *
 * Fontes (next/font/google), nomes de CSS var coerentes com o Mentor IA:
 *   Inter           → --font-inter   (corpo / font-sans)
 *   Instrument Serif → --font-serif  (display / font-display) — normal+italic
 *   Manrope         → --font-manrope (eyebrows / font-eyebrow)
 * Fraunces foi DESCARTADA do projeto — não importar.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { Metadata } from "next";
import { Inter, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/layout/nav-bar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertho.ai"),
  title: {
    default: "Vertho.ai — Inteligência de Pessoas com IA",
    template: "%s — Vertho.ai",
  },
  description:
    "Plataforma de IA para atrair, desenvolver e reter pessoas em escolas e empresas. Do diagnóstico ao plano de ação, em uma só ferramenta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
