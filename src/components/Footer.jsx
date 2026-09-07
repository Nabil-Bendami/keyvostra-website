import { useTranslation } from "../i18n";
import { contactChannels, site, ukChannels } from "../data/siteData";
import { Link } from "react-router-dom";
import ContactChannels from "./ContactChannels";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="kv-footer">
      <div className="footer-top">
        <Link className="brand" to="/">
          <span>
            {t("KEYVOSTRA")}
            <small>{t("G R O U P")}</small>
          </span>
        </Link>
        <p>
          {t("Une vision d’ensemble.")}
          <br />
          {t("Maroc & Royaume-Uni.")}
        </p>
        <div>
          <Link to="/invest">{t("Invest")}</Link>
          <Link to="/management">{t("Management")}</Link>
          <Link to="/maintenance">{t("Maintenance")}</Link>
          <Link to="/business-plan">{t("Business Plan")}</Link>
          <Link to="/rent-sale">{t("Rent & Sale")}</Link>
        </div>
        <Link to="/#contact" className="footer-contact">
          {t("Construisons la suite ↗")}
        </Link>
      </div>
      <div className="footer-reach">
        <ContactChannels
          tone="dark"
          heading="Nous joindre · Maroc"
          channels={contactChannels}
        />
        <ContactChannels
          tone="dark"
          heading="Nous joindre · Royaume-Uni"
          channels={ukChannels}
        />
      </div>
      <div className="footer-bottom">
        <button
          type="button"
          className="welcome-replay"
          onClick={() => window.dispatchEvent(new Event("keyvostra:welcome"))}
        >
          {t("Revoir l’introduction")}
        </button>
        <span>
          © {t(new Date().getFullYear())}{" "}
          {t("Keyvostra Group. Tous droits réservés.")}
        </span>
        <a
          href={site.founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("Visiter le profil LinkedIn d’Achraf (nouvel onglet)")}
        >
          LinkedIn ↗
        </a>
        <span>{t("CASABLANCA, MAROC · UNITED KINGDOM")}</span>
      </div>
    </footer>
  );
}
