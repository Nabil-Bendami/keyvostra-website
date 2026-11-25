import { useTranslation } from "../i18n";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function VideoGreeting({ docked = false }) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(
    () => window.matchMedia("(max-width: 800px)").matches,
  );
  const [opened, setOpened] = useState(false);
  const [failed, setFailed] = useState(false);
  const minimized = collapsed || docked;
  const preview = useRef(null);
  const player = useRef(null);
  const dialog = useRef(null);
  const opener = useRef(null);
  const restoreFocus = useRef(false);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 800px)");
    const sync = () => setCollapsed(mobile.matches);
    mobile.addEventListener("change", sync);
    return () => mobile.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (!opened && restoreFocus.current) {
      opener.current?.focus({ preventScroll: true });
      restoreFocus.current = false;
    }
  }, [opened]);
  const [previewPlaying, setPreviewPlaying] = useState(false);
  useEffect(() => {
    if (minimized || opened) return;
    const el = preview.current;
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (!document.hidden && !mq.matches) el.play().catch(() => {});
      else el.pause();
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    mq.addEventListener("change", sync);
    return () => {
      el.pause();
      document.removeEventListener("visibilitychange", sync);
      mq.removeEventListener("change", sync);
    };
  }, [minimized, opened]);
  function open() {
    setOpened(true);
    dialog.current.showModal();
    player.current.currentTime = 0;
    player.current.play().catch(() => {});
  }
  function close() {
    dialog.current.close();
  }
  function onClose() {
    player.current.pause();
    restoreFocus.current = true;
    setOpened(false);
  }
  return (
    <>
      <aside
        className={`video-greeting ${minimized ? "is-collapsed" : ""}`}
        aria-label={t("Présentation vidéo de Keyvostra")}
        hidden={opened}
      >
        {minimized ? (
          <button
            ref={opener}
            className="greeting-reopen"
            onClick={() => {
              if (docked || window.matchMedia("(max-width: 800px)").matches) open();
              else setCollapsed(false);
            }}
            aria-label={t("Afficher la vidéo de présentation")}
          >
            <Icon name="play_arrow" />
            <span>{t("Un mot d’Achraf")}</span>
          </button>
        ) : (
          <>
            <button
              className="greeting-dismiss"
              aria-label={t("Réduire la vidéo de présentation")}
              onClick={() => setCollapsed(true)}
            >
              <Icon name="close" />
            </button>
            <span className="greeting-bubble">
              {t("Bonjour !")} <span aria-hidden="true">✦</span>
            </span>
            <button
              ref={opener}
              className="greeting-preview"
              onClick={open}
              aria-label={t("Ouvrir la présentation vidéo d’Achraf")}
            >
              <video
                ref={preview}
                poster="/images/founder-explaining-poster.jpg"
                src="/videos/founder-explaining.mp4"
                muted
                playsInline
                loop
                preload="metadata"
                aria-hidden="true"
                onPlay={() => setPreviewPlaying(true)}
                onPause={() => setPreviewPlaying(false)}
              />
              <span className="greeting-preview-shade" />
              <span className="greeting-preview-label">
                {t("Un mot d’Achraf")}
                <small>{t("Découvrez Keyvostra")}</small>
              </span>
              <span className="greeting-expand">
                <Icon name="open_in_full" />
              </span>
            </button>
            <button
              className="greeting-pause"
              aria-label={t(
                previewPlaying
                  ? "Mettre la miniature en pause"
                  : "Lire la miniature",
              )}
              onClick={() => {
                if (preview.current.paused)
                  preview.current.play().catch(() => {});
                else preview.current.pause();
              }}
            >
              <Icon name={previewPlaying ? "pause" : "play_arrow"} />
            </button>
          </>
        )}
      </aside>
      <dialog
        className="greeting-dialog"
        ref={dialog}
        onClose={onClose}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-labelledby="greeting-title"
      >
        <div className="greeting-dialog-inner">
          <button
            className="greeting-dialog-close"
            onClick={close}
            aria-label={t("Fermer la présentation vidéo")}
            autoFocus
          >
            <Icon name="close" />
          </button>
          <video
            ref={player}
            controls
            muted
            playsInline
            preload="none"
            poster="/images/founder-explaining-poster.jpg"
            onError={() => setFailed(true)}
          >
            <source src="/videos/founder-explaining.mp4" type="video/mp4" />
          </video>
          <div className="greeting-dialog-copy">
            <p id="greeting-title">{t("Faisons connaissance.")}</p>
            <span>{t("Achraf · Fondateur de Keyvostra Group")}</span>
            <p className="greeting-silent-label">
              {t("Présentation sans son")}
            </p>
            <p className="greeting-introduction">
              {t(
                "Keyvostra Group vous accompagne dans vos projets immobiliers au Maroc et au Royaume-Uni. Nous réunissons cinq expertises : investissement, gestion immobilière, maintenance, élaboration de plans d’affaires, location et vente.",
              )}
            </p>
            <p className="greeting-introduction">
              {t(
                "Notre approche : comprendre vos objectifs, vous conseiller avec transparence et suivre votre projet à chaque étape. Faisons connaissance et construisons la suite ensemble.",
              )}
            </p>
            {failed && (
              <p role="status">
                {t(
                  "La vidéo est indisponible. Contactez-nous pour parler de votre projet.",
                )}
              </p>
            )}
            <Link to="/#contact" className="kv-button" onClick={close}>
              {t("Parlons de votre projet")} <Icon name="arrow_outward" />
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
