"use strict";

import {
  DIFFICULTIES,
  SKILL_ORDER,
  CASE_ORDER,
  LANGUAGE_ORDER,
  BASE_PRACTICE,
  LANGUAGE_METADATA,
  LANGUAGE_UI,
  LANGUAGE_OVERRIDES,
  STATEMENT_TRANSLATIONS
} from "./practiceData.js";

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
  caseHistory: document.getElementById("case-history"),
  caseSchema: document.getElementById("case-schema"),
  caseStyle: document.getElementById("case-style"),
  caseHistoryLabel: document.getElementById("case-history-label"),
  caseSchemaLabel: document.getElementById("case-schema-label"),
  caseStyleLabel: document.getElementById("case-style-label"),
  statementText: document.getElementById("statement-text"),
  statementCounter: document.getElementById("statement-counter"),
  shuffleButton: document.getElementById("shuffle-order"),
  nextButton: document.getElementById("next-statement"),
  difficultyGroup: document.getElementById("difficulty-group"),
  practiceControls: document.querySelector(".practice-controls"),
  languageBackButton: document.getElementById("back-to-language"),
  skillsBackButton: document.getElementById("back-to-skills"),
  casesBackButton: document.getElementById("back-to-cases"),
  footerNote: document.getElementById("footer-note"),
  statementPanel: document.querySelector(".statement-panel")
};

const difficultyButtons = Array.from(document.querySelectorAll(".chip"));

const state = {
  languageId: null,
  skillId: null,
  caseId: null,
  difficulty: DIFFICULTIES[0],
  order: {},
  index: 0
};

const languageButtonMap = new Map();
const skillButtonMap = new Map();
const caseButtonMap = new Map();

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
    ...target,
    difficultyLabels: {
      ...base.difficultyLabels,
      ...(target.difficultyLabels ?? {})
    }
  };
}

function getOverrides(languageId) {
  return LANGUAGE_OVERRIDES[languageId] ?? {};
}

function getStatementTranslations(languageId) {
  return STATEMENT_TRANSLATIONS[languageId] ?? {};
}

function localizeSkill(languageId, skillId) {
  const baseSkill = BASE_PRACTICE[skillId];
  if (!baseSkill) return null;

  const overrides = getOverrides(languageId)[skillId] ?? {};
  const cases = CASE_ORDER[skillId].map((caseId) => {
    const baseCase = baseSkill.cases[caseId];
    const caseOverride = overrides.cases?.[caseId] ?? {};
    return {
      id: caseId,
      label: caseOverride.label ?? baseCase.label,
      teaser: caseOverride.teaser ?? baseCase.teaser,
      history: caseOverride.history ?? baseCase.history,
      schema: caseOverride.schema ?? baseCase.schema,
      style: caseOverride.style ?? baseCase.style,
      statements: localizeStatements(languageId, baseCase.statements)
    };
  });

  return {
    id: skillId,
    name: overrides.name ?? baseSkill.name,
    description: overrides.description ?? baseSkill.description,
    cases
  };
}

function localizeStatements(languageId, baseStatements) {
  const translationMap = getStatementTranslations(languageId);

  return DIFFICULTIES.reduce((acc, level) => {
    acc[level] = baseStatements[level].map((entry) => translationMap[entry.id] ?? entry.text);
    return acc;
  }, {});
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

  elements.caseHistoryLabel.textContent = strings.historyLabel;
  elements.caseSchemaLabel.textContent = strings.schemaLabel;
  elements.caseStyleLabel.textContent = strings.styleLabel;

  if (elements.practiceControls) {
    elements.practiceControls.setAttribute(
      "aria-label",
      strings.practiceControlsAria ?? ""
    );
  }
  if (elements.difficultyGroup) {
    elements.difficultyGroup.setAttribute(
      "aria-label",
      strings.difficultyGroupAria ?? ""
    );
  }

  difficultyButtons.forEach((button) => {
    const diff = button.dataset.difficulty;
    button.textContent = strings.difficultyLabels?.[diff] ?? diff;
  });

  elements.shuffleButton.textContent = strings.shuffle;
  elements.shuffleButton.setAttribute("aria-label", strings.shuffleAria ?? strings.shuffle);

  elements.nextButton.textContent = strings.next;
  elements.nextButton.setAttribute("aria-label", strings.nextAria ?? strings.next);

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
    button.innerHTML = `
      <span class="card-title">${skill.name}</span>
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
  if (!skill) return;

  skill.cases.forEach((caseItem) => {
    const button = document.createElement("button");
    button.className = "card-button";
    button.dataset.caseId = caseItem.id;
    button.setAttribute("role", "option");
    const isSelected = state.caseId === caseItem.id;
    button.setAttribute("aria-selected", isSelected ? "true" : "false");
    button.innerHTML = `
      <span class="card-title">${caseItem.label}</span>
      <span class="card-body">${caseItem.teaser}</span>
    `;
    button.addEventListener("click", () => handleCaseSelection(caseItem.id));
    elements.caseList.appendChild(button);
    caseButtonMap.set(caseItem.id, button);
  });
}

function highlightCaseSelection(caseId) {
  caseButtonMap.forEach((button, id) => {
    button.setAttribute("aria-selected", id === caseId ? "true" : "false");
  });
}

function ensureOrderForDifficulty(difficulty) {
  const caseData = getCurrentCase();
  if (!caseData) {
    state.order[difficulty] = [];
    return;
  }

  const statements = caseData.statements[difficulty] ?? [];
  const existing = state.order[difficulty];
  if (!Array.isArray(existing) || existing.length !== statements.length) {
    state.order[difficulty] = shuffleArray(statements);
    state.index = 0;
  }
}

function hydratePracticeView() {
  const strings = getUIStrings();
  const skill = getCurrentSkill();
  const caseData = getCurrentCase();

  if (!skill || !caseData) {
    elements.practiceSkill.textContent = "";
    elements.caseName.textContent = "";
    elements.caseHistory.textContent = "";
    elements.caseSchema.textContent = "";
    elements.caseStyle.textContent = "";
    elements.statementText.textContent = strings.emptyPrompt;
    elements.statementCounter.textContent = "";
    return;
  }

  elements.practiceSkill.textContent = skill.name;
  elements.caseName.textContent = caseData.label;
  elements.caseHistory.textContent = caseData.history;
  elements.caseSchema.textContent = caseData.schema;
  elements.caseStyle.textContent = caseData.style;

  ensureOrderForDifficulty(state.difficulty);
  renderActiveStatement();
}

function renderActiveStatement() {
  const strings = getUIStrings();
  const statements = state.order[state.difficulty] ?? [];
  if (!statements.length) {
    elements.statementText.textContent = strings.statementFallback;
    elements.statementCounter.textContent = "";
    return;
  }

  const currentText = statements[state.index];
  elements.statementText.textContent = currentText;
  elements.statementCounter.textContent = formatCounter(state.index + 1, statements.length);
}

function formatCounter(current, total) {
  const strings = getUIStrings();
  const difficultyLabel = strings.difficultyLabels?.[state.difficulty] ?? state.difficulty;
  return (strings.counterPattern ?? "{current}/{total}")
    .replace("{current}", String(current))
    .replace("{total}", String(total))
    .replace("{difficulty}", difficultyLabel);
}

function activateDifficulty(difficulty) {
  difficultyButtons.forEach((button) => {
    const isActive = button.dataset.difficulty === difficulty;
    button.classList.toggle("chip-active", isActive);
  });
}

function refreshForDifficultyChange(newDifficulty) {
  if (state.difficulty === newDifficulty) return;
  state.difficulty = newDifficulty;
  activateDifficulty(newDifficulty);
  ensureOrderForDifficulty(newDifficulty);
  state.index = 0;
  renderActiveStatement();
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
  const statements = caseData.statements[state.difficulty] ?? [];
  if (!statements.length) return;
  state.order[state.difficulty] = shuffleArray(statements);
  state.index = 0;
  renderActiveStatement();
}

function showNextStatement() {
  const statements = state.order[state.difficulty] ?? [];
  if (!statements.length) return;
  state.index = (state.index + 1) % statements.length;
  renderActiveStatement();
}

function showPreviousStatement() {
  const statements = state.order[state.difficulty] ?? [];
  if (!statements.length) return;
  state.index = (state.index - 1 + statements.length) % statements.length;
  renderActiveStatement();
}

function handleLanguageSelection(languageId) {
  state.languageId = languageId;
  state.skillId = null;
  state.caseId = null;
  state.order = {};
  state.index = 0;
  state.difficulty = DIFFICULTIES[0];
  activateDifficulty(state.difficulty);

  applyLanguageStrings(languageId);
  highlightLanguageSelection(languageId);
  renderSkillOptions();
  elements.statementText.textContent = getUIStrings(languageId).emptyPrompt;
  elements.statementCounter.textContent = "";
  showSection("skill");
}

function handleSkillSelection(skillId) {
  state.skillId = skillId;
  state.caseId = null;
  state.order = {};
  state.index = 0;
  state.difficulty = DIFFICULTIES[0];
  activateDifficulty(state.difficulty);

  highlightSkillSelection(skillId);
  renderCaseOptions();
  elements.statementText.textContent = getUIStrings().emptyPrompt;
  elements.statementCounter.textContent = "";
  showSection("case");
}

function handleCaseSelection(caseId) {
  state.caseId = caseId;
  state.order = {};
  state.index = 0;
  state.difficulty = DIFFICULTIES[0];
  activateDifficulty(state.difficulty);

  highlightCaseSelection(caseId);
  hydratePracticeView();
  showSection("practice");
}

function handleBackNavigation(targetKey) {
  if (targetKey === "language") {
    state.skillId = null;
    state.caseId = null;
    state.order = {};
    state.index = 0;
    state.difficulty = DIFFICULTIES[0];
    activateDifficulty(state.difficulty);
    elements.statementText.textContent = getUIStrings().emptyPrompt;
    elements.statementCounter.textContent = "";
    highlightSkillSelection(null);
    highlightCaseSelection(null);
    showSection("language");
    return;
  }

  if (targetKey === "skill") {
    state.caseId = null;
    state.order = {};
    state.index = 0;
    highlightCaseSelection(null);
    renderCaseOptions();
    showSection("skill");
    return;
  }

  if (targetKey === "case") {
    state.order = {};
    state.index = 0;
    highlightCaseSelection(state.caseId);
    renderCaseOptions();
    showSection("case");
  }
}

function registerEventListeners() {
  difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const { difficulty } = button.dataset;
      if (!difficulty) return;
      refreshForDifficultyChange(difficulty);
    });
  });

  elements.nextButton.addEventListener("click", showNextStatement);
  elements.shuffleButton.addEventListener("click", shuffleCurrentStatements);

  elements.languageBackButton.addEventListener("click", () => handleBackNavigation("language"));
  elements.skillsBackButton.addEventListener("click", () => handleBackNavigation("skill"));
  elements.casesBackButton.addEventListener("click", () => handleBackNavigation("case"));

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
}

function initialize() {
  applyLanguageStrings("en");
  renderLanguageOptions();
  elements.statementText.textContent = getUIStrings("en").emptyPrompt;
  elements.statementCounter.textContent = "";
  activateDifficulty(state.difficulty);
  registerEventListeners();
  showSection("language");
}

initialize();
