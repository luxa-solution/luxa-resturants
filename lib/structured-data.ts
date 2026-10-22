import { faqs } from "./faqs";
import { site } from "./site";

export function buildStructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: `+${site.whatsapp}`,
    image: `${site.url}/apple-icon.png`,
    sameAs: [site.instagram],
    areaServed: [...site.cities],
    address: { "@type": "PostalAddress", addressCountry: "NG" },
    priceRange: "₦₦",
    description:
      "Custom websites for restaurants in Ilorin, Lagos and Abuja, with clear menus, location details and WhatsApp contact. Scope and costs are agreed per project.",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return [localBusiness, faqPage];
}
