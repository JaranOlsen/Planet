"use strict";

import { SKILLS } from "./skills.js";
import { CASES } from "./cases.js";
import { STATEMENT_SETS } from "./statements.js";
import { GLOSSARY } from "./glossary.js";
import { CASE_BIBLES } from "./caseBibles.js";
import { CONTENT_REGISTRY, CONTENT_REGISTRY_SUMMARY } from "./contentRegistry.js";
import {
  CANONICAL_SKILL_ORDER,
  CONTENT_REVISION,
  EXPERIMENTAL_SKILL_IDS,
  HIGH_RISK_FLAGS,
  QA_FLAG_TAXONOMY,
  REVIEW_STATUSES
} from "./contentMeta.js";
import {
  LANGUAGE_ORDER,
  LANGUAGE_METADATA,
  LANGUAGE_UI,
  LANGUAGE_OVERRIDES,
  STATEMENT_TRANSLATIONS,
  STATEMENT_TRANSLATION_REVISION
} from "./translations.js";

const caseIds = CASES.map((entry) => entry.id);
const skillLookup = SKILLS.reduce((acc, entry) => {
  acc[entry.id] = entry;
  return acc;
}, {});
const skillOrder = CANONICAL_SKILL_ORDER.filter((skillId) => Boolean(skillLookup[skillId]));
const productionSkills = skillOrder.map((skillId) => skillLookup[skillId]).filter(Boolean);

const caseLookup = CASES.reduce((acc, entry) => {
  acc[entry.id] = entry;
  return acc;
}, {});

const CASE_ORDER = skillOrder.reduce((acc, skillId) => {
  acc[skillId] = [...caseIds];
  return acc;
}, {});

const toSlug = (value) => value.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();

const buildFallbackId = (skillId, caseId, index) => {
  const skillSlug = toSlug(skillId);
  const caseSlug = toSlug(caseId);
  return `dp_${skillSlug}_${caseSlug}_${String(index + 1).padStart(2, "0")}`;
};

const buildStatementEntries = (skillId, caseId) => {
  const statements = STATEMENT_SETS?.[skillId]?.[caseId] ?? [];
  const registryEntries = CONTENT_REGISTRY?.[skillId]?.[caseId] ?? [];
  const caseDifficulty = caseLookup[caseId]?.difficulty ?? "unknown";

  return statements.map((entry, index) => {
    const meta = registryEntries[index] ?? {};
    return {
      id: meta.id ?? buildFallbackId(skillId, caseId, index),
      skillId: meta.skillId ?? skillId,
      caseId: meta.caseId ?? caseId,
      track: meta.track ?? "case_matrix",
      difficultyTier: meta.difficultyTier ?? caseDifficulty,
      sourceRef: meta.sourceRef ?? null,
      riskFlags: Array.isArray(meta.riskFlags) ? meta.riskFlags : [],
      criteriaTags: Array.isArray(meta.criteriaTags) ? meta.criteriaTags : [],
      reviewStatus: meta.reviewStatus ?? REVIEW_STATUSES.LEGACY_IMPORTED,
      revision: meta.revision ?? CONTENT_REVISION,
      text: entry.text,
      suggestion: entry.suggestion ?? ""
    };
  });
};

const buildCasePayload = (caseId, skillId) => {
  const meta = caseLookup[caseId];
  if (!meta) {
    return {
      id: caseId,
      label: caseId,
      difficulty: "unknown",
      difficultyLabel: "",
      teaser: "",
      history: "",
      schema: "",
      style: "",
      voice: "",
      caseBible: null,
      statements: []
    };
  }

  const statements = buildStatementEntries(skillId, caseId);

  return {
    id: meta.id,
    label: meta.label,
    difficulty: meta.difficulty ?? "unknown",
    difficultyLabel: meta.difficultyLabel ?? meta.difficulty ?? "",
    tier: meta.tier ?? "pro",
    teaser: meta.teaser ?? "",
    history: meta.history ?? "",
    schema: meta.schema ?? "",
    style: meta.style ?? "",
    voice: meta.voice ?? "",
    dossier: meta.dossier,
    caseBible: CASE_BIBLES[meta.id] ?? null,
    statements
  };
};

const BASE_PRACTICE = productionSkills.reduce((acc, skill) => {
  const cases = CASE_ORDER[skill.id].reduce((caseMap, caseId) => {
    caseMap[caseId] = buildCasePayload(caseId, skill.id);
    return caseMap;
  }, {});

  acc[skill.id] = {
    name: skill.name,
    description: skill.description,
    summary: skill.summary,
    marker: skill.marker,
    aim: skill.aim,
    cases
  };
  return acc;
}, {});

export {
  skillOrder as SKILL_ORDER,
  CASE_ORDER,
  BASE_PRACTICE,
  CASE_BIBLES,
  CONTENT_REGISTRY,
  CONTENT_REGISTRY_SUMMARY,
  CONTENT_REVISION,
  EXPERIMENTAL_SKILL_IDS,
  HIGH_RISK_FLAGS,
  LANGUAGE_ORDER,
  LANGUAGE_METADATA,
  LANGUAGE_UI,
  LANGUAGE_OVERRIDES,
  STATEMENT_TRANSLATIONS,
  STATEMENT_TRANSLATION_REVISION,
  QA_FLAG_TAXONOMY,
  REVIEW_STATUSES,
  GLOSSARY
};
