import { createContext, useContext } from "react";
import messages from "./messages.json";

export const languages = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];
export const LanguageContext = createContext(null);
export const isLanguage = (value) =>
  languages.some(({ code }) => code === value);

export function translate(value, language) {
  if (typeof value !== "string") return value;
  const key = value.replace(/\s+/g, " ").trim();
  return messages[key]?.[language] ?? value;
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation requires LanguageProvider");
  return context;
}
