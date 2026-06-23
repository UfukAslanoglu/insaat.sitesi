import { ArrowUpRight } from "lucide-react";

/**
 * Tekil hizmet kartı. Hover'da kenarlık altına döner,
 * ikon kutusu dolu altına geçer ve içerik hafifçe yükselir.
 */
export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <a
      href="#contact"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-graphite-900/60 p-8 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:bg-graphite-800"
    >
      {/* Üst köşede ortaya çıkan ok */}
      <ArrowUpRight
        className="absolute right-6 top-6 text-cloud/30 transition-colors duration-300 group-hover:text-gold"
        size={22}
      />

      {/* İkon kutusu */}
      <div className="grid h-14 w-14 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-graphite-950">
        <Icon size={26} />
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold text-white">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-cloud/60">
        {service.description}
      </p>

      {/* Öne çıkan özellikler */}
      <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
        {service.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-xs text-cloud/55">
            <span className="h-1 w-1 rounded-full bg-gold" />
            {h}
          </li>
        ))}
      </ul>
    </a>
  );
}
