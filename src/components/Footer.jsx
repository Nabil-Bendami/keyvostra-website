import { useTranslation } from "../i18n";
import { contactChannels, site, ukChannels } from "../data/siteData";
import { Link } from "react-router-dom";
import ContactChannels from "./ContactChannels";
import FloatingWidgets from "./FloatingWidgets";
import FooterWordmark from "./FooterWordmark";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="kv-footer">
      <div className="footer-layout">
        <div className="footer-intro">
          <Link className="footer-brand" to="/">
            {t("KEYVOSTRA")} <span>{t("G R O U P")}</span>
          </Link>
          <p className="footer-signature">
            {t("Une vision d’ensemble.")}<br />
            {t("Maroc & Royaume-Uni.")}
          </p>
          <nav className="footer-navigation" aria-label={t("Nos expertises")}>
            <Link to="/invest">{t("Invest")}</Link>
            <Link to="/management">{t("Management")}</Link>
            <Link to="/maintenance">{t("Maintenance")}</Link>
            <Link to="/business-plan">{t("Business Plan")}</Link>
            <Link to="/rent-sale">{t("Rent & Sale")}</Link>
          </nav>
          <Link to="/#contact" className="footer-contact">
            {t("Construisons la suite ↗")}
          </Link>
        </div>
        <div className="footer-reach">
          <ContactChannels heading="Maroc" channels={contactChannels} />
          <div>
            <ContactChannels heading="Royaume-Uni" channels={ukChannels} />
            <p className="uk-contact-role">
              {t("Cofondateur · Développement commercial UK")}
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a href={site.founder.linkedin} target="_blank" rel="noopener noreferrer"
            aria-label={t("Visiter le profil LinkedIn d’Achraf (nouvel onglet)")}>
            LinkedIn ↗
          </a>
          <button type="button" className="welcome-replay"
            onClick={() => window.dispatchEvent(new Event("keyvostra:welcome"))}>
            {t("Revoir l’introduction")}
          </button>
        </div>
        <div className="footer-legal">
          <p>© {t(new Date().getFullYear())} {t("Keyvostra Group. Tous droits réservés.")}</p>
          <p>{t("CASABLANCA, MAROC · UNITED KINGDOM")}</p>
        </div>
      </div>
      <FloatingWidgets />
      <FooterWordmark />
    </footer>
  );
}
