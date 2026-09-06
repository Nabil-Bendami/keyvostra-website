import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const scroll = () => {
      const el = document.getElementById(hash.slice(1));
      if (!el) return false;
      el.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
      return true;
    };
    if (scroll()) return;
    const observer = new MutationObserver(() => {
      if (scroll()) observer.disconnect();
    });
    observer.observe(document.getElementById("root"), {
      childList: true,
      subtree: true,
    });
    return () => observer.disconnect();
  }, [pathname, hash, key]);
  return null;
}
