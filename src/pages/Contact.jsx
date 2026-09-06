import UKContact from "../components/UKContact";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import { site } from "../data/siteData";
export default function Contact() {
  return (
    <div className="home-page">
      <SEO
        title="Contact — Keyvostra Group"
        description="Parlons de votre projet immobilier. Retrouvez Keyvostra Group au Maroc et au Royaume-Uni."
        path="/contact"
      />
      <section className="kv-section contact-section">
        <div>
          <p className="eyebrow">KEYVOSTRA GROUP · CONTACT</p>
          <h1 className="contact-title">
            Tout commence par
            <br />
            <em>une conversation.</em>
          </h1>
          <p>
            Investissement, gestion ou maintenance : présentez-nous votre projet
            au Maroc ou au Royaume-Uni pour échanger sur vos besoins.
          </p>
          <a className="contact-email" href={`mailto:${site.contact.email}`}>
            {site.contact.email} ↗
          </a>
          <div className="contact-phones">
            {site.contact.phones.map((phone) => (
              <a href={phone.href} key={phone.href}>
                <Icon name="call" />
                {phone.label}
              </a>
            ))}
          </div>
          <div className="address-block">
            <div>
              <strong>Sidi Maarouf</strong>
              <p>Casablanca, Maroc</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sidi+Maarouf+Casablanca"
                target="_blank"
                rel="noreferrer"
              >
                Voir le quartier sur la carte ↗
              </a>
            </div>
          </div>
          <UKContact />
        </div>
        <div className="home-form">
          <h3>Parlez-nous de votre projet</h3>
          <p>Quelques mots pour faire le premier pas.</p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
