import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Bienestar | Veterinaria Mutualismo — Celaya',
  description:
    'Checkups preventivos, vacunación, estética canina y felina, y limpieza dental profesional en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Vacunación',
    desc: 'Las vacunas son uno de los componentes clave para la salud de tu mascota y esenciales para prevenir enfermedades potencialmente mortales. Ofrecemos todos los esquemas básicos y complementarios que tu mascota pueda necesitar.',
    illustration: '/servicios/vacunaaa.png',
    photo: '/pacientes/paciente-4.jpeg',
    photoAlt: 'Cachorro siendo atendido en Veterinaria Mutualismo',
    bg: '#ffffff',
  },
  {
    title: 'Checkup General',
    desc: 'Evaluación completa que incluye examen físico, revisiones de órganos, análisis de sangre y recomendaciones de nutrición y estilo de vida para mantener a tu compañero en óptimas condiciones.',
    illustration: '/servicios/consuulta.png',
    photo: '/pacientes/paciente-1.jpeg',
    photoAlt: 'Bulldog francés en consulta veterinaria',
    bg: '#f7fbfe',
  },
  {
    title: 'Baño y estética',
    desc: 'Servicios de spa que no solo embellecen a tu mascota, sino que también contribuyen a su bienestar general, incluyendo corte de pelo, baño terapéutico y cuidado de uñas.',
    illustration: '/servicios/esteticaa.png',
    photo: '/pacientes/paciente-2.jpeg',
    photoAlt: 'Perro blanco después de estética en Mutualismo',
    bg: '#ffffff',
  },
  {
    title: 'Profilaxis dental',
    desc: 'Limpieza profunda y pulido de los dientes para perros y gatos. El proceso comienza con un examen dental general y es un procedimiento que se realiza bajo anestesia.',
    illustration: '/servicios/profilaxiss.png',
    photo: '/pacientes/paciente-5.jpeg',
    photoAlt: 'Cocker spaniel en Veterinaria Mutualismo',
    bg: '#f7fbfe',
  },
];

export default function BienestarPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      {/* Hero */}
      <section className="svc-hero">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="svc-breadcrumb reveal slide-up">
            <Link href="/#servicios">Servicios</Link> / <span>Bienestar</span>
          </p>
          <h1 className="reveal slide-up" style={{ transitionDelay: '.1s' }}>Bienestar</h1>
          <p className="reveal slide-up" style={{ transitionDelay: '.2s' }}>
            Cuidamos la salud preventiva de tu mascota con vacunación, checkups generales,
            baño y estética, y profilaxis dental.
          </p>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Bienestar"
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
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita"
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
