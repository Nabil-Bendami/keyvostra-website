import { useTranslation } from "../i18n";
import Icon from "./Icon";
import { site } from "../data/siteData";

export default function FounderPhone() {
  const { t } = useTranslation();
  return (
    <div className="founder-phone-stage">
      <div
        className="founder-phone"
        aria-label={t("Présentation LinkedIn d’Achraf")}
      >
        <div className="phone-screen">
          <div className="phone-status" aria-hidden="true">
            <span>9:41</span>
            <span className="phone-island" />
            <span className="phone-status-icons">
              <Icon name="signal_cellular_alt" />
              <Icon name="wifi" />
              <span className="phone-battery" />
            </span>
          </div>
          <div className="phone-app-bar">
            <span className="linkedin-mark" aria-hidden="true">
              {t("in")}
            </span>
            <span>{t("Profil professionnel")}</span>
            <Icon name="public" />
          </div>
          <div className="phone-profile-cover">
            <span>
              {t("KEYVOSTRA")}
              <small>{t("G R O U P")}</small>
            </span>
            <Icon name="architecture" />
          </div>
          <div className="phone-profile-content">
            <img
              className="phone-avatar"
              src="/images/founder-explaining-poster.jpg"
              alt={t("Portrait de présentation d’Achraf, issu du site")}
              width="112"
              height="112"
              loading="lazy"
            />
            <span className="phone-profile-label">
              {t("FAISONS CONNAISSANCE")}
            </span>
            <h3>{t(site.founder.name)}</h3>
            <p className="phone-profile-role">
              {t("Fondateur · Keyvostra Group")}
            </p>
            <p className="phone-profile-location">{t("Casablanca, Maroc")}</p>
            <div className="phone-company">
              <span className="phone-company-icon">
                <Icon name="apartment" />
              </span>
              <span>
                {t("Keyvostra Group")}
                <small>{t("Invest · Management · Maintenance")}</small>
              </span>
            </div>
            <a
              className="phone-linkedin-button"
              href={site.founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(
                "Visiter le profil LinkedIn d’Achraf (nouvel onglet)",
              )}
            >
              <span className="linkedin-mark" aria-hidden="true">
                {t("in")}
              </span>
              {t("Visiter mon LinkedIn")}
              <Icon name="arrow_outward" />
            </a>
            <div className="phone-about">
              <h4>{t("Une vision, un engagement.")}</h4>
              <p>
                {t(
                  "Accompagner votre patrimoine immobilier à chaque étape, avec proximité et transparence.",
                )}
              </p>
            </div>
            <p className="phone-profile-note">
              {t("Retrouvez mon parcours sur LinkedIn.")}
            </p>
          </div>
          <div className="phone-home-indicator" aria-hidden="true" />
        </div>
      </div>
      <p className="phone-caption">
        <span className="status-dot" /> {t("RENCONTRONS-NOUS SUR LINKEDIN")}
      </p>
    </div>
  );
}
