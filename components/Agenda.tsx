'use client';
import { useState, useEffect } from 'react';

interface AgData {
  type: string;
  service: string;
  branch: string;
  time: string;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T12:00:00');
  const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  return `${days[d.getDay()]} ${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
}

function getTomorrow(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

export default function Agenda() {
  const [step, setStep] = useState(1);
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');
  const [owner, setOwner] = useState('');
  const [date, setDate] = useState('');
  const [agData, setAgData] = useState<AgData>({
    type: '🐶 Perro',
    service: '',
    branch: '🏥 Mutualismo (Matriz)',
    time: '🌅 Mañana (9am-12pm)',
  });
  const tomorrow = getTomorrow();

  useEffect(() => {
    setDate(tomorrow);
  }, [tomorrow]);

  const selectOpt = (group: keyof AgData, value: string) => {
    setAgData((prev) => ({ ...prev, [group]: value }));
  };

  const buildMsg = () => {
    const petInfo = petName + (breed ? ` (${breed})` : '') + ' — ' + agData.type;
    const branchClean = agData.branch.replace('🏥 ', '').replace('🌿 ', '');
    const timeClean = agData.time.split('\n')[0].trim();
    const dateStr = date ? formatDate(date) : '___';
    return (
      'Hola Veterinaria Mutualismo 🐾\n' +
      'Quiero agendar una cita:\n\n' +
      `📋 Servicio: ${agData.service || '___'}\n` +
      `🐾 Mascota: ${petInfo}\n` +
      `📍 Sucursal: ${branchClean}\n` +
      `📅 Fecha preferida: ${dateStr}\n` +
      `🕐 Horario: ${timeClean}\n` +
      `👤 Mi nombre: ${owner || '___'}\n\n` +
      '¿Tienen disponibilidad? ¡Gracias!'
    );
  };

  const goNext = (from: number) => {
    if (from === 1 && !petName.trim()) { alert('Por favor ingresa el nombre de tu mascota 🐾'); return; }
    if (from === 2 && !agData.service) { alert('Por favor selecciona un servicio 🩺'); return; }
    if (from === 3) {
      if (!owner.trim()) { alert('Por favor ingresa tu nombre 👤'); return; }
      if (!date) { alert('Por favor selecciona una fecha 📅'); return; }
    }
    setStep(from + 1);
  };

  const sendWA = () => {
    if (!petName.trim() || !owner.trim() || !date || !agData.service) {
      alert('Por favor completa todos los campos requeridos.');
      return false;
    }
    const url = 'https://wa.me/524424659302?text=' + encodeURIComponent(buildMsg());
    window.open(url, '_blank');
    return false;
  };

  const OptBtn = ({ group, value }: { group: keyof AgData; value: string }) => (
    <button
      className={`ag-opt${agData[group] === value ? ' selected' : ''}`}
      onClick={() => selectOpt(group, value)}
    >
      {value}
    </button>
  );

  return (
    <section id="agenda">
      <div className="agenda-wrap">
        <div className="sec-hdr reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="sec-lbl">Agenda fácil</span>
          <h2 className="sec-h">
            Reserva tu cita en <span>3 pasos</span> por WhatsApp
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            Completa el formulario y te enviaremos el mensaje listo para WhatsApp.
          </p>
        </div>
        <div className="agenda-card">
          {/* Steps indicator */}
          <div className="agenda-steps">
            <div className={`step-dot${step > 1 ? ' done' : step === 1 ? ' active' : ''}`}>
              {step > 1 ? '✓' : '1'}
            </div>
            <div className={`step-line${step > 1 ? ' done' : ''}`} />
            <div className={`step-dot${step > 2 ? ' done' : step === 2 ? ' active' : ''}`}>
              {step > 2 ? '✓' : '2'}
            </div>
            <div className={`step-line${step > 2 ? ' done' : ''}`} />
            <div className={`step-dot${step === 3 ? ' active' : ''}`}>3</div>
          </div>

          {/* Step 1: Pet info */}
          {step === 1 && (
            <div className="agenda-step active">
              <h3>Tu mascota</h3>
              <p className="step-sub">Cuéntanos sobre tu compañero.</p>
              <div className="ag-field">
                <label>Tipo de mascota *</label>
                <div className="ag-options">
                  <OptBtn group="type" value="🐶 Perro" />
                  <OptBtn group="type" value="🐱 Gato" />
                </div>
              </div>
              <div className="ag-field">
                <label>Nombre de la mascota *</label>
                <input
                  type="text"
                  placeholder="Ej. Luna, Rocky, Micio..."
                  maxLength={40}
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                />
              </div>
              <div className="ag-field">
                <label>Raza (opcional)</label>
                <input
                  type="text"
                  placeholder="Ej. Golden Retriever..."
                  maxLength={40}
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                />
              </div>
              <div className="agenda-nav">
                <span />
                <button className="btn btn-sky" onClick={() => goNext(1)}>
                  Continuar →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Service & branch */}
          {step === 2 && (
            <div className="agenda-step active">
              <h3>Servicio y sucursal</h3>
              <p className="step-sub">¿Qué necesita tu mascota?</p>
              <div className="ag-field">
                <label>Servicio *</label>
                <div className="ag-options">
                  {['🩺 Consulta', '💉 Vacunación', '✂️ Estética', '🔬 Cirugía', '🏥 Hospitalización', '🛒 Compra producto'].map((s) => (
                    <OptBtn key={s} group="service" value={s} />
                  ))}
                </div>
              </div>
              <div className="ag-field">
                <label>Sucursal</label>
                <div className="ag-options">
                  <OptBtn group="branch" value="🏥 Mutualismo (Matriz)" />
                  <OptBtn group="branch" value="🌿 Nuevo Celaya (Sucursal)" />
                </div>
              </div>
              <div className="agenda-nav">
                <button className="btn-back" onClick={() => setStep(1)}>← Atrás</button>
                <button className="btn btn-sky" onClick={() => goNext(2)}>Continuar →</button>
              </div>
            </div>
          )}

          {/* Step 3: Date & confirm */}
          {step === 3 && (
            <div className="agenda-step active">
              <h3>Fecha y confirmación</h3>
              <p className="step-sub">Elige cuándo quieres venir.</p>
              <div className="ag-field">
                <label>Horario preferido</label>
                <div className="ag-options cols3">
                  {['🌅 Mañana (9am-12pm)', '☀️ Mediodía (12-3pm)', '🌆 Tarde (3-7pm)'].map((t) => (
                    <OptBtn key={t} group="time" value={t} />
                  ))}
                </div>
              </div>
              <div className="ag-field">
                <label>Fecha preferida *</label>
                <input type="date" min={tomorrow} value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="ag-field">
                <label>Tu nombre *</label>
                <input
                  type="text"
                  placeholder="Ej. María García..."
                  maxLength={50}
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                />
              </div>
              <div className="wa-preview-label">Vista previa del mensaje:</div>
              <div className="wa-preview">{buildMsg()}</div>
              <div className="agenda-nav">
                <button className="btn-back" onClick={() => setStep(2)}>← Atrás</button>
                <button className="btn btn-grn" onClick={sendWA}>
                  📲 Enviar por WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
