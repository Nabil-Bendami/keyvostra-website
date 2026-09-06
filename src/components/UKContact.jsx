import Icon from "./Icon";
import { site } from "../data/siteData";

export default function UKContact() {
  const uk = site.uk;
  return (
    <div className="uk-contact-block">
      <p className="uk-contact-heading">
        <span className="country-code">UK</span>Votre contact au Royaume-Uni
      </p>
      <strong>{uk.name}</strong>
      <p>Cofondateur · Développement commercial UK</p>
      <a href={uk.phoneHref}>
        <Icon name="call" />
        <span>{uk.phone}</span>
      </a>
      <a href={`mailto:${uk.email}`}>
        <Icon name="mail" />
        <span>{uk.email}</span>
      </a>
    </div>
  );
}
