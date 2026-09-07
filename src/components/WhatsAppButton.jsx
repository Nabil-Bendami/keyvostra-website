import { useTranslation } from "../i18n";
import { whatsappLink } from "../data/siteData";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Inline WhatsApp call to action: the button itself, plus the short line under
 * it that tells the visitor what this particular conversation is for.
 * `tone` picks the skin so the button belongs to the section around it.
 */
export default function WhatsAppButton({
  message,
  label = "Écrire sur WhatsApp",
  note,
  tone = "solid",
  className = "",
}) {
  const { t } = useTranslation();
  return (
    <div className={`wa-cta wa-cta-${tone} ${className}`}>
      <a
        className="wa-button"
        href={whatsappLink(t(message))}
        target="_blank"
        rel="noreferrer noopener"
      >
        <WhatsAppIcon />
        <span>{t(label)}</span>
      </a>
      {note ? <p className="wa-note">{t(note)}</p> : null}
    </div>
  );
}
