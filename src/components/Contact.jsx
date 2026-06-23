import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { company } from "../data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// İletişim bilgisi kartları — tek yerden yönetim
const contactInfo = [
  { icon: Phone, label: "Telefon", value: company.phone, href: company.phoneHref },
  { icon: Mail, label: "E-posta", value: company.email, href: company.emailHref },
  { icon: MapPin, label: "Adres", value: company.address, href: null },
  { icon: Clock, label: "Çalışma Saatleri", value: company.workingHours, href: null },
];

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo amaçlı: gerçek bir API'ye bağlanana kadar başarı durumu gösterilir
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-graphite-950/60 px-4 py-3 text-sm text-white placeholder:text-cloud/45 transition-colors focus:border-gold focus:outline-none";

  return (
    <section id="contact" className="relative bg-graphite-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="İletişim"
          title="Projenizi birlikte hayata geçirelim"
          description="Aklınızdaki proje için ücretsiz keşif ve teklif talep edin. Ekibimiz en kısa sürede sizinle iletişime geçsin."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* İletişim bilgileri */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <Wrapper
                    key={label}
                    href={href || undefined}
                    className={`flex items-start gap-4 rounded-xl border border-white/10 bg-graphite-950/50 p-5 transition-colors ${
                      href ? "hover:border-gold/40" : ""
                    }`}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-cloud/55">
                        {label}
                      </p>
                      <p className="mt-1 text-sm text-white">{value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-graphite-950/50 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-cloud/70">
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Adınız Soyadınız"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm text-cloud/70">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+90 5xx xxx xx xx"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="mb-2 block text-sm text-cloud/70">
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ornek@eposta.com"
                  className={inputClass}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm text-cloud/70">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Projeniz hakkında kısaca bilgi verin..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-graphite-950 transition-[transform,background-color,box-shadow] duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 sm:w-auto"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} /> Talebiniz Alındı
                  </>
                ) : (
                  <>
                    Teklif Talebi Gönder <Send size={16} />
                  </>
                )}
              </button>

              {submitted && (
                <p className="mt-4 text-sm text-gold">
                  Teşekkürler! Ekibimiz en kısa sürede sizinle iletişime geçecek.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
