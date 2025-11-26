"use strict";

import {
  SKILL_ORDER,
  CASE_ORDER,
  LANGUAGE_ORDER,
  BASE_PRACTICE,
  LANGUAGE_METADATA,
  LANGUAGE_UI,
  LANGUAGE_OVERRIDES,
  STATEMENT_TRANSLATIONS,
  GLOSSARY
} from "./practiceData.js";
import {
  submitFeedback,
  redeemAccessCode,
  isSupabaseReady
} from "./backend.js";

const sections = {
  language: document.getElementById("language-selection"),
  skill: document.getElementById("skill-selection"),
  case: document.getElementById("case-selection"),
  practice: document.getElementById("practice-area")
};

const elements = {
  appTitle: document.getElementById("app-title"),
  appTagline: document.getElementById("app-tagline"),
  languagePanelTitle: document.getElementById("language-panel-title"),
  languagePanelDescription: document.getElementById("language-panel-description"),
  languageList: document.getElementById("language-list"),
  skillPanelTitle: document.getElementById("skill-panel-title"),
  skillPanelDescription: document.getElementById("skill-panel-description"),
  skillList: document.getElementById("skill-list"),
  casePanelTitle: document.getElementById("case-panel-title"),
  casePanelDescription: document.getElementById("case-panel-description"),
  caseList: document.getElementById("case-list"),
  practiceSkill: document.getElementById("practice-skill"),
  caseName: document.getElementById("case-name"),
  caseSchema: document.getElementById("case-schema"),
  caseStyle: document.getElementById("case-style"),
  caseSkillContext: document.getElementById("case-skill-context"),
  caseSkillName: document.getElementById("case-skill-name"),
  caseSkillMarkerLabel: document.getElementById("case-skill-marker-label"),
  caseSkillMarker: document.getElementById("case-skill-marker"),
  caseSkillSummaryLabel: document.getElementById("case-skill-summary-label"),
  caseSkillSummary: document.getElementById("case-skill-summary"),
  caseSkillAimLabel: document.getElementById("case-skill-aim-label"),
  caseSkillAim: document.getElementById("case-skill-aim"),
  caseSkillToggle: document.getElementById("case-skill-toggle"),
  caseSkillBody: document.getElementById("case-skill-body"),
  glossaryPanel: document.getElementById("glossary-panel"),
  glossaryHint: document.getElementById("glossary-hint"),
  glossaryCard: document.getElementById("glossary-card"),
  glossaryTitle: document.getElementById("glossary-title"),
  glossaryTerm: document.getElementById("glossary-term"),
  glossaryDefinition: document.getElementById("glossary-definition"),
  glossaryClose: document.getElementById("glossary-close"),
  caseBriefHeading: document.getElementById("case-brief-heading"),
  caseVoiceHeading: document.getElementById("case-voice-heading"),
  caseVoice: document.getElementById("case-voice"),
  statementCaseName: document.getElementById("statement-case-name"),
  caseBriefScreen: document.getElementById("case-brief-screen"),
  statementWorkspace: document.getElementById("statement-workspace"),
  startPracticeButton: document.getElementById("start-practice"),
  viewCaseBriefButton: document.getElementById("view-case-brief"),
  caseSchemaLabel: document.getElementById("case-schema-label"),
  caseStyleLabel: document.getElementById("case-style-label"),
  statementText: document.getElementById("statement-text"),
  statementCounter: document.getElementById("statement-counter"),
  shuffleButton: document.getElementById("shuffle-order"),
  nextButton: document.getElementById("next-statement"),
  practiceControls: document.querySelector(".practice-controls"),
  languageBackButton: document.getElementById("back-to-language"),
  skillsBackButton: document.getElementById("back-to-skills"),
  casesBackButton: document.getElementById("back-to-cases"),
  footerNote: document.getElementById("footer-note"),
  statementPanel: document.querySelector(".statement-panel"),
  suggestionPanel: document.querySelector(".suggestion-panel"),
  suggestionToggle: document.getElementById("toggle-suggestion"),
  suggestionText: document.getElementById("suggestion-text"),
  feedbackTitle: document.getElementById("feedback-title"),
  feedbackForm: document.getElementById("feedback-form"),
  feedbackReason: document.getElementById("feedback-reason"),
  feedbackReasonLabel: document.getElementById("feedback-reason-label"),
  feedbackDetails: document.getElementById("feedback-details"),
  feedbackDetailsLabel: document.getElementById("feedback-details-label"),
  feedbackStatus: document.getElementById("feedback-status"),
  feedbackToggle: document.getElementById("feedback-toggle"),
  feedbackSubmit: document.getElementById("feedback-submit"),
  lockedBanner: document.getElementById("locked-banner"),
  paywallOverlay: document.getElementById("paywall-overlay"),
  paywallMessage: document.getElementById("paywall-message"),
  paywallHeading: document.getElementById("paywall-heading"),
  unlockForm: document.getElementById("unlock-form"),
  unlockCodeInput: document.getElementById("unlock-code"),
  unlockStatus: document.getElementById("unlock-status"),
  unlockSubmit: document.getElementById("unlock-submit"),
  closePaywallButton: document.getElementById("close-paywall")
};

const state = {
  languageId: null,
  skillId: null,
  caseId: null,
  order: [],
  index: 0,
  suggestionVisible: false,
  view: "brief",
  accessLevel: "free",
  currentStatement: null,
  unlocking: false,
  feedbackCollapsed: true,
  skillContextExpanded: false,
  activeGlossaryTermId: null
};

const SHUFFLE_ICON_SRC = `${import.meta.env.BASE_URL}assets/icons/shuffle.svg`;

const languageButtonMap = new Map();
const skillButtonMap = new Map();
const caseButtonMap = new Map();
let activeGlossaryChip = null;

const ACCESS_STORAGE_KEY = "dp_access_level";

const SKILL_PHASE_MAP = {
  "therapist-self-awareness": "beta",
  "providing-treatment-rationale": "beta",
  "exploratory-questions": "beta",
  "staying-in-contact-intense-affect": "beta",
  "self-disclosure": "beta",
  "marker-recognition-chairwork": "alpha",
  "alliance-repair": "alpha",
  "empathic-refocusing": "alpha"
};

const SKILL_PHASE_LABELS = {
  alpha: "Alpha",
  beta: "Beta"
};

function loadAccessLevel() {
  try {
    const stored = localStorage.getItem(ACCESS_STORAGE_KEY);
    if (stored) return stored;
  } catch (err) {
    // ignore storage errors
  }
  return "free";
}

function saveAccessLevel(level) {
  state.accessLevel = level;
  try {
    localStorage.setItem(ACCESS_STORAGE_KEY, level);
  } catch (err) {
    // ignore storage errors
  }
  updateLockedBanner();
}

function hasProAccess() {
  return state.accessLevel === "pro" || state.accessLevel === "all";
}

function isCaseLocked(caseItem) {
  if (!caseItem) return false;
  return caseItem.tier === "pro" && !hasProAccess();
}

function getLanguageDefinition(languageId) {
  const fallbackId = LANGUAGE_METADATA[languageId] ? languageId : "en";
  return {
    ...LANGUAGE_METADATA[fallbackId],
    ui: getUIStrings(fallbackId),
    overrides: LANGUAGE_OVERRIDES[fallbackId] ?? {}
  };
}

function getUIStrings(languageId = state.languageId ?? "en") {
  const base = LANGUAGE_UI.en;
  const target = LANGUAGE_UI[languageId] ?? {};
  return {
    ...base,
    ...target
  };
}

function getOverrides(languageId) {
  return LANGUAGE_OVERRIDES[languageId] ?? {};
}

function getStatementTranslations(languageId) {
  return STATEMENT_TRANSLATIONS[languageId] ?? {};
}

function getGlossaryEntries(languageId) {
  const target = GLOSSARY[languageId];
  const fallback = Array.isArray(target) && target.length > 0 ? target : GLOSSARY.en;
  return Array.isArray(fallback) ? fallback : [];
}

function resolveGlossaryEntry(languageId, entryId) {
  if (!entryId) return null;
  const entries = getGlossaryEntries(languageId);
  const fallbackEntries = getGlossaryEntries("en");
  return entries.find((entry) => entry.id === entryId) ?? fallbackEntries.find((entry) => entry.id === entryId) ?? null;
}

function buildGlossaryIndex(languageId) {
  const entries = getGlossaryEntries(languageId);
  const fallbackEntries = getGlossaryEntries("en");
  const source = entries.length ? entries : fallbackEntries;

  return source
    .map((entry) => {
      const langTerms = entry.terms?.[languageId] ?? entry.terms?.en ?? [];
      return langTerms
        .filter(Boolean)
        .map((term) => ({
          entryId: entry.id,
          term
        }));
    })
    .flat()
    .sort((a, b) => b.term.length - a.term.length);
}

const WORD_BOUNDARY_REGEX = /[a-zæøå0-9]/i;

function createGlossaryFragment(text, languageId) {
  const fragment = document.createDocumentFragment();
  const content = typeof text === "string" ? text : "";
  if (!content) {
    fragment.appendChild(document.createTextNode(""));
    return fragment;
  }

  const index = buildGlossaryIndex(languageId);
  if (!index.length) {
    fragment.appendChild(document.createTextNode(content));
    return fragment;
  }

  const lowerContent = content.toLowerCase();
  const matches = [];

  const isBoundary = (start, length) => {
    const before = lowerContent[start - 1];
    const after = lowerContent[start + length];
    const validBefore = !before || !WORD_BOUNDARY_REGEX.test(before);
    const validAfter = !after || !WORD_BOUNDARY_REGEX.test(after);
    return validBefore && validAfter;
  };

  index.forEach(({ term, entryId }) => {
    const value = term?.trim();
    if (!value) return;
    const needle = value.toLowerCase();
    let searchStart = 0;
    while (searchStart < lowerContent.length) {
      const hit = lowerContent.indexOf(needle, searchStart);
      if (hit === -1) break;
      if (isBoundary(hit, needle.length)) {
        matches.push({ start: hit, end: hit + needle.length, entryId });
      }
      searchStart = hit + needle.length;
    }
  });

  if (!matches.length) {
    fragment.appendChild(document.createTextNode(content));
    return fragment;
  }

  matches.sort((a, b) => a.start - b.start || b.end - a.end);
  const filtered = [];
  let lastEnd = 0;
  matches.forEach((match) => {
    if (match.start < lastEnd) return;
    filtered.push(match);
    lastEnd = match.end;
  });

  let cursor = 0;
  filtered.forEach((match) => {
    if (match.start > cursor) {
      fragment.appendChild(document.createTextNode(content.slice(cursor, match.start)));
    }
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "glossary-chip";
    chip.dataset.termId = match.entryId;
    chip.textContent = content.slice(match.start, match.end);
    fragment.appendChild(chip);
    cursor = match.end;
  });

  if (cursor < content.length) {
    fragment.appendChild(document.createTextNode(content.slice(cursor)));
  }

  return fragment;
}

function renderGlossaryBlock(container, text, languageId) {
  if (!container) return;
  container.textContent = "";
  const content = typeof text === "string" ? text : "";
  if (!content) return;
  container.appendChild(createGlossaryFragment(content, languageId));
}

function renderGlossaryParagraphs(container, text, languageId) {
  if (!container) return;
  container.textContent = "";
  const content = typeof text === "string" ? text : "";
  if (!content) return;
  const paragraphs = content.split(/\n\s*\n/);
  paragraphs.forEach((para) => {
    const trimmed = para.trim();
    if (!trimmed) return;
    const p = document.createElement("p");
    p.appendChild(createGlossaryFragment(trimmed, languageId));
    container.appendChild(p);
  });
}
function localizeSkill(languageId, skillId) {
  const baseSkill = BASE_PRACTICE[skillId];
  if (!baseSkill) return null;

  const overrides = getOverrides(languageId)[skillId] ?? {};
  const cases = CASE_ORDER[skillId].map((caseId) => {
    const baseCase = baseSkill.cases[caseId];
    if (!baseCase) return null;
    const caseOverride = overrides.cases?.[caseId] ?? {};
    return {
      id: caseId,
      label: caseOverride.label ?? baseCase.label,
      difficulty: caseOverride.difficulty ?? baseCase.difficulty ?? "",
      tier: caseOverride.tier ?? baseCase.tier ?? "free",
      difficultyLabel:
        caseOverride.difficultyLabel ?? baseCase.difficultyLabel ?? baseCase.difficulty ?? "",
      teaser: caseOverride.teaser ?? baseCase.teaser,
      history: caseOverride.history ?? baseCase.history,
      schema: caseOverride.schema ?? baseCase.schema,
      style: caseOverride.style ?? baseCase.style,
      voice: caseOverride.voice ?? baseCase.voice,
      dossier: caseOverride.dossier ?? baseCase.dossier ?? "",
      statements: localizeStatements(languageId, baseCase.statements)
    };
  }).filter(Boolean);

  return {
    id: skillId,
    name: overrides.name ?? baseSkill.name,
    description: overrides.description ?? baseSkill.description,
    summary: overrides.summary ?? baseSkill.summary,
    marker: overrides.marker ?? baseSkill.marker,
    aim: overrides.aim ?? baseSkill.aim,
    cases
  };
}

function localizeStatements(languageId, baseStatements) {
  const translationMap = getStatementTranslations(languageId);

  return (baseStatements ?? []).map((entry) => {
    const t = translationMap[entry.id];
    if (typeof t === "string") {
      return { ...entry, text: t };
    }
    if (t && typeof t === "object") {
      return {
        ...entry,
        text: typeof t.text === "string" ? t.text : entry.text,
        suggestion: typeof t.suggestion === "string" ? t.suggestion : entry.suggestion
      };
    }
    return entry;
  });
}

function getCurrentSkill() {
  if (!state.skillId) return null;
  const languageId = state.languageId ?? "en";
  return localizeSkill(languageId, state.skillId);
}

function getCurrentCase() {
  const skill = getCurrentSkill();
  if (!skill || !state.caseId) return null;
  return skill.cases.find((caseItem) => caseItem.id === state.caseId) ?? null;
}

function showSection(sectionKey) {
  Object.entries(sections).forEach(([key, el]) => {
    const shouldShow = key === sectionKey;
    el.classList.toggle("is-hidden", !shouldShow);
    el.hidden = !shouldShow;
  });
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function applyLanguageStrings(languageId) {
  const definition = getLanguageDefinition(languageId);
  const strings = definition.ui;

  document.documentElement.lang = definition.locale ?? "en";
  document.documentElement.dir = definition.direction ?? "ltr";
  document.title = strings.appTitle;

  elements.appTitle.textContent = strings.appTitle;
  elements.appTagline.textContent = strings.tagline;

  elements.languagePanelTitle.textContent = strings.languageHeading;
  elements.languagePanelDescription.textContent = strings.languageDescription;
  elements.languageList.setAttribute("aria-label", strings.languageListAria);

  elements.skillPanelTitle.textContent = strings.skillHeading;
  elements.skillPanelDescription.textContent = strings.skillDescription;
  elements.skillList.setAttribute("aria-label", strings.skillListAria);

  elements.casePanelTitle.textContent = strings.caseHeading;
  elements.casePanelDescription.textContent = strings.caseDescription;
  elements.caseList.setAttribute("aria-label", strings.caseListAria);

  if (elements.caseSkillMarkerLabel) {
    elements.caseSkillMarkerLabel.textContent = strings.skillMarkerLabel ?? "Markers";
  }
  if (elements.caseSkillSummaryLabel) {
    elements.caseSkillSummaryLabel.textContent = strings.skillSummaryLabel ?? "How to Work";
  }
  if (elements.caseSkillAimLabel) {
    elements.caseSkillAimLabel.textContent = strings.skillAimLabel ?? "Aim";
  }
  if (elements.glossaryHint) {
    elements.glossaryHint.textContent = strings.glossaryHint ?? "";
  }
  if (elements.glossaryTitle) {
    elements.glossaryTitle.textContent = strings.glossaryTitle ?? "Key term";
  }
  if (elements.glossaryClose) {
    const closeLabel = strings.glossaryClose ?? "Close definition";
    elements.glossaryClose.setAttribute("aria-label", closeLabel);
    elements.glossaryClose.title = closeLabel;
  }

  elements.caseBriefHeading.textContent =
    strings.roleBriefHeading ?? strings.caseBriefHeading ?? "Role Background";
  elements.caseSchemaLabel.textContent = strings.schemaLabel;
  elements.caseStyleLabel.textContent = strings.styleLabel;
  elements.caseVoiceHeading.textContent = strings.clientVoiceHeading ?? "Client Voice";
  elements.startPracticeButton.textContent = strings.startPractice ?? "Begin Practice";
  elements.viewCaseBriefButton.textContent = strings.viewCaseBrief ?? "View Case Brief";
  elements.startPracticeButton.setAttribute(
    "aria-label",
    strings.startPractice ?? "Begin Practice"
  );
  elements.viewCaseBriefButton.setAttribute(
    "aria-label",
    strings.viewCaseBrief ?? "View Case Brief"
  );

  if (elements.practiceControls) {
    elements.practiceControls.setAttribute(
      "aria-label",
      strings.practiceControlsAria ?? ""
    );
  }
  if (elements.shuffleButton) {
    elements.shuffleButton.innerHTML = `<img src="${SHUFFLE_ICON_SRC}" alt="">`;
    elements.shuffleButton.setAttribute("aria-label", strings.shuffleAria ?? strings.shuffle);
  }

  elements.nextButton.textContent = strings.next;
  elements.nextButton.setAttribute("aria-label", strings.nextAria ?? strings.next);

  if (elements.suggestionToggle) {
    elements.suggestionToggle.textContent = strings.showSuggestion;
    elements.suggestionToggle.setAttribute(
      "aria-label",
      strings.suggestionHiddenLabel ?? strings.showSuggestion
    );
  }

  elements.languageBackButton.textContent = `← ${strings.backToLanguage}`;
  elements.languageBackButton.setAttribute(
    "aria-label",
    strings.backToLanguageAria ?? strings.backToLanguage
  );

  elements.skillsBackButton.textContent = `← ${strings.backToSkills}`;
  elements.skillsBackButton.setAttribute(
    "aria-label",
    strings.backToSkillsAria ?? strings.backToSkills
  );

  elements.casesBackButton.textContent = `← ${strings.backToCases}`;
  elements.casesBackButton.setAttribute(
    "aria-label",
    strings.backToCasesAria ?? strings.backToCases
  );

  elements.footerNote.textContent = strings.footerNote;
  if (elements.statementPanel) {
    elements.statementPanel.setAttribute("aria-label", strings.statementPanelAria ?? "");
  }

  if (elements.lockedBanner) {
    elements.lockedBanner.textContent = strings.lockedBanner ?? "";
  }
  if (elements.paywallHeading) {
    elements.paywallHeading.textContent = strings.paywallHeading ?? "";
  }
  if (elements.paywallMessage) {
    elements.paywallMessage.textContent = strings.paywallMessage ?? "";
  }
  if (elements.unlockSubmit) {
    elements.unlockSubmit.textContent = strings.unlockSubmit ?? "Unlock";
  }
  if (elements.unlockCodeInput) {
    elements.unlockCodeInput.setAttribute("placeholder", strings.unlockPlaceholder ?? "Access code");
  }

  if (elements.feedbackTitle) {
    elements.feedbackTitle.textContent = strings.feedbackTitle ?? "Flag this item";
  }
  if (elements.feedbackReasonLabel) {
    elements.feedbackReasonLabel.textContent = strings.feedbackReasonLabel ?? "What's wrong?";
  }
  if (elements.feedbackDetailsLabel) {
    elements.feedbackDetailsLabel.textContent = strings.feedbackDetailsLabel ?? "Add details";
  }
  if (elements.feedbackSubmit) {
    elements.feedbackSubmit.textContent = strings.feedbackSubmit ?? "Send feedback";
  }
  updateFeedbackVisibility();

  updateCaseSkillContext(getCurrentSkill());
  updateSuggestionUI();
  updateLockedBanner();
}

function renderLanguageOptions() {
  elements.languageList.innerHTML = "";
  languageButtonMap.clear();

  LANGUAGE_ORDER.forEach((languageId) => {
    const metadata = LANGUAGE_METADATA[languageId];
    if (!metadata) return;
    const button = document.createElement("button");
    button.className = "card-button";
    button.dataset.languageId = languageId;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", "false");
    button.innerHTML = `
      <span class="card-title">${metadata.label}</span>
      <span class="card-body">${metadata.locale}</span>
    `;
    button.addEventListener("click", () => handleLanguageSelection(languageId));
    elements.languageList.appendChild(button);
    languageButtonMap.set(languageId, button);
  });
  highlightLanguageSelection(state.languageId);
}

function highlightLanguageSelection(languageId) {
  languageButtonMap.forEach((button, id) => {
    button.setAttribute("aria-selected", id === languageId ? "true" : "false");
  });
}

function renderSkillOptions() {
  elements.skillList.innerHTML = "";
  skillButtonMap.clear();
  const languageId = state.languageId ?? "en";

  SKILL_ORDER.forEach((skillId) => {
    const skill = localizeSkill(languageId, skillId);
    if (!skill) return;
    const button = document.createElement("button");
    button.className = "card-button";
    button.dataset.skillId = skillId;
    button.setAttribute("role", "option");
    const isSelected = state.skillId === skillId;
    button.setAttribute("aria-selected", isSelected ? "true" : "false");
    const phase = SKILL_PHASE_MAP[skillId];
    const phaseLabel = phase ? SKILL_PHASE_LABELS[phase] ?? phase : "";
    const phaseTag = phaseLabel
      ? `<span class="skill-tag skill-tag--${phase}" aria-label="${phaseLabel} exercise">${phaseLabel}</span>`
      : "";
    button.innerHTML = `
      <div class="card-header">
        <span class="card-title">${skill.name}</span>
        ${phaseTag}
      </div>
      <span class="card-body">${skill.description}</span>
    `;
    button.addEventListener("click", () => handleSkillSelection(skillId));
    elements.skillList.appendChild(button);
    skillButtonMap.set(skillId, button);
  });
}

function highlightSkillSelection(skillId) {
  skillButtonMap.forEach((button, id) => {
    button.setAttribute("aria-selected", id === skillId ? "true" : "false");
  });
}

function renderCaseOptions() {
  elements.caseList.innerHTML = "";
  caseButtonMap.clear();

  const skill = getCurrentSkill();
  updateCaseSkillContext(skill);
  if (!skill) return;

  skill.cases.forEach((caseItem) => {
    const button = document.createElement("button");
    button.className = "card-button";
    button.dataset.caseId = caseItem.id;
    button.setAttribute("role", "option");
    const isSelected = state.caseId === caseItem.id;
    button.setAttribute("aria-selected", isSelected ? "true" : "false");
    const locked = isCaseLocked(caseItem);
    if (locked) {
      button.classList.add("is-locked");
    }
    const lockTag = locked ? `<span class="lock-tag" aria-label="${getUIStrings().lockedLabel}">🔒</span>` : "";
    button.innerHTML = `
      <span class="card-title">${caseItem.label} ${lockTag}</span>
      <span class="card-body">${caseItem.teaser}</span>
    `;
    button.addEventListener("click", () => {
      if (locked) {
        showPaywall(caseItem);
        return;
      }
      handleCaseSelection(caseItem.id);
    });
    elements.caseList.appendChild(button);
    caseButtonMap.set(caseItem.id, button);
  });
}

function highlightCaseSelection(caseId) {
  caseButtonMap.forEach((button, id) => {
    button.setAttribute("aria-selected", id === caseId ? "true" : "false");
  });
}

function renderSkillContextExpansion(hasSkill) {
  const expanded = hasSkill && state.skillContextExpanded;
  if (elements.caseSkillBody) {
    elements.caseSkillBody.hidden = !expanded;
    elements.caseSkillBody.classList.toggle("is-hidden", !expanded);
  }
  if (elements.caseSkillToggle) {
    const strings = getUIStrings();
    const showText = strings.showSkillInstructions ?? "Show instructions";
    const hideText = strings.hideSkillInstructions ?? "Hide instructions";
    elements.caseSkillToggle.textContent = expanded ? hideText : showText;
    elements.caseSkillToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    elements.caseSkillToggle.disabled = !hasSkill;
  }
  if (!expanded) {
    hideGlossaryCard();
  }
}

function setGlossaryVisibility(visible) {
  if (!elements.glossaryPanel) return;
  elements.glossaryPanel.hidden = !visible;
  elements.glossaryPanel.classList.toggle("is-hidden", !visible);
  if (!visible) {
    hideGlossaryCard();
  }
}

function setActiveGlossaryChip(target) {
  if (activeGlossaryChip) {
    activeGlossaryChip.classList.remove("is-active");
  }
  activeGlossaryChip = target ?? null;
  if (activeGlossaryChip) {
    activeGlossaryChip.classList.add("is-active");
  }
}

function hideGlossaryCard() {
  state.activeGlossaryTermId = null;
  setActiveGlossaryChip(null);
  if (elements.glossaryCard) {
    elements.glossaryCard.hidden = true;
    elements.glossaryCard.classList.add("is-hidden");
    elements.glossaryCard.classList.remove("is-floating");
    elements.glossaryCard.style.left = "";
    elements.glossaryCard.style.top = "";
    elements.glossaryCard.style.visibility = "";
  }
  if (elements.glossaryTerm) {
    elements.glossaryTerm.textContent = "";
  }
  if (elements.glossaryDefinition) {
    elements.glossaryDefinition.textContent = "";
  }
}

function positionGlossaryCard(chip) {
  if (!elements.glossaryCard || !chip) return;
  const card = elements.glossaryCard;
  const rect = chip.getBoundingClientRect();
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  card.classList.add("is-floating");
  card.style.position = "fixed";
  card.style.maxWidth = "min(360px, calc(100vw - 28px))";
  card.style.visibility = "hidden";

  // Force layout to get size.
  const cardWidth = card.offsetWidth || 280;
  const cardHeight = card.offsetHeight || 140;

  const horizontalCenter = rect.left + rect.width / 2;
  let left = horizontalCenter - cardWidth / 2;
  const margin = 12;
  if (left < margin) left = margin;
  if (left + cardWidth + margin > viewportWidth) {
    left = viewportWidth - cardWidth - margin;
  }

  const preferredTop = rect.bottom + 8;
  let top = preferredTop;
  if (preferredTop + cardHeight + margin > viewportHeight) {
    top = rect.top - cardHeight - 8;
    if (top < margin) top = margin;
  }

  card.style.left = `${left}px`;
  card.style.top = `${top}px`;
  card.style.visibility = "visible";
}

function showGlossaryDefinition(termId, chip) {
  if (!termId || !elements.glossaryCard) return;
  const languageId = state.languageId ?? "en";
  const entry = resolveGlossaryEntry(languageId, termId);
  if (!entry) return;
  const strings = getUIStrings(languageId);
  const label =
    entry.label?.[languageId] ??
    entry.label?.en ??
    chip?.textContent ??
    "";
  const definition = entry.definition?.[languageId] ?? entry.definition?.en ?? "";

  if (elements.glossaryTitle) {
    elements.glossaryTitle.textContent = strings.glossaryTitle ?? "Key term";
  }
  if (elements.glossaryTerm) {
    elements.glossaryTerm.textContent = label;
  }
  if (elements.glossaryDefinition) {
    elements.glossaryDefinition.textContent = definition;
  }

  const card = elements.glossaryCard;
  card.hidden = false;
  card.classList.remove("is-hidden");
  state.activeGlossaryTermId = termId;
  setActiveGlossaryChip(chip ?? null);
  requestAnimationFrame(() => positionGlossaryCard(chip));
}

function refreshActiveGlossaryDefinition() {
  if (!state.activeGlossaryTermId) {
    hideGlossaryCard();
    return;
  }
  const selector = `.glossary-chip[data-term-id="${state.activeGlossaryTermId}"]`;
  const chip = elements.caseSkillBody?.querySelector(selector) ?? null;
  showGlossaryDefinition(state.activeGlossaryTermId, chip);
}

function updateCaseSkillContext(skill) {
  if (
    !elements.caseSkillContext ||
    !elements.caseSkillName ||
    !elements.caseSkillMarker ||
    !elements.caseSkillSummary ||
    !elements.caseSkillAim
  ) {
    return;
  }

  const languageId = state.languageId ?? "en";
  hideGlossaryCard();

  if (!skill) {
    elements.caseSkillContext.hidden = true;
    elements.caseSkillContext.classList.add("is-hidden");
    elements.caseSkillName.textContent = "";
    elements.caseSkillMarker.textContent = "";
    elements.caseSkillSummary.textContent = "";
    elements.caseSkillAim.textContent = "";
    setGlossaryVisibility(false);
    renderSkillContextExpansion(false);
    return;
  }

  elements.caseSkillContext.hidden = false;
  elements.caseSkillContext.classList.remove("is-hidden");
  elements.caseSkillName.textContent = skill.name ?? "";
  renderGlossaryBlock(elements.caseSkillMarker, skill.marker ?? "", languageId);
  const summaryText = skill.summary ?? skill.description ?? "";
  renderGlossaryParagraphs(elements.caseSkillSummary, summaryText, languageId);
  renderGlossaryBlock(elements.caseSkillAim, skill.aim ?? "", languageId);
  setGlossaryVisibility(true);
  renderSkillContextExpansion(true);
}

function updateLockedBanner() {
  if (!elements.lockedBanner) return;
  const strings = getUIStrings();
  const hidden = hasProAccess();
  elements.lockedBanner.hidden = hidden;
  elements.lockedBanner.classList.toggle("is-hidden", hidden);
  elements.lockedBanner.textContent = strings.lockedBanner ?? "";
}

function showPaywall(caseItem) {
  if (!elements.paywallOverlay || !elements.paywallMessage) return;
  const strings = getUIStrings();
  const caseLabel = caseItem?.label ? `: ${caseItem.label}` : "";
  elements.paywallMessage.textContent = `${strings.paywallMessage ?? ""}${caseLabel}`;
  elements.paywallOverlay.classList.remove("is-hidden");
  elements.paywallOverlay.hidden = false;
  if (elements.unlockStatus) {
    elements.unlockStatus.textContent = "";
  }
  if (elements.unlockCodeInput) {
    elements.unlockCodeInput.focus();
  }
}

function hidePaywall() {
  if (!elements.paywallOverlay) return;
  elements.paywallOverlay.classList.add("is-hidden");
  elements.paywallOverlay.hidden = true;
}

function ensureOrderForCase() {
  const caseData = getCurrentCase();
  if (!caseData) {
    state.order = [];
    return;
  }

  const statements = caseData.statements ?? [];
  const existing = state.order;
  if (!Array.isArray(existing) || existing.length !== statements.length) {
    state.order = shuffleArray(statements);
    state.index = 0;
  }
}

function showCaseBrief() {
  state.view = "brief";
  if (elements.caseBriefScreen) {
    elements.caseBriefScreen.classList.remove("is-hidden");
    elements.caseBriefScreen.hidden = false;
  }
  if (elements.statementWorkspace) {
    elements.statementWorkspace.classList.add("is-hidden");
    elements.statementWorkspace.hidden = true;
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function showStatements() {
  const activeCase = getCurrentCase();
  if (!activeCase) return;
  if (isCaseLocked(activeCase)) {
    showPaywall(activeCase);
    return;
  }
  state.view = "statements";
  if (elements.caseBriefScreen) {
    elements.caseBriefScreen.classList.add("is-hidden");
    elements.caseBriefScreen.hidden = true;
  }
  if (elements.statementWorkspace) {
    elements.statementWorkspace.classList.remove("is-hidden");
    elements.statementWorkspace.hidden = false;
  }
  ensureOrderForCase();
  renderActiveStatement();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function hydratePracticeView() {
  const strings = getUIStrings();
  const skill = getCurrentSkill();
  const caseData = getCurrentCase();

  if (!skill || !caseData) {
    elements.practiceSkill.textContent = "";
    elements.caseName.textContent = "";
    if (elements.statementCaseName) {
      elements.statementCaseName.textContent = "";
    }
    elements.caseSchema.textContent = "";
    elements.caseStyle.textContent = "";
    if (elements.caseVoice) {
      elements.caseVoice.textContent = "";
    }
    elements.statementText.textContent = strings.emptyPrompt;
    elements.statementCounter.textContent = "";
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    resetSuggestionVisibility();
    showCaseBrief();
    updateFeedbackAvailability();
    return;
  }

  const locked = isCaseLocked(caseData);
  if (locked) {
    elements.statementText.textContent = strings.lockedPlaceholder ?? strings.emptyPrompt;
    elements.statementCounter.textContent = "";
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    resetSuggestionVisibility();
    showCaseBrief();
    showPaywall(caseData);
    updateFeedbackAvailability();
    return;
  }

  elements.practiceSkill.textContent = skill.name;
  elements.caseName.textContent = caseData.label;
  if (elements.statementCaseName) {
    elements.statementCaseName.textContent = caseData.label;
  }
  elements.caseSchema.textContent = caseData.schema ?? "";
  elements.caseStyle.textContent = caseData.style ?? "";
  if (elements.caseVoice) {
    elements.caseVoice.textContent = (caseData.voice ?? caseData.history ?? "").trim();
  }

  ensureOrderForCase();
  renderActiveStatement();

  if (state.view === "statements") {
    showStatements();
  } else {
    showCaseBrief();
  }
}

function renderActiveStatement() {
  const strings = getUIStrings();
  const statements = getActiveStatements();
  if (!statements.length) {
    state.currentStatement = null;
    elements.statementText.textContent = strings.statementFallback;
    elements.statementCounter.textContent = "";
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    resetSuggestionVisibility();
    updateFeedbackAvailability();
    return;
  }

  const currentEntry = getActiveStatement();
  state.currentStatement = currentEntry;
  elements.statementText.textContent = currentEntry?.text ?? strings.statementFallback;
  elements.statementCounter.textContent = formatCounter(state.index + 1, statements.length);
  if (elements.suggestionText) {
    elements.suggestionText.textContent = currentEntry?.suggestion ?? "";
  }
  resetSuggestionVisibility();
  updateFeedbackAvailability();
}

function formatCounter(current, total) {
  const strings = getUIStrings();
  return (strings.counterPattern ?? "{current} of {total}")
    .replace("{current}", String(current))
    .replace("{total}", String(total));
}

function getActiveStatements() {
  return Array.isArray(state.order) ? state.order : [];
}

function getActiveStatement() {
  const statements = getActiveStatements();
  return statements[state.index] ?? null;
}

function updateSuggestionUI() {
  if (!elements.suggestionPanel || !elements.suggestionToggle || !elements.suggestionText) return;
  const strings = getUIStrings();
  const suggestion = (elements.suggestionText.textContent ?? "").trim();
  const hasSuggestion = suggestion.length > 0;

  elements.suggestionPanel.hidden = !hasSuggestion;
  elements.suggestionToggle.disabled = !hasSuggestion;

  if (!hasSuggestion) {
    elements.suggestionToggle.textContent = strings.showSuggestion;
    elements.suggestionToggle.setAttribute(
      "aria-label",
      strings.suggestionHiddenLabel ?? strings.showSuggestion
    );
    elements.suggestionText.hidden = true;
    return;
  }

  const visible = state.suggestionVisible;
  elements.suggestionToggle.textContent = visible ? strings.hideSuggestion : strings.showSuggestion;
  elements.suggestionToggle.setAttribute(
    "aria-label",
    visible ? strings.suggestionShownLabel ?? strings.hideSuggestion : strings.suggestionHiddenLabel ?? strings.showSuggestion
  );
  elements.suggestionText.hidden = !visible;
}

function resetSuggestionVisibility() {
  state.suggestionVisible = false;
  updateSuggestionUI();
}

function setFeedbackStatus(message) {
  if (!elements.feedbackStatus) return;
  elements.feedbackStatus.textContent = message ?? "";
}

function updateFeedbackVisibility() {
  if (!elements.feedbackForm || !elements.feedbackToggle) return;
  const strings = getUIStrings();
  const collapsed = state.feedbackCollapsed;
  elements.feedbackForm.classList.toggle("is-hidden", collapsed);
  elements.feedbackToggle.textContent = collapsed
    ? strings.feedbackToggleShow ?? "Show form"
    : strings.feedbackToggleHide ?? "Hide form";
}

function updateFeedbackAvailability() {
  if (!elements.feedbackForm || !elements.feedbackSubmit) return;
  const strings = getUIStrings();
  const hasStatement = Boolean(state.currentStatement && state.caseId && state.skillId);
  const configured = isSupabaseReady();
  elements.feedbackSubmit.disabled = !hasStatement || !configured || state.unlocking;
  if (!configured) {
    setFeedbackStatus(strings.feedbackConfigMissing ?? "");
  } else if (!hasStatement) {
    setFeedbackStatus(strings.feedbackUnavailable ?? "");
  } else {
    setFeedbackStatus("");
  }
}

function shuffleArray(source) {
  const array = [...source];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleCurrentStatements() {
  const caseData = getCurrentCase();
  if (!caseData) return;
  const statements = caseData.statements ?? [];
  if (!statements.length) return;
  state.order = shuffleArray(statements);
  state.index = 0;
  renderActiveStatement();
}

function showNextStatement() {
  const statements = getActiveStatements();
  if (!statements.length) return;
  state.index = (state.index + 1) % statements.length;
  renderActiveStatement();
}

function showPreviousStatement() {
  const statements = getActiveStatements();
  if (!statements.length) return;
  state.index = (state.index - 1 + statements.length) % statements.length;
  renderActiveStatement();
}

async function handleFeedbackSubmit(event) {
  event.preventDefault();
  const strings = getUIStrings();
  if (!state.currentStatement || !state.caseId || !state.skillId) {
    setFeedbackStatus(strings.feedbackUnavailable ?? "");
    return;
  }
  if (!isSupabaseReady()) {
    setFeedbackStatus(strings.feedbackConfigMissing ?? "");
    return;
  }
  const reason = elements.feedbackReason?.value ?? "";
  const details = elements.feedbackDetails?.value ?? "";
  const payload = {
    statement_id: state.currentStatement.id,
    statement_text: state.currentStatement.text ?? "",
    suggestion_text: state.currentStatement.suggestion ?? "",
    skill_id: state.skillId,
    case_id: state.caseId,
    language_id: state.languageId ?? "en",
    order_index: state.index,
    reason,
    details,
    user_agent: navigator.userAgent ?? "",
    created_at: new Date().toISOString()
  };

  if (elements.feedbackSubmit) {
    elements.feedbackSubmit.disabled = true;
  }
  setFeedbackStatus(strings.feedbackSending ?? "");
  try {
    await submitFeedback(payload);
    setFeedbackStatus(strings.feedbackSuccess ?? "");
    if (elements.feedbackForm) {
      elements.feedbackForm.reset();
    }
  } catch (err) {
    const msg = err?.message === "Missing Supabase configuration"
      ? strings.feedbackConfigMissing ?? err.message
      : strings.feedbackError ?? err.message ?? "";
    setFeedbackStatus(msg);
  } finally {
    if (elements.feedbackSubmit) {
      elements.feedbackSubmit.disabled = false;
    }
  }
}

async function handleUnlockSubmit(event) {
  event.preventDefault();
  if (state.unlocking) return;
  const strings = getUIStrings();
  if (!isSupabaseReady()) {
    if (elements.unlockStatus) {
      elements.unlockStatus.textContent = strings.unlockConfigMissing ?? "";
    }
    return;
  }
  const code = (elements.unlockCodeInput?.value ?? "").trim();
  if (!code) {
    if (elements.unlockStatus) {
      elements.unlockStatus.textContent = strings.unlockMissing ?? "";
    }
    return;
  }
  state.unlocking = true;
  if (elements.unlockStatus) {
    elements.unlockStatus.textContent = strings.unlockWorking ?? "";
  }
  try {
    const result = await redeemAccessCode(code);
    saveAccessLevel(result.accessLevel ?? "pro");
    if (elements.unlockStatus) {
      elements.unlockStatus.textContent = strings.unlockSuccess ?? "";
    }
    hidePaywall();
    renderCaseOptions();
    hydratePracticeView();
  } catch (err) {
    if (elements.unlockStatus) {
      const msg = err?.message === "invalid_code"
        ? strings.unlockInvalid ?? ""
        : strings.unlockError ?? err.message ?? "";
      elements.unlockStatus.textContent = msg;
    }
  } finally {
    state.unlocking = false;
    updateFeedbackAvailability();
  }
}

function handleLanguageSelection(languageId) {
  state.languageId = languageId;
  state.skillId = null;
  state.caseId = null;
  state.order = [];
  state.index = 0;
  state.view = "brief";
  state.currentStatement = null;
  state.skillContextExpanded = false;

  applyLanguageStrings(languageId);
  highlightLanguageSelection(languageId);
  renderSkillOptions();
  updateCaseSkillContext(null);
  elements.statementText.textContent = getUIStrings(languageId).emptyPrompt;
  elements.statementCounter.textContent = "";
  if (elements.suggestionText) {
    elements.suggestionText.textContent = "";
  }
  resetSuggestionVisibility();
  updateFeedbackAvailability();
  showSection("skill");
}

function handleSkillSelection(skillId) {
  state.skillId = skillId;
  state.caseId = null;
  state.order = [];
  state.index = 0;
  state.view = "brief";
  state.currentStatement = null;
  state.skillContextExpanded = false;

  highlightSkillSelection(skillId);
  renderCaseOptions();
  elements.statementText.textContent = getUIStrings().emptyPrompt;
  elements.statementCounter.textContent = "";
  if (elements.suggestionText) {
    elements.suggestionText.textContent = "";
  }
  resetSuggestionVisibility();
  updateFeedbackAvailability();
  showSection("case");
}

function handleCaseSelection(caseId) {
  const skill = getCurrentSkill();
  const targetCase = skill?.cases.find((caseItem) => caseItem.id === caseId);
  if (isCaseLocked(targetCase)) {
    showPaywall(targetCase);
    return;
  }

  state.caseId = caseId;
  state.order = [];
  state.index = 0;
  state.view = "brief";
  state.currentStatement = null;

  highlightCaseSelection(caseId);
  hydratePracticeView();
  showSection("practice");
}

function handleSkillContextToggle() {
  if (!getCurrentSkill()) return;
  state.skillContextExpanded = !state.skillContextExpanded;
  renderSkillContextExpansion(true);
}

function handleBackNavigation(targetKey) {
  if (targetKey === "language") {
    state.skillId = null;
    state.caseId = null;
    state.order = [];
    state.index = 0;
    state.view = "brief";
    state.currentStatement = null;
    elements.statementText.textContent = getUIStrings().emptyPrompt;
    elements.statementCounter.textContent = "";
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    resetSuggestionVisibility();
    highlightSkillSelection(null);
    highlightCaseSelection(null);
    updateCaseSkillContext(null);
    updateFeedbackAvailability();
    showSection("language");
    return;
  }

  if (targetKey === "skill") {
    state.caseId = null;
    state.order = [];
    state.index = 0;
    state.currentStatement = null;
    highlightCaseSelection(null);
    renderCaseOptions();
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    resetSuggestionVisibility();
    state.view = "brief";
    updateCaseSkillContext(getCurrentSkill());
    updateFeedbackAvailability();
    showSection("skill");
    return;
  }

  if (targetKey === "case") {
    state.order = [];
    state.index = 0;
    state.currentStatement = null;
    highlightCaseSelection(state.caseId);
    renderCaseOptions();
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    resetSuggestionVisibility();
    state.view = "brief";
    updateCaseSkillContext(getCurrentSkill());
    updateFeedbackAvailability();
    showSection("case");
  }
}

function registerEventListeners() {
  if (elements.startPracticeButton) {
    elements.startPracticeButton.addEventListener("click", showStatements);
  }

  if (elements.viewCaseBriefButton) {
    elements.viewCaseBriefButton.addEventListener("click", showCaseBrief);
  }

  if (elements.nextButton) {
    elements.nextButton.addEventListener("click", showNextStatement);
  }
  if (elements.shuffleButton) {
    elements.shuffleButton.addEventListener("click", shuffleCurrentStatements);
  }

  if (elements.languageBackButton) {
    elements.languageBackButton.addEventListener("click", () => handleBackNavigation("language"));
  }
  if (elements.skillsBackButton) {
    elements.skillsBackButton.addEventListener("click", () => handleBackNavigation("skill"));
  }
  if (elements.casesBackButton) {
    elements.casesBackButton.addEventListener("click", () => handleBackNavigation("case"));
  }

  if (elements.caseSkillToggle) {
    elements.caseSkillToggle.addEventListener("click", handleSkillContextToggle);
  }

  if (elements.caseSkillBody) {
    elements.caseSkillBody.addEventListener("click", (event) => {
      const chip = event.target.closest(".glossary-chip");
      if (!chip) return;
      showGlossaryDefinition(chip.dataset.termId, chip);
    });
  }

  if (elements.glossaryClose) {
    elements.glossaryClose.addEventListener("click", hideGlossaryCard);
  }

  window.addEventListener("resize", refreshActiveGlossaryDefinition, { passive: true });
  window.addEventListener("scroll", refreshActiveGlossaryDefinition, { passive: true });

  if (elements.statementPanel) {
    let touchStartX = null;
    const swipeThreshold = 45;

    elements.statementPanel.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0]?.clientX ?? null;
    });

    elements.statementPanel.addEventListener("touchend", (event) => {
      if (touchStartX === null) return;
      const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX;
      if (Math.abs(deltaX) < swipeThreshold) {
        touchStartX = null;
        return;
      }
      if (deltaX < 0) {
        showNextStatement();
      } else {
        showPreviousStatement();
      }
      touchStartX = null;
    });
  }

  if (elements.suggestionToggle) {
    elements.suggestionToggle.addEventListener("click", () => {
      if (elements.suggestionToggle.disabled) return;
      state.suggestionVisible = !state.suggestionVisible;
      updateSuggestionUI();
    });
  }

  if (elements.feedbackForm) {
    elements.feedbackForm.addEventListener("submit", handleFeedbackSubmit);
  }
  if (elements.feedbackToggle) {
    elements.feedbackToggle.addEventListener("click", () => {
      state.feedbackCollapsed = !state.feedbackCollapsed;
      updateFeedbackVisibility();
    });
  }

  if (elements.unlockForm) {
    elements.unlockForm.addEventListener("submit", handleUnlockSubmit);
  }

  if (elements.closePaywallButton) {
    elements.closePaywallButton.addEventListener("click", hidePaywall);
  }
}

function initialize() {
  state.accessLevel = loadAccessLevel();
  applyLanguageStrings("en");
  renderLanguageOptions();
  elements.statementText.textContent = getUIStrings("en").emptyPrompt;
  elements.statementCounter.textContent = "";
  resetSuggestionVisibility();
  updateLockedBanner();
  updateFeedbackAvailability();
  registerEventListeners();
  showSection("language");
}

initialize();
