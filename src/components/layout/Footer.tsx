"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useDictionary } from "@/lib/i18n";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const t = useDictionary();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-slate-600">{t.footer.blurb}</p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">{t.footer.menu}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-600 hover:text-brand-700">
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">{t.footer.services}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/hizmetler/${service.slug}`} className="text-slate-600 hover:text-brand-700">
                  {t.services[service.slug].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">{t.footer.contact}</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
              {siteConfig.address.full}
            </li>
            <li>
              <a href={siteConfig.phone.href} className="flex gap-2.5 hover:text-brand-700">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex gap-2.5 break-all hover:text-brand-700">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rose-100/60 bg-gradient-to-r from-surface via-blush to-violet-50">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8">
          <p>
            © {siteConfig.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
