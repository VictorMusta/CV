import { useState, useRef, useCallback } from "react";
import { LayoutGroup } from "framer-motion";
import Timeline from "./components/Timeline";
import ContentView from "./components/ContentView";
import CVView from "./components/CVView";
import ThemeToggle from "./components/ThemeToggle";
import LangToggle from "./components/LangToggle";
import { LanguageProvider, useLang } from "./i18n/LanguageContext";
import timelineData, { careerData, projectData } from "./data/timelineData";
import "./styles/theme.css";
import "./App.css";

function PortfolioApp() {
  const { t } = useLang();

  /* ─── Theme ─── */
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  /* ─── Track toggle (career / project / cv) ─── */
  const [activeTrack, setActiveTrack] = useState("career");

  /* ─── Selected item ─── */
  const currentTrackData = activeTrack === "career" ? careerData : projectData;
  const [selectedId, setSelectedId] = useState(currentTrackData[0]?.id);
  const prevIndexRef = useRef(0);
  const [direction, setDirection] = useState(0);

  const handleSelect = useCallback(
    (id) => {
      const items = activeTrack === "career" ? careerData : projectData;
      const newIndex = items.findIndex((d) => d.id === id);
      setDirection(newIndex > prevIndexRef.current ? 1 : -1);
      prevIndexRef.current = newIndex;
      setSelectedId(id);
    },
    [activeTrack]
  );

  const handleTrackChange = useCallback(
    (track) => {
      if (track === activeTrack) return;
      setActiveTrack(track);
      if (track !== "cv") {
        const items = track === "career" ? careerData : projectData;
        setSelectedId(items[0]?.id);
        prevIndexRef.current = 0;
        setDirection(0);
      }
    },
    [activeTrack]
  );

  const selectedItem = timelineData.find((d) => d.id === selectedId);
  const showCV = activeTrack === "cv";

  return (
    <div className="portfolio" data-theme={theme}>
      {/* Ambient gradient background */}
      <div className="portfolio__ambient" />

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
