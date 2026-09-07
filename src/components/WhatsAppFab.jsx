import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "../i18n";
import { whatsappLink } from "../data/siteData";
import { generalWhatsAppMessage, serviceByPath } from "../data/services";
import WhatsAppIcon from "./WhatsAppIcon";

// The teaser bubble is a one-time nudge per visit, not a pop-up that keeps
// coming back: once dismissed, only the round button stays.
const DISMISSED = "keyvostra-whatsapp-teaser";

const teasers = {
  "/invest": "Un projet d’investissement en tête ? Écrivez-nous.",
  "/management": "Un bien à confier ? Parlons-en ici.",
  "/maintenance": "Une panne ou un devis ? Envoyez-nous une photo.",
  "/business-plan": "Une idée à chiffrer ? Racontez-la nous.",
  "/rent-sale": "Louer ou vendre ? Demandez votre estimation.",
};

/**
 * Floating WhatsApp button, present on every route. The pre-written message
 * follows the page the visitor is on, so the conversation starts already
 * knowing which service is concerned.
 */
export default function WhatsAppFab() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [teaserOpen, setTeaserOpen] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISSED) === "1";
    } catch {
      /* Storage may be disabled. */
    }
    if (dismissed) return;
    const timer = setTimeout(() => setTeaserOpen(true), 1400);
    return () => clearTimeout(timer);
  }, [pathname]);

  const closeTeaser = () => {
    setTeaserOpen(false);
    try {
      sessionStorage.setItem(DISMISSED, "1");
    } catch {
      /* Storage may be disabled. */
    }
  };

  const category = serviceByPath[pathname];
  const message = category ? category.whatsappMessage : generalWhatsAppMessage;
  const teaser =
    teasers[pathname] ?? "Une question ? Nous répondons sur WhatsApp.";

  return (
    <div className="wa-fab-wrap">
      {teaserOpen ? (
        <div className="wa-fab-teaser" role="note">
          <p>{t(teaser)}</p>
          <button
            type="button"
            onClick={closeTeaser}
            aria-label={t("Masquer ce message")}
          >
            ×
          </button>
        </div>
      ) : null}
      <a
        className="wa-fab"
        href={whatsappLink(t(message))}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={t("Écrire à Keyvostra sur WhatsApp")}
        onClick={closeTeaser}
      >
        <WhatsAppIcon />
        <span className="wa-fab-label">{t("WhatsApp")}</span>
      </a>
    </div>
  );
}
