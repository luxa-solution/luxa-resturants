export type Package = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
};
export const packages: Package[] = [
  {
    name: "Starter Menu Site",
    price: "₦150,000 – ₦500,000",
    blurb:
      "For a restaurant that needs its menu and contact details on one page.",
    features: [
      "One-page website",
      "Menu and opening hours",
      "WhatsApp contact link",
      "Phone and desktop layouts",
    ],
  },
  {
    name: "Growth",
    price: "₦500,000 – ₦1,500,000",
    blurb:
      "For a restaurant that needs separate pages for its food, services and enquiries.",
    features: [
      "Pages based on your scope",
      "Food and restaurant galleries",
      "Dedicated enquiry sections",
      "Search metadata and location details",
    ],
  },
  {
    name: "Signature Brand Experience",
    price: "₦1,500,000+",
    blurb:
      "For a restaurant that needs a custom visual direction and more detailed website functions.",
    features: [
      "Custom visual direction",
      "Multiple content sections and pages",
      "Project-specific functions",
      "Support options in your quote",
    ],
  },
];
