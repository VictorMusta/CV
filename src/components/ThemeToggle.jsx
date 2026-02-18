import { motion } from "framer-motion";
import { Sunset, Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  const getNextTheme = () => {
    return theme === "sunset" ? "light" : "sunset";
  };

  const renderIcon = () => {
    if (theme === "sunset") return <Sunset size={18} strokeWidth={1.8} />;
    return <Sun size={18} strokeWidth={1.8} />;
  };

  return (
    <motion.button
      className="theme-toggle"
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
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
