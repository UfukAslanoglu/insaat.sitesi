// Site geneli sabit bilgiler — tek yerden yönetilir
export const company = {
  name: "Nova Yapı",
  suffix: "İnşaat",
  tagline: "Geleceği İnşa Ediyoruz",
  phone: "+90 312 000 00 00",
  phoneHref: "tel:+903120000000",
  email: "info@novayapi.com",
  emailHref: "mailto:info@novayapi.com",
  address: "Çankaya Mah. Mimarlar Cad. No: 12, Çankaya / Ankara",
  workingHours: "Pazartesi – Cumartesi · 09:00 – 18:00",
  // WhatsApp numarası: ülke kodu + numara, BAŞINDA + YOK, boşluk yok.
  // Örn. Türkiye 0532 000 00 00  ->  "905320000000"
  whatsapp: "905320000000",
};

// Navbar bağlantıları — bölüm id'leri ile eşleşir
export const navLinks = [
  { label: "Ana Sayfa", href: "#home" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Projeler", href: "#projects" },
  { label: "Referanslar", href: "#testimonials" },
  { label: "İletişim", href: "#contact" },
];
