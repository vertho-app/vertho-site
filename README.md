# vertho-site

Site institucional da Vertho.ai — migração do Gamma.site para Next.js.
Repositório **independente** do Mentor IA (mesma stack, sem acoplamento).

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind v4 (`@tailwindcss/postcss`) — tokens em `app/globals.css`
- Fontes: Inter (corpo), Instrument Serif (display), Manrope (eyebrows)
- Gerenciador: **npm** · alias de import: `@/*`

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

- `npm run build` — build de produção
- `npm run typecheck` — checagem de tipos

## Status — Fase 0 concluída (design system)

- Tokens + `@theme inline` em `app/globals.css`
- 10 primitivos em `components/ui/` + suporte (`NavBar`, `Footer`,
  `Eyebrow`, `SectionDivider`, `RevealOnScroll`, `MockupFrame`)
- **Página de QA: `/design`** — não linkada, `noindex`, bloqueada no
  `robots.txt`. Validar aqui antes da Fase 1.

Próxima: Fase 1 (Home + chrome) após validação do `/design`.

## Estrutura

```
app/                 rotas (App Router) · globals.css · layout · robots
  (internal)/design/ QA do design system
components/ui/        10 primitivos + suporte
components/brand/     MockupFrame
components/layout/    NavBar, Footer
lib/                  utilitários (cn)
```

> `_handoff_ref/` (mockups de referência) está no `.gitignore` — repo é público.
