import { useTranslation } from "../i18n";
import Icon from "./Icon";

const SPAN_CLASSES = {
  featured: "md:col-span-8",
  wide: "md:col-span-8",
  standard: "md:col-span-4",
};

const CATEGORY_LABELS = {
  invest: "Invest",
  management: "Management",
  maintenance: "Maintenance",
  villa: "Villa",
  commercial: "Commercial",
};

export default function PortfolioCard({ project }) {
  const { t } = useTranslation();
  const isLarge = project.size === "featured" || project.size === "wide";

  return (
    <div
      className={`${SPAN_CLASSES[project.size]} group relative overflow-hidden rounded-xl border border-outline/30 cursor-pointer`}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 duration-500" />
      <img
        src={project.image}
        alt={t(project.alt)}
        loading="lazy"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div
        className={`absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black/80 to-transparent ${isLarge ? "p-8" : "p-6"}`}
      >
        <div className="flex gap-2 mb-2">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 bg-surface/90 backdrop-blur-sm text-primary font-label-sm text-label-sm rounded uppercase tracking-wider"
            >
              {t(CATEGORY_LABELS[cat] ?? cat)}
            </span>
          ))}
        </div>
        {isLarge ? (
          <>
            <h2 className="font-headline-md text-headline-md text-on-primary mb-2">
              {t(project.title)}
            </h2>
            <p className="font-body-md text-body-md text-on-primary/80 flex items-center gap-2">
              <Icon name="location_on" className="text-[18px]" />{" "}
              {t(project.location)}
            </p>
          </>
        ) : (
          <>
            <h2 className="font-body-lg text-body-lg font-semibold text-on-primary mb-1">
              {t(project.title)}
            </h2>
            <p className="font-label-sm text-label-sm text-on-primary/80">
              {t(project.location)}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
