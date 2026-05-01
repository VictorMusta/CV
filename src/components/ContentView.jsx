import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? -20 : 20,
    opacity: 0,
    filter: "brightness(1.5)",
    skewX: "2deg",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "brightness(1)",
    skewX: "0deg",
    transition: { 
      duration: 0.15,
      ease: "easeOut"
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? -20 : 20,
    opacity: 0,
    transition: { duration: 0.1 }
  }),
};

export default function ContentView({ item, direction, onOpenLightbox }) {
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
    <div className="flex-1 flex flex-col items-center justify-start p-6 md:p-12 overflow-y-auto [&::-webkit-scrollbar]:hidden" role="tabpanel">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.article
          key={item.id}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-12 p-6 md:p-10 bg-card/80 border border-border cyber-chamfer backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >

          {/* Left column — meta */}
          <div className="flex flex-col gap-4">
            <div 
              className="w-16 h-16 grid place-items-center cyber-chamfer-sm border border-border bg-background" 
              style={{ borderColor: item.color, boxShadow: `0 0 10px ${item.color}40` }}
            >
              <Icon size={32} strokeWidth={1.2} color={item.color} />
            </div>

            <div className="mt-2">
              <h2 className="text-xl font-display font-bold uppercase tracking-widest leading-tight">{title}</h2>
              <p className="text-sm font-mono mt-1" style={{ color: item.color }}>{role}</p>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <span className="text-xs font-mono text-mutedForeground uppercase tracking-widest">{item.year}</span>
              {item.location && (
                <span className="flex items-center gap-2 text-xs font-mono text-mutedForeground">
                  <MapPin size={12} className="text-accent" /> {item.location}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3 mt-4">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background text-xs font-mono uppercase tracking-widest text-mutedForeground hover:border-accent hover:text-accent hover:drop-shadow-glow transition-all cyber-chamfer-sm group w-fit"
                >
                  <ExternalLink size={14} className="group-hover:text-accent" />
                  {t.viewOnGithub}
                </a>
              )}
              {item.demo && (
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border bg-accent/10 text-xs font-mono uppercase tracking-widest transition-all cyber-chamfer-sm w-fit"
                  style={{ borderColor: item.color, color: item.color, boxShadow: `0 0 10px ${item.color}20` }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = item.color;
                    e.currentTarget.style.color = '#000';
                    e.currentTarget.style.boxShadow = `0 0 20px ${item.color}80`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = `${item.color}1A`;
                    e.currentTarget.style.color = item.color;
                    e.currentTarget.style.boxShadow = `0 0 10px ${item.color}20`;
                  }}
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
                  className="inline-flex items-center gap-2 px-4 py-2 border border-accent bg-accent/10 text-accent text-xs font-mono uppercase tracking-widest hover:bg-accent hover:text-background hover:drop-shadow-glow transition-all cyber-chamfer-sm w-fit"
                >
                  <ExternalLink size={14} />
                  {t.viewBenchmark}
                </a>
              )}
            </div>
          </div>

          {/* Right column — details */}
          <div className="flex flex-col gap-6 md:col-start-2">
            <p className="text-sm md:text-base text-foreground/90 font-mono leading-relaxed bg-background/50 p-4 border-l-2 border-accent">
              <span className="text-accent font-bold mr-2">{'>'}</span>{description}
            </p>

            {highlights.length > 0 && (
              <div className="mt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-mutedForeground mb-4">{t.keyFeatures}</h4>
                <ul className="flex flex-col gap-3">
                  {highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      className="relative pl-6 text-sm font-mono text-foreground/80 leading-relaxed"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                    >
                      <span className="absolute left-0 top-[0.4rem] w-2 h-2 border border-accent bg-accent/20 rotate-45" style={{ borderColor: item.color, backgroundColor: `${item.color}40` }}></span>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {item.stack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                {item.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted/50 border border-border text-xs font-mono uppercase tracking-wider text-mutedForeground cyber-chamfer-sm">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Mosaic — Image collection */}
          {(item.screenshots?.length > 0 || item.image) && (
            <div className="md:col-span-2 flex flex-col gap-6 mt-8">
              {(item.screenshots || [item.image]).map((src, i) => {
                const resolvedSrc = (src && src.startsWith("/") && !src.startsWith("//") && !src.startsWith("http"))
                  ? `${import.meta.env.BASE_URL}${src.slice(1)}`
                  : src;
                
                const isExpandable = item.type === "project" && src && !src.includes("opengraph.githubassets.com");

                return (
                   <motion.div 
                    key={i}
                    className="w-full overflow-hidden border border-border bg-background cyber-chamfer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <img 
                      src={resolvedSrc} 
                      alt={`${title} screenshot ${i + 1}`} 
                      loading="lazy"
                      className={`w-full h-auto opacity-80 hover:opacity-100 transition-opacity ${isExpandable ? 'cursor-pointer' : 'cursor-default'}`}
                      onClick={() => isExpandable && onOpenLightbox(src)}
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
