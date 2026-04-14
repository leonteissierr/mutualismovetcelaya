'use client';
import { useState, useEffect } from 'react';

type PetType = 'perro' | 'gato';
type DogSize = 'small' | 'medium' | 'large';
type AgeUnit = 'years' | 'months';

interface CalcResult {
  humanAge: number;
  stage: string;
  stageIcon: string;
  detail: string;
  nextCheckup: string;
  barPct: number;
}

function calcDog(ageYears: number, size: DogSize): CalcResult {
  let humanAge: number;
  const maxLife = size === 'small' ? 18 : size === 'medium' ? 14 : 11;

  if (ageYears <= 1) humanAge = Math.round(ageYears * 15);
  else if (ageYears <= 2) humanAge = Math.round(15 + (ageYears - 1) * 9);
  else humanAge = Math.round(24 + (ageYears - 2) * (size === 'small' ? 4 : size === 'medium' ? 5 : 7));

  const barPct = Math.min(100, Math.round((ageYears / maxLife) * 100));
  let stage: string, stageIcon: string, detail: string, nextCheckup: string;

  if (humanAge < 15) { stage = 'Cachorro 🍼'; stageIcon = '🍼'; detail = 'Etapa de máximo crecimiento. Necesita vacunas iniciales, desparasitación y socialización. ¡Visítanos pronto!'; }
  else if (humanAge < 30) { stage = 'Joven'; stageIcon = '⚡'; detail = 'Lleno de energía. Mantén al día sus vacunas anuales y desparasitaciones cada 3 meses.'; }
  else if (humanAge < 50) { stage = 'Adulto'; stageIcon = '💪'; detail = 'Etapa estable. Revisión anual recomendada para mantenerlo en óptima condición.'; }
  else if (humanAge < 65) { stage = 'Maduro'; stageIcon = '🎯'; detail = 'Conviene revisarlo cada 6 meses. Vigila articulaciones, peso y salud dental.'; }
  else { stage = 'Senior'; stageIcon = '👴'; detail = 'Merece cuidados especiales. Revisión cada 3–6 meses para detectar cambios a tiempo.'; }

  if (humanAge < 30) nextCheckup = 'Cada 3 meses';
  else if (humanAge < 50) nextCheckup = 'Cada año';
  else if (humanAge < 65) nextCheckup = 'Cada 6 meses';
  else nextCheckup = 'Cada 3 meses';

  return { humanAge, stage, stageIcon, detail, nextCheckup, barPct };
}

function calcCat(ageYears: number): CalcResult {
  let humanAge: number;
  if (ageYears <= 1) humanAge = Math.round(ageYears * 15);
  else if (ageYears <= 2) humanAge = Math.round(15 + (ageYears - 1) * 9);
  else humanAge = Math.round(24 + (ageYears - 2) * 4);

  const barPct = Math.min(100, Math.round((ageYears / 18) * 100));
  let stage: string, stageIcon: string, detail: string, nextCheckup: string;

  if (humanAge < 15) { stage = 'Gatito 🍼'; stageIcon = '🍼'; detail = 'Crecimiento activo. Vacunas esenciales y desparasitación. Primera visita al veterinario.'; }
  else if (humanAge < 30) { stage = 'Joven'; stageIcon = '⚡'; detail = 'Energético e independiente. Esterilización recomendada si aún no se ha realizado.'; }
  else if (humanAge < 50) { stage = 'Adulto'; stageIcon = '💪'; detail = 'Periodo estable. Revisión anual y vacunas al día es todo lo que necesita.'; }
  else if (humanAge < 65) { stage = 'Maduro'; stageIcon = '🎯'; detail = 'Revisión cada 6 meses. Presta atención a riñones, articulaciones y peso.'; }
  else { stage = 'Senior'; stageIcon = '👴'; detail = 'Necesita atención especial. Visitas frecuentes para detectar cambios a tiempo.'; }

  if (humanAge < 30) nextCheckup = 'Cada 3 meses';
  else if (humanAge < 50) nextCheckup = 'Cada año';
  else if (humanAge < 65) nextCheckup = 'Cada 6 meses';
  else nextCheckup = 'Cada 3 meses';

  return { humanAge, stage, stageIcon, detail, nextCheckup, barPct };
}

export default function Calculadora() {
  const [petType, setPetType] = useState<PetType>('perro');
  const [dogSize, setDogSize] = useState<DogSize>('medium');
  const [petAge, setPetAge] = useState('');
  const [ageUnit, setAgeUnit] = useState<AgeUnit>('years');
  const [result, setResult] = useState<CalcResult | null>(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const raw = parseFloat(petAge);
    if (isNaN(raw) || raw < 0) { setResult(null); return; }
    const ageYears = ageUnit === 'months' ? raw / 12 : raw;
    const r = petType === 'perro' ? calcDog(ageYears, dogSize) : calcCat(ageYears);
    setResult(r);
    setBarWidth(0);
    setTimeout(() => setBarWidth(r.barPct), 100);
  }, [petType, dogSize, petAge, ageUnit]);

  return (
    <section id="calculadora">
      <div className="calc-wrap">
        <div className="sec-hdr reveal" style={{ textAlign: 'center' }}>
          <span className="sec-lbl">Herramienta gratuita</span>
          <h2 className="sec-h">
            ¿Cuántos años tiene tu mascota
            <br />
            en años <span>humanos</span>? 🐾
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>
            Descubre la etapa de vida de tu mascota y qué cuidados necesita ahora.
          </p>
        </div>
        <div className="calc-grid">
          <div className="calc-form reveal from-left">
            <div className="calc-field">
              <label>Tipo de mascota</label>
              <div className="calc-type-btns">
                <button
                  className={`calc-type-btn${petType === 'perro' ? ' active' : ''}`}
                  onClick={() => setPetType('perro')}
                >
                  🐶 Perro
                </button>
                <button
                  className={`calc-type-btn${petType === 'gato' ? ' active' : ''}`}
                  onClick={() => setPetType('gato')}
                >
                  🐱 Gato
                </button>
              </div>
            </div>
            {petType === 'perro' && (
              <div className="calc-field">
                <label>Tamaño del perro</label>
                <select value={dogSize} onChange={(e) => setDogSize(e.target.value as DogSize)}>
                  <option value="small">Pequeño (menos de 10 kg)</option>
                  <option value="medium">Mediano (10–25 kg)</option>
                  <option value="large">Grande (más de 25 kg)</option>
                </select>
              </div>
            )}
            <div className="calc-field">
              <label>Edad de tu mascota</label>
              <input
                type="number"
                min="0"
                max="30"
                placeholder="Ej. 3"
                value={petAge}
                onChange={(e) => setPetAge(e.target.value)}
                style={{ fontSize: '1.2rem', fontWeight: 700 }}
              />
            </div>
            <div className="calc-field">
              <label>Unidad de edad</label>
              <select value={ageUnit} onChange={(e) => setAgeUnit(e.target.value as AgeUnit)}>
                <option value="years">Años</option>
                <option value="months">Meses</option>
              </select>
            </div>
          </div>
          <div className="calc-result reveal from-right">
            {result ? (
              <>
                <div className="calc-life-stage">{result.stageIcon} {result.stage}</div>
                <div className="calc-age-human">{result.humanAge}</div>
                <div className="calc-age-label">años humanos equivalentes</div>
                <div className="age-bar-wrap">
                  <div className="age-bar-fill" style={{ width: `${barWidth}%` }} />
                </div>
                <div className="calc-detail">{result.detail}</div>
                <div style={{ marginTop: '.8rem', background: 'var(--sky-p)', borderRadius: '10px', padding: '.5rem .9rem', fontSize: '.78rem', fontWeight: 700, color: 'var(--sky-d)' }}>
                  📅 Próxima revisión: {result.nextCheckup}
                </div>
                <div className="calc-cta">
                  ¿Necesitas cita? <a href="#agenda">Agéndala aquí</a>
                </div>
              </>
            ) : (
              <div className="calc-result-empty">
                <span className="big-paw">🐾</span>
                <strong style={{ display: 'block', marginBottom: '.4rem', color: 'var(--text)' }}>
                  Ingresa la edad de tu mascota
                </strong>
                Descubre en qué etapa de su vida está y qué cuidados necesita ahora.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
