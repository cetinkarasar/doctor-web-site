"use client";

import Link from "next/link";
import { useDictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function Logo({ className = "" }: { className?: string }) {
  const t = useDictionary();

  return (
    <Link
      href="/#ana-sayfa"
      className={`group flex items-center gap-3 ${className}`}
      aria-label={`${siteConfig.name} – ${t.homeLabel}`}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 via-brand-600 to-violet-600 font-display text-lg font-bold text-white shadow-sm shadow-violet-600/25 transition-transform group-hover:scale-105">
        HM
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-[15px] font-bold tracking-tight text-ink sm:text-base">
          {siteConfig.name}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-brand-600">
          {t.shortTitle}
        </span>
      </span>
    </Link>
  );
}
