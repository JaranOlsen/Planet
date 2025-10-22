# EFT Dataset Refinement Instructions — Key Interventions (Basic · Intermediate · Mastery)

**Purpose.** These instructions tell an AI how to automatically improve **client statements** (practice prompts) and **therapist responses** (model answers) in your *statements.js* dataset so they become excellent deliberate‑practice material for Emotion‑Focused Therapy (EFT). The goals are:
1) Client statements provide **clear emotional context + an intervention marker** for the targeted skill.  
2) Therapist responses **demonstrate expert‑level EFT**—present‑focused, experiential, empathic, and faithful to the intervention.

For each intervention and difficulty level, you’ll find: what to **add**, what to **avoid**, “**fix → improve**” examples, and **rewrite templates** you can apply programmatically.

I want you to go through every item in the xxxxxxxxxxx section of deliberatepractice/src/data/statements.js, and improve on the statements (keep the statements consistent with the cases in deliberatepractice/src/md, but feel free to be a bit creative - remember, they are cases with a whole and nuanced life) and suggested therapist responses in that section following the instructions below:

---

## Empathic Conjecture

*Therapist offers a **tentative, empathic hunch** about an unspoken or partly‑felt emotion (e.g., hurt under anger; shame under withdrawal). Stays present‑focused and non‑interpretive.*

### Basic
**Improve client statements**
- Add a **clear overt feeling** + **implied unstated feeling** (marker).  
  - *Bad:* “It’s fine.” (flat) → *Better:* “[Angry] She cancelled again. I say I’m fine, but something inside sinks.”
- Include a **here‑and‑now edge** (“…as I say that, my chest drops”).

**Improve therapist responses**
- Use **tentative hunch language**: “I wonder if…”, “My sense is…”, “Maybe a part of you…”.  
- Name **one likely deeper feeling** tied to the client’s words; avoid *why* explanations.  
  - *Fix → Improve:* “You’re angry because of your childhood.” → “I hear the anger—and I wonder if there’s hurt underneath, like a let‑down.”

**Rewrite template (Basic)**
- `Reflect(overt) + Conjecture(underlying, tentative)` → “You sound {overt}. I’m wondering if underneath there’s {underlying} as you say that.”

---

### Intermediate
**Improve client statements**
- Add **mixed feelings / conflict** to invite a deeper hunch.  
  - “I’m furious at him… and weirdly hollow after.”

**Improve therapist responses**
- **Reflect + extend one layer** (not causes). Allow **two‑part hunch** if warranted.  
  - *Fix → Improve:* “Maybe you do that because you fear abandonment.” → “I hear how gripping this is, and I wonder if a fear of being left is stirring under the pull.”

**Rewrite template (Intermediate)**
- “Part of you {A}; I’m sensing another part that {B}—does that fit?”

---

### Mastery
**Improve client statements**
- Portray **complexity / denial / bravado** with a clear conjecture opening.  
  - “[In denial] I was suicidal last week, but I’m great now—let’s end therapy.”

**Improve therapist responses**
- **Bold yet humble** hunch about the **core vulnerable emotion**, still tentative and present‑focused. Integrate **two parts** if relevant.  
  - *Fix → Improve:* “You are actually terrified.” → “A part sounds sure it’s all fine; I also sense a scared, hurting part right now—does that land?”

**Rewrite template (Mastery)**
- “As you say ‘{surface}’, I also feel a flicker of {core} in the room—could that be here with us?”

---

## Exploratory Questions

*Therapist uses **open, experiential questions** to help clients sense, symbolize, and deepen present emotions (not analyze causes or solve problems).*

### Basic
**Improve client statements**
- Present a **fresh, felt emotion/sensation** + uncertainty.  
  - “When she glared, I felt small… I don’t know why it hit so hard.”

**Improve therapist responses**
- Ask **open, present‑focused** questions: What/How + body/sense/image. Avoid “why”.  
  - *Fix → Improve:* “Why do you feel that?” → “What’s it like inside as you remember that glare—where do you feel it?”

**Rewrite template (Basic)**
- “Could we slow with {sensation/feeling}—what is it like right now?”

---

### Intermediate
**Improve client statements**
- Include **bodily anchors / metaphors** (“knot in stomach”, “hollow”). Show **seeking insight**.

**Improve therapist responses**
- Follow client language; **one thread at a time**; gently invite **meaning** without telling it.  
  - “If that numb part had words, what might it say?”

**Rewrite template (Intermediate)**
- “Let’s stay with {felt cue}. What does it seem tied to or wanting for you?”

---

### Mastery
**Improve client statements**
- Use **intense, complex, or trauma‑tinged** feelings with a single exploration focus.

**Improve therapist responses**
- Pair **safety** (“I’m here”) + **deepening** (focusing, imagery, voice to parts). No judgment; no rush.  
  - “As the shame swells, I’m right here. If it had a voice, what would it cry out?”

**Rewrite template (Mastery)**
- “Notice {intense cue}. With me here, what emerges if we give it a little room?”

---

## Providing Treatment Rationale

*Therapist explains **why** attending to emotions/process helps, in clear, compassionate, client‑friendly language.*

### Basic
**Improve client statements**
- Pose a **simple process question** (“What do we do?” / “Why feelings?”).

**Improve therapist responses**
- **Validate question → simple why + benefit → collaboration**. Avoid jargon.  
  - *Fix → Improve:* “We access core affect” → “Feelings carry info about needs; exploring them together often brings relief and guides change.”

**Rewrite template (Basic)**
- “Great question. Here we focus on {emotion focus} because {plain reason}. We’ll go at your pace, together.”

---

### Intermediate
**Improve client statements**
- Voice **skepticism/fear** (“Won’t this make me worse?” “Crying is weak.”).

**Improve therapist responses**
- Normalize concern; give **brief rationale + safety + hope**; tailor to the worry.  
  - Analogy allowed (e.g., “cleaning a wound”). Avoid defensiveness.

**Rewrite template (Intermediate)**
- “It makes sense you worry about {concern}. We’ll pace it so it’s manageable, and many people feel lighter as feelings are shared safely.”

---

### Mastery
**Improve client statements**
- Strong doubts, prior bad therapy, **demands for guarantees**.

**Improve therapist responses**
- **Deep empathy; honest limits; safety/choice; personalized rationale; collaborative trial.**  
  - “I can’t promise outcomes, and I hear why you want that. We’ll keep it safe, adjust as we go, and you’ll steer the pace.”

**Rewrite template (Mastery)**
- “Given {history/fear}, your caution makes sense. My commitment is {safety/choice}. If you’re willing, we’ll try gently and keep checking in.”

---

## Staying with Intense Affect

*Therapist remains **present, steady, empathic** with big emotion (grief, rage, shame, love), without minimizing, fixing, or fleeing.*

### Basic
**Improve client statements**
- One **clear, high‑intensity emotion** with concrete cues (tears, shaking, “can’t breathe”).

**Improve therapist responses**
- **Witness + name** the emotion; **stay** with it; **no fixing/positivity spin**. Brief, heartfelt lines are fine.  
  - “This is devastating—you’re not alone; I’m right here.”

**Rewrite template (Basic)**
- “I see how {intense} this is. It makes sense you feel this much; I’m with you.”

---

### Intermediate
**Improve client statements**
- Emotion that can **alarm** therapists (rage fantasies, shameful confessions, despair).

**Improve therapist responses**
- Stay calm; **name multiple feelings** if present; show **concern without panic**; zero judgment.  
  - “Your anger is volcanic—and underneath, I hear fear. I’m here; let’s stay with it, safely.”

**Rewrite template (Intermediate)**
- “This is a lot. I’m not going anywhere. What’s the core of this {anger/shame/despair} asking us to know?”

---

### Mastery
**Improve client statements**
- **Emotion directed at therapist** (erotic longing, bitter disappointment) or very raw material.

**Improve therapist responses**
- **Unshakeable steadiness**; validate; if needed, set **gentle boundaries**; meta‑attune to the **here‑and‑now**; keep alliance.  
  - “You feel let down by me—angry and hurt. I’m here, and I want to understand. Let’s slow down right here between us.”

**Rewrite template (Mastery)**
- “I feel how strong this is toward me. Thank you for trusting me with it. I’m here; let’s stay with what this part needs—within our safe frame.”

---

## Self‑Disclosure (Therapist Transparency/Immediacy)

*Therapist shares **limited, purposeful** information about their **in‑the‑moment impact, process, or a brief relatable experience**—always in service of the client’s emotion and goals (not the therapist’s needs).*

### Basic
**Improve client statements**
- Provide a moment where a **tiny disclosure of impact** would help safety/connection.  
  - “When I talk about my shame, I feel you might think less of me.”

**Improve therapist responses**
- Use **micro‑disclosure of process/impact**, then return focus to client. Avoid centering self.  
  - “Hearing this, I feel protective of you—not judgment. I want you to know I’m with you. What’s happening inside as you say that?”

**Rewrite template (Basic)**
- “As I hear you, I notice {therapist impact, brief}—and I want you to know {reassurance}. Where does that land in you?”

**Common pitfalls → fixes**
- Oversharing story → keep to *one line of impact*.  
- Advice disguised as disclosure → replace with *empathic transparency*.  
- Shifting focus to therapist → *pivot back* to client immediately.

---

### Intermediate
**Improve client statements**
- Moments inviting **countertransference transparency** to deepen work (e.g., client self‑attack, therapist feels sadness/urge to rush).

**Improve therapist responses**
- Name **therapist’s relevant reaction** (tentative), link to **client’s need**, invite exploration.  
  - “As you attack yourself, I feel a tug to defend you—and it tells me how harsh this inner critic is. Could we listen to the hurt part it’s covering?”

**Rewrite template (Intermediate)**
- “I’m noticing in me {feeling/urge} right now; I wonder if that mirrors {client process}. Would it be okay to explore what that part of you needs?”

**Pitfalls → fixes**
- Disclose to **vent or bond** → disclose to **illuminate** the client’s process.  
- Global opinions (“I hate bullies”) → **specific, moment‑bound** impact (“I feel protective hearing that”).

---

### Mastery
**Improve client statements**
- **High‑stakes relational moments** (intense idealization/anger toward therapist; alliance wobble) where **judicious disclosure** repairs/clarifies.

**Improve therapist responses**
- **Calm transparency + boundary clarity + meta‑attunement**. Share *just enough* to repair/guide, then return to client.  
  - “Hearing you say I’ve let you down, I feel a pang—I care about that. I want to understand fully. Can we stay with what felt missed?”

**Rewrite template (Mastery)**
- “I notice {therapist feeling/impact}; it matters because {alliance/goal}. Within our role, I’m here. What does this part of you most want me to get?”

**Hard limits**
- No detailed personal stories, no meeting needs outside frame, no gratification. **Function:** empathy, repair, clarity.

---

## Marker Recognition — Chairwork

*Therapist **recognizes markers** and sets up **two‑chair / empty‑chair** dialogues to transform emotion:*
- **Self‑criticism / self‑interruption** → *two‑chair conflict (critic vs. experiencing self)*  
- **Unfinished business with other** → *empty chair*  
- **Self‑soothing/compassion deficits** → *self‑compassion chair / nurturing voice*

### Basic
**Improve client statements (include the marker)**
- **Self‑critic marker:** “I’m such an idiot; I should have known better.” + bodily drop.  
- **Unfinished business:** “I still rehearse what I’d say to my ex/boss/dad…”  
- Keep it **concise, present‑evocative**, one marker at a time.

**Improve therapist responses**
- **Name marker + propose chair** with a brief rationale; set roles in plain language.  
  - “I hear a harsh inner critic. Could we give that voice its own chair and let the part of you that’s hurting respond? It may help you stand up for yourself.”

**Rewrite templates (Basic)**
- Self‑critic: “I notice that tough voice. Let’s place it here, and you over there—would you be willing to tell it how its attacks land?”  
- Unfinished business: “Could we imagine {person} in this chair and say what was left unsaid—just for a moment?”

**Pitfalls → fixes**
- Vague ask (“Talk to the chair?”) → **State roles & first line**.  
- Jargon → **everyday words**.

---

### Intermediate
**Improve client statements**
- **Compound markers** (e.g., critic + shame; unfinished business + fear). Add a **specific scene** (“the night of the hospital call”).

**Improve therapist responses**
- **Structure the dialogue**: set turn‑taking, switch chairs, prompt **emotionful lines**, block the critic’s globalizing, invite **compassionate stance**.  
  - “From the critic chair, say it in its exact words; now switch—how does that land in you? What do you need to say back?”

**Rewrite templates (Intermediate)**
- “Let the critic speak 1–2 lines. Now switch: speak **for** the part that’s hurt—what’s true about you it’s missing?”  
- “To {imagined other}: say ‘What I needed then was…’ and finish the sentence.”

**Pitfalls → fixes**
- Debate content → **stay with impact/needs**.  
- Endless venting → **tight turn limits (1–2 lines)**, then **integrate**.

---

### Mastery
**Improve client statements**
- **Subtle markers** (polite compliance masking resentment; freezing when addressing father; trauma‑tinged avoidance) with **cultural/relational nuance**.

**Improve therapist responses**
- **Titrate intensity; protect vulnerable parts; deepen corrective emotion (assertive anger, grief, self‑compassion).** Meta‑track the process.  
  - “As you face him here, notice your breath. If it’s okay, say: ‘When you call me weak, a younger part shrinks—I won’t allow that anymore.’ Then feel what shifts.”

**Rewrite templates (Mastery)**
- “Name the younger part’s need from that chair; from the other chair, acknowledge it. Switch and **receive** it.”  
- “Invite a compassionate self to speak to the shamed part: ‘I see you. You didn’t deserve that.’ Notice the body response.”

**Safety & ethics**
- Pace; option to pause; **no re‑traumatization**; therapist safeguards the client’s dignity. Always de‑role and integrate at end.

---

## Quick Programmatic Checks (apply to all items)

- **Client statement checks**
  - Contains **emotion word or bodily cue** + **intervention marker**.  
  - One **scene/focus**, present‑evocative, 1–3 sentences.  
  - For Chairwork: explicit **critic/other** reference.

- **Therapist response checks**
  - Matches **target intervention** (no advice/problem‑solving detours).  
  - **Present‑focused**, empathic tone, concise (1–2 sentences basic; 1–3 intermediate; ≤4 mastery).  
  - Uses required **phrasing patterns** (e.g., tentative conjecture, open “what/how” questions, rationale scaffold, chair setup).

- **Auto‑rewrite heuristics**
  1) If client text lacks an emotion → **insert** emotion tag + bodily cue.  
  2) If response uses “why/should/just” → **replace** with approved patterns per intervention.  
  3) If response interprets causes → **convert** to present feeling or need.  
  4) If Chairwork requested but no roles/lines → **add** role labels + first line + switch prompt.  
  5) Enforce **length caps** and remove jargon.

---

### Mini Examples (Fix → Improve)

- **Conjecture (Basic):**  
  *Fix:* “You’re angry because she abandoned you.” → *Improve:* “I hear the anger… I wonder if there’s also a hurt underneath, like being let down.”

- **Exploration (Intermediate):**  
  *Fix:* “Why are you numb?” → *Improve:* “Could we sit with that numbness—what does it feel like it’s protecting you from?”

- **Rationale (Mastery):**  
  *Fix:* “Trust the process. No pain, no gain.” → *Improve:* “Given your past experience, your caution makes sense. We’ll keep it safe and in your control; many people find the feelings get lighter when shared carefully here.”

- **Staying with Affect (Basic):**  
  *Fix:* “Don’t cry; think positive.” → *Improve:* “These tears show how much this matters. I’m with you.”

- **Self‑Disclosure (Intermediate):**  
  *Fix:* “I’ve struggled too; let me tell you my story…” → *Improve:* “Hearing you, I notice a tug in me to protect you—it shows me how harsh that inner voice is. Could we listen to what the hurt part needs?”

- **Chairwork (Basic):**  
  *Fix:* “Try the chair technique.” → *Improve:* “Let’s place that critic in this chair and you in the other. From here, let it say one line; then we’ll switch so you can answer.”

---

**Output format expectation:** Keep each dataset item as **(client_statement, therapist_response, intervention, difficulty)**. Apply the templates above to auto‑rewrite weak items and flag any that cannot be brought to spec (missing marker; unsafe content) for human review.

