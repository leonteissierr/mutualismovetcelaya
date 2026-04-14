'use client';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const links = document.querySelectorAll('#nl a');
    links.forEach((a) => a.addEventListener('click', closeMenu));
    return () => links.forEach((a) => a.removeEventListener('click', closeMenu));
  }, []);

  return (
    <nav>
      <div className="nav-in">
        <a href="#hero" className="logo">
          <div className="logo-ic">🐾</div>
          <div className="logo-tx">
            Veterinaria <span>Mutualismo</span>
            <small>Celaya, Guanajuato</small>
          </div>
        </a>
        <ul className={`nl${menuOpen ? ' open' : ''}`} id="nl">
          <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
          <li><a href="#galeria" onClick={closeMenu}>Galería</a></li>
          <li><a href="#pension" onClick={closeMenu}>Pensión</a></li>
          <li><a href="#agenda" onClick={closeMenu}>Agenda</a></li>
          <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
          <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
          <li>
            <a
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="nc"
              onClick={closeMenu}
            >
              📲 Agendar
            </a>
          </li>
        </ul>
        <button
          className="hbg"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
