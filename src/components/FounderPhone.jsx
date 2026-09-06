import Icon from "./Icon";
import { site } from "../data/siteData";

export default function FounderPhone() {
  return (
    <div className="founder-phone-stage">
      <div
        className="founder-phone"
        aria-label="Présentation LinkedIn d’Achraf"
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
              in
            </span>
            <span>Profil professionnel</span>
            <Icon name="public" />
          </div>
          <div className="phone-profile-cover">
            <span>
              KEYVOSTRA<small>G R O U P</small>
            </span>
            <Icon name="architecture" />
          </div>
          <div className="phone-profile-content">
            <img
              className="phone-avatar"
              src="/images/founder-explaining-poster.jpg"
              alt="Portrait de présentation d’Achraf, issu du site"
              width="112"
              height="112"
              loading="lazy"
            />
            <span className="phone-profile-label">FAISONS CONNAISSANCE</span>
            <h3>{site.founder.name}</h3>
            <p className="phone-profile-role">Fondateur · Keyvostra Group</p>
            <p className="phone-profile-location">Casablanca, Maroc</p>
            <div className="phone-company">
              <span className="phone-company-icon">
                <Icon name="apartment" />
              </span>
              <span>
                Keyvostra Group<small>Invest · Management · Maintenance</small>
              </span>
            </div>
            <a
              className="phone-linkedin-button"
              href={site.founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter le profil LinkedIn d’Achraf (nouvel onglet)"
            >
              <span className="linkedin-mark" aria-hidden="true">
                in
              </span>
              Visiter mon LinkedIn
              <Icon name="arrow_outward" />
            </a>
            <div className="phone-about">
              <h4>Une vision, un engagement.</h4>
              <p>
                Accompagner votre patrimoine immobilier à chaque étape, avec
                proximité et transparence.
              </p>
            </div>
            <p className="phone-profile-note">
              Retrouvez mon parcours sur LinkedIn.
            </p>
          </div>
          <div className="phone-home-indicator" aria-hidden="true" />
        </div>
      </div>
      <p className="phone-caption">
        <span className="status-dot" /> RENCONTRONS-NOUS SUR LINKEDIN
      </p>
    </div>
  );
}
