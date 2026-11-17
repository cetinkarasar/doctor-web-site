import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { tr } from "@/lib/i18n/tr";
import { getAvailableServiceImages } from "@/lib/service-images";
import { getAllServices, getService } from "@/lib/services";

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/hizmetler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const content = tr.services[service.slug];
  const hasImage = getAvailableServiceImages().includes(service.slug);
  return {
    title: `${content.title} – Konak Alsancak / İzmir`,
    description: content.summary,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: hasImage ? { images: [service.image] } : undefined,
  };
}

export default async function ServicePage({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tr.faq[service.slug].map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <ServiceDetail
        slug={service.slug}
        hasImage={getAvailableServiceImages().includes(service.slug)}
      />
    </>
  );
}
