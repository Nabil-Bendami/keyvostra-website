import { useState } from "react";
import Icon from "./Icon";
import { site } from "../data/siteData";

function Profile({ mobile = false }) {
  return (
    <div className={`showcase-profile ${mobile ? "profile-mobile" : ""}`}>
      <div className="showcase-profile-copy">
        <span className="showcase-brand">
          KEYVOSTRA<span>GROUP</span>
        </span>
        <p className="showcase-profile-kicker">FAISONS CONNAISSANCE</p>
        <h3>
          {site.founder.name}
          <span>.</span>
        </h3>
        <p className="showcase-role">Fondateur de Keyvostra Group</p>
        <span className="showcase-rule" />
        <p className="showcase-profile-description">
          Une vision d’ensemble.
          <br />
          Un engagement à chaque étape.
        </p>
        <a
          className="showcase-linkedin"
          href={site.founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visiter le LinkedIn d’Achraf — ${mobile ? "mobile" : "desktop"} (nouvel onglet)`}
        >
          <span className="linkedin-mark" aria-hidden="true">
            in
          </span>
          <span>Visiter mon LinkedIn</span>
          <Icon name="arrow_outward" />
        </a>
        <p className="showcase-location">
          <Icon name="location_on" /> Casablanca, Maroc
        </p>
      </div>
      <img
        className="showcase-portrait"
        src="/images/founder-explaining-poster.jpg"
        width="720"
        height="1280"
        loading="lazy"
        alt="Portrait de présentation d’Achraf, issu du site"
      />
    </div>
  );
}

export default function FounderShowcase() {
  const [mode, setMode] = useState("desktop");
  return (
    <div className="founder-showcase">
      <div className="showcase-heading">
        <p className="eyebrow">01 — RENCONTREZ LE FONDATEUR</p>
        <h2>
          Une vision. <em>Un visage.</em>
        </h2>
        <p>Découvrez l’homme derrière Keyvostra Group.</p>
      </div>
      <div
        className="device-switch"
        role="group"
        aria-label="Choisir la présentation du profil"
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
            {label}
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
            <span className="browser-address">
              <Icon name="lock" />
              linkedin.com/in/achraf-aitoukrim
            </span>
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
        <span className="status-dot" /> Un premier échange, une relation
        durable.
      </p>
    </div>
  );
}
