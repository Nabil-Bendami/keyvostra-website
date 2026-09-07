import { useTranslation } from "../i18n";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceInquiry from "../components/ServiceInquiry";
import { serviceByPath } from "../data/services";
import "../styles/business-plan.css";

const category = serviceByPath["/business-plan"];

// The table of contents of what is actually delivered.
const chapters = [
  ["01", "Résumé opérationnel", "La synthèse que lit le banquier en premier."],
  ["02", "Le projet et son porteur", "Ce que vous lancez, pourquoi vous, et avec qui."],
  ["03", "Étude de marché", "Demande, concurrence, prix pratiqués, emplacement."],
  ["04", "Stratégie commerciale", "Offre, positionnement, canaux, politique de prix."],
  ["05", "Organisation & moyens", "Équipe, fournisseurs, locaux, calendrier de démarrage."],
  ["06", "Modèle financier", "Investissement, charges, chiffre d’affaires, trésorerie sur 3 ans."],
  ["07", "Scénarios & seuil de rentabilité", "Optimiste, réaliste, dégradé — et le point mort."],
  ["08", "Plan de financement", "Apport, dette, échéancier et dossier bancaire prêt à déposer."],
];

const deliverables = [
  [
    "query_stats",
    "Market Study",
    "Demand, competition, pricing, and location analysis — the evidence that tells you whether the project holds before you commit a dirham or a pound.",
  ],
  [
    "calculate",
    "Financial Model",
    "Three-year projections, cash flow, break-even point, and funding needs — built as an editable model, not a fixed PDF.",
  ],
  [
    "description",
    "Written Business Plan",
    "A complete document — positioning, operations, team, and financials — in French or English.",
  ],
  [
    "handshake",
    "Funding & Presentation",
    "Bank file preparation, investor pitch deck, and coaching before the meeting that decides it.",
  ],
];

const sectors = [
  "Immobilier résidentiel & locatif",
  "Location courte durée & maisons d’hôtes",
  "Agriculture & agro-alimentaire",
  "Commerce de détail & franchise",
  "Restauration & café",
  "Services aux entreprises",
  "Transport & logistique",
  "Création de société au Maroc ou au UK",
];

const process = [
  ["01", "Discovery call", "We listen to the idea, the budget, and the deadline. No document yet."],
  ["02", "Field & market data", "We gather the numbers: demand, competitors, costs, regulation."],
  ["03", "Modelling", "We build the financials and test the scenarios with you."],
  [
    "04",
    "Delivery",
    "You receive the full plan, the model, and the pitch — and we defend it with you.",
  ],
];

const faq = [
  [
    "Combien de temps prend un business plan complet ?",
    "Comptez deux à quatre semaines selon la disponibilité des données du secteur et votre réactivité sur les arbitrages. Le cadrage, lui, se fait dès le premier échange.",
  ],
  [
    "Le dossier est-il accepté par les banques ?",
    "Le dossier est construit pour la lecture bancaire : résumé, prévisionnel chiffré, plan de financement et pièces justificatives. Aucune banque ne garantit un accord à l’avance, mais votre dossier ne sera pas rejeté pour la forme.",
  ],
  [
    "Puis-je modifier le modèle financier après la livraison ?",
    "Oui. Le modèle est livré en tableur, formules apparentes. Vous changez une hypothèse, tout le prévisionnel se recalcule.",
  ],
  [
    "Travaillez-vous hors immobilier ?",
    "Oui. L’immobilier est notre terrain principal, mais nous traitons aussi le commerce, la restauration, l’agricole et les services — au Maroc comme au Royaume-Uni.",
  ],
];

export default function BusinessPlan() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t(
          "Keyvostra Business Plan - Market Study & Business Plan Creation from Scratch",
        )}
        description={t(
          "Market studies, financial projections, and complete business plans built from zero for real estate and entrepreneurial projects in Morocco and the United Kingdom.",
        )}
        path="/business-plan"
      />

      <div className="bp-page">
        {/* Hero — cover page */}
        <section className="bp-hero">
          <div className="bp-cover">
            <p className="bp-cover-meta">
              <span>{t("KEYVOSTRA GROUP")}</span>
              <span>{t("ÉTUDE & BUSINESS PLAN")}</span>
            </p>
            <h1>{t("Your Project, Built From Zero")}</h1>
            <p className="bp-lead">
              {t(
                "You bring the idea — we build everything around it. Market study, financial model, and a complete, bank-ready business plan written from a blank page. For a first investment, a new company, or a real estate operation in Morocco and the United Kingdom.",
              )}
            </p>
            <div className="bp-cover-actions">
              <a href="#demande" className="kv-button bp-button">
                {t("Book a Consultation")}
                <Icon name="arrow_outward" />
              </a>
              <WhatsAppButton
                message={category.whatsappMessage}
                label="Décrire mon idée"
                tone="business-plan"
              />
            </div>
          </div>
          <figure className="bp-cover-visual">
            <img
              src="/images/invest/business-plan.png"
              loading="eager"
              alt={t(
                "Illustration : maquette architecturale, plans et graphiques financiers sur un bureau.",
              )}
              fetchPriority="high"
            />
            <figcaption>
              {t("Visuel de conception · Illustration générée par IA")}
            </figcaption>
          </figure>
        </section>

        {/* Table of contents */}
        <section className="bp-toc" aria-labelledby="bp-toc-title">
          <div className="bp-toc-inner">
            <div className="bp-toc-intro">
              <p className="bp-eyebrow">{t("01 — LE LIVRABLE")}</p>
              <h2 id="bp-toc-title">
                {t("Le sommaire de votre dossier.")}
                <br />
                <em>{t("Écrit, pas rempli.")}</em>
              </h2>
              <p>
                {t(
                  "Voici les huit chapitres que vous recevez. Chacun est rédigé pour votre projet : aucun modèle recopié, aucune page de remplissage.",
                )}
              </p>
              <p className="bp-toc-format">
                <Icon name="description" />
                {t("Document PDF + modèle financier en tableur · FR ou EN")}
              </p>
            </div>
            <ol className="bp-chapters">
              {chapters.map(([number, title, text]) => (
                <li key={number}>
                  <span className="bp-chapter-number">{number}</span>
                  <span className="bp-chapter-title">{t(title)}</span>
                  <span className="bp-chapter-leader" aria-hidden="true" />
                  <span className="bp-chapter-text">{t(text)}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Deliverables */}
        <section className="bp-deliverables">
          <header className="bp-head">
            <p className="bp-eyebrow">{t("02 — CE QUI COMPOSE LA MISSION")}</p>
            <h2>{t("From a Blank Page to a Funded Plan")}</h2>
            <p>
              {t(
                "Every deliverable is written for the people who will read it: your bank, your partners, or your own decision.",
              )}
            </p>
          </header>
          <div className="bp-deliverable-grid">
            {deliverables.map(([icon, title, text]) => (
              <article key={title}>
                <Icon name={icon} fill />
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Sectors */}
        <section className="bp-sectors">
          <div className="bp-sectors-inner">
            <div>
              <p className="bp-eyebrow">{t("03 — SECTEURS TRAITÉS")}</p>
              <h2>{t("L’immobilier d’abord. Pas seulement l’immobilier.")}</h2>
              <p>
                {t(
                  "Un projet n’a pas besoin d’être immobilier pour mériter un dossier sérieux. Voici ceux que nous traitons le plus souvent.",
                )}
              </p>
            </div>
            <ul className="bp-sector-list">
              {sectors.map((sector) => (
                <li key={sector}>
                  <Icon name="arrow_outward" />
                  {t(sector)}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="bp-process">
          <header className="bp-head">
            <p className="bp-eyebrow">{t("04 — LA MÉTHODE")}</p>
            <h2>{t("How We Work")}</h2>
          </header>
          <ol className="bp-process-list">
            {process.map(([step, title, text]) => (
              <li key={step}>
                <span>{t(step)}</span>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </li>
            ))}
          </ol>
          <p className="bp-process-link">
            <Link className="bp-text-link" to="/invest">
              {t("Le business plan fait partie du parcours d’investissement")}
              <Icon name="arrow_outward" />
            </Link>
          </p>
        </section>

        {/* FAQ */}
        <section className="bp-faq">
          <h2>{t("Les questions qu’on nous pose")}</h2>
          <dl>
            {faq.map(([question, answer]) => (
              <div key={question}>
                <dt>{t(question)}</dt>
                <dd>{t(answer)}</dd>
              </div>
            ))}
          </dl>
        </section>

        <ServiceInquiry category={category} />
      </div>
    </>
  );
}
