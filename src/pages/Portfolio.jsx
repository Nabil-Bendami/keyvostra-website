import { useTranslation } from "../i18n";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import { projects } from "../data/projects";
const filters = [
  ["all", "Tous les projets"],
  ["invest", "Investissement"],
  ["management", "Gestion"],
  ["advisory", "Conseil agricole"],
];
export default function Portfolio() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  return (
    <div className="project-index home-page case-container">
      <SEO
        title={t("Nos réalisations — Keyvostra Group")}
        description={t(
          "Quatre études de cas : investissement résidentiel, gestion immobilière, structuration foncière et conseil agricole.",
        )}
        path="/portfolio"
      />
      <p className="eyebrow">{t("KEYVOSTRA GROUP · NOS RÉALISATIONS")}</p>
      <h1>
        {t("Des projets.")}
        <br />
        <em>{t("Des réponses concrètes.")}</em>
      </h1>
      <p className="project-index-intro">
        {t(
          "Découvrez les missions présentées par Keyvostra, de l’acquisition d’un appartement à la structuration d’un projet foncier ou agricole.",
        )}
      </p>
      <div
        className="portfolio-filters"
        aria-label={t("Filtrer les réalisations")}
      >
        {filters.map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={filter === key}
            className={filter === key ? "selected" : ""}
            onClick={() => setFilter(key)}
          >
            {t(label)}
          </button>
        ))}
      </div>
      <p className="project-image-notice">
        {t(
          "Les photos sont des illustrations. Les descriptions et résultats ont été communiqués par Keyvostra Group.",
        )}
      </p>
      <div className="case-grid">
        {projects
          .filter((p) => filter === "all" || p.service === filter)
          .map((p) => (
            <Link className="case-card" to={p.href} key={p.id}>
              <div className="case-card-image">
                <img
                  src={p.image}
                  alt={t(p.alt)}
                  width="800"
                  height="600"
                  loading="lazy"
                />
                <span>{t(p.category)}</span>
                <small>{t("PHOTO D’ILLUSTRATION")}</small>
              </div>
              <div className="case-card-copy">
                <p>{t(p.location)}</p>
                <h2>{t(p.title)}</h2>
                <p>{t(p.summary)}</p>
                <span className="case-card-link">
                  {t("Découvrir le projet")} <Icon name="arrow_outward" />
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
