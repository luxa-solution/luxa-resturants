export type Project = {
  slug: string; title: string; category: string; status?: string; live: string; summary: string; images: string[]; features: string[]; sections: { name: string; caption: string }[];
}

const images = (slug: string, prefix: string) => Array.from({ length: 5 }, (_, i) => `/projects/${slug}/${prefix}${i + 1}.png`)

export const projects: Project[] = [
  { slug: 'markazul-bayaan', title: "Markazul Bayaan: Juz 'Amma Program", category: 'Enrolment funnel', live: 'https://rawdah-rho.vercel.app', summary: 'A focused enrolment journey for an online Qur’an memorisation course.', images: images('markazul-bayaan', 'jz'), features: ['20-week programme timeline', 'One-on-one value proposition', 'Social proof carousel', 'Two-plan pricing', 'Enrolment form'], sections: [
    { name: 'Hero with programme highlights', caption: 'Lead with the promise, proof and practical details so the right parent knows they are in the right place.' }, { name: 'Structured 5-month journey', caption: 'A visual timeline turns a long commitment into five clear, reassuring stages.' }, { name: 'Why one-on-one', caption: 'Benefit-led cards make the differentiator easy to scan on mobile.' }, { name: 'Social proof carousel', caption: 'Parent stories create confidence without interrupting the enrolment path.' }, { name: 'Pricing and enrolment form', caption: 'Two clear plans and a short form make the next step feel simple.' },
  ] },
  { slug: 'rawdatul-atfaal', title: 'Rawdatul Atfaal', category: 'Bilingual school website', live: 'https://rawdahkids.org', summary: 'Where the roots of faith and the wings of knowledge grow together.', images: images('rawdatul-atfaal', 'rk'), features: ['Bilingual EN/AR with RTL', '9 courses across two programmes', 'Transparent fees page', 'Knowledge Hub', 'Consultation booking'], sections: [
    { name: 'Hero with mission and stats', caption: 'A clear mission and useful numbers help families orient themselves immediately.' }, { name: 'Dual curriculum cards', caption: 'The two programmes are separated into friendly, comparable paths.' }, { name: 'All 9 courses at a glance', caption: 'A structured grid turns a broad offer into an approachable overview.' }, { name: 'Transparent pricing block', caption: 'Plan toggles answer a high-intent question without hiding the detail.' }, { name: 'Final enrolment CTA', caption: 'A consultation invitation gives families a warm, low-pressure next step.' },
  ] },
  { slug: 'bryt-kids', title: 'Bryt Kids', category: 'Brand website', status: 'In progress', live: 'https://brytkids.vercel.app', summary: 'A warm digital home for intentional parenting and homeschool support.', images: images('bryt-kids', 'br'), features: ['Services and programmes', 'Library, journal and podcast', 'Getting started flow', 'WhatsApp shortcut'], sections: [
    { name: 'Raise your child intentionally', caption: 'The opening message establishes an encouraging, faith-led point of view.' }, { name: 'Faith, character, confidence', caption: 'Pillars make the brand belief system memorable at a glance.' }, { name: 'Four service cards', caption: 'Best-for tags help each family self-select the right support.' }, { name: 'Programmes block', caption: 'Programmes are given enough space to feel substantial, not buried.' }, { name: 'Getting started journey', caption: 'Three steps replace uncertainty with a calm, actionable route forward.' },
  ] },
  { slug: 'ao-consulting', title: 'AO Consulting', category: 'Trilingual consultancy', status: 'Concept build', live: 'https://ao-consulting.vercel.app', summary: 'An ethical-finance advisory concept for founders in Algeria.', images: images('ao-consulting', 'ao'), features: ['French/Arabic/English', 'Six service cards', 'Company creation stepper', 'Capital vs interest comparison', 'WhatsApp-first CTAs'], sections: [
    { name: 'Ethical finance hero', caption: 'A point of view-led hero gives a complex consultancy a human entry point.' }, { name: 'Six-service grid', caption: 'Service grouping creates clarity before the visitor needs to compare details.' }, { name: 'Company-creation stepper', caption: 'A guided process makes an unfamiliar service feel navigable.' }, { name: 'Capital vs interest comparison', caption: 'Plain-language comparison supports understanding without overselling.' }, { name: 'Method timeline and CTA', caption: 'The final sequence connects the method to a direct conversation.' },
  ] },
]

export function getProject(slug: string) { return projects.find((project) => project.slug === slug) }

