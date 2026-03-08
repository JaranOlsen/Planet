"use strict";

export const CONTENT_REVISION = "2026-03-07-v1";

export const CONTENT_TRACKS = Object.freeze({
  CASE_MATRIX: "case_matrix",
  BENCHMARK: "benchmark"
});

export const REVIEW_STATUSES = Object.freeze({
  LEGACY_IMPORTED: "legacy_imported",
  PENDING: "pending",
  APPROVED: "approved",
  NEEDS_EXTERNAL_REVIEW: "needs_external_review"
});

export const QA_FLAG_TAXONOMY = Object.freeze([
  "voice_off",
  "skill_miss",
  "difficulty_miss",
  "unsafe",
  "translation_off",
  "too_scripted",
  "too_generic",
  "duplicate_pattern"
]);

export const HIGH_RISK_FLAGS = Object.freeze([
  "suicide",
  "self_harm",
  "violence",
  "trauma",
  "sexual_boundary",
  "substance_use",
  "culture_religion"
]);

export const BENCHMARK_LEVEL_ORDER = Object.freeze([
  "beginner",
  "intermediate",
  "advanced"
]);

export const BENCHMARK_DERIVED_RESPONSE_LABEL = "derived_from_criteria";

export const CANONICAL_SKILL_ORDER = Object.freeze([
  "therapist-self-awareness",
  "empathic-understanding",
  "empathic-affirmation-validation",
  "exploratory-questions",
  "providing-treatment-rationale",
  "empathic-explorations",
  "empathic-evocations",
  "empathic-conjectures",
  "staying-in-contact-intense-affect",
  "self-disclosure",
  "marker-recognition-chairwork",
  "alliance-repair"
]);

export const EXPERIMENTAL_SKILL_IDS = Object.freeze(["empathic-refocusing"]);

export const SKILL_EXERCISE_MAP = Object.freeze({
  "therapist-self-awareness": {
    exerciseNumber: 1,
    title: "Therapist Self-Awareness",
    defaultCriteriaTags: ["self_regulation", "empathic_attunement"]
  },
  "empathic-understanding": {
    exerciseNumber: 2,
    title: "Empathic Understanding",
    defaultCriteriaTags: ["reflect_feeling"]
  },
  "empathic-affirmation-validation": {
    exerciseNumber: 3,
    title: "Empathic Affirmation and Validation",
    defaultCriteriaTags: ["validate_context"]
  },
  "exploratory-questions": {
    exerciseNumber: 4,
    title: "Exploratory Questions",
    defaultCriteriaTags: ["explore_body", "explore_meaning"]
  },
  "providing-treatment-rationale": {
    exerciseNumber: 5,
    title: "Providing Treatment Rationale for Emotion-Focused Therapy",
    defaultCriteriaTags: ["offer_rationale", "normalize_experiential_work"]
  },
  "empathic-explorations": {
    exerciseNumber: 6,
    title: "Empathic Explorations",
    defaultCriteriaTags: ["deepen_contact", "follow_leading_edge"]
  },
  "empathic-evocations": {
    exerciseNumber: 7,
    title: "Empathic Evocations",
    defaultCriteriaTags: ["evoke_image", "heighten_felt_sense"]
  },
  "empathic-conjectures": {
    exerciseNumber: 8,
    title: "Empathic Conjectures",
    defaultCriteriaTags: ["tentative_guess", "name_underlying_feeling"]
  },
  "staying-in-contact-intense-affect": {
    exerciseNumber: 9,
    title: "Staying in Contact in the Face of Intense Affect",
    defaultCriteriaTags: ["titrate_affect", "grounding", "co_regulation"]
  },
  "self-disclosure": {
    exerciseNumber: 10,
    title: "Self-Disclosure",
    defaultCriteriaTags: ["judicious_transparency", "return_to_client"]
  },
  "marker-recognition-chairwork": {
    exerciseNumber: 11,
    title: "Marker Recognition and Chair Work Task Setup",
    defaultCriteriaTags: ["recognize_marker", "offer_task_setup"]
  },
  "alliance-repair": {
    exerciseNumber: 12,
    title: "Addressing Ruptures and Facilitating Repair",
    defaultCriteriaTags: ["repair_rupture", "own_impact"]
  }
});

