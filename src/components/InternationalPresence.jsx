import { Link } from "react-router-dom";
import Icon from "./Icon";
import { site } from "../data/siteData";

export default function InternationalPresence() {
  const uk = site.uk;
  return (
    <section
      className="international-section"
      id="international"
      aria-labelledby="international-title"
    >
      <div className="international-layout">
        <div className="international-copy">
          <p className="eyebrow">KEYVOSTRA · MOROCCO & UNITED KINGDOM</p>
          <h2 id="international-title">
            Deux pays.
            <br />
            <em>La même proximité.</em>
          </h2>
          <p>
            Keyvostra vous accompagne au Maroc et au Royaume-Uni. Une présence
            dans les deux pays, pour échanger sur vos projets immobiliers avec
            un interlocuteur proche de vous.
          </p>
          <div className="international-markets">
            <div>
              <span className="country-code">MA</span>
              <div>
                <strong>Maroc</strong>
                <small>Sidi Maarouf, Casablanca</small>
              </div>
            </div>
            <span className="market-connection" aria-hidden="true">
              ↔
            </span>
            <div>
              <span className="country-code">UK</span>
              <div>
                <strong>United Kingdom</strong>
                <small>Royaume-Uni</small>
              </div>
            </div>
          </div>
          <Link className="text-link" to="/#contact">
            Présentez-nous votre projet <Icon name="arrow_outward" />
          </Link>
        </div>
        <article className="uk-founder-card">
          <div className="uk-card-top">
            <span>VOTRE INTERLOCUTEUR AU ROYAUME-UNI</span>
            <span className="country-code">UK</span>
          </div>
          <span className="uk-monogram" aria-hidden="true">
            AS
            <span />
          </span>
          <p className="uk-founder-role">COFONDATEUR · KEYVOSTRA GROUP</p>
          <h3>{uk.name}</h3>
          <p className="uk-founder-job">
            Business Development Associate
            <br />
            <span>Independent Contractor</span>
          </p>
          <div className="uk-founder-links">
            <a href={uk.phoneHref}>
              <Icon name="call" />
              <span>
                <small>TÉLÉPHONE UK</small>
                {uk.phone}
              </span>
              <Icon name="arrow_outward" />
            </a>
            <a href={`mailto:${uk.email}`}>
              <Icon name="mail" />
              <span>
                <small>EMAIL</small>
                {uk.email}
              </span>
              <Icon name="arrow_outward" />
            </a>
          </div>
          <p className="uk-founder-location">
            <Icon name="location_on" />
            United Kingdom (UK)
          </p>
        </article>
      </div>
    </section>
  );
}
