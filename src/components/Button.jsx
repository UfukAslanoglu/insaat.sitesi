/**
 * Markaya uygun, çok varyantlı buton bileşeni.
 * <a> veya <button> olarak render edilebilir (href verilirse <a>).
 */
export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-[transform,background-color,border-color,box-shadow,color] duration-300 focus-visible:outline-none";

  const variants = {
    // Dolu altın buton
    primary:
      "bg-gold text-graphite-950 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20",
    // İnce çizgili (outline) buton
    outline:
      "border border-gold/40 text-gold hover:border-gold hover:bg-gold/10",
    // Açık zeminde nötr buton
    ghost:
      "border border-white/15 text-white hover:border-white/40 hover:bg-white/5",
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const Tag = href ? "a" : "button";

  return (
    <Tag href={href} className={classes} {...props}>
      {children}
    </Tag>
  );
}
