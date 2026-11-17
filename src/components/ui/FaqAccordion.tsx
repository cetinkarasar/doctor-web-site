import { ChevronDown } from "lucide-react";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-rose-100 overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm shadow-rose-900/5">
      {items.map(({ q, a }, index) => (
        <details key={q} name="sss" open={index === 0} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-ink transition-colors hover:bg-blush/60 group-open:bg-blush/60 [&::-webkit-details-marker]:hidden">
            {q}
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600 transition-transform duration-300 group-open:rotate-180 group-open:bg-rose-600 group-open:text-white">
              <ChevronDown className="size-4" aria-hidden="true" />
            </span>
          </summary>
          <p className="px-6 pb-6 pt-1 text-sm leading-relaxed text-slate-600 group-open:bg-blush/60">{a}</p>
        </details>
      ))}
    </div>
  );
}
