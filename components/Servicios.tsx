'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { slug: 'bienestar',       title: 'Bienestar',       desc: 'Vacunas, checkups, spa y limpieza dental para mascotas saludables.',        img: '/logoservicios/1.png' },
  { slug: 'diagnostico',     title: 'Diagnóstico',     desc: 'Análisis de laboratorio, Rayos X y Ultrasonidos precisos.',                 img: '/logoservicios/2.png' },
  { slug: 'urgencias',       title: 'Urgencias',       desc: 'Atención 24/7 y hospitalización para esos momentos críticos.',              img: '/logoservicios/3.png' },
  { slug: 'especialidades',  title: 'Especialidades',  desc: 'Ortopedia, Cardiología, Oftalmología y Oncología.',                        img: '/logoservicios/4.png' },
  { slug: 'cirugias',        title: 'Cirugía',         desc: 'Desde esterilizaciones hasta intervenciones de tejidos y huesos.',          img: '/logoservicios/5.png' },
  { slug: 'otros-servicios', title: 'Otros Servicios', desc: 'Certificados de viaje, etología, farmacia y microchip.',                   img: '/logoservicios/6.png' },
];

const VISIBLE = 3;

export default function Servicios() {
  const [idx, setIdx] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const max = services.length - VISIBLE;

  const scrollTo = useCallback((i: number) => {
    if (!viewportRef.current || !cardRef.current) return;
    const step = cardRef.current.offsetWidth + 24; // card + 1.5rem gap
    viewportRef.current.scrollTo({ left: i * step, behavior: 'smooth' });
    setIdx(i);
  }, []);

  const prev = () => scrollTo(Math.max(0, idx - 1));
  const next = () => scrollTo(Math.min(max, idx + 1));

  // Keep idx in sync when the user scrolls manually (touch/mobile)
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onScroll = () => {
      if (!cardRef.current) return;
      const step = cardRef.current.offsetWidth + 24;
      const i = Math.round(el.scrollLeft / step);
      setIdx(Math.min(max, Math.max(0, i)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [max]);

  return (
    <section id="servicios">
      <div className="wrap">
        <div className="sec-hdr reveal">
          <span className="sec-lbl">Nuestros Servicios</span>
          <h2 className="sec-h">
            Todo lo que tu mascota <span>necesita</span>, en un solo lugar
          </h2>
          <p className="sec-sub">
            Servicios veterinarios completos con atención personalizada.
          </p>
        </div>

        <div className="carousel-outer">
          <button
            className="carousel-arrow carousel-prev"
            onClick={prev}
            disabled={idx === 0}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className="carousel-viewport" ref={viewportRef}>
            <div className="carousel-track">
              {services.map((s, i) => (
                <div
                  key={s.slug}
                  className="carousel-card"
                  ref={i === 0 ? cardRef : undefined}
                >
                  <div className="carousel-icon">
                    <Image src={s.img} alt={s.title} width={64} height={64} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                  </div>
                  <h3 className="carousel-title">{s.title}</h3>
                  <p className="carousel-desc">{s.desc}</p>
                  <Link href={`/servicios/${s.slug}`} className="carousel-link">
                    Ver más →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-arrow carousel-next"
            onClick={next}
            disabled={idx === max}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === idx ? ' active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Ir a ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
