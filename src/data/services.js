import { Building2, Home, Store, Hammer } from "lucide-react";

// Hizmet kartları — ikon + başlık + açıklama + öne çıkanlar
export const services = [
  {
    id: "konut",
    icon: Building2,
    title: "Konut Projeleri",
    description:
      "Şehrin dokusuna uyumlu, yüksek yaşam standardı sunan çok katlı konut projelerini anahtar teslim tamamlıyoruz.",
    highlights: ["Anahtar teslim", "Deprem yönetmeliğine uygun", "Akıllı bina altyapısı"],
  },
  {
    id: "villa",
    icon: Home,
    title: "Villa Yapımı",
    description:
      "Araziye özel tasarlanan, mimari detayları özenle işlenmiş lüks villaları projeden teslime kadar üretiyoruz.",
    highlights: ["Kişiye özel tasarım", "Premium malzeme", "Peyzaj entegrasyonu"],
  },
  {
    id: "ticari",
    icon: Store,
    title: "Ticari Yapılar",
    description:
      "Ofis, AVM ve iş merkezlerinde verimliliği ve prestiji önceleyen, ölçeklenebilir ticari yapılar inşa ediyoruz.",
    highlights: ["Esnek kat planı", "Enerji verimliliği", "Hızlı teslim takvimi"],
  },
  {
    id: "tadilat",
    icon: Hammer,
    title: "Tadilat & Restorasyon",
    description:
      "Mevcut yapıları yeniden değer kazandıran tadilat ve tarihi dokuyu koruyan restorasyon çalışmaları yürütüyoruz.",
    highlights: ["Detaylı keşif", "Tarihi doku koruma", "Minimum süre kesintisi"],
  },
];
