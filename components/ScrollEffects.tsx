'use client';
import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    // Scroll bar & back-to-top
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      const bar = document.getElementById('scrollBar');
      if (bar) bar.style.width = pct + '%';
      const btt = document.getElementById('bttBtn');
      if (btt) {
        if (window.scrollY > 400) btt.classList.add('show');
        else btt.classList.remove('show');
      }
    };
    window.addEventListener('scroll', onScroll);

    // Reveal on scroll
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

    // Exit popup
    let exitShown = false;
    const showExit = () => {
      if (exitShown || sessionStorage.getItem('exitSeen')) return;
      const ov = document.getElementById('exitOverlay');
      if (ov) { ov.style.display = 'flex'; exitShown = true; }
    };
    const onMouseleave = (e: MouseEvent) => { if (e.clientY < 5) showExit(); };
    document.addEventListener('mouseleave', onMouseleave);

    let mt: ReturnType<typeof setTimeout>;
    const resetTimer = () => {
      clearTimeout(mt);
      mt = setTimeout(() => { if (window.innerWidth <= 768) showExit(); }, 40000);
    };
    ['touchstart', 'scroll', 'click'].forEach((ev) =>
      document.addEventListener(ev, resetTimer, { passive: true })
    );
    resetTimer();

    // Chat float - show after 3s
    const chatTimer = setTimeout(() => {
      const chat = document.getElementById('chatFloat');
      if (chat) chat.classList.add('show');
    }, 3000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
      document.removeEventListener('mouseleave', onMouseleave);
      clearTimeout(mt);
      clearTimeout(chatTimer);
    };
  }, []);

  return null;
}
