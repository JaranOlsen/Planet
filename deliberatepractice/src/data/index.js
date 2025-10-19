"use strict";

import { DIFFICULTIES } from "./constants.js";
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

const buildStatementEntries = (skillId, caseId, difficulty) => {
  const statements =
    STATEMENT_SETS?.[skillId]?.[caseId]?.[difficulty] ??
    STATEMENT_SETS?.[skillId]?.[caseId]?.default ??
    [];

  const skillSlug = toSlug(skillId);
  const caseSlug = toSlug(caseId);

  return statements.map((entry, index) => ({
    id: `dp_${skillSlug}_${caseSlug}_${difficulty}_${String(index + 1).padStart(2, "0")}`,
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
      teaser: "",
      history: "",
      schema: "",
      style: "",
      statements: DIFFICULTIES.reduce((acc, difficulty) => {
        acc[difficulty] = [];
        return acc;
      }, {})
    };
  }

  const statements = DIFFICULTIES.reduce((acc, difficulty) => {
    acc[difficulty] = buildStatementEntries(skillId, caseId, difficulty);
    return acc;
  }, {});

  return {
    id: meta.id,
    label: meta.label,
    teaser: meta.teaser,
    history: meta.history,
    schema: meta.schema,
    style: meta.style,
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
  DIFFICULTIES,
  skillOrder as SKILL_ORDER,
  CASE_ORDER,
  BASE_PRACTICE,
  LANGUAGE_ORDER,
  LANGUAGE_METADATA,
  LANGUAGE_UI,
  LANGUAGE_OVERRIDES,
  STATEMENT_TRANSLATIONS
};
