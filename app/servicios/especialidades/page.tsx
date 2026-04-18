import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Especialidades | Veterinaria Mutualismo — Celaya',
  description:
    'Ortopedia, Cardiología, Oftalmología y Oncología veterinaria en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Ortopedia',
    desc: 'Tratamiento de fracturas, displasia de cadera, luxaciones y enfermedades articulares con técnicas mínimamente invasivas. Nuestro especialista en ortopedia trabaja para devolver la movilidad y calidad de vida a tu mascota.',
    illustration: '/servicios/hospitalizacion.png',
    photo: '/pacientes/paciente-1.jpeg',
    photoAlt: 'Paciente en ortopedia Veterinaria Mutualismo',
    bg: '#ffffff',
  },
  {
    title: 'Cardiología',
    desc: 'Diagnóstico y manejo de enfermedades cardíacas congénitas y adquiridas con ecocardiografía especializada. Monitoreamos la salud del corazón de tu mascota con equipos de última generación.',
    illustration: '/servicios/urgencias24hrs.png',
    photo: '/pacientes/paciente-4.jpeg',
    photoAlt: 'Consulta cardiológica Veterinaria Mutualismo',
    bg: '#f7fbfe',
  },
  {
    title: 'Oftalmología',
    desc: 'Evaluación y tratamiento de cataratas, glaucoma, enfermedades de córnea y otras patologías oculares. Contamos con equipo especializado para el cuidado de la visión de tu mascota.',
    illustration: '/servicios/consuulta.png',
    photo: '/pacientes/paciente-5.jpeg',
    photoAlt: 'Consulta oftalmológica Veterinaria Mutualismo',
    bg: '#ffffff',
  },
  {
    title: 'Oncología',
    desc: 'Diagnóstico, estadificación y tratamiento de tumores con quimioterapia, cirugía y seguimiento integral. Nuestro equipo oncológico acompaña a tu mascota y a tu familia en cada etapa del tratamiento.',
    illustration: '/servicios/esteticaa.png',
    photo: '/pacientes/paciente-6.jpeg',
    photoAlt: 'Consulta oncológica Veterinaria Mutualismo',
    bg: '#f7fbfe',
  },
];

export default function EspecialidadesPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      {/* Hero */}
      <section className="svc-hero">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="svc-breadcrumb reveal slide-up">
            <Link href="/#servicios">Servicios</Link> / <span>Especialidades</span>
          </p>
          <h1 className="reveal slide-up" style={{ transitionDelay: '.1s' }}>Especialidades</h1>
          <p className="reveal slide-up" style={{ transitionDelay: '.2s' }}>
            Especialistas altamente calificados para condiciones complejas que requieren atención avanzada y enfoque multidisciplinario.
          </p>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Especialidades"
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
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Especialidades"
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
