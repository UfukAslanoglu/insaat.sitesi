import { useEffect, useRef, useState } from "react";

/**
 * Bir öğe görünüm alanına girdiğinde tetiklenen scroll-reveal hook'u.
 * IntersectionObserver kullanır — ek bağımlılık gerektirmez.
 *
 * @param {Object} options
 * @param {number} options.threshold - Görünürlük eşiği (0–1)
 * @param {boolean} options.once - Yalnızca bir kez tetiklensin mi
 * @returns {[React.RefObject, boolean]} ref ve görünürlük durumu
 */
export function useScrollReveal({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, isVisible];
}
