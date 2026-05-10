import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Veterinaria Mutualismo — Celaya',
  description: 'Aviso de privacidad de Veterinaria Mutualismo conforme a la LFPDPPP.',
};

export default function AvisoPrivacidad() {
  return (
    <>
      <Nav />
      <ScrollEffects />

      <section style={{ paddingTop: '7rem', paddingBottom: '5rem', background: 'var(--bg)' }}>
        <div className="wrap" style={{ maxWidth: '780px' }}>
          <Link href="/" style={{ fontSize: '.85rem', color: 'var(--sky)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
            ← Volver al inicio
          </Link>

          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '.5rem' }}>
            Aviso de Privacidad
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: '.9rem', marginBottom: '2.5rem' }}>
            Última actualización: mayo de 2025
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text)', lineHeight: 1.8, fontSize: '.97rem' }}>

            <div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', fontWeight: 800, marginBottom: '.5rem' }}>1. Responsable del tratamiento de datos</h2>
              <p>
                <strong>Veterinaria Mutualismo</strong>, con domicilio en Mutualismo 605, Local B, Residencial Celaya Centro, C.P. 38060, Celaya, Guanajuato, México, es responsable del uso y protección de sus datos personales, en los términos que establece la <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</em> (LFPDPPP).
              </p>
              <p style={{ marginTop: '.5rem' }}>
                Contacto: <a href="https://wa.me/524424659302" style={{ color: 'var(--sky)' }}>WhatsApp +52 442 465 9302</a> | <a href="tel:4616155620" style={{ color: 'var(--sky)' }}>461 615 5620</a>
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', fontWeight: 800, marginBottom: '.5rem' }}>2. Datos personales que recopilamos</h2>
              <p>A través del formulario de agenda en nuestro sitio web recopilamos:</p>
              <ul style={{ paddingLeft: '1.4rem', marginTop: '.5rem' }}>
                <li>Nombre del propietario de la mascota</li>
                <li>Nombre, especie y raza de la mascota</li>
                <li>Fecha y horario preferido para la cita</li>
                <li>Sucursal de preferencia</li>
                <li>Servicio requerido</li>
              </ul>
              <p style={{ marginTop: '.5rem' }}>
                Estos datos se transfieren directamente a través de WhatsApp y <strong>no se almacenan en ningún servidor propio</strong>.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', fontWeight: 800, marginBottom: '.5rem' }}>3. Finalidad del tratamiento</h2>
              <p>Los datos recopilados se utilizan exclusivamente para:</p>
              <ul style={{ paddingLeft: '1.4rem', marginTop: '.5rem' }}>
                <li>Agendar y confirmar citas veterinarias</li>
                <li>Brindar atención y seguimiento médico a las mascotas</li>
                <li>Comunicarnos contigo sobre el estado de salud de tu mascota</li>
              </ul>
              <p style={{ marginTop: '.5rem' }}>
                No utilizamos tus datos para fines de mercadotecnia sin tu consentimiento explícito.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', fontWeight: 800, marginBottom: '.5rem' }}>4. Transferencia de datos a terceros</h2>
              <p>
                No compartimos tus datos personales con terceros, salvo en los casos previstos por la LFPDPPP o cuando sea estrictamente necesario para la prestación del servicio veterinario (por ejemplo, referencia a un especialista externo, con tu conocimiento previo).
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', fontWeight: 800, marginBottom: '.5rem' }}>5. Derechos ARCO</h2>
              <p>
                Tienes derecho a <strong>Acceder</strong>, <strong>Rectificar</strong>, <strong>Cancelar</strong> u <strong>Oponerte</strong> al tratamiento de tus datos personales (derechos ARCO). Para ejercerlos, contáctanos directamente por WhatsApp o teléfono indicando tu solicitud. Responderemos en un plazo máximo de 20 días hábiles.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', fontWeight: 800, marginBottom: '.5rem' }}>6. Cookies y tecnologías de seguimiento</h2>
              <p>
                Este sitio web <strong>no utiliza cookies propias de seguimiento ni herramientas de analítica</strong> (como Google Analytics o Facebook Pixel). El único almacenamiento local que se realiza es en la memoria de sesión del navegador (<em>sessionStorage</em>) para recordar si ya cerraste un aviso informativo, dato que se elimina automáticamente al cerrar el navegador y no es accesible por terceros.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', fontWeight: 800, marginBottom: '.5rem' }}>7. Cambios al aviso de privacidad</h2>
              <p>
                Veterinaria Mutualismo se reserva el derecho de modificar este aviso en cualquier momento. Cualquier cambio se publicará en esta misma página con la fecha de actualización. Te recomendamos revisarlo periódicamente.
              </p>
            </div>

            <div style={{ background: 'var(--sky-p)', borderRadius: '16px', padding: '1.2rem 1.5rem', border: '1.5px solid var(--sky-l)' }}>
              <p style={{ margin: 0, fontSize: '.9rem' }}>
                Si tienes dudas sobre el manejo de tus datos, escríbenos directamente a{' '}
                <a href="https://wa.me/524424659302" style={{ color: 'var(--sky)', fontWeight: 700 }}>WhatsApp +52 442 465 9302</a>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
