import { BENCHMARK_BANK } from "../src/data/benchmarkBank.js";
import {
  BASE_PRACTICE,
  CASE_BIBLES,
  CONTENT_REVISION,
  CONTENT_REGISTRY,
  CONTENT_REGISTRY_SUMMARY,
  EXPERIMENTAL_SKILL_IDS,
  QA_FLAG_TAXONOMY,
  SKILL_ORDER,
  STATEMENT_TRANSLATIONS
} from "../src/data/index.js";

const errors = [];
const warnings = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

const seenIds = new Set();
let translatedCount = 0;
let totalCount = 0;

SKILL_ORDER.forEach((skillId) => {
  assert(!EXPERIMENTAL_SKILL_IDS.includes(skillId), `Experimental skill leaked into production order: ${skillId}`);
  const skill = BASE_PRACTICE[skillId];
  assert(Boolean(skill), `Missing BASE_PRACTICE entry for ${skillId}`);
  Object.entries(skill?.cases ?? {}).forEach(([caseId, caseItem]) => {
    assert(Boolean(CASE_BIBLES[caseId]), `Missing case bible for ${caseId}`);
    const registryItems = CONTENT_REGISTRY?.[skillId]?.[caseId] ?? [];
    assert(
      registryItems.length === (caseItem.statements ?? []).length,
      `Registry mismatch for ${skillId}/${caseId}: ${registryItems.length} != ${(caseItem.statements ?? []).length}`
    );
    (caseItem.statements ?? []).forEach((item) => {
      totalCount += 1;
      assert(Boolean(item.id), `Missing stable id for ${skillId}/${caseId}`);
      assert(item.revision === CONTENT_REVISION, `Revision mismatch for ${item.id}`);
      assert(!seenIds.has(item.id), `Duplicate id detected: ${item.id}`);
      seenIds.add(item.id);
      if (STATEMENT_TRANSLATIONS.no?.[item.id]) {
        translatedCount += 1;
      } else {
        errors.push(`Missing Norwegian translation for ${item.id}`);
      }
      if (!Array.isArray(item.criteriaTags) || item.criteriaTags.length === 0) {
        warnings.push(`No criteria tags on ${item.id}`);
      }
      if (!Array.isArray(item.riskFlags)) {
        errors.push(`Risk flags missing array shape for ${item.id}`);
      }
    });
  });
});

assert(
  translatedCount === totalCount,
  `Translation coverage mismatch: ${translatedCount}/${totalCount}`
);
assert(
  totalCount === CONTENT_REGISTRY_SUMMARY.totalItems,
  `Registry summary mismatch: runtime=${totalCount} summary=${CONTENT_REGISTRY_SUMMARY.totalItems}`
);
assert(
  QA_FLAG_TAXONOMY.length >= 8,
  `QA taxonomy looks incomplete: ${QA_FLAG_TAXONOMY.length}`
);

const benchmarkSkillIds = Object.keys(BENCHMARK_BANK);
assert(benchmarkSkillIds.length === SKILL_ORDER.length, "Benchmark bank does not cover all production skills");
benchmarkSkillIds.forEach((skillId) => {
  const levels = BENCHMARK_BANK[skillId]?.levels ?? {};
  ["beginner", "intermediate", "advanced"].forEach((level) => {
    const items = levels[level] ?? [];
    assert(Array.isArray(items) && items.length > 0, `Benchmark bank missing ${skillId}/${level}`);
  });
});

const report = {
  revision: CONTENT_REVISION,
  totalRuntimeItems: totalCount,
  translatedCount,
  benchmarkSkillCount: benchmarkSkillIds.length,
  caseBibleCount: Object.keys(CASE_BIBLES).length,
  warnings,
  errors
};

console.log(JSON.stringify(report, null, 2));

if (errors.length > 0) {
  process.exitCode = 1;
}
