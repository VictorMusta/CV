import { createContext, useContext, useState, useCallback, useMemo } from "react";
import en from "./en";
import fr from "./fr";
import ja from "./ja";
import ko from "./ko";

const translations = { en, fr, ja, ko };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "fr");

  const changeLang = useCallback((newLang) => {
    if (translations[newLang]) {
      setLang(newLang);
      localStorage.setItem("lang", newLang);
    }
  }, []);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
