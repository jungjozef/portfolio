# Design Direction — jozef.rocks

## Overall vibe
Minimal-but-opinionated, professional-first, with a deliberate art direction: **old
Neocities-era web as an aesthetic reference** — the same way a designer might cite
Cubism or Dadaism as an influence, not a costume to wear literally. Confidence
through visible structure and real visual choices, not generic SaaS-template
politeness, and not decoration for its own sake.

This is a deliberate risk: a bland minimal template is never memorable but never
bad either; this direction is memorable in either direction, so execution
(restraint, spacing, color discipline) matters more than it would with a safe
default. Accepted tradeoff — the goal is to read as "senior engineer with real
taste," not as parody or an unstyled page.

**Explicitly excluded** (parody-adjacent, not the reference being drawn on): tiled
background GIFs, marquee/blink text, visitor counters, Comic Sans or novelty fonts,
"under construction" badges, rainbow/chaotic multi-color palettes, table-based
layout hacks. None of these are in scope, even as a wink.

**What to actually borrow from that era:**
- Sharp corners, flat color, no soft drop-shadows or gradients — structure is shown
  via visible thin borders (1px, solid, dark or accent-colored) rather than hidden
  behind soft-UI conventions.
- Classic hyperlink treatment: underlined links in a bold, saturated accent color —
  not the modern "invisible until hover" pattern. Links should look like links.
- Monospace used as a structural/load-bearing element — nav labels, section markers
  (e.g. `// experience`, `[ contact ]`), dividers — not confined to one muted footer
  line. This is where the "old computers" hobby touch lives now; it's baked into the
  typographic system rather than a single decorative aside.
- One loud, fully-saturated accent color, used deliberately in flat blocks (borders,
  link color, section markers) — pick one color and commit, rather than a muted
  "safe" accent or a chaotic multi-color free-for-all.
- Optional: a subtle flat texture (e.g. a fine dotted or grid pattern) instead of
  pure white background, evoking "hand-built" without looking broken.

## Personal touch
With the Neocities-as-reference direction, the personal/hobby touch is no longer a
single "gentle" isolated detail — it's expressed through the typographic system
itself (monospace-as-structure) and the general willingness to have a visual point
of view. The one-line personal-touch text in CONTENT.md (freediving, photography,
Amiga computers) still stays understated in *tone* — it's a line of text, not a
themed section — but the site around it no longer needs to stay neutral to
compensate. Avoid: literal retro/CRT effects, ocean/diving imagery as backgrounds,
anything that tips from "aesthetic reference" into "costume" (see exclusions above).

## Layout
- Single page, vertical scroll, generous whitespace.
- Sections in order: Hero → About → Skills → Experience highlights → Contact.
- Max content width ~700–800px, centered, for readability (this is a reading-focused
  page, not a wide dashboard-style layout).
- Sticky or minimal top nav is optional for v1 given it's a single page — a simple
  in-page anchor nav is fine if it doesn't add visual clutter.

## Typography
- One primary sans-serif for body text (system font stack is fine: e.g.
  `-apple-system, "Segoe UI", Roboto, sans-serif` — no external font loading required
  for v1, keeps it fast and simple).
- One monospace font used structurally, not just as an accent: nav items, section
  markers/labels, dividers, and dates/tech-tag styling. System monospace stack is
  fine (e.g. `"SF Mono", "Courier New", monospace`). This is a load-bearing part of
  the typographic system now, not an optional single detail.
- Clear hierarchy: name/hero largest, section headers medium (consider monospace
  section markers here, e.g. `// about`), body text comfortable reading size (16px+
  base).

## Color palette
- Light background, dark text as the base — still not a heavy dark/hacker theme.
- One fully-saturated, committed accent color (not muted) — used deliberately and
  repeatedly: link color, borders, section markers, tech-tag accents. Pick one
  strong color and commit to it everywhere rather than scattering multiple accents.
  A bold blue, red, or green in the classic "hyperlink blue" spirit all work; avoid
  pastel or desaturated choices that undercut the flat, confident look.
- Flat color blocks and solid 1px borders instead of shadows/gradients — structure
  should be visible, not implied through soft-UI depth cues.
- High contrast for accessibility (WCAG AA minimum for text) — a saturated accent
  still needs to pass contrast checks against the background it sits on.

## Imagery
- Headshot: same professional portrait used on the CV — small, in the hero area, not
  a large hero banner image. Flat treatment fits the direction well: a solid 1-2px
  border in the accent color rather than a soft drop-shadow or rounded-corner
  treatment.
- No stock photography, no decorative background images (a subtle flat dotted/grid
  texture per "Overall vibe" above is fine; photographic backgrounds are not).
- If any hobby-related visual touch is added beyond the typographic system, prefer a
  small custom SVG/flat icon over a photo — same flat, bordered treatment as the
  rest of the site.

## Experience list (details/summary)
- Use native `<details>`/`<summary>` — no custom JS. Style the `<summary>` to remove
  the default disclosure triangle; replace with a monospace text cue (e.g. `[+]` /
  `[-]`) that flips on open, consistent with the monospace-as-structure system.
- Summary line: company/role, dates, one-sentence gist — same font size as body text,
  medium weight so it reads as a heading without shouting.
- Expanded content: full paragraph + tech tags, set off with a solid left border
  (accent color, 2-3px) rather than soft indentation alone — visible structure over
  implied nesting.
- Consistent vertical rhythm between entries via a solid 1px divider line (not a
  soft/muted rule) so the list holds together cleanly across 15+ roles.
- Tech tags: flat-bordered pill/rectangle style (border instead of filled soft
  background), monospace text, consistent with the overall flat/bordered system.

## Motion / interactivity
- Minimal by default. Subtle hover states on links are fine. No scroll animations,
  parallax, or ambient JS-driven effects elsewhere on the page.
- Exception, deliberate: the marquee (see "Signature element" below) uses a
  continuous CSS animation. This is the one place motion is used, and it's used
  because it *is* the signature element, not decoration layered on top of one.

## Color system (finalized)
Four category colors, used consistently as a functional code (not decoration) across
both the Skills section and every experience entry's tech tags. Same tag = same
color everywhere on the site.
- **Blue** `#1547e6` (tint `#eaefff`) — Languages
- **Violet** `#6d28d9` (tint `#f0e9fb`) — Messaging
- **Green** `#157a4a` (tint `#e4f3ec`) — Cloud & infra
- **Teal** `#0d7a7a` (tint `#e2f3f3`) — Databases
- **Amber** `#a8710a` — reserved for the "CURRENT" role badge only. Deliberately
  not reused as a category color, so it always means "this is the active role" and
  nothing else.

**No red or red-adjacent hues anywhere on the site.** Red reads as danger/error/
warning in a professional context — even a warm reddish-orange (an earlier terracotta
draft, `#c65d1e`, was cut for this reason) can carry that connotation. This applies
to every element: tags, badges, borders, background texture, and the bold mode's
palette (which uses yellow/black hazard stripes deliberately — yellow reads as
"notable," not "danger," which is why it's fine here and red would not be).

Background texture: a subtle two-color dot pattern (blue + amber, low opacity, small
scale, offset grid) rather than a flat color — echoes the bold mode's two-color dot
background at a much quieter scale, tying the two modes together visually even
though their overall intensity differs sharply.

## Typography (finalized sizing)
Monospace elements are structural, not decorative, and should read with real
presence — not as fine print. All monospace text (nav, section markers, dates,
tech tags, contact box, footer, skill-group labels) is set bold and sized closer to
body text than to captions (roughly 14–16px, vs. the smaller "accent detail" sizing
from earlier drafts). The sans-serif body copy stays at its own comfortable reading
size (17px/1.68 line-height) — the two systems should feel like two confident voices,
not one loud and one whispering.

## Signature element: the marquee
A single scrolling banner, positioned at the very top of the page, is the one
deliberately loud, animated element on an otherwise calm, flat-bordered page —
exactly the "spend your boldness in one place" principle. Construction:
- A diagonal yellow/black hazard-stripe pattern fills the full bar at all times.
- A solid yellow band sits vertically centered and static (it does not move) —
  stripes stay visible above and below it.
- The message text scrolls continuously and seamlessly (no restart jump, achieved
  via a duplicated-text technique, not a start/reset animation) across the yellow
  band only.
- In normal mode, the marquee's own text uses the site's sans-serif font at a modest
  size — loud in color/motion, not in typography. In bold mode (see below) it also
  carries the heavier Verdana treatment consistent with that mode.
- The banner's actual wording lives in CONTENT.md ("Marquee copy"), like all other
  copy on the site — not here.

## Dual mode: Normal ⇄ Time-travel (bold)
The site has two visual presentations of the exact same content:
- **Normal mode** (default): everything specified above in this document — flat,
  bordered, calm, professional-first.
- **Time-travel / bold mode**: the full Neocities-era treatment — dark navy
  background, two-color dot pattern, beveled drop-shadow panels, rotated sticker-
  style section tags, the full yellow/cyan/green/violet/blue palette, Verdana
  throughout. Still governed by the same exclusions as always: no Comic Sans, no
  visitor counters, no "under construction" badges, no guestbook link.

**Critical requirement: single source of content.** The two modes are a *visual*
toggle only. They must never fork the actual content — copy, links, tech tags,
experience entries, all of it comes from CONTENT.md and must be identical in both
modes. Do not maintain two separate content blocks or two HTML documents with
independently-typed copy; a mode switch changes which CSS/decorative treatment
applies to one shared DOM, or duplicates only presentational scaffolding (e.g. the
marquee's stripe markup), never the substantive text. This matters practically, not
just architecturally — during design iteration on this project, the two versions
already drifted out of sync once when built as separate files, and that's the failure
mode this requirement exists to prevent in the real build.

**Switching mechanism:**
- A button, inline within the nav row (alongside about/experience/contact — see
  STRUCTURE.md), in both modes: "⏪ throw me back" (normal → bold) and
  "bring me back 🙏" (bold → normal), each styled consistently with the mode
  it appears in. Not a fixed/floating overlay — it lives in normal document flow as
  part of the nav, so it scrolls with the page and doesn't sit on top of content.
- Keyboard shortcuts `n` and `g` also trigger normal → bold (not required in the
  bold → normal direction, button-only is fine there). Ignore the keypress if focus
  is in a text input/textarea.
- The switch is instant (class toggle + swapped stylesheet or CSS custom properties),
  not a page navigation — no reload, no separate URL, so state and scroll position
  aren't lost.

**Persistence:** store the visitor's chosen mode in `localStorage` (e.g. key
`jozefrocks-mode`, value `normal` or `bold`) and restore it on return visits, ideally
applied before first paint to avoid a flash of the wrong mode. **Default for
first-time visitors with no stored preference is always normal mode** — bold mode is
opt-in only, never the first thing a new visitor (e.g. a recruiter) sees. This
preserves the "safe professional default, delight is discoverable" property that's
the whole point of having two modes instead of picking one.

## Responsive behavior
- Single column on mobile, same content order.
- Touch-friendly link/button sizing.
- Test at common breakpoints (mobile ~375px, tablet ~768px, desktop ~1200px+).
- The mode-switch button lives inline in the nav row and wraps naturally with the
  other nav links on narrow screens (see STRUCTURE.md/DESIGN.md nav behavior) —
  it's never a fixed/floating overlay at any breakpoint.
