import { useTranslation } from "../i18n";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.keyvostragroup.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/hero-villa-pool.jpg`;

/**
 * Per-page SEO tags (title, description, canonical, Open Graph, Twitter Card).
 * Rendered client-side via react-helmet-async — see README for the tradeoff
 * this implies vs. a server-rendered framework.
 */
export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
}) {
  const { language } = useTranslation();
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang={language} dir={language === "ar" ? "rtl" : "ltr"} />
      <meta
        property="og:locale"
        content={{ fr: "fr_FR", en: "en_GB", ar: "ar_MA" }[language]}
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Keyvostra Group" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
