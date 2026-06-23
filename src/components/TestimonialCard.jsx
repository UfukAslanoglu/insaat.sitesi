import { Star, Quote } from "lucide-react";

/**
 * Müşteri yorumu kartı. Hover'da altın kenarlık ve hafif yükselme.
 */
export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-graphite-900/60 p-8 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-gold/40">
      <Quote className="text-gold/30 transition-colors group-hover:text-gold/60" size={36} />

      {/* Yıldız puanı */}
      <div className="mt-4 flex gap-1" aria-label={`${testimonial.rating} / 5 puan`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-gold text-gold" />
        ))}
      </div>

      <blockquote className="mt-5 flex-1 text-cloud/75">
        “{testimonial.quote}”
      </blockquote>

      <figcaption className="mt-6 border-t border-white/10 pt-5">
        <p className="font-display font-semibold text-white">{testimonial.name}</p>
        <p className="mt-0.5 text-sm text-gold">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}
