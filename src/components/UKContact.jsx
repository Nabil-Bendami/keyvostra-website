import { useTranslation } from "../i18n";
import Icon from "./Icon";
import { site, ukChannels } from "../data/siteData";
import ContactChannels from "./ContactChannels";

export default function UKContact() {
  const { t } = useTranslation();
  const uk = site.uk;
  return (
    <>
      <div className="uk-contact-block uk-contact-desktop">
        <p className="uk-contact-heading">
          <span className="country-code">{t("UK")}</span>
          {t("Votre contact au Royaume-Uni")}
        </p>
        <strong>{t(uk.name)}</strong>
        <p>{t("Cofondateur · Développement commercial UK")}</p>
        <a href={uk.phoneHref}>
          <Icon name="call" />
          <span>{t(uk.phone)}</span>
        </a>
        <a href={`mailto:${uk.email}`}>
          <Icon name="mail" />
          <span>{t(uk.email)}</span>
        </a>
      </div>
      <div className="uk-contact-mobile">
        <ContactChannels
          heading="Nous joindre · Royaume-Uni"
          channels={ukChannels}
          className="contact-page-channels"
        />
        <p className="uk-contact-role">
          {t(uk.name)} · {t("Cofondateur · Développement commercial UK")}
        </p>
      </div>
    </>
  );
}
