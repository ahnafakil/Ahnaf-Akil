/* ============================================================
   ahnafakil.com  —  Blog engine
   Fetches /posts/posts.json and renders the post list.
   Single post rendering happens in post.html via Marked.js.
   ============================================================ */

(function () {
  'use strict';

  const container = document.getElementById('post-list');
  if (!container) return;

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const escapeHtml = (str) => {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  };

  fetch('posts/posts.json', { cache: 'no-cache' })
    .then(r => {
      if (!r.ok) throw new Error('Failed to load posts manifest');
      return r.json();
    })
    .then(posts => {
      if (!Array.isArray(posts) || posts.length === 0) {
        container.innerHTML = `
          <div class="glass post-card" style="text-align:center; padding: 64px 32px;">
            <p style="color: var(--text-tertiary); font-family: var(--font-mono); font-size: 0.875rem; letter-spacing: 0.1em; text-transform: uppercase;">
              No posts yet  ·  First one coming May 1
            </p>
          </div>`;
        return;
      }

      const sorted = posts.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      container.innerHTML = sorted.map(p => `
        <a href="post.html?slug=${encodeURIComponent(p.slug)}"
           class="glass post-card reveal"
           aria-label="Read ${escapeHtml(p.title)}">
          <time datetime="${escapeHtml(p.date)}">${formatDate(p.date)}</time>
          <div>
            <h2>${escapeHtml(p.title)}</h2>
            <p class="excerpt">${escapeHtml(p.excerpt || '')}</p>
          </div>
          <span class="read-more">
            Read  <span aria-hidden="true">→</span>
          </span>
        </a>
      `).join('');

      // Trigger reveal animation
      requestAnimationFrame(() => {
        container.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('is-visible'), i * 80);
        });
      });
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = `
        <div class="glass post-card" style="text-align:center; padding: 48px 32px;">
          <p style="color: var(--text-tertiary);">
            Couldn't load posts right now. Please try again later.
          </p>
        </div>`;
    });
})();
