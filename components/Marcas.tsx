export default function Marcas() {
  const brands = [
    {
      name: 'NUPEC',
      desc: 'Nutrición especializada con proteínas de alta calidad para cada raza y etapa de vida.',
      tags: ['🐶 Perros', '🐱 Gatos', '⭐ Premium'],
    },
    {
      name: 'Royal Canin',
      desc: 'Fórmulas científicas adaptadas a la raza, edad y condición de salud específica de tu mascota.',
      tags: ['🧬 Por raza', '👶 Etapas', '🏆 Top marca'],
    },
    {
      name: "Hill's Science Diet",
      desc: 'Respaldado por veterinarios con ingredientes naturales y ciencia nutricional de primer nivel.',
      tags: ['🔬 Científico', '🌿 Natural', '✅ Vet recommended'],
    },
  ];

  return (
    <section id="marcas">
      <div className="wrap">
        <div style={{ textAlign: 'center' }}>
          <span className="sec-lbl">Marcas que manejamos</span>
          <h2 className="sec-h" style={{ marginBottom: '.5rem' }}>
            Alimentos <span>premium</span> recomendados
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '.95rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Solo vendemos marcas con respaldo veterinario comprobado. Te asesoramos sin costo para
            elegir la mejor opción para tu mascota.
          </p>
        </div>
        <div className="brands-bar">
          {brands.map((b, i) => (
            <div key={i} className={`brand-logo-card reveal reveal-delay-${i + 1}`}>
              <div className="brand-card-body">
                <div className="brand-card-name">{b.name}</div>
                <div className="brand-card-desc">{b.desc}</div>
                <div className="brand-card-tags">
                  {b.tags.map((t) => (
                    <span key={t} className="brand-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20quiero%20asesor%C3%ADa%20de%20alimento%20para%20mi%20mascota"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sky"
          >
            🛒 Pedir asesoría de alimento
          </a>
        </div>
      </div>
    </section>
  );
}
