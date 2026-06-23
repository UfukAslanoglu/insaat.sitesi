import { motion } from "framer-motion";
import { stats } from "../data/stats";
import { useCountUp } from "../hooks/useCountUp";

// Kademeli giriş + "pop" hissi için varyantlar
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 32, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

// Tek bir istatistik — görünür olunca sayar
function StatItem({ value, suffix, label }) {
  const [ref, count] = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-extrabold text-gold sm:text-5xl md:text-6xl">
        {count.toLocaleString("tr-TR")}
        <span className="text-gold-light">{suffix}</span>
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-wider text-cloud/60">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-graphite-900 py-20">
      {/* Mimari ızgara dokusu */}
      <div className="absolute inset-0 bg-blueprint-grid bg-[length:48px_48px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-y-12 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              variants={item}
              className={i !== 0 ? "lg:border-l lg:border-white/10" : ""}
            >
              <StatItem value={stat.value} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
