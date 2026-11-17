"use client";

import { HandHeart, Lock, MessageSquareHeart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { useDictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

const values = [
  { icon: MessageSquareHeart, tone: "bg-brand-50 text-brand-600" },
  { icon: Lock, tone: "bg-rose-50 text-rose-600" },
  { icon: HandHeart, tone: "bg-violet-50 text-violet-600" },
];

export function About() {
  const t = useDictionary();

  return (
    <section
      id="hakkinda"
      className="bg-gradient-to-br from-surface via-white to-violet-50/60 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow={t.about.eyebrow}
            title={siteConfig.name}
            description={t.about.description}
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {t.about.values.map(({ title, text }, index) => {
              const { icon: Icon, tone } = values[index];
              return (
                <li key={title} className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm">
                  <span className={`flex size-10 items-center justify-center rounded-xl ${tone}`}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-display text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="mb-8 font-display text-xl font-semibold text-ink">
            {t.about.careerTitle}
          </h3>
          <Timeline />
        </div>
      </div>
    </section>
  );
}
