import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";
const links = [
  ["Le groupe", "/#approche"],
  ["Nos expertises", "/#expertises"],
  ["Notre univers", "/#univers"],
  ["Contact", "/#contact"],
];
export default function Navbar() {
  const [openKey, setOpenKey] = useState(null);
  const location = useLocation();
  const open = openKey === location.key;
  const setOpen = (value) => setOpenKey(value ? location.key : null);
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="kv-header">
      <a href="#main-content" className="skip-link">
        Aller au contenu
      </a>
      <nav className="kv-nav" aria-label="Navigation principale">
        <Link to="/" className="brand" aria-label="Keyvostra Group — Accueil">
          <svg viewBox="0 0 40 44" fill="none" aria-hidden="true">
            <path
              d="M5 38V8L18 3V38M23 3V38M23 22L36 8M23 22L36 38"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>
          <span>
            KEYVOSTRA<small>G R O U P</small>
          </span>
        </Link>
        <div className="desktop-nav">
          {links.map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </div>
        <Link className="kv-button nav-cta" to="/#contact">
          Réserver une consultation <Icon name="arrow_outward" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>
      {open && (
        <div className="mobile-nav" id="mobile-nav">
          {links.map(([label, to]) => (
            <Link onClick={() => setOpen(false)} key={to} to={to}>
              {label}
              <Icon name="arrow_outward" />
            </Link>
          ))}
          <Link
            className="kv-button"
            to="/#contact"
            onClick={() => setOpen(false)}
          >
            Réserver une consultation
          </Link>
        </div>
      )}
    </header>
  );
}
