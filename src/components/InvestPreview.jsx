import { Link } from "react-router-dom";
import { useTranslation } from "../i18n";
import Icon from "./Icon";
import "../styles/invest.css";

export default function InvestPreview() {
  const { t } = useTranslation();
  return (
    <section
      className="invest-preview invest-reveal"
      aria-labelledby="invest-preview-title"
    >
      <div className="invest-preview-image">
        <img
          src="/images/invest/villa-courtyard.png"
          width="1536"
          height="1024"
          loading="lazy"
          alt={t(
            "Illustration : villa contemporaine en pierre claire, cour arborée et bassin.",
          )}
        />
        <span className="invest-preview-mark" aria-hidden="true">
          A <i>→</i> Z
        </span>
      </div>
      <div className="invest-preview-copy">
        <p className="invest-kicker">
          {t("KEYVOSTRA INVEST · UN ACCOMPAGNEMENT COMPLET")}
        </p>
        <h2 id="invest-preview-title">
          {t("Votre ambition.")}
          <br />
          <em>{t("Notre engagement, de A à Z.")}</em>
        </h2>
        <p>
          {t(
            "Vous avez le projet. Nous réunissons les expertises pour le faire avancer : investissement, business plan et démarches juridiques, avec un suivi à chaque étape.",
          )}
        </p>
        <div className="invest-preview-tags">
          <span>{t("Suivi juridique")}</span>
          <span>{t("Business plan")}</span>
          <span>{t("De A à Z")}</span>
        </div>
        <Link className="kv-button" to="/invest">
          {t("Découvrir notre accompagnement")}
          <Icon name="arrow_outward" />
        </Link>
        <small>{t("Visuel de conception · Illustration générée par IA")}</small>
      </div>
    </section>
  );
}
