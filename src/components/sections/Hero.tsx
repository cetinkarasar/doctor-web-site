"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, HeartPulse, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useDictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const t = useDictionary();

  return (
    <section
      id="ana-sayfa"
      className="relative overflow-hidden bg-gradient-to-br from-brand-50/80 via-white to-blush"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[30rem] rounded-full bg-rose-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 size-[24rem] rounded-full bg-violet-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-10 size-[18rem] rounded-full bg-brand-100/50 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/90 px-4 py-1.5 text-sm font-medium text-rose-700 shadow-sm shadow-rose-900/5">
            <HeartPulse className="size-4 text-rose-500" aria-hidden="true" />
            {t.title}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{t.hero.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#iletisim"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700"
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              {t.actions.book}
            </Link>
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-brand-200 hover:text-brand-700"
            >
              <Phone className="size-5 text-brand-600" aria-hidden="true" />
              {siteConfig.phone.display}
            </a>
          </div>

          <div className="mt-10 flex max-w-xl items-start gap-4 rounded-2xl border border-white bg-white/70 p-5 shadow-sm backdrop-blur">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <MapPin className="size-5" aria-hidden="true" />
            </span>
            <address className="not-italic">
              <p className="text-sm font-semibold text-ink">{t.hero.addressTitle}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {siteConfig.address.line1} {siteConfig.address.line2},{" "}
                <span className="font-medium text-ink">{siteConfig.address.district}</span>
              </p>
            </address>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-rose-200 via-brand-100 to-violet-200"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-8 border-white bg-surface shadow-2xl shadow-slate-900/10">
            <Image
              src="/images/dr-husnu-miral.jpg"
              alt={t.hero.photoAlt}
              fill
              preload
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 90vw"
              className="object-cover object-[center_30%]"
            />
          </div>

          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl shadow-slate-900/5 sm:-left-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-rose-50 text-rose-600">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{t.hero.badgeTitle}</p>
              <p className="text-xs text-slate-500">{t.hero.badgeText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
