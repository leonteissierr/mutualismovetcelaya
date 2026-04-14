export default function Emergencias() {
  return (
    <section id="emergencias">
      <div className="emer-inner">
        <div className="emer-badge">🚨 Emergencias Veterinarias 24/7</div>
        <h2>¿Tu mascota necesita atención urgente?</h2>
        <p className="sub">
          No importa si es de día, de noche, fin de semana o día festivo. Estamos disponibles las{' '}
          <strong style={{ color: '#fff' }}>24 horas los 7 días</strong> para atender cualquier
          emergencia.
        </p>
        <div className="emer-btns">
          <a href="tel:4616155620" className="btn btn-red">
            📞 Llamar: 461 615 5620
          </a>
          <a
            href="https://wa.me/524424659302?text=EMERGENCIA%3A%20Necesito%20atenci%C3%B3n%20urgente"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wh"
          >
            🚨 WhatsApp Emergencia
          </a>
        </div>
      </div>
    </section>
  );
}
