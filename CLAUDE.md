# Project: jozef.rocks — Personal Portfolio Site

## Decisions log
- An old site already exists at jozef.rocks (client-side rendered SPA, dark theme,
  nav: Home/Profile/Blog). Decision: **do not reuse or refresh it** — rebuild as
  plain static HTML/CSS/JS per this doc, with the light/minimal theme in DESIGN.md.
  The old site's content is also stale (missing ~2 years of work history, references
  an AWS cert that has since expired, tone is more casual/playful than desired for
  the job-hunting goal) — do not port old copy, use CONTENT.md as source of truth.
- The old site's nav included a "Blog" item (empty). Worth keeping in mind for the
  future extension points in STRUCTURE.md, but not built in v1.
- Design direction settled after several rounds of prototyping (see DESIGN.md for
  full detail): a calm, flat-bordered "normal" mode is the default, with a full
  Neocities-era "bold"/time-travel mode available as an opt-in visual toggle
  (button + `n`/`g` keyboard shortcut), persisted via localStorage. **Both modes
  render the same content from CONTENT.md — the toggle is presentation-only.**
  Early prototypes built the two modes as separate HTML files for fast side-by-side
  comparison during design review; the real build must NOT ship that way (see
  "Single source of content" below) — that was a sketch-phase convenience, not the
  target architecture.

## What this is
A personal portfolio/landing site for József Márton Jung, a senior backend software
engineer (16 years experience, Go/distributed systems focus). Primary audience right
now is recruiters and hiring managers evaluating him for backend/senior engineering
roles. Domain: jozef.rocks.

## Tech constraints
- Plain static site: HTML, CSS, vanilla JS only. No frameworks, no build step, no
  bundler, no npm dependencies unless explicitly requested later.
- Must work by opening index.html directly or via any basic static host (no server-side
  code, no backend).
- Mobile-first responsive design. Assume a meaningful share of visitors are on phones
  (recruiters skimming links).
- Fast load: no heavy JS libraries, no web fonts unless self-hosted/minimal, optimize
  any images.
- Accessible: semantic HTML, proper heading hierarchy, sufficient color contrast,
  alt text on images.
- No tracking/analytics scripts unless explicitly requested.
- `localStorage` is expected and appropriate here (used for the mode-toggle
  preference — see below). This is a real deployed site, not a Claude.ai artifact,
  so the artifact sandbox's localStorage restriction does not apply to this project.

## Single source of content (critical)
The site has two visual modes (normal/default and bold/time-travel — see DESIGN.md's
"Dual mode" section for full detail). They must share one DOM and one set of content
sourced from CONTENT.md. A mode switch may only toggle CSS/presentational state (e.g.
a class on `<html>` or `<body>`, swapped stylesheets, showing/hiding purely
decorative markup like the marquee's stripe elements) — it must never involve two
copies of the actual copy, two separate content templates, or two HTML documents
that could drift apart. If a future change updates the copy, it must be a change to
CONTENT.md and it must apply to both modes automatically, with no second place to
remember to update.

## Source of truth
- `CONTENT.md` — all copy for the site. Do not invent content, credentials, or
  experience not present in this file.
- `DESIGN.md` — visual/style direction.
- `STRUCTURE.md` — page/section layout and file structure.
- `SEO.md` — required meta tags, structured data, and on-page SEO requirements.

## Reference blueprint files (not sources of truth)
`design-sketch.html`, `design-sketch-bold.html`, and `design-sketch-combined.html`
are prototypes from the design-exploration phase, included in this folder as visual/
interaction blueprints only. Use them to see, concretely, what DESIGN.md's prose
describes: the flat-bordered normal-mode system, the full bold/time-travel palette
and panel style, the marquee construction (stripe bar + static yellow band + seamless
scroll), the tag color-coding system, and the toggle button/keyboard-shortcut
behavior. They are useful as CSS/markup references to study and adapt.

They are explicitly NOT the source for content (their copy is abbreviated/sample,
not the real CONTENT.md text) and NOT the source for architecture (they're built as
separate linked HTML files, which is a sketch-phase convenience for side-by-side
comparison — see "Single source of content" above for why the real build must not
copy that structure). When building the real site, treat these files the way a
developer treats a designer's static mockups: implement the look and interaction
they demonstrate, faithfully, but wire it up correctly against the real content and
the single-page dual-mode architecture, don't reuse their HTML as-is or perpetuate
their file-per-mode split.

## Current scope (v1)
Single-page site. Sections: Hero/intro, About, Skills, Experience highlights,
Contact/links. See STRUCTURE.md for exact order and detail level. Includes the
normal/bold dual-mode toggle described in DESIGN.md — this is part of v1, not a
future extension.

## Explicitly out of scope for v1 (do not build yet)
- Blog / articles section
- Talks/speaking section
- Projects showcase
- CMS or any content management
- Contact form (use mailto: link instead)

These are planned for a future iteration — leave clean extension points (e.g., a nav
structure that could accept future links) but don't build the pages themselves.

## Tone
Professional first, but with a real visual point of view — not generic-minimal.
This is a job-hunting tool, so recruiters should still get "credible senior
engineer" in the first 5 seconds, but the design direction (see DESIGN.md: old
Neocities-era web as an art-direction reference, not a literal costume) is a
deliberate, accepted risk rather than a safe default. Content/copy tone stays
professional and restrained; visual design is where the personality/opinion shows
up. See DESIGN.md for the full direction and its explicit exclusions.

## Working style
- Ask before making content decisions (wording, what to emphasize) — content comes
  from CONTENT.md, not improvisation.
- Design decisions should follow DESIGN.md; flag and ask if something isn't covered
  there rather than guessing.
- Keep the codebase simple and readable — this should be maintainable by hand without
  tooling.
