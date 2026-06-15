import { existsSync, readFileSync } from "node:fs";

const files = {
  home: readFileSync("index.html", "utf8"),
  pmp: readFileSync("programs/pmp.html", "utf8"),
  sitemap: readFileSync("sitemap.xml", "utf8"),
};

const guidePaths = [
  "guides/pmp-study-plan.html",
  "guides/pmp-situational-questions.html",
  "guides/pmp-agile-hybrid-predictive.html",
  "guides/pmp-change-control.html",
  "guides/pmp-risk-issues.html",
  "guides/pmp-stakeholder-communication.html",
];

const articlePaths = [
  "guides/pmp-2026-exam-version.html",
  "guides/pmp-next-best-action.html",
  "guides/pmp-delivery-approaches.html",
  "guides/pmp-agile-roles.html",
  "guides/pmp-process-map.html",
];

const capmArticlePaths = [
  "guides/capm-domain-study-plan.html",
  "guides/capm-exam-timing-strategy.html",
  "guides/capm-core-concepts.html",
  "guides/capm-predictive-project-management.html",
];

const guideFiles = guidePaths.map((path) => ({
  path,
  content: existsSync(path) ? readFileSync(path, "utf8") : "",
}));

const articleFiles = articlePaths.map((path) => ({
  path,
  content: existsSync(path) ? readFileSync(path, "utf8") : "",
}));

const capmArticleFiles = capmArticlePaths.map((path) => ({
  path,
  content: existsSync(path) ? readFileSync(path, "utf8") : "",
}));

function visibleWordCount(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .split(/\s+/)
    .filter((word) => /[A-Za-z0-9]/.test(word)).length;
}

const checks = [
  {
    name: "home title presents PMP and CAPM practice exams",
    pass: /<title>PMP & CAPM Practice Exams \| LicenseAtlas<\/title>/.test(files.home),
  },
  {
    name: "home no longer markets a broad credential catalog",
    pass: !/NCLEX-RN, USMLE, USCPA, CFA, FINRA, FE\/PE/.test(files.home),
  },
  {
    name: "home includes study guide section",
    pass: /id="study-guides"/.test(files.home) && /Latest PMP articles/.test(files.home),
  },
  {
    name: "home removes single-language selector",
    pass: !/id="language-select"/.test(files.home) && !/Language<\/span>/.test(files.home),
  },
  {
    name: "home defaults to a practice-first workspace",
    pass: /id="practice-workspace"/.test(files.home) && /Choose PMP or CAPM/.test(files.home),
  },
  {
    name: "PMP page contains learning-center sections",
    pass: /30-day PMP study path/.test(files.pmp) &&
      /How to answer PMP situational questions/.test(files.pmp) &&
      /Latest PMP articles/.test(files.pmp),
  },
  {
    name: "sitemap focuses on project management pages for this phase",
    pass: /programs\/pmp\.html/.test(files.sitemap) &&
      /programs\/capm\.html/.test(files.sitemap) &&
      !/programs\/nclex-rn\.html/.test(files.sitemap) &&
      !/programs\/usmle\.html/.test(files.sitemap),
  },
  {
    name: "six PMP guide pages exist with article-page structure",
    pass: guideFiles.length === 6 &&
      guideFiles.every((guide) => /<article class="guide-article article-page">/.test(guide.content)) &&
      guideFiles.every((guide) => /PMP/.test(guide.content)),
  },
  {
    name: "PMP center links to every guide page",
    pass: guidePaths.every((path) => files.pmp.includes(`../${path}`)),
  },
  {
    name: "PMP center links to core guide pages",
    pass: guidePaths.slice(0, 4).every((path) => files.pmp.includes(`../${path}`)),
  },
  {
    name: "sitemap includes every PMP guide page",
    pass: guidePaths.every((path) => files.sitemap.includes(`https://starrycesium.com/${path}`)),
  },
  {
    name: "five current PMP articles exist with simple visuals",
    pass: articleFiles.length === 5 &&
      articleFiles.every((article) => /<article class="guide-article article-page">/.test(article.content)) &&
      articleFiles.every((article) => /<figure class="article-visual"/.test(article.content)),
  },
  {
    name: "PMP articles are within 1000-1500 word target",
    pass: [...articleFiles, ...guideFiles].every((article) => {
      const words = visibleWordCount(article.content);
      return words >= 1000 && words <= 1500;
    }),
  },
  {
    name: "home and PMP center link current PMP articles",
    pass: articlePaths.every((path) => files.pmp.includes(`../${path}`)) &&
      articlePaths.slice(0, 5).every((path) => files.home.includes(`./${path}`)),
  },
  {
    name: "sitemap includes current PMP articles",
    pass: articlePaths.every((path) => files.sitemap.includes(`https://starrycesium.com/${path}`)),
  },
  {
    name: "four CAPM long guides exist with visuals",
    pass: capmArticleFiles.length === 4 &&
      capmArticleFiles.every((article) => /<article class="guide-article article-page">/.test(article.content)) &&
      capmArticleFiles.every((article) => /<figure class="article-visual"/.test(article.content)),
  },
  {
    name: "CAPM articles are within 1000-1500 word target",
    pass: capmArticleFiles.every((article) => {
      const words = visibleWordCount(article.content);
      return words >= 1000 && words <= 1500;
    }),
  },
  {
    name: "home CAPM page and sitemap link CAPM articles",
    pass: capmArticlePaths.every((path) => files.home.includes(`./${path}`)) &&
      capmArticlePaths.every((path) => readFileSync("programs/capm.html", "utf8").includes(`../${path}`)) &&
      capmArticlePaths.every((path) => files.sitemap.includes(`https://starrycesium.com/${path}`)),
  },
];

const failed = checks.filter((check) => !check.pass);

for (const check of checks) {
  console.log(`${check.pass ? "PASS" : "FAIL"} ${check.name}`);
}

if (failed.length) {
  console.error(`\n${failed.length} PMP focus checks failed.`);
  process.exit(1);
}
