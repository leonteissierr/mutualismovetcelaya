import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Productos from '@/components/Productos';
import Calculadora from '@/components/Calculadora';
import Agenda from '@/components/Agenda';
import Galeria from '@/components/Galeria';
import Marcas from '@/components/Marcas';
import Pension from '@/components/Pension';
import Diferenciadores from '@/components/Diferenciadores';
import FAQ from '@/components/FAQ';
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';
import ChatFloat from '@/components/ChatFloat';
import ExitPopup from '@/components/ExitPopup';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-bar" id="scrollBar" />

      <Nav />
      <Hero />
      <Servicios />
      <Productos />
      <Calculadora />
      <Agenda />
      <Galeria />
      <Marcas />
      <Pension />
      <Diferenciadores />

      <FAQ />
      <Testimonios />
      <Contacto />
      <Footer />

      {/* Floating elements */}
      <ChatFloat />
      <a
        href="https://wa.me/524424659302?text=Hola%2C%20necesito%20informaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="fwa"
        title="WhatsApp"
      >
        💬
      </a>
      <BackToTop />

      {/* Mobile CTA bar */}
      <div className="mobile-cta-bar">
        <a href="tel:4616155620" className="mcta-btn mcta-call">📞 Llamar</a>
        <a
          href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20🐾"
          target="_blank"
          rel="noopener noreferrer"
          className="mcta-btn mcta-wa"
        >
          💬 WhatsApp
        </a>
      </div>

      <ExitPopup />
      <ScrollEffects />
    </>
  );
}
