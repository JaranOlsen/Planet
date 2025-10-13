"use strict";

export const DIFFICULTIES = ["foundational", "stretch", "mastery"];
export const SKILL_ORDER = [
  "empathic-validation",
  "empathic-conjecture",
  "empathic-refocusing"
];
export const CASE_ORDER = {
  "empathic-validation": ["case-1", "case-2", "case-3"],
  "empathic-conjecture": ["case-1", "case-2", "case-3"],
  "empathic-refocusing": ["case-1", "case-2", "case-3"]
};
export const LANGUAGE_ORDER = [
  "en",
  "de",
  "no",
  "sv",
  "pt",
  "nl",
  "el",
  "zh",
  "fr",
  "da",
  "es",
  "he",
  "ar",
  "ru"
];

const withIds = (prefix, lines) =>
  lines.map((text, index) => ({
    id: `${prefix}_${index + 1}`,
    text
  }));

const mapWithIds = (groups) => {
  const map = {};
  Object.entries(groups).forEach(([prefix, lines]) => {
    lines.forEach((text, index) => {
      map[`${prefix}_${index + 1}`] = text;
    });
  });
  return map;
};

export const BASE_PRACTICE = {
  "empathic-validation": {
    name: "Empathic Validation",
    description: "Accurately mirror the client's emotional landscape to build felt safety.",
    cases: {
      "case-1": {
        id: "case-1",
        label: "Case 1 · Leah",
        teaser: "Teacher in burnout after years of caregiving.",
        history:
          "Leah (38) is a high-school teacher who has been the primary caregiver for her father during his chronic illness. She prides herself on being dependable but feels permanently depleted.",
        schema:
          "If I stop pushing myself, everything and everyone will fall apart and I'll be exposed as selfish.",
        style:
          "Speaks quickly, smiles to mask pain, minimizes her needs, and apologizes often when she gets emotional.",
        statements: {
          foundational: withIds("ev_leah_found", [
            "I know I look tired, but honestly I should be doing more for my dad.",
            "Everyone at school depends on me. If I take a day off, they'll think I'm lazy.",
            "I hate that I'm frustrated. My dad is sick, so I shouldn't feel annoyed with him.",
            "If I slow down, it feels like I'm letting everyone down at once.",
            "People keep telling me to rest, but that just makes me feel guilty."
          ]),
          stretch: withIds("ev_leah_stretch", [
            "Whenever I think about asking for help, I hear this voice telling me I'm weak.",
            "My sister sends supportive texts, and all I can think is that she's secretly judging me.",
            "The moment I lie down to relax, my mind races with everything I didn't do.",
            "It feels dramatic to say I'm drowning, yet that's the only word that fits.",
            "I wish someone would tell me it's ok to crumble for a minute without losing respect."
          ]),
          mastery: withIds("ev_leah_mastery", [
            "I keep imagining the day after the funeral and how empty I'll feel without a role to fill.",
            "There's a part of me that wants to scream for someone to notice I'm breaking.",
            "When colleagues praise my resilience, I feel a mix of pride and deep loneliness.",
            "I don't think I even know what I need anymore—just that this pace is unsustainable.",
            "Sometimes I fantasize about disappearing for a weekend, then panic that no one would forgive me."
          ])
        }
      },
      "case-2": {
        id: "case-2",
        label: "Case 2 · Malik",
        teaser: "Startup founder haunted by fear of rejection.",
        history:
          "Malik (29) leads a small startup and grew up moving frequently. Relationships feel risky; he expects disappointment if people get too close.",
        schema:
          "If people see the real me, they'll leave. I have to be impressive to be worth staying for.",
        style:
          "Tight smile, intellectualizes feelings, maintains calm tone until he suddenly withdraws.",
        statements: {
          foundational: withIds("ev_malik_found", [
            "When investors pull back, I tell everyone it's fine, but inside I'm spiraling.",
            "I keep conversations light because deeper stuff seems like a turnoff.",
            "People say I'm composed, yet it just means I'm hiding the panic.",
            "If I admit I'm scared, I worry the team will lose confidence in me.",
            "Dating is exhausting—I end things before they can reject me."
          ]),
          stretch: withIds("ev_malik_stretch", [
            "There's this constant scan in my head: do they still like me, or am I slipping?",
            "When someone compliments me, I immediately wonder what they actually want.",
            "I replay meetings at night, obsessing over whether I sounded insecure.",
            "Letting people down is my worst nightmare, so I avoid asking for anything.",
            "If I tell someone I'm lonely, I'm convinced they'll think I'm needy."
          ]),
          mastery: withIds("ev_malik_mastery", [
            "The moment someone pauses before replying, I assume they're planning an exit.",
            "I feel like a hologram—visible but intangible—because I'm terrified of being real.",
            "I crave someone insisting they'll stay, yet I can't stand the idea of them seeing my chaos.",
            "Even when I'm celebrated, I picture them swapping me out for a better model.",
            "I sometimes wish I could just be average, so the stakes wouldn't be so high."
          ])
        }
      },
      "case-3": {
        id: "case-3",
        label: "Case 3 · Carmen",
        teaser: "Physician struggling with grief and anger.",
        history:
          "Carmen (46) is an emergency physician whose younger brother recently died from an overdose. She feels compelled to stay composed for her family.",
        schema:
          "If I let grief or anger show, I'll lose control and burden everyone around me.",
        style:
          "Measured voice, keeps conversation orderly, jokes wryly, eyes well up when caught off guard.",
        statements: {
          foundational: withIds("ev_carmen_found", [
            "I don't cry because I need to keep everyone else from falling apart.",
            "Patients need me sharp; emotions just slow me down.",
            "My family keeps asking how I'm doing, and I shrug it off.",
            "It's easier to talk about logistics than how much I miss him.",
            "If I get angry at him, it feels like I'm betraying his memory."
          ]),
          stretch: withIds("ev_carmen_stretch", [
            "Every shift I see someone like my brother, and I lock everything tight inside.",
            "When coworkers check on me, I change the subject to avoid breaking.",
            "Part of me is furious he left me to clean up, and that thought terrifies me.",
            "I plan my day around staying busy so grief can't catch up.",
            "I envy people who can sob in public; I feel defective for staying composed."
          ]),
          mastery: withIds("ev_carmen_mastery", [
            "I replay our last conversation, hunting for the words that might have saved him.",
            "There are moments I want to wail in the supply closet, but I swallow it down.",
            "I feel split between the doctor who fixes things and the sister who couldn't.",
            "When I finally breathe, I sense this tidal wave behind a thin wall.",
            "I wonder if allowing myself to rage would finally let me say goodbye."
          ])
        }
      }
    }
  },
  "empathic-conjecture": {
    name: "Empathic Conjecture",
    description: "Offer gentle hypotheses that invite deeper reflection and shared discovery.",
    cases: {
      "case-1": {
        id: "case-1",
        label: "Case 1 · Sahana",
        teaser: "Graduate student fearing disappointment.",
        history:
          "Sahana (27) is finishing her clinical internship and fears letting supervisors down. She vacillates between over-preparing and freezing.",
        schema: "If I'm not exceptional, people will regret investing in me and I'll be alone.",
        style:
          "Warm but guarded, asks for reassurance indirectly, expresses gratitude while downplaying struggles.",
        statements: {
          foundational: withIds("ec_sahana_found", [
            "My supervisor said I did well, but I keep thinking she was just being kind.",
            "I redo my notes three times because mistakes feel catastrophic.",
            "When clients thank me, I worry they're overestimating what I can do.",
            "I'm terrified that one tough session will expose me as incompetent.",
            "I replay sessions to find what I missed, then wonder if I'm just obsessive."
          ]),
          stretch: withIds("ec_sahana_stretch", [
            "Part of me thinks I'm only useful when I'm impressive.",
            "If someone pauses before giving feedback, I brace for bad news.",
            "It's like I need proof that I'm not a disappointment before I can breathe.",
            "I crave guidance but feel ashamed for needing it.",
            "I'm afraid if I own my strengths, I'll become complacent and slip."
          ]),
          mastery: withIds("ec_sahana_mastery", [
            "I sometimes imagine people secretly agreeing I'm not cut out for this work.",
            "When I sense praise, I respond by pointing out flaws so others won't have to.",
            "Taking in support feels dangerous—like I'll owe them an even better version of me.",
            "I'm scared that if I stop hustling, I'll disappear from people's memory.",
            "I think there's a quiet rage inside me about always chasing approval."
          ])
        }
      },
      "case-2": {
        id: "case-2",
        label: "Case 2 · Tomas",
        teaser: "New parent balancing care and resentment.",
        history:
          "Tomas (34) recently became a father and is co-parenting with his partner while juggling shift work. He feels ashamed of flashes of resentment.",
        schema:
          "If I can't meet everyone's needs with grace, it means I'm failing as a partner and parent.",
        style:
          "Self-deprecating humor, fidgets, tone alternates between upbeat and flat when tired.",
        statements: {
          foundational: withIds("ec_tomas_found", [
            "I love my son, yet sometimes I just want silence and that's hard to admit.",
            "My partner handles so much; I feel guilty when I'm exhausted.",
            "When I'm on night shifts, I miss milestones and feel replaceable.",
            "I thought parenting would feel more natural than this.",
            "Even when I ask for a break, I feel like I'm letting them down."
          ]),
          stretch: withIds("ec_tomas_stretch", [
            "There's a part of me that resents how life revolves around schedules now.",
            "I keep stuffing down frustration because I'm scared it'll turn into anger.",
            "My dad bailed when things got tough, and I'm paranoid I'm repeating him.",
            "I feel invisible unless I'm fixing something.",
            "Sometimes I want to hand the baby over and just disappear for an hour."
          ]),
          mastery: withIds("ec_tomas_mastery", [
            "I worry my partner sees the tired version of me and wonders where the old me went.",
            "I fantasize about being the carefree guy again and then hate myself for it.",
            "\"When my son cries, I hear this voice that says, 'Get it together or they'll stop needing you.'\"",
            "I suspect the resentment covers a deeper grief about losing parts of myself.",
            "If I admitted how overwhelmed I am, I'm scared I'd crumble and not come back."
          ])
        }
      },
      "case-3": {
        id: "case-3",
        label: "Case 3 · Mei",
        teaser: "Executive facing cultural and family pressures.",
        history:
          "Mei (41) leads a product team while caring for her mother. She feels pulled between cultural expectations and her own aspirations.",
        schema: "If I prioritize my needs, I'll dishonor my family and lose my place in both worlds.",
        style:
          "Direct in business contexts, softer at home, shifts between confident and tentative speech.",
        statements: {
          foundational: withIds("ec_mei_found", [
            "My mom says she's fine, yet I can see the disappointment when I travel for work.",
            "I promised my team a launch date and I'm terrified of missing it.",
            "Sometimes I lie about working late so I can sit in the car alone for ten minutes.",
            "I feel torn between being a good daughter and a strong leader.",
            "I keep thinking if I were stronger, I wouldn't feel so split."
          ]),
          stretch: withIds("ec_mei_stretch", [
            "I wish I could tell my mom that I'm scared I'm failing her.",
            "At work I sound decisive, but lately I'm second-guessing every call.",
            "There's no room to talk about my own needs without feeling selfish.",
            "When my brother suggests I relax, I hear criticism that I'm not doing enough.",
            "I dread family dinners because I'm bracing for unspoken comparisons."
          ]),
          mastery: withIds("ec_mei_mastery", [
            "I imagine choosing career goals fully and fear my family seeing me as abandoning them.",
            "Part of me longs for someone to give me permission to want what I want.",
            "I carry this quiet anger at having to translate myself for everyone.",
            "I suspect the constant over-functioning hides a deep fear of losing belonging.",
            "I wonder who I'd be if I stopped performing for both worlds."
          ])
        }
      }
    }
  },
  "empathic-refocusing": {
    name: "Empathic Refocusing",
    description:
      "Help clients reconnect with values, regulation anchors, and workable next steps without dismissing their pain.",
    cases: {
      "case-1": {
        id: "case-1",
        label: "Case 1 · Amir",
        teaser: "Community organizer overwhelmed by relentless crises.",
        history:
          "Amir (33) coordinates community response efforts and feels consumed by nonstop emergencies. He struggles to shift from vigilance to restoration.",
        schema:
          "If I pause, I abandon the people who depend on me and everything will unravel.",
        style:
          "Alert posture, eyes dart often, speaks in strategic bullet points, rarely references his own body signals.",
        statements: {
          foundational: withIds("er_amir_found", [
            "I sit down to eat and suddenly remember three people waiting on me, so I just keep going.",
            "Everyone calls me the calm center, but lately I feel like static electricity.",
            "I don't even notice I'm thirsty until I get a migraine.",
            "Rest feels like falling behind—it takes longer to catch up than to just keep pushing.",
            "If I don't monitor every thread, I worry the whole weave will snap."
          ]),
          stretch: withIds("er_amir_stretch", [
            "When I try to breathe slow, my chest tightens like I'm wasting critical time.",
            "I used to jog to clear my head, now the idea of being unreachable makes me panic.",
            "People thank me for the coordination, but I can't remember the last moment I felt grounded.",
            "I wake up already rehearsing worst-case scenarios before my feet hit the floor.",
            "The only time I disconnect is when my body crashes—and then I resent it for stopping me."
          ]),
          mastery: withIds("er_amir_mastery", [
            "There's this quiet ache wondering who I'd be if I wasn't everyone's safety net.",
            "Sometimes I imagine passing the baton, and it feels like dropping it mid-race.",
            "My nervous system feels like it's forgotten what 'enough' means.",
            "I miss noticing small joys, but scanning for danger feels like the only responsible lens.",
            "I worry that softening for even one afternoon would make it impossible to ramp back up."
          ])
        }
      },
      "case-2": {
        id: "case-2",
        label: "Case 2 · Elise",
        teaser: "Designer losing creative spark under perfection pressure.",
        history:
          "Elise (41) leads a design team and is known for meticulous standards. Lately she freezes when she intuits that a project may miss the mark.",
        schema:
          "If I let something imperfect leave my hands, my credibility and identity evaporate.",
        style:
          "Carefully chosen words, long pauses, rubs her wrists when stuck, oscillates between intense focus and blank stares.",
        statements: {
          foundational: withIds("er_elise_found", [
            "I keep redrawing the same layout, and each revision feels flatter than the last.",
            "My team asks what the priorities are, and my mind just empties.",
            "I know I should take a break, but stepping away feels like negligence.",
            "I'm forgetting why I loved concepting in the first place.",
            "Every idea looks derivative the moment I put it on paper."
          ]),
          stretch: withIds("er_elise_stretch", [
            "I can feel the energy in my hands, but it doesn't translate onto the canvas.",
            "When someone says, 'Trust your instincts,' I realize I can't access them.",
            "I leave critiques drained, replaying every note as proof I'm slipping.",
            "Part of me wants to experiment wildly; another part clamps down before I even try.",
            "I catch myself doom-scrolling other people's work instead of touching my own."
          ]),
          mastery: withIds("er_elise_mastery", [
            "There's a grief in me about who I was before it all felt high stakes.",
            "I crave making something messy and alive, then hear this voice insisting it must be flawless.",
            "Sometimes I stare at color palettes and feel nothing—like the connection severed overnight.",
            "If I allowed myself to release a piece that was simply 'good enough,' I fear I'd never be proud again.",
            "I wonder if my imagination is still there, just buried under the static of expectation."
          ])
        }
      },
      "case-3": {
        id: "case-3",
        label: "Case 3 · Victor",
        teaser: "Engineer stuck between medical recovery and identity as high performer.",
        history:
          "Victor (46) recently returned to work after cardiac rehab. He battles shame about reduced stamina and keeps slipping into overdrive against medical advice.",
        schema:
          "If I accept limits, I'll disappear from the life I've built and become irrelevant.",
        style:
          "Measured tone, cracks dry jokes about aging, taps his foot constantly, avoids mentioning fear unless specifically asked.",
        statements: {
          foundational: withIds("er_victor_found", [
            "The doctor keeps saying 'pace yourself,' and I nod while planning extra reps.",
            "My team offered to share the load, and I felt equal parts grateful and insulted.",
            "I used to start my day with a run; now the walk to the mailbox winds me.",
            "I know the metrics that matter, but my body won't cooperate with the timeline.",
            "There's this stack of books on recovery, and I can't bring myself to open them."
          ]),
          stretch: withIds("er_victor_stretch", [
            "When I slow down, I hear this whisper that I'm failing the people who count on me.",
            "I replay the moment in the hospital like a glitch I should have prevented.",
            "My heart rate spikes when I picture delegating the hard problems.",
            "Friends say the scare could be a reset, but I feel more adrift than renewed.",
            "I miss trusting my own body; now every sensation feels suspect."
          ]),
          mastery: withIds("er_victor_mastery", [
            "Sometimes I wonder who I am without the output, and the silence is deafening.",
            "I fantasize about a day paced by curiosity, then panic that I'd become complacent.",
            "There's guilt that I survived—and guilt that I'm not bouncing back faster.",
            "When I meditate, I meet a wall of restlessness that feels like it might swallow me.",
            "I hear the word 'healing' and immediately translate it into 'fight harder,' even though I know that's the old code."
          ])
        }
      }
    }
  },
  he: {},
  ar: {},
  ru: {}
};

export const LANGUAGE_METADATA = {
  en: { label: "English", locale: "en", direction: "ltr" },
  de: { label: "Deutsch", locale: "de", direction: "ltr" },
  no: { label: "Norsk", locale: "nb", direction: "ltr" },
  sv: { label: "Svenska", locale: "sv", direction: "ltr" },
  pt: { label: "Português", locale: "pt", direction: "ltr" },
  nl: { label: "Nederlands", locale: "nl", direction: "ltr" },
  el: { label: "Ελληνικά", locale: "el", direction: "ltr" },
  zh: { label: "中文 (普通话)", locale: "zh-Hans", direction: "ltr" },
  fr: { label: "Français", locale: "fr", direction: "ltr" },
  da: { label: "Dansk", locale: "da", direction: "ltr" },
  es: { label: "Español", locale: "es", direction: "ltr" },
  he: { label: "עברית", locale: "he", direction: "rtl" },
  ar: { label: "العربية", locale: "ar", direction: "rtl" },
  ru: { label: "Русский", locale: "ru", direction: "ltr" }
};

export const LANGUAGE_UI = {
  en: {
    appTitle: "Deliberate Practice Lab",
    tagline: "Build precision with focused skills, tailored cases, and adaptive difficulty.",
    languageHeading: "Choose a Language",
    languageDescription: "Select the language you want to practice in.",
    languageListAria: "Language options",
    skillHeading: "Choose a Skill",
    skillDescription: "Pick the focus area you want to strengthen today.",
    skillListAria: "Skill options",
    caseHeading: "Pick a Case",
    caseDescription: "Explore curated cases that mirror real-world dynamics.",
    caseListAria: "Case options",
    historyLabel: "History",
    schemaLabel: "Core Pain",
    styleLabel: "Style",
    difficultyLabels: {
      foundational: "Foundational",
      stretch: "Stretch",
      mastery: "Mastery"
    },
    difficultyGroupAria: "Difficulty level",
    practiceControlsAria: "Practice controls",
    shuffle: "Shuffle Statements",
    shuffleAria: "Shuffle statement order",
    next: "Next Statement",
    nextAria: "Advance to the next statement",
    statementFallback: "Statements for this difficulty are not available yet.",
    emptyPrompt: "Select a skill and case to begin practicing statements.",
    counterPattern: "{current} of {total} · {difficulty}",
    backToLanguage: "Language",
    backToLanguageAria: "Back to language selection",
    backToSkills: "Skills",
    backToSkillsAria: "Back to skills",
    backToCases: "Cases",
    backToCasesAria: "Back to cases",
    footerNote:
      "Crafted for focused skill rehearsal. Use headphones or quiet space for best results.",
    statementPanelAria: "Client statements to practice with"
  },
  de: {
    appTitle: "Labor für Deliberate Practice",
    tagline:
      "Schärfe deine Präzision mit fokussierten Fähigkeiten, passenden Fallbeispielen und variabler Schwierigkeit.",
    languageHeading: "Wähle eine Sprache",
    languageDescription: "Bestimme, in welcher Sprache du üben möchtest.",
    languageListAria: "Sprachauswahl",
    skillHeading: "Wähle eine Fertigkeit",
    skillDescription: "Lege fest, worauf du dich heute konzentrieren willst.",
    skillListAria: "Fertigkeiten",
    caseHeading: "Wähle einen Fall",
    caseDescription: "Entdecke kuratierte Fälle, die reale Dynamiken widerspiegeln.",
    caseListAria: "Fälle",
    historyLabel: "Biografie",
    schemaLabel: "Kernschmerz",
    styleLabel: "Stil",
    difficultyLabels: {
      foundational: "Grundlage",
      stretch: "Wachstum",
      mastery: "Meisterschaft"
    },
    difficultyGroupAria: "Schwierigkeitsgrad",
    practiceControlsAria: "Übungssteuerung",
    shuffle: "Aussagen mischen",
    shuffleAria: "Reihenfolge der Aussagen mischen",
    next: "Nächste Aussage",
    nextAria: "Zur nächsten Aussage wechseln",
    statementFallback: "Für diese Schwierigkeit sind noch keine Aussagen verfügbar.",
    emptyPrompt: "Wähle eine Fertigkeit und einen Fall, um mit der Übung zu beginnen.",
    counterPattern: "{current} von {total} · {difficulty}",
    backToLanguage: "Sprache",
    backToLanguageAria: "Zur Sprachauswahl zurück",
    backToSkills: "Fertigkeiten",
    backToSkillsAria: "Zur Fertigkeitsauswahl zurück",
    backToCases: "Fälle",
    backToCasesAria: "Zur Fallauswahl zurück",
    footerNote:
      "Entwickelt für fokussiertes Üben. Nutze Kopfhörer oder einen ruhigen Ort für die beste Erfahrung.",
    statementPanelAria: "Klientenaussagen zum Üben"
  },
  no: {
    appTitle: "Labor for Deliberate Practice",
    tagline:
      "Bygg presisjon med målrettede ferdigheter, utvalgte case og justerbar vanskelighetsgrad.",
    languageHeading: "Velg språk",
    languageDescription: "Velg hvilket språk du vil øve på.",
    languageListAria: "Språkalternativer",
    skillHeading: "Velg ferdighet",
    skillDescription: "Bestem hvilket fokusområde du vil styrke i dag.",
    skillListAria: "Ferdighetsvalg",
    caseHeading: "Velg case",
    caseDescription: "Utforsk case som speiler virkelige situasjoner.",
    caseListAria: "Casealternativer",
    historyLabel: "Bakgrunn",
    schemaLabel: "Kjernesmerte",
    styleLabel: "Stil",
    difficultyLabels: {
      foundational: "Grunnleggende",
      stretch: "Utfordrende",
      mastery: "Mesternivå"
    },
    difficultyGroupAria: "Vanskelighetsnivå",
    practiceControlsAria: "Kontroller for øvelsen",
    shuffle: "Bland utsagn",
    shuffleAria: "Bland rekkefølgen på utsagnene",
    next: "Neste utsagn",
    nextAria: "Gå til neste utsagn",
    statementFallback: "Det er foreløpig ingen utsagn for dette nivået.",
    emptyPrompt: "Velg en ferdighet og et case for å starte øvingen.",
    counterPattern: "{current} av {total} · {difficulty}",
    backToLanguage: "Språk",
    backToLanguageAria: "Tilbake til språkmenyen",
    backToSkills: "Ferdigheter",
    backToSkillsAria: "Tilbake til ferdighetsmenyen",
    backToCases: "Case",
    backToCasesAria: "Tilbake til casemenyen",
    footerNote:
      "Utviklet for målrettet øving. Bruk hodetelefoner eller et stille rom for best resultat.",
    statementPanelAria: "Klientutsagn å øve på"
  },
  sv: {
    appTitle: "Laboratorium för målmedveten träning",
    tagline:
      "Finjustera din precision med fokuserade färdigheter, utvalda fall och anpassad svårighet.",
    languageHeading: "Välj språk",
    languageDescription: "Välj vilket språk du vill träna på.",
    languageListAria: "Språkalternativ",
    skillHeading: "Välj färdighet",
    skillDescription: "Bestäm vilket fokusområde du vill stärka i dag.",
    skillListAria: "Färdighetsalternativ",
    caseHeading: "Välj fall",
    caseDescription: "Utforska noggrant utvalda fall som speglar verkligheten.",
    caseListAria: "Fallalternativ",
    historyLabel: "Bakgrund",
    schemaLabel: "Kärnsmärta",
    styleLabel: "Stil",
    difficultyLabels: {
      foundational: "Grundnivå",
      stretch: "Utmaning",
      mastery: "Mästarfördjupning"
    },
    difficultyGroupAria: "Svårighetsgrad",
    practiceControlsAria: "Övningskontroller",
    shuffle: "Blanda uttalanden",
    shuffleAria: "Blanda ordningen på uttalandena",
    next: "Nästa uttalande",
    nextAria: "Gå till nästa uttalande",
    statementFallback: "Det finns ännu inga uttalanden för den här nivån.",
    emptyPrompt: "Välj en färdighet och ett fall för att börja öva.",
    counterPattern: "{current} av {total} · {difficulty}",
    backToLanguage: "Språk",
    backToLanguageAria: "Tillbaka till språkmenyn",
    backToSkills: "Färdigheter",
    backToSkillsAria: "Tillbaka till färdighetsmenyn",
    backToCases: "Fall",
    backToCasesAria: "Tillbaka till fallmenyn",
    footerNote:
      "Skapat för fokuserad träning. Använd gärna hörlurar eller en lugn miljö för bästa resultat.",
    statementPanelAria: "Klientuttalanden att öva på"
  },
  pt: {
    appTitle: "Laboratório de Prática Deliberada",
    tagline:
      "Aprimore a precisão com habilidades focadas, casos selecionados e dificuldade ajustável.",
    languageHeading: "Escolha um idioma",
    languageDescription: "Selecione o idioma em que deseja praticar.",
    languageListAria: "Opções de idioma",
    skillHeading: "Escolha uma habilidade",
    skillDescription: "Defina a área de foco que você quer fortalecer hoje.",
    skillListAria: "Opções de habilidade",
    caseHeading: "Escolha um caso",
    caseDescription: "Explore casos que refletem dinâmicas reais.",
    caseListAria: "Opções de caso",
    historyLabel: "Histórico",
    schemaLabel: "Dor central",
    styleLabel: "Estilo",
    difficultyLabels: {
      foundational: "Fundamental",
      stretch: "Desafio",
      mastery: "Maestria"
    },
    difficultyGroupAria: "Nível de dificuldade",
    practiceControlsAria: "Controles da prática",
    shuffle: "Embaralhar afirmações",
    shuffleAria: "Embaralhar a ordem das afirmações",
    next: "Próxima afirmação",
    nextAria: "Ir para a próxima afirmação",
    statementFallback: "Ainda não há afirmações disponíveis para este nível.",
    emptyPrompt: "Escolha uma habilidade e um caso para iniciar a prática.",
    counterPattern: "{current} de {total} · {difficulty}",
    backToLanguage: "Idioma",
    backToLanguageAria: "Voltar para a seleção de idioma",
    backToSkills: "Habilidades",
    backToSkillsAria: "Voltar para a seleção de habilidades",
    backToCases: "Casos",
    backToCasesAria: "Voltar para a seleção de casos",
    footerNote:
      "Criado para treino focado. Use fones de ouvido ou um espaço silencioso para melhores resultados.",
    statementPanelAria: "Afirmações do cliente para praticar"
  },
  nl: {
    appTitle: "Lab voor Bewuste Oefening",
    tagline:
      "Verfijn je precisie met gerichte vaardigheden, passende casussen en een aanpasbaar niveau.",
    languageHeading: "Kies een taal",
    languageDescription: "Selecteer de taal waarin je wilt oefenen.",
    languageListAria: "Taalopties",
    skillHeading: "Kies een vaardigheid",
    skillDescription: "Bepaal welke vaardigheid je vandaag wilt versterken.",
    skillListAria: "Vaardigheidsopties",
    caseHeading: "Kies een casus",
    caseDescription: "Ontdek zorgvuldig samengestelde casussen met herkenbare dynamieken.",
    caseListAria: "Casusopties",
    historyLabel: "Achtergrond",
    schemaLabel: "Kernpijn",
    styleLabel: "Stijl",
    difficultyLabels: {
      foundational: "Basis",
      stretch: "Uitdaging",
      mastery: "Beheersing"
    },
    difficultyGroupAria: "Moeilijkheidsgraad",
    practiceControlsAria: "Oefenbediening",
    shuffle: "Uitspraken mixen",
    shuffleAria: "Volgorde van uitspraken mixen",
    next: "Volgende uitspraak",
    nextAria: "Ga naar de volgende uitspraak",
    statementFallback: "Voor dit niveau zijn nog geen uitspraken beschikbaar.",
    emptyPrompt: "Kies een vaardigheid en casus om te beginnen met oefenen.",
    counterPattern: "{current} van {total} · {difficulty}",
    backToLanguage: "Taal",
    backToLanguageAria: "Terug naar de taalselectie",
    backToSkills: "Vaardigheden",
    backToSkillsAria: "Terug naar de vaardighedenselectie",
    backToCases: "Casussen",
    backToCasesAria: "Terug naar de casusselectie",
    footerNote:
      "Ontworpen voor doelgerichte oefening. Gebruik koptelefoon of een stille ruimte voor het beste resultaat.",
    statementPanelAria: "Cliëntenuitspraken om mee te oefenen"
  },
  el: {
    appTitle: "Εργαστήριο Συνειδητής Εξάσκησης",
    tagline:
      "Καλλιέργησε ακρίβεια με στοχευμένες δεξιότητες, επιλεγμένα περιστατικά και προσαρμόσιμη δυσκολία.",
    languageHeading: "Επίλεξε γλώσσα",
    languageDescription: "Διάλεξε τη γλώσσα στην οποία θέλεις να εξασκηθείς.",
    languageListAria: "Επιλογές γλώσσας",
    skillHeading: "Επίλεξε δεξιότητα",
    skillDescription: "Διάλεξε το πεδίο στο οποίο θέλεις να εστιάσεις σήμερα.",
    skillListAria: "Δεξιότητες",
    caseHeading: "Επίλεξε περιστατικό",
    caseDescription: "Εξερεύνησε επιλεγμένα περιστατικά που αντικατοπτρίζουν πραγματικές δυναμικές.",
    caseListAria: "Περιστατικά",
    historyLabel: "Ιστορικό",
    schemaLabel: "Βασικός πόνος",
    styleLabel: "Ύφος",
    difficultyLabels: {
      foundational: "Βασικό",
      stretch: "Πρόκληση",
      mastery: "Δεξιοτεχνία"
    },
    difficultyGroupAria: "Επίπεδο δυσκολίας",
    practiceControlsAria: "Χειριστήρια εξάσκησης",
    shuffle: "Ανακάτεψε τις δηλώσεις",
    shuffleAria: "Αναδιάταξε τις δηλώσεις",
    next: "Επόμενη δήλωση",
    nextAria: "Πήγαινε στην επόμενη δήλωση",
    statementFallback: "Δεν υπάρχουν ακόμη δηλώσεις για αυτό το επίπεδο.",
    emptyPrompt: "Επίλεξε δεξιότητα και περιστατικό για να ξεκινήσεις την εξάσκηση.",
    counterPattern: "{current} από {total} · {difficulty}",
    backToLanguage: "Γλώσσα",
    backToLanguageAria: "Επιστροφή στην επιλογή γλώσσας",
    backToSkills: "Δεξιότητες",
    backToSkillsAria: "Επιστροφή στην επιλογή δεξιοτήτων",
    backToCases: "Περιστατικά",
    backToCasesAria: "Επιστροφή στην επιλογή περιστατικών",
    footerNote:
      "Σχεδιασμένο για εστιασμένη εξάσκηση. Χρησιμοποίησε ακουστικά ή ήσυχο χώρο για καλύτερο αποτέλεσμα.",
    statementPanelAria: "Δηλώσεις πελατών για εξάσκηση"
  },
  zh: {
    appTitle: "刻意练习实验室",
    tagline: "通过聚焦技能、精选案例和可调难度来提升临床精准度。",
    languageHeading: "选择语言",
    languageDescription: "请选择你希望练习的语言。",
    languageListAria: "语言选项",
    skillHeading: "选择技能",
    skillDescription: "确定你今天想要强化的技能焦点。",
    skillListAria: "技能选项",
    caseHeading: "选择案例",
    caseDescription: "探索贴近现实动态的精选案例。",
    caseListAria: "案例选项",
    historyLabel: "背景",
    schemaLabel: "核心痛点",
    styleLabel: "风格",
    difficultyLabels: {
      foundational: "基础",
      stretch: "进阶",
      mastery: "精通"
    },
    difficultyGroupAria: "难度等级",
    practiceControlsAria: "练习控制",
    shuffle: "打乱话术",
    shuffleAria: "打乱话术顺序",
    next: "下一句",
    nextAria: "切换到下一句",
    statementFallback: "该难度暂时没有可用的话术。",
    emptyPrompt: "请选择技能和案例后开始练习。",
    counterPattern: "{current}/{total} · {difficulty}",
    backToLanguage: "语言",
    backToLanguageAria: "返回语言选择",
    backToSkills: "技能",
    backToSkillsAria: "返回技能选择",
    backToCases: "案例",
    backToCasesAria: "返回案例选择",
    footerNote: "为专注练习而设计。推荐使用耳机或在安静空间中体验以获得最佳效果。",
    statementPanelAria: "用于练习的来访者话术"
  },
  fr: {
    appTitle: "Atelier de Pratique Délibérée",
    tagline:
      "Affinez votre précision avec des compétences ciblées, des cas adaptés et un niveau modulable.",
    languageHeading: "Choisissez une langue",
    languageDescription: "Sélectionnez la langue dans laquelle vous souhaitez vous exercer.",
    languageListAria: "Options de langue",
    skillHeading: "Choisissez une compétence",
    skillDescription: "Déterminez la compétence que vous souhaitez renforcer aujourd'hui.",
    skillListAria: "Options de compétence",
    caseHeading: "Choisissez un cas",
    caseDescription: "Découvrez des cas soigneusement sélectionnés qui reflètent la réalité.",
    caseListAria: "Options de cas",
    historyLabel: "Histoire",
    schemaLabel: "Douleur centrale",
    styleLabel: "Style",
    difficultyLabels: {
      foundational: "Fondations",
      stretch: "Challenge",
      mastery: "Maîtrise"
    },
    difficultyGroupAria: "Niveau de difficulté",
    practiceControlsAria: "Commandes d'exercice",
    shuffle: "Mélanger les énoncés",
    shuffleAria: "Mélanger l'ordre des énoncés",
    next: "Énoncé suivant",
    nextAria: "Passer à l'énoncé suivant",
    statementFallback: "Aucun énoncé n'est encore disponible pour ce niveau.",
    emptyPrompt: "Choisissez une compétence et un cas pour commencer à vous exercer.",
    counterPattern: "{current} sur {total} · {difficulty}",
    backToLanguage: "Langue",
    backToLanguageAria: "Retour à la sélection de langue",
    backToSkills: "Compétences",
    backToSkillsAria: "Retour à la sélection des compétences",
    backToCases: "Cas",
    backToCasesAria: "Retour à la sélection des cas",
    footerNote:
      "Conçu pour une pratique ciblée. Utilisez un casque ou un espace calme pour une meilleure immersion.",
    statementPanelAria: "Énoncés clients pour s'entraîner"
  },
  da: {
    appTitle: "Laboratorium for Bevidst Træning",
    tagline:
      "Styrk din præcision med målrettede færdigheder, udvalgte cases og justerbar sværhedsgrad.",
    languageHeading: "Vælg sprog",
    languageDescription: "Vælg hvilket sprog du vil øve på.",
    languageListAria: "Sprogvalg",
    skillHeading: "Vælg færdighed",
    skillDescription: "Find det område, du vil styrke i dag.",
    skillListAria: "Færdighedsvalg",
    caseHeading: "Vælg case",
    caseDescription: "Udforsk cases, der afspejler virkelige dynamikker.",
    caseListAria: "Casevalg",
    historyLabel: "Historik",
    schemaLabel: "Kernesmærte",
    styleLabel: "Stil",
    difficultyLabels: {
      foundational: "Grundniveau",
      stretch: "Udfordring",
      mastery: "Mesterskab"
    },
    difficultyGroupAria: "Sværhedsgrad",
    practiceControlsAria: "Træningskontroller",
    shuffle: "Bland udsagn",
    shuffleAria: "Bland rækkefølgen på udsagnene",
    next: "Næste udsagn",
    nextAria: "Gå til næste udsagn",
    statementFallback: "Der er endnu ingen udsagn for dette niveau.",
    emptyPrompt: "Vælg en færdighed og en case for at starte træningen.",
    counterPattern: "{current} af {total} · {difficulty}",
    backToLanguage: "Sprog",
    backToLanguageAria: "Tilbage til sprogvælgeren",
    backToSkills: "Færdigheder",
    backToSkillsAria: "Tilbage til færdighedsvælgeren",
    backToCases: "Cases",
    backToCasesAria: "Tilbage til casevælgeren",
    footerNote:
      "Skabt til fokuseret træning. Brug høretelefoner eller et stille rum for det bedste resultat.",
    statementPanelAria: "Klientudsagn til træning"
  },
  es: {
    appTitle: "Laboratorio de Práctica Deliberada",
    tagline:
      "Afina tu precisión con habilidades enfocadas, casos seleccionados y dificultad adaptable.",
    languageHeading: "Elige un idioma",
    languageDescription: "Selecciona el idioma en el que quieres practicar.",
    languageListAria: "Opciones de idioma",
    skillHeading: "Elige una habilidad",
    skillDescription: "Decide qué área deseas fortalecer hoy.",
    skillListAria: "Opciones de habilidad",
    caseHeading: "Elige un caso",
    caseDescription: "Explora casos cuidadosamente seleccionados que reflejan situaciones reales.",
    caseListAria: "Opciones de caso",
    historyLabel: "Historia",
    schemaLabel: "Dolor central",
    styleLabel: "Estilo",
    difficultyLabels: {
      foundational: "Base",
      stretch: "Desafío",
      mastery: "Maestría"
    },
    difficultyGroupAria: "Nivel de dificultad",
    practiceControlsAria: "Controles de la práctica",
    shuffle: "Mezclar frases",
    shuffleAria: "Mezclar el orden de las frases",
    next: "Siguiente frase",
    nextAria: "Ir a la siguiente frase",
    statementFallback: "Aún no hay frases disponibles para este nivel.",
    emptyPrompt: "Elige una habilidad y un caso para comenzar a practicar.",
    counterPattern: "{current} de {total} · {difficulty}",
    backToLanguage: "Idioma",
    backToLanguageAria: "Volver a la selección de idioma",
    backToSkills: "Habilidades",
    backToSkillsAria: "Volver a la selección de habilidades",
    backToCases: "Casos",
    backToCasesAria: "Volver a la selección de casos",
    footerNote:
      "Diseñado para un entrenamiento enfocado. Usa auriculares o un espacio tranquilo para mejores resultados.",
    statementPanelAria: "Frases de clientes para practicar"
  },
  he: {
    appTitle: "מעבדת תרגול מכוון",
    tagline: "לטש דיוק באמצעות מיומנויות ממוקדות, תרחישים מותאמים ורמות קושי גמישות.",
    languageHeading: "בחרו שפה",
    languageDescription: "בחרו את השפה שבה תרצו לתרגל.",
    languageListAria: "אפשרויות שפה",
    skillHeading: "בחרו מיומנות",
    skillDescription: "החליטו על תחום ההתמקדות שתרצו לחזק היום.",
    skillListAria: "אפשרויות מיומנות",
    caseHeading: "בחרו מקרה",
    caseDescription: "גלו תרחישים שנבנו כדי לשקף דינמיקות אמיתיות.",
    caseListAria: "אפשרויות מקרה",
    historyLabel: "רקע",
    schemaLabel: "כאב ליבה",
    styleLabel: "סגנון",
    difficultyLabels: {
      foundational: "בסיס",
      stretch: "אתגר",
      mastery: "שליטה"
    },
    difficultyGroupAria: "רמת קושי",
    practiceControlsAria: "בקרות תרגול",
    shuffle: "ערבבו אמירות",
    shuffleAria: "ערבבו את סדר האמירות",
    next: "האמירה הבאה",
    nextAria: "עברו לאמירה הבאה",
    statementFallback: "אין עדיין אמירות לרמת קושי זו.",
    emptyPrompt: "בחרו מיומנות ומקרה כדי להתחיל לתרגל.",
    counterPattern: "{current} מתוך {total} · {difficulty}",
    backToLanguage: "שפה",
    backToLanguageAria: "חזרה לבחירת השפה",
    backToSkills: "מיומנויות",
    backToSkillsAria: "חזרה לבחירת המיומנות",
    backToCases: "מקרים",
    backToCasesAria: "חזרה לבחירת המקרה",
    footerNote: "נבנה לאימון ממוקד. מומלץ להשתמש באוזניות או במרחב שקט.",
    statementPanelAria: "אמירות לתרגול"
  },
  ar: {
    appTitle: "مختبر التدريب المتعمد",
    tagline:
      "طوّر الدقة بمهارات مركزة، وحالات مصممة، ومستويات صعوبة قابلة للتعديل.",
    languageHeading: "اختر اللغة",
    languageDescription: "حدّد اللغة التي تريد التدرب بها.",
    languageListAria: "خيارات اللغة",
    skillHeading: "اختر المهارة",
    skillDescription: "حدد مجال التركيز الذي تريد تقويته اليوم.",
    skillListAria: "خيارات المهارات",
    caseHeading: "اختر الحالة",
    caseDescription: "استكشف حالات مصممة لتعكس ديناميكيات حقيقية.",
    caseListAria: "خيارات الحالة",
    historyLabel: "الخلفية",
    schemaLabel: "مركز الألم",
    styleLabel: "الأسلوب",
    difficultyLabels: {
      foundational: "أساسي",
      stretch: "تطور",
      mastery: "إتقان"
    },
    difficultyGroupAria: "مستوى الصعوبة",
    practiceControlsAria: "عناصر التحكم في التدريب",
    shuffle: "إعادة ترتيب العبارات",
    shuffleAria: "إعادة ترتيب تسلسل العبارات",
    next: "العبارة التالية",
    nextAria: "الانتقال إلى العبارة التالية",
    statementFallback: "لا توجد عبارات متاحة بعد لهذا المستوى.",
    emptyPrompt: "اختر مهارة وحالة لبدء التدريب.",
    counterPattern: "{current} من {total} · {difficulty}",
    backToLanguage: "اللغة",
    backToLanguageAria: "العودة لاختيار اللغة",
    backToSkills: "المهارات",
    backToSkillsAria: "العودة لاختيار المهارة",
    backToCases: "الحالات",
    backToCasesAria: "العودة لاختيار الحالة",
    footerNote: "صُمّم لجلسات تدريب مركزة. يُفضل استخدام سماعات أو مساحة هادئة.",
    statementPanelAria: "عبارات للتدريب"
  },
  ru: {
    appTitle: "Лаборатория осознанной практики",
    tagline:
      "Развивайте точность с помощью фокусных навыков, подобранных кейсов и адаптивной сложности.",
    languageHeading: "Выберите язык",
    languageDescription: "Укажите язык, на котором хотите практиковаться.",
    languageListAria: "Варианты языка",
    skillHeading: "Выберите навык",
    skillDescription: "Определите, что хотите усилить сегодня.",
    skillListAria: "Список навыков",
    caseHeading: "Выберите кейс",
    caseDescription: "Изучите подборку ситуаций, отражающих реальные динамики.",
    caseListAria: "Варианты кейсов",
    historyLabel: "История",
    schemaLabel: "Ключевая боль",
    styleLabel: "Стиль",
    difficultyLabels: {
      foundational: "База",
      stretch: "Рост",
      mastery: "Мастерство"
    },
    difficultyGroupAria: "Уровень сложности",
    practiceControlsAria: "Элементы управления тренировкой",
    shuffle: "Перемешать фразы",
    shuffleAria: "Изменить порядок фраз",
    next: "Следующая фраза",
    nextAria: "Перейти к следующей фразе",
    statementFallback: "Для этого уровня пока нет фраз.",
    emptyPrompt: "Выберите навык и кейс, чтобы начать тренировку.",
    counterPattern: "{current} из {total} · {difficulty}",
    backToLanguage: "Язык",
    backToLanguageAria: "Назад к выбору языка",
    backToSkills: "Навыки",
    backToSkillsAria: "Назад к навыкам",
    backToCases: "Кейсы",
    backToCasesAria: "Назад к кейсам",
    footerNote:
      "Создано для точечной практики. Лучше тренироваться в наушниках или спокойном месте.",
    statementPanelAria: "Фразы клиента для тренировки"
  }
};

export const LANGUAGE_OVERRIDES = {
  de: {
    "empathic-validation": {
      name: "Empathische Validierung",
      description:
        "Spiegle die emotionale Erlebniswelt der Klientin präzise, um spürbare Sicherheit aufzubauen.",
      cases: {
        "case-1": {
          label: "Fall 1 · Lea",
          teaser: "Lehrerin am Rand des Burnouts nach Jahren der Pflege.",
          history:
            "Lea (38) ist Gymnasiallehrerin und hat ihren chronisch kranken Vater jahrelang gepflegt. Sie ist stolz darauf, verlässlich zu sein, fühlt sich aber dauerhaft erschöpft.",
          schema:
            "Wenn ich aufhöre zu leisten, fällt alles auseinander und man hält mich für egoistisch.",
          style:
            "Spricht schnell, lächelt um Schmerzen zu verstecken, spielt Bedürfnisse herunter und entschuldigt sich, sobald Gefühle hochkommen."
        },
        "case-2": {
          label: "Fall 2 · Malik",
          teaser: "Startup-Gründer mit Angst vor Zurückweisung.",
          history:
            "Malik (29) führt ein kleines Startup und ist als Kind oft umgezogen. Beziehungen wirken riskant; er rechnet damit, enttäuscht zu werden, wenn Menschen zu nahe kommen.",
          schema:
            "Wenn man mein wahres Ich sieht, geht man. Ich muss beeindruckend sein, um bleiben zu dürfen.",
          style:
            "Angespannte Mimik, intellektualisiert Gefühle, bleibt ruhig, bis er sich plötzlich zurückzieht."
        },
        "case-3": {
          label: "Fall 3 · Carmen",
          teaser: "Ärztin ringt mit Trauer und Wut.",
          history:
            "Carmen (46) ist Notfallmedizinerin. Ihr jüngerer Bruder starb kürzlich an einer Überdosis. Sie fühlt sich verpflichtet, für die Familie stark zu bleiben.",
          schema:
            "Wenn ich Trauer oder Wut zeige, verliere ich die Kontrolle und belaste alle.",
          style:
            "Bedächtige Stimme, hält Gespräche geordnet, macht trocken-witzige Bemerkungen, Tränen stehen ihr schnell in den Augen."
        }
      }
    },
    "empathic-conjecture": {
      name: "Empathische Hypothese",
      description:
        "Biete behutsame Hypothesen an, die zur Vertiefung und gemeinsamen Entdeckung einladen.",
      cases: {
        "case-1": {
          label: "Fall 1 · Sahana",
          teaser: "Psychologiestudentin mit Angst, andere zu enttäuschen.",
          history:
            "Sahana (27) schließt ihr klinisches Praktikum ab und fürchtet, ihre Supervisorinnen zu enttäuschen. Sie schwankt zwischen Übervorbereitung und Blockade.",
          schema:
            "Wenn ich nicht außergewöhnlich bin, bereuen Menschen, in mich investiert zu haben, und ich bleibe allein.",
          style:
            "Herzlich, aber zurückhaltend, bittet indirekt um Bestätigung, dankbar und spielt Schwierigkeiten herunter."
        },
        "case-2": {
          label: "Fall 2 · Tomás",
          teaser: "Frischgebackener Vater zwischen Fürsorge und Groll.",
          history:
            "Tomás (34) ist gerade Vater geworden, teilt sich die Betreuung mit seinem Partner und arbeitet im Schichtdienst. Er schämt sich für Momente von Groll.",
          schema:
            "Wenn ich nicht alles mit Leichtigkeit schaffe, versage ich als Partner und Vater.",
          style:
            "Selbstironischer Humor, nestelt mit den Händen, Stimme schwankt zwischen lebhaft und müde."
        },
        "case-3": {
          label: "Fall 3 · Mei",
          teaser: "Führungskraft zwischen kulturellen Erwartungen und Eigenanspruch.",
          history:
            "Mei (41) leitet ein Produktteam und kümmert sich gleichzeitig um ihre Mutter. Sie fühlt sich zwischen kulturellen Erwartungen und eigenen Zielen zerrissen.",
          schema:
            "Wenn ich meine Bedürfnisse priorisiere, entehrre ich meine Familie und verliere meinen Platz in beiden Welten.",
          style:
            "Im Business direkt, zuhause sanfter, wechselt zwischen selbstsicherem und zögerlichem Ton."
        }
      }
    }
  },
  no: {
    "empathic-validation": {
      name: "Empatisk validering",
      description:
        "Speil klientens følelseslandskap presist slik at trygghet og opplevelsen av å bli sett kan vokse.",
      cases: {
        "case-1": {
          label: "Sak 1 · Lea",
          teaser: "Lærer i ferd med å brenne ut etter år som omsorgsbærer.",
          history:
            "Lea (38) er ungdomsskolelærer og har hatt hovedansvaret for farens kroniske sykdom i flere år. Hun er stolt av å være pålitelig, men føler seg konstant tappet.",
          schema:
            "Hvis jeg slipper presset, faller alt fra hverandre, og jeg blir avslørt som egoistisk.",
          style:
            "Snakker raskt, smiler for å holde smerten på avstand, nedtoner egne behov og sier unnskyld når følelsene viser seg."
        },
        "case-2": {
          label: "Sak 2 · Malik",
          teaser: "Gründer som frykter avvisning og avstand.",
          history:
            "Malik (29) driver en liten startup og flyttet mye som barn. Relasjoner føles risikable; han forventer skuffelse hvis folk kommer for tett på.",
          schema:
            "Hvis folk ser den egentlige meg, forlater de meg. Jeg må imponere for å være verdt å bli hos.",
          style:
            "Stramt smil, intellektualiserer følelser, holder en rolig tone til han plutselig trekker seg unna."
        },
        "case-3": {
          label: "Sak 3 · Carmen",
          teaser: "Lege som kjemper med sorg og sinne.",
          history:
            "Carmen (46) er akuttlege. Lillebroren døde nylig av en overdose, og hun føler et pålegg om å holde seg samlet for familien.",
          schema:
            "Hvis jeg viser sorg eller sinne, mister jeg kontrollen og blir en byrde for alle rundt meg.",
          style:
            "Avmålt stemme, holder samtaler ryddige, kommer med tørre kommentarer, og øynene fylles raskt med tårer når hun blir tatt på senga."
        }
      }
    },
    "empathic-conjecture": {
      name: "Empatisk hypotesedanning",
      description:
        "Tilby varsomme hypoteser som inviterer til dypere refleksjon og felles utforskning.",
      cases: {
        "case-1": {
          label: "Sak 1 · Sahana",
          teaser: "Psykologstudent som frykter å skuffe veilederne.",
          history:
            "Sahana (27) er i sluttfasen av klinisk praksis og er redd for å skuffe veilederne sine. Hun veksler mellom overforberedelse og å fryse.",
          schema:
            "Hvis jeg ikke er eksepsjonell, angrer folk på at de satset på meg, og jeg blir stående alene.",
          style:
            "Varm, men litt på vakt, søker bekreftelse indirekte, uttrykker takknemlighet samtidig som hun toner ned det vanskelige."
        },
        "case-2": {
          label: "Sak 2 · Tomas",
          teaser: "Nybakt far som pendler mellom omsorg og bitterhet.",
          history:
            "Tomas (34) ble nylig far og deler omsorgen med partneren sin mens han går i skiftarbeid. Han skammer seg over øyeblikk av irritasjon.",
          schema:
            "Hvis jeg ikke møter alles behov med ro, betyr det at jeg svikter som partner og forelder.",
          style:
            "Selvironisk humor, urolig kroppsspråk, stemmen skifter mellom energisk og utmattet."
        },
        "case-3": {
          label: "Sak 3 · Mei",
          teaser: "Leder presset mellom kulturforventninger og egne mål.",
          history:
            "Mei (41) leder et produktteam samtidig som hun tar seg av moren sin. Hun føler seg dratt mellom kulturelle forventninger og egne ambisjoner.",
          schema:
            "Hvis jeg prioriterer mine behov, vanærer jeg familien og mister plassen min i begge verdener.",
          style:
            "Direkte i jobbsammenheng, mykere hjemme, pendler mellom trygg og nølende tone."
        }
      }
    }
  },
  sv: {
    "empathic-validation": {
      name: "Empatisk validering",
      description:
        "Spegla klientens känslolandskap med precision för att skapa en känsla av trygghet och bli sedd.",
      cases: {
        "case-1": {
          label: "Fall 1 · Lea",
          teaser: "Lärare på väg mot utmattning efter år av omsorgsansvar.",
          history:
            "Lea (38) är gymnasielärare och har i flera år varit huvudansvarig för sin pappas kroniska sjukdom. Hon är stolt över att vara pålitlig men känner sig ständigt tömd.",
          schema:
            "Om jag slutar pressa mig faller allt samman och jag avslöjas som självisk.",
          style:
            "Talar snabbt, ler för att maskera smärta, tonar ned egna behov och ber om ursäkt så fort känslor visar sig."
        },
        "case-2": {
          label: "Fall 2 · Malik",
          teaser: "Entreprenör som hela tiden väntar på avvisande.",
          history:
            "Malik (29) driver ett litet startup och flyttade ofta som barn. Relationer känns riskabla; han förväntar sig att bli besviken när människor kommer för nära.",
          schema:
            "Om folk ser mitt verkliga jag lämnar de mig. Jag måste imponera för att vara värd att stanna hos.",
          style:
            "Stramt leende, intellektualiserar känslor, håller lugn ton tills han plötsligt drar sig undan."
        },
        "case-3": {
          label: "Fall 3 · Carmen",
          teaser: "Läkare som brottas med sorg och vrede.",
          history:
            "Carmen (46) är akutläkare. Hennes yngre bror dog nyligen av en överdos och hon känner ett krav att hålla ihop för familjens skull.",
          schema:
            "Om jag visar sorg eller ilska tappar jag kontrollen och blir en börda för alla.",
          style:
            "Måttligt tonläge, håller samtal ordnade, gör torra skämt, och får snabbt tårar i ögonen när hon överraskas."
        }
      }
    },
    "empathic-conjecture": {
      name: "Empatisk hypotes",
      description:
        "Erbjud varsamma hypoteser som bjuder in till djupare reflektion och gemensamt utforskande.",
      cases: {
        "case-1": {
          label: "Fall 1 · Sahana",
          teaser: "Psykologstudent som fruktar att göra handledarna besvikna.",
          history:
            "Sahana (27) avslutar sin kliniska praktik och är rädd för att göra sina handledare besvikna. Hon pendlar mellan överförberedelse och att låsa sig.",
          schema:
            "Om jag inte är exceptionell ångrar folk att de satsade på mig och jag blir ensam.",
          style:
            "Varm men avvaktande, söker bekräftelse indirekt, uttrycker tacksamhet samtidigt som hon tonar ned det svåra."
        },
        "case-2": {
          label: "Fall 2 · Tomas",
          teaser: "Nybliven förälder som växlar mellan omsorg och irritation.",
          history:
            "Tomas (34) har nyligen blivit pappa och delar omsorgen med sin partner samtidigt som han går skift. Han skäms över stunder av bitterhet.",
          schema:
            "Om jag inte möter allas behov med lätthet betyder det att jag misslyckas som partner och förälder.",
          style:
            "Självironisk humor, rastlösa händer, växlar mellan pigg och utmattad ton."
        },
        "case-3": {
          label: "Fall 3 · Mei",
          teaser: "Chef som pressas mellan kulturella krav och egna mål.",
          history:
            "Mei (41) leder ett produktteam samtidigt som hon tar hand om sin mamma. Hon känner sig dragen mellan kulturella förväntningar och sina egna ambitioner.",
          schema:
            "Om jag prioriterar mina behov sviker jag familjen och tappar min plats i båda världar.",
          style:
            "Direkt i arbetssammanhang, mjukare hemma, pendlar mellan säker och tveksam ton."
        }
      }
    }
  },
  pt: {
    "empathic-validation": {
      name: "Validação empática",
      description:
        "Espelhe com precisão o universo emocional da cliente para cultivar segurança sentida.",
      cases: {
        "case-1": {
          label: "Caso 1 · Lia",
          teaser: "Professora à beira do esgotamento após anos de cuidados.",
          history:
            "Lia (38) é professora do ensino médio e há anos é a principal cuidadora do pai com doença crônica. Ela se orgulha de ser confiável, mas se sente permanentemente exausta.",
          schema:
            "Se eu diminuir o ritmo, tudo desmorona e vão me ver como egoísta.",
          style:
            "Fala rápido, sorri para mascarar a dor, minimiza as próprias necessidades e se desculpa sempre que a emoção aparece."
        },
        "case-2": {
          label: "Caso 2 · Malik",
          teaser: "Empreendedor atormentado pelo medo de rejeição.",
          history:
            "Malik (29) comanda uma startup pequena e se mudou muito durante a infância. Relacionamentos parecem arriscados; ele espera decepção quando alguém chega perto demais.",
          schema:
            "Se as pessoas enxergarem quem eu sou de verdade, vão embora. Preciso impressionar para merecer que fiquem.",
          style:
            "Sorriso contido, intelectualiza as emoções, mantém tom calmo até se desligar de repente."
        },
        "case-3": {
          label: "Caso 3 · Carmen",
          teaser: "Médica tentando conter luto e raiva.",
          history:
            "Carmen (46) é médica de emergência. O irmão mais novo morreu recentemente por overdose e ela sente que precisa permanecer forte pela família.",
          schema:
            "Se eu mostrar tristeza ou raiva, vou perder o controle e virar um peso para todo mundo.",
          style:
            "Voz medida, mantém a conversa organizada, faz comentários irônicos e os olhos marejam quando é pega de surpresa."
        }
      }
    },
    "empathic-conjecture": {
      name: "Hipótese empática",
      description:
        "Ofereça hipóteses delicadas que convidem à reflexão profunda e à construção conjunta de sentido.",
      cases: {
        "case-1": {
          label: "Caso 1 · Sahana",
          teaser: "Estudante de psicologia temendo decepcionar supervisores.",
          history:
            "Sahana (27) está finalizando o estágio clínico e morre de medo de desapontar quem a supervisiona. Oscila entre preparar demais e travar.",
          schema:
            "Se eu não for excepcional, as pessoas vão se arrepender de investir em mim e vou acabar sozinha.",
          style:
            "Acolhedora, mas reservada, pede confirmação de forma indireta, agradece enquanto minimiza as dificuldades."
        },
        "case-2": {
          label: "Caso 2 · Tomás",
          teaser: "Pai recente dividido entre cuidado e ressentimento.",
          history:
            "Tomás (34) acabou de se tornar pai e divide os cuidados com o parceiro enquanto encara turnos alternados. Sente vergonha de momentos de ressentimento.",
          schema:
            "Se eu não atender às necessidades de todos com serenidade, significa que falhei como parceiro e pai.",
          style:
            "Humor autodepreciativo, mãos inquietas, alterna uma fala animada com tom abatido."
        },
        "case-3": {
          label: "Caso 3 · Mei",
          teaser: "Executiva pressionada por expectativas culturais e pessoais.",
          history:
            "Mei (41) lidera uma equipe de produto enquanto cuida da mãe. Sente-se puxada entre expectativas culturais e as próprias aspirações.",
          schema:
            "Se priorizo minhas necessidades, desonro minha família e perco meu lugar nos dois mundos.",
          style:
            "Direta no trabalho, mais suave em casa, alterna entre voz segura e hesitante."
        }
      }
    }
  },
  nl: {
    "empathic-validation": {
      name: "Empathische validatie",
      description:
        "Spiegel het emotionele landschap van de cliënt nauwkeurig om een gevoel van veiligheid te laten groeien.",
      cases: {
        "case-1": {
          label: "Casus 1 · Lea",
          teaser: "Docente die na jaren zorgen tegen een burn-out aanloopt.",
          history:
            "Lea (38) is docent op een middelbare school en zorgt al jaren voor haar chronisch zieke vader. Ze is trots op haar betrouwbaarheid maar voelt zich voortdurend uitgeput.",
          schema:
            "Als ik het gas loslaat, valt alles uit elkaar en zien mensen me als egoïstisch.",
          style:
            "Praat snel, glimlacht om pijn te maskeren, bagatelliseert haar behoeften en verontschuldigt zich zodra emoties opkomen."
        },
        "case-2": {
          label: "Casus 2 · Malik",
          teaser: "Start-up-oprichter met een voortdurende angst voor afwijzing.",
          history:
            "Malik (29) leidt een kleine start-up en verhuisde vaak als kind. Relaties voelen risicovol; hij rekent op teleurstelling zodra mensen dichtbij komen.",
          schema:
            "Als mensen mijn echte ik zien, vertrekken ze. Ik moet indruk maken om het waard te zijn om te blijven.",
          style:
            "Strakke glimlach, rationaliseert gevoelens, blijft rustig tot hij zich plotseling terugtrekt."
        },
        "case-3": {
          label: "Casus 3 · Carmen",
          teaser: "Arts die haar verdriet en woede onder controle probeert te houden.",
          history:
            "Carmen (46) werkt op de spoedeisende hulp. Haar jongere broer is onlangs overleden aan een overdosis en ze voelt zich verplicht sterk te blijven voor de familie.",
          schema:
            "Als ik verdriet of boosheid toon, verlies ik de controle en belast ik iedereen om me heen.",
          style:
            "Afgewogen stem, houdt gesprekken gestructureerd, maakt droge grapjes en krijgt snel tranen in de ogen als ze verrast wordt."
        }
      }
    },
    "empathic-conjecture": {
      name: "Empathische hypothese",
      description:
        "Bied zachte hypothesen aan die uitnodigen tot verdiepte reflectie en gedeelde betekenisgeving.",
      cases: {
        "case-1": {
          label: "Casus 1 · Sahana",
          teaser: "Psychologiestudente die bang is haar supervisors teleur te stellen.",
          history:
            "Sahana (27) rondt haar klinische stage af en is bang om haar supervisors teleur te stellen. Ze wisselt af tussen overvoorbereid zijn en blokkeren.",
          schema:
            "Als ik niet uitzonderlijk ben, zullen mensen spijt krijgen dat ze in mij hebben geïnvesteerd en sta ik alleen.",
          style:
            "Hartelijk maar terughoudend, vraagt indirect om bevestiging, bedankt voortdurend en speelt haar worstelingen naar beneden."
        },
        "case-2": {
          label: "Casus 2 · Tomas",
          teaser: "Kersverse ouder balancerend tussen zorg en wrevel.",
          history:
            "Tomas (34) is recent vader geworden en deelt de zorg met zijn partner terwijl hij ploegendiensten draait. Hij schaamt zich voor zijn momenten van wrevel.",
          schema:
            "Als ik niet met gratie aan ieders behoeften voldoe, faal ik als partner en ouder.",
          style:
            "Zelfspot, friemelt veel, wisselt tussen energieke en vlakke toon wanneer hij moe is."
        },
        "case-3": {
          label: "Casus 3 · Mei",
          teaser: "Executive die klemzit tussen culturele verwachtingen en eigen doelen.",
          history:
            "Mei (41) leidt een productteam en zorgt tegelijk voor haar moeder. Ze voelt zich heen en weer getrokken tussen culturele verwachtingen en haar eigen ambities.",
          schema:
            "Als ik mijn behoeften prioriteer, verlies ik de eer van mijn familie én mijn plek in beide werelden.",
          style:
            "Direct in zakelijke context, zachter thuis, schakelt tussen zelfverzekerde en aarzelende toon."
        }
      }
    }
  },
  el: {
    "empathic-validation": {
      name: "Εμπαθητική επικύρωση",
      description:
        "Καθρέφτισε με ακρίβεια το συναισθηματικό τοπίο του/της πελάτη ώστε να δημιουργηθεί βιωμένη ασφάλεια.",
      cases: {
        "case-1": {
          label: "Περίπτωση 1 · Λία",
          teaser: "Δασκάλα στα πρόθυρα εξάντλησης μετά από χρόνια φροντίδας.",
          history:
            "Η Λία (38) είναι καθηγήτρια λυκείου και εδώ και χρόνια είναι ο κύριος φροντιστής του πατέρα της με χρόνια ασθένεια. Είναι περήφανη που μπορεί να την εμπιστευτούν, αλλά νιώθει διαρκώς εξαντλημένη.",
          schema:
            "Αν χαλαρώσω, όλα θα καταρρεύσουν και θα φανώ εγωίστρια.",
          style:
            "Μιλά γρήγορα, χαμογελά για να κρύψει τον πόνο, υποτιμά τις ανάγκες της και ζητά συγγνώμη μόλις τα συναισθήματα εμφανίζονται."
        },
        "case-2": {
          label: "Περίπτωση 2 · Μαλίκ",
          teaser: "Ιδρυτής start-up που φοβάται την απόρριψη.",
          history:
            "Ο Μαλίκ (29) ηγείται μιας μικρής start-up και μετακόμιζε συχνά ως παιδί. Οι σχέσεις μοιάζουν επικίνδυνες· περιμένει την απογοήτευση όταν οι άνθρωποι πλησιάζουν.",
          schema:
            "Αν δουν τον πραγματικό μου εαυτό, θα με αφήσουν. Πρέπει να εντυπωσιάζω για να αξίζω να μείνουν κοντά μου.",
          style:
            "Σφιγμένο χαμόγελο, πνευματικοποιεί τα συναισθήματα, κρατά ήρεμο τόνο μέχρι που ξαφνικά αποσύρεται."
        },
        "case-3": {
          label: "Περίπτωση 3 · Κάρμεν",
          teaser: "Γιατρός που παλεύει με πένθος και θυμό.",
          history:
            "Η Κάρμεν (46) εργάζεται στα επείγοντα. Ο μικρότερος αδελφός της πέθανε πρόσφατα από υπερβολική δόση και νιώθει ότι πρέπει να παραμείνει ψύχραιμη για την οικογένεια.",
          schema:
            "Αν δείξω θλίψη ή θυμό, θα χάσω τον έλεγχο και θα γίνω βάρος για όλους.",
          style:
            "Σταθερή φωνή, κρατά τη συζήτηση οργανωμένη, κάνει καυστικά σχόλια και τα μάτια της βουρκώνουν όταν αιφνιδιάζεται."
        }
      }
    },
    "empathic-conjecture": {
      name: "Εμπαθητική υπόθεση",
      description:
        "Πρότεινε ήπιες υποθέσεις που καλούν σε βαθύτερη σκέψη και κοινή διερεύνηση.",
      cases: {
        "case-1": {
          label: "Περίπτωση 1 · Σαχάνα",
          teaser: "Φοιτήτρια ψυχολογίας που φοβάται να απογοητεύσει τους επόπτες.",
          history:
            "Η Σαχάνα (27) ολοκληρώνει την κλινική της πρακτική και φοβάται ότι θα απογοητεύσει τους επόπτες της. Ταλαντεύεται ανάμεσα στην υπερ-προετοιμασία και στο πάγωμα.",
          schema:
            "Αν δεν είμαι εξαιρετική, οι άνθρωποι θα μετανιώσουν που επένδυσαν σε μένα και θα μείνω μόνη.",
          style:
            "Ζεστή αλλά επιφυλακτική, ζητά επιβεβαίωση έμμεσα, εκφράζει ευγνωμοσύνη ενώ υποβαθμίζει τις δυσκολίες."
        },
        "case-2": {
          label: "Περίπτωση 2 · Τομάς",
          teaser: "Νέος γονιός που ισορροπεί ανάμεσα στη φροντίδα και την αγανάκτηση.",
          history:
            "Ο Τομάς (34) έγινε πρόσφατα πατέρας και μοιράζεται τη φροντίδα με τον σύντροφό του ενώ δουλεύει σε βάρδιες. Ντρέπεται για τις στιγμές που νιώθει αγανάκτηση.",
          schema:
            "Αν δεν καλύπτω τις ανάγκες όλων με ευγένεια, σημαίνει ότι αποτυγχάνω ως σύντροφος και γονιός.",
          style:
            "Αυτοσαρκαστικό χιούμορ, νευρικές κινήσεις, εναλλάσσει ζωηρό και επίπεδο τόνο όταν κουράζεται."
        },
        "case-3": {
          label: "Περίπτωση 3 · Μέι",
          teaser: "Στέλεχος ανάμεσα σε πολιτισμικές προσδοκίες και προσωπικές φιλοδοξίες.",
          history:
            "Η Μέι (41) διευθύνει ομάδα προϊόντος ενώ φροντίζει τη μητέρα της. Νιώθει να τη τραβούν οι πολιτισμικές προσδοκίες και τα δικά της όνειρα.",
          schema:
            "Αν δώσω προτεραιότητα στις ανάγκες μου, θα ντροπιάσω την οικογένεια και θα χάσω τη θέση μου και στους δύο κόσμους.",
          style:
            "Άμεση σε επαγγελματικό πλαίσιο, πιο τρυφερή στο σπίτι, εναλλάσσει σίγουρο και διστακτικό ύφος."
        }
      }
    }
  },
  zh: {
    "empathic-validation": {
      name: "共情验证",
      description:
        "精准映照来访者的情绪景观，让安全感被真实体验。",
      cases: {
        "case-1": {
          label: "案例 1 · 莉娅",
          teaser: "多年照顾亲人而濒临倦怠的教师。",
          history:
            "莉娅（38 岁）是一名高中老师，多年来一直是患有慢性疾病父亲的主要照护者。她以可靠为傲，却长期感到精疲力竭。",
          schema:
            "如果我放慢脚步，一切都会崩溃，别人会觉得我自私。",
          style:
            "说话很快，用微笑掩饰痛苦，淡化自己的需要，一有情绪流露就连忙道歉。"
        },
        "case-2": {
          label: "案例 2 · 马利克",
          teaser: "被拒绝恐惧长期困扰的创业者。",
          history:
            "马利克（29 岁）经营一家小型初创公司，童年时期经常搬家。亲密关系让他觉得危险；一旦别人靠近，他就预期会被辜负。",
          schema:
            "如果别人看到真实的我，他们就会离开。我必须足够亮眼才值得被留下。",
          style:
            "笑容紧绷，习惯把情感理性化，语气平静，直到突然抽离。"
        },
        "case-3": {
          label: "案例 3 · 卡门",
          teaser: "压抑悲伤与愤怒的急诊医生。",
          history:
            "卡门（46 岁）在急诊室工作。她的弟弟最近因服药过量而去世，她觉得自己必须为家人撑起一切。",
          schema:
            "如果我表现出悲伤或愤怒，就会失控并拖累所有人。",
          style:
            "语调平稳，让谈话很有条理，偶尔说些冷幽默，被触动时眼眶立刻湿润。"
        }
      }
    },
    "empathic-conjecture": {
      name: "共情揣测",
      description:
        "以温和的假设邀请来访者展开更深的自我探索与共同理解。",
      cases: {
        "case-1": {
          label: "案例 1 · 萨哈娜",
          teaser: "害怕让督导失望的实习治疗师。",
          history:
            "萨哈娜（27 岁）即将完成临床实习，担心辜负督导。她在过度准备和僵住之间摇摆。",
          schema:
            "如果我不够出色，别人会后悔投资在我身上，而我会被孤立。",
          style:
            "态度温暖却略显防备，间接寻求肯定，表达感谢的同时淡化自己的困难。"
        },
        "case-2": {
          label: "案例 2 · 托马斯",
          teaser: "在照顾与怨气之间摇摆的新手父亲。",
          history:
            "托马斯（34 岁）刚成为父亲，与伴侣共同照顾孩子，同时轮班工作。他为偶尔冒出的怨气感到羞愧。",
          schema:
            "只要我不能优雅地照顾好每个人，就说明我作为伴侣和父亲都失败了。",
          style:
            "带着自嘲的幽默，手部小动作很多，语调在活泼与疲惫之间来回。"
        },
        "case-3": {
          label: "案例 3 · 梅",
          teaser: "徘徊在文化期待与个人目标之间的管理者。",
          history:
            "梅（41 岁）领导一个产品团队，同时照顾母亲。她觉得自己被文化期待和个人志向拉扯。",
          schema:
            "只要我优先考虑自己的需要，就等于辜负家人，会在两个世界都失去位置。",
          style:
            "在工作场合果断直接，在家时更柔和，语气在笃定与犹豫之间变换。"
        }
      }
    }
  },
  fr: {
    "empathic-validation": {
      name: "Validation empathique",
      description:
        "Reflétez avec précision le paysage émotionnel du client pour nourrir un sentiment de sécurité.",
      cases: {
        "case-1": {
          label: "Cas 1 · Léa",
          teaser: "Enseignante au bord de l'épuisement après des années de soins.",
          history:
            "Léa (38 ans) est professeure au lycée et s'occupe depuis des années de son père atteint d'une maladie chronique. Elle est fière d'être fiable mais se sent continuellement vidée.",
          schema:
            "Si je ralentis, tout s'effondre et on me jugera égoïste.",
          style:
            "Parle vite, masque la douleur avec un sourire, minimise ses besoins et s'excuse dès que l'émotion monte."
        },
        "case-2": {
          label: "Cas 2 · Malik",
          teaser: "Fondateur qui redoute sans cesse le rejet.",
          history:
            "Malik (29 ans) dirige une petite start-up et a beaucoup déménagé enfant. Les relations lui semblent risquées ; il s'attend à être déçu dès que les gens s'approchent trop.",
          schema:
            "Si l'on voit mon vrai visage, on partira. Je dois impressionner pour mériter qu'on reste.",
          style:
            "Sourire tendu, intellectualise ses émotions, garde un ton calme avant de se retirer brusquement."
        },
        "case-3": {
          label: "Cas 3 · Carmen",
          teaser: "Médecin qui tente de contenir son deuil et sa colère.",
          history:
            "Carmen (46 ans) travaille aux urgences. Son frère cadet est décédé récemment d'une overdose et elle se sent obligée de rester solide pour sa famille.",
          schema:
            "Si je laisse paraître ma peine ou ma colère, je perdrai le contrôle et deviendrai un poids.",
          style:
            "Voix mesurée, garde les échanges structurés, humour sec, les yeux s'embuent lorsqu'on la surprend."
        }
      }
    },
    "empathic-conjecture": {
      name: "Hypothèse empathique",
      description:
        "Proposez des hypothèses délicates qui invitent à la réflexion et à la découverte partagée.",
      cases: {
        "case-1": {
          label: "Cas 1 · Sahana",
          teaser: "Stagiaire en psychologie qui craint de décevoir ses superviseurs.",
          history:
            "Sahana (27 ans) termine son stage clinique et a peur de décevoir ses superviseurs. Elle oscille entre sur-préparation et blocage.",
          schema:
            "Si je ne suis pas exceptionnelle, les gens regretteront d'avoir misé sur moi et je me retrouverai seule.",
          style:
            "Chaleureuse mais prudente, cherche la confirmation de façon indirecte, remercie tout en minimisant ses difficultés."
        },
        "case-2": {
          label: "Cas 2 · Tomás",
          teaser: "Nouveau parent partagé entre soin et ressentiment.",
          history:
            "Tomás (34 ans) vient de devenir père et partage la garde avec son partenaire tout en travaillant en horaires décalés. Il a honte des élans de ressentiment qui surgissent.",
          schema:
            "Si je ne réponds pas aux besoins de chacun avec aisance, c'est que j'échoue comme partenaire et parent.",
          style:
            "Humour auto-dérisoire, gestes nerveux, ton oscillant entre enlevé et éteint quand la fatigue arrive."
        },
        "case-3": {
          label: "Cas 3 · Mei",
          teaser: "Cadre tiraillée entre attentes culturelles et ambitions personnelles.",
          history:
            "Mei (41 ans) dirige une équipe produit tout en s'occupant de sa mère. Elle se sent déchirée entre les attentes familiales et ses propres aspirations.",
          schema:
            "Si je privilégie mes besoins, j'aurai l'air de trahir ma famille et je perdrai ma place dans les deux mondes.",
          style:
            "Directe dans le milieu professionnel, plus douce à la maison, passe d'un ton assuré à un ton hésitant."
        }
      }
    }
  },
  da: {
    "empathic-validation": {
      name: "Empatisk validering",
      description:
        "Spejl klientens følelseslandskab præcist for at skabe oplevet tryghed.",
      cases: {
        "case-1": {
          label: "Case 1 · Lea",
          teaser: "Lærer på vej mod udbrændthed efter mange år som omsorgsgiver.",
          history:
            "Lea (38) er gymnasielærer og har i årevis været hovedansvarlig for sin kronisk syge far. Hun er stolt af at være til at stole på, men føler sig konstant tappet for energi.",
          schema:
            "Hvis jeg slipper presset, falder alt fra hinanden, og folk vil se mig som egoistisk.",
          style:
            "Taler hurtigt, smiler for at skjule smerten, nedtoner egne behov og undskylder så snart følelserne viser sig."
        },
        "case-2": {
          label: "Case 2 · Malik",
          teaser: "Iværksætter der hele tiden frygter afvisning.",
          history:
            "Malik (29) driver en lille start-up og flyttede ofte som barn. Relationer føles risikable; han forventer skuffelse, så snart folk kommer tæt på.",
          schema:
            "Hvis folk ser den rigtige mig, går de. Jeg skal imponere for at være værd at blive hos.",
          style:
            "Stramt smil, intellektualiserer følelser, holder en rolig tone indtil han pludselig trækker sig tilbage."
        },
        "case-3": {
          label: "Case 3 · Carmen",
          teaser: "Læge der forsøger at holde sorg og vrede i ave.",
          history:
            "Carmen (46) arbejder på akutmodtagelsen. Hendes lillebror døde for nylig af en overdosis, og hun føler sig forpligtet til at holde sammen på familien.",
          schema:
            "Hvis jeg viser sorg eller vrede, mister jeg kontrollen og bliver en byrde for alle andre.",
          style:
            "Afbalanceret stemme, holder samtalerne strukturerede, kommer med tør humor, og øjnene bliver hurtigt blanke når hun rammes uventet."
        }
      }
    },
    "empathic-conjecture": {
      name: "Empatisk hypotese",
      description:
        "Tilbyd forsigtige hypoteser, der inviterer til dybere refleksion og fælles udforskning.",
      cases: {
        "case-1": {
          label: "Case 1 · Sahana",
          teaser: "Psykologstuderende, bange for at skuffe sine vejledere.",
          history:
            "Sahana (27) er ved at afslutte sin kliniske praktik og er bange for at skuffe sine vejledere. Hun pendler mellem at forberede sig for meget og at fryse fast.",
          schema:
            "Hvis jeg ikke er exceptionel, vil folk fortryde deres investering i mig, og jeg ender alene.",
          style:
            "Varm men afventende, søger bekræftelse indirekte, udtrykker taknemmelighed mens hun nedtoner udfordringerne."
        },
        "case-2": {
          label: "Case 2 · Tomas",
          teaser: "Ny far der balancerer mellem omsorg og frustration.",
          history:
            "Tomas (34) er lige blevet far og deler ansvaret med sin partner, mens han arbejder i skiftehold. Han skammer sig over øjeblikke med irritation.",
          schema:
            "Hvis jeg ikke møder alles behov med ynde, betyder det, at jeg fejler som partner og forælder.",
          style:
            "Selvironisk humor, urolige hænder, skifter mellem energisk og mat tone når træthed melder sig."
        },
        "case-3": {
          label: "Case 3 · Mei",
          teaser: "Leder presset mellem kulturelle forventninger og egne mål.",
          history:
            "Mei (41) leder et produktteam og passer samtidig sin mor. Hun føler sig trukket mellem kulturelle forventninger og sine egne ambitioner.",
          schema:
            "Hvis jeg prioriterer mine egne behov, vanærer jeg familien og mister min plads i begge verdener.",
          style:
            "Direkte og fast i arbejdssammenhæng, blødere derhjemme, skifter mellem selvsikker og tøvende tone."
        }
      }
    }
  },
  es: {
    "empathic-validation": {
      name: "Validación empática",
      description:
        "Refleja con precisión el paisaje emocional del cliente para cultivar una sensación auténtica de seguridad.",
      cases: {
        "case-1": {
          label: "Caso 1 · Lea",
          teaser: "Docente al borde del agotamiento después de años cuidando de otros.",
          history:
            "Lea (38) es profesora de secundaria y desde hace años cuida principalmente de su padre con una enfermedad crónica. Se enorgullece de ser confiable, pero vive permanentemente exhausta.",
          schema:
            "Si bajo el ritmo, todo se desmorona y terminarán pensando que soy egoísta.",
          style:
            "Habla rápido, sonríe para esconder el dolor, minimiza sus propias necesidades y se disculpa en cuanto se asoman las emociones."
        },
        "case-2": {
          label: "Caso 2 · Malik",
          teaser: "Emprendedor perseguido por el miedo al rechazo.",
          history:
            "Malik (29) dirige una start-up pequeña y de niño se mudó constantemente. Las relaciones se sienten riesgosas; espera la decepción cuando la gente se acerca demasiado.",
          schema:
            "Si ven quién soy de verdad, se irán. Tengo que impresionar para merecer que se queden.",
          style:
            "Sonrisa tensa, intelectualiza las emociones, mantiene un tono sereno hasta que se retira de golpe."
        },
        "case-3": {
          label: "Caso 3 · Carmen",
          teaser: "Médica que intenta contener el duelo y la rabia.",
          history:
            "Carmen (46) trabaja en urgencias. Su hermano menor murió recientemente por una sobredosis y siente que debe mantenerse firme por la familia.",
          schema:
            "Si dejo ver tristeza o enfado, perderé el control y seré una carga para todos.",
          style:
            "Voz medida, mantiene las conversaciones ordenadas, lanza comentarios irónicos y se le humedecen los ojos cuando la sorprenden."
        }
      }
    },
    "empathic-conjecture": {
      name: "Hipótesis empática",
      description:
        "Ofrece hipótesis delicadas que invitan a profundizar y a construir significado de manera compartida.",
      cases: {
        "case-1": {
          label: "Caso 1 · Sahana",
          teaser: "Estudiante en práctica que teme decepcionar a sus supervisores.",
          history:
            "Sahana (27) está finalizando su práctica clínica y teme defraudar a sus supervisores. Oscila entre prepararse de más y quedarse paralizada.",
          schema:
            "Si no soy excepcional, la gente se arrepentirá de apostar por mí y me quedaré sola.",
          style:
            "Cálida pero cauta, busca validación de forma indirecta, agradece mientras resta importancia a sus dificultades."
        },
        "case-2": {
          label: "Caso 2 · Tomás",
          teaser: "Padre reciente que balancea cuidado y resentimiento.",
          history:
            "Tomás (34) acaba de convertirse en padre y comparte la crianza con su pareja mientras trabaja a turnos. Siente vergüenza de los momentos de resentimiento que aparecen.",
          schema:
            "Si no cubro las necesidades de todos con calma, significa que fracaso como pareja y como padre.",
          style:
            "Humor autocrítico, manos inquietas, alterna un tono animado con otro apagado cuando el cansancio lo alcanza."
        },
        "case-3": {
          label: "Caso 3 · Mei",
          teaser: "Ejecutiva presionada por las expectativas familiares y sus propias metas.",
          history:
            "Mei (41) lidera un equipo de producto mientras cuida de su madre. Se siente estirada entre las expectativas culturales y sus propios objetivos.",
          schema:
            "Si priorizo mis necesidades, traiciono a mi familia y perderé mi lugar en ambos mundos.",
          style:
            "Directa en el trabajo, más suave en casa, oscila entre una voz segura y una vacilante."
        }
      }
    }
  }
};

export const STATEMENT_TRANSLATIONS = {
  de: mapWithIds({
    ev_leah_found: [
      "Ich weiß, dass ich müde aussehe, aber eigentlich müsste ich noch mehr für meinen Vater tun.",
      "Alle an der Schule verlassen sich auf mich. Wenn ich einen Tag frei mache, denken sie, ich sei faul.",
      "Ich hasse es, dass ich frustriert bin. Mein Vater ist krank, also dürfte ich mich nicht über ihn ärgern.",
      "Wenn ich langsamer mache, fühlt es sich an, als würde ich alle gleichzeitig enttäuschen.",
      "Alle sagen mir, ich soll mich ausruhen, aber das macht mir nur ein schlechtes Gewissen."
    ],
    ev_leah_stretch: [
      "Immer wenn ich an Hilfe denke, höre ich diese Stimme, die sagt, ich sei schwach.",
      "Meine Schwester schreibt unterstützende Nachrichten, und ich denke sofort, dass sie mich heimlich verurteilt.",
      "Sobald ich mich hinlege, rast mein Kopf mit allem, was ich nicht geschafft habe.",
      "Es klingt dramatisch zu sagen, ich gehe unter, aber es ist das einzige Wort, das passt.",
      "Ich wünsche mir, jemand würde mir sagen, dass ich einmal zusammenbrechen darf, ohne Respekt zu verlieren."
    ],
    ev_leah_mastery: [
      "Ich stelle mir den Tag nach der Beerdigung vor und wie leer es sich anfühlt, wenn ich keine Aufgabe mehr habe.",
      "Ein Teil von mir möchte schreien, damit jemand merkt, dass ich zerbreche.",
      "Wenn Kolleginnen meine Belastbarkeit loben, spüre ich Stolz und tiefe Einsamkeit zugleich.",
      "Ich weiß gar nicht mehr, was ich brauche—nur, dass dieses Tempo nicht tragbar ist.",
      "Manchmal fantasiere ich davon, einfach für ein Wochenende zu verschwinden, und bekomme Panik, dass mir niemand verzeihen würde."
    ],
    ev_malik_found: [
      "Wenn Investor*innen abspringen, tue ich so, als wäre alles gut, aber innerlich gerate ich in eine Spirale.",
      "Ich halte Gespräche leicht, weil Tiefgang wie ein Abturner wirkt.",
      "Alle sagen, ich sei gefasst, dabei verstecke ich nur die Panik.",
      "Wenn ich zugebe, dass ich Angst habe, fürchte ich, dass das Team das Vertrauen verliert.",
      "Dating ist anstrengend—ich beende Dinge, bevor sie mich ablehnen können."
    ],
    ev_malik_stretch: [
      "In meinem Kopf läuft ständig ein Scan: Mögen sie mich noch oder bin ich schon am Abrutschen?",
      "Wenn mich jemand lobt, frage ich mich sofort, was er eigentlich will.",
      "Abends spiele ich Meetings durch und frage mich, ob ich unsicher klang.",
      "Jemanden zu enttäuschen ist mein Albtraum, also bitte ich lieber gar nicht.",
      "Wenn ich sage, dass ich einsam bin, denke ich, sie halten mich für bedürftig."
    ],
    ev_malik_mastery: [
      "Sobald jemand beim Antworten zögert, gehe ich davon aus, dass er seinen Ausstieg plant.",
      "Ich fühle mich wie ein Hologramm—sichtbar, aber nicht greifbar—weil mich echte Nähe ängstigt.",
      "Ich sehne mich danach, dass jemand bleibt, und ertrage gleichzeitig nicht, dass er mein Chaos sieht.",
      "Selbst wenn ich gefeiert werde, sehe ich innerlich schon, wie man mich gegen ein besseres Modell austauscht.",
      "Manchmal wünsche ich mir, einfach durchschnittlich zu sein, damit der Einsatz nicht so hoch ist."
    ],
    ev_carmen_found: [
      "Ich weine nicht, weil ich die anderen zusammenhalten muss.",
      "Patient*innen brauchen mich klar; Gefühle bremsen mich nur.",
      "Meine Familie fragt ständig, wie es mir geht, und ich winke es ab.",
      "Es ist leichter, über Logistik zu reden als darüber, wie sehr ich ihn vermisse.",
      "Wenn ich wütend auf ihn werde, fühlt es sich an, als würde ich sein Andenken verraten."
    ],
    ev_carmen_stretch: [
      "Jede Schicht sehe ich jemanden wie meinen Bruder und sperre sofort alles in mir ein.",
      "Wenn Kolleg*innen nach mir sehen, wechsle ich das Thema, um nicht zusammenzubrechen.",
      "Ein Teil von mir ist wütend, dass er mich mit dem Chaos zurückgelassen hat, und dieser Gedanke macht mir Angst.",
      "Ich strukturiere den Tag so, dass ich beschäftigt bleibe, damit mich die Trauer nicht einholt.",
      "Ich beneide Menschen, die öffentlich weinen können; ich fühle mich defekt, weil ich so gefasst bleibe."
    ],
    ev_carmen_mastery: [
      "Ich spiele unser letztes Gespräch durch und suche nach Worten, die ihn hätten retten können.",
      "Manchmal möchte ich im Versorgungsraum schreien, aber ich schlucke es herunter.",
      "Ich fühle mich gespalten zwischen der Ärztin, die alles repariert, und der Schwester, die es nicht konnte.",
      "Wenn ich endlich tief atme, spüre ich eine Flutwelle hinter einer dünnen Wand.",
      "Ich frage mich, ob ich ihn erst loslassen kann, wenn ich mir erlaube, richtig wütend zu werden."
    ],
    ec_sahana_found: [
      "Meine Supervisorin sagte, ich hätte es gut gemacht, aber ich denke ständig, sie war nur höflich.",
      "Ich schreibe meine Notizen dreimal neu, weil Fehler sich katastrophal anfühlen.",
      "Wenn Klient*innen sich bedanken, fürchte ich, sie überschätzen, was ich leisten kann.",
      "Ich habe panische Angst, dass eine schwierige Sitzung mich als inkompetent entlarvt.",
      "Ich spule Sitzungen zurück, um zu finden, was ich verpasst habe, und frage mich dann, ob ich einfach zwanghaft bin."
    ],
    ec_sahana_stretch: [
      "Ein Teil von mir glaubt, ich bin nur nützlich, wenn ich beeindrucke.",
      "Wenn jemand vor Feedback zögert, stelle ich mich auf schlechte Nachrichten ein.",
      "Es ist, als bräuchte ich erst den Beweis, dass ich keine Enttäuschung bin, bevor ich aufatmen kann.",
      "Ich sehne mich nach Anleitung, schäme mich aber dafür, sie zu brauchen.",
      "Ich fürchte, wenn ich meine Stärken anerkenne, werde ich bequem und rutsche ab."
    ],
    ec_sahana_mastery: [
      "Manchmal stelle ich mir vor, dass Leute heimlich zustimmen, dass ich für diese Arbeit nicht gemacht bin.",
      "Wenn ich Lob erahne, betone ich sofort meine Fehler, damit andere es nicht tun müssen.",
      "Unterstützung anzunehmen fühlt sich gefährlich an—als müsste ich danach eine noch bessere Version von mir schulden.",
      "Ich habe Angst, dass ich aus den Köpfen der Menschen verschwinde, wenn ich aufhöre zu ackern.",
      "Ich glaube, in mir gibt es eine leise Wut darüber, ständig Anerkennung hinterherzulaufen."
    ],
    ec_tomas_found: [
      "Ich liebe meinen Sohn, und doch möchte ich manchmal einfach nur Stille, und das zuzugeben ist schwer.",
      "Mein Partner stemmt so viel; ich bekomme Schuldgefühle, wenn ich erschöpft bin.",
      "Wenn ich Nachtschichten habe, verpasse ich Meilensteine und fühle mich austauschbar.",
      "Ich dachte, Elternsein würde sich natürlicher anfühlen als das.",
      "Selbst wenn ich um eine Pause bitte, habe ich das Gefühl, ich lasse sie im Stich."
    ],
    ec_tomas_stretch: [
      "Ein Teil von mir grollt darüber, dass sich das Leben jetzt nur noch um Pläne dreht.",
      "Ich schlucke Frust herunter, weil ich Angst habe, dass er in Wut umschlägt.",
      "Mein Vater ist abgehauen, als es schwierig wurde, und ich habe panische Angst, dass ich ihn wiederhole.",
      "Ich fühle mich unsichtbar, solange ich nichts repariere.",
      "Manchmal möchte ich das Baby abgeben und einfach für eine Stunde verschwinden."
    ],
    ec_tomas_mastery: [
      "Ich fürchte, mein Partner sieht nur noch die müde Version von mir und fragt sich, wo die alte geblieben ist.",
      "Ich fantasiere davon, wieder der unbekümmerte Typ zu sein, und hasse mich dann dafür.",
      "Wenn mein Sohn weint, höre ich eine Stimme: 'Reiß dich zusammen, sonst brauchen sie dich nicht mehr.'",
      "Ich vermute, der Groll verdeckt eine tiefere Trauer darüber, Teile von mir zu verlieren.",
      "Wenn ich zugebe, wie überfordert ich bin, habe ich Angst, dass ich zusammenfalle und nicht wieder aufstehe."
    ],
    ec_mei_found: [
      "Meine Mutter sagt, es ginge ihr gut, aber ich sehe die Enttäuschung, wenn ich für die Arbeit reise.",
      "Ich habe meinem Team einen Launch-Termin versprochen und habe panische Angst, ihn zu verpassen.",
      "Manchmal behaupte ich, länger zu arbeiten, nur um zehn Minuten allein im Auto zu sitzen.",
      "Ich fühle mich zerrissen zwischen guter Tochter und starker Führungskraft.",
      "Ich denke ständig, wäre ich stärker, würde ich mich nicht so gespalten fühlen."
    ],
    ec_mei_stretch: [
      "Ich wünschte, ich könnte meiner Mutter sagen, dass ich Angst habe, sie zu enttäuschen.",
      "Im Job klinge ich entschlossen, aber in letzter Zeit hinterfrage ich jede Entscheidung.",
      "Es gibt keinen Raum, über meine Bedürfnisse zu sprechen, ohne mich egoistisch zu fühlen.",
      "Wenn mein Bruder sagt, ich solle entspannen, höre ich darin Kritik, nicht genug zu tun.",
      "Familienessen fürchte ich, weil ich mich auf unausgesprochene Vergleiche vorbereite."
    ],
    ec_mei_mastery: [
      "Wenn ich mir vorstelle, meine Karriereziele voll auszuleben, habe ich Angst, dass meine Familie es als Aufgabe empfindet.",
      "Ein Teil von mir sehnt sich danach, dass jemand mir erlaubt, zu wollen, was ich will.",
      "Ich trage eine leise Wut darüber in mir, mich für alle übersetzen zu müssen.",
      "Ich vermute, das ständige Überfunktionieren versteckt eine tiefe Angst, Zugehörigkeit zu verlieren.",
      "Ich frage mich, wer ich wäre, wenn ich aufhörte, für beide Welten zu performen."
    ]
  }),
  no: mapWithIds({
    ev_leah_found: [
      "Jeg vet at jeg ser sliten ut, men egentlig burde jeg gjøre mer for pappa.",
      "Alle på skolen er avhengige av meg. Hvis jeg tar en fridag, tror de jeg er lat.",
      "Jeg misliker at jeg er frustrert. Pappa er syk, så jeg burde ikke bli irritert på ham.",
      "Hvis jeg roer ned tempoet, føles det som om jeg svikter alle samtidig.",
      "Folk sier jeg må hvile, men det fyller meg bare med dårlig samvittighet."
    ],
    ev_leah_stretch: [
      "Hver gang jeg vurderer å be om hjelp, hører jeg en stemme som sier at jeg er svak.",
      "Søsteren min sender støttende meldinger, og jeg tenker med én gang at hun egentlig dømmer meg.",
      "Med en gang jeg legger meg for å slappe av, kverner hodet over alt jeg ikke fikk gjort.",
      "Det høres dramatisk ut å si at jeg drukner, men det er det eneste ordet som treffer.",
      "Jeg skulle ønske noen sa at det er greit å kollapse et øyeblikk uten å miste respekten."
    ],
    ev_leah_mastery: [
      "Jeg ser for meg dagen etter begravelsen og hvor tomt det blir når jeg ikke har en rolle å fylle.",
      "En del av meg vil skrike for at noen skal merke at jeg går i oppløsning.",
      "Når kollegaer roser robustheten min, kjenner jeg både stolthet og dyp ensomhet.",
      "Jeg vet knapt hva jeg trenger lenger—bare at dette tempoet ikke er bærekraftig.",
      "Noen ganger fantaserer jeg om å forsvinne en helg, og får panikk for at ingen vil tilgi meg."
    ],
    ev_malik_found: [
      "Når investorer trekker seg, sier jeg at det går bra, men inni spinner jeg.",
      "Jeg holder samtaler lette fordi det dypere virker som et turn-off.",
      "Folk sier jeg er samlet, men det betyr bare at jeg skjuler panikken.",
      "Hvis jeg innrømmer at jeg er redd, frykter jeg at teamet mister troen.",
      "Dating er slitsomt—jeg avslutter ting før de kan avvise meg."
    ],
    ev_malik_stretch: [
      "Det er som en konstant skanning i hodet: liker de meg fortsatt, eller glipper jeg?",
      "Når noen gir meg ros, lurer jeg med en gang på hva de egentlig vil ha.",
      "Jeg spiller møter om igjen om kvelden og grubler på om jeg hørtes usikker ut.",
      "Å skuffe noen er marerittet mitt, så jeg lar være å be om noe som helst.",
      "Hvis jeg sier at jeg er ensom, er jeg sikker på at de synes jeg er klamrete."
    ],
    ev_malik_mastery: [
      "I det øyeblikket noen nøler med å svare, antar jeg at de planlegger å forsvinne.",
      "Jeg føler meg som et hologram—synlig, men uten substans—fordi jeg er redd for å være ekte.",
      "Jeg lengter etter at noen insisterer på å bli, men tåler ikke at de ser kaoset mitt.",
      "Selv når jeg blir feiret, ser jeg for meg at de bytter meg ut med en bedre versjon.",
      "Jeg skulle noen ganger ønske jeg bare var gjennomsnittlig, så innsatsen ikke var så høy."
    ],
    ev_carmen_found: [
      "Jeg gråter ikke fordi jeg må holde alle andre oppe.",
      "Pasientene trenger meg skjerpet; følelser bare sinker meg.",
      "Familien spør stadig hvordan jeg har det, og jeg feier det unna.",
      "Det er enklere å snakke om logistikk enn om hvor mye jeg savner ham.",
      "Hvis jeg blir sint på ham, føles det som et svik mot minnet hans."
    ],
    ev_carmen_stretch: [
      "På hver vakt ser jeg noen som minner om broren min, og jeg låser alt inni meg.",
      "Når kolleger sjekker inn med meg, skifter jeg tema for ikke å bryte sammen.",
      "En del av meg er rasende fordi han etterlot alt rotet, og den tanken skremmer meg.",
      "Jeg planlegger dagene rundt å være opptatt, så sorgen ikke tar meg igjen.",
      "Jeg misunner folk som kan hulke offentlig; jeg føler meg defekt som holder meg så samlet."
    ],
    ev_carmen_mastery: [
      "Jeg spiller gjennom den siste samtalen og leter etter ordene som kunne reddet ham.",
      "Noen ganger vil jeg hyle i skyllerommet, men jeg svelger det.",
      "Jeg kjenner meg delt mellom legen som fikser og søsteren som ikke klarte det.",
      "Når jeg endelig puster ordentlig, kjenner jeg en bølge bak en tynn vegg.",
      "Jeg lurer på om jeg kunne ta farvel hvis jeg lot sinnet få slippe til."
    ],
    ec_sahana_found: [
      "Veilederen min sa jeg gjorde det bra, men jeg tenker hele tiden at hun bare var snill.",
      "Jeg skriver om notatene tre ganger fordi feil føles katastrofale.",
      "Når klienter takker, frykter jeg at de overvurderer hva jeg kan.",
      "Jeg er redd for at én vanskelig time avslører meg som inkompetent.",
      "Jeg spiller gjennom timene for å finne det jeg overså, og lurer på om jeg bare er tvangspreget."
    ],
    ec_sahana_stretch: [
      "En del av meg tror jeg bare er nyttig når jeg imponerer.",
      "Hvis noen nøler før de gir tilbakemelding, forbereder jeg meg på dårlige nyheter.",
      "Det er som om jeg trenger bevis på at jeg ikke er en skuffelse før jeg kan puste.",
      "Jeg lengter etter veiledning, men skammer meg over å trenge den.",
      "Jeg er redd for at hvis jeg eier styrkene mine, blir jeg selvtilfreds og sklir ut."
    ],
    ec_sahana_mastery: [
      "Noen ganger forestiller jeg meg at folk i hemmelighet er enige om at jeg ikke passer til dette.",
      "Når jeg merker ros, peker jeg på feilene mine så andre slipper.",
      "Å ta imot støtte føles farlig—som om jeg skylder dem en enda bedre versjon av meg selv.",
      "Jeg er redd for at hvis jeg slutter å jobbe knallhardt, forsvinner jeg fra folks bevissthet.",
      "Jeg tror det finnes et stille raseri i meg over alltid å jage etter godkjenning."
    ],
    ec_tomas_found: [
      "Jeg elsker sønnen min, men noen ganger vil jeg bare ha stillhet, og det er vanskelig å si høyt.",
      "Partneren min gjør så mye; jeg får dårlig samvittighet når jeg er utslitt.",
      "Når jeg går nattevakter, går jeg glipp av milepæler og føler meg erstattelig.",
      "Jeg trodde foreldrerollen skulle føles mer naturlig enn dette.",
      "Selv når jeg ber om en pause, føles det som jeg svikter dem."
    ],
    ec_tomas_stretch: [
      "En del av meg er bitter for at livet nå går rundt timeplaner.",
      "Jeg skyver frustrasjon ned fordi jeg er redd det blir til sinne.",
      "Pappa stakk da det ble tøft, og jeg er paranoid for å gjenta ham.",
      "Jeg føler meg usynlig med mindre jeg fikser noe.",
      "Av og til vil jeg bare gi fra meg babyen og forsvinne en time."
    ],
    ec_tomas_mastery: [
      "Jeg er redd partneren min ser den slitne versjonen av meg og lurer på hvor den gamle ble av.",
      "Jeg drømmer om å være den bekymringsløse fyren igjen og hater meg selv for det.",
      "Når sønnen min gråter, hører jeg en stemme: 'Ta deg sammen, ellers trenger de deg ikke.'",
      "Jeg mistenker at bitterheten skjuler en dypere sorg over å miste deler av meg selv.",
      "Hvis jeg innrømmer hvor overveldet jeg er, er jeg redd jeg bryter sammen og ikke klarer å reise meg."
    ],
    ec_mei_found: [
      "Mamma sier hun har det bra, men jeg ser skuffelsen når jeg reiser for jobb.",
      "Jeg lovet teamet en lanseringsdato og er livredd for å misse den.",
      "Noen ganger sier jeg at jeg jobber sent bare for å sitte ti minutter alene i bilen.",
      "Jeg føler meg dratt mellom å være en god datter og en sterk leder.",
      "Jeg tenker stadig at hvis jeg var sterkere, ville jeg ikke føle meg så splittet."
    ],
    ec_mei_stretch: [
      "Jeg skulle ønske jeg kunne si til mamma at jeg er redd for å svikte henne.",
      "På jobb høres jeg bestemt ut, men i det siste tviler jeg på hver beslutning.",
      "Det finnes ingen plass for å snakke om mine behov uten å føle meg egoistisk.",
      "Når broren min sier jeg burde hvile, hører jeg kritikk om at jeg ikke gjør nok.",
      "Jeg gruer meg til familiemiddager fordi jeg forbereder meg på uskrevne sammenligninger."
    ],
    ec_mei_mastery: [
      "Jeg forestiller meg å velge karrieremål fullt ut og frykter at familien ser det som at jeg forlater dem.",
      "En del av meg lengter etter at noen gir meg lov til å ville det jeg vil.",
      "Jeg bærer på en stille irritasjon over å måtte oversette meg selv for alle.",
      "Jeg mistenker at det konstante overfunksjonerte dekker over en dyp frykt for å miste tilhørighet.",
      "Jeg lurer på hvem jeg ville vært hvis jeg sluttet å prestere for begge verdener."
    ]
  }),
  sv: mapWithIds({
    ev_leah_found: [
      "Jag vet att jag ser trött ut, men egentligen borde jag göra mer för pappa.",
      "Alla på skolan är beroende av mig. Om jag tar ledigt en dag tror de att jag är lat.",
      "Jag ogillar att jag är frustrerad. Pappa är sjuk, så jag borde inte irritera mig på honom.",
      "Om jag sänker tempot känns det som att jag sviker alla på en gång.",
      "Folk säger åt mig att vila, men det fyller mig bara med dåligt samvete."
    ],
    ev_leah_stretch: [
      "Varje gång jag överväger att be om hjälp hör jag en röst som säger att jag är svag.",
      "Min syster skickar stöttande sms och jag tänker direkt att hon egentligen dömer mig.",
      "Så fort jag lägger mig för att koppla av snurrar huvudet över allt jag inte hann med.",
      "Det låter dramatiskt att säga att jag drunknar, men det är enda ordet som passar.",
      "Jag önskar att någon sa att det är okej att falla ihop en stund utan att förlora respekten."
    ],
    ev_leah_mastery: [
      "Jag föreställer mig dagen efter begravningen och hur tomt det blir när jag inte har en roll att fylla.",
      "En del av mig vill skrika så att någon märker att jag håller på att gå sönder.",
      "När kollegor berömmer min uthållighet känner jag både stolthet och djup ensamhet.",
      "Jag vet knappt vad jag behöver längre—bara att det här tempot inte håller.",
      "Ibland fantiserar jag om att försvinna en helg och får panik över att ingen skulle förlåta mig."
    ],
    ev_malik_found: [
      "När investerare drar sig ur säger jag att det är lugnt, men inuti snurrar det.",
      "Jag håller samtal lätta för att det djupare känns som ett avskräckande moment.",
      "Folk säger att jag är samlad, men det betyder bara att jag gömmer paniken.",
      "Om jag erkänner att jag är rädd oroar jag mig för att teamet tappar förtroendet.",
      "Dejting är utmattande—jag avslutar innan de hinner avvisa mig."
    ],
    ev_malik_stretch: [
      "Det är som en ständig scanning i huvudet: gillar de mig fortfarande eller tappar jag greppet?",
      "När någon ger mig beröm undrar jag direkt vad de egentligen vill.",
      "Jag spelar upp möten på kvällarna och grubblar över om jag lät osäker.",
      "Att göra någon besviken är min mardröm, så jag låter bli att be om något alls.",
      "Om jag säger att jag är ensam är jag övertygad om att de tycker jag är klängig."
    ],
    ev_malik_mastery: [
      "Så fort någon dröjer med svaret antar jag att de planerar sin exit.",
      "Jag känner mig som ett hologram—synlig men utan tyngd—för att riktig närhet skrämmer mig.",
      "Jag längtar efter att någon insisterar på att stanna men klarar inte att de ser mitt kaos.",
      "Även när jag firas ser jag framför mig att de byter ut mig mot en bättre modell.",
      "Ibland önskar jag att jag bara var genomsnittlig så att insatsen inte var så hög."
    ],
    ev_carmen_found: [
      "Jag gråter inte för att jag måste hålla ihop de andra.",
      "Patienterna behöver mig skärpt; känslor saktar bara ned mig.",
      "Familjen frågar ständigt hur jag mår och jag viftar bort det.",
      "Det är lättare att prata om logistik än om hur mycket jag saknar honom.",
      "Om jag blir arg på honom känns det som att jag förråder hans minne."
    ],
    ev_carmen_stretch: [
      "Varje pass ser jag någon som påminner om min bror och jag låser allt inom mig.",
      "När kollegor kollar hur jag har det byter jag ämne så jag inte bryter ihop.",
      "En del av mig är rasande över att han lämnade mig med röran, och den tanken skrämmer mig.",
      "Jag planerar dagarna kring att hålla mig upptagen så att sorgen inte hinner ifatt.",
      "Jag avundas människor som kan gråta öppet; jag känner mig fel för att jag håller mig så samlad."
    ],
    ev_carmen_mastery: [
      "Jag spelar upp vårt sista samtal och letar efter orden som kunde räddat honom.",
      "Ibland vill jag skrika i förrådet men jag sväljer det.",
      "Jag känner mig kluven mellan läkaren som fixar och systern som inte kunde.",
      "När jag äntligen tar ett djupt andetag känns en våg bakom en tunn vägg.",
      "Jag undrar om jag först kan släppa taget när jag låter ilskan få komma fram."
    ],
    ec_sahana_found: [
      "Min handledare sa att jag gjorde det bra, men jag tänker hela tiden att hon bara var snäll.",
      "Jag skriver om mina anteckningar tre gånger eftersom misstag känns katastrofala.",
      "När klienter tackar oroar jag mig för att de överskattar vad jag kan.",
      "Jag är livrädd att en tuff session avslöjar mig som inkompetent.",
      "Jag spelar upp sessionerna för att hitta det jag missade och undrar om jag bara är tvångsmässig."
    ],
    ec_sahana_stretch: [
      "En del av mig tror att jag bara är till nytta när jag imponerar.",
      "Om någon tvekar innan feedback förbereder jag mig på dåliga nyheter.",
      "Det är som att jag behöver bevis på att jag inte är en besvikelse innan jag kan andas ut.",
      "Jag längtar efter vägledning men skäms över att behöva den.",
      "Jag är rädd att om jag äger mina styrkor blir jag bekväm och tappar greppet."
    ],
    ec_sahana_mastery: [
      "Ibland föreställer jag mig att folk i hemlighet tycker att jag inte passar för det här jobbet.",
      "När jag anar beröm pekar jag direkt ut mina brister så att andra slipper.",
      "Att ta emot stöd känns farligt—som att jag blir skyldig dem en ännu bättre version av mig själv.",
      "Jag är rädd att jag försvinner ur folks medvetande om jag slutar kämpa så hårt.",
      "Jag tror det finns ett stilla raseri i mig över att alltid jaga erkännande."
    ],
    ec_tomas_found: [
      "Jag älskar min son men ibland vill jag bara ha tystnad och det är svårt att säga högt.",
      "Min partner tar hand om så mycket; jag får dåligt samvete när jag är helt slut.",
      "När jag går nattpass missar jag milstolpar och känner mig utbytbar.",
      "Jag trodde föräldraskapet skulle kännas naturligare än så här.",
      "Även när jag ber om en paus känns det som att jag sviker dem."
    ],
    ec_tomas_stretch: [
      "En del av mig är bitter över att livet numera kretsar kring scheman.",
      "Jag trycker ned frustrationen för att jag är rädd att den ska bli till ilska.",
      "Min pappa stack när det blev tufft och jag är paranoid att jag gör samma sak.",
      "Jag känner mig osynlig om jag inte lagar något.",
      "Ibland vill jag bara lämna över bebisen och försvinna en timme."
    ],
    ec_tomas_mastery: [
      "Jag oroar mig för att min partner ser den trötta versionen av mig och undrar var den gamla tog vägen.",
      "Jag fantiserar om att vara den bekymmersfria killen igen och hatar mig själv för det.",
      "När min son gråter hör jag en röst: 'Skärp dig, annars behöver de dig inte längre.'",
      "Jag misstänker att bitterheten döljer en djupare sorg över att förlora delar av mig själv.",
      "Om jag erkänner hur överväldigad jag är är jag rädd att jag faller samman och inte tar mig upp."
    ],
    ec_mei_found: [
      "Mamma säger att hon mår bra men jag ser besvikelsen när jag reser för jobbet.",
      "Jag lovade teamet ett lanseringsdatum och är livrädd att missa det.",
      "Ibland säger jag att jag jobbar sent bara för att sitta tio minuter ensam i bilen.",
      "Jag känner mig sliten mellan att vara en bra dotter och en stark ledare.",
      "Jag tänker ständigt att om jag vore starkare skulle jag inte känna mig så splittrad."
    ],
    ec_mei_stretch: [
      "Jag önskar att jag kunde säga till mamma att jag är rädd för att svika henne.",
      "På jobbet låter jag beslutsam men på sistone tvivlar jag på varje beslut.",
      "Det finns inget utrymme att prata om mina behov utan att känna mig självisk.",
      "När min bror säger att jag borde vila hör jag kritik om att jag inte gör tillräckligt.",
      "Jag bävar för familjemiddagar eftersom jag förbereder mig på outtalade jämförelser."
    ],
    ec_mei_mastery: [
      "Jag föreställer mig att helt följa mina karriärmål och fruktar att familjen ser det som att jag överger dem.",
      "En del av mig längtar efter att någon ger mig tillåtelse att vilja det jag vill.",
      "Jag bär på en tyst ilska över att behöva översätta mig själv för alla.",
      "Jag misstänker att överprestationen döljer en djup rädsla för att förlora tillhörighet.",
      "Jag undrar vem jag skulle vara om jag slutade prestera för båda världarna."
    ]
  }),
  pt: mapWithIds({
    ev_leah_found: [
      "Eu sei que pareço cansada, mas sinceramente deveria fazer mais pelo meu pai.",
      "Todo mundo na escola depende de mim. Se eu tirar um dia de folga, vão achar que sou preguiçosa.",
      "Detesto estar frustrada. Meu pai está doente, então eu não deveria me irritar com ele.",
      "Quando desacelero, parece que decepciono todo mundo de uma vez.",
      "As pessoas dizem para eu descansar, mas isso só me deixa culpada."
    ],
    ev_leah_stretch: [
      "Sempre que penso em pedir ajuda, ouço uma voz dizendo que sou fraca.",
      "Minha irmã manda mensagens de apoio e eu imediatamente penso que ela está me julgando em segredo.",
      "Assim que deito para relaxar, minha mente dispara com tudo o que não fiz.",
      "Parece dramático dizer que estou me afogando, mas é a única palavra que cabe.",
      "Queria que alguém dissesse que tudo bem desabar um minuto sem perder o respeito."
    ],
    ev_leah_mastery: [
      "Fico imaginando o dia depois do funeral e o vazio de não ter mais uma função.",
      "Há uma parte de mim que quer gritar para alguém notar que estou desmoronando.",
      "Quando colegas elogiam minha resiliência, sinto orgulho e uma solidão profunda ao mesmo tempo.",
      "Já nem sei do que preciso—só que esse ritmo é insustentável.",
      "Às vezes fantasio em desaparecer um fim de semana e entro em pânico achando que ninguém vai me perdoar."
    ],
    ev_malik_found: [
      "Quando investidores recuam, digo que está tudo bem, mas por dentro entro em espiral.",
      "Mantenho as conversas leves porque assuntos profundos parecem afastar as pessoas.",
      "Dizem que sou composto, mas isso só significa que escondo o pânico.",
      "Se admito que estou com medo, temo que o time perca a confiança em mim.",
      "Namorar é exaustivo—eu termino as coisas antes que possam me rejeitar."
    ],
    ev_malik_stretch: [
      "Existe um scanner constante na minha cabeça: ainda gostam de mim ou estou escorregando?",
      "Quando alguém me elogia, imediatamente penso no que essa pessoa realmente quer.",
      "Repasso as reuniões à noite, obcecado se soei inseguro.",
      "Decepcionar alguém é meu pior pesadelo, então evito pedir qualquer coisa.",
      "Se digo que estou sozinho, tenho certeza de que vão achar que sou carente."
    ],
    ev_malik_mastery: [
      "Assim que alguém demora para responder, assumo que está planejando ir embora.",
      "Sinto-me como um holograma—visível, mas intangível—porque tenho medo de ser real.",
      "Desejo que alguém insista em ficar, mas não suporto a ideia de verem meu caos.",
      "Mesmo quando sou celebrado, imagino que vão me trocar por um modelo melhor.",
      "Às vezes queria ser só mediano, para que as apostas não fossem tão altas."
    ],
    ev_carmen_found: [
      "Eu não choro porque preciso manter todo mundo firme.",
      "Os pacientes precisam de mim alerta; emoção só me atrasa.",
      "Minha família pergunta o tempo todo como estou e eu desconverso.",
      "É mais fácil falar de logística do que do quanto sinto falta dele.",
      "Se eu fico com raiva dele, parece que estou traindo a memória dele."
    ],
    ev_carmen_stretch: [
      "Em todo plantão vejo alguém como meu irmão e tranco tudo dentro de mim.",
      "Quando colegas perguntam de mim, mudo de assunto para não desabar.",
      "Parte de mim está furiosa por ele ter me deixado com a bagunça, e esse pensamento me assusta.",
      "Organizo meu dia para me manter ocupada e a dor não me alcançar.",
      "Tenho inveja de quem consegue chorar em público; sinto que há algo errado comigo por ficar tão contida."
    ],
    ev_carmen_mastery: [
      "Repasso nossa última conversa procurando as palavras que poderiam tê-lo salvado.",
      "Às vezes quero gritar na sala de suprimentos, mas engulo.",
      "Sinto-me dividida entre a médica que resolve tudo e a irmã que não conseguiu.",
      "Quando finalmente respiro fundo, percebo uma onda gigante atrás de uma parede fina.",
      "Pergunto-me se só vou conseguir deixá-lo ir quando permitir que a raiva apareça."
    ],
    ec_sahana_found: [
      "Minha supervisora disse que fui bem, mas fico pensando que ela só estava sendo gentil.",
      "Reescrevo minhas notas três vezes porque erros parecem catastróficos.",
      "Quando clientes me agradecem, temo que estejam superestimando o que posso fazer.",
      "Tenho pavor de que uma sessão difícil me exponha como incompetente.",
      "Repasso as sessões para encontrar o que perdi e me pergunto se só estou sendo obsessiva."
    ],
    ec_sahana_stretch: [
      "Parte de mim acha que só sirvo para alguma coisa quando impressiono.",
      "Se alguém pausa antes de dar feedback, já me preparo para notícias ruins.",
      "É como se eu precisasse de prova de que não sou uma decepção antes de respirar.",
      "Ansiando por orientação, sinto vergonha de precisar dela.",
      "Temo que, se assumir minhas forças, eu acomode e deslize."
    ],
    ec_sahana_mastery: [
      "Às vezes imagino as pessoas concordando em segredo que não sirvo para este trabalho.",
      "Quando percebo elogios, aponto meus defeitos para que outros não precisem fazer isso.",
      "Receber apoio parece perigoso—como se eu passasse a dever uma versão melhor de mim.",
      "Tenho medo de desaparecer da memória das pessoas se parar de me esforçar ao máximo.",
      "Acho que existe uma raiva silenciosa em mim por sempre correr atrás de aprovação."
    ],
    ec_tomas_found: [
      "Eu amo meu filho, mas às vezes só quero silêncio, e admitir isso é difícil.",
      "Meu parceiro dá conta de tanta coisa; fico culpado quando estou esgotado.",
      "Quando estou de plantão noturno, perco momentos importantes e me sinto substituível.",
      "Achei que ser pai fosse se sentir mais natural do que isso.",
      "Mesmo quando peço uma pausa, sinto que estou decepcionando os dois."
    ],
    ec_tomas_stretch: [
      "Há uma parte de mim que se ressente por a vida girar em torno de horários agora.",
      "Engulo a frustração porque tenho medo de que vire raiva.",
      "Meu pai sumiu quando as coisas ficaram difíceis e tenho pavor de repetir isso.",
      "Sinto que fico invisível a menos que esteja consertando algo.",
      "Às vezes só quero entregar o bebê e desaparecer por uma hora."
    ],
    ec_tomas_mastery: [
      "Temo que meu parceiro veja apenas a versão cansada de mim e se pergunte onde fui parar.",
      "Fantasia voltar a ser o cara despreocupado e depois se odeia por isso.",
      "Quando meu filho chora, ouço uma voz dizendo: 'Se controla ou eles não vão mais precisar de você.'",
      "Suspeito que o ressentimento encobre um luto mais profundo por perder partes de mim.",
      "Se eu admitir o quanto estou sobrecarregado, tenho medo de desmoronar e não me recompor."
    ],
    ec_mei_found: [
      "Minha mãe diz que está bem, mas vejo a decepção quando viajo a trabalho.",
      "Prometi ao time uma data de lançamento e morro de medo de não cumprir.",
      "Às vezes minto que vou trabalhar até tarde só para ficar dez minutos sozinha no carro.",
      "Sinto-me dividida entre ser uma boa filha e uma líder forte.",
      "Fico pensando que, se fosse mais forte, não me sentiria tão partida."
    ],
    ec_mei_stretch: [
      "Queria poder dizer para minha mãe que tenho medo de decepcioná-la.",
      "No trabalho pareço decidida, mas ultimamente questiono cada decisão.",
      "Não há espaço para falar das minhas necessidades sem me sentir egoísta.",
      "Quando meu irmão sugere que eu descanse, ouço uma crítica de que não faço o bastante.",
      "Temo os jantares de família porque me preparo para comparações não ditas."
    ],
    ec_mei_mastery: [
      "Imagino seguir plenamente meus objetivos de carreira e temo que a família veja como abandono.",
      "Uma parte de mim anseia que alguém me dê permissão para querer o que eu quero.",
      "Carrego uma ira silenciosa por precisar me traduzir para todo mundo.",
      "Suspeito que a hiperfuncionalidade esconda um medo profundo de perder pertencimento.",
      "Pergunto quem eu seria se parasse de performar para os dois mundos."
    ]
  }),
  nl: mapWithIds({
    ev_leah_found: [
      "Ik weet dat ik er moe uitzie, maar eerlijk gezegd zou ik meer voor mijn vader moeten doen.",
      "Iedereen op school rekent op me. Als ik een dag vrij neem, denken ze dat ik lui ben.",
      "Ik haat het dat ik gefrustreerd ben. Mijn vader is ziek, dus ik zou me niet aan hem moeten ergeren.",
      "Als ik vertraag, voelt het alsof ik iedereen tegelijk teleurstel.",
      "Mensen zeggen dat ik moet uitrusten, maar dat geeft me alleen schuldgevoel."
    ],
    ev_leah_stretch: [
      "Telkens wanneer ik overweeg om om hulp te vragen, hoor ik een stem die zegt dat ik zwak ben.",
      "Mijn zus stuurt steunende berichten en ik denk meteen dat ze me stiekem veroordeelt.",
      "Zodra ik ga liggen om te ontspannen, raast mijn hoofd langs alles wat ik niet heb gedaan.",
      "Het klinkt dramatisch om te zeggen dat ik verdrink, maar dat is het enige woord dat past.",
      "Ik wou dat iemand zei dat het oké is om even in te storten zonder respect te verliezen."
    ],
    ev_leah_mastery: [
      "Ik stel me de dag na de begrafenis voor en hoe leeg het voelt zonder rol om te vervullen.",
      "Er is een deel van me dat wil schreeuwen zodat iemand merkt dat ik breek.",
      "Wanneer collega's mijn veerkracht prijzen, voel ik zowel trots als diepe eenzaamheid.",
      "Ik weet niet eens meer wat ik nodig heb—alleen dat dit tempo onhoudbaar is.",
      "Soms fantaseer ik erover een weekend te verdwijnen en raak in paniek dat niemand me zou vergeven."
    ],
    ev_malik_found: [
      "Als investeerders afhaken, zeg ik dat het goed gaat, maar van binnen raak ik in een spiraal.",
      "Ik houd gesprekken luchtig omdat diepgang mensen lijkt af te schrikken.",
      "Mensen zeggen dat ik kalm ben, maar het betekent alleen dat ik de paniek verberg.",
      "Als ik toegeef dat ik bang ben, ben ik bang dat het team het vertrouwen verliest.",
      "Dating is vermoeiend—ik beëindig dingen voordat ze mij kunnen afwijzen."
    ],
    ev_malik_stretch: [
      "Er loopt constant een scan in mijn hoofd: vinden ze me nog leuk of glijd ik weg?",
      "Als iemand me complimenteert, vraag ik me meteen af wat hij eigenlijk wil.",
      "Ik speel vergaderingen 's avonds af en pieker of ik onzeker klonk.",
      "Iemand teleurstellen is mijn nachtmerrie, dus ik vraag niemand iets.",
      "Als ik zeg dat ik me eenzaam voel, ben ik ervan overtuigd dat ze me needy vinden."
    ],
    ev_malik_mastery: [
      "Zodra iemand aarzelt met antwoorden, ga ik ervan uit dat hij zijn vertrek plant.",
      "Ik voel me als een hologram—zichtbaar maar ongrijpbaar—omdat ik bang ben om echt te zijn.",
      "Ik verlang ernaar dat iemand blijft, maar ik kan niet verdragen dat hij mijn chaos ziet.",
      "Zelfs wanneer ik gevierd word, zie ik voor me hoe ze me vervangen door een beter model.",
      "Soms zou ik willen dat ik gewoon gemiddeld was, zodat de inzet lager was."
    ],
    ev_carmen_found: [
      "Ik huil niet omdat ik de anderen bij elkaar moet houden.",
      "Patiënten hebben me scherp nodig; emoties vertragen me alleen maar.",
      "Mijn familie vraagt voortdurend hoe het met me gaat en ik wuif het weg.",
      "Het is makkelijker om over logistiek te praten dan over hoeveel ik hem mis.",
      "Als ik boos op hem word, voelt het alsof ik zijn nagedachtenis verraad."
    ],
    ev_carmen_stretch: [
      "Elke dienst zie ik iemand zoals mijn broer en sluit ik alles in mezelf op.",
      "Wanneer collega's naar me informeren, verander ik van onderwerp om niet te breken.",
      "Een deel van me is woedend dat hij me met de troep liet zitten, en die gedachte jaagt me angst aan.",
      "Ik plan mijn dag zodat ik bezig blijf en het verdriet me niet inhaalt.",
      "Ik ben jaloers op mensen die in het openbaar kunnen huilen; ik voel me defect omdat ik zo beheerst blijf."
    ],
    ev_carmen_mastery: [
      "Ik speel ons laatste gesprek af op zoek naar woorden die hem hadden kunnen redden.",
      "Soms wil ik in de voorraadkamer schreeuwen, maar ik slik het in.",
      "Ik voel me gespleten tussen de arts die alles oplost en de zus die dat niet kon.",
      "Wanneer ik eindelijk ademhaal, voel ik een vloedgolf achter een dunne muur.",
      "Ik vraag me af of ik hem pas kan loslaten als ik mezelf toestaan echt boos te worden."
    ],
    ec_sahana_found: [
      "Mijn supervisor zei dat ik het goed deed, maar ik blijf denken dat ze gewoon vriendelijk was.",
      "Ik schrijf mijn notities drie keer over omdat fouten catastrofaal aanvoelen.",
      "Wanneer cliënten me bedanken, ben ik bang dat ze overschatten wat ik kan.",
      "Ik ben doodsbang dat één lastige sessie me als incompetent ontmaskert.",
      "Ik speel sessies terug om te zoeken wat ik heb gemist en vraag me af of ik gewoon obsessief ben."
    ],
    ec_sahana_stretch: [
      "Een deel van mij denkt dat ik alleen nuttig ben wanneer ik indruk maak.",
      "Als iemand pauzeert voor feedback, bereid ik me voor op slecht nieuws.",
      "Het is alsof ik bewijs nodig heb dat ik geen teleurstelling ben voordat ik kan ademhalen.",
      "Ik snak naar begeleiding maar schaam me dat ik die nodig heb.",
      "Ik ben bang dat ik gemakzuchtig word en afglijd als ik mijn krachten echt omarm."
    ],
    ec_sahana_mastery: [
      "Soms stel ik me voor dat mensen in het geheim vinden dat ik niet geschikt ben voor dit werk.",
      "Wanneer ik aanvoel dat er lof komt, wijs ik meteen op mijn fouten zodat anderen dat niet hoeven.",
      "Steun ontvangen voelt gevaarlijk—alsof ik daarna een nog betere versie van mezelf moet zijn.",
      "Ik ben bang dat ik uit ieders gedachten verdwijn als ik ophoud met rennen.",
      "Ik denk dat er een stille woede in mij zit omdat ik steeds op zoek ben naar bevestiging."
    ],
    ec_tomas_found: [
      "Ik hou van mijn zoon, maar soms wil ik gewoon stilte en dat is moeilijk toe te geven.",
      "Mijn partner doet zoveel; ik voel me schuldig wanneer ik uitgeput ben.",
      "Als ik nachtdiensten draai, mis ik mijlpalen en voel ik me vervangbaar.",
      "Ik dacht dat ouderschap natuurlijker zou voelen dan dit.",
      "Zelfs als ik om een pauze vraag, voelt het alsof ik hen teleurstel."
    ],
    ec_tomas_stretch: [
      "Een deel van mij ergert zich eraan dat het leven nu om schema's draait.",
      "Ik slik frustratie in omdat ik bang ben dat het in boosheid verandert.",
      "Mijn vader vertrok toen het moeilijk werd en ik ben bang dat ik hem kopieer.",
      "Ik voel me onzichtbaar tenzij ik iets aan het repareren ben.",
      "Soms wil ik de baby even overhandigen en een uur verdwijnen."
    ],
    ec_tomas_mastery: [
      "Ik ben bang dat mijn partner alleen de vermoeide versie van mij ziet en zich afvraagt waar de oude is.",
      "Ik fantaseer over weer de zorgeloze jongen zijn en haat mezelf daarna ervoor.",
      "Als mijn zoon huilt, hoor ik een stem: 'Herpak je, anders hebben ze je niet meer nodig.'",
      "Ik vermoed dat de wrevel een dieper verdriet verbergt over het verliezen van delen van mezelf.",
      "Als ik toegeef hoe overweldigd ik ben, ben ik bang dat ik instort en niet terugkom."
    ],
    ec_mei_found: [
      "Mijn moeder zegt dat het goed gaat, maar ik zie de teleurstelling wanneer ik voor werk weg ben.",
      "Ik beloofde mijn team een lanceringsdatum en ben doodsbang om die te missen.",
      "Soms zeg ik dat ik laat moet werken zodat ik tien minuten alleen in de auto kan zitten.",
      "Ik voel me verscheurd tussen een goede dochter en een sterke leider zijn.",
      "Ik blijf denken dat ik me niet zo gespleten zou voelen als ik sterker was."
    ],
    ec_mei_stretch: [
      "Ik zou mijn moeder willen vertellen dat ik bang ben haar teleur te stellen.",
      "Op het werk klink ik resoluut, maar de laatste tijd twijfel ik aan elke beslissing.",
      "Er is geen ruimte om over mijn behoeften te praten zonder me egoïstisch te voelen.",
      "Wanneer mijn broer zegt dat ik moet uitrusten, hoor ik kritiek dat ik niet genoeg doe.",
      "Ik zie op tegen familie-etentjes omdat ik me voorbereid op onuitgesproken vergelijkingen."
    ],
    ec_mei_mastery: [
      "Ik stel me voor dat ik volledig voor mijn carrièredoelen ga en ben bang dat mijn familie dat ziet als hen achterlaten.",
      "Een deel van mij verlangt ernaar dat iemand me toestemming geeft om te willen wat ik wil.",
      "Ik draag een stille boosheid bij me over het feit dat ik me voor iedereen moet vertalen.",
      "Ik vermoed dat het constante overfunctioneren een diepe angst voor verlies van verbondenheid verbergt.",
      "Ik vraag me af wie ik zou zijn als ik zou stoppen met presteren voor beide werelden."
    ]
  }),
  el: mapWithIds({
    ev_leah_found: [
      "Ξέρω ότι φαίνομαι κουρασμένη, αλλά ειλικρινά πρέπει να κάνω περισσότερα για τον πατέρα μου.",
      "Όλοι στο σχολείο βασίζονται σε μένα. Αν πάρω μια μέρα άδεια, θα νομίσουν ότι είμαι τεμπέλα.",
      "Μισώ που είμαι απογοητευμένη. Ο πατέρας μου είναι άρρωστος, δεν θα έπρεπε να θυμώνω μαζί του.",
      "Αν χαλαρώσω, νιώθω ότι απογοητεύω τους πάντες ταυτόχρονα.",
      "Οι άνθρωποι μου λένε να ξεκουραστώ, αλλά αυτό μόνο με γεμίζει ενοχές."
    ],
    ev_leah_stretch: [
      "Κάθε φορά που σκέφτομαι να ζητήσω βοήθεια, ακούω μια φωνή που λέει ότι είμαι αδύναμη.",
      "Η αδερφή μου στέλνει υποστηρικτικά μηνύματα και αμέσως σκέφτομαι ότι κρυφά με κρίνει.",
      "Μόλις ξαπλώσω για να χαλαρώσω, το μυαλό μου τρέχει σε όλα όσα δεν έκανα.",
      "Ακούγεται δραματικό να λέω ότι πνίγομαι, αλλά είναι η μόνη λέξη που ταιριάζει.",
      "Θα ήθελα κάποιος να μου πει ότι επιτρέπεται να καταρρεύσω για λίγο χωρίς να χάσω τον σεβασμό."
    ],
    ev_leah_mastery: [
      "Φαντάζομαι την επόμενη μέρα μετά την κηδεία και πόσο άδειο θα είναι χωρίς ρόλο να γεμίσω.",
      "Ένα μέρος μου θέλει να ουρλιάξει ώστε κάποιος να προσέξει ότι διαλύομαι.",
      "Όταν οι συνάδελφοι επαινούν την ανθεκτικότητά μου, νιώθω ταυτόχρονα περηφάνια και βαθιά μοναξιά.",
      "Δεν ξέρω καν τι χρειάζομαι πια—μόνο ότι αυτός ο ρυθμός δεν είναι βιώσιμος.",
      "Μερικές φορές φαντάζομαι να εξαφανιστώ για ένα σαββατοκύριακο και πανικοβάλλομαι ότι κανείς δεν θα με συγχωρήσει."
    ],
    ev_malik_found: [
      "Όταν οι επενδυτές κάνουν πίσω, λέω ότι όλα είναι καλά, αλλά μέσα μου μπαίνω σε σπείρα.",
      "Κρατώ τις συζητήσεις ανάλαφρες γιατί τα βαθιά θέματα μοιάζουν αποθαρρυντικά.",
      "Οι άνθρωποι λένε ότι είμαι ψύχραιμος, αλλά αυτό σημαίνει ότι κρύβω τον πανικό.",
      "Αν παραδεχτώ ότι φοβάμαι, φοβάμαι πως η ομάδα θα χάσει την εμπιστοσύνη της σε μένα.",
      "Το να βγαίνω ραντεβού είναι εξαντλητικό—τελειώνω τα πράγματα πριν προλάβουν να με απορρίψουν."
    ],
    ev_malik_stretch: [
      "Υπάρχει συνεχώς ένας έλεγχος στο μυαλό μου: με συμπαθούν ακόμη ή γλιστράω;",
      "Όταν κάποιος με επαινεί, αμέσως αναρωτιέμαι τι θέλει στην πραγματικότητα.",
      "Αναπαράγω τις συναντήσεις το βράδυ και αναρωτιέμαι αν ακούστηκα ανασφαλής.",
      "Το να απογοητεύσω κάποιον είναι ο χειρότερος φόβος μου, γι’ αυτό αποφεύγω να ζητήσω οτιδήποτε.",
      "Αν πω ότι νιώθω μόνος, είμαι βέβαιος πως θα με θεωρήσουν φορτικό."
    ],
    ev_malik_mastery: [
      "Μόλις κάποιος διστάσει να απαντήσει, υποθέτω ότι σχεδιάζει να φύγει.",
      "Νιώθω σαν ολόγραμμα—ορατός αλλά άπιαστος—γιατί τρομάζω να είμαι αυθεντικός.",
      "Λαχταρώ να μείνει κάποιος, αλλά δεν αντέχω να δει το χάος μου.",
      "Ακόμη κι όταν με γιορτάζουν, βλέπω μπροστά μου ότι θα με αντικαταστήσουν με καλύτερο μοντέλο.",
      "Μερικές φορές εύχομαι να ήμουν απλώς μέσος ώστε το διακύβευμα να μην ήταν τόσο μεγάλο."
    ],
    ev_carmen_found: [
      "Δεν κλαίω γιατί πρέπει να κρατήσω τους υπόλοιπους όρθιους.",
      "Οι ασθενείς χρειάζονται να είμαι σε εγρήγορση· τα συναισθήματα μόνο με επιβραδύνουν.",
      "Η οικογένειά μου ρωτά διαρκώς πώς είμαι κι εγώ το προσπερνώ.",
      "Είναι πιο εύκολο να μιλάω για πρακτικά ζητήματα παρά για το πόσο μου λείπει.",
      "Αν θυμώσω μαζί του, νιώθω ότι προδίδω τη μνήμη του."
    ],
    ev_carmen_stretch: [
      "Κάθε βάρδια βλέπω κάποιον σαν τον αδερφό μου και κλειδώνω τα πάντα μέσα μου.",
      "Όταν οι συνάδελφοι ρωτούν για μένα, αλλάζω θέμα για να μη λυγίσω.",
      "Ένα κομμάτι μου είναι εξοργισμένο που με άφησε με το χάος, και αυτή η σκέψη με τρομάζει.",
      "Σχεδιάζω την ημέρα μου για να μένω απασχολημένη ώστε η θλίψη να μην με προλάβει.",
      "Ζηλεύω όσους μπορούν να κλαίνε δημόσια· νιώθω ελαττωματική που κρατιέμαι τόσο."
    ],
    ev_carmen_mastery: [
      "Ξαναζώ την τελευταία μας συζήτηση ψάχνοντας τα λόγια που ίσως τον έσωζαν.",
      "Μερικές φορές θέλω να ουρλιάξω στο δωμάτιο των προμηθειών αλλά το καταπίνω.",
      "Νιώθω μοιρασμένη ανάμεσα στη γιατρό που διορθώνει τα πάντα και την αδελφή που δεν τα κατάφερε.",
      "Όταν επιτέλους ανασαίνω, αισθάνομαι ένα κύμα πίσω από λεπτό τοίχο.",
      "Αναρωτιέμαι αν θα τον αφήσω να φύγει μόνο όταν επιτρέψω στον θυμό να βγει."
    ],
    ec_sahana_found: [
      "Η επόπτριά μου είπε ότι τα πήγα καλά, αλλά σκέφτομαι συνεχώς ότι απλώς ήταν ευγενική.",
      "Ξαναγράφω τις σημειώσεις μου τρεις φορές γιατί τα λάθη μοιάζουν καταστροφικά.",
      "Όταν οι πελάτες με ευχαριστούν, φοβάμαι ότι υπερεκτιμούν όσα μπορώ να κάνω.",
      "Τρομάζω στη σκέψη ότι μια δύσκολη συνεδρία θα με ξεσκεπάσει ως ανίκανη.",
      "Αναπαράγω τις συνεδρίες για να βρω τι έχασα και αναρωτιέμαι αν είμαι απλώς εμμονική."
    ],
    ec_sahana_stretch: [
      "Ένα μέρος μου πιστεύει ότι είμαι χρήσιμη μόνο όταν εντυπωσιάζω.",
      "Αν κάποιος διστάσει πριν δώσει ανατροφοδότηση, προετοιμάζομαι για άσχημα νέα.",
      "Είναι σαν να χρειάζομαι απόδειξη ότι δεν είμαι απογοήτευση πριν μπορέσω να αναπνεύσω.",
      "Λαχταρώ καθοδήγηση αλλά ντρέπομαι που τη χρειάζομαι.",
      "Φοβάμαι ότι αν αναγνωρίσω τις δυνάμεις μου, θα χαλαρώσω και θα ξεφύγω."
    ],
    ec_sahana_mastery: [
      "Μερικές φορές φαντάζομαι ότι οι άλλοι συμφωνούν κρυφά πως δεν κάνω για αυτή τη δουλειά.",
      "Όταν καταλαβαίνω ότι έρχεται έπαινος, σπεύδω να δείξω τα λάθη μου ώστε να μη χρειαστεί να το κάνουν εκείνοι.",
      "Το να δεχτώ υποστήριξη μοιάζει επικίνδυνο—λες και μετά χρωστάω μια ακόμη καλύτερη εκδοχή μου.",
      "Φοβάμαι ότι θα εξαφανιστώ από τη μνήμη των ανθρώπων αν σταματήσω να τρέχω.",
      "Νομίζω ότι υπάρχει μέσα μου μια σιωπηλή οργή για το κυνήγι της αποδοχής."
    ],
    ec_tomas_found: [
      "Αγαπώ τον γιο μου, αλλά μερικές φορές θέλω απλώς σιωπή και είναι δύσκολο να το παραδεχτώ.",
      "Ο σύντροφός μου σηκώνει τόσα πολλά· νιώθω ενοχές όταν είμαι εξαντλημένος.",
      "Όταν δουλεύω νύχτες, χάνω σημαντικές στιγμές και νιώθω αναλώσιμος.",
      "Νόμιζα ότι η πατρότητα θα ένιωθε πιο φυσική από αυτό.",
      "Ακόμα κι όταν ζητάω ένα διάλειμμα, αισθάνομαι ότι τους απογοητεύω."
    ],
    ec_tomas_stretch: [
      "Ένα μέρος μου αγανακτεί που η ζωή τώρα γυρίζει γύρω από προγράμματα.",
      "Καταπνίγω τη δυσφορία γιατί φοβάμαι ότι θα γίνει θυμός.",
      "Ο πατέρας μου έφυγε όταν δυσκόλεψαν τα πράγματα και φοβάμαι ότι τον επαναλαμβάνω.",
      "Νιώθω αόρατος εκτός αν φτιάχνω κάτι.",
      "Μερικές φορές θέλω να παραδώσω το μωρό και να εξαφανιστώ για μία ώρα."
    ],
    ec_tomas_mastery: [
      "Φοβάμαι ότι ο σύντροφός μου βλέπει μόνο την κουρασμένη εκδοχή μου και αναρωτιέται πού πήγε ο παλιός εαυτός.",
      "Φαντάζομαι να ξαναγίνω ο ανέμελος τύπος και μετά μισώ τον εαυτό μου γι’ αυτό.",
      "Όταν ο γιος μου κλαίει, ακούω μια φωνή: «Συγκεντρώσου, αλλιώς δεν θα σε χρειάζονται.»",
      "Υποψιάζομαι ότι η αγανάκτηση κρύβει ένα βαθύτερο πένθος για τα κομμάτια του εαυτού μου που χάνονται.",
      "Αν παραδεχτώ πόσο καταπονημένος είμαι, φοβάμαι ότι θα καταρρεύσω και δεν θα επανέλθω."
    ],
    ec_mei_found: [
      "Η μητέρα μου λέει ότι είναι καλά, αλλά βλέπω την απογοήτευση όταν ταξιδεύω για δουλειά.",
      "Υποσχέθηκα στην ομάδα ημερομηνία λανσαρίσματος και τρέμω μήπως την χάσω.",
      "Μερικές φορές λέω ότι δουλεύω μέχρι αργά μόνο για να κάτσω δέκα λεπτά μόνη στο αυτοκίνητο.",
      "Νιώθω διχασμένη ανάμεσα στο να είμαι καλή κόρη και δυνατή ηγέτιδα.",
      "Σκέφτομαι συνεχώς ότι αν ήμουν πιο δυνατή δεν θα ένιωθα τόσο μοιρασμένη."
    ],
    ec_mei_stretch: [
      "Θα ήθελα να πω στη μητέρα μου ότι φοβάμαι μήπως την απογοητεύσω.",
      "Στη δουλειά ακούγομαι αποφασιστική, αλλά τελευταία αμφιβάλλω για κάθε απόφαση.",
      "Δεν υπάρχει χώρος να μιλήσω για τις ανάγκες μου χωρίς να νιώσω εγωίστρια.",
      "Όταν ο αδελφός μου λέει να χαλαρώσω, ακούω κριτική ότι δεν κάνω αρκετά.",
      "Τρέμω τα οικογενειακά τραπέζια γιατί ετοιμάζομαι για άρρητες συγκρίσεις."
    ],
    ec_mei_mastery: [
      "Φαντάζομαι να ακολουθώ πλήρως τους επαγγελματικούς μου στόχους και φοβάμαι ότι η οικογένεια θα το δει σαν εγκατάλειψη.",
      "Ένα μέρος μου λαχταρά να μου δώσει κάποιος την άδεια να θέλω αυτό που θέλω.",
      "Κουβαλώ μια ήσυχη οργή επειδή πρέπει να μεταφράζω τον εαυτό μου για όλους.",
      "Υποψιάζομαι ότι η συνεχής υπερλειτουργία κρύβει έναν βαθύ φόβο απώλειας του ανήκειν.",
      "Αναρωτιέμαι ποια θα ήμουν αν σταματούσα να αποδίδω για δύο κόσμους."
    ]
  }),
  zh: mapWithIds({
    ev_leah_found: [
      "我知道自己看起来很累，但其实我该为爸爸做更多。",
      "学校里所有人都依靠我。如果我请一天假，他们会觉得我懒惰。",
      "我讨厌自己会挫败。爸爸生病了，我不该对他不耐烦。",
      "只要我放慢脚步，就好像同时辜负了所有人。",
      "大家都叫我休息，但那只会让我充满愧疚。"
    ],
    ev_leah_stretch: [
      "每次想开口求助，我脑子里就有个声音说我很软弱。",
      "妹妹发来鼓励的信息，我却立刻觉得她暗地里在评价我。",
      "一躺下来想放松，脑子就开始翻腾那些没完成的事。",
      "说自己快被淹没听上去很夸张，但这是最贴切的词。",
      "真希望有人告诉我，可以崩溃一下也不会失去别人的尊重。"
    ],
    ev_leah_mastery: [
      "我不断想象葬礼后的第二天，没有角色要扮演时会多么空洞。",
      "有一个部分想大声尖叫，好让人看见我已经撑不住。",
      "同事夸我有韧性时，我同时感到骄傲和深深的孤独。",
      "我已经说不清自己需要什么——只知道这样的节奏撑不下去。",
      "有时我幻想消失一个周末，又马上慌张，怕没人原谅我。"
    ],
    ev_malik_found: [
      "投资人抽身时，我嘴上说没事，可内心已经失控。",
      "我总把谈话弄得很浅，因为深入的话题好像会把人吓跑。",
      "大家都说我很镇定，但其实只是我把恐慌藏起来了。",
      "如果承认自己害怕，我就怕团队会对我失去信心。",
      "约会太累了——我总是先结束，免得被别人甩。"
    ],
    ev_malik_stretch: [
      "脑子里像开着扫描仪：他们还喜欢我吗？是不是已经不行了？",
      "有人称赞我，我立刻怀疑对方到底想要什么。",
      "晚上我会反复回放会议，担心自己听起来很没底气。",
      "让别人失望是我最怕的事，所以我干脆不求任何人。",
      "如果我说自己孤独，就肯定会被当成黏人。"
    ],
    ev_malik_mastery: [
      "对方稍微犹豫一下回复，我就认定他准备离开。",
      "我感觉自己像个全息影像——看得见却摸不着——因为我害怕真实。",
      "我渴望有人坚持留下，却又无法忍受对方看见我的混乱。",
      "即便大家在庆祝我，我脑子里仍在想他们会换个更好的人。",
      "有时我真想就做个普通人，这样压力就不会这么大。"
    ],
    ev_carmen_found: [
      "我不哭，因为我得让其他人撑住。",
      "病人需要我头脑清醒；情绪只会拖慢我。",
      "家人总问我过得怎样，我总是敷衍带过。",
      "谈物流安排比说我多么想念他要容易得多。",
      "如果我对他生气，就像是在背叛他的记忆。"
    ],
    ev_carmen_stretch: [
      "每个班都能见到像弟弟的人影，我只好把所有感觉封起来。",
      "同事来关心我时，我立刻换话题，免得崩溃。",
      "有一部分对他丢下烂摊子很愤怒，而这个念头把我吓坏了。",
      "我把一天排得满满的，好让悲伤追不上我。",
      "我羡慕那些能在公众场合痛哭的人；我觉得自己不正常，因为总是那么克制。"
    ],
    ev_carmen_mastery: [
      "我一遍遍回放最后那次对话，寻找或许能救他的那句话。",
      "有时真想在器材间大喊，可我还是咽了下去。",
      "我感觉自己分裂成会解决问题的医生和无能为力的姐姐。",
      "终于喘口气时，仿佛有巨浪隔着薄墙要冲出来。",
      "我想，或许只有允许自己真正生气，才能真的放他走。"
    ],
    ec_sahana_found: [
      "导师说我表现得很好，但我总觉得她只是在客套。",
      "我把笔记重写三遍，因为犯错像是灾难。",
      "当来访者感谢我，我担心他们高估了我的能力。",
      "我很怕一场棘手的会谈就会让我被看穿是个冒牌货。",
      "我反复回顾每次会谈，找自己漏掉什么，然后怀疑自己是不是太强迫。"
    ],
    ec_sahana_stretch: [
      "有个声音说，只有当我让人惊艳时才有价值。",
      "别人回馈前稍微停顿，我就做好听坏消息的准备。",
      "好像需要证据证明我不是个失望，才能安心呼吸。",
      "我渴望指导，却也为此感到羞愧。",
      "我怕一旦承认自己的优势，就会松懈下滑。"
    ],
    ec_sahana_mastery: [
      "有时我幻想大家暗地里认定我不适合这份工作。",
      "一察觉到赞美，我就抢先指出自己的缺点，省得别人说。",
      "接受支持让我觉得很危险——好像欠下更完美的自己。",
      "我担心如果不再努力奔跑，就会从所有人记忆里消失。",
      "我想，内心藏着一团总是追求认可的默默怒火。"
    ],
    ec_tomas_found: [
      "我爱儿子，但有时只想要安静，这话很难说出口。",
      "伴侣承担了那么多；我一累就觉得愧疚。",
      "夜班让我错过成长瞬间，也让我觉得自己可被替换。",
      "我以为当父亲会比这自然得多。",
      "哪怕我开口要休息，也像是在让他们失望。"
    ],
    ec_tomas_stretch: [
      "有个部分讨厌生活如今完全围着日程转。",
      "我压下挫败感，因为怕它变成愤怒。",
      "我爸当年遇到难处就逃了，我偏执地担心自己会重蹈覆辙。",
      "如果没在修补什么，我就觉得自己是隐形的。",
      "有时候真想把宝宝交出去，一个人消失一小时。"
    ],
    ec_tomas_mastery: [
      "我怕伴侣只看到疲惫的我，并怀疑之前那个我去哪了。",
      "我幻想回到无忧无虑的模样，然后又恨自己会那样想。",
      "儿子一哭，我脑中就有个声音说：‘振作点，否则他们就不需要你了。’",
      "我怀疑怨气底下藏着对失去自我部分的深层悲伤。",
      "如果承认自己有多崩溃，我怕一旦倒下就再也起不来。"
    ],
    ec_mei_found: [
      "妈妈说她没事，但我一出差就能看到她眼里的失望。",
      "我跟团队保证了上线日期，担心自己完不成。",
      "有时我谎称加班，只为了在车里待十分钟。",
      "我觉得自己被撕扯在好女儿和强领导之间。",
      "我不停想，如果我更坚强，就不会这么撕裂。"
    ],
    ec_mei_stretch: [
      "真希望能告诉妈妈，我怕自己让她失望。",
      "在公司我听起来很果断，但最近每个决定都再三怀疑。",
      "完全没有空间谈自己的需求，否则就觉得自私。",
      "哥哥叫我休息时，我听到的却是‘你做得不够’的批评。",
      "我害怕家庭聚餐，因为总在防备那些不言而喻的比较。"
    ],
    ec_mei_mastery: [
      "我想象着全力追求事业目标，又害怕家人觉得我抛弃了他们.",
      "我多么渴望有人允许我想要自己真正想要的东西。",
      "我压着一股无声的愤怒，因为总得为所有人“翻译”自己。",
      "我怀疑持续的高功能是在掩饰深层的失去归属感的恐惧。",
      "我好奇如果停止为两个世界表演，我会是谁。"
    ]
  }),
  fr: mapWithIds({}),
  da: mapWithIds({}),
  es: mapWithIds({}),
  he: mapWithIds({}),
  ar: mapWithIds({}),
  ru: mapWithIds({})
};
