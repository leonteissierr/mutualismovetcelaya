export default function Diferenciadores() {
  const items = [
    { num: '01', title: 'Atención Personalizada',    desc: 'Recordamos a cada paciente y sus necesidades. No eres un número — eres parte de nuestra comunidad.' },
    { num: '02', title: 'Tecnología de Diagnóstico', desc: 'Equipos actualizados de laboratorio, rayos X y ultrasonido para que nada pase desapercibido.' },
    { num: '03', title: 'Seguimiento Continuo',      desc: 'Registramos el historial médico completo y te avisamos sobre vacunas, revisiones y tratamientos.' },
    { num: '04', title: 'Urgencias hasta las 12am',   desc: 'Disponibles todos los días del año hasta la medianoche. Cuando más nos necesitas, ahí estaremos.' },
    { num: '05', title: 'Vocación por los Animales', desc: 'No es solo trabajo — es pasión. Cada paciente recibe el mismo cuidado que daríamos a los nuestros.' },
    { num: '06', title: 'Precios Transparentes',     desc: 'Sin sorpresas en la cuenta. Te explicamos costos y opciones antes de cualquier procedimiento.' },
  ];

  return (
    <section id="diferenciadores">
      <div className="wrap">

        <div className="df-top reveal slide-up">
          <div>
            <span className="sec-lbl">¿Por qué elegirnos?</span>
            <h2 className="df-heading">
              Lo que nos hace<br />
              <em>diferentes</em>
            </h2>
          </div>
          <p className="df-sub">
            No buscamos ser la clínica más grande.<br />
            Buscamos ser la más confiable.
          </p>
        </div>

        <div className="df-list">
          {items.map((item, i) => (
            <div
              key={i}
              className="df-row reveal slide-up"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="df-num">{item.num}</span>
              <h3 className="df-title">{item.title}</h3>
              <p className="df-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
