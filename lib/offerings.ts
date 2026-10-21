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
    blurb: "A clear place for your menu, location and contact details.",
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
    blurb: "More room to explain your food, services and restaurant.",
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
    blurb: "A custom direction for a restaurant with a broader brief.",
    features: [
      "Custom visual direction",
      "Multiple content sections and pages",
      "Project-specific functions",
      "Support options in your quote",
    ],
  },
];
