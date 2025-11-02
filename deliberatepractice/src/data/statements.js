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
        text: "Evenings are the hardest; the quiet makes me feel like I was never enough to be chosen.",
        suggestion: "In the quiet it feels like not being enough settles over you."
      },
      {
        text: "When I start to cry, I quickly say I am fine so I do not make it awkward.",
        suggestion: "Tears rise and right away you try to make it easier for everyone."
      },
      {
        text: "If I keep achieving, maybe I will not have to feel this loneliness.",
        suggestion: "Achieving feels like a way to hold loneliness at bay for a bit."
      }
    ],
    "case-michael": [
      {
        text: "When someone corrects me, my chest tightens and I snap before I know it.",
        suggestion: "A correction lands like a blow in your chest and anger surges to protect you."
      },
      {
        text: "After I yell, I hate myself for it, but in the moment it feels necessary.",
        suggestion: "In the moment it feels necessary, and afterward the shame hits hard."
      },
      {
        text: "Respect matters so much that even a small eye roll feels like an attack.",
        suggestion: "Even small signs can sting like disrespect and light up that old hurt."
      }
    ],
    "case-jason": [
      {
        text: "In meetings my mind goes blank and I hear a voice saying do not expose how awkward you are.",
        suggestion: "Blankness and a harsh inner voice make speaking feel dangerous."
      },
      {
        text: "When friends invite me, I want to go but I freeze and answer too late.",
        suggestion: "You long to go, and freezing keeps you on the outside again."
      },
      {
        text: "Sunday nights I lie there feeling like I will always be alone.",
        suggestion: "Sunday night brings a heavy loneliness that says you will always be alone."
      }
    ],
    "case-laura": [
      {
        text: "Most days feel muted, like I am moving through fog and nothing really reaches me.",
        suggestion: "It is like a fog where feeling cannot quite reach you."
      },
      {
        text: "Raised voices make my stomach drop and I want to leave the room.",
        suggestion: "Raised voices drop your stomach and your body wants out right away."
      },
      {
        text: "I want closeness, but when someone gets near I go numb and disappear inside.",
        suggestion: "You want closeness and then numbness comes in to keep you safe by pulling you away."
      }
    ],
    "case-carlos": [
      {
        text: "If someone looks at me sideways, I feel heat and my fists clench.",
        suggestion: "A sideways look lights heat in you and your body readies to defend."
      },
      {
        text: "Seeing my kid flinch after I punched the wall guts me.",
        suggestion: "Seeing his flinch cuts deep and shows you how much this matters to you."
      },
      {
        text: "I tell myself it is just stress, but part of me fears I am turning into my dad.",
        suggestion: "Under the stress there is a real fear of becoming who hurt you."
      }
    ],
    "case-nina": [
      {
        text: "When I ask for help, guilt floods in and I apologize for needing anything.",
        suggestion: "The moment you reach for help, guilt rushes in and you pull back."
      },
      {
        text: "I get resentful doing everything, then I feel bad for feeling resentful.",
        suggestion: "You carry so much that resentment rises, and then shame piles on top."
      },
      {
        text: "Sometimes I sit in the car before going inside just to gather myself.",
        suggestion: "You pause in the car to gather pieces of yourself before going back in."
      }
    ],
    "case-aisha": [
      {
        text: "When a text is not answered right away, it feels like I am falling into a hole.",
        suggestion: "Those minutes of silence feel like a bottomless drop inside."
      },
      {
        text: "I can adore someone and then, if I feel them pull back, I panic and push them away first.",
        suggestion: "The moment you sense distance, panic flares and you push to avoid being left."
      },
      {
        text: "The emptiness in my chest can feel like it will swallow me.",
        suggestion: "That emptiness feels huge, like it could swallow you whole."
      }
    ],
    "case-david": [
      {
        text: "When my wife calls me cold, I feel exposed and then I get furious.",
        suggestion: "Being called cold stings like exposure, and anger rushes in to cover it."
      },
      {
        text: "If I am not impressive, I do not know who I am in a room.",
        suggestion: "Without being impressive, it feels like your sense of self slips."
      },
      {
        text: "Since the affair came out, there is a dull emptiness I cannot shake even when things look fine.",
        suggestion: "On the surface things look fine, and underneath a dull emptiness lingers."
      }
    ],
    "case-marcus": [
      {
        text: "Most days I run on autopilot and feel nothing, then out of nowhere a wave hits me.",
        suggestion: "You move through the day numb, and then a sudden wave can crash in."
      },
      {
        text: "Nightmares wake me soaked, and the next day I just go quiet and get through it.",
        suggestion: "The nights flood you, and the next day you armor up in quiet to get through."
      },
      {
        text: "Being alone feels safer, but sometimes the silence feels like giving up.",
        suggestion: "Alone feels safer, and the silence can also feel like giving up on being known."
      }
    ]
  },
  "empathic-affirmation-validation": {
    "case-sara": [
      {
        text: "Nights feel endless since the breakup. I keep thinking this proves I was not worth staying for.",
        suggestion: "Given how much this mattered and what you have carried, it makes sense the nights hurt and those thoughts show up."
      },
      {
        text: "I feel silly crying here. I should be stronger by now.",
        suggestion: "Of course tears come here; after a loss like this, anyone would feel tender."
      },
      {
        text: "I hate needing help. It makes me feel weak.",
        suggestion: "It makes sense needing help feels risky when you learned you had to hold it together."
      }
    ],
    "case-michael": [
      {
        text: "Getting corrected in front of my team felt humiliating. I blew up, and now I feel ashamed.",
        suggestion: "Anyone in that spot would feel stung and ashamed; it makes sense anger rushed in to protect you, even if it did not help."
      },
      {
        text: "When people say I am too intense, it feels like they are calling me weak.",
        suggestion: "Given how you were judged growing up, it makes sense comments land like attacks on your worth."
      },
      {
        text: "I push myself to be perfect so no one can take me down.",
        suggestion: "It makes sense you strive so hard to stay safe from criticism."
      }
    ],
    "case-jason": [
      {
        text: "When it is my turn to talk, panic clamps my throat and I say nothing.",
        suggestion: "Of course your body freezes when it feels so risky to be seen; anyone would struggle in that moment."
      },
      {
        text: "I want to go out, but I keep backing out at the last minute.",
        suggestion: "It makes sense you pull back when fear and self doubt spike."
      },
      {
        text: "I feel pathetic for being this lonely.",
        suggestion: "Loneliness hurts deeply; it makes sense you feel this low given what you have been through."
      }
    ],
    "case-laura": [
      {
        text: "Most days I feel numb. I know I should feel more, but I cannot.",
        suggestion: "After what you have lived, it makes sense numbness shows up to protect you."
      },
      {
        text: "Raised voices make my stomach drop and I need to leave.",
        suggestion: "Of course your body reacts; with your history, anyone would want to get safe fast."
      },
      {
        text: "Sometimes I drink to fall asleep because my mind will not stop.",
        suggestion: "It makes sense you reach for something to quiet the system when it will not settle, even if it brings other costs."
      }
    ],
    "case-carlos": [
      {
        text: "I hate that I punched the wall. I felt cornered and disrespected.",
        suggestion: "Feeling cornered and disrespected hurts; it makes sense that a lot rose up fast, even though the outburst did not help."
      },
      {
        text: "A look or tone can set me off like I am nothing.",
        suggestion: "Given what you survived, it makes sense even small cues hit like a threat."
      },
      {
        text: "I am scared I am turning into my father.",
        suggestion: "Of course that fear is strong; it makes sense you want something different for your family."
      }
    ],
    "case-nina": [
      {
        text: "When I ask for help, guilt slams me and I apologize.",
        suggestion: "It makes sense guilt shows up right away when you were taught to take care of everyone else first."
      },
      {
        text: "I do everything, then I feel resentful and bad for being resentful.",
        suggestion: "Anyone carrying that load would feel worn and resentful; it makes sense both show up."
      },
      {
        text: "I feel selfish if I rest, even when I am exhausted.",
        suggestion: "Given those old rules, it makes sense rest feels selfish even when your body is done."
      }
    ],
    "case-aisha": [
      {
        text: "When someone does not text back, it feels unbearable, like I am being dropped.",
        suggestion: "With so many losses, it makes sense silence feels like being dropped all over again."
      },
      {
        text: "I scared myself last night; I wanted to hurt myself just to make the pain stop.",
        suggestion: "The pain you are in is enormous; it makes sense you wanted relief, even though hurting yourself cannot give you what you need."
      },
      {
        text: "Part of me thinks no one can really love me for long.",
        suggestion: "Given what you went through, it makes sense that belief shows up and feels true."
      }
    ],
    "case-david": [
      {
        text: "At home I feel picked apart, and I get defensive fast.",
        suggestion: "It makes sense to feel exposed and defensive when it sounds like criticism at home."
      },
      {
        text: "If I am not impressive, I feel like nothing.",
        suggestion: "Given how love was linked to achievement, it makes sense your worth feels tied to being impressive."
      },
      {
        text: "Since the affair, there is a heaviness I cannot shake.",
        suggestion: "Of course there is heaviness and shame here; anyone in your shoes would feel weighed down."
      }
    ],
    "case-marcus": [
      {
        text: "Most days I feel nothing, then suddenly I am flooded by memories.",
        suggestion: "With what you have lived, it makes sense your system goes numb and then gets flooded."
      },
      {
        text: "The nightmares leave me wrung out and I just keep my head down.",
        suggestion: "Anyone dealing with those nightmares would feel wrung out and go quiet to get through."
      },
      {
        text: "Being alone feels safer, but it also feels like giving up.",
        suggestion: "It makes sense you choose safety, and it also makes sense the quiet can feel like giving up on being known."
      }
    ]
  },
  "exploratory-questions": {
    "case-sara": [
      {
        text: "When I think about seeing my ex with someone else, my stomach twists and I want to get busy right away.",
        suggestion: "As you picture that, where do you notice the twist most in your body right now?"
      },
      {
        text: "I tell myself to focus on work so the sadness does not catch me off guard.",
        suggestion: "What happens inside as you say that to yourself-what lets you know the sadness is nearby?"
      },
      {
        text: "If I slow down at night, the loneliness feels like a pressure in my chest.",
        suggestion: "Can we stay with that pressure for a few breaths-what kind of pressure is it (tight, heavy, hot)?"
      }
    ],
    "case-michael": [
      {
        text: "When a mistake is called out, something snaps and I have to shut it down fast.",
        suggestion: "In the second before it snaps, what do you feel or sense in your chest or throat?"
      },
      {
        text: "I cannot stand the look people give me when they think I messed up.",
        suggestion: "What does that look seem to say to you-and where do you feel that message land in you?"
      },
      {
        text: "After I calm down, there is a pit in my stomach I do not talk about.",
        suggestion: "If that pit had a few words, what might it want you to know about what hurt there?"
      }
    ],
    "case-jason": [
      {
        text: "In meetings I plan what to say, then my mind goes blank when it is my turn.",
        suggestion: "As you imagine your turn coming, what starts happening in your body-tightness, heat, buzzing?"
      },
      {
        text: "I hear a voice saying do not expose how awkward you are.",
        suggestion: "What does that voice sound like-tone, pace-and where do you feel it sit in you as it speaks?"
      },
      {
        text: "I want to answer texts right away, but I freeze and wait too long.",
        suggestion: "In the moment of freezing, what is the scariest part-and if that fear could speak, what would it say?"
      }
    ],
    "case-laura": [
      {
        text: "Most days feel muted, like I am behind glass.",
        suggestion: "As you notice that glass, what sensations tell you you are behind it-numbness, distance, something else?"
      },
      {
        text: "When voices rise, my stomach drops and I want out.",
        suggestion: "What happens in your body in the few seconds before you want out-and what does that part need right then?"
      },
      {
        text: "When someone is kind to me, sometimes I go blank.",
        suggestion: "If we linger with that blank for a moment, what begins to show up-image, sensation, a word?"
      }
    ],
    "case-carlos": [
      {
        text: "A sideways comment makes my chest heat up and my jaw lock.",
        suggestion: "Can you track that heat and jaw right now-what is the first signal your body gives you?"
      },
      {
        text: "Seeing my kid flinch still gets to me.",
        suggestion: "As you remember his face, where do you feel that most-and what is the worst part about that moment for you?"
      },
      {
        text: "I tell myself I have to stay on top or I will get walked over.",
        suggestion: "What does 'on top' feel like in your body, and what does the part that fears being walked over want for you?"
      }
    ],
    "case-nina": [
      {
        text: "The second I ask for help, guilt floods me.",
        suggestion: "Where does that guilt land first-chest, throat, stomach-and what does it accuse you of?"
      },
      {
        text: "I keep moving all day so I do not feel resentful or sad.",
        suggestion: "If you paused for a breath right now, what feeling shows up first-and what does it want you to know?"
      },
      {
        text: "Resting makes me feel selfish even when I am exhausted.",
        suggestion: "What happens inside as you imagine resting-what feeling or image lets you know it feels selfish?"
      }
    ],
    "case-aisha": [
      {
        text: "If a reply does not come fast, it feels like I am falling.",
        suggestion: "As that falling starts, where in your body do you notice it first-and what is it like (drop, spin, emptiness)?"
      },
      {
        text: "When I sense distance, I want to call nonstop or push them away first.",
        suggestion: "In the instant you sense distance, what happens inside-and what does the most frightened part need from you right then?"
      },
      {
        text: "Sometimes the emptiness in my chest feels huge.",
        suggestion: "If we put gentle attention on that emptiness, what shape or texture does it have-and does any word come with it?"
      }
    ],
    "case-david": [
      {
        text: "Being called cold makes my face burn and I want to list everything I do.",
        suggestion: "As your face burns, what is the most tender part under that heat-and what does it wish she knew about you?"
      },
      {
        text: "If I am not impressive, I feel lost.",
        suggestion: "What is hardest about feeling lost-and where do you sense that loss in your body right now?"
      },
      {
        text: "At night there is a flatness I cannot shake.",
        suggestion: "As you notice that flatness, what do you become aware of first-weight, emptiness, pressure-and what does it seem to be about?"
      }
    ],
    "case-marcus": [
      {
        text: "I get through the day on autopilot, then a wave hits out of nowhere.",
        suggestion: "What tells you the wave is coming-any small signal in your body or images that show up first?"
      },
      {
        text: "Nightmares leave me wired and empty the next day.",
        suggestion: "Right now, as you mention them, what do you notice in your body-and if that feeling had a message, what would it say?"
      },
      {
        text: "Being around people feels risky; being alone feels blank.",
        suggestion: "As you imagine being with someone safe, what shifts inside-even a tiny one-and where do you feel it?"
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
        text: "When I hear he is dating again, a heavy feeling drops in my chest and I want to disappear into work.",
        suggestion: "There is a heavy drop right there; as we stay with it a moment, what begins to take shape inside?"
      },
      {
        text: "I catch myself smiling and saying I am fine even when my eyes sting.",
        suggestion: "Your eyes sting even as you smile; can we linger with that sting and see what it seems to be about?"
      },
      {
        text: "At night the apartment feels too quiet and I scroll until I am numb.",
        suggestion: "There is something in that quiet; if we linger just a little with the part that reaches for numbness, what do you notice?"
      }
    ],
    "case-michael": [
      {
        text: "Hearing I messed up hits like a punch and heat rushes up my neck.",
        suggestion: "That punch and heat are here now; staying with the sting for a moment, what shows up just under it?"
      },
      {
        text: "After I calm down, there is this small ashamed feeling I do not like to look at.",
        suggestion: "There is that small ashamed place; as we sit with it gently, what is it like from the inside?"
      },
      {
        text: "Respect matters so much that even a sigh makes me bristle.",
        suggestion: "Something bristles at even a sigh; if we stay with that edge, what does it seem to be protecting?"
      }
    ],
    "case-jason": [
      {
        text: "When attention turns to me, my mind blanks and my throat tightens.",
        suggestion: "There is a blank and a tight throat; as we linger with that tightness, what begins to come into focus, if anything?"
      },
      {
        text: "I want to say yes to invites and then I freeze at the last second.",
        suggestion: "The freeze is right there at the edge; can we stay close to it and notice what it is trying to spare you from?"
      },
      {
        text: "Sometimes I replay conversations and feel a small ache in my chest.",
        suggestion: "That small ache is here; as we give it a bit of room, what is the ache like and what does it seem to care about?"
      }
    ],
    "case-laura": [
      {
        text: "Most of the time I feel flat, and then a hint of feeling flickers and I push it down.",
        suggestion: "There is a flicker under the flatness; if we linger very gently with that flicker, what does it feel like from within?"
      },
      {
        text: "A raised voice makes my stomach drop and my body wants out.",
        suggestion: "We can stay with that drop for just a breath; what is the drop like, and what does it seem to be warning you about?"
      },
      {
        text: "When someone is kind, a part of me goes distant.",
        suggestion: "There is a distance that arrives with kindness; as we sit with it softly, what begins to show itself there?"
      }
    ],
    "case-carlos": [
      {
        text: "A sideways tone makes my chest heat and my jaw clamp.",
        suggestion: "The heat and clamp are here now; if we stay close to them, what do they seem to be saying on your behalf?"
      },
      {
        text: "When I remember my boy flinching, something in me drops.",
        suggestion: "There is that drop as you see his face; can we linger with it and notice what hurts most right there?"
      },
      {
        text: "I tell myself to be the toughest so I cannot be hurt.",
        suggestion: "There is a part that needs to be toughest; staying with that part for a moment, what does it want for you when it gets tough?"
      }
    ],
    "case-nina": [
      {
        text: "As soon as I say I need help, guilt washes over me.",
        suggestion: "That wash of guilt is here; if we sit with it softly, what does it seem to be protecting or preventing?"
      },
      {
        text: "I keep moving so I do not feel the resentment underneath.",
        suggestion: "There is a layer under all that moving; as we linger for a breath, what begins to come into view there?"
      },
      {
        text: "Resting brings up a tight, selfish feeling in my chest.",
        suggestion: "Let us stay with that tight feeling a little; what is its texture, and what does it want you to remember as you rest?"
      }
    ],
    "case-aisha": [
      {
        text: "If someone pulls back, panic surges and I feel a hole open in my chest.",
        suggestion: "There is a hole feeling as panic surges; staying with the very edge of it, what begins to show up about what it needs?"
      },
      {
        text: "I can go from loving to furious in minutes when I feel ignored.",
        suggestion: "There is a sharp turn right there; as we linger with the moment before the fury, what is alive underneath?"
      },
      {
        text: "Sometimes the emptiness is so loud I want to do anything to quiet it.",
        suggestion: "The emptiness is loud; if we sit with a small, safe slice of it together, what does it seem to be asking for?"
      }
    ],
    "case-david": [
      {
        text: "Being called cold makes my face burn and I harden.",
        suggestion: "There is a burn and a hardening; as we stay with the burn a moment, what begins to show under the hardness?"
      },
      {
        text: "When I am not impressive, I feel a hollow spot inside.",
        suggestion: "That hollow spot is noticeable; if we linger with it gently, what is it like and what does it seem to miss?"
      },
      {
        text: "At night there is a flatness I cannot shake.",
        suggestion: "The flatness is here; staying with it for a few breaths, what faint signals start to rise beneath it, if any?"
      }
    ],
    "case-marcus": [
      {
        text: "Most days I run on autopilot, then a wave comes out of nowhere.",
        suggestion: "There is an edge before the wave; as we stay near that edge, what do you begin to notice in your body?"
      },
      {
        text: "Nightmares leave me empty and wired.",
        suggestion: "Empty and wired are both here; lingering with whichever is strongest, what is it like from the inside right now?"
      },
      {
        text: "Being with people feels risky, so I keep to myself.",
        suggestion: "There is a risk your body knows; as we sit with that sense of risk for a moment, what does it seem to warn you about most?"
      }
    ]
  },
  "empathic-evocations": {
    "case-sara": [
      {
        text: "Evenings in the apartment feel so quiet it presses on my chest.",
        suggestion: "The quiet settles on your chest like a heavy blanket of alone."
      },
      {
        text: "I smile and say I am fine, but inside it stings.",
        suggestion: "That smile feels like a thin cover over a sharp sting inside."
      },
      {
        text: "Seeing his photo with someone new knocks the air out of me.",
        suggestion: "It hits like a punch to the ribs, knocking the breath from you."
      }
    ],
    "case-michael": [
      {
        text: "When they point out a mistake, I feel heat rush up my neck.",
        suggestion: "It is like a hot flare racing up your neck toward your face."
      },
      {
        text: "I brace for disrespect the second I enter the room.",
        suggestion: "You walk in wearing armor, scanning for the next hit."
      },
      {
        text: "After I blow up, shame hangs over me all night.",
        suggestion: "Shame hangs like a heavy fog that clings and will not lift."
      }
    ],
    "case-jason": [
      {
        text: "When all eyes turn to me, my throat tightens and my mind goes blank.",
        suggestion: "The spotlight hits and your throat knots while the screen inside goes dark."
      },
      {
        text: "I hear a voice calling me awkward and I shrink back.",
        suggestion: "That inner voice is a cold whisper that makes you pull into yourself."
      },
      {
        text: "Sunday nights feel endless and empty.",
        suggestion: "They stretch out like a long, dim hallway with no doors."
      }
    ],
    "case-laura": [
      {
        text: "Most days feel muted, like I am moving through fog.",
        suggestion: "It is as if a gray fog mutes color and sound around you."
      },
      {
        text: "Raised voices make my stomach drop.",
        suggestion: "The moment voices rise, your stomach drops like an elevator going too fast."
      },
      {
        text: "Kindness makes me go distant.",
        suggestion: "Warmth comes toward you and a part of you steps back behind glass."
      }
    ],
    "case-carlos": [
      {
        text: "A sideways tone lights me up and my jaw locks.",
        suggestion: "It is like a flash fire in your chest while a clamp closes on your jaw."
      },
      {
        text: "Remembering my kid flinch guts me.",
        suggestion: "His flinch is like a mirror that cuts straight through your center."
      },
      {
        text: "I tell myself I must stay on top or be crushed.",
        suggestion: "It feels like a high, tense perch where any slip means a hard fall."
      }
    ],
    "case-nina": [
      {
        text: "As soon as I ask for help, guilt buzzes through me.",
        suggestion: "Guilt buzzes like a harsh alarm telling you to stand down."
      },
      {
        text: "I keep carrying everything even when I am spent.",
        suggestion: "It is like wearing a backpack of stones that never gets set down."
      },
      {
        text: "Sometimes I sit in the car to breathe before going inside.",
        suggestion: "That pause is like a small island where you can catch your breath."
      }
    ],
    "case-aisha": [
      {
        text: "When a reply does not come, I feel like I am falling.",
        suggestion: "Silence opens like a drop under you, and your stomach free-falls."
      },
      {
        text: "I can go from love to rage in minutes when I feel ignored.",
        suggestion: "It swings like a door slamming from pleading to fire in a heartbeat."
      },
      {
        text: "The emptiness in my chest can feel endless.",
        suggestion: "The emptiness is a wide, dark hole that seems to go on and on."
      }
    ],
    "case-david": [
      {
        text: "Being called cold burns and I harden right away.",
        suggestion: "The word burns like a brand, and you put on a hard shell to cover it."
      },
      {
        text: "If I am not impressive, I feel hollow.",
        suggestion: "Without the shine, there is a hollow room inside that echoes."
      },
      {
        text: "At home I feel picked apart.",
        suggestion: "It is like standing under a bright lamp while every flaw gets circled."
      }
    ],
    "case-marcus": [
      {
        text: "Most days I run on autopilot and feel nothing.",
        suggestion: "Autopilot feels like moving underwater, everything slowed and far away."
      },
      {
        text: "Out of nowhere a wave hits me.",
        suggestion: "The wave is like a riptide that yanks you off your feet."
      },
      {
        text: "Silence at home feels heavy.",
        suggestion: "The silence lays on you like a thick blanket that smothers feeling."
      }
    ]
  },
  "empathic-conjectures": {
    "case-sara": [
      {
        text: "I keep telling myself to stop being dramatic and just get on with it.",
        suggestion: "I wonder if under the push to get on with it there is a part that feels very alone and unworthy."
      },
      {
        text: "I deleted our photos so I can be normal again.",
        suggestion: "Could it be that a part of you still longs to feel chosen, and deleting is trying to protect that sore place?"
      },
      {
        text: "When I tear up here I apologize without thinking.",
        suggestion: "Maybe alongside the sadness there is some shame about needing anyone at all."
      }
    ],
    "case-michael": [
      {
        text: "If I do not push people, they slack and I look bad.",
        suggestion: "I wonder if beneath the push there is a fear of being seen as small or not good enough."
      },
      {
        text: "When my coworker corrected me, I lost it.",
        suggestion: "Could it be the anger rushed in to cover a quick stab of hurt or embarrassment right then?"
      },
      {
        text: "After I shout, I avoid eye contact at home.",
        suggestion: "Maybe there is a quiet shame there that is hard to face with them."
      }
    ],
    "case-jason": [
      {
        text: "When I speak, I hear a voice saying I sound stupid.",
        suggestion: "I wonder if that voice is trying to protect a very tender fear of being exposed or rejected."
      },
      {
        text: "I skip lunch invites and say I am busy.",
        suggestion: "Could it be a part expects to be overlooked again, and skipping is a way to avoid that sting?"
      },
      {
        text: "Blanking out feels safer than saying the wrong thing.",
        suggestion: "Maybe the blank is a protector that steps in when shame gets close."
      }
    ],
    "case-laura": [
      {
        text: "When someone is kind, I feel distant, like it is not for me.",
        suggestion: "I wonder if distance shows up to keep you safe from a very old hurt around trust and care."
      },
      {
        text: "A door slam made me freeze for minutes.",
        suggestion: "Could it be your body remembered danger and fear, even if your mind knew you were here now?"
      },
      {
        text: "I avoid choir because I might cry.",
        suggestion: "Maybe there is grief just under the surface that feels too big to let out yet."
      }
    ],
    "case-carlos": [
      {
        text: "An eye roll sets me off like a switch.",
        suggestion: "I wonder if under the heat there is a flash of humiliation that hurts fast."
      },
      {
        text: "My kid flinching keeps replaying in my head.",
        suggestion: "Could it be a part of you feels scared you are becoming who hurt you, and that cuts deep."
      },
      {
        text: "I hate apologizing because it feels weak.",
        suggestion: "Maybe apologizing touches a raw place that worries you will be seen as less."
      }
    ],
    "case-nina": [
      {
        text: "Resting makes me feel selfish.",
        suggestion: "I wonder if a part learned long ago that asking or needing risks being rejected."
      },
      {
        text: "I get resentful and then instantly guilty.",
        suggestion: "Could it be the guilt rushes in to cover anger that says you have been alone with too much for too long?"
      },
      {
        text: "I apologize even for small requests.",
        suggestion: "Maybe there is a belief that your needs do not count unless you are giving."
      }
    ],
    "case-aisha": [
      {
        text: "If you do not reply fast, I feel like I will disappear.",
        suggestion: "I wonder if under that panic is a terror of being alone that started a long time ago."
      },
      {
        text: "After I blow up, I hate myself.",
        suggestion: "Could it be that the rage covers a deep hurt and shame that you are carrying about being lovable."
      },
      {
        text: "Sometimes I push people away first.",
        suggestion: "Maybe pushing first is a way to avoid the pain of being left again."
      }
    ],
    "case-david": [
      {
        text: "When my wife calls me cold, I get hard and list her flaws.",
        suggestion: "I wonder if under that hardness there is a quick sting of not being enough."
      },
      {
        text: "If I am not the best in the room, I feel empty.",
        suggestion: "Could it be that the emptiness is about not feeling valued for who you are, not just what you achieve?"
      },
      {
        text: "I say the affair meant nothing, but I still feel off.",
        suggestion: "Maybe there is a quiet hurt or guilt there that is hard to let yourself feel."
      }
    ],
    "case-marcus": [
      {
        text: "I pick up extra shifts so I do not have to think.",
        suggestion: "I wonder if staying busy keeps a painful loneliness or grief from flooding in."
      },
      {
        text: "I keep my place dark and quiet.",
        suggestion: "Could it be the quiet is safer than risking being close and getting hurt."
      },
      {
        text: "I ignore invites because people do not stick around.",
        suggestion: "Maybe there is a part that longs for closeness and another that protects you by keeping distance."
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
