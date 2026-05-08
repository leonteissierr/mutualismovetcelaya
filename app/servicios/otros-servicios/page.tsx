import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Otros Servicios | Veterinaria Mutualismo — Celaya',
  description: 'Microchip, certificados de viaje, etología y farmacia veterinaria en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Certificados de Viaje',
    desc: '¿Tu mascota te acompaña en un viaje? Te asesoramos sobre los requisitos sanitarios nacionales e internacionales y expedimos el certificado de salud oficial. Nos aseguramos de que el proceso sea sencillo y que tu compañero llegue sin contratiempos.',
    illustration: '/servicios/vacunaaa.png',
    photo: '/pacientes/paciente-1.jpeg',
    photoAlt: 'Mascota lista para viajar Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Consultoría en Comportamiento',
    desc: 'Agresividad, ansiedad de separación, miedos y comportamientos destructivos tienen solución. Evaluamos a tu mascota y diseñamos un plan de manejo adaptado a su personalidad, historial y entorno familiar para mejorar la convivencia.',
    illustration: '/servicios/consuulta.png',
    photo: '/pacientes/paciente-2.jpeg',
    photoAlt: 'Consulta de comportamiento Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Farmacia Veterinaria',
    desc: 'Amplio surtido de medicamentos, antiparasitarios, vitaminas y suplementos de marcas confiables. Te asesoramos sobre el uso correcto de cada producto y vendemos solo lo que tu mascota realmente necesita, siempre con orientación profesional.',
    illustration: '/servicios/profilaxiss.png',
    photo: '/pacientes/paciente-4.jpeg',
    photoAlt: 'Farmacia Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Identificación con Microchip',
    desc: 'Un microchip del tamaño de un grano de arroz puede ser la diferencia entre reencontrarte con tu mascota o no. La colocación es rápida, prácticamente indolora y deja un registro permanente compatible con los sistemas de identificación en México.',
    illustration: '/servicios/esteticaa.png',
    photo: '/pacientes/paciente-5.jpeg',
    photoAlt: 'Colocación de microchip Veterinaria Mutualismo Celaya',
  },
];

const WA = 'https://wa.me/524424659302?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20otros%20servicios';

export default function OtrosServiciosPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      <section className="svc-hero-v2">
        <div className="wrap">
          <div className="svc-hero-v2-inner">
            <div className="svc-hero-v2-content">
              <span className="svc-breadcrumb">
                <Link href="/#servicios">Servicios</Link> / <span>Otros Servicios</span>
              </span>
              <h1>Otros Servicios</h1>
              <p>
                Más allá de la consulta y la cirugía, tenemos todo lo que necesitas
                como dueño responsable: microchip, certificados de viaje, consultoría
                en comportamiento y farmacia veterinaria, todo en un solo lugar.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">
                Pregúntanos
              </a>
            </div>
            <div className="svc-hero-v2-icon">
              <Image src="/logoservicios/6.png" alt="Otros Servicios" width={110} height={110} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="wrap">
          <div className="svc-feat-grid">
            {sections.map((s) => (
              <div key={s.title} className="svc-feat reveal slide-up">
                <div className="svc-feat-photo">
                  <Image src={s.photo} alt={s.photoAlt} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="(max-width:768px) 100vw, 50vw" />
                </div>
                <div className="svc-feat-body">
                  <div className="svc-feat-illus">
                    <Image src={s.illustration} alt={s.title} width={70} height={70} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
                  </div>
                  <div className="svc-feat-text">
                    <h2>{s.title}</h2>
                    <p>{s.desc}</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="svc-feat-cta">Más información →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="svc-strip-cta">
        <h2>¿Tienes alguna duda?</h2>
        <p>Escríbenos y con gusto te orientamos. En Mutualismo siempre hay alguien dispuesto a ayudarte.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">Contactar ahora</a>
      </div>

      <Footer />
    </>
  );
}
