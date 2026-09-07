import { useTranslation } from "../i18n";
import Icon from "./Icon";
import { site } from "../data/siteData";

/**
 * The single client inquiry form, posted to FormSubmit.
 *
 * `subject` becomes the email subject line: on a category page we pass that
 * category's title, so the inbox is already sorted by service. When `service`
 * is given the visitor is on a page that already says what they need, so the
 * dropdown is replaced by a hidden field.
 */
export default function ContactForm({
  subject = "Nouvelle demande client — Keyvostra Group",
  service = null,
  submitLabel = "Envoyer ma demande",
}) {
  const { t } = useTranslation();
  return (
    <form
      className="kv-form"
      action={`https://formsubmit.co/${site.contact.email}`}
      method="POST"
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <div className="form-row">
        <label>
          {t("Nom complet *")}
          <input
            name="name"
            autoComplete="name"
            placeholder={t("Votre nom")}
            required
            maxLength={100}
          />
        </label>
        <label>
          {t("Téléphone *")}
          <input
            name="phone"
            dir="ltr"
            type="tel"
            autoComplete="tel"
            placeholder={t("+212 … / +44 …")}
            pattern="[+0-9() .\-]{6,25}"
            title={t(
              "Saisissez un numéro de téléphone valide (6 à 25 caractères).",
            )}
            required
          />
        </label>
      </div>
      <label>
        {t("Adresse email *")}
        <input
          name="email"
          dir="ltr"
          type="email"
          autoComplete="email"
          placeholder={t("vous@exemple.com")}
          required
          maxLength={200}
        />
      </label>
      <label>
        {t("Pays concerné par votre projet")}
        <select name="projectCountry" defaultValue="">
          <option value="" disabled>
            {t("Sélectionnez un pays")}
          </option>
          <option value="Maroc">{t("Maroc")}</option>
          <option value="Royaume-Uni (UK)">{t("Royaume-Uni (UK)")}</option>
          <option value="Maroc et Royaume-Uni">
            {t("Maroc et Royaume-Uni")}
          </option>
        </select>
      </label>
      {service ? (
        <input type="hidden" name="service" value={service} />
      ) : (
        <label>
          {t("Votre besoin")}
          <select name="service">
            <option value="Investissement immobilier">
              {t("Investissement immobilier")}
            </option>
            <option value="Gestion & médiation immobilière">
              {t("Gestion & médiation immobilière")}
            </option>
            <option value="Maintenance & rénovation">
              {t("Maintenance & rénovation")}
            </option>
            <option value="Business Plan">{t("Business Plan")}</option>
            <option value="Rent & Sale">{t("Rent & Sale")}</option>
            <option value="Autre projet">{t("Autre projet")}</option>
          </select>
        </label>
      )}
      <label>
        {t("Votre message *")}
        <textarea
          name="message"
          placeholder={t("Votre bien, vos objectifs, vos questions…")}
          rows={3}
          required
          minLength={10}
          maxLength={3000}
        />
      </label>
      <button className="kv-button" type="submit">
        {t(submitLabel)} <Icon name="arrow_outward" />
      </button>
      <p className="form-note">
        {t(
          "Votre demande sera transmise à Keyvostra via FormSubmit. Une vérification anti-spam peut vous être demandée. Les champs marqués * sont obligatoires.",
        )}
      </p>
      <p className="form-note">
        {t("Vous préférez nous écrire directement ?")}
        {t(" ")}
        <a href={`mailto:${site.contact.email}`} className="underline">
          {t(site.contact.email)}
        </a>
      </p>
    </form>
  );
}
