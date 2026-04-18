import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Diagnóstico | Veterinaria Mutualismo — Celaya',
  description:
    'Análisis de laboratorio, Rayos X y Ultrasonidos para identificar con precisión cualquier condición de salud en tu mascota en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Análisis de Laboratorio',
    desc: 'Hemograma completo, química sanguínea, urianálisis y cultivos para un diagnóstico preciso y rápido. Contamos con laboratorio propio para resultados en el menor tiempo posible.',
    illustration: '/servicios/consuulta.png',
    photo: '/pacientes/paciente-7.jpeg',
    photoAlt: 'Paciente en laboratorio Veterinaria Mutualismo',
    bg: '#ffffff',
  },
  {
    title: 'Rayos X',
    desc: 'Radiografías digitales de alta calidad para evaluar huesos, órganos y detectar anomalías internas. Resultados inmediatos con equipos de última generación.',
    illustration: '/servicios/urgencias24hrs.png',
    photo: '/pacientes/paciente-8.png',
    photoAlt: 'Perro en consulta diagnóstica Veterinaria Mutualismo',
    bg: '#f7fbfe',
  },
  {
    title: 'Ultrasonido',
    desc: 'Ecografía abdominal y cardíaca para visualizar órganos internos en tiempo real, sin dolor ni estrés para tu mascota. Ideal para diagnósticos rápidos y seguimiento de tratamientos.',
    illustration: '/servicios/hospitalizacion.png',
    photo: '/pacientes/paciente-3.jpeg',
    photoAlt: 'Gato en revisión de ultrasonido Veterinaria Mutualismo',
    bg: '#ffffff',
  },
];

export default function DiagnosticoPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      {/* Hero */}
      <section className="svc-hero">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="svc-breadcrumb reveal slide-up">
            <Link href="/#servicios">Servicios</Link> / <span>Diagnóstico</span>
          </p>
          <h1 className="reveal slide-up" style={{ transitionDelay: '.1s' }}>Diagnóstico</h1>
          <p className="reveal slide-up" style={{ transitionDelay: '.2s' }}>
            Contamos con equipos modernos para identificar con precisión cualquier condición de salud en tu mascota.
          </p>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Diagn%C3%B3stico"
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
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Diagn%C3%B3stico"
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
