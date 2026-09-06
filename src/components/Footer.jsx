import { site } from "../data/siteData";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="kv-footer">
      <div className="footer-top">
        <Link className="brand" to="/">
          <span>
            KEYVOSTRA<small>G R O U P</small>
          </span>
        </Link>
        <p>
          Une vision d’ensemble.
          <br />
          Maroc & Royaume-Uni.
        </p>
        <div>
          <Link to="/invest">Invest</Link>
          <Link to="/management">Management</Link>
          <Link to="/maintenance">Maintenance</Link>
        </div>
        <Link to="/#contact" className="footer-contact">
          Construisons la suite ↗
        </Link>
      </div>
      <div className="footer-ma">
        <span>MA · Casablanca</span>
        {site.contact.phones.map((phone) => (
          <a href={phone.href} key={phone.href}>
            {phone.label}
          </a>
        ))}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
      </div>
      <div className="footer-uk">
        <span>UK · {site.uk.name}</span>
        <a href={site.uk.phoneHref}>{site.uk.phone}</a>
        <a href={`mailto:${site.uk.email}`}>{site.uk.email}</a>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Keyvostra Group. Tous droits réservés.
        </span>
        <span>CASABLANCA, MAROC · UNITED KINGDOM</span>
      </div>
    </footer>
  );
}
