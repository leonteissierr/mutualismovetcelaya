'use client';
import { useState } from 'react';

const faqs = [
  { cat: 'Servicios', q: '¿Necesito cita previa para una consulta?', a: 'No, solo acude a la clínica. Siempre habrá alguien que te pueda atender de forma inmediata.' },
  { cat: 'Servicios', q: '¿Atienden todas las razas y tamaños?', a: '¡Sí! Atendemos todas las razas y tamaños, desde los más pequeños hasta los más grandes.' },
  { cat: 'Estética', q: '¿Qué incluye el servicio de estética?', a: 'Incluye baño, corte personalizado, limpieza de oídos, cepillado y retiro de pelaje muerto.' },
  { cat: 'Estética', q: '¿Cuánto tiempo tarda el servicio de estética?', a: 'Aproximadamente entre 2 y 4 horas, dependiendo de la raza y tamaño de tu mascota.' },
  { cat: 'Vacunas', q: '¿A qué edad debe vacunarse mi mascota por primera vez?', a: 'Recomendamos comenzar el esquema de vacunación a partir del mes y medio de edad.' },
  { cat: 'Salud', q: '¿Con qué frecuencia debo llevar a mi mascota a consulta?', a: 'Recomendamos una visita cada 2 meses para dar seguimiento adecuado a la salud de tu mascota.' },
  { cat: 'Salud', q: '¿Realizan desparasitaciones?', a: 'Sí, realizamos desparasitaciones internas y externas con los productos más efectivos y seguros.' },
  { cat: 'Emergencias', q: '¿Cómo funciona el servicio de emergencias 24/7?', a: 'En caso de emergencia, contáctanos por teléfono o WhatsApp y te atenderemos de inmediato, sin importar el día u hora.' },
  { cat: 'Clínica', q: '¿Cuántas sucursales tienen?', a: 'Contamos con 2 sucursales en Celaya: Mutualismo 605 (Matriz) y 12 de Octubre S/N, Nuevo Celaya.' },
  { cat: 'Clínica', q: '¿Aceptan pagos con tarjeta?', a: 'Sí, aceptamos pagos en efectivo y con tarjeta para tu comodidad.' },
  { cat: 'Clínica', q: '¿Puedo quedarme con mi mascota durante la consulta?', a: 'Sí, puedes acompañar a tu mascota. Tu presencia la ayuda a sentirse más tranquila.' },
  { cat: 'Productos', q: '¿Cómo sé qué alimento es el correcto para mi mascota?', a: 'Depende de la raza, edad y condición de tu mascota. En la clínica te asesoramos de forma personalizada y gratuita.' },
  { cat: 'Productos', q: '¿Hacen envíos a domicilio?', a: 'Sí, realizamos envíos a domicilio dentro de Celaya. Contáctanos por WhatsApp para coordinar tu pedido.' },
  { cat: 'Pensión', q: '¿Tienen servicio de pensión para mascotas?', a: 'Sí, contamos con servicio de pensión (hotel para mascotas) para perros y gatos. El precio varía según el tamaño de tu mascota. El dueño deberá proveer el alimento de su mascota.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-hdr" style={{ textAlign: 'center' }}>
          <span className="sec-lbl">Preguntas frecuentes</span>
          <h2 className="sec-h">
            Todo lo que necesitas <span>saber</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            Resolvemos tus dudas más comunes. ¿No encuentras tu pregunta? Escríbenos.
          </p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <div className="faq-q" onClick={() => toggle(i)}>
                <div>
                  <div className="faq-cat">{faq.cat}</div>
                  {faq.q}
                </div>
                <div className="faq-arrow">▼</div>
              </div>
              <div className="faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
