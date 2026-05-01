import { useState, useEffect } from "react";
import { Settings, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : null;
};

const rgbToHex = (r, g, b) => {
  return "#" + [r, g, b].map(x => {
    const hex = parseInt(x).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
};

export default function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState({
    '--background': '#0a0a0f',
    '--card': '#12121a',
    '--accent': '#00ff88',
    '--border': '#2a2a3a',
    '--scanline-color': '#000000'
  });

  // Read initial CSS variables from document on mount
  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    const getHexFromVar = (varName) => {
      const rgbStr = rootStyle.getPropertyValue(varName).trim();
      if (!rgbStr) return null;
      const parts = rgbStr.split(' ');
      if (parts.length === 3) return rgbToHex(parts[0], parts[1], parts[2]);
      return null;
    };
    
    // We update safely once on mount
    const newColors = {
      '--background': getHexFromVar('--background') || '#0a0a0f',
      '--card': getHexFromVar('--card') || '#12121a',
      '--accent': getHexFromVar('--accent') || '#00ff88',
      '--border': getHexFromVar('--border') || '#2a2a3a',
      '--scanline-color': getHexFromVar('--scanline-color') || '#000000'
    };
    
    setColors(newColors);
  }, []);

  const handleChange = (varName, hexValue) => {
    setColors(prev => ({ ...prev, [varName]: hexValue }));
    const rgbStr = hexToRgb(hexValue);
    if (rgbStr) {
      document.documentElement.style.setProperty(varName, rgbStr);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100] font-mono no-print">
      <button 
        className="w-10 h-10 flex items-center justify-center border border-border bg-card text-mutedForeground hover:border-accent hover:text-accent cyber-chamfer-sm transition-all shadow-lg"
        onClick={() => setIsOpen(true)}
        aria-label="Open Debug Panel"
      >
        <Settings size={18} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute bottom-12 left-0 w-64 bg-card border border-border cyber-chamfer p-4 shadow-[0_0_20px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
          >
            <div className="flex justify-between items-center mb-4 border-b border-border pb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Theme Debug</span>
              <button onClick={() => setIsOpen(false)} className="text-mutedForeground hover:text-destructive transition-colors">
                <X size={14} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {Object.entries(colors).map(([varName, hex]) => (
                <div key={varName} className="flex justify-between items-center group">
                  <label className="text-[10px] uppercase text-foreground group-hover:text-accent transition-colors cursor-pointer" htmlFor={varName}>{varName.replace('--', '')}</label>
                  <div className="flex items-center gap-2 bg-background/50 pl-2 rounded-sm border border-border/50">
                    <span className="text-[9px] text-mutedForeground w-12">{hex}</span>
                    <input 
                      id={varName}
                      type="color" 
                      value={hex}
                      onChange={(e) => handleChange(varName, e.target.value)}
                      className="w-6 h-6 p-0 border-0 bg-transparent cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-3 border-t border-border text-[9px] text-mutedForeground leading-tight italic">
              Changes apply instantly globally. Refresh page to reset defaults.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
