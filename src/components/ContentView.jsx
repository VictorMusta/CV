import { useState as useImageState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ImageOff, MapPin } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    filter: "blur(8px) brightness(1.2)",
    skewX: "4deg",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: ["blur(2px)", "blur(0px)"],
    skewX: ["-1deg", "0deg"],
    transition: { 
      duration: 0.1, // Ultra snappy entry
      ease: "easeOut"
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? -30 : 30,
    opacity: 0,
    filter: "blur(2px)",
    transition: { duration: 0.05 } // Near-instant exit
  }),
};

const ItemImage = ({ item, color, hintLabel }) => {
  const [hasError, setHasError] = useImageState(false);
  const [loaded, setLoaded] = useImageState(false);
  const [currentIndex, setCurrentIndex] = useImageState(0);

  const images = item.screenshots || (item.image ? [item.image] : []);
  const src = images[currentIndex];

  const resolvedSrc = (src && src.startsWith("/") && !src.startsWith("//") && !src.startsWith("http"))
    ? `${import.meta.env.BASE_URL}${src.slice(1)}`
    : src;

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
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={resolvedSrc}
          alt={`${item.title} screen ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onError={() => setHasError(true)}
          onLoad={() => setLoaded(true)}
          style={{ 
            opacity: loaded ? 1 : 0,
            objectPosition: item.imagePosition || "center"
          }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="content-card__gallery-nav">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`content-card__gallery-dot ${i === currentIndex ? "active" : ""}`}
              style={{ "--dot-color": color }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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
          <ItemImage 
            item={item}
            color={item.color} 
            hintLabel={t.addImage} 
          />

          {/* Left column — meta */}
          <div className="content-card__meta">
            <div className="content-card__icon-wrap" style={{ background: `${item.color}18` }}>
              <Icon size={28} strokeWidth={1.6} color={item.color} />
            </div>

            <h2 className="content-card__title">{title}</h2>
            <p className="content-card__role">{role}</p>
            <div className="content-card__year-loc">
              <span className="content-card__year">{item.year}</span>
              {item.location && (
                <span className="content-card__location">
                  <MapPin size={12} /> {item.location}
                </span>
              )}
            </div>

            <div className="content-card__links">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-card__link"
                >
                  <ExternalLink size={14} />
                  {t.viewOnGithub}
                </a>
              )}
              {item.demo && (
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-card__link demo"
                  style={{ "--link-color": item.color }}
                >
                  <ExternalLink size={14} />
                  {t.liveDemo}
                </a>
              )}
              {item.benchmark && (
                <a
                  href={item.benchmark}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-card__link demo"
                  style={{ "--link-color": "#10B981" }}
                >
                  <ExternalLink size={14} />
                  {t.viewBenchmark}
                </a>
              )}
            </div>
          </div>

          {/* Right column — details */}
          <div className="content-card__body">
            <p className="content-card__desc">{description}</p>

            {highlights.length > 0 && (
              <div className="content-card__section">
                <h4 className="content-card__section-title">{t.keyFeatures}</h4>
                <ul className="content-card__highlights">
                  {highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                    >
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
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
