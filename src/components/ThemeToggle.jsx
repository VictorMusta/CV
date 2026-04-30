import { motion } from "framer-motion";
import { Sunset, Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  const getNextTheme = () => {
    return theme === "dark" ? "light" : "dark";
  };

  const renderIcon = () => {
    if (theme === "dark") return <Moon size={16} strokeWidth={1.8} />;
    return <Sun size={16} strokeWidth={1.8} />;
  };

  return (
    <motion.button
      className="flex items-center justify-center w-10 h-10 border border-border bg-background text-mutedForeground hover:border-accent hover:text-accent cyber-chamfer-sm transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_10px_#00ff8840]"
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${getNextTheme()} mode`}
      title={`Switch to ${getNextTheme()} mode`}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderIcon()}
      </motion.span>
    </motion.button>
  );
}
