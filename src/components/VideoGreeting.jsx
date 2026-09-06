import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function VideoGreeting() {
  const [collapsed, setCollapsed] = useState(false);
  const [opened, setOpened] = useState(false);
  const [failed, setFailed] = useState(false);
  const preview = useRef(null);
  const player = useRef(null);
  const dialog = useRef(null);
  const opener = useRef(null);
  const [previewPlaying, setPreviewPlaying] = useState(false);
  useEffect(() => {
    if (collapsed || opened) return;
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
  }, [collapsed, opened]);
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
    setOpened(false);
    opener.current?.focus();
  }
  return (
    <>
      <aside
        className={`video-greeting ${collapsed ? "is-collapsed" : ""}`}
        aria-label="Présentation vidéo de Keyvostra"
        hidden={opened}
      >
        {collapsed ? (
          <button
            className="greeting-reopen"
            onClick={() => setCollapsed(false)}
            aria-label="Afficher la vidéo de présentation"
          >
            <Icon name="play_arrow" />
            <span>Un mot d’Achraf</span>
          </button>
        ) : (
          <>
            <button
              className="greeting-dismiss"
              aria-label="Réduire la vidéo de présentation"
              onClick={() => setCollapsed(true)}
            >
              <Icon name="close" />
            </button>
            <span className="greeting-bubble">
              Bonjour ! <span aria-hidden="true">✦</span>
            </span>
            <button
              ref={opener}
              className="greeting-preview"
              onClick={open}
              aria-label="Ouvrir la présentation vidéo d’Achraf"
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
                Un mot d’Achraf<small>Découvrez Keyvostra</small>
              </span>
              <span className="greeting-expand">
                <Icon name="open_in_full" />
              </span>
            </button>
            <button
              className="greeting-pause"
              aria-label={
                previewPlaying
                  ? "Mettre la miniature en pause"
                  : "Lire la miniature"
              }
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
            aria-label="Fermer la présentation vidéo"
            autoFocus
          >
            <Icon name="close" />
          </button>
          <video
            ref={player}
            controls
            playsInline
            preload="none"
            poster="/images/founder-explaining-poster.jpg"
            onError={() => setFailed(true)}
          >
            <source
              src="/vedio/Businessman_explaining_in_office_202609021653.mp4"
              type="video/mp4"
            />
          </video>
          <div className="greeting-dialog-copy">
            <p id="greeting-title">Faisons connaissance.</p>
            <span>Achraf · Fondateur de Keyvostra Group</span>
            {failed && (
              <p role="status">
                La vidéo est indisponible. Contactez-nous pour parler de votre
                projet.
              </p>
            )}
            <Link to="/#contact" className="kv-button" onClick={close}>
              Parlons de votre projet <Icon name="arrow_outward" />
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
