'use client';

const close = () => {
  const ov = document.getElementById('exitOverlay');
  if (ov) ov.style.display = 'none';
  try { sessionStorage.setItem('exitSeen', '1'); } catch (e) {}
};

export default function ExitPopup() {
  return (
    <div
      id="exitOverlay"
      style={{ display: 'none', position: 'fixed', inset: 0, background: 'rgba(0,0,0,.65)', zIndex: 9998, alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div style={{ background: 'var(--card-bg)', borderRadius: '28px', padding: '2.5rem 2rem 2rem', maxWidth: '480px', width: '100%', position: 'relative', boxShadow: '0 24px 64px rgba(0,0,0,.3)', textAlign: 'center' }}>
        <button
          onClick={close}
          style={{ position: 'absolute', top: '.8rem', right: '.8rem', width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sky)', border: 'none', cursor: 'pointer', color: '#fff', fontSize: '1rem', fontWeight: 900, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 10px rgba(56,168,224,.4)' }}
        >
          ✕
        </button>
        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '.8rem' }}>🐾</span>
        <h3 style={{ fontFamily: 'Fraunces,serif', fontSize: '1.6rem', fontWeight: 900, color: 'var(--text)', marginBottom: '.5rem', lineHeight: 1.2 }}>
          ¡Espera un momento!
        </h3>
        <p style={{ fontSize: '.95rem', color: 'var(--text2)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Antes de irte, tenemos una oferta especial para la primera visita de tu mascota.
        </p>
        <div style={{ background: 'linear-gradient(135deg,var(--sky-p),var(--sky-l))', border: '2px solid var(--sky-l)', borderRadius: '16px', padding: '1rem 1.2rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.8px', color: 'var(--sky-d)', marginBottom: '.3rem' }}>
            🎁 Exclusivo para nuevos pacientes
          </div>
          <div style={{ fontFamily: 'Fraunces,serif', fontSize: '1.1rem', fontWeight: 900, color: 'var(--text)' }}>
            Primera consulta + asesoría de alimento gratis
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20vi%20la%20oferta%20de%20primera%20consulta%20y%20quiero%20agendar"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            style={{ background: 'var(--green)', color: '#fff', padding: '.9rem 1.5rem', borderRadius: '25px', fontFamily: 'DM Sans,sans-serif', fontWeight: 800, fontSize: '.97rem', textDecoration: 'none', display: 'block', boxShadow: '0 6px 20px rgba(39,174,96,.35)' }}
          >
            📲 Quiero mi cita ahora
          </a>
          <button
            onClick={close}
            style={{ background: 'none', border: 'none', color: 'var(--text2)', fontSize: '.83rem', cursor: 'pointer', fontFamily: 'DM Sans,sans-serif', padding: '.4rem' }}
          >
            No gracias, lo haré después
          </button>
        </div>
      </div>
    </div>
  );
}
