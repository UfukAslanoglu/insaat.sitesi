import { useEffect, useRef, useState } from "react";

/**
 * Sayı, görünüm alanına girdiğinde 0'dan hedef değere doğru animasyonla artar.
 * Hareket azaltma tercihini (prefers-reduced-motion) dikkate alır.
 *
 * @param {number} target - Ulaşılacak hedef değer
 * @param {number} duration - Animasyon süresi (ms)
 * @returns {[React.RefObject, number]} ref ve geçerli sayı
 */
export function useCountUp(target, duration = 2000) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;

        if (prefersReduced) {
          setCount(target);
          return;
        }

        let startTime = null;
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          // easeOutExpo — sonlara doğru yumuşak yavaşlama
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return [ref, count];
}
