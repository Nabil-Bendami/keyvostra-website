import { useTranslation } from "../i18n";
import Icon from "./Icon";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "../data/siteData";
import { generalWhatsAppMessage } from "../data/services";

/**
 * Ordered reachability list: an icon tile, the value, and the line under it
 * saying what the channel is for. `tone` is "dark" on the navy footer and
 * "light" on the cream pages.
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
              <span className="contact-channel-tile" aria-hidden="true">
                {isWhatsApp ? <WhatsAppIcon /> : <Icon name={channel.icon} />}
              </span>
              <span className="contact-channel-text">
                <strong dir={channel.dir}>{t(channel.value)}</strong>
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
