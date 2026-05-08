import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Diagnóstico | Veterinaria Mutualismo — Celaya',
  description: 'Laboratorio clínico, radiografías digitales y ultrasonido para tu mascota en Celaya, Guanajuato.',
};

const sections = [
  {
    title: 'Laboratorio Clínico',
    desc: 'Contamos con laboratorio propio para hemogramas, químicas sanguíneas, urianálisis y cultivos. Los resultados rápidos nos permiten tomar decisiones médicas informadas sin tiempos de espera, porque la salud de tu mascota no puede quedarse en pausa.',
    illustration: '/servicios/consuulta.png',
    photo: '/pacientes/paciente-7.jpeg',
    photoAlt: 'Análisis de laboratorio Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Radiografía Digital',
    desc: 'Imágenes de alta resolución para evaluar huesos, pulmones, corazón y órganos abdominales. La radiografía digital nos da resultados inmediatos y diagnósticos más precisos con el menor estrés posible para tu mascota.',
    illustration: '/servicios/urgencias24hrs.png',
    photo: '/pacientes/paciente-8.png',
    photoAlt: 'Radiografía digital Veterinaria Mutualismo Celaya',
  },
  {
    title: 'Ultrasonido',
    desc: 'La ecografía nos permite visualizar en tiempo real el estado de los órganos internos sin procedimientos invasivos. Usamos ultrasonido abdominal y cardíaco para detectar masas, acumulación de líquidos y alteraciones reproductivas.',
    illustration: '/servicios/hospitalizacion.png',
    photo: '/pacientes/paciente-3.jpeg',
    photoAlt: 'Ultrasonido veterinario Mutualismo Celaya',
  },
];

const WA = 'https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20Diagn%C3%B3stico';

export default function DiagnosticoPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      <section className="svc-hero-v2">
        <div className="wrap">
          <div className="svc-hero-v2-inner">
            <div className="svc-hero-v2-content">
              <span className="svc-breadcrumb">
                <Link href="/#servicios">Servicios</Link> / <span>Diagnóstico</span>
              </span>
              <h1>Diagnóstico</h1>
              <p>
                Encontrar la respuesta correcta es el primer paso del tratamiento.
                Con laboratorio propio, radiografía digital y ultrasonido bajo el
                mismo techo, llegamos al diagnóstico sin perder tiempo.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">
                Agenda una cita
              </a>
            </div>
            <div className="svc-hero-v2-icon">
              <Image src="/logoservicios/2.png" alt="Diagnóstico" width={110} height={110} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
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
        <h2>¿Necesitas un diagnóstico hoy?</h2>
        <p>Nuestro laboratorio y equipos de imagen están listos. Contáctanos y te agendamos lo antes posible.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wh">Agendar ahora</a>
      </div>

      <Footer />
    </>
  );
}
