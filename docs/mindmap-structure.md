# Planet Mindmap Structure

Generated from `src/js/data/planetData.js` on 2026-07-02. This is an operational map for understanding, editing, and remembering the Planet mindmap structure. It combines source-data coverage with a visual/geographic reading of the current layout.

## Coverage Summary

| Item | Count / status |
| --- | ---: |
| Nodes in `planetTagData` | 546 |
| Nodes with slide decks | 146 |
| Developer-only slide nodes | 6 |
| Normal connection rows / edges | 546 / 468 |
| Arrowed connection rows / edges | 546 / 40 |
| Dashed connection rows / edges | 546 / 83 |
| Tunnel connection rows / edges | 546 / 0 |
| Connection integrity | all rows source-aligned; all targets resolve |

## How To Read This

- `Ref` is a stable-in-this-file index reference (`N000`, `N001`, etc.) assigned from `planetTagData` order. Use the adjacent full `id` when editing source arrays.
- `lat` / `lng` are the current sphere coordinates. Geographic proximity often carries meaning even when there is no explicit line. The longitude seam wraps: `lng -180` is adjacent to `lng +180` on the globe.
- `normal`, `arrowed`, and `dashed` preserve the three connection tables. Curved connection objects are marked with `curve a,b`.
- Nodes absent from the connection ledger have no outgoing connection in any typed table; they are still present in the full inventory.

## Visual / Geographic Reading

I inspected a rendered lon/lat view of all 546 nodes in the browser. The large-scale structure reads like this:

### Developer-only north cap

- Geography: lat 72-75.5, lng -121/0/120.
- Anchors: N000 the essence of / love / meaning; N001 the essence of / wisdom / will; N002 the essence of / salvation / peace; N003 Rewiring the gut; N004 Rewiring the heart; N005 Rewiring the head.
- Reading: Experimental essence decks and template/example decks sit above the production mindmap. They are spatially aligned with the gut/heart/head poles but flagged dev-only through slide access.

### Western truth, wisdom, ontology, and understanding highlands

- Geography: lat 18-69, lng -155 to -72.
- Anchors: N017 Transcendent / Truth; N019 Conventional / truth; N278 Ontologies; N031 Monist ontologies; N026 Dualist ontologies; N032 Idealism; N034 Panpsychism; N035 Physicalism; N053 Direct / experience-based / understanding; N056 Levels of / understanding.
- Reading: This is the head/wisdom terrain: conventional vs transcendent truth, monist/dualist ontology, emergence, and levels/methods of understanding. The visual cluster is denser than its explicit lines, especially around science/theory nodes.

### Central-north liberation and unconditional love

- Geography: lat 55-69, lng -12 to +5.
- Anchors: N042 Unconditional / Love; N046 Liberation; N043 Atammayatā; N044 Suññatā; N045 Tathātā; N048 delusion; N049 hatred; N050 greed.
- Reading: A compact vertical cluster: unconditional love, Buddhist liberation language, and release from delusion/hatred/greed.

### North-east peace and transcendence spine

- Geography: lat 5-69, lng 120-148.
- Anchors: N006 Unshakeable / Peace; N007 Transcendence; N008 Existential exploration / / Insight meditation; N009 Deep states of calm; N307 Self- / Transcendence / needs; N539 Inner child / work.
- Reading: This is the salvation/peace pole. It descends from unshakeable peace through transcendence/insight/calm into self-transcendence needs and vulnerability work.

### Western identity and re-uniting bridge

- Geography: lat 8-51, lng -151 to -118.
- Anchors: N115 Re-uniting; N116 Gut; N129 Heart; N087 Brain; N090 Identification; N091 Witnessing; N098 The fundamental nature / of awareness.
- Reading: This area visually links gut, heart, and brain perspectives with identification/witnessing and awareness inquiry.

### Western equatorial science and paradigm field

- Geography: lat -21 to 32, lng -145 to -80.
- Anchors: N057 Analysis / questioning; N058 Open-mindedness; N059 Observation; N068 Strategies for / Understanding; N072 Phases of / paradigm change; N453 Characteristics of a good theory; N464 Limitations of any theory.
- Reading: This is the practical epistemology/science field. Many small theory-quality and paradigm nodes are geographically meaningful even where direct lines are sparse.

### Central Buddhist practice field

- Geography: lat -10 to 40, lng -35 to +39.
- Anchors: N185 Samādhi; N281 Pañña; N189 Breath; N192 Open awareness; N283 Four noble truths; N300 Six sense-spheres; N285 Body contemplation; N478 Hindrances.
- Reading: The largest practice anchors sit here: samādhi, pañña, breath/open awareness, noble truths, sense-spheres, body contemplation, hindrances, and detailed path lists.

### South-central heart/love transformation

- Geography: lat -41 to -2, lng -6 to +33.
- Anchors: N331 Path of the Heart; N153 Sīla; N162 Self-compassion; N158 Loving-kindness; N159 Compassion; N160 Equanimity; N161 Sympathetic joy; N139 Strategies for / happiness / love.
- Reading: This is the heart-practice terrain. It visually bridges Buddhist ethical practice with compassion, loving-kindness, and applied relational work.

### Eastern emotion, needs, and EFT/EFM work

- Geography: lat -55 to +25, lng 70-153.
- Anchors: N240 Path of the Gut; N238 The Beast - / Appetite; N310 Physiological / needs; N545 Safety / needs; N309 Love and / Esteem / needs; N307 Self- / Transcendence / needs; N323 Empathy; N501 Primary / adaptive / emotions; N543 Emotion-Focused / Mindfulness.
- Reading: This is the gut/needs/emotion side: needs hierarchies, attachment/safety/physiology, emotion-focused therapy categories, and EFM method nodes.

### Far-edge wraparound story/teaching arc

- Geography: lng near -180 and +175, lat -85 to +75.
- Anchors: N402 #41 Awakening; N397 #36 Belonging To Nature; N385 #24 Views; N373 #12 Vulnerable Strength; N362 #1 Just Listen.
- Reading: On the globe, -180 and +180 are adjacent. In flat views this appears split across both edges, but semantically it forms a vertical wraparound arc of numbered teaching/story slides.

### Southern archetypal root triad

- Geography: lat -85 to -63, lng -121/0/120.
- Anchors: N133 The Human - / Reason; N136 The Lion - / Thymos; N238 The Beast - / Appetite; N134 What matters to / your head; N135 What matters to / your heart; N237 What matters to / your gut.
- Reading: The bottom of the map is a three-pole foundation: head/reason, heart/thymos, gut/appetite, with mode nodes leading upward into the main terrains.

## Connected Components

Connection components are computed by treating normal, arrowed, and dashed edges as undirected for this summary. This helps separate line-connected structures from purely geographic neighborhoods.

| Component | Nodes | Main anchors |
| ---: | ---: | --- |
| 1 | 385 | N319 Path of the Head; N331 Path of the Heart; N240 Path of the Gut; N153 Sīla; N185 Samādhi; N281 Pañña |
| 2 | 42 | N362 #1 Just Listen; N363 #2 Distracted By Truth; N364 #3 Breath; N365 #4 Growing Like A Tree; N366 #5 Innocent; N367 #6 Choiceless Awareness |
| 3 | 32 | N017 Transcendent / Truth; N019 Conventional / truth; N018 must be reduced to; N020 must transcend; N028 to be communicated; N029 to realise |
| 4 | 16 | N429 1. Knowledge of / mental and material / processes; N430 2. Knowledge of / cause and effect; N431 3. Knowledge of / the Three Characteristics; N432 4. Knowledge of / arising and / passing away; N433 5. Knowledge of / dissolution; N434 6. Knowledge of / fearfulness |
| 5 | 13 | N006 Unshakeable / Peace; N007 Transcendence; N008 Existential exploration / / Insight meditation; N009 Deep states of calm; N306 Motivation split; N318 Meaning protest |
| 6 | 12 | N343 Avijjā; N344 Saṅkhāra; N345 Viññāṇa; N346 Nāmarūpa; N347 Saḷāyatana; N348 Phassa |
| 7 | 11 | N323 Empathy; N322 Wisdom; N324 Presence; N326 Attunement; N328 Unconditional / positive regard; N404 Authenticity |
| 8 | 10 | N305 Acceptance and agency; N311 Assertive anger / / self-compassion; N312 Grief / hurt; N313 Rejecting anger; N314 Global distress; N315 Fear / shame |
| 9 | 5 | N307 Self- / Transcendence / needs; N308 Self- / Actualisation / needs; N309 Love and / Esteem / needs; N310 Physiological / needs; N545 Safety / needs |
| 10 | 3 | N000 the essence of / love / meaning; N001 the essence of / wisdom / will; N002 the essence of / salvation / peace |
| 11 | 3 | N003 Rewiring the gut; N004 Rewiring the heart; N005 Rewiring the head |
| 12 | 2 | N303 Matter; N304 Consciousness |
| 13 | 1 | N302 Nature of fundamental reality |
| 14 | 1 | N445 1. Right view |
| 15 | 1 | N446 2. Right intention |
| 16 | 1 | N447 3. Right action |
| 17 | 1 | N448 4. Right speech |
| 18 | 1 | N449 5. Right livelihood |
| 19 | 1 | N450 6. Right effort |
| 20 | 1 | N451 7. Right mindfulness |
| 21 | 1 | N452 8. Right samādhi |
| 22 | 1 | N499 Secondary / emotions |
| 23 | 1 | N500 Primary / maladaptive / emotions |
| 24 | 1 | N501 Primary / adaptive / emotions |

## Major Geographic Anchors

These are the largest nodes (`size >= 50`). `Nearby visible nodes` are computed from sphere coordinates and may include meaningful neighbors that are not explicitly connected by a line.

| Ref | Anchor | lat | lng | size | slides | Direct normal out | Nearby visible nodes |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| N042 | Unconditional / Love | 69 | 0 | 50 | - | N043 Atammayatā; N046 Liberation | N004 Rewiring the heart (3 deg); N043 Atammayatā (3.1 deg); N044 Suññatā (5.5 deg); N000 the essence of / love / meaning (6.5 deg); N045 Tathātā (7.8 deg); N050 greed (8.2 deg); N047 from (10.1 deg); N046 Liberation (11.2 deg) |
| N006 | Unshakeable / Peace | 69 | 120 | 50 | - | N007 Transcendence curve 0.2,0.5 | N003 Rewiring the gut (3 deg); N002 the essence of / salvation / peace (6.5 deg); N007 Transcendence (14 deg); N402 #41 Awakening (18.6 deg); N401 #40 Road to Here (18.9 deg); N403 #42 (19.3 deg); N400 #39 Illusion (20.3 deg); N399 #38 One (23.2 deg) |
| N017 | Transcendent / Truth | 67.5 | -121 | 50 | 235 | N030 Unity | N005 Rewiring the head (4.5 deg); N030 Unity (5.3 deg); N016 why important? (5.6 deg); N018 must be reduced to (7 deg); N029 to realise (7 deg); N001 the essence of / wisdom / will (8 deg); N010 real meaning (9.4 deg); N014 salvation (10 deg) |
| N046 | Liberation | 58.9 | -10.9 | 60 | - | N047 from; N051 Fundamental / perspective change; N281 Pañña; N407 saṅkhāra / vs. / asaṅkhāra | N407 saṅkhāra / vs. / asaṅkhāra (2.9 deg); N045 Tathātā (4 deg); N047 from (5.4 deg); N230 freedom / and / release (5.7 deg); N048 delusion (6.4 deg); N044 Suññatā (6.5 deg); N050 greed (7.5 deg); N049 hatred (8.5 deg) |
| N019 | Conventional / truth | 55 | -121 | 50 | 235 | N021 limitations of; N025 Diversity; N028 to be communicated | N020 must transcend (6.2 deg); N028 to be communicated (6.2 deg); N018 must be reduced to (6.8 deg); N029 to realise (6.8 deg); N021 limitations of (6.9 deg); N025 Diversity (8 deg); N102 The way it is (10.7 deg); N103 Reductive categories (10.7 deg) |
| N115 | Re-uniting | 41 | -137.6 | 50 | 242 | N116 Gut | N103 Reductive categories (8.7 deg); N022 contextual (9.3 deg); N094 What am I? (10 deg); N024 lost in reduction (11.1 deg); N116 Gut (11.3 deg); N020 must transcend (11.7 deg); N095 running the risk of (12.3 deg); N118 Experiential (12.5 deg) |
| N091 | Witnessing | 26 | -138.1 | 50 | 241 | N092 What am I not?; N115 Re-uniting; N129 Heart | N092 What am I not? (6.3 deg); N093 Two methods of approach (6.9 deg); N094 What am I? (8.9 deg); N129 Heart (9.4 deg); N130 Action (10.2 deg); N112 running the risk of (10.4 deg); N095 running the risk of (12 deg); N131 Felt view (12.2 deg) |
| N185 | Samādhi | 25.5 | 18.5 | 90 | 341 | N186 Methods; N193 Progression; N281 Pañña; N478 Hindrances | N522 Right effort (3.1 deg); N523 Right mindfulness (3.2 deg); N530 Prevent / unwholesome / states (3.6 deg); N527 Cultivate / wholesome / states (3.9 deg); N531 Body (3.9 deg); N529 Abandon / unwholesome / states (4.2 deg); N528 Maintain / wholesome / states (4.3 deg); N534 Mental / phenomena (4.4 deg) |
| N281 | Pañña | 22.5 | -9.3 | 90 | 342 | N282 Methods; N301 Insights | N351 Upādāna (3.1 deg); N350 Taṇhā (3.8 deg); N429 1. Knowledge of / mental and material / processes (4 deg); N352 Bhava (4.3 deg); N525 Right view (4.8 deg); N430 2. Knowledge of / cause and effect (5 deg); N526 Right intention (5.3 deg); N444 16. / Review knowledge (5.3 deg) |
| N090 | Identification | 13.4 | -135.8 | 50 | 240 | N091 Witnessing; N119 What do I take to be me? | N128 Memory (5.7 deg); N125 Perceptions (6.8 deg); N127 Thoughts (8.3 deg); N087 Brain (8.6 deg); N089 Intellectual view (12 deg); N124 Will (12.1 deg); N122 Feelings (12.3 deg); N088 Opinions (12.5 deg) |
| N057 | Analysis / questioning | 11 | -97 | 50 | - | N058 Open-mindedness | N489 Why is there / a world at all? (3.9 deg); N485 What IS / nature? (4.6 deg); N496 Theology (5.2 deg); N486 How can I / truly know? (5.7 deg); N492 Ontology (6.6 deg); N491 Why is nature / doing what / it is doing? (6.8 deg); N490 What is / nature doing? (7 deg); N493 Epistemology (7.4 deg) |
| N307 | Self- / Transcendence / needs | 5.4 | 140.2 | 55 | 333 | - | N308 Self- / Actualisation / needs (12 deg); N539 Inner child / work (14.6 deg); N306 Motivation split (14.7 deg); N252 Psychological / adaptations (15.1 deg); N009 Deep states of calm (18.5 deg); N318 Meaning protest (21.8 deg); N309 Love and / Esteem / needs (22.4 deg); N540 ego-based / vulnerability (23.8 deg) |
| N058 | Open-mindedness | 1 | -94 | 50 | - | N059 Observation; N319 Path of the Head | N498 back-and-forth (5.8 deg); N496 Theology (7.8 deg); N489 Why is there / a world at all? (8.2 deg); N319 Path of the Head (8.6 deg); N490 What is / nature doing? (8.9 deg); N495 Applied / science (9.8 deg); N057 Analysis / questioning (10.4 deg); N491 Why is nature / doing what / it is doing? (11.6 deg) |
| N319 | Path of the Head | -3.5 | -101.3 | 110 | 336 | - | N068 Strategies for / Understanding (7.9 deg); N058 Open-mindedness (8.6 deg); N496 Theology (10.1 deg); N489 Why is there / a world at all? (11.4 deg); N488 Why is any of / this important? (13.1 deg); N070 Thought labyrinths / / rumination (13.9 deg); N498 back-and-forth (14.4 deg); N497 Psychology / Philosophy / Spirituality (14.5 deg) |
| N308 | Self- / Actualisation / needs | -3.6 | 148.2 | 55 | - | - | N309 Love and / Esteem / needs (11.1 deg); N307 Self- / Transcendence / needs (12 deg); N318 Meaning protest (12.5 deg); N306 Motivation split (13.8 deg); N320 Unfinished business (16.7 deg); N321 Case formulation (18.4 deg); N545 Safety / needs (18.7 deg); N252 Psychological / adaptations (19.8 deg) |
| N059 | Observation | -4 | -80 | 50 | - | N060 Indirect; N067 Direct | N060 Indirect (5 deg); N067 Direct (5 deg); N063 Sensing (8.8 deg); N061 Instruments (9.3 deg); N064 Introspection (9.7 deg); N498 back-and-forth (12 deg); N070 Thought labyrinths / / rumination (14.1 deg); N495 Applied / science (14.5 deg) |
| N153 | Sīla | -5.5 | 27 | 90 | 346 | N154 Methods; N185 Samādhi | N520 Right speech (3.6 deg); N519 Right action (4.4 deg); N415 airways (4.8 deg); N416 comfort (4.9 deg); N521 Right livelihood (5.1 deg); N413 physical (6.2 deg); N414 posture (6.2 deg); N418 energy (6.5 deg) |
| N068 | Strategies for / Understanding | -9 | -107 | 70 | - | N069 Dogmatism; N070 Thought labyrinths / / rumination; N085 Settles in: / Convergence between / assumptions and reality; N319 Path of the Head; N071 Trusting the / current paradigm | N319 Path of the Head (7.9 deg); N071 Trusting the / current paradigm (9.2 deg); N069 Dogmatism (10.7 deg); N084 5. / Post-revolution: / A new paradigm / gains dominance (14.6 deg); N073 1. / Pre-paradigm: / No consensus (14.6 deg); N085 Settles in: / Convergence between / assumptions and reality (15.4 deg); N070 Thought labyrinths / / rumination (16.2 deg); N058 Open-mindedness (16.4 deg) |
| N152 | The threefold training | -13.4 | 19.7 | 55 | - | N153 Sīla; N331 Path of the Heart; N408 supporting conditions | N408 supporting conditions (4 deg); N418 energy (5 deg); N428 food (5 deg); N425 air quality (5 deg); N409 internal (5 deg); N410 external (5.3 deg); N413 physical (6 deg); N416 comfort (6.2 deg) |
| N309 | Love and / Esteem / needs | -14.4 | 150.6 | 55 | - | - | N545 Safety / needs (8.6 deg); N321 Case formulation (10.6 deg); N322 Wisdom (10.8 deg); N308 Self- / Actualisation / needs (11.1 deg); N320 Unfinished business (13.5 deg); N404 Authenticity (14.1 deg); N405 Self-disclosure (14.7 deg); N323 Empathy (15.6 deg) |
| N331 | Path of the Heart | -20.4 | 9 | 110 | 335 | - | N146 accepting, letting be, allowing, / embracing, opening, experiencing (9.6 deg); N424 temperature (11.6 deg); N425 air quality (12.1 deg); N423 dwelling (12.2 deg); N211 Seven factors of awakening (12.4 deg); N152 The threefold training (12.4 deg); N156 Generosity (12.7 deg); N412 external / conditions (12.9 deg) |
| N085 | Settles in: / Convergence between / assumptions and reality | -21 | -117 | 50 | - | N086 Depth of transformation; N132 Existential problem: / What can I control? / What - and how - / do I know? | N084 5. / Post-revolution: / A new paradigm / gains dominance (10.5 deg); N071 Trusting the / current paradigm (13.1 deg); N069 Dogmatism (13.3 deg); N083 4. / Paradigm shift: / Underlying assump- / tions examined (13.8 deg); N072 Phases of / paradigm change (14.7 deg); N068 Strategies for / Understanding (15.4 deg); N073 1. / Pre-paradigm: / No consensus (16.8 deg); N082 Psi (17 deg) |
| N545 | Safety / needs | -22.3 | 147.1 | 55 | - | - | N322 Wisdom (5.7 deg); N323 Empathy (8.2 deg); N309 Love and / Esteem / needs (8.6 deg); N404 Authenticity (9.1 deg); N310 Physiological / needs (9.3 deg); N324 Presence (11.6 deg); N405 Self-disclosure (12.2 deg); N247 Islands of work / in a sea of empathy (12.9 deg) |
| N310 | Physiological / needs | -26.1 | 137.8 | 55 | - | - | N251 Adaptations / in the world (9.1 deg); N545 Safety / needs (9.3 deg); N247 Islands of work / in a sea of empathy (9.5 deg); N544 Method (11.2 deg); N323 Empathy (11.6 deg); N322 Wisdom (13.4 deg); N543 Emotion-Focused / Mindfulness (14.3 deg); N246 Method (15.4 deg) |
| N243 | Strategies for peace | -29 | 111.9 | 70 | - | N244 In terms of / Emotion-Focused / Therapy; N248 In terms of early / relationships; N250 In terms of needs; N253 In terms of / emotional / processing; N341 In terms of current / relationships | N473 Denial and / Avoidance-Based / Strategies (9 deg); N248 In terms of early / relationships (9.7 deg); N341 In terms of current / relationships (9.7 deg); N474 Intellectualization / and Rationalization / Strategies (10.6 deg); N244 In terms of / Emotion-Focused / Therapy (12.3 deg); N475 Externalization / Strategies (12.7 deg); N255 Resisting vulnerability (13.5 deg); N476 Control and / Compensation / Strategies (14.7 deg) |
| N139 | Strategies for / happiness / love | -38.5 | 1.1 | 70 | - | N140 getting, avoiding, manipulating, / changing, controlling, collecting; N146 accepting, letting be, allowing, / embracing, opening, experiencing | N138 Settles in: Happiness, / love, felt meaning (8.7 deg); N140 getting, avoiding, manipulating, / changing, controlling, collecting (9.5 deg); N146 accepting, letting be, allowing, / embracing, opening, experiencing (10.7 deg); N145 non-sustainable happiness (12.6 deg); N144 depended on comparison (12.8 deg); N142 past / future (13.2 deg); N141 doing (13.8 deg); N143 personal identification (13.9 deg) |
| N240 | Path of the Gut | -54 | 109.5 | 100 | 337 | N241 Settles in: Peace | N340 Emotions and / intentional root (6.9 deg); N242 (Even need for excitement / settles in peace) (8.5 deg); N181 Emotional style (8.7 deg); N241 Settles in: Peace (10 deg); N262 Needs (10.1 deg); N239 Existential problem: / What do I need / to function? (11 deg); N179 Emotions (11.7 deg); N180 Components of / emotion (12.2 deg) |
| N134 | What matters to / your head | -81 | -121 | 50 | - | N135 What matters to / your heart; N237 What matters to / your gut | N133 The Human - / Reason (6 deg); N362 #1 Just Listen (8.2 deg); N363 #2 Distracted By Truth (9.4 deg); N265 Concerned with: / Long-term goals (10.5 deg); N267 Growth potential: Can / discover principles (10.7 deg); N266 Abstract principles (12 deg); N364 #3 Breath (12.5 deg); N268 Spiritual interest: / Transcending lives (12.5 deg) |
| N135 | What matters to / your heart | -81 | 0 | 50 | - | N136 The Lion - / Thymos; N237 What matters to / your gut | N136 The Lion - / Thymos (6 deg); N233 Concerned with: / Mid-term goals (9.5 deg); N235 Growth potential: / Can be trained (9.5 deg); N234 Communal / well-being (10.7 deg); N236 Spiritual interest: / After/next life (11.1 deg); N232 Mode: Empathy / / Intuition / Faith / / Social Emotions (13.9 deg); N231 Motivated by: / Honour / Shame (14.2 deg); N137 Existential problem: / What gives life / meaning? (18 deg) |
| N237 | What matters to / your gut | -81 | 120 | 50 | - | N238 The Beast - / Appetite | N238 The Beast - / Appetite (6 deg); N362 #1 Just Listen (8.3 deg); N363 #2 Distracted By Truth (9.2 deg); N257 Growth potential: / Can be tamed (9.8 deg); N259 Concerned with: / Immediate goals (9.9 deg); N260 Individual / survival (11.3 deg); N364 #3 Breath (11.6 deg); N258 Spiritual interest: / This life (11.7 deg) |

## Full Node Inventory

Every node in `planetTagData` is listed exactly once below, grouped by latitude band and sorted west-to-east within each band.

### Far North: essence, rewiring, truth, liberation, peace cap

| Ref | ID | Node | lat | lng | size | color | slides | flags |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| N403 | `B5AB8796-061C-4F0D-AF4A-4994F3799E9B` | #42 | 79 | -180 | 10 | 26 | - | - |
| N039 | `8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F` | the essence of / “you” / life | 68 | -155.4 | 5 | 33 | - | - |
| N012 | `611A4954-9E7D-4D25-AD7D-E1FAB38482F5` | freedom | 67 | -154.7 | 5 | 33 | - | - |
| N040 | `2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7` | all-encompassing love | 69.1 | -154.3 | 5 | 33 | - | - |
| N015 | `963CA1BA-9539-4089-96AB-EB0E78602390` | true wisdom | 66.4 | -152.4 | 5 | 33 | - | - |
| N011 | `90212AAB-4CFE-4FDF-850A-7E6141F727AE` | potentially the source / of not-so-obvious / (but highly attractive) / “qualities” | 67.3 | -150 | 10 | 35 | - | - |
| N041 | `C978C527-2523-4078-8B16-523DF8553FD5` | the core of / will / agency | 69.1 | -149.7 | 5 | 33 | - | - |
| N013 | `5C63879D-74A6-458B-8193-AFA06A62F794` | unshakable peace | 66.2 | -149.2 | 5 | 33 | - | - |
| N014 | `2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5` | salvation | 66.9 | -146.7 | 5 | 33 | - | - |
| N010 | `D131CF5B-A895-4212-A4D4-A7E976CF5DA6` | real meaning | 68.7 | -145.9 | 5 | 33 | - | - |
| N016 | `EEA100C2-4D71-40C8-B70B-FE6A6D01D33B` | why important? | 67.5 | -135.7 | 30 | 35 | 264 | - |
| N029 | `3F0021AE-02A1-44B8-AE19-11C0D2A4FE75` | to realise | 61 | -127 | 40 | 37 | - | - |
| N005 | `B5027C8B-D476-49B0-A713-ACC447159AE1` | Rewiring the head | 72 | -121 | 40 | 35 | 213 (dev only) | developerOnlySlides |
| N017 | `982A6AFF-D536-4504-B63A-EC42A2712432` | Transcendent / Truth | 67.5 | -121 | 50 | 39 | 235 | - |
| N001 | `D4724AD1-EECD-4975-920C-CDAD71AA53C3` | the essence of / wisdom / will | 75.5 | -120 | 40 | 35 | 210 (dev only) | developerOnlySlides |
| N018 | `F1EB56D4-15AE-4837-A070-40550E1262C7` | must be reduced to | 61 | -115 | 40 | 37 | - | - |
| N030 | `D456FA2C-65F4-40D2-AC84-4C7E2266BA84` | Unity | 67.5 | -107.1 | 30 | 35 | - | - |
| N033 | `CCCF1876-3199-41C1-AE98-25A78D1C7F51` | Analytic / idealism | 65 | -96 | 10 | 35 | 236 | - |
| N278 | `C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA` | Ontologies | 61 | -95.5 | 40 | 35 | 234 | - |
| N031 | `B90D2293-D457-4567-8102-363F70D95781` | Monist ontologies | 63 | -94.5 | 20 | 35 | - | - |
| N304 | `3041389D-AD21-46F6-9721-2DD4E9FC1F65` | Consciousness | 68 | -94 | 20 | 33 | - | - |
| N032 | `2930997B-A726-473E-B6E9-333C2732271F` | Idealism | 66 | -94 | 30 | 35 | 237 | - |
| N302 | `95BBCB02-420D-4FD9-A9BA-A404D72B41D3` | Nature of fundamental reality | 69 | -86.3 | 25 | 33 | - | - |
| N034 | `2B64F02A-BEAA-4403-8380-A8B2614D5F90` | Panpsychism | 66 | -86.3 | 30 | 35 | 262 | - |
| N303 | `6A893E71-2F6B-4958-B917-5F145FA37CF5` | Matter | 68 | -78.2 | 20 | 33 | - | - |
| N035 | `4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7` | Physicalism | 66 | -77.8 | 30 | 35 | - | - |
| N036 | `EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6` | Emergence | 64.5 | -74.8 | 20 | 35 | - | - |
| N037 | `FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8` | weak | 63 | -72.5 | 15 | 35 | - | - |
| N052 | `074931F9-D5F1-401B-ABE0-1F26BA921E1F` | From paradoxes / to wisdom | 65 | -48.4 | 20 | 35 | - | - |
| N045 | `EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C` | Tathātā | 62.9 | -12 | 25 | 26 | - | - |
| N044 | `FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07` | Suññatā | 65.4 | -10.6 | 25 | 26 | - | - |
| N043 | `87B9AFEC-9F64-4748-87F8-F64F2B31FC29` | Atammayatā | 67.4 | -7.2 | 25 | 26 | - | - |
| N000 | `8BD3708E-8E3D-44B8-9E92-1050FA7987E5` | the essence of / love / meaning | 75.5 | 0 | 40 | 26 | 209 (dev only) | developerOnlySlides |
| N004 | `287B1377-9E86-42B2-99F1-EBBEA971AB08` | Rewiring the heart | 72 | 0 | 40 | 26 | 212 (dev only) | developerOnlySlides |
| N042 | `F47603CA-44A7-4009-B07B-29DFA540729D` | Unconditional / Love | 69 | 0 | 50 | 26 | - | - |
| N050 | `10D1D640-DE4C-4334-B08F-A4716D198E5F` | greed | 60.9 | 3.6 | 30 | 26 | - | - |
| N002 | `0027E01B-C40A-49F0-9833-30244700C39E` | the essence of / salvation / peace | 75.5 | 120 | 40 | 15 | 422 (dev only) | developerOnlySlides |
| N003 | `66F19982-732D-4744-AF06-F1F8A68D898B` | Rewiring the gut | 72 | 120 | 40 | 15 | 211 (dev only) | developerOnlySlides |
| N006 | `4A481D1E-5DB6-4ABB-B9D0-8164F41393F9` | Unshakeable / Peace | 69 | 120 | 50 | 15 | - | - |
| N400 | `78E02151-FCDC-4625-8167-B8D203A85AEB` | #39 Illusion | 67 | 174 | 10 | 26 | 330 | - |
| N401 | `D5368E5B-F3B2-4773-826E-87B12FE49F32` | #40 Road to Here | 71 | 175 | 10 | 26 | 331 | - |
| N399 | `118FA6A1-6400-4814-B268-3BECEC40ABA5` | #38 One | 63 | 175 | 10 | 26 | 329 | - |
| N402 | `10F8986B-B1F0-4832-9B7A-BCFE9017D82E` | #41 Awakening | 75 | 177 | 10 | 26 | 332 | - |

### North: ontology, wisdom, transcendence, awareness, practice upperlands

| Ref | ID | Node | lat | lng | size | color | slides | flags |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| N397 | `9B4CCF07-7C71-4A8B-B2D8-8B29B545E163` | #36 Belonging To Nature | 55 | -180 | 10 | 26 | 327 | - |
| N391 | `7A47C506-57E0-48D0-A85F-A08A763527F7` | #30 Only One Problem | 31 | -180 | 10 | 26 | 321 | - |
| N396 | `E9295D68-07C9-445E-A6B6-8745F2F94266` | #35 Flow Of Life | 51 | -177 | 10 | 26 | 326 | - |
| N392 | `BD8EA527-40C8-4615-AB8D-70650285D7A4` | #31 Open | 35 | -177 | 10 | 26 | 322 | - |
| N395 | `559BAA5D-0201-4080-9D44-6965751B5E13` | #34 Free Will Or Will Freed? | 47 | -175 | 10 | 26 | 325 | - |
| N393 | `3E0FFFE5-AA36-4A62-8183-D12CA042207D` | #32 The Monkey's Fist | 39 | -175 | 10 | 26 | 323 | - |
| N394 | `24B3DF2A-1EAA-4E20-904D-C613921E7688` | #33 Beyond Thought | 43 | -174 | 10 | 26 | 324 | - |
| N118 | `2C809F14-A1A9-4178-B236-FA6408CD789D` | Experiential | 49 | -151.2 | 30 | 15 | - | - |
| N131 | `3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58` | Felt view | 32 | -150.3 | 30 | 26 | - | - |
| N117 | `9E66D7AE-5825-4691-BADB-FC7A75F7B29D` | Perceptual view | 56 | -148.2 | 30 | 15 | - | - |
| N116 | `074F7C7B-C390-4328-A205-B73143806FFA` | Gut | 51 | -145.2 | 45 | 15 | - | - |
| N023 | `9E19FF41-5144-4745-9C0B-A99858302CDE` | ways of cutting the apple | 53.7 | -139.9 | 15 | 33 | - | - |
| N024 | `050308DE-F371-436D-AE9F-B0D5B7F8C282` | lost in reduction | 52 | -139.4 | 15 | 33 | - | - |
| N022 | `A81C54C1-D640-4297-AFA9-346A25B8132E` | contextual | 50.3 | -137.9 | 15 | 33 | - | - |
| N115 | `334445AA-FC20-48D6-9A7D-2558857C2346` | Re-uniting | 41 | -137.6 | 50 | 15 | 242 | - |
| N021 | `6BDD61FD-3F46-453B-8714-64AF81BCE3F9` | limitations of | 55 | -133 | 30 | 35 | - | - |
| N094 | `64077339-5087-4CBD-A706-C1AA35E8AC8B` | What am I? | 32.5 | -131.1 | 40 | 35 | - | - |
| N020 | `0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856` | must transcend | 50 | -127 | 40 | 37 | - | - |
| N103 | `C5096451-E5CF-4498-AF7A-E97C3C8197F9` | Reductive categories | 45 | -127 | 30 | 33 | - | - |
| N095 | `9E801875-A714-49E5-969A-D9A5E5497D18` | running the risk of | 32.5 | -126.5 | 20 | 35 | - | - |
| N097 | `A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E` | Drowning the baby / in the bathwater | 34.5 | -121.2 | 25 | 37 | - | - |
| N096 | `31475508-739B-4966-ADC9-D8EBCE5FE3DB` | Eternalist view | 32.5 | -121.2 | 40 | 35 | - | - |
| N019 | `506E723E-071E-4694-80AD-06BBD0681E26` | Conventional / truth | 55 | -121 | 50 | 39 | 235 | - |
| N099 | `9A853604-4CB0-4B1B-98E1-E4D95626433A` | The Screen | 36.7 | -117.3 | 40 | 35 | - | - |
| N028 | `2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F` | to be communicated | 50 | -115 | 40 | 37 | - | - |
| N102 | `D5F25680-4FED-4B74-A5D5-1B15A8C8A580` | The way it is | 45 | -115 | 30 | 33 | - | - |
| N100 | `93C64795-A33C-4578-9694-B8B0FFE287AE` | What can we know? | 33 | -112.8 | 40 | 35 | - | - |
| N101 | `73E6253F-D36B-45B8-ABF9-A72432F5F576` | The content | 36.5 | -110.3 | 40 | 35 | - | - |
| N025 | `A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4` | Diversity | 55 | -107.1 | 30 | 35 | - | - |
| N280 | `28763A09-FA38-43D2-A7C3-52E15D20F5B9` | What can’t we know? | 33 | -104.9 | 40 | 35 | - | - |
| N469 | `902b4287-e61e-4b6a-ab6c-5afb0123b511` | Falsifiability and / the problem of induction | 36.8 | -100.8 | 6 | 33 | 271 | - |
| N470 | `5e878fac-c366-419f-ad57-fcc4725e1362` | Paradigm-dependence | 35.9 | -100.5 | 6 | 33 | 272 | - |
| N459 | `77fbada0-25e5-41cf-996e-ce630d807bab` | External consistency | 31.1 | -99.6 | 6 | 33 | 280 | - |
| N468 | `c6871ba1-dd76-4e11-a404-16e2ec122e85` | Underdetermination of / theories by data | 37.6 | -99.5 | 6 | 33 | 270 | - |
| N458 | `44c62b1d-37f0-4795-afb6-6590932c1d4f` | Falsifiability | 32 | -99.5 | 6 | 33 | 279 | - |
| N471 | `03dbc0e6-be97-40d6-bacd-aaed827df4fa` | Language and conceptual / constraints | 35.5 | -99.2 | 6 | 33 | 273 | - |
| N457 | `a18d5a34-cf57-4416-b301-dbb81c911420` | Empirical testability | 32.5 | -98.7 | 6 | 33 | 278 | - |
| N460 | `e66f4425-4b5b-4f36-98c0-791face2927f` | Generalizability | 30.6 | -98.5 | 6 | 33 | 281 | - |
| N464 | `8ffbc240-3cbb-4314-a806-6f2047761917` | Limitations of any theory | 36.5 | -98 | 11 | 35 | 262 | - |
| N467 | `9b2aa4e6-3639-4bfa-91ad-c7b577048973` | Approximations | 37.6 | -97.6 | 6 | 33 | 269 | - |
| N472 | `ad028f69-e759-4775-84fc-9c1e3078cf73` | Cognitive biases | 35.4 | -97.6 | 6 | 33 | 274 | - |
| N456 | `79231c51-7dbb-4559-aeda-d25f8eca9841` | Internal consistency | 32.6 | -97.3 | 6 | 33 | 277 | - |
| N461 | `6221729b-04a4-4b49-a5bd-1561b8d9b5f4` | Fruitfulness | 30.5 | -97.2 | 6 | 33 | 282 | - |
| N453 | `1e71954e-6a4a-49ba-ba46-8ee9ece19da5` | Characteristics of a good theory | 31.5 | -97.1 | 11 | 35 | - | - |
| N466 | `15ee2cf2-d3b0-48f0-96b1-61a92f1139c1` | Incompleteness | 37.3 | -96.2 | 6 | 33 | 268 | - |
| N465 | `9243f947-3be3-4034-ad9c-c02548ca9135` | Need for postulates or axioms | 36.2 | -96 | 6 | 33 | 267 | - |
| N462 | `8b28e87b-3ee0-440d-ac53-eb80980ddb41` | Operational definitions | 30.6 | -96 | 6 | 33 | 283 | - |
| N455 | `50beb399-8ae1-4258-bae7-425ce2a84275` | Explanatory power | 32.5 | -95.9 | 6 | 33 | 276 | - |
| N463 | `b9fae851-d521-46be-bbc3-1732da0ee7e1` | Predictive accuracy | 31 | -95 | 6 | 33 | 284 | - |
| N454 | `16c9ce33-86c9-4ecd-9909-9a12e0b15f2f` | Parsimony | 32 | -94.7 | 6 | 33 | 275 | - |
| N026 | `0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD` | Dualist ontologies | 59.7 | -94.5 | 20 | 35 | - | - |
| N272 | `092BED79-8510-4E20-9040-0BF73C433EB0` | Ontology - / What is reality? | 33.5 | -92 | 40 | 37 | - | - |
| N027 | `302B64FD-4E04-4823-8E13-C7F2FAA4E7C9` | Dualism | 54 | -87 | 30 | 35 | - | - |
| N275 | `B6246F44-0855-4817-9D0D-D397E9DB7442` | Space? | 38 | -86 | 40 | 35 | - | - |
| N274 | `ACF82BBE-F34C-4E20-B18E-08F28B3ABA12` | Consciousness? | 30.3 | -84.1 | 40 | 35 | 258 | - |
| N276 | `050CF590-16D7-48A8-9656-E58FD0B6E8BF` | Time? | 36 | -83 | 40 | 35 | - | - |
| N277 | `1EE48F2F-650A-413A-8F77-720A641BA416` | Matter? | 33 | -82.3 | 40 | 35 | - | - |
| N038 | `23979ADC-AD3F-4447-BF76-224A807C2144` | strong | 58 | -80 | 15 | 35 | 257 | - |
| N054 | `9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD` | Intellectual / understanding | 38.1 | -73.1 | 30 | 35 | - | - |
| N053 | `E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B` | Direct / experience-based / understanding | 54.4 | -65.5 | 30 | 35 | - | - |
| N051 | `89ED6168-2517-4EF9-A5D6-3635A0C80BDC` | Fundamental / perspective change | 59.6 | -47.8 | 30 | 35 | - | - |
| N295 | `905689F0-5537-42CC-B864-9166DA60C470` | Must be realized | 35 | -27.1 | 25 | 24 | - | - |
| N294 | `FEC6325D-1E5F-4790-A841-63709B264A8D` | The third noble truth: / That letting be / leads to peace | 31.4 | -25.6 | 30 | 26 | - | - |
| N451 | `ecb07061-71ab-4348-8589-4feaed9feb54` | 7. Right mindfulness | 35.1 | -18.3 | 6 | 28 | - | - |
| N450 | `791c77c1-9fb9-4435-8524-86978d4fe064` | 6. Right effort | 36.2 | -17.8 | 6 | 28 | - | - |
| N296 | `D8049867-1FC0-4817-BD67-64A421349C65` | The fourth noble truth: / That certain conditions / lead to these insights | 31.3 | -17.8 | 30 | 26 | - | - |
| N452 | `3a5f7288-524e-4cc4-85c3-5aaf1a1b97e6` | 8. Right samādhi | 34.3 | -16.8 | 6 | 28 | - | - |
| N449 | `e762f055-c36b-4cd9-8d7d-6e4a40458033` | 5. Right livelihood | 36.6 | -16.1 | 6 | 28 | - | - |
| N297 | `6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB` | Must be practiced | 35 | -15.1 | 25 | 24 | - | - |
| N448 | `0c24ef9f-dd38-477f-bf2b-8d1fcb62f605` | 4. Right speech | 36.6 | -14.2 | 6 | 28 | - | - |
| N445 | `962c5e0e-f53a-455b-a5c4-6f475e80fa33` | 1. Right view | 34.3 | -13.6 | 6 | 28 | - | - |
| N447 | `cc0aca20-9885-4727-b055-8dbf4d201abf` | 3. Right action | 36.2 | -12.3 | 6 | 28 | - | - |
| N446 | `232e4d78-65e1-4ce1-a27d-ea084fc73141` | 2. Right intention | 35.1 | -11.9 | 6 | 28 | - | - |
| N046 | `0EF99714-0619-45EC-A71D-B4F01B6211DC` | Liberation | 58.9 | -10.9 | 60 | 26 | - | - |
| N230 | `EC74E906-1F03-4570-A640-5E95985106E8` | freedom / and / release | 53.5 | -7.7 | 25 | 24 | - | - |
| N229 | `5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B` | dispassion | 46 | -7.3 | 25 | 24 | - | - |
| N407 | `5EFE7D5C-504F-496C-AC80-EBBF66611D49` | saṅkhāra / vs. / asaṅkhāra | 56.9 | -6.9 | 15 | 26 | - | - |
| N228 | `1F0628F7-D965-4529-8228-AA53C73527B2` | disillusionment | 37 | -6.6 | 25 | 24 | - | - |
| N218 | `4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953` | equanimity | 41 | -4.4 | 30 | 24 | - | - |
| N227 | `E0E57B88-D092-45E3-93DE-F47199063BEA` | seeing things / as they are | 30 | -4.2 | 25 | 24 | - | - |
| N047 | `7AFE8322-410C-44FA-8223-F6080F45359C` | from | 58.9 | -0.4 | 25 | 26 | - | - |
| N048 | `236FD67F-CD44-4B75-96AD-B16FA578E708` | delusion | 55.9 | -0.4 | 30 | 26 | - | - |
| N200 | `D49F0D1E-5DD6-4147-88E2-604F7E4A3566` | diversity to unity | 40.7 | 0.6 | 20 | 26 | - | - |
| N049 | `C9DCCC19-CD84-427B-9234-09050646BCD3` | hatred | 56.9 | 4.6 | 30 | 26 | - | - |
| N198 | `FC88FDFD-AE27-4F76-938D-6FE581E65D08` | coarse to refined | 38.8 | 5.2 | 20 | 26 | - | - |
| N193 | `E8F9F0EB-2B89-4D4C-901E-A029C0211A93` | Progression | 33.3 | 7.7 | 40 | 26 | - | - |
| N194 | `CCBD9962-2FF7-4C39-97B9-D93FA4044BD3` | outward to inward | 30.8 | 7.8 | 20 | 26 | - | - |
| N195 | `D0E50499-8C3F-4818-BBAA-FEB433FC1704` | complexity to simplicity | 36.8 | 9.7 | 20 | 26 | - | - |
| N197 | `C4B7A8B7-5171-4873-B269-0A0582CA2084` | doing to being | 31.2 | 12.8 | 20 | 26 | - | - |
| N196 | `BC583511-0DA5-4F1E-B699-D72CB449DD00` | movement to stillness | 35.1 | 13.3 | 20 | 26 | - | - |
| N199 | `30F3B081-5F90-4F13-BC8D-BBC7293CEC04` | judging to embracing | 32.9 | 14.4 | 20 | 26 | - | - |
| N483 | `dfbe8110-91a3-45f5-89b4-3ce0726ed12c` | 5. Doubt | 37.9 | 14.9 | 20 | 26 | - | - |
| N482 | `158a80d8-6743-40e7-bff8-7400bc823db9` | 4. Restlessness / and worry | 39 | 17.7 | 20 | 26 | - | - |
| N478 | `437ca137-318c-48ac-95ce-ccf0bc370482` | Hindrances | 36.7 | 19.6 | 40 | 26 | - | - |
| N201 | `268F9754-9375-4E1F-B752-233A8F83F592` | Psychological / re-categorization | 47.6 | 22 | 30 | 24 | - | - |
| N481 | `07c305f9-f81a-4162-8cea-bf9d0b93677a` | 3. Sloth / and torpor | 38.9 | 22.1 | 20 | 26 | - | - |
| N167 | `28106D6F-9E60-4579-A457-B2F4DB781D6D` | Ekaggatā | 32.6 | 23.1 | 40 | 26 | - | - |
| N206 | `21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F` | evolutionary / conditioned / ignorance | 54.5 | 23.4 | 25 | 24 | - | - |
| N479 | `7096cfe3-baac-4d0b-acac-6cde09d3ab51` | 1. Sense desire | 36.1 | 23.7 | 20 | 26 | - | - |
| N480 | `cf40875e-42f6-4f57-85cb-56cbd0d70674` | 2. Ill-will | 38 | 24.2 | 20 | 26 | - | - |
| N202 | `B46F4E38-26DA-4388-91DA-32731D7B44A1` | maladaptive / habits | 44.7 | 25.8 | 25 | 24 | - | - |
| N207 | `A6BA6799-B325-453E-B4D1-BCD71CF12705` | maladaptive / assumptions / about | 50.2 | 26.8 | 25 | 24 | - | - |
| N165 | `6A20558B-3A35-4D14-8EBE-3C5DF4F02868` | Components | 31.8 | 28.6 | 40 | 26 | - | - |
| N166 | `96786F52-EB9D-42BB-B854-457841A162BA` | Sukha | 35.4 | 29.6 | 40 | 26 | - | - |
| N338 | `09031914-223C-480D-AB64-C610996CEB0D` | aversive | 44 | 31.7 | 25 | 24 | - | - |
| N203 | `128A73FA-B982-4A3E-B9C8-4AFBAB70AB56` | distracting | 40.2 | 32.3 | 25 | 24 | 251 | - |
| N204 | `6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0` | indulgent | 45.8 | 32.9 | 25 | 24 | - | - |
| N205 | `8AABE820-1F0B-4DDD-BFF2-9177B2A47112` | avoidant | 42.2 | 33.1 | 25 | 24 | - | - |
| N208 | `FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1` | happiness / suffering | 48.7 | 33.9 | 25 | 24 | - | - |
| N209 | `D358D3A2-957C-470B-BC5F-A71A7622AE07` | reality | 50.7 | 34.3 | 25 | 24 | - | - |
| N164 | `0AA203B9-8B52-4412-B32D-D412F894D779` | Pīti | 33.2 | 34.5 | 40 | 26 | - | - |
| N210 | `55EF8116-598E-4168-ADBC-9248DB79A821` | self | 52.8 | 35.8 | 25 | 24 | - | - |
| N173 | `64192F80-785C-4B14-AF81-987193E41085` | anger / hate | 44 | 35.9 | 30 | 15 | - | - |
| N176 | `111EBFA8-E400-4984-A638-63120DDC1590` | fear | 42.2 | 36.1 | 30 | 15 | - | - |
| N171 | `C0074FCF-7AB4-4781-BC26-3812FBA61015` | shame | 45.9 | 36.7 | 30 | 15 | - | - |
| N175 | `4788E206-DE47-48FA-8DC4-326274991F8D` | doubt / confusion | 40.3 | 37.3 | 30 | 15 | - | - |
| N172 | `CB62D122-2342-4D33-B98D-EE3BD70B6538` | grief | 48.7 | 39.3 | 30 | 15 | - | - |
| N339 | `E0B2DE70-FC3F-42BB-A62C-F00F8F73B376` | existential angst | 50.8 | 39.5 | 30 | 15 | - | - |
| N174 | `83BC3254-7B62-4D9C-BC20-192D2D442466` | pride / conceit | 52.9 | 40.5 | 30 | 15 | - | - |
| N170 | `2BAF7986-984E-4937-BA03-E5CBAA234AEF` | Challenging emotions | 47 | 45.6 | 40 | 15 | - | - |
| N007 | `876BC8AC-4013-448E-9ACA-A82DA031E09C` | Transcendence | 55 | 122 | 40 | 35 | 334 | - |
| N008 | `008ADA1B-1D52-4F68-AB43-97D070D7774C` | Existential exploration / / Insight meditation | 37.8 | 129.7 | 40 | 26 | 340 | - |
| N398 | `33400927-E7B6-4563-9F6F-F971805B8616` | #37 Who Am I? | 59 | 177 | 10 | 26 | 328 | - |

### Upper Middle: identity, understanding, practice, needs, emotion bridges

| Ref | ID | Node | lat | lng | size | color | slides | flags |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| N385 | `450B1754-89BC-486C-B2D8-338FEF653C91` | #24 Views | 7 | -180 | 10 | 26 | 315 | - |
| N384 | `28F9C108-F749-4A9E-B12B-920B82D73A06` | #23 Subtle Body | 3 | -177 | 10 | 26 | 314 | - |
| N130 | `EB83C866-FF54-449B-A65C-24ECDE2820C1` | Action | 25 | -149.3 | 30 | 26 | - | - |
| N129 | `7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6` | Heart | 29 | -148.2 | 45 | 26 | - | - |
| N089 | `794FB1D5-42CF-496B-929F-9568976B58FF` | Intellectual view | 10 | -147.6 | 30 | 35 | - | - |
| N088 | `C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8` | Opinions | 4 | -144.2 | 30 | 35 | - | - |
| N087 | `B07DBBCA-2123-4D55-828C-6931A999128B` | Brain | 8 | -142.6 | 45 | 35 | - | - |
| N091 | `2875511F-F91A-4807-9839-4B7153B23143` | Witnessing | 26 | -138.1 | 50 | 26 | 241 | - |
| N090 | `12872E37-D9BC-4CDD-BB7E-E09FD46D993A` | Identification | 13.4 | -135.8 | 50 | 35 | 240 | - |
| N093 | `3E8EDBA9-59E1-4835-8343-4AA9FF799D49` | Two methods of approach | 28.9 | -131.1 | 40 | 35 | - | - |
| N092 | `F9E35865-1D97-4667-B3FE-A0EDB4D37B8A` | What am I not? | 26.3 | -131.1 | 40 | 35 | - | - |
| N128 | `820F18C3-7140-4923-9D3A-2CD81A26B702` | Memory | 10.1 | -131 | 30 | 33 | - | - |
| N127 | `D7868612-7C4F-49F8-BCAA-B03E2BCEF450` | Thoughts | 6.7 | -130.8 | 30 | 33 | - | - |
| N125 | `76AB6EF8-AEF6-41D3-9576-2FE8D14F462B` | Perceptions | 13 | -128.8 | 30 | 33 | - | - |
| N124 | `1E34F972-7322-4F63-A271-2BC8A5241BB8` | Will | 4.6 | -127.4 | 30 | 33 | - | - |
| N112 | `43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3` | running the risk of | 26.3 | -126.5 | 20 | 35 | - | - |
| N361 | `BDFE3DB2-5341-4E85-BFAA-B39ED5EE070A` | Intelligence / / sapience | 1.9 | -124.3 | 10 | 33 | - | - |
| N360 | `1F65FAF1-7314-4500-ABCE-8E5A35D2D1B5` | Sentience | 1.2 | -123.3 | 10 | 33 | - | - |
| N122 | `3F0C901E-76B2-463D-B17A-8078CA2E1C91` | Feelings | 13.6 | -123.2 | 30 | 33 | - | - |
| N119 | `F7A69942-1F8A-42CC-A8C3-8DF26E439289` | What do I take to be me? | 9.9 | -123.1 | 40 | 35 | - | - |
| N126 | `5BEDE28D-38C4-4D03-B4C6-2C74ECD89078` | Consciousness | 3.1 | -122.6 | 30 | 33 | - | - |
| N357 | `54EBD80C-EDE5-44BC-99A8-639ABDA6D0BE` | vs. | 2.2 | -122.6 | 20 | 33 | 258 | - |
| N359 | `DAC12F59-38DF-47CE-B226-1BF41EA5E420` | Self-awareness | 1.2 | -121.9 | 10 | 33 | - | - |
| N098 | `FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B` | The fundamental nature / of awareness | 28.9 | -121.7 | 40 | 39 | 260 | - |
| N120 | `5AE32B80-01A1-4314-9A23-453A397A2599` | What ceases? | 7.9 | -121.6 | 40 | 35 | - | - |
| N121 | `72A32148-45A5-41A7-A836-0CE959AF38D4` | What persists? | 5.9 | -121.6 | 40 | 35 | - | - |
| N113 | `D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9` | Annihilationist view | 26.3 | -121.2 | 40 | 35 | - | - |
| N114 | `9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91` | Throwing the baby out / with the bathwater | 24.3 | -121.2 | 25 | 37 | - | - |
| N358 | `3A2649F9-EDD2-4CCC-BE03-7C1EF2827660` | Meta-cognition | 2.1 | -120.9 | 10 | 33 | - | - |
| N123 | `E27CC807-EB70-45C4-84B3-DDF1F8AADB00` | Body | 12.9 | -118.6 | 30 | 33 | - | - |
| N105 | `EE9D175C-0953-4B73-9B31-5C7AD0C50288` | Biases | 22.6 | -114.6 | 20 | 33 | - | - |
| N269 | `68B6E135-509A-4064-9FF9-DE55C3B66A8E` | What is life? | 9.9 | -114.6 | 40 | 35 | - | - |
| N270 | `6A92592D-70EE-451D-941A-AD8F8435EF6E` | What is death? | 7.9 | -114.6 | 40 | 35 | - | - |
| N271 | `DC5F27E6-E594-4651-A151-4F70145EDFD5` | What am I? | 5.9 | -114.6 | 40 | 35 | - | - |
| N110 | `FC6818C0-13A9-44E2-8A38-7C4D4FB8827B` | Limitations | 20.9 | -114.1 | 20 | 33 | - | - |
| N104 | `53296584-40BE-4F83-96D3-B77540245AC2` | Direct | 24.7 | -113.5 | 40 | 35 | - | - |
| N111 | `8873A022-151A-41EA-B380-2284DEB82A22` | Advantages | 19 | -113.1 | 20 | 33 | - | - |
| N106 | `5A058F3F-7A05-44E2-8417-7B99A2437742` | Experimentation | 22.4 | -108.6 | 30 | 35 | - | - |
| N107 | `42B4C435-0661-46DB-8D8B-AB2AA00D601B` | Mathematics | 20.6 | -108.4 | 30 | 35 | - | - |
| N108 | `64BC8F62-AA83-4E65-B1A3-D982DE8A86C1` | Statistics | 18.9 | -108.2 | 30 | 35 | - | - |
| N109 | `87EFBBA1-F6E2-4A35-8897-A73210A18318` | Indirect | 24.7 | -107.8 | 40 | 35 | - | - |
| N497 | `e1b65d3a-47c1-405a-b726-235c44e06124` | Psychology / Philosophy / Spirituality | 9.5 | -107.8 | 21 | 33 | - | - |
| N279 | `20790E3B-9D36-40B2-82CB-56322AA09DE7` | Epistemology - how can / we get true knowledge? | 28 | -105.4 | 40 | 37 | - | - |
| N488 | `ac4bd4e6-e922-4dbd-bd83-d8c4cb4bb59f` | Why is any of / this important? | 9.1 | -104.9 | 26 | 37 | - | - |
| N487 | `8f90a42f-fb4c-4e60-8d4b-b7c80d11402e` | What am I? | 10.9 | -104.6 | 26 | 37 | - | - |
| N493 | `9f643799-ea9c-4387-94fd-45f4943333b9` | Epistemology | 16.9 | -101.6 | 21 | 33 | - | - |
| N486 | `98492bf9-c934-4e49-a09e-5da002c441e8` | How can I / truly know? | 15 | -101.1 | 26 | 37 | - | - |
| N496 | `24a89fb0-66cd-4be8-91a8-de30f375e121` | Theology | 6.5 | -99.6 | 21 | 33 | - | - |
| N489 | `82bd14ba-7af4-4aa3-940e-db3303f7f911` | Why is there / a world at all? | 7.6 | -98.9 | 26 | 37 | - | - |
| N057 | `263D9AEE-6F33-4D35-B945-CE35173E2F11` | Analysis / questioning | 11 | -97 | 50 | 39 | - | - |
| N485 | `be411982-7190-46da-9dcd-4db627e3c5f8` | What IS / nature? | 15.5 | -95.8 | 26 | 37 | - | - |
| N492 | `bf4a99af-7454-4c41-8f31-5a2957309243` | Ontology | 17.4 | -95.4 | 21 | 33 | - | - |
| N058 | `3A45A8B4-3FEE-48C4-AB56-730C2284B9F0` | Open-mindedness | 1 | -94 | 50 | 39 | - | - |
| N490 | `c9c2da9a-4d9f-4187-9870-b831e8af6b42` | What is / nature doing? | 9 | -90.2 | 26 | 37 | - | - |
| N491 | `8b083728-ac2c-4848-a117-049155aa57f2` | Why is nature / doing what / it is doing? | 11.9 | -90.1 | 26 | 37 | - | - |
| N498 | `571c75bb-3243-404f-97e9-991f3ed745cf` | back-and-forth | 4 | -89 | 21 | 39 | - | - |
| N495 | `5d1dec7e-6792-49e9-9a1f-2d7a8da4add4` | Applied / science | 8.4 | -87.5 | 21 | 33 | - | - |
| N494 | `9c7e3c9a-30f5-4ff3-acd3-1b9f3b4152f2` | Foundational / science | 11.4 | -87.1 | 21 | 33 | - | - |
| N273 | `F1D5FF04-CA73-47D3-87C6-41C6BA8F6708` | God? | 28 | -87 | 40 | 35 | 263 | - |
| N056 | `60046B15-D09E-4F1F-9BC0-BA3900E29EB9` | Levels of / understanding | 12.1 | -80.2 | 30 | 35 | - | - |
| N055 | `39A86FA9-4CDF-4DD2-8AB6-78A36AC75762` | Basic conceptual / understanding | 18.5 | -75.1 | 30 | 35 | - | - |
| N064 | `C2B220C0-B7D4-432B-9ADC-1E40F1A66E25` | Introspection | 0 | -71.2 | 40 | 35 | - | - |
| N292 | `82F1F09B-EBCB-4F04-BDF1-4991F27E3724` | Must be abandoned | 21.5 | -31.4 | 25 | 24 | - | - |
| N293 | `5503BDDB-9985-44D9-B9A4-F731513F6903` | Pain • resistance = suffering | 29 | -30.5 | 25 | 26 | 239 | - |
| N291 | `A9BA755A-FE4B-498E-9952-40214F02B8D6` | The second noble truth: / That craving for sensuality, / being or non-being is / a necessary cause for / dissatisfaction | 23.9 | -28.4 | 30 | 26 | - | - |
| N289 | `803C7EA0-EF36-42AE-B810-7620C3509FEA` | Must be understood | 16.7 | -27.9 | 25 | 24 | - | - |
| N288 | `554920A7-A50D-44F4-8448-DD747BBB57DA` | The first noble truth: / The inherent unsatisfactoriness / of constructed/conditioned / phenomena | 19.2 | -22.6 | 30 | 26 | - | - |
| N437 | `0d621972-b79c-488f-ba34-c6809a21c3c2` | 9. Knowledge of / the desire for / deliverance | 26.1 | -20.1 | 6 | 28 | - | - |
| N436 | `3f067731-e578-4570-9830-f32d521de2f4` | 8. Knowledge of / dispassion | 25.2 | -20.1 | 6 | 28 | - | - |
| N435 | `5b00d15a-7d0d-4470-915b-87c3247471a1` | 7. Knowledge of / danger | 24.3 | -19.8 | 6 | 28 | - | - |
| N438 | `b2497bc7-eb34-407b-bc80-c1a22f39d141` | 10. Knowledge of / reflection | 27.1 | -19.7 | 6 | 28 | - | - |
| N434 | `34739401-0452-426c-990d-838146e0eece` | 6. Knowledge of / fearfulness | 23.6 | -19.3 | 6 | 28 | - | - |
| N298 | `6C32C072-E56E-40F0-AC39-7909FC465612` | Anattā | 11.4 | -19.2 | 20 | 26 | - | - |
| N287 | `33DB61E6-CD56-4F49-98BD-5397EB788805` | Dukkha | 13.2 | -19 | 20 | 26 | - | - |
| N439 | `f9cd19b7-d763-4a84-8581-ccb12db81c23` | 11. Knowledge of / equanimity about / formations | 27.8 | -18.9 | 6 | 28 | - | - |
| N299 | `64768881-AED3-403E-92A8-E4A3CBB39100` | Aniccā | 15.4 | -18.8 | 20 | 26 | - | - |
| N433 | `a477ac69-64b1-4e6a-af5d-84b41a70d8d3` | 5. Knowledge of / dissolution | 23.1 | -18.6 | 6 | 28 | - | - |
| N440 | `886cf2e4-c3ef-4f58-9346-27b6572aedc2` | 12. Knowledge of / conformity | 28.3 | -17.7 | 6 | 28 | - | - |
| N432 | `d06f9c97-71a8-4313-a4b0-40f6ac857033` | 4. Knowledge of / arising and / passing away | 22.5 | -17.5 | 6 | 28 | - | - |
| N301 | `DE7F9890-14E7-433A-AD84-B0E18BE5BD79` | Insights | 24.8 | -16.2 | 40 | 26 | - | - |
| N431 | `a086e478-bd96-4a70-a0f2-037895c29e42` | 3. Knowledge of / the Three Characteristics | 22.4 | -16.2 | 6 | 28 | - | - |
| N441 | `a2e20ba6-20a9-4bb3-b760-3c69616fee6a` | 13. / Change of lineage | 28.4 | -16 | 6 | 28 | - | - |
| N290 | `21CBC21A-6D6E-424D-B1D0-DCCD5425A05B` | Cause and effect | 9.6 | -15.3 | 30 | 26 | - | - |
| N430 | `b6bdc880-4b18-4e12-9204-6d9b7c02ecb7` | 2. Knowledge of / cause and effect | 22.7 | -14.7 | 6 | 28 | - | - |
| N442 | `2e379991-8ffc-4de8-ab6d-04cf1765ffab` | 14. / Path knowledge | 28.1 | -14.6 | 6 | 28 | - | - |
| N443 | `b3e8d40f-91d6-45ff-87c1-be74f156f5f2` | 15. / Fruition knowledge | 27.5 | -13.6 | 6 | 28 | - | - |
| N429 | `e4f3b5ae-ea27-42b8-8c9c-f3705fb93c78` | 1. Knowledge of / mental and material / processes | 23.3 | -13.6 | 6 | 28 | - | - |
| N286 | `C4AE0F47-95C9-42BF-875A-9DF1743AAFB2` | Contemplation of / the characteristics of / conditioned phenomena | 11.9 | -13.3 | 40 | 26 | - | - |
| N444 | `f659228c-017c-4610-b1bb-7b45a0e1bd85` | 16. / Review knowledge | 26.6 | -13 | 6 | 28 | - | - |
| N283 | `0B0E75E0-8E66-4B96-8D18-05B388B8166B` | Four noble truths | 18.1 | -12.7 | 40 | 26 | 244 | - |
| N300 | `EE895C76-B04A-4587-9970-5A6CBA56069C` | Six sense-spheres | 7.2 | -11.9 | 40 | 26 | 247 | - |
| N281 | `B20BB587-FDB1-45B4-9F6B-04D75DB45484` | Pañña | 22.5 | -9.3 | 90 | 28 | 342 | - |
| N352 | `9F0AC5E4-94A3-4889-AB97-B4DC30833EE6` | Bhava | 18.5 | -7.5 | 10 | 26 | - | - |
| N351 | `BD97D98D-E31F-4D80-96C7-5F6908D99AEC` | Upādāna | 20 | -7.3 | 10 | 26 | - | - |
| N285 | `F3CDF5ED-FE39-4306-9BC7-732E7252919B` | Body contemplation | 4 | -7.1 | 40 | 26 | 250 | - |
| N525 | `27FCF69B-E4D4-44F9-A400-AABBDC9D7FFE` | Right view | 26.8 | -6.9 | 16 | 29 | - | - |
| N282 | `9C1A33F2-FA28-4FD0-B3A3-011939BF112E` | Methods | 12 | -6.5 | 40 | 26 | - | - |
| N353 | `79CFDB79-97F9-4833-A155-D79FA5C92422` | Jāti | 17.3 | -6.3 | 10 | 26 | - | - |
| N350 | `58A2A09F-7C7E-4EBA-B937-48214FE22C26` | Taṇhā | 20.7 | -5.7 | 10 | 26 | - | - |
| N354 | `FD1ACE76-6FAC-4787-AF69-F7291D32C877` | Jarāmaraṇa | 17 | -4.5 | 10 | 26 | - | - |
| N526 | `B599010C-AF02-4851-A8A9-5D6219937FA3` | Right intention | 25.3 | -4.4 | 16 | 29 | - | - |
| N349 | `2C7FF98A-CF15-4B34-AB39-EC780AF21FB5` | Vedanā | 20.9 | -3.8 | 10 | 26 | - | - |
| N284 | `39C8C744-9E33-4FBD-B64F-4392BB1D7D43` | Dependent origination | 18.1 | -2.9 | 40 | 26 | - | - |
| N343 | `A27ED35F-F39F-42FC-8A96-D3E592B70FDF` | Avijjā | 17 | -2.4 | 10 | 26 | - | - |
| N348 | `EB07AD6B-B3DE-4DD1-ADD0-8E535874D517` | Phassa | 20.8 | -1.8 | 10 | 26 | - | - |
| N344 | `B07BA3FB-9123-4166-BFE2-13932223041F` | Saṅkhāra | 17.2 | -0.5 | 10 | 26 | - | - |
| N347 | `3FC8C3DE-F89B-4D56-9A23-7BE53D7C3FF6` | Saḷāyatana | 20.5 | 0.2 | 10 | 26 | - | - |
| N345 | `02F81DA8-EC55-4818-8969-D07228C13FBD` | Viññāṇa | 17.9 | 1.3 | 10 | 26 | - | - |
| N346 | `FDC5FC11-41F7-4F43-B11A-F51972CEDA2F` | Nāmarūpa | 19.5 | 1.7 | 10 | 26 | - | - |
| N217 | `03593653-145D-4B52-9873-D90B412C8468` | samādhi | 28 | 3 | 30 | 24 | - | - |
| N226 | `6D9D49EF-63D9-441E-865B-80CFE99B3E48` | samādhi | 22 | 3 | 25 | 24 | - | - |
| N221 | `F63DCD53-F24F-4AE7-84C0-61419A5D6E68` | freedom from remorse | 0 | 8 | 25 | 24 | - | - |
| N225 | `E78076C8-224D-4606-81AD-7DF62AE1B946` | bliss | 18 | 9 | 25 | 24 | - | - |
| N538 | `e9db7639-b778-42da-9d29-e50d1bdd2e5a` | 4th Jhāna | 24.8 | 12 | 6 | 22 | - | - |
| N537 | `f844abc5-5103-4af1-bba0-d9091a77e575` | 3rd Jhāna | 24.2 | 12 | 6 | 22 | - | - |
| N536 | `59b9cfbd-d3f4-48b6-86e2-e2085cce6890` | 2nd Jhāna | 23.8 | 12.5 | 6 | 22 | - | - |
| N216 | `75FF467B-7F2F-4EEC-ADC9-2D64EE46D692` | tranquility | 21.5 | 12.5 | 30 | 24 | - | - |
| N535 | `9cffd99f-8585-49ed-b8ab-ebee1b02ac0e` | 1st Jhāna | 23.5 | 13 | 6 | 22 | - | - |
| N224 | `04FEF0CF-A123-4DB2-A9CC-72E134399258` | bodily tranquility | 14 | 13 | 25 | 24 | - | - |
| N222 | `6FD89C72-5D89-4A96-B643-4BDDDEC450AC` | gladness | 5 | 13 | 25 | 24 | - | - |
| N524 | `5829E619-C4BD-4615-91E3-B0558E185C0C` | Right samādhi | 24.4 | 13.6 | 16 | 29 | - | - |
| N223 | `28B608E4-AED5-4042-977B-B32908F4DC0F` | rapture | 9 | 14 | 25 | 24 | - | - |
| N534 | `4d467521-5470-4452-8f9a-b67b5a0c6004` | Mental / phenomena | 23.5 | 14.2 | 6 | 22 | - | - |
| N533 | `5eec325f-52bf-4dc6-ba5d-d704a5818510` | Mind | 23 | 14.4 | 6 | 22 | - | - |
| N532 | `bedd5d37-8292-4aa8-b00c-8387c348954e` | Feelings / / sensations | 22.5 | 14.9 | 6 | 22 | - | - |
| N531 | `65a85008-398e-4447-a8fe-795b73e3dca6` | Body | 22.5 | 15.7 | 6 | 22 | - | - |
| N523 | `0FACED35-65AA-4745-8C15-635259CA2410` | Right mindfulness | 23.3 | 16 | 16 | 29 | - | - |
| N530 | `ddbc16c2-9f4c-46e8-a081-b39a20fcd562` | Prevent / unwholesome / states | 22.3 | 16.6 | 6 | 22 | - | - |
| N529 | `0f537e44-1d71-4dfb-be5b-a300e2c5700a` | Abandon / unwholesome / states | 21.6 | 16.7 | 6 | 22 | - | - |
| N215 | `ADBA0E07-67F4-47EC-B776-EE198BCA1A53` | rapture | 17 | 17.6 | 30 | 24 | - | - |
| N528 | `61feea3e-94dc-41ae-ac6b-d04610657560` | Maintain / wholesome / states | 21.3 | 17.7 | 6 | 22 | - | - |
| N522 | `DE7992FB-5611-4CAA-BF0A-0C0F145B5036` | Right effort | 22.4 | 18.1 | 16 | 29 | - | - |
| N185 | `14BA8BEB-FA35-44B7-9DE3-A1503614069D` | Samādhi | 25.5 | 18.5 | 90 | 28 | 341 | - |
| N527 | `22795147-7009-42b7-9c9d-083ea723225d` | Cultivate / wholesome / states | 21.6 | 18.7 | 6 | 22 | - | - |
| N214 | `9EAF3484-3F2C-415B-8067-B50A3FA1B974` | energy | 11 | 19 | 30 | 24 | - | - |
| N213 | `F05326DF-FA0C-4619-8A75-0411CB1CB2F9` | investigation | 5 | 19 | 30 | 24 | - | - |
| N186 | `1EABAD2F-1D1A-4124-A324-4EFAD6DDF176` | Methods | 21.9 | 26.4 | 40 | 26 | - | - |
| N168 | `D81C6E33-ED3A-45ED-9567-78EC22F9A6C7` | Vitakka | 28.2 | 26.5 | 40 | 26 | - | - |
| N188 | `6E92A01E-0E8D-494E-8249-EF0EF0D22987` | Bodily sensations | 10.4 | 26.8 | 30 | 26 | - | - |
| N187 | `A478FC19-7AC1-4480-A9C9-93AD4C925970` | Object-oriented / mindfulness | 15.2 | 29.4 | 35 | 26 | - | - |
| N356 | `CC958820-A4B7-44D0-92BA-77298D5023E8` | Nondual / awareness | 24 | 31.2 | 35 | 26 | - | - |
| N355 | `CDC8A96B-6E93-4E32-866F-BE9953574E4B` | Subject-oriented / mindfulness | 19.8 | 31.9 | 35 | 26 | - | - |
| N503 | `92e7e70f-edac-44ea-93e0-0cefc49b00e7` | Short / breaths | 11.6 | 32.2 | 6 | 22 | - | - |
| N502 | `b311c267-ddea-442f-a1be-45384ae1f5b2` | Long / breaths | 12.3 | 32.3 | 6 | 22 | - | - |
| N504 | `001c1f45-1cdc-4509-9eaf-0de388d5312e` | Experiencing / the whole body | 10.9 | 32.4 | 6 | 22 | - | - |
| N169 | `8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B` | Vicāra | 29.2 | 32.5 | 40 | 26 | - | - |
| N517 | `542908c6-6e6c-486c-acb0-82bc1e958a5f` | Contemplating / relinquishment | 13 | 32.7 | 6 | 28 | - | - |
| N505 | `6535bfe6-6092-46f4-b3f2-30485668cb97` | Caliming the / body-conditioner | 10.3 | 33 | 6 | 22 | - | - |
| N516 | `789c5583-fdba-49b2-a8f9-4ba5790c1b2b` | Contemplating / cessation | 13.4 | 33.2 | 6 | 28 | - | - |
| N506 | `60c3edc6-88a8-46c1-abf5-41b1c1305b10` | Experiencing / rapture | 10 | 33.8 | 6 | 24 | - | - |
| N515 | `23c8773f-2400-41f8-aa3f-1732a2ad6e1b` | Contemplating / dispassion | 13.6 | 34.1 | 6 | 28 | - | - |
| N189 | `349EFC6D-D96C-4E61-A839-93D31BF698B5` | Breath | 11.4 | 34.2 | 30 | 26 | 290 | - |
| N507 | `82394c73-36c4-4b9c-a23d-645eb61cbc99` | Experiencing / happiness | 10 | 34.7 | 6 | 24 | - | - |
| N514 | `fcc80318-3ed1-4f5b-8c0d-7f85b199cc06` | Contemplating / impermanence | 13.5 | 35 | 6 | 28 | - | - |
| N508 | `ff3bf3fd-f5c1-49df-a27a-65331699f167` | Experiencing / the mind-conditioner | 10.3 | 35.7 | 6 | 24 | - | - |
| N513 | `bfd99f73-2ba7-47b6-933c-7cef351e3b43` | Releasing / the mind | 13.2 | 35.8 | 6 | 26 | - | - |
| N512 | `c83c6982-a32e-440f-aa81-e118aebda1c0` | Steadying / the mind | 12.7 | 36.3 | 6 | 26 | - | - |
| N509 | `361d7899-a7a4-4716-a6cc-e3fc2ad50c7f` | Calming the / mind conditioner | 10.9 | 36.3 | 6 | 24 | - | - |
| N511 | `4434a2d5-fe99-4cfe-9fef-978411b910f3` | Gladdening / the mind | 12.1 | 36.5 | 6 | 26 | - | - |
| N510 | `e77a1def-b3f1-4b08-9e28-4d889a728fcd` | Experiencing / the mind | 11.5 | 36.6 | 6 | 26 | - | - |
| N191 | `61282C0C-C654-4B5D-B2F9-ECF698B16489` | Choiceless awareness | 21.7 | 37.8 | 30 | 26 | - | - |
| N192 | `9FC8F28B-4B52-4BFC-9349-4B5271FCDD84` | Open awareness | 18.3 | 38.1 | 30 | 26 | 286 | - |
| N190 | `ED71676A-652A-400A-AAEB-70A6B980A6F2` | Mantra | 14.4 | 38.2 | 30 | 26 | - | - |
| N163 | `202B8B0D-13DA-459A-9D5E-ED5DD40D30E4` | Emotional blockages | 23.9 | 52.1 | 40 | 15 | - | - |
| N184 | `672E2CBD-7421-4E94-9728-95353BCD772E` | High | 4.2 | 95.6 | 40 | 15 | - | - |
| N305 | `CC97CAEF-3828-466E-B55A-BA85783CE034` | Acceptance and agency | 0.7 | 101.6 | 40 | 5 | - | - |
| N254 | `84C0342B-29BC-4E8A-A39D-0D638491312E` | Embracing vulnerability | 4.2 | 114 | 40 | 15 | - | - |
| N541 | `299ed736-3b6e-42c7-953b-7f3bd1ffaf14` | existential / vulnerability | 17.7 | 114.1 | 21 | 25 | - | - |
| N540 | `d3ded962-4f7f-48eb-bf01-d789d30e5f0b` | ego-based / vulnerability | 10.8 | 116.8 | 21 | 13 | - | - |
| N542 | `13cfa65a-2290-4317-80de-b62df0529942` | ego-transcendent / vulnerabilities | 24.9 | 118.7 | 21 | 32 | - | - |
| N307 | `DEADD385-73FB-4EA3-AACC-13C6B453E9E6` | Self- / Transcendence / needs | 5.4 | 140.2 | 55 | 15 | 333 | - |
| N009 | `3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A` | Deep states of calm | 23.9 | 141.2 | 40 | 26 | 339 | - |
| N539 | `48ecedde-606e-4ac2-9451-07b605f2b076` | Inner child / work | 17.8 | 148 | 40 | 41 | - | - |
| N306 | `0F8B3461-7B9D-4E1D-A392-A6DE782AE537` | Motivation split | 8.6 | 154.7 | 40 | 18 | 223 | - |
| N388 | `35A99FE2-F640-4DA8-A43F-419034A979F8` | #27 Like Holding A Bird | 19 | 174 | 10 | 26 | 318 | - |
| N389 | `D1079C14-99E8-43AE-81B1-D3257E6D3B4E` | #28 This Too Will Pass | 23 | 175 | 10 | 26 | 319 | - |
| N387 | `9EB433EF-53A7-4E39-B6CC-B14C8E5E26BA` | #26 Fingers Pointing At the Moon | 15 | 175 | 10 | 26 | 317 | - |
| N390 | `1064343B-5E1E-4A7C-B084-DAF0E6756916` | #29 A Pearl In A Shell | 27 | 177 | 10 | 26 | 320 | - |
| N386 | `0308594E-E5BE-4DFA-A0B5-59EF96C9C484` | #25 Still Flowing Water | 11 | 177 | 10 | 26 | 316 | - |

### Lower Middle: paradigms, strategies, heart/gut/emotion work

| Ref | ID | Node | lat | lng | size | color | slides | flags |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| N379 | `87FA9A3C-4045-4BA1-BC4A-C32E66C07554` | #18 Climbing The Flat Mountain | -17 | -180 | 10 | 26 | 309 | - |
| N380 | `E62CDC0A-99EB-4E92-889D-991D382D0831` | #19 Everything Is Now | -13 | -177 | 10 | 26 | 310 | - |
| N383 | `FFF1E9D3-0FAB-4730-A28C-C5AB47AD189E` | #22 Not Sure | -1 | -175 | 10 | 26 | 313 | - |
| N381 | `018B0A79-295E-4F63-BE34-4DFE63C381A8` | #20 Question | -9 | -175 | 10 | 26 | 311 | - |
| N382 | `0EEF73E1-0ACC-4528-BE29-7BBAD4DB6DDD` | #21 Buddho | -5 | -174 | 10 | 26 | 312 | - |
| N086 | `B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63` | Depth of transformation | -4.1 | -142.3 | 45 | 35 | - | - |
| N518 | `1a66cc15-5b3e-4f4d-a7e4-6d0b5adba1eb` | Archeology/ / History | -7.9 | -133.7 | 16 | 33 | - | - |
| N079 | `B542C18E-9775-4FF3-A954-282F6DF6F5D0` | Biology | -6.4 | -133.5 | 15 | 33 | 245 | - |
| N078 | `AC6F030A-2049-43C8-B949-803CA7E4FA61` | Psychology | -5.4 | -132.7 | 15 | 33 | - | - |
| N080 | `59883541-AA97-43E4-ADDB-9FAB51337AFA` | Mathematics | -8.7 | -132.4 | 15 | 33 | 246 | - |
| N077 | `1996AC29-0768-4BFD-B503-7EEF89B17DE2` | Physics | -5.1 | -131.2 | 15 | 33 | - | - |
| N075 | `E4B25E04-2873-4203-8E5C-0751BB4CE230` | 3. / Crisis period: / Anomalies / create trouble | -7.9 | -130.8 | 20 | 35 | - | - |
| N081 | `7775CE2F-41DF-4766-9120-1FC72ABFD9FC` | Neuroscience | -9.1 | -130.6 | 15 | 33 | 256 | - |
| N076 | `7E921661-D792-418A-AA51-D1AFB9C2FA7E` | Foundations of science | -5.6 | -129.2 | 15 | 33 | - | - |
| N082 | `69EDF766-1CA2-451B-83D3-5993A5CC0373` | Psi | -8.8 | -129.2 | 15 | 33 | 255 | - |
| N083 | `7FA01314-361B-4C77-920A-824B38177CE8` | 4. / Paradigm shift: / Underlying assump- / tions examined | -11.9 | -127.8 | 20 | 35 | - | - |
| N074 | `298D83F6-FBCF-4D2F-AC0B-68DFCD6AE5B0` | 2. / Normal science: / One dominant / paradigm | -3.9 | -126.8 | 20 | 35 | - | - |
| N072 | `538C89D3-3710-4D3F-9297-50C588EAC961` | Phases of / paradigm change | -7.9 | -123.8 | 30 | 35 | 238 | - |
| N084 | `AC391C08-CB42-4443-A2C3-1128AC357F44` | 5. / Post-revolution: / A new paradigm / gains dominance | -11.5 | -121.6 | 20 | 35 | - | - |
| N073 | `1CFA1123-E052-4049-AFD7-852D36EDE838` | 1. / Pre-paradigm: / No consensus | -4.7 | -121.1 | 20 | 35 | - | - |
| N085 | `807EE50B-B4E4-42B7-B1B4-10EBB38C1299` | Settles in: / Convergence between / assumptions and reality | -21 | -117 | 50 | 35 | - | - |
| N071 | `4265E048-CDF8-4B44-836C-38549C965725` | Trusting the / current paradigm | -7.9 | -116.2 | 40 | 35 | - | - |
| N068 | `B8BA585E-D985-44A9-A8E9-6BC1E3EA3731` | Strategies for / Understanding | -9 | -107 | 70 | 35 | - | - |
| N069 | `AA38CD3C-7D47-4CD3-956C-5EE5C285E408` | Dogmatism | -19 | -103 | 40 | 35 | - | - |
| N319 | `9CE480B4-FB41-45F1-ABF5-D956A5526141` | Path of the Head | -3.5 | -101.3 | 110 | 0 | 336 | - |
| N070 | `16C1A9C0-30BF-441E-8DA4-3216C0A42C51` | Thought labyrinths / / rumination | -13 | -91 | 40 | 35 | - | - |
| N059 | `37A0AEC4-634C-4BF4-A14B-7B6E25172BBC` | Observation | -4 | -80 | 50 | 39 | - | - |
| N067 | `0CEDFFCF-0C8D-4705-B40C-439631CCD3E1` | Direct | -2 | -75.4 | 40 | 35 | - | - |
| N060 | `4572B437-5182-4EBE-A383-F76440484F8E` | Indirect | -6 | -75.4 | 40 | 35 | - | - |
| N063 | `951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0` | Sensing | -3 | -71.2 | 40 | 35 | - | - |
| N061 | `9BA80071-89E9-400F-89CA-53CA700FA703` | Instruments | -7 | -71.2 | 40 | 35 | - | - |
| N066 | `95A61B65-7A40-42FA-8622-D7A0B736BA9C` | Biases | -1.5 | -65 | 30 | 33 | - | - |
| N065 | `B470B5D1-31ED-4F91-A94D-6A94CF45E744` | Limitations | -3.5 | -65 | 30 | 33 | - | - |
| N062 | `450F8534-2F59-4A8E-BA92-D417FD0FE000` | Advantages | -5.5 | -65 | 30 | 33 | - | - |
| N141 | `AE242003-1C0A-40BF-AEA2-567E61901171` | doing | -30 | -12 | 40 | 24 | - | - |
| N140 | `2095179D-0AC4-4378-8E6F-8F71E2793FAD` | getting, avoiding, manipulating, / changing, controlling, collecting | -30 | -4 | 40 | 26 | 265 | - |
| N219 | `B1212500-7C71-4B0B-B979-C8A5E93B544C` | Natural unfolding | -8 | 0.5 | 30 | 26 | - | - |
| N220 | `D7191BF4-96AD-46A9-89F8-B015FD27C991` | virtuous conduct | -2 | 0.8 | 25 | 24 | - | - |
| N211 | `CBDECA18-D9A1-4FDE-84FD-DDB8849710A3` | Seven factors of awakening | -8 | 9 | 35 | 26 | - | - |
| N331 | `5D8415B8-AD5B-44AE-804C-9A2A62B177F8` | Path of the Heart | -20.4 | 9 | 110 | 0 | 335 | - |
| N146 | `D6B5FE51-C8D9-42EB-B0BE-07B09B51776C` | accepting, letting be, allowing, / embracing, opening, experiencing | -30 | 9 | 40 | 26 | 266 | - |
| N427 | `3CEE76EB-E3AF-4C32-B60F-22A156E6BB15` | light | -8.1 | 13.6 | 8 | 21 | - | - |
| N423 | `1256BBF3-19B7-4994-80B0-89870561353E` | dwelling | -9 | 13.6 | 8 | 21 | - | - |
| N424 | `F6E0E1C1-B617-493F-8107-18C965413CD0` | temperature | -9.9 | 14.1 | 8 | 21 | - | - |
| N426 | `9FC8EA8E-9B5C-4588-9EB5-6D6CFA375656` | postural support | -7.7 | 15.2 | 8 | 21 | - | - |
| N412 | `02852BE2-AC45-4AC6-A497-222748F58070` | external / conditions | -9 | 15.2 | 10 | 24 | - | - |
| N421 | `B7CA1D98-2868-4649-8C38-CC0D651E4013` | teachings | -6.3 | 15.4 | 8 | 21 | - | - |
| N425 | `CADCA338-DB6B-4EEB-94A1-D24136348439` | air quality | -10.2 | 15.8 | 8 | 21 | - | - |
| N422 | `2E19941C-9821-473B-891F-8E2F066A56F8` | purpose | -5.2 | 16.1 | 8 | 21 | - | - |
| N484 | `cf11b4d5-145f-463f-88ba-ffce62f2f1c0` | distractions | -8.1 | 16.3 | 8 | 21 | - | - |
| N428 | `7638D6DF-814D-4E9D-AAE1-17D8CC1015B7` | food | -9.4 | 16.7 | 8 | 21 | - | - |
| N411 | `FB5CF64B-805B-4628-9997-3D64BE0F373F` | social | -6.3 | 16.9 | 10 | 24 | - | - |
| N212 | `A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1` | mindfulness | -1 | 17 | 30 | 24 | - | - |
| N420 | `105FA833-ED32-4FF2-8704-0EBCAA333240` | teacher | -5.2 | 17.4 | 8 | 21 | - | - |
| N410 | `1247A5D7-C7E3-43EE-9998-0413C9AF2060` | external | -8.4 | 18 | 12 | 25 | - | - |
| N419 | `701F886F-8C4E-437E-9727-6F80076BEE86` | community | -6 | 18.6 | 8 | 21 | - | - |
| N408 | `F789178C-D280-49D7-A521-46268D35FB2B` | supporting conditions | -9.5 | 18.8 | 15 | 26 | - | - |
| N417 | `48F46A81-1A4F-46C0-B447-C386D337E750` | health | -7 | 19.7 | 8 | 21 | - | - |
| N152 | `1E7C0EB1-1DDE-4044-A8B7-E4540487DB1C` | The threefold training | -13.4 | 19.7 | 55 | 26 | - | - |
| N409 | `07E6E19D-571C-4F83-8AF2-D91D39949044` | internal | -8.4 | 19.8 | 12 | 25 | - | - |
| N414 | `2C8444EB-22C2-48E2-BE19-B2CD3A9E0F02` | posture | -6.5 | 20.8 | 8 | 21 | - | - |
| N413 | `428C2162-AE1A-4831-A9A5-D07E4AF7E57B` | physical | -7.6 | 21.1 | 10 | 24 | - | - |
| N418 | `4D0A4946-DE47-4817-BBFC-466D029D931B` | energy | -8.7 | 21.3 | 8 | 21 | - | - |
| N415 | `2F72F481-7AA8-4EC8-868E-021BF2624B23` | airways | -6.9 | 22.4 | 8 | 21 | - | - |
| N156 | `F26DDAD3-74C1-48A8-9488-8BAB580947E7` | Generosity | -21 | 22.6 | 40 | 26 | - | - |
| N416 | `815372B1-2600-40E5-AF9B-21458F5F8B34` | comfort | -8 | 22.7 | 8 | 21 | - | - |
| N519 | `b48e6b4a-7a00-44fb-bd4b-084ea8813261` | Right action | -3.8 | 22.9 | 16 | 29 | - | - |
| N520 | `d8364c8e-fd92-4ba4-bda7-37b50ca69417` | Right speech | -6 | 23.4 | 16 | 29 | - | - |
| N521 | `0f57816b-d8d4-4538-904a-0a1b382d24bf` | Right livelihood | -1.7 | 23.6 | 16 | 29 | - | - |
| N153 | `E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4` | Sīla | -5.5 | 27 | 90 | 28 | 346 | - |
| N154 | `DA6F224D-BC2D-47BF-91C5-9538BF062D81` | Methods | -18 | 27.6 | 40 | 26 | - | - |
| N158 | `F0AA6E16-8A46-43FA-B435-942FFF734B06` | Loving-kindness | -26.2 | 28.4 | 35 | 24 | 254 | - |
| N155 | `603F93B5-AA5A-49C2-8AEE-440DA485BA40` | Restraint | -12.5 | 29.6 | 40 | 26 | 289 | - |
| N157 | `05CF2077-5B2D-43E7-92AC-232082EA7F8C` | The brahmavihāras | -23 | 31.6 | 40 | 26 | - | - |
| N162 | `DEA78281-438E-4CB6-ADCE-25DC85D9FF37` | Self-compassion | -15 | 34.6 | 40 | 26 | 252 | - |
| N160 | `EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3` | Equanimity | -20 | 34.6 | 35 | 24 | - | - |
| N159 | `BEA84E38-CF01-4A16-941B-F26EEE3E6D88` | Compassion | -27.3 | 35.4 | 35 | 24 | 253 | - |
| N161 | `C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF` | Sympathetic joy | -24 | 39.7 | 35 | 24 | - | - |
| N177 | `1D823800-DD7A-4B6F-94EA-517D4DE9876B` | Low | -27.7 | 76.9 | 40 | 15 | - | - |
| N499 | `81d40a9e-a6fb-4b70-8415-be4c54cf1e96` | Secondary / emotions | -21.1 | 79.3 | 41 | 6 | 288 | - |
| N500 | `caaf863a-113c-455c-9ab0-8b4b7b71c4a9` | Primary / maladaptive / emotions | -10.9 | 85.2 | 41 | 7 | 288 | - |
| N313 | `E400970C-2383-40ED-90F4-793AFAD87E45` | Rejecting anger | -17.4 | 87.2 | 40 | 3 | - | - |
| N501 | `9e43a20d-e120-4a9a-813f-01571e7290c2` | Primary / adaptive / emotions | -1.4 | 90.8 | 41 | 8 | 288 | - |
| N314 | `788AC673-A0A0-4E77-93EC-2A21B981D7A8` | Global distress | -23.3 | 92.2 | 40 | 3 | - | - |
| N477 | `a0f81980-29b7-4b70-88b2-beb48cf8f782` | Substance Use / and Body-Based / Strategies | -29.3 | 92.7 | 11 | 12 | - | - |
| N316 | `829B047D-0C32-4887-8A3B-690BED8B847B` | Needs | -11.1 | 94.3 | 40 | 4 | - | - |
| N476 | `55c930a2-cbee-4d1b-a0ff-3e691105b8fb` | Control and / Compensation / Strategies | -29.8 | 95.1 | 11 | 12 | - | - |
| N311 | `973015FD-576A-40F3-A86C-2E8EDA196B5F` | Assertive anger / / self-compassion | -5.2 | 95.2 | 40 | 5 | - | - |
| N255 | `F0CABC11-FB43-49D3-B32C-F6AC2F728BEF` | Resisting vulnerability | -27.7 | 96.6 | 40 | 15 | - | - |
| N475 | `9f4d3aa4-ef61-42e3-b7d3-949bc1e12c99` | Externalization / Strategies | -29.9 | 97.4 | 11 | 12 | - | - |
| N315 | `3C66F9F4-19C8-497C-AD5A-377F74970968` | Fear / shame | -17.4 | 98 | 40 | 4 | - | - |
| N337 | `65FB0CCF-F7C4-4159-9D6D-0F929AB12136` | ← back and forth between → | -11.1 | 98.1 | 20 | 4 | - | - |
| N474 | `cf19df5f-26ed-45b8-b413-4b5df2210b0a` | Intellectualization / and Rationalization / Strategies | -29.5 | 99.8 | 11 | 12 | - | - |
| N336 | `4F5D4105-E8C7-4F54-97E6-F9549BC75D4F` | ← back and forth between → | -5.2 | 101.5 | 20 | 5 | - | - |
| N473 | `4cc9d1a9-fb24-4f7a-a107-7723f58f5fa2` | Denial and / Avoidance-Based / Strategies | -28.2 | 101.7 | 11 | 12 | - | - |
| N317 | `DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB` | Negative self- / evaluation | -11.1 | 103.1 | 40 | 4 | - | - |
| N312 | `29155A2F-FCBB-4347-90DE-E8D3F86A3FFA` | Grief / hurt | -5.2 | 106.6 | 40 | 5 | - | - |
| N253 | `4D115C88-FC8E-4544-AC27-0B775B126D44` | In terms of / emotional / processing | -13.5 | 109.5 | 40 | 15 | 347 | - |
| N243 | `13BD4AA3-E5C9-4A13-A702-70244A2B81AC` | Strategies for peace | -29 | 111.9 | 70 | 15 | - | - |
| N250 | `A5D7A8C8-3B1D-44A4-AA31-4B1602B10252` | In terms of needs | -13 | 119.2 | 40 | 15 | - | - |
| N252 | `8DFECF54-6362-48C2-84A0-B9A79FD7371A` | Psychological / adaptations | -4 | 128.4 | 40 | 15 | - | - |
| N251 | `08A7BDCA-0161-40B1-9F74-EF7E09C1BE13` | Adaptations / in the world | -23 | 128.4 | 40 | 15 | - | - |
| N310 | `662B5EE1-6533-44B3-BC7A-2DF7708F1658` | Physiological / needs | -26.1 | 137.8 | 55 | 15 | - | - |
| N545 | `5d6f6103-a295-4260-94f7-97c9bb13e377` | Safety / needs | -22.3 | 147.1 | 55 | 15 | - | - |
| N308 | `CDC69285-DE4B-40DE-BDFB-73C750FA8CB4` | Self- / Actualisation / needs | -3.6 | 148.2 | 55 | 15 | - | - |
| N323 | `6345AAF7-5F22-49C1-8052-E28059BFFC3F` | Empathy | -30 | 150.2 | 40 | 12 | 285 | - |
| N309 | `EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95` | Love and / Esteem / needs | -14.4 | 150.6 | 55 | 15 | - | - |
| N322 | `6423DD8B-C097-4C26-9917-D401ACA5FE91` | Wisdom | -25 | 152.6 | 35 | 12 | 233 | - |
| N404 | `3B448BEF-259A-47A2-BCC7-9559D595BC29` | Authenticity | -27.9 | 155 | 35 | 12 | 232 | - |
| N405 | `D5338437-FF62-4249-BC13-2119C1A92031` | Self-disclosure | -26.4 | 159.7 | 30 | 15 | 227 | - |
| N318 | `88244D22-DAEF-4189-83EB-E7B5D5726E62` | Meaning protest | -2.3 | 160.6 | 40 | 18 | 222 | - |
| N321 | `987F0FDD-0FAF-44FC-9DE7-7D88E32D801D` | Case formulation | -16.7 | 161.3 | 30 | 15 | 228 | - |
| N320 | `F2CA7E5B-766D-48F0-941D-D4B1FD54C097` | Unfinished business | -10 | 163.7 | 40 | 18 | 221 | - |
| N332 | `025E5CB8-BF2F-46EC-A170-4F80BD2FCA54` | Anxiety splits | -29.1 | 165.4 | 40 | 18 | 219 | - |
| N330 | `7D0652E2-E579-47BC-8FB9-E1FBA3539A3F` | Conflict splits | -22 | 165.5 | 40 | 18 | 220 | - |
| N376 | `02ADCD5A-005F-4E98-B54B-908A3369F393` | #15 At Peace With Pain | -29 | 174 | 10 | 26 | 306 | - |
| N377 | `0756CD1E-576F-48A7-B08C-61B316648D36` | #16 What The Fuck? | -25 | 175 | 10 | 26 | 307 | - |
| N378 | `AA64AAC0-B4FB-4763-9CE0-26C22D1298D5` | #17 Eternal Hug | -21 | 177 | 10 | 26 | 308 | - |

### Far South: head-heart-gut archetypal root triad

| Ref | ID | Node | lat | lng | size | color | slides | flags |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| N367 | `A0DF5A2D-6373-45E8-94E3-3EB81E6C0C49` | #6 Choiceless Awareness | -65 | -180 | 10 | 26 | 297 | - |
| N362 | `49A2D788-FA72-4869-A3B5-012413A1AEF4` | #1 Just Listen | -85 | -180 | 10 | 26 | 292 | - |
| N368 | `DF459044-AE8A-4A1A-A4A3-E27CFEBAB5DF` | #7 Sound Of Silence | -61 | -177 | 10 | 26 | 298 | - |
| N266 | `F05FC454-9C67-4E53-AAC4-A288D7E0E4E2` | Abstract principles | -71 | -148.2 | 30 | 35 | - | - |
| N265 | `8573618D-34C1-481C-A217-71AB05C7C4D7` | Concerned with: / Long-term goals | -71 | -134.6 | 35 | 35 | - | - |
| N263 | `E55861C5-E9D1-4B9A-956B-DC53B1C0E01E` | Mode: Thinking / / Exploration / / Existential emotions | -67 | -128.1 | 35 | 35 | 345 | - |
| N133 | `EDCAFFF6-FD78-40E0-B719-97569DCD8819` | The Human - / Reason | -75 | -121 | 40 | 35 | 261 | - |
| N134 | `46CBB5AE-79D5-4808-A400-4B804DA91E12` | What matters to / your head | -81 | -121 | 50 | 35 | - | - |
| N132 | `A35D6C5D-B56F-416F-B337-41FB9E923AE0` | Existential problem: / What can I control? / What - and how - / do I know? | -63 | -120 | 40 | 35 | - | - |
| N264 | `8405A4E1-F7F9-4016-86B8-2E5C98520036` | Motivated by: / Truth / Falsity | -66.6 | -112.2 | 35 | 35 | - | - |
| N267 | `B9839052-6809-4E31-8792-FF4DF8C9FC48` | Growth potential: Can / discover principles | -71 | -105.6 | 35 | 35 | - | - |
| N268 | `38B0E475-2D54-4818-ABC6-E353229FDFF2` | Spiritual interest: / Transcending lives | -71 | -90 | 30 | 35 | - | - |
| N234 | `E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0` | Communal / well-being | -72 | -25 | 30 | 26 | - | - |
| N233 | `05C8F42F-1F73-443B-B461-A3FFE6867199` | Concerned with: / Mid-term goals | -72 | -13 | 35 | 26 | - | - |
| N232 | `5946ACA1-B182-4776-BAC0-5EC43E0480C6` | Mode: Empathy / / Intuition / Faith / / Social Emotions | -67.3 | -8.2 | 35 | 26 | 344 | - |
| N137 | `4D1CEB04-6987-4C58-93B0-57DBB0914867` | Existential problem: / What gives life / meaning? | -63 | -1 | 40 | 26 | - | - |
| N136 | `35476F95-E324-40D2-B224-A5E27568028C` | The Lion - / Thymos | -75 | 0 | 40 | 26 | 261 | - |
| N135 | `8D82CC00-C9F5-4B9E-B256-A879D4623B3C` | What matters to / your heart | -81 | 0 | 50 | 26 | - | - |
| N231 | `7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8` | Motivated by: / Honour / Shame | -67 | 8.6 | 35 | 26 | - | - |
| N235 | `4C0B70B2-C4EC-4716-A08C-220E856D5B4A` | Growth potential: / Can be trained | -72 | 13.3 | 35 | 26 | - | - |
| N236 | `A870BA4E-6243-4C93-B823-BDF69104A69A` | Spiritual interest: / After/next life | -72 | 27.7 | 30 | 26 | - | - |
| N260 | `CC9D819E-DC87-4E17-97B4-AADC851E9E8E` | Individual / survival | -72 | 90.5 | 30 | 15 | - | - |
| N259 | `5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B` | Concerned with: / Immediate goals | -71.9 | 103.4 | 35 | 15 | - | - |
| N261 | `8A3E20D3-00BC-47E5-AC05-E717C6A803C6` | Mode: / Action / Needs / / Primal emotions | -67.6 | 110.7 | 35 | 15 | 343 | - |
| N239 | `27D920A3-4748-497F-92C3-0CEAE399325B` | Existential problem: / What do I need / to function? | -63.6 | 120 | 40 | 15 | - | - |
| N238 | `2C1FEC64-B01F-4D90-93AF-4F17977F3E05` | The Beast - / Appetite | -75 | 120 | 40 | 15 | 261 | - |
| N237 | `9BFCB2C3-78B9-4982-8501-2BFF113D4207` | What matters to / your gut | -81 | 120 | 50 | 15 | - | - |
| N256 | `FF0DE3EB-BA66-4B54-9700-1075754A5EB3` | Motivated by: / Pain / Pleasure | -67.2 | 131.7 | 35 | 15 | - | - |
| N257 | `53CADF73-2F2C-4BCC-8748-842EE8177A85` | Growth potential: / Can be tamed | -72 | 136.3 | 35 | 15 | - | - |
| N258 | `D733DA5C-E0BC-4EAE-BD64-92B116E15988` | Spiritual interest: / This life | -72 | 151.9 | 30 | 15 | - | - |
| N365 | `B2F8D5A3-DD26-4830-9FD5-F80B21C068AD` | #4 Growing Like A Tree | -73 | 177 | 10 | 26 | 295 | - |
| N364 | `23D39D8E-9DDE-49B2-AE64-7EAB317AD8D3` | #3 Breath | -77 | 177 | 10 | 26 | 294 | - |
| N366 | `8DD9C812-3C73-4848-9114-C2F29E0AFEA6` | #5 Innocent | -69 | 179 | 10 | 26 | 296 | - |
| N363 | `3FBEFC9F-7E21-41AB-93A7-5AEB57EF8727` | #2 Distracted By Truth | -81 | 179 | 10 | 26 | 293 | - |

### South: love, emotion-focused work, needs, transition bands

| Ref | ID | Node | lat | lng | size | color | slides | flags |
| --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| N373 | `F67D6208-823F-4AF0-9709-FC50F411F4C0` | #12 Vulnerable Strength | -41 | -180 | 10 | 26 | 303 | - |
| N372 | `900863F2-FDD6-496F-A70C-85D971B9EFD9` | #11 B.O.D.Y. | -45 | -177 | 10 | 26 | 302 | - |
| N371 | `B822BBD8-984D-44EF-8B7D-AA4254C4C841` | #10 Unbleaching the Rainbow | -49 | -175 | 10 | 26 | 301 | - |
| N369 | `44635E23-B60A-470A-BA51-FBC74269627D` | #8 Seeds Of Good | -57 | -175 | 10 | 26 | 299 | - |
| N370 | `D9B606C7-372E-4CAF-8EAC-C9B6925D5BD3` | #9 Roots Of A Tree | -53 | -174 | 10 | 26 | 300 | - |
| N143 | `B7A263AD-5457-4712-A089-03B24D041629` | personal identification | -34.5 | -15.5 | 40 | 24 | - | - |
| N144 | `B4399091-3D0A-472B-A40C-BC8CDD097E7F` | depended on comparison | -37 | -15 | 40 | 24 | - | - |
| N145 | `20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB` | non-sustainable happiness | -39 | -15 | 40 | 24 | - | - |
| N142 | `F3695B21-1EAA-404B-9239-0767DA0BC90C` | past / future | -32 | -13 | 40 | 24 | - | - |
| N139 | `80130A99-E12B-459A-B43D-1CE8BB3B1EF2` | Strategies for / happiness / love | -38.5 | 1.1 | 70 | 26 | - | - |
| N138 | `0EF9450D-3CB7-4D13-BCFB-49088E87F374` | Settles in: Happiness, / love, felt meaning | -46.9 | 4.2 | 40 | 26 | - | - |
| N147 | `6473A93C-A4A4-41D5-9765-D58B3F8A57EA` | being | -30.5 | 18.4 | 40 | 24 | - | - |
| N148 | `0A57B7F6-E875-485D-98F2-66458F5FBC6B` | present | -32.9 | 19 | 40 | 24 | - | - |
| N149 | `19DB1035-B51E-4F0A-8F97-888375D12E8F` | selfless | -34.9 | 19.9 | 40 | 24 | - | - |
| N150 | `34C06752-B7AD-461D-A5E9-B29CAE227645` | sustainable happiness | -40 | 21 | 40 | 24 | - | - |
| N151 | `83D9EEC0-3314-4BD5-826E-F1ADDA1492EA` | independent of comparison | -37.5 | 21.7 | 40 | 24 | - | - |
| N183 | `4AF3AF2F-5D76-4620-911E-54398F84F288` | Level of / emotional / arousal | -55.9 | 80 | 30 | 15 | - | - |
| N182 | `EBCF0E75-DA1D-4533-BEEA-73657C4588AF` | Types of / emotion | -60 | 83.1 | 30 | 15 | 288 | - |
| N178 | `C0993BB8-9C64-4F7A-A673-289EA2A33D0D` | Level of / experiencing | -51.4 | 83.3 | 30 | 15 | - | - |
| N179 | `00E891B6-75E2-43B7-97B4-62F6DD69B15B` | Emotions | -56 | 89.4 | 40 | 15 | 248 | - |
| N180 | `B477D774-01E4-4F6A-93B1-111E699FFE75` | Components of / emotion | -51.2 | 89.9 | 30 | 15 | - | - |
| N262 | `83BA614D-5560-48B0-8377-217CF04E01FC` | Needs | -57 | 92.4 | 40 | 15 | - | - |
| N342 | `56ADF369-0C75-4600-875C-9C91878092B7` | Interactional / cycle | -33.7 | 94.5 | 30 | 15 | - | - |
| N181 | `E2D52070-A83C-4D48-A218-BB3DC7BEAF21` | Emotional style | -52.9 | 95 | 30 | 15 | - | - |
| N340 | `FF356F2F-2107-4629-921F-C964A87A70A4` | Emotions and / intentional root | -55.5 | 97.9 | 30 | 15 | 291 | - |
| N249 | `39717030-47DE-4D14-8D3B-9D454BE3AF3B` | Authenticity vs. / attachment | -40.4 | 100.3 | 30 | 15 | 243 | - |
| N341 | `83A86F30-323A-4D13-AD6F-40B5B057AB87` | In terms of current / relationships | -33.2 | 101.7 | 40 | 15 | - | - |
| N248 | `475EAF65-F5DA-4D50-AA66-64CF5305CBC9` | In terms of early / relationships | -36.2 | 104.2 | 40 | 15 | - | - |
| N242 | `744A07BE-0872-47C6-B69E-6FD2A3E8EC1B` | (Even need for excitement / settles in peace) | -46 | 105 | 15 | 12 | - | - |
| N240 | `3DB4BB32-A030-449C-B131-424A2FD3A651` | Path of the Gut | -54 | 109.5 | 100 | 0 | 337 | - |
| N241 | `FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D` | Settles in: Peace | -44 | 111 | 40 | 15 | - | - |
| N244 | `6940ABE5-F16A-451E-9986-1853902A8FAA` | In terms of / Emotion-Focused / Therapy | -38.3 | 121.5 | 40 | 15 | - | - |
| N245 | `2657C9EE-BFA1-43FA-BB34-1A624A4E5237` | Mechanism of change | -46.4 | 127.7 | 35 | 16 | 249 | - |
| N406 | `1F3B0749-A55A-4AE8-905A-8103424BB959` | Foundations | -43.7 | 129.9 | 35 | 16 | 259 | - |
| N543 | `d7bbbade-d1b8-4124-850a-7b99dc846fd3` | Emotion-Focused / Mindfulness | -39 | 130.4 | 35 | 13 | - | - |
| N246 | `228A6803-C3D9-420B-A083-476A5B6FE927` | Method | -41.4 | 136 | 35 | 16 | 287 | - |
| N544 | `027d3b7c-45c2-4877-9175-9283a42f7826` | Method | -37.3 | 137.4 | 35 | 13 | 338 | - |
| N247 | `F095128A-1A37-4D3C-98C5-FAE6E3F9E808` | Islands of work / in a sea of empathy | -34.6 | 142.8 | 35 | 15 | - | - |
| N329 | `23D5758E-178A-43BD-A82B-5D1F11CC1223` | Alliance work | -43.7 | 145.1 | 30 | 15 | 224 | - |
| N328 | `04C21F20-915C-446A-902D-A8D5D7076C6F` | Unconditional / positive regard | -37.4 | 150.4 | 35 | 12 | 229 | - |
| N335 | `2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB` | Self-soothing | -53 | 150.4 | 40 | 18 | 216 | - |
| N326 | `2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D` | Attunement | -34.2 | 153.7 | 35 | 12 | 230 | - |
| N324 | `29EA91F8-0360-45F4-9E0A-511D80C51516` | Presence | -31.1 | 155.5 | 35 | 12 | 231 | - |
| N327 | `2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3` | Empathic exploration | -42.7 | 156.6 | 30 | 15 | 225 | - |
| N334 | `94D5EB98-E41E-4DD5-8B8D-06598E285B4E` | Trauma retelling | -47 | 160.3 | 40 | 18 | 217 | - |
| N325 | `4798DE69-2868-4EA6-84D8-E4D0CE7A90E8` | Focusing | -33.9 | 161.9 | 30 | 15 | 226 | - |
| N333 | `C120D32F-4E27-481A-97F9-9B62BB394DF9` | Evocative unfolding | -38.5 | 163.5 | 40 | 18 | 218 | - |
| N375 | `768088FF-1C46-4C69-AE7C-96B20D755754` | #14 Validation | -33 | 175 | 10 | 26 | 305 | - |
| N374 | `012E7168-0401-458D-9123-1F87E9935CFD` | #13 Breath of Love | -37 | 177 | 10 | 26 | 304 | - |

## Typed Outgoing Connection Ledger

Only nodes with at least one outgoing connection are listed here. Targets are shown by `Ref` plus label; use the full id in the inventory when editing source arrays.

| Source | Normal out | Arrowed out | Dashed out | Tunnel out |
| --- | --- | --- | --- | --- |
| N000 the essence of / love / meaning | N001 the essence of / wisdom / will; N002 the essence of / salvation / peace | - | - | - |
| N001 the essence of / wisdom / will | N002 the essence of / salvation / peace | - | - | - |
| N003 Rewiring the gut | N004 Rewiring the heart; N005 Rewiring the head | - | - | - |
| N004 Rewiring the heart | N005 Rewiring the head | - | - | - |
| N006 Unshakeable / Peace | N007 Transcendence curve 0.2,0.5 | - | - | - |
| N007 Transcendence | N008 Existential exploration / / Insight meditation curve 1.2,1 | - | - | - |
| N008 Existential exploration / / Insight meditation | N009 Deep states of calm curve 0.8,0.6 | - | - | - |
| N009 Deep states of calm | - | - | N539 Inner child / work curve 0.5,-0.4 | - |
| N010 real meaning | N011 potentially the source / of not-so-obvious / (but highly attractive) / “qualities” | - | - | - |
| N011 potentially the source / of not-so-obvious / (but highly attractive) / “qualities” | N012 freedom; N013 unshakable peace; N014 salvation; N015 true wisdom; N016 why important?; N039 the essence of / “you” / life; N040 all-encompassing love; N041 the core of / will / agency | - | - | - |
| N016 why important? | N017 Transcendent / Truth | - | - | - |
| N017 Transcendent / Truth | N030 Unity | N018 must be reduced to | - | - |
| N018 must be reduced to | - | N019 Conventional / truth | N028 to be communicated | - |
| N019 Conventional / truth | N021 limitations of; N025 Diversity; N028 to be communicated | N029 to realise; N028 to be communicated | - | - |
| N020 must transcend | - | N019 Conventional / truth | N029 to realise | - |
| N021 limitations of | N022 contextual; N023 ways of cutting the apple; N024 lost in reduction | - | - | - |
| N025 Diversity | N026 Dualist ontologies | - | - | - |
| N026 Dualist ontologies | N027 Dualism | - | - | - |
| N029 to realise | - | N017 Transcendent / Truth | - | - |
| N030 Unity | N031 Monist ontologies | - | - | - |
| N031 Monist ontologies | N032 Idealism; N034 Panpsychism; N035 Physicalism | - | - | - |
| N032 Idealism | N033 Analytic / idealism | - | - | - |
| N035 Physicalism | N036 Emergence | - | - | - |
| N036 Emergence | N037 weak; N038 strong | - | - | - |
| N042 Unconditional / Love | N043 Atammayatā; N046 Liberation | - | - | - |
| N043 Atammayatā | N044 Suññatā | - | - | - |
| N044 Suññatā | N045 Tathātā | - | - | - |
| N045 Tathātā | N046 Liberation | - | - | - |
| N046 Liberation | N047 from; N051 Fundamental / perspective change; N281 Pañña; N407 saṅkhāra / vs. / asaṅkhāra | - | - | - |
| N047 from | N048 delusion; N049 hatred; N050 greed | - | - | - |
| N051 Fundamental / perspective change | N052 From paradoxes / to wisdom; N053 Direct / experience-based / understanding | - | - | - |
| N053 Direct / experience-based / understanding | N054 Intellectual / understanding | - | - | - |
| N054 Intellectual / understanding | N055 Basic conceptual / understanding | - | - | - |
| N055 Basic conceptual / understanding | N056 Levels of / understanding | - | - | - |
| N057 Analysis / questioning | N058 Open-mindedness | N498 back-and-forth | N490 What is / nature doing?; N491 Why is nature / doing what / it is doing?; N485 What IS / nature?; N486 How can I / truly know?; N487 What am I?; N488 Why is any of / this important?; N489 Why is there / a world at all? | - |
| N058 Open-mindedness | N059 Observation; N319 Path of the Head | - | - | - |
| N059 Observation | N060 Indirect; N067 Direct | N498 back-and-forth | - | - |
| N060 Indirect | N061 Instruments | - | - | - |
| N061 Instruments | N062 Advantages; N065 Limitations; N066 Biases | - | - | - |
| N062 Advantages | N063 Sensing; N064 Introspection | - | - | - |
| N063 Sensing | N065 Limitations; N066 Biases; N067 Direct | - | - | - |
| N064 Introspection | N065 Limitations; N066 Biases; N067 Direct | - | - | - |
| N068 Strategies for / Understanding | N069 Dogmatism; N070 Thought labyrinths / / rumination; N085 Settles in: / Convergence between / assumptions and reality; N319 Path of the Head; N071 Trusting the / current paradigm | - | - | - |
| N071 Trusting the / current paradigm | N072 Phases of / paradigm change | - | - | - |
| N072 Phases of / paradigm change | N073 1. / Pre-paradigm: / No consensus; N074 2. / Normal science: / One dominant / paradigm; N075 3. / Crisis period: / Anomalies / create trouble; N083 4. / Paradigm shift: / Underlying assump- / tions examined; N084 5. / Post-revolution: / A new paradigm / gains dominance | - | - | - |
| N075 3. / Crisis period: / Anomalies / create trouble | N076 Foundations of science; N077 Physics; N078 Psychology; N079 Biology; N080 Mathematics; N081 Neuroscience; N082 Psi; N518 Archeology/ / History | - | - | - |
| N085 Settles in: / Convergence between / assumptions and reality | N086 Depth of transformation; N132 Existential problem: / What can I control? / What - and how - / do I know? | - | - | - |
| N086 Depth of transformation | N087 Brain | - | - | - |
| N087 Brain | N088 Opinions; N089 Intellectual view; N090 Identification; N129 Heart | - | - | - |
| N090 Identification | N091 Witnessing; N119 What do I take to be me? | - | - | - |
| N091 Witnessing | N092 What am I not?; N115 Re-uniting; N129 Heart | - | - | - |
| N092 What am I not? | N093 Two methods of approach; N112 running the risk of | - | - | - |
| N093 Two methods of approach | N094 What am I?; N098 The fundamental nature / of awareness | - | - | - |
| N094 What am I? | N095 running the risk of; N115 Re-uniting | - | - | - |
| N095 running the risk of | N096 Eternalist view | - | - | - |
| N096 Eternalist view | N097 Drowning the baby / in the bathwater | - | - | - |
| N098 The fundamental nature / of awareness | N099 The Screen; N104 Direct | - | - | - |
| N099 The Screen | N100 What can we know? | - | - | - |
| N100 What can we know? | N101 The content; N279 Epistemology - how can / we get true knowledge? | - | - | - |
| N101 The content | N102 The way it is; N103 Reductive categories | - | - | - |
| N104 Direct | N105 Biases; N110 Limitations; N111 Advantages; N279 Epistemology - how can / we get true knowledge? | - | - | - |
| N105 Biases | N106 Experimentation; N107 Mathematics; N108 Statistics | - | - | - |
| N106 Experimentation | N107 Mathematics; N109 Indirect; N110 Limitations; N111 Advantages | - | - | - |
| N107 Mathematics | N108 Statistics; N110 Limitations; N111 Advantages | - | - | - |
| N108 Statistics | N110 Limitations; N111 Advantages | - | - | - |
| N109 Indirect | N279 Epistemology - how can / we get true knowledge? | - | - | - |
| N112 running the risk of | N113 Annihilationist view | - | - | - |
| N113 Annihilationist view | N114 Throwing the baby out / with the bathwater | - | - | - |
| N115 Re-uniting | N116 Gut | - | - | - |
| N116 Gut | N117 Perceptual view; N118 Experiential; N129 Heart | - | - | - |
| N119 What do I take to be me? | N120 What ceases?; N122 Feelings; N123 Body; N124 Will; N125 Perceptions; N126 Consciousness; N127 Thoughts; N128 Memory; N269 What is life? | - | - | - |
| N120 What ceases? | N121 What persists?; N122 Feelings; N123 Body; N124 Will; N125 Perceptions; N126 Consciousness; N127 Thoughts; N128 Memory; N270 What is death? | - | - | - |
| N121 What persists? | N122 Feelings; N123 Body; N124 Will; N125 Perceptions; N126 Consciousness; N127 Thoughts; N128 Memory; N271 What am I? | - | - | - |
| N126 Consciousness | N357 vs. | - | - | - |
| N129 Heart | N130 Action; N131 Felt view | - | - | - |
| N132 Existential problem: / What can I control? / What - and how - / do I know? | N133 The Human - / Reason | - | - | - |
| N133 The Human - / Reason | N134 What matters to / your head; N263 Mode: Thinking / / Exploration / / Existential emotions; N264 Motivated by: / Truth / Falsity; N265 Concerned with: / Long-term goals; N267 Growth potential: Can / discover principles | - | - | - |
| N134 What matters to / your head | N135 What matters to / your heart; N237 What matters to / your gut | - | - | - |
| N135 What matters to / your heart | N136 The Lion - / Thymos; N237 What matters to / your gut | - | - | - |
| N136 The Lion - / Thymos | N137 Existential problem: / What gives life / meaning?; N231 Motivated by: / Honour / Shame; N232 Mode: Empathy / / Intuition / Faith / / Social Emotions; N233 Concerned with: / Mid-term goals; N235 Growth potential: / Can be trained | - | - | - |
| N137 Existential problem: / What gives life / meaning? | N138 Settles in: Happiness, / love, felt meaning | - | - | - |
| N138 Settles in: Happiness, / love, felt meaning | N139 Strategies for / happiness / love | - | - | - |
| N139 Strategies for / happiness / love | N140 getting, avoiding, manipulating, / changing, controlling, collecting; N146 accepting, letting be, allowing, / embracing, opening, experiencing | - | - | - |
| N140 getting, avoiding, manipulating, / changing, controlling, collecting | N141 doing; N142 past / future; N143 personal identification; N144 depended on comparison; N145 non-sustainable happiness | - | - | - |
| N146 accepting, letting be, allowing, / embracing, opening, experiencing | N147 being; N148 present; N149 selfless; N150 sustainable happiness; N151 independent of comparison; N331 Path of the Heart | - | - | - |
| N152 The threefold training | N153 Sīla; N331 Path of the Heart; N408 supporting conditions | - | - | - |
| N153 Sīla | N154 Methods; N185 Samādhi | - | N519 Right action; N520 Right speech; N521 Right livelihood | - |
| N154 Methods | N155 Restraint; N156 Generosity; N157 The brahmavihāras; N162 Self-compassion | - | - | - |
| N157 The brahmavihāras | N158 Loving-kindness; N159 Compassion; N160 Equanimity; N161 Sympathetic joy | - | - | - |
| N162 Self-compassion | N163 Emotional blockages | - | - | - |
| N163 Emotional blockages | N164 Pīti; N170 Challenging emotions; N177 Low | - | - | - |
| N164 Pīti | N165 Components | - | - | - |
| N165 Components | N166 Sukha; N167 Ekaggatā; N168 Vitakka; N169 Vicāra; N185 Samādhi | - | - | - |
| N170 Challenging emotions | N171 shame; N172 grief; N173 anger / hate; N174 pride / conceit; N175 doubt / confusion; N176 fear; N339 existential angst | - | - | - |
| N177 Low | N178 Level of / experiencing | - | N184 High | - |
| N178 Level of / experiencing | N179 Emotions | - | - | - |
| N179 Emotions | N180 Components of / emotion; N181 Emotional style; N182 Types of / emotion; N183 Level of / emotional / arousal; N262 Needs; N340 Emotions and / intentional root | - | - | - |
| N185 Samādhi | N186 Methods; N193 Progression; N281 Pañña; N478 Hindrances | - | N522 Right effort; N523 Right mindfulness; N524 Right samādhi | - |
| N186 Methods | N187 Object-oriented / mindfulness; N355 Subject-oriented / mindfulness; N356 Nondual / awareness | - | - | - |
| N187 Object-oriented / mindfulness | N188 Bodily sensations; N189 Breath; N190 Mantra | - | - | - |
| N189 Breath | N502 Long / breaths; N503 Short / breaths; N504 Experiencing / the whole body; N505 Caliming the / body-conditioner; N506 Experiencing / rapture; N507 Experiencing / happiness; N508 Experiencing / the mind-conditioner; N509 Calming the / mind conditioner; N510 Experiencing / the mind; N511 Gladdening / the mind; N512 Steadying / the mind; N513 Releasing / the mind; N514 Contemplating / impermanence; N515 Contemplating / dispassion; N516 Contemplating / cessation; N517 Contemplating / relinquishment | - | - | - |
| N191 Choiceless awareness | N355 Subject-oriented / mindfulness | - | - | - |
| N192 Open awareness | N355 Subject-oriented / mindfulness | - | - | - |
| N193 Progression | N194 outward to inward; N195 complexity to simplicity; N196 movement to stillness; N197 doing to being; N198 coarse to refined; N199 judging to embracing; N200 diversity to unity | - | - | - |
| N201 Psychological / re-categorization | N202 maladaptive / habits; N206 evolutionary / conditioned / ignorance; N207 maladaptive / assumptions / about | - | - | - |
| N202 maladaptive / habits | N204 indulgent; N205 avoidant; N203 distracting; N338 aversive | - | - | - |
| N207 maladaptive / assumptions / about | N208 happiness / suffering; N209 reality; N210 self | - | - | - |
| N211 Seven factors of awakening | N212 mindfulness; N331 Path of the Heart | - | - | - |
| N212 mindfulness | N213 investigation | - | - | - |
| N213 investigation | N214 energy | - | - | - |
| N214 energy | N215 rapture | - | - | - |
| N215 rapture | N216 tranquility | - | - | - |
| N216 tranquility | N217 samādhi | - | - | - |
| N217 samādhi | N218 equanimity | - | - | - |
| N219 Natural unfolding | N220 virtuous conduct; N331 Path of the Heart | - | - | - |
| N220 virtuous conduct | N221 freedom from remorse | - | - | - |
| N221 freedom from remorse | N222 gladness | - | - | - |
| N222 gladness | N223 rapture | - | - | - |
| N223 rapture | N224 bodily tranquility | - | - | - |
| N224 bodily tranquility | N225 bliss | - | - | - |
| N225 bliss | N226 samādhi | - | - | - |
| N226 samādhi | N227 seeing things / as they are | - | - | - |
| N227 seeing things / as they are | N228 disillusionment | - | - | - |
| N228 disillusionment | N229 dispassion | - | - | - |
| N229 dispassion | N230 freedom / and / release | - | - | - |
| N233 Concerned with: / Mid-term goals | N234 Communal / well-being | - | - | - |
| N235 Growth potential: / Can be trained | N236 Spiritual interest: / After/next life | - | - | - |
| N237 What matters to / your gut | N238 The Beast - / Appetite | - | - | - |
| N238 The Beast - / Appetite | N239 Existential problem: / What do I need / to function?; N256 Motivated by: / Pain / Pleasure; N257 Growth potential: / Can be tamed; N259 Concerned with: / Immediate goals; N261 Mode: / Action / Needs / / Primal emotions | - | - | - |
| N239 Existential problem: / What do I need / to function? | N240 Path of the Gut | - | - | - |
| N240 Path of the Gut | N241 Settles in: Peace | - | - | - |
| N241 Settles in: Peace | N243 Strategies for peace | - | N242 (Even need for excitement / settles in peace) | - |
| N243 Strategies for peace | N244 In terms of / Emotion-Focused / Therapy; N248 In terms of early / relationships; N250 In terms of needs; N253 In terms of / emotional / processing; N341 In terms of current / relationships | - | - | - |
| N244 In terms of / Emotion-Focused / Therapy | N245 Mechanism of change curve 0.9,-0.6; N246 Method curve -0.1,1.2; N406 Foundations curve 0.5,-1; N543 Emotion-Focused / Mindfulness curve -0.2,0.3 | - | - | - |
| N246 Method | N247 Islands of work / in a sea of empathy curve 1.1,-0.7 | - | - | - |
| N248 In terms of early / relationships | N249 Authenticity vs. / attachment | - | - | - |
| N249 Authenticity vs. / attachment | - | - | N342 Interactional / cycle | - |
| N250 In terms of needs | N251 Adaptations / in the world; N252 Psychological / adaptations | - | - | - |
| N251 Adaptations / in the world | - | N252 Psychological / adaptations | - | - |
| N253 In terms of / emotional / processing | N253 In terms of / emotional / processing; N254 Embracing vulnerability; N255 Resisting vulnerability | - | - | - |
| N254 Embracing vulnerability | - | - | N255 Resisting vulnerability; N184 High; N540 ego-based / vulnerability | - |
| N255 Resisting vulnerability | N473 Denial and / Avoidance-Based / Strategies; N474 Intellectualization / and Rationalization / Strategies; N475 Externalization / Strategies; N476 Control and / Compensation / Strategies; N477 Substance Use / and Body-Based / Strategies | - | N177 Low | - |
| N257 Growth potential: / Can be tamed | N258 Spiritual interest: / This life | - | - | - |
| N259 Concerned with: / Immediate goals | N260 Individual / survival | - | - | - |
| N261 Mode: / Action / Needs / / Primal emotions | N262 Needs | - | - | - |
| N265 Concerned with: / Long-term goals | N266 Abstract principles | - | - | - |
| N267 Growth potential: Can / discover principles | N268 Spiritual interest: / Transcending lives | - | - | - |
| N272 Ontology - / What is reality? | N273 God?; N274 Consciousness?; N275 Space?; N276 Time?; N277 Matter?; N278 Ontologies; N453 Characteristics of a good theory; N464 Limitations of any theory | - | - | - |
| N279 Epistemology - how can / we get true knowledge? | N280 What can’t we know? | - | - | - |
| N281 Pañña | N282 Methods; N301 Insights | - | N526 Right intention; N525 Right view | - |
| N282 Methods | N283 Four noble truths; N284 Dependent origination; N285 Body contemplation; N286 Contemplation of / the characteristics of / conditioned phenomena; N300 Six sense-spheres | - | - | - |
| N286 Contemplation of / the characteristics of / conditioned phenomena | N287 Dukkha; N298 Anattā; N299 Aniccā; N290 Cause and effect | - | - | - |
| N287 Dukkha | N288 The first noble truth: / The inherent unsatisfactoriness / of constructed/conditioned / phenomena | - | - | - |
| N288 The first noble truth: / The inherent unsatisfactoriness / of constructed/conditioned / phenomena | N289 Must be understood; N291 The second noble truth: / That craving for sensuality, / being or non-being is / a necessary cause for / dissatisfaction; N298 Anattā; N299 Aniccā; N301 Insights | - | - | - |
| N291 The second noble truth: / That craving for sensuality, / being or non-being is / a necessary cause for / dissatisfaction | N294 The third noble truth: / That letting be / leads to peace; N292 Must be abandoned | - | N293 Pain • resistance = suffering | - |
| N292 Must be abandoned | N292 Must be abandoned | - | - | - |
| N293 Pain • resistance = suffering | - | - | N294 The third noble truth: / That letting be / leads to peace | - |
| N294 The third noble truth: / That letting be / leads to peace | N295 Must be realized; N296 The fourth noble truth: / That certain conditions / lead to these insights | - | - | - |
| N296 The fourth noble truth: / That certain conditions / lead to these insights | N297 Must be practiced; N301 Insights | - | - | - |
| N303 Matter | N304 Consciousness | - | - | - |
| N306 Motivation split | - | - | N539 Inner child / work curve 0.3,0 | - |
| N308 Self- / Actualisation / needs | - | N307 Self- / Transcendence / needs curve 1.4,-2.2 | - | - |
| N309 Love and / Esteem / needs | - | N308 Self- / Actualisation / needs curve 1,1.2 | - | - |
| N310 Physiological / needs | - | N545 Safety / needs curve 0.7,1.1 | - | - |
| N311 Assertive anger / / self-compassion | - | N336 ← back and forth between → | - | - |
| N312 Grief / hurt | - | N336 ← back and forth between → | - | - |
| N313 Rejecting anger | - | N311 Assertive anger / / self-compassion | - | - |
| N314 Global distress | - | N315 Fear / shame; N313 Rejecting anger | - | - |
| N315 Fear / shame | - | N317 Negative self- / evaluation; N316 Needs; N313 Rejecting anger | - | - |
| N316 Needs | - | N337 ← back and forth between → | - | - |
| N317 Negative self- / evaluation | - | N337 ← back and forth between → | - | - |
| N318 Meaning protest | - | - | N306 Motivation split curve 0.2,0.1 | - |
| N320 Unfinished business | - | - | N318 Meaning protest curve 0.3,0.1 | - |
| N321 Case formulation | N322 Wisdom curve 0.9,-0.2 | - | - | - |
| N322 Wisdom | N323 Empathy curve 0.7,-0.2 | - | - | - |
| N323 Empathy | N324 Presence curve 0.3,0.1; N326 Attunement curve 0.2,-0.3; N328 Unconditional / positive regard curve -0.5,0.4; N404 Authenticity curve 0.2,0.2 | - | - | - |
| N324 Presence | N325 Focusing curve -0.4,-0.7 | - | - | - |
| N326 Attunement | N327 Empathic exploration curve -0.6,0.7 | - | - | - |
| N328 Unconditional / positive regard | N329 Alliance work curve -1.4,1 | - | - | - |
| N330 Conflict splits | - | - | N320 Unfinished business curve 0.4,0.6 | - |
| N332 Anxiety splits | - | - | N330 Conflict splits curve 0.2,0.2 | - |
| N333 Evocative unfolding | - | - | N332 Anxiety splits curve 0.1,0.3 | - |
| N334 Trauma retelling | - | - | N333 Evocative unfolding curve 0.5,0.2 | - |
| N335 Self-soothing | - | - | N334 Trauma retelling curve 0.7,0.9 | - |
| N336 ← back and forth between → | - | N305 Acceptance and agency | - | - |
| N337 ← back and forth between → | - | N311 Assertive anger / / self-compassion | - | - |
| N341 In terms of current / relationships | N342 Interactional / cycle | - | - | - |
| N343 Avijjā | N344 Saṅkhāra | - | - | - |
| N344 Saṅkhāra | N345 Viññāṇa | - | - | - |
| N345 Viññāṇa | N346 Nāmarūpa | - | - | - |
| N346 Nāmarūpa | N347 Saḷāyatana | - | - | - |
| N347 Saḷāyatana | N348 Phassa | - | - | - |
| N348 Phassa | N349 Vedanā | - | - | - |
| N349 Vedanā | N350 Taṇhā | - | - | - |
| N350 Taṇhā | N351 Upādāna | - | - | - |
| N351 Upādāna | N352 Bhava | - | - | - |
| N352 Bhava | N353 Jāti | - | - | - |
| N353 Jāti | N354 Jarāmaraṇa | - | - | - |
| N357 vs. | N358 Meta-cognition; N359 Self-awareness; N360 Sentience; N361 Intelligence / / sapience | - | - | - |
| N362 #1 Just Listen | - | - | N363 #2 Distracted By Truth | - |
| N363 #2 Distracted By Truth | - | - | N364 #3 Breath | - |
| N364 #3 Breath | - | - | N365 #4 Growing Like A Tree | - |
| N365 #4 Growing Like A Tree | - | - | N366 #5 Innocent | - |
| N366 #5 Innocent | - | - | N367 #6 Choiceless Awareness | - |
| N367 #6 Choiceless Awareness | - | - | N368 #7 Sound Of Silence | - |
| N368 #7 Sound Of Silence | - | - | N369 #8 Seeds Of Good | - |
| N369 #8 Seeds Of Good | - | - | N370 #9 Roots Of A Tree | - |
| N370 #9 Roots Of A Tree | - | - | N371 #10 Unbleaching the Rainbow | - |
| N371 #10 Unbleaching the Rainbow | - | - | N372 #11 B.O.D.Y. | - |
| N372 #11 B.O.D.Y. | - | - | N373 #12 Vulnerable Strength | - |
| N373 #12 Vulnerable Strength | - | - | N374 #13 Breath of Love | - |
| N374 #13 Breath of Love | - | - | N375 #14 Validation | - |
| N375 #14 Validation | - | - | N376 #15 At Peace With Pain | - |
| N376 #15 At Peace With Pain | - | - | N377 #16 What The Fuck? | - |
| N377 #16 What The Fuck? | - | - | N378 #17 Eternal Hug | - |
| N378 #17 Eternal Hug | - | - | N379 #18 Climbing The Flat Mountain | - |
| N379 #18 Climbing The Flat Mountain | - | - | N380 #19 Everything Is Now | - |
| N380 #19 Everything Is Now | - | - | N381 #20 Question | - |
| N381 #20 Question | - | - | N382 #21 Buddho | - |
| N382 #21 Buddho | - | - | N383 #22 Not Sure | - |
| N383 #22 Not Sure | - | - | N384 #23 Subtle Body | - |
| N384 #23 Subtle Body | - | - | N385 #24 Views | - |
| N385 #24 Views | - | - | N386 #25 Still Flowing Water | - |
| N386 #25 Still Flowing Water | - | - | N387 #26 Fingers Pointing At the Moon | - |
| N387 #26 Fingers Pointing At the Moon | - | - | N388 #27 Like Holding A Bird | - |
| N388 #27 Like Holding A Bird | - | - | N389 #28 This Too Will Pass | - |
| N389 #28 This Too Will Pass | - | - | N390 #29 A Pearl In A Shell | - |
| N390 #29 A Pearl In A Shell | - | - | N391 #30 Only One Problem | - |
| N391 #30 Only One Problem | - | - | N392 #31 Open | - |
| N392 #31 Open | - | - | N393 #32 The Monkey's Fist | - |
| N393 #32 The Monkey's Fist | - | - | N394 #33 Beyond Thought | - |
| N394 #33 Beyond Thought | - | - | N395 #34 Free Will Or Will Freed? | - |
| N395 #34 Free Will Or Will Freed? | - | - | N396 #35 Flow Of Life | - |
| N396 #35 Flow Of Life | - | - | N397 #36 Belonging To Nature | - |
| N397 #36 Belonging To Nature | - | - | N398 #37 Who Am I? | - |
| N398 #37 Who Am I? | - | - | N399 #38 One | - |
| N399 #38 One | - | - | N400 #39 Illusion | - |
| N400 #39 Illusion | - | - | N401 #40 Road to Here | - |
| N401 #40 Road to Here | - | - | N402 #41 Awakening | - |
| N402 #41 Awakening | - | - | N403 #42 | - |
| N404 Authenticity | N405 Self-disclosure curve -0.5,-0.2 | - | - | - |
| N408 supporting conditions | N409 internal; N410 external | - | - | - |
| N409 internal | N413 physical | - | - | - |
| N410 external | N411 social; N412 external / conditions | - | - | - |
| N411 social | N419 community; N420 teacher; N421 teachings; N422 purpose | - | - | - |
| N412 external / conditions | N423 dwelling; N424 temperature; N425 air quality; N426 postural support; N427 light; N428 food | - | - | - |
| N413 physical | N414 posture; N415 airways; N416 comfort; N417 health; N418 energy | - | - | - |
| N429 1. Knowledge of / mental and material / processes | - | N430 2. Knowledge of / cause and effect | - | - |
| N430 2. Knowledge of / cause and effect | - | N431 3. Knowledge of / the Three Characteristics | - | - |
| N431 3. Knowledge of / the Three Characteristics | - | N432 4. Knowledge of / arising and / passing away | - | - |
| N432 4. Knowledge of / arising and / passing away | - | N433 5. Knowledge of / dissolution | - | - |
| N433 5. Knowledge of / dissolution | - | N434 6. Knowledge of / fearfulness | - | - |
| N434 6. Knowledge of / fearfulness | - | N435 7. Knowledge of / danger | - | - |
| N435 7. Knowledge of / danger | - | N436 8. Knowledge of / dispassion | - | - |
| N436 8. Knowledge of / dispassion | - | N437 9. Knowledge of / the desire for / deliverance | - | - |
| N437 9. Knowledge of / the desire for / deliverance | - | N438 10. Knowledge of / reflection | - | - |
| N438 10. Knowledge of / reflection | - | N439 11. Knowledge of / equanimity about / formations | - | - |
| N439 11. Knowledge of / equanimity about / formations | - | N440 12. Knowledge of / conformity | - | - |
| N440 12. Knowledge of / conformity | - | N441 13. / Change of lineage | - | - |
| N441 13. / Change of lineage | - | N442 14. / Path knowledge | - | - |
| N442 14. / Path knowledge | - | N443 15. / Fruition knowledge | - | - |
| N443 15. / Fruition knowledge | - | N444 16. / Review knowledge | - | - |
| N453 Characteristics of a good theory | N454 Parsimony; N455 Explanatory power; N456 Internal consistency; N457 Empirical testability; N458 Falsifiability; N459 External consistency; N460 Generalizability; N461 Fruitfulness; N462 Operational definitions; N463 Predictive accuracy | - | - | - |
| N464 Limitations of any theory | N465 Need for postulates or axioms; N466 Incompleteness; N467 Approximations; N468 Underdetermination of / theories by data; N469 Falsifiability and / the problem of induction; N470 Paradigm-dependence; N471 Language and conceptual / constraints; N472 Cognitive biases | - | - | - |
| N478 Hindrances | N201 Psychological / re-categorization; N479 1. Sense desire; N480 2. Ill-will; N481 3. Sloth / and torpor; N482 4. Restlessness / and worry; N483 5. Doubt | - | - | - |
| N484 distractions | N412 external / conditions | - | - | - |
| N485 What IS / nature? | N492 Ontology | - | - | - |
| N486 How can I / truly know? | N493 Epistemology | - | - | - |
| N487 What am I? | N497 Psychology / Philosophy / Spirituality | - | - | - |
| N488 Why is any of / this important? | N497 Psychology / Philosophy / Spirituality | - | - | - |
| N489 Why is there / a world at all? | N496 Theology | - | - | - |
| N490 What is / nature doing? | N495 Applied / science | - | - | - |
| N491 Why is nature / doing what / it is doing? | N494 Foundational / science | - | - | - |
| N492 Ontology | N272 Ontology - / What is reality? | - | - | - |
| N493 Epistemology | N279 Epistemology - how can / we get true knowledge? | - | - | - |
| N494 Foundational / science | - | - | N056 Levels of / understanding | - |
| N495 Applied / science | - | - | N056 Levels of / understanding | - |
| N497 Psychology / Philosophy / Spirituality | - | - | N269 What is life?; N270 What is death?; N271 What am I? | - |
| N498 back-and-forth | N059 Observation; N057 Analysis / questioning | - | - | - |
| N522 Right effort | N527 Cultivate / wholesome / states; N528 Maintain / wholesome / states; N529 Abandon / unwholesome / states; N530 Prevent / unwholesome / states | - | - | - |
| N523 Right mindfulness | N531 Body; N532 Feelings / / sensations; N533 Mind; N534 Mental / phenomena | - | - | - |
| N524 Right samādhi | N535 1st Jhāna; N536 2nd Jhāna; N537 3rd Jhāna; N538 4th Jhāna | - | - | - |
| N540 ego-based / vulnerability | - | - | N541 existential / vulnerability | - |
| N541 existential / vulnerability | - | - | N542 ego-transcendent / vulnerabilities | - |
| N543 Emotion-Focused / Mindfulness | N544 Method curve 0.7,0.7 | - | - | - |
| N544 Method | N247 Islands of work / in a sea of empathy curve -0.3,-0.4 | - | - | - |
| N545 Safety / needs | - | N309 Love and / Esteem / needs curve 0.4,0.9 | - | - |

## Integrity Notes

- All connection tables have exactly one row per node.
- Every connection row starts with the matching `planetTagData` source id.
- Every normal, arrowed, and dashed target resolves to a current node id.
- `planetTunnelConnections` is present and row-aligned, but has no outgoing targets.

## Verification Snapshot

- Full inventory rows expected: 546.
- Full inventory rows generated: 546.
- Outgoing connection rows generated: 287.
- Total explicit outgoing edges generated: 591.
- Explicit edge breakdown: normal 468, arrowed 40, dashed 83, tunnel 0.
