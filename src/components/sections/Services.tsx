"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { useDictionary } from "@/lib/i18n";
import { interestTags, services, type ServiceSlug } from "@/lib/services";

const tagClass =
  "inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors";

export function Services({ availableImages }: { availableImages: ServiceSlug[] }) {
  const t = useDictionary();

  return (
    <section
      id="hizmetler"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blush/60 to-white py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[30rem] rounded-full bg-violet-100/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.servicesSection.eyebrow}
          title={t.servicesSection.title}
          description={t.servicesSection.description}
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} hasImage={availableImages.includes(service.slug)} />
            </li>
          ))}
        </ul>

        <div className="mt-16 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-rose-50 px-6 py-10 text-center sm:px-10">
          <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-white text-violet-600 shadow-sm ring-1 ring-violet-100">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold text-ink">
            {t.servicesSection.otherTitle}
          </h3>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {interestTags.map((tag) => (
              <li key={tag.key}>
                {tag.href ? (
                  <Link
                    href={tag.href}
                    className={`${tagClass} border-violet-200 bg-white text-violet-700 hover:border-violet-700 hover:bg-violet-700 hover:text-white`}
                  >
                    {t.interestTags[tag.key]}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className={`${tagClass} border-violet-200 bg-white text-violet-700`}>
                    {t.interestTags[tag.key]}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
