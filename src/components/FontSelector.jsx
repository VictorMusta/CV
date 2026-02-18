import React from "react";
import { Type } from "lucide-react";

const FONTS = [
  { group: "Sans Serif", items: [
    { name: "Inter", value: "'Inter', sans-serif" },
    { name: "Outfit", value: "'Outfit', sans-serif" },
    { name: "Montserrat", value: "'Montserrat', sans-serif" },
    { name: "Poppins", value: "'Poppins', sans-serif" },
    { name: "Lexend", value: "'Lexend', sans-serif" },
    { name: "DM Sans", value: "'DM Sans', sans-serif" },
  ]},
  { group: "Serif", items: [
    { name: "Playfair Display", value: "'Playfair Display', serif" },
    { name: "Lora", value: "'Lora', serif" },
    { name: "Merriweather", value: "'Merriweather', serif" },
    { name: "Cormorant Garamond", value: "'Cormorant Garamond', serif" },
    { name: "Fraunces", value: "'Fraunces', serif" },
  ]},
  { group: "Display & Artistic", items: [
    { name: "Syne", value: "'Syne', sans-serif" },
    { name: "Bricolage Grotesque", value: "'Bricolage Grotesque', sans-serif" },
    { name: "Space Grotesque", value: "'Space Grotesque', sans-serif" },
    { name: "Abril Fatface", value: "'Abril Fatface', display" },
    { name: "Righteous", value: "'Righteous', display" },
    { name: "Unbounded", value: "'Unbounded', display" },
  ]},
  { group: "Monospace", items: [
    { name: "JetBrains Mono", value: "'JetBrains Mono', monospace" },
    { name: "Fira Code", value: "'Fira Code', monospace" },
    { name: "Space Mono", value: "'Space Mono', monospace" },
  ]},
  { group: "Handwriting", items: [
    { name: "Pacifico", value: "'Pacifico', cursive" },
    { name: "Caveat", value: "'Caveat', cursive" },
    { name: "Dancing Script", value: "'Dancing Script', cursive" },
  ]},
  { group: "Retro & Gaming", items: [
    { name: "Press Start 2P", value: "'Press Start 2P', display" },
    { name: "Monoton", value: "'Monoton', display" },
    { name: "Bungee", value: "'Bungee', display" },
  ]}
];

export default function FontSelector({ currentFont, onFontChange, onFontPreview, onFontReset }) {
  return (
    <div className="font-selector">
      <div className="font-selector__trigger">
        <Type size={18} className="font-selector__icon" />
        <span className="font-selector__label">Typography</span>
      </div>
      <div className="font-selector__dropdown">
        <div className="font-selector__list">
          {FONTS.map((group) => (
            <div key={group.group} className="font-selector__group">
              <div className="font-selector__group-title">{group.group}</div>
              <div className="font-selector__group-items">
                {group.items.map((f) => (
                  <button
                    key={f.value}
                    className={`font-selector__option ${currentFont === f.value ? 'active' : ''}`}
                    onClick={() => onFontChange(f.value)}
                    onMouseEnter={() => onFontPreview(f.value)}
                    onMouseLeave={() => onFontReset()}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
