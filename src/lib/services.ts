import {
  Baby,
  ClipboardPlus,
  HeartHandshake,
  ScanSearch,
  ShieldCheck,
  ShieldPlus,
  Sprout,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n/tr";

export type ServiceSlug = keyof Dictionary["services"];
export type Service = { slug: ServiceSlug; icon: LucideIcon; image: string };

export const services: Service[] = [
  { slug: "gebelik-takibi", icon: Baby, image: "/images/services/gebelik-takibi.jpg" },
  { slug: "jinekolojik-rahatsizliklar", icon: Stethoscope, image: "/images/services/jinekoloji.jpg" },
  { slug: "kisirlik-ve-asilama", icon: Sprout, image: "/images/services/kisirlik-asilama.jpg" },
  { slug: "myom-ve-over-kisti", icon: ScanSearch, image: "/images/services/myom-kist.jpg" },
  { slug: "hpv-ve-genital-sigil-tedavisi", icon: ShieldPlus, image: "/images/services/hpv-sigil.jpg" },
  { slug: "ilk-gece-korkusu-vajinismus", icon: HeartHandshake, image: "/images/services/vajinismus.jpg" },
  { slug: "kizlik-zari-muayenesi-ve-islemleri", icon: ShieldCheck, image: "/images/services/kizlik-zari.jpg" },
  { slug: "gebelik-sonlandirma-kurtaj", icon: ClipboardPlus, image: "/images/services/kurtaj.jpg" },
];

export function getAllServices() {
  return services;
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
