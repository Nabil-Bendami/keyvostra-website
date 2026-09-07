import { useTranslation } from "../i18n";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { site } from "../data/siteData";

export default function InternationalPresence() {
  const { t } = useTranslation();
  const uk = site.uk;
  return (
    <section
      className="international-section"
      id="international"
      aria-labelledby="international-title"
    >
      <div className="international-layout">
        <div className="international-copy">
          <p className="eyebrow">{t("KEYVOSTRA · MOROCCO & UNITED KINGDOM")}</p>
          <h2 id="international-title">
            {t("Deux pays.")}
            <br />
            <em>{t("La même proximité.")}</em>
          </h2>
          <p>
            {t(
              "Keyvostra vous accompagne au Maroc et au Royaume-Uni. Une présence dans les deux pays, pour échanger sur vos projets immobiliers avec un interlocuteur proche de vous.",
            )}
          </p>
          <div className="international-markets">
            <div>
              <span className="country-code">{t("MA")}</span>
              <div>
                <strong>{t("Maroc")}</strong>
                <small>{t("Sidi Maarouf, Casablanca")}</small>
              </div>
            </div>
            <span className="market-connection" aria-hidden="true">
              ↔
            </span>
            <div>
              <span className="country-code">{t("UK")}</span>
              <div>
                <strong>{t("United Kingdom")}</strong>
                <small>{t("Royaume-Uni")}</small>
              </div>
            </div>
          </div>
          <Link className="text-link" to="/#contact">
            {t("Présentez-nous votre projet")} <Icon name="arrow_outward" />
          </Link>
        </div>
        <article className="uk-founder-card">
          <div className="uk-card-top">
            <span>{t("VOTRE INTERLOCUTEUR AU ROYAUME-UNI")}</span>
            <span className="country-code">{t("UK")}</span>
          </div>
          <span className="uk-monogram" aria-hidden="true">
            {t("AS")}
            <span />
          </span>
          <p className="uk-founder-role">
            {t("COFONDATEUR · KEYVOSTRA GROUP")}
          </p>
          <h3>{t(uk.name)}</h3>
          <p className="uk-founder-job">
            {t("Business Development Associate")}
            <br />
            <span>{t("Independent Contractor")}</span>
          </p>
          <div className="uk-founder-links">
            <a href={uk.phoneHref}>
              <Icon name="call" />
              <span>
                <small>{t("TÉLÉPHONE UK")}</small>
                {t(uk.phone)}
              </span>
              <Icon name="arrow_outward" />
            </a>
            <a href={`mailto:${uk.email}`}>
              <Icon name="mail" />
              <span>
                <small>{t("EMAIL")}</small>
                {t(uk.email)}
              </span>
              <Icon name="arrow_outward" />
            </a>
          </div>
          <p className="uk-founder-location">
            <Icon name="location_on" />
            {t("United Kingdom (UK)")}
          </p>
        </article>
      </div>
    </section>
  );
}
