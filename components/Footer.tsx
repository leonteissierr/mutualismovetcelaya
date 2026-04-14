export default function Footer() {
  return (
    <footer>
      <div className="fin">
        <div className="fb">
          <h3>🐾 Veterinaria Mutualismo</h3>
          <p>
            Tu aliado de confianza para el bienestar de tu mascota en Celaya, Guanajuato.
            Atención profesional y trato familiar desde hace más de 20 años.
          </p>
          <div className="soc">
            <a href="#" className="sb">📘</a>
            <a href="#" className="sb">📸</a>
            <a href="https://wa.me/524424659302" target="_blank" rel="noopener noreferrer" className="sb">💬</a>
            <a href="tel:4616155620" className="sb">📞</a>
          </div>
        </div>
        <div className="fc">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#servicios">Consulta Veterinaria</a></li>
            <li><a href="#servicios">Vacunación</a></li>
            <li><a href="#servicios">Estética</a></li>
            <li><a href="#servicios">Cirugías</a></li>
            <li><a href="#servicios">Hospitalización</a></li>
            <li><a href="#pension">🏨 Pensión / Hotel</a></li>
            <li><a href="#emergencias" style={{ color: 'var(--red)', fontWeight: 800 }}>🚨 Emergencias 24/7</a></li>
            <li><a href="#productos">Alimentos y Productos</a></li>
          </ul>
        </div>
        <div className="fc">
          <h4>Sucursales</h4>
          <ul>
            <li><a href="#contacto" style={{ color: 'var(--sky)', fontWeight: 800 }}>🏥 Matriz — Mutualismo</a></li>
            <li><a href="tel:4616155620">📞 461 615 5620</a></li>
            <li><a href="#contacto" style={{ color: 'var(--green)', fontWeight: 800 }}>🌿 Sucursal — Nuevo Celaya</a></li>
            <li><a href="tel:4616146217">📞 461 614 6217</a></li>
            <li><a href="https://wa.me/524424659302" target="_blank" rel="noopener noreferrer">💬 +52 442 465 9302</a></li>
            <li><a href="tel:4616155620" style={{ color: 'var(--red)', fontWeight: 800 }}>🚨 Emergencias 24/7</a></li>
          </ul>
        </div>
      </div>
      <div className="fbot">
        <span>© 2025 Veterinaria Mutualismo · Celaya, Guanajuato, México</span>
        <span>Hecho con ❤️ para las mascotas de Celaya</span>
      </div>
    </footer>
  );
}
