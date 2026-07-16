import { peopleQuestions } from "./people.mjs";
import { processQuestions } from "./process.mjs";
import { businessEnvironmentQuestions } from "./business-environment.mjs";

function interleave(...sets) {
  const output = [];
  const maxLength = Math.max(...sets.map((set) => set.length));
  for (let index = 0; index < maxLength; index += 1) {
    for (const set of sets) {
      if (set[index]) output.push(set[index]);
    }
  }
  return output;
}

export const refreshQuestions = interleave(
  peopleQuestions,
  processQuestions,
  businessEnvironmentQuestions,
);
