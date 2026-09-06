import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

/**
 * Floating "Réserver une consultation" bar for mobile, where the navbar hides its
 * CTA behind the hamburger menu. Desktop already keeps the button visible in
 * the fixed navbar, so this stays hidden at md+ to avoid a redundant CTA.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location.pathname === "/contact") return null;

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 px-margin-mobile py-4 bg-surface/95 backdrop-blur-xl border-t border-outline/30 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        to="/#contact"
        className="w-full bg-primary text-on-primary font-label-md text-label-md px-6 py-4 rounded flex items-center justify-center gap-2"
      >
        Réserver une consultation
        <Icon name="arrow_forward" className="text-[18px]" />
      </Link>
    </div>
  );
}
