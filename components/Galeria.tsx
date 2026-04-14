import Image from 'next/image';

const items = [
  { src: '/pacientes/paciente-1.jpeg', label: 'Bulldog Francés' },
  { src: '/pacientes/paciente-2.jpeg', label: 'Estética canina' },
  { src: '/pacientes/paciente-3.jpeg', label: 'Poodle feliz' },
  { src: '/pacientes/paciente-4.jpeg', label: 'Cachorrito Shih Tzu' },
  { src: '/pacientes/paciente-5.jpeg', label: 'Cocker Spaniel' },
  { src: '/pacientes/paciente-6.jpeg', label: 'Schnauzer' },
  { src: '/pacientes/paciente-7.jpeg', label: 'Yorkshire Terrier' },
  { src: '/pacientes/paciente-8.png', label: 'Paciente feliz' },
];

export default function Galeria() {
  return (
    <section id="galeria">
      <div className="wrap">
        <div className="sec-hdr" style={{ textAlign: 'center' }}>
          <span className="sec-lbl">Galería</span>
          <h2 className="sec-h">
            Nuestros pacientes <span>felices</span> 🐾
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            Cada mascota que pasa por nuestras manos es tratada con amor y profesionalismo.
          </p>
        </div>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div
              key={i}
              className={`gallery-item reveal reveal-delay-${(i % 5) + 1}`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 480px) 100vw, (max-width: 920px) 50vw, 20vw"
              />
              <div className="gallery-item-label" style={{ opacity: 1 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
