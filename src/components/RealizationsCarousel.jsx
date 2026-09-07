import { useTranslation } from "../i18n";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import { approvedRealizations } from "../data/siteData";

const emptySlots = Array.from({ length: 6 }, (_, index) => ({
  id: `empty-${index}`,
  empty: true,
}));

export default function RealizationsCarousel() {
  const { t, language } = useTranslation();
  const viewport = useRef(null);
  const group = useRef(null);
  const cycle = useRef(0);
  const holdUntil = useRef(0);
  const hovering = useRef(false);
  const focused = useRef(false);
  const dragging = useRef(false);
  const [paused, setPaused] = useState(false);
  const items = approvedRealizations.length ? approvedRealizations : emptySlots;
  const [reduced, setReduced] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(mq.matches);
    mq.addEventListener("change", change);
    return () => mq.removeEventListener("change", change);
  }, []);

  useEffect(() => {
    const el = viewport.current;
    const measure = () => {
      cycle.current = group.current.getBoundingClientRect().width;
      el.scrollLeft = cycle.current;
    };
    const resize = new ResizeObserver(measure);
    resize.observe(group.current);
    measure();
    return () => resize.disconnect();
  }, [items]);

  useEffect(() => {
    const el = viewport.current;
    let frame;
    let previous = 0;
    let fraction = 0;
    let visible = false;
    function tick(now) {
      const delta = previous ? Math.min(now - previous, 50) : 0;
      previous = now;
      const width = cycle.current;
      if (width && !dragging.current) {
        if (el.scrollLeft >= width * 2) el.scrollLeft -= width;
        else if (el.scrollLeft < width * 0.5) el.scrollLeft += width;
      }
      if (
        !paused &&
        !reduced &&
        !hovering.current &&
        !focused.current &&
        !dragging.current &&
        now > holdUntil.current
      ) {
        fraction += delta * 0.028;
        const distance = Math.floor(fraction);
        fraction -= distance;
        el.scrollLeft += distance;
      }
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      cancelAnimationFrame(frame);
      previous = 0;
      if (visible && !document.hidden) frame = requestAnimationFrame(tick);
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(el);
    document.addEventListener("visibilitychange", sync);
    const release = () => {
      dragging.current = false;
      holdUntil.current = performance.now() + 2000;
    };
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
    };
  }, [paused, reduced]);

  function step(direction) {
    holdUntil.current = performance.now() + 4500;
    const card = group.current.firstElementChild;
    const distance =
      card.getBoundingClientRect().width +
      parseFloat(getComputedStyle(group.current).columnGap);
    viewport.current.scrollBy({
      left: direction * distance,
      behavior: reduced ? "instant" : "smooth",
    });
  }

  return (
    <section
      className="realizations-section"
      id="univers"
      aria-labelledby="realizations-title"
    >
      <div className="realizations-heading section-heading">
        <p className="eyebrow">{t("03 — NOS RÉALISATIONS")}</p>
        <h2 id="realizations-title">
          {t("Des projets.")}
          <br />
          <em>{t("Des histoires à partager.")}</em>
        </h2>
        <p>
          {t(
            "Investissement, gestion, foncier et conseil agricole : quatre missions, une même exigence.",
          )}
        </p>
        <Link className="text-link" to="/portfolio">
          {t("Toutes nos réalisations")} <Icon name="arrow_outward" />
        </Link>
        <small className="project-image-notice">
          {t(
            "Photos d’illustration · Projets et résultats communiqués par Keyvostra Group.",
          )}
        </small>
      </div>
      <div
        className="realizations-carousel"
        role="region"
        aria-roledescription={t("carrousel")}
        aria-label={t("Galerie des réalisations")}
        onMouseEnter={() => {
          hovering.current = true;
        }}
        onMouseLeave={() => {
          hovering.current = false;
        }}
        onFocusCapture={() => {
          focused.current = true;
        }}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget))
            focused.current = false;
        }}
      >
        <div
          className="realizations-viewport"
          dir="ltr"
          ref={viewport}
          tabIndex={0}
          aria-label={t(
            "Galerie horizontale, utilisez les flèches pour naviguer",
          )}
          onPointerDown={() => {
            dragging.current = true;
          }}
          onWheel={() => {
            holdUntil.current = performance.now() + 2500;
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
              e.preventDefault();
              step(e.key === "ArrowRight" ? 1 : -1);
            }
          }}
        >
          <div className="realizations-track">
            {[0, 1, 2].map((copy) => (
              <div
                className="realizations-group"
                ref={copy === 1 ? group : undefined}
                key={copy}
                aria-hidden={copy !== 1 ? true : undefined}
              >
                {items.map((item, index) => (
                  <article
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className={`realization-slot slot-${index % 3} ${item.empty ? "is-empty" : ""}`}
                    key={item.id}
                    aria-label={t(
                      item.empty
                        ? "Emplacement de réalisation à venir"
                        : item.title,
                    )}
                  >
                    {item.image ? (
                      <Link
                        className="realization-window realization-project-image"
                        to={item.href}
                        tabIndex={copy === 1 ? 0 : -1}
                        aria-label={`${t("Découvrir le projet")} : ${t(item.title)}`}
                      >
                        <img
                          src={item.image}
                          alt={t(item.alt || item.title)}
                          loading="lazy"
                          width="600"
                          height="960"
                        />
                        <span className="realization-category">
                          {t(item.category)}
                        </span>
                        <div className="realization-overlay">
                          <strong>{t(item.metric)}</strong>
                          <span>{t(item.metricLabel)}</span>
                          <small>{t("PHOTO D’ILLUSTRATION")}</small>
                        </div>
                      </Link>
                    ) : (
                      <div className="realization-window" />
                    )}
                    {item.empty ? (
                      <div
                        className="realization-caption-empty"
                        aria-hidden="true"
                      >
                        <span />
                        <i />
                      </div>
                    ) : (
                      <div className="realization-caption">
                        <div>
                          <h3>{t(item.shortTitle || item.title)}</h3>
                          <p className="realization-summary">
                            {t(item.summary)}
                          </p>
                        </div>
                        {item.href && (
                          <Link
                            to={item.href}
                            tabIndex={copy === 1 ? 0 : -1}
                            aria-label={`${t("Découvrir le projet")} : ${t(item.title)}`}
                          >
                            <Icon name="arrow_forward" />
                          </Link>
                        )}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          className="realizations-arrow previous"
          type="button"
          onClick={() => step(-1)}
          aria-label={t("Réalisation précédente")}
        >
          <Icon name="chevron_left" />
        </button>
        <button
          className="realizations-arrow next"
          type="button"
          onClick={() => step(1)}
          aria-label={t("Réalisation suivante")}
        >
          <Icon name="chevron_right" />
        </button>
        {!reduced && (
          <button
            className="realizations-motion"
            type="button"
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            <Icon name={paused ? "play_arrow" : "pause"} />
            {t(paused ? "Reprendre le défilement" : "Mettre en pause")}
          </button>
        )}
      </div>
    </section>
  );
}
