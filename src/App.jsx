import { useState, useRef, useCallback } from "react";
import { LayoutGroup } from "framer-motion";
import Timeline from "./components/Timeline";
import ContentView from "./components/ContentView";
import CVView from "./components/CVView";
import ThemeToggle from "./components/ThemeToggle";
import LangToggle from "./components/LangToggle";
import { LanguageProvider, useLang } from "./i18n/LanguageContext";
import timelineData, { careerData, projectData, educationData } from "./data/timelineData";
import "./styles/theme.css";
import "./App.css";

function PortfolioApp() {
  const { t } = useLang();

  /* ─── Glitch Effect ─── */
  const [isGlitching, setIsGlitching] = useState(false);
  const triggerGlitch = useCallback(() => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 200);
  }, []);

  /* ─── Theme ─── */
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "sunset");
  const toggleTheme = useCallback(() => {
    triggerGlitch();
    setTheme((prev) => {
      const next = prev === "sunset" ? "light" : "sunset";
      localStorage.setItem("theme", next);
      return next;
    });
  }, [triggerGlitch]);

  /* ─── Track toggle (career / project / cv) ─── */
  const [activeTrack, setActiveTrack] = useState("cv");

  /* ─── Selected item ─── */
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

      // Save for persistence
      setTrackSelections(prev => ({ ...prev, [activeTrack]: id }));

      const stepDirection = newIndex > currentIndex ? 1 : -1;
      setDirection(stepDirection);

      // If it's a direct neighbor, just jump
      if (Math.abs(newIndex - currentIndex) === 1) {
        prevIndexRef.current = newIndex;
        setSelectedId(id);
        return;
      }

      // Sequential jump through indices
      let tempIndex = currentIndex;
      
      const nextStep = () => {
        tempIndex += stepDirection;
        
        // Safety check
        if (tempIndex < 0 || tempIndex >= items.length) {
          if (jumpIntervalRef.current) clearInterval(jumpIntervalRef.current);
          jumpIntervalRef.current = null;
          return;
        }

        setSelectedId(items[tempIndex].id);
        prevIndexRef.current = tempIndex;

        if (tempIndex === newIndex) {
          if (jumpIntervalRef.current) clearInterval(jumpIntervalRef.current);
          jumpIntervalRef.current = null;
        }
      };

      // Start immediately
      nextStep();

      // Continue with interval if not finished
      if (tempIndex !== newIndex) {
        jumpIntervalRef.current = setInterval(nextStep, 150); // 150ms for a more dynamic feel
      }
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
    [activeTrack]
  );

  const selectedItem = timelineData.find((d) => d.id === selectedId);
  const showCV = activeTrack === "cv";

  return (
    <div className="portfolio" data-theme={theme} data-glitching={isGlitching}>
      {/* Ambient gradient background */}
      <div className="portfolio__ambient" />
      <div className="portfolio__texture" />


      {/* Header */}
      <header className="portfolio__header no-print">
        <div className="portfolio__brand">
          <h1 className="portfolio__name">
            Victor <span className="portfolio__name--accent">Grabowski</span>
          </h1>
          <p className="portfolio__tagline">{t.tagline}</p>
        </div>
        <div className="portfolio__controls">
          <LangToggle />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      {/* Main */}
      <main className="portfolio__main">
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
      <footer className="portfolio__footer no-print">
        <p>{t.footer(new Date().getFullYear())}</p>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
