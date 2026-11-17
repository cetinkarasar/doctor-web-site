import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Welcome } from "@/components/sections/Welcome";
import { getAvailableServiceImages } from "@/lib/service-images";
import { siteConfig } from "@/lib/site-config";

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: siteConfig.name,
  description: siteConfig.description,
  medicalSpecialty: ["Obstetric", "Gynecologic"],
  url: siteConfig.url,
  image: `${siteConfig.url}/images/dr-husnu-miral.jpg`,
  telephone: siteConfig.phone.href.replace("tel:", ""),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.line1} ${siteConfig.address.line2}`,
    addressLocality: "Konak Alsancak",
    addressRegion: "İzmir",
    addressCountry: "TR",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Welcome />
      <About />
      <Services availableImages={getAvailableServiceImages()} />
      <Contact />
    </>
  );
}
