import { useEffect, useState } from "react";

/**
 * Görünüm alanının ortasından geçen bölümü "aktif" olarak işaretler.
 * Navbar'da hangi menü öğesinin vurgulanacağını belirlemek için kullanılır.
 *
 * @param {string[]} ids - İzlenecek bölüm id'leri (örn. ["home", "about"])
 * @returns {string} Aktif bölümün id'si
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Sadece ekranın orta bandından geçen bölüm "aktif" sayılır
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
