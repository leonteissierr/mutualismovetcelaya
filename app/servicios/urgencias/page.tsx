import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Urgencias 24/7 | Veterinaria Mutualismo — Celaya',
  description: 'Atención veterinaria de emergencia disponible las 24 horas del día en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Atención a Cualquier Hora',
    desc: 'En una emergencia, cada minuto cuenta. Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana, incluyendo fines de semana y días festivos. Contáctanos por teléfono o WhatsApp y te orientamos de inmediato sobre los pasos a seguir.',
    illustration: '/servicios/urgencias24hrs.png',
    photo: '/pacientes/paciente-3.jpeg',
    photoAlt: 'Mascota siendo atendida en urgencias Veterinaria Mutualismo',
  },
  {
    title: 'Hospitalización y Seguimiento',
    desc: 'Cuando tu mascota necesita monitoreo constante, contamos con área de hospitalización donde recibe revisiones periódicas, medicación controlada y atención cercana. Nuestro objetivo es siempre que regrese a casa en las mejores condiciones posibles.',
    illustration: '/servicios/hospitalizacion.png',
    photo: '/pacientes/paciente-6.jpeg',
    photoAlt: 'Perro en recuperación Veterinaria Mutualismo Celaya',
  },
];

const WA = 'https://wa.me/524424659302?text=Hola%2C%20tengo%20una%20urgencia%20con%20mi%20mascota';

export default function UrgenciasPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      <section className="svc-hero-v2">
        <div className="wrap">
          <div className="svc-hero-v2-inner">
            <div className="svc-hero-v2-content">
              <span className="svc-breadcrumb">
                <Link href="/#servicios">Servicios</Link> / <span>Urgencias 24/7</span>
              </span>
              <h1>Urgencias 24/7</h1>
              <p>
                Las emergencias no avisan. Por eso estamos disponibles toda la noche,
                todos los días del año. Llámanos o escríbenos: siempre habrá alguien
                listo para ayudarte.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">
                Contactar ahora
              </a>
            </div>
            <div className="svc-hero-v2-icon">
              <Image src="/logoservicios/3.png" alt="Urgencias" width={110} height={110} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="wrap">
          <div className="svc-feat-grid">
            {sections.map((s) => (
              <div key={s.title} className="svc-feat reveal slide-up">
                <div className="svc-feat-body">
                  <div className="svc-feat-illus">
                    <Image src={s.illustration} alt={s.title} width={70} height={70} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
                  </div>
                  <div className="svc-feat-text">
                    <h2>{s.title}</h2>
                    <p>{s.desc}</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="svc-feat-cta">Contactar ahora →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="svc-strip-cta">
        <h2>¿Es una emergencia ahora mismo?</h2>
        <p>No esperes. Escríbenos por WhatsApp o llámanos directamente. Estamos disponibles en este momento.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">Contactar de inmediato</a>
      </div>

      <Footer />
    </>
  );
}
