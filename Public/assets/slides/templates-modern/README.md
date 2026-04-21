# Modern Slide Templates

This directory contains a cohesive collection of reference slides crafted to exercise the most common Planet slideshow
patterns. They share a consistent visual language—glassy surfaces, soft gradients, and a cyan accent—so they can be
mixed freely when composing showcases or regression scenarios.

## Usage

Each template is a standalone HTML snippet that can be copied into a slide data folder. Components rely on
`templates.css`, which is automatically imported by `src/css/slides.css`, so no additional setup is required. When a
template requires scripted behaviour (e.g., the WordCloud canvas), an accompanying JavaScript file is provided.

The snippets intentionally include features that stress-test the slideshow system:

- `.appear` stages and `.bullets` to validate staged reveals and automatic font fitting.
- Responsive grids, columns, galleries, timers, and statistics for layout checks.
- Embedded media, images, and canvas-driven content to verify asset loading.
- Callouts, pills, progress bars, and developer notes for accessibility and typography reviews.

Feel free to adapt wording, imagery, or accents to suit specific demos while preserving the shared component classes.
