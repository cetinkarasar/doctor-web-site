"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useDictionary } from "@/lib/i18n";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const t = useDictionary();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-3 sm:bottom-6 sm:left-6">
        {open && (
          <div
            id="whatsapp-sohbet"
            role="dialog"
            aria-label={t.floating.whatsapp}
            className="w-[min(20rem,calc(100vw-2rem))] origin-bottom-left overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/5 motion-safe:animate-[chat-in_180ms_ease-out]"
          >
            <div className="flex items-center gap-3 bg-[#25D366] px-4 py-3 text-white">
              <span className="relative size-10 shrink-0">
                <Image
                  src="/images/dr-husnu-miral.jpg"
                  alt=""
                  fill
                  sizes="40px"
                  className="rounded-full object-cover object-top ring-2 ring-white/70"
                />
                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-white ring-2 ring-[#25D366]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{t.floating.chatName}</p>
                <p className="truncate text-xs text-white/85">{t.floating.chatStatus}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.floating.close}
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/15 transition-colors hover:bg-black/25"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="bg-[#efeae2] bg-[radial-gradient(#d9d3c7_1px,transparent_1px)] [background-size:14px_14px] px-4 py-5">
              <div className="relative max-w-[90%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-ink shadow-sm">
                <p className="font-semibold">{t.floating.greeting}</p>
                <p className="mt-1 leading-relaxed text-slate-600">{t.floating.greetingNote}</p>
              </div>
            </div>

            <div className="p-3">
              <a
                href={whatsappLink(t.floating.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#25D366]/30 transition-colors hover:bg-[#1ebe5b]"
              >
                <WhatsAppIcon className="size-5" />
                {t.floating.startChat}
              </a>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="whatsapp-sohbet"
          aria-label={open ? t.floating.close : t.floating.open}
          className={`relative flex items-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white shadow-xl shadow-[#25D366]/35 transition-transform hover:-translate-y-0.5 ${
            open ? "size-14 justify-center" : "py-3 pl-3.5 pr-5 sm:py-3.5"
          }`}
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <>
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20 motion-reduce:hidden"
              />
              <WhatsAppIcon className="relative size-6" />
              <span className="relative">{t.floating.startChat}</span>
            </>
          )}
        </button>
      </div>

      <a
        href={siteConfig.phone.href}
        aria-label={`${t.floating.call}: ${siteConfig.phone.display}`}
        className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl shadow-brand-600/30 transition-colors hover:bg-brand-700 sm:bottom-6 sm:right-6"
      >
        <Phone className="size-6" aria-hidden="true" />
      </a>
    </>
  );
}
