import test from "node:test";
import assert from "node:assert/strict";

import {
  TOTAL_STEPS,
  buildNoteValueString,
  splitSegmentsToTokens,
} from "./notation.js";

const buildBar = (notes) => {
  const active = Array(TOTAL_STEPS).fill(false);
  const tied = Array(TOTAL_STEPS).fill(false);

  notes.forEach(({ start, length }) => {
    for (let i = start; i < start + length; i += 1) {
      active[i] = true;
      tied[i] = i > start;
    }
  });

  return { active, tied };
};

test("DP keeps offbeat 8th intact instead of dotted 16th + 32nd", () => {
  const tokens = splitSegmentsToTokens([{ type: "note", start: 2, length: 4 }]);
  assert.deepEqual(
    tokens.map((token) => token.length),
    [4]
  );
});

test("tie policy splits a note at beat boundary (quarter + 16th)", () => {
  const tokens = splitSegmentsToTokens([{ type: "note", start: 0, length: 10 }]);
  assert.deepEqual(
    tokens.map((token) => token.length),
    [8, 2]
  );
  assert.equal(tokens[0].tieToNext, true);
  assert.equal(tokens[1].tieFromPrev, true);
});

test("separate half notes remain separate half notes", () => {
  const bar = buildBar([
    { start: 0, length: 16 },
    { start: 16, length: 16 },
  ]);
  assert.equal(buildNoteValueString(bar), "half · half");
});

test("quarter+16th plus three 16ths is shown with tie", () => {
  const bar = buildBar([
    { start: 0, length: 10 },
    { start: 10, length: 2 },
    { start: 12, length: 2 },
    { start: 14, length: 2 },
  ]);
  assert.equal(
    buildNoteValueString(bar),
    "quarter~16th · 16th · 16th · 16th · rest half"
  );
});

test("offbeat 12-step note is split across beat instead of dotted quarter", () => {
  const tokens = splitSegmentsToTokens([{ type: "note", start: 4, length: 12 }]);
  assert.deepEqual(
    tokens.map((token) => token.length),
    [4, 8]
  );
});
