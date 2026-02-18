import { useState as useImageState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ImageOff } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    filter: "blur(6px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (direction) => ({
    x: direction < 0 ? -80 : 80,
    opacity: 0,
    filter: "blur(6px)",
  }),
};

function ItemImage({ src, alt, color, hintLabel }) {
  const [hasError, setHasError] = useImageState(false);
  const [loaded, setLoaded] = useImageState(false);

  if (!src || hasError) {
    return (
      <div className="content-card__image content-card__image--placeholder" style={{ background: `${color}12` }}>
        <ImageOff size={32} strokeWidth={1.2} color={color} style={{ opacity: 0.4 }} />
        <span className="content-card__image-hint">{hintLabel} /public{src || "/images/..."}</span>
      </div>
    );
  }

  return (
    <div className="content-card__image">
      {!loaded && (
        <div className="content-card__image-skeleton" style={{ background: `${color}08` }} />
      )}
      <img
        src={src}
        alt={alt || ""}
        onError={() => setHasError(true)}
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}

export default function ContentView({ item, direction }) {
  const { t } = useLang();

  if (!item) return null;

  const Icon = item.icon;

  /* Resolve translated fields */
  const tr = t[item.id] || {};
  const title = (item.id === "education" ? tr.title : item.title) || item.title || "";
  const role = tr.role || "";
  const description = tr.description || "";
  const highlights = tr.highlights || [];

  return (
    <div className="content-view" role="tabpanel">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.article
          key={item.id}
          className="content-card"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ "--card-accent": item.color }}
        >
          {/* Image showcase */}
          <ItemImage src={item.image} alt={item.imageAlt} color={item.color} hintLabel={t.addImage} />

          {/* Left column — meta */}
          <div className="content-card__meta">
            <div className="content-card__icon-wrap" style={{ background: `${item.color}18` }}>
              <Icon size={28} strokeWidth={1.6} color={item.color} />
            </div>

            <h2 className="content-card__title">{title}</h2>
            <p className="content-card__role">{role}</p>
            <span className="content-card__year">{item.year}</span>

            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="content-card__github"
              >
                <ExternalLink size={14} />
                {t.viewOnGithub}
              </a>
            )}
          </div>

          {/* Right column — details */}
          <div className="content-card__body">
            <p className="content-card__desc">{description}</p>

            {highlights.length > 0 && (
              <ul className="content-card__highlights">
                {highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                  >
                    {h}
                  </motion.li>
                ))}
              </ul>
            )}

            {item.stack?.length > 0 && (
              <div className="content-card__stack">
                {item.stack.map((tech) => (
                  <span key={tech} className="content-card__tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
