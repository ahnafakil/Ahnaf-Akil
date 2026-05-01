# ahnafakil.com

Personal portfolio for Ahnaf Akil — bridging IT Support operations into software engineering.

**Stack:** Vanilla HTML / CSS / JS · GitHub Pages · Decap CMS · Marked.js  
**Aesthetic:** Apple-inspired glassmorphism on a 5-shade slate palette  
**Fonts:** Playfair Display (display) · Outfit (body) · JetBrains Mono (mono)  
**Domain:** [ahnafakil.com](https://ahnafakil.com)  
**Blog:** [blog.ahnafakil.com](https://blog.ahnafakil.com)

---

## File Structure

```
ahnafakil.com/
├── index.html              ← Home / hero
├── about.html              ← About + IT→SWE narrative + timeline
├── projects.html           ← Project grid (8 projects)
├── blog.html               ← Post list (reads posts/posts.json)
├── post.html               ← Single post viewer (Marked.js)
├── contact.html            ← Contact form + social links
├── 404.html
│
├── /assets
│   ├── /css/main.css       ← Full design system
│   ├── /js/app.js          ← Nav, scroll reveals
│   ├── /js/blog.js         ← Blog list rendering
│   ├── /img/akil.jpg       ← Headshot photo
│   └── Ahnaf_Akil_Resume.pdf ← Downloadable resume
│
├── /posts
│   ├── posts.json          ← Manifest read by blog.js
│   └── from-tickets-to-code.md
│
├── /admin
│   ├── index.html          ← Decap CMS shell
│   └── config.yml          ← Decap CMS config
│
├── CNAME                   ← ahnafakil.com
├── .nojekyll               ← Skip Jekyll on GitHub Pages
├── robots.txt
└── sitemap.xml
```

---

## Design System Reference

**Palette** (defined in `assets/css/main.css` as CSS custom properties):

| Token | Value | Use |
|---|---|---|
| `--cadet` | `#889DA9` | Accent, links, eyebrows |
| `--gunmetal` | `#6C7E87` | Secondary text, dividers |
| `--midnight` | `#505E65` | Mid-depth surfaces |
| `--darkstm` | `#343F44` | Glass-card depth tone |
| `--deepspc` | `#181F22` | Page background |

**Type:**

- **Display:** Playfair Display (italic for emphasis)
- **Body:** Outfit
- **Mono:** JetBrains Mono

---

## Local Development

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## License

Personal use. The `Playfair Display`, `Outfit`, and `JetBrains Mono` fonts are SIL Open Font License via Google Fonts.

— Built April–May 2026
