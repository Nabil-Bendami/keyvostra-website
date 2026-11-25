import { useTranslation } from "../i18n";
import { ukChannels } from "../data/siteData";
import ContactChannels from "./ContactChannels";

export default function UKContact() {
  const { t } = useTranslation();
  return (
    <div className="uk-contact">
      <ContactChannels
        heading="Royaume-Uni"
        channels={ukChannels}
        className="contact-page-channels"
      />
      <p className="uk-contact-role">
        {t("Cofondateur · Développement commercial UK")}
      </p>
    </div>
  );
}
