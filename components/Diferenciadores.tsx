export default function Diferenciadores() {
  const items = [
    { icon: '🤝', title: 'Atención Personalizada', desc: 'Recordamos a tus pacientes y sus necesidades particulares.' },
    { icon: '💻', title: 'Tecnología Moderna', desc: 'Equipos de diagnóstico actualizados para que nada se pase por alto.' },
    { icon: '📋', title: 'Seguimiento de Pacientes', desc: 'Registramos el historial médico y te recordamos vacunas y revisiones.' },
    { icon: '🚑', title: 'Emergencias Inmediatas', desc: 'Disponibles 24 horas, 7 días a la semana. En los momentos difíciles, ahí estamos.' },
    { icon: '❤️', title: 'Amor Real por los Animales', desc: 'No es solo trabajo — es vocación. Tratamos a cada paciente con ternura.' },
    { icon: '💰', title: 'Precios Transparentes', desc: 'Sin sorpresas. Te explicamos costos antes del tratamiento.' },
  ];

  return (
    <section id="diferenciadores">
      <div className="wrap">
        <div className="sec-hdr" style={{ textAlign: 'center' }}>
          <span className="sec-lbl">¿Por qué elegirnos?</span>
          <h2 className="sec-h">
            Lo que nos hace <span>diferentes</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            No buscamos ser la clínica más grande. Buscamos ser la más confiable.
          </p>
        </div>
        <div className="dgrid">
          {items.map((item, i) => (
            <div key={i} className={`dcard reveal reveal-delay-${i + 1}`}>
              <div className="dic">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
