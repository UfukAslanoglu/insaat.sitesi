import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin } from "lucide-react";

/**
 * Proje görselini tam ekran, kararan + bulanık arka plan üzerinde gösteren modal.
 * `project` doluysa açıktır, null ise kapalı. Esc veya dışına tıklayınca kapanır.
 * createPortal ile doğrudan body'ye basılır (z-index / overflow sorunları olmasın).
 */
export default function Lightbox({ project, onClose }) {
  // Esc ile kapatma + arka plan kaydırma kilidi
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const isCompleted = project?.status === "completed";

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
        >
          {/* Kararan + bulanık arka plan */}
          <div className="absolute inset-0 bg-graphite-950/85 backdrop-blur-md" />

          {/* İçerik kartı */}
          <motion.div
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-graphite-900 shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-[58vh] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-transparent to-transparent" />

              {/* Durum etiketi */}
              <span
                className={`absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
                  isCompleted
                    ? "bg-gold/90 text-graphite-950"
                    : "bg-graphite-950/70 text-gold ring-1 ring-gold/40"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isCompleted ? "bg-graphite-950" : "animate-pulse bg-gold"
                  }`}
                />
                {isCompleted ? "Tamamlandı" : "Devam Ediyor"}
              </span>

              {/* Kapat düğmesi */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Kapat"
                className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-graphite-950/70 text-white backdrop-blur-sm transition-colors hover:bg-gold hover:text-graphite-950"
              >
                <X size={20} />
              </button>
            </div>

            {/* Metin */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-gold">
                <span>{project.category}</span>
                <span className="h-1 w-1 rounded-full bg-gold/50" />
                <span>{project.year}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-cloud/55">
                <MapPin size={14} className="text-gold" />
                {project.location}
              </p>
              <p className="mt-5 leading-relaxed text-cloud/70">
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
