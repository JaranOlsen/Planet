# Mindmap v2: three paths through the whole person

Status: implemented as the Shift+3 Compass prototype.

Basis: the generated [Full-map inventory](mindmap-structure.md), the
[18-node Simple map](../src/js/data/planetSimpleData.js), and the three-module
course:

1. the therapeutic path;
2. the meditative path;
3. the philosophical/direct path.

## 1. The central idea

The map distinguishes four kinds of thing that the Simple map partly
conflates:

- **Centres** describe where experience is organised: Gut, Heart, and Head.
- **Paths** describe how we work with experience: Befriending, Training, and
  Discovering.
- **Transformations** describe what changes: cleaning up, growing or
  cultivating, and waking up.
- **Fruits** describe what ripens: Peace, Love, and Truth.

The compact teaching principle is:

> **Some things need befriending. Some capacities need training. Some
> confusions need seeing through.**

The map is not three kinds of people travelling three separate roads. It is
three ways of working that each pass through the whole human being.

## 2. Primary geometry

### 2.1 Three meridians: the course paths

| Path | Course module | Characteristic gift |
| --- | --- | --- |
| **Befriending** | Therapy | integration; cleaning up |
| **Training** | Meditation | cultivation; developing capacities |
| **Discovering** | Philosophy and direct inquiry | recognition; waking up |

These are affinities, not exclusive identities. Therapy can train and awaken;
meditation can integrate and awaken; inquiry can expose shadow and transform
capacities.

“Training” should not be treated as an exact synonym for Wilber's “Growing
Up.” Growing Up concerns developmental structures of meaning-making, which
Spiral Dynamics helps illuminate. Meditation may support development without
guaranteeing it.

### 2.2 Three latitude bands: the centres

| Band | Territory |
| --- | --- |
| **Gut** | body, sensation, protection, need, boundary, action, agency |
| **Heart** | emotion, attachment, relationship, belonging, care, value |
| **Head** | perspective, story, meaning, inquiry, discernment, truth |

The bands are centres of emphasis, not levels of worth. North does not mean
that Head is superior to Heart or Gut. The vertical layout provides a readable
course journey while the globe itself implies return, circulation, and mutual
dependence.

### 2.3 Nine crossings

| Centre | Befriending / Therapy | Training / Meditation | Discovering / Inquiry |
| --- | --- | --- | --- |
| **Gut — How do I stand?** | Feel the need; recover choice | Return to the body; steady attention | Meet experience bare; find no controller |
| **Heart — How do I meet?** | Stay with the wound; restore connection | Open into care; hold all equally | Let separation fall; rest as intimacy |
| **Head — How do I see?** | Loosen the story; recover meaning | See change clearly; release clinging | Look for the knower; find no boundary |

The shared latitude is enough to imply that the paths meet the same centre.
Their cross-correction remains part of the teaching rather than becoming a
permanent cage of lines around the globe:

- therapy keeps practice embodied, emotional, and relational;
- meditation supplies ethical discipline, steadiness, and the capacity to
  remain present;
- direct inquiry supplies orientation and reveals what cannot be manufactured
  by repair or training.

## 3. The shared northern horizon

Peace, Love, and Truth appear together in one northern inscription:

> **Peace · Love · Truth — one shared horizon**

- peace without truth can become avoidance;
- truth without love can become cruelty;
- love without peace can become anxious grasping.

The inscription is detached from the vertical threads. These qualities orient
all three paths; they are not path-specific trophies or separate final
achievements.

## 4. Shift+3 node inventory

The Compass contains 12 interactive path nodes plus five cartographic
inscriptions:

- 3 course-path anchors and “Three ways, one whole life” at `-46°`;
- Gut crossings and the text-only Gut question at `-23°`;
- Heart crossings and the text-only Heart label at `0°`;
- Head crossings and the text-only Head question at `23°`;
- the text-only shared horizon at `42°`.

The three paths retain the longitudes of the Simple map:

| Meridian | Longitude | Colour family |
| --- | ---: | --- |
| Befriending | `120°` | therapy pink |
| Training | `0°` | meditation blue |
| Discovering | `-120°` | inquiry gold |

Each crossing names its centre directly, so the full-person structure remains
visible while reading a single path. Coloured solid threads show continuity
within each course path. Gut, Heart, and Head also appear as self-lit questions
on a separate longitude: they have no pin, plaque, shadow, or connection and
therefore read as a human axis rather than a fourth route. There are no arrows:
the geography is a teaching orientation, not a compulsory developmental
sequence.

## 5. How the larger lenses fit

The Compass is the entry layer. The Full map remains the Atlas beneath it.

### Enneagram

The Enneagram naturally overlays the three centre bands:

- Gut: types 8, 9, 1;
- Heart: types 2, 3, 4;
- Head: types 5, 6, 7.

Types are recurrent organisations of attention and defence, not separate
paths. Every type can travel all three meridians.

### Spiral Dynamics

Spiral Dynamics is a developmental lens across the entire globe. It should not
replace the centre latitudes or be collapsed into the meditative path. It can
show how the interpretation and practice of therapy, meditation, and inquiry
change with meaning-making structure.

### Cleaning Up, Growing Up, Waking Up

These remain a cross-cutting Integral lens:

- therapy has unusually rich resources for Cleaning Up;
- developmental work and life participation are primary territories of
  Growing Up;
- contemplative practice and direct recognition have unusually rich resources
  for Waking Up.

All three processes can occur on all three paths and through all three centres.

### Plato and centre-based models

Appetite, Thymos, and Reason can illuminate Gut, Heart, and Head without being
treated as exact synonyms. The same rule applies to later psychological,
contemplative, and Enneagram centre models: they are lenses on the bands, not
the universal ontology beneath them.

## 6. Migration principle for the Full map

The Full map's existing geographic intuition is preserved:

- lower Gut terrain contains needs, emotion, safety, and embodied agency;
- middle Heart terrain contains relationship, ethics, compassion, and
  affective value;
- upper Head terrain contains philosophy, identity, perspective, and direct
  inquiry.

Detailed material should be associated with both a **centre** and one or more
**paths**. A therapy node is not automatically Gut; a meditation node is not
automatically Heart; a philosophical node is not automatically Head.

The first migration task is therefore semantic tagging, not moving every
existing node.

## 7. Acceptance tests

The design succeeds when:

1. Shift+3 immediately reads as three vertical course paths.
2. Gut, Heart, and Head read as shared bands crossed by every path.
3. Colour identifies paths rather than centres.
4. The shared latitudes imply mutual relevance without surrounding the globe
   with cross-path lines.
5. Peace, Love, and Truth read as one shared horizon rather than exclusive
   endpoints.
6. Nothing implies that Head is the goal or that any path completes the other
   two.
7. The map remains understandable without knowing Wilber, the Enneagram, or
   Spiral Dynamics.
