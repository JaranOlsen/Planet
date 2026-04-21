import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { CASES } from "../src/data/cases.js";
import { STATEMENT_SETS } from "../src/data/statements.js";
import { STATEMENT_TRANSLATIONS } from "../src/data/translations.js";
import { CASE_BIBLES } from "../src/data/caseBibles.js";
import { CONTENT_ITEM_META_OVERRIDES } from "../src/data/contentReviewOverrides.js";
import {
  BENCHMARK_DERIVED_RESPONSE_LABEL,
  BENCHMARK_LEVEL_ORDER,
  CANONICAL_SKILL_ORDER,
  CONTENT_REVISION,
  CONTENT_TRACKS,
  HIGH_RISK_FLAGS,
  QA_FLAG_TAXONOMY,
  REVIEW_STATUSES,
  SKILL_EXERCISE_MAP
} from "../src/data/contentMeta.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const dataDir = path.join(rootDir, "src", "data");
const mdDir = path.join(rootDir, "src", "md");

const EXERCISE_1_DERIVED_RESPONSES = {
  "beginner-1":
    "Internally notice any softening, warmth, or rescuing impulse this tender story stirs in you, steady yourself, and respond with grounded appreciation without drifting away from the client's process.",
  "beginner-2":
    "Notice any urge to reassure quickly, slow your pace, and answer in a way that meets the nervousness directly while keeping therapy feelable and collaborative.",
  "beginner-3":
    "Track any pull to explain, advise, or fix the adaptation problem, re-center, and respond with curiosity about what feels most unsettling in the client's body and experience.",
  "beginner-4":
    "Notice your own surprise or discomfort with the dream material, stay steady, and respond in a way that welcomes the awkwardness without becoming defensive or interpretive too fast.",
  "beginner-5":
    "Monitor any wish to impress, perform, or compete with the previous therapist, and respond calmly by joining the hope while staying grounded in the client's present need.",
  "intermediate-1":
    "Notice any critic or competence-based reaction this shame statement triggers in you, soften it, and stay with the client's felt humiliation rather than moving to reassurance or analysis.",
  "intermediate-2":
    "Track defensiveness, cultural uncertainty, or pressure to prove yourself, and respond with respectful openness so the client can assess safety without you becoming self-protective.",
  "intermediate-3":
    "Notice sadness and any rescue urge, settle yourself, and stay emotionally available to the abandonment pain without hurrying the client past it.",
  "intermediate-4":
    "Monitor judgment, worry, or boundary anxiety about arriving high, ground yourself, and respond clearly enough to hold safety while remaining empathic and non-shaming.",
  "intermediate-5":
    "Track your own alarm around the violent fantasy, steady your body, and keep contact with the client's hurt and rage while assessing the emotional edge carefully.",
  "advanced-1":
    "Notice the anxiety, urgency, or fear this suicidal disclosure evokes in you, regulate first, and respond with calm presence so risk can be addressed without losing attunement.",
  "advanced-2":
    "Track any shame, pressure to prove competence, or wish to overexplain, and answer with transparent steadiness that keeps the focus on the client's fear of not being helped.",
  "advanced-3":
    "Notice attraction, discomfort, flattery, or alarm in yourself, bracket it, and respond with clear professional boundaries while staying warm and non-shaming.",
  "advanced-4":
    "Track defensiveness and the urge to justify the therapy, slow down, and receive the distrust openly enough that the alliance can be explored rather than argued about.",
  "advanced-5":
    "Notice reactions to the sexism, minimization, or coercion in the story, keep yourself grounded, and respond without shaming or colluding so the work can stay emotionally honest."
};

const DIFFICULTY_CASE_IDS = Object.freeze({
  easy: CASES.filter((entry) => entry.difficulty === "easy").map((entry) => entry.id),
  moderate: CASES.filter((entry) => entry.difficulty === "moderate").map((entry) => entry.id),
  hard: CASES.filter((entry) => entry.difficulty === "hard").map((entry) => entry.id)
});

const CASE_VOICE_REVIEW_GROUPS = Object.freeze([
  {
    id: "sara-vs-nina",
    label: "Sara vs Nina",
    caseIds: ["case-sara", "case-nina"],
    prompt:
      "Assign each blind sample to Sara or Nina based on voice, defensive style, and emotional organization."
  },
  {
    id: "michael-vs-carlos",
    label: "Michael vs Carlos",
    caseIds: ["case-michael", "case-carlos"],
    prompt:
      "Assign each blind sample to Michael or Carlos based on how anger, pride, shame, and control are voiced."
  },
  {
    id: "laura-vs-marcus",
    label: "Laura vs Marcus",
    caseIds: ["case-laura", "case-marcus"],
    prompt:
      "Assign each blind sample to Laura or Marcus based on trauma style, distance, and embodied threat cues."
  }
]);

const THREE_WAY_PERMUTATIONS = Object.freeze([
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0]
]);

function writeFileIfChanged(targetPath, content) {
  const existing = fs.existsSync(targetPath) ? fs.readFileSync(targetPath, "utf8") : null;
  if (existing === content) return false;
  fs.writeFileSync(targetPath, content, "utf8");
  return true;
}

function formatJsExport(fileHeader, exports) {
  const lines = ['"use strict";', "", fileHeader];
  exports.forEach(({ name, value }) => {
    lines.push(`export const ${name} = ${JSON.stringify(value, null, 2)};`, "");
  });
  return `${lines.join("\n").trimEnd()}\n`;
}

function buildLegacyId(skillId, caseId, index) {
  return `dp_${skillId}_${caseId}_${String(index + 1).padStart(2, "0")}`;
}

function buildSourceRef(skillId, caseId) {
  const exercise = SKILL_EXERCISE_MAP[skillId];
  return {
    type: "legacy_case_matrix",
    exerciseNumber: exercise?.exerciseNumber ?? null,
    exerciseTitle: exercise?.title ?? null,
    caseId
  };
}

function inferRiskFlags(text, suggestion) {
  const haystack = `${text}\n${suggestion}`.toLowerCase();
  const flags = [];
  if (/\b(kill myself|suicid(?:al|e)?|not to be alive|head-on|no point|hospital dying|drive .* truck)\b/.test(haystack)) {
    flags.push("suicide");
  }
  if (/\b(cut myself|cutting myself|scratch myself|self-harm|hurt myself)\b/.test(haystack)) {
    flags.push("self_harm");
  }
  if (
    /\b(violence|hit first|punch(?:ed|ing)? (?:a |the )?(?:wall|door|person|him|her|them)|punch walls|beat (?:him|her|them|people)|smash(?:ed|ing)? (?:a |the )?(?:wall|door|window|plate|glass|phone|object))\b/.test(
      haystack
    )
  ) {
    flags.push("violence");
  }
  if (/\b(trauma|abuse|flashbacks?|nightmares?|foster|holocaust|prison|assault|beating|traumatic)\b/.test(haystack)) {
    flags.push("trauma");
  }
  if (/\b(flirty|attracted to you|dated|romantically|sexual|affair|hooked up)\b/.test(haystack)) {
    flags.push("sexual_boundary");
  }
  if (/\b(drink|drinks|drank|drinking|alcohol|drinking problem|pot|marijuana|stoned|substance(?: use)?)\b/.test(haystack)) {
    flags.push("substance_use");
  }
  if (/\b(muslim|christian|religious|religion|faith|culture|cultural)\b/.test(haystack)) {
    flags.push("culture_religion");
  }
  return HIGH_RISK_FLAGS.filter((flag) => flags.includes(flag));
}

function buildRegistry() {
  const caseDifficultyMap = new Map(CASES.map((entry) => [entry.id, entry.difficulty ?? "unknown"]));
  const registry = {};
  let totalItems = 0;

  CANONICAL_SKILL_ORDER.forEach((skillId) => {
    const cases = STATEMENT_SETS[skillId] ?? {};
    registry[skillId] = {};
    Object.entries(cases).forEach(([caseId, items]) => {
      registry[skillId][caseId] = items.map((entry, index) => {
        totalItems += 1;
        const id = buildLegacyId(skillId, caseId, index);
        const overrideMeta = CONTENT_ITEM_META_OVERRIDES[id] ?? {};
        const riskFlags = overrideMeta.riskFlags ?? inferRiskFlags(entry.text ?? "", entry.suggestion ?? "");
        const baseMeta = {
          id,
          skillId,
          caseId,
          track: CONTENT_TRACKS.CASE_MATRIX,
          difficultyTier: caseDifficultyMap.get(caseId) ?? "unknown",
          sourceRef: buildSourceRef(skillId, caseId),
          riskFlags,
          criteriaTags: [...(SKILL_EXERCISE_MAP[skillId]?.defaultCriteriaTags ?? []), "legacy_matrix_item"],
          reviewStatus: REVIEW_STATUSES.LEGACY_IMPORTED,
          revision: CONTENT_REVISION
        };
        return {
          ...baseMeta,
          ...overrideMeta,
          id,
          skillId,
          caseId,
          track: CONTENT_TRACKS.CASE_MATRIX,
          difficultyTier: overrideMeta.difficultyTier ?? baseMeta.difficultyTier,
          sourceRef: overrideMeta.sourceRef ?? baseMeta.sourceRef,
          riskFlags,
          criteriaTags: overrideMeta.criteriaTags ?? baseMeta.criteriaTags,
          reviewStatus: overrideMeta.reviewStatus ?? baseMeta.reviewStatus,
          revision: overrideMeta.revision ?? baseMeta.revision
        };
      });
    });
  });

  return {
    registry,
    summary: {
      revision: CONTENT_REVISION,
      track: CONTENT_TRACKS.CASE_MATRIX,
      totalItems,
      qaFlagTaxonomy: QA_FLAG_TAXONOMY,
      generatedAt: new Date().toISOString()
    }
  };
}

function parseBenchmarkBank() {
  const extract = fs.readFileSync(path.join(mdDir, "EFT_Exercises_Extracted.md"), "utf8");
  const lines = extract.split(/\r?\n/);

  const exerciseMetaByNumber = Object.fromEntries(
    Object.entries(SKILL_EXERCISE_MAP).map(([skillId, meta]) => [String(meta.exerciseNumber), { skillId, ...meta }])
  );

  let currentExerciseNumber = null;
  let currentLevel = null;
  let currentMode = null;
  let currentEntry = null;
  const raw = {};

  function flushCurrentEntry() {
    if (!currentEntry || !currentExerciseNumber || !currentLevel) return;
    const bucket =
      raw[currentExerciseNumber]?.[currentLevel]?.[currentEntry.kind] ??
      null;
    if (!bucket) return;
    const joined = currentEntry.buffer.join(" ").replace(/\s+/g, " ").trim();
    if (!joined) {
      currentEntry = null;
      return;
    }
    let emotionLabel = null;
    let content = joined;
    const emotionMatch = joined.match(/^\[([^\]]+)\]\s*(.*)$/);
    if (emotionMatch) {
      emotionLabel = emotionMatch[1].trim();
      content = emotionMatch[2].trim();
    }
    bucket[currentEntry.number] = {
      number: currentEntry.number,
      emotionLabel,
      content
    };
    currentEntry = null;
  }

  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    const exerciseMatch = line.match(/^##\s+EXERCISE\s+(\d+)\.?\s*(.*)$/i);
    if (exerciseMatch) {
      flushCurrentEntry();
      currentExerciseNumber = exerciseMatch[1];
      currentLevel = null;
      currentMode = null;
      raw[currentExerciseNumber] = {};
      return;
    }

    const levelMatch = line.match(/^###\s+(Beginner|Intermediate|Advanced)\s+[-—]\s+(Client Statements|Example Therapist Responses)/i);
    if (levelMatch) {
      flushCurrentEntry();
      currentLevel = levelMatch[1].toLowerCase();
      currentMode = levelMatch[2].toLowerCase().includes("client") ? "statement" : "response";
      raw[currentExerciseNumber][currentLevel] = raw[currentExerciseNumber][currentLevel] ?? {
        statement: {},
        response: {}
      };
      return;
    }

    const itemMatch = line.match(/^\*\*(Statement|Response)\s+(\d+)(?:[^*]*)\*\*(.*)$/);
    if (itemMatch) {
      flushCurrentEntry();
      currentEntry = {
        kind: itemMatch[1].toLowerCase() === "statement" ? "statement" : "response",
        number: Number(itemMatch[2]),
        buffer: []
      };
      const trailing = itemMatch[3]?.trim();
      if (trailing) currentEntry.buffer.push(trailing);
      return;
    }

    if (currentEntry && line) {
      currentEntry.buffer.push(line);
    }
  });
  flushCurrentEntry();

  const benchmarkBank = {};
  let totalStatements = 0;
  let totalResponses = 0;
  let sourceResponseCount = 0;
  let derivedResponseCount = 0;

  CANONICAL_SKILL_ORDER.forEach((skillId) => {
    const exerciseMeta = SKILL_EXERCISE_MAP[skillId];
    const exerciseNumber = String(exerciseMeta.exerciseNumber);
    const exerciseRaw = raw[exerciseNumber] ?? {};
    const levels = {};

    BENCHMARK_LEVEL_ORDER.forEach((level) => {
      const statements = Object.values(exerciseRaw[level]?.statement ?? {}).sort((a, b) => a.number - b.number);
      const responses = Object.values(exerciseRaw[level]?.response ?? {}).sort((a, b) => a.number - b.number);
      const items = statements.map((statementEntry) => {
        const responseEntry = responses.find((entry) => entry.number === statementEntry.number) ?? null;
        const responseText =
          responseEntry?.content ??
          EXERCISE_1_DERIVED_RESPONSES[`${level}-${statementEntry.number}`] ??
          null;
        const responseOrigin = responseEntry?.content
          ? "source_example"
          : responseText
            ? BENCHMARK_DERIVED_RESPONSE_LABEL
            : "missing";
        const riskFlags = inferRiskFlags(statementEntry.content, responseText ?? "");
        if (statementEntry.content) totalStatements += 1;
        if (responseText) {
          totalResponses += 1;
          if (responseOrigin === "source_example") {
            sourceResponseCount += 1;
          } else if (responseOrigin === BENCHMARK_DERIVED_RESPONSE_LABEL) {
            derivedResponseCount += 1;
          }
        }
        return {
          id: `benchmark_ex${exerciseNumber.padStart(2, "0")}_${level}_${String(statementEntry.number).padStart(2, "0")}`,
          skillId,
          exerciseNumber: exerciseMeta.exerciseNumber,
          exerciseTitle: exerciseMeta.title,
          track: CONTENT_TRACKS.BENCHMARK,
          difficultyTier: level,
          statementNumber: statementEntry.number,
          statement: statementEntry.content,
          response: responseText,
          emotionLabel: statementEntry.emotionLabel,
          sourceRef: {
            type: "book_extract",
            exerciseNumber: exerciseMeta.exerciseNumber,
            level,
            statementNumber: statementEntry.number,
            responseOrigin
          },
          riskFlags,
          criteriaTags: SKILL_EXERCISE_MAP[skillId]?.defaultCriteriaTags ?? [],
          reviewStatus: REVIEW_STATUSES.APPROVED,
          revision: CONTENT_REVISION
        };
      });

      levels[level] = items;
    });

    benchmarkBank[skillId] = {
      skillId,
      exerciseNumber: exerciseMeta.exerciseNumber,
      title: exerciseMeta.title,
      levels
    };
  });

  return {
    benchmarkBank,
    summary: {
      revision: CONTENT_REVISION,
      totalStatements,
      totalResponses,
      sourceResponseCount,
      derivedResponseCount,
      generatedAt: new Date().toISOString()
    }
  };
}

function buildContentInventory(registry, registrySummary, benchmarkSummary) {
  const inventory = [];
  const translationMap = STATEMENT_TRANSLATIONS.no ?? {};
  const caseLookup = Object.fromEntries(CASES.map((entry) => [entry.id, entry]));

  Object.entries(registry).forEach(([skillId, caseMap]) => {
    Object.entries(caseMap).forEach(([caseId, items]) => {
      items.forEach((meta, index) => {
        const caseMeta = caseLookup[caseId] ?? {};
        inventory.push({
          id: meta.id,
          skillId,
          caseId,
          caseDifficulty: caseMeta.difficulty ?? meta.difficultyTier,
          orderIndex: index,
          translationStatus: translationMap[meta.id] ? "translated" : "missing",
          feedbackStatus: "not_loaded",
          reviewStatus: meta.reviewStatus,
          reviewPass: meta.reviewPass ?? null,
          reviewFocus: meta.reviewFocus ?? [],
          revision: meta.revision,
          riskFlags: meta.riskFlags,
          sourceRef: meta.sourceRef,
          qaIssues: []
        });
      });
    });
  });

  return {
    generatedAt: new Date().toISOString(),
    revision: CONTENT_REVISION,
    caseBibleCount: Object.keys(CASE_BIBLES).length,
    caseMatrixSummary: registrySummary,
    benchmarkSummary,
    inventory
  };
}

function lintSkillPurity(skillId, suggestion) {
  const text = `${suggestion ?? ""}`.trim();
  const lower = text.toLowerCase();
  const warnings = [];

  if (skillId === "therapist-self-awareness" && !text.includes("[Internal]")) {
    warnings.push("missing_internal_self_awareness_cue");
  }
  if (skillId === "empathic-understanding" && text.includes("?")) {
    warnings.push("empathic_understanding_should_not_default_to_question");
  }
  if (
    skillId === "empathic-affirmation-validation" &&
    !/(of course|makes .*sense|no wonder|understandably|anyone would|sorry that happened)/i.test(text)
  ) {
    warnings.push("validation_missing_explicit_legitimizing_cue");
  }
  if (skillId === "exploratory-questions" && !text.includes("?")) {
    warnings.push("exploratory_question_missing_question_mark");
  }
  if (
    skillId === "providing-treatment-rationale" &&
    !/(because|helps|in this|we go|we can|so that|learning|lets|allows|teach|build|turn|update|refine|target|goal|practice|map|learn)/i.test(text)
  ) {
    warnings.push("treatment_rationale_missing_explanatory_language");
  }
  if (skillId === "self-disclosure" && !/\bi\b/i.test(text)) {
    warnings.push("self_disclosure_missing_first_person_reference");
  }
  if (skillId === "marker-recognition-chairwork" && !/(chair|two-chair|empty chair)/i.test(lower)) {
    warnings.push("chairwork_setup_missing_explicit_task_language");
  }
  if (
    skillId === "alliance-repair" &&
    !/(sorry|apolog|thank you for telling me|thanks for telling me|i hear)/i.test(lower)
  ) {
    warnings.push("alliance_repair_missing_ownership_or_receiving_language");
  }

  return warnings;
}

function buildQualityArtifacts(registry) {
  const duplicateMap = new Map();
  const reviewQueue = [];
  const skillPurityWarnings = [];
  const translationMap = STATEMENT_TRANSLATIONS.no ?? {};

  Object.entries(registry).forEach(([skillId, caseMap]) => {
    Object.entries(caseMap).forEach(([caseId, items]) => {
      const contentItems = STATEMENT_SETS?.[skillId]?.[caseId] ?? [];
      items.forEach((meta, index) => {
        const contentItem = contentItems[index] ?? { text: "", suggestion: "" };
        const statementKey = contentItem.text.trim().toLowerCase();
        if (!duplicateMap.has(statementKey)) {
          duplicateMap.set(statementKey, []);
        }
        duplicateMap.get(statementKey).push({
          id: meta.id,
          skillId,
          caseId,
          text: contentItem.text
        });

        const warnings = lintSkillPurity(skillId, contentItem.suggestion);
        warnings.forEach((rule) => {
          skillPurityWarnings.push({
            id: meta.id,
            skillId,
            caseId,
            rule,
            suggestion: contentItem.suggestion
          });
          reviewQueue.push({
            priority: "high",
            id: meta.id,
            skillId,
            caseId,
            reason: rule
          });
        });

        if ((meta.riskFlags ?? []).length > 0 && meta.reviewStatus === REVIEW_STATUSES.NEEDS_EXTERNAL_REVIEW) {
          reviewQueue.push({
            priority: "high",
            id: meta.id,
            skillId,
            caseId,
            reason: "external_high_risk_review_recommended",
            riskFlags: meta.riskFlags
          });
        } else if ((meta.riskFlags ?? []).length > 0 && meta.reviewStatus !== REVIEW_STATUSES.APPROVED) {
          reviewQueue.push({
            priority: "critical",
            id: meta.id,
            skillId,
            caseId,
            reason: "high_risk_review_required",
            riskFlags: meta.riskFlags
          });
        }

        if (!translationMap[meta.id]) {
          reviewQueue.push({
            priority: "critical",
            id: meta.id,
            skillId,
            caseId,
            reason: "missing_translation"
          });
        }
      });
    });
  });

  const duplicateStatements = [...duplicateMap.values()]
    .filter((items) => items.length > 1)
    .map((items) => ({
      statement: items[0].text,
      occurrences: items
    }));

  duplicateStatements.forEach((entry) => {
    entry.occurrences.forEach((occurrence) => {
      reviewQueue.push({
        priority: "medium",
        id: occurrence.id,
        skillId: occurrence.skillId,
        caseId: occurrence.caseId,
        reason: "duplicate_statement_across_skills"
      });
    });
  });

  const priorityRank = { critical: 0, high: 1, medium: 2, low: 3 };
  reviewQueue.sort((a, b) => {
    const priorityDelta = (priorityRank[a.priority] ?? 99) - (priorityRank[b.priority] ?? 99);
    if (priorityDelta !== 0) return priorityDelta;
    return a.id.localeCompare(b.id);
  });

  return {
    qualityReport: {
      generatedAt: new Date().toISOString(),
      revision: CONTENT_REVISION,
      duplicateStatementCount: duplicateStatements.length,
      skillPurityWarningCount: skillPurityWarnings.length,
      reviewQueueCount: reviewQueue.length,
      duplicateStatements,
      skillPurityWarnings
    },
    reviewQueue
  };
}

function getRepresentativeIndices(itemCount) {
  if (itemCount <= 3) return [0, 1, 2].slice(0, itemCount);
  return [0, Math.floor((itemCount - 1) / 2), itemCount - 2];
}

function buildReviewItem(registry, skillId, caseId, index, caseLookup) {
  const meta = registry?.[skillId]?.[caseId]?.[index];
  const contentItem = STATEMENT_SETS?.[skillId]?.[caseId]?.[index];
  const translation = meta?.id ? STATEMENT_TRANSLATIONS.no?.[meta.id] : null;
  const caseMeta = caseLookup[caseId] ?? {};

  if (!meta || !contentItem || !translation) return null;

  return {
    id: meta.id,
    order: index + 1,
    caseId,
    caseLabel: caseMeta.label ?? caseId,
    caseName: caseMeta.name ?? caseMeta.label ?? caseId,
    difficulty: caseMeta.difficulty ?? meta.difficultyTier,
    riskFlags: meta.riskFlags ?? [],
    en: {
      statement: contentItem.text,
      response: contentItem.suggestion
    },
    no: {
      statement: translation.text,
      response: translation.suggestion
    }
  };
}

function buildSpotCheckPacket(registry) {
  const caseLookup = Object.fromEntries(CASES.map((entry) => [entry.id, entry]));

  return {
    generatedAt: new Date().toISOString(),
    revision: CONTENT_REVISION,
    instructions: [
      "Open each listed item in the app in English and Norwegian.",
      "Confirm case voice, skill purity, difficulty fit, response naturalness, and translation tone.",
      "Use the anchor items as a minimum sample; add adjacent items when a concern appears."
    ],
    skills: CANONICAL_SKILL_ORDER.map((skillId, skillIndex) => {
      const firstCaseId = Object.keys(registry?.[skillId] ?? {})[0];
      const itemCount = (registry?.[skillId]?.[firstCaseId] ?? []).length;
      const anchorIndices = getRepresentativeIndices(itemCount);

      return {
        skillId,
        skillTitle: SKILL_EXERCISE_MAP[skillId]?.title ?? skillId,
        exerciseNumber: SKILL_EXERCISE_MAP[skillId]?.exerciseNumber ?? null,
        cases: ["easy", "moderate", "hard"].map((difficulty) => {
          const casePool = DIFFICULTY_CASE_IDS[difficulty];
          const caseId = casePool[skillIndex % casePool.length];

          return {
            difficulty,
            caseId,
            caseLabel: caseLookup[caseId]?.label ?? caseId,
            anchorOrders: anchorIndices.map((index) => index + 1),
            items: anchorIndices
              .map((index) => buildReviewItem(registry, skillId, caseId, index, caseLookup))
              .filter(Boolean)
          };
        })
      };
    })
  };
}

function buildBlindCaseVoiceArtifacts(registry) {
  const caseLookup = Object.fromEntries(CASES.map((entry) => [entry.id, entry]));
  const packets = [];
  const answerKey = [];

  CANONICAL_SKILL_ORDER.forEach((skillId, skillIndex) => {
    const firstCaseId = Object.keys(registry?.[skillId] ?? {})[0];
    const itemCount = (registry?.[skillId]?.[firstCaseId] ?? []).length;
    const candidateIndices = getRepresentativeIndices(itemCount);

    CASE_VOICE_REVIEW_GROUPS.forEach((group, groupIndex) => {
      const sampleIndex = candidateIndices[(skillIndex + groupIndex) % candidateIndices.length];
      const rawSamples = group.caseIds
        .map((caseId) => buildReviewItem(registry, skillId, caseId, sampleIndex, caseLookup))
        .filter(Boolean);
      const orderedSamples = (skillIndex + groupIndex) % 2 === 0 ? rawSamples : [...rawSamples].reverse();
      const packetId = `${skillId}__${group.id}`;

      packets.push({
        packetId,
        skillId,
        skillTitle: SKILL_EXERCISE_MAP[skillId]?.title ?? skillId,
        pairId: group.id,
        pairLabel: group.label,
        prompt: group.prompt,
        samples: orderedSamples.map((sample, index) => ({
          blindLabel: String.fromCharCode(65 + index),
          order: sample.order,
          riskFlags: sample.riskFlags,
          en: sample.en,
          no: sample.no
        }))
      });

      answerKey.push({
        packetId,
        skillId,
        pairId: group.id,
        answers: orderedSamples.map((sample, index) => ({
          blindLabel: String.fromCharCode(65 + index),
          caseId: sample.caseId,
          caseLabel: sample.caseLabel,
          difficulty: sample.difficulty,
          itemId: sample.id,
          order: sample.order
        }))
      });
    });
  });

  return {
    blindCaseVoiceReview: {
      generatedAt: new Date().toISOString(),
      revision: CONTENT_REVISION,
      instructions: [
        "Use the blind labels only; do not consult the answer key until the reviewer has committed a guess.",
        "Judge case identity from voice, pacing, defensive style, symptom language, and relational stance.",
        "Review English first, then Norwegian, and note whether the same distinction holds in both languages."
      ],
      packets
    },
    blindCaseVoiceAnswerKey: {
      generatedAt: new Date().toISOString(),
      revision: CONTENT_REVISION,
      packets: answerKey
    }
  };
}

function buildBlindDifficultyArtifacts(registry) {
  const caseLookup = Object.fromEntries(CASES.map((entry) => [entry.id, entry]));
  const packets = [];
  const answerKey = [];

  CANONICAL_SKILL_ORDER.forEach((skillId, skillIndex) => {
    const firstCaseId = Object.keys(registry?.[skillId] ?? {})[0];
    const itemCount = (registry?.[skillId]?.[firstCaseId] ?? []).length;
    const candidateIndices = getRepresentativeIndices(itemCount);
    const sampleIndex = candidateIndices[skillIndex % candidateIndices.length];
    const caseIds = [
      DIFFICULTY_CASE_IDS.easy[skillIndex % DIFFICULTY_CASE_IDS.easy.length],
      DIFFICULTY_CASE_IDS.moderate[skillIndex % DIFFICULTY_CASE_IDS.moderate.length],
      DIFFICULTY_CASE_IDS.hard[skillIndex % DIFFICULTY_CASE_IDS.hard.length]
    ];
    const rawSamples = caseIds
      .map((caseId) => buildReviewItem(registry, skillId, caseId, sampleIndex, caseLookup))
      .filter(Boolean);
    const permutation = THREE_WAY_PERMUTATIONS[skillIndex % THREE_WAY_PERMUTATIONS.length];
    const orderedSamples = permutation.map((index) => rawSamples[index]).filter(Boolean);
    const packetId = `${skillId}__difficulty`;

    packets.push({
      packetId,
      skillId,
      skillTitle: SKILL_EXERCISE_MAP[skillId]?.title ?? skillId,
      prompt:
        "Assign each blind sample to easy, moderate, or hard based on affect tolerance, defensive organization, relational complexity, and rupture risk.",
      samples: orderedSamples.map((sample, index) => ({
        blindLabel: String.fromCharCode(65 + index),
        order: sample.order,
        riskFlags: sample.riskFlags,
        en: sample.en,
        no: sample.no
      }))
    });

    answerKey.push({
      packetId,
      skillId,
      answers: orderedSamples.map((sample, index) => ({
        blindLabel: String.fromCharCode(65 + index),
        caseId: sample.caseId,
        caseLabel: sample.caseLabel,
        difficulty: sample.difficulty,
        itemId: sample.id,
        order: sample.order
      }))
    });
  });

  return {
    blindDifficultyReview: {
      generatedAt: new Date().toISOString(),
      revision: CONTENT_REVISION,
      instructions: [
        "Rank or label each sample as easy, moderate, or hard before checking the answer key.",
        "Base the judgment on the item alone, not on assumed case identity.",
        "Compare English and Norwegian to see whether the difficulty signal survives translation."
      ],
      packets
    },
    blindDifficultyAnswerKey: {
      generatedAt: new Date().toISOString(),
      revision: CONTENT_REVISION,
      packets: answerKey
    }
  };
}

function buildAcceptanceSummary(inventory, qualityReport, artifacts) {
  const reviewStatusCounts = inventory.inventory.reduce((acc, item) => {
    acc[item.reviewStatus] = (acc[item.reviewStatus] ?? 0) + 1;
    return acc;
  }, {});
  const translatedCount = inventory.inventory.filter((item) => item.translationStatus === "translated").length;

  return {
    generatedAt: new Date().toISOString(),
    revision: CONTENT_REVISION,
    status: {
      totalItems: inventory.caseMatrixSummary.totalItems,
      translatedCount,
      reviewStatusCounts,
      duplicateStatementCount: qualityReport.duplicateStatementCount,
      skillPurityWarningCount: qualityReport.skillPurityWarningCount,
      reviewQueueCount: qualityReport.reviewQueueCount,
      qaClean:
        qualityReport.duplicateStatementCount === 0 &&
        qualityReport.skillPurityWarningCount === 0 &&
        qualityReport.reviewQueueCount === 0
    },
    artifacts
  };
}

function buildAcceptanceChecklist(spotCheckPacket, blindCaseVoiceReview, blindDifficultyReview, acceptanceSummary) {
  const lines = [
    "# Content Acceptance Checklist",
    "",
    `Revision: ${acceptanceSummary.revision}`,
    `Generated: ${acceptanceSummary.generatedAt}`,
    "",
    "## Gate",
    `- Approved items: ${acceptanceSummary.status.reviewStatusCounts.approved ?? 0}/${acceptanceSummary.status.totalItems}`,
    `- Norwegian coverage: ${acceptanceSummary.status.translatedCount}/${acceptanceSummary.status.totalItems}`,
    `- QA clean: ${acceptanceSummary.status.qaClean ? "yes" : "no"}`,
    "",
    "## Manual Spot-Check",
    "- Open each listed anchor item in the app in English and Norwegian.",
    "- Confirm case voice, skill purity, difficulty fit, therapist tone, and translation naturalness.",
    "- If one anchor fails, review adjacent items in the same case/skill cell before release.",
    ""
  ];

  spotCheckPacket.skills.forEach((skill) => {
    const summary = skill.cases
      .map((entry) => `${entry.difficulty}: ${entry.caseLabel} [${entry.anchorOrders.join(", ")}]`)
      .join(" | ");
    lines.push(`- ${skill.skillTitle}: ${summary}`);
  });

  lines.push(
    "",
    "## Blind Case Voice",
    `- Packets: ${blindCaseVoiceReview.packets.length}`,
    "- Ask reviewers to assign each sample to the named case pair before checking the answer key.",
    "- Record misses where English works but Norwegian collapses the distinction, or vice versa.",
    "",
    "## Blind Difficulty",
    `- Packets: ${blindDifficultyReview.packets.length}`,
    "- Ask reviewers to label each blind sample easy, moderate, or hard before checking the answer key.",
    "- Flag any skill where reviewers cannot reliably separate the three difficulty tiers."
  );

  return `${lines.join("\n")}\n`;
}

const { registry, summary: registrySummary } = buildRegistry();
const { benchmarkBank, summary: benchmarkSummary } = parseBenchmarkBank();
const inventory = buildContentInventory(registry, registrySummary, benchmarkSummary);
const { qualityReport, reviewQueue } = buildQualityArtifacts(registry);
const spotCheckPacket = buildSpotCheckPacket(registry);
const { blindCaseVoiceReview, blindCaseVoiceAnswerKey } = buildBlindCaseVoiceArtifacts(registry);
const { blindDifficultyReview, blindDifficultyAnswerKey } = buildBlindDifficultyArtifacts(registry);

const artifactPaths = {
  spotCheckPacketPath: path.join(dataDir, "contentSpotCheckPacket.json"),
  blindCaseVoiceReviewPath: path.join(dataDir, "blindCaseVoiceReview.json"),
  blindCaseVoiceAnswerKeyPath: path.join(dataDir, "blindCaseVoiceAnswerKey.json"),
  blindDifficultyReviewPath: path.join(dataDir, "blindDifficultyReview.json"),
  blindDifficultyAnswerKeyPath: path.join(dataDir, "blindDifficultyAnswerKey.json"),
  acceptanceSummaryPath: path.join(dataDir, "contentAcceptanceSummary.json"),
  acceptanceChecklistPath: path.join(dataDir, "contentAcceptanceChecklist.md")
};

const acceptanceSummary = buildAcceptanceSummary(inventory, qualityReport, artifactPaths);
const acceptanceChecklist = buildAcceptanceChecklist(
  spotCheckPacket,
  blindCaseVoiceReview,
  blindDifficultyReview,
  acceptanceSummary
);

const registryChanged = writeFileIfChanged(
  path.join(dataDir, "contentRegistry.js"),
  formatJsExport("// Generated by deliberatepractice/scripts/build-content-artifacts.mjs", [
    { name: "CONTENT_REGISTRY_SUMMARY", value: registrySummary },
    { name: "CONTENT_REGISTRY", value: registry }
  ])
);

const benchmarkChanged = writeFileIfChanged(
  path.join(dataDir, "benchmarkBank.js"),
  formatJsExport("// Generated by deliberatepractice/scripts/build-content-artifacts.mjs", [
    { name: "BENCHMARK_BANK_SUMMARY", value: benchmarkSummary },
    { name: "BENCHMARK_BANK", value: benchmarkBank }
  ])
);

const inventoryPath = path.join(dataDir, "contentInventory.json");
const inventoryChanged = writeFileIfChanged(
  inventoryPath,
  `${JSON.stringify(inventory, null, 2)}\n`
);

const qualityReportPath = path.join(dataDir, "contentQualityReport.json");
const qualityReportChanged = writeFileIfChanged(
  qualityReportPath,
  `${JSON.stringify(qualityReport, null, 2)}\n`
);

const reviewQueuePath = path.join(dataDir, "contentReviewQueue.json");
const reviewQueueChanged = writeFileIfChanged(
  reviewQueuePath,
  `${JSON.stringify(reviewQueue, null, 2)}\n`
);

const spotCheckPacketChanged = writeFileIfChanged(
  artifactPaths.spotCheckPacketPath,
  `${JSON.stringify(spotCheckPacket, null, 2)}\n`
);

const blindCaseVoiceReviewChanged = writeFileIfChanged(
  artifactPaths.blindCaseVoiceReviewPath,
  `${JSON.stringify(blindCaseVoiceReview, null, 2)}\n`
);

const blindCaseVoiceAnswerKeyChanged = writeFileIfChanged(
  artifactPaths.blindCaseVoiceAnswerKeyPath,
  `${JSON.stringify(blindCaseVoiceAnswerKey, null, 2)}\n`
);

const blindDifficultyReviewChanged = writeFileIfChanged(
  artifactPaths.blindDifficultyReviewPath,
  `${JSON.stringify(blindDifficultyReview, null, 2)}\n`
);

const blindDifficultyAnswerKeyChanged = writeFileIfChanged(
  artifactPaths.blindDifficultyAnswerKeyPath,
  `${JSON.stringify(blindDifficultyAnswerKey, null, 2)}\n`
);

const acceptanceSummaryChanged = writeFileIfChanged(
  artifactPaths.acceptanceSummaryPath,
  `${JSON.stringify(acceptanceSummary, null, 2)}\n`
);

const acceptanceChecklistChanged = writeFileIfChanged(
  artifactPaths.acceptanceChecklistPath,
  acceptanceChecklist
);

console.log(
  JSON.stringify(
    {
      revision: CONTENT_REVISION,
      registryChanged,
      benchmarkChanged,
      inventoryChanged,
      qualityReportChanged,
      reviewQueueChanged,
      spotCheckPacketChanged,
      blindCaseVoiceReviewChanged,
      blindCaseVoiceAnswerKeyChanged,
      blindDifficultyReviewChanged,
      blindDifficultyAnswerKeyChanged,
      acceptanceSummaryChanged,
      acceptanceChecklistChanged,
      totalCaseMatrixItems: registrySummary.totalItems,
      totalBenchmarkStatements: benchmarkSummary.totalStatements,
      totalBenchmarkResponses: benchmarkSummary.totalResponses,
      inventoryPath,
      qualityReportPath,
      reviewQueuePath,
      ...artifactPaths
    },
    null,
    2
  )
);
