# jozef.rocks

Personal portfolio site for József Márton Jung — senior backend engineer.

Plain static site: HTML, CSS and vanilla JS. **No build step, no dependencies, no
tooling.** Editing a file and reloading the browser is the whole dev loop.

## Layout

```
site/                       everything that gets published
├── index.html              the single page (both visual modes, one DOM)
├── styles.css              normal mode + `html.bold` overrides
├── script.js               mode toggle, localStorage, n/g shortcuts
├── robots.txt
├── sitemap.xml
├── staticwebapp.config.json
└── assets/
    ├── headshot.jpg
    ├── og-card.png         1200x630 social card (generated, see tools/)
    └── favicon.ico

CNAME                       custom domain record
.github/workflows/          Azure Static Web Apps CI/CD
tools/                      not published: og-card.html + render-og-card.sh
```

## Regenerating the social card

```sh
./tools/render-og-card.sh     # headless Chrome -> site/assets/og-card.png (1200x630)
```

Edit `tools/og-card.html` first. Keep `og:image:width`/`height` in `site/index.html`
matching the output, and see SEO.md for the meta length budgets.

Project docs — `CLAUDE.md`, `CONTENT.md`, `DESIGN.md`, `STRUCTURE.md`, `SEO.md`,
`PLAN.md`, `Jung_Jozsef_CV_draft.md`, and the `design-sketch*.html` blueprints — live at
the repo root and are deliberately **outside** `site/`, so they are never published.

`CONTENT.md` is the source of truth for all copy. Change copy there first, then in
`site/index.html` — never invent content in the HTML.

## Run locally

Open `site/index.html` directly in a browser, or serve it:

```sh
python3 -m http.server 8000 --directory site
# http://localhost:8000
```

## Two visual modes

One DOM, one set of content. The toggle in the nav row (or pressing `n` / `g`) adds
`class="bold"` to `<html>`; CSS does the rest. The choice is stored in `localStorage`
under `jozefrocks-mode`. First-time visitors always get normal mode.

## Deploy

Push to `main`. The Azure Static Web Apps workflow uploads `site/` verbatim
(`skip_app_build: true`) — no build runs.
