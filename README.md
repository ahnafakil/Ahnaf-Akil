# ahnafakil.com

Personal portfolio for Ahnaf Akil — bridging IT Support operations into software engineering.

**Stack:** Vanilla HTML / CSS / JS · GitHub Pages · Decap CMS · Marked.js
**Aesthetic:** Apple-inspired glassmorphism on a 5-shade slate palette
**Domain:** [ahnafakil.com](https://ahnafakil.com)

---

## File Structure

```
ahnafakil-site/
├── index.html              ← Home / hero
├── about.html              ← About + IT→SWE narrative + timeline
├── projects.html           ← Project grid
├── blog.html               ← Post list (reads posts/posts.json)
├── post.html               ← Single post viewer (Marked.js)
├── contact.html            ← Contact form + social links
├── 404.html
│
├── /assets
│   ├── /css/main.css       ← Full design system
│   ├── /js/app.js          ← Nav, scroll reveals
│   ├── /js/blog.js         ← Blog list rendering
│   └── /img                ← Place your photo here as akil.jpg
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

## Setup — Step by Step

### 1. Create the GitHub repository

```bash
# From the unzipped folder
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/AhnafAkil/ahnafakil.com.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to repo **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / `(root)`
4. Save. The site will be live at `<username>.github.io/<repo>` within a few minutes.

### 3. Configure your custom domain

The `CNAME` file at the root already contains `ahnafakil.com`. To point your domain at GitHub Pages, add these DNS records at your registrar:

**A records** (apex `@`):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME record:**
```
www  →  ahnafakil.github.io  (or YOUR-USERNAME.github.io)
```

After DNS propagates (1–24 hours typically, up to 48), go to **Settings → Pages** and check **Enforce HTTPS**. Wait until the certificate is issued before checking the box.

### 4. Add your photo

Drop your headshot at `/assets/img/akil.jpg`, then in `about.html` find this block:

```html
<div class="frame-icon" aria-hidden="true">
  <svg ...></svg>
</div>
<span>Photo<br/>Coming<br/>Soon</span>
```

Replace it with:

```html
<img src="/assets/img/akil.jpg" alt="Ahnaf Akil" />
```

That's it — the frame styling is already set up for the image to fill correctly.

### 5. Set up the contact form

`contact.html` uses Formspree. Sign up at [formspree.io](https://formspree.io) (free tier), create a form, and replace `YOUR_FORM_ID` in the form action with your real ID:

```html
<form action="https://formspree.io/f/abcdwxyz" method="POST">
```

### 6. Set up Decap CMS at `/admin`

GitHub Pages doesn't run a backend, so OAuth needs an external bridge. Easiest route:

**Option A — Netlify Identity bridge (recommended)**

1. Sign up at [netlify.com](https://netlify.com) (free)
2. Create a new site (you can leave it pointing nowhere — you're only using auth)
3. **Site settings → Identity → Enable Identity**
4. **Identity → Registration:** set to **Invite only**
5. **Identity → External providers:** add **GitHub**
6. **Identity → Services → Git Gateway:** click **Enable Git Gateway**
7. In your `/admin/index.html`, add the Netlify Identity widget:

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

8. Update `admin/config.yml` to use git-gateway:

```yaml
backend:
  name: git-gateway
  branch: main
```

**Option B — Custom OAuth proxy on Vercel**

If you want zero Netlify dependency, deploy [vencax/netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider) on Vercel (free) and update `config.yml`:

```yaml
backend:
  name: github
  repo: AhnafAkil/ahnafakil.com
  branch: main
  base_url: https://your-oauth-proxy.vercel.app
```

After auth works, log in at `ahnafakil.com/admin`, write your post, hit Publish — Decap commits the markdown to `/posts/`, the manifest updates, the site rebuilds, and the post is live.

---

## Writing a Post Without the CMS (Manual)

If the CMS isn't set up yet and you want to publish a post:

1. Create `/posts/your-slug.md` with front-matter:

```markdown
---
title: "Your Post Title"
date: 2026-05-08T09:00:00-04:00
excerpt: "1-2 sentence summary."
---

Your post content in Markdown.
```

2. Add an entry to `/posts/posts.json`:

```json
{
  "slug": "your-slug",
  "title": "Your Post Title",
  "date": "2026-05-08T09:00:00-04:00",
  "excerpt": "1-2 sentence summary.",
  "file": "your-slug.md"
}
```

3. Commit and push. The post appears on `/blog.html` and renders at `/post.html?slug=your-slug`.

---

## Local Development

Because the blog uses `fetch()` against `/posts/`, opening files directly with `file://` won't work. Run a local server:

```bash
# Python (no install needed)
python3 -m http.server 8000

# Or with Node
npx serve
```

Then visit `http://localhost:8000`.

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

- **Display:** Instrument Serif (italic for emphasis)
- **Body:** Manrope
- **Mono:** JetBrains Mono

---

## License

Personal use. The design and code are yours; the `Instrument Serif`, `Manrope`, and `JetBrains Mono` fonts are SIL Open Font License via Google Fonts.

— Built April–May 2026
