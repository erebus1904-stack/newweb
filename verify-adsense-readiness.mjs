import { existsSync, readdirSync, readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const projectPages = [
  "index.html",
  "about.html",
  "privacy.html",
  "terms.html",
  "programs/pmp.html",
  "programs/capm.html",
];

const guidePages = readdirSync("guides")
  .filter((file) => file.endsWith(".html"))
  .map((file) => `guides/${file}`);

const indexablePages = [...projectPages, ...guidePages];

const retiredProgramPages = [
  "programs/bar.html",
  "programs/cfa.html",
  "programs/cloud-architect.html",
  "programs/fe-pe.html",
  "programs/finra.html",
  "programs/nclex-rn.html",
  "programs/real-estate.html",
  "programs/uscpa.html",
  "programs/usmle.html",
];

const sitemap = read("sitemap.xml");
const privacy = read("privacy.html");

for (const page of projectPages) {
  assert(existsSync(page), `${page} exists`);
  const content = read(page);
  assert(/<meta name="robots" content="index, follow"/i.test(content), `${page} is indexable`);
  assert(/Privacy/i.test(content) || page === "privacy.html", `${page} links or refers to Privacy`);
  assert(/Terms/i.test(content) || page === "terms.html", `${page} links or refers to Terms`);
}

for (const page of indexablePages) {
  assert(existsSync(page), `${page} exists`);
  const content = read(page);
  assert(/<meta name="robots" content="index, follow"/i.test(content), `${page} is indexable`);
  assert(/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=ca-pub-5018342016303677/i.test(content), `${page} loads AdSense publisher code`);
  assert(/crossorigin="anonymous"/i.test(content), `${page} sets AdSense crossorigin`);
  assert(/googletagmanager\.com\/gtag\/js\?id=G-B2HW123JTE/i.test(content), `${page} loads Google Analytics gtag script`);
  assert(/gtag\('config', 'G-B2HW123JTE'\)/i.test(content), `${page} configures Google Analytics measurement id`);
}

for (const page of retiredProgramPages) {
  assert(existsSync(page), `${page} exists for retirement handling`);
  const content = read(page);
  assert(/<meta name="robots" content="noindex, nofollow"/i.test(content), `${page} is noindex,nofollow`);
  assert(!/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js/i.test(content), `${page} does not load AdSense`);
  assert(!sitemap.includes(`https://starrycesium.com/${page}`), `${page} is absent from sitemap`);
}

const privacyExpectations = [
  /project management exam practice/i,
  /Google/i,
  /third-party vendors/i,
  /cookies/i,
  /web beacons/i,
  /IP addresses/i,
  /identifiers/i,
  /How Google uses information/i,
  /localStorage/i,
];

for (const pattern of privacyExpectations) {
  assert(pattern.test(privacy), `privacy includes ${pattern}`);
}

assert(sitemap.includes("https://starrycesium.com/programs/pmp.html"), "sitemap includes PMP page");
assert(sitemap.includes("https://starrycesium.com/programs/capm.html"), "sitemap includes CAPM page");
assert(!/programs\/(nclex-rn|usmle|uscpa|cfa|finra|fe-pe|cloud-architect|bar|real-estate)\.html/.test(sitemap), "sitemap excludes retired non-project-management pages");

const combinedProjectContent = projectPages
  .map(read)
  .join("\n")
  .replace(/\splaceholder="[^"]*"/gi, "");
assert(!/under construction|coming soon|lorem ipsum|placeholder/i.test(combinedProjectContent), "project pages do not contain placeholder wording");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  console.error(`\n${failures.length} AdSense readiness checks failed.`);
  process.exit(1);
}

console.log("PASS AdSense readiness checks for current project-management scope.");
