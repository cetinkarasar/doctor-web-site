"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useDictionary, useLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const locale = useLocale();
  const t = useDictionary();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return;

    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Web sitesi randevu talebi – ${data.get("firstName")} ${data.get("lastName")}`,
          _template: "table",
          Ad: data.get("firstName"),
          Soyad: data.get("lastName"),
          "Telefon / E-posta": data.get("contact"),
          Mesaj: data.get("message"),
          "Site Dili": locale.toUpperCase(),
        }),
      });
      const result = await response.json();
      if (!response.ok || String(result.success) !== "true") throw new Error(result.message);

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-display text-2xl font-bold text-ink">{t.form.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{t.form.intro}</p>

      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          {t.form.firstName}
          <input
            name="firstName"
            required
            autoComplete="given-name"
            className={inputClass}
            placeholder={t.form.firstNamePlaceholder}
          />
        </label>
        <label className="text-sm font-medium text-ink">
          {t.form.lastName}
          <input
            name="lastName"
            required
            autoComplete="family-name"
            className={inputClass}
            placeholder={t.form.lastNamePlaceholder}
          />
        </label>
        <label className="text-sm font-medium text-ink sm:col-span-2">
          {t.form.contact}
          <input
            name="contact"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder={t.form.contactPlaceholder}
          />
        </label>
        <label className="text-sm font-medium text-ink sm:col-span-2">
          {t.form.message}
          <textarea
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder={t.form.messagePlaceholder}
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-slate-500">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-4 shrink-0 rounded border-slate-300 accent-brand-600"
        />
        {t.form.consent}
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        {status === "sending" ? t.form.sending : t.form.submit}
      </button>

      {status === "success" && (
        <p
          role="status"
          className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
          {t.form.success}
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            {t.form.errorStart}{" "}
            <a href={siteConfig.phone.href} className="font-semibold underline">
              {siteConfig.phone.display}
            </a>{" "}
            {t.form.errorMiddle}{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
              {siteConfig.email}
            </a>
            {t.form.errorEnd}
          </span>
        </p>
      )}
    </form>
  );
}
