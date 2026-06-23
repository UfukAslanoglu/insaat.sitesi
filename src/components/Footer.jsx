import { Phone, Mail, MapPin } from "lucide-react";
import { company, navLinks } from "../data/site";
import { services } from "../data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-graphite-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marka */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold font-display text-lg font-extrabold text-graphite-950">
                N
              </span>
              <span className="font-display text-lg font-bold text-white">
                {company.name}
                <span className="text-gold"> {company.suffix}</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cloud/55">
              Sağlam mühendislik ve estetik işçiliği bir araya getiren, güvenle
              teslim edilen yapılar.
            </p>
          </div>

          {/* Hızlı bağlantılar */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Keşfet
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cloud/55 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Hizmetler
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-cloud/55 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              İletişim
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-cloud/55">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                {company.address}
              </li>
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Phone size={18} className="shrink-0 text-gold" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Mail size={18} className="shrink-0 text-gold" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-cloud/55">
            © {year} {company.name} {company.suffix}. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-cloud/55">
            Sağlam temeller üzerine inşa edildi.
          </p>
        </div>
      </div>
    </footer>
  );
}
