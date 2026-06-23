import Reveal from "./Reveal";

/**
 * Bölüm başlığı bloğu: eyebrow etiketi + başlık + opsiyonel açıklama.
 * Ortalanmış veya sola hizalı kullanılabilir.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = light ? "text-graphite-900" : "text-white";
  const descColor = light ? "text-graphite-600" : "text-cloud/60";

  return (
    <Reveal className={`flex flex-col ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`mt-5 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
