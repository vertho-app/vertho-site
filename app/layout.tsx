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
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { NavBar } from "@/components/layout/nav-bar";
import { Footer } from "@/components/layout/footer";

/* Schema.org — Organization + SoftwareApplication (sem ratings/preços falsos). */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vertho.ai/#org",
      name: "Vertho.ai",
      url: "https://vertho.ai",
      logo: "https://vertho.ai/logo-vertho.png",
      email: "contato@vertho.ai",
      description:
        "Plataforma de IA para atrair, desenvolver e reter pessoas em escolas e empresas.",
      sameAs: [
        "https://br.linkedin.com/in/vertho-ai-a6a954372",
        "https://www.instagram.com/vertho.ai/",
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Mentor IA",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://vertho.ai/produto",
      publisher: { "@id": "https://vertho.ai/#org" },
      description:
        "Diagnóstico de competências, PDI personalizado e trilha de 14 semanas com mentor de IA, multi-tenant por empresa.",
    },
  ],
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
