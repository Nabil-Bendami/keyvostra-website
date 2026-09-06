import { Link } from "react-router-dom";
import InternationalPresence from "../components/InternationalPresence";
import UKContact from "../components/UKContact";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import ContactForm from "../components/ContactForm";
import FounderShowcase from "../components/FounderShowcase";
import TestimonialCarousel from "../components/TestimonialCarousel";
import CinematicHero from "../components/CinematicHero";
import MotionReveal from "../components/MotionReveal";
import RealizationsCarousel from "../components/RealizationsCarousel";
import { site, testimonials } from "../data/siteData";

const services = [
  {
    name: "Invest",
    icon: "trending_up",
    line: "Investir avec une vision.",
    text: "Études de faisabilité, sélection d’opportunités et conseil stratégique pour donner du sens à chaque investissement.",
    tags: "ANALYSER · IDENTIFIER · INVESTIR",
    to: "/invest",
  },
  {
    name: "Management",
    icon: "apartment",
    line: "Votre patrimoine, bien entouré.",
    text: "Gestion locative, suivi des revenus et accompagnement à l’achat ou à la vente. Un interlocuteur, une transparence totale.",
    tags: "GÉRER · ACCOMPAGNER · VALORISER",
    to: "/management",
  },
  {
    name: "Maintenance",
    icon: "construction",
    line: "Préserver chaque détail.",
    text: "Maintenance préventive, interventions techniques et rénovation : une attention constante pour un bien qui dure.",
    tags: "ENTRETENIR · RÉPARER · PRÉSERVER",
    to: "/maintenance",
  },
  {
    name: "Business Plan",
    icon: "query_stats",
    line: "Votre projet, chiffré depuis zéro.",
    text: "Étude de marché, prévisionnel financier et rédaction complète du business plan — à partir d’une page blanche, jusqu’au dossier bancaire.",
    tags: "ÉTUDIER · CHIFFRER · STRUCTURER",
    to: "/business-plan",
  },
  {
    name: "Rent & Sale",
    icon: "key",
    line: "Louer ou vendre, sereinement.",
    text: "Estimation juste, mise en valeur du bien, visites filtrées, négociation et contrats sécurisés — en location comme à la vente.",
    tags: "ESTIMER · LOUER · VENDRE",
    to: "/rent-sale",
  },
];
export default function Home() {
  return (
    <MotionReveal>
      <SEO
        title="Keyvostra Group — Votre patrimoine, notre engagement"
        description="Keyvostra Group accompagne vos projets immobiliers au Maroc et au Royaume-Uni : investissement, gestion et maintenance."
        path="/"
      />
      <CinematicHero />
      <div className="expertise-strip">
        <span>UN ACCOMPAGNEMENT COMPLET</span>
        {services.map((s, i) => (
          <a href="#expertises" key={s.name}>
            <small>0{i + 1}</small> Keyvostra <strong>{s.name}</strong>
            <Icon name="arrow_outward" />
          </a>
        ))}
      </div>

      <section
        className="kv-section founder-section founder-showcase-section"
        id="approche"
      >
        <FounderShowcase />
        <div className="founder-copy">
          <p className="eyebrow">01 — LE GROUPE</p>
          <h2>
            Avant la pierre,
            <br />
            il y a <em>la confiance.</em>
          </h2>
          <p>
            Un projet immobilier est avant tout un projet de vie. Avec Keyvostra
            Group, Achraf Aitoukrim porte une ambition claire : réunir les
            expertises dont votre patrimoine a besoin, autour d’une relation
            humaine et durable.
          </p>
          <p>
            Depuis Sidi Maarouf à Casablanca et avec Abdelmounaim Sraitah au
            Royaume-Uni, nous accompagnons investisseurs et propriétaires dans
            les deux pays, avec un suivi à chaque étape.
          </p>
          <div className="founder-values">
            <span>
              <Icon name="verified_user" /> Transparence
            </span>
            <span>
              <Icon name="handshake" /> Proximité
            </span>
            <span>
              <Icon name="architecture" /> Exigence
            </span>
          </div>
          <Link className="text-link" to="/about">
            Rencontrer Keyvostra <Icon name="arrow_outward" />
          </Link>
        </div>
      </section>

      <InternationalPresence />

      <section className="services-section" id="expertises">
        <div className="kv-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 — NOS EXPERTISES</p>
              <h2>
                Cinq expertises.
                <br />
                <em>Une même exigence.</em>
              </h2>
            </div>
            <p>
              De la première opportunité à l’entretien quotidien,
              <br />
              nous pensons votre immobilier dans sa globalité.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link className="expertise-card" to={s.to} key={s.name}>
                <div className="card-top">
                  <Icon name={s.icon} />
                  <span>0{i + 1}</span>
                </div>
                <p className="service-brand">KEYVOSTRA</p>
                <h3>{s.name}</h3>
                <h4>{s.line}</h4>
                <p>{s.text}</p>
                <div className="service-bottom">
                  <span>{s.tags}</span>
                  <Icon name="arrow_outward" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RealizationsCarousel />

      <section className="trust-section">
        <div className="kv-section">
          <p className="eyebrow">04 — UNE RELATION DURABLE</p>
          <h2>
            Votre confiance.
            <br />
            <em>Notre premier engagement.</em>
          </h2>
          {testimonials.length ? (
            <TestimonialCarousel testimonials={testimonials} />
          ) : (
            <div className="trust-promises">
              <div>
                <span>01</span>
                <h3>Un interlocuteur dédié</h3>
                <p>
                  Un échange direct pour comprendre votre projet et suivre son
                  évolution.
                </p>
              </div>
              <div>
                <span>02</span>
                <h3>Une vision transparente</h3>
                <p>
                  Des étapes claires et des informations utiles pour décider en
                  confiance.
                </p>
              </div>
              <div>
                <span>03</span>
                <h3>Un suivi dans la durée</h3>
                <p>
                  Une attention portée à votre patrimoine, bien au-delà de la
                  transaction.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="kv-section contact-section" id="contact">
        <div>
          <p className="eyebrow">05 — CONSTRUISONS LA SUITE</p>
          <h2>
            Votre prochain projet
            <br />
            commence par
            <br />
            <em>une conversation.</em>
          </h2>
          <p>
            Un investissement en vue ? Un bien à gérer ou à entretenir ? Parlons
            de vos besoins.
          </p>
          <a className="contact-email" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
            <Icon name="arrow_outward" />
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
            <Icon name="location_on" />
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
    </MotionReveal>
  );
}
