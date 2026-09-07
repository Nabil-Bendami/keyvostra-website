// Central content store for Keyvostra Group.
// Edit copy, links, and listings here rather than inside components/pages.

export const site = {
  name: "Keyvostra Group",
  tagline: "Authoritative. Architectural. Serene.",
  founder: {
    name: "Achraf Aitoukrim",
    title: "Founder & Managing Director",
    linkedin: "https://www.linkedin.com/in/achraf-aitoukrim-444452266/",
  },
  uk: {
    name: "Abdelmounaim Sraitah",
    phone: "+44 77 5901 7924",
    phoneHref: "tel:+447759017924",
    email: "keyvostrauk.advisory@gmail.com",
    country: "United Kingdom (UK)",
  },
  contact: {
    // Morocco lines, in the order we want them shown.
    phones: [
      { label: "+212 684 414 018", href: "tel:+212684414018" },
      { label: "+212 777 884 649", href: "tel:+212777884649" },
    ],
    email: "contact@keyvostra.com",
    address: "Sidi Maarouf, Casablanca, Morocco",
    // The line that also carries WhatsApp. `number` is the wa.me form.
    whatsapp: {
      number: "212777884649",
      label: "+212 777 884 649",
    },
  },
  social: {
    whatsapp: "#",
    website: "#",
    share: "#",
  },
};

/** wa.me deep link carrying a pre-written first message. */
export const whatsappLink = (message) =>
  `https://wa.me/${site.contact.whatsapp.number}` +
  (message ? `?text=${encodeURIComponent(message)}` : "");

// Reachability, as an ordered list: icon tile, value, and the line under it
// that says what this channel is actually for.
export const contactChannels = [
  {
    key: "phone-main",
    icon: "call",
    value: site.contact.phones[0].label,
    href: site.contact.phones[0].href,
    note: "Ligne principale",
    dir: "ltr",
  },
  {
    key: "whatsapp",
    icon: "whatsapp",
    value: site.contact.whatsapp.label,
    href: null,
    note: "WhatsApp · réponse dans la journée",
    dir: "ltr",
  },
  {
    key: "email",
    icon: "mail",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "Réponse sous 24 h ouvrées",
    dir: "ltr",
  },
  {
    key: "address",
    icon: "location_on",
    value: "Sidi Maarouf, Casablanca",
    href: "https://www.google.com/maps/search/?api=1&query=Sidi+Maarouf+Casablanca",
    external: true,
    note: "Rendez-vous sur place, sur convocation",
  },
  {
    key: "hours",
    icon: "schedule",
    value: "Du lundi au samedi, 9h — 19h",
    href: null,
    note: "Urgences maintenance : 7j/7 par WhatsApp",
  },
];

export const ukChannels = [
  {
    key: "uk-phone",
    icon: "call",
    value: site.uk.phone,
    href: site.uk.phoneHref,
    note: site.uk.name,
    dir: "ltr",
  },
  {
    key: "uk-email",
    icon: "mail",
    value: site.uk.email,
    href: `mailto:${site.uk.email}`,
    note: "Royaume-Uni · Développement commercial",
    dir: "ltr",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Invest", to: "/invest" },
  { label: "Management", to: "/management" },
  { label: "Maintenance", to: "/maintenance" },
  { label: "Portfolio", to: "/portfolio" },
];

export const footerLinks = {
  navigation: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
  ],
  services: [
    { label: "Invest", to: "/invest" },
    { label: "Management", to: "/management" },
    { label: "Maintenance", to: "/maintenance" },
    { label: "Business Plan", to: "/business-plan" },
    { label: "Rent & Sale", to: "/rent-sale" },
  ],
  contact: [{ label: "Contact Us", to: "/contact" }],
};

export const coreServices = [
  {
    key: "invest",
    icon: "trending_up",
    title: "Invest",
    description:
      "Strategic acquisition and disposition of prime real estate assets. We identify high-yield opportunities aligned with your legacy goals.",
    cta: "Explore Strategy",
    to: "/invest",
  },
  {
    key: "management",
    icon: "corporate_fare",
    title: "Management",
    description:
      "End-to-end operational oversight. Ensuring optimal tenant relations, rigorous compliance, and sustained asset appreciation.",
    cta: "View Approach",
    to: "/management",
  },
  {
    key: "maintenance",
    icon: "engineering",
    title: "Maintenance",
    description:
      "Proactive and reactive facility management. Protecting your physical investment with architectural precision and high-grade materials.",
    cta: "Discover Standards",
    to: "/maintenance",
  },
  {
    key: "business-plan",
    icon: "query_stats",
    title: "Business Plan",
    description:
      "Market study, financial modelling, and a complete business plan written from zero — through to the bank file and the investor pitch.",
    cta: "Build the Plan",
    to: "/business-plan",
  },
  {
    key: "rent-sale",
    icon: "key",
    title: "Rent & Sale",
    description:
      "Valuation, presentation, qualified viewings, negotiation, and secure contracts — for owners renting out or selling, in Morocco and the UK.",
    cta: "Estimate a Property",
    to: "/rent-sale",
  },
];

// Add only approved client testimonials here. The homepage shows commitments until then.
export const testimonials = [];

// Shared, client-approved cases for the homepage and portfolio.
export { projects as approvedRealizations } from "./projects";
