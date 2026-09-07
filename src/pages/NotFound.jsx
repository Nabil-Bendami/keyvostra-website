import { useTranslation } from "../i18n";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t("Page Not Found - Keyvostra Group")}
        description={t("The page you are looking for could not be found.")}
        path="/404"
      />
      <div className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6">
          {t("Page not found")}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
          {t("The page you're looking for doesn't exist or has moved.")}
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:opacity-90 transition-opacity"
        >
          {t("Back to Home")}
        </Link>
      </div>
    </>
  );
}
