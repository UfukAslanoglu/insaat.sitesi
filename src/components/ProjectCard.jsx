import { MapPin, ZoomIn } from "lucide-react";

/**
 * Proje kartı. Görsel hover'da yakınlaşır ve "incele" katmanı belirir.
 * Karta tıklanınca `onOpen` çağrılır (lightbox açılır). Klavyeyle de erişilebilir.
 */
export default function ProjectCard({ project, onOpen }) {
  const isCompleted = project.status === "completed";

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${project.title} projesini büyüt`}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-graphite-900 transition-colors hover:border-gold/40"
    >
      {/* Görsel */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/20 to-transparent" />

        {/* Hover'da beliren "incele" katmanı */}
        <div className="absolute inset-0 flex items-center justify-center bg-graphite-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full border border-gold/40 bg-graphite-950/60 px-4 py-2 text-sm font-medium text-gold">
            <ZoomIn size={16} /> Görseli İncele
          </span>
        </div>

        {/* Durum etiketi */}
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
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

        {/* Kategori + yıl */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-cloud/80">
          <span className="rounded-full bg-white/10 px-2.5 py-1 backdrop-blur-sm">
            {project.category}
          </span>
          <span>{project.year}</span>
        </div>
      </div>

      {/* Metin */}
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-gold">
          {project.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-cloud/50">
          <MapPin size={13} className="text-gold" />
          {project.location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-cloud/60">
          {project.description}
        </p>
      </div>
    </article>
  );
}
