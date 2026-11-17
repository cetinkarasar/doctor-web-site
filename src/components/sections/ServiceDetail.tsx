"use client";

import Link from "next/link";
import { ArrowLeft, CalendarCheck, CheckCircle2, Info, Phone } from "lucide-react";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceImage } from "@/components/ui/ServiceImage";
import { useDictionary } from "@/lib/i18n";
import { getAllServices, getService, type ServiceSlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export function ServiceDetail({ slug, hasImage }: { slug: ServiceSlug; hasImage: boolean }) {
  const t = useDictionary();
  const service = getService(slug);
  if (!service) return null;

  const Icon = service.icon;
  const content = t.services[slug];
  const otherServices = getAllServices().filter((item) => item.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50/70 via-white to-blush">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 size-[26rem] rounded-full bg-rose-100/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/4 size-[22rem] rounded-full bg-violet-100/50 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <Link
              href="/#hizmetler"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-rose-600"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {t.actions.allServices}
            </Link>
            <span className="mt-8 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-violet-600 text-white shadow-lg shadow-rose-600/20">
              <Icon className="size-7" aria-hidden="true" />
            </span>
            <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{content.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700"
              >
                <CalendarCheck className="size-4" aria-hidden="true" />
                {t.actions.book}
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-white px-6 py-3.5 text-sm font-semibold text-rose-700 transition-colors hover:bg-rose-50"
              >
                <Phone className="size-4" aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-2 rounded-[2.5rem] bg-gradient-to-br from-rose-200 via-brand-100 to-violet-200"
            />
            <ServiceImage
              service={service}
              hasImage={hasImage}
              alt={content.title}
              preload
              sizes="(min-width: 1024px) 45vw, 95vw"
              className="group aspect-[4/3] rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-rose-900/10"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_18rem] lg:px-8">
          <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-surface to-white p-7">
            <h2 className="font-display text-xl font-semibold text-ink">{t.detail.scope}</h2>
            <ul className="mt-5 space-y-3">
              {content.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-rose-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 flex gap-2 text-xs leading-relaxed text-slate-500">
              <Info className="size-4 shrink-0" aria-hidden="true" />
              {t.detail.note}
            </p>
          </div>

          <aside className="h-fit rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-blush p-6">
            <h2 className="font-display text-base font-semibold text-ink">{t.detail.sidebarTitle}</h2>
            <p className="mt-2 text-sm text-slate-600">{t.detail.sidebarText}</p>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/#iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
              >
                <CalendarCheck className="size-4" aria-hidden="true" />
                {t.actions.book}
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-violet-700"
              >
                <Phone className="size-4" aria-hidden="true" />
                {t.actions.callNow}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-blush/70 to-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t.detail.faqEyebrow} title={t.detail.faqTitle} />
          <div className="mt-10">
            <FaqAccordion items={t.faq[slug]} />
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 pt-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-lg font-semibold text-ink">{t.detail.others}</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {otherServices.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/hizmetler/${item.slug}`}
                  className="inline-block rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 transition-colors hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700"
                >
                  {t.services[item.slug].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
