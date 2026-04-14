import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Productos from '@/components/Productos';
import Nosotros from '@/components/Nosotros';
import Calculadora from '@/components/Calculadora';
import Agenda from '@/components/Agenda';
import Galeria from '@/components/Galeria';
import Marcas from '@/components/Marcas';
import Pension from '@/components/Pension';
import Diferenciadores from '@/components/Diferenciadores';
import Emergencias from '@/components/Emergencias';
import FAQ from '@/components/FAQ';
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import DarkModeToggle from '@/components/DarkModeToggle';
import ScrollEffects from '@/components/ScrollEffects';
import ChatFloat from '@/components/ChatFloat';
import ExitPopup from '@/components/ExitPopup';
import OfferBanner from '@/components/OfferBanner';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-bar" id="scrollBar" />

      {/* Urgency bar */}
      <div className="urg">
        🚨 <strong>EMERGENCIAS 24/7</strong> — Llama:{' '}
        <a href="tel:4616155620">461 615 5620</a>
        &nbsp;|&nbsp;
        <a
          href="https://wa.me/524424659302?text=EMERGENCIA"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp urgente
        </a>
      </div>

      <OfferBanner />
      <Nav />
      <Hero />
      <Servicios />
      <Productos />
      <Nosotros />
      <Calculadora />
      <Agenda />
      <Galeria />
      <Marcas />
      <Pension />
      <Diferenciadores />
      <Emergencias />

      {/* CTA Banner */}
      <div className="ctas">
        <div className="wrap">
          <h2>¿Listo para darle lo mejor a tu mascota? 🐾</h2>
          <p className="sub">
            Agenda tu cita hoy mismo. Respuesta en minutos. <strong>Cupos limitados.</strong>
          </p>
          <div className="cbts">
            <a
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wh"
            >
              📲 Agendar por WhatsApp
            </a>
            <a
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20comprar%20alimento"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-owh"
            >
              🛒 Comprar Alimento
            </a>
            <a href="tel:4616155620" className="btn btn-owh">
              📞 461 615 5620
            </a>
          </div>
        </div>
      </div>

      <FAQ />
      <Testimonios />
      <Contacto />
      <Footer />

      {/* Floating elements */}
      <DarkModeToggle />
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
