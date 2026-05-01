import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Shuffle, X, Check } from "lucide-react";

const themes = [
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    colors: {
      "--background": "10 10 15",
      "--card": "18 18 26",
      "--accent": "0 255 136",
      "--accentSecondary": "255 0 255",
      "--accentTertiary": "0 212 255",
      "--border": "42 42 58",
    }
  },
  {
    id: "synthwave",
    name: "Synthwave",
    colors: {
      "--background": "35 15 50",
      "--card": "45 20 65",
      "--accent": "255 0 255",
      "--accentSecondary": "0 255 255",
      "--accentTertiary": "255 212 0",
      "--border": "80 40 110",
    }
  },
  {
    id: "matrix",
    name: "Matrix",
    colors: {
      "--background": "0 5 0",
      "--card": "0 15 0",
      "--accent": "0 255 65",
      "--accentSecondary": "0 143 0",
      "--accentTertiary": "0 59 0",
      "--border": "0 60 0",
    }
  },
  {
    id: "nord",
    name: "Nordic",
    colors: {
      "--background": "46 52 64",
      "--card": "59 66 82",
      "--accent": "136 192 208",
      "--accentSecondary": "129 161 193",
      "--accentTertiary": "94 129 172",
      "--border": "76 86 106",
    }
  },
  {
    id: "gold",
    name: "Golden",
    colors: {
      "--background": "20 15 10",
      "--card": "30 25 20",
      "--accent": "255 215 0",
      "--accentSecondary": "218 165 32",
      "--accentTertiary": "184 134 11",
      "--border": "60 50 40",
    }
  }
];

const hslToRgb = (h, s, l) => {
  l /= 100;
  const sFraction = s / 100;
  const a = sFraction * Math.min(l, 1 - l);
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color);
  };
  return `${f(0)} ${f(8)} ${f(4)}`;
};

export default function ThemeCustomizer({ onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("cyberpunk");
  const containerRef = useRef(null);
  const lastHueRef = useRef(150);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const applyTheme = useCallback((themeColors, id) => {
    const root = document.documentElement;
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    const themedElements = document.querySelectorAll('[data-theme]');
    themedElements.forEach(el => el.setAttribute("data-theme", id));
    
    setActiveTheme(id);
    if (onThemeChange) onThemeChange();
  }, [onThemeChange]);

  const generateRandomTheme = useCallback(() => {
    let newHue;
    let attempts = 0;
    
    do {
      newHue = Math.floor(Math.random() * 360);
      attempts++;
    } while (Math.abs(newHue - lastHueRef.current) < 60 && attempts < 10);
    
    lastHueRef.current = newHue;

    const randomTheme = {
      "--background": hslToRgb(newHue, 30, 5),
      "--card": hslToRgb(newHue, 25, 8),
      "--accent": hslToRgb(newHue, 100, 50),
      "--accentSecondary": hslToRgb((newHue + 60) % 360, 100, 50),
      "--accentTertiary": hslToRgb((newHue + 180) % 360, 100, 50),
      "--border": hslToRgb(newHue, 20, 20),
    };
    applyTheme(randomTheme, "custom");
  }, [applyTheme]);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-10 h-10 border transition-all cyber-chamfer-sm ${
          isOpen ? "border-accent text-accent bg-accent/10 shadow-[0_0_10px_#00ff8840]" : "border-border text-mutedForeground hover:border-accent hover:text-accent"
        }`}
        title="Theme Options"
      >
        <Palette size={18} />
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-12 right-0 w-64 bg-card border border-border cyber-chamfer p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] z-[200]"
          >
            <div className="flex justify-between items-center mb-4 border-b border-border/50 pb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent">Design System</span>
              <button onClick={() => setIsOpen(false)} className="text-mutedForeground hover:text-accent transition-colors">
                <X size={14} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => applyTheme(t.colors, t.id)}
                  className={`flex items-center justify-between px-3 py-2 border text-[10px] font-mono uppercase tracking-widest transition-all cyber-chamfer-sm group ${
                    activeTheme === t.id ? "border-accent text-accent bg-accent/5 shadow-glow" : "border-border/50 text-mutedForeground hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: `rgb(${t.colors["--accent"]})` }}
                    />
                    {t.name}
                  </div>
                  {activeTheme === t.id && <Check size={12} />}
                </button>
              ))}

              <button
                onClick={generateRandomTheme}
                className="mt-2 flex items-center justify-center gap-2 px-3 py-2 border border-accent bg-accent/10 text-accent text-[10px] font-mono uppercase tracking-widest hover:bg-accent hover:text-background transition-all cyber-chamfer-sm group"
              >
                <Shuffle size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                Random Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
