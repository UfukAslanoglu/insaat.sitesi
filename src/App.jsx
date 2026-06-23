import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-graphite-950 font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Her sayfada sağ altta sabit duran WhatsApp butonu */}
      <WhatsAppButton />
    </div>
  );
}
