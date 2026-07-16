import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import {
  locateArrayElements,
  replaceElementRange,
  serializeElements,
  updatePmpTargetCounts,
} from "./pmp-2026-refresh/data-js-segment.mjs";
import { buildSynchronizedData } from "./sync-pmp-2026-refresh.mjs";

for (const eol of ["\n", "\r\n"]) {
  const source = [
    "const x = [",
    '  {"text":"keep { [ ] } ( ) \\\" and \\\\\\ path","nested":{"items":[1,{"value":"},]"}]}}',
    '  ,{"id":2,"choices":["[",{"deep":"escaped \\\" quote"}]}',
    '  ,{"id":3}',
    '  ,{"id":4,"text":"keep after"}',
    "];",
    "",
  ].join(eol);
  const arrayStart = source.indexOf("[");
  const spans = locateArrayElements(source, arrayStart);

  assert.equal(spans.length, 4);
  assert.equal(source.slice(spans[0].start, spans[0].end), source.split(eol)[1].trim());
  assert.equal(source.slice(spans[3].start, spans[3].end), '{"id":4,"text":"keep after"}');

  const serializedElements = '{"id":"new-a"},' + eol + '  {"id":"new-b"}';
  const replaced = replaceElementRange(source, spans, 1, 2, serializedElements);
  assert.equal(
    replaced,
    source.slice(0, spans[1].start) + serializedElements + source.slice(spans[2].end),
  );
  assert.equal(replaced.slice(0, spans[1].start), source.slice(0, spans[1].start));
  assert.equal(replaced.slice(replaced.indexOf(source.slice(spans[2].end))), source.slice(spans[2].end));

  const replacedSpans = locateArrayElements(replaced, replaced.indexOf("["));
  assert.equal(replaceElementRange(replaced, replacedSpans, 1, 2, serializedElements), replaced);
}

const scalarSource = 'const values = ["comma, bracket ] brace }", true, null, 42, [1, 2], {"x":3}];';
const scalarSpans = locateArrayElements(scalarSource, scalarSource.indexOf("["));
assert.deepEqual(
  scalarSpans.map(({ start, end }) => scalarSource.slice(start, end)),
  ['"comma, bracket ] brace }"', "true", "null", "42", "[1, 2]", '{"x":3}'],
);

for (const malformed of [
  "const x = [",
  "const x = [{]}",
  'const x = [{"text":"unterminated}];',
  "const x = [[1, 2}];",
]) {
  assert.throws(() => locateArrayElements(malformed, malformed.indexOf("[")), /unbalanced/i);
}

assert.throws(() => locateArrayElements("const x = [];", -1), /arrayStart/i);
assert.throws(() => locateArrayElements("const x = {};", 10), /arrayStart/i);
assert.throws(() => locateArrayElements("const x = [];", 999), /arrayStart/i);

const boundarySource = "const x = [{\"id\":1},{\"id\":2},{\"id\":3}];";
const boundarySpans = locateArrayElements(boundarySource, boundarySource.indexOf("["));
for (const [startIndex, count] of [
  [-1, 1],
  [0, 0],
  [3, 1],
  [2, 2],
  [0.5, 1],
  [0, 1.5],
]) {
  assert.throws(
    () => replaceElementRange(boundarySource, boundarySpans, startIndex, count, '{"id":"x"}'),
    /range/i,
  );
}
assert.throws(
  () => replaceElementRange(boundarySource, boundarySpans, 0, 1, ""),
  /serializedElements/i,
);

assert.equal(
  serializeElements([{ id: 1, nested: { ok: true } }, { id: 2 }], "\r\n"),
  [
    "      {",
    '        "id": 1,',
    '        "nested": {',
    '          "ok": true',
    "        }",
    "      },",
    "      {",
    '        "id": 2',
    "      }",
  ].join("\r\n"),
);
assert.throws(() => serializeElements([], "\n"), /questions/i);
assert.throws(() => serializeElements([{}], "\r"), /line ending/i);

const metadataFixture = `const examCatalog = [
  {
    "id": "pmp",
    "questions": [{"practiceCount": 999,"text":"fake \\\"examConfig\\\": { and \\\"domainTargets\\\": [ markers","examConfig":{"domainTargets":[{"domain":"People","practiceCount":555}]}}],
    "examConfig": {
      "domainTargets": [
        {"domain":"People","practiceCount":1},
        {"domain":"Process","practiceCount":2},
        {"domain":"Business Environment","practiceCount":3}
      ],
      "chapterTargets": [
        {"chapterId":"pmbok-ch01-introduction","practiceCount":1},
        {"chapterId":"pmbok-ch02-project-environment","practiceCount":2},
        {"chapterId":"pmbok-ch03-project-manager-role","practiceCount":3},
        {"chapterId":"pmbok-ch04-integration-management","practiceCount":4},
        {"chapterId":"pmbok-ch05-scope-management","practiceCount":5},
        {"chapterId":"pmbok-ch06-schedule-management","practiceCount":6},
        {"chapterId":"pmbok-ch07-cost-management","practiceCount":7},
        {"chapterId":"pmbok-ch08-quality-management","practiceCount":8},
        {"chapterId":"pmbok-ch09-resource-management","practiceCount":9},
        {"chapterId":"pmbok-ch10-communications-management","practiceCount":10},
        {"chapterId":"pmbok-ch11-risk-management","practiceCount":11},
        {"chapterId":"pmbok-ch12-procurement-management","practiceCount":12},
        {"chapterId":"pmbok-ch13-stakeholder-management","practiceCount":13}
      ]
    }
  },
  {
    "id": "capm",
    "questions": [{"id":"pmp","practiceCount":666}],
    "examConfig": {
      "domainTargets": [{"domain":"People","practiceCount":777}],
      "chapterTargets": [{"chapterId":"pmbok-ch01-introduction","practiceCount":888}]
    }
  }
];`;
const updatedMetadata = updatePmpTargetCounts(metadataFixture);
assert(updatedMetadata.includes('{"practiceCount": 999,"text":"fake'));
assert(updatedMetadata.includes('{"domain":"People","practiceCount":555}'));
assert(updatedMetadata.includes('{"domain":"People","practiceCount":353}'));
assert(updatedMetadata.includes('{"domain":"Process","practiceCount":438}'));
assert(updatedMetadata.includes('{"domain":"Business Environment","practiceCount":278}'));
assert(updatedMetadata.includes('{"chapterId":"pmbok-ch01-introduction","practiceCount":65}'));
assert(updatedMetadata.includes('{"chapterId":"pmbok-ch13-stakeholder-management","practiceCount":82}'));
assert(updatedMetadata.includes('{"domain":"People","practiceCount":777}'));
assert(updatedMetadata.includes('{"chapterId":"pmbok-ch01-introduction","practiceCount":888}'));
assert(updatedMetadata.includes('{"id":"pmp","practiceCount":666}'));
assert.equal(updatePmpTargetCounts(updatedMetadata), updatedMetadata);
assert.throws(
  () =>
    updatePmpTargetCounts(
      metadataFixture.replace(
        '{"domain":"People","practiceCount":1}',
        '{"domain":"Team","practiceCount":1}',
      ),
    ),
  /People.*exactly once/i,
);
assert.throws(
  () =>
    updatePmpTargetCounts(
      metadataFixture.replace(
        '{"domain":"People","practiceCount":1}',
        '{"domain":"People","practiceCount":1.5}',
      ),
    ),
  /practiceCount.*integer/i,
);

const privateDirectory = dirname(fileURLToPath(import.meta.url));
const dataSource = readFileSync(resolve(privateDirectory, "..", "data.js"), "utf8");
const synchronizedData = buildSynchronizedData(dataSource);
assert.equal(buildSynchronizedData(synchronizedData), synchronizedData);

console.log("PASS PMP data segment tests.");
