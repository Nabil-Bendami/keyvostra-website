import Icon from "./Icon";
import { site } from "../data/siteData";
export default function ContactForm() {
  return (
    <form
      className="kv-form"
      action={`https://formsubmit.co/${site.contact.email}`}
      method="POST"
    >
      <input
        type="hidden"
        name="_subject"
        value="Nouvelle demande client — Keyvostra Group"
      />
      <input type="hidden" name="_template" value="table" />
      <div className="form-row">
        <label>
          Nom complet *
          <input
            name="name"
            autoComplete="name"
            placeholder="Votre nom"
            required
            maxLength={100}
          />
        </label>
        <label>
          Téléphone *
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+212 … / +44 …"
            pattern="[+0-9() .\-]{6,25}"
            title="Saisissez un numéro de téléphone valide (6 à 25 caractères)."
            required
          />
        </label>
      </div>
      <label>
        Adresse email *
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="vous@exemple.com"
          required
          maxLength={200}
        />
      </label>
      <label>
        Pays concerné par votre projet
        <select name="projectCountry" defaultValue="">
          <option value="" disabled>
            Sélectionnez un pays
          </option>
          <option value="Maroc">Maroc</option>
          <option value="Royaume-Uni (UK)">Royaume-Uni (UK)</option>
          <option value="Maroc et Royaume-Uni">Maroc et Royaume-Uni</option>
        </select>
      </label>
      <label>
        Votre besoin
        <select name="service">
          <option>Investissement immobilier</option>
          <option>Gestion & médiation immobilière</option>
          <option>Maintenance & rénovation</option>
          <option>Autre projet</option>
        </select>
      </label>
      <label>
        Votre message *
        <textarea
          name="message"
          placeholder="Votre bien, vos objectifs, vos questions…"
          rows={3}
          required
          minLength={10}
          maxLength={3000}
        />
      </label>
      <button className="kv-button" type="submit">
        Envoyer ma demande <Icon name="arrow_outward" />
      </button>
      <p className="form-note">
        Votre demande sera transmise à Keyvostra via FormSubmit. Une
        vérification anti-spam peut vous être demandée. Les champs marqués *
        sont obligatoires.
      </p>
      <p className="form-note">
        Vous préférez nous écrire directement ?{" "}
        <a href={`mailto:${site.contact.email}`} className="underline">
          {site.contact.email}
        </a>
      </p>
    </form>
  );
}
