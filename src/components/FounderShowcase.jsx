import { useTranslation } from "../i18n";
import { useState } from "react";
import Icon from "./Icon";
import { site } from "../data/siteData";

function Profile({ mobile = false }) {
  const { t } = useTranslation();
  return (
    <div className={`showcase-profile ${mobile ? "profile-mobile" : ""}`}>
      <div className="showcase-profile-copy">
        <span className="showcase-brand">
          {t("KEYVOSTRA")}
          <span>{t("GROUP")}</span>
        </span>
        <p className="showcase-profile-kicker">{t("FAISONS CONNAISSANCE")}</p>
        <h3>
          {t(site.founder.name)}
          <span>.</span>
        </h3>
        <p className="showcase-role">{t("Fondateur de Keyvostra Group")}</p>
        <span className="showcase-rule" />
        <p className="showcase-profile-description">
          {t("Une vision d’ensemble.")}
          <br />
          {t("Un engagement à chaque étape.")}
        </p>
        <a
          className="showcase-linkedin"
          href={site.founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("Visiter le profil LinkedIn d’Achraf (nouvel onglet)")}
        >
          <span className="linkedin-mark" aria-hidden="true">
            {t("in")}
          </span>
          <span>{t("Visiter mon LinkedIn")}</span>
          <Icon name="arrow_outward" />
        </a>
        <p className="showcase-location">
          <Icon name="location_on" /> {t("Casablanca, Maroc")}
        </p>
      </div>
      <img
        className="showcase-portrait"
        src="/images/founder-explaining-poster.jpg"
        width="720"
        height="1280"
        loading="lazy"
        alt={t("Portrait de présentation d’Achraf, issu du site")}
      />
    </div>
  );
}

export default function FounderShowcase() {
  const { t } = useTranslation();
  const [mode, setMode] = useState("desktop");
  return (
    <div className="founder-showcase">
      <div className="showcase-heading">
        <p className="eyebrow">{t("01 — RENCONTREZ LE FONDATEUR")}</p>
        <h2>
          {t("Une vision.")} <em>{t("Un visage.")}</em>
        </h2>
        <p>{t("Découvrez l’homme derrière Keyvostra Group.")}</p>
      </div>
      <div
        className="device-switch"
        role="group"
        aria-label={t("Choisir la présentation du profil")}
      >
        {[
          ["desktop", "Desktop", "desktop_windows"],
          ["mobile", "Mobile", "smartphone"],
        ].map(([value, label, icon]) => (
          <button
            key={value}
            type="button"
            aria-pressed={mode === value}
            aria-controls="founder-devices"
            onClick={() => setMode(value)}
          >
            <Icon name={icon} />
            {t(label)}
          </button>
        ))}
      </div>
      <div id="founder-devices" className={`device-scene mode-${mode}`}>
        <div className="showcase-orbit" aria-hidden="true" />
        <div
          className="browser-device"
          inert={mode === "mobile" ? true : undefined}
          aria-hidden={mode === "mobile" ? true : undefined}
        >
          <div className="browser-toolbar">
            <span className="browser-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <a
              className="browser-address"
              href={site.founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(
                "Visiter le profil LinkedIn d’Achraf (nouvel onglet)",
              )}
            >
              <Icon name="lock" />
              linkedin.com/in/achraf-aitoukrim-444452266
            </a>
            <Icon name="more_horiz" />
          </div>
          <Profile />
        </div>
        <div className="showcase-phone">
          <div className="showcase-phone-screen">
            <span className="showcase-notch" aria-hidden="true" />
            <Profile mobile />
            <span className="showcase-home-bar" aria-hidden="true" />
          </div>
        </div>
      </div>
      <p className="showcase-footnote">
        <span className="status-dot" />{" "}
        {t("Un premier échange, une relation durable.")}
      </p>
    </div>
  );
}
