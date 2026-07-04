import { existsSync, readFileSync } from "node:fs";

const files = {
  home: readFileSync("index.html", "utf8"),
  practice: readFileSync("practice.html", "utf8"),
  pmpQuestions: readFileSync("pmp-questions.html", "utf8"),
  capmQuestions: readFileSync("capm-questions.html", "utf8"),
  blog: readFileSync("blog.html", "utf8"),
  pmp: readFileSync("programs/pmp.html", "utf8"),
  capm: readFileSync("programs/capm.html", "utf8"),
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
  "guides/capm-agile-scrum-kanban.html",
  "guides/capm-business-analysis-study.html",
  "guides/capm-to-pmp-study-bridge.html",
  "guides/capm-next-step-scenario-questions.html",
  "guides/capm-study-materials-plan.html",
  "guides/capm-mistake-review-method.html",
  "guides/capm-online-vs-test-center.html",
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
    name: "home title presents PassGrid PMP and CAPM practice questions",
    pass: /<title>PMP & CAPM Practice Questions \| PassGrid<\/title>/.test(files.home),
  },
  {
    name: "home no longer markets a broad credential catalog",
    pass: !/NCLEX-RN, USMLE, USCPA, CFA, FINRA, FE\/PE/.test(files.home),
  },
  {
    name: "home links to a dedicated blog page for articles",
    pass: /href="\.\/blog\.html"/.test(files.home) &&
      !/id="study-guides"/.test(files.home) &&
      /id="blog-guides"/.test(files.blog) &&
      /PMP and CAPM study guides/.test(files.blog) &&
      !/PMP Blog/.test(files.blog) &&
      !/CAPM Blog/.test(files.blog) &&
      !/class="pmp-hero blog-hero"/.test(files.blog),
  },
  {
    name: "home removes single-language selector",
    pass: !/id="language-select"/.test(files.home) && !/Language<\/span>/.test(files.home),
  },
  {
    name: "home sends question practice through a dedicated selection flow",
    pass: !/id="practice-workspace"/.test(files.home) &&
      /href="\.\/practice\.html"/.test(files.home) &&
      /id="practice-workspace"/.test(files.practice) &&
      /Free PMP &amp; CAPM Practice Questions/.test(files.practice) &&
      /pmp-questions\.html/.test(files.practice + files.pmpQuestions) &&
      /capm-questions\.html/.test(files.practice + files.capmQuestions),
  },
  {
    name: "PMP page contains learning-center sections",
    pass: /PMP Study Hub/.test(files.pmp) &&
      /PMBOK-based PMP learning path/.test(files.pmp) &&
      /Official exam anchors to verify first/.test(files.pmp) &&
      /PMP study guides/.test(files.pmp) &&
      (files.pmp.match(/class="domain-card learning-outline-card"/g) || []).length >= 8 &&
      /Knowledge points/.test(files.pmp) &&
      /Key focus/.test(files.pmp) &&
      /Related practice/.test(files.pmp),
  },
  {
    name: "sitemap focuses on project management pages for this phase",
    pass: /programs\/pmp\.html/.test(files.sitemap) &&
      /programs\/capm\.html/.test(files.sitemap) &&
      /editorial-policy\.html/.test(files.sitemap) &&
      !/programs\/nclex-rn\.html/.test(files.sitemap) &&
      !/programs\/usmle\.html/.test(files.sitemap),
  },
  {
    name: "retired broad-credential pages are removed",
    pass: [
      "programs/bar.html",
      "programs/cfa.html",
      "programs/cloud-architect.html",
      "programs/fe-pe.html",
      "programs/finra.html",
      "programs/nclex-rn.html",
      "programs/real-estate.html",
      "programs/uscpa.html",
      "programs/usmle.html",
      "seo-changes.html",
    ].every((path) => !existsSync(path)),
  },
  {
    name: "CAPM page is a study hub with domain weights and paths",
    pass: /CAPM Study Hub/.test(files.capm) &&
      /CAPM domain weights/.test(files.capm) &&
      /30-day and 45-day study paths/.test(files.capm) &&
      /How to use Practice and Mock Exam/.test(files.capm),
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
    name: "PMP articles are within 1000-1600 word target",
    pass: [...articleFiles, ...guideFiles].every((article) => {
      const words = visibleWordCount(article.content);
      return words >= 1000 && words <= 1600;
    }),
  },
  {
    name: "blog and PMP center link current PMP articles",
    pass: articlePaths.every((path) => files.pmp.includes(`../${path}`)) &&
      articlePaths.slice(0, 5).every((path) => files.blog.includes(`./${path}`)),
  },
  {
    name: "sitemap includes current PMP articles",
    pass: articlePaths.every((path) => files.sitemap.includes(`https://starrycesium.com/${path}`)),
  },
  {
    name: "eleven CAPM long guides exist with visuals",
    pass: capmArticleFiles.length === 11 &&
      capmArticleFiles.every((article) => /<article class="guide-article article-page">/.test(article.content)) &&
      capmArticleFiles.every((article) => /<figure class="article-visual"/.test(article.content)),
  },
  {
    name: "CAPM articles are within 1000-1600 word target",
    pass: capmArticleFiles.every((article) => {
      const words = visibleWordCount(article.content);
      return words >= 1000 && words <= 1600;
    }),
  },
  {
    name: "blog and sitemap link CAPM articles",
    pass: capmArticlePaths.every((path) => files.blog.includes(`./${path}`)) &&
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
