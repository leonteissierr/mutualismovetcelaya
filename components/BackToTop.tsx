'use client';

export default function BackToTop() {
  return (
    <button
      className="btt"
      id="bttBtn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Volver arriba"
    >
      ↑
    </button>
  );
}
