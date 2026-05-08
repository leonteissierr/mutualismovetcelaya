const reviews = [
  { text: '"Llevé a mi perrita Luna con una infección severa y me atendieron de inmediato. Luna se recuperó perfectamente."', name: 'María G.', pet: 'Mamá de Luna', initial: 'M' },
  { text: '"Excelente atención. Llevé a mi gato Micio para su castración y todo salió perfecto. Me explicaron cada paso."', name: 'Carlos R.', pet: 'Papá de Micio', initial: 'C' },
  { text: '"Mi perro Rocky tuvo una emergencia a las 2am. Contestaron y lo atendieron tan rápido. Lo salvaron. Gracias."', name: 'Patricia M.', pet: 'Mamá de Rocky', initial: 'P' },
  { text: '"El servicio de estética es increíble. Mi golden siempre sale guapísimo. Se nota que los tratan con mucho cariño."', name: 'Andrea L.', pet: 'Mamá de Canelo', initial: 'A' },
  { text: '"El ambiente es tranquilo y los veterinarios explican todo con paciencia. Mi perro Pablito ya tiene historial aquí."', name: 'Roberto T.', pet: 'Papá de Pablito', initial: 'R' },
  { text: '"Compré el alimento recomendado y la diferencia en mi gata Sol fue notoria. Pelo más brillante, más energía."', name: 'Laura V.', pet: 'Mamá de Sol', initial: 'L' },
];

export default function Testimonios() {
  return (
    <section id="testimonios">
      <div className="wrap">
        <div className="sec-hdr" style={{ textAlign: 'center' }}>
          <span className="sec-lbl">Lo que dicen nuestros clientes</span>
          <h2 className="sec-h">
            Familias que <span>confían en nosotros</span>
          </h2>
        </div>
        <div className="tgrid">
          {reviews.map((r, i) => (
            <div key={i} className={`tcard reveal reveal-delay-${(i % 5) + 1}`}>
              <div className="stars">★★★★★</div>
              <p>{r.text}</p>
              <div className="rev">
                <div className="rev-av">{r.initial}</div>
                <div>
                  <div className="rev-nm">{r.name}</div>
                  <div className="rev-pt">{r.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
