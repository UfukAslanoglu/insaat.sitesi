import { testimonials } from "../data/stats";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-graphite-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Referanslar"
          title="Müşterilerimizin sözü, en sağlam temelimiz"
          description="Birlikte çalıştığımız ev sahipleri ve yatırımcılar deneyimlerini paylaştı."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 120}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
