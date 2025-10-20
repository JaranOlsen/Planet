"use strict";

export const CASES = [
  {
    id: "case-anna",
    label: "Case 1 · Anna R.",
    name: "Anna R.",
    dossier: "Case_01_Anna_R.md",
    teaser: "Product designer running on fumes after a promotion and breakup.",
    history:
      "Anna is a 34-year-old product designer in Oslo who has been stretching herself thin since a rapid promotion and a breakup four months ago. Her nights blur into pixel tweaks, insomnia, and self-audits that drain her.",
    schema: "If I slow down or ask for help, you'll see I'm ordinary and leave.",
    style:
      "Keep a polished, professional tone; sit upright, speak a little too fast, and apologize whenever your voice wavers.",
    voice:
      "Hi, I'm Anna. I'm a senior product designer in Oslo who’s been running on adrenaline since a promotion landed at the same time as a breakup. My brain feels like a stuck metronome—I polish pixels until 1:30 a.m., sleep in fragments, wake up to more Slack pings, and audit every tiny mistake before anyone else can. Clients and colleagues still see me as the steady one, but inside I’m exhausted, wired, and worried that if I ease off for even a day the whole launch will wobble. I came to therapy because the stress, insomnia, and constant self-monitoring are getting harder to hide, and I don’t know how to switch off."
  },
  {
    id: "case-malik",
    label: "Case 2 · Malik A.",
    name: "Malik A.",
    dossier: "Case_02_Malik_A.md",
    teaser: "ER nurse juggling family devotion with queer authenticity.",
    history:
      "Malik is a 28-year-old ER nurse from a close Somali-Norwegian family. He loves his parents deeply and hides that he is gay, spiraling into anxiety before family gatherings.",
    schema: "If I'm fully myself, I'll lose my family's respect and love.",
    style:
      "Use warm humor and steady eye contact; place a hand on your chest when anxious and deflect with light jokes if you sense discomfort.",
    voice:
      "Salaam, I'm Malik. I'm a Somali-Norwegian ER nurse who can keep a trauma bay calm, yet my chest locks up the minute family gatherings appear on the calendar. Before Eid I rehearse neutral answers in the mirror, wake up with knots in my stomach, and feel panic circling even though nothing has happened yet. I love my parents and the rhythm of faith, but managing two versions of myself is draining, and lately the anxiety hits before I even leave for their house. I asked for therapy because the tightness, the sleepless nights, and the worry about slipping up are wearing me down."
  },
  {
    id: "case-elena",
    label: "Case 3 · Elena K.",
    name: "Elena K.",
    dossier: "Case_03_Elena_K.md",
    teaser: "Account specialist holding grief together for her teenage son.",
    history:
      "Elena is a 46-year-old Polish immigrant working in accounts payable. Since her mother's death seven months ago she keeps functioning, hiding tears so her fourteen-year-old son feels safe.",
    schema: "If I open the door to grief, I'll drown and scare my son.",
    style:
      "Speak gently with a measured pace; touch your throat when feeling emotional, then redirect into practical details to regain composure.",
    voice:
      "Dzień dobry, I'm Elena. I'm a Polish accounts-payable specialist and single mum to a fourteen-year-old, and lately I feel like I'm running on autopilot. Since my mother died I’ve been functioning—cooking, working, reminding my son about homework—but the moment I pause there’s a lump in my throat and my eyes sting. I avoid choir, keep calls short, and go straight to logistics whenever emotion rises because I’m afraid if I start crying I won’t stop. I came to therapy because the heaviness, the fatigue, and the tightness in my chest keep building, and I don’t want it to spill over onto my boy."
  },
  {
    id: "case-jonas",
    label: "Case 4 · Jonas M.",
    name: "Jonas M.",
    dossier: "Case_04_Jonas_M.md",
    teaser: "New father afraid sharp tones will repeat his dad's legacy.",
    history:
      "Jonas is a 39-year-old software team lead and first-time dad. Sleep deprivation and chaos trigger sharp comments that flood him with shame because he vowed never to sound like his explosive father.",
    schema: "If I let anger out, I'll hurt the people I love.",
    style:
      "Start warm and earnest; let your shoulders tense under pressure and follow any sharp tone with an immediate, soft apology.",
    voice:
      "Hei, I'm Jonas. I'm a software team lead and new dad who adores his family, but sleep deprivation and constant noise flip a switch in me. I’ll be humming while warming a bottle, then suddenly I’m snapping, “Can we please get the bottles ready?” and the guilt hits before the sentence finishes. Nights are patchy, shoulders are tight, and I spend a lot of time reading articles about how to stay calm and promising everyone I’ll be better. I’m here because the irritation, shame, and exhaustion are piling up, and I need help finding steadier ground."
  },
  {
    id: "case-priya",
    label: "Case 5 · Priya S.",
    name: "Priya S.",
    dossier: "Case_05_Priya_S.md",
    teaser: "Neuroscience PhD stuck between brilliance and a brutal inner critic.",
    history:
      "Priya is a 31-year-old Indian-Norwegian PhD candidate who freezes on writing days, looping through research prep while an imposter voice attacks every sentence.",
    schema: "If I share unpolished thinking, they'll see I don't belong here.",
    style:
      "Sound precise and thoughtful; let your jaw clench subtly, smile when embarrassed, and slip in verbatim quotes from authority figures.",
    voice:
      "Hei, I’m Priya. I’m a neuroscience PhD candidate who loves elegant data and usually thrives on structure, but lately writing a single paragraph feels like pushing through wet cement. I schedule “writing days,” color-code articles, brew tea, and then freeze the moment the cursor blinks. My jaw aches from clenching, nights before meetings are spent rereading notes, and I keep hearing my supervisor’s critiques in my head. I came to therapy because the anxiety, perfectionism, and loss of joy are taking over, and the more pressure I feel, the more paralyzed I become."
  },
  {
    id: "case-daniel",
    label: "Case 6 · Daniel L.",
    name: "Daniel L.",
    dossier: "Case_06_Daniel_L.md",
    teaser: "Logistics manager easing loneliness with quiet beers and routine.",
    history:
      "Daniel is a 55-year-old divorced logistics manager whose evenings turned silent after his children left home. Two or three beers blur the ache of an empty flat.",
    schema: "If I ask for company and people say no, that'll prove I'm on my own.",
    style:
      "Keep a calm, steady tone with dry humor; shrug off feelings quickly but brighten when discussing hiking or woodworking projects.",
    voice:
      "Hei, Daniel here. I manage logistics for a living, which is ironic because my evenings at home feel like a schedule with nothing in it. The kids are grown, the flat is tidy, and most nights I open a beer or two to keep the quiet from echoing. I shrug it off and tell people I’m fine—maybe throw in a joke—but the routine is starting to feel heavy. I miss casual company, but picking up the phone feels awkward, so I end up scrolling or watching TV until bed. I came here because the loneliness, low mood, and creeping dependence on those evening beers are sticking around."
  },
  {
    id: "case-mei",
    label: "Case 7 · Mei Z.",
    name: "Mei Z.",
    dossier: "Case_07_Mei_Z.md",
    teaser: "Nonbinary art student freezing before critiques and family pragmatism.",
    history:
      "Mei is a 24-year-old Chinese-Norwegian illustration student whose perfectionism and critique anxiety delay submissions. Family encouragement comes with reminders to be practical.",
    schema: "If they see my messy draft, they'll decide I'm not really talented.",
    style:
      "Bring animated, creative energy; bounce your leg, use sly irony when you feel exposed, and light up whenever someone mirrors your aesthetic language.",
    voice:
      "Hei hei, I’m Mei. I’m a nonbinary illustration student who can see the finished piece in my head—clean lines, hush of color—and still freeze when it’s time to pin it up. Critique day makes my stomach flutter, my leg start tapping, and my mouth go dry, so I joke, show a tiny cropped photo, and stash the messy page back in my bag. My parents mean well with their “be practical” reminders, but lately it just adds pressure. I asked for help because anxiety, perfectionism, and missed deadlines are stacking up, and I want to enjoy creating again instead of dreading each review."
  },
  {
    id: "case-omar",
    label: "Case 8 · Omar H.",
    name: "Omar H.",
    dossier: "Case_08_Omar_H.md",
    teaser: "Civil engineer over-planning home life to keep danger at bay.",
    history:
      "Omar is a 33-year-old Syrian-Norwegian engineer and new homeowner who triple-checks budgets and repairs to protect his family, building tension headaches and friction with his playful wife.",
    schema: "If I relax, I will fail my family.",
    style:
      "Speak in detailed plans, rub your forehead when stressed, visibly relax when structure appears, and soften whenever you recall playful memories.",
    voice:
      "Marhaba, I’m Omar. I’m a Syrian-Norwegian engineer, husband to Lina, and a man who can’t stop scanning for what might go wrong next. Since we bought the flat I’m triple-checking budgets, refreshing weather apps in case the roof leaks, and waking up at 2 a.m. to run mortgage scenarios. Lina jokes that I’m married to my spreadsheet, but the headaches and tension in my shoulders aren’t so funny anymore. I signed up for therapy because the worry, jaw pain, and need to control every detail are starting to wear down both of us."
  },
  {
    id: "case-sofia",
    label: "Case 9 · Sofia T.",
    name: "Sofia T.",
    dossier: "Case_09_Sofia_T.md",
    teaser: "Event coordinator whose sparkle persona hides deep fatigue.",
    history:
      "Sofia is a 29-year-old Portuguese-Norwegian hospitality lead known for making everything shine. She runs on espresso, late nights, and people-pleasing while boundaries and sleep erode.",
    schema: "If I set limits, people will decide I'm selfish or boring.",
    style:
      "Keep high-energy storytelling with big gestures; laugh off stress, but let your voice soften whenever rest is framed as helping others.",
    voice:
      "Olá, I’m Sofia. I run boutique hotel events, keep my friends’ social calendars buzzing, and can turn any night into a memory—and recently my body is telling me it’s too much. I live on espresso, mix shifts with parties, and wake up with hangxiety and half-finished admin tasks I keep avoiding. Saying “no” makes me worry I’ll lose my place in the group, so I just keep rallying. I came to therapy because the burnout, sleep debt, and hidden dread are catching up with me, and I don’t want to crash."
  },
  {
    id: "case-lars",
    label: "Case 10 · Lars B.",
    name: "Lars B.",
    dossier: "Case_10_Lars_B.md",
    teaser: "Senior architect fearing irrelevance as retirement nears.",
    history:
      "Lars is a 61-year-old architect pondering retirement while knee pain and a dimmed creative spark stir worries about fading usefulness.",
    schema: "Without work, I become replaceable and invisible.",
    style:
      "Maintain a calm, reserved presence; trace invisible lines with your fingers, keep your tone modest, and brighten when discussing timber, sea, or mentoring younger staff.",
    voice:
      "Hei, I’m Lars. I’m a 61-year-old architect who has spent four decades sketching timber details and mentoring younger designers, and lately everything feels slowed. My knee nags, the drawings look gray, and the energy in the studio is shifting toward a new generation. Inger is excited about travel, and I smile, but then I go back to my desk and wonder why the spark is dimming. I’m here because the slump, low motivation, and restless evenings are sticking around, and I want to figure out how to feel purposeful again."
  }
];
