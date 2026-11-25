import { useTranslation } from "../i18n";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";
import { generalWhatsAppMessage, serviceCategories } from "../data/services";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      <SEO
        title={t("Contact — Keyvostra Group")}
        description={t(
          "Parlons de votre projet immobilier. Retrouvez Keyvostra Group au Maroc et au Royaume-Uni.",
        )}
        path="/contact"
      />
      <section className="kv-section contact-section">
        <div>
          <p className="eyebrow">{t("KEYVOSTRA GROUP · CONTACT")}</p>
          <h1 className="contact-title">
            {t("Tout commence par")}
            <br />
            <em>{t("une conversation.")}</em>
          </h1>
          <p>
            {t(
              "Investissement, gestion ou maintenance : présentez-nous votre projet au Maroc ou au Royaume-Uni pour échanger sur vos besoins.",
            )}
          </p>
          <WhatsAppButton
            message={generalWhatsAppMessage}
            note="Le plus rapide : un message WhatsApp avec votre ville et votre besoin."
            className="contact-page-wa"
          />
        </div>
        <div className="home-form">
          <h3>{t("Parlez-nous de votre projet")}</h3>
          <p>{t("Quelques mots pour faire le premier pas.")}</p>
          <ContactForm />
          <div className="contact-direct">
            <p className="contact-direct-heading">
              {t("Écrire directement au bon service")}
            </p>
            <ul>
              {serviceCategories.map((category) => (
                <li key={category.key}>
                  <Link to={`${category.to}#demande`}>
                    <span>{t(category.label)}</span>
                    <Icon name="arrow_outward" />
                  </Link>
                </li>
              ))}
            </ul>
            <small>
              {t(
                "Chaque service a son propre formulaire : votre message arrive avec le bon objet, chez la bonne personne.",
              )}
            </small>
          </div>
        </div>
      </section>
    </div>
  );
}
