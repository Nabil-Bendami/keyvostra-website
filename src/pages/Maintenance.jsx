import { useTranslation } from "../i18n";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceInquiry from "../components/ServiceInquiry";
import { serviceByPath } from "../data/services";
import "../styles/maintenance.css";

const category = serviceByPath["/maintenance"];

// The trade catalogue: a visitor should find their own problem in this list.
const trades = [
  [
    "MT-01",
    "bolt",
    "Électricité & courants faibles",
    "Tableau, mise aux normes, éclairage, interphone, domotique et remise en service après coupure.",
  ],
  [
    "MT-02",
    "water_drop",
    "Plomberie & sanitaire",
    "Fuites, canalisations, chauffe-eau, robinetterie, pompes et recherche d’infiltration.",
  ],
  [
    "MT-03",
    "mode_fan",
    "Climatisation & ventilation",
    "Entretien saisonnier des splits et gainables, recharge, filtres, VMC et désembouage.",
  ],
  [
    "MT-04",
    "format_paint",
    "Peinture & finitions",
    "Reprises après dégât, enduits, laque, boiseries et remise en état entre deux locataires.",
  ],
  [
    "MT-05",
    "carpenter",
    "Menuiserie & serrurerie",
    "Portes, placards, volets, vitrages, serrures et remplacement de cylindres après départ.",
  ],
  [
    "MT-06",
    "pool",
    "Piscine & espaces verts",
    "Traitement de l’eau, filtration, hivernage, taille, arrosage automatique et entretien courant.",
  ],
  [
    "MT-07",
    "security",
    "Sécurité & accès",
    "Caméras, alarmes, contrôle d’accès, portails motorisés et vérification périodique.",
  ],
  [
    "MT-08",
    "cleaning_services",
    "Nettoyage & remise en état",
    "Nettoyage fin de chantier, remise en état avant visite et entretien profond des surfaces nobles.",
  ],
];

const priorities = [
  [
    "URGENCE",
    "Sous 24 h",
    "Fuite active, panne électrique totale, porte ou serrure hors service, dégât des eaux.",
    "Passage sécurisé d’abord, réparation définitive ensuite.",
  ],
  [
    "STANDARD",
    "Sous 72 h",
    "Panne d’équipement, désordre gênant mais non dangereux, petite réparation.",
    "Devis envoyé avant intervention.",
  ],
  [
    "PLANIFIÉ",
    "Date convenue",
    "Entretien saisonnier, rénovation, remise en état entre deux locataires.",
    "Planning et intervenants annoncés à l’avance.",
  ],
];

const formulas = [
  [
    "Intervention ponctuelle",
    "Un problème, une intervention. Diagnostic, devis, réparation et photo de fin de chantier.",
    ["Devis avant travaux", "Pièces et main-d’œuvre détaillées", "Compte rendu photo"],
  ],
  [
    "Contrat annuel",
    "Un programme d’entretien préventif sur l’année, avec passages planifiés et priorité en cas d’urgence.",
    ["Visites périodiques programmées", "Astreinte urgences", "Rapport annuel de l’état du bien"],
  ],
  [
    "Remise en état locative",
    "Le bien est repris entre deux locataires : réparations, peinture, nettoyage, prêt pour les visites.",
    ["Chiffrage global", "Un seul chantier coordonné", "Livraison avant la relocation"],
  ],
];

export default function Maintenance() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t("Keyvostra Maintenance - Premium Property Care in Casablanca")}
        description={t(
          "Preventive and reactive maintenance for premium Casablanca properties: electrical & HVAC, plumbing integrity, and restorative finishing that protects your investment.",
        )}
        path="/maintenance"
      />

      <div className="mt-page">
        {/* Hero — work order header */}
        <section className="mt-hero">
          <div className="mt-hero-sheet">
            <p className="mt-ref">
              <span>{t("KEYVOSTRA MAINTENANCE")}</span>
              <span>{t("CASABLANCA · 7J/7 EN URGENCE")}</span>
            </p>
            <h1>{t("Impeccable Maintenance for Premium Assets.")}</h1>
            <p className="mt-lead">
              {t(
                "Protecting your real estate investments with rigorous preventive maintenance and rapid technical repair services in Casablanca. We ensure your properties maintain their luxury standard.",
              )}
            </p>
            <div className="mt-hero-actions">
              <a href="#demande" className="kv-button mt-button">
                {t("Book a Consultation")}
                <Icon name="arrow_outward" />
              </a>
              <a href="#catalogue" className="mt-ghost-link">
                {t("Explore Services")}
                <Icon name="south" />
              </a>
            </div>
            <WhatsAppButton
              message={category.whatsappMessage}
              label="Signaler une urgence"
              note="Fuite, panne, dégât des eaux : une photo sur WhatsApp suffit pour démarrer."
              tone="maintenance"
              className="mt-hero-wa"
            />
          </div>
          <figure className="mt-hero-visual">
            <img
              src="/images/interior-minimalist-living.jpg"
              alt={t(
                "Pristine, well-maintained luxury interior in a Casablanca villa, kept to Keyvostra Maintenance's preventive care standard.",
              )}
              fetchPriority="high"
            />
          </figure>
        </section>

        {/* Trade catalogue */}
        <section id="catalogue" className="mt-catalogue">
          <header className="mt-head">
            <p className="mt-eyebrow">{t("01 — CATALOGUE D’INTERVENTIONS")}</p>
            <h2>{t("Comprehensive Technical Solutions")}</h2>
            <p>
              {t(
                "Huit familles de métiers, des intervenants vérifiés, un seul numéro à composer. Vous ne cherchez plus l’artisan : nous le pilotons.",
              )}
            </p>
          </header>
          <ul className="mt-trades">
            {trades.map(([code, icon, title, text]) => (
              <li key={code}>
                <span className="mt-code">{code}</span>
                <Icon name={icon} />
                <div>
                  <h3>{t(title)}</h3>
                  <p>{t(text)}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Response commitments */}
        <section className="mt-priorities">
          <header className="mt-head mt-head-invert">
            <p className="mt-eyebrow">{t("02 — DÉLAIS D’INTERVENTION")}</p>
            <h2>{t("Trois niveaux. Trois délais annoncés.")}</h2>
            <p>
              {t(
                "Une demande est classée dès sa réception. Vous savez tout de suite dans quelle case elle tombe, et quand quelqu’un se déplace.",
              )}
            </p>
          </header>
          <div className="mt-priority-grid">
            {priorities.map(([level, delay, scope, note]) => (
              <article key={level} className={`mt-priority mt-priority-${level.toLowerCase().replace(/[^a-z]/g, "")}`}>
                <p className="mt-priority-level">{t(level)}</p>
                <p className="mt-priority-delay">{t(delay)}</p>
                <p className="mt-priority-scope">{t(scope)}</p>
                <p className="mt-priority-note">
                  <Icon name="bolt" />
                  {t(note)}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Formulas */}
        <section className="mt-formulas">
          <header className="mt-head">
            <p className="mt-eyebrow">{t("03 — TROIS FAÇONS DE TRAVAILLER")}</p>
            <h2>{t("Ponctuel, annuel, ou remise en état.")}</h2>
            <p>
              {t(
                "Vous n’avez pas besoin d’un contrat pour nous appeler une fois. Et si le bien demande un suivi, la formule annuelle coûte moins cher qu’une panne ignorée.",
              )}
            </p>
          </header>
          <div className="mt-formula-grid">
            {formulas.map(([title, text, items]) => (
              <article key={title}>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Finishing band */}
        <section className="mt-finishing">
          <img
            src="/images/marble-lobby.jpg"
            loading="lazy"
            alt={t(
              "Pristine marble finishes in a Casablanca property after restorative maintenance work by Keyvostra Maintenance.",
            )}
          />
          <div className="mt-finishing-copy">
            <p className="mt-eyebrow">{t("04 — FINITIONS")}</p>
            <h2>{t("Restorative Finishing")}</h2>
            <p>
              {t(
                "Detail-oriented aesthetic repairs ensuring properties look as pristine as the day they were built.",
              )}
            </p>
            <p className="mt-finishing-note">
              {t(
                "Marbre, bois, laiton, béton ciré : les surfaces nobles ne se nettoient pas comme le reste. Nous adaptons produits et gestes à chaque matériau.",
              )}
            </p>
            <Link className="mt-text-link" to="/management">
              {t("Voir aussi la gestion locative")}
              <Icon name="arrow_outward" />
            </Link>
          </div>
        </section>

        <ServiceInquiry category={category} />
      </div>
    </>
  );
}
