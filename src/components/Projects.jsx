import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

// Filtre sekmeleri — verideki kategorilerden otomatik türetilir (elle liste yok)
const categories = ["Tümü", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [active, setActive] = useState("Tümü"); // seçili kategori
  const [selected, setSelected] = useState(null); // lightbox'ta açık proje

  const filtered =
    active === "Tümü"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative bg-graphite-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Projelerimiz"
          title="İmzamızı taşıyan yapılar"
          description="Tamamladığımız ve hâlâ üzerinde çalıştığımız seçili projelerden bazıları. Görsele tıklayarak büyütebilirsiniz."
        />

        {/* Kategori filtreleri — aktif altın zemin layoutId ile kayar */}
        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`relative overflow-hidden rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "border-gold"
                    : "border-white/15 hover:border-gold/40 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filterPill"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive ? "text-graphite-950" : "text-cloud/65"
                  }`}
                >
                  {cat}
                </span>
              </button>
            );
          })}
        </Reveal>

        {/* Proje ızgarası — filtrelemede akıcı (layout) geçiş */}
        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} onOpen={() => setSelected(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox (seçili proje doluysa açılır) */}
      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
