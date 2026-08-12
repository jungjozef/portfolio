# SEO — jozef.rocks

## Why this matters here specifically
The old site was a JS-rendered SPA ("You need to enable JavaScript to run this app"
in the raw HTML) — that's close to invisible to search engines and to any tool that
doesn't execute JS. Going static (plain HTML/CSS/JS, per CLAUDE.md) already fixes the
biggest problem: the page content itself must exist in the HTML source, not be
injected after the fact.

## Target search intent
Primary: someone searching the person's name (recruiters checking out a candidate,
people who met at GoLab, etc.) — "József Márton Jung", "Jozsef Jung software
engineer". Secondary, lower priority for v1: generic role/skill searches ("Go backend
engineer Serbia") — realistically hard to rank for against larger sites, not worth
over-optimizing for at this stage.

## Required in `<head>` of index.html
- `<title>` — specific and human, e.g. "József Márton Jung — Senior Backend Engineer
  (Go)". Avoid generic titles like "Home" or just the domain name.
- `<meta name="description">` — one or two sentences, written for a human reading a
  search result snippet, not keyword-stuffed. Base it on the hero one-liner in
  CONTENT.md.
- `<link rel="canonical" href="https://jozef.rocks/">` — prevents duplicate-content
  confusion if the site is ever reachable via multiple URLs (www vs non-www, trailing
  slash, etc.).
- Open Graph tags (`og:title`, `og:description`, `og:type=profile`, `og:url`,
  `og:site_name`, `og:locale`, `og:image` plus `og:image:width/height/type/alt`) —
  controls how the link looks when shared on LinkedIn, Slack, Discord, etc.
  `og:site_name` is not optional: Discord shows it above the title, and without it
  the card reads as anonymous.
- Twitter/X card tags: `twitter:card=summary_large_image` (not plain `summary`, which
  renders a cramped thumbnail), mirroring the OG title/description/image plus
  `twitter:image:alt`.

### Length budgets (enforced — these were being truncated before)
| Tag | Budget | Why |
|---|---|---|
| `<title>` | ≤ 60 chars | Google truncates past ~60 |
| `meta description` | ≤ 155 chars | Google truncates around 150–160 |
| `og:title` / `twitter:title` | ≤ 60 chars | X and LinkedIn truncate |
| `og:description` / `twitter:description` | ≤ 125 chars | Social previews show ~125, less on mobile |

### Social card image
`og:image` must be **1200×630 (1.91:1)**, not the square headshot — square images get
cropped or letterboxed by most platforms. The card carries its own headline and CTA
text (name, role, stack, `→ jozef.rocks`) so it still reads as a link worth clicking
when the surrounding text is truncated.

Source of the card is `tools/og-card.html`, rendered to `site/assets/og-card.png` by
`tools/render-og-card.sh` (headless Chrome, no dependencies, no build step). `tools/`
sits outside `site/`, so the source page is never published. Re-run that script after
changing the card, and keep `og:image:width/height` in sync with the output.
- `<meta name="viewport" content="width=device-width, initial-scale=1">` — already
  implied by the responsive requirement in DESIGN.md, just confirming it belongs here.

## Structured data
Add a `Person` schema.org JSON-LD block in the `<head>`:
- name, jobTitle, url, sameAs (LinkedIn/GitHub once URLs are available), email,
  knowsAbout (a short list — e.g. Go, distributed systems, microservices architecture)
This helps search engines understand "this page is about a specific person" rather
than treating it as generic text, and can improve how the result is presented (e.g.
knowledge panel eligibility, though that's not guaranteed).

## On-page/content requirements
- Exactly one `<h1>` per page — the name/hero title. Section headers (About, Skills,
  Experience, Contact) are `<h2>`. Don't skip heading levels.
- The experience `<details>/<summary>` elements (per STRUCTURE.md/DESIGN.md) are
  fine for SEO — their content is in the HTML regardless of open/closed state, so
  collapsed entries are still crawlable and indexable. No SEO downside to the
  expand/collapse pattern.
- If a headshot photo is used: descriptive `alt` text (e.g. "József Márton Jung"),
  not "photo.jpg" or empty.
- Internal links (e.g. to a future `/blog` or `/talks` page) should use real `<a href>`
  tags, not JS-only navigation — keeps the future extension points in STRUCTURE.md
  crawlable when they're built.
- External links (LinkedIn, GitHub, GoLab talk) should be real anchor tags too —
  fine to add `rel="noopener"` for security, `target="_blank"` is a UX choice, not an
  SEO concern either way.

## Files to include at the site root
- `robots.txt` — simple, allow all (`User-agent: *` / `Allow: /`), pointing to the
  sitemap.
- `sitemap.xml` — trivial for v1 (one URL), but sets up the pattern cleanly for when
  `/blog`, `/talks`, `/projects` pages exist later.
- `favicon.ico` (already noted in STRUCTURE.md's assets folder).

## Dual-mode toggle (normal/bold) — no SEO impact
The site's normal/bold visual toggle (see DESIGN.md "Dual mode") only ever changes
CSS/presentation via a client-side class toggle — per CLAUDE.md's single-source-of-
content requirement, the actual HTML content is identical in both modes. This means
there's no duplicate-content risk and no crawlability concern: whichever mode a
crawler happens to render, the text content is the same. The mode-switch JS itself
doesn't need to be crawlable or degrade gracefully for SEO purposes, since it affects
appearance only, never content.

## Performance (SEO-adjacent)
Already covered by CLAUDE.md/DESIGN.md constraints (no heavy JS, no build step,
minimal fonts, optimized images) — page speed is a ranking factor, and this site's
simplicity works in its favor here. No additional action needed beyond following
those existing constraints.

## Explicitly not needed for v1
- No need for a blog/content strategy, backlink strategy, or keyword research tooling
  at this stage — this is a single identity/portfolio page, not a content marketing
  site. Revisit if/when the blog section (already scoped as future work in
  STRUCTURE.md) is actually built.
