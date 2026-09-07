import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { languages, useTranslation } from "../i18n";
import Icon from "./Icon";
import "../styles/welcome.css";

const STORAGE_KEY = "keyvostra-welcome-seen";

export default function WelcomeIntro() {
  const { t, language, setLanguage } = useTranslation();
  const dialog = useRef(null);
  const returnFocus = useRef(null);
  const enterButton = useRef(null);
  const [closing, setClosing] = useState(false);
  const [edition, setEdition] = useState(0);
  const [previewRequested] = useState(
    () => new URLSearchParams(window.location.search).get("intro") === "1",
  );
  const [playMotion, setPlayMotion] = useState(previewRequested);

  useLayoutEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* Welcome still works without storage. */
    }
    if (!seen || previewRequested) dialog.current.showModal();
    const replay = () => {
      if (dialog.current.open) return;
      returnFocus.current = document.activeElement;
      setClosing(false);
      setPlayMotion(true);
      setEdition((value) => value + 1);
      dialog.current.showModal();
    };
    window.addEventListener("keyvostra:welcome", replay);
    return () => window.removeEventListener("keyvostra:welcome", replay);
  }, [previewRequested]);

  useLayoutEffect(() => {
    if (dialog.current.open) enterButton.current?.focus();
  }, [edition]);

  useEffect(() => {
    if (!closing) return;
    const delay = matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : 500;
    const timer = window.setTimeout(() => {
      dialog.current.close();
      const target = returnFocus.current?.isConnected
        ? returnFocus.current
        : document.getElementById("main-content");
      target?.focus({ preventScroll: true });
      setClosing(false);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [closing]);

  function enter() {
    if (closing) return;
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* Dismissal does not depend on storage. */
    }
    setClosing(true);
  }

  return (
    <dialog
      ref={dialog}
      className={`welcome-intro ${playMotion ? "welcome-play-motion" : ""} ${closing ? "welcome-leaving" : ""}`}
      aria-labelledby="welcome-title"
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const buttons = [...dialog.current.querySelectorAll("button")];
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        enter();
      }}
    >
      <div className="welcome-scene" key={edition}>
        <div className="welcome-glow welcome-glow-blue" aria-hidden="true" />
        <div className="welcome-glow welcome-glow-gold" aria-hidden="true" />
        <div className="welcome-topbar">
          <span className="welcome-monogram" aria-hidden="true">
            <svg viewBox="0 0 40 44" fill="none">
              <path
                d="M5 38V8L18 3V38M23 3V38M23 22L36 8M23 22L36 38"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
          <button type="button" className="welcome-skip" onClick={enter}>
            {t("Passer l’introduction")}
            <Icon name="arrow_forward" />
          </button>
        </div>
        <div className="welcome-center">
          <svg
            className="welcome-handwriting"
            viewBox="0 0 500 200"
            aria-hidden="true"
            fill="none"
          >
            <defs>
              <linearGradient
                id="welcome-ink"
                x1="0"
                y1="0"
                x2="500"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#153867" />
                <stop offset=".5" stopColor="#527a9c" />
                <stop offset="1" stopColor="#ab8559" />
              </linearGradient>
            </defs>
            <g
              stroke="url(#welcome-ink)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                pathLength="100"
                style={{ "--ink-delay": ".15s" }}
                d="M40 148 C62 116 100 49 95 27 C91 7 71 30 68 61 L55 151 C66 124 88 98 101 111 C111 124 90 153 107 155 C119 155 132 143 141 130"
              />
              <path
                pathLength="100"
                style={{ "--ink-delay": ".7s" }}
                d="M141 130 C189 117 171 91 151 111 C125 136 139 166 165 154 C187 144 206 120 222 92"
              />
              <path
                pathLength="100"
                style={{ "--ink-delay": "1.15s" }}
                d="M222 92 C241 61 254 15 240 20 C219 24 199 95 202 132 C204 175 229 155 251 128"
              />
              <path
                pathLength="100"
                style={{ "--ink-delay": "1.55s" }}
                d="M251 128 C284 86 315 13 296 17 C272 22 256 109 265 140 C273 170 296 153 312 133"
              />
              <path
                pathLength="100"
                style={{ "--ink-delay": "1.95s" }}
                d="M356 110 C329 92 300 122 310 147 C324 176 361 149 363 123 C365 106 351 101 350 117 C349 138 384 140 422 119"
              />
            </g>
          </svg>
          <h2 id="welcome-title">
            <span>{t("Bienvenue chez")}</span>
            <strong dir="ltr">
              <span className="sr-only">Keyvostra Group</span>
              <svg
                className="welcome-brand-handwriting"
                viewBox="0 0 780 180"
                fill="none"
                aria-hidden="true"
              >
                <g
                  stroke="url(#welcome-ink)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {[
                    "M25 120 C47 88 77 25 64 18 C48 11 40 74 39 127 M42 111 C59 84 94 72 86 89 C80 103 60 109 55 109 C69 106 73 134 89 127 L108 112",
                    "M108 112 C151 101 137 80 120 93 C98 110 107 140 132 127 C149 119 158 109 167 96",
                    "M167 96 C153 135 174 139 199 95 C190 121 186 170 168 168 C149 165 185 141 219 119 L239 99",
                    "M239 99 C235 147 267 136 279 100 C287 84 275 84 282 101 C286 111 302 112 313 106",
                    "M351 94 C327 81 303 105 310 125 C321 148 355 124 356 103 C357 87 345 87 346 101 C348 116 373 114 387 103",
                    "M387 103 C419 74 431 88 409 96 C392 103 399 108 412 113 C435 128 398 144 389 128 C388 121 407 130 437 113 L449 101",
                    "M480 42 C464 64 449 108 452 122 C456 141 481 123 502 106 M437 82 L488 76",
                    "M502 106 L507 91 C513 82 525 88 512 107 L505 129 C519 104 536 86 543 96 C549 103 535 112 552 115 L574 101",
                    "M616 97 C599 79 569 99 573 121 C577 143 604 123 617 97 C606 127 612 139 636 121 C663 101 690 111 730 99",
                  ].map((d, index) => (
                    <path
                      key={index}
                      d={d}
                      pathLength="100"
                      style={{ "--ink-delay": `${2.85 + index * 0.3}s` }}
                    />
                  ))}
                </g>
              </svg>
              <span className="welcome-group" aria-hidden="true">
                GROUP
              </span>
            </strong>
          </h2>
          <p className="welcome-tagline">
            {t("Un nouveau chapitre commence ici.")}
          </p>
        </div>
        <div className="welcome-bottom">
          <button
            type="button"
            className="welcome-enter"
            ref={enterButton}
            onClick={enter}
            autoFocus
          >
            <span className="welcome-enter-icon">
              <Icon name="arrow_forward" />
            </span>
            <span>{t("Entrer dans notre univers")}</span>
          </button>
          <button
            type="button"
            className="welcome-restart"
            onClick={() => {
              setPlayMotion(true);
              setEdition((value) => value + 1);
            }}
          >
            <Icon name="replay" />
            {t("Rejouer l’animation")}
          </button>
          <div
            className="welcome-languages"
            role="group"
            aria-label={t("Langue du site")}
          >
            {languages.map(({ code, label }) => (
              <button
                type="button"
                key={code}
                lang={code}
                aria-pressed={language === code}
                onClick={() => setLanguage(code)}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="welcome-home-indicator" aria-hidden="true" />
        </div>
      </div>
    </dialog>
  );
}
