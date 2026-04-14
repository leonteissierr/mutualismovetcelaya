'use client';
import { useState } from 'react';

export default function OfferBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="offer-banner" id="offerBanner">
      <div className="offer-banner-inner">
        <span className="offer-badge">🎁 Nuevos pacientes</span>
        <span className="offer-text">
          <strong>Primera consulta + asesoría de alimento GRATIS</strong>
        </span>
        <a
          href="https://wa.me/524424659302?text=Hola%2C%20vi%20la%20oferta%20de%20primera%20consulta%20🐾"
          target="_blank"
          rel="noopener noreferrer"
          className="offer-cta-btn"
        >
          Quiero mi cita →
        </a>
      </div>
      <button
        className="offer-close"
        onClick={() => setVisible(false)}
        aria-label="Cerrar"
      >
        ✕
      </button>
    </div>
  );
}
