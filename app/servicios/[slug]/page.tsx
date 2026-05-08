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
    icon: '',
    desc: 'El cuidado preventivo de hoy evita los problemas de mañana. Vacunación, revisiones periódicas, estética y salud dental para que tu mascota esté siempre en su mejor estado.',
    items: [
      { icon: '', title: 'Vacunación', desc: 'Protegemos a tu mascota con esquemas de vacunación adaptados a su edad, raza y estilo de vida, usando las mejores vacunas disponibles en el mercado.' },
      { icon: '', title: 'Revisión General', desc: 'Evaluación física completa: peso, temperatura, condición corporal, revisión dental, auditiva y ocular. Detectamos cambios antes de que se vuelvan problemas mayores.' },
      { icon: '', title: 'Baño y Estética', desc: 'Baño con productos especializados por tipo de pelaje, corte personalizado, limpieza de oídos, recorte de uñas y cepillado. Un momento de cuidado que también refuerza tu vínculo con ella.' },
      { icon: '', title: 'Limpieza Dental', desc: 'Profilaxis dental profesional con ultrasonido para eliminar sarro y bacterias. La salud bucal impacta directamente el bienestar general de tu mascota.' },
    ],
  },
  diagnostico: {
    title: 'Diagnóstico',
    icon: '',
    desc: 'Encontrar la respuesta correcta es el primer paso del tratamiento. Con laboratorio propio, radiografía digital y ultrasonido bajo el mismo techo, llegamos al diagnóstico sin demoras.',
    items: [
      { icon: '', title: 'Laboratorio Clínico', desc: 'Laboratorio propio para hemogramas, químicas sanguíneas, urianálisis y cultivos. Resultados rápidos para decisiones médicas informadas.' },
      { icon: '', title: 'Radiografía Digital', desc: 'Imágenes de alta resolución para evaluar huesos, pulmones, corazón y órganos abdominales. Diagnósticos precisos con el menor estrés posible para tu mascota.' },
      { icon: '', title: 'Ultrasonido', desc: 'Ecografía abdominal y cardíaca en tiempo real sin procedimientos invasivos. Ideal para detectar masas, líquidos y alteraciones en órganos internos.' },
    ],
  },
  urgencias: {
    title: 'Urgencias 24/7',
    icon: '',
    desc: 'Las emergencias no avisan. Por eso estamos disponibles toda la noche, todos los días del año. Llámanos o escríbenos: siempre habrá alguien listo para ayudarte.',
    items: [
      { icon: '', title: 'Atención a Cualquier Hora', desc: 'Equipo disponible las 24 horas, todos los días del año. Contáctanos por teléfono o WhatsApp y te orientamos de inmediato sobre los pasos a seguir.' },
      { icon: '', title: 'Hospitalización y Seguimiento', desc: 'Área de hospitalización con revisiones periódicas, medicación controlada y atención cercana para que tu mascota regrese a casa en las mejores condiciones.' },
    ],
  },
  especialidades: {
    title: 'Especialidades',
    icon: '',
    desc: 'Hay momentos en que tu mascota necesita más que una consulta general. Nuestras especialidades están aquí para esos casos: ortopedia, cardiología, oftalmología y oncología.',
    items: [
      { icon: '', title: 'Ortopedia', desc: 'Evaluación y tratamiento de displasia de cadera, luxación de rótula, fracturas complejas y enfermedades articulares. El objetivo: devolver la movilidad y calidad de vida.' },
      { icon: '', title: 'Cardiología', desc: 'Diagnóstico y manejo de enfermedades cardíacas mediante auscultación, electrocardiografía y ecocardiografía, ajustando el tratamiento a cada paciente.' },
      { icon: '', title: 'Oftalmología', desc: 'Evaluación y tratamiento de cataratas, úlceras corneales, glaucoma y otras condiciones oculares. La detección temprana marca la diferencia en el pronóstico.' },
      { icon: '', title: 'Oncología', desc: 'Plan integral que puede incluir quimioterapia, seguimiento postquirúrgico y cuidados paliativos. Acompañamiento honesto y cercano en cada etapa del tratamiento.' },
    ],
  },
  cirugias: {
    title: 'Cirugías',
    icon: '',
    desc: 'Quirófano equipado y médicos certificados para cada tipo de procedimiento. Desde esterilizaciones de rutina hasta intervenciones complejas, la seguridad de tu mascota es siempre la prioridad.',
    items: [
      { icon: '', title: 'Esterilización', desc: 'Uno de los procedimientos más beneficiosos para tu mascota. Reduce riesgo de enfermedades reproductivas, mejora el comportamiento y contribuye a una vida más larga.' },
      { icon: '', title: 'Cirugía Ortopédica', desc: 'Corrección de fracturas, ruptura de ligamentos y displasias con técnicas actualizadas y materiales de calidad para una recuperación funcional efectiva.' },
      { icon: '', title: 'Cirugía de Tejidos Blandos', desc: 'Procedimientos gastrointestinales, urológicos, reproductivos y cutáneos con mínima invasión y protocolo anestésico personalizado para cada paciente.' },
      { icon: '', title: 'Cirugía Oncológica', desc: 'Extirpación de tumores y masas con márgenes adecuados, biopsia y seguimiento coordinado. Trabajamos con transparencia y acompañamiento en cada etapa.' },
    ],
  },
  'otros-servicios': {
    title: 'Otros Servicios',
    icon: '',
    desc: 'Más allá de la consulta y la cirugía, tenemos todo lo que necesitas como dueño responsable: microchip, certificados, comportamiento y farmacia en un mismo lugar.',
    items: [
      { icon: '', title: 'Certificados de Viaje', desc: 'Expedimos el certificado de salud oficial para viajes nacionales e internacionales y te asesoramos sobre los requisitos sanitarios de cada destino.' },
      { icon: '', title: 'Consultoría en Comportamiento', desc: 'Plan de manejo personalizado para agresividad, ansiedad de separación, miedos y comportamientos destructivos, adaptado a la personalidad y entorno de tu mascota.' },
      { icon: '', title: 'Farmacia Veterinaria', desc: 'Amplio surtido de medicamentos, antiparasitarios, vitaminas y suplementos de marcas confiables. Te asesoramos siempre sobre el uso correcto de cada producto.' },
      { icon: '', title: 'Identificación con Microchip', desc: 'Colocación rápida e indolora de microchip con registro permanente compatible con los sistemas de identificación en México. Un pequeño paso con un gran impacto.' },
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
            Agendar por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
