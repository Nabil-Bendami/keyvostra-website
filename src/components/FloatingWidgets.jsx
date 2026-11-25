import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StickyCTA from "./StickyCTA";
import WhatsAppFab from "./WhatsAppFab";
import VideoGreeting from "./VideoGreeting";

export default function FloatingWidgets() {
  const { pathname } = useLocation();
  const [docked, setDocked] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const visible = new Set();
    const observed = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setDocked(visible.size > 0);
        setFooterVisible([...visible].some((element) => element.matches(".kv-footer")));
      },
      { rootMargin: "80px 0px" },
    );
    const observeContacts = () => {
      document.querySelectorAll(".contact-section, .svc-inquiry, .kv-footer")
        .forEach((element) => {
          if (observed.has(element)) return;
          observed.add(element);
          observer.observe(element);
        });
    };
    observeContacts();
    // Route sections are lazy-loaded; observe them when Suspense resolves.
    const mutations = new MutationObserver(observeContacts);
    mutations.observe(document.getElementById("main-content"), {
      childList: true,
      subtree: true,
    });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return (
    <div className={`floating-widgets ${docked ? "is-docked" : ""} ${footerVisible ? "is-footer-visible" : ""}`}>
      <StickyCTA />
      <div className="floating-widget-actions">
        <WhatsAppFab />
        <VideoGreeting docked={footerVisible} />
      </div>
    </div>
  );
}
