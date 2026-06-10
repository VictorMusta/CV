import { useState, useEffect, useCallback } from "react";
import { Accessibility } from "lucide-react";

const STORAGE_KEY = "a11yMode";

/* CSS custom properties that the runtime ThemeCustomizer may set inline on
   <html>. Inline styles beat any stylesheet rule, so we clear them when the
   accessibility palette takes over, then they get re-applied if the user
   picks a theme again later. */
const THEME_VARS = [
  "--background",
  "--card",
  "--accent",
  "--accentSecondary",
  "--accentTertiary",
  "--border",
];

export default function AccessibilityToggle() {
  const [enabled, setEnabled] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "on";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      THEME_VARS.forEach((v) => root.style.removeProperty(v));
      root.setAttribute("data-a11y", "on");
    } else {
      root.removeAttribute("data-a11y");
    }
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
    } catch {
      /* storage unavailable — non blocking */
    }
  }, [enabled]);

  const toggle = useCallback(() => setEnabled((prev) => !prev), []);

  return (
    <button
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={
        enabled
          ? "Désactiver le mode accessibilité"
          : "Activer le mode accessibilité"
      }
      title={enabled ? "Mode accessibilité : activé" : "Mode accessibilité"}
      className={`a11y-toggle flex items-center justify-center w-10 h-10 border transition-all cyber-chamfer-sm ${
        enabled
          ? "border-accent text-accent bg-accent/10"
          : "border-border text-mutedForeground hover:border-accent hover:text-accent"
      }`}
    >
      <Accessibility size={18} />
    </button>
  );
}
