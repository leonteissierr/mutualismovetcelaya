import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Cirugías | Veterinaria Mutualismo — Celaya',
  description:
    'Esterilizaciones, cirugía ortopédica, tejidos blandos y oncológica en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Esterilización',
    desc: 'Ovariohisterectomía y orquiectomía con técnicas modernas para una recuperación rápida y segura. Procedimiento recomendado para mejorar la calidad de vida y prevenir enfermedades reproductivas.',
    illustration: '/servicios/vacunaaa.png',
    photo: '/pacientes/paciente-2.jpeg',
    photoAlt: 'Paciente en cirugía Veterinaria Mutualismo',
    bg: '#ffffff',
  },
  {
    title: 'Cirugía Ortopédica',
    desc: 'Corrección de fracturas, ligamentos y articulaciones con implantes de última generación. Nuestro equipo especializado garantiza la mejor recuperación funcional para tu mascota.',
    illustration: '/servicios/hospitalizacion.png',
    photo: '/pacientes/paciente-6.jpeg',
    photoAlt: 'Cirugía ortopédica Veterinaria Mutualismo',
    bg: '#f7fbfe',
  },
  {
    title: 'Cirugía de Tejidos Blandos',
    desc: 'Procedimientos gastrointestinales, urológicos, reproductivos y de piel con mínima invasión. Quirófano equipado con tecnología de punta para garantizar la seguridad en cada intervención.',
    illustration: '/servicios/urgencias24hrs.png',
    photo: '/pacientes/paciente-3.jpeg',
    photoAlt: 'Cirugía de tejidos blandos Veterinaria Mutualismo',
    bg: '#ffffff',
  },
  {
    title: 'Cirugía Oncológica',
    desc: 'Extirpación de tumores y masas con márgenes oncológicos adecuados y biopsia para diagnóstico. Trabajamos en conjunto con nuestro equipo de oncología para un tratamiento integral.',
    illustration: '/servicios/consuulta.png',
    photo: '/pacientes/paciente-7.jpeg',
    photoAlt: 'Cirugía oncológica Veterinaria Mutualismo',
    bg: '#f7fbfe',
  },
];

export default function CirugiasPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      {/* Hero */}
      <section className="svc-hero">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="svc-breadcrumb reveal slide-up">
            <Link href="/#servicios">Servicios</Link> / <span>Cirugías</span>
          </p>
          <h1 className="reveal slide-up" style={{ transitionDelay: '.1s' }}>Cirugías</h1>
          <p className="reveal slide-up" style={{ transitionDelay: '.2s' }}>
            Quirófano equipado con tecnología de punta y equipo médico certificado para garantizar la seguridad de tu mascota en cada procedimiento.
          </p>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Cirug%C3%ADa"
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
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Cirug%C3%ADa"
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
