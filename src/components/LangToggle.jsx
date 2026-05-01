import { motion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";

const languages = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "ja", label: "JA", flag: "🇯🇵" },
  { code: "ko", label: "KO", flag: "🇰🇷" },
];

export default function LangToggle() {
  const { lang, changeLang } = useLang();

  return (
    <div className="flex items-center gap-1.5 md:gap-2">
      {languages.map((l) => (
        <motion.button
          key={l.code}
          className={`flex items-center gap-2 h-10 px-2.5 border transition-all cyber-chamfer-sm group ${
            lang === l.code 
              ? "border-accent text-accent bg-accent/10 shadow-[0_0_10px_#00ff8840]" 
              : "border-border text-mutedForeground bg-background/50 hover:border-accent hover:text-accent"
          }`}
          onClick={() => changeLang(l.code)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={l.label}
        >
          <span className="text-sm grayscale group-hover:grayscale-0 transition-all">
            {l.flag}
          </span>
          <span className="hidden lg:block text-[10px] font-mono font-bold uppercase tracking-widest">
            {l.code}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
