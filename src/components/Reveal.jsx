import { motion } from "framer-motion";

/**
 * Çocuk öğeleri, görünüm alanına girince belirgin ve akıcı şekilde belirten
 * Framer Motion tabanlı sarmalayıcı. `delay` (ms) ile kademeli (stagger)
 * animasyonlar kurulabilir. Mevcut tüm bölümler bu bileşeni kullandığı için,
 * buradaki ayar tüm sayfaya yansır.
 */
export default function Reveal({ children, delay = 0, className = "", y = 40 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
