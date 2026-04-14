export default function Servicios() {
  return (
    <section id="servicios">
      <div className="wrap">
        <div className="sec-hdr reveal">
          <span className="sec-lbl">Nuestros Servicios</span>
          <h2 className="sec-h">
            Todo lo que tu mascota <span>necesita</span>, en un solo lugar
          </h2>
          <p className="sec-sub">
            Servicios veterinarios completos con atención personalizada. ¡Cupos limitados — reserva hoy!
          </p>
        </div>
        <div className="sgrid">
          <div className="scard reveal reveal-delay-1">
            <div className="sic">🩺</div>
            <h3>Consulta Veterinaria</h3>
            <p>Revisión completa, diagnóstico preciso y seguimiento personalizado.</p>
          </div>
          <div className="scard reveal reveal-delay-2">
            <div className="sic">💉</div>
            <h3>Vacunación</h3>
            <p>Esquemas completos para perros y gatos con vacunas de primera calidad.</p>
          </div>
          <div className="scard reveal reveal-delay-3">
            <div className="sic">✂️</div>
            <h3>Estética Canina y Felina</h3>
            <p>Baño, corte, limpieza de oídos, cepillado y retiro de pelaje muerto.</p>
          </div>
          <div className="scard reveal reveal-delay-4">
            <div className="sic">🔬</div>
            <h3>Cirugías</h3>
            <p>Desde esterilizaciones hasta procedimientos complejos con máxima seguridad.</p>
          </div>
          <div className="scard reveal reveal-delay-5">
            <div className="sic">🏥</div>
            <h3>Hospitalización</h3>
            <p>Cuidado intensivo y monitoreo constante hasta la total recuperación.</p>
          </div>
          <div className="scard reveal reveal-delay-5">
            <div className="sic">🚨</div>
            <h3>Emergencias 24/7</h3>
            <p>Disponibles todos los días a cualquier hora. Atención inmediata sin excepciones.</p>
            <div className="tag-urg">🔴 Disponible siempre</div>
          </div>
          <div className="scard reveal reveal-delay-5">
            <div className="sic">🏨</div>
            <h3>Pensión — Hotel para Mascotas</h3>
            <p>
              Tu perro o gato en buenas manos mientras no estás. Cuidado personalizado y atención
              constante las 24 horas. El dueño provee el alimento — nosotros ponemos el cariño y la
              seguridad.
            </p>
            <div className="tag-info">🐶 Perros &nbsp;·&nbsp; 🐱 Gatos &nbsp;·&nbsp; 💰 Precio según tamaño</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sky"
          >
            📲 Agendar Cita — ¡Cupos Limitados!
          </a>
        </div>
      </div>
    </section>
  );
}
