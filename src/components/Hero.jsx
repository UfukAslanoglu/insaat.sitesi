import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { company } from "../data/site";
import Button from "./Button";

// Hero başlığında dönüp duran kelimeler
const rotatingWords = ["konutları", "villaları", "ticari yapıları", "yaşam alanlarını"];

// Kademeli (stagger) giriş için varyantlar
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Kelimeyi belirli aralıkla değiştir
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % rotatingWords.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* Arka plan görseli — yavaş yakınlaşma animasyonu */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern mimari yapı"
          fetchpriority="high"
          decoding="async"
          className="h-full w-full animate-slow-zoom object-cover"
        />
        {/* Karartma katmanları — metin okunabilirliği için */}
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/85 to-graphite-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-graphite-950/30" />
      </div>

      {/* Mimari ızgara dokusu (signature) */}
      <div className="absolute inset-0 bg-blueprint-grid bg-[length:64px_64px] opacity-60" />

      {/* İçerik — kademeli giriş */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10"
      >
        <div className="max-w-3xl">
          <motion.span variants={item} className="eyebrow">
            {company.name} {company.suffix}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Sağlam temeller üzerine
            {/* Dönen kelime — kendi satırında, taşma gizli */}
            <span className="block h-[1.15em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[index]}
                  className="block text-gold"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-110%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            inşa ediyoruz.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-cloud/70"
          >
            Konuttan villaya, ticari yapılardan restorasyona; 15 yılı aşkın
            tecrübemizle her projeyi zamanında, güvenle ve estetik bir
            işçilikle teslim ediyoruz.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#contact" variant="primary">
              Teklif Al <ArrowRight size={18} />
            </Button>
            <Button href="#projects" variant="outline">
              Projelerimizi İncele
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Aşağı kaydırma ipucu */}
      <motion.a
        href="#about"
        aria-label="Aşağı kaydır"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cloud/50 transition-colors hover:text-gold md:flex"
      >
        <span className="text-xs uppercase tracking-widest">Keşfet</span>
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
