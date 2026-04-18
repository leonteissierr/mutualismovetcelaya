'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OfferBanner from '@/components/OfferBanner';

const services = [
  { slug: 'bienestar',       title: 'Bienestar',       desc: 'Checkups preventivos, vacunación, estética y limpiezas dentales.',    img: '/logoservicios/1.png' },
  { slug: 'diagnostico',     title: 'Diagnóstico',     desc: 'Análisis de laboratorio, Rayos X y Ultrasonidos.',                   img: '/logoservicios/2.png' },
  { slug: 'urgencias',       title: 'Urgencias',       desc: 'Atención de emergencia 24h y hospitalización intensiva.',             img: '/logoservicios/3.png' },
  { slug: 'especialidades',  title: 'Especialidades',  desc: 'Ortopedia, Cardiología, Oftalmología y Oncología.',                  img: '/logoservicios/4.png' },
  { slug: 'cirugias',        title: 'Cirugías',        desc: 'Desde esterilizaciones hasta procedimientos complejos.',             img: '/logoservicios/5.png' },
  { slug: 'otros-servicios', title: 'Otros Servicios', desc: 'Certificados de viaje, etología y farmacia.',                       img: '/logoservicios/6.png' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropOpen(false);
  };

  useEffect(() => {
    const links = document.querySelectorAll('#nl a');
    links.forEach((a) => a.addEventListener('click', closeMenu));
    return () => links.forEach((a) => a.removeEventListener('click', closeMenu));
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav>
      <div className="nav-in">
        <a href="/" className="logo">
          <div className="logo-ic">
            <Image src="/perrito-amarillo/perrito-estetoscopio.png" alt="Perrito Mutualismo" width={40} height={40} style={{ objectFit: 'contain' }} />
          </div>
          <div className="logo-tx">
            Veterinaria <span>Mutualismo</span>
            <small>Celaya, Guanajuato</small>
          </div>
        </a>
        <ul className={`nl${menuOpen ? ' open' : ''}`} id="nl">
          <li><a href="/" onClick={closeMenu}>Inicio</a></li>
          <li
            ref={dropRef}
            className={`has-drop${dropOpen ? ' drop-open' : ''}`}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <a
              href="/#servicios"
              onClick={(e) => { e.preventDefault(); setDropOpen((v) => !v); }}
              className="drop-trigger"
            >
              Servicios <span className="drop-arrow">▾</span>
            </a>
            <div className="dropdown">
              <div className="drop-grid">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicios/${s.slug}`}
                    className="drop-item"
                    onClick={() => { setDropOpen(false); closeMenu(); }}
                  >
                    <div className="drop-icon"><Image src={s.img} alt={s.title} width={28} height={28} style={{ objectFit: 'contain' }} /></div>
                    <div>
                      <strong className="drop-title">{s.title}</strong>
                      <p className="drop-desc">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li><a href="/nosotros" onClick={closeMenu}>Nosotros</a></li>
          <li><a href="/#faq" onClick={closeMenu}>FAQ</a></li>
          <li><a href="/#contacto" onClick={closeMenu}>Contacto</a></li>
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
      <OfferBanner />
    </nav>
  );
}
