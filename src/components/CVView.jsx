import { useState, useCallback } from "react";
import { useLang } from "../i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Download, MapPin, Mail, Github, Phone, ExternalLink, Sun, Moon } from "lucide-react";
import { careerData, projectData } from "../data/timelineData";

export default function CVView() {
  const { t, lang } = useLang();
  const [showExportMenu, setShowExportMenu] = useState(false);

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
      setShowExportMenu(false);
    }, 100);
  }, []);

  /* career sorted most recent first */
  const career = [...careerData].sort((a, b) => b.sortYear - a.sortYear);
  const projects = [...projectData].sort((a, b) => b.sortYear - a.sortYear);

  return (
    <div className="cv-view" id="cv-view">
      {/* Export button with theme picker — hidden in print */}
      <div className="cv-export-wrapper no-print">
        <motion.button
          className="cv-export-btn"
          onClick={() => setShowExportMenu((p) => !p)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Download size={16} />
          {lang === "fr" ? "Exporter en PDF" : "Export to PDF"}
        </motion.button>

        <AnimatePresence>
          {showExportMenu && (
            <motion.div
              className="cv-export-menu"
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <button className="cv-export-option" onClick={() => handleExport("light")}>
                <Sun size={14} />
                {lang === "fr" ? "Thème clair" : "Light theme"}
              </button>
              <button className="cv-export-option" onClick={() => handleExport("dark")}>
                <Moon size={14} />
                {lang === "fr" ? "Thème sombre" : "Dark theme"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="cv-page">
        {/* ─── Header ─── */}
        <header className="cv-header">
          <div className="cv-header__info">
            <h1 className="cv-header__name">Victor Grabowski</h1>
            <p className="cv-header__role">{t.tagline}</p>
          </div>
          <div className="cv-header__contact">
            <span><MapPin size={13} /> Bordeaux, France</span>
            <a href="mailto:victorgrabowski33@gmail.com"><Mail size={13} /> victorgrabowski33@gmail.com</a>
            <a href="tel:+33767302293"><Phone size={13} /> 07 67 30 22 93</a>
            <a href="https://github.com/VictorMusta" target="_blank" rel="noopener noreferrer"><Github size={13} /> github.com/VictorMusta</a>
          </div>
        </header>

        <hr className="cv-divider" />

        {/* ─── Career ─── */}
        <section className="cv-section">
          <h2 className="cv-section__title">
            {lang === "fr" ? "Expérience Professionnelle" : "Professional Experience"}
          </h2>

          {career.map((item) => {
            const tr = t[item.id] || {};
            const title = item.id === "education" ? (tr.title || item.title) : item.title;
            return (
              <article key={item.id} className="cv-entry">
                <div className="cv-entry__header">
                  <div>
                    <h3 className="cv-entry__company">{title}</h3>
                    <p className="cv-entry__role">{tr.role}</p>
                  </div>
                  <span className="cv-entry__period">{item.year}</span>
                </div>
                <p className="cv-entry__desc">{tr.description}</p>
                {tr.highlights?.length > 0 && (
                  <ul className="cv-entry__highlights">
                    {tr.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                )}
                {item.stack?.length > 0 && (
                  <div className="cv-entry__stack">
                    {item.stack.map((tech) => (
                      <span key={tech} className="cv-entry__tag">{tech}</span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </section>

        <hr className="cv-divider" />

        {/* ─── Projects ─── */}
        <section className="cv-section">
          <h2 className="cv-section__title">
            {lang === "fr" ? "Projets Personnels" : "Side Projects"}
          </h2>

          <div className="cv-projects-grid">
            {projects.map((item) => {
              const tr = t[item.id] || {};
              return (
                <article key={item.id} className="cv-project">
                  <div className="cv-project__header">
                    <h3 className="cv-project__name">{item.title}</h3>
                    <span className="cv-project__role">{tr.role}</span>
                  </div>
                  <p className="cv-project__desc">{tr.description}</p>
                  <div className="cv-entry__stack">
                    {item.stack?.map((tech) => (
                      <span key={tech} className="cv-entry__tag">{tech}</span>
                    ))}
                  </div>
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="cv-project__link no-print">
                      <ExternalLink size={12} /> GitHub
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <hr className="cv-divider" />

        {/* ─── Skills ─── */}
        <section className="cv-section">
          <h2 className="cv-section__title">
            {lang === "fr" ? "Compétences Techniques" : "Technical Skills"}
          </h2>
          <div className="cv-skills">
            <div className="cv-skill-group">
              <h4>{lang === "fr" ? "Langages" : "Languages"}</h4>
              <p>C#, TypeScript, Python, Rust, Go, GDScript, SQL</p>
            </div>
            <div className="cv-skill-group">
              <h4>Frameworks & Tools</h4>
              <p>.NET 9, React, VueJS, Electron, Godot 4, Entity Framework, Discord.py</p>
            </div>
            <div className="cv-skill-group">
              <h4>Infrastructure & DevOps</h4>
              <p>AWS (Fargate, Lambda, SQS, SNS, DynamoDB), Terraform, Docker, Jenkins, Kong, GitHub Actions</p>
            </div>
            <div className="cv-skill-group">
              <h4>{lang === "fr" ? "Méthodologies" : "Methodologies"}</h4>
              <p>Agile / Scrum, gRPC, REST, Event-Driven Architecture, CI/CD, RGPD</p>
            </div>
          </div>
        </section>

        <hr className="cv-divider" />

        {/* ─── Education ─── */}
        <section className="cv-section">
          <h2 className="cv-section__title">
            {lang === "fr" ? "Formation" : "Education"}
          </h2>
          <article className="cv-entry">
            <div className="cv-entry__header">
              <div>
                <h3 className="cv-entry__company">Epitech · Sup de Vinci</h3>
                <p className="cv-entry__role">{lang === "fr" ? "Master Ingénierie Logicielle & Cloud" : "Master's in Software Engineering & Cloud"}</p>
              </div>
              <span className="cv-entry__period">2019 – 2024</span>
            </div>
            <p className="cv-entry__desc">
              {lang === "fr"
                ? "Mémoire : « L'impact de l'IA générative sur les développeurs Juniors »"
                : "Thesis: \"The Impact of Generative AI on Junior Developers\""}
            </p>
          </article>
        </section>

        <hr className="cv-divider" />

        {/* ─── Footer link ─── */}
        <div className="cv-footer">
          <a href="https://victormusta.github.io/CV/" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={12} /> victormusta.github.io/CV
          </a>
        </div>
      </div>
    </div>
  );
}
