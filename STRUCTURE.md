# Site Structure — jozef.rocks

## v1 file layout (plain static site)
```
/
├── index.html
├── styles.css
├── script.js           (required — mode toggle, localStorage persistence,
│                         keyboard shortcuts, seamless marquee behavior)
├── robots.txt           (see SEO.md)
├── sitemap.xml           (see SEO.md)
├── assets/
│   ├── headshot.jpg     (confirmed — see CONTENT.md "Resolved")
│   ├── favicon.ico
│   └── cv.pdf           (downloadable CV)
└── CLAUDE.md, CONTENT.md, DESIGN.md, STRUCTURE.md, SEO.md   (project docs, not shipped)
    design-sketch.html, design-sketch-bold.html,
    design-sketch-combined.html                              (reference blueprints,
                                                                 not shipped — see
                                                                 CLAUDE.md)
```

No build step. `index.html` links `styles.css` and `script.js` directly.

## Page sections (single page, in order)
0. **Marquee (signature element)** — sits above the Hero, full-width. See DESIGN.md
   "Signature element: the marquee." Present in both visual modes; decorative only,
   no content dependency.
1. **Hero** — name, title/tagline, headshot (confirmed — professional portrait, same
   as CV), citizenship note, primary CTA (email link + CV download).
2. **About** — short paragraph from CONTENT.md.
3. **Skills** — grouped list/tags from CONTENT.md: Languages, Databases, Messaging &
   Streaming, Frameworks, Cloud & Infrastructure, Practices. Tag colors follow the
   4-color category system in DESIGN.md (Languages=blue, Databases=teal,
   Messaging=violet, Cloud=green; Frameworks/Practices stay neutral).
4. **Experience** — full reverse-chronological list from CONTENT.md, one entry per
   role. Each entry uses a native `<details>`/`<summary>` element: summary line
   always visible (company, dates, one-sentence gist); expanding reveals the full
   description and tech tags. MeridianBet and ContentLion default to `open`; all
   other entries default closed. No curation/selection logic needed — every role
   from CONTENT.md gets an entry, in order.
5. **Contact** — email (mailto:), location, LinkedIn, CV download. No phone number:
   email and LinkedIn cover first contact and the number is in the CV PDF already
   (see CONTENT.md). GitHub link is still an open decision in CONTENT.md — build the
   section so it can be added later without restructuring, but don't include a
   placeholder for it now. Simple, no form.

## Mode toggle (present on every load, both modes)
An inline nav item, alongside about/skills/experience/contact, switches between
normal and
bold/time-travel presentation (see DESIGN.md "Dual mode" for full behavior,
persistence, and default-mode rules). Lives in the nav row itself — not a fixed or
floating overlay.

## Future extension points (not built in v1, but leave room for)
- Nav could later include anchors/links to `/blog`, `/talks`, `/projects` as separate
  pages or sections — no need to build placeholder pages now, just don't design the
  nav in a way that would be awkward to extend (e.g., avoid a nav that visually
  assumes exactly one page forever).
- The full experience list already lives on the homepage (all roles, expand/collapse
  — see CONTENT.md), so there's no separate curated-vs-full split to plan for here.

## Hosting note
Domain jozef.rocks — deployment target not yet decided (e.g., GitHub Pages, Netlify,
Cloudflare Pages, or a simple VPS). Since it's a pure static site, any of these work
with minimal config. To be decided before build/deploy, not required for planning the
site content/structure itself.
