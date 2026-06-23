import { Target, Eye, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const principles = [
  "Sözleşmede yazan teslim tarihine sadakat",
  "Her aşamada şeffaf raporlama ve iletişim",
  "Deprem yönetmeliğine tam uyumlu mühendislik",
];

export default function About() {
  return (
    <section id="about" className="relative bg-graphite-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Görsel + deneyim rozeti */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Şantiyede çalışan mühendisler"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            {/* Deneyim rozeti */}
            <div className="absolute -bottom-6 right-4 rounded-2xl border border-gold/30 bg-graphite-900 px-8 py-6 shadow-2xl sm:-right-6">
              <p className="font-display text-4xl font-extrabold text-gold">15+</p>
              <p className="mt-1 text-sm text-cloud/60">Yıllık Sektör Deneyimi</p>
            </div>
          </Reveal>

          {/* Metin içeriği */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Hakkımızda"
              title="Beton değil, güven inşa ediyoruz"
              description="Nova Yapı İnşaat olarak 2010 yılından bu yana konut, villa, ticari yapı ve restorasyon alanlarında çözüm üretiyoruz. Mühendislik disiplinini estetik bir bakış açısıyla birleştirerek; yaşandıkça değer kazanan, nesiller boyu ayakta kalan yapılar ortaya koyuyoruz."
            />

            <Reveal className="mt-8 space-y-3">
              {principles.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={20} />
                  <span className="text-cloud/75">{item}</span>
                </div>
              ))}
            </Reveal>

            {/* Misyon & Vizyon kartları */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Reveal delay={0}>
                <div className="h-full rounded-xl border border-white/10 bg-graphite-900/60 p-6 transition-colors duration-300 hover:border-gold/40">
                  <Target className="text-gold" size={26} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    Misyonumuz
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cloud/60">
                    İnsan odaklı, çevreye duyarlı ve mühendislik açısından
                    kusursuz yapıları zamanında teslim ederek müşterilerimizin
                    güvenini her projede yeniden kazanmak.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="h-full rounded-xl border border-white/10 bg-graphite-900/60 p-6 transition-colors duration-300 hover:border-gold/40">
                  <Eye className="text-gold" size={26} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    Vizyonumuz
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cloud/60">
                    Türkiye'nin dört bir yanında imzasıyla anılan, sürdürülebilir
                    ve yenilikçi yapılar üreten öncü inşaat markası olmak.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
