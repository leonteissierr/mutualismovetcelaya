export default function Pension() {
  const features = [
    {
      title: 'Perros y gatos',
      desc: 'Aceptamos ambas especies con cuidado personalizado para cada una.',
    },
    {
      title: 'El dueño provee el alimento',
      desc: 'Para mantener la dieta habitual de tu mascota y evitar cambios bruscos.',
    },
    {
      title: 'Precio según tamaño',
      desc: 'Tarifa personalizada dependiendo del tamaño de tu mascota. Consulta disponibilidad.',
    },
    {
      title: 'Atención veterinaria disponible',
      desc: 'Nuestro equipo está siempre presente para cualquier situación que surja.',
    },
  ];

  return (
    <section id="pension" style={{ background: 'var(--bg)', padding: '5rem 1.5rem' }}>
      <div className="wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          <div className="reveal from-left">
            <span className="sec-lbl">Nuevo servicio</span>
            <h2 className="sec-h">
              Pensión — <span>Hotel para mascotas</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '.95rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
              Tu perro o gato en las mejores manos mientras no estás. Cuidado profesional,
              ambiente tranquilo y atención veterinaria disponible en todo momento.
            </p>
            <div style={{ display: 'grid', gap: '.8rem', marginBottom: '1.8rem' }}>
              {features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '.9rem',
                    background: 'var(--sky-p)',
                    borderRadius: '14px',
                    padding: '1rem 1.2rem',
                  }}
                >
                  <div>
                    <strong style={{ color: 'var(--text)', fontSize: '.92rem' }}>{f.title}</strong>
                    <p style={{ color: 'var(--text2)', fontSize: '.85rem', marginTop: '2px' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20pensi%C3%B3n%20%F0%9F%8F%A8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sky"
            >
              Consultar disponibilidad
            </a>
          </div>
          <div className="reveal from-right">
            <div
              style={{
                background: 'linear-gradient(135deg,var(--sky) 0%,var(--sky-d) 100%)',
                borderRadius: '28px',
                padding: '2.5rem',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <h3 style={{ fontFamily: 'Fraunces,serif', fontSize: '1.4rem', fontWeight: 900, marginBottom: '.5rem' }}>
                Hotel para Mascotas
              </h3>
              <p style={{ opacity: 0.9, fontSize: '.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Un hogar lejos del hogar. Tu mascota estará en las mejores manos.
              </p>
              <div
                style={{
                  background: 'rgba(255,255,255,.15)',
                  borderRadius: '14px',
                  padding: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ fontSize: '.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.5px', opacity: 0.7, marginBottom: '.3rem' }}>
                  Incluye
                </div>
                {['Espacio cómodo', 'Agua fresca siempre', 'Tiempo de juego', 'Supervisión veterinaria'].map((item) => (
                  <div key={item} style={{ fontSize: '.88rem', fontWeight: 600, padding: '.25rem 0' }}>
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/524424659302?text=Hola%2C%20quiero%20reservar%20pens%C3%B3n%20para%20mi%20mascota%20%F0%9F%8F%A8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wh"
                style={{ width: '100%' }}
              >
                Reservar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
