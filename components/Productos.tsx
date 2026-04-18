import Image from 'next/image';

export default function Productos() {
  return (
    <section id="productos">
      <div className="wrap">
        <div className="pgrid">
          <div>
            <span className="sec-lbl">Tienda Veterinaria</span>
            <h2 className="sec-h">
              Alimentos y productos
              <br />
              <span>recomendados por veterinarios</span>
            </h2>
            <p className="sec-sub" style={{ marginBottom: '1.8rem' }}>
              No cualquier alimento es bueno para tu mascota. Te asesoramos y vendemos solo lo mejor.
            </p>
            <div className="plist">
              <div className="pitem reveal reveal-delay-1">
                <div>
                  <h4>Alimento Premium para Perros</h4>
                  <p>Marcas de primera calidad para cada etapa de vida y raza.</p>
                  <div className="vet-badge">Recomendado por veterinarios</div>
                </div>
              </div>
              <div className="pitem reveal reveal-delay-2">
                <div>
                  <h4>Alimento Premium para Gatos</h4>
                  <p>Opciones húmedas y secas adaptadas a la edad de tu gato.</p>
                  <div className="vet-badge">Recomendado por veterinarios</div>
                </div>
              </div>
              <div className="pitem reveal reveal-delay-3">
                <div>
                  <h4>Higiene y Cuidado</h4>
                  <p>Shampoos, desparasitantes, antipulgas y suplementos vitamínicos.</p>
                </div>
              </div>
              <div className="pitem reveal reveal-delay-4">
                <div>
                  <h4>Accesorios y Juguetes</h4>
                  <p>Correas, collares, camas, comederos y más.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pcta">
            <Image src="/perrito-amarillo/perrito-repartidor.png" alt="Repartidor Mutualismo" width={180} height={180} style={{ objectFit: 'contain', marginBottom: '.9rem' }} />
            <div className="stock-b">Stock disponible</div>
            <h3>¡Compra con confianza!</h3>
            <p>
              Nuestros veterinarios te asesoran gratis para elegir el producto ideal para tu mascota.
            </p>
            <a
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20comprar%20alimento"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-grn"
              style={{ width: '100%' }}
            >
              Comprar por WhatsApp
            </a>
            <p style={{ fontSize: '.78rem', color: 'var(--gray)', marginTop: '.9rem' }}>
              Enviamos en Celaya · Efectivo y transferencia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
