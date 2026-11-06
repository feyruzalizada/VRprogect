import type { ServiceCard } from "@/lib/services";
import { siteDescription, siteName, sitePhone, siteSocial, siteUrl } from "@/lib/site";

export default function JsonLd({ services }: { services: ServiceCard[] }) {
  const org = `${siteUrl}/#organization`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": org,
        name: siteName,
        url: `${siteUrl}/`,
        logo: `${siteUrl}/images/vr_logo.png`,
        image: `${siteUrl}/images/og.jpg`,
        description: siteDescription,
        telephone: sitePhone,
        address: { "@type": "PostalAddress", addressLocality: "Bakı", addressCountry: "AZ" },
        areaServed: { "@type": "Country", name: "Azərbaycan" },
        sameAs: siteSocial,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: sitePhone,
          contactType: "customer service",
          availableLanguage: ["az", "ru"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Xidmətlər",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteName,
        inLanguage: "az",
        publisher: { "@id": org },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
