"use client";
/* ───────────────────────────────────────────────────────────────────────────
 * <ContactForm> — formulário do /contato (React 19 useActionState).
 * Campos do brief §4.8. Honeypot "website" oculto. Turnstile só aparece
 * se NEXT_PUBLIC_TURNSTILE_SITE_KEY existir (senão, dev sem widget).
 * ─────────────────────────────────────────────────────────────────────────── */
import { useActionState } from "react";
import Script from "next/script";
import { submitContact, type ContactState } from "@/app/contato/actions";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const INIT: ContactState = { ok: false, message: "" };
const TS_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, INIT);

  if (state.ok) {
    return (
      <div className="rounded-lg border border-[rgba(52,197,204,0.3)] bg-[rgba(52,197,204,0.06)] p-8 text-center">
        <p className="font-display text-[22px] text-white">Recebido. 🎉</p>
        <p className="mt-2 text-[14px] leading-[1.7] text-ink-dim">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <FormField label="Nome" htmlFor="nome" required>
        <Input id="nome" name="nome" placeholder="Seu nome" required />
      </FormField>

      <FormField label="E-mail corporativo" htmlFor="email" required>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="voce@suaorganizacao.com"
          required
        />
      </FormField>

      <FormField label="Telefone" htmlFor="telefone" hint="Opcional.">
        <Input id="telefone" name="telefone" placeholder="(11) 9 0000-0000" />
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Tipo de organização" htmlFor="org_tipo" required>
          <Input as="select" id="org_tipo" name="org_tipo" defaultValue="" required>
            <option value="" disabled>
              Selecione…
            </option>
            <option>Escola / Rede de ensino</option>
            <option>Empresa</option>
            <option>Secretaria municipal</option>
            <option>Outro</option>
          </Input>
        </FormField>
        <FormField label="Tamanho da organização" htmlFor="org_tamanho">
          <Input as="select" id="org_tamanho" name="org_tamanho" defaultValue="">
            <option value="" disabled>
              Selecione…
            </option>
            <option>Até 50 colaboradores</option>
            <option>51 a 200</option>
            <option>201 a 500</option>
            <option>Mais de 500</option>
          </Input>
        </FormField>
      </div>

      <FormField label="Como conheceu a Vertho" htmlFor="origem">
        <Input as="select" id="origem" name="origem" defaultValue="">
          <option value="" disabled>
            Selecione…
          </option>
          <option>Bett</option>
          <option>Indicação</option>
          <option>LinkedIn</option>
          <option>Pesquisa Google</option>
          <option>Outro</option>
        </Input>
      </FormField>

      <FormField label="Mensagem" htmlFor="mensagem" hint="Opcional.">
        <Input
          as="textarea"
          id="mensagem"
          name="mensagem"
          placeholder="Conte rapidamente seu contexto e o que procura."
        />
      </FormField>

      {TS_KEY && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            async
            defer
          />
          <div className="cf-turnstile" data-sitekey={TS_KEY} data-theme="dark" />
        </>
      )}

      {!state.ok && state.message && (
        <p
          role="alert"
          className="rounded-md border border-coral/40 bg-[rgba(249,115,84,0.06)] px-4 py-3 text-[13px] leading-[1.6] text-[#fca898]"
        >
          {state.message}
        </p>
      )}

      <Button type="submit" variant="primary" disabled={pending} withArrow>
        {pending ? "Enviando…" : "Enviar mensagem"}
      </Button>
    </form>
  );
}
