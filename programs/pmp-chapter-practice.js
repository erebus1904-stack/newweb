const PMP_MODULES = {
  "project-management-basics-and-exam-language": {
    title: "Project management basics and exam language",
    summary: "Start here when you are reviewing core PMP vocabulary, project context, and the project manager role.",
    chapterIds: [
      "pmbok-ch01-introduction",
      "pmbok-ch02-project-environment",
      "pmbok-ch03-project-manager-role"
    ]
  },
  "value-delivery-project-principles-and-delivery-approach-signals": {
    title: "Value delivery, project principles, and delivery approach signals",
    summary: "Use this chapter set when you are connecting value delivery, project principles, and integration decisions.",
    chapterIds: [
      "pmbok-ch04-integration-management"
    ]
  },
  "governance-scope-schedule-and-financial-performance": {
    title: "Governance, scope, schedule, and financial performance",
    summary: "Practice the scope, schedule, and cost topics that usually drive formal planning and change-control questions.",
    chapterIds: [
      "pmbok-ch05-scope-management",
      "pmbok-ch06-schedule-management",
      "pmbok-ch07-cost-management"
    ]
  },
  "stakeholders-resources-team-behavior-and-risk": {
    title: "Stakeholders, resources, team behavior, and risk",
    summary: "Use this set when your misses involve people, communication, stakeholder engagement, risk, or issue handling.",
    chapterIds: [
      "pmbok-ch09-resource-management",
      "pmbok-ch10-communications-management",
      "pmbok-ch11-risk-management",
      "pmbok-ch13-stakeholder-management"
    ]
  },
  "business-analysis-requirements-traceability-and-acceptance": {
    title: "Business analysis, requirements, traceability, and acceptance",
    summary: "Use this path for needs assessment, business case, stakeholder analysis, requirements, traceability, acceptance criteria, and solution evaluation.",
    chapterIds: [
      "pmbok-ch02-project-environment",
      "pmbok-ch04-integration-management",
      "pmbok-ch05-scope-management",
      "pmbok-ch08-quality-management",
      "pmbok-ch13-stakeholder-management"
    ]
  },
  "know-which-plan-register-artifact-or-tool-to-use": {
    title: "Plans, registers, artifacts, and tools",
    summary: "Review quality and procurement topics where the answer often depends on selecting the right artifact, plan, or control step.",
    chapterIds: [
      "pmbok-ch08-quality-management",
      "pmbok-ch12-procurement-management"
    ]
  },
  "agile-hybrid-team-flow-and-retrospectives": {
    title: "Agile, hybrid, team flow, and retrospectives",
    summary: "Use this set for agile and hybrid scenarios where the decision depends on team roles, communication flow, stakeholder alignment, or controlled change.",
    chapterIds: [
      "pmbok-ch04-integration-management",
      "pmbok-ch09-resource-management",
      "pmbok-ch10-communications-management",
      "pmbok-ch13-stakeholder-management"
    ]
  }
};

const STORAGE_KEY = "licenseAtlasLocalProgress";

function getPmpExam() {
  return examCatalog.find((exam) => exam.id === "pmp");
}

function readProgressStore() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function writeProgressStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function getExamProgress() {
  return readProgressStore().pmp || {
    answered: 0,
    correct: 0,
    answeredQuestionKeys: [],
    correctQuestionKeys: [],
    wrongQuestionKeys: [],
    selectedAnswerByKey: {},
    lastScore: null,
    lastStudiedAt: null
  };
}

function parseQuestionKey(key) {
  const [examId, index] = key.split(":");
  return { examId, index: Number(index) };
}

function questionKey(index) {
  return `pmp:${index}`;
}

function createTextNode(tagName, text, className) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  node.textContent = text;
  return node;
}

function setPressLabel(node, text) {
  node.replaceChildren(createTextNode("span", text, "press-label"));
}

function getChapterTargets(exam) {
  const practiceQuestions = exam.questions.filter((question) => question.bankType !== "exam");
  return (exam.examConfig?.chapterTargets || []).map((target) => ({
    ...target,
    count: practiceQuestions.filter((question) => question.chapterId === target.chapterId).length
  }));
}

function getChapterIndexes(exam, chapterId) {
  return exam.questions
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => question.bankType !== "exam" && question.chapterId === chapterId)
    .map(({ index }) => index);
}

function getChapterProgress(exam, chapterId) {
  const progress = getExamProgress();
  const chapterIndexes = new Set(getChapterIndexes(exam, chapterId));
  const belongsToChapter = (key) => {
    const parsed = parseQuestionKey(key);
    return parsed.examId === "pmp" && chapterIndexes.has(parsed.index);
  };
  const answeredCount = (progress.answeredQuestionKeys || []).filter(belongsToChapter).length;
  const correctCount = (progress.correctQuestionKeys || []).filter(belongsToChapter).length;
  const mistakeCount = (progress.wrongQuestionKeys || []).filter(belongsToChapter).length;

  return {
    answeredCount,
    correctCount,
    mistakeCount,
    totalCount: chapterIndexes.size,
    completion: chapterIndexes.size ? Math.min(100, Math.round((answeredCount / chapterIndexes.size) * 100)) : 0,
    accuracy: answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0
  };
}

function resetChapterProgress(exam, chapterId) {
  const chapterIndexes = new Set(getChapterIndexes(exam, chapterId));
  const outsideChapter = (key) => {
    const parsed = parseQuestionKey(key);
    return parsed.examId !== "pmp" || !chapterIndexes.has(parsed.index);
  };
  const store = readProgressStore();
  const progress = getExamProgress();
  const answeredQuestionKeys = (progress.answeredQuestionKeys || []).filter(outsideChapter);
  const correctQuestionKeys = (progress.correctQuestionKeys || []).filter(outsideChapter);
  const wrongQuestionKeys = (progress.wrongQuestionKeys || []).filter(outsideChapter);
  const selectedAnswerByKey = Object.fromEntries(
    Object.entries(progress.selectedAnswerByKey || {}).filter(([key]) => outsideChapter(key))
  );

  store.pmp = {
    ...progress,
    answered: answeredQuestionKeys.length,
    correct: correctQuestionKeys.length,
    answeredQuestionKeys,
    correctQuestionKeys,
    wrongQuestionKeys,
    selectedAnswerByKey,
    lastScore: null,
    lastStudiedAt: new Date().toISOString()
  };
  writeProgressStore(store);
  renderChapterList();
}

function buildChapterCard(exam, target) {
  const progress = getChapterProgress(exam, target.chapterId);
  const card = document.createElement("article");
  card.className = "domain-card domain-unit-card chapter-practice-card";

  const content = document.createElement("span");
  content.className = "domain-card-copy";
  content.append(
    createTextNode("span", "PMP chapter practice", "domain-card-kicker"),
    createTextNode("strong", `Chapter ${target.chapterNumber}: ${target.chapterTitle}`, "domain-card-title"),
    createTextNode("span", target.domain, "domain-card-note")
  );

  const count = document.createElement("span");
  count.className = "domain-card-count";
  count.append(
    createTextNode("strong", String(progress.totalCount || target.count || target.practiceCount)),
    createTextNode("span", "questions")
  );

  const metrics = document.createElement("dl");
  metrics.className = "domain-progress-grid";
  [
    ["Complete", `${progress.completion}%`],
    ["Answered", String(progress.answeredCount)],
    ["Accuracy", `${progress.accuracy}%`],
    ["Mistakes", String(progress.mistakeCount)]
  ].forEach(([label, value]) => {
    const item = document.createElement("div");
    item.append(createTextNode("dt", label), createTextNode("dd", value));
    metrics.appendChild(item);
  });

  const actions = document.createElement("div");
  actions.className = "domain-card-actions";

  const practiceLink = document.createElement("a");
  practiceLink.className = "primary-button";
  practiceLink.href = `../drill.html?exam=pmp&chapter=${encodeURIComponent(target.chapterId)}`;
  setPressLabel(practiceLink, "Practice this chapter");

  const reviewLink = document.createElement("a");
  reviewLink.className = `ghost-button${progress.mistakeCount ? "" : " is-disabled"}`;
  reviewLink.href = progress.mistakeCount
    ? `../drill.html?exam=pmp&chapter=${encodeURIComponent(target.chapterId)}&mode=mistakes`
    : "#";
  reviewLink.setAttribute("aria-disabled", String(progress.mistakeCount === 0));
  if (!progress.mistakeCount) reviewLink.addEventListener("click", (event) => event.preventDefault());
  setPressLabel(reviewLink, "Review mistakes");

  const resetButton = document.createElement("button");
  resetButton.className = "text-button domain-reset-button";
  resetButton.type = "button";
  setPressLabel(resetButton, "Reset chapter progress");
  resetButton.addEventListener("click", () => resetChapterProgress(exam, target.chapterId));

  actions.append(practiceLink, reviewLink, resetButton);
  card.append(content, count, metrics, actions);
  return card;
}

function getCurrentModule() {
  const params = new URLSearchParams(window.location.search);
  return PMP_MODULES[params.get("module")] || PMP_MODULES["project-management-basics-and-exam-language"];
}

function renderChapterList() {
  const exam = getPmpExam();
  const module = getCurrentModule();
  const targets = getChapterTargets(exam).filter((target) => module.chapterIds.includes(target.chapterId));
  const title = document.querySelector("#chapter-practice-title");
  const summary = document.querySelector("#chapter-practice-summary");
  const list = document.querySelector("#chapter-practice-list");

  document.title = `${module.title} | PMP Chapter Practice | PassGrid`;
  title.textContent = module.title;
  summary.textContent = `${module.summary} Choose one chapter below; progress and mistakes are stored locally in this browser.`;
  list.replaceChildren(...targets.map((target) => buildChapterCard(exam, target)));
}

renderChapterList();
