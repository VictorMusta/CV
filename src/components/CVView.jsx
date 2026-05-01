import { useState, useCallback } from "react";
import { useLang } from "../i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Download, MapPin, Mail, Github, Phone, ExternalLink } from "lucide-react";
import { careerData, projectData, educationData } from "../data/timelineData";

export default function CVView() {
  const { t } = useLang();

  const handleExport = useCallback((theme) => {
    /* Temporarily apply theme for print */
    const root = document.querySelector(".portfolio");
    const original = root?.getAttribute("data-theme");
    if (root) root.setAttribute("data-theme", theme);

    /* Also add a class to force colors in print */
    document.body.classList.add(`print-theme-${theme}`);
    document.documentElement.classList.add(`print-theme-${theme}`);

    setTimeout(() => {
      window.print();
      /* Restore original theme after print dialog */
      if (root) root.setAttribute("data-theme", original || "dark");
      document.body.classList.remove(`print-theme-${theme}`);
      document.documentElement.classList.remove(`print-theme-${theme}`);
    }, 100);
  }, []);

  /* career sorted most recent first */
  const career = [...careerData].sort((a, b) => b.sortYear - a.sortYear);
  const projects = [...projectData].sort((a, b) => b.sortYear - a.sortYear);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4 md:p-8 font-mono text-foreground" id="cv-view">
      {/* Export button with theme picker — hidden in print */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2 no-print">
        <motion.button
          className="flex items-center gap-2 px-6 py-3 bg-background border border-accent text-accent uppercase tracking-widest text-xs font-bold cyber-chamfer-sm hover:bg-accent hover:text-background hover:drop-shadow-glow transition-all shadow-[0_0_15px_#00ff8840]"
          onClick={() => handleExport("light")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={16} />
          {t.common.exportPdf}
        </motion.button>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border cyber-chamfer p-8 md:p-12 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
        {/* ─── Header ─── */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-display font-black uppercase tracking-[0.2em] text-foreground cyber-glitch" data-text="VICTOR GRABOWSKI">Victor Grabowski</h1>
            <p className="text-accent mt-2 uppercase tracking-widest text-sm flex items-center">
              <span className="mr-2 text-accent font-bold">{'>'}</span>{t.tagline}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs text-mutedForeground uppercase tracking-wider">
            <span className="flex items-center gap-2"><MapPin size={13} className="text-accent" /> {t.cv.contact.location}</span>
            <a href="mailto:victorgrabowski33@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail size={13} className="text-accent" /> victorgrabowski33@gmail.com</a>
            <a href="tel:+33767302293" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone size={13} className="text-accent" /> 07 67 30 22 93</a>
            <a href="https://github.com/VictorMusta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Github size={13} className="text-accent" /> github.com/VictorMusta</a>
          </div>
        </header>

        <div className="h-[1px] w-full bg-border my-8" />

        {/* ─── Career ─── */}
        <section className="mb-12">
          <h2 className="text-xl font-display font-bold text-accent uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent"></span>
            {t.cv.professionalExperience}
          </h2>

          <div className="flex flex-col gap-10">
            {career
              .filter((item) => item.id !== "supdevinci" && item.id !== "epitech")
              .map((item) => {
                const tr = t[item.id] || {};
                const title = item.title;
                const displayYear = item.year.replace("Présent", t.common.present).replace("Present", t.common.present);

                return (
                  <article key={item.id} className="relative pl-6 border-l border-border">
                    <span className="absolute left-[-5px] top-1 w-2 h-2 border border-accent bg-background rotate-45" />
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold uppercase tracking-wide text-foreground">{title}</h3>
                        <p className="text-sm text-accent-tertiary mt-1">{tr.role}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-xs text-mutedForeground tracking-widest uppercase">
                        <span>{displayYear}</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-foreground/80 leading-relaxed mb-4">{tr.cvDescription || tr.description}</p>
                    
                    {(tr.cvHighlights || tr.highlights)?.length > 0 && (
                      <ul className="flex flex-col gap-2 mb-4">
                        {(tr.cvHighlights || tr.highlights).map((h, i) => (
                          <li key={i} className="relative pl-4 text-xs text-mutedForeground leading-relaxed">
                            <span className="absolute left-0 top-[0.4rem] w-1.5 h-1.5 bg-accent/50 rotate-45" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {item.stack?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.stack.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-muted/50 border border-border text-[10px] uppercase tracking-wider text-mutedForeground cyber-chamfer-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
          </div>
        </section>

        <div className="h-[1px] w-full bg-border my-8" />

        {/* ─── Projects ─── */}
        <section className="mb-12">
          <h2 className="text-xl font-display font-bold text-accent uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent"></span>
            {t.cv.sideProjects}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print-hidden">
            {projects
              .filter((item) => ["tamagotchi", "aicontentremover", "imapunsub", "knightjumper"].includes(item.id))
              .map((item) => {
                const tr = t[item.id] || {};
                return (
                  <article key={item.id} className="flex flex-col p-6 bg-background border border-border cyber-chamfer-sm hover:border-accent/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-base font-bold uppercase tracking-wide text-foreground">{item.title}</h3>
                      <span className="text-xs text-accent-secondary uppercase tracking-widest">{tr.role}</span>
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed mb-6 flex-1">{tr.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.stack?.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-muted border border-border text-[10px] uppercase tracking-wider text-mutedForeground cyber-chamfer-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {item.github && (
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-mutedForeground hover:text-accent transition-colors no-print">
                        <ExternalLink size={12} /> {t.common.github}
                      </a>
                    )}
                  </article>
                );
              })}
          </div>
          {/* Simple Projects for Print */}
          <div className="hidden print-only text-xs">
            <p><strong>{t.trackProjects} :</strong> AutoBattler 2D, Realtime Earnings, AI Content Remover, Platformer 2D.</p>
            <a href="https://github.com/VictorMusta" className="flex items-center gap-2 mt-2">
              <Github size={12} /> {t.common.viewMore} github.com/VictorMusta
            </a>
          </div>
        </section>

        <div className="h-[1px] w-full bg-border my-8" />

        {/* ─── Skills ─── */}
        <section className="mb-12">
          <h2 className="text-xl font-display font-bold text-accent uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent"></span>
            {t.cv.technicalSkills}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(t.technicalSkills || {}).map(([key, skill]) => (
              <div key={key} className="flex flex-col">
                <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-2 flex items-center gap-2">
                  <span className="text-accent">{'>'}</span> {skill.title}
                </h4>
                <p className="text-xs text-mutedForeground leading-relaxed">{skill.content}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-[1px] w-full bg-border my-8" />

        {/* ─── Education ─── */}
        <section>
          <h2 className="text-xl font-display font-bold text-accent uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent"></span>
            {t.cv.education}
          </h2>
          <div className="flex flex-col gap-8">
            {[...educationData]
              .sort((a, b) => b.sortYear - a.sortYear)
              .filter((item) => item.id !== "bacpro") // Stops at Gustave Eiffel
              .map((item) => {
                const tr = t[item.id] || {};
                const displayYear = item.year.replace("Présent", t.common.present).replace("Present", t.common.present);

                return (
                  <article key={item.id} className="relative pl-6 border-l border-border">
                    <span className="absolute left-[-5px] top-1 w-2 h-2 border border-accent bg-background rotate-45" />
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                      <div>
                        <h3 className="text-base font-bold uppercase tracking-wide text-foreground">{item.title}</h3>
                        <p className="text-xs text-accent mt-1">{tr.role}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-xs text-mutedForeground tracking-widest uppercase">
                        <span>{displayYear}</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed">{tr.description}</p>
                  </article>
                );
              })}
          </div>
        </section>

      </div>
    </div>
  );
}
