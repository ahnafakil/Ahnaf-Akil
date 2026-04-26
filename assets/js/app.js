/* ============================================================
   ahnafakil.com  —  Common UI scripts
   Mobile nav toggle, scroll reveals, year stamp.
   ============================================================ */

(function () {
  'use strict';

  // ─── Mobile nav toggle ────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('is-open');
      const open = links.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close on link click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('is-open'));
    });
  }

  // ─── Scroll-triggered reveals ────────────────────────────
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => io.observe(el));
  } else {
    // Fallback: just show
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // ─── Active nav link highlight ───────────────────────────
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const cleanHref = href.replace(/\/$/, '') || '/';
    if (
      cleanHref === path ||
      (cleanHref !== '/' && path.startsWith(cleanHref))
    ) {
      a.classList.add('active');
    }
  });

  // ─── Year stamp in footer ────────────────────────────────
  const yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach(el => {
    el.textContent = new Date().getFullYear();
  });

})();
