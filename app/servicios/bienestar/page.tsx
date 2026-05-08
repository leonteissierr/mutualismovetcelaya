import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Bienestar | Veterinaria Mutualismo — Celaya',
  description: 'Vacunación, revisiones preventivas, estética y limpieza dental para tu mascota en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Vacunación',
    desc: 'Proteger a tu mascota empieza con un esquema de vacunación completo y puntual. Aplicamos vacunas para perros y gatos contra las enfermedades más frecuentes de la región, ajustando el calendario según la edad, raza y estilo de vida de cada paciente.',
    illustration: '/servicios/vacunaaa.png',
    photo: '/pacientes/paciente-4.jpeg',
    photoAlt: 'Cachorro atendido en Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Revisión General',
    desc: 'Una visita de rutina puede marcar la diferencia. Realizamos una evaluación física completa: peso, temperatura, condición corporal, salud dental, revisión auditiva y ocular. El objetivo es detectar cualquier cambio antes de que se vuelva un problema mayor.',
    illustration: '/servicios/consuulta.png',
    photo: '/pacientes/paciente-1.jpeg',
    photoAlt: 'Bulldog francés en revisión general Mutualismo Celaya',
  },
  {
    title: 'Baño y Estética',
    desc: 'Tu mascota merece verse y sentirse bien. Nuestro servicio incluye baño con productos especializados según el tipo de pelaje, corte personalizado, limpieza de oídos, recorte de uñas y cepillado. Un momento de cuidado que también refuerza tu vínculo con ella.',
    illustration: '/servicios/esteticaa.png',
    photo: '/pacientes/paciente-2.jpeg',
    photoAlt: 'Perro blanco después de servicio de estética en Mutualismo Celaya',
  },
  {
    title: 'Limpieza Dental',
    desc: 'La salud bucal impacta directamente el bienestar general de tu mascota. Realizamos profilaxis dental profesional con ultrasonido, eliminando sarro y bacterias acumuladas. El procedimiento se realiza bajo anestesia para garantizar la comodidad de tu compañero.',
    illustration: '/servicios/profilaxiss.png',
    photo: '/pacientes/paciente-5.jpeg',
    photoAlt: 'Cocker spaniel en Veterinaria Mutualismo Celaya',
  },
];

const WA = 'https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Bienestar';

export default function BienestarPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      <section className="svc-hero-v2">
        <div className="wrap">
          <div className="svc-hero-v2-inner">
            <div className="svc-hero-v2-content">
              <span className="svc-breadcrumb">
                <Link href="/#servicios">Servicios</Link> / <span>Bienestar</span>
              </span>
              <h1>Bienestar</h1>
              <p>
                El cuidado preventivo de hoy evita los problemas de mañana.
                Vacunación, revisiones periódicas, estética y salud dental para
                que tu mascota esté siempre en su mejor estado.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">
                Agenda una cita
              </a>
            </div>
            <div className="svc-hero-v2-icon">
              <Image src="/logoservicios/1.png" alt="Bienestar" width={110} height={110} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
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
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="svc-feat-cta">Agenda tu cita →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="svc-strip-cta">
        <h2>¿Lista para su próxima visita?</h2>
        <p>Escríbenos por WhatsApp y encuentra el horario que mejor se acomode a ti. Sin esperas, sin complicaciones.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">Agendar ahora</a>
      </div>

      <Footer />
    </>
  );
}
