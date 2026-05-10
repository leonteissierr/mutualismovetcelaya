export default function Contacto() {
  return (
    <section id="contacto">
      <div className="wrap">
        <div className="sec-hdr" style={{ textAlign: 'center' }}>
          <span className="sec-lbl">Contáctanos</span>
          <h2 className="sec-h">
            Dos sucursales en <span>Celaya</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            Elige la sucursal más conveniente y visítanos hoy.
          </p>
        </div>
        <div className="branches-grid">
          {/* Matriz */}
          <div className="branch-card reveal from-left">
            <div className="branch-header">
              <div className="branch-badge">Matriz</div>
              <h3>Mutualismo</h3>
            </div>
            <div className="ci-list" style={{ marginTop: '1rem' }}>
              <div className="ci">
                <div className="ci-ic">—</div>
                <div>
                  <h4>Dirección</h4>
                  <p>Mutualismo 605-Local B<br />Residencial Celaya Centro, 38060</p>
                </div>
              </div>
              <div className="ci">
                <div className="ci-ic">—</div>
                <div>
                  <h4>Teléfono</h4>
                  <a href="tel:4616155620">461 615 5620</a>
                </div>
              </div>
              <div className="ci">
                <div className="ci-ic">—</div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/524424659302" target="_blank" rel="noopener noreferrer">
                    +52 442 465 9302
                  </a>
                </div>
              </div>
            </div>
            <div className="sch">
              <h4>Horarios</h4>
              <div className="sr"><span className="day">Lunes – Viernes</span><span className="hrs">9:00 am – 7:00 pm</span></div>
              <div className="sr"><span className="day">Sábado</span><span className="hrs">9:00 am – 6:00 pm</span></div>
              <div className="sr"><span className="day">Emergencias</span><span className="b24">24/7</span></div>
            </div>
            <a
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20en%20Mutualismo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-grn"
              style={{ width: '100%', marginTop: '1rem', fontSize: '.9rem' }}
            >
              Agendar aquí
            </a>
          </div>
          {/* Sucursal */}
          <div className="branch-card reveal from-right">
            <div className="branch-header">
              <div className="branch-badge suc">Sucursal</div>
              <h3>Nuevo Celaya</h3>
            </div>
            <div className="ci-list" style={{ marginTop: '1rem' }}>
              <div className="ci">
                <div className="ci-ic">—</div>
                <div>
                  <h4>Dirección</h4>
                  <p>12 de Octubre S/N<br />Nuevo Celaya, 38027</p>
                </div>
              </div>
              <div className="ci">
                <div className="ci-ic">—</div>
                <div>
                  <h4>Teléfono</h4>
                  <a href="tel:4616146217">461 614 6217</a>
                </div>
              </div>
              <div className="ci">
                <div className="ci-ic">—</div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/524424659302" target="_blank" rel="noopener noreferrer">
                    +52 442 465 9302
                  </a>
                </div>
              </div>
            </div>
            <div className="sch">
              <h4>Horarios</h4>
              <div className="sr"><span className="day">Lunes – Viernes</span><span className="hrs">9:00 am – 7:00 pm</span></div>
              <div className="sr"><span className="day">Sábado</span><span className="hrs">9:00 am – 7:30 pm</span></div>
              <div className="sr"><span className="day">Emergencias</span><span className="b24">24/7</span></div>
              <div className="notice-box">
                <span>Cierra a comer de <strong>3:00–5:00 pm</strong> solo lunes a viernes</span>
              </div>
            </div>
            <a
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20en%20Nuevo%20Celaya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sky"
              style={{ width: '100%', marginTop: '1rem', fontSize: '.9rem' }}
            >
              Agendar aquí
            </a>
          </div>
        </div>
        {/* Maps */}
        <div className="branch-maps">
          <div>
            <div className="map-label">Matriz — Mutualismo</div>
            <a
              href="https://maps.google.com/?q=Mutualismo+605+Local+B,+Celaya,+Guanajuato"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-btn"
            >
              Ver ubicación en Google Maps →
            </a>
          </div>
          <div>
            <div className="map-label">Sucursal — Nuevo Celaya</div>
            <a
              href="https://maps.google.com/?q=12+de+Octubre+S/N,+Nuevo+Celaya,+Celaya,+Guanajuato"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-btn"
            >
              Ver ubicación en Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
