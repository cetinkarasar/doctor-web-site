"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useDictionary, useLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const t = useDictionary();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled ? "border-slate-200 shadow-sm" : "border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
        aria-label={t.navLabel}
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {t.nav[item.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={siteConfig.phone.href}
            className="hidden items-center gap-2 rounded-full border border-brand-200 px-4 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 xl:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {t.actions.callNow}
          </a>
          <Link
            href="/#iletisim"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition-colors hover:bg-brand-700"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            {t.actions.book}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobil-menu"
          aria-label={open ? t.actions.closeMenu : t.actions.openMenu}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobil-menu"
          className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-100 bg-white px-4 pb-8 pt-4 sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-surface"
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-6">
            <div className="self-start">
              <LanguageSwitcher />
            </div>
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700"
            >
              <Phone className="size-4" aria-hidden="true" />
              {t.actions.callNow}
            </a>
            <Link
              href="/#iletisim"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white"
            >
              <CalendarCheck className="size-4" aria-hidden="true" />
              {t.actions.book}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
