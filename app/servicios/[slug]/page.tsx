import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

const serviceData: Record<string, {
  title: string;
  icon: string;
  desc: string;
  items: { icon: string; title: string; desc: string }[];
}> = {
  bienestar: {
    title: 'Bienestar',
    icon: '🩺',
    desc: 'Cuidamos la salud preventiva de tu mascota con servicios de vacunación, chequeos generales, baño y estética, y profilaxis dental.',
    items: [
      { icon: '💉', title: 'Vacunación', desc: 'Esquemas completos para perros y gatos con vacunas de primera calidad, siguiendo el calendario recomendado por tu especie y edad.' },
      { icon: '🔍', title: 'Checkup Preventivo', desc: 'Revisión integral para detectar cualquier problema a tiempo: peso, temperatura, corazón, dientes, oídos y más.' },
      { icon: '✂️', title: 'Estética Canina y Felina', desc: 'Baño, corte, limpieza de oídos, cepillado y retiro de pelaje muerto para que tu mascota luzca perfecta.' },
      { icon: '🦷', title: 'Limpieza Dental', desc: 'Profilaxis dental profesional para prevenir enfermedades periodontales y mantener una higiene bucal óptima.' },
    ],
  },
  diagnostico: {
    title: 'Diagnóstico',
    icon: '🔬',
    desc: 'Contamos con equipos modernos de diagnóstico para identificar con precisión cualquier condición de salud en tu mascota.',
    items: [
      { icon: '', title: 'Análisis de Laboratorio', desc: 'Hemograma completo, química sanguínea, urianálisis y cultivos para diagnóstico preciso y rápido.' },
      { icon: '', title: 'Rayos X', desc: 'Radiografías digitales de alta calidad para evaluar huesos, órganos y detectar anomalías internas.' },
      { icon: '', title: 'Ultrasonido', desc: 'Ecografía abdominal y cardíaca para visualizar órganos internos en tiempo real sin dolor ni estrés.' },
    ],
  },
  urgencias: {
    title: 'Urgencias',
    icon: '🚨',
    desc: 'Disponibles las 24 horas del día, los 365 días del año. Tu mascota nunca estará sola en una emergencia.',
    items: [
      { icon: '', title: 'Atención Inmediata 24h', desc: 'Equipo médico disponible en todo momento para emergencias críticas. Sin cita, sin esperas innecesarias.' },
      { icon: '', title: 'Hospitalización Intensiva', desc: 'Unidad de cuidados intensivos con monitoreo constante de signos vitales y atención especializada.' },
    ],
  },
  especialidades: {
    title: 'Especialidades',
    icon: '⭐',
    desc: 'Especialistas altamente calificados para condiciones complejas que requieren atención avanzada y enfoque multidisciplinario.',
    items: [
      { icon: '', title: 'Ortopedia', desc: 'Tratamiento de fracturas, displasia de cadera, luxaciones y enfermedades articulares con técnicas mínimamente invasivas.' },
      { icon: '', title: 'Cardiología', desc: 'Diagnóstico y manejo de enfermedades cardíacas congénitas y adquiridas con ecocardiografía especializada.' },
      { icon: '', title: 'Oftalmología', desc: 'Evaluación y tratamiento de cataratas, glaucoma, enfermedades de córnea y otras patologías oculares.' },
      { icon: '', title: 'Oncología', desc: 'Diagnóstico, estadificación y tratamiento de tumores con quimioterapia, cirugía y seguimiento integral.' },
    ],
  },
  cirugias: {
    title: 'Cirugías',
    icon: '✂️',
    desc: 'Quirófano equipado con tecnología de punta y equipo médico certificado para garantizar la seguridad de tu mascota en cada procedimiento.',
    items: [
      { icon: '', title: 'Esterilización', desc: 'Ovariohisterectomía y orquiectomía con técnicas modernas para una recuperación rápida y segura.' },
      { icon: '', title: 'Cirugía Ortopédica', desc: 'Corrección de fracturas, ligamentos y articulaciones con implantes de última generación.' },
      { icon: '', title: 'Cirugía de Tejidos Blandos', desc: 'Procedimientos gastrointestinales, urológicos, reproductivos y de piel con mínima invasión.' },
      { icon: '', title: 'Cirugía Oncológica', desc: 'Extirpación de tumores y masas con márgenes oncológicos adecuados y biopsia para diagnóstico.' },
    ],
  },
  'otros-servicios': {
    title: 'Otros Servicios',
    icon: '📋',
    desc: 'Servicios complementarios para el bienestar integral de tu mascota y para facilitar tu vida como dueño responsable.',
    items: [
      { icon: '', title: 'Certificados de Viaje', desc: 'Certificado de salud oficial para viajes nacionales e internacionales. Asesoría sobre requisitos por país.' },
      { icon: '', title: 'Etología', desc: 'Evaluación y tratamiento de problemas de conducta: agresividad, ansiedad, miedos y más.' },
      { icon: '', title: 'Farmacia Veterinaria', desc: 'Amplio surtido de medicamentos, antiparasitarios, vitaminas y suplementos para tu mascota.' },
      { icon: '', title: 'Microchip', desc: 'Identificación permanente y segura con chip electrónico compatible con el registro nacional.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = serviceData[slug];
  if (!data) return {};
  return {
    title: `${data.title} | Veterinaria Mutualismo — Celaya`,
    description: data.desc,
  };
}

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = serviceData[slug];
  if (!data) notFound();

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="svc-hero">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="svc-breadcrumb">
            <Link href="/#servicios">Servicios</Link> / <span>{data.title}</span>
          </p>
          <span className="svc-hero-icon">{data.icon}</span>
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wh"
          >
            Agenda una cita
          </a>
        </div>
      </section>

      {/* Service items */}
      <section className="svc-items">
        <div className="wrap">
          <div className="sec-hdr reveal" style={{ textAlign: 'center' }}>
            <span className="sec-lbl">¿Qué incluye?</span>
            <h2 className="sec-h" style={{ textAlign: 'center' }}>
              Todo lo que ofrecemos en <span>{data.title}</span>
            </h2>
          </div>
          <div className="svc-items-grid">
            {data.items.map((item) => (
              <div key={item.title} className="svc-item-card">
                <div className="svc-item-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="wrap">
          <h2>¿Listo para cuidar a tu mascota?</h2>
          <p>Agenda una cita hoy mismo y recibe atención personalizada de nuestro equipo en Celaya, Guanajuato.</p>
          <a
            href={`https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita%20de%20${encodeURIComponent(data.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sky"
          >
            📲 Agendar por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
