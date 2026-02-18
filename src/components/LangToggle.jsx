import { motion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";

export default function LangToggle() {
  const { lang, toggleLang } = useLang();

  const hint = lang === "fr" ? "Switch to English!" : "Passe en français !";

  return (
    <div className="lang-toggle-wrapper">
      <motion.span
        className="lang-toggle__hint"
        key={lang}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {hint}
        <span className="lang-toggle__hint-arrow">→</span>
      </motion.span>

      <motion.button
        className="lang-toggle"
        onClick={toggleLang}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={hint}
        title={hint}
      >
        <motion.span
          key={lang}
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 12, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="lang-toggle__label"
        >
          {lang === "fr" ? "FR" : "EN"}
        </motion.span>
      </motion.button>
    </div>
  );
}
