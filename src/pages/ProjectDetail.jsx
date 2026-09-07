import { useTranslation } from "../i18n";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const project = projects.find((item) => item.id === slug);
  if (!project) return <NotFound />;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="project-detail home-page">
      <SEO
        title={`${t(project.title)} — Keyvostra Group`}
        description={t(project.summary)}
        path={project.href}
        image={`https://www.keyvostragroup.com${project.image}`}
      />
      <div className="case-container">
        <Link to="/portfolio" className="case-back">
          <Icon name="arrow_back" /> {t("Toutes les réalisations")}
        </Link>
        <header className="case-heading">
          <p className="eyebrow">
            {t("ÉTUDE DE CAS ·")} {t(project.category).toUpperCase()}
          </p>
          <h1>{t(project.title)}</h1>
          <p>{t(project.summary)}</p>
          <span className="case-place">
            <Icon name="location_on" />
            {t(project.location)}
          </span>
        </header>
        <figure className="case-figure">
          <img
            src={project.image}
            alt={t(project.alt)}
            width="1600"
            height="1067"
            fetchPriority="high"
          />
          <figcaption>
            {t("Photo d’illustration, ne représentant pas le bien réel.")}
            {t(" ")}
            <a href={project.source} target="_blank" rel="noreferrer">
              {t(project.credit)} {t("/ Unsplash ↗")}
            </a>
          </figcaption>
        </figure>
        <div className="case-facts">
          <div>
            <span>{t("LE BIEN")}</span>
            <p>{t(project.property)}</p>
          </div>
          <div>
            <span>{t("LE CLIENT")}</span>
            <p>{t(project.client)}</p>
          </div>
          <div className="case-metric">
            <strong>{t(project.metric)}</strong>
            <span>{t(project.metricLabel)}</span>
          </div>
        </div>
        <div className="case-body">
          <section>
            <p className="eyebrow">{t("01 — LE POINT DE DÉPART")}</p>
            <h2>{t("Le besoin du client.")}</h2>
            <p>{t(project.need)}</p>
          </section>
          <section>
            <p className="eyebrow">{t("02 — NOTRE INTERVENTION")}</p>
            <h2>{t("Un accompagnement concret.")}</h2>
            <div className="case-interventions">
              {project.interventions.map((item, index) => (
                <div key={item.title}>
                  <span>0{t(index + 1)}</span>
                  <div>
                    <h3>{t(item.title)}</h3>
                    <p>{t(item.text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="case-result">
            <p className="eyebrow">{t("03 — LE RÉSULTAT")}</p>
            <h2>{t("La valeur apportée.")}</h2>
            <p>{t(project.result)}</p>
            {project.facts && (
              <div className="case-land-facts">
                {project.facts.map((f) => (
                  <div key={f.label}>
                    <strong>{t(f.value)}</strong>
                    <span>{t(f.label)}</span>
                  </div>
                ))}
              </div>
            )}
            <p className="case-note">{t(project.note)}</p>
          </section>
        </div>
        <div className="case-ending">
          <div>
            <h2>{t("Un projet similaire ?")}</h2>
            <p>{t("Échangeons sur votre bien et vos objectifs.")}</p>
          </div>
          <Link className="kv-button" to="/#contact">
            {t("Parlons de votre projet")} <Icon name="arrow_outward" />
          </Link>
        </div>
        <Link className="case-next" to={next.href}>
          <span>
            {t("PROJET SUIVANT")}
            <strong>{t(next.title)}</strong>
          </span>
          <Icon name="arrow_forward" />
        </Link>
      </div>
    </article>
  );
}
