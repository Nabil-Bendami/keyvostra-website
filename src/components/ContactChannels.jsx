import { useTranslation } from "../i18n";
import ContactIcon from "./ContactIcon";
import { whatsappLink } from "../data/siteData";
import { generalWhatsAppMessage } from "../data/services";

/**
 * Ordered contact details, with a small SVG and the purpose of each channel.
 */
export default function ContactChannels({
  channels,
  heading,
  tone = "light",
  className = "",
}) {
  const { t } = useTranslation();
  return (
    <div className={`contact-channels contact-channels-${tone} ${className}`}>
      {heading ? <p className="contact-channels-heading">{t(heading)}</p> : null}
      <ul>
        {channels.map((channel) => {
          const isWhatsApp = channel.icon === "whatsapp";
          const href = isWhatsApp
            ? whatsappLink(t(generalWhatsAppMessage))
            : channel.href;
          const body = (
            <>
              <span className="contact-channel-text">
                <span className="contact-channel-main">
                  <span className="contact-channel-tile" aria-hidden="true">
                    <ContactIcon name={channel.icon} />
                  </span>
                  <strong dir={channel.dir}>{t(channel.value)}</strong>
                </span>
                <small>{t(channel.note)}</small>
              </span>
            </>
          );
          const external = isWhatsApp || channel.external;
          return (
            <li key={channel.key}>
              {href ? (
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {body}
                </a>
              ) : (
                <div>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
