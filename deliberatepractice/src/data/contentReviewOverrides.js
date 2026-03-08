"use strict";

import { REVIEW_STATUSES } from "./contentMeta.js";

const HIGH_RISK_PASS_1 = Object.freeze({
  reviewStatus: REVIEW_STATUSES.APPROVED,
  reviewPass: "2026-03-08-high-risk-pass-1",
  reviewFocus: ["safety", "eft_fidelity", "case_voice"]
});

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
  "dp_alliance-repair_case-marcus_03": HIGH_RISK_PASS_1
});
