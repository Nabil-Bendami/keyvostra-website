import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function CinematicHero() {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);
  const pausedByUser = useRef(false);
  useEffect(() => {
    const el = video.current;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    const sync = () => {
      if (
        visible &&
        !document.hidden &&
        !motion.matches &&
        !pausedByUser.current
      )
        el.play().catch(() => {});
      else el.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(el);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  function toggle() {
    const el = video.current;
    pausedByUser.current = !el.paused;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  }
  return (
    <section className="cinematic-hero" aria-labelledby="hero-title">
      <video
        ref={video}
        className="cinematic-film"
        poster="/images/hero-drone-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-hidden="true"
      >
        <source
          src="/vedio/Drone_shot_of_modern_villas_202609021351.mp4"
          type="video/mp4"
        />
      </video>
      <div className="cinematic-shade" />
      <div className="cinematic-content">
        <p className="cinematic-kicker">
          <span className="status-dot" /> L’IMMOBILIER, DANS TOUTES SES
          DIMENSIONS.
        </p>
        <h1
          id="hero-title"
          className="cinematic-wordmark"
          aria-label="Keyvostra Group"
        >
          {"KEYVOSTRA".split("").map((letter, i) => (
            <span aria-hidden="true" style={{ "--letter": i }} key={i}>
              {letter}
            </span>
          ))}
          <span className="brand-period" aria-hidden="true">
            .
          </span>
        </h1>
        <div className="cinematic-group">G R O U P</div>
        <a className="hero-countries" href="#international">
          <span>MA · MAROC</span>
          <span aria-hidden="true">↔</span>
          <span>UK · UNITED KINGDOM</span>
          <Icon name="arrow_outward" />
        </a>
        <p className="cinematic-description">
          Votre patrimoine. Une vision d’ensemble.
          <br />
          <span>Votre partenaire immobilier au Maroc et au Royaume-Uni.</span>
        </p>
        <div className="hero-actions">
          <a className="kv-button" href="#contact">
            Parlons de votre projet <Icon name="arrow_outward" />
          </a>
          <a className="cinematic-secondary" href="#expertises">
            Découvrir nos expertises <Icon name="south" />
          </a>
        </div>
      </div>
      <div className="cinematic-bottom">
        <span>
          <Icon name="location_on" /> MAROC · UNITED KINGDOM
        </span>
        <a href="#approche" className="scroll-invitation">
          FAITES DÉFILER <Icon name="south" />
        </a>
        <button
          type="button"
          onClick={toggle}
          aria-label={
            playing ? "Mettre le fond vidéo en pause" : "Lire le fond vidéo"
          }
        >
          <Icon name={playing ? "pause" : "play_arrow"} />
        </button>
      </div>
    </section>
  );
}
