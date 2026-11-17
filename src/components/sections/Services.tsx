"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { useDictionary } from "@/lib/i18n";
import { services, type ServiceSlug } from "@/lib/services";

export function Services({ availableImages }: { availableImages: ServiceSlug[] }) {
  const t = useDictionary();

  return (
    <section
      id="hizmetler"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blush/60 to-white py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[30rem] rounded-full bg-violet-100/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.servicesSection.eyebrow}
          title={t.servicesSection.title}
          description={t.servicesSection.description}
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} hasImage={availableImages.includes(service.slug)} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
