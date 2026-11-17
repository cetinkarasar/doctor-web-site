export const siteConfig = {
  name: "Op. Dr. Hüsnü Miral",
  title: "Kadın Hastalıkları ve Doğum Uzmanı",
  shortTitle: "Kadın Hastalıkları ve Doğum",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.drhusnumiral.com").replace(/\/$/, ""),
  description:
    "Kadın Hastalıkları ve Doğum Uzmanı Op. Dr. Hüsnü Miral; Konak / İzmir'deki muayenehanesinde gebelik takibi, jinekolojik rahatsızlıklar, kısırlık (infertilite), myom, over kisti, HPV tedavisi ve vajinismus alanlarında hizmet vermektedir.",
  phone: {
    display: "0532 265 97 07",
    href: "tel:+905322659707",
  },
  whatsapp: {
    display: "0532 265 97 07",
    number: "905322659707",
  },
  email: "hcmiral@gmail.com",
  address: {
    line1: "Mimar Sinan Mah. 1359. Sok.",
    line2: "Kızılkanat Sağlık Sitesi No:2 D:A Blok",
    district: "Konak / İzmir",
    full: "Mimar Sinan Mah. 1359. Sok. Kızılkanat Sağlık Sitesi No:2 D:A Blok, Konak / İzmir",
  },
  nav: [
    { key: "home", href: "/#ana-sayfa" },
    { key: "about", href: "/#hakkinda" },
    { key: "services", href: "/#hizmetler" },
    { key: "contact", href: "/#iletisim" },
  ],
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

const mapsQuery = "Kızılkanat Sağlık Sitesi Mimar Sinan Mahallesi Konak İzmir";

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  mapsQuery,
)}&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  mapsQuery,
)}`;
