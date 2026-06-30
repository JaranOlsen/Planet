# AI Slide Authoring Guide

Planet Slide Lab now supports structured v2 decks in `Public/assets/slides/decks/`.

## Deck Shape

```json
{
  "id": "deck-id",
  "title": "Human readable title",
  "theme": "gut",
  "path": "gut",
  "slides": [
    {
      "template": "quote",
      "title": "Slide title",
      "body": [{ "text": "Slide text", "emphasis": true }],
      "image": "assets/images/background/rippleLake.webp",
      "reveal": "sequence",
      "transition": "crossfade-soft"
    }
  ]
}
```

Nested arrays inside `slides` create vertical subslides, matching the legacy slideshow mechanic.

## Themes And Paths

- `theme: "gut"`: psychotherapy, embodied contact, tactile surfaces, repair language.
- `theme: "heart"`: meditation, spacious composition, stillness, restraint, breath imagery.
- `theme: "head"`: philosophy, clear hierarchy, precise grids, argument and comparison.
- `theme: "aether"` remains the compatibility baseline for older structured decks.
- `path: "gut" | "heart" | "head"` is optional deck metadata for filtering and mindmap integration.

## Allowed Templates

- `opening`
- `quote`
- `full-image`
- `long-text`
- `split-image`
- `title-bullets`
- `bullets`
- `two-column`
- `steps`
- `checklist`
- `statistics`
- `profile`
- `gallery`
- `media`
- `timeline`
- `table`
- `card-grid`
- `call-to-action`
- `word-cloud`
- `quadrant-chart`
- `mindmap-slot`
- `legacy-slide`
- `custom`

Legacy aliases still validate for migrated decks: `quote-vignette`, `half-image-bullets`, `steps-checklist`, `profile-card`, `media-video`, `table-comparison`, `cards`, `principles`, `cta`, and `chart-quadrant`.

## Rules For AI Output

- Do not emit raw HTML, CSS, JavaScript, event handlers, or `<script>` content inside deck JSON.
- Use `assets/...` paths for local files. External media is allowed only as a URL in `media.src`.
- Keep text short enough to fit the slide frame. Prefer 3 to 5 bullets, 2 columns, or one focused quote.
- Use `reveal: "sequence"` for facilitated slides and `reveal: "none"` for static image slides.
- Pick imagery from the matching path: therapy/emotion/mindmap assets for gut, ripple/temple/anapana/restraint assets for heart, ontology/consciousness/philosophy assets for head.
- Use standard interactive templates through their data fields: `words`, `quadrants`, `nodes`, and `links`.
- Use `legacy-slide` only to preserve a specific old slide, for example `{ "template": "legacy-slide", "legacy": { "slideshow": 33, "slide": "3cj" } }`.
- Use `custom` only when a slide needs a small dedicated HTML/CSS/JS app. Keep the code in `Public/assets/slides/custom/{id}/` and reference it with `custom.htmlRef`, `custom.styleRefs`, and `custom.scriptRefs`.
- Keep rough HTML templates in `Public/assets/slides/templates` as migration references; new authoring should use structured JSON.

## Validation

Run:

```sh
npm run validate:slides
```

The validator checks deck JSON, template IDs, forbidden raw-code fields, local asset references, and legacy `contentData` references.
It also checks allowed themes/paths, per-template required fields, item count limits, nested slides, and local assets.

For browser frame checks, start a preview server and run:

```sh
npm run preview
SLIDE_FIT_URL=http://127.0.0.1:4174/Planet/ npm run check:slides:fit
```

Set `CHROME_PATH` if Chrome or Chromium is not in a standard location.
