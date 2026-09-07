import { Link } from "react-router-dom";
import { useTranslation } from "../i18n";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import MotionReveal from "../components/MotionReveal";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceInquiry from "../components/ServiceInquiry";
import { serviceByPath } from "../data/services";
import "../styles/invest.css";

const category = serviceByPath["/invest"];

const stages = [
  [
    "01",
    "Votre vision",
    "Nous définissons ensemble vos objectifs, votre budget et votre calendrier pour poser les bases du projet.",
    "Objectifs · Budget · Stratégie",
  ],
  [
    "02",
    "L’étude & le business plan",
    "Nous étudions le marché et la faisabilité, puis construisons votre business plan : coûts, revenus prévisionnels, trésorerie et besoins de financement.",
    "Étude de marché · Prévisionnel · Financement",
  ],
  [
    "03",
    "Les démarches juridiques",
    "Nous suivons votre dossier administratif et coordonnons les vérifications, les contrats et les formalités avec les notaires et les professionnels compétents.",
    "Documents · Contrats · Formalités",
  ],
  [
    "04",
    "La concrétisation",
    "Recherche du bien, négociation, acquisition et coordination de l’aménagement : nous suivons les intervenants et l’avancement de chaque étape.",
    "Acquisition · Coordination · Aménagement",
  ],
  [
    "05",
    "Le suivi dans la durée",
    "Une fois le projet lancé, nous vous accompagnons dans sa mise en location, sa gestion et son entretien, selon vos besoins.",
    "Mise en location · Gestion · Entretien",
  ],
];

export default function Invest() {
  const { t } = useTranslation();
  return (
    <MotionReveal>
      <SEO
        title={t("Keyvostra Invest — Votre projet immobilier de A à Z")}
        description={t(
          "De l’idée à l’exploitation : Keyvostra accompagne votre investissement, votre business plan et vos démarches administratives et juridiques au Maroc et au Royaume-Uni.",
        )}
        path="/invest"
        image="https://www.keyvostragroup.com/images/invest/villa-courtyard.png"
      />
      <div className="invest-page">
        <section
          className="invest-opening invest-shell"
          aria-labelledby="invest-title"
        >
          <div className="invest-opening-copy">
            <p className="invest-kicker">
              <span />
              {t("KEYVOSTRA INVEST · UN ACCOMPAGNEMENT COMPLET")}
            </p>
            <h1 id="invest-title">
              {t("Votre ambition.")}
              <br />
              <em>{t("Notre engagement, de A à Z.")}</em>
            </h1>
          </div>
          <div className="invest-opening-aside">
            <p>
              {t(
                "Vous avez le projet. Nous réunissons les expertises pour le faire avancer : investissement, business plan et démarches juridiques, avec un suivi à chaque étape.",
              )}
            </p>
            <Link className="kv-button" to="/contact">
              {t("Donnons vie à votre projet")}
              <Icon name="arrow_outward" />
            </Link>
          </div>
        </section>

        <figure className="invest-hero-visual">
          <img
            src="/images/invest/villa-courtyard.png"
            width="1536"
            height="1024"
            fetchPriority="high"
            alt={t(
              "Illustration : villa contemporaine en pierre claire, cour arborée et bassin.",
            )}
          />
          <div className="invest-hero-shade" />
          <div className="invest-hero-caption">
            <div>
              <span className="invest-overline">
                {t("DE LA PREMIÈRE IDÉE AU PROJET CONCRÉTISÉ")}
              </span>
              <p>
                {t("Un projet. Un interlocuteur.")}
                <br />
                <em>{t("Une vision d’ensemble.")}</em>
              </p>
            </div>
            <a className="invest-journey-link" href="#parcours">
              <span>{t("Explorer le parcours")}</span>
              <Icon name="south" />
            </a>
          </div>
          <figcaption>
            {t("Visuel de conception · Illustration générée par IA")}
          </figcaption>
        </figure>

        <div className="invest-principles invest-shell invest-reveal">
          {[
            ["route", "De A à Z"],
            ["balance", "Suivi juridique"],
            ["query_stats", "Business plan"],
            ["handshake", "Un interlocuteur dédié"],
          ].map(([icon, label]) => (
            <div key={icon}>
              <Icon name={icon} />
              <span>{t(label)}</span>
            </div>
          ))}
        </div>

        <section
          className="invest-shell invest-foundations"
          aria-labelledby="invest-foundations-title"
        >
          <header className="invest-section-heading invest-reveal">
            <p className="invest-kicker">{t("01 — DES BASES SOLIDES")}</p>
            <h2 id="invest-foundations-title">
              {t("Chaque détail compte.")}
              <br />
              <em>{t("Nous les relions tous.")}</em>
            </h2>
            <p>
              {t(
                "Le potentiel d’un investissement se prépare : un cadre clair, des chiffres étudiés et les bonnes démarches, dans le bon ordre.",
              )}
            </p>
          </header>
          <article className="invest-editorial invest-reveal" id="juridique">
            <figure className="invest-editorial-photo">
              <img
                src="/images/invest/legal-advisory.png"
                width="1536"
                height="1024"
                loading="lazy"
                alt={t(
                  "Illustration : examen d’un dossier immobilier et de plans dans un bureau.",
                )}
              />
              <figcaption>
                <span>01 /</span>
                {t("LE CADRE JURIDIQUE & ADMINISTRATIF")}
              </figcaption>
            </figure>
            <div className="invest-editorial-copy">
              <span className="invest-chapter">01</span>
              <p className="invest-kicker">
                {t("CLARIFIER · VÉRIFIER · COORDONNER")}
              </p>
              <h3>
                {t("Les démarches aussi,")}
                <br />
                <em>{t("on s’en occupe.")}</em>
              </h3>
              <p>
                {t(
                  "Nous prenons en charge le suivi de vos démarches administratives et juridiques. Votre dossier avance avec les notaires et les professionnels compétents, selon la nature de votre projet.",
                )}
              </p>
              <ul>
                {[
                  "Suivi des documents et vérifications du bien",
                  "Coordination des contrats et des formalités",
                  "Accompagnement administratif et fiscal",
                ].map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    {t(item)}
                  </li>
                ))}
              </ul>
              <Link className="invest-text-link" to="/contact">
                {t("Échanger sur mon dossier")}
                <Icon name="arrow_outward" />
              </Link>
            </div>
          </article>
          <article
            className="invest-editorial invest-editorial-reverse invest-reveal"
            id="business-plan"
          >
            <figure className="invest-editorial-photo">
              <img
                src="/images/invest/business-plan.png"
                width="1536"
                height="1024"
                loading="lazy"
                alt={t(
                  "Illustration : maquette architecturale, plans et graphiques financiers sur un bureau.",
                )}
              />
              <figcaption>
                <span>02 /</span>
                {t("L’ÉTUDE & LE BUSINESS PLAN")}
              </figcaption>
            </figure>
            <div className="invest-editorial-copy">
              <span className="invest-chapter">02</span>
              <p className="invest-kicker">
                {t("ÉTUDIER · CHIFFRER · STRUCTURER")}
              </p>
              <h3>
                {t("Votre idée mérite")}
                <br />
                <em>{t("un plan solide.")}</em>
              </h3>
              <p>
                {t(
                  "Nous élaborons votre business plan depuis zéro : une étude de marché, un modèle financier et un dossier structuré pour éclairer vos décisions et présenter votre projet à vos partenaires.",
                )}
              </p>
              <ul>
                {[
                  "Étude de marché et analyse de faisabilité",
                  "Budget, trésorerie et scénarios de rentabilité",
                  "Dossier bancaire et présentation aux investisseurs",
                ].map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    {t(item)}
                  </li>
                ))}
              </ul>
              <Link className="invest-text-link" to="/business-plan">
                {t("Découvrir le business plan")}
                <Icon name="arrow_outward" />
              </Link>
            </div>
          </article>
        </section>

        <section
          className="invest-journey"
          id="parcours"
          aria-labelledby="journey-title"
        >
          <div className="invest-shell invest-journey-grid">
            <div className="invest-journey-intro invest-reveal">
              <p className="invest-kicker">{t("02 — VOTRE PARCOURS")}</p>
              <h2 id="journey-title">
                {t("À vos côtés.")}
                <br />
                <em>{t("À chaque étape.")}</em>
              </h2>
              <p>
                {t(
                  "De la réflexion à la mise en œuvre, puis à la gestion : découvrez comment nous suivons votre projet de A à Z.",
                )}
              </p>
              <div className="invest-az" aria-hidden="true">
                <span>A</span>
                <i />
                <span>Z</span>
              </div>
              <Link className="invest-text-link" to="/contact">
                {t("Construisons mon projet")}
                <Icon name="arrow_outward" />
              </Link>
            </div>
            <div className="invest-steps">
              {stages.map(([number, title, body, tags], index) => (
                <details
                  className="invest-step invest-reveal"
                  key={number}
                  open={index === 0}
                >
                  <summary>
                    <span className="invest-step-number">{number}</span>
                    <h3>{t(title)}</h3>
                    <Icon name="add" />
                  </summary>
                  <div className="invest-step-content">
                    <p>{t(body)}</p>
                    <small>{t(tags)}</small>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="invest-closing invest-shell invest-reveal">
          <span className="invest-kicker">
            {t("LA SUITE S’ÉCRIT ENSEMBLE")}
          </span>
          <h2>
            {t("Parlons de ce que")}
            <br />
            <em>{t("vous voulez construire.")}</em>
          </h2>
          <p>
            {t(
              "Une idée, un terrain, un bien ou un projet déjà engagé : commençons par votre situation et vos objectifs.",
            )}
          </p>
          <div className="invest-closing-actions">
            <a className="kv-button" href="#demande">
              {t("Donnons vie à votre projet")}
              <Icon name="arrow_outward" />
            </a>
            <WhatsAppButton
              message={category.whatsappMessage}
              label="Écrire sur WhatsApp"
              tone="invest"
            />
          </div>
          <small>{t("Maroc & Royaume-Uni.")}</small>
        </section>

        <ServiceInquiry category={category} />
      </div>
    </MotionReveal>
  );
}
