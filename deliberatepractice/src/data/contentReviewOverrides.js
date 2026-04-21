"use strict";

import { REVIEW_STATUSES } from "./contentMeta.js";

const CASE_MATRIX_CASE_IDS = Object.freeze([
  "case-sara",
  "case-michael",
  "case-jason",
  "case-laura",
  "case-carlos",
  "case-nina",
  "case-aisha",
  "case-marcus",
  "case-david"
]);

function buildApprovedMeta(reviewPass, reviewFocus) {
  return Object.freeze({
    reviewStatus: REVIEW_STATUSES.APPROVED,
    reviewPass,
    reviewFocus
  });
}

function buildSkillBatchOverrides(skillId, caseIds, itemCount, meta) {
  return Object.fromEntries(
    caseIds.flatMap((caseId) =>
      Array.from({ length: itemCount }, (_, index) => [
        `dp_${skillId}_${caseId}_${String(index + 1).padStart(2, "0")}`,
        meta
      ])
    )
  );
}

const HIGH_RISK_PASS_1 = buildApprovedMeta("2026-03-08-high-risk-pass-1", [
  "safety",
  "eft_fidelity",
  "case_voice"
]);

const THERAPIST_SELF_AWARENESS_PASS_1 = buildApprovedMeta(
  "2026-03-08-therapist-self-awareness-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EMPATHIC_UNDERSTANDING_PASS_1 = buildApprovedMeta(
  "2026-03-08-empathic-understanding-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EMPATHIC_AFFIRMATION_VALIDATION_PASS_1 = buildApprovedMeta(
  "2026-03-08-empathic-affirmation-validation-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EXPLORATORY_QUESTIONS_PASS_1 = buildApprovedMeta(
  "2026-03-08-exploratory-questions-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const PROVIDING_TREATMENT_RATIONALE_PASS_1 = buildApprovedMeta(
  "2026-03-08-providing-treatment-rationale-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EMPATHIC_EXPLORATIONS_PASS_1 = buildApprovedMeta(
  "2026-03-08-empathic-explorations-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EMPATHIC_EVOCATIONS_PASS_1 = buildApprovedMeta(
  "2026-03-08-empathic-evocations-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EMPATHIC_CONJECTURES_PASS_1 = buildApprovedMeta(
  "2026-03-08-empathic-conjectures-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const STAYING_IN_CONTACT_INTENSE_AFFECT_PASS_1 = buildApprovedMeta(
  "2026-03-08-staying-in-contact-intense-affect-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const SELF_DISCLOSURE_PASS_1 = buildApprovedMeta(
  "2026-03-08-self-disclosure-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const MARKER_RECOGNITION_CHAIRWORK_PASS_1 = buildApprovedMeta(
  "2026-03-08-marker-recognition-chairwork-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const ALLIANCE_REPAIR_PASS_1 = buildApprovedMeta(
  "2026-03-08-alliance-repair-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

export const CONTENT_ITEM_META_OVERRIDES = Object.freeze({
  "dp_therapist-self-awareness_case-laura_04": HIGH_RISK_PASS_1,
  "dp_therapist-self-awareness_case-carlos_07": HIGH_RISK_PASS_1,
  "dp_therapist-self-awareness_case-aisha_04": HIGH_RISK_PASS_1,
  "dp_therapist-self-awareness_case-marcus_03": HIGH_RISK_PASS_1,
  "dp_empathic-understanding_case-laura_04": HIGH_RISK_PASS_1,
  "dp_empathic-understanding_case-carlos_09": HIGH_RISK_PASS_1,
  "dp_empathic-understanding_case-david_07": HIGH_RISK_PASS_1,
  "dp_empathic-understanding_case-marcus_03": HIGH_RISK_PASS_1,
  "dp_empathic-affirmation-validation_case-marcus_01": HIGH_RISK_PASS_1,
  "dp_exploratory-questions_case-laura_05": HIGH_RISK_PASS_1,
  "dp_exploratory-questions_case-david_08": HIGH_RISK_PASS_1,
  "dp_exploratory-questions_case-marcus_02": HIGH_RISK_PASS_1,
  "dp_providing-treatment-rationale_case-laura_02": HIGH_RISK_PASS_1,
  "dp_providing-treatment-rationale_case-carlos_08": HIGH_RISK_PASS_1,
  "dp_providing-treatment-rationale_case-aisha_01": HIGH_RISK_PASS_1,
  "dp_providing-treatment-rationale_case-marcus_05": HIGH_RISK_PASS_1,
  "dp_empathic-explorations_case-laura_04": HIGH_RISK_PASS_1,
  "dp_empathic-explorations_case-david_08": HIGH_RISK_PASS_1,
  "dp_empathic-explorations_case-marcus_02": HIGH_RISK_PASS_1,
  "dp_empathic-evocations_case-david_10": HIGH_RISK_PASS_1,
  "dp_empathic-evocations_case-marcus_04": HIGH_RISK_PASS_1,
  "dp_empathic-conjectures_case-jason_09": HIGH_RISK_PASS_1,
  "dp_empathic-conjectures_case-marcus_07": HIGH_RISK_PASS_1,
  "dp_staying-in-contact-intense-affect_case-michael_02": HIGH_RISK_PASS_1,
  "dp_staying-in-contact-intense-affect_case-aisha_02": HIGH_RISK_PASS_1,
  "dp_staying-in-contact-intense-affect_case-marcus_02": HIGH_RISK_PASS_1,
  "dp_self-disclosure_case-laura_04": HIGH_RISK_PASS_1,
  "dp_self-disclosure_case-aisha_03": HIGH_RISK_PASS_1,
  "dp_self-disclosure_case-david_09": HIGH_RISK_PASS_1,
  "dp_self-disclosure_case-marcus_08": HIGH_RISK_PASS_1,
  "dp_alliance-repair_case-marcus_03": HIGH_RISK_PASS_1,
  ...buildSkillBatchOverrides(
    "therapist-self-awareness",
    CASE_MATRIX_CASE_IDS,
    10,
    THERAPIST_SELF_AWARENESS_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "empathic-understanding",
    CASE_MATRIX_CASE_IDS,
    10,
    EMPATHIC_UNDERSTANDING_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "empathic-affirmation-validation",
    CASE_MATRIX_CASE_IDS,
    10,
    EMPATHIC_AFFIRMATION_VALIDATION_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "exploratory-questions",
    CASE_MATRIX_CASE_IDS,
    10,
    EXPLORATORY_QUESTIONS_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "providing-treatment-rationale",
    CASE_MATRIX_CASE_IDS,
    10,
    PROVIDING_TREATMENT_RATIONALE_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "empathic-explorations",
    CASE_MATRIX_CASE_IDS,
    10,
    EMPATHIC_EXPLORATIONS_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "empathic-evocations",
    CASE_MATRIX_CASE_IDS,
    10,
    EMPATHIC_EVOCATIONS_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "empathic-conjectures",
    CASE_MATRIX_CASE_IDS,
    10,
    EMPATHIC_CONJECTURES_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "staying-in-contact-intense-affect",
    CASE_MATRIX_CASE_IDS,
    10,
    STAYING_IN_CONTACT_INTENSE_AFFECT_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "self-disclosure",
    CASE_MATRIX_CASE_IDS,
    10,
    SELF_DISCLOSURE_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "marker-recognition-chairwork",
    CASE_MATRIX_CASE_IDS,
    3,
    MARKER_RECOGNITION_CHAIRWORK_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "alliance-repair",
    CASE_MATRIX_CASE_IDS,
    3,
    ALLIANCE_REPAIR_PASS_1
  )
});
