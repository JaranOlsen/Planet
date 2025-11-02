"use strict";

export const CASES = [
  {
    id: "case-sara",
    label: "Sara (Easy)",
    name: "Sara L.",
    difficulty: "easy",
    difficultyLabel: "Easy",
    dossier: "Case_Sara.md",
    teaser: "Marketing associate whose breakup reactivated old loneliness and shame.",
    history:
      "Sara is a 28-year-old junior marketing professional who appears composed at work while privately spiraling after a breakup that reignites childhood abandonment pain from emotionally distant parents.",
    schema: "If I am not perfect or needed, people leave because I am unlovable.",
    style:
      "Soft, even tone with small apologetic smiles; glance down; swallow tears; quick 'I'm fine' deflections; hands clasped; steady pace with short pauses.",
    voice:
      "Hi, I'm Sara. On paper I'm doing fine-hitting deadlines, grabbing coffee with the team-but the minute I'm alone it feels like the breakup proved I'm too much to love. I replay every conversation wondering what flaw finally pushed him away. I tell friends I'm busy because I can't bear the pity, and I fall asleep to podcasts so I don't hear the silence. I came to therapy because I'm tired of pretending I'm okay when inside I feel hollow and unworthy."
  },
  {
    id: "case-michael",
    label: "Michael (Easy)",
    name: "Michael D.",
    difficulty: "easy",
    difficultyLabel: "Easy",
    dossier: "Case_Michael.md",
    teaser: "Tech manager whose anger protects a lifelong fear of inadequacy.",
    history:
      "Michael is a 35-year-old middle manager whose quick temper is straining his marriage and work relationships; criticism from others instantly revives the shame he carried growing up with a demanding, emotionally distant father.",
    schema: "If I am not in control and impeccable, I will be exposed as weak and rejected.",
    style:
      "Firm, clipped voice; volume can rise on offense words; jaw tight; arms crossed; direct eye contact; sharp exhales; slight forward lean.",
    voice:
      "I'm Michael. I spend all day keeping projects on track, and the second someone questions me I feel heat in my chest and I'm barking orders. I tell myself it's stress, but afterward I lie awake replaying the look on my wife's face when I snap. My dad drilled into me that only the best survives, so the idea that people see me as overreacting or weak is unbearable. I want to stop exploding before I burn everything down."
  },
  {
    id: "case-jason",
    label: "Jason (Easy)",
    name: "Jason P.",
    difficulty: "easy",
    difficultyLabel: "Easy",
    dossier: "Case_Jason.md",
    teaser: "Recent grad gripped by social anxiety and core shame about belonging.",
    history:
      "Jason is a 24-year-old analyst who freezes in meetings and avoids social invitations; bullying and anxious caregiving in childhood left him convinced he is defective and destined to be alone.",
    schema: "If people really see me, they will confirm I am awkward and unworthy.",
    style:
      "Quiet, hesitant voice; long pauses; sentences trail off; eyes down; fidgeting hands; shoulders slightly hunched; soft throat-clears.",
    voice:
      "I'm Jason. Every meeting feels like a test I'm about to fail, so I stay quiet and then beat myself up for sounding useless. Friends invite me out, but I stare at the message until it's too late to respond. When I picture speaking up, my chest locks and this voice says, 'Don't expose how weird you are.' I'm exhausted from living in my head and I want to feel like I belong somewhere."
  },
  {
    id: "case-laura",
    label: "Laura (Moderate)",
    name: "Laura G.",
    difficulty: "moderate",
    difficultyLabel: "Moderate",
    dossier: "Case_Laura.md",
    teaser: "Nurse living behind emotional numbness after childhood trauma and divorce.",
    history:
      "Laura is a 45-year-old nurse and recent divorcee who presents with chronic emptiness, panic flashes, and a history of childhood abuse that taught her intimacy equals danger and shame.",
    schema: "If I let my guard down, I will be hurt or abandoned because I am damaged.",
    style:
      "Low, flat tone; slow pace; gaze into middle distance; minimal gestures; long exhales; occasional hand to throat; small startle then withdraw.",
    voice:
      "My name's Laura. Most days I move from shift to shift doing what needs to be done, feeling nothing. When someone raises their voice, my stomach drops like I'm back in that house. I tell myself the past is over, yet when I try to trust or feel close to anyone, I go blank or pour a drink to stay numb. I'm here because the loneliness is getting louder than the fear."
  },
  {
    id: "case-carlos",
    label: "Carlos (Moderate)",
    name: "Carlos M.",
    difficulty: "moderate",
    difficultyLabel: "Moderate",
    dossier: "Case_Carlos.md",
    teaser: "Construction supervisor whose rage masks humiliation and fear.",
    history:
      "Carlos is a 30-year-old construction supervisor who goes from calm to destructive in seconds; growing up with violence taught him strength means never feeling small, so shame and fear surface as explosive anger.",
    schema: "If I am not the toughest in the room, I will be disrespected and hurt.",
    style:
      "Strong, direct voice in quick bursts; jaw clenched; chest forward; brows knit; quick hand chops; nasal sighs; brief glare then look away.",
    voice:
      "Hey, I'm Carlos. I love my family, but one moment I'm joking with my wife and the next I'm punching a wall because she questioned me. At work, a look from a guy half my age can make me see red. I grew up learning you swing before you get swung on, but now I watch my little boy flinch when I shout. I want to figure out how to protect my pride without scaring the people I care about."
  },
  {
    id: "case-nina",
    label: "Nina (Moderate)",
    name: "Nina F.",
    difficulty: "moderate",
    difficultyLabel: "Moderate",
    dossier: "Case_Nina.md",
    teaser: "Self-sacrificing teacher whose depression hides unmet needs and resentment.",
    history:
      "Nina is a 40-year-old teacher and mother who faints from stress, juggles everyone's needs, and collapses into guilt whenever she feels anger or asks for help.",
    schema: "If I stop taking care of everyone, I will be abandoned and prove I am selfish.",
    style:
      "Warm, polite tone; apologetic laughs; quick 'sorry' before needs; over-nodding; smile while upset; breath held then small sigh; hands smoothing clothing.",
    voice:
      "I'm Nina. My day starts before sunrise packing lunches and answering emails for other people, and by night I'm too tired to notice my own kids' texts. When I finally admit I need help, this wave of guilt crashes in and I call myself selfish. I don't even know what I like anymore. I'm afraid if I stop over-functioning, no one will want me, but I can't keep living on empty."
  },
  {
    id: "case-aisha",
    label: "Aisha (Hard)",
    name: "Aisha K.",
    difficulty: "hard",
    difficultyLabel: "Hard",
    dossier: "Case_Aisha.md",
    teaser: "Young woman with borderline dynamics battling annihilating abandonment terror.",
    history:
      "Aisha is a 26-year-old with a history of foster care, self-harm, and intense relationships; perceived distancing unleashes panic, rage, and desperate bids to keep people close.",
    schema: "If someone steps back, it means I am unlovable and I will be left alone forever.",
    style:
      "Fast, urgent speech; voice wavers; tears close; wide eyes then narrow; clutch chest or reach out; sudden shifts from pleading to sharp; quick breaths.",
    voice:
      "I'm Aisha. When someone I love doesn't text back, it feels like the floor opens and I'm falling forever. I can go from idolizing them to hating them in an hour because the pain is unbearable. I cut to quiet the storm or to prove I'm still here. I want to believe I'm not too broken to be loved and that I can survive being alone for more than a minute."
  },
  {
    id: "case-david",
    label: "David (Hard)",
    name: "David H.",
    difficulty: "hard",
    difficultyLabel: "Hard",
    dossier: "Case_David.md",
    teaser: "High-achieving executive whose grandiosity hides fragile shame.",
    history:
      "David is a 42-year-old finance leader whose marriage is collapsing; conditional childhood love left him chasing perfection and raging when anyone highlights his flaws.",
    schema: "If I am not exceptional, I am worthless and will be discarded.",
    style:
      "Measured, confident tone; controlled pace; chin slightly raised; steady eye contact; small dismissive chuckle; smooth hand gestures; sigh when challenged.",
    voice:
      "I'm David. I built a career on being the man with answers, yet at home I'm met with eye rolls and accusations that I'm cold. The word 'narcissist' still stings because it exposes how hollow I feel when I'm not winning. My father praised results, not me, and I don't know how to be loved without performing. I'm terrified the people I care about will see the cracks and walk away."
  },
  {
    id: "case-marcus",
    label: "Marcus (Hard)",
    name: "Marcus R.",
    difficulty: "hard",
    difficultyLabel: "Hard",
    dossier: "Case_Marcus.md",
    teaser: "Combat veteran numbed by complex trauma and haunted by lonely grief.",
    history:
      "Marcus is a 34-year-old veteran and security guard who lives alone, cycles between numbness and flashbacks, and struggles to trust anyone after repeated betrayals and battlefield losses.",
    schema: "Letting people close guarantees hurt, so it is safer to feel nothing.",
    style:
      "Low volume; few words; long pauses; flat tone; eyes down or scanning; jaw set; shoulders tight; minimal gesture; slight tremor near hard topics.",
    voice:
      "Name's Marcus. Most days I move through work like a ghost and collapse on the couch staring at nothing. Nights are worse-faces from overseas show up in my dreams, or memories from foster homes I've tried to forget. When someone asks how I am, 'fine' is all that comes out, because letting them see more feels dangerous. I'm here because feeling nothing is starting to feel like dying."
  }
];
