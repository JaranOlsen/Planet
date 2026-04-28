export const SLIDE_THEME_IDS = ['aether', 'gut', 'heart', 'head'];
export const SLIDE_PATH_IDS = ['gut', 'heart', 'head'];

export const SLIDE_THEME_REGISTRY = [
  {
    id: 'aether',
    label: 'Aether',
    path: null,
    description: 'Shared contemplative baseline for older structured decks.',
  },
  {
    id: 'gut',
    label: 'Gut',
    path: 'gut',
    description: 'Psychotherapy, embodied contact, grounded repair, and emotional process.',
  },
  {
    id: 'heart',
    label: 'Heart',
    path: 'heart',
    description: 'Meditation, stillness, compassion, spaciousness, and training.',
  },
  {
    id: 'head',
    label: 'Head',
    path: 'head',
    description: 'Philosophy, inquiry, ontology, precision, and clear conceptual structure.',
  },
];

export const SLIDE_TEMPLATE_REGISTRY = [
  {
    id: 'opening',
    label: 'Opening',
    requiredAny: ['title'],
    maxItems: { pills: 4, stats: 4 },
  },
  {
    id: 'quote',
    label: 'Quote',
    aliases: ['quote-vignette'],
    requiredAny: ['body', 'quote'],
    maxItems: { body: 3, quote: 3 },
  },
  {
    id: 'long-text',
    label: 'Long Text',
    requiredAny: ['body', 'text'],
    maxItems: { body: 5 },
  },
  {
    id: 'fullscreen-text',
    label: 'Fullscreen Text',
    aliases: ['fullscreen-quote', 'airy-text'],
    requiredAny: ['body', 'text', 'quote'],
    maxItems: { body: 4, quote: 4 },
  },
  {
    id: 'full-image',
    label: 'Full Image',
    requiredAny: ['image', 'src'],
    maxItems: { body: 2 },
  },
  {
    id: 'split-image',
    label: 'Split Image',
    aliases: ['half-image-bullets'],
    requiredAny: ['image'],
    maxItems: { body: 2, bullets: 6, items: 6 },
  },
  {
    id: 'legacy-panel',
    label: 'Legacy Panel',
    aliases: ['image-title-panel', 'classic-panel'],
    requiredAny: ['image', 'body', 'bullets', 'items'],
    maxItems: { body: 4, bullets: 8, items: 8 },
  },
  {
    id: 'title-bullets',
    label: 'Title Bullets',
    requiredAny: ['title', 'bullets', 'items'],
    maxItems: { bullets: 6, items: 6 },
  },
  {
    id: 'bullets',
    label: 'Bullets',
    requiredAny: ['bullets', 'items'],
    maxItems: { bullets: 7, items: 7 },
  },
  {
    id: 'dense-bullets',
    label: 'Dense Bullets',
    aliases: ['bullet-grid', 'dense-list'],
    requiredAny: ['groups', 'columns', 'items', 'bullets'],
    maxItems: { groups: 4, columns: 4, items: 16, bullets: 16 },
  },
  {
    id: 'two-column',
    label: 'Two Column',
    requiredAny: ['columns'],
    maxItems: { columns: 3 },
  },
  {
    id: 'steps',
    label: 'Steps',
    aliases: ['steps-checklist'],
    requiredAny: ['steps', 'items'],
    maxItems: { steps: 6, items: 6 },
  },
  {
    id: 'checklist',
    label: 'Checklist',
    requiredAny: ['items', 'checklist', 'steps'],
    maxItems: { items: 7, checklist: 7, steps: 7 },
  },
  {
    id: 'statistics',
    label: 'Statistics',
    requiredAny: ['stats'],
    maxItems: { stats: 6 },
  },
  {
    id: 'profile',
    label: 'Profile',
    aliases: ['profile-card'],
    requiredAny: ['body', 'image', 'bullets', 'items'],
    maxItems: { body: 2, bullets: 5, items: 5 },
  },
  {
    id: 'gallery',
    label: 'Gallery',
    requiredAny: ['images'],
    maxItems: { images: 8 },
  },
  {
    id: 'media',
    label: 'Media',
    aliases: ['media-video'],
    requiredAny: ['media', 'src', 'video'],
  },
  {
    id: 'timeline',
    label: 'Timeline',
    requiredAny: ['timeline', 'items', 'events'],
    maxItems: { timeline: 6, items: 6, events: 6 },
  },
  {
    id: 'table',
    label: 'Table',
    aliases: ['table-comparison'],
    requiredAny: ['rows', 'table'],
    maxItems: { rows: 6 },
  },
  {
    id: 'card-grid',
    label: 'Card Grid',
    aliases: ['cards', 'principles'],
    requiredAny: ['cards', 'items'],
    maxItems: { cards: 6, items: 6 },
  },
  {
    id: 'call-to-action',
    label: 'Call To Action',
    aliases: ['cta'],
    requiredAny: ['title', 'body', 'action'],
  },
  {
    id: 'word-cloud',
    label: 'Word Cloud',
    interactive: true,
    requiredAny: ['words', 'list'],
    maxItems: { words: 36, list: 36 },
  },
  {
    id: 'quadrant-chart',
    label: 'Quadrant Chart',
    aliases: ['chart-quadrant'],
    interactive: true,
    requiredAny: ['quadrants'],
    maxItems: { quadrants: 4 },
  },
  {
    id: 'mindmap-slot',
    label: 'Mindmap Slot',
    interactive: true,
    requiredAny: ['nodes'],
    maxItems: { nodes: 9, links: 12 },
  },
  {
    id: 'legacy-slide',
    label: 'Legacy Slide',
    interactive: true,
    requiredAny: ['legacy'],
  },
  {
    id: 'custom',
    label: 'Custom Interactive',
    interactive: true,
    requiredAny: ['custom'],
  },
];

const templateById = new Map(SLIDE_TEMPLATE_REGISTRY.map((template) => [template.id, template]));
const aliasToId = new Map();

SLIDE_TEMPLATE_REGISTRY.forEach((template) => {
  (template.aliases || []).forEach((alias) => {
    aliasToId.set(alias, template.id);
  });
});

export function getSlideTemplateIds() {
  return SLIDE_TEMPLATE_REGISTRY.map((template) => template.id);
}

export function getAllowedTemplateIds() {
  return [
    ...getSlideTemplateIds(),
    ...Array.from(aliasToId.keys()),
  ];
}

export function getSlideThemeIds() {
  return SLIDE_THEME_IDS.slice();
}

export function getSlidePathIds() {
  return SLIDE_PATH_IDS.slice();
}

export function getSlideTemplateDefinition(template) {
  return templateById.get(normaliseTemplateId(template));
}

export function normaliseTemplateId(template) {
  if (templateById.has(template)) return template;
  if (aliasToId.has(template)) return aliasToId.get(template);
  return 'long-text';
}

export function isKnownTemplateId(template) {
  return templateById.has(template) || aliasToId.has(template);
}

export function normaliseThemeId(theme) {
  return SLIDE_THEME_IDS.includes(theme) ? theme : 'aether';
}

export function isKnownThemeId(theme) {
  return SLIDE_THEME_IDS.includes(theme);
}

export function isKnownPathId(path) {
  return SLIDE_PATH_IDS.includes(path);
}

export function isInteractiveTemplate(template) {
  return !!getSlideTemplateDefinition(template)?.interactive;
}

export function createSampleDeck(template = 'opening', theme = 'gut') {
  const normalisedTheme = normaliseThemeId(theme);
  const normalisedTemplate = normaliseTemplateId(template);
  return {
    id: `sample-${normalisedTheme}-${normalisedTemplate}`,
    title: `${themeTitle(normalisedTheme)} ${templateTitle(normalisedTemplate)} Sample`,
    theme: normalisedTheme,
    path: SLIDE_PATH_IDS.includes(normalisedTheme) ? normalisedTheme : undefined,
    slides: [createSampleSlide(normalisedTemplate, normalisedTheme)],
  };
}

export function createSampleSlide(template = 'opening', theme = 'gut') {
  const normalisedTemplate = normaliseTemplateId(template);
  const tone = themeTone(theme);
  const common = {
    template: normalisedTemplate,
    overline: tone.overline,
    title: templateTitle(normalisedTemplate),
    reveal: 'sequence',
    transition: 'crossfade-soft',
  };

  switch (normalisedTemplate) {
    case 'opening':
      return {
        ...common,
        title: tone.openingTitle,
        subtitle: tone.openingSubtitle,
        image: tone.heroImage,
        pills: tone.pills,
        stats: tone.stats,
      };
    case 'quote':
      return {
        ...common,
        image: tone.softImage,
        body: [
          { text: tone.quote, emphasis: true },
          { text: tone.quoteSupport },
        ],
        source: tone.source,
      };
    case 'long-text':
      return {
        ...common,
        body: [
          { text: tone.longText },
          { text: tone.longTextEmphasis, emphasis: true },
        ],
      };
    case 'fullscreen-text':
      return {
        ...common,
        image: tone.softImage,
        title: 'Fullscreen Text',
        showChrome: false,
        textAlign: 'justify',
        body: tone.longText,
      };
    case 'full-image':
      return {
        ...common,
        image: tone.heroImage,
        body: tone.imageCaption,
      };
    case 'split-image':
      return {
        ...common,
        image: tone.splitImage,
        body: tone.splitBody,
        bullets: tone.bullets,
      };
    case 'legacy-panel':
      return {
        ...common,
        overline: `${tone.label} Path`,
        title: 'Classic Panel',
        image: tone.splitImage,
        backgroundColor: theme === 'heart' ? 'rgb(27, 58, 70)' : theme === 'head' ? 'rgb(67, 57, 34)' : 'rgb(81, 56, 51)',
        imagePosition: '50% 45%',
        body: [
          { text: tone.longText.split('.')[0] + '.', strong: true },
          { text: tone.splitBody },
        ],
        bullets: tone.bullets.slice(0, 3),
      };
    case 'title-bullets':
    case 'bullets':
      return {
        ...common,
        body: tone.bulletIntro,
        bullets: tone.bullets,
      };
    case 'dense-bullets':
      return {
        ...common,
        title: 'Dense Practice Map',
        groups: [
          { title: 'Notice', items: tone.bullets.slice(0, 3) },
          { title: 'Stabilise', items: tone.checklist.slice(0, 3) },
          { title: 'Respond', items: tone.steps.slice(0, 3).map((step) => step.title || step.text || step) },
        ],
      };
    case 'two-column':
      return {
        ...common,
        subtitle: tone.columnSubtitle,
        columns: tone.columns,
      };
    case 'steps':
      return {
        ...common,
        body: tone.stepsIntro,
        steps: tone.steps,
      };
    case 'checklist':
      return {
        ...common,
        body: tone.checklistIntro,
        items: tone.checklist,
      };
    case 'statistics':
      return {
        ...common,
        stats: tone.stats,
      };
    case 'profile':
      return {
        ...common,
        image: tone.profileImage,
        body: tone.profileBody,
        bullets: tone.profileBullets,
      };
    case 'gallery':
      return {
        ...common,
        images: tone.gallery,
      };
    case 'media':
      return {
        ...common,
        body: tone.mediaBody,
        media: {
          src: tone.mediaSrc,
          title: tone.mediaTitle,
        },
      };
    case 'timeline':
      return {
        ...common,
        body: tone.timelineIntro,
        timeline: tone.timeline,
      };
    case 'table':
      return {
        ...common,
        headers: tone.tableHeaders,
        rows: tone.tableRows,
      };
    case 'card-grid':
      return {
        ...common,
        body: tone.cardIntro,
        cards: tone.cards,
      };
    case 'call-to-action':
      return {
        ...common,
        body: tone.ctaBody,
        action: tone.ctaAction,
        note: tone.ctaNote,
      };
    case 'word-cloud':
      return {
        ...common,
        words: tone.words,
      };
    case 'quadrant-chart':
      return {
        ...common,
        quadrants: tone.quadrants,
      };
    case 'mindmap-slot':
      return {
        ...common,
        nodes: tone.nodes,
        links: tone.links,
      };
    case 'legacy-slide':
      return {
        ...common,
        title: 'Legacy Interactive Slide',
        legacy: {
          slideshow: 33,
          slide: '3cj',
        },
      };
    case 'custom':
      return {
        ...common,
        title: 'Custom Interactive Slide',
        custom: {
          id: 'sample-custom-slide',
          htmlRef: 'assets/slides/custom/sample-custom-slide/index.html',
          styleRefs: ['assets/slides/custom/sample-custom-slide/style.css'],
          scriptRefs: [
            {
              src: 'assets/slides/custom/sample-custom-slide/module.js',
              type: 'module',
              optional: true,
            },
          ],
        },
      };
    default:
      return {
        ...common,
        body: 'Template sample.',
      };
  }
}

function templateTitle(template) {
  return String(template || '')
    .split('-')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ');
}

function themeTitle(theme) {
  return `${String(theme || 'aether').charAt(0).toUpperCase()}${String(theme || 'aether').slice(1)}`;
}

function themeTone(theme) {
  const tones = {
    gut: {
      overline: 'Gut Path',
      openingTitle: 'The Path Of Befriending',
      openingSubtitle: 'Embodied psychotherapy, emotional contact, and grounded repair.',
      heroImage: 'assets/images/background/therapy.webp',
      softImage: 'assets/images/background/EFT.webp',
      splitImage: 'assets/images/emotion/integration.webp',
      profileImage: 'assets/images/emotion/self-compassion.webp',
      pills: ['Body', 'Emotion', 'Need', 'Repair'],
      source: 'Psychotherapy path',
      quote: 'Healing begins when the body no longer has to hold the story alone.',
      quoteSupport: 'Use this family for emotions, needs, alliance, parts, and repair.',
      longText: 'Gut slides should feel safe, tactile, and close to lived experience.',
      longTextEmphasis: 'Prefer concrete language, warm contrast, and enough structure for facilitation.',
      imageCaption: 'A full-image slide can make emotional context available before the concept arrives.',
      splitBody: 'Use split-image slides when an embodied image needs to carry half the meaning.',
      bulletIntro: 'A grounded teaching frame keeps emotional material clear without becoming clinical.',
      bullets: ['Name the protective move.', 'Track the body response.', 'Find the unmet need.', 'Offer a reparative next step.'],
      columnSubtitle: 'Separate process from content without losing warmth.',
      columns: [
        { title: 'Contact', body: 'What is felt now, in the body and in the relationship?' },
        { title: 'Meaning', body: 'What need, wound, or protective strategy is organizing the moment?' },
      ],
      stepsIntro: 'Therapy-oriented slides often need a sequence that can be followed slowly.',
      steps: ['Arrive and orient.', 'Name what is happening.', 'Stay with one emotion.', 'Listen for the need.', 'Integrate the response.'],
      checklistIntro: 'Use this before emotionally focused practice or live facilitation.',
      checklist: ['Consent is explicit.', 'Affect is within range.', 'Body cues are visible.', 'Repair language is ready.'],
      stats: [{ value: '3', label: 'signals' }, { value: '5', label: 'needs' }, { value: '1', label: 'next step' }],
      profileBody: 'Profile slides can hold a part, emotion, client pattern, practice, or therapeutic stance.',
      profileBullets: ['Felt sense', 'Protective function', 'Possible repair'],
      gallery: [
        { src: 'assets/images/emotion/distress.webp', caption: 'Distress' },
        { src: 'assets/images/emotion/need.webp', caption: 'Need' },
        { src: 'assets/images/emotion/assertion.webp', caption: 'Assertion' },
      ],
      mediaBody: 'Media slides can hold practice clips, psychoeducation, or guided demonstrations.',
      mediaSrc: 'https://www.youtube-nocookie.com/embed/z_Gy3mTztgg',
      mediaTitle: 'Therapy sample media',
      timelineIntro: 'Show the movement from protection to integration.',
      timeline: [
        { title: 'Activation', body: 'Something touches the old pattern.' },
        { title: 'Protection', body: 'The system tries to stay safe.' },
        { title: 'Contact', body: 'Emotion and need become available.' },
        { title: 'Repair', body: 'A new response can be practiced.' },
      ],
      tableHeaders: ['Signal', 'Meaning', 'Response'],
      tableRows: [['Tension', 'Threat', 'Slow down'], ['Tears', 'Need', 'Make room'], ['Collapse', 'Too much', 'Resource']],
      cardIntro: 'Cards are useful for principles, interventions, parts, or process markers.',
      cards: [
        { title: 'Safety', body: 'The nervous system gets a vote.' },
        { title: 'Contact', body: 'Stay close to what is alive.' },
        { title: 'Repair', body: 'Offer what was missing.' },
      ],
      ctaBody: 'Choose one felt signal and let the slide support a short embodied inquiry.',
      ctaAction: { label: 'Begin Practice' },
      ctaNote: 'Keep the next step small enough to be felt.',
      words: [['body', 9], ['need', 8], ['safety', 7], ['contact', 6], ['repair', 6], ['emotion', 5], ['warmth', 4]],
      quadrants: [
        { x: 250, y: 155, label: 'High Arousal' },
        { x: 750, y: 155, label: 'Contact' },
        { x: 250, y: 435, label: 'Protection' },
        { x: 750, y: 435, label: 'Integration' },
      ],
      nodes: [
        { id: 'root', label: 'Need', x: 500, y: 260, r: 58 },
        { id: 'body', label: 'Body', x: 270, y: 160 },
        { id: 'emotion', label: 'Emotion', x: 730, y: 160 },
        { id: 'repair', label: 'Repair', x: 500, y: 420 },
      ],
      links: [{ from: 'root', to: 'body' }, { from: 'root', to: 'emotion' }, { from: 'root', to: 'repair' }],
    },
    heart: {
      overline: 'Heart Path',
      openingTitle: 'The Path Of Training',
      openingSubtitle: 'Meditation, compassion, stillness, and freedom from the causes of suffering.',
      heroImage: 'assets/images/background/rippleLake.webp',
      softImage: 'assets/images/background/temple.webp',
      splitImage: 'assets/images/anapana/lovethebreath.webp',
      profileImage: 'assets/images/restraint/meditation.webp',
      pills: ['Breath', 'Stillness', 'Kindness', 'Release'],
      source: 'Meditation path',
      quote: 'The heart settles when experience is allowed to rise and pass without possession.',
      quoteSupport: 'Use this family for breath, virtue, samadhi, compassion, and release.',
      longText: 'Heart slides should feel spacious, quiet, and invitational.',
      longTextEmphasis: 'Let fewer words do more work; the layout should leave room for practice.',
      imageCaption: 'A still image can cue the nervous system before a meditation instruction begins.',
      splitBody: 'Use image and text together when a practice needs both atmosphere and precision.',
      bulletIntro: 'Meditation teaching benefits from simple steps and plenty of silence around them.',
      bullets: ['Soften the body.', 'Gather attention.', 'Notice the tone of mind.', 'Release what does not need holding.'],
      columnSubtitle: 'Hold method and attitude together.',
      columns: [
        { title: 'Training', body: 'Repeated, gentle return to the chosen object.' },
        { title: 'Release', body: 'Letting clinging fade without forcing experience away.' },
      ],
      stepsIntro: 'Use steps for guided practice and meditative progression.',
      steps: ['Sit upright.', 'Feel the breath.', 'Notice wandering.', 'Return without blame.', 'Rest in awareness.'],
      checklistIntro: 'Use this before practice instructions or silent periods.',
      checklist: ['Posture is supported.', 'Breath is available.', 'Tone is kind.', 'Enough silence is left.'],
      stats: [{ value: '4', label: 'foundations' }, { value: '7', label: 'factors' }, { value: '1', label: 'breath' }],
      profileBody: 'Profile slides can hold practices, qualities, teachers, hindrances, or contemplative maps.',
      profileBullets: ['Object', 'Attitude', 'Release'],
      gallery: [
        { src: 'assets/images/restraint/breath.webp', caption: 'Breath' },
        { src: 'assets/images/restraint/retreat.webp', caption: 'Retreat' },
        { src: 'assets/images/background/temple.webp', caption: 'Temple' },
      ],
      mediaBody: 'Media slides can hold guided practices, talks, chants, or silent timers.',
      mediaSrc: 'https://www.youtube-nocookie.com/embed/z_Gy3mTztgg',
      mediaTitle: 'Meditation sample media',
      timelineIntro: 'Show a contemplative movement without overcrowding it.',
      timeline: [
        { title: 'Virtue', body: 'Life becomes less tangled.' },
        { title: 'Calm', body: 'Attention gathers and steadies.' },
        { title: 'Insight', body: 'Experience is seen more clearly.' },
        { title: 'Release', body: 'Clinging softens.' },
      ],
      tableHeaders: ['Quality', 'Training', 'Fruit'],
      tableRows: [['Mindfulness', 'Remember', 'Clarity'], ['Samadhi', 'Gather', 'Stability'], ['Wisdom', 'See', 'Release']],
      cardIntro: 'Cards are useful for practices, qualities, hindrances, or reminders.',
      cards: [
        { title: 'Sila', body: 'A life that supports calm.' },
        { title: 'Samadhi', body: 'Attention resting in one place.' },
        { title: 'Panna', body: 'Seeing without clinging.' },
      ],
      ctaBody: 'Let the slide become a doorway into one minute of practice.',
      ctaAction: { label: 'Enter Silence' },
      ctaNote: 'No need to improve the moment before noticing it.',
      words: [['breath', 9], ['stillness', 8], ['kindness', 7], ['release', 7], ['attention', 6], ['presence', 5], ['ease', 4]],
      quadrants: [
        { x: 250, y: 155, label: 'Energy' },
        { x: 750, y: 155, label: 'Joy' },
        { x: 250, y: 435, label: 'Calm' },
        { x: 750, y: 435, label: 'Equanimity' },
      ],
      nodes: [
        { id: 'root', label: 'Practice', x: 500, y: 260, r: 58 },
        { id: 'breath', label: 'Breath', x: 270, y: 160 },
        { id: 'kindness', label: 'Kindness', x: 730, y: 160 },
        { id: 'release', label: 'Release', x: 500, y: 420 },
      ],
      links: [{ from: 'root', to: 'breath' }, { from: 'root', to: 'kindness' }, { from: 'root', to: 'release' }],
    },
    head: {
      overline: 'Head Path',
      openingTitle: 'The Path Of Realisation',
      openingSubtitle: 'Philosophy, ontology, inquiry, and the clear seeing of what is true.',
      heroImage: 'assets/images/background/solarsystem.webp',
      softImage: 'assets/images/consciousness/venn.webp',
      splitImage: 'assets/images/features/idealism.webp',
      profileImage: 'assets/images/features/headLogo.webp',
      pills: ['Question', 'View', 'Method', 'Truth'],
      source: 'Philosophy path',
      quote: 'A clear view does not end mystery; it removes the confusion that obscures it.',
      quoteSupport: 'Use this family for ontology, epistemology, argument, models, and inquiry.',
      longText: 'Head slides should make distinctions crisp while preserving the larger question.',
      longTextEmphasis: 'Prefer exact terms, visible structure, and clean comparison surfaces.',
      imageCaption: 'A full-image slide can open a philosophical horizon before analysis begins.',
      splitBody: 'Use split-image slides when a model or concept needs a visual anchor.',
      bulletIntro: 'Philosophy slides need explicit distinctions and stable hierarchy.',
      bullets: ['Define the question.', 'Separate assumptions from observations.', 'Compare live options.', 'Name what would change the view.'],
      columnSubtitle: 'Make the tension visible before trying to resolve it.',
      columns: [
        { title: 'Concept', body: 'What distinction is doing the explanatory work?' },
        { title: 'Experience', body: 'What must any adequate view still account for?' },
      ],
      stepsIntro: 'Use steps for inquiry, argument, and conceptual unpacking.',
      steps: ['State the claim.', 'Expose the premise.', 'Test the implication.', 'Compare alternatives.', 'Return to experience.'],
      checklistIntro: 'Use this before argument or model slides.',
      checklist: ['Terms are defined.', 'Scope is bounded.', 'Alternatives are named.', 'Inference is visible.'],
      stats: [{ value: '2', label: 'views' }, { value: '4', label: 'tests' }, { value: '1', label: 'question' }],
      profileBody: 'Profile slides can hold a thinker, concept, school, claim, or mode of knowing.',
      profileBullets: ['Claim', 'Assumption', 'Consequence'],
      gallery: [
        { src: 'assets/images/features/idealism.webp', caption: 'Idealism' },
        { src: 'assets/images/features/physicalism.webp', caption: 'Physicalism' },
        { src: 'assets/images/features/panpsychism.webp', caption: 'Panpsychism' },
      ],
      mediaBody: 'Media slides can hold talks, diagrams, debate clips, or explanatory visuals.',
      mediaSrc: 'https://www.youtube-nocookie.com/embed/z_Gy3mTztgg',
      mediaTitle: 'Philosophy sample media',
      timelineIntro: 'Show the movement of an argument or paradigm shift.',
      timeline: [
        { title: 'Question', body: 'A problem becomes explicit.' },
        { title: 'Model', body: 'A framework makes it intelligible.' },
        { title: 'Anomaly', body: 'The framework meets its limit.' },
        { title: 'Revision', body: 'A clearer view becomes possible.' },
      ],
      tableHeaders: ['View', 'Strength', 'Risk'],
      tableRows: [['Physicalism', 'Public method', 'Reduction'], ['Idealism', 'Experience first', 'Inflation'], ['Dualism', 'Intuitive split', 'Bridge problem']],
      cardIntro: 'Cards are useful for claims, definitions, schools, or argument moves.',
      cards: [
        { title: 'Ontology', body: 'What exists?' },
        { title: 'Epistemology', body: 'How can it be known?' },
        { title: 'Method', body: 'What checks the claim?' },
      ],
      ctaBody: 'Choose one assumption and test whether the next slide still needs it.',
      ctaAction: { label: 'Start Inquiry' },
      ctaNote: 'Clarity is a practice, not just a conclusion.',
      words: [['truth', 9], ['inquiry', 8], ['ontology', 7], ['clarity', 7], ['view', 6], ['method', 5], ['reason', 4]],
      quadrants: [
        { x: 250, y: 155, label: 'Direct' },
        { x: 750, y: 155, label: 'Conceptual' },
        { x: 250, y: 435, label: 'Private' },
        { x: 750, y: 435, label: 'Public' },
      ],
      nodes: [
        { id: 'root', label: 'Question', x: 500, y: 260, r: 58 },
        { id: 'view', label: 'View', x: 270, y: 160 },
        { id: 'method', label: 'Method', x: 730, y: 160 },
        { id: 'truth', label: 'Truth', x: 500, y: 420 },
      ],
      links: [{ from: 'root', to: 'view' }, { from: 'root', to: 'method' }, { from: 'root', to: 'truth' }],
    },
  };

  const themeId = normaliseThemeId(theme);
  if (themeId === 'aether') {
    return {
      ...tones.heart,
      overline: 'Aether Baseline',
      openingTitle: 'Aether Structured Slides',
      openingSubtitle: 'Shared contemplative baseline for older structured decks.',
      source: 'Aether baseline',
    };
  }
  return tones[themeId] || tones.heart;
}
