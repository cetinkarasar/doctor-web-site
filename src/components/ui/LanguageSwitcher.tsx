"use client";

import { Globe } from "lucide-react";
import { setLocale, useDictionary, useLocale, type Locale } from "@/lib/i18n";

const locales: Locale[] = ["tr", "en"];

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useDictionary();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs font-semibold"
      role="group"
      aria-label={t.language.label}
    >
      <Globe className="ml-1.5 size-3.5 text-slate-400" aria-hidden="true" />
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === code ? "bg-brand-600 text-white" : "text-slate-500 hover:text-brand-600"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
