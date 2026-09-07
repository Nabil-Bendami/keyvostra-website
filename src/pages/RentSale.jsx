import { useTranslation } from "../i18n";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceInquiry from "../components/ServiceInquiry";
import { serviceByPath } from "../data/services";
import "../styles/rent-sale.css";

const category = serviceByPath["/rent-sale"];

// The catalogue of what we actually take on: the point of the page is that a
// visitor recognises their own asset here, whatever it is.
const segments = [
  {
    image: "/images/penthouse-living-room.jpg",
    alt: "Illustration : séjour d’un appartement haut de gamme préparé pour les visites.",
    kicker: "HABITATION",
    title: "Appartements & penthouses",
    text: "Du studio meublé au dernier étage avec terrasse, en location longue durée, courte durée ou à la vente.",
    tags: "Meublé ou vide · Courte & longue durée",
  },
  {
    image: "/images/hero-villa-pool.jpg",
    alt: "Illustration : villa contemporaine avec piscine, représentative des maisons de standing confiées à Keyvostra.",
    kicker: "MAISONS",
    title: "Villas & maisons avec piscine",
    text: "Maisons familiales, villas de standing et résidences secondaires, avec la logistique d’entretien qui va avec.",
    tags: "Entretien & piscine coordonnés",
  },
  {
    image: "/images/invest/villa-courtyard.png",
    alt: "Illustration : demeure en pierre claire avec cour arborée et bassin.",
    kicker: "EXCEPTION",
    title: "Riads, palais & demeures d’exception",
    text: "Biens de caractère et grandes demeures : présentation soignée, discrétion sur la diffusion, acquéreurs qualifiés uniquement.",
    tags: "Diffusion discrète · Visites sur dossier",
  },
  {
    image: "/images/projects/land.jpg",
    alt: "Illustration : vue aérienne de grandes parcelles constructibles.",
    kicker: "FONCIER",
    title: "Terrains & lots constructibles",
    text: "Parcelles isolées, lots de lotissement ou emprises à céder : vérification du statut foncier avant toute mise en avant.",
    tags: "Titre & zonage vérifiés",
  },
  {
    image: "/images/projects/agriculture.jpg",
    alt: "Illustration : parcelles agricoles vues du ciel.",
    kicker: "AGRICOLE",
    title: "Fermes & terres agricoles",
    text: "Domaines, terres irriguées et exploitations à louer ou à céder, avec lecture du potentiel d’exploitation.",
    tags: "Irrigation · Accès · Potentiel",
  },
  {
    image: "/images/office-tower-glass.jpg",
    alt: "Illustration : tour de bureaux vitrée, représentative des surfaces professionnelles.",
    kicker: "PROFESSIONNEL",
    title: "Bureaux, plateaux & locaux commerciaux",
    text: "Plateaux à aménager, locaux en pied d’immeuble et surfaces commerciales, avec baux professionnels adaptés.",
    tags: "Bail commercial · Aménagement",
  },
];

const wideSegment = {
  image: "/images/aerial-neighborhood.jpg",
  alt: "Illustration : vue aérienne d’un quartier résidentiel, représentative des immeubles complets suivis par Keyvostra.",
  kicker: "PATRIMOINE ENTIER",
  title: "Immeubles de rapport & résidences complètes",
  text: "Un immeuble entier, plusieurs lots, ou un portefeuille dispersé sur deux villes : nous prenons l’ensemble, lot par lot, avec un seul reporting.",
};

const steps = [
  ["01", "Estimation", "Visite du bien, comparaison avec les transactions réelles du quartier, fourchette argumentée."],
  ["02", "Dossier & photos", "Photos professionnelles, plan, descriptif écrit et vérification des documents de propriété."],
  ["03", "Diffusion", "Publication multi-plateformes, réseau direct et, pour les biens sensibles, diffusion restreinte."],
  ["04", "Visites filtrées", "Nous recevons, nous qualifions, nous vous transmettons uniquement les dossiers sérieux."],
  ["05", "Contrat & remise", "Négociation, bail ou compromis, état des lieux, coordination du notaire et remise des clés."],
];

const faq = [
  [
    "Combien de temps prend une estimation ?",
    "Le passage sur place se cale sous 72 h dans le Grand Casablanca. La fourchette écrite vous parvient dans les jours qui suivent, avec les biens comparables sur lesquels elle s’appuie.",
  ],
  [
    "Je vis à l’étranger, dois-je me déplacer ?",
    "Non. Nous représentons le bien sur place, envoyons photos et comptes rendus écrits, et n’engageons rien sans votre accord. La signature peut se faire par procuration.",
  ],
  [
    "Puis-je vous confier un bien déjà en ligne ailleurs ?",
    "Oui. Nous reprenons le dossier, refaisons la présentation si nécessaire, et vous disons franchement si le prix affiché explique l’absence de visites.",
  ],
  [
    "Que se passe-t-il après la signature ?",
    "Pour une location, vous pouvez basculer le bien vers Keyvostra Management. Pour une vente, nous suivons le dossier jusqu’à l’acte définitif chez le notaire.",
  ],
];

export default function RentSale() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t(
          "Keyvostra Rent & Sale - Rent or Sell Your Property in Morocco & the UK",
        )}
        description={t(
          "Property valuation, professional listing, qualified viewings, negotiation, and secure contracts — Keyvostra rents and sells your property in Morocco and the United Kingdom.",
        )}
        path="/rent-sale"
      />

      <div className="rs-page">
        {/* Hero */}
        <section className="rs-hero">
          <div className="rs-hero-copy">
            <p className="rs-kicker">
              <span />
              {t("LOUER · VENDRE · AU MAROC ET AU ROYAUME-UNI")}
            </p>
            <h1>{t("Rent It. Sell It. Without the Noise.")}</h1>
            <p className="rs-lead">
              {t(
                "Whether you want a reliable tenant or the right buyer, we handle the whole chain: honest valuation, professional presentation, filtered visits, negotiation, and a contract that protects you — in Morocco and in the United Kingdom.",
              )}
            </p>
            <div className="rs-hero-actions">
              <a href="#demande" className="kv-button">
                {t("Estimate My Property")}
                <Icon name="arrow_outward" />
              </a>
              <WhatsAppButton
                message={category.whatsappMessage}
                label="Estimer par WhatsApp"
                tone="rent-sale"
              />
            </div>
            <p className="rs-hero-note">
              {t(
                "Envoyez trois photos et la localisation : la première fourchette de prix part souvent le jour même.",
              )}
            </p>
          </div>
          <figure className="rs-hero-visual">
            <img
              src="/images/penthouse-living-room.jpg"
              alt={t(
                "Penthouse living room prepared for viewings, representative of properties Keyvostra rents and sells.",
              )}
              fetchPriority="high"
            />
            <figcaption>
              {t("Visuel d’illustration · Bien non contractuel")}
            </figcaption>
          </figure>
        </section>

        {/* What we take on — the catalogue */}
        <section className="rs-segments" aria-labelledby="rs-segments-title">
          <header className="rs-section-head">
            <p className="rs-eyebrow">{t("01 — CE QUE NOUS PRENONS EN CHARGE")}</p>
            <h2 id="rs-segments-title">
              {t("Un studio, une ferme, un palais.")}
              <br />
              <em>{t("Le même sérieux.")}</em>
            </h2>
            <p>
              {t(
                "Nous ne nous limitons pas à l’appartement de centre-ville. Voici les biens que nous louons et vendons réellement, au Maroc comme au Royaume-Uni.",
              )}
            </p>
          </header>
          <div className="rs-grid">
            {segments.map((segment) => (
              <article className="rs-card" key={segment.title}>
                <div className="rs-card-photo">
                  <img src={segment.image} loading="lazy" alt={t(segment.alt)} />
                  <span className="rs-card-kicker">{t(segment.kicker)}</span>
                </div>
                <div className="rs-card-copy">
                  <h3>{t(segment.title)}</h3>
                  <p>{t(segment.text)}</p>
                  <small>{t(segment.tags)}</small>
                </div>
              </article>
            ))}
            <article className="rs-card rs-card-wide">
              <div className="rs-card-photo">
                <img
                  src={wideSegment.image}
                  loading="lazy"
                  alt={t(wideSegment.alt)}
                />
                <span className="rs-card-kicker">{t(wideSegment.kicker)}</span>
              </div>
              <div className="rs-card-copy">
                <h3>{t(wideSegment.title)}</h3>
                <p>{t(wideSegment.text)}</p>
                <Link className="rs-text-link" to="/management">
                  {t("Voir aussi la gestion locative")}
                  <Icon name="arrow_outward" />
                </Link>
              </div>
            </article>
          </div>
          <p className="rs-grid-note">
            <Icon name="info" />
            {t(
              "Votre bien n’est dans aucune case ? Décrivez-le : nous vous dirons franchement si nous sommes les bons interlocuteurs.",
            )}
          </p>
        </section>

        {/* Two tracks */}
        <section className="rs-tracks" aria-labelledby="rs-tracks-title">
          <div className="rs-tracks-head">
            <p className="rs-eyebrow">{t("02 — DEUX MÉTIERS DISTINCTS")}</p>
            <h2 id="rs-tracks-title">{t("Two Tracks, One Standard")}</h2>
            <p>
              {t(
                "Renting and selling ask for different work. Both get the same discipline and the same single point of contact.",
              )}
            </p>
          </div>
          <div className="rs-tracks-grid">
            <div className="rs-track">
              <span className="rs-track-mark">
                <Icon name="key" fill />
              </span>
              <h3>{t("Renting")}</h3>
              <ol>
                {[
                  "Rental valuation based on real local transactions",
                  "Listing, photography, and multi-platform publication",
                  "Tenant screening: income, guarantees, references",
                  "Lease drafting, inventory, and handover",
                  "Optional handover to Keyvostra Management for the day-to-day",
                ].map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ol>
            </div>
            <div className="rs-track rs-track-sell">
              <span className="rs-track-mark">
                <Icon name="sell" fill />
              </span>
              <h3>{t("Selling")}</h3>
              <ol>
                {[
                  "Sale price positioning, not an inflated promise",
                  "Home staging advice and presentation of the asset",
                  "Qualified buyers only — financing checked before visits",
                  "Negotiation and offer management on your behalf",
                  "Notary coordination through to the final deed",
                ].map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="rs-process" aria-labelledby="rs-process-title">
          <div className="rs-process-inner">
            <div className="rs-process-head">
              <p className="rs-eyebrow">{t("03 — LE DÉROULÉ")}</p>
              <h2 id="rs-process-title">
                {t("Cinq étapes.")}
                <br />
                <em>{t("Aucune surprise.")}</em>
              </h2>
              <p>
                {t(
                  "Vous savez à chaque instant où en est votre bien, qui l’a visité et ce qui a été proposé.",
                )}
              </p>
            </div>
            <ol className="rs-timeline">
              {steps.map(([number, title, text]) => (
                <li key={number}>
                  <span>{number}</span>
                  <h3>{t(title)}</h3>
                  <p>{t(text)}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Owners abroad */}
        <section className="rs-abroad">
          <img
            src="/images/interior-minimalist-living.jpg"
            loading="lazy"
            alt={t(
              "Minimalist interior staged for a viewing, illustrating Keyvostra's presentation standard for rentals and sales.",
            )}
          />
          <div className="rs-abroad-copy">
            <p className="rs-eyebrow">{t("04 — PROPRIÉTAIRES À DISTANCE")}</p>
            <h2>{t("Owners Abroad Welcome")}</h2>
            <p>
              {t(
                "Living in the UK with a property in Morocco — or the reverse? We represent you on site, with written reporting at every step.",
              )}
            </p>
            <ul>
              {[
                "Comptes rendus écrits après chaque visite",
                "Photos et vidéos de l’état réel du bien",
                "Signature possible par procuration",
              ].map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  {t(item)}
                </li>
              ))}
            </ul>
            <WhatsAppButton
              message="Bonjour Keyvostra, je vis à l’étranger et je possède un bien au Maroc. Je souhaite en parler."
              label="Parler à un interlocuteur"
              note="Décalage horaire ou pas : écrivez, nous répondons dès l’ouverture."
              tone="rent-sale"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="rs-faq" aria-labelledby="rs-faq-title">
          <h2 id="rs-faq-title">{t("Les questions qu’on nous pose")}</h2>
          <div className="rs-faq-list">
            {faq.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>
                  <span>{t(question)}</span>
                  <Icon name="add" />
                </summary>
                <p>{t(answer)}</p>
              </details>
            ))}
          </div>
        </section>

        <ServiceInquiry category={category} />
      </div>
    </>
  );
}
