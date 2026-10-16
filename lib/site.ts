export const site = {
  name: 'Luxa',
  legalName: 'Luxa Web Studio',
  url: 'https://luxasolutions.com',
  whatsapp: '',
  email: '',
  instagram: 'https://instagram.com/luxasolutions',
  cities: ['Abuja', 'Lagos', 'Ilorin'],
} as const

export const whatsappMessage = (restaurant = '') => encodeURIComponent(`Hi Luxa, I’d like a free website audit for ${restaurant || 'my restaurant'}.`)

export const navItems = [
  ['Why a website', '#why'], ['Work', '#work'], ['Process', '#process'], ['Packages', '#packages'], ['FAQ', '#faq'],
] as const

export const waLink = (restaurant = '') => `https://wa.me/?text=${whatsappMessage(restaurant)}`

export type SiteConfig = typeof site

export default site

