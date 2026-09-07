import { useTranslation } from "../i18n";
import Icon from "./Icon";
import ContactForm from "./ContactForm";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Closing block of a category page: the inquiry form whose email subject is
 * that category's title, plus the WhatsApp shortcut for the same subject.
 * `category.variant` picks the skin, so no two categories close the same way.
 */
export default function ServiceInquiry({ category }) {
  const { t } = useTranslation();
  const {
    subject,
    service,
    variant,
    eyebrow,
    title,
    lead,
    points = [],
    whatsappMessage,
    whatsappNote,
    formTitle = "Votre demande",
    submitLabel = "Envoyer ma demande",
  } = category;

  return (
    <section
      className={`svc-inquiry svc-inquiry-${variant}`}
      id="demande"
      aria-labelledby={`inquiry-${category.key}`}
    >
      <div className="svc-inquiry-inner">
        <div className="svc-inquiry-copy">
          <p className="svc-eyebrow">{t(eyebrow)}</p>
          <h2 id={`inquiry-${category.key}`}>{t(title)}</h2>
          <p className="svc-lead">{t(lead)}</p>
          {points.length ? (
            <ul className="svc-inquiry-points">
              {points.map((point) => (
                <li key={point}>
                  <Icon name="check" />
                  {t(point)}
                </li>
              ))}
            </ul>
          ) : null}
          <p className="svc-subject-chip">
            <Icon name="alternate_email" />
            <span>{t("Objet de l’email envoyé :")}</span>
            <strong>{subject}</strong>
          </p>
          <WhatsAppButton
            message={whatsappMessage}
            note={whatsappNote}
            tone={variant}
          />
        </div>
        <div className="svc-inquiry-form">
          <h3>{t(formTitle)}</h3>
          <ContactForm
            subject={subject}
            service={service}
            submitLabel={submitLabel}
          />
        </div>
      </div>
    </section>
  );
}
