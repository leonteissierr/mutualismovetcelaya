import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Otros Servicios | Veterinaria Mutualismo — Celaya',
  description:
    'Certificados de viaje, etología, farmacia veterinaria y microchip en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Certificados de Viaje',
    desc: 'Certificado de salud oficial para viajes nacionales e internacionales. Te asesoramos sobre los requisitos específicos de cada país para que el viaje con tu mascota sea seguro y sin contratiempos.',
    illustration: '/servicios/vacunaaa.png',
    photo: '/pacientes/paciente-1.jpeg',
    photoAlt: 'Mascota lista para viajar Veterinaria Mutualismo',
    bg: '#ffffff',
  },
  {
    title: 'Etología',
    desc: 'Evaluación y tratamiento de problemas de conducta como agresividad, ansiedad, miedos y comportamientos destructivos. Trabajamos con planes personalizados para mejorar la convivencia con tu mascota.',
    illustration: '/servicios/consuulta.png',
    photo: '/pacientes/paciente-2.jpeg',
    photoAlt: 'Consulta de etología Veterinaria Mutualismo',
    bg: '#f7fbfe',
  },
  {
    title: 'Farmacia Veterinaria',
    desc: 'Amplio surtido de medicamentos, antiparasitarios, vitaminas y suplementos para tu mascota. Contamos con productos de las mejores marcas y asesoría farmacológica personalizada.',
    illustration: '/servicios/profilaxiss.png',
    photo: '/pacientes/paciente-4.jpeg',
    photoAlt: 'Farmacia veterinaria Mutualismo',
    bg: '#ffffff',
  },
  {
    title: 'Microchip',
    desc: 'Identificación permanente y segura con chip electrónico compatible con el registro nacional. Un procedimiento rápido e indoloro que garantiza que tu mascota siempre pueda ser identificada si se pierde.',
    illustration: '/servicios/esteticaa.png',
    photo: '/pacientes/paciente-5.jpeg',
    photoAlt: 'Colocación de microchip Veterinaria Mutualismo',
    bg: '#f7fbfe',
  },
];

export default function OtrosServiciosPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      {/* Hero */}
      <section className="svc-hero">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="svc-breadcrumb reveal slide-up">
            <Link href="/#servicios">Servicios</Link> / <span>Otros Servicios</span>
          </p>
          <h1 className="reveal slide-up" style={{ transitionDelay: '.1s' }}>Otros Servicios</h1>
          <p className="reveal slide-up" style={{ transitionDelay: '.2s' }}>
            Servicios complementarios para el bienestar integral de tu mascota y para facilitar tu vida como dueño responsable.
          </p>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20otros%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sky reveal slide-up"
            style={{ transitionDelay: '.3s' }}
          >
            Agenda una cita
          </a>
        </div>
      </section>

      {/* Feature sections */}
      {sections.map((s) => (
        <div key={s.title} className="bw-section" style={{ background: s.bg }}>
          <div className="bw-content reveal slide-left">
            <div className="bw-illustration">
              <Image
                src={s.illustration}
                alt={s.title}
                width={700}
                height={520}
                style={{ width: '52%', height: 'auto' }}
              />
            </div>
            <h2 className="bw-title">{s.title}</h2>
            <p className="bw-desc">{s.desc}</p>
            <a
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20otros%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sky"
              style={{ width: 'fit-content' }}
            >
              Agenda tu cita
            </a>
          </div>
          <div className="bw-photo reveal slide-right">
            <Image
              src={s.photo}
              alt={s.photoAlt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="50vw"
            />
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
}
