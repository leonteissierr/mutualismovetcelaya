import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    slug: 'bienestar',
    num: '01',
    title: 'Bienestar',
    desc: 'Vacunas, revisiones preventivas, estética y limpieza dental. El cuidado cotidiano que mantiene a tu mascota sana y feliz.',
    img: '/logoservicios/1.png',
  },
  {
    slug: 'diagnostico',
    num: '02',
    title: 'Diagnóstico',
    desc: 'Laboratorio propio, radiografías digitales y ultrasonido para llegar al diagnóstico correcto sin demoras.',
    img: '/logoservicios/2.png',
  },
  {
    slug: 'especialidades',
    num: '03',
    title: 'Especialidades',
    desc: 'Ortopedia, cardiología, oftalmología y oncología. Atención de alto nivel cuando tu mascota necesita más.',
    img: '/logoservicios/4.png',
  },
  {
    slug: 'cirugias',
    num: '04',
    title: 'Cirugías',
    desc: 'Quirófano moderno y médicos certificados para esterilizaciones, cirugías ortopédicas y procedimientos complejos.',
    img: '/logoservicios/5.png',
  },
  {
    slug: 'otros-servicios',
    num: '05',
    title: 'Otros Servicios',
    desc: 'Microchip, certificados de viaje, farmacia veterinaria y más. Todo en un lugar.',
    img: '/logoservicios/6.png',
  },
];

export default function Servicios() {
  return (
    <section id="servicios">
      <div className="wrap">
        <div className="svc-top reveal">
          <div>
            <span className="sec-lbl">Lo que hacemos</span>
            <h2 className="sec-h">
              Atención completa<br />bajo un mismo techo
            </h2>
          </div>
          <p className="svc-top-sub">
            Más de 20 años cuidando mascotas en Celaya nos enseñaron que cada consulta, cada vacuna
            y cada emergencia merecen el mismo nivel de compromiso y dedicación.
          </p>
        </div>

        <div className="svc-grid">
          {services.map((s) => (
            <Link key={s.slug} href={`/servicios/${s.slug}`} className="svc-card">
              <span className="svc-num">{s.num}</span>
              <div className="svc-card-icon">
                <Image src={s.img} alt={s.title} width={52} height={52} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
              </div>
              <h3 className="svc-card-title">{s.title}</h3>
              <p className="svc-card-desc">{s.desc}</p>
              <span className="svc-card-link">Conocer más →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
