"use strict";

import { SKILLS } from "./skills.js";
import { CASES } from "./cases.js";
import { STATEMENT_SETS } from "./statements.js";
import {
  LANGUAGE_ORDER,
  LANGUAGE_METADATA,
  LANGUAGE_UI,
  LANGUAGE_OVERRIDES,
  STATEMENT_TRANSLATIONS
} from "./translations.js";

const caseIds = CASES.map((entry) => entry.id);
const skillOrder = SKILLS.map((entry) => entry.id);

const caseLookup = CASES.reduce((acc, entry) => {
  acc[entry.id] = entry;
  return acc;
}, {});

const CASE_ORDER = skillOrder.reduce((acc, skillId) => {
  acc[skillId] = [...caseIds];
  return acc;
}, {});

const toSlug = (value) => value.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();

const buildStatementEntries = (skillId, caseId) => {
  const statements = STATEMENT_SETS?.[skillId]?.[caseId] ?? [];

  const skillSlug = toSlug(skillId);
  const caseSlug = toSlug(caseId);

  return statements.map((entry, index) => ({
    id: `dp_${skillSlug}_${caseSlug}_${String(index + 1).padStart(2, "0")}`,
    text: entry.text,
    suggestion: entry.suggestion ?? ""
  }));
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
      statements: []
    };
  }

  const statements = buildStatementEntries(skillId, caseId);

  return {
    id: meta.id,
    label: meta.label,
    difficulty: meta.difficulty ?? "unknown",
    difficultyLabel: meta.difficultyLabel ?? meta.difficulty ?? "",
    teaser: meta.teaser ?? "",
    history: meta.history ?? "",
    schema: meta.schema ?? "",
    style: meta.style ?? "",
    voice: meta.voice ?? "",
    dossier: meta.dossier,
    statements
  };
};

const BASE_PRACTICE = SKILLS.reduce((acc, skill) => {
  const cases = CASE_ORDER[skill.id].reduce((caseMap, caseId) => {
    caseMap[caseId] = buildCasePayload(caseId, skill.id);
    return caseMap;
  }, {});

  acc[skill.id] = {
    name: skill.name,
    description: skill.description,
    cases
  };
  return acc;
}, {});

export {
  skillOrder as SKILL_ORDER,
  CASE_ORDER,
  BASE_PRACTICE,
  LANGUAGE_ORDER,
  LANGUAGE_METADATA,
  LANGUAGE_UI,
  LANGUAGE_OVERRIDES,
  STATEMENT_TRANSLATIONS
};
