import {
  FINAL_CHAPTER_TARGETS,
  FINAL_DOMAIN_TARGETS,
} from "./contract.mjs";

const JSON_STRING_QUOTES = new Set(['"', "'"]);

function unbalanced(message) {
  return new Error(`Unbalanced array input: ${message}`);
}

export function locateArrayElements(source, arrayStart) {
  if (
    typeof source !== "string" ||
    !Number.isInteger(arrayStart) ||
    arrayStart < 0 ||
    arrayStart >= source.length ||
    source[arrayStart] !== "["
  ) {
    throw new RangeError("arrayStart must be the index of an opening array bracket.");
  }

  const spans = [];
  const stack = ["["];
  let inString = null;
  let escaped = false;
  let elementStart = null;
  let lastSignificant = null;

  for (let index = arrayStart + 1; index < source.length; index += 1) {
    const character = source[index];

    if (inString !== null) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === inString) {
        inString = null;
        lastSignificant = index;
      }
      continue;
    }

    if (/\s/u.test(character)) continue;

    if (elementStart === null && character !== "]") {
      if (character === ",") throw unbalanced(`empty element at index ${index}`);
      elementStart = index;
    }

    if (JSON_STRING_QUOTES.has(character)) {
      inString = character;
      lastSignificant = index;
      continue;
    }

    if (character === "{" || character === "[") {
      stack.push(character);
      lastSignificant = index;
      continue;
    }

    if (character === "}" || character === "]") {
      const opening = stack.at(-1);
      const expected = character === "}" ? "{" : "[";
      if (opening !== expected) {
        throw unbalanced(`unexpected ${character} at index ${index}`);
      }

      if (stack.length === 1) {
        if (elementStart !== null) {
          if (lastSignificant === null || lastSignificant < elementStart) {
            throw unbalanced(`empty final element at index ${index}`);
          }
          spans.push({ start: elementStart, end: lastSignificant + 1 });
        }
        return spans;
      }

      stack.pop();
      lastSignificant = index;
      continue;
    }

    if (character === "," && stack.length === 1) {
      if (elementStart === null || lastSignificant === null) {
        throw unbalanced(`empty element at index ${index}`);
      }
      spans.push({ start: elementStart, end: lastSignificant + 1 });
      elementStart = null;
      lastSignificant = null;
      continue;
    }

    lastSignificant = index;
  }

  if (inString !== null) throw unbalanced("unterminated string");
  throw unbalanced("missing closing array bracket");
}

export function replaceElementRange(source, spans, startIndex, count, serializedElements) {
  const validRange =
    typeof source === "string" &&
    Array.isArray(spans) &&
    Number.isInteger(startIndex) &&
    Number.isInteger(count) &&
    startIndex >= 0 &&
    count > 0 &&
    startIndex + count <= spans.length;
  if (!validRange) {
    throw new RangeError("Element replacement range is outside the located array elements.");
  }
  if (typeof serializedElements !== "string" || serializedElements.length === 0) {
    throw new TypeError("serializedElements must be a non-empty string.");
  }

  const first = spans[startIndex];
  const last = spans[startIndex + count - 1];
  const validSpans = spans.every(
    (span, index) =>
      Number.isInteger(span?.start) &&
      Number.isInteger(span?.end) &&
      span.start >= 0 &&
      span.end > span.start &&
      span.end <= source.length &&
      (index === 0 || span.start >= spans[index - 1].end),
  );
  if (!validSpans || first.start > last.end) {
    throw new RangeError("Located element spans do not form a valid replacement range.");
  }

  return source.slice(0, first.start) + serializedElements + source.slice(last.end);
}

export function serializeElements(questions, eol) {
  if (!Array.isArray(questions) || questions.length === 0) {
    throw new TypeError("questions must be a non-empty array.");
  }
  if (eol !== "\n" && eol !== "\r\n") {
    throw new TypeError("line ending must be LF or CRLF.");
  }

  return questions
    .map((question) => {
      const serialized = JSON.stringify(question, null, 2);
      if (serialized === undefined) throw new TypeError("questions must be JSON serializable.");
      return serialized
        .split("\n")
        .map((line) => `      ${line}`)
        .join(eol);
    })
    .join(`,${eol}`);
}

function findUniqueMarker(source, pattern, label, fromIndex = 0, toIndex = source.length) {
  const matches = [];
  pattern.lastIndex = fromIndex;
  while (true) {
    const match = pattern.exec(source);
    if (!match || match.index >= toIndex) break;
    matches.push(match);
  }
  pattern.lastIndex = 0;
  if (matches.length !== 1) {
    throw new Error(`${label} must appear exactly once; found ${matches.length}.`);
  }
  return matches[0];
}

function findFirstMarker(source, pattern, label, fromIndex = 0, toIndex = source.length) {
  pattern.lastIndex = fromIndex;
  const match = pattern.exec(source);
  pattern.lastIndex = 0;
  if (!match || match.index >= toIndex) throw new Error(`${label} is missing.`);
  return match;
}

function locateBalancedEnd(source, start) {
  const opening = source[start];
  if (opening !== "{" && opening !== "[") {
    throw new RangeError("Balanced range must start with an object or array bracket.");
  }
  const stack = [opening];
  let inString = null;
  let escaped = false;

  for (let index = start + 1; index < source.length; index += 1) {
    const character = source[index];
    if (inString !== null) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === inString) inString = null;
      continue;
    }
    if (JSON_STRING_QUOTES.has(character)) {
      inString = character;
      continue;
    }
    if (character === "{" || character === "[") {
      stack.push(character);
      continue;
    }
    if (character !== "}" && character !== "]") continue;

    const expected = character === "}" ? "{" : "[";
    if (stack.at(-1) !== expected) {
      throw unbalanced(`unexpected ${character} at index ${index}`);
    }
    stack.pop();
    if (stack.length === 0) return index + 1;
  }
  throw unbalanced("missing closing object or array bracket");
}

function locateNamedArray(source, objectStart, objectEnd, property) {
  const escapedProperty = property.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const marker = findUniqueMarker(
    source,
    new RegExp(`"${escapedProperty}"\\s*:\\s*\\[`, "g"),
    `PMP ${property}`,
    objectStart,
    objectEnd,
  );
  const arrayStart = source.indexOf("[", marker.index);
  const spans = locateArrayElements(source, arrayStart);
  const arrayEnd = locateBalancedEnd(source, arrayStart);
  if (arrayEnd > objectEnd) {
    throw new Error(`PMP ${property} array extends outside the PMP object.`);
  }
  return spans;
}

function collectTargetReplacements(source, spans, key, targets, label) {
  const rows = spans.map((span) => {
    const text = source.slice(span.start, span.end);
    let value;
    try {
      value = JSON.parse(text);
    } catch (error) {
      throw new Error(`${label} row is not valid JSON: ${String(error?.message ?? error)}`);
    }
    return { span, text, value };
  });
  const replacements = [];

  for (const [targetName, targetCount] of Object.entries(targets)) {
    const matchingRows = rows.filter(({ value }) => value?.[key] === targetName);
    if (matchingRows.length !== 1) {
      throw new Error(`${label} ${targetName} must appear exactly once; found ${matchingRows.length}.`);
    }

    const [{ span, text, value }] = matchingRows;
    if (!Number.isInteger(value.practiceCount)) {
      throw new Error(`${label} ${targetName} practiceCount must be an integer.`);
    }
    const countMatches = [
      ...text.matchAll(/"practiceCount"\s*:\s*(-?\d+)(?![\d.eE])/g),
    ];
    if (countMatches.length !== 1) {
      throw new Error(`${label} ${targetName} practiceCount must appear exactly once; found ${countMatches.length}.`);
    }
    const countMatch = countMatches[0];
    const relativeStart = countMatch.index + countMatch[0].lastIndexOf(countMatch[1]);
    replacements.push({
      start: span.start + relativeStart,
      end: span.start + relativeStart + countMatch[1].length,
      value: String(targetCount),
    });
  }

  if (rows.length !== Object.keys(targets).length) {
    throw new Error(`${label} must contain exactly ${Object.keys(targets).length} rows; found ${rows.length}.`);
  }
  return replacements;
}

export function updatePmpTargetCounts(source) {
  if (typeof source !== "string") throw new TypeError("source must be a string.");

  const catalogMarker = findUniqueMarker(
    source,
    /\bconst\s+examCatalog\s*=\s*\[/g,
    "examCatalog declaration",
  );
  const catalogStart = source.indexOf("[", catalogMarker.index);
  const catalogSpans = locateArrayElements(source, catalogStart);
  const pmpSpans = catalogSpans.filter((span) => {
    try {
      return JSON.parse(source.slice(span.start, span.end))?.id === "pmp";
    } catch (error) {
      throw new Error(
        `Top-level examCatalog row is not valid JSON: ${String(error?.message ?? error)}`,
      );
    }
  });
  if (pmpSpans.length !== 1) {
    throw new Error(`PMP catalog object must appear exactly once; found ${pmpSpans.length}.`);
  }

  const pmpSpan = pmpSpans[0];
  const questionsMarker = findFirstMarker(
    source,
    /"questions"\s*:\s*\[/g,
    "PMP questions",
    pmpSpan.start,
    pmpSpan.end,
  );
  const questionsStart = source.indexOf("[", questionsMarker.index);
  locateArrayElements(source, questionsStart);
  const questionsEnd = locateBalancedEnd(source, questionsStart);
  const examConfigMarker = findUniqueMarker(
    source,
    /"examConfig"\s*:\s*\{/g,
    "PMP examConfig",
    questionsEnd,
    pmpSpan.end,
  );
  const examConfigStart = source.indexOf("{", examConfigMarker.index);
  const examConfigEnd = locateBalancedEnd(source, examConfigStart);
  if (examConfigEnd > pmpSpan.end) throw new Error("PMP examConfig extends outside the PMP object.");
  const domainSpans = locateNamedArray(
    source,
    examConfigStart,
    examConfigEnd,
    "domainTargets",
  );
  const chapterSpans = locateNamedArray(
    source,
    examConfigStart,
    examConfigEnd,
    "chapterTargets",
  );
  const replacements = [
    ...collectTargetReplacements(
      source,
      domainSpans,
      "domain",
      FINAL_DOMAIN_TARGETS,
      "PMP domain target",
    ),
    ...collectTargetReplacements(
      source,
      chapterSpans,
      "chapterId",
      FINAL_CHAPTER_TARGETS,
      "PMP chapter target",
    ),
  ].sort((left, right) => right.start - left.start);

  return replacements.reduce(
    (updated, replacement) =>
      updated.slice(0, replacement.start) + replacement.value + updated.slice(replacement.end),
    source,
  );
}
