import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.id === slug);
  if (!project) return <NotFound />;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="project-detail home-page">
      <SEO
        title={`${project.title} — Keyvostra Group`}
        description={project.summary}
        path={project.href}
        image={`https://www.keyvostragroup.com${project.image}`}
      />
      <div className="case-container">
        <Link to="/portfolio" className="case-back">
          <Icon name="arrow_back" /> Toutes les réalisations
        </Link>
        <header className="case-heading">
          <p className="eyebrow">
            ÉTUDE DE CAS · {project.category.toUpperCase()}
          </p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <span className="case-place">
            <Icon name="location_on" />
            {project.location}
          </span>
        </header>
        <figure className="case-figure">
          <img
            src={project.image}
            alt={project.alt}
            width="1600"
            height="1067"
            fetchPriority="high"
          />
          <figcaption>
            Photo d’illustration, ne représentant pas le bien réel.{" "}
            <a href={project.source} target="_blank" rel="noreferrer">
              {project.credit} / Unsplash ↗
            </a>
          </figcaption>
        </figure>
        <div className="case-facts">
          <div>
            <span>LE BIEN</span>
            <p>{project.property}</p>
          </div>
          <div>
            <span>LE CLIENT</span>
            <p>{project.client}</p>
          </div>
          <div className="case-metric">
            <strong>{project.metric}</strong>
            <span>{project.metricLabel}</span>
          </div>
        </div>
        <div className="case-body">
          <section>
            <p className="eyebrow">01 — LE POINT DE DÉPART</p>
            <h2>Le besoin du client.</h2>
            <p>{project.need}</p>
          </section>
          <section>
            <p className="eyebrow">02 — NOTRE INTERVENTION</p>
            <h2>Un accompagnement concret.</h2>
            <div className="case-interventions">
              {project.interventions.map((item, index) => (
                <div key={item.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="case-result">
            <p className="eyebrow">03 — LE RÉSULTAT</p>
            <h2>La valeur apportée.</h2>
            <p>{project.result}</p>
            {project.facts && (
              <div className="case-land-facts">
                {project.facts.map((f) => (
                  <div key={f.label}>
                    <strong>{f.value}</strong>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            )}
            <p className="case-note">{project.note}</p>
          </section>
        </div>
        <div className="case-ending">
          <div>
            <h2>Un projet similaire ?</h2>
            <p>Échangeons sur votre bien et vos objectifs.</p>
          </div>
          <Link className="kv-button" to="/#contact">
            Parlons de votre projet <Icon name="arrow_outward" />
          </Link>
        </div>
        <Link className="case-next" to={next.href}>
          <span>
            PROJET SUIVANT<strong>{next.title}</strong>
          </span>
          <Icon name="arrow_forward" />
        </Link>
      </div>
    </article>
  );
}
