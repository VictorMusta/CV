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
    <div className={`timeline-wrapper ${activeTrack === "cv" ? "timeline-wrapper--cv" : ""}`}>
      {/* Track toggle pills */}
      <div className="timeline__toggle">
        {Object.entries(TRACK_LABELS).map(([key, label]) => (
          <button
            key={key}
            className={`timeline__pill ${activeTrack === key ? "timeline__pill--active" : ""}`}
            onClick={() => onTrackChange(key)}
          >
            {label}
            {activeTrack === key && (
              <motion.span
                className="timeline__pill-bg"
                layoutId="pill"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Horizontal scrollable node strip — hidden on CV tab */}
      {activeTrack !== "cv" && (
      <div className="timeline" ref={scrollRef} role="tablist" aria-label="Timeline">
        <div className="timeline__line" />

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
                className={`timeline__node ${isActive ? "timeline__node--active" : ""}`}
                onClick={() => onSelect(item.id)}
                style={{ "--node-color": item.color }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
                role="tab"
                aria-selected={isActive}
                aria-label={`${title} — ${item.year}`}
              >
                <span className="timeline__icon">
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <span className="timeline__label">
                  <span className="timeline__title">{title}</span>
                  <span className="timeline__year">{item.year}</span>
                </span>
              </motion.button>
            );
          })}
      </div>
      )}
    </div>
  );
}
