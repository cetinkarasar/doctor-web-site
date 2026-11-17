"use client";

import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useDictionary } from "@/lib/i18n";
import { mapsDirectionsUrl, mapsEmbedUrl, siteConfig } from "@/lib/site-config";

export function Contact() {
  const t = useDictionary();

  return (
    <section
      id="iletisim"
      className="bg-gradient-to-b from-surface via-blush/70 to-violet-50/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
              <iframe
                title={t.contact.mapTitle}
                src={mapsEmbedUrl}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <address className="flex items-start gap-3 not-italic">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-slate-600">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    <span className="font-semibold text-ink">{siteConfig.address.district}</span>
                  </span>
                </address>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-brand-200 px-4 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  {t.actions.directions}
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                  <Clock className="size-5 text-brand-600" aria-hidden="true" />
                  {t.contact.hoursTitle}
                </h3>
                <dl className="mt-4 space-y-2.5 text-sm">
                  {t.contact.hours.map(({ days, hours, closed }) => (
                    <div key={days} className="flex justify-between gap-3 whitespace-nowrap">
                      <dt className="text-slate-600">{days}</dt>
                      <dd className={closed ? "text-slate-400" : "font-medium text-ink"}>
                        {hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="font-display text-base font-semibold text-ink">{t.contact.quickTitle}</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href={siteConfig.phone.href} className="flex items-center gap-2 text-slate-600 hover:text-brand-700">
                      <Phone className="size-4 text-brand-600" aria-hidden="true" />
                      {siteConfig.phone.display}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 break-all text-slate-600 hover:text-brand-700">
                      <Mail className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                      {siteConfig.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
