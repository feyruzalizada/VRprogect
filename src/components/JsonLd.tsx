import type { ServiceCard } from "@/lib/services";
import { langHome, type Lang } from "@/i18n/config";
import { siteName, sitePhone, siteSocial, siteUrl } from "@/lib/site";

export default function JsonLd({
  services,
  lang,
  description,
  catalog,
}: {
  services: ServiceCard[];
  lang: Lang;
  description: string;
  catalog: string;
}) {
  const pageUrl = `${siteUrl}${langHome[lang] === "/" ? "/" : langHome[lang]}`;
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
        description,
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
          name: catalog,
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: pageUrl,
        name: siteName,
        inLanguage: lang,
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
