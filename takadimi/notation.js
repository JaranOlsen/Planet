export const TOTAL_STEPS = 32;
export const BEATS = 4;
export const STEPS_PER_BEAT = TOTAL_STEPS / BEATS;

export const noteNames = {
  1: "32nd",
  2: "16th",
  3: "dotted 16th",
  4: "8th",
  6: "dotted 8th",
  8: "quarter",
  12: "dotted quarter",
  16: "half",
  24: "dotted half",
  32: "whole",
};

export const dottedMap = {
  3: 2,
  6: 4,
  12: 8,
  24: 16,
};

const TOKEN_LENGTHS = [32, 24, 16, 12, 8, 6, 4, 3, 2, 1];

const countBoundariesCrossed = (start, end, boundarySize) => {
  if (boundarySize <= 0) {
    return 0;
  }
  let crossings = 0;
  for (
    let boundary = Math.floor(start / boundarySize) * boundarySize + boundarySize;
    boundary < end;
    boundary += boundarySize
  ) {
    crossings += 1;
  }
  return crossings;
};

const tokenPenalty = (segmentType, start, length) => {
  const end = start + length;
  const beatCrossings = countBoundariesCrossed(start, end, STEPS_PER_BEAT);
  const halfBeatCrossings = countBoundariesCrossed(
    start,
    end,
    STEPS_PER_BEAT / 2
  );

  let penalty = 0;

  const isAlignedFullBeatValue =
    start % STEPS_PER_BEAT === 0 && length % STEPS_PER_BEAT === 0;

  // Strong tie policy: split rhythm at beat boundaries when possible,
  // except for values that are already clean full-beat groupings.
  if (segmentType === "note") {
    penalty += isAlignedFullBeatValue ? 0 : beatCrossings * 140;
  } else {
    penalty += isAlignedFullBeatValue ? 0 : beatCrossings * 90;
  }

  // Keep tiny fragments as a last resort.
  if (length === 1) {
    penalty += 18;
  } else if (length === 3) {
    penalty += 6;
  }

  // Keep short notes readable around sub-beat boundaries, without forcing ties.
  if (segmentType === "note" && length <= 4) {
    penalty += halfBeatCrossings * 18;
  }

  // Prefer non-dotted when an equally good split exists.
  if (dottedMap[length] !== undefined) {
    penalty += 1;
  }

  return penalty;
};

const optimizeSegmentTokenLengths = (segment) => {
  const segmentLength = segment.length;
  const best = Array(segmentLength + 1).fill(null);
  best[segmentLength] = { cost: 0, count: 0, firstLength: 0, next: -1 };

  for (let offset = segmentLength - 1; offset >= 0; offset -= 1) {
    let winner = null;
    const absoluteStart = segment.start + offset;

    TOKEN_LENGTHS.forEach((length) => {
      if (length > segmentLength - offset) {
        return;
      }
      const remainder = best[offset + length];
      if (!remainder) {
        return;
      }

      const cost =
        100 + tokenPenalty(segment.type, absoluteStart, length) + remainder.cost;
      const count = 1 + remainder.count;

      if (
        !winner ||
        cost < winner.cost ||
        (cost === winner.cost && count < winner.count) ||
        (cost === winner.cost && count === winner.count && length > winner.firstLength)
      ) {
        winner = {
          cost,
          count,
          firstLength: length,
          next: offset + length,
        };
      }
    });

    best[offset] = winner;
  }

  const lengths = [];
  let cursor = 0;
  while (cursor < segmentLength) {
    const state = best[cursor];
    if (!state) {
      return [1];
    }
    lengths.push(state.firstLength);
    cursor = state.next;
  }
  return lengths;
};

export const formatNoteLength = (length) => noteNames[length] ?? `${length}/32`;

export const collectNotesFrom = (activeState, tiedState) => {
  const notes = [];
  for (let i = 0; i < activeState.length; i += 1) {
    if (!activeState[i] || (i > 0 && tiedState[i])) {
      continue;
    }
    let length = 1;
    while (
      i + length < activeState.length &&
      activeState[i + length] &&
      tiedState[i + length]
    ) {
      length += 1;
    }
    notes.push({ start: i, length });
    i += length - 1;
  }
  return notes;
};

export const buildSegmentsFromBar = (bar) => {
  const notes = collectNotesFrom(bar.active, bar.tied);
  const segments = [];
  let cursor = 0;

  notes.forEach((note) => {
    if (note.start > cursor) {
      segments.push({
        type: "rest",
        start: cursor,
        length: note.start - cursor,
      });
    }
    segments.push({ type: "note", start: note.start, length: note.length });
    cursor = note.start + note.length;
  });

  if (cursor < TOTAL_STEPS) {
    segments.push({
      type: "rest",
      start: cursor,
      length: TOTAL_STEPS - cursor,
    });
  }

  return segments;
};

export const splitSegmentsToTokens = (segments) => {
  const tokens = [];

  segments.forEach((segment) => {
    const lengths = optimizeSegmentTokenLengths(segment);
    let cursor = segment.start;

    lengths.forEach((length, index) => {
      tokens.push({
        type: segment.type,
        start: cursor,
        length,
        tieFromPrev: segment.type === "note" && index > 0,
        tieToNext: segment.type === "note" && index < lengths.length - 1,
      });
      cursor += length;
    });
  });

  return tokens;
};

export const buildNoteValueString = (bar) => {
  const segments = buildSegmentsFromBar(bar);
  const tokens = splitSegmentsToTokens(segments);
  const parts = [];
  let pendingNote = "";

  tokens.forEach((token) => {
    const label = formatNoteLength(token.length);
    if (token.type === "rest") {
      if (pendingNote) {
        parts.push(pendingNote);
        pendingNote = "";
      }
      parts.push(`rest ${label}`);
      return;
    }

    if (!token.tieFromPrev) {
      if (pendingNote) {
        parts.push(pendingNote);
      }
      pendingNote = label;
    } else {
      pendingNote = pendingNote ? `${pendingNote}~${label}` : label;
    }

    if (!token.tieToNext && pendingNote) {
      parts.push(pendingNote);
      pendingNote = "";
    }
  });

  if (pendingNote) {
    parts.push(pendingNote);
  }

  return parts.join(" · ");
};
