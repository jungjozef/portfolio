# Rework Plan — jozef.rocks (CRA/React SPA → plain static site)

Status legend: `[ ]` todo · `[~]` in progress · `[x]` done

Sources of truth: `CONTENT.md` (copy), `DESIGN.md` (visuals), `STRUCTURE.md` (layout/files),
`SEO.md` (head/meta). Blueprints (look/interaction only, NOT content, NOT architecture):
`design-sketch.html`, `design-sketch-bold.html`, `design-sketch-combined.html`.

---

## 1. Inventory of current repo (verified file-by-file, not assumed)

| Path | Verdict |
|---|---|
| `.github/workflows/azure-static-web-apps-witty-sea-0a27ac303.yml` | **KEEP**, modify (§4) |
| `CNAME` (`jozef.rocks`) | **KEEP** verbatim at repo root |
| `src/` (App.tsx, index.tsx, components/{Home,Profile,Blog,Header,Footer}, css, tests, reportWebVitals, react-app-env.d.ts, setupTests.ts) | DELETE (old SPA) |
| `package.json`, `yarn.lock`, `tsconfig.json` | DELETE (no build step, no npm deps) |
| `Dockerfile`, `compose.yaml` | DELETE — exist only to run the CRA dev server |
| `README.md` | REPLACE (stock Create-React-App readme) |
| `public/index.html` | DELETE (CRA template: `%PUBLIC_URL%`, `<div id="root">`, Google Fonts) |
| `public/manifest.json`, `public/logo192.png`, `public/logo512.png` | DELETE (CRA PWA scaffolding — D6) |
| `public/favicon.ico` (64×64, 32bpp) | REUSE as `site/assets/favicon.ico` |
| `public/self.jpg` (1024×1024 grayscale JPEG, 210 KB, B&W studio headshot) | RESIZE → `site/assets/headshot.jpg` (D2) |
| `public/robots.txt` (`Disallow:`) | REPLACE with the SEO.md version |
| `public/staticwebapp.config.json` | REWRITE — current config is an SPA `navigationFallback` rewrite, wrong for one static page |
| `.gitignore` | TRIM (node_modules/coverage/build/npm-debug entries go dead) |

Project docs (`CLAUDE.md`, `CONTENT.md`, `DESIGN.md`, `STRUCTURE.md`, `SEO.md`,
`Jung_Jozsef_CV_draft.md`, `PLAN.md`, 3 sketches) stay in the repo, never served (D1).

## 2. Target layout

```
repo/
├── site/                        ← the only thing Azure serves
│   ├── index.html
│   ├── styles.css               normal mode + `html.bold` overrides, one file
│   ├── script.js                mode toggle, localStorage, n/g keys
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── staticwebapp.config.json
│   └── assets/
│       ├── headshot.jpg
│       └── favicon.ico
├── CNAME
├── .github/workflows/azure-static-web-apps-witty-sea-0a27ac303.yml
├── .gitignore
├── README.md
└── *.md, design-sketch*.html    project docs / blueprints, not served
```

Deviation from `STRUCTURE.md` (which puts `index.html` at repo root): deliberate, see D1.

## 3. Build phases

### Phase A — teardown
- [x] Delete the SPA: `src/`, `package.json`, `yarn.lock`, `tsconfig.json`, `Dockerfile`,
      `compose.yaml`, `public/index.html`, `public/manifest.json`, `logo192/512.png`,
      old `robots.txt`, old `staticwebapp.config.json`
- [x] `public/favicon.ico` → `site/assets/favicon.ico`
- [x] `public/self.jpg` → downscale (macOS `sips`, no npm) → `site/assets/headshot.jpg`
- [x] Trim `.gitignore`; verify `CNAME` untouched and still tracked

### Phase B — markup (`site/index.html`)
- [x] `<head>` per SEO.md: title, description, canonical `https://jozef.rocks/`, OG
      (`og:type=profile`, absolute `og:image`), Twitter summary card, viewport, favicon
- [x] `Person` JSON-LD: name, alternateName, jobTitle, url, image, email, telephone,
      address, sameAs (LinkedIn placeholder), knowsAbout
- [x] Inline pre-paint script in `<head>` (reads `jozefrocks-mode`, sets `<html class="bold">`)
- [x] Marquee: stripe bar + static yellow band + duplicated-span seamless track (D5 copy)
- [x] Nav row: brand, anchors, mode-toggle `<button>` (sketches use an `<a href>` to the other
      file — wrong here; the real build is one document)
- [x] Hero: one `<h1>`, tagline, headshot `<img alt="József Márton Jung">`, meta row
      (location · citizenship "Hungarian (EU) & Serbian" · GoLab 2025 link), mailto + CV CTAs
- [x] About: full CONTENT.md About copy (sketches truncate it), split at sentence
      boundaries only, plus the GoLab talk as its own small mention (D10)
- [x] Skills: all 6 groups, 4-colour category system, Frameworks/Practices neutral,
      "also worked with" languages as neutral tags behind an `also:` label (D9)
- [x] Experience: **all 16 roles**, CONTENT.md order verbatim (D7), native
      `<details>`/`<summary>`, MeridianBet + ContentLion `open`, `[+]`/`[-]` via CSS
      `::after` (never a hardcoded wrong-state glyph), amber CURRENT badge on MeridianBet only,
      full paragraph + colour-coded tech tags per entry
- [x] Contact: email (mailto), phone, location, LinkedIn placeholder, CV placeholder (D3);
      no GitHub row, same list pattern so one can be added later
- [x] Footer: personal-touch one-liner
- [x] Exactly one `h1`, sections `h2`, no skipped levels

### Phase C — styles (`site/styles.css`)
- [x] Normal mode: `#f6f5f0`, two-colour dot texture (blue + amber, low opacity),
      1–2px solid borders, no shadows/gradients, accent `#1547e6`, underlined links,
      17px/1.68 body, all mono elements bold at 14–16px
- [x] Category colours exactly per DESIGN.md: blue `#1547e6`/`#eaefff` languages,
      teal `#0d7a7a`/`#e2f3f3` databases, violet `#6d28d9`/`#f0e9fb` messaging,
      green `#157a4a`/`#e4f3ec` cloud+infra, amber `#a8710a` = CURRENT badge only
- [x] Bold mode under a single `html.bold` scope: navy + yellow/cyan dots, 4px borders,
      hard offset shadows, rotated sticker markers, Verdana, rainbow rule, magenta/orange (D4)
- [x] Responsive 375 / 768 / 1200; nav + toggle wrap inline, never fixed/floating
- [x] `prefers-reduced-motion: reduce` freezes the marquee scroll (D8)
- [x] Contrast audit (WCAG AA) on every text/bg pair in both modes

### Phase D — behaviour (`site/script.js`)
- [x] Toggle button: label swap via CSS-shown spans, `aria-pressed` maintained in JS
- [x] `localStorage['jozefrocks-mode']` = `normal` | `bold`; first visit → normal, always
- [x] `n` / `g` → bold; ignored when focus is in an input/textarea/contenteditable
- [x] No reload, no URL change, scroll position preserved

### Phase E — host/SEO files
- [x] `robots.txt` allow-all + `Sitemap:` line
- [x] `sitemap.xml`, single URL
- [x] `staticwebapp.config.json`: no SPA fallback, 404 handling, cache headers for assets

### Phase F — verify (measured, not assumed)
- [x] Open `site/index.html` over `file://` — works with zero server, localStorage guarded
- [x] Serve locally, check both modes, reload persistence, keyboard shortcuts
- [x] Diff every CONTENT.md fact against the page — no invented copy, no dropped role
- [x] Confirm zero content duplication between modes (one DOM, CSS-only switch)
- [x] Confirm nothing references deleted CRA paths

### Phase G — deploy (hold for explicit go-ahead)
- [x] Workflow updated per §4
- [ ] Commit + push, watch the SWA run, confirm jozef.rocks serves the new page
- [ ] Confirm docs/sketches are NOT reachable over HTTP

## 4. Azure Static Web Apps workflow changes

The current file builds a CRA app (`app_location: "/"`, `output_location: "build"`, implicit
Oryx build) — that fails once `package.json` is gone. New build config:

```yaml
          action: "upload"
          app_location: "site"
          api_location: ""
          output_location: ""
          skip_app_build: true
          skip_api_build: true
```

- `skip_app_build: true` stops Oryx from detecting/running a build.
- `output_location: ""` uploads `app_location` as-is.
- `app_location: "site"` is also what keeps the project docs off the public site.
- Unchanged: both jobs (deploy + close-PR), triggers, and the token secret name
  `AZURE_STATIC_WEB_APPS_API_TOKEN_WITTY_SEA_0A27AC303`.
- `actions/checkout@v3` → `@v4`.
- `CNAME` is a GitHub-Pages convention; Azure SWA ignores it. Kept per instruction, at root.

## 5. Decisions log

| # | Question | Decision |
|---|---|---|
| D1 | Served root — SWA has no ignore-file, so `app_location: "/"` would publish CLAUDE.md, CONTENT.md and the CV draft (phone, full history) | Site lives in `site/`, `app_location: "site"`. Docs stay in the repo, unserved. Overrides STRUCTURE.md's root layout |
| D2 | Headshot | Reuse `public/self.jpg` (B&W CV portrait), downscaled with `sips`; no filters |
| D3 | CV download | Placeholder `https://link.to/my-cv` per CONTENT.md; no PDF shipped |
| D4 | Bold mode vs DESIGN.md's "no red anywhere" | **Sketch wins for bold mode**: rainbow rule (incl. `#ff0000`), magenta `#ff00c8`, orange `#ff7a00` stay. Normal mode remains strictly red-free |
| D5 | Marquee copy (absent from CONTENT.md) | Facts only, CONTENT.md-derived: `★ SENIOR BACKEND ENGINEER ★ GO / DISTRIBUTED SYSTEMS ★ 16 YEARS OF BACKEND ENGINEERING ★ GOLAB 2025 SPEAKER ★ NOVI SAD, SERBIA ★` |
| D6 | Old icons/PWA | Keep `favicon.ico` only; delete `manifest.json`, `logo192.png`, `logo512.png` |
| D7 | Experience order | CONTENT.md order verbatim — GIA Hungaria (2013–2014) stays last, matching the CV |
| D8 | Reduced motion (not covered by any doc) | Honour `prefers-reduced-motion: reduce`: marquee bar and text stay, scroll animation stops |
| D9 | "also worked with C#, Scala, Kotlin" | Neutral (uncoloured) tags behind a small mono `also:` label, so primary languages stay distinct |
| D10 | About's tail sentence duplicates hero facts ("Speaker at GoLab 2025. Based in Novi Sad, Serbia; Hungarian (EU) and Serbian citizen.") | Location + citizenship live in the hero meta row and GoLab gets its own small mention (both as CONTENT.md itself directs), so the tail sentence is not repeated in the About paragraph. No wording changed anywhere |
| D11 | 16 vs 17 roles | CONTENT.md contains 16 experience entries (recounted); earlier draft of this plan said 17 |
| D12 | `#a8710a` cannot carry WCAG AA badge text with *any* text colour (4.17:1 white, 4.34:1 near-black) | `--amber` stays the badge border (so amber still means CURRENT and nothing else); the fill is a darkened shade of the same hue, `--amber-fill: #8a5c05`, with white text at 5.81:1 |
| D13 | Bold mode used white text on magenta (3.45:1) and orange (2.62:1) in the sketch | Same fills, black text instead — 5.25:1 and 6.93:1. DESIGN.md's AA requirement applies to bold mode too, even though D4 lets its palette keep red |
| D14 | Marquee placement: DESIGN.md says "very top of the page" and STRUCTURE.md says "full-width", but the sketches nest it inside the content column below the nav | Followed the docs: marquee is the first element in `<body>`, full viewport width, top/bottom borders only. Nav sits below it |
| D15 | Between ~560 and ~700px the nav wrapped to two lines and the brand floated between them (seen in the browser pass) | Stacked layout breakpoint raised from 560px to 700px, in both modes |

## 6. Verification results (Phase F)

Ran a parity checker (`scratchpad/verify.py`) that parses CONTENT.md and diffs it against
the rendered page, plus a real browser pass in Chrome. Results:

- 16/16 roles present, in CONTENT.md order; every gist and every full paragraph matches
  verbatim (whitespace-normalised); every `Tech:` list matches token-for-token and in order.
- `open` state matches CONTENT.md's per-entry default (MeridianBet, ContentLion only).
- CURRENT badge appears on MeridianBet and nowhere else.
- All 6 skill groups and every skill token present; "also" languages rendered neutral.
- Hero/about/contact/footer/GoLab strings, SEO head tags, JSON-LD (valid JSON, `Person`),
  `staticwebapp.config.json` (valid JSON, no SPA fallback) all check out.
- Exactly one `<h1>`; only `h1`/`h2` used; all container tags balanced.
- Workflow YAML parses; `app_location: site`, `output_location: ""`, `skip_app_build: true`,
  both jobs and the API token secret intact, checkout bumped to v4.
- Browser: no console errors. Mode round-trip works — `n`/`g` → bold, button → normal,
  `localStorage` + `aria-pressed` follow, choice survives reload with no flash.
- No horizontal overflow at 1440px (1425 ≤ 1440) or ~600px (591 ≤ 606); nav + toggle wrap
  inline in both modes.
- Total payload 128 KB (33 KB HTML, 17 KB CSS, 1.6 KB JS, 34 KB headshot, 17 KB favicon).
- Contrast, measured: languages 5.95:1, messaging 6.16:1, cloud 4.70:1, databases 4.50:1
  (exactly at the AA line), muted body text 8.6:1, links 5.95:1 — all pass AA.

## 7. Tech-tag colour map (applied identically in Skills and every experience entry)

- **Blue / languages:** Go, Java, Python, JavaScript, TypeScript, C#, Scala, Kotlin, PHP
- **Teal / databases:** PostgreSQL, MySQL, Cassandra, DynamoDB, Redis, ElasticSearch,
  Couchbase, SQL Server, H2 database, BigQuery, Solr
- **Violet / messaging:** Kafka, RabbitMQ, NATS, ActiveMQ
- **Green / cloud & infra:** AWS, GCP, Azure, Oracle Cloud, Digital Ocean, Docker,
  Docker Compose, Kubernetes, ECS, Lambda, Kinesis, Firehose, AWS S3, AWS CodePipeline,
  Terraform, Terragrunt, Jenkins, SonarQube, CI/CD
- **Neutral:** frameworks and libraries — Spring, Django, Flask, React, Gin, Gorm,
  .NET Core, Entity Framework, Restlet, RXTX, Java 2D, JSP/JSTL, Serverless framework,
  Airflow, Hadoop, Hive, Impala, Sqoop, Oozie, Agile (Scrum, Kanban)
