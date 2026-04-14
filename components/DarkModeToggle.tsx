'use client';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDark(true);
    }
  }, []);

  const toggle = () => {
    if (dark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  };

  return (
    <button className="dm-toggle" onClick={toggle} title="Cambiar tema" aria-label="Modo oscuro">
      <span className="dm-icon">{dark ? '☀️' : '🌙'}</span>
      <span className="dm-label">{dark ? 'Claro' : 'Oscuro'}</span>
    </button>
  );
}
