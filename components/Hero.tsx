'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const paws: { x: number; y: number; size: number; angle: number; speed: number; opacity: number }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function init() {
      if (!canvas) return;
      resize();
      for (let i = 0; i < 18; i++) {
        paws.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 10 + Math.random() * 18,
          angle: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 0.6,
          opacity: 0.15 + Math.random() * 0.35,
        });
      }
    }

    function drawPaw(x: number, y: number, s: number, a: number) {
      if (!ctx) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(a);
      ctx.beginPath();
      ctx.ellipse(0, 0, s * 0.5, s * 0.65, 0, 0, Math.PI * 2);
      ctx.fill();
      [[-s * 0.55, -s * 0.7], [s * 0.55, -s * 0.7], [-s * 0.85, -s * 0.35], [s * 0.85, -s * 0.35]].forEach(
        ([px, py]) => {
          ctx.beginPath();
          ctx.ellipse(px, py, s * 0.28, s * 0.25, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      );
      ctx.restore();
    }

    function anim() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(56,168,224,1)';
      paws.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        drawPaw(p.x, p.y, p.size, p.angle);
        p.y += p.speed;
        if (p.y > canvas.height + 30) {
          p.y = -30;
          p.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(anim);
    }

    const timer = setTimeout(() => {
      init();
      anim();
    }, 150);

    window.addEventListener('resize', resize);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero">
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.18, zIndex: 0 }}
      />
      <div className="hero-in">
        <div>
          <h1>
            Cuidamos a tu mascota
            <br />
            como <span className="italic-accent">familia</span> 🐾
          </h1>
          <p className="hsub">
            Atención veterinaria profesional con el calor y dedicación que tu compañero merece.
            Más de 20 años cuidando mascotas en Celaya.
          </p>
          <div className="hbtns">
            <a
              href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-grn"
            >
              📲 Agendar por WhatsApp
            </a>
            <a href="#servicios" className="btn btn-out">
              Ver Servicios
            </a>
          </div>
        </div>
        <div className="hero-img">
          <div className="hcircle">
            <Image src="/perrito-amarillo/perrito-original.png" alt="Mascota Mutualismo" width={320} height={320} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
