export const site = {
  name: "Luxa",
  legalName: "Luxa Web Studio",
  url: "https://eat.luxasolution.com",
  whatsapp: "2347047494586",
  email: "luxadigitalsolutions@gmail.com",
  instagram: "https://www.instagram.com/luxa.build/",
  cities: ["Abuja", "Lagos", "Ilorin"],
} as const;

export const whatsappMessage = (restaurant = "") =>
  encodeURIComponent(
    `Hello Luxa. I would like to discuss a website for ${restaurant || "my restaurant"}.`,
  );

export const navItems = [
  ["The idea", "#demo"],
  ["Our work", "#work"],
  ["Scope & cost", "#packages"],
  ["The process", "#process"],
  ["Questions", "#faq"],
] as const;

export const waLink = (restaurant = "") =>
  `https://wa.me/${site.whatsapp}?text=${whatsappMessage(restaurant)}`;

export type SiteConfig = typeof site;

export default site;
