import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const privateDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(privateDirectory, "..");
const verifierPath = resolve(privateDirectory, "verify-pmp-question-quality.mjs");

function runVerifier(args = []) {
  return spawnSync(process.execPath, [verifierPath, ...args], {
    cwd: projectDirectory,
    encoding: "utf8",
  });
}

const defaultRun = runVerifier();
assert.equal(
  defaultRun.status,
  1,
  `default mode must inspect the complete PMP bank and expose historical mock-bank debt; received exit ${String(defaultRun.status)} with: ${defaultRun.stdout}${defaultRun.stderr}`,
);
assert.match(defaultRun.stderr, /FAIL PMP#843 duplicates explanation from PMP#841\./);

const practiceOnlyRun = runVerifier(["--practice-only"]);
assert.equal(
  practiceOnlyRun.status,
  0,
  `--practice-only must pass the deployed practice bank: ${practiceOnlyRun.stdout}${practiceOnlyRun.stderr}`,
);
assert.match(
  practiceOnlyRun.stdout,
  /PASS all 1069 PMP practice questions meet the focused quality bar\./,
);

console.log("PASS PMP question-quality CLI keeps full-bank default and explicit practice-only scope.");
