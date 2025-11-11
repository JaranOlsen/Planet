"use strict";

export const STATEMENT_SETS = {
  "therapist-self-awareness": {
    // Each suggestion invites the therapist to notice and regulate internal reactions before any brief meta-guidance.
    "case-sara": [
      {
        text: "I'm sorry, I'm probably overreacting. Other people have it worse. I'm fine-let's just talk about work.",
        suggestion: "[Internal] Soften shoulders, slow breath, notice rescuing urge. [Meta] I'd like to slow us down-I notice a pull to move away from your hurt, and I want to stay with it a little."
      },
      {
        text: "When I tear up here I feel silly, like I should be more put together.",
        suggestion: "[Internal] Ground feet; release jaw; bracket performance impulse. [Meta] Tears make sense here. Let's take a breath and give them a little room."
      },
      {
        text: "If I just keep busy I don't have to think about the breakup. Maybe that's better?",
        suggestion: "[Internal] Notice fixing agenda; return to attunement. [Meta] A part of you wants relief by staying busy-let's check what happens inside as you say that."
      }
    ],
    "case-michael": [
      {
        text: "People keep nitpicking. If someone questions me, I'm not going to sit there and take it.",
        suggestion: "[Internal] Feel feet; slow breath; soften chest; notice defensiveness. [Meta] I hear how hot that gets-before we go further, let me stay with the sting underneath for a moment."
      },
      {
        text: "My wife says I'm too angry. Maybe I am-but honestly she provokes me.",
        suggestion: "[Internal] Track urge to argue or educate; re-center. [Meta] I want to understand what it's like right in that moment before the anger-what shows up in you?"
      },
      {
        text: "I didn't come here to talk about feelings. I need strategies.",
        suggestion: "[Internal] Notice pressure to perform or prove; soften voice. [Meta] We can go at your pace-first I want to be sure I'm getting what's hardest right now."
      }
    ],
    "case-jason": [
      {
        text: "I'm probably wasting your time. I never know what to say in here either.",
        suggestion: "[Internal] Breathe low; ease urgency to reassure; attune to shame. [Meta] Part of you worries you're wasting time-can we pause and notice what happens in your body as you say that?"
      },
      {
        text: "My mind goes blank when you ask how I feel. I'm sorry.",
        suggestion: "[Internal] Notice subtle impatience; soften pace; widen window. [Meta] It's okay to not have words yet-let's stay with the blank for a moment and see what it's like."
      },
      {
        text: "If I speak up at work everyone will think I'm stupid.",
        suggestion: "[Internal] Track urge to advise; re-anchor in empathy. [Meta] That fear sounds really strong-let's slow down with it; where do you feel it right now?"
      }
    ],
    "case-laura": [
      {
        text: "Honestly, I don't feel much of anything. It's just... flat.",
        suggestion: "[Internal] Release pressure to make something happen; breathe; settle. [Meta] We can stay gentle here-what's the quality of this flatness in your body, even a little?"
      },
      {
        text: "When voices get loud I check out. I don't want to go there.",
        suggestion: "[Internal] Monitor arousal; titrate; keep voice warm. [Meta] Thank you for saying that-we'll go slowly. Could we notice together what starts to happen just before you check out?"
      },
      {
        text: "Maybe I'm just broken. Maybe feeling isn't for me.",
        suggestion: "[Internal] Notice sadness in me; bracket urge to convince; re-attune. [Meta] Hearing 'broken' lands heavy-let's take a breath and stay with what makes it feel that way."
      }
    ],
    "case-carlos": [
      {
        text: "If a guy disrespects me, I'm not backing down. That's just how it is.",
        suggestion: "[Internal] Feel feet; relax fists; widen stance; keep tone steady. [Meta] I hear how important respect is-can we look at the instant right before the heat rises in you?"
      },
      {
        text: "My kid saw me punch the wall. I hate that, but he shouldn't have been in the way.",
        suggestion: "[Internal] Track protectiveness; soften judgment; stay present. [Meta] That moment sounds painful-let's slow down with what hit you inside seeing his face."
      },
      {
        text: "You're not going to tell me to be soft, are you?",
        suggestion: "[Internal] Notice pull to defend the model; breathe; stay collaborative. [Meta] We'll work with what matters to you-maybe we can start by understanding what 'soft' would risk."
      }
    ],
    "case-nina": [
      {
        text: "I know I shouldn't complain. Other people have real problems. I just need to try harder.",
        suggestion: "[Internal] Notice over-functioning impulse; slow pace. [Meta] A part of you says 'try harder'-could we gently notice what gets heavy inside when you say that?"
      },
      {
        text: "When I ask for help I feel instantly guilty. I want to take it back.",
        suggestion: "[Internal] Breathe; set down fixing; attune to guilt. [Meta] That guilt feels quick-let's pause with it for a moment together."
      },
      {
        text: "I handle everything at home. It's fine. I don't want to be a burden here either.",
        suggestion: "[Internal] Note urge to reassure; return to sensing. [Meta] I hear 'don't be a burden'-what happens in your chest as you say that?"
      }
    ],
    "case-aisha": [
      {
        text: "You didn't reply to my message right away. I felt like you forgot me and I freaked out.",
        suggestion: "[Internal] Ground; lengthen exhale; steady eye contact; notice own urgency. [Meta] I'm here now-let's slow the breath together and stay with how frightening that felt."
      },
      {
        text: "If you ever leave, I won't survive. Don't leave me.",
        suggestion: "[Internal] Notice pull to promise or fix; re-center; soften voice. [Meta] I hear how terrifying that is-let's take this one step at a time and feel a little of that fear together."
      },
      {
        text: "I almost cut last night because the emptiness was too much.",
        suggestion: "[Internal] Monitor arousal; anchor feet and seat; keep pace slow; consult safety plan if needed. [Meta] Thank you for telling me-can we feel a small, safe slice of that emptiness right now, with me here?"
      }
    ],
    "case-david": [
      {
        text: "Let's be honest-you probably don't have the experience to help someone like me.",
        suggestion: "[Internal] Notice sting and defensiveness; soften chest and face; re-attune. [Meta] It sounds hard to trust help-before we decide anything, I want to understand what feels at stake for you here."
      },
      {
        text: "My wife calls me a narcissist. People love to tear down success.",
        suggestion: "[Internal] Track urge to confront; breathe; keep tone warm. [Meta] That word lands sharply-could we stay with what it touches in you when she says it?"
      },
      {
        text: "I'm not here to talk about feelings; I want solutions.",
        suggestion: "[Internal] Set down pressure to justify approach; ground. [Meta] We can be practical-and first, a clearer picture of what hurts will help us choose the right steps."
      }
    ],
    "case-marcus": [
      {
        text: "There isn't much to say. I'm fine.",
        suggestion: "[Internal] Notice impatience or hopelessness; slow breath; accept quiet. [Meta] We can go slow-what's 'fine' like in your body right now, even if it's just a dull hum?"
      },
      {
        text: "I don't sleep-nightmares keep coming. Talking about it won't change what happened.",
        suggestion: "[Internal] Track activation; keep voice low and steady; titrate contact. [Meta] We won't push-maybe we can notice together what your body does as you mention the nightmares."
      },
      {
        text: "People don't stick around. It's easier to be alone.",
        suggestion: "[Internal] Feel feet; sense warmth; bracket urge to persuade. [Meta] That makes sense given what you've lived-can we sit with what alone feels like, right here for a moment?"
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
        suggestion: "It makes sense to worry about spiraling. In EFT we go slowly and safely so feelings can be named and understood; when they are clearer, loneliness eases and choices open up."
      },
      {
        text: "Why focus on emotion and not goals and productivity hacks?",
        suggestion: "Given how driven you are, that question fits. Emotion work helps because feelings carry information about needs and limits; when we listen to them, you can set goals that actually support you."
      },
      {
        text: "If I start crying, will we just stay stuck there?",
        suggestion: "Tears make sense here. We will titrate, not drown in it; a little contact with the feeling helps it move and tells us what matters most to you."
      }
    ],
    "case-michael": [
      {
        text: "I need anger control, not touchy feely stuff. How does talking about feelings help?",
        suggestion: "It makes sense to want control. In EFT we map what anger is protecting so you can catch the sting underneath faster and choose a steadier response."
      },
      {
        text: "Isn't this just excusing bad behavior?",
        suggestion: "Good to name that concern. Understanding your reactions is not excusing them; it gives you leverage to change them in the moments that count."
      },
      {
        text: "Why slow down when I am under pressure to perform?",
        suggestion: "Because slowing for seconds helps you notice the first hit in your chest; that clarity is what lets you steer instead of snapping."
      }
    ],
    "case-jason": [
      {
        text: "Does this really help with social anxiety? I just want to be confident.",
        suggestion: "It makes sense to want confidence fast. In EFT we help your body recognize the fear and shame signals early so confidence can grow from feeling safer inside."
      },
      {
        text: "What if I blank when you ask about feelings?",
        suggestion: "Blanking is common. We start with simple sensing so your system learns it is safe to notice and speak a little at a time."
      },
      {
        text: "Why pay attention to body sensations?",
        suggestion: "Because your body is where anxiety shows up first. Tracking it gives us a handle to work with, not just thoughts about it."
      }
    ],
    "case-laura": [
      {
        text: "I think this is chemical. How would talking help?",
        suggestion: "That view makes sense. We can still ease suffering by helping your system feel safer and by gently naming what has been held down; many people find mood shifts as their nervous system settles."
      },
      {
        text: "I do not want to relive trauma.",
        suggestion: "You will not be pushed to relive anything. EFT works in small doses with grounding so you can feel a little and come back, building safety and choice."
      },
      {
        text: "What is the point if I feel numb?",
        suggestion: "Numbness is a smart protector. We will respect it and look for small signals underneath; even a little awareness can reconnect you without overwhelm."
      }
    ],
    "case-carlos": [
      {
        text: "Will this make me soft? I need to stay strong.",
        suggestion: "Strength matters here. Learning what hits you inside first is not softness; it is control, because it lets you choose before fists or words fly."
      },
      {
        text: "Why talk about feelings instead of just giving me tools?",
        suggestion: "Tools work best when they are tuned to the moment. Emotion work shows us the exact trigger and need so the tool you use actually fits."
      },
      {
        text: "How does this help me at work when guys disrespect me?",
        suggestion: "We will map the flashpoint so you can feel the first jolt of humiliation or fear and respond with firm, steady respect for yourself instead of an explosion."
      }
    ],
    "case-nina": [
      {
        text: "Isn't it selfish to focus on my feelings?",
        suggestion: "Given your history of caring for others, that worry makes sense. Knowing your feelings clarifies needs and limits so you can care sustainably, not selfishly."
      },
      {
        text: "What will noticing my body even do?",
        suggestion: "Your body tells us early when guilt or sadness shows up; noticing that lets you pause, name it, and choose, instead of being driven by it."
      },
      {
        text: "I just want practical steps.",
        suggestion: "We will be practical. A brief rationale is that emotions point to needs; once we hear them, we can design clear requests and boundaries."
      }
    ],
    "case-aisha": [
      {
        text: "Talking about abandonment makes me panic. Why would we go there?",
        suggestion: "It makes sense it feels scary. We will go slowly and only as you want; touching a little of the fear with support can reduce its grip and help you feel steadier."
      },
      {
        text: "What if you leave me like everyone else?",
        suggestion: "That fear is important to name. Part of our work is building a reliable, predictable process so you can test and feel what consistent support is like."
      },
      {
        text: "How does this help when I want to hurt myself?",
        suggestion: "We map what leads up to that urge and find safer ways to ease the unbearable feeling; naming and soothing the core pain lowers the need to harm."
      }
    ],
    "case-david": [
      {
        text: "I want performance coaching, not feelings.",
        suggestion: "Wanting results makes sense. Emotion work gives you the data under reactions so your leadership and home life become more responsive and less reactive."
      },
      {
        text: "I already know the theory. Why talk about it here?",
        suggestion: "Knowledge helps; practice changes patterns. We will apply it to live moments so your system learns a different response, not just the idea of one."
      },
      {
        text: "My wife is the problem. Why focus on me?",
        suggestion: "It is natural to see the problem out there. Working with your inner triggers gives you influence regardless of what others do."
      }
    ],
    "case-marcus": [
      {
        text: "Talking will not change what happened.",
        suggestion: "True, it cannot change the past. It can change how your body carries it now, so the numbness and waves are less extreme and life opens a little."
      },
      {
        text: "I do not want to get flooded.",
        suggestion: "We will not push. We will ground and work in small steps so you can feel a little, settle, and build control."
      },
      {
        text: "Why notice my body when I prefer to ignore it?",
        suggestion: "Because your body signals danger or relief before words do; learning those signals lets you steer sooner and suffer less."
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
        text: "Talking about the breakup makes me cry and I feel like I will lose control.",
        suggestion: "I am right here. Let's slow the breath together and feel your feet on the floor. We will touch a small slice of this and back off if it is too much."
      },
      {
        text: "Nights feel unbearable and my chest aches like it will crack.",
        suggestion: "Yes, that is a lot. Stay with me for two slow breaths, hand on chest if that helps, and notice the ache just a little while you feel the chair holding you."
      },
      {
        text: "I want to push this away because the grief feels endless.",
        suggestion: "That makes sense. For just a moment, let's let a drop of the grief be here while we keep one foot in the room. Tell me if it rises too high."
      }
    ],
    "case-michael": [
      {
        text: "When someone calls me out, rage shoots up and I cannot stop it.",
        suggestion: "I am with you. Feel your feet, loosen your jaw, and drop your shoulders. Let's take one breath and notice the first sting under the heat without judging it."
      },
      {
        text: "I feel humiliated replaying it and my chest is tight.",
        suggestion: "That tightness shows how hard this hits. Stay with me and breathe low into the belly. We will feel a little of that sting and step back if it spikes."
      },
      {
        text: "Part of me wants to walk out right now.",
        suggestion: "Thank you for saying that. Let's keep one hand on the chair, one on your chest, and take two breaths together so we can stay with a small piece safely."
      }
    ],
    "case-jason": [
      {
        text: "My heart pounds and I feel dizzy when you ask about me.",
        suggestion: "I am here with you. Let's orient to the room, name three things you see, and feel your feet. We will feel a tiny bit of the pounding and pause if needed."
      },
      {
        text: "Shame rushes in and I want to hide.",
        suggestion: "That rush is strong. Lower the shoulders, soften the breath, and notice the edge of the shame with me for one breath, then we can step back."
      },
      {
        text: "I feel like I might faint.",
        suggestion: "Okay, sit back, feel the chair and the cool air on your skin. We will take it in sips - a small look at the fear, then back to the room."
      }
    ],
    "case-laura": [
      {
        text: "A loud voice outside just now made my stomach drop and I went blank.",
        suggestion: "I am with you. Let's ground together - feet, seat, breath. We will name 'stomach drop' for one breath and come back to the room if it gets too much."
      },
      {
        text: "When I feel anything, panic rises and I want to numb out.",
        suggestion: "That panic makes sense. For a moment, stay with me and notice the first ripple of feeling while we keep attention on your feet and the air moving in and out."
      },
      {
        text: "I feel far away right now.",
        suggestion: "Thank you. I am here. Look around and name the color of the wall. As you do, see if a small signal of feeling is there that we can touch and then rest."
      }
    ],
    "case-carlos": [
      {
        text: "I can feel the heat building in my chest right now.",
        suggestion: "Good noticing. Plant your feet, unclench your jaw, and lower your voice with me. We will ride one wave together and step back before it crests."
      },
      {
        text: "Thinking about my kid's face makes my eyes burn.",
        suggestion: "That burn shows how much you care. Breathe low, feel your hands, and let a small bit of that burn be here with me for two breaths."
      },
      {
        text: "I want to bolt from this room.",
        suggestion: "I hear that. Stay seated with your heels heavy and take a slow exhale. We will feel a safe slice of the urge and then check your body again."
      }
    ],
    "case-nina": [
      {
        text: "I am crying and feel guilty for falling apart.",
        suggestion: "Tears make sense. I am here. Let's slow the breath and feel the support of the chair while we let a little of the cry move through."
      },
      {
        text: "My chest is tight and my head aches from holding so much.",
        suggestion: "That is a lot to carry. Put a hand on your chest if that helps, and we will breathe together for two cycles, staying with a small piece of the tightness."
      },
      {
        text: "I feel like I might break if I stop.",
        suggestion: "We will go slowly. Keep one eye on me and one on the feeling - just a sip - and then we will come back to the room."
      }
    ],
    "case-aisha": [
      {
        text: "If you look away, panic explodes and I cannot breathe.",
        suggestion: "I will stay with you. Eyes here if you can. Let's lengthen the exhale together and feel your feet until a little space opens."
      },
      {
        text: "Last night I wanted to hurt myself because the emptiness felt unbearable.",
        suggestion: "Thank you for telling me. We will stay safe and go slow. Feel the chair, breathe with me, and let us touch a tiny part of that emptiness for one breath, then come back."
      },
      {
        text: "I want to run out of the room right now.",
        suggestion: "I hear the urge. Can we try pressing your feet into the floor and taking two slow exhales while we name 'urge to run' together, then we can reassess."
      }
    ],
    "case-david": [
      {
        text: "Hearing 'cold' makes my face burn and I want to lash out.",
        suggestion: "I am here with you. Drop the shoulders, feel your hands, and take one slow breath as we notice the burn without acting on it."
      },
      {
        text: "Right now I feel exposed and angry.",
        suggestion: "That exposed feeling is sharp. Stay with me and breathe low; we will feel a small piece of it and step back if it spikes."
      },
      {
        text: "I want to shut down this whole conversation.",
        suggestion: "Thanks for naming it. Keep one hand on the chair and one on your chest; two slow breaths, and we will stay with just the edge of the urge."
      }
    ],
    "case-marcus": [
      {
        text: "A wave is rising and I do not want to feel it.",
        suggestion: "We will take it in sips. Look around and name three objects, then feel your feet. With me, let one small wave pass and we will come back to the room."
      },
      {
        text: "I woke up soaked from a nightmare and now I feel nothing and everything.",
        suggestion: "That whiplash is hard. We will ground first - feet, seat, breath - and touch a safe sliver of what is here, then step back."
      },
      {
        text: "Silence at home feels like giving up.",
        suggestion: "I am here. As we sit together, breathe low and notice if a small feeling shows up under the silence; we will stay only as long as it feels safe."
      }
    ]
  },
  "self-disclosure": {
    "case-sara": [
      {
        text: "I feel stupid for crying over this again.",
        suggestion: "Hearing that, I feel protective of you; your tears make sense to me, and I want to stay with you here."
      },
      {
        text: "I should not need anyone; it is embarrassing.",
        suggestion: "As you say that, I notice a heaviness in me, which tells me how much you have had to carry alone."
      },
      {
        text: "I worry you will think I am too much.",
        suggestion: "I feel glad you told me that; I want you to know I want to be here with you in this."
      }
    ],
    "case-michael": [
      {
        text: "I lost it at work again and felt humiliated.",
        suggestion: "Hearing 'humiliated,' I feel a squeeze in my chest; it makes sense this stings so much."
      },
      {
        text: "Being seen as weak is the worst thing.",
        suggestion: "As you say 'weak,' I notice myself slowing down; I want to make room for what hurts under that word."
      },
      {
        text: "Do not make me talk about feelings.",
        suggestion: "I notice a pull in me to prove this helps; I want to own that and stay focused on what matters most to you."
      }
    ],
    "case-jason": [
      {
        text: "I am probably wasting your time.",
        suggestion: "I feel touched you said that out loud; I value being with you even when words are hard to find."
      },
      {
        text: "People will think I am stupid if I speak.",
        suggestion: "Hearing that fear, I feel a softness in me; it tells me how much this matters to you."
      },
      {
        text: "I stayed home instead of going out again.",
        suggestion: "I notice sadness in me as you describe staying home; I want to stay close to what that part of you needed."
      }
    ],
    "case-laura": [
      {
        text: "Mostly I feel nothing.",
        suggestion: "As you say 'nothing,' I feel a tenderness in me; we can keep this very gentle and at your pace."
      },
      {
        text: "Raised voices make me panic.",
        suggestion: "I notice my voice softening as I hear that; I want you to feel how with you I am as we ground together."
      },
      {
        text: "Kindness makes me go distant.",
        suggestion: "Hearing that, I feel sad for how alone that must have felt, and I want to stay with you as we notice it."
      }
    ],
    "case-carlos": [
      {
        text: "I punched the wall and my kid saw it.",
        suggestion: "Hearing about your son's face, my chest tightens; it shows me how much you care about being the dad you want to be."
      },
      {
        text: "Disrespect sets me off fast.",
        suggestion: "As you say 'disrespect,' I feel a seriousness in me; I want to go slowly right at the place that burns."
      },
      {
        text: "You are not going to try to make me soft, right?",
        suggestion: "I notice a wish in me to earn your trust; I want to keep this practical and on your side."
      }
    ],
    "case-nina": [
      {
        text: "If I rest, I feel selfish.",
        suggestion: "I feel a pang hearing that; it makes sense given what you learned about caring for others first."
      },
      {
        text: "I am tired of doing everything.",
        suggestion: "As you say that, I feel moved; you have carried a lot for a long time."
      },
      {
        text: "I do not want to burden you here.",
        suggestion: "I notice warmth in me for you naming that; you are not a burden here, and I want to stay with what feels heavy."
      }
    ],
    "case-aisha": [
      {
        text: "If you leave me, I will not survive.",
        suggestion: "I feel a pull to reassure you right now; I want you to know I am here with you in this moment."
      },
      {
        text: "Last night I wanted to hurt myself to make it stop.",
        suggestion: "Hearing that, I feel concerned and very with you; your safety matters to me as we find steadier ground."
      },
      {
        text: "You did not text me back and it hurt.",
        suggestion: "I notice a pang in me hearing that; I am sorry that hurt and I want to tend to it together."
      }
    ],
    "case-david": [
      {
        text: "You probably cannot help someone like me.",
        suggestion: "I notice a small sting in me hearing that; it tells me trust is hard here, and I want to understand that better."
      },
      {
        text: "My wife calls me a narcissist.",
        suggestion: "Hearing that word, I feel the weight in the room; I want to stay with the hurt under the burn."
      },
      {
        text: "I want solutions, not feelings.",
        suggestion: "I notice a part of me wanting to convince you; I will keep it brief and useful while we also notice what drives the reactions."
      }
    ],
    "case-marcus": [
      {
        text: "Most days I feel nothing.",
        suggestion: "As you say that, I feel a heaviness in me; we can go at your pace and keep it safe."
      },
      {
        text: "The nightmares are back.",
        suggestion: "Hearing about the nights, I feel a steadying urge to slow with you; I am here as we take it one step at a time."
      },
      {
        text: "Being around people feels risky.",
        suggestion: "I notice respect in me for how you have kept yourself safe; I want to honor that as we work."
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
