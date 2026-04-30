import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";

/* ─────────────────── component ─────────────────── */
export default function Timeline({ data, selectedId, onSelect, activeTrack, onTrackChange }) {
  const { t } = useLang();
  const scrollRef = useRef(null);
  const activeNodeRef = useRef(null);

  const TRACK_LABELS = { 
    cv: "CV", 
    career: t.trackCareer, 
    education: t.trackEducation,
    project: t.trackProjects 
  };

  /* auto-scroll to keep the active node visible */
  useEffect(() => {
    if (activeNodeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const node = activeNodeRef.current;
      const nodeLeft = node.offsetLeft;
      const nodeWidth = node.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollTarget = nodeLeft - containerWidth / 2 + nodeWidth / 2;
      container.scrollTo({ left: scrollTarget, behavior: "smooth" });
    }
  }, [selectedId]);

  const careerItems = data.filter((d) => d.type === "career");
  const educationItems = data.filter((d) => d.type === "education");
  const projectItems = data.filter((d) => d.type === "project");

  const tracks = [
    { key: "career", items: careerItems },
    { key: "education", items: educationItems },
    { key: "project", items: projectItems },
  ];

  /* Resolve the display title — education title comes from i18n */
  const getTitle = (item) => {
    if (item.id === "education") return t.education?.title || item.title || "Education";
    return item.title;
  };

  return (
    <div className={`flex flex-col border-b border-border bg-card/90 backdrop-blur-md relative z-10 ${activeTrack === "cv" ? "mb-8 pb-4" : ""}`}>
      {/* Track toggle pills */}
      <div className="flex gap-4 px-6 pt-4 pb-2 overflow-x-auto [&::-webkit-scrollbar]:hidden whitespace-nowrap">
        {Object.entries(TRACK_LABELS).map(([key, label]) => (
          <button
            key={key}
            className={`relative px-4 py-1.5 border cyber-chamfer-sm uppercase font-mono text-xs tracking-widest transition-all z-10 ${
              activeTrack === key 
                ? "border-accent text-background drop-shadow-glow" 
                : "border-border text-mutedForeground hover:border-accent hover:text-accent hover:drop-shadow-glow"
            }`}
            onClick={() => onTrackChange(key)}
          >
            {label}
            {activeTrack === key && (
              <motion.span
                className="absolute inset-0 bg-accent z-[-1] cyber-chamfer-sm"
                layoutId="pill"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Horizontal scrollable node strip — hidden on CV tab */}
      {activeTrack !== "cv" && (
      <div className="relative flex items-center gap-12 px-8 py-6 overflow-x-auto [&::-webkit-scrollbar]:hidden scroll-smooth" ref={scrollRef} role="tablist" aria-label="Timeline">
        {/* Technical line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border opacity-50 pointer-events-none" />

        {tracks
          .find((tr) => tr.key === activeTrack)
          ?.items.map((item, index) => {
            const isActive = selectedId === item.id;
            const Icon = item.icon;
            const title = getTitle(item);

            return (
              <motion.button
                ref={isActive ? activeNodeRef : null}
                key={item.id}
                className={`relative flex-shrink-0 flex flex-col items-center justify-between h-28 px-4 transition-all group z-10 ${
                  isActive ? "text-accent drop-shadow-glow" : "text-mutedForeground hover:text-foreground"
                }`}
                onClick={() => onSelect(item.id)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
                role="tab"
                aria-selected={isActive}
                aria-label={`${title} — ${item.year}`}
              >
                {/* Node icon */}
                <span className={`grid place-items-center w-10 h-10 border border-border bg-card cyber-chamfer-sm transition-all z-10 ${isActive ? 'border-accent bg-accent/10 shadow-[0_0_10px_#00ff8840]' : 'group-hover:border-accent/50'}`}>
                  <Icon size={18} strokeWidth={1.5} className={isActive ? "text-accent" : ""} />
                </span>

                {/* Node point on the line */}
                <span className={`absolute top-1/2 left-1/2 w-3 h-3 border border-border bg-card transform -translate-x-1/2 -translate-y-1/2 rotate-45 transition-all z-0 ${isActive ? 'border-accent bg-accent drop-shadow-glow scale-125' : 'group-hover:border-accent'}`}></span>

                {/* Label */}
                <span className="flex flex-col text-center mt-auto">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest">{title}</span>
                  <span className="font-mono text-[10px] uppercase text-mutedForeground mt-1">{item.year}</span>
                </span>
              </motion.button>
            );
          })}
      </div>
      )}
    </div>
  );
}
