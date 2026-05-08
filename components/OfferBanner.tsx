'use client';
import { useState } from 'react';

export default function OfferBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #1565C0, #1E7EC0, #1976D2)',
      color: '#fff',
      width: 'calc(100% + 3rem)',
      margin: '0 -1.5rem',
      padding: '.6rem 2.5rem .6rem 1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      <span style={{ fontSize: '.875rem', fontWeight: 500, textAlign: 'center' }}>
        <strong>Bienvenido a Veterinaria Mutualismo</strong> — En tu primera consulta recibe{' '}
        <strong>asesoría gratis de alimento</strong> y conoce nuestro cuidado médico integral.
      </span>
      <a
        href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20mi%20primera%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#25D366',
          color: '#fff',
          fontWeight: 700,
          fontSize: '.8rem',
          padding: '.35rem .9rem',
          borderRadius: 20,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Agendar por WhatsApp
      </a>
      <button
        onClick={() => setVisible(false)}
        aria-label="Cerrar"
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          color: '#fff',
          width: 24,
          height: 24,
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        ✕
      </button>
    </div>
  );
}
