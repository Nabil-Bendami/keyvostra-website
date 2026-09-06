import { useEffect, useState } from "react";

/**
 * Autoplaying, muted, looping background video with a poster frame for
 * instant paint. Falls back to a static poster image for users who have
 * `prefers-reduced-motion` set, since autoplaying video is a motion trigger.
 *
 * Decorative rather than informational (the founder's name/title is always
 * rendered as visible text beside it), so the video itself stays out of the
 * accessibility tree.
 */
export default function BackgroundVideo({ src, poster, className = "", priority = false }) {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) {
    return (
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className={className}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? undefined : "lazy"}
      />
    );
  }

  return (
    <video
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={priority ? "auto" : "metadata"}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
