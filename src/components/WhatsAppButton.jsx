import { motion } from "framer-motion";
import { company } from "../data/site";

// Resmî WhatsApp logosu (lucide'de marka ikonu yok, bu yüzden inline SVG)
function WhatsAppIcon({ size = 28 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

/**
 * Sağ altta sabit duran, WhatsApp Web/uygulamasını açan yüzen buton.
 * Numara site.js'ten gelir (modülerlik). Asil his için yavaş, zarif nabız halkası.
 */
export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Merhaba, bir projeniz hakkında bilgi almak istiyorum."
  );
  const href = `https://wa.me/${company.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden yazın"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30"
    >
      {/* Yavaş, zarif nabız halkası (çocuksu değil) */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.4], opacity: [0.45, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
      />

      <span className="relative z-10">
        <WhatsAppIcon size={28} />
      </span>

      {/* Masaüstünde hover ipucu */}
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-graphite-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
        WhatsApp'tan yazın
      </span>
    </motion.a>
  );
}
