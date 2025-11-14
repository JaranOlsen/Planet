"use strict";

export const STATEMENT_SETS = {
  "therapist-self-awareness": {
    // Each suggestion invites the therapist to notice and regulate internal reactions before any brief meta-guidance.
    "case-sara": [
      {
        text: "I shouldn't still be this upset—can we just move on?",
        suggestion: "[Internal] Lengthen exhale; soften chest; notice urge to redirect. [Meta] It makes sense this still hurts—let's slow for a moment and give that hurt a little room."
      },
      {
        text: "Sorry, I'm probably taking up too much time with this.",
        suggestion: "[Internal] Ground feet; release jaw; ease rescuing impulse. [Meta] You matter here—we can take time. Could we notice what shows up in you as you say that?"
      },
      {
        text: "I keep smiling so it doesn't get awkward.",
        suggestion: "[Internal] Sense face; soften eyes; slow pace. [Meta] The smile works hard—let's gently check what's underneath it right now."
      },
      {
        text: "I'm probably being dramatic.",
        suggestion: "[Internal] Note minimizing; re-center in warmth. [Meta] A part of you worries it's too much—let's stay with what feels most tender for a moment."
      },
      {
        text: "I can power through; I don't need to feel all of this.",
        suggestion: "[Internal] Notice fixing/efficiency pull; settle shoulders. [Meta] We can go at your pace—maybe we touch a small piece together and come back."
      },
      {
        text: "Let's talk about work goals instead.",
        suggestion: "[Internal] Track avoidance; keep tone warm. [Meta] We can be practical—and first, I want to be sure I’m with what’s hardest inside right now."
      },
      {
        text: "I hate that I'm needy.",
        suggestion: "[Internal] Feel feet; invite compassion; bracket urge to reassure. [Meta] Needing makes sense here—could we notice what that word 'needy' stirs in your body?"
      },
      {
        text: "If I cry, it means I'm weak.",
        suggestion: "[Internal] Soften voice; widen window; monitor arousal. [Meta] Tears can be strength here—let’s take one breath and see what the tears want you to know."
      },
      {
        text: "I don't want to make you uncomfortable.",
        suggestion: "[Internal] Notice people‑pleasing pull; re-attune. [Meta] I appreciate you caring about that—I want to be with you in what’s hard, even if it’s messy."
      },
      {
        text: "I'll be fine—others have it worse.",
        suggestion: "[Internal] Set down comparative mind; anchor. [Meta] Your pain matters too—could we pause with what’s hardest for just a moment together?"
      }
    ],
    "case-michael": [
      {
        text: "If someone disrespects me, I'm done—I'm not letting it slide.",
        suggestion: "[Internal] Feel feet; widen stance; soften chest; notice defensiveness. [Meta] I hear how fast that hits—before we solve it, can we slow with the sting underneath for a moment?"
      },
      {
        text: "Don't start with feelings; give me tools.",
        suggestion: "[Internal] Notice urge to justify approach; re-center. [Meta] We can be practical—and mapping what hits you first will make any tool work better."
      },
      {
        text: "My wife exaggerates—I’m not that angry.",
        suggestion: "[Internal] Track urge to argue; soften voice. [Meta] It sounds important to get this right—could we look together at what shows up in you right before it escalates?"
      },
      {
        text: "When people correct me, I go off—that’s on them.",
        suggestion: "[Internal] Note blame pull; ground. [Meta] That correction lands hard—let’s stay with what it touches in you for a moment."
      },
      {
        text: "I won’t look weak by apologizing.",
        suggestion: "[Internal] Sense jaw; release; slow pace. [Meta] It makes sense that feels risky—could we notice what ‘weak’ means in your body right then?"
      },
      {
        text: "Are you trying to calm me down right now?",
        suggestion: "[Internal] Welcome challenge; steady tone; reduce intensity. [Meta] I want to understand you first—let’s track what just spiked inside together."
      },
      {
        text: "This is a waste if we aren't fixing things.",
        suggestion: "[Internal] Set down perform/prove; re-attune. [Meta] I get wanting results—slowing for seconds here gives you control in the tough moments."
      },
      {
        text: "Don't bring up my dad—irrelevant.",
        suggestion: "[Internal] Notice urge to pursue; respect boundary; stay present. [Meta] Got it—we can stay here with what happens in you now when respect feels on the line."
      },
      {
        text: "People need to toughen up.",
        suggestion: "[Internal] Notice tightening; open posture. [Meta] Strength matters a lot to you—can we also notice what gets tender in you when things feel unfair?"
      },
      {
        text: "If I let up, I’ll get walked over.",
        suggestion: "[Internal] Soften shoulders; slow breath. [Meta] That makes sense—let’s look at the instant you feel one‑down so you can steer it."
      }
    ],
    "case-jason": [
      {
        text: "I think I'm wasting your time.",
        suggestion: "[Internal] Low belly breath; soften gaze; resist quick reassurance. [Meta] Thanks for saying that—can we notice together what shows up in you as you say it?"
      },
      {
        text: "I don't know what to say; my mind is blank.",
        suggestion: "[Internal] Slow pace; widen window; accept silence. [Meta] Blank is okay—we can stay with the blank for a moment and just notice sensations."
      },
      {
        text: "Don't make me close my eyes—I feel silly.",
        suggestion: "[Internal] Respect boundary; reduce intensity. [Meta] We can keep eyes open—let’s try a small step, maybe just feel feet on the floor together."
      },
      {
        text: "Sorry for being awkward.",
        suggestion: "[Internal] Note shame; keep warmth. [Meta] A lot of care shows up there—let’s go slow and find what feels safe to name."
      },
      {
        text: "Can we just talk strategies?",
        suggestion: "[Internal] Notice fixing impulse; re-attune. [Meta] We can add strategies—first let me make sure I’m getting what gets hardest inside."
      },
      {
        text: "I skipped the exercises—sorry.",
        suggestion: "[Internal] Ease urge to teach; steady tone. [Meta] Thanks for telling me—could we notice what got in the way and how it feels to say that now?"
      },
      {
        text: "I feel stupid when you ask about feelings.",
        suggestion: "[Internal] Soften voice; bracket urge to reassure. [Meta] That’s tough—maybe we name one small signal together instead of a big feeling."
      },
      {
        text: "Maybe therapy isn't for me.",
        suggestion: "[Internal] Track threat in me; ground. [Meta] A part of you wants to protect you—can we check what that part is worried will happen here?"
      },
      {
        text: "I'll never be good with people.",
        suggestion: "[Internal] Notice hopelessness; keep steady. [Meta] That sounds heavy—let’s slow and notice how that belief lands in your body right now."
      },
      {
        text: "I'm fine; it's not a big deal.",
        suggestion: "[Internal] Feel feet; resist pushing; stay curious. [Meta] We can keep it small—what’s the tiniest signal that tells you it’s ‘not a big deal’ and what might be under it?"
      }
    ],
    "case-laura": [
      {
        text: "I feel nothing—please don't push me to go there.",
        suggestion: "[Internal] Titrate; soften voice; drop agenda. [Meta] We won’t push—maybe we just notice the edges of ‘nothing’ together for a breath."
      },
      {
        text: "Raised voices outside make me want to leave.",
        suggestion: "[Internal] Track arousal; lengthen exhale; orient to room. [Meta] That makes sense—let’s ground together and notice what your body does right now."
      },
      {
        text: "I'd rather not talk about the past.",
        suggestion: "[Internal] Respect boundary; release pressure. [Meta] We can stay in the present—what’s happening in you as you say you’d rather not?"
      },
      {
        text: "I drink to sleep; it helps me turn off.",
        suggestion: "[Internal] Notice protectiveness; keep warmth; avoid shaming. [Meta] It’s been a way to get relief—could we gently notice what you’re turning off at night?"
      },
      {
        text: "Kindness makes me suspicious.",
        suggestion: "[Internal] Soften face; widen window; accept mistrust. [Meta] That makes sense—let’s go slow and see what part of you pulls back when kindness shows up."
      },
      {
        text: "Maybe this is just chemical.",
        suggestion: "[Internal] Set down urge to debate; stay collaborative. [Meta] Biology can play a role—we can still help your system feel safer here today."
      },
      {
        text: "Feeling is dangerous for me.",
        suggestion: "[Internal] Titrate; anchor feet/seat; slow pace. [Meta] We’ll keep it small and safe—just a sip at a time, and we stop if it’s too much."
      },
      {
        text: "I can't handle being pushed.",
        suggestion: "[Internal] Notice performance pressure; ease. [Meta] Thank you for telling me—let’s let you lead the speed today."
      },
      {
        text: "I am broken; nothing changes.",
        suggestion: "[Internal] Notice sadness in me; steady voice. [Meta] Hearing ‘broken’ is heavy—can we sit beside that feeling for a moment without trying to fix it?"
      },
      {
        text: "Keeping everything under control feels safer.",
        suggestion: "[Internal] Respect protector; stay gentle. [Meta] Control has kept you safe—maybe we notice what it’s protecting you from right now."
      }
    ],
    "case-carlos": [
      {
        text: "Respect me or get out—simple.",
        suggestion: "[Internal] Relax fists; widen stance; slow breath; keep tone steady. [Meta] Respect matters—let’s map the split second before the heat hits so you have more control."
      },
      {
        text: "Don't tell me to breathe.",
        suggestion: "[Internal] Notice urge to instruct; stay collaborative. [Meta] Got it—we can keep it real and still slow enough to see what hits you first."
      },
      {
        text: "I can't be soft; that's weak.",
        suggestion: "[Internal] Bracket educate/convince; attune to values. [Meta] Strength is important—maybe we see what ‘soft’ would risk for you."
      },
      {
        text: "People push me; I have to push back.",
        suggestion: "[Internal] Feel feet; steady pace. [Meta] Makes sense—can we look at what the first jolt feels like inside when you sense a push?"
      },
      {
        text: "My wife should show respect first.",
        suggestion: "[Internal] Note blame pull; keep warmth. [Meta] I hear that—let’s also notice what hurts in you right in those moments with her."
      },
      {
        text: "I'm not angry; I'm just firm.",
        suggestion: "[Internal] Notice minimization; soften voice. [Meta] Firm shows up—what happens in your chest and jaw that tells you it’s getting hot?"
      },
      {
        text: "Where I'm from you have to hit first.",
        suggestion: "[Internal] Respect history; reduce judgment. [Meta] That code kept you safe—let’s see what it protects in you right now."
      },
      {
        text: "Therapy is for people who can't handle life.",
        suggestion: "[Internal] Notice sting/defensiveness; settle. [Meta] You’ve handled a lot—here we’ll tune your control at flashpoints so life gets easier on you and yours."
      },
      {
        text: "If someone looks at me wrong, I'm going to react.",
        suggestion: "[Internal] Steady posture; slow tempo. [Meta] Let’s catch the first micro‑signal in your body so you can choose how to respond."
      },
      {
        text: "I'm only here because my wife wants it.",
        suggestion: "[Internal] Release urge to persuade; align. [Meta] I appreciate you showing up—we can focus on what would actually help at home for you."
      }
    ],
    "case-nina": [
      {
        text: "I shouldn't talk about myself—others need me more.",
        suggestion: "[Internal] Slow pace; notice over‑functioning pull. [Meta] You carry a lot—let’s give a little space to what it’s like for you right now."
      },
      {
        text: "I feel guilty even sitting here.",
        suggestion: "[Internal] Breathe low; soften tone; attune to guilt. [Meta] That guilt comes fast—can we notice where it lands in you for a moment?"
      },
      {
        text: "I shouldn't be angry—it’s not kind.",
        suggestion: "[Internal] Bracket urge to educate; keep warmth. [Meta] Anger shows you something mattered—maybe we name what got hurt without judging it."
      },
      {
        text: "If I rest, I’m lazy.",
        suggestion: "[Internal] Note inner critic; steady voice. [Meta] That message is harsh—let’s notice how your body tells you it needs rest."
      },
      {
        text: "Sorry for getting emotional.",
        suggestion: "[Internal] Ease rescuing impulse; slow tempo. [Meta] Your emotion makes sense here—let’s take one breath and let it be here a little."
      },
      {
        text: "Can we talk about helping my husband instead?",
        suggestion: "[Internal] Notice pull to collude; re‑attune. [Meta] We can include him—and first I want to be sure I’m with what’s heavy for you."
      },
      {
        text: "I should be grateful; I have a good life.",
        suggestion: "[Internal] Set down compare/shoulds; anchor. [Meta] Gratitude matters and pain still shows up—what’s the part that hurts asking for?"
      },
      {
        text: "I can handle it; I don’t need help.",
        suggestion: "[Internal] Notice independence pull; stay warm. [Meta] You’re strong—and we can share the load for a minute; what’s the heaviest piece today?"
      },
      {
        text: "I’m wasting your time.",
        suggestion: "[Internal] Resist reassure; keep presence. [Meta] I want to be here with you—could we notice what makes it feel like a waste right now?"
      },
      {
        text: "I apologize for crying.",
        suggestion: "[Internal] Soften voice; welcome tears. [Meta] Tears are welcome here—let’s take one slow breath and let them have a little space."
      }
    ],
    "case-aisha": [
      {
        text: "You didn't reply fast and I felt abandoned.",
        suggestion: "[Internal] Anchor feet/seat; lengthen exhale; steady gaze; notice urge to promise. [Meta] I’m here with you now—let’s breathe together and feel a little of how scary that was."
      },
      {
        text: "If you cancel, I don’t think I can come back.",
        suggestion: "[Internal] Track arousal; keep tempo slow; maintain boundaries. [Meta] Cancellations hit hard—we’ll talk about how to plan for that and stay close to what it stirs."
      },
      {
        text: "Tell me you care about me.",
        suggestion: "[Internal] Notice pull to reassure; stay authentic. [Meta] I care about what happens to you here—and I want to understand this ache with you, slowly."
      },
      {
        text: "When I feel empty, I want to hurt myself.",
        suggestion: "[Internal] Safety first; stabilize; consult plan as needed. [Meta] Thank you for telling me—let’s find a small, safe slice of that emptiness together right now."
      },
      {
        text: "I think you’ll leave like everyone else.",
        suggestion: "[Internal] Name countertransference; ground. [Meta] That fear makes sense given what you’ve lived—let’s keep checking what helps you feel held here."
      },
      {
        text: "I hate you—don’t leave me.",
        suggestion: "[Internal] Regulate; soften face; hold boundary. [Meta] I hear both the anger and the reach—let’s stay steady together while we feel a little of both."
      },
      {
        text: "I keep checking if you’re looking at me.",
        suggestion: "[Internal] Stay present; warm eye contact; slow pace. [Meta] Being seen matters right now—let’s notice what settles as you feel me here with you."
      },
      {
        text: "Do you even want me here?",
        suggestion: "[Internal] Notice sting; re-attune; steady tone. [Meta] I do want to be here with you—can we notice what part fears I don’t and what it needs?"
      },
      {
        text: "I feel disgusting because of what was done to me.",
        suggestion: "[Internal] Hold sorrow; avoid fixing; titrate contact. [Meta] I’m so sorry that happened—let’s go gently and let that feeling be seen a little with me."
      },
      {
        text: "Promise you won’t give up on me.",
        suggestion: "[Internal] Avoid absolute promises; keep frame; stay warm. [Meta] I’m committed to this work with you—and when fear spikes, we’ll keep naming it and finding safety together."
      }
    ],
    "case-david": [
      {
        text: "Convince me you’re worth my time.",
        suggestion: "[Internal] Notice sting/perform impulse; soften chest; steady tone. [Meta] Your time matters—before we decide fit, I want to understand what you most need from this."
      },
      {
        text: "My success speaks for itself; she overreacts.",
        suggestion: "[Internal] Bracket urge to debate; stay curious. [Meta] It sounds like feeling misunderstood at home—could we look at what gets touched in you there?"
      },
      {
        text: "I need efficient solutions, not feelings.",
        suggestion: "[Internal] Set down justify/prove; remain warm. [Meta] We’ll be efficient—and first minutes spent mapping triggers will save you hours later."
      },
      {
        text: "Are you experienced enough for my case?",
        suggestion: "[Internal] Soften face; regulate pride/defense. [Meta] It makes sense to ask—let’s also clarify what a good outcome looks like for you."
      },
      {
        text: "People call me a narcissist because they’re jealous.",
        suggestion: "[Internal] Note reaction; keep voice even. [Meta] Being labeled sounds painful—can we notice what happens in you when you hear that word?"
      },
      {
        text: "I don’t make mistakes—others do.",
        suggestion: "[Internal] Resist power struggle; return to impact. [Meta] When something goes wrong, what’s hardest inside for you in that moment?"
      },
      {
        text: "I expect results quickly.",
        suggestion: "[Internal] Ease urgency; hold frame. [Meta] Let’s define the first small result you’d actually feel at home or work."
      },
      {
        text: "Don’t psychoanalyze me.",
        suggestion: "[Internal] Welcome boundary; reduce jargon. [Meta] We’ll keep it simple and practical—starting with what you feel in tough moments."
      },
      {
        text: "This better not be like my last therapist.",
        suggestion: "[Internal] Notice comparison pull; stay present. [Meta] Sounds like you were disappointed—what would you want different here?"
      },
      {
        text: "Let’s keep this focused on fixing my wife.",
        suggestion: "[Internal] Avoid collusion; re‑align to client. [Meta] We can talk about the relationship, and I also want to help you have more choice in your own reactions."
      }
    ],
    "case-marcus": [
      {
        text: "I’m fine. Nothing to talk about.",
        suggestion: "[Internal] Accept quiet; soften expectations; slow breath. [Meta] We can keep it simple—what’s ‘fine’ like in your body right now, even if it’s just neutral?"
      },
      {
        text: "Talking doesn’t change anything.",
        suggestion: "[Internal] Notice hopelessness in me; steady tone. [Meta] You’re right it can’t change the past—sometimes it changes how your body carries it; we can try a tiny step if you like."
      },
      {
        text: "Nightmares are just part of it.",
        suggestion: "[Internal] Track arousal; titrate; orient to room. [Meta] As you mention them, let’s notice together what your body does right now—we’ll keep it brief."
      },
      {
        text: "I prefer to keep to myself.",
        suggestion: "[Internal] Respect protector; stay warm. [Meta] Solitude has kept you safe—maybe we notice what feels safest here today."
      },
      {
        text: "Feelings make things worse.",
        suggestion: "[Internal] Titrate; keep contact light. [Meta] We can stay at the edge—just a small signal and then we come back."
      },
      {
        text: "I don’t trust therapists.",
        suggestion: "[Internal] Notice sting; welcome skepticism. [Meta] I appreciate you saying that—we can build trust slowly and you set the pace."
      },
      {
        text: "I don’t remember much—it’s all a blur.",
        suggestion: "[Internal] Slow; avoid pressing for detail. [Meta] A blur is okay—maybe we notice one present‑moment sensation together."
      },
      {
        text: "Let’s stick to practical tips.",
        suggestion: "[Internal] Don’t argue; align and bridge. [Meta] We can add practical tools—and first we’ll find the exact moments they’re needed."
      },
      {
        text: "I don’t see the point.",
        suggestion: "[Internal] Feel feet; steady. [Meta] We can check what a small ‘win’ would even look like and aim only for that today."
      },
      {
        text: "I can handle it alone.",
        suggestion: "[Internal] Respect independence; stay near. [Meta] You’ve handled a lot—if it helps, we can share a few minutes of it together here."
      }
    ]
  },
  "empathic-understanding": {
    "case-sara": [
      {
        text: "Evenings make the apartment feel huge and I feel so alone.",
        suggestion: "Evenings bring a heavy loneliness that fills the space."
      },
      {
        text: "I keep telling friends I'm fine, but I'm exhausted from pretending.",
        suggestion: "Keeping up the mask is tiring, and underneath you feel worn and sad."
      },
      {
        text: "When I see his name anywhere, my stomach drops.",
        suggestion: "Seeing his name punches your stomach and the loss rushes back."
      },
      {
        text: "I hate that I still check my phone hoping it's him.",
        suggestion: "There is a tender hope that still reaches, even while it hurts."
      },
      {
        text: "Waking up is the worst—those first seconds before I remember.",
        suggestion: "Mornings hit hard as the memory crashes in after a brief lightness."
      },
      {
        text: "I feel embarrassed that I'm not over it yet.",
        suggestion: "Embarrassment sits on top of a grief that hasn't finished."
      },
      {
        text: "I keep busy so I don't think, and then I crash at night.",
        suggestion: "Busyness numbs it by day and the sadness floods back at night."
      },
      {
        text: "I don't want to burden anyone with this.",
        suggestion: "You are worried about burdening people while carrying a lot alone."
      },
      {
        text: "Seeing couples makes me feel like I'm not wanted.",
        suggestion: "Couples stir that not‑wanted feeling and sting your heart."
      },
      {
        text: "Part of me wonders if I'm just not lovable.",
        suggestion: "A painful doubt shows up that questions your worth."
      }
    ],
    "case-michael": [
      {
        text: "When someone points out a mistake, I feel humiliated and I snap.",
        suggestion: "A correction lands like humiliation and anger surges to cover it."
      },
      {
        text: "I can't stand being told to calm down.",
        suggestion: "\"Calm down\" feels dismissive and lights up the heat in you."
      },
      {
        text: "After I yell, I feel sick with shame.",
        suggestion: "After the flare, shame settles in and you feel sick about it."
      },
      {
        text: "I scan for disrespect everywhere.",
        suggestion: "You stay on guard for signs of disrespect, braced to defend."
      },
      {
        text: "If I don't know an answer, I feel small.",
        suggestion: "Not knowing makes you feel small and exposed."
      },
      {
        text: "I overprepare so no one can catch me.",
        suggestion: "Preparation is your way to protect against being called out."
      },
      {
        text: "My wife's tone can set me off before I think.",
        suggestion: "A tone lands like a put‑down and your anger jumps in fast."
      },
      {
        text: "I hate apologizing; it makes me feel weak.",
        suggestion: "Apologizing feels like losing ground and being weak."
      },
      {
        text: "I tell myself I'm just holding standards.",
        suggestion: "You frame it as standards while inside it hurts to feel judged."
      },
      {
        text: "I lie awake replaying what I said.",
        suggestion: "Nights bring the replay and the heavy regret."
      }
    ],
    "case-jason": [
      {
        text: "When it's my turn, my mind goes blank and my throat tightens.",
        suggestion: "Being in the spotlight blanks your mind and tightens your throat."
      },
      {
        text: "I worry people think I'm awkward.",
        suggestion: "You fear being seen as awkward and judged."
      },
      {
        text: "I want to go to things and then I cancel.",
        suggestion: "You long to join, and anxiety pulls you back at the last minute."
      },
      {
        text: "Compliments don't stick; I don't believe them.",
        suggestion: "Praise slides off because that inner critic is loud."
      },
      {
        text: "I rehearse texts for ages and still don't send.",
        suggestion: "You over‑check every word, afraid of getting it wrong."
      },
      {
        text: "I eat lunch at my desk to avoid the break room.",
        suggestion: "You keep to yourself to feel safe from scrutiny."
      },
      {
        text: "After I talk, I cringe for hours.",
        suggestion: "After speaking you replay and cringe, flooded with self‑doubt."
      },
      {
        text: "I feel invisible in groups.",
        suggestion: "In groups you feel unseen and outside the circle."
      },
      {
        text: "My hands shake when I introduce myself.",
        suggestion: "Introductions bring shakes and a rush of nerves."
      },
      {
        text: "Sunday nights feel painfully lonely.",
        suggestion: "Sunday nights carry a heavy loneliness and fear of being alone."
      }
    ],
    "case-laura": [
      {
        text: "Most days feel flat, like I'm behind glass.",
        suggestion: "Life feels muted, as if you're behind glass and out of reach."
      },
      {
        text: "Raised voices make my body freeze.",
        suggestion: "Loud voices drop your stomach and your body freezes for safety."
      },
      {
        text: "Kindness makes me back away.",
        suggestion: "Warmth comes close and a protector pulls you back."
      },
      {
        text: "I drink at night to quiet my mind.",
        suggestion: "The wine helps you switch off when your system won't settle."
      },
      {
        text: "I want closeness and then go numb.",
        suggestion: "You want closeness, and numbness steps in to keep you safe."
      },
      {
        text: "I feel guilty for not feeling much.",
        suggestion: "There is guilt about the numbness even as it helps you cope."
      },
      {
        text: "I wake up already tense, like I'm on guard.",
        suggestion: "Your body wakes on guard, braced for something to happen."
      },
      {
        text: "I avoid movies with fighting.",
        suggestion: "Conflict scenes yank your body into old fear, so you avoid them."
      },
      {
        text: "Good news doesn't reach me.",
        suggestion: "Good things land faintly, like they can't get through the fog."
      },
      {
        text: "I forget what I even enjoy.",
        suggestion: "It's hard to remember pleasure when everything feels distant."
      }
    ],
    "case-carlos": [
      {
        text: "A sideways look lights me up.",
        suggestion: "A sideways look sparks heat and your body gears to defend."
      },
      {
        text: "I hate that my kid saw me slam the door.",
        suggestion: "Seeing his face hurts and shows how much this matters to you."
      },
      {
        text: "If I back down, I feel like nothing.",
        suggestion: "Backing down feels like being small and walked over."
      },
      {
        text: "I pace and clench when I'm angry.",
        suggestion: "Anger tightens your jaw and drives you to pace off the charge."
      },
      {
        text: "After I blow up, I feel ashamed.",
        suggestion: "After the blast, shame comes in and weighs on you."
      },
      {
        text: "I don't trust calm; it feels unsafe.",
        suggestion: "Calm reads as unsafe, like letting your guard down invites harm."
      },
      {
        text: "My father's voice calls me soft in my head.",
        suggestion: "That old message about softness still stings and pushes you hard."
      },
      {
        text: "I want respect more than anything.",
        suggestion: "Respect means safety to you, so challenges land like threats."
      },
      {
        text: "I punch walls instead of people.",
        suggestion: "You turn the heat on objects to keep it off people, even as it scares you."
      },
      {
        text: "I want my family to feel safe with me.",
        suggestion: "You care deeply and want your home to feel safe around you."
      }
    ],
    "case-nina": [
      {
        text: "Asking for help makes me feel guilty.",
        suggestion: "The moment you ask, guilt floods in and you pull back."
      },
      {
        text: "I do everything and feel invisible.",
        suggestion: "Carrying so much leaves you feeling unseen and alone."
      },
      {
        text: "Saying no makes my stomach knot.",
        suggestion: "A simple no ties your stomach in anxious knots."
      },
      {
        text: "I keep moving so I don't feel resentful.",
        suggestion: "Staying busy pushes the resentment and sadness away."
      },
      {
        text: "When I rest, I hear a voice call me lazy.",
        suggestion: "Rest brings a harsh voice that shames you."
      },
      {
        text: "I apologize for even small requests.",
        suggestion: "Even small needs come with an apology and fear of burdening."
      },
      {
        text: "I explode sometimes and then feel awful.",
        suggestion: "After the snap, you feel awful and ashamed."
      },
      {
        text: "I dream about someone taking care of me.",
        suggestion: "There is a quiet longing to be cared for the way you care for others."
      },
      {
        text: "I compare myself to other moms and feel like I fail.",
        suggestion: "Comparison leaves you feeling not good enough and ashamed."
      },
      {
        text: "I get headaches when I'm overwhelmed.",
        suggestion: "The stress builds up in your body as pounding pain."
      }
    ],
    "case-aisha": [
      {
        text: "If you look away, I panic.",
        suggestion: "A glance away feels like abandonment and panic surges."
      },
      {
        text: "When a text doesn't come, I can't breathe.",
        suggestion: "The silence grabs your breath and feels like a drop."
      },
      {
        text: "I say don't leave me and then I yell.",
        suggestion: "You plead and then anger erupts when fear spikes."
      },
      {
        text: "The emptiness feels like a hole in my chest.",
        suggestion: "There is a deep, aching emptiness that hurts so much."
      },
      {
        text: "I scratch at my skin to feel something.",
        suggestion: "You reach for sensation when the numb and pain feel unbearable."
      },
      {
        text: "If someone cancels, I want to quit.",
        suggestion: "A cancel stings like being dropped and you want to protect yourself."
      },
      {
        text: "I hate myself after I blow up.",
        suggestion: "After the blow‑up, shame pounds hard and you turn on yourself."
      },
      {
        text: "I test people to see if they care.",
        suggestion: "Testing is a way you try to feel wanted and safe."
      },
      {
        text: "Goodbyes make me dizzy.",
        suggestion: "Partings make your world tilt with fear and sadness."
      },
      {
        text: "I don't know who I am without someone.",
        suggestion: "Without a person close, you feel empty and unsure of yourself."
      }
    ],
    "case-david": [
      {
        text: "Being called cold makes me bristle.",
        suggestion: "That word stings and you harden fast to cover the hurt."
      },
      {
        text: "If I'm not on top, I feel worthless.",
        suggestion: "Not being on top feels like you are nothing."
      },
      {
        text: "I list accomplishments when I feel attacked.",
        suggestion: "You reach for achievements as armor when you feel judged."
      },
      {
        text: "Praise feels good then it leaks out.",
        suggestion: "Admiration lands and drains away, leaving you hollow."
      },
      {
        text: "I hate admitting I'm wrong.",
        suggestion: "Admitting wrong feels exposing and small."
      },
      {
        text: "My kids' tears make me impatient.",
        suggestion: "Their tears are hard to sit with and you feel lost there."
      },
      {
        text: "Since the affair, the house feels cold.",
        suggestion: "Things look fine and still there is a chill in your home."
      },
      {
        text: "My father's standards still run me.",
        suggestion: "Those high standards still drive you and sting when you fall short."
      },
      {
        text: "I think therapy is a waste sometimes.",
        suggestion: "Skepticism shows up, and underneath you still want things to change."
      },
      {
        text: "I fear being ordinary.",
        suggestion: "Ordinary feels like being unseen and unworthy."
      }
    ],
    "case-marcus": [
      {
        text: "Most days I feel nothing.",
        suggestion: "Numbness sits over you like a layer that keeps feeling out."
      },
      {
        text: "Then out of nowhere, a wave hits me.",
        suggestion: "Waves crash in suddenly and take you under."
      },
      {
        text: "Nightmares leave me wired and empty.",
        suggestion: "Nightmares jolt you awake—wired and hollow at once."
      },
      {
        text: "I avoid people because it feels safer.",
        suggestion: "Distance feels safer than the risk of being hurt again."
      },
      {
        text: "I sit in the dark after work.",
        suggestion: "The quiet, dark room matches the emptiness inside."
      },
      {
        text: "Good moments feel unreal.",
        suggestion: "Goodness feels far away, like you cannot touch it."
      },
      {
        text: "Loud noises make me jump.",
        suggestion: "Sudden sounds trigger your body into high alert."
      },
      {
        text: "I don't pick up when family calls.",
        suggestion: "You keep space to avoid getting pulled into feelings."
      },
      {
        text: "I sometimes think it wouldn't matter if I disappeared.",
        suggestion: "Hopelessness whispers that you do not matter."
      },
      {
        text: "I want connection and can't tolerate it.",
        suggestion: "You want closeness and your system shuts down when it gets near."
      }
    ]
  },
  "empathic-affirmation-validation": {
    "case-sara": [
      {
        text: "I keep checking his social media even though it wrecks me.",
        suggestion: "Of course you keep looking; after a loss like this, anyone would keep reaching even if it hurts."
      },
      {
        text: "I keep saying 'I'm fine' even when my eyes are wet.",
        suggestion: "It makes sense you try to hold it together; you have carried so much on your own."
      },
      {
        text: "If I had been more fun or easier, maybe he'd have stayed.",
        suggestion: "No wonder you search for what you could have done; self‑blame tries to make sense of the pain."
      },
      {
        text: "Nights are the hardest—when it gets quiet I feel unwanted.",
        suggestion: "The quiet can amplify the hurt; it makes sense it feels like being unwanted."
      },
      {
        text: "I started to text him and deleted it a dozen times.",
        suggestion: "It makes sense a part of you wants contact and another protects you from more hurt."
      },
      {
        text: "When I wake up, I forget for a second and then it slams me.",
        suggestion: "Anyone would feel that crash on waking; it makes sense it hits so hard."
      },
      {
        text: "I apologize for taking up space with this sadness.",
        suggestion: "Of course you worry about taking space; your sadness belongs here and makes sense."
      },
      {
        text: "Food doesn't taste like anything and my stomach drops a lot.",
        suggestion: "That hollow, dropped‑stomach feeling fits how deeply this landed."
      },
      {
        text: "Friends invite me out and I make excuses because I don't want to cry in public.",
        suggestion: "It makes sense you protect yourself from more hurt even when you want connection."
      },
      {
        text: "Part of me thinks love just isn't for me.",
        suggestion: "Given what you've been through, it makes sense that belief shows up; I hear how lonely this feels."
      }
    ],
    "case-michael": [
      {
        text: "When traffic is bad and someone cuts me off, my face goes hot and I explode.",
        suggestion: "It makes sense your body surges to defend when you feel disrespected or boxed in."
      },
      {
        text: "If I don't have the answer, I feel exposed and I bluff.",
        suggestion: "Given how you were judged, of course not knowing can feel like being exposed."
      },
      {
        text: "Apologizing makes me feel small, like I'm giving up ground.",
        suggestion: "It makes sense an apology can feel like losing status when standing tall has meant safety."
      },
      {
        text: "At home, a sigh or eye roll sets me off before I think.",
        suggestion: "No wonder those small cues sting; they can land like disrespect and light up old hurt."
      },
      {
        text: "I keep score in my head so no one has leverage on me.",
        suggestion: "It makes sense you track everything to guard against feeling one‑down."
      },
      {
        text: "When my kid asks why I'm angry, I feel ashamed and stuck.",
        suggestion: "Of course shame hits there; it shows how much you care about being the dad you want to be."
      },
      {
        text: "I slam doors because it feels better than feeling small.",
        suggestion: "It makes sense anger steps in to cover that small, stung feeling."
      },
      {
        text: "If someone challenges me in public, I double down even if I'm wrong.",
        suggestion: "Given how threatening it feels to be one‑down, it makes sense you dig in to protect yourself."
      },
      {
        text: "I resent needing therapy; it feels like weakness.",
        suggestion: "Of course it feels risky; coming here also shows how much you want things to be different."
      },
      {
        text: "After the blowups, I lie awake hating myself.",
        suggestion: "Anyone would feel awful after those moments; it makes sense shame keeps you up."
      }
    ],
    "case-jason": [
      {
        text: "My heart pounds just hearing my name in a meeting.",
        suggestion: "Of course your heart races when being seen feels risky."
      },
      {
        text: "I avoid eye contact so people won't notice me.",
        suggestion: "It makes sense you try to stay invisible when attention feels dangerous."
      },
      {
        text: "I pretend to text on my phone to escape small talk.",
        suggestion: "Of course you look for cover when you feel exposed; anyone would."
      },
      {
        text: "I worry I'm boring and people are just being polite.",
        suggestion: "It makes sense that harsh inner voice makes you doubt yourself around others."
      },
      {
        text: "Compliments bounce off; I don't believe them.",
        suggestion: "Given how loud the self‑criticism is, of course praise is hard to take in."
      },
      {
        text: "After I talk, I replay every sentence and cringe.",
        suggestion: "It makes sense you replay it all when you care so much about belonging."
      },
      {
        text: "Crowded rooms make my chest tight and I look for the door.",
        suggestion: "Of course your body scans for exits when social spaces feel threatening."
      },
      {
        text: "I compare myself to everyone and always come up short.",
        suggestion: "It makes sense comparison steals your worth when shame is nearby."
      },
      {
        text: "My voice trembles when I introduce myself.",
        suggestion: "A trembling voice makes sense when your body is bracing for judgment."
      },
      {
        text: "Some nights I'm sure I'll always be alone.",
        suggestion: "It makes sense the nights bring that heavy loneliness; I hear how painful it is."
      }
    ],
    "case-laura": [
      {
        text: "Most days feel flat, like I'm behind glass watching life happen.",
        suggestion: "It makes sense things feel muted after what you've lived through."
      },
      {
        text: "If voices rise, my stomach drops and I go somewhere else in my head.",
        suggestion: "Of course your body checks out around raised voices; it learned that to stay safe."
      },
      {
        text: "When someone is kind to me, I feel numb or suspicious.",
        suggestion: "Kindness can feel confusing when safety has been uncertain; that makes sense."
      },
      {
        text: "I take long showers just to feel something warm.",
        suggestion: "It makes sense you reach for small, safe sensations when emotions feel far away."
      },
      {
        text: "Nice days still feel gray to me.",
        suggestion: "Of course joy feels dulled when your system has been carrying so much."
      },
      {
        text: "Being touched, even kindly, startles me.",
        suggestion: "It makes sense your body startles; it learned to protect you."
      },
      {
        text: "When sadness breaks through, it scares me and I shut it down.",
        suggestion: "Of course the feelings are scary; shutting them down has been a way to cope."
      },
      {
        text: "I apologize for needing comfort.",
        suggestion: "It makes sense you feel hesitant to need; your needs matter here."
      },
      {
        text: "I forget what I even like to do.",
        suggestion: "After so much bracing, it makes sense your interests feel far away right now."
      },
      {
        text: "My body never fully relaxes, even in bed.",
        suggestion: "Of course your body stays on alert; it learned to survive that way."
      }
    ],
    "case-carlos": [
      {
        text: "A sideways look and my jaw locks before I know it.",
        suggestion: "It makes sense your body gears up fast when you sense disrespect."
      },
      {
        text: "If I don't come in strong, people will walk all over me.",
        suggestion: "Given where you came from, of course standing firm has felt like safety."
      },
      {
        text: "At my kid's game I yelled at the ref and felt sick later.",
        suggestion: "Anyone would ache about that; it makes sense it matters so much to you."
      },
      {
        text: "When I'm questioned, I feel small and puff up fast.",
        suggestion: "It makes sense a challenge can shrink you inside and anger steps in to protect."
      },
      {
        text: "I clench my fists and pace; it feels like a fight is coming.",
        suggestion: "Of course your body readies for a fight; it learned that was how to stay safe."
      },
      {
        text: "I break things and then regret it.",
        suggestion: "It makes sense the heat takes over fast and regret follows when you cool."
      },
      {
        text: "Coworkers steer clear and I feel ashamed.",
        suggestion: "Of course that stings; it makes sense you feel both protective and ashamed."
      },
      {
        text: "I leave the room so I don't explode, then feel weak for walking away.",
        suggestion: "It makes sense walking away feels weak when strength has meant standing your ground."
      },
      {
        text: "I don't trust calm—like it means I'm being walked over.",
        suggestion: "Given your history, it makes sense calm can feel dangerous instead of safe."
      },
      {
        text: "I want my family to feel safe with me.",
        suggestion: "Wanting safety for them makes sense and shows your heart and commitment."
      }
    ],
    "case-nina": [
      {
        text: "If I rest, I feel like I'm doing something wrong.",
        suggestion: "It makes sense rest feels wrong when you were taught to earn your place by doing."
      },
      {
        text: "Saying no makes me anxious all day.",
        suggestion: "Of course a 'no' stirs anxiety given those old rules."
      },
      {
        text: "I do everything and still feel invisible.",
        suggestion: "Anyone carrying that much would feel unseen; it makes sense you long to be noticed."
      },
      {
        text: "When I get angry, I immediately feel guilty.",
        suggestion: "It makes sense guilt follows anger when you learned your needs were less important."
      },
      {
        text: "Asking for help makes me feel like a burden.",
        suggestion: "Asking for help feeling like a burden makes sense after years of being the helper."
      },
      {
        text: "If the house is messy, I feel like a bad person.",
        suggestion: "Of course mess links to shame when worth got tied to performance."
      },
      {
        text: "I tell myself others have it worse so I shouldn't feel this way.",
        suggestion: "It makes sense you minimize your pain; you've had to for a long time."
      },
      {
        text: "When I'm sick, I still push through and then crash.",
        suggestion: "Of course you push through; your body is showing how much this has cost."
      },
      {
        text: "I feel panic when someone seems disappointed in me.",
        suggestion: "It makes sense disappointment feels scary when love has felt conditional."
      },
      {
        text: "Part of me believes I'm lovable only when I'm useful.",
        suggestion: "Given your history, it makes sense love has felt tied to doing rather than being."
      }
    ],
    "case-aisha": [
      {
        text: "I watched the door most of session to make sure you won't leave.",
        suggestion: "Of course you keep an eye on the door after so many goodbyes; I hear how much safety matters."
      },
      {
        text: "I ripped up photos after the breakup and felt both powerful and empty.",
        suggestion: "It makes sense you reached for anything to get relief; the emptiness afterward is understandable."
      },
      {
        text: "Sometimes I want to crawl out of my skin.",
        suggestion: "That urge makes sense when the pain and panic feel unbearable; I'm glad you said it here."
      },
      {
        text: "When you take notes, I think you hate me and I want to bolt.",
        suggestion: "Given how often you've been misunderstood, it makes sense you read danger and want out fast."
      },
      {
        text: "I text someone twenty times and then block them.",
        suggestion: "It makes sense you reach hard for closeness and then protect yourself when fear spikes."
      },
      {
        text: "I feel dirty because of what was done to me.",
        suggestion: "Feeling contaminated makes heartbreaking sense after what you endured; I'm so sorry that happened to you."
      },
      {
        text: "Kind words make me sob and also want to run.",
        suggestion: "Of course being seen lands big—soothing and scary at the same time."
      },
      {
        text: "When you look away, I think I'm boring and I get furious.",
        suggestion: "It makes sense a glance away feels like rejection and lights up anger to protect you."
      },
      {
        text: "I hear a voice saying I'm trash and unlovable.",
        suggestion: "Given the betrayals you've survived, it makes sense that cruel voice shows up and feels true."
      },
      {
        text: "I stare at the clock to make sure you won't end early.",
        suggestion: "Of course you watch the time; endings have been painful, so it makes sense you brace for them."
      }
    ],
    "case-david": [
      {
        text: "When my wife brings up feelings, I feel cornered and want to argue the facts.",
        suggestion: "It makes sense you feel exposed there; facts can feel safer when emotions sting like criticism."
      },
      {
        text: "I want credit for everything I do; when I don't get it, I feel rage.",
        suggestion: "Of course being unseen hits hard; shame and anger often travel together in that spot."
      },
      {
        text: "I compare myself to other dads and feel like a fraud.",
        suggestion: "It makes sense comparison stirs shame when worth has felt tied to performance."
      },
      {
        text: "Apologies feel humiliating to me.",
        suggestion: "It makes sense apologizing can feel small when you learned vulnerability cost you."
      },
      {
        text: "I plan perfect vacations so we look good from the outside.",
        suggestion: "Of course you strive to look put‑together; it makes sense image has felt like protection."
      },
      {
        text: "I dread being ordinary; it feels like failing.",
        suggestion: "It makes sense 'ordinary' feels threatening when being exceptional has equaled worth."
      },
      {
        text: "I say I'm fine while feeling empty.",
        suggestion: "Of course you cover the emptiness; it makes sense to hide what feels tender."
      },
      {
        text: "I brag to get respect and then feel hollow afterward.",
        suggestion: "It makes sense you reach for admiration to fill a hurt place and feel hollow after."
      },
      {
        text: "I feel like a disappointment to my father even now.",
        suggestion: "Of course that old wound still stings; anyone would ache there."
      },
      {
        text: "When my team outshines me, I feel threatened instead of proud.",
        suggestion: "It makes sense success around you pricks that fear of being less than."
      }
    ],
    "case-marcus": [
      {
        text: "Most days I feel like a ghost moving through routines.",
        suggestion: "It makes sense you feel detached after so much trauma; numbness has helped you survive."
      },
      {
        text: "I keep the TV on to drown out my thoughts.",
        suggestion: "Of course you look for ways to quiet what feels overwhelming inside."
      },
      {
        text: "I sit in the car before going inside because I can't face the quiet.",
        suggestion: "It makes sense the quiet is hard; it can bring the weight back all at once."
      },
      {
        text: "Loud bangs make me jump and then I get angry at myself for reacting.",
        suggestion: "Of course your body startles; getting angry at yourself afterward makes sense when you wish it were different."
      },
      {
        text: "Holidays feel hollow; I don't feel anything I'm supposed to feel.",
        suggestion: "It makes sense holidays land flat when your system has been so shut down for safety."
      },
      {
        text: "I avoid reminders of my service because they open the floodgates.",
        suggestion: "Avoiding reminders makes sense when the waves can feel too big to bear."
      },
      {
        text: "I keep my apartment dark and don't invite people over.",
        suggestion: "Of course keeping things small and dark can feel safer right now."
      },
      {
        text: "I don't remember the last time I really laughed.",
        suggestion: "It makes sense joy feels far away when you've carried so much pain."
      },
      {
        text: "I don't want to need anyone.",
        suggestion: "Given what you've lived, it makes sense needing others feels dangerous."
      },
      {
        text: "Sometimes I think I'm better off alone forever.",
        suggestion: "It makes sense alone feels safer, even though it's lonely; I'm glad you're saying it here."
      }
    ]
  },
  "exploratory-questions": {
    "case-sara": [
      {
        text: "When I see his name pop up anywhere, my stomach drops and I feel small.",
        suggestion: "As you notice that drop right now, where do you feel it most and what is the quality—tight, heavy, hollow?"
      },
      {
        text: "I tell friends I am fine while my throat feels tight.",
        suggestion: "Staying with the tight throat for a moment, what does it want you to know about what is hard to say?"
      },
      {
        text: "Evenings feel endless and I clean to keep busy.",
        suggestion: "As you picture tonight, where in your body do you notice the urge to keep busy, and what happens if we pause with it for two breaths?"
      },
      {
        text: "I almost texted him sorry even though I did nothing wrong.",
        suggestion: "If we stay with the part that wants to apologize, what is it hoping for, and what fear is it trying to soothe?"
      },
      {
        text: "Sometimes I delete photos and then go looking for them again.",
        suggestion: "There is a push and pull there; as we sit with both sides, what does each part want most for you right now?"
      },
      {
        text: "When someone is kind to me, I look down.",
        suggestion: "As your eyes drop, what feeling is underneath the kindness—and where do you sense it in your body?"
      },
      {
        text: "I wake up and it hits me all over again.",
        suggestion: "At the moment it returns, what signal tells you it is back, and where does that signal land first?"
      },
      {
        text: "I feel embarrassed that I am still this sad.",
        suggestion: "Where does embarrassment sit in you, and underneath it, what feeling wants attention right now?"
      },
      {
        text: "Seeing couples makes my chest ache and I want to leave.",
        suggestion: "Can we stay with that ache for a breath—what is it like, and what does it seem to long for?"
      },
      {
        text: "I avoid places we used to go.",
        suggestion: "As you picture one place, what body signal says 'not safe,' and what would help that part feel one percent safer?"
      }
    ],
    "case-michael": [
      {
        text: "When someone corrects me, heat shoots up my neck.",
        suggestion: "In the instant before the heat, what flicker do you notice in your chest or throat?"
      },
      {
        text: "A sigh from my wife makes me bristle.",
        suggestion: "As you hear that sigh right now, what happens in your body, and what does it seem to protect?"
      },
      {
        text: "After I blow up, there is a pit in my stomach.",
        suggestion: "If that pit had a size, shape, or a few words, what would it be like?"
      },
      {
        text: "I scan rooms for disrespect without meaning to.",
        suggestion: "As you imagine scanning, where tenses first, and what is that part guarding against most?"
      },
      {
        text: "Apologizing makes me feel one‑down.",
        suggestion: "Where in your body do you feel 'one‑down,' and what would help that place feel a little steadier?"
      },
      {
        text: "When I am unsure of an answer, my chest tightens.",
        suggestion: "What is that tightness like right now—hard, hot, cramped—and what does it hope to prevent?"
      },
      {
        text: "I double‑check everything to avoid mistakes.",
        suggestion: "As you picture double‑checking, what fear is nearby, and where do you sense it first?"
      },
      {
        text: "I slam doors instead of saying I was hurt.",
        suggestion: "In the heartbeat before the slam, what hurt shows up, and how do you feel it in your body?"
      },
      {
        text: "Being told to calm down makes me explode.",
        suggestion: "Hearing those words in your mind now, what bodily signal jumps first and where does it land?"
      },
      {
        text: "I hate feeling weak.",
        suggestion: "As you say 'weak' here, what image or sensation comes, and what would help that part feel a bit safer?"
      }
    ],
    "case-jason": [
      {
        text: "When it is my turn to speak, my throat tightens and my mind goes white.",
        suggestion: "As we stay with the tight throat for two slow breaths, what starts to show up under the whiteout, even a hint?"
      },
      {
        text: "My voice shakes when I introduce myself.",
        suggestion: "Notice the shake right now—where do you feel it most, and what does it want you to do?"
      },
      {
        text: "I rehearse texts and then delete them.",
        suggestion: "In the second before delete, what feeling is strongest—fear, shame—and where is it in your body?"
      },
      {
        text: "If someone laughs, I assume it is about me.",
        suggestion: "As you imagine that laugh, what happens in your stomach or chest right now?"
      },
      {
        text: "I avoid eye contact so people will not notice me.",
        suggestion: "As your eyes look down, what does your body say about being seen—what shows up first?"
      },
      {
        text: "After meetings I cringe for hours.",
        suggestion: "If we pick one cringe moment, what is the worst frame, and how do you sense it in your body?"
      },
      {
        text: "Crowded rooms make me search for exits.",
        suggestion: "Right now, what in your body tells you 'I need an exit,' and where do you feel it?"
      },
      {
        text: "Compliments do not stick to me.",
        suggestion: "As you try to let one kind word land, where does it bounce off, and what seems to block it?"
      },
      {
        text: "I say I am busy to avoid small talk.",
        suggestion: "As you picture small talk, what is scariest, and where do you feel that in your body?"
      },
      {
        text: "Sunday nights feel heavy and lonely.",
        suggestion: "Can we stay with that heaviness for two breaths—what is its texture, and what does it seem to need most?"
      }
    ],
    "case-laura": [
      {
        text: "Most days feel muted, like I am behind glass.",
        suggestion: "As you notice the glass now, where do you feel it, and what lets you know it is there—numbness, distance, coolness?"
      },
      {
        text: "Raised voices make my stomach drop and my shoulders tense.",
        suggestion: "Staying with the drop for one breath, how does it feel, and what is it warning you about?"
      },
      {
        text: "When someone is kind, I go distant.",
        suggestion: "As distance arrives, where does your attention go in your body, and what does that part want for you?"
      },
      {
        text: "Gentle touch still startles me.",
        suggestion: "Notice the startle—where does it spark first, and what happens next in your body?"
      },
      {
        text: "I drink at night to turn off the noise.",
        suggestion: "Before the first sip, what feeling is here, and where do you sense it most right now?"
      },
      {
        text: "I wake tense, like I am on guard.",
        suggestion: "Scan your body—what is most braced, and what would help that place soften one percent now?"
      },
      {
        text: "Good news does not reach me much.",
        suggestion: "When good news comes, what gets in the way inside, and what small sign tells you something positive is trying to get through?"
      },
      {
        text: "Sometimes a song cracks something open for a minute.",
        suggestion: "As you recall that song, what came through the crack, and how did your body feel it?"
      },
      {
        text: "I apologize for needing comfort.",
        suggestion: "Where does that apology live in you, and underneath it, what need wants naming right now?"
      },
      {
        text: "I avoid movies with fighting because my body cannot handle it.",
        suggestion: "As you picture a fight scene, what body signal says 'too much,' and what helps that signal settle?"
      }
    ],
    "case-carlos": [
      {
        text: "A certain tone lights me up inside.",
        suggestion: "As you recall that tone now, what fires first—heat, clench—and where do you sense it?"
      },
      {
        text: "I pace to burn it off.",
        suggestion: "While you picture pacing, what is the worst part your body is trying to move through, and what would ease it one percent?"
      },
      {
        text: "If I back down, I feel like nothing.",
        suggestion: "Let us sit with 'nothing' for a breath—what image comes with it, and where do you feel it most?"
      },
      {
        text: "My boy’s flinch plays on repeat in my head.",
        suggestion: "As you see his face now, what hurts most in your body, and what does that hurting place want you to do differently next time?"
      },
      {
        text: "Calm feels dangerous, like letting my guard down.",
        suggestion: "As we name 'danger,' where do you feel it, and what would calm need to include so it feels strong rather than weak?"
      },
      {
        text: "I break things so I do not break people.",
        suggestion: "In the heartbeat before you swing, what flashes through you, and what does that flash want to protect most?"
      },
      {
        text: "I do not trust being soft.",
        suggestion: "When 'soft' appears, what does it mean inside, and what boundary would help it feel safer to try?"
      },
      {
        text: "Disrespect feels like a punch.",
        suggestion: "Where does that punch land first, and what does the part that gets hit want known about you?"
      },
      {
        text: "I grip the steering wheel until my knuckles go white.",
        suggestion: "Right now, if your hands had words, what would they say they are holding onto?"
      },
      {
        text: "I want my family to feel safe with me.",
        suggestion: "As you hold that wish, what feeling rises now, and what is one small body signal that tells you safety is present?"
      }
    ],
    "case-nina": [
      {
        text: "When I ask for help, guilt rushes in and I want to take it back.",
        suggestion: "As we notice the rush, where does guilt land first—throat, chest—and what does it accuse you of?"
      },
      {
        text: "I keep busy so I do not feel resentful or sad.",
        suggestion: "If we pause the busyness for two breaths, what shows up underneath, and what does it need right now?"
      },
      {
        text: "Saying no makes my stomach knot.",
        suggestion: "Stay with the knot—how big is it, and what fear does it hold about what happens if you say no?"
      },
      {
        text: "When I rest, a voice calls me lazy.",
        suggestion: "As that word lands, where do you feel it, and what would you want that shamed part to hear from you?"
      },
      {
        text: "I apologize for even small requests.",
        suggestion: "As you imagine asking, what young part fears being a burden, and where do you feel it?"
      },
      {
        text: "I get headaches when I am overwhelmed.",
        suggestion: "Right now, before a headache, what is the first body signal you notice, and what would easing one percent look like?"
      },
      {
        text: "I compare myself to other moms and feel small.",
        suggestion: "As 'small' shows up, where is it in your body, and what does that small part most need today?"
      },
      {
        text: "I dream of being taken care of and then feel selfish for wanting it.",
        suggestion: "Staying with the wish a moment, what feeling rises with it, and what is the 'selfish' part trying to protect?"
      },
      {
        text: "I take on everything so no one is disappointed.",
        suggestion: "As you hold that load, what is the heaviest piece right now, and what boundary would your body thank you for?"
      },
      {
        text: "I crash at night after holding it together all day.",
        suggestion: "As you picture the crash, what feeling finally comes through, and what would a kind end‑of‑day ritual look like for that part?"
      }
    ],
    "case-aisha": [
      {
        text: "If a reply does not come, I feel like I am falling.",
        suggestion: "As the falling starts, where do you notice it first, and what is it like—drop, spin, emptiness?"
      },
      {
        text: "I go from please do not leave to leave me alone in seconds.",
        suggestion: "In the breath before the flip, what feeling flashes through—loss, rage—and where do you feel it?"
      },
      {
        text: "Sometimes the emptiness is so loud I want to do anything to stop it.",
        suggestion: "Can we sit at the edge of the emptiness—what shape or temperature does it have, and what does it ask for?"
      },
      {
        text: "When you look away, I feel dropped.",
        suggestion: "As that drop happens, what age does it feel like, and what would that young part need right now?"
      },
      {
        text: "I scratch to feel something real.",
        suggestion: "As you name the urge, where in your body does the emptiness sit, and what helps that place feel held?"
      },
      {
        text: "If you cancel, I do not want to come back.",
        suggestion: "As you imagine a cancel, where do you feel the sting, and what would help it feel held enough to return?"
      },
      {
        text: "Kindness makes me cry and want to run.",
        suggestion: "In that tug of war, what part longs to stay and what part wants to bolt—what does each need from you?"
      },
      {
        text: "I test people to see if they care.",
        suggestion: "As you picture a test, what fear are you trying to answer, and what would it be like to ask for care directly—just a little?"
      },
      {
        text: "I hate myself after I lash out.",
        suggestion: "As you feel that hate, where does it land in your body, and what does the hurt part beneath it need most?"
      },
      {
        text: "Goodbyes make me dizzy.",
        suggestion: "As the dizziness comes, what helps your feet find the floor, and what feeling is underneath it?"
      }
    ],
    "case-david": [
      {
        text: "When she calls me cold, my jaw turns to stone and my chest goes hard.",
        suggestion: "Stay with the jaw and chest—what feeling is underneath the stone, and where do you sense it?"
      },
      {
        text: "If I am not winning, I feel hollow.",
        suggestion: "As you notice the hollow, what is its size or texture, and what does it seem to miss?"
      },
      {
        text: "I smooth my shirt and list achievements when I feel judged.",
        suggestion: "As you picture doing that, what feeling are you armoring against, and where does it show up first?"
      },
      {
        text: "Praise leaks out fast.",
        suggestion: "If we hold one compliment a second longer, where does it land, and what pushes it out?"
      },
      {
        text: "Admitting I am wrong makes my face burn.",
        suggestion: "Notice the burn—what does it fear being seen as, and where do you feel that fear?"
      },
      {
        text: "I check my phone during hard talks.",
        suggestion: "As your eyes drop to the phone, what feeling spikes, and what would help that part stay one breath longer?"
      },
      {
        text: "If the kids push back, I lose it.",
        suggestion: "In the breath before you snap, what shows up inside—sting, shame, fear—and how do you sense it?"
      },
      {
        text: "Since the affair, nights feel flat and heavy.",
        suggestion: "As you notice the flat heaviness, what faint feeling lives underneath, and what does it wish you could say?"
      },
      {
        text: "I want credit for what I do.",
        suggestion: "Holding that want, what feeling rises when credit does not come, and what does that feeling need most from them?"
      },
      {
        text: "I hate being ordinary.",
        suggestion: "As 'ordinary' shows up, what does it mean in your body, and what longing does it point to?"
      }
    ],
    "case-marcus": [
      {
        text: "Most days I am numb and then a wave hits out of nowhere.",
        suggestion: "As we stay near the edge before the wave, what signal tells you it is coming, and where do you feel it?"
      },
      {
        text: "Nightmares yank me awake and I feel wired and empty.",
        suggestion: "Right here with wired and empty, which is louder now, and how do you sense it in your body?"
      },
      {
        text: "Crowds make me tense so I stay near the exits.",
        suggestion: "As you imagine a crowd, where in your body is the tension highest, and what would one percent more safety feel like?"
      },
      {
        text: "Silence in my place feels heavy.",
        suggestion: "Where does the heaviness rest, and if it had a weight or color, what would it be like?"
      },
      {
        text: "I sit in the car after work to avoid going upstairs.",
        suggestion: "As you picture sitting there, what feeling are you not ready to face, and what would it need to take one small step?"
      },
      {
        text: "I keep the lights low and ignore calls.",
        suggestion: "While you notice the dim, what does your body say about contact right now, and where is there the smallest welcome for connection?"
      },
      {
        text: "Good moments feel unreal, like they are behind glass.",
        suggestion: "If we touch one good moment, where do you feel it, and what seems to block it from coming closer?"
      },
      {
        text: "Sudden sounds make me jump.",
        suggestion: "When you jump, what comes right after in your body, and what helps you settle quickest?"
      },
      {
        text: "I do not remember the last time I really laughed.",
        suggestion: "As you say that, what feeling shows up—empty, sad—and where does it land?"
      },
      {
        text: "Part of me thinks I am better off alone.",
        suggestion: "If we listen to that part, what is it protecting you from most, and what would it need to risk a tiny step toward closeness?"
      }
    ]
  },
  "providing-treatment-rationale": {
    "case-sara": [
      {
        text: "I am worried that talking about feelings will make me spiral. Shouldn't we just keep it positive?",
        suggestion: "It makes sense to worry about that. In EFT we go slowly and safely; naming a little of the feeling helps it settle so nights feel less overwhelming."
      },
      {
        text: "Why focus on emotions instead of giving me steps to move on?",
        suggestion: "Steps help most when they fit the heart. We listen to feelings first so the steps you take actually address what hurts and what you need."
      },
      {
        text: "If I cry, won't I just get stuck?",
        suggestion: "Tears here are titrated. We touch a small bit and come back; that contact lets the sadness move instead of trapping you."
      },
      {
        text: "Isn't it better to distract myself?",
        suggestion: "Distraction can give short breaks. We also build the skill to feel a little safely, so you are not chased by it at night."
      },
      {
        text: "I feel silly talking about a breakup when others have bigger problems.",
        suggestion: "Your pain matters. EFT helps you honor it just enough to learn what it asks for—comfort, boundaries, connection—so it eases."
      },
      {
        text: "How will this help me stop thinking about him?",
        suggestion: "We map the loop that keeps pulling you back—loneliness, hope, self-blame—and give each part care so the loop loosens."
      },
      {
        text: "Could we just set goals to get busy again?",
        suggestion: "We can add goals. First, a few minutes with the feeling clarifies which goals refill you instead of just numbing you."
      },
      {
        text: "What if I do not know what I feel?",
        suggestion: "Totally okay. We start with simple sensing—tight, heavy, hollow—and build words from there at your pace."
      },
      {
        text: "Will this take a long time?",
        suggestion: "You will notice small wins quickly—better sleep, less late-night scrolling—as your system learns it is safe to feel a little and rest."
      },
      {
        text: "How is this different from just venting to friends?",
        suggestion: "Here we slow and track your body signals, name needs, and practice new choices. That turns venting into change."
      }
    ],
    "case-michael": [
      {
        text: "I need anger control, not touchy-feely stuff. How does this help?",
        suggestion: "Control matters. We map what your anger protects—usually a quick sting of shame or disrespect—so you can catch it early and choose differently."
      },
      {
        text: "Isn't this just making excuses for blowing up?",
        suggestion: "No. Understanding the trigger gives you leverage in the moment; it increases accountability because you can act before it explodes."
      },
      {
        text: "Why slow down when I am under pressure to perform?",
        suggestion: "Slowing for 5–10 seconds helps you feel the first jolt in your chest; that clarity is what lets you steer instead of snap."
      },
      {
        text: "I do not want to be weak.",
        suggestion: "This is not about being weak. It is about precision—knowing exactly what hits you so you can stay strong and steady."
      },
      {
        text: "Can you just give me tools?",
        suggestion: "We will. Tools land best when tuned to your flashpoints; the emotion work shows us exactly when and how to use them."
      },
      {
        text: "How does paying attention to my body help at work?",
        suggestion: "Your body flags the moment of threat first—tight jaw, hot neck. Catching that signal lets you pause and respond with authority instead of heat."
      },
      {
        text: "What if I mess up again?",
        suggestion: "Relapses are data. We review the sequence, refine the map, and practice the pause so the next moment goes better."
      },
      {
        text: "My wife wants results, not talk.",
        suggestion: "That makes sense. The result we aim for is fewer blowups and faster repairs—this process directly builds that."
      },
      {
        text: "Will this change how my team sees me?",
        suggestion: "Yes—steadier responses build trust. Catching the sting early shifts you from reactive to respected."
      },
      {
        text: "I am not good at feelings.",
        suggestion: "You do not have to be. I will guide tiny steps—label a body cue, name one need—so it feels practical and under your control."
      }
    ],
    "case-jason": [
      {
        text: "Does this really help social anxiety? I just want confidence.",
        suggestion: "Confidence grows from safety inside. We teach your body to recognize the early fear/shame signals so they feel manageable and you can speak."
      },
      {
        text: "What if I blank when you ask what I feel?",
        suggestion: "Blanking is common. We start with simple signals—tight, hot, buzzy—and build words slowly so it feels doable."
      },
      {
        text: "Why focus on my body? My thoughts are the problem.",
        suggestion: "Thoughts spin fast. Your body gives us an earlier, steadier handle; calming that lowers the spin and the self-criticism."
      },
      {
        text: "I do not want to make it worse by paying attention to it.",
        suggestion: "We work at the edge, not in the deep end. Small doses of noticing teach your system it is safe, which shrinks the fear over time."
      },
      {
        text: "Can we just practice scripts?",
        suggestion: "We can practice skills. They stick better when your body feels safer; we will pair both so confidence is real, not forced."
      },
      {
        text: "How long until I feel different in meetings?",
        suggestion: "Many people notice small shifts within weeks—slower heart rate, less shaking—as we practice brief grounding and kinder self-talk."
      },
      {
        text: "I am embarrassed to talk about this.",
        suggestion: "Totally understandable. We go gently, and you set the pace; my job is to make it feel safe to try tiny steps."
      },
      {
        text: "What do I do when my mind says I am awkward?",
        suggestion: "We will name that voice, feel the body cue it rides on, and add a steadier message so you can keep participating."
      },
      {
        text: "Will I always have to work this hard?",
        suggestion: "It gets easier. As your nervous system learns safety, fewer cues set you off and social moments feel more natural."
      },
      {
        text: "I hate eye contact.",
        suggestion: "We will not force it. We build tolerance gradually—short looks, soft focus—so contact feels possible without overwhelm."
      }
    ],
    "case-laura": [
      {
        text: "I think this is chemical. How would talking help?",
        suggestion: "Biology can play a role. We also help your nervous system feel safer; as it settles, mood and connection often improve."
      },
      {
        text: "I do not want to relive trauma.",
        suggestion: "You will not be pushed to relive anything. We work in tiny doses with grounding so you can feel a little and come back."
      },
      {
        text: "What is the point if I feel numb?",
        suggestion: "Numbness protected you. We respect it and look for small signals underneath; that gentle contact reconnects you without overwhelm."
      },
      {
        text: "What if kindness makes me suspicious?",
        suggestion: "We expect that. We will slow down and help your body test safety bit by bit until warmth feels more possible."
      },
      {
        text: "Will this dig up things I cannot handle?",
        suggestion: "We pace carefully. You lead the speed, and we stop if arousal rises too high—safety first."
      },
      {
        text: "Why notice my body?",
        suggestion: "Your body tells us when you are safe or on alert. Learning that language lets you steer before panic or shut-down."
      },
      {
        text: "I am tired of feeling flat.",
        suggestion: "Our goal is to widen your window—more access to feeling and also to calm—so life has color again."
      },
      {
        text: "How will I know it is working?",
        suggestion: "Signs include better sleep, less startle to raised voices, and moments of warmth that do not feel threatening."
      },
      {
        text: "Can we just talk about practical things?",
        suggestion: "We can include practical supports. Emotion work makes those supports land because your system is less on guard."
      },
      {
        text: "What if I shut down here?",
        suggestion: "Then we pause, ground, and return when ready. Even noticing shut-down is progress because it gives us a handle."
      }
    ],
    "case-carlos": [
      {
        text: "Will this make me soft? I need to stay strong.",
        suggestion: "This is about control, not softness. When you know the first hit inside, you can choose before fists or words fly."
      },
      {
        text: "Why talk feelings instead of giving me tools?",
        suggestion: "We will use tools. Feelings work shows the exact trigger so the right tool lands at the right second."
      },
      {
        text: "How does this help when someone disrespects me?",
        suggestion: "We map the flashpoint—humiliation, fear—so you can respond with firm self-respect instead of an explosion."
      },
      {
        text: "I cannot lose my edge.",
        suggestion: "You keep your edge. This work sharpens it by giving you control over when and how to use it."
      },
      {
        text: "What if I blow up anyway?",
        suggestion: "Then we learn from it. Each blowup refines the map so the next time you catch it sooner and repair faster."
      },
      {
        text: "Is breathing really going to change things?",
        suggestion: "Breath is a brake pedal for your body. It buys you the seconds you need to choose a strong, steady response."
      },
      {
        text: "People will walk over me if I let things slide.",
        suggestion: "We are not asking you to let it slide—we are building steady ways to claim respect without scaring the people you love."
      },
      {
        text: "I learned you have to hit first.",
        suggestion: "That rule kept you safe then. Now we update it so your family gets your strength without the blast."
      },
      {
        text: "My kid saw me angry. How does this help him?",
        suggestion: "You model repair. When you catch it sooner and make amends faster, he learns safety and accountability from you."
      },
      {
        text: "I do not want long therapy.",
        suggestion: "We focus on flashpoint skills quickly; many men notice fewer outbursts within weeks when the map is clear."
      }
    ],
    "case-nina": [
      {
        text: "Isn't it selfish to focus on my feelings?",
        suggestion: "You have carried others for so long; it makes sense to worry. Here we use your feelings to clarify needs and limits so you can care sustainably."
      },
      {
        text: "What does noticing my body even do?",
        suggestion: "Your body flags guilt or sadness early. Catching that lets you pause and choose, instead of being driven by it."
      },
      {
        text: "I just want practical steps.",
        suggestion: "We will add steps. Emotion work shows us which boundary or request would actually relieve you, not add more chores."
      },
      {
        text: "I feel bad saying no.",
        suggestion: "We will practice small, kind no's. Each one teaches your nervous system that limits can be safe and loving."
      },
      {
        text: "I am afraid people will leave if I stop helping so much.",
        suggestion: "We will test this gently. Clear needs and limits tend to deepen the right relationships and save your energy."
      },
      {
        text: "Can we just organize my schedule?",
        suggestion: "We can, and it will work best after we map what drains and what restores you so the schedule reflects your needs."
      },
      {
        text: "What if guilt never goes away?",
        suggestion: "Guilt may still knock. You will learn to notice it, check if it fits, and respond kindly without letting it run you."
      },
      {
        text: "I am embarrassed to ask for help.",
        suggestion: "We will rehearse small asks here so your body learns that receiving support can be safe and shared."
      },
      {
        text: "I don't want to be needy.",
        suggestion: "Needing is human. Naming needs clearly helps you and the people you love, because they know how to show up."
      },
      {
        text: "How will I know it is working?",
        suggestion: "You will notice more energy, fewer headaches, and less resentment as limits get clearer and support increases."
      }
    ],
    "case-aisha": [
      {
        text: "What if talking about abandonment makes me want to hurt myself?",
        suggestion: "Safety comes first. We will plan for hard moments, work at the edge, and use grounding so you can feel a little and stay safe."
      },
      {
        text: "I need you to promise you will never leave.",
        suggestion: "It makes sense to want that. I cannot promise never, and I can promise we will plan for breaks, name fears, and repair quickly."
      },
      {
        text: "If you cancel I will spiral.",
        suggestion: "We will prepare together—extra supports, a brief check-in if needed—and use the feelings that come up to build steadiness."
      },
      {
        text: "I feel too much for any therapist.",
        suggestion: "Your feelings are big because of what you lived. Here we titrate—small sips, lots of grounding—so they feel survivable."
      },
      {
        text: "Why focus on my body when I am panicking?",
        suggestion: "Your body is the doorway out of panic—breath, feet, chair. Calming those signals gives you room to choose."
      },
      {
        text: "I hate feeling needy.",
        suggestion: "The need makes sense. We will help you ask clearly, receive in small doses, and also soothe yourself between sessions."
      },
      {
        text: "What if I get attached to you?",
        suggestion: "Attachment is part of healing here. We will keep clear boundaries and use the bond to learn safety and trust."
      },
      {
        text: "How will this help relationships not blow up?",
        suggestion: "We will map the flip from cling to push, track early cues, and practice new moves—naming fear, asking directly, taking space safely."
      },
      {
        text: "Will this take forever?",
        suggestion: "You will notice early wins—fewer panic spikes, quicker calming—as your system learns the path from alarm to steadier ground."
      },
      {
        text: "I cannot trust therapists.",
        suggestion: "That makes sense. We will go slow, be transparent, and let trust build through many small kept agreements."
      }
    ],
    "case-david": [
      {
        text: "Why focus on feelings when I need results?",
        suggestion: "Feelings drive reactions. When you map the sting under anger or distance, you gain control—better outcomes at home and at work."
      },
      {
        text: "I do not want to be psychoanalyzed.",
        suggestion: "We will keep it practical. We track present moments, name what hits, and practice steadier responses you can use immediately."
      },
      {
        text: "Will this help my marriage or is this just about me?",
        suggestion: "Both. As you steady yourself, you repair faster, listen better, and the relationship shifts in the direction you want."
      },
      {
        text: "I already know the theory.",
        suggestion: "Great—now we apply it live. We practice in-the-moment so your nervous system learns, not just your head."
      },
      {
        text: "I hate feeling small when I am wrong.",
        suggestion: "We will help you tolerate that burn for seconds so you can own it quickly and move forward with strength."
      },
      {
        text: "How will this help my leadership?",
        suggestion: "Steadier emotions mean clearer decisions, fewer blowups, and trust from your team—direct benefits to performance."
      },
      {
        text: "Can we skip childhood stuff?",
        suggestion: "We can stay in the present. If old patterns show up, we will name just enough to free you in the now."
      },
      {
        text: "What if I do not feel anything?",
        suggestion: "We start with small signals—tight jaw, hollow chest—and build from there; you keep control of the pace."
      },
      {
        text: "I need quick wins.",
        suggestion: "Early wins look like shorter arguments, fewer nights on the couch, and calmer tough meetings; we will target those."
      },
      {
        text: "How will I know this is worth it?",
        suggestion: "You will see concrete shifts—more influence at work, less defensiveness at home, and a steadier sense of self."
      }
    ],
    "case-marcus": [
      {
        text: "Talking will not change what happened.",
        suggestion: "True—it cannot change the past. It can change how your body carries it now so the numbness and waves are less extreme."
      },
      {
        text: "I do not want to get flooded.",
        suggestion: "We will work in sips—ground first, feel a little, come back—so you stay in control."
      },
      {
        text: "I feel nothing most days.",
        suggestion: "Numbness protected you. We will respect it and look for small signals underneath so you can feel a bit without overwhelm."
      },
      {
        text: "Why notice my body?",
        suggestion: "Your body tells us when you are safe or on alert. Learning those cues lets you steer before a panic spike or shut-down."
      },
      {
        text: "How will this help with nightmares?",
        suggestion: "We will calm the system before and after bad nights and process small pieces when safe, so the aftershock is lighter."
      },
      {
        text: "I am better off alone.",
        suggestion: "Alone has felt safe. We will build safer ways to connect so you can choose closeness without feeling trapped."
      },
      {
        text: "What does progress look like for me?",
        suggestion: "More sleep, fewer startles, moments of warmth, and the ability to stay with a feeling for a breath without shutting down."
      },
      {
        text: "I do not trust therapists.",
        suggestion: "Makes sense. We will go slow, be transparent, and let trust build through small, predictable steps."
      },
      {
        text: "Can we just keep it practical?",
        suggestion: "Yes—we pair grounding skills with brief emotion work so daily life gets easier while we heal at a tolerable pace."
      },
      {
        text: "What if I never feel normal again?",
        suggestion: "Normal may look different now, and you can feel more steady and connected. We will build that, one small win at a time."
      }
    ]
  },
  "empathic-explorations": {
    "case-sara": [
      {
        text: "When I see his name pop up anywhere, my stomach drops and I feel small.",
        suggestion: "As we stay with that drop for a breath, where do you feel it most and what does that smallness seem like inside?"
      },
      {
        text: "I tell friends I'm fine while my throat feels tight.",
        suggestion: "That tight throat is here now; if we linger a moment, what does it want you to know about what is hard to say?"
      },
      {
        text: "Evenings feel endless and I clean to keep busy.",
        suggestion: "As you imagine tonight, where in your body do you notice the urge to keep busy, and what happens if we pause with it for two breaths?"
      },
      {
        text: "I almost texted him sorry, even though I did nothing wrong.",
        suggestion: "If we stay with the part that wants to apologize, what is it hoping for and what fear is it trying to soothe?"
      },
      {
        text: "Sometimes I delete photos, then go looking for them again.",
        suggestion: "There is a push‑pull there; as we sit with both sides, what does each part want most for you right now?"
      },
      {
        text: "When someone is kind to me, I look down.",
        suggestion: "Staying with the moment of looking down, what feeling shows up underneath the kindness—even a faint one?"
      },
      {
        text: "I wake up and it hits me all over again.",
        suggestion: "Right at that morning hit, where does it land in your body, and if it had a texture or weight, what would it be like?"
      },
      {
        text: "I feel embarrassed that I'm still sad.",
        suggestion: "As we notice the embarrassment, what feeling sits underneath it, and what does that part wish could be understood?"
      },
      {
        text: "Seeing couples makes my chest ache and I want to leave.",
        suggestion: "Can we stay with that ache for a moment—what is the ache like, and what does it seem to long for?"
      },
      {
        text: "I don't want to burden anyone with my feelings.",
        suggestion: "If that 'burden' part had a voice, what would it say about what it fears will happen if you let someone in?"
      }
    ],
    "case-michael": [
      {
        text: "When someone corrects me, my ears ring and my jaw locks.",
        suggestion: "As you notice the ring and the lock, what is the very first signal that shows up before the heat—where do you feel it?"
      },
      {
        text: "I scan rooms for disrespect without meaning to.",
        suggestion: "While you picture scanning, what happens in your chest or gut, and what is that part trying to guard against most?"
      },
      {
        text: "After I blow up, there is a pit in my stomach I avoid.",
        suggestion: "Can we sit with that pit for a moment—what is its size, shape, or message if it had a few words?"
      },
      {
        text: "Apologizing makes me feel one‑down.",
        suggestion: "As we stay with the one‑down feeling, what does it remind you of, and what does the part that resists apology need right then?"
      },
      {
        text: "A simple sigh from my wife sets me off.",
        suggestion: "In the second before you react, what flicker shows up inside—sting, shame, fear—and where does it land?"
      },
      {
        text: "If I don't know the answer, I tense up.",
        suggestion: "Notice that tension right now; what muscles tighten first, and what does the tightness hope to prevent?"
      },
      {
        text: "I double‑check everything to avoid being called out.",
        suggestion: "As you imagine double‑checking, what feeling sits underneath the vigilance, and what would it be like to let it rest 1%?"
      },
      {
        text: "I hate feeling weak.",
        suggestion: "Staying with 'weak' for a breath, what image or memory comes with it, and what does the strong part want for you most?"
      },
      {
        text: "Sometimes I lie awake replaying every word.",
        suggestion: "If we replay one moment together, what body signal tells you 'this is the worst part,' and what does that signal ask for?"
      },
      {
        text: "I don't want to be like my dad.",
        suggestion: "As that wish shows up, what feeling in you is most afraid of becoming him, and how does it show itself right now?"
      }
    ],
    "case-jason": [
      {
        text: "When it's my turn to speak, my throat tightens and my mind goes white.",
        suggestion: "As we stay with the tight throat for two slow breaths, what starts to show up under the whiteout, even a hint?"
      },
      {
        text: "I hover over send and then delete my texts.",
        suggestion: "While you picture that moment, what feeling grips you most—fear, shame—and where do you sense it first in your body?"
      },
      {
        text: "Compliments don't stick; I shrug them off.",
        suggestion: "If we let one compliment linger a second, what makes it hard to take in, and what does the skeptical part want to protect?"
      },
        {
        text: "I avoid eye contact so people won't notice me.",
        suggestion: "As your eyes drop, what happens in your chest or belly, and what does that part imagine would happen if you were seen?"
      },
      {
        text: "After meetings, I cringe replaying small moments.",
        suggestion: "Can we slow with one cringe—what is the worst frame, and what does the cringing part fear it proves about you?"
      },
      {
        text: "Walking into a room, I look for the exit.",
        suggestion: "As you notice the exit, what signal tells you you are unsafe, and what would 1% more safety feel like in your body?"
      },
      {
        text: "My hands sweat before I introduce myself.",
        suggestion: "Stay with the sweat for a breath—what is the message in it, and what does that part need from you right now?"
      },
      {
        text: "I compare myself to everyone there.",
        suggestion: "As comparison ramps up, what feeling sits underneath it, and what does that feeling most want for you in that moment?"
      },
      {
        text: "Sometimes I pretend to text to avoid small talk.",
        suggestion: "What is the scariest part of small talk for you, and where do you sense that fear in your body as we name it?"
      },
      {
        text: "Sunday nights feel heavy and I stall replying to friends.",
        suggestion: "If we stay with that heaviness, what does it seem to be about, and what tiny step would feel kind toward that part?"
      }
    ],
    "case-laura": [
      {
        text: "Most days feel flat, and when feeling flickers I shut it down.",
        suggestion: "As we touch just the edge of that flicker, what is its quality—warm, heavy, sharp—and how big is it right now?"
      },
      {
        text: "Raised voices make my stomach drop and my shoulders tense.",
        suggestion: "Staying with the drop for one breath, what does your body warn you about, and what would help it feel 1% safer now?"
      },
      {
        text: "Kindness makes me feel far away inside.",
        suggestion: "As distance arrives, where do you feel it, and if it had a purpose, what would it be trying to do for you?"
      },
      {
        text: "I drink wine at night to quiet the noise.",
        suggestion: "Before the first sip, what feeling or sensation pushes you toward the bottle, and what does that part ask for instead?"
      },
      {
        text: "I wake already braced for the day.",
        suggestion: "Scan your body right now—what is most braced, and what would that braced place need to soften a little?"
      },
      {
        text: "Touch startles me even when it's gentle.",
        suggestion: "As you recall a gentle touch, where does the startle fire first, and what does it fear will happen next?"
      },
      {
        text: "Good news doesn't reach me much.",
        suggestion: "When good news comes, what gets in the way inside, and what tiny sign tells you something positive is trying to get through?"
      },
      {
        text: "Sometimes music cracks something open for a minute.",
        suggestion: "As you remember a song that cracked it open, what came through that crack, and what did that part want?"
      },
      {
        text: "I feel guilty for needing comfort.",
        suggestion: "Let us notice the guilt first—what does it accuse you of, and beneath it, what does the needing part wish for?"
      },
      {
        text: "I avoid movies with fighting because my body can't handle it.",
        suggestion: "If we name one body signal that says 'too much,' what is it, and what helps that signal settle right now?"
      }
    ],
    "case-carlos": [
      {
        text: "A certain tone makes my chest heat and my fists clench.",
        suggestion: "As we stay with the heat and clench, what is the first hint underneath—hurt, humiliation—and how do you sense it?"
      },
      {
        text: "I pace the room to burn it off.",
        suggestion: "While you picture pacing, what is the worst part your body is trying to move through, and what would it need to slow 1%?"
      },
      {
        text: "If I back down, I feel like nothing.",
        suggestion: "Let us sit with 'nothing' for a breath—what image comes with it, and what does the part that hates backing down want for you?"
      },
      {
        text: "My boy's flinch plays on repeat in my head.",
        suggestion: "As you see his face now, what hurts most in your body, and what does that hurting place want you to do differently?"
      },
      {
        text: "Calm feels dangerous, like I'm letting my guard down.",
        suggestion: "As we name 'danger,' where do you feel it, and what would calm need to include so it feels strong rather than weak?"
      },
      {
        text: "I break things so I don't break people.",
        suggestion: "In the second before you swing, what flashes through you, and what does that flash want you to protect most?"
      },
      {
        text: "I don't trust being soft.",
        suggestion: "As 'soft' shows up, what does it mean in your body, and what boundary would make softness feel safe enough to try?"
      },
      {
        text: "Disrespect feels like a punch.",
        suggestion: "If we pause with that 'punch,' where does it land first, and what does the part that gets hit wish someone knew about you?"
      },
      {
        text: "I want my family to feel safe with me.",
        suggestion: "As you hold that wish, what feeling rises in you now, and what is one small signal your body gives when safety is present?"
      },
      {
        text: "I learned early never to be the small one.",
        suggestion: "Staying with that learning, what age does it feel like, and what did that younger part need back then that it still needs now?"
      }
    ],
    "case-nina": [
      {
        text: "When I ask for help, guilt rushes in and I want to take it back.",
        suggestion: "As we notice the rush, where does guilt land first—throat, chest—and what does it accuse you of?"
      },
      {
        text: "I keep busy so I don't feel resentful or sad.",
        suggestion: "If we pause with the busyness for two breaths, what feeling peeks out from underneath, and what does it need right now?"
      },
      {
        text: "Saying no makes my stomach knot.",
        suggestion: "Stay with the knot for a moment—how big is it, and what fear does it hold about what happens if you say no?"
      },
      {
        text: "I apologise for even small requests.",
        suggestion: "As you picture apologising, what young part of you worries about being a burden, and what would you want that part to hear from you now?"
      },
      {
        text: "If the house is messy, I feel like I'm failing.",
        suggestion: "As we sit with 'failing,' what does that word feel like in your body, and who taught you that rule?"
      },
      {
        text: "I get headaches when I'm overwhelmed.",
        suggestion: "Right now, as you think of overwhelm, where do you feel the first signal, and what would easing 1% look like for your body?"
      },
      {
        text: "I dream of being taken care of and then feel selfish for wanting it.",
        suggestion: "Staying with the wish for a moment, what feeling rises with it, and what does the 'selfish' part fear would happen?"
      },
      {
        text: "I take on everything so no one can be disappointed in me.",
        suggestion: "As you hold that load, what is the heaviest piece right now, and what boundary would your body thank you for setting?"
      },
      {
        text: "I compare myself to other moms and feel small.",
        suggestion: "When 'small' shows up, where do you notice it, and what does that small part most need from you today?"
      },
      {
        text: "I crash at night after holding it together all day.",
        suggestion: "As you picture the crash, what feeling finally gets through, and what would a kind end‑of‑day ritual look like for that part?"
      }
    ],
    "case-aisha": [
      {
        text: "If a reply doesn't come, my chest feels like a hole opens and I can't breathe.",
        suggestion: "As we stay with the very edge of that hole, where is the breath stuck, and what does that terrified part need from us right now?"
      },
      {
        text: "I go from please don't leave to leave me alone in seconds.",
        suggestion: "In the breath before the flip, what feeling flashes through—loss, rage—and what does it want you to do to feel safe?"
      },
      {
        text: "Sometimes I scratch to feel something real.",
        suggestion: "As you name the urge, where in your body does the emptiness sit, and if it had a shape or temperature, what is it like?"
      },
      {
        text: "When you look away, I feel dropped.",
        suggestion: "Staying with the drop for one slow breath, what age does it feel like, and what did that young part need right then?"
      },
      {
        text: "I test people to see if they care.",
        suggestion: "As you imagine testing, what fear are you trying to answer, and what would it be like to ask for care directly, even a little?"
      },
      {
        text: "Goodbye makes me dizzy.",
        suggestion: "When the dizziness comes, where do your feet feel the floor, and what do you need to hear to know I am still with you?"
      },
      {
        text: "Kindness makes me sob and want to run.",
        suggestion: "As both show up, what part wants to soak in the kindness and what part wants to bolt—what does each need from you now?"
      },
      {
        text: "I feel disgusting because of what was done to me.",
        suggestion: "If we gently touch the part that feels contaminated, what words or image does it carry, and what would it want me to know most?"
      },
      {
        text: "I stare at the door to make sure you won't end early.",
        suggestion: "As your eyes hold the door, what does the watchful part fear would happen if it relaxed for one breath?"
      },
      {
        text: "If you cancel, I don't want to come back.",
        suggestion: "Let us stay with the sting of a cancel—where do you feel it, and what would help that part feel held enough to return?"
      }
    ],
    "case-david": [
      {
        text: "When she says I'm cold, my face burns and my chest goes hard.",
        suggestion: "As we notice the burn and the hard chest, what is the hurt just beneath, and what does it ask for that is hard to show?"
      },
      {
        text: "If I'm not the best, I feel hollow.",
        suggestion: "Let us sit with the hollow—what is its size or texture, and what does it seem to be missing most?"
      },
      {
        text: "I smooth my shirt and list achievements when I feel judged.",
        suggestion: "As you picture straightening up, what feeling are you armoring against, and what would it be like to let me see 1% of it?"
      },
      {
        text: "Praise feels good then leaks out.",
        suggestion: "While we hold one bit of praise for a second longer, where does it land, and what makes it hard to keep?"
      },
      {
        text: "I check my phone in hard talks.",
        suggestion: "In the instant your eyes drop, what feeling spikes, and what would help that part feel steady enough to stay?"
      },
      {
        text: "My kids' tears make me impatient.",
        suggestion: "As you imagine their tears, what shows up in your body, and what does the impatient part need so it can soften?"
      },
      {
        text: "Admitting I'm wrong makes my face burn.",
        suggestion: "Stay with the burn for one breath—what does it fear being seen as, and what would you want understood about you there?"
      },
      {
        text: "Since the affair, nights feel flat and heavy.",
        suggestion: "As you notice the flat, heavy nights, what faint feeling lives under them, and what does it wish you could say?"
      },
      {
        text: "I want credit for what I do.",
        suggestion: "Holding that want, what feeling rises when credit doesn't come, and what does that feeling need most from the people you love?"
      },
      {
        text: "I hate being ordinary.",
        suggestion: "As 'ordinary' shows up, what does it mean in your body, and what longing does it point to?"
      }
    ],
    "case-marcus": [
      {
        text: "Most days I'm numb and then a wave hits out of nowhere.",
        suggestion: "As we stay near the first sign of a wave, what body signal tells you it's coming, and what helps you ride 1% of it now?"
      },
      {
        text: "Nightmares yank me awake and I feel wired and empty.",
        suggestion: "Right here with wired and empty, which is stronger, and what does that part need from us in this moment?"
      },
      {
        text: "Crowds make me tense so I keep to the edges.",
        suggestion: "As you picture an edge, where in your body is tension highest, and what would safety feel like there for one breath?"
      },
      {
        text: "Silence in my apartment feels heavy.",
        suggestion: "When the heavy silence lands, where do you feel it most, and if it had a weight or color, what is it like?"
      },
      {
        text: "I sit in the car after work to avoid going upstairs.",
        suggestion: "As you sit there, what feeling are you not ready to face yet, and what would that feeling need to take one step toward the door?"
      },
      {
        text: "I keep the lights low and avoid calls.",
        suggestion: "While you picture dim lights, what does your body say about contact right now, and where is there the smallest welcome for connection?"
      },
      {
        text: "Good moments feel unreal, like they're behind glass.",
        suggestion: "Let us hold one small good thing—how does your body register it, and what blocks it from coming closer?"
      },
      {
        text: "Sudden sounds make me jump.",
        suggestion: "Stay with the jump for one breath—what else shows up right after it, and what settles you quickest in those moments?"
      },
      {
        text: "I don't pick up when family calls because I don't want to feel.",
        suggestion: "As you notice the avoidance, what feeling waits on the other side of the call, and what would support look like to touch 1% of it?"
      },
      {
        text: "Part of me thinks I'm better off alone forever.",
        suggestion: "If we sit with that part kindly, what is it protecting you from most, and what would it need to risk a tiny step toward closeness?"
      }
    ]
  },
  "empathic-evocations": {
    "case-sara": [
      {
        text: "Evenings stretch out and the apartment feels too big for just me.",
        suggestion: "Nights stretch long and the rooms feel too big, echoing with alone."
      },
      {
        text: "I keep that cheerful voice on, and underneath my chest feels hollow.",
        suggestion: "A bright voice on top of a hollowed‑out chest, like a smile over an ache."
      },
      {
        text: "Seeing his jacket in the closet hits me like a wave.",
        suggestion: "It crashes in like a wave the moment your eyes catch that jacket."
      },
      {
        text: "I wake up and for a second I forget, then it slams back.",
        suggestion: "That second of light, then the weight slams back down like a door."
      },
      {
        text: "When friends ask, I shrug it off, but my throat tightens.",
        suggestion: "A casual shrug on the outside while your throat cinches tight inside."
      },
      {
        text: "I scroll late at night until my eyes burn.",
        suggestion: "Late‑night scrolling, eyes burning as you try to outrun the ache."
      },
      {
        text: "Hearing our song in a store made my knees go weak.",
        suggestion: "The first notes take your legs out from under you."
      },
      {
        text: "I keep thinking maybe if I were different, I wouldn't be alone.",
        suggestion: "It lands like a verdict on your worth, heavy and unforgiving."
      },
      {
        text: "Sometimes I sit on the floor and hug my knees just to feel held.",
        suggestion: "Curled around yourself, making a small circle of warmth in a cold room."
      },
      {
        text: "When you're kind to me, I want to look away.",
        suggestion: "Kindness feels bright, almost too bright, and you turn your eyes from the light."
      }
    ],
    "case-michael": [
      {
        text: "A correction in front of the team makes my face burn.",
        suggestion: "Your face burns hot, like all eyes are a spotlight on a flaw."
      },
      {
        text: "I walk in already braced for someone to mess up.",
        suggestion: "You hit the doorway in armor, jaw set, scanning for the next hit."
      },
      {
        text: "My jaw aches from clenching by the end of the day.",
        suggestion: "That ache tells how hard you've been biting down on the hurt."
      },
      {
        text: "I snap, and then the shame hangs like a weight.",
        suggestion: "The shame settles on you like a heavy coat you can't take off."
      },
      {
        text: "When my wife sighs, it feels like a slap.",
        suggestion: "A small sigh landing like a stinging slap across your chest."
      },
      {
        text: "I hear 'calm down' and it explodes something in me.",
        suggestion: "Those words spark a flash fire that rushes up before you can catch it."
      },
      {
        text: "If I don't know, my stomach drops.",
        suggestion: "Not knowing drops your stomach like an elevator falling too fast."
      },
      {
        text: "I slam doors because it feels better than feeling small.",
        suggestion: "The slam is big and loud to cover the small sting inside."
      },
      {
        text: "Apologizing tastes like rust in my mouth.",
        suggestion: "An apology feels metallic and bitter on your tongue."
      },
      {
        text: "At night, I replay it and I can't unclench.",
        suggestion: "You lie there wound tight, replaying the scene like a loop you can't stop."
      }
    ],
    "case-jason": [
      {
        text: "When it's my turn, my name sounds far away and my lips go numb.",
        suggestion: "As your name lands, your lips go numb and the room pulls back."
      },
      {
        text: "My hands sweat so much I hide them under the table.",
        suggestion: "Sweaty hands tucked away, like you're trying to make yourself smaller."
      },
      {
        text: "I practice in the mirror and still freeze.",
        suggestion: "All that practice, and then the freeze locks you like ice."
      },
      {
        text: "If someone laughs, my stomach jolts.",
        suggestion: "A laugh nearby jolts your stomach like a quick electric shock."
      },
      {
        text: "I shrink in my chair when the spotlight moves near me.",
        suggestion: "You fold in on yourself as the light sweeps toward you."
      },
      {
        text: "Compliments slide off; I can't grab them.",
        suggestion: "Praise slides right off like rain on glass."
      },
      {
        text: "Sunday nights, the room feels gray and too quiet.",
        suggestion: "A gray quiet drifts in and settles over everything."
      },
      {
        text: "When I text, I type and erase until my fingers ache.",
        suggestion: "Typing and erasing, fingers aching, as the worry circles."
      },
      {
        text: "My voice shakes at hello.",
        suggestion: "Even 'hello' comes out on a shaky thread."
      },
      {
        text: "I stare at the exit like a lifeline.",
        suggestion: "The door feels like a lifeline your eyes keep holding onto."
      }
    ],
    "case-laura": [
      {
        text: "Most mornings feel flat, like colors are washed out.",
        suggestion: "It's all washed‑out tones, like the color's been drained."
      },
      {
        text: "A slammed door makes my skin go cold.",
        suggestion: "That sound sends a cold ripple over your skin."
      },
      {
        text: "When someone sits close, I drift a few feet back inside.",
        suggestion: "You float back behind a pane of glass inside yourself."
      },
      {
        text: "I forget what happy feels like in my body.",
        suggestion: "Happy feels like a far‑off memory your body can't quite reach."
      },
      {
        text: "Wine helps me switch off the noise.",
        suggestion: "The wine flips a switch and dims the whole room inside."
      },
      {
        text: "I lie awake feeling like I'm on watch.",
        suggestion: "On watch even in bed, body posted at the door."
      },
      {
        text: "Sometimes a sad song cracks me open for a minute.",
        suggestion: "One note slips in and a small crack opens in the numb."
      },
      {
        text: "I walk the aisles just to avoid going home.",
        suggestion: "Wandering aisles like floating through safe, neutral space."
      },
      {
        text: "Kind words make my throat ache.",
        suggestion: "Warmth brushes you and your throat aches with the touch."
      },
      {
        text: "I keep a small bag packed just in case.",
        suggestion: "A bag by the door, like your body never fully comes off alert."
      }
    ],
    "case-carlos": [
      {
        text: "A smirk across the table makes my hands buzz.",
        suggestion: "That smirk sets your hands buzzing like live wires."
      },
      {
        text: "My chest feels tight like a drum before I pop.",
        suggestion: "Tight like a drumhead stretched to bursting."
      },
      {
        text: "I pace the kitchen to burn it off.",
        suggestion: "You walk hard lines in the kitchen, trying to shake the heat out."
      },
      {
        text: "My boy looking scared punched a hole in me.",
        suggestion: "His scared face punched a hole straight through you."
      },
      {
        text: "Calm people look soft to me.",
        suggestion: "Calm reads as soft, like no armor—dangerous in your world."
      },
      {
        text: "After I blow, the room feels smaller.",
        suggestion: "After the blast, the house feels small and airless."
      },
      {
        text: "I clench my teeth so hard my head throbs.",
        suggestion: "Teeth locked so tight the pain drums at your temples."
      },
      {
        text: "If I back down, I feel like I'm disappearing.",
        suggestion: "Backing down feels like fading out, losing your outline."
      },
      {
        text: "I grip the steering wheel until my knuckles whiten.",
        suggestion: "White‑knuckled on the wheel, holding yourself together."
      },
      {
        text: "I don't want my kid to remember me like this.",
        suggestion: "You can feel the ache—like a bruise—wanting to be a safer man in his eyes."
      }
    ],
    "case-nina": [
      {
        text: "Guilt zaps me the second I sit down.",
        suggestion: "It zaps you like a buzzer the moment you rest."
      },
      {
        text: "It's like I'm carrying everyone's bags and mine too.",
        suggestion: "Arms full of everyone's bags, shoulders burning."
      },
      {
        text: "My stomach twists when I ask for help.",
        suggestion: "Asking turns your stomach in a tight twist."
      },
      {
        text: "I smile through headaches and keep moving.",
        suggestion: "A smile stretched over a pounding head as you keep going."
      },
      {
        text: "By evening, my bones feel heavy.",
        suggestion: "Bones heavy, like you're wading through wet concrete."
      },
      {
        text: "When I say no, my heart pounds like I've done something wrong.",
        suggestion: "A pounding heart like an alarm for just saying no."
      },
      {
        text: "I clean the counter at midnight because I can't rest.",
        suggestion: "Midnight wiping, as if a clean counter could quiet the noise."
      },
      {
        text: "If the house is messy, shame crawls up my neck.",
        suggestion: "Shame crawls warm up your neck just seeing a dish out."
      },
      {
        text: "I cry quietly in the pantry so no one hears.",
        suggestion: "Tears tucked in the pantry, muffled behind a door."
      },
      {
        text: "Sometimes I dream of a day where I do nothing and don't feel bad.",
        suggestion: "You imagine a soft day, no doing, and your body loosens at the thought."
      }
    ],
    "case-aisha": [
      {
        text: "When you look at the clock, my stomach drops.",
        suggestion: "One glance at the clock and your stomach drops out."
      },
      {
        text: "I go from 'please don't go' to 'leave me alone' in seconds.",
        suggestion: "It flips like a switch—from pleading to fire in a blink."
      },
      {
        text: "The emptiness burns like a hole in my chest.",
        suggestion: "A burning hole in your chest that seems bottomless."
      },
      {
        text: "I scratch at my skin so I can feel something real.",
        suggestion: "Scratching to find something real through the numb and hurt."
      },
      {
        text: "If a text bubbles then disappears, I can't breathe.",
        suggestion: "Those three dots vanish and your breath locks up."
      },
      {
        text: "Goodbye makes me dizzy.",
        suggestion: "A goodbye makes the room tilt and spin."
      },
      {
        text: "When you cancel, it feels like the floor opens.",
        suggestion: "A cancel and the floor opens under your feet."
      },
      {
        text: "I hear 'too much' in my head like a stamp.",
        suggestion: "The words 'too much' stamped across your heart."
      },
      {
        text: "Warmth makes tears spill out of nowhere.",
        suggestion: "A bit of warmth and the tears spill like a sudden rain."
      },
      {
        text: "I stare at the door to make sure you're still here.",
        suggestion: "Eyes locked on the door, guarding against vanishing."
      }
    ],
    "case-david": [
      {
        text: "When she calls me cold, my jaw turns to stone.",
        suggestion: "Jaw set like stone as the word 'cold' burns in."
      },
      {
        text: "If I'm not winning, my chest feels hollow.",
        suggestion: "Without the win, your chest feels like an empty room."
      },
      {
        text: "I puff up when I feel small.",
        suggestion: "You puff up big to cover the small sting inside."
      },
      {
        text: "I smooth my shirt and list my accomplishments when I'm cornered.",
        suggestion: "Straightening the shirt, reciting the resume like armor plates."
      },
      {
        text: "Praise feels good for a minute then leaks out.",
        suggestion: "Admiration fills you for a moment and then leaks away like water through a sieve."
      },
      {
        text: "I hate the look on my kids' faces when I snap.",
        suggestion: "That look hits you like a punch you wish you could pull back."
      },
      {
        text: "I check out of hard talks by looking at my phone.",
        suggestion: "Eyes drop to the screen like a shield you hide behind."
      },
      {
        text: "Saying 'I'm wrong' makes my face burn.",
        suggestion: "The words make your face burn hot with exposed skin."
      },
      {
        text: "I pace the house at night when I feel judged.",
        suggestion: "Night pacing, trying to walk off the sting of judgment."
      },
      {
        text: "After the affair, the house feels colder.",
        suggestion: "The house feels colder, like the heat slipped out through a crack."
      }
    ],
    "case-marcus": [
      {
        text: "I move through the day like a ghost.",
        suggestion: "Ghosting through the day, barely leaving footprints."
      },
      {
        text: "Crowds make my shoulders rise to my ears.",
        suggestion: "Shoulders climbing up to your ears, muscles on sentry duty."
      },
      {
        text: "I sit with my back to the wall.",
        suggestion: "Back to the wall, eyes scanning exits."
      },
      {
        text: "Nightmares yank me awake and leave me buzzing.",
        suggestion: "Pulled out of sleep, buzzing like a live wire."
      },
      {
        text: "Silence in my place feels like a weight on my chest.",
        suggestion: "Silence pressing on your chest like a heavy plate."
      },
      {
        text: "Good moments feel far away, like they're behind glass.",
        suggestion: "Goodness behind glass, close and untouchable."
      },
      {
        text: "I keep the lights low so I don't have to see much.",
        suggestion: "Dim lights, keeping the world soft and far."
      },
      {
        text: "If someone knocks, my heart hammers.",
        suggestion: "A knock at the door sets your heart hammering hard."
      },
      {
        text: "I hold my breath when I talk about it.",
        suggestion: "Holding your breath as if air might let the pain in."
      },
      {
        text: "Some nights I sit in the car so I don't have to go upstairs.",
        suggestion: "Lingering in the car like a quiet bunker before the climb."
      }
    ]
  },
  "empathic-conjectures": {
    "case-sara": [
      {
        text: "I keep telling my friends I'm fine so they won't worry.",
        suggestion: "You try to protect them; I wonder if a part also fears that needing them might mean you're too much or unworthy."
      },
      {
        text: "I threw myself into work so I wouldn't think about him.",
        suggestion: "You're staying busy to cope; maybe underneath is a fear that the quiet will confirm you weren't worth staying for."
      },
      {
        text: "I feel stupid for still crying months later.",
        suggestion: "You're frustrated with the tears; I guess there might also be shame about needing and being seen."
      },
      {
        text: "When someone asks how I'm doing, I smile and change the subject.",
        suggestion: "You move away quickly; could it be there's also a tender longing to be chosen that's hard to show."
      },
      {
        text: "Seeing couples makes me roll my eyes and tell myself love is overrated.",
        suggestion: "You push it away; I wonder if behind that eye roll is an ache for closeness."
      },
      {
        text: "I unfollowed him and then checked from a friend's phone.",
        suggestion: "You're trying to protect yourself and still reach; maybe there's a fight in you between self‑protection and hope."
      },
      {
        text: "I tell myself other people have real problems, so I should be grateful.",
        suggestion: "You minimize your pain; I guess there's a scared part that fears being dismissed if you let it show."
      },
      {
        text: "I almost texted him 'I'm sorry' even though I didn't do anything wrong.",
        suggestion: "You reach to repair; could it be you're trying to soothe a shame that says it must be your fault."
      },
      {
        text: "Nights are the worst; I keep replaying what I did wrong.",
        suggestion: "You replay to make sense; I wonder if underneath is a young part trying to earn being kept."
      },
      {
        text: "When you're kind, I look down and want to change the topic.",
        suggestion: "Kindness lands strong; maybe a part longs for it and another expects it to disappear."
      }
    ],
    "case-michael": [
      {
        text: "If someone questions me in a meeting, I bite back.",
        suggestion: "You come in strong; I wonder if under the heat is a sting of being seen as not enough."
      },
      {
        text: "I can't stand being corrected in front of others.",
        suggestion: "That's brutal; maybe there's a flash of humiliation that anger covers."
      },
      {
        text: "My wife says I'm harsh; I just call it honesty.",
        suggestion: "You value straight talk; I guess there's also a fear of being seen as weak if you soften."
      },
      {
        text: "I make sure nobody has leverage on me.",
        suggestion: "You protect your position; could it be there's a worry of being one‑down like before."
      },
      {
        text: "Apologizing feels like giving up ground.",
        suggestion: "It feels risky; I wonder if it touches a small, ashamed place you'd rather not show."
      },
      {
        text: "I hate feeling out of control.",
        suggestion: "Control matters; maybe underneath is a fear that mistakes prove something bad about you."
      },
      {
        text: "I double‑check everyone's work so I don't get blindsided.",
        suggestion: "You anticipate threats; I guess there's a part expecting to be blamed."
      },
      {
        text: "After I blow up, I avoid my kid's eyes.",
        suggestion: "You feel the weight; could it be shame makes looking at him hard."
      },
      {
        text: "Being told to calm down makes me see red.",
        suggestion: "That hits hard; I wonder if it lands like being dismissed or belittled."
      },
      {
        text: "I don't do feelings; I do solutions.",
        suggestion: "You lean on fixing; maybe feelings feel like traps that could expose a hurt place."
      }
    ],
    "case-jason": [
      {
        text: "I rehearse what I'll say and still go blank.",
        suggestion: "You prepare hard; I wonder if the blank protects you from a feared shame."
      },
      {
        text: "I pretend I'm busy when I'm invited to things.",
        suggestion: "You avoid; maybe there's a part that expects to be judged or ignored."
      },
      {
        text: "I hear a voice saying 'don't embarrass yourself'.",
        suggestion: "You hear that critic; I guess it tries to keep you safe from feeling small."
      },
      {
        text: "After I speak, I cringe for hours.",
        suggestion: "You cringe; could it be a sadness about wanting to be accepted."
      },
      {
        text: "Compliments feel fake to me.",
        suggestion: "They bounce off; I wonder if it's hard to let in warmth because it doesn't fit the old picture."
      },
      {
        text: "Seeing confident people makes me want to disappear.",
        suggestion: "You shrink; maybe there's envy and grief about feeling on the outside."
      },
      {
        text: "If someone laughs, I assume it's about me.",
        suggestion: "You brace; I guess there's a raw spot that expects ridicule."
      },
      {
        text: "I text and then delete before sending.",
        suggestion: "You edit; could it be a fear of being seen that fights with a wish to connect."
      },
      {
        text: "I drink before events to loosen up.",
        suggestion: "You're seeking relief; I wonder if a softer, scared part needs protection."
      },
      {
        text: "I stay quiet even when I have a good idea.",
        suggestion: "You hold back; maybe there's a deeper belief that visibility equals danger."
      }
    ],
    "case-laura": [
      {
        text: "Kindness makes me suspicious.",
        suggestion: "You distance there; I wonder if closeness stirs an old fear of betrayal."
      },
      {
        text: "When voices rise, my body freezes.",
        suggestion: "Your body remembers danger; maybe fear shows up before your mind can."
      },
      {
        text: "I feel guilty for not feeling much.",
        suggestion: "You judge the numbness; I guess it's a protector guarding a very sore grief."
      },
      {
        text: "I avoid movies with family fights.",
        suggestion: "You steer clear; could it be to avoid waking old terror and shame."
      },
      {
        text: "Sometimes I stare at the wall and feel nothing.",
        suggestion: "You go flat; I wonder if it's safer than feeling the ache of being alone."
      },
      {
        text: "I tell myself 'don't need anyone'.",
        suggestion: "You push needs away; maybe there's a part that longs to be held and fears it."
      },
      {
        text: "When someone touches my shoulder, I flinch.",
        suggestion: "Your body startles; I guess it learned touch could mean danger."
      },
      {
        text: "I worry I'm broken.",
        suggestion: "You fear that; could it be shame from what was done to you speaking."
      },
      {
        text: "I keep my life very small.",
        suggestion: "You keep it contained; I wonder if it's a way to control risk and avoid old pain."
      },
      {
        text: "I apologize for crying; it feels weak.",
        suggestion: "You apologize; maybe crying touches a belief that you'd be blamed for needing care."
      }
    ],
    "case-carlos": [
      {
        text: "A disrespectful tone flips a switch in me.",
        suggestion: "It flips you fast; I wonder if under the heat is a flash of humiliation."
      },
      {
        text: "If I back down, they'll think I'm weak.",
        suggestion: "You guard your status; maybe there's a younger part that refuses to be small again."
      },
      {
        text: "I can't stand being told what to do.",
        suggestion: "It grates; I guess it touches an old fear of being controlled."
      },
      {
        text: "My son saw me slam a door; I felt sick after.",
        suggestion: "You care deeply; could it be shame and fear of becoming your father."
      },
      {
        text: "After a fight, I can't look at my wife.",
        suggestion: "You avoid her eyes; I wonder if seeing her face touches regret and tenderness."
      },
      {
        text: "I puff up when someone challenges me.",
        suggestion: "You armor up; maybe it's to cover a moment of feeling less‑than."
      },
      {
        text: "I break things so I don't hit people.",
        suggestion: "You're trying to protect; I guess the anger takes over to block hurt."
      },
      {
        text: "Calm guys seem like pushovers to me.",
        suggestion: "You equate calm with weakness; could it be calm feels dangerous because it wasn't safe before."
      },
      {
        text: "I replay disrespect for days.",
        suggestion: "You ruminate; I wonder if it keeps the humiliation from settling in."
      },
      {
        text: "I want to do better for my family.",
        suggestion: "You want change; maybe there's a tender part longing to be safe to love."
      }
    ],
    "case-nina": [
      {
        text: "Resting makes me feel selfish.",
        suggestion: "You feel selfish there; I wonder if a part learned love had to be earned."
      },
      {
        text: "I say yes and then resent it.",
        suggestion: "You say yes; maybe anger is telling you about unmet needs to be supported."
      },
      {
        text: "When I ask for help, I apologize.",
        suggestion: "You apologize; I guess there's a fear you'll be rejected for needing."
      },
      {
        text: "If the house is messy, I feel like a failure.",
        suggestion: "You feel like a failure; could it be shame tied to being 'good' through doing."
      },
      {
        text: "I get anxious if someone seems disappointed in me.",
        suggestion: "You tense up; I wonder if it stirs an old fear of losing love."
      },
      {
        text: "I swallow my anger because it's not nice.",
        suggestion: "You swallow it; maybe a younger part believes your needs are wrong."
      },
      {
        text: "I take care of everyone and then feel invisible.",
        suggestion: "You feel invisible; I guess there's a longing to be cared for too."
      },
      {
        text: "I can't say no without feeling sick.",
        suggestion: "You feel sick; could it be a protector trying to keep attachment safe."
      },
      {
        text: "I tell myself others have it worse.",
        suggestion: "You minimize your pain; I wonder if it's a way to stay acceptable by pushing yours down."
      },
      {
        text: "If I slow down, I feel a lump in my throat.",
        suggestion: "You feel that lump; maybe grief is close and asking to be noticed."
      }
    ],
    "case-aisha": [
      {
        text: "If you look at the clock, I feel abandoned.",
        suggestion: "You feel that drop; I wonder if it stirs an old terror of being left alone."
      },
      {
        text: "When he didn't text back, I went from sad to furious.",
        suggestion: "You swing fast; maybe the fury rushes in to protect a very raw hurt."
      },
      {
        text: "Sometimes I want to scratch my arms to feel something.",
        suggestion: "You want relief; I guess there's unbearable emptiness underneath."
      },
      {
        text: "I beg people not to leave me and then explode at them.",
        suggestion: "You plead then push away; could it be both the longing and fear are huge."
      },
      {
        text: "If you cancel, I don't want to come back.",
        suggestion: "That would sting; I wonder if it's safer to reject first than risk being dropped."
      },
      {
        text: "I think I'm too much for anyone.",
        suggestion: "You feel too much; maybe that's shame speaking from what was done to you."
      },
      {
        text: "Kindness makes me sob and want to run.",
        suggestion: "It lands big; I guess a part longs for it and another expects it to vanish."
      },
      {
        text: "I test people to see if they care.",
        suggestion: "You test; could it be you're trying to prove you matter before risking trust."
      },
      {
        text: "I hate myself after I lash out.",
        suggestion: "You hate yourself; I wonder if that harshness covers grief for how alone you feel."
      },
      {
        text: "I panic when I say goodbye.",
        suggestion: "Goodbyes spike panic; maybe it touches that old fear that no one comes back."
      }
    ],
    "case-david": [
      {
        text: "When my wife says I'm cold, I get sarcastic.",
        suggestion: "You get sharp; I wonder if under that edge is a sting of being seen as not enough."
      },
      {
        text: "I don't like being told what to do.",
        suggestion: "You resist; maybe direction lands like being small or controlled."
      },
      {
        text: "If I can't be the best, why try.",
        suggestion: "You aim high; I guess there's fear that ordinary equals unworthy."
      },
      {
        text: "I plan big gestures and feel empty afterward.",
        suggestion: "You plan; could it be admiration doesn't reach the part that longs to be seen for you."
      },
      {
        text: "Apologizing makes me cringe.",
        suggestion: "It feels humiliating; I wonder if it touches an old shame of being wrong."
      },
      {
        text: "I check my phone during hard talks.",
        suggestion: "You escape; maybe closeness feels dangerous when you expect judgment."
      },
      {
        text: "I brag when I feel insecure.",
        suggestion: "You pump yourself up; I guess it's a way to cover a fragile spot."
      },
      {
        text: "If the kids don't respect me, I lose it.",
        suggestion: "Respect matters; could it be their pushback pricks a fear of failing as a dad."
      },
      {
        text: "I hate being misunderstood by my wife.",
        suggestion: "You hate that; I wonder if there's a grief of not being known beneath the anger."
      },
      {
        text: "I avoid therapy homework; it feels pointless.",
        suggestion: "You avoid; maybe there's a part afraid of what you might find if you slow down."
      }
    ],
    "case-marcus": [
      {
        text: "I feel nothing most days.",
        suggestion: "You feel flat; I wonder if numbness is protecting a lot of pain."
      },
      {
        text: "I sleep with the TV on.",
        suggestion: "You drown out the quiet; maybe silence brings memories and grief close."
      },
      {
        text: "I sit with my back to the wall.",
        suggestion: "You seek safety; I guess your body is still bracing for danger."
      },
      {
        text: "I don't answer when my sister calls.",
        suggestion: "You avoid; could it be staying distant keeps feelings manageable."
      },
      {
        text: "Loud noises make me jump and then I get angry at myself.",
        suggestion: "You jump then judge; I wonder if the anger covers shame about being vulnerable."
      },
      {
        text: "Good things feel unreal.",
        suggestion: "They feel unreal; maybe letting in good also opens the door to loss."
      },
      {
        text: "I drink to knock myself out sometimes.",
        suggestion: "You knock out; I guess it's to keep nightmares and feelings at bay."
      },
      {
        text: "I keep the lights low at home.",
        suggestion: "You keep it dim; could it be brightness feels too exposing."
      },
      {
        text: "I don't remember the last time I laughed.",
        suggestion: "You can't recall; I wonder if joy feels risky when you've had so much loss."
      },
      {
        text: "Part of me thinks I'm better off alone.",
        suggestion: "That part protects; maybe it fears hurting or being hurt again."
      }
    ]
  },
  "staying-in-contact-intense-affect": {
    "case-sara": [
      {
        text: "It hits me in a wave and I cannot stop sobbing.",
        suggestion: "I am here with you. Feel your feet on the floor—two slow exhales together—and we will let a small part of the wave move while the chair holds you."
      },
      {
        text: "My chest hurts like it is going to split.",
        suggestion: "Place a hand there if that helps. Let us breathe gently and notice just the edge of the ache for a moment, then we will come back to the room."
      },
      {
        text: "I want to run from this because it never ends.",
        suggestion: "That urge makes sense. Stay with me—heels heavy, eyes on me—and we will touch a drop of the pain and step back if it climbs."
      },
      {
        text: "Seeing his photo makes my stomach drop and I shake.",
        suggestion: "I see the shake. Look around and name two colors in the room. While we do, we will let a small part of that drop be here with us."
      },
      {
        text: "I can hardly breathe when I talk about the nights.",
        suggestion: "Let us lengthen the exhale together—out… and in…—and feel the back of the chair. We will only stay with a tiny slice of the night."
      },
      {
        text: "I feel stupid for crying this hard.",
        suggestion: "Tears make sense. We will slow the breath, soften the shoulders, and let the tears have a little space while I stay right here."
      },
      {
        text: "My hands go numb and I feel far away.",
        suggestion: "Let us wake the hands—rub them together—and find your feet on the ground. We will name 'far away' for one breath and come back."
      },
      {
        text: "It feels like a hole in my chest that will swallow me.",
        suggestion: "We will sit at the edge of that hole together—hand on chest, breath low—and notice a pin‑point of sensation, then return to the room."
      },
      {
        text: "I cannot look at you when I cry.",
        suggestion: "That is okay. Keep your gaze wherever is easiest and feel your feet. I will stay with you while we let a little of this be here."
      },
      {
        text: "I am afraid if I start I will never stop.",
        suggestion: "We will start and stop together. One small breath with the feeling, one breath in the room—tell me when it is enough."
      }
    ],
    "case-michael": [
      {
        text: "My jaw locks and heat blasts up my neck.",
        suggestion: "I am here. Unclench the jaw if you can, lower the shoulders, and take one slow exhale—let us notice the first sting under the heat for a moment."
      },
      {
        text: "I want to punch a wall right now.",
        suggestion: "Plant both feet, feel your hands, and breathe low with me. We will ride one small wave together and step back before it crests."
      },
      {
        text: "Humiliation burns when I replay it.",
        suggestion: "That burn is sharp. Keep your voice low with me—two slow breaths—and we will stay with just the edge of the burn and then pause."
      },
      {
        text: "I can feel the snap coming.",
        suggestion: "Good noticing. That is our pause point—heels heavy, jaw soft, long exhale—let us name 'snap' together and let it pass."
      },
      {
        text: "I am shaking with anger.",
        suggestion: "Let the shake have a little room while your feet anchor you. I am with you—one breath with the shake, one breath resting."
      },
      {
        text: "I hate feeling this small.",
        suggestion: "I hear that. Keep the breath steady—we will stay with the smallness for one breath only, then come back to the room."
      },
      {
        text: "Part of me wants to leave the session.",
        suggestion: "Thank you for saying it. Stay seated, hands on thighs, and let us take two slow exhales together while we hold just a sliver of this."
      },
      {
        text: "My voice is getting loud.",
        suggestion: "Let us lower it together—slow the pace—and feel the floor under your shoes. We will keep contact with what hurts without letting it run you."
      },
      {
        text: "I feel like exploding.",
        suggestion: "We will keep you safe—loosen the fists, broaden the chest, and notice the first jolt underneath the urge; we can pause anytime."
      },
      {
        text: "I do not trust myself right now.",
        suggestion: "I will hold the pace with you—one breath at a time, feet on the floor—while we let a tiny piece be here and then reset."
      }
    ],
    "case-jason": [
      {
        text: "Everything goes fuzzy and my heart is racing.",
        suggestion: "I am here. Look at one thing across the room, feel the chair under you, and take two slow exhales—we will touch a tiny bit of the racing and pause."
      },
      {
        text: "My hands shake and I want to disappear.",
        suggestion: "Let your hands rest on your legs—notice the warmth—and breathe low with me. We will let the shake be here for one breath."
      },
      {
        text: "I feel nauseous talking about this.",
        suggestion: "Okay—eyes on me if you can. Slow the breath and feel your feet. We will name 'nauseous' for a moment and then step back."
      },
      {
        text: "It feels like the room is closing in.",
        suggestion: "Let us widen the view together—name three colors you see—and keep a long exhale; we will stay only with the edge."
      },
      {
        text: "I cannot get a full breath.",
        suggestion: "Breathe with me—out longer than in—and feel your back against the chair. We will take this in sips."
      },
      {
        text: "I want to hide under the table.",
        suggestion: "That makes sense. Keep your seat, heels heavy; we will ride one small wave while staying connected here."
      },
      {
        text: "I cannot make eye contact right now.",
        suggestion: "That is okay. Pick a spot on the wall while we breathe together and let a small part of the fear move."
      },
      {
        text: "My ears are ringing and I feel trapped.",
        suggestion: "Let us orient—what are two sounds you hear besides the ringing?—and keep the exhale slow as we stay with just the edge."
      },
      {
        text: "I feel like crying and it is embarrassing.",
        suggestion: "Tears are welcome here. We will keep breathing slow and let a little of the feeling be here with us."
      },
      {
        text: "I think I should leave.",
        suggestion: "Thank you for saying that. Let us take one more slow breath together and check your body; we will pause anytime you need."
      }
    ],
    "case-laura": [
      {
        text: "A door slam and I vanish inside.",
        suggestion: "I am here. Feet, seat, breath—let us name 'vanishing' together for one breath, then we return to the room."
      },
      {
        text: "My body goes numb when I try to feel.",
        suggestion: "We will respect the numb. Rub your hands, feel the texture, and notice any tiny signal under the numb; we will not push."
      },
      {
        text: "I feel like the room is far away.",
        suggestion: "Let us orient gently—name two shapes you see—and keep the exhale slow while we hold a small piece of that distance."
      },
      {
        text: "My stomach drops and I freeze.",
        suggestion: "Okay—breathe low, soften the jaw, and let us stay with the drop for one breath, then release back to the chair."
      },
      {
        text: "I want to numb out right now.",
        suggestion: "That makes sense. Before we numb, feel your heels and take a slow exhale; we will touch one safe sliver and stop."
      },
      {
        text: "Tears come and I feel stupid.",
        suggestion: "Tears are welcome. I will hold the pace—breath slow, eyes soft—while we let a little of the feeling move through."
      },
      {
        text: "I cannot trust my body to keep me safe.",
        suggestion: "We will borrow mine—watch my breath, match my pace, and notice the chair under you; we will keep this very small."
      },
      {
        text: "I feel dizzy and far away.",
        suggestion: "Name one thing you see, one thing you hear, one thing you feel. We will stay with the edge of 'far away' and pause if needed."
      },
      {
        text: "Kindness makes me want to bolt.",
        suggestion: "I hear the bolt. Stay seated, eyes anywhere that is easy, and breathe with me; we will feel one breath of the urge and step back."
      },
      {
        text: "I do not want to feel this at all.",
        suggestion: "Understood. We will hold just a pin‑point of it together for one breath and then come back. You lead the pace."
      }
    ],
    "case-carlos": [
      {
        text: "Heat is rising—my fists want to clench.",
        suggestion: "Let your fingers uncurl and feel your palms on your legs. Breathe low with me—we will stay with one small wave and pause."
      },
      {
        text: "My voice wants to shout.",
        suggestion: "Let us lower it together and slow the pace. Feel your feet. We can hold what is hot without letting it explode."
      },
      {
        text: "I feel like breaking something.",
        suggestion: "Plant your feet, widen your chest, and take a slow exhale. We will name the urge, feel the first jolt, and step back."
      },
      {
        text: "Thinking of my kid's face guts me.",
        suggestion: "That shows your heart. Keep breath slow and hands steady; we will let a little of that ache be here with us."
      },
      {
        text: "I am about to walk out.",
        suggestion: "Thank you for telling me. Stay seated, heels heavy, and we will take two slow breaths before deciding next."
      },
      {
        text: "My chest is pounding.",
        suggestion: "Match my breathing—out longer than in—and feel the chair hold your back; we will ride a small crest and pause."
      },
      {
        text: "I cannot think straight when this hits.",
        suggestion: "Let us borrow the body first—feet, hands, jaw soft—so the thinking can come back; we will keep this brief."
      },
      {
        text: "I want to scare people off me.",
        suggestion: "I hear that protective part. Keep your eyes with me and breathe—we will hold just the edge of it together."
      },
      {
        text: "Respect—this is about respect.",
        suggestion: "Yes. Let us feel the first sting of disrespect for one breath while your feet anchor you; we can pause anytime."
      },
      {
        text: "I feel out of control.",
        suggestion: "I will hold steady with you—slow voice, slow breath—so you can feel a small piece and get the reins back."
      }
    ],
    "case-nina": [
      {
        text: "I cannot stop crying and I feel ashamed.",
        suggestion: "Tears make sense here. Let us slow the breath together and feel the chair support you while we let a little of the cry move."
      },
      {
        text: "My chest is tight and my head throbs.",
        suggestion: "Put a hand where it is tight if that helps. Breathe low with me—one breath with the tightness, one breath resting."
      },
      {
        text: "I keep saying sorry for feeling this much.",
        suggestion: "You do not need to apologize. Stay with me—heels heavy, slow exhale—and we will give this feeling a small bit of space."
      },
      {
        text: "I am shaking from holding everything together.",
        suggestion: "Let the shake have a little room while you feel the chair under you. We will go one breath at a time."
      },
      {
        text: "I feel like I am failing everyone.",
        suggestion: "That is heavy. Keep eyes on me if you can—slow breath—and we will stay with the edge of that feeling for a moment."
      },
      {
        text: "If I stop doing, I will fall apart.",
        suggestion: "We will not stop all at once—just pause here with me for two slow exhales and let a small piece move through."
      },
      {
        text: "I want to leave because this is too much.",
        suggestion: "Thank you for saying it. Stay seated, feel your feet, and we will check your body together—one more slow breath and we can pause."
      },
      {
        text: "I feel nauseous from stress.",
        suggestion: "Okay—eyes on a spot that is easy, breath out longer than in, and name one thing you can feel with your hands; we will keep this very small."
      },
      {
        text: "I cannot catch my breath.",
        suggestion: "Let us lengthen the exhale together and feel the back of the chair. We will take this in sips."
      },
      {
        text: "Part of me is scared to need anything.",
        suggestion: "I am here. We will stay with one breath of that fear while your feet anchor you, and stop if it rises."
      }
    ],
    "case-aisha": [
      {
        text: "If you look away I panic and cannot breathe.",
        suggestion: "Eyes here if you can. I am with you—let us lengthen the exhale and press your feet into the floor until a little space opens."
      },
      {
        text: "The emptiness burns and I want to hurt myself.",
        suggestion: "Thank you for telling me. Safety first—feel the chair, breathe with me—we will touch a tiny part of the burn for one breath and then come back."
      },
      {
        text: "I want to bolt from this room.",
        suggestion: "I hear the urge. Heels heavy, slow exhale, eyes with me—we will feel just the edge of 'bolt' together and pause if needed."
      },
      {
        text: "Goodbye makes me dizzy and terrified.",
        suggestion: "We will slow the breath, feel your feet, and plan the ending together so your body knows I am here until we finish."
      },
      {
        text: "I feel like I am too much.",
        suggestion: "I want to be here with you in this. Let us lower the shoulders and breathe—one small breath with the 'too much' feeling, then rest."
      },
      {
        text: "My chest feels like a black hole.",
        suggestion: "Place a hand there if you like. We will sit at the edge together—breath low—and name 'black hole' for one breath before coming back."
      },
      {
        text: "I keep checking that you are still here.",
        suggestion: "I am here. Keep your eyes where it is easiest and breathe with me—let us notice the smallest sign of safety in your body."
      },
      {
        text: "I want to scratch to feel something real.",
        suggestion: "Let us press your feet down, breathe slow, and hold the urge gently between us for one breath; we can pause anytime."
      },
      {
        text: "I cannot stop crying and I feel ashamed.",
        suggestion: "Tears are welcome here. Breathe with me and feel the chair—we will let a little of the shame move through and then rest."
      },
      {
        text: "If you cancel I will fall apart.",
        suggestion: "That fear is big. We will breathe together now and make a simple plan for hard days so your body knows what support is coming."
      }
    ],
    "case-david": [
      {
        text: "My face burns and I want to cut this off.",
        suggestion: "I am here. Drop the shoulders, feel your hands, slow the breath—we will stay with the burn for one breath and pause."
      },
      {
        text: "I feel exposed and furious.",
        suggestion: "That is sharp. Keep your voice low with me and breathe—we will hold a thin edge of it together, then step back."
      },
      {
        text: "I want to walk out.",
        suggestion: "Thank you for saying so. Stay seated, heels heavy, long exhale—we will check your body after two breaths and decide together."
      },
      {
        text: "Admitting I am wrong makes my stomach twist.",
        suggestion: "Let us notice the twist—hand on belly if helpful—one breath in, longer out; we will not push beyond the edge."
      },
      {
        text: "I cannot stand this word 'cold'.",
        suggestion: "Let us hold it together for one breath—'cold'—feel your hands and the chair; I am with you while we let a little of it be here."
      },
      {
        text: "I am embarrassed I snapped at home.",
        suggestion: "That embarrassment is hot. Lower the shoulders and breathe with me; we will keep contact with it for one breath and rest."
      },
      {
        text: "I feel like shutting down.",
        suggestion: "Let us slow the pace, soften the jaw, and keep the breath steady—we will stay with just the edge of shut‑down and pause if needed."
      },
      {
        text: "My chest feels hollow and tight.",
        suggestion: "Place a hand there if that helps and match my breathing—out longer than in—while we notice a small part of the tightness."
      },
      {
        text: "I am tempted to defend myself right now.",
        suggestion: "Let the defense rest for two breaths—feel your feet—and we will hold the first hurt underneath it together."
      },
      {
        text: "I want to blame everyone.",
        suggestion: "I hear that pull. Stay with me—slow breath, steady tone—and we will feel one breath of what is hardest under the blame."
      }
    ],
    "case-marcus": [
      {
        text: "A wave is rising and I do not want it.",
        suggestion: "We will take it in sips—look around and name two objects, feel your feet—and let one small wave pass while we stay in the room."
      },
      {
        text: "My body is buzzing after a nightmare.",
        suggestion: "Feet, seat, breath—let us ground first. We will hold a safe sliver of the buzz for one breath and then rest."
      },
      {
        text: "I feel nothing and everything at once.",
        suggestion: "That whiplash is rough. We will notice one tiny signal—tight, heavy, warm—and keep the exhale slow together."
      },
      {
        text: "I want to shut down.",
        suggestion: "We will let the shutdown know we hear it—heels heavy, long exhale—and stay with just the edge, then come back."
      },
      {
        text: "My hands tremble when I try to talk about it.",
        suggestion: "Let your hands rest on your legs and feel the contact; breathe low with me while we let a small part of the tremble be here."
      },
      {
        text: "Silence at home feels like a weight on my chest.",
        suggestion: "Place a hand on your chest if helpful; we will name 'weight' for one breath, then return to the room together."
      },
      {
        text: "Crowds make my skin buzz.",
        suggestion: "Let us orient to the space we are in—two things you see—and breathe out longer than in; we will hold just the edge."
      },
      {
        text: "I am afraid if I feel it will swallow me.",
        suggestion: "We will sit at the edge together—feet on the ground, steady breath—and touch one pin‑point of feeling, then pause."
      },
      {
        text: "I want to disappear.",
        suggestion: "Keep your eyes somewhere easy and feel the chair under you. I will stay with you while we let one breath of that urge move."
      },
      {
        text: "I cannot tell if I am here.",
        suggestion: "Let us name three things in this room and press your feet down. We will keep the breath slow while your body registers 'here'."
      }
    ]
  },
  "self-disclosure": {
    "case-sara": [
      {
        text: "Do you think I am being ridiculous still missing him?",
        suggestion: "I do not see you as ridiculous—I feel moved by how much this mattered, and I want to stay with you in it."
      },
      {
        text: "You probably get tired of hearing me cry.",
        suggestion: "I do not feel tired—I notice care and a wish to help you feel less alone as we sit with this."
      },
      {
        text: "Are you the type who gets uncomfortable with tears?",
        suggestion: "When tears come, I tend to feel protective and steady; if it helps, we can let them have a little room together."
      },
      {
        text: "Do you ever feel lonely like this?",
        suggestion: "I know loneliness in my own life; noticing that helps me slow down here with you and really make room for yours."
      },
      {
        text: "I am embarrassed you see me like this.",
        suggestion: "Right now I feel respect for your courage and closeness to you, not judgment."
      },
      {
        text: "Do you think I will always be alone?",
        suggestion: "A part of me hopes with you that this can change—and today I want to be right here so it feels a little less alone."
      },
      {
        text: "Am I too much for you?",
        suggestion: "I do not feel overwhelmed—I feel present and committed to staying with you as we go at your pace."
      },
      {
        text: "Are you in a relationship? Does that make you judge me?",
        suggestion: "I am partnered, and I am not judging you—I notice warmth and a wish to understand what this stirs for you."
      },
      {
        text: "I hate that I need anyone, even you.",
        suggestion: "Hearing that, I feel compassion and want to honor how hard it is to need, while staying close to you in it."
      },
      {
        text: "Do you actually care about me or just your job?",
        suggestion: "I care about you and what happens to you—I feel invested in being here with you as a person, not just a role."
      }
    ],
    "case-michael": [
      {
        text: "Be honest—do I sound weak talking like this?",
        suggestion: "As I listen, I do not hear weakness—I feel the sting you carry and a determination in me to help you get steadier."
      },
      {
        text: "Do you get angry like this?",
        suggestion: "I know what hot anger feels like in me; remembering that helps me stay calm with you while we track what hits."
      },
      {
        text: "You probably think I am the problem at home.",
        suggestion: "I do not see you as the problem—I feel curious about what hurts under the heat and want to map it with you."
      },
      {
        text: "Are you judging me for yelling?",
        suggestion: "I am not judging—I notice concern for you and your family, and a real wish to help you have more control in those moments."
      },
      {
        text: "Do therapists get bored hearing this stuff?",
        suggestion: "I do not feel bored—I feel engaged and focused on understanding the moment it flips for you."
      },
      {
        text: "Are you strong enough to handle me when I am mad?",
        suggestion: "Right now I feel solid with you; I want to stay steady so you do not have to carry this alone."
      },
      {
        text: "You look calm—does any of this get to you?",
        suggestion: "I feel the weight of it with you and I am keeping my body steady so we can slow the heat down together."
      },
      {
        text: "Do you even like working with guys like me?",
        suggestion: "I do—I feel respect for your directness and care about helping you keep your strength while changing what hurts."
      },
      {
        text: "Are you married? I wonder if you take your anger home.",
        suggestion: "I am partnered, and when I notice anger in me I work to slow it—that is the same steadying I want to help you practice here."
      },
      {
        text: "Tell me you get why this is hard.",
        suggestion: "I do—I can feel how hard it is, and I want to stand with you while we make it more workable."
      }
    ],
    "case-jason": [
      {
        text: "Am I wasting your time right now?",
        suggestion: "I value this time with you—I feel genuine interest in you, even when it is quiet."
      },
      {
        text: "Do you ever feel awkward like me?",
        suggestion: "I know awkwardness in myself; remembering that makes me want to move slowly and kindly with you here."
      },
      {
        text: "You probably think I am boring.",
        suggestion: "I do not feel bored—I notice curiosity and warmth toward you."
      },
      {
        text: "Is it okay that I do not know what to say?",
        suggestion: "It is okay—when clients go blank, I feel patient and want to help find one small signal together."
      },
      {
        text: "Are you disappointed I did not go to the party?",
        suggestion: "I am not disappointed—I feel care for how tough that was and interest in what got loud inside."
      },
      {
        text: "Do you like working with shy people?",
        suggestion: "I do—I feel calm and gentle here, and I want to make this a place that feels safe to try small steps."
      },
      {
        text: "Are you judging me for being quiet?",
        suggestion: "No—what I feel is respect for how hard you are trying and a desire to go at your pace."
      },
      {
        text: "Would you tell me if I said something dumb?",
        suggestion: "I would be honest kindly—and right now I feel protective of you as you take risks here."
      },
      {
        text: "Do you ever get nervous in groups?",
        suggestion: "I have—I remember the energy of that, and it helps me stay steady as we make groups easier for you."
      },
      {
        text: "Do you think I will ever be less anxious?",
        suggestion: "A hopeful part of me believes you can—I feel committed to helping your body learn safety a step at a time."
      }
    ],
    "case-laura": [
      {
        text: "Does this make you uncomfortable—me feeling nothing?",
        suggestion: "I do not feel uncomfortable—I feel gentle and patient, and I want to keep it very slow so it stays safe."
      },
      {
        text: "Are you annoyed I am not opening up?",
        suggestion: "I am not annoyed—I notice tenderness and respect for how carefully you are protecting yourself."
      },
      {
        text: "You seem calm—do you actually get what this is like?",
        suggestion: "I feel the gravity of it with you, and I am staying calm on purpose so we can move in tiny steps together."
      },
      {
        text: "Have you worked with trauma like mine before?",
        suggestion: "Yes, I have—and as I sit with you now I feel protective and careful about pacing this in a way that feels safe to you."
      },
      {
        text: "Does my story make you think less of me?",
        suggestion: "Hearing your story, I feel respect and sadness for what you carried—not judgment."
      },
      {
        text: "Will you push me to go into details?",
        suggestion: "I feel committed to not pushing—we will let your pace lead and keep things tolerable."
      },
      {
        text: "Can you tell when I am far away?",
        suggestion: "Often I can—I notice it as an emptiness in me, and I will check in gently when I sense it."
      },
      {
        text: "Do you think kindness will make me worse?",
        suggestion: "When I offer kindness here, I do it slowly; I notice a wish to help it feel safe rather than overwhelming."
      },
      {
        text: "Do you worry I will break down?",
        suggestion: "I do not—I feel steady and ready to slow or stop anytime you need."
      },
      {
        text: "Do you believe I can feel again?",
        suggestion: "A hopeful part of me does—I feel patient and committed to walking with you until more feeling is possible."
      }
    ],
    "case-carlos": [
      {
        text: "Do you think I am a bad dad for losing it?",
        suggestion: "Hearing that, I feel your care for your kid—and I want to stand with you while we build more control."
      },
      {
        text: "Are you going to try to make me soft?",
        suggestion: "I do not want to take your strength—I feel committed to helping you use it in ways that protect what you love."
      },
      {
        text: "Does any of this scare you?",
        suggestion: "I feel steady here with you—my focus is to help you catch what hits before it blows."
      },
      {
        text: "You probably think I am just an angry guy.",
        suggestion: "I do not—I notice the hurt under the heat, and I want to help you work with it."
      },
      {
        text: "Are you tough enough for me?",
        suggestion: "Right now I feel solid and on your side; I want to help you keep your edge without the explosion."
      },
      {
        text: "Do you respect me?",
        suggestion: "I do—I respect your honesty and your wish to change; that makes me want to work hard with you."
      },
      {
        text: "Does breathing stuff even work for you?",
        suggestion: "When I slow my breath, I feel steadier—it is one way I keep my footing so I can help you do the same."
      },
      {
        text: "Are you married? Do you ever lose your temper?",
        suggestion: "I am partnered, and when I notice my temper I slow myself; here I want to help you do that in the seconds that count."
      },
      {
        text: "Do you think I can actually change?",
        suggestion: "A part of me believes you can—I feel motivated to map the flashpoint with you until it shifts."
      },
      {
        text: "Be honest—do you like working with me?",
        suggestion: "I do—I like your directness and I feel invested in helping you have the family life you want."
      }
    ],
    "case-nina": [
      {
        text: "I feel selfish even taking up space here.",
        suggestion: "Hearing that, I feel protective of your time—you matter here, and I want to make room for what weighs on you."
      },
      {
        text: "Are you judging me for being resentful?",
        suggestion: "I am not judging—I notice care for how much you give and concern for the cost on you."
      },
      {
        text: "You probably think I should just toughen up.",
        suggestion: "I do not feel that—I feel compassion and a wish to help you have support and limits that fit you."
      },
      {
        text: "Do you ever feel guilty resting?",
        suggestion: "I have felt that tug; knowing it helps me slow down here and give you permission to need rest too."
      },
      {
        text: "Does this make you uncomfortable—me crying?",
        suggestion: "When you cry, I feel closer to you and more committed to moving slowly, not uncomfortable."
      },
      {
        text: "Am I being a burden to you?",
        suggestion: "I do not experience you as a burden—I feel honored to sit with you while we share the load for a bit."
      },
      {
        text: "Is it okay if I ask for help here?",
        suggestion: "Yes—when you ask, I feel glad; practicing that here can make it easier out there too."
      },
      {
        text: "Do you actually like working with me?",
        suggestion: "I do—I feel warmth toward you and want you to feel supported here."
      },
      {
        text: "Will you tell me if I am doing therapy wrong?",
        suggestion: "I will be honest and kind—right now I feel appreciation for how open you are."
      },
      {
        text: "Do you think I deserve care?",
        suggestion: "I do—and I feel strongly about helping you receive it, starting in this room."
      }
    ],
    "case-aisha": [
      {
        text: "Do you actually care about me or are you paid to?",
        suggestion: "I care about you as a person—right now I feel very with you—and I want to keep showing up in a way that feels steady."
      },
      {
        text: "Will you leave like everyone else?",
        suggestion: "I feel the ache in that fear; I want to be transparent and dependable here so we can keep building trust."
      },
      {
        text: "Did I scare you when I said I wanted to hurt myself?",
        suggestion: "I felt concerned and very present with you—your safety matters to me and I want us to plan for hard moments together."
      },
      {
        text: "You did not message me back and it hurt.",
        suggestion: "Hearing that, I feel a pang and I am sorry it hurt; I want to understand how it landed so we can repair."
      },
      {
        text: "Are you angry with me?",
        suggestion: "I do not feel angry—I notice care and a wish to help you feel safer with me right now."
      },
      {
        text: "Do you think I am too much?",
        suggestion: "I do not—I feel compassion and a desire to help you hold these big feelings together."
      },
      {
        text: "Do you like me?",
        suggestion: "I feel warmth toward you and I appreciate your honesty—thank you for asking."
      },
      {
        text: "Are you disappointed in me?",
        suggestion: "I do not feel disappointment—I feel glad you are telling me what is true so we can work with it."
      },
      {
        text: "Can you promise not to give up on me?",
        suggestion: "I feel committed to this work with you, and I want to keep naming fears together when they show up."
      },
      {
        text: "Do you think I will ever feel okay?",
        suggestion: "A hopeful part of me believes you can—we will go slowly and I will keep showing up with you."
      }
    ],
    "case-david": [
      {
        text: "Convince me this is worth my time.",
        suggestion: "Hearing that, I feel the urge to prove something—and I want to stay curious about what would make this feel worthwhile to you."
      },
      {
        text: "Do you even like working with someone like me?",
        suggestion: "I do—I feel engaged and I want to help you get results that matter at home and at work."
      },
      {
        text: "Are you impressed by me at all?",
        suggestion: "What I feel most right now is interest in you and respect for you bringing this here."
      },
      {
        text: "Be honest—do you think I am the problem?",
        suggestion: "I do not hold you as the problem—I feel focused on what happens in those tough moments and how we can widen your choices."
      },
      {
        text: "Are you bored?",
        suggestion: "I am not bored—I feel attentive and very present with you."
      },
      {
        text: "Will you tell me if I mess up?",
        suggestion: "I will be direct and kind—right now I feel invested in your success here."
      },
      {
        text: "Do you ever feel ashamed of being wrong?",
        suggestion: "I do at times; knowing that burn helps me keep steady with you when it shows up here."
      },
      {
        text: "Do you think I am cold?",
        suggestion: "I experience you as guarded when it hurts—what I feel is interest in the part that protects you."
      },
      {
        text: "Are you married? Does that make you judge my affair?",
        suggestion: "I am partnered, and I am not here to judge—I feel focused on understanding what led there and what you want different now."
      },
      {
        text: "Do you respect me?",
        suggestion: "I do—I feel respect for your drive and I want to help channel it in ways that bring you closer to what you value."
      }
    ],
    "case-marcus": [
      {
        text: "Do you think I am broken?",
        suggestion: "I do not—I feel respect for how you have survived, and I want to go at a pace that feels safe to you."
      },
      {
        text: "Are you frustrated that I do not feel much?",
        suggestion: "I am not frustrated—I notice patience in me and a wish to keep it very gentle."
      },
      {
        text: "Does this get to you?",
        suggestion: "I feel the weight of it and I am staying steady on purpose so we can touch small pieces together."
      },
      {
        text: "Do you even want me here?",
        suggestion: "I do—I feel glad you are here and I want to keep showing up alongside you."
      },
      {
        text: "Are you going to push me into stuff?",
        suggestion: "I feel committed to not pushing—we will let your pace lead and stop anytime it is too much."
      },
      {
        text: "Do you think I can change?",
        suggestion: "A hopeful part of me believes you can—and I want to earn your trust by going slow."
      },
      {
        text: "Would you tell me if I was wasting your time?",
        suggestion: "I would—and right now I feel that being with you like this matters."
      },
      {
        text: "Do you get scared by trauma stories?",
        suggestion: "I feel sorrow and care when I hear them, and I keep us grounded so it stays tolerable."
      },
      {
        text: "Do you like working with veterans?",
        suggestion: "I do—I feel respect for your service and a deep wish to make this room feel safer than most places do."
      },
      {
        text: "Are you okay with silence?",
        suggestion: "Yes—silence feels useful to me; I feel patient and will stay with you in it."
      }
    ]
  },
  "marker-recognition-chairwork": {
    "case-sara": [
      {
        text: "I keep hearing a voice saying, Stop being needy, just do better.",
        suggestion: "I am hearing a strong inner critic. Would you be willing to try a brief two-chair so you can answer that voice directly? I will guide us and we can stop anytime."
      },
      {
        text: "I want to tell my ex how small I felt, but it seems pointless now.",
        suggestion: "I hear unfinished business with him. We could place an empty chair for him and let you say what needs saying, just for a minute. I will keep it safe and brief."
      },
      {
        text: "Every time I tear up, another part says, pull it together.",
        suggestion: "That sounds like a live self-critic marker. Would you try sitting as the critic for one short turn, then switch and answer from the tender side? I will coach the turns."
      }
    ],
    "case-michael": [
      {
        text: "My father would have called me soft for feeling hurt.",
        suggestion: "I hear an unfinished business marker with your father. We could try a brief empty-chair: place him here and tell him what it was like. I will keep it structured and we can pause anytime."
      },
      {
        text: "In my head I say, Get control, you are pathetic.",
        suggestion: "That is a clear two-chair critic marker. Would you be open to speaking from that harsh voice for a minute, then switching to the hurt side to answer back?"
      },
      {
        text: "Part of me says I must be perfect; another part is just tired.",
        suggestion: "Sounds like an internal split. A short two-chair dialogue could help each side speak. I will guide short turns so it stays safe."
      }
    ],
    "case-jason": [
      {
        text: "I hear, Do not expose yourself, you will look stupid.",
        suggestion: "That inner critic is active. Would you try placing it in the other chair and telling it what it does to you, then let it speak back for one brief turn?"
      },
      {
        text: "I keep replaying the friend who stopped talking to me in high school.",
        suggestion: "I hear unfinished business. We could set an empty chair for that friend and let you say what was never said. I will time it and we can stop anytime."
      },
      {
        text: "Part of me wants to try, part of me shuts me down.",
        suggestion: "That is a split-marker. A short two-chair could help both parts speak and be heard. I will keep the turns simple and slow."
      }
    ],
    "case-laura": [
      {
        text: "When someone is kind, a voice says, Do not trust it.",
        suggestion: "I hear an inner protector. If you like, we can try a gentle two-chair: give that protector a chair and let it speak, then let your longing answer. We will keep it very brief and grounded."
      },
      {
        text: "I still want to tell my mother she did not protect me.",
        suggestion: "That sounds like unfinished business. We could place an empty chair for your mother and try one short, titrated turn, with permission to stop anytime."
      },
      {
        text: "A part says, Feel nothing or you will get hurt.",
        suggestion: "That is a protector vs feeling split. A short two-chair could help each part say its purpose. I will coach you and we will pause if arousal rises."
      }
    ],
    "case-carlos": [
      {
        text: "A voice says, If you are not on top, you are nothing.",
        suggestion: "I hear a tough inner coach. Would you try a two-chair: speak as that coach, then switch to the part that feels small and answer back? I will guide it."
      },
      {
        text: "I wish I could tell my father what his belt did to me.",
        suggestion: "That is unfinished business. We could set an empty chair for him and give your voice one strong, brief turn. We can stop anytime."
      },
      {
        text: "Part of me wants to protect; part of me feels ashamed afterward.",
        suggestion: "That split can be worked in a short two-chair: protector in one chair, ashamed part in the other. I will keep turns short and steady."
      }
    ],
    "case-nina": [
      {
        text: "The voice says, Do not ask for help, you are selfish.",
        suggestion: "Clear critic marker. Would you try speaking as that voice for one minute, then switch and let your needing side answer? I will coach and keep it safe."
      },
      {
        text: "I want to tell my ex I felt abandoned with the chores and the blame.",
        suggestion: "Unfinished business is here. We could place an empty chair for him and let you say what you held back, with permission to stop at any point."
      },
      {
        text: "I cannot decide between pleasing others and speaking up.",
        suggestion: "That is a split task marker. A brief two-chair can help both sides speak their fears and needs. I will time short turns."
      }
    ],
    "case-aisha": [
      {
        text: "A part screams, Push them away before they leave you.",
        suggestion: "I hear a powerful protector. Would you try a short, carefully guided two-chair so that protector can speak and the longing part can answer? We will go slowly and can stop anytime."
      },
      {
        text: "I want to ask my mother why she left me.",
        suggestion: "That is unfinished business. If you feel ready, we can try an empty-chair for her, one or two lines only, with grounding and the option to pause."
      },
      {
        text: "Inside I hear, You are too much to love.",
        suggestion: "That sounds like a critic message. A gentle two-chair could help you answer it directly. I will keep it very brief and supportive."
      }
    ],
    "case-david": [
      {
        text: "A voice says, Be the best or be nothing.",
        suggestion: "That is a strong inner driver. We could try a two-chair so the driver speaks and the more vulnerable side responds. I will guide short, focused turns."
      },
      {
        text: "I still want to tell my father that I was more than my results.",
        suggestion: "Unfinished business is here. An empty-chair with him could help you say that directly, with me keeping it safe and contained."
      },
      {
        text: "Part of me wants closeness; part of me shuts it down.",
        suggestion: "That split is workable in a brief two-chair. We will let each part speak for a minute so they can hear each other."
      }
    ],
    "case-marcus": [
      {
        text: "A part says, Do not feel, just keep guard.",
        suggestion: "Protector marker. If you are willing, we can try a very short two-chair: give the guard a voice, then let the lonely part answer. We will keep it titrated."
      },
      {
        text: "I want to tell my younger self he did not deserve what happened.",
        suggestion: "That is unfinished business with a younger self. An empty-chair with him for one or two lines could be healing. We will ground and stop if needed."
      },
      {
        text: "When someone reaches out, I pull away.",
        suggestion: "I hear a split between safety and contact. A brief two-chair could let both sides speak. I will keep it slow and safe."
      }
    ]
  },
  "alliance-repair": {
    "case-sara": [
      {
        text: "Last week when I cried, it felt like you moved on too quickly.",
        suggestion: "Thank you for telling me. You felt rushed while hurting, and I am sorry I missed that. Would it help if we slow more and I check in before shifting?"
      },
      {
        text: "When you asked about work again, I felt like you did not get how much this hurts.",
        suggestion: "I hear that my question landed as not getting it. That is on me. I want to stay with the pain here first, then decide together if and when to talk about work."
      },
      {
        text: "I worry you think I am too needy for therapy.",
        suggestion: "It makes sense to worry about that here. I am sorry if anything I did fed that. Can we agree I will say out loud if I am missing you, and you will flag it when you feel judged?"
      }
    ],
    "case-michael": [
      {
        text: "When you said I sounded hurt, it felt like you were calling me weak.",
        suggestion: "I can see how that could land. I am sorry. My aim was to respect what hit you. Would it fit better if I ask first and keep the language that feels strong to you?"
      },
      {
        text: "You keep pushing feelings; I said I need tools.",
        suggestion: "You are right to name that. I leaned too far into feeling without balancing tools. Let us co-plan: brief feeling check then a concrete strategy each time."
      },
      {
        text: "When you paused and looked at me, I felt judged.",
        suggestion: "Thanks for telling me. That pause was me thinking, but it felt like judgment to you. I will narrate my pauses and keep my face softer; please tell me if it creeps back in."
      }
    ],
    "case-jason": [
      {
        text: "When it was quiet for so long, I felt like I was failing.",
        suggestion: "I am glad you said that. The silence was meant to give space, and it felt like pressure. I am sorry. I will offer shorter prompts and check how the pace is for you."
      },
      {
        text: "You looked at the clock and I felt unimportant.",
        suggestion: "I see how that would sting. I am sorry. I will tell you if I need to check time, and we can set a heads-up before we wrap so it is not a surprise."
      },
      {
        text: "I felt pushed when you asked about my body right away.",
        suggestion: "Thank you for naming that. I moved too fast. How about I ask permission first and keep questions lighter, and you tell me if it is okay to go a step deeper?"
      }
    ],
    "case-laura": [
      {
        text: "When you asked about my childhood, I felt exposed and wanted to leave.",
        suggestion: "I am sorry that landed too fast. Thank you for staying. We can slow down and keep to the present unless you give a clear yes to look back."
      },
      {
        text: "When the door slammed outside, I went blank and you kept talking.",
        suggestion: "You are right, I missed the shift. I am sorry. Next time I will pause and ground with you first; can we practice a signal you can use if you start to blank?"
      },
      {
        text: "You were speaking quickly and I could not keep up.",
        suggestion: "I appreciate you saying that. I will slow my pace and check in more often; please stop me anytime it feels fast."
      }
    ],
    "case-carlos": [
      {
        text: "When you called it a burn in my chest, it felt like you were judging my anger.",
        suggestion: "I hear that. My intent was to track your body, not judge you. I am sorry it landed that way. I will ask first and use your words for it."
      },
      {
        text: "You keep telling me to slow down; it sounds soft.",
        suggestion: "Thanks for being direct. I respect that you want strength. Let us rename it to staying in control, and we will keep it firm and practical."
      },
      {
        text: "When I talked about my kid, you looked away and I felt dismissed.",
        suggestion: "I am sorry I looked away; I was taking a note, and it cost contact. I will keep my eyes with you there. Do you want to revisit that moment now for a minute?"
      }
    ],
    "case-nina": [
      {
        text: "When I cried, you were quiet and I felt alone with it.",
        suggestion: "I am sorry you felt alone. I should have said more. I will be more vocal in support when tears come and check if you want words or silence."
      },
      {
        text: "It felt like you took my ex's side about chores.",
        suggestion: "Thank you for telling me. I hear how that hurt. I was trying to understand both sides and I missed you. I am sorry. We will center your experience first."
      },
      {
        text: "I worry I am wasting your time.",
        suggestion: "Hearing that, I want to be clear: you are not a waste of time. If I gave that impression, I am sorry. Can we agree I will name our focus each session so it feels purposeful?"
      }
    ],
    "case-aisha": [
      {
        text: "When you did not reply to my message fast, I panicked and felt abandoned.",
        suggestion: "I am sorry my timing added to your pain. Your feelings make sense. Let us set clear message expectations together and what you can do between sessions when panic hits."
      },
      {
        text: "Ending on time felt like you dropped me.",
        suggestion: "Thank you for naming that. I see how the ending can feel abrupt. I will give a longer warning and we can plan a brief anchor before we close."
      },
      {
        text: "When you suggested a pause, it sounded like you were giving up on me.",
        suggestion: "I am sorry it landed that way. My aim was safety, not leaving. Next time I will say that plainly and ask what would help you feel held while we slow."
      }
    ],
    "case-david": [
      {
        text: "When you challenged me, it felt like an attack.",
        suggestion: "I hear that impact and I am sorry. Challenge without enough joining can feel like attack. I will anchor in your perspective first, then ask if you want a challenge."
      },
      {
        text: "You focus too much on feelings. I asked for strategy.",
        suggestion: "That is fair feedback. Let us co-plan: brief check-in on what hits you, then specific strategy reps each session."
      },
      {
        text: "It felt like you were siding with my wife.",
        suggestion: "Thank you for saying so. My intent was to understand, and I missed how that would land. I am sorry. I will be clearer about standing with you as we look at the pattern."
      }
    ],
    "case-marcus": [
      {
        text: "When I said I felt nothing, you kept asking and I shut down.",
        suggestion: "You are right; I pushed too far. I am sorry. I will back up and go slower, and you can signal me when you need a pause."
      },
      {
        text: "You sit too close; I felt on edge.",
        suggestion: "I appreciate you telling me. I am sorry for the discomfort. We can adjust the seating and confirm what feels safe for you."
      },
      {
        text: "When you asked about nightmares, I felt pressured.",
        suggestion: "Thank you for naming that. I will ask consent before touching trauma content and keep it in very small steps with grounding first."
      }
    ]
  }

};
