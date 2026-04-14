export default function Galeria() {
  const items = [
    { emoji: '🐶', label: 'Consulta veterinaria' },
    { emoji: '💉', label: 'Vacunación' },
    { emoji: '✂️', label: 'Estética canina' },
    { emoji: '🐱', label: 'Atención a gatos' },
    { emoji: '🏥', label: 'Instalaciones' },
    { emoji: '🔬', label: 'Cirugía' },
    { emoji: '🐕', label: 'Paciente feliz' },
    { emoji: '🐈', label: 'Gatito sano' },
    { emoji: '💊', label: 'Medicamentos' },
    { emoji: '🩺', label: 'Revisión completa' },
  ];

  return (
    <section id="galeria">
      <div className="wrap">
        <div className="sec-hdr" style={{ textAlign: 'center' }}>
          <span className="sec-lbl">Galería</span>
          <h2 className="sec-h">
            Nuestros pacientes <span>felices</span> 🐾
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            Cada mascota que pasa por nuestras manos es tratada con amor y profesionalismo.
          </p>
        </div>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div
              key={i}
              className={`gallery-item reveal reveal-delay-${(i % 5) + 1}`}
              style={{ background: 'var(--sky-l)', cursor: 'default' }}
            >
              <span style={{ fontSize: '3rem' }}>{item.emoji}</span>
              <div className="gallery-item-label" style={{ opacity: 1 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
