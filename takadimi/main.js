import {
  Beam,
  Dot,
  Formatter,
  Fraction,
  Renderer,
  RendererBackends,
  Stave,
  StaveNote,
  StaveTie,
  Voice,
} from "vexflow";
import {
  buildSegmentsFromBar,
  collectNotesFrom,
  dottedMap,
  formatNoteLength,
  splitSegmentsToTokens,
} from "./notation.js";

const TOTAL_STEPS = 32;
const BEATS = 4;
const STEPS_PER_BEAT = TOTAL_STEPS / BEATS;

const syllables = {
  1: ["ta"],
  2: ["ta", "di"],
  4: ["ta", "ka", "di", "mi"],
  // Adjust this if you prefer a different 32nd-note syllable scheme.
  8: ["ta", "ka", "di", "mi", "ta", "ka", "di", "mi"],
};
const beatPositionSyllables = ["ta", "ka", "di", "mi"];

const vexDurationMap = {
  1: "32",
  2: "16",
  3: "16",
  4: "8",
  6: "8",
  8: "q",
  12: "q",
  16: "h",
  24: "h",
  32: "w",
};

const STORAGE_KEY = "takadimi-song-v1";

const grid = document.getElementById("rhythmGrid");
const outputBeats = document.getElementById("outputBeats");
const noteBeats = document.getElementById("noteBeats");
const sheetBeats = document.getElementById("sheetBeats");
const songTrack = document.getElementById("songTrack");
const songCount = document.getElementById("songCount");
const editorStatus = document.getElementById("editorStatus");
const clearBtn = document.getElementById("clearBtn");
const addBarBtn = document.getElementById("addBarBtn");
const updateBarBtn = document.getElementById("updateBarBtn");
const duplicateBarBtn = document.getElementById("duplicateBarBtn");
const deleteBarBtn = document.getElementById("deleteBarBtn");
const moveLeftBtn = document.getElementById("moveLeftBtn");
const moveRightBtn = document.getElementById("moveRightBtn");
const saveSongBtn = document.getElementById("saveSongBtn");
const loadSongBtn = document.getElementById("loadSongBtn");
const exportSongBtn = document.getElementById("exportSongBtn");
const importSongBtn = document.getElementById("importSongBtn");
const importSongInput = document.getElementById("importSongInput");
const clearSongBtn = document.getElementById("clearSongBtn");
const playBtn = document.getElementById("playBtn");
const modeBarBtn = document.getElementById("modeBarBtn");
const modeSongBtn = document.getElementById("modeSongBtn");
const tempoInput = document.getElementById("tempoInput");
const metroVolume = document.getElementById("metroVolume");

const cells = [];
const active = Array(TOTAL_STEPS).fill(false);
const tied = Array(TOTAL_STEPS).fill(false);
const songBars = [];
let trackStepNodes = [];
let selectedBarIndex = null;
let editorDirty = false;

let lastClickedIndex = null;
let isDragging = false;
let dragStart = null;
let dragCurrent = null;
let dragMoved = false;
let baseActive = null;
let baseTied = null;

let audioContext = null;
let schedulerId = null;
let isPlaying = false;
let currentStep = 0;
let nextNoteTime = 0;
let playStartTime = 0;
let playheadIndex = null;
let visualId = null;
let playMode = "bar";
let playbackBars = [];
let playbackLength = TOTAL_STEPS;
let activeSongIndex = null;
let trackPlayhead = { barIndex: null, stepIndex: null };
let takadimiUnitsByBar = [];
let noteValueUnitsByBar = [];
let sheetUnitsByBar = [];
let activeTakadimiUnit = null;
let activeNoteValueUnit = null;
let activeSheetUnit = null;

const clampTempo = (value) => {
  const tempo = Number(value);
  if (Number.isNaN(tempo)) {
    return 90;
  }
  return Math.min(220, Math.max(40, tempo));
};

const clampVolume = (value) => {
  const volume = Number(value);
  if (Number.isNaN(volume)) {
    return 70;
  }
  return Math.min(100, Math.max(0, volume));
};

const getMetronomeVolume = () => clampVolume(metroVolume.value) / 100;

const normalizeTies = () => {
  tied[0] = false;
  for (let i = 0; i < TOTAL_STEPS; i += 1) {
    if (!active[i]) {
      tied[i] = false;
      continue;
    }
    if (i > 0 && tied[i] && !active[i - 1]) {
      tied[i] = false;
    }
  }
};

const collectOnsetsFrom = (activeState, tiedState) => {
  const onsets = [];
  for (let i = 0; i < TOTAL_STEPS; i += 1) {
    if (activeState[i] && (i === 0 || !tiedState[i])) {
      onsets.push(i);
    }
  }
  return onsets;
};

const snapshotBar = () => ({
  active: active.slice(),
  tied: tied.slice(),
});

const barsEqual = (barA, barB) =>
  barA.active.every((value, index) => value === barB.active[index]) &&
  barA.tied.every((value, index) => value === barB.tied[index]);

const syncEditorStatus = () => {
  if (selectedBarIndex === null) {
    editorStatus.textContent = "Editing draft bar (not in song)";
    editorStatus.classList.remove("is-dirty");
    return;
  }
  const label = `Editing bar ${selectedBarIndex + 1}`;
  if (editorDirty) {
    editorStatus.textContent = `${label} (unsaved changes)`;
    editorStatus.classList.add("is-dirty");
  } else {
    editorStatus.textContent = `${label} (saved)`;
    editorStatus.classList.remove("is-dirty");
  }
};

const syncEditorDirty = () => {
  if (selectedBarIndex === null || !songBars[selectedBarIndex]) {
    editorDirty = false;
    syncEditorStatus();
    return;
  }
  editorDirty = !barsEqual(snapshotBar(), songBars[selectedBarIndex]);
  syncEditorStatus();
};

const loadBarIntoEditor = (bar) => {
  for (let i = 0; i < TOTAL_STEPS; i += 1) {
    active[i] = bar.active[i] ?? false;
    tied[i] = bar.tied[i] ?? false;
  }
  normalizeTies();
  applyEditorStateChange();
};

const getOnsetSetForBar = (bar) => {
  return new Set(collectOnsetsFrom(bar.active, bar.tied));
};

const selectSongBar = (index) => {
  if (index < 0 || index >= songBars.length) {
    selectedBarIndex = null;
    editorDirty = false;
    syncTrackControls();
    return;
  }
  selectedBarIndex = index;
  loadBarIntoEditor(songBars[index]);
  renderSongTrack();
};

const renderSongTrack = () => {
  songTrack.innerHTML = "";
  trackStepNodes = [];
  trackPlayhead = { barIndex: null, stepIndex: null };
  if (selectedBarIndex !== null && selectedBarIndex >= songBars.length) {
    selectedBarIndex = null;
    editorDirty = false;
  }
  songCount.textContent = songBars.length
    ? `${songBars.length} ${songBars.length === 1 ? "bar" : "bars"}`
    : "0 bars";

  if (songBars.length === 0) {
    const empty = document.createElement("div");
    empty.className = "track-empty";
    empty.textContent = "No bars yet. Add the current bar to build your song.";
    songTrack.appendChild(empty);
    syncTrackControls();
    return;
  }

  songBars.forEach((bar, index) => {
    const item = document.createElement("div");
    item.className = "track-bar";
    if (index === activeSongIndex) {
      item.classList.add("is-playing");
    }
    if (index === selectedBarIndex) {
      item.classList.add("is-selected");
    }
    item.dataset.index = index.toString();
    item.addEventListener("click", () => {
      selectSongBar(index);
    });

    const label = document.createElement("div");
    label.className = "track-label";
    label.textContent = `Bar ${index + 1}`;

    const steps = document.createElement("div");
    steps.className = "track-steps";
    const stepNodes = [];

    for (let i = 0; i < TOTAL_STEPS; i += 1) {
      const step = document.createElement("span");
      step.className = "track-step";
      if (bar.active[i]) {
        step.classList.add("is-on");
      }
      if (bar.tied[i]) {
        step.classList.add("is-tied");
      }
      steps.appendChild(step);
      stepNodes.push(step);
    }

    item.append(label, steps);
    songTrack.appendChild(item);
    trackStepNodes.push(stepNodes);
  });

  syncTrackControls();
};

const syncTrackControls = () => {
  const noSelection = selectedBarIndex === null;
  const atStart = selectedBarIndex === 0;
  const atEnd =
    selectedBarIndex === null || selectedBarIndex === songBars.length - 1;
  updateBarBtn.disabled = noSelection || !editorDirty;
  duplicateBarBtn.disabled = noSelection;
  deleteBarBtn.disabled = noSelection;
  moveLeftBtn.disabled = noSelection || atStart;
  moveRightBtn.disabled = noSelection || atEnd;
  syncEditorStatus();
};

const syncCells = () => {
  for (let i = 0; i < TOTAL_STEPS; i += 1) {
    const cell = cells[i];
    const isOn = active[i];
    const isTied = tied[i];
    const nextTied = i < TOTAL_STEPS - 1 && tied[i + 1];

    cell.classList.toggle("is-on", isOn);
    cell.classList.toggle("is-merge-start", isOn && !isTied && nextTied);
    cell.classList.toggle("is-merge-mid", isOn && isTied && nextTied);
    cell.classList.toggle("is-merge-end", isOn && isTied && !nextTied);
    cell.classList.toggle("is-single", isOn && !isTied && !nextTied);
    cell.setAttribute("aria-pressed", isOn ? "true" : "false");
  }
};

const applyEditorStateChange = () => {
  syncCells();
  syncEditorDirty();
  syncTrackControls();
  updateOutput();
};

const setActiveSongIndex = (index) => {
  activeSongIndex = index;
  const items = songTrack.querySelectorAll(".track-bar");
  items.forEach((item, itemIndex) => {
    item.classList.toggle("is-playing", itemIndex === index);
  });
};

const setTrackPlayhead = (barIndex, stepIndex) => {
  if (
    trackPlayhead.barIndex !== null &&
    trackStepNodes[trackPlayhead.barIndex]
  ) {
    const previous =
      trackStepNodes[trackPlayhead.barIndex][trackPlayhead.stepIndex];
    previous?.classList.remove("is-playhead");
  }

  if (
    barIndex !== null &&
    trackStepNodes[barIndex] &&
    trackStepNodes[barIndex][stepIndex]
  ) {
    trackStepNodes[barIndex][stepIndex].classList.add("is-playhead");
    trackPlayhead = { barIndex, stepIndex };
  } else {
    trackPlayhead = { barIndex: null, stepIndex: null };
  }
};

const setPlayhead = (index) => {
  if (playheadIndex !== null && cells[playheadIndex]) {
    cells[playheadIndex].classList.remove("is-playhead");
  }
  if (index !== null && cells[index]) {
    cells[index].classList.add("is-playhead");
  }
  playheadIndex = index;
};

const removeActiveOutputUnit = (unitNode, className) => {
  if (!unitNode) {
    return;
  }
  unitNode.classList.remove(className);
};

const findUnitAtStep = (units, stepInBar) =>
  units?.find((unit) => stepInBar >= unit.start && stepInBar < unit.end) ?? null;

const setOutputHighlight = (barIndex, stepInBar) => {
  removeActiveOutputUnit(activeTakadimiUnit, "is-current");
  removeActiveOutputUnit(activeNoteValueUnit, "is-current");
  removeActiveOutputUnit(activeSheetUnit, "is-current");
  activeTakadimiUnit = null;
  activeNoteValueUnit = null;
  activeSheetUnit = null;

  if (barIndex === null || barIndex < 0) {
    return;
  }

  const takadimiUnit = findUnitAtStep(takadimiUnitsByBar[barIndex], stepInBar);
  if (takadimiUnit?.node) {
    takadimiUnit.node.classList.add("is-current");
    activeTakadimiUnit = takadimiUnit.node;
  }

  const noteUnit = findUnitAtStep(noteValueUnitsByBar[barIndex], stepInBar);
  if (noteUnit?.node) {
    noteUnit.node.classList.add("is-current");
    activeNoteValueUnit = noteUnit.node;
  }

  const sheetUnit = findUnitAtStep(sheetUnitsByBar[barIndex], stepInBar);
  if (sheetUnit?.node) {
    sheetUnit.node.classList.add("is-current");
    activeSheetUnit = sheetUnit.node;
  }
};

const resolveOutputBarForBarPlayback = () => {
  if (songBars.length === 0) {
    return 0;
  }
  if (selectedBarIndex !== null && selectedBarIndex >= 0) {
    return selectedBarIndex;
  }
  return null;
};

const updatePlayhead = () => {
  if (!isPlaying || !audioContext) {
    return;
  }
  const tempo = clampTempo(tempoInput.value);
  const secondsPerBeat = 60 / tempo;
  const secondsPerStep = secondsPerBeat / STEPS_PER_BEAT;
  const elapsed = audioContext.currentTime - playStartTime;
  const totalSteps = playbackLength;
  const step =
    ((Math.floor(elapsed / secondsPerStep) % totalSteps) + totalSteps) %
    totalSteps;
  const barIndex = Math.floor(step / TOTAL_STEPS);
  const stepInBar = step % TOTAL_STEPS;
  const useSongVisual = playMode === "song" && songBars.length > 0;

  if (useSongVisual) {
    setPlayhead(null);
    setTrackPlayhead(barIndex, stepInBar);
    setActiveSongIndex(barIndex);
    setOutputHighlight(barIndex, stepInBar);
  } else {
    setTrackPlayhead(null, null);
    setPlayhead(stepInBar);
    setActiveSongIndex(null);
    setOutputHighlight(resolveOutputBarForBarPlayback(), stepInBar);
  }
  visualId = requestAnimationFrame(updatePlayhead);
};

const stopPlayhead = () => {
  if (visualId) {
    cancelAnimationFrame(visualId);
    visualId = null;
  }
  setPlayhead(null);
  setActiveSongIndex(null);
  setTrackPlayhead(null, null);
  setOutputHighlight(null, 0);
};

const restoreBaseState = () => {
  if (!baseActive || !baseTied) {
    return;
  }
  for (let i = 0; i < TOTAL_STEPS; i += 1) {
    active[i] = baseActive[i];
    tied[i] = baseTied[i];
  }
};

const mergeRange = (start, end) => {
  const from = Math.min(start, end);
  const to = Math.max(start, end);
  for (let i = from; i <= to; i += 1) {
    active[i] = true;
    tied[i] = i !== from;
  }
  normalizeTies();
};

const toggleCell = (index) => {
  if (active[index]) {
    active[index] = false;
    tied[index] = false;
  } else {
    active[index] = true;
    tied[index] = false;
  }
  normalizeTies();
  applyEditorStateChange();
  lastClickedIndex = index;
};

const buildGrid = () => {
  const rowEl = document.createElement("div");
  rowEl.className = "grid-row";

  const cellRow = document.createElement("div");
  cellRow.className = "row-cells row--thirtysecond";

  for (let i = 0; i < TOTAL_STEPS; i += 1) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "cell";
    cell.dataset.index = i.toString();
    cell.setAttribute("aria-pressed", "false");
    cell.setAttribute("aria-label", `32nd cell ${i + 1}`);

    if (i % STEPS_PER_BEAT === 0) {
      cell.classList.add("beat-start");
    }

    cell.addEventListener("pointerdown", (event) => {
      const index = Number(cell.dataset.index);
      if (event.shiftKey && lastClickedIndex !== null) {
        mergeRange(lastClickedIndex, index);
        applyEditorStateChange();
        lastClickedIndex = index;
        return;
      }

      event.preventDefault();
      isDragging = true;
      dragMoved = false;
      dragStart = index;
      dragCurrent = index;
      baseActive = active.slice();
      baseTied = tied.slice();
    });

    cells.push(cell);
    cellRow.appendChild(cell);
  }

  rowEl.append(cellRow);
  grid.appendChild(rowEl);
};

window.addEventListener("pointermove", (event) => {
  if (!isDragging || dragStart === null) {
    return;
  }
  const target = document.elementFromPoint(event.clientX, event.clientY);
  const cell = target?.closest?.(".cell");
  if (!cell) {
    return;
  }
  const index = Number(cell.dataset.index);
  if (index === dragCurrent) {
    return;
  }
  dragCurrent = index;
  dragMoved = true;
  restoreBaseState();
  mergeRange(dragStart, dragCurrent);
  applyEditorStateChange();
});

window.addEventListener("pointerup", () => {
  if (!isDragging || dragStart === null) {
    return;
  }

  if (dragMoved) {
    restoreBaseState();
    mergeRange(dragStart, dragCurrent ?? dragStart);
    applyEditorStateChange();
    lastClickedIndex = dragCurrent ?? dragStart;
  } else {
    toggleCell(dragStart);
  }

  isDragging = false;
  dragStart = null;
  dragCurrent = null;
  dragMoved = false;
  baseActive = null;
  baseTied = null;
});

const inferGrid = (positions) => {
  if (positions.every((pos) => pos % 8 === 0)) {
    return 1;
  }
  if (positions.every((pos) => pos % 4 === 0)) {
    return 2;
  }
  if (positions.every((pos) => pos % 2 === 0)) {
    return 4;
  }
  return 8;
};

const createLabelCard = (labelText, text) => {
  const card = document.createElement("div");
  card.className = "beat-card";

  const label = document.createElement("div");
  label.className = "beat-label";
  label.textContent = labelText;

  const value = document.createElement("div");
  value.className = "beat-text";
  value.textContent = text;

  card.append(label, value);
  return card;
};

const createLabelCardHtml = (labelText, html) => {
  const card = document.createElement("div");
  card.className = "beat-card";

  const label = document.createElement("div");
  label.className = "beat-label";
  label.textContent = labelText;

  const value = document.createElement("div");
  value.className = "beat-text";
  value.innerHTML = html;

  card.append(label, value);
  return card;
};

const buildTakadimiData = (activeState, tiedState) => {
  const notes = collectNotesFrom(activeState, tiedState);
  const beats = [];

  for (let beat = 0; beat < BEATS; beat += 1) {
    const beatNotes = notes
      .filter((note) => Math.floor(note.start / STEPS_PER_BEAT) === beat)
      .sort((a, b) => a - b);
    const positions = beatNotes.map((note) => note.start % STEPS_PER_BEAT);

    if (positions.length === 0) {
      beats.push({ units: [], rest: true });
      continue;
    }

    // Custom mode requested: when this beat has one onset on the beat
    // and it is at least a quarter-note long, label by beat position.
    if (
      beatNotes.length === 1 &&
      positions[0] === 0 &&
      beatNotes[0].length >= STEPS_PER_BEAT
    ) {
      beats.push({
        rest: false,
        units: [
          {
            text: beatPositionSyllables[beat] ?? "ta",
            start: beatNotes[0].start,
            length: beatNotes[0].length,
          },
        ],
      });
      continue;
    }

    const gridSize = inferGrid(positions);
    const mapping = syllables[gridSize];
    const step = STEPS_PER_BEAT / gridSize;
    const units = beatNotes.map((note) => {
      const slot = Math.round((note.start % STEPS_PER_BEAT) / step);
      const mappingIndex = Math.max(0, Math.min(mapping.length - 1, slot));
      return {
        text: mapping[mappingIndex],
        start: note.start,
        length: note.length,
      };
    });
    beats.push({ rest: false, units });
  }

  const text = beats
    .map((beat) => {
      if (beat.rest) {
        return "-";
      }
      return beat.units.map((unit) => unit.text).join(" ");
    })
    .join(" | ");

  return { beats, text };
};

const createTakadimiCard = (labelText, takadimiData) => {
  const card = document.createElement("div");
  card.className = "beat-card";

  const label = document.createElement("div");
  label.className = "beat-label";
  label.textContent = labelText;

  const value = document.createElement("div");
  value.className = "beat-text timed-line";

  const units = [];
  takadimiData.beats.forEach((beat, beatIndex) => {
    if (beatIndex > 0) {
      value.append(" | ");
    }
    if (beat.rest) {
      const rest = document.createElement("span");
      rest.className = "timed-rest";
      rest.textContent = "-";
      value.append(rest);
      return;
    }

    beat.units.forEach((unit, unitIndex) => {
      if (unitIndex > 0) {
        value.append(" ");
      }
      const span = document.createElement("span");
      span.className = "timed-unit takadimi-unit";
      span.textContent = unit.text;
      value.append(span);
      units.push({
        start: unit.start,
        end: unit.start + unit.length,
        node: span,
      });
    });
  });

  card.append(label, value);
  return { card, units };
};

const buildNoteValueData = (bar) => {
  const segments = buildSegmentsFromBar(bar);
  const tokens = splitSegmentsToTokens(segments);
  const units = [];
  let pendingNote = null;

  tokens.forEach((token) => {
    const label = formatNoteLength(token.length);
    if (token.type === "rest") {
      if (pendingNote) {
        units.push(pendingNote);
        pendingNote = null;
      }
      units.push({
        type: "rest",
        text: `rest ${label}`,
        start: token.start,
        length: token.length,
      });
      return;
    }

    if (!token.tieFromPrev) {
      if (pendingNote) {
        units.push(pendingNote);
      }
      pendingNote = {
        type: "note",
        text: label,
        start: token.start,
        length: token.length,
      };
    } else if (pendingNote) {
      pendingNote.text = `${pendingNote.text}~${label}`;
      pendingNote.length += token.length;
    }

    if (!token.tieToNext && pendingNote) {
      units.push(pendingNote);
      pendingNote = null;
    }
  });

  if (pendingNote) {
    units.push(pendingNote);
  }

  return {
    text: units.map((unit) => unit.text).join(" · "),
    units,
    tokens,
  };
};

const createNoteValueCard = (labelText, noteValueData) => {
  const card = document.createElement("div");
  card.className = "beat-card";

  const label = document.createElement("div");
  label.className = "beat-label";
  label.textContent = labelText;

  const value = document.createElement("div");
  value.className = "beat-text timed-line";

  const units = [];
  noteValueData.units.forEach((unit, index) => {
    if (index > 0) {
      value.append(" · ");
    }
    const span = document.createElement("span");
    span.className = `timed-unit note-value-unit${
      unit.type === "rest" ? " is-rest" : ""
    }`;
    span.textContent = unit.text;
    value.append(span);
    units.push({
      start: unit.start,
      end: unit.start + unit.length,
      node: span,
    });
  });

  card.append(label, value);
  return { card, units };
};

const createSheetCard = (labelText, sheetData) => {
  const card = createLabelCardHtml(labelText, sheetData.svg);
  const value = card.querySelector(".beat-text");
  const glyphNodes = Array.from(value?.querySelectorAll(".vf-stavenote") ?? []);
  const units = sheetData.tokens.map((token, index) => ({
    start: token.start,
    end: token.start + token.length,
    node: glyphNodes[index] ?? null,
  }));
  return { card, units };
};

const getBarsForOutput = () => {
  if (songBars.length === 0) {
    return [snapshotBar()];
  }
  return songBars;
};

let sheetRenderWarningShown = false;

const warnSheetIssue = (message, error) => {
  if (!sheetRenderWarningShown) {
    console.warn(message, error);
  }
};

const buildSafeTokensFromBar = (bar) => {
  const tokens = [];
  for (let index = 0; index < TOTAL_STEPS; index += 1) {
    const isOn = Boolean(bar.active[index]);
    const tieFromPrev = isOn && index > 0 && Boolean(bar.tied[index]);
    const tieToNext =
      isOn &&
      index < TOTAL_STEPS - 1 &&
      Boolean(bar.active[index + 1]) &&
      Boolean(bar.tied[index + 1]);
    tokens.push({
      type: isOn ? "note" : "rest",
      start: index,
      length: 1,
      tieFromPrev,
      tieToNext,
    });
  }
  return tokens;
};

const renderSheetFromTokens = (tokens, width, height) => {
  const renderRoot = document.createElement("div");
  const renderer = new Renderer(renderRoot, RendererBackends.SVG);
  renderer.resize(width, height);

  const context = renderer.getContext();
  const stave = new Stave(16, 34, width - 32);
  stave.addClef("percussion");
  stave.addTimeSignature("4/4");
  stave.setContext(context).draw();

  const staveNotes = tokens.map((token) => {
    const duration = vexDurationMap[token.length] ?? "32";
    const note = new StaveNote({
      clef: "percussion",
      keys: [token.type === "rest" ? "b/4" : "c/5"],
      duration: token.type === "rest" ? `${duration}r` : duration,
      auto_stem: token.type !== "rest",
    });
    if (dottedMap[token.length] !== undefined) {
      try {
        Dot.buildAndAttach([note], { all: true });
      } catch (dotError) {
        warnSheetIssue("Sheet dotted-note modifier failed for one note.", dotError);
      }
    }
    return note;
  });

  const voice = new Voice({ num_beats: BEATS, beat_value: 4 });
  voice.setStrict(false);
  voice.addTickables(staveNotes);

  new Formatter().joinVoices([voice]).format([voice], width - 128);
  let beams = [];

  const hasBeamableNotes = tokens.some(
    (token) =>
      token.type === "note" && (dottedMap[token.length] ?? token.length) <= 4
  );
  if (hasBeamableNotes) {
    try {
      beams = Beam.generateBeams(staveNotes, {
        groups: [new Fraction(1, 4)],
        beam_rests: false,
        show_stemlets: false,
      });
    } catch (beamError) {
      warnSheetIssue("Sheet beam generation failed for one bar.", beamError);
    }
  }

  voice.draw(context, stave);
  beams.forEach((beam) => beam.setContext(context).draw());

  tokens.forEach((token, index) => {
    if (token.type !== "note" || !token.tieToNext) {
      return;
    }
    const nextToken = tokens[index + 1];
    if (!nextToken || nextToken.type !== "note") {
      return;
    }
    try {
      const tie = new StaveTie({
        firstNote: staveNotes[index],
        lastNote: staveNotes[index + 1],
        firstIndexes: [0],
        lastIndexes: [0],
      });
      tie.setContext(context).draw();
    } catch (tieError) {
      warnSheetIssue("Sheet tie generation failed for one tie.", tieError);
    }
  });

  const svgNode = renderRoot.querySelector("svg");
  if (!svgNode) {
    throw new Error("No SVG node produced.");
  }
  return svgNode.outerHTML;
};

const buildSheetSvgForBar = (bar) => {
  const width = 780;
  const height = 180;

  const segments = buildSegmentsFromBar(bar);
  const tokens = splitSegmentsToTokens(segments);

  try {
    return {
      svg: renderSheetFromTokens(tokens, width, height),
      tokens,
    };
  } catch (error) {
    try {
      const safeTokens = buildSafeTokensFromBar(bar);
      return {
        svg: renderSheetFromTokens(safeTokens, width, height),
        tokens: safeTokens,
      };
    } catch (safeError) {
      if (!sheetRenderWarningShown) {
        console.error(
          "Sheet music rendering failed. Using text fallback.",
          error,
          safeError
        );
        sheetRenderWarningShown = true;
      }
      return {
        svg: `<div class="sheet-fallback">Sheet rendering unavailable for this bar.</div>`,
        tokens,
      };
    }
  }
};

const updateOutput = () => {
  const bars = getBarsForOutput();

  outputBeats.innerHTML = "";
  noteBeats.innerHTML = "";
  sheetBeats.innerHTML = "";
  takadimiUnitsByBar = [];
  noteValueUnitsByBar = [];
  sheetUnitsByBar = [];
  activeTakadimiUnit = null;
  activeNoteValueUnit = null;
  activeSheetUnit = null;

  bars.forEach((bar, index) => {
    const takadimiData = buildTakadimiData(bar.active, bar.tied);
    const takadimiCard = createTakadimiCard(`Bar ${index + 1}`, takadimiData);
    outputBeats.appendChild(takadimiCard.card);
    takadimiUnitsByBar[index] = takadimiCard.units;

    const noteValueData = buildNoteValueData(bar);
    const noteValueCard = createNoteValueCard(`Bar ${index + 1}`, noteValueData);
    noteBeats.appendChild(noteValueCard.card);
    noteValueUnitsByBar[index] = noteValueCard.units;

    const sheetSvg = buildSheetSvgForBar(bar);
    const sheetCard = createSheetCard(`Bar ${index + 1}`, sheetSvg);
    sheetBeats.appendChild(sheetCard.card);
    sheetUnitsByBar[index] = sheetCard.units;
  });
};

const clearGrid = () => {
  active.fill(false);
  tied.fill(false);
  lastClickedIndex = null;
  applyEditorStateChange();
};

const buildPlaybackBars = () => {
  if (playMode === "song" && songBars.length > 0) {
    return getBarsForOutput().map((bar) => ({
      active: bar.active.slice(),
      tied: bar.tied.slice(),
      onsets: getOnsetSetForBar(bar),
    }));
  }
  const snapshot = snapshotBar();
  return [
    {
      active: snapshot.active,
      tied: snapshot.tied,
      onsets: getOnsetSetForBar(snapshot),
    },
  ];
};

const playClick = (time, isBeat) => {
  if (!audioContext) {
    return;
  }
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const frequency = isBeat ? 1200 : 760;
  const volume = isBeat ? 0.7 * getMetronomeVolume() : 0.45;

  if (isBeat && volume <= 0.001) {
    return;
  }

  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(volume, time + 0.001);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.start(time);
  osc.stop(time + 0.1);
};

const playKick = (time) => {
  if (!audioContext) {
    return;
  }
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const volume = 0.9 * getMetronomeVolume();

  if (volume <= 0.001) {
    return;
  }

  osc.type = "sine";
  osc.frequency.setValueAtTime(150, time);
  osc.frequency.exponentialRampToValueAtTime(55, time + 0.12);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(volume, time + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.2);

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.start(time);
  osc.stop(time + 0.22);
};

const scheduler = () => {
  if (!audioContext || !isPlaying) {
    return;
  }

  const tempo = clampTempo(tempoInput.value);
  const secondsPerBeat = 60 / tempo;
  const secondsPerStep = secondsPerBeat / STEPS_PER_BEAT;

  while (nextNoteTime < audioContext.currentTime + 0.1) {
    const barIndex = Math.floor(currentStep / TOTAL_STEPS);
    const stepInBar = currentStep % TOTAL_STEPS;
    const bar = playbackBars[barIndex];

    if (stepInBar % STEPS_PER_BEAT === 0) {
      playClick(nextNoteTime, true);
    }
    if (stepInBar === 0) {
      playKick(nextNoteTime);
    }
    if (bar && bar.onsets.has(stepInBar)) {
      playClick(nextNoteTime, false);
    }

    nextNoteTime += secondsPerStep;
    currentStep = (currentStep + 1) % playbackLength;
  }
};

const startPlayback = async () => {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  playbackBars = buildPlaybackBars();
  playbackLength = playbackBars.length * TOTAL_STEPS;

  isPlaying = true;
  playBtn.textContent = "Stop";
  currentStep = 0;
  nextNoteTime = audioContext.currentTime + 0.05;
  playStartTime = nextNoteTime;
  schedulerId = setInterval(scheduler, 25);
  stopPlayhead();
  updatePlayhead();
};

const stopPlayback = () => {
  isPlaying = false;
  playBtn.textContent = "Play";
  if (schedulerId) {
    clearInterval(schedulerId);
    schedulerId = null;
  }
  stopPlayhead();
};

const togglePlayback = () => {
  if (isPlaying) {
    stopPlayback();
  } else {
    startPlayback();
  }
};

const setPlayMode = (mode) => {
  playMode = mode;
  modeBarBtn.classList.toggle("is-active", mode === "bar");
  modeSongBtn.classList.toggle("is-active", mode === "song");
  modeBarBtn.setAttribute("aria-pressed", mode === "bar" ? "true" : "false");
  modeSongBtn.setAttribute("aria-pressed", mode === "song" ? "true" : "false");

  if (isPlaying) {
    stopPlayback();
    startPlayback();
  }
};

const addBarToSong = () => {
  songBars.push(snapshotBar());
  selectedBarIndex = songBars.length - 1;
  editorDirty = false;
  renderSongTrack();
  syncEditorDirty();
  updateOutput();
};

const updateSelectedBar = () => {
  if (selectedBarIndex === null) {
    return;
  }
  songBars[selectedBarIndex] = snapshotBar();
  editorDirty = false;
  renderSongTrack();
  syncEditorDirty();
  updateOutput();
};

const duplicateSelectedBar = () => {
  if (selectedBarIndex === null) {
    return;
  }
  const barToInsert = snapshotBar();
  const insertIndex = selectedBarIndex + 1;
  songBars.splice(insertIndex, 0, barToInsert);
  selectedBarIndex = insertIndex;
  editorDirty = false;
  renderSongTrack();
  syncEditorDirty();
  updateOutput();
};

const deleteSelectedBar = () => {
  if (selectedBarIndex === null) {
    return;
  }
  songBars.splice(selectedBarIndex, 1);
  if (songBars.length === 0) {
    selectedBarIndex = null;
    editorDirty = false;
    renderSongTrack();
    syncTrackControls();
    updateOutput();
    return;
  }
  const nextIndex = Math.min(selectedBarIndex, songBars.length - 1);
  selectSongBar(nextIndex);
  updateOutput();
};

const moveSelectedBar = (direction) => {
  if (selectedBarIndex === null) {
    return;
  }
  const targetIndex = selectedBarIndex + direction;
  if (targetIndex < 0 || targetIndex >= songBars.length) {
    return;
  }
  if (editorDirty) {
    songBars[selectedBarIndex] = snapshotBar();
  }
  const temp = songBars[selectedBarIndex];
  songBars[selectedBarIndex] = songBars[targetIndex];
  songBars[targetIndex] = temp;
  selectedBarIndex = targetIndex;
  editorDirty = false;
  renderSongTrack();
  syncEditorDirty();
  updateOutput();
};

const sanitizeBar = (bar) => {
  if (
    !bar ||
    !Array.isArray(bar.active) ||
    !Array.isArray(bar.tied) ||
    bar.active.length !== TOTAL_STEPS ||
    bar.tied.length !== TOTAL_STEPS
  ) {
    return null;
  }
  return {
    active: bar.active.map(Boolean),
    tied: bar.tied.map(Boolean),
  };
};

const cloneBar = (bar) => ({
  active: bar.active.slice(),
  tied: bar.tied.slice(),
});

const buildSongStoragePayload = () => ({
  version: 3,
  bars: songBars.map(cloneBar),
  draftBar: snapshotBar(),
  selectedBarIndex,
  tempo: clampTempo(tempoInput.value),
  metronomeVolume: clampVolume(metroVolume.value),
  playMode,
  savedAt: new Date().toISOString(),
});

const flashButton = (button, label) => {
  const original = button.textContent;
  button.textContent = label;
  setTimeout(() => {
    button.textContent = original;
  }, 1300);
};

const applySongPayload = (parsed) => {
  const legacyBars = Array.isArray(parsed) ? parsed : null;
  const payload =
    legacyBars === null && parsed && typeof parsed === "object" ? parsed : null;

  const sourceBars = legacyBars ?? payload?.bars;
  if (!Array.isArray(sourceBars)) {
    return false;
  }

  const loaded = sourceBars.map(sanitizeBar).filter(Boolean);
  const draftBar = sanitizeBar(payload?.draftBar);
  const requestedIndex = Number(payload?.selectedBarIndex);
  const hasRequestedIndex = Number.isInteger(requestedIndex);

  if (payload?.tempo !== undefined) {
    tempoInput.value = clampTempo(payload.tempo);
  }
  if (payload?.metronomeVolume !== undefined) {
    metroVolume.value = clampVolume(payload.metronomeVolume);
  }
  if (payload?.playMode === "song" || payload?.playMode === "bar") {
    setPlayMode(payload.playMode);
  }

  songBars.length = 0;
  songBars.push(...loaded);
  if (songBars.length > 0) {
    const safeIndex = hasRequestedIndex
      ? Math.max(0, Math.min(songBars.length - 1, requestedIndex))
      : 0;
    selectSongBar(safeIndex);
  } else {
    selectedBarIndex = null;
    editorDirty = false;
    if (draftBar) {
      loadBarIntoEditor(draftBar);
    }
    renderSongTrack();
    updateOutput();
  }
  return true;
};

const saveSong = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(buildSongStoragePayload()));
    flashButton(saveSongBtn, "Saved Local");
  } catch (error) {
    flashButton(saveSongBtn, "Save Failed");
  }
};

const loadSong = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      flashButton(loadSongBtn, "No Local Save");
      return;
    }
    const parsed = JSON.parse(stored);
    if (applySongPayload(parsed)) {
      flashButton(loadSongBtn, "Loaded Local");
    } else {
      flashButton(loadSongBtn, "Load Failed");
    }
  } catch (error) {
    flashButton(loadSongBtn, "Load Failed");
  }
};

const exportSongToFile = () => {
  try {
    const payload = buildSongStoragePayload();
    const fileData = JSON.stringify(payload, null, 2);
    const blob = new Blob([fileData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const stamp = payload.savedAt
      .replace(/[:]/g, "-")
      .replace(/\.\d+Z$/, "Z");
    const a = document.createElement("a");
    a.href = url;
    a.download = `takadimi-song-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    flashButton(exportSongBtn, "Exported");
  } catch (error) {
    flashButton(exportSongBtn, "Export Failed");
  }
};

const importSongFromFile = async (event) => {
  const input = event.target;
  const file = input.files?.[0];
  if (!file) {
    return;
  }
  try {
    const content = await file.text();
    const parsed = JSON.parse(content);
    if (applySongPayload(parsed)) {
      flashButton(importSongBtn, "Imported");
    } else {
      flashButton(importSongBtn, "Import Failed");
    }
  } catch (error) {
    flashButton(importSongBtn, "Import Failed");
  } finally {
    input.value = "";
  }
};

const clearSong = () => {
  songBars.length = 0;
  selectedBarIndex = null;
  editorDirty = false;
  renderSongTrack();
  updateOutput();
};

clearBtn.addEventListener("click", clearGrid);
addBarBtn.addEventListener("click", addBarToSong);
updateBarBtn.addEventListener("click", updateSelectedBar);
duplicateBarBtn.addEventListener("click", duplicateSelectedBar);
deleteBarBtn.addEventListener("click", deleteSelectedBar);
moveLeftBtn.addEventListener("click", () => moveSelectedBar(-1));
moveRightBtn.addEventListener("click", () => moveSelectedBar(1));
saveSongBtn.addEventListener("click", saveSong);
loadSongBtn.addEventListener("click", loadSong);
exportSongBtn.addEventListener("click", exportSongToFile);
importSongBtn.addEventListener("click", () => importSongInput.click());
importSongInput.addEventListener("change", importSongFromFile);
clearSongBtn.addEventListener("click", clearSong);
playBtn.addEventListener("click", togglePlayback);
modeBarBtn.addEventListener("click", () => setPlayMode("bar"));
modeSongBtn.addEventListener("click", () => setPlayMode("song"));

tempoInput.addEventListener("change", () => {
  tempoInput.value = clampTempo(tempoInput.value);
});

tempoInput.addEventListener("blur", () => {
  tempoInput.value = clampTempo(tempoInput.value);
});

metroVolume.addEventListener("input", () => {
  metroVolume.value = clampVolume(metroVolume.value);
});

metroVolume.value = clampVolume(metroVolume.value);
setPlayMode("bar");

buildGrid();
syncCells();
updateOutput();
renderSongTrack();
