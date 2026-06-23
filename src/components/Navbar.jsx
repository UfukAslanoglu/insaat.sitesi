import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { company, navLinks } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import Button from "./Button";

// Bölüm id'leri (scroll-spy için) — "#home" → "home"
const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  // Kaydırınca navbar arka planı belirginleşir
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menü açıkken arka plan kaydırmasını kilitle
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isActive = (href) => active === href.replace("#", "");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-graphite-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold font-display text-lg font-extrabold text-graphite-950">
            N
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {company.name}
            <span className="text-gold"> {company.suffix}</span>
          </span>
        </a>

        {/* Masaüstü menü */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 ${
                  isActive(link.href)
                    ? "text-white after:w-full"
                    : "text-cloud/70 hover:text-white after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            Teklif Al
          </Button>
        </div>

        {/* Mobil menü düğmesi */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="text-white lg:hidden"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobil açılır menü — kapalıyken klavye odağından da gizlenir */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`overflow-hidden border-t border-white/5 bg-graphite-900 transition-[max-height] duration-500 lg:hidden ${
          menuOpen ? "max-h-[30rem] visible" : "invisible max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-white/5 text-gold"
                    : "text-cloud/80 hover:bg-white/5 hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3 px-4">
            <Button
              href="#contact"
              variant="primary"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="w-full"
            >
              Teklif Al
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
