'use client';
import { useState } from 'react';

export default function ChatFloat() {
  const [visible, setVisible] = useState(false);

  // We show it via ScrollEffects via class, but also allow close
  const close = () => {
    const el = document.getElementById('chatFloat');
    if (el) el.classList.remove('show');
  };

  return (
    <div className="chat-float" id="chatFloat">
      <div className="chat-bubble">
        <button className="chat-close-btn" onClick={close}>✕</button>
        <strong>¡Hola! 👋 ¿En qué podemos ayudarte?</strong>
        <div className="chat-actions">
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="chat-action-btn"
          >
            📅 Agendar una cita
          </a>
          <a
            href="https://wa.me/524424659302?text=EMERGENCIA%3A%20necesito%20atenci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="chat-action-btn"
          >
            🚨 Es una emergencia
          </a>
          <a
            href="https://wa.me/524424659302?text=Hola%2C%20quiero%20ver%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="chat-action-btn"
          >
            🛒 Ver productos
          </a>
        </div>
      </div>
    </div>
  );
}
