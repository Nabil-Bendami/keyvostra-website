import { useEffect, useRef } from "react";

export default function FooterWordmark() {
  const container = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const context = document.createElement("canvas").getContext("2d");
    const fit = () => {
      if (!context) return;
      const style = getComputedStyle(text.current);
      context.font = `${style.fontWeight} 100px ${style.fontFamily}`;
      const width = context.measureText("KEYVOSTRA").width;
      text.current.style.fontSize = `${container.current.clientWidth * 98 / width}px`;
    };
    const observer = new ResizeObserver(fit);
    observer.observe(container.current);
    fit();
    // Fit again when the actual brand font replaces its fallback.
    document.fonts.addEventListener("loadingdone", fit);
    return () => {
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", fit);
    };
  }, []);

  return (
    <p className="footer-wordmark" ref={container} dir="ltr" aria-hidden="true">
      <span ref={text}>KEYVOSTRA</span>
    </p>
  );
}
