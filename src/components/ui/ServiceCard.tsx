"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceImage } from "@/components/ui/ServiceImage";
import { useDictionary } from "@/lib/i18n";
import type { Service } from "@/lib/services";

export function ServiceCard({ service, hasImage }: { service: Service; hasImage: boolean }) {
  const t = useDictionary();
  const Icon = service.icon;
  const content = t.services[service.slug];

  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-rose-100/60 bg-white p-3 shadow-sm shadow-rose-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-900/10">
      <ServiceImage
        service={service}
        hasImage={hasImage}
        alt={content.title}
        sizes="(min-width: 1280px) 18rem, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
        className="aspect-[16/10] rounded-2xl"
      />

      <div className="relative flex flex-1 flex-col px-4 pb-4 pt-8">
        <span className="absolute -top-6 left-4 flex size-12 items-center justify-center rounded-2xl bg-white text-rose-600 shadow-md shadow-rose-900/10 ring-1 ring-rose-100 transition-colors group-hover:bg-rose-600 group-hover:text-white">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <h3 className="font-display text-lg font-semibold text-ink">{content.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{content.summary}</p>
        <Link
          href={`/hizmetler/${service.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 after:absolute after:inset-0 after:rounded-3xl group-hover:text-rose-600"
        >
          {t.actions.details}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
