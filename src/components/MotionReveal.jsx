import { useEffect, useRef } from "react";
export default function MotionReveal({ children }) {
  const root = useRef(null);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let observer;
    const elements = root.current.querySelectorAll(
      ".invest-reveal, .international-copy, .uk-founder-card, .section-heading, .founder-showcase, .founder-copy, .expertise-card, .home-project, .trust-promises > div, .contact-section > div",
    );
    function setup() {
      observer?.disconnect();
      elements.forEach((el) => el.classList.remove("reveal-waiting"));
      if (motion.matches) return;
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("reveal-waiting");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.08 },
      );
      elements.forEach((el) => {
        el.classList.add("scroll-reveal");
        if (el.getBoundingClientRect().top > innerHeight) {
          el.classList.add("reveal-waiting");
          observer.observe(el);
        }
      });
    }
    setup();
    motion.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", setup);
      elements.forEach((el) => el.classList.remove("reveal-waiting"));
    };
  }, []);
  return (
    <div ref={root} className="home-page motion-home">
      {children}
    </div>
  );
}
