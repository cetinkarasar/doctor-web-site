"use client";

import Image from "next/image";
import { Baby, CheckCircle2, Heart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useDictionary } from "@/lib/i18n";

export function Welcome() {
  const t = useDictionary();

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 size-[28rem] rounded-full bg-rose-50 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -rotate-2 rounded-[2.75rem] bg-gradient-to-tr from-rose-100 via-blush to-violet-100"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border-8 border-white shadow-2xl shadow-rose-900/10 lg:aspect-[5/6]">
            <Image
              src="/images/karsilama/karsilama.jpg"
              alt={t.welcome.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 90vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-rose-950/30 via-transparent to-transparent"
            />
          </div>

          <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl border border-rose-100 bg-white/95 px-5 py-4 shadow-xl shadow-rose-900/10 backdrop-blur sm:-right-6">
            <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-violet-600 text-white">
              <Baby className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{t.welcome.cardTitle}</p>
              <p className="text-xs text-slate-500">{t.welcome.cardText}</p>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="absolute -left-3 top-8 flex size-12 items-center justify-center rounded-full bg-white text-rose-500 shadow-lg shadow-rose-900/10"
          >
            <Heart className="size-5 fill-rose-100" />
          </span>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow={t.welcome.eyebrow}
            title={t.welcome.title}
            description={t.welcome.text}
          />

          <ul className="mt-8 space-y-3">
            {t.welcome.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-rose-500" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {t.welcome.stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col-reverse justify-end rounded-2xl border border-rose-100/70 bg-gradient-to-br from-blush to-white p-4 text-center sm:p-5"
              >
                <dt className="mt-1 text-xs leading-snug text-slate-600">{label}</dt>
                <dd className="font-display text-xl font-bold text-ink sm:text-2xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
