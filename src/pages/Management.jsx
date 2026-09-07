import { useTranslation } from "../i18n";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceInquiry from "../components/ServiceInquiry";
import { serviceByPath } from "../data/services";
import "../styles/management.css";

const category = serviceByPath["/management"];

const lifecycle = [
  [
    "01",
    "Targeted Marketing",
    "We position your property to attract high-caliber tenants through professional photography, targeted digital campaigns, and exclusive network outreach in the corporate sector.",
    "Photos · Annonces · Réseau direct",
  ],
  [
    "02",
    "Rigorous Screening",
    "Comprehensive background checks, financial verification, and employment history review to ensure long-term stability and reliability.",
    "Revenus · Garanties · Références",
  ],
  [
    "03",
    "Bail & entrée dans les lieux",
    "Rédaction du bail, état des lieux photographié, relevé des compteurs et remise des clés : tout est daté et archivé.",
    "Bail · État des lieux · Compteurs",
  ],
  [
    "04",
    "Active Maintenance",
    "24/7 proactive and reactive maintenance coordination using our vetted network of premium contractors.",
    "Astreinte · Devis · Suivi de chantier",
  ],
  [
    "05",
    "Transparent Financials",
    "Real-time access to statements, automated rent collection, and detailed quarterly performance reports to keep you informed without the operational headache.",
    "Encaissement · Relances · Reporting",
  ],
];

// What the fee actually covers, said plainly, versus what is quoted separately.
const scope = [
  ["Recherche et sélection du locataire", true],
  ["Rédaction du bail et état des lieux", true],
  ["Encaissement des loyers et relances", true],
  ["Coordination des petites réparations", true],
  ["Reporting écrit et relevé de charges", true],
  ["Représentation face au syndic", true],
  ["Travaux de rénovation et gros œuvre", false],
  ["Ameublement et équipement du bien", false],
  ["Procédure contentieuse et recouvrement judiciaire", false],
];

const assets = [
  [
    "/images/projects/residential.jpg",
    "Illustration : intérieur lumineux d’un logement meublé mis en gestion.",
    "Appartements meublés & vides",
  ],
  [
    "/images/projects/management.jpg",
    "Illustration : appartement aménagé représentant la gestion résidentielle.",
    "Résidences & locations meublées",
  ],
  [
    "/images/aerial-neighborhood.jpg",
    "Illustration : vue aérienne d’un quartier résidentiel avec plusieurs immeubles.",
    "Immeubles entiers & lots multiples",
  ],
  [
    "/images/office-tower-glass.jpg",
    "Illustration : tour de bureaux vitrée représentant les surfaces professionnelles gérées.",
    "Bureaux & locaux professionnels",
  ],
];

const reporting = [
  ["Chaque mois", "Relevé des loyers encaissés, impayés éventuels, dépenses engagées."],
  ["Chaque trimestre", "Rapport de performance : occupation, rendement net, points de vigilance."],
  ["À chaque incident", "Photo, devis, décision demandée — rien n’est engagé sans votre accord au-delà du seuil convenu."],
];

export default function Management() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t("Keyvostra Management - Property Management in Casablanca")}
        description={t(
          "Effortless, transparent property management in Casablanca: targeted marketing, rigorous tenant screening, active maintenance coordination, and real-time financial reporting.",
        )}
        path="/management"
      />

      <div className="mg-page">
        {/* Hero — dark control room */}
        <section className="mg-hero">
          <div className="mg-hero-copy">
            <p className="mg-kicker">
              {t("KEYVOSTRA MANAGEMENT · CASABLANCA & UK")}
            </p>
            <h1>{t("Effortless Property Management")}</h1>
            <p>
              {t(
                "Maximize your returns while minimizing your involvement. We handle everything from rigorous tenant screening to seamless daily maintenance with total transparency.",
              )}
            </p>
            <div className="mg-hero-actions">
              <a href="#demande" className="kv-button mg-button">
                {t("Book a Consultation")}
                <Icon name="arrow_outward" />
              </a>
              <a href="#lifecycle" className="mg-ghost-link">
                {t("Our Process")}
                <Icon name="south" />
              </a>
            </div>
          </div>
          <div className="mg-hero-panel">
            <img
              src="/images/interior-minimalist-living.jpg"
              alt={t(
                "Bright, minimalist luxury apartment interior in Casablanca managed by Keyvostra Management.",
              )}
              fetchPriority="high"
            />
            <dl className="mg-hero-stats">
              <div>
                <dt>{t("Interlocuteur")}</dt>
                <dd>{t("Un seul, nommé")}</dd>
              </div>
              <div>
                <dt>{t("Reporting")}</dt>
                <dd>{t("Écrit, mensuel")}</dd>
              </div>
              <div>
                <dt>{t("Astreinte")}</dt>
                <dd>{t("Urgences 7j/7")}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Lifecycle rail */}
        <section id="lifecycle" className="mg-lifecycle">
          <header className="mg-head">
            <p className="mg-eyebrow">{t("01 — LE CYCLE DE GESTION")}</p>
            <h2>{t("The Management Lifecycle")}</h2>
            <p>
              {t(
                "A systematic, transparent approach designed for absolute peace of mind and optimized yield.",
              )}
            </p>
          </header>
          <ol className="mg-rail">
            {lifecycle.map(([number, title, text, tags]) => (
              <li key={number}>
                <span className="mg-rail-number">{number}</span>
                <div>
                  <h3>{t(title)}</h3>
                  <p>{t(text)}</p>
                  <small>{t(tags)}</small>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Scope matrix */}
        <section className="mg-scope">
          <div className="mg-scope-inner">
            <header className="mg-head mg-head-light">
              <p className="mg-eyebrow">{t("02 — LE PÉRIMÈTRE, SANS ZONE GRISE")}</p>
              <h2>{t("Ce qui est inclus. Ce qui ne l’est pas.")}</h2>
              <p>
                {t(
                  "Les mauvaises surprises en gestion viennent presque toujours d’un périmètre flou. Voici le nôtre, avant même de parler d’honoraires.",
                )}
              </p>
            </header>
            <ul className="mg-matrix">
              {scope.map(([item, included]) => (
                <li key={item} className={included ? "is-in" : "is-out"}>
                  <Icon name={included ? "check_circle" : "receipt_long"} />
                  <span>{t(item)}</span>
                  <small>{t(included ? "Inclus" : "Sur devis")}</small>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Assets managed */}
        <section className="mg-assets">
          <header className="mg-head">
            <p className="mg-eyebrow">{t("03 — CE QUE NOUS GÉRONS")}</p>
            <h2>{t("Un lot, un immeuble, un portefeuille.")}</h2>
            <p>
              {t(
                "La gestion ne se limite pas à l’appartement loué nu : nous suivons aussi les meublés, les immeubles complets et les surfaces professionnelles.",
              )}
            </p>
          </header>
          <div className="mg-assets-strip">
            {assets.map(([image, alt, label]) => (
              <figure key={label}>
                <img src={image} loading="lazy" alt={t(alt)} />
                <figcaption>{t(label)}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Reporting cadence */}
        <section className="mg-reporting">
          <div className="mg-reporting-inner">
            <div className="mg-reporting-copy">
              <p className="mg-eyebrow">{t("04 — CE QUE VOUS RECEVEZ")}</p>
              <h2>{t("Vous ne demandez jamais de nouvelles.")}</h2>
              <p>
                {t(
                  "Le propriétaire qui doit relancer son gestionnaire a déjà perdu. Le rythme est fixé à l’avance et tenu.",
                )}
              </p>
              <WhatsAppButton
                message={category.whatsappMessage}
                label="Demander un exemple de reporting"
                note="Nous vous envoyons un modèle de relevé mensuel anonymisé."
                tone="management"
              />
            </div>
            <ul className="mg-reporting-list">
              {reporting.map(([when, what]) => (
                <li key={when}>
                  <strong>{t(when)}</strong>
                  <p>{t(what)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Guarantees */}
        <section className="mg-guarantee">
          <div className="mg-guarantee-copy">
            <p className="mg-eyebrow">{t("05 — NOS ENGAGEMENTS")}</p>
            <h2>{t("The Keyvostra Guarantee")}</h2>
            <p>
              {t(
                "We align our success with yours. Our management philosophy is built on absolute accountability and optimized yield protection.",
              )}
            </p>
            <ul>
              {[
                [
                  "Income Continuity",
                  "Strategies designed to minimize vacancy periods between tenancies.",
                ],
                [
                  "Asset Preservation",
                  "Regular inspections to maintain property value and prevent costly repairs.",
                ],
                [
                  "Legal Compliance",
                  "Strict adherence to local real estate regulations and robust lease structuring.",
                ],
              ].map(([title, text]) => (
                <li key={title}>
                  <Icon name="check_circle" />
                  <div>
                    <h4>{t(title)}</h4>
                    <p>{t(text)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link className="mg-text-link" to="/maintenance">
              {t("Voir aussi la maintenance technique")}
              <Icon name="arrow_outward" />
            </Link>
          </div>
          <img
            src="/images/facade-glass-steel.jpg"
            loading="lazy"
            alt={t(
              "Close-up of a modern glass and steel building facade in Casablanca, reflecting Keyvostra Management's asset preservation standards.",
            )}
          />
        </section>

        <ServiceInquiry category={category} />
      </div>
    </>
  );
}
