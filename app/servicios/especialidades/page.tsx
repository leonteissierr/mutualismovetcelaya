import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Especialidades | Veterinaria Mutualismo — Celaya',
  description: 'Ortopedia, Cardiología, Oftalmología y Oncología veterinaria en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Ortopedia',
    desc: 'Cuando el movimiento duele, algo no está bien. Evaluamos y tratamos displasia de cadera, luxación de rótula, fracturas complejas y enfermedades articulares degenerativas, con enfoque en devolver la movilidad y la calidad de vida a tu mascota.',
    illustration: '/servicios/hospitalizacion.png',
    photo: '/pacientes/paciente-1.jpeg',
    photoAlt: 'Consulta de ortopedia Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Cardiología',
    desc: 'El corazón de tu mascota merece la misma atención que el tuyo. Diagnosticamos y manejamos enfermedades cardíacas mediante auscultación, electrocardiografía y ecocardiografía, ajustando el tratamiento a la evolución particular de cada paciente.',
    illustration: '/servicios/urgencias24hrs.png',
    photo: '/pacientes/paciente-4.jpeg',
    photoAlt: 'Consulta cardiológica Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Oftalmología',
    desc: 'Los ojos de tu mascota revelan mucho sobre su salud. Evaluamos y tratamos cataratas, úlceras corneales, glaucoma, entropión y otras condiciones oculares. La detección temprana marca una diferencia real en el pronóstico y en su calidad de vida.',
    illustration: '/servicios/consuulta.png',
    photo: '/pacientes/paciente-5.jpeg',
    photoAlt: 'Consulta oftalmológica Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Oncología',
    desc: 'Un diagnóstico de cáncer no siempre significa el fin. Ofrecemos un plan integral que puede incluir quimioterapia, seguimiento postquirúrgico y cuidados paliativos. Trabajamos con honestidad y acompañamiento cercano en cada etapa.',
    illustration: '/servicios/esteticaa.png',
    photo: '/pacientes/paciente-6.jpeg',
    photoAlt: 'Consulta oncológica Veterinaria Mutualismo Celaya',
  },
];

const WA = 'https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Especialidades';

export default function EspecialidadesPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      <section className="svc-hero-v2">
        <div className="wrap">
          <div className="svc-hero-v2-inner">
            <div className="svc-hero-v2-content">
              <span className="svc-breadcrumb">
                <Link href="/#servicios">Servicios</Link> / <span>Especialidades</span>
              </span>
              <h1>Especialidades</h1>
              <p>
                Hay momentos en que tu mascota necesita más que una consulta general.
                Nuestras especialidades están aquí para esos casos: ortopedia,
                cardiología, oftalmología y oncología en Celaya.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">
                Agenda una consulta
              </a>
            </div>
            <div className="svc-hero-v2-icon">
              <Image src="/logoservicios/4.png" alt="Especialidades" width={110} height={110} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
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
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="svc-feat-cta">Agenda tu cita →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="svc-strip-cta">
        <h2>¿Tu mascota necesita atención especializada?</h2>
        <p>Cuéntanos qué está pasando y te orientamos hacia el especialista adecuado, sin rodeos.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">Hablar con nosotros</a>
      </div>

      <Footer />
    </>
  );
}
