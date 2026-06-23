import { services } from "../data/services";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="relative bg-graphite-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Uçtan uca inşaat çözümleri"
          description="Projenizin türü ne olursa olsun, planlamadan anahtar teslime kadar tüm süreci tek bir uzman ekiple yönetiyoruz."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
