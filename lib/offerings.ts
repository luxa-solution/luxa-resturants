export type Package = {
  name: string
  price: string
  blurb: string
  features: string[]
  popular?: boolean
}

export const packages: Package[] = [
  {
    name: 'Starter Menu Site',
    price: '₦150,000 – ₦500,000',
    blurb: 'A focused digital home for your menu and contact details.',
    features: ['One-page website', 'Digital menu', 'WhatsApp CTA', 'Mobile-first build'],
  },
  {
    name: 'Growth',
    price: '₦500,000 – ₦1,500,000',
    blurb: 'The conversion-ready website for a growing restaurant.',
    features: ['Everything in Starter', 'Reservations / enquiry flow', 'Google visibility setup', 'Menu update guidance'],
    popular: true,
  },
  {
    name: 'Signature Brand Experience',
    price: '₦1,500,000+',
    blurb: 'A richer story for a restaurant ready to stand apart.',
    features: ['Everything in Growth', 'Custom brand direction', 'Multiple pages', 'Ongoing support options'],
  },
]
