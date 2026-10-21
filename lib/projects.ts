export type Project = {
  slug: string;
  title: string;
  category: string;
  status?: string;
  live: string;
  summary: string;
  images: string[];
  features: string[];
  sections: { name: string; caption: string }[];
};

const images = (slug: string, prefix: string) =>
  Array.from(
    { length: 5 },
    (_, i) => `/projects/${slug}/${prefix}${i + 1}.png`,
  );

export const projects: Project[] = [
  {
    slug: "markazul-bayaan",
    title: "Markazul Bayaan: Juz 'Amma Program",
    category: "Enrolment funnel",
    live: "https://rawdah-rho.vercel.app",
    summary:
      "A website for an online Qur'an memorisation course, with a programme timeline, plan prices and an enrolment form.",
    images: images("markazul-bayaan", "jz"),
    features: [
      "20-week programme timeline",
      "One-to-one teaching details",
      "Parent story carousel",
      "Two-plan pricing",
      "Enrolment form",
    ],
    sections: [
      {
        name: "Programme introduction",
        caption:
          "The opening section presents the course and its main programme details.",
      },
      {
        name: "Five-month programme timeline",
        caption: "The timeline divides the 20-week programme into five stages.",
      },
      {
        name: "One-to-one teaching",
        caption:
          "Separate sections describe the course's one-to-one teaching approach.",
      },
      {
        name: "Parent story carousel",
        caption:
          "A carousel displays the parent stories included on the website.",
      },
      {
        name: "Plan prices and enrolment form",
        caption:
          "The section shows two plans and a form for enrolment details.",
      },
    ],
  },
  {
    slug: "rawdatul-atfaal",
    title: "Rawdatul Atfaal",
    category: "Bilingual school website",
    live: "https://rawdahkids.org",
    summary:
      "A school website in English and Arabic, with course details, fees and consultation booking.",
    images: images("rawdatul-atfaal", "rk"),
    features: [
      "English and Arabic with right-to-left text",
      "9 courses across two programmes",
      "Fees page",
      "Knowledge Hub",
      "Consultation booking",
    ],
    sections: [
      {
        name: "School introduction",
        caption:
          "The opening section presents the school's mission and published figures.",
      },
      {
        name: "Two school programmes",
        caption:
          "Separate sections describe each programme and its curriculum.",
      },
      {
        name: "Nine-course overview",
        caption: "A grid lists the nine courses across the two programmes.",
      },
      {
        name: "Programme fees",
        caption: "Plan controls display the fees for each programme option.",
      },
      {
        name: "Consultation booking",
        caption: "The final section provides a link to request a consultation.",
      },
    ],
  },
  {
    slug: "bryt-kids",
    title: "Bryt Kids",
    category: "Brand website",
    status: "In progress",
    live: "https://brytkids.vercel.app",
    summary:
      "A website for parenting and home education services, with a library, journal and podcast.",
    images: images("bryt-kids", "br"),
    features: [
      "Services and programmes",
      "Library, journal and podcast",
      "Steps to get started",
      "WhatsApp contact link",
    ],
    sections: [
      {
        name: "Parenting service introduction",
        caption:
          "The opening section introduces the parenting service and its focus on faith.",
      },
      {
        name: "Faith, character and confidence",
        caption:
          "Three sections present faith, character and confidence as service themes.",
      },
      {
        name: "Four services",
        caption:
          "Four service sections include labels that identify who each service is for.",
      },
      {
        name: "Programme details",
        caption: "A separate section describes the available programmes.",
      },
      {
        name: "Steps to get started",
        caption:
          "Three steps explain how to contact the service and get started.",
      },
    ],
  },
  {
    slug: "ao-consulting",
    title: "AO Consulting",
    category: "Trilingual consultancy",
    status: "Concept build",
    live: "https://ao-consulting.vercel.app",
    summary:
      "A consultancy website concept in French, Arabic and English for business founders in Algeria.",
    images: images("ao-consulting", "ao"),
    features: [
      "French, Arabic and English",
      "Six service sections",
      "Company creation steps",
      "Capital and interest comparison",
      "WhatsApp contact links",
    ],
    sections: [
      {
        name: "Consultancy introduction",
        caption:
          "The opening section introduces the consultancy and its focus on ethical finance.",
      },
      {
        name: "Six services",
        caption: "A grid presents the six services in separate sections.",
      },
      {
        name: "Company creation steps",
        caption: "A sequence shows the proposed steps to create a company.",
      },
      {
        name: "Capital and interest comparison",
        caption: "A comparison section explains capital and interest.",
      },
      {
        name: "Process and contact",
        caption:
          "The final section shows the proposed process and a WhatsApp contact link.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
