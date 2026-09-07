// One entry per commercial category of the site.
// Each entry drives, on its page: the inquiry form (the email subject is the
// category title), the contextual WhatsApp button, and the floating WhatsApp
// button while the visitor is on that route.
//
// `subject` is deliberately NOT translated: it is the string the team filters
// on in the inbox, so it must stay identical in fr / en / ar.

export const serviceCategories = [
  {
    key: "invest",
    to: "/invest",
    label: "Invest",
    subject: "Keyvostra Invest",
    service: "Investissement immobilier",
    variant: "invest",
    eyebrow: "PARLONS DE VOTRE PROJET",
    title: "Écrivez-nous. Nous reprenons depuis votre situation.",
    lead: "Une idée, un terrain, un bien repéré ou un projet déjà engagé : décrivez-le en quelques lignes. Votre message arrive directement chez nous sous l’objet « Keyvostra Invest ».",
    points: [
      "Un premier échange gratuit, sans engagement",
      "Une réponse sous 24 h ouvrées, par email ou WhatsApp",
      "Un seul interlocuteur du premier appel à la livraison",
    ],
    formTitle: "Décrivez votre projet",
    submitLabel: "Envoyer mon projet",
    whatsappMessage:
      "Bonjour Keyvostra, je vous écris au sujet d’un projet d’investissement immobilier. Voici ma situation :",
    whatsappNote:
      "Un message vaut mieux qu’un long formulaire : écrivez-nous sur WhatsApp, nous répondons dans la journée.",
  },
  {
    key: "management",
    to: "/management",
    label: "Management",
    subject: "Keyvostra Management",
    service: "Gestion & médiation immobilière",
    variant: "management",
    eyebrow: "CONFIER LA GESTION",
    title: "Confiez-nous votre bien. Reprenez votre temps.",
    lead: "Dites-nous ce que vous possédez et ce qui vous pèse aujourd’hui. Nous revenons vers vous avec le périmètre de gestion et les honoraires correspondants.",
    points: [
      "Périmètre et honoraires annoncés avant toute signature",
      "Reporting écrit, même si vous vivez à l’étranger",
      "Reprise possible d’un bien déjà loué",
    ],
    formTitle: "Votre bien à gérer",
    submitLabel: "Demander une proposition",
    whatsappMessage:
      "Bonjour Keyvostra, je souhaite confier la gestion de mon bien. Voici de quoi il s’agit :",
    whatsappNote:
      "Propriétaire à l’étranger ? WhatsApp reste le canal le plus simple, quel que soit le fuseau horaire.",
  },
  {
    key: "maintenance",
    to: "/maintenance",
    label: "Maintenance",
    subject: "Keyvostra Maintenance",
    service: "Maintenance & rénovation",
    variant: "maintenance",
    eyebrow: "DÉCRIRE UNE INTERVENTION",
    title: "Une panne, un chantier, un contrat annuel.",
    lead: "Décrivez le problème, la ville et le type de bien. Nous revenons avec un créneau, un intervenant et une estimation avant toute intervention.",
    points: [
      "Devis avant intervention, pièces et main-d’œuvre détaillées",
      "Intervenants vérifiés, chantier suivi jusqu’à la réception",
      "Contrat annuel ou intervention ponctuelle, au choix",
    ],
    formTitle: "Votre demande d’intervention",
    submitLabel: "Demander une intervention",
    whatsappMessage:
      "Bonjour Keyvostra, j’ai besoin d’une intervention de maintenance. Voici le problème et l’adresse du bien :",
    whatsappNote:
      "Urgence (fuite, panne électrique, dégât des eaux) : envoyez une photo sur WhatsApp, c’est le plus rapide.",
  },
  {
    key: "business-plan",
    to: "/business-plan",
    label: "Business Plan",
    subject: "Keyvostra Business Plan",
    service: "Business Plan",
    variant: "business-plan",
    eyebrow: "LANCER L’ÉTUDE",
    title: "Racontez-nous l’idée. Nous écrivons le dossier.",
    lead: "Le secteur, le budget envisagé, l’échéance et à qui le dossier sera présenté : c’est tout ce qu’il nous faut pour cadrer la mission.",
    points: [
      "Un cadrage clair : périmètre, délai et prix avant de commencer",
      "Modèle financier livré modifiable, pas seulement un PDF",
      "Dossier en français ou en anglais, prêt pour la banque",
    ],
    formTitle: "Votre projet à chiffrer",
    submitLabel: "Lancer l’étude",
    whatsappMessage:
      "Bonjour Keyvostra, je souhaite faire réaliser une étude et un business plan. Voici mon projet :",
    whatsappNote:
      "Vous avez déjà un début de dossier ? Envoyez-le sur WhatsApp, nous vous disons ce qu’il manque.",
  },
  {
    key: "rent-sale",
    to: "/rent-sale",
    label: "Rent & Sale",
    subject: "Keyvostra Rent & Sale",
    service: "Rent & Sale",
    variant: "rent-sale",
    eyebrow: "ESTIMER UN BIEN",
    title: "Louer ou vendre. Commençons par une estimation.",
    lead: "Type de bien, ville, surface et ce que vous en attendez. Nous revenons avec une fourchette de prix argumentée, pas une promesse gonflée.",
    points: [
      "Estimation argumentée sur des transactions réelles du quartier",
      "Visites filtrées : dossiers et financement vérifiés avant",
      "Contrat, état des lieux et notaire coordonnés par nous",
    ],
    formTitle: "Votre bien à louer ou à vendre",
    submitLabel: "Demander mon estimation",
    whatsappMessage:
      "Bonjour Keyvostra, je souhaite louer ou vendre un bien. Voici le type de bien, la ville et la surface :",
    whatsappNote:
      "Envoyez quelques photos et la localisation sur WhatsApp : l’estimation revient plus vite.",
  },
];

export const serviceByPath = Object.fromEntries(
  serviceCategories.map((category) => [category.to, category]),
);

// Message used by the floating button outside of a category page.
export const generalWhatsAppMessage =
  "Bonjour Keyvostra, je vous contacte depuis votre site. Voici ma demande :";
