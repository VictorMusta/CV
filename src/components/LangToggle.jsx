import { motion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";

export default function LangToggle() {
  const { lang, toggleLang } = useLang();

  const hint = lang === "fr" ? "Switch to English!" : "Passe en français !";

  return (
    <div className="relative flex items-center gap-2">
      <motion.span
        className="hidden md:flex items-center gap-1 text-[10px] font-mono italic text-mutedForeground pointer-events-none select-none uppercase tracking-widest"
        key={lang}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {hint}
        <span className="inline-block animate-[hint-bounce_1.2s_ease-in-out_infinite] not-italic text-accent ml-1">→</span>
      </motion.span>

      <motion.button
        className="flex items-center justify-center h-10 px-3 border border-border bg-background text-mutedForeground font-mono text-[10px] uppercase font-bold tracking-widest cyber-chamfer-sm hover:border-accent hover:text-accent transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_10px_#00ff8840]"
        onClick={toggleLang}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={hint}
        title={hint}
      >
        <motion.span
          key={lang}
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 12, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="block"
        >
          {lang === "fr" ? "FR" : "EN"}
        </motion.span>
      </motion.button>
    </div>
  );
}
