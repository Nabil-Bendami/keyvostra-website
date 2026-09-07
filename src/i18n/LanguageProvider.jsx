import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext, isLanguage, translate } from "./index";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem("keyvostra-language");
      return isLanguage(saved) ? saved : "fr";
    } catch {
      return "fr";
    }
  });
  const setLanguage = useCallback((next) => {
    if (!isLanguage(next)) return;
    setLanguageState(next);
    try {
      localStorage.setItem("keyvostra-language", next);
    } catch {
      /* Storage may be disabled. */
    }
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  const t = useCallback((value) => translate(value, language), [language]);
  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
