import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown]);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  const resolvedSrc = (currentImage.src && currentImage.src.startsWith("/") && !currentImage.src.startsWith("//") && !currentImage.src.startsWith("http"))
    ? `${import.meta.env.BASE_URL}${currentImage.src.slice(1)}`
    : currentImage.src;

  return (
    <motion.div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-12 no-print"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Project Title Overlay */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[210] flex flex-col items-center gap-1 pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-mutedForeground">Project</span>
        <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-widest text-accent drop-shadow-glow">
          {currentImage.projectTitle}
        </h3>
      </div>

      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[210] p-2 bg-card border border-border text-foreground hover:text-accent hover:border-accent cyber-chamfer-sm transition-all shadow-lg"
      >
        <X size={24} />
      </button>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-6 z-[210] p-3 bg-card/50 border border-border text-foreground hover:text-accent hover:border-accent cyber-chamfer-sm transition-all"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-6 z-[210] p-3 bg-card/50 border border-border text-foreground hover:text-accent hover:border-accent cyber-chamfer-sm transition-all"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Image container */}
      <div 
        className="relative max-w-7xl max-h-[90vh] flex items-center justify-center bg-black/40 border border-border cyber-chamfer overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] mt-12"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={resolvedSrc}
            src={resolvedSrc}
            alt="Full size view"
            className="max-w-full max-h-[85vh] object-contain"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          />
        </AnimatePresence>

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-background/80 border border-border text-[10px] font-mono uppercase tracking-[0.2em] text-accent">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </motion.div>
  );
}
