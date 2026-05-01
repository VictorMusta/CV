import { motion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";

const languages = [
  { code: "fr", label: "FR", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "en", label: "EN", flag: "https://flagcdn.com/w40/us.png" },
  { code: "ja", label: "JA", flag: "https://flagcdn.com/w40/jp.png" },
  { code: "ko", label: "KO", flag: "https://flagcdn.com/w40/kr.png" },
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
          <img 
            src={l.flag} 
            alt={l.label}
            className={`w-4 h-auto object-contain transition-all ${
              lang === l.code ? "grayscale-0 opacity-100" : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
            }`}
          />
          <span className="hidden lg:block text-[10px] font-mono font-bold uppercase tracking-widest">
            {l.code}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
