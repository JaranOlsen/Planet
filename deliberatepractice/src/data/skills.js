"use strict";

export const SKILLS = [
  {
    id: "therapist-self-awareness",
    name: "Therapist Self-Awareness",
    description: "Monitor your inner state so you remain grounded, receptive, and able to choose the most helpful response.",
    summary: "Continuously track your own body, emotion, and impulses so you can regulate and stay attuned instead of reacting. When you feel tension, urgency, or defensiveness, slow down, soften, and re-center before choosing the next move that serves the client.",
    marker: "You notice tension, urgency to fix, defensiveness, numbness, or strong pulls toward or away from the client.",
    aim: "Regulate yourself so you stay grounded, empathic, and able to choose the most helpful response."
  },
  {
    id: "empathic-understanding",
    name: "Empathic Understanding",
    description: "Mirror the client's experience with feeling-rich language to convey understanding and invite elaboration.",
    summary: "Offer short, feeling-rich reflections that mirror the client's inner world so they feel deeply heard. Match their tone, stay with the present moment, and invite elaboration without adding advice or theory.",
    marker: "Emotion is present, the client needs to feel heard, or their story is unclear or searching.",
    aim: "Convey accurate understanding to build trust and invite fuller expression."
  },
  {
    id: "empathic-affirmation-validation",
    name: "Empathic Affirmation and Validation",
    description: "Legitimize the client's feelings in context so shame eases and safety to feel grows.",
    summary: "Name the context that makes the feeling understandable so shame eases and emotional safety grows. Offer warm permission for the emotion to be there, while keeping space to discuss actions when helpful.",
    marker: "Shame, self-criticism, apologies for feeling, or 'I shouldn't feel this way' statements show up.",
    aim: "Legitimize the emotion so self-attack eases and safety to feel and explore grows."
  },
  {
    id: "exploratory-questions",
    name: "Exploratory Questions",
    description: "Ask open, experiential questions that turn clients inward and unfold the leading edge of experience.",
    summary: "Ask simple, open-ended questions that direct attention to the body and immediate felt sense. These prompts help vague or mixed experiences take form so deeper emotion can emerge at a tolerable pace.",
    marker: "Experience feels vague, mixed, unfinished, or sensed but without words.",
    aim: "Help implicit experience take form by guiding attention inward."
  },
  {
    id: "providing-treatment-rationale",
    name: "Providing Treatment Rationale for EFT",
    description: "Offer a concise, empathic explanation of why emotion work helps and how you will guide it when clarity or reassurance is needed.",
    summary: "After joining empathically, explain in plain language why working with emotion leads to relief and change, and how you will guide it safely. Use it to soothe doubt, reduce fear, and align around the next steps or tasks.",
    marker: "Clients ask how therapy works, show skepticism or fear, or hesitate before tasks.",
    aim: "Give a concise, experiential rationale that reduces anxiety and aligns you around the work."
  },
  {
    id: "empathic-explorations",
    name: "Empathic Explorations",
    description: "Follow and gently expand what is already present so the client can stay with and elaborate their experience.",
    summary: "Stay with the client's leading edge - reflect a little of what is present, then invite them to linger and notice more. This gentle pacing deepens contact without jumping ahead of their own unfolding experience.",
    marker: "Emotion is emerging but fragile; there is a live edge that wants to unfold.",
    aim: "Sustain and deepen contact with the emerging emotion by following and gently expanding it."
  },
  {
    id: "empathic-evocations",
    name: "Empathic Evocations",
    description: "Use vivid, sensory language or metaphor to bring experience to life and heighten emotional contact.",
    summary: "When feelings are muted but near, offer vivid, sensory language or metaphor that captures their texture. A brief, resonant image helps the client feel the experience more fully without overwhelming them.",
    marker: "The client speaks about feelings in a flat, distant, or hard-to-define way.",
    aim: "Heighten contact by offering vivid language that helps the feeling come alive."
  },
  {
    id: "empathic-conjectures",
    name: "Empathic Conjectures",
    description: "Offer tentative empathic guesses about near-surface feelings to help unspoken experience take form.",
    summary: "Make a soft, tentative guess about the hurt, fear, or longing that is almost spoken so the client can find words for it. Mark your tentativeness and let them confirm or correct to keep collaboration alive.",
    marker: "Hints of deeper emotion leak through avoidance, tonal cracks, or unfinished narratives.",
    aim: "Name the near-surface experience so the client can confirm, disconfirm, or claim it."
  },
  {
    id: "staying-in-contact-intense-affect",
    name: "Staying in Contact with Intense Affect",
    description: "Help clients stay safely with powerful emotion so it can be processed without overwhelm.",
    summary: "Slow the pace, ground the client, and titrate how much emotion is contacted so big waves of grief, rage, panic, or shame can move without shutdown. You stay steady, validate the intensity, and help meaning emerge in tolerable doses.",
    marker: "Affect spikes into sobbing, shaking, rage, panic, shame collapse, or pleas to stop.",
    aim: "Provide containment and connection so powerful emotion can be processed without overwhelm."
  },
  {
    id: "self-disclosure",
    name: "Self-Disclosure",
    description: "Share brief, relevant inner experience in service of the client to validate, deepen, or repair.",
    summary: "Share a brief, genuine piece of your immediate experience only when it clearly serves the client - perhaps to validate their impact, model resonance, or repair a rupture. Keep it concise, non-defensive, and return focus to their process right away.",
    marker: "The alliance needs validation or repair, or a heartfelt therapist response would deepen the work.",
    aim: "Use brief, relevant transparency to strengthen the bond or model resonance while keeping focus on the client."
  },
  {
    id: "marker-recognition-chairwork",
    name: "Marker Recognition & Chair-Work Task Setup",
    description: "Spot task markers and collaboratively set up focused chair work to activate transformational emotion.",
    summary: "Listen for markers like harsh self-attack or unfinished business, then offer a concise rationale for a two-chair or empty-chair dialogue. Give clear, paced instructions and monitor arousal so the emotion can transform safely during the task.",
    marker: "Clear task markers appear, such as harsh self-criticism, internal splits, or unfinished business with another.",
    aim: "Set up experiential dialogue that activates unmet needs and transformational emotion."
  },
  {
    id: "alliance-repair",
    name: "Alliance Repair",
    description: "Receive rupture cues with empathy, own the impact, and collaborate on next steps to restore trust.",
    summary: "Invite and receive concerns without defending, validate the client's impact, and own your part where needed. Then collaborate on what would help now so trust, safety, and momentum are restored.",
    marker: "Withdrawal, irritation at you, 'You don't get me,' missed sessions, or sudden coolness emerges.",
    aim: "Restore trust and collaboration by receiving the rupture, owning impact, and planning next steps together."
  },
  {
    id: "empathic-refocusing",
    name: "Empathic Refocusing",
    description: "Name the protection and invite a gentle return when the client moves away from tender experience.",
    summary: "Notice when the client shifts into analysis, joking, or tangents to avoid the tender edge. Validate the protective move and invite a gentle return so the work stays anchored in the emotion that wants attention.",
    marker: "The client shifts into jokes, analysis, tangents, or minimization when emotion nears.",
    aim: "Gently acknowledge the protection and invite a return to the meaningful emotion."
  }
];
