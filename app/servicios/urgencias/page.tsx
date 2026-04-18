import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Urgencias | Veterinaria Mutualismo — Celaya',
  description:
    'Atención de emergencia 24 horas y hospitalización intensiva para tu mascota en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Atención Inmediata 24h',
    desc: 'Equipo médico disponible en todo momento para emergencias críticas. Sin cita, sin esperas innecesarias. Tu mascota recibirá atención de urgencia de forma inmediata los 365 días del año.',
    illustration: '/servicios/urgencias24hrs.png',
    photo: '/pacientes/paciente-3.jpeg',
    photoAlt: 'Paciente en urgencias Veterinaria Mutualismo',
    bg: '#ffffff',
  },
  {
    title: 'Hospitalización Intensiva',
    desc: 'Unidad de cuidados intensivos con monitoreo constante de signos vitales y atención especializada. Nuestro equipo vigila a tu mascota durante todo su proceso de recuperación.',
    illustration: '/servicios/hospitalizacion.png',
    photo: '/pacientes/paciente-6.jpeg',
    photoAlt: 'Perro hospitalizado en Veterinaria Mutualismo',
    bg: '#f7fbfe',
  },
];

export default function UrgenciasPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      {/* Hero */}
      <section className="svc-hero">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="svc-breadcrumb reveal slide-up">
            <Link href="/#servicios">Servicios</Link> / <span>Urgencias</span>
          </p>
          <h1 className="reveal slide-up" style={{ transitionDelay: '.1s' }}>Urgencias</h1>
          <p className="reveal slide-up" style={{ transitionDelay: '.2s' }}>
            Disponibles las 24 horas del día, los 365 días del año. Tu mascota nunca estará sola en una emergencia.
          </p>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20tengo%20una%20urgencia%20con%20mi%20mascota"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sky reveal slide-up"
            style={{ transitionDelay: '.3s' }}
          >
            Contactar ahora
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
              href="https://wa.me/524424659302?text=Hola%2C%20tengo%20una%20urgencia%20con%20mi%20mascota"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sky"
              style={{ width: 'fit-content' }}
            >
              Contactar ahora
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
