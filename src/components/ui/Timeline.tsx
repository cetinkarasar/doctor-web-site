"use client";

import { career } from "@/lib/career";
import { useDictionary } from "@/lib/i18n";

export function Timeline() {
  const t = useDictionary();

  return (
    <ol className="relative space-y-8 before:absolute before:bottom-2 before:left-5 before:top-2 before:w-px before:bg-gradient-to-b before:from-brand-200 before:via-violet-200 before:to-rose-100">
      {career.map(({ id, icon: Icon }) => {
        const { period, title, institution, description } = t.career[id];
        return (
          <li key={id} className="relative pl-16">
            <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-brand-600 to-violet-600 text-white shadow-md shadow-violet-600/25">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <span className="inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-700">
                {period}
              </span>
              <h4 className="mt-3 font-display text-lg font-semibold text-ink">{title}</h4>
              <p className="text-sm font-medium text-brand-600">{institution}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
