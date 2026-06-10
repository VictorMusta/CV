import { useEffect, useState, useCallback } from "react";
import { GitBranch, Check, Loader2 } from "lucide-react";

/* DEV-ONLY menu section for hopping between the design-direction
   branches while choosing one. Talks to the Vite dev middleware
   (/__da/*) which runs `git checkout`. Tree-shaken out of prod
   builds via the import.meta.env.DEV guard in the parent. */

const LABELS = {
  "da/_base": "Base · accessibilité",
  "da/sober-editorial": "Sobre / Éditorial",
  "da/cyber-refined": "Cyber raffiné",
  "da/colorful-vibrant": "Coloré / Vibrant",
  "da/glassmorphism": "Glassmorphism",
  "da/organic-living": "Organique / Vivant",
  master: "master",
};

export default function DevBranchSwitcher() {
  const [current, setCurrent] = useState(null);
  const [branches, setBranches] = useState([]);
  const [busy, setBusy] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    fetch("/__da/branches")
      .then((r) => r.json())
      .then((d) => {
        if (!alive) return;
        setCurrent(d.current);
        setBranches(d.branches || []);
      })
      .catch((e) => alive && setError(String(e)));
    return () => {
      alive = false;
    };
  }, []);

  const checkout = useCallback(
    (branch) => {
      if (busy || branch === current) return;
      setBusy(branch);
      setError(null);
      fetch(`/__da/checkout?branch=${encodeURIComponent(branch)}`)
        .then((r) => r.json())
        .then((d) => {
          if (!d.ok) throw new Error(d.error || "checkout failed");
          // Let Vite pick up the new working tree, then hard reload.
          setTimeout(() => window.location.reload(), 700);
        })
        .catch((e) => {
          setError(String(e.message || e));
          setBusy(null);
        });
    },
    [busy, current]
  );

  const da = branches
    .filter((b) => b.startsWith("da/"))
    .sort((a, b) => a.localeCompare(b));

  if (!da.length && !error) return null;

  return (
    <div className="mt-4 pt-3 border-t border-border/50">
      <div className="flex items-center gap-2 mb-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accentTertiary">
        <GitBranch size={12} />
        Preview branch · dev
      </div>

      <div className="flex flex-col gap-2">
        {da.map((b) => {
          const isCurrent = b === current;
          const isBusy = busy === b;
          return (
            <button
              key={b}
              onClick={() => checkout(b)}
              disabled={!!busy}
              className={`flex items-center justify-between px-3 py-2 border text-[10px] font-mono uppercase tracking-widest transition-all cyber-chamfer-sm disabled:opacity-60 ${
                isCurrent
                  ? "border-accent text-accent bg-accent/5"
                  : "border-border/50 text-mutedForeground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              <span>{LABELS[b] || b}</span>
              {isBusy ? (
                <Loader2 size={12} className="animate-spin" />
              ) : isCurrent ? (
                <Check size={12} />
              ) : null}
            </button>
          );
        })}
      </div>

      {error && (
        <p className="mt-2 text-[10px] font-mono text-destructive normal-case">{error}</p>
      )}
    </div>
  );
}
