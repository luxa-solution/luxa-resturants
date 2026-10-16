import { faqs } from './faqs'
import { site } from './site'

export function buildStructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: `+${site.whatsapp}`,
    image: `${site.url}/apple-icon.png`,
    sameAs: [site.instagram],
    areaServed: [...site.cities],
    address: { '@type': 'PostalAddress', addressCountry: 'NG' },
    priceRange: '₦₦',
    description:
      'Beautiful, fast websites for restaurants in Abuja, Lagos and Ilorin, with menus, WhatsApp ordering, reservations and Google visibility built in.',
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return [localBusiness, faqPage]
}
