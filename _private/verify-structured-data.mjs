import { readFileSync } from "node:fs";
import { seoPages } from "./seo-page-map.mjs";

function extractJsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)]
    .map((match) => {
      try {
        return JSON.parse(match[1]);
      } catch (error) {
        return { __parseError: error.message };
      }
    });
}

function flattenTypes(node, types = []) {
  if (!node || typeof node !== "object") return types;
  if (Array.isArray(node)) {
    node.forEach((item) => flattenTypes(item, types));
    return types;
  }
  if (node["@type"]) {
    if (Array.isArray(node["@type"])) types.push(...node["@type"]);
    else types.push(node["@type"]);
  }
  if (node["@graph"]) flattenTypes(node["@graph"], types);
  return types;
}

const failures = [];

for (const page of seoPages.filter((item) => item.schema.length)) {
  const html = readFileSync(page.path, "utf8");
  const blocks = extractJsonLd(html);
  if (!blocks.length) {
    failures.push(`${page.path} has no JSON-LD block`);
    continue;
  }
  const parseError = blocks.find((block) => block.__parseError);
  if (parseError) {
    failures.push(`${page.path} has invalid JSON-LD: ${parseError.__parseError}`);
    continue;
  }
  const types = new Set(flattenTypes(blocks));
  for (const schemaType of page.schema) {
    if (!types.has(schemaType)) failures.push(`${page.path} missing ${schemaType} schema`);
  }
}

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}

console.log("PASS structured data coverage matches seo-page-map.mjs.");
