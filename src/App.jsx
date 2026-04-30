import { useState, useRef, useCallback } from "react";
import { LayoutGroup } from "framer-motion";
import Timeline from "./components/Timeline";
import ContentView from "./components/ContentView";
import CVView from "./components/CVView";
import ThemeToggle from "./components/ThemeToggle";
import LangToggle from "./components/LangToggle";
import DebugPanel from "./components/DebugPanel";
import { LanguageProvider, useLang } from "./i18n/LanguageContext";
import timelineData, { careerData, projectData, educationData } from "./data/timelineData";

function PortfolioApp() {
  const { t } = useLang();

  /* ─── Glitch Effect ─── */
  const [isGlitching, setIsGlitching] = useState(false);
  const triggerGlitch = useCallback(() => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  }, []);

  /* ─── Theme ─── */
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const toggleTheme = useCallback(() => {
    triggerGlitch();
    // In Cyberpunk mode, we only have one dark theme, but keeping logic for compatibility
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  }, [triggerGlitch]);

  /* ─── Track toggle (career / project / cv) ─── */
  const [activeTrack, setActiveTrack] = useState("cv");

  /* ─── Selected items persistence per track ─── */
  const [trackSelections, setTrackSelections] = useState({
    career: careerData[careerData.length - 1]?.id,
    education: educationData[educationData.length - 1]?.id,
    project: projectData[projectData.length - 1]?.id,
  });

  const [selectedId, setSelectedId] = useState(trackSelections.career);
  const prevIndexRef = useRef(careerData.length - 1);
  const [direction, setDirection] = useState(0);

  /* Sequential Jump Logic */
  const jumpIntervalRef = useRef(null);

  const handleSelect = useCallback(
    (id) => {
      const items = 
        activeTrack === "career" ? careerData : 
        activeTrack === "education" ? educationData : 
        projectData;

      const newIndex = items.findIndex((d) => d.id === id);
      const currentIndex = prevIndexRef.current;
      
      if (newIndex === currentIndex) return;
      if (jumpIntervalRef.current) clearInterval(jumpIntervalRef.current);

      setTrackSelections(prev => ({ ...prev, [activeTrack]: id }));

      const stepDirection = newIndex > currentIndex ? 1 : -1;
      setDirection(stepDirection);

      // Direct jump to avoid AnimatePresence queue getting stuck from rapid key changes
      prevIndexRef.current = newIndex;
      setSelectedId(id);
    },
    [activeTrack]
  );

  const handleTrackChange = useCallback(
    (track) => {
      if (track === activeTrack) return;
      
      triggerGlitch();
      const trackIndices = { cv: 0, career: 1, education: 2, project: 3 };
      const newIndex = trackIndices[track];
      const oldIndex = trackIndices[activeTrack];
      
      setDirection(newIndex > oldIndex ? 1 : -1);
      setActiveTrack(track);
      
      if (track !== "cv") {
        const items = 
          track === "career" ? careerData : 
          track === "education" ? educationData : 
          projectData;

        const targetId = trackSelections[track];
        const targetIndex = items.findIndex(d => d.id === targetId);
        
        setSelectedId(targetId);
        prevIndexRef.current = targetIndex >= 0 ? targetIndex : items.length - 1;
      }
    },
    [activeTrack, trackSelections, triggerGlitch]
  );

  const selectedItem = timelineData.find((d) => d.id === selectedId);
  const showCV = activeTrack === "cv";

  return (
    <>
    <div 
      className={`relative flex flex-col min-h-screen bg-background text-foreground cyber-grid-bg ${isGlitching ? 'animate-glitch' : ''}`}
      data-theme="dark"
    >
      <div className="scanline-overlay" />

      {/* Header */}
      <header className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b-2 border-border bg-card cyber-chamfer-sm no-print">
        <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-4 mb-4 md:mb-0">
          <h1 
            className="text-2xl md:text-3xl font-display font-black uppercase tracking-[0.2em] cyber-glitch text-foreground"
            data-text="VICTOR GRABOWSKI"
          >
            VICTOR <span className="text-accent drop-shadow-glow">GRABOWSKI</span>
          </h1>
          <p className="text-xs font-mono text-accent-tertiary uppercase tracking-widest flex items-center">
            <span className="mr-2 text-accent">{'>'}</span>{t.tagline}
            <span className="inline-block w-2 h-4 ml-1 bg-accent animate-blink"></span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <LangToggle />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col overflow-hidden">
        <LayoutGroup>
          <Timeline
            data={timelineData}
            selectedId={selectedId}
            onSelect={handleSelect}
            activeTrack={activeTrack}
            onTrackChange={handleTrackChange}
          />
          {showCV ? (
            <CVView />
          ) : (
            <ContentView item={selectedItem} direction={direction} />
          )}
        </LayoutGroup>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center px-6 py-4 text-xs font-mono text-mutedForeground border-t border-border bg-card uppercase tracking-widest no-print">
        <p className="flex items-center justify-center gap-2">
          <span className="text-accent">{'>'}</span> {t.footer(new Date().getFullYear())}
        </p>
      </footer>

    </div>
      <DebugPanel />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
