import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Nosotros | Veterinaria Mutualismo — Celaya',
  description:
    'Más de 20 años cuidando mascotas en Celaya, Guanajuato. Conoce al equipo de Veterinaria Mutualismo.',
};

export default function NosotrosPage() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      <section id="nosotros" style={{ paddingTop: '7rem' }}>
        <div className="wrap">
          <div className="agrid">
            <div>
              <div className="acard reveal from-left">
                <Image
                  src="/perrito-amarillo/perrito-doctor.png"
                  alt="Doctor Mutualismo"
                  width={140}
                  height={140}
                  style={{ objectFit: 'contain' }}
                />
                <h3>Veterinaria Mutualismo</h3>
                <p>Tu clínica de confianza en Celaya, Gto. desde hace más de 20 años.</p>
              </div>
              <div className="srow reveal">
                <div className="sbox">
                  <div className="num">20+</div>
                  <div className="lbl">Años de Exp.</div>
                </div>
                <div className="sbox">
                  <div className="num">1500+</div>
                  <div className="lbl">Pacientes</div>
                </div>
                <div className="sbox">
                  <div className="num">24</div>
                  <div className="lbl">Emergencias</div>
                </div>
              </div>
            </div>
            <div className="atx">
              <span className="sec-lbl">Sobre Nosotros</span>
              <h2 className="sec-h">
                Más que una clínica,
                <br />
                <span>somos tu familia</span>
              </h2>
              <p>
                En Clínica Veterinaria Mutualismo contamos con más de 20 años de experiencia
                brindando atención médica de calidad a las mascotas de nuestra comunidad.
              </p>
              <p>
                Nacimos con un propósito claro: cuidar la salud y bienestar de los animales como si
                fueran parte de nuestra propia familia. A lo largo de los años, hemos crecido
                incorporando tecnología y tratamientos especializados para ofrecer una atención
                integral.
              </p>
              <p>
                Nos caracterizamos por nuestro trato cercano, profesionalismo y compromiso con cada
                paciente. En Clínica Veterinaria Mutualismo,{' '}
                <strong style={{ color: 'var(--sky-d)' }}>
                  construimos relaciones de confianza con cada familia que nos visita.
                </strong>
              </p>
              <ul>
                <li>Veterinarios certificados y en constante capacitación</li>
                <li>Equipamiento moderno para diagnóstico y cirugía</li>
                <li>Trato individualizado y seguimiento de cada paciente</li>
                <li>Atención de emergencias disponible las 24 horas</li>
                <li>Transparencia total en diagnósticos y costos</li>
              </ul>
              <a
                href="https://wa.me/524424659302?text=Hola%2C%20quiero%20saber%20m%C3%A1s"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sky"
                style={{ marginTop: '1.5rem' }}
              >
                Contáctanos Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Antes y Después */}
      <section style={{ padding: '5rem 0', background: '#f7fbfe' }}>
        <div className="wrap">
          <div className="sec-hdr reveal slide-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="sec-lbl">Nuestra clínica</span>
            <h2 className="sec-h">Antes y <span>después</span></h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>
              Así hemos crecido para darte la mejor atención.
            </p>
          </div>
          <div className="antes-despues-grid">
            <div className="ad-card reveal slide-left">
              <div className="ad-label antes">Antes</div>
              <Image
                src="/veterinaria antes despues/antes.png"
                alt="Clínica Veterinaria Mutualismo — antes"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="50vw"
              />
            </div>
            <div className="ad-card reveal slide-right">
              <div className="ad-label despues">Después</div>
              <Image
                src="/veterinaria antes despues/despues.png"
                alt="Clínica Veterinaria Mutualismo — después"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
