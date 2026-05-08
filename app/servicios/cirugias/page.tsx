import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Cirugías | Veterinaria Mutualismo — Celaya',
  description: 'Esterilizaciones, cirugía ortopédica, tejidos blandos y oncológica en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Esterilización',
    desc: 'Uno de los procedimientos más beneficiosos que puedes hacerle a tu mascota. Reduce el riesgo de enfermedades reproductivas, mejora el comportamiento y contribuye a una vida más larga. Lo realizamos con protocolos anestésicos modernos y seguimiento postoperatorio completo.',
    illustration: '/servicios/vacunaaa.png',
    photo: '/pacientes/paciente-2.jpeg',
    photoAlt: 'Recuperación postoperatoria Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Cirugía Ortopédica',
    desc: 'Fracturas, ruptura de ligamentos y displasias requieren intervención especializada. Realizamos cirugías ortopédicas con técnicas actualizadas y materiales de calidad para lograr una recuperación funcional efectiva y devolverle la movilidad a tu mascota.',
    illustration: '/servicios/hospitalizacion.png',
    photo: '/pacientes/paciente-6.jpeg',
    photoAlt: 'Cirugía ortopédica Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Cirugía de Tejidos Blandos',
    desc: 'Atendemos procedimientos gastrointestinales, urológicos, reproductivos y cutáneos con técnicas de mínima invasión. Cada intervención se planea con estudios previos y un protocolo anestésico personalizado para garantizar la seguridad de tu compañero.',
    illustration: '/servicios/urgencias24hrs.png',
    photo: '/pacientes/paciente-3.jpeg',
    photoAlt: 'Cirugía de tejidos blandos Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Cirugía Oncológica',
    desc: 'La detección y extirpación temprana de tumores puede cambiar el pronóstico de tu mascota. Realizamos biopsias, extirpación de masas con márgenes adecuados y coordinamos el seguimiento necesario. Transparencia y acompañamiento en cada etapa.',
    illustration: '/servicios/consuulta.png',
    photo: '/pacientes/paciente-7.jpeg',
    photoAlt: 'Atención oncológica Veterinaria Mutualismo Celaya',
  },
];

const WA = 'https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Cirug%C3%ADa';

export default function CirugiasPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      <section className="svc-hero-v2">
        <div className="wrap">
          <div className="svc-hero-v2-inner">
            <div className="svc-hero-v2-content">
              <span className="svc-breadcrumb">
                <Link href="/#servicios">Servicios</Link> / <span>Cirugías</span>
              </span>
              <h1>Cirugías</h1>
              <p>
                Quirófano equipado y médicos certificados para cada tipo de
                procedimiento. Desde esterilizaciones de rutina hasta intervenciones
                complejas: la seguridad de tu mascota es siempre la prioridad.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">
                Agenda una consulta
              </a>
            </div>
            <div className="svc-hero-v2-icon">
              <Image src="/logoservicios/5.png" alt="Cirugías" width={110} height={110} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
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
        <h2>¿Tu mascota necesita una cirugía?</h2>
        <p>Agenda una consulta previa y nuestro equipo te explicará el procedimiento, los cuidados y todo lo que necesitas saber.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">Agendar consulta</a>
      </div>

      <Footer />
    </>
  );
}
