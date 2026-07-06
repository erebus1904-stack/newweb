const uiText = {
  en: {
    htmlLang: "en",
    heroEyebrow: "Practice-first project management training",
    heroTitle: "Short practice for PMP and CAPM readiness",
    brandSubtitle: "Project management study library",
    navAll: "PMP and CAPM",
    navAllSmall: "Project management practice only",
    navProject: "Project management",
    navProjectSmall: "PMP and CAPM",
    todayGoal: "Today",
    languageLabel: "Language",
    startMock: "Choose practice track",
    searchLabel: "Search",
    countryLabel: "Country",
    regionLabel: "Area",
    typeLabel: "Category",
    studyMode: "Practice",
    examMode: "Practice",
    sourceLabel: "Source",
    coverageLabel: "Coverage",
    updatedLabel: "Updated",
    restart: "Restart",
    skip: "Skip",
    next: "Next",
    submit: "Finish practice",
    reportTitle: "Session results",
    scoreLabel: "Score",
    correctLabel: "Correct",
    adviceLabel: "Next action",
    doneLabel: "Done",
    accuracyLabel: "Accuracy",
    weakLabel: "Weak area",
    etaLabel: "ETA",
    nextStep: "Next steps",
    catalogTitle: "PMP and CAPM question banks",
    all: "All",
    programs: "question banks",
    source: "Source",
    coverage: "Covers",
    questions: "questions",
    updated: "updated",
    dailyStudy: "Study explanations as you answer",
    dailyDrill: "Finish one practice set and review missed questions",
    progress: (index, total) => `${index} / ${total}`,
    hiddenExplanation: "Practice shows explanations after each answer.",
    advicePass: "Review missed items",
    advicePractice: "Rebuild weak domains",
    adviceStudy: "Return to Practice mode",
    perfectReport: "You answered every practice question correctly. Review the domain mix before starting another session.",
    wrongReport: (tags) => `Review these patterns first: ${tags}. Switch to Practice mode to read each explanation.`,
    planWeak: (weak) => `Current weak area: ${weak}`,
    planPractice: (topic, count) => `Study ${count} questions and read each explanation`,
    planDrill: "After practice, review missed explanations before retesting",
    planStudy: "Practice mode shows the explanation immediately after each answer",
    localTitle: "Study record",
    localSubtitle: "Stored only on this device",
    localAnswered: "Answered",
    localAccuracy: "Accuracy",
    localWrong: "Mistakes",
    localScore: "Last score",
    localNone: "None",
    localClear: "Reset browser progress",
    reviewMistakes: "Review mistakes",
    clearMistakes: "Clear mistakes",
    noMistakes: "No missed questions for this bank yet.",
    noMistakesDetail: "Missed questions will appear here for focused review.",
    practiceAction: "Use this bank",
    detailsAction: "Study center",
    weakNone: "None",
    etaStart: "Start to estimate",
    etaDays: (days) => `${days} days`
  }
};

const programText = {
  en: {
    pmp: {
      title: "PMP knowledge-point practice",
      subtitle: "For experienced project leaders",
      badge: "PMP",
    description: "Practice 1069 PMP domain and chapter questions with immediate explanations and local mistake review.",
      coverage: ["People", "Process", "Business environment", "Agile", "Hybrid delivery"]
    },
    capm: {
      title: "CAPM knowledge-point practice",
      subtitle: "For project management beginners",
      badge: "CAPM",
      description: "Practice 1000 CAPM foundation questions with explanations, saved misses, and structured guide review.",
      coverage: ["Fundamentals", "Predictive", "Agile", "Business analysis"]
    }
  }
};
let currentLanguage = "en";
const visibleExamCatalog = examCatalog.filter((exam) => ["pmp", "capm"].includes(exam.id));
const pmpExam = visibleExamCatalog.find((exam) => exam.id === "pmp") || visibleExamCatalog[0] || examCatalog[0];
const defaultExam = visibleExamCatalog.find((exam) => exam.id === "capm") || pmpExam;
const pageExamId = document.body.dataset.exam || "";
const requestedExamId = new URLSearchParams(window.location.search).get("exam") || pageExamId;
const requestedDomain = new URLSearchParams(window.location.search).get("domain");
const requestedChapter = new URLSearchParams(window.location.search).get("chapter");
const requestedMode = new URLSearchParams(window.location.search).get("mode");
let currentExamId = visibleExamCatalog.some((exam) => exam.id === requestedExamId) ? requestedExamId : defaultExam.id;
let questionIndex = 0;
let answered = false;
const mode = "study";
let drillAnswers = [];
let mistakeMode = false;
let selectedDomain = null;
let selectedChapter = null;
let currentChoiceOrder = [];
const storageKey = "licenseAtlasLocalProgress";

const elements = {
  answers: document.querySelector("#answers"),
  explanation: document.querySelector("#explanation"),
  previousButton: document.querySelector("#previous-button"),
  nextButton: document.querySelector("#next-button"),
  skipButton: document.querySelector("#skip-button"),
  resetButton: document.querySelector("#reset-button"),
  startDrillButton: document.querySelector("#start-exam-button"),
  trackRegion: document.querySelector("#track-region"),
  trackTitle: document.querySelector("#track-title"),
  catalog: document.querySelector("#catalog-grid"),
  resultCount: document.querySelector("#result-count"),
  modeHelp: document.querySelector("#mode-help"),
  language: document.querySelector("#language-select"),
  domainOutline: document.querySelector("#domain-outline"),
  domainList: document.querySelector("#domain-list"),
  domainOutlineCount: document.querySelector("#domain-outline-count"),
  drillBreadcrumb: document.querySelector(".drill-breadcrumb"),
  breadcrumbExamLink: document.querySelector("#breadcrumb-exam-link"),
  breadcrumbDomain: document.querySelector("#breadcrumb-domain"),
  sourceStrip: document.querySelector(".source-strip"),
  questionCard: document.querySelector(".question-card"),
  clearLocalButton: document.querySelector("#clear-local-button"),
  reviewMistakesButton: document.querySelector("#review-mistakes-button"),
  clearMistakesButton: document.querySelector("#clear-mistakes-button"),
  bankCompletion: document.querySelector("#bank-completion"),
  bankAnswered: document.querySelector("#bank-answered"),
  bankAccuracy: document.querySelector("#bank-accuracy"),
  bankMistakes: document.querySelector("#bank-mistakes"),
  outlineResetButton: document.querySelector("#outline-reset-progress"),
  outlineReviewMistakesButton: document.querySelector("#outline-review-mistakes")
};

function t(key, ...args) {
  const value = uiText[currentLanguage][key] || uiText.en[key] || key;
  return typeof value === "function" ? value(...args) : value;
}

function p(exam) {
  return programText[currentLanguage]?.[exam.id] || programText.en[exam.id] || exam;
}

function getCurrentExam() {
  return visibleExamCatalog.find((exam) => exam.id === currentExamId) || pmpExam;
}

function isPracticeQuestion(question) {
  return question.bankType !== "exam";
}

function getPracticeQuestions(exam = getCurrentExam()) {
  return exam.questions.filter(isPracticeQuestion);
}

function getPracticeQuestionCount(exam = getCurrentExam()) {
  return exam.bankConfig?.practiceQuestionCount
    || exam.examConfig?.practiceQuestionCount
    || getPracticeQuestions(exam).length;
}

function getExamQuestionCount(exam = getCurrentExam()) {
  return exam.bankConfig?.examQuestionCount || 0;
}

function getPracticeOutlineType(exam = getCurrentExam()) {
  return exam.bankConfig?.practiceOutlineType || "domains";
}

function getDomainTargets(exam = getCurrentExam()) {
  const practiceQuestions = getPracticeQuestions(exam);
  return (exam.examConfig?.domainTargets || []).map((target) => ({
    name: target.domain,
    weight: target.weight,
    count: practiceQuestions.filter((question) => question.domain === target.domain).length
  }));
}

function getChapterTargets(exam = getCurrentExam()) {
  const practiceQuestions = getPracticeQuestions(exam);
  return (exam.examConfig?.chapterTargets || []).map((target) => ({
    ...target,
    count: practiceQuestions.filter((question) => question.chapterId === target.chapterId).length
  }));
}

function renderDrillBreadcrumb(exam) {
  if (!elements.drillBreadcrumb) return;
  if (!selectedDomain && !selectedChapter && !mistakeMode) {
    elements.drillBreadcrumb.hidden = true;
    return;
  }
  const examLabel = exam.id.toUpperCase();
  if (elements.breadcrumbExamLink) {
    elements.breadcrumbExamLink.textContent = examLabel;
    elements.breadcrumbExamLink.href = `./${exam.id}-questions.html`;
  }
  if (elements.breadcrumbDomain) {
    const chapter = getChapterTargets(exam).find((target) => target.chapterId === selectedChapter);
    elements.breadcrumbDomain.textContent = mistakeMode
      ? "Mistake review"
      : chapter?.chapterTitle || selectedDomain;
  }
  elements.drillBreadcrumb.hidden = false;
}

function isValidDomain(exam, domainName) {
  return Boolean(domainName) && getDomainTargets(exam).some((domain) => domain.name === domainName);
}

function isValidChapter(exam, chapterId) {
  return Boolean(chapterId) && getChapterTargets(exam).some((chapter) => chapter.chapterId === chapterId);
}

if (isValidDomain(getCurrentExam(), requestedDomain)) {
  selectedDomain = requestedDomain;
}

if (isValidChapter(getCurrentExam(), requestedChapter)) {
  selectedChapter = requestedChapter;
}

if (requestedMode === "mistakes") {
  mistakeMode = true;
}

function listSeparator() {
  return ", ";
}

function readProgressStore() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function writeProgressStore(store) {
  localStorage.setItem(storageKey, JSON.stringify(store));
}

function getExamProgress(examId = currentExamId) {
  return readProgressStore()[examId] || {
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

function questionKey(exam, index) {
  return `${exam.id}:${index}`;
}

function getStoredAnswer(exam, originalIndex) {
  if (drillAnswers[originalIndex] !== undefined) return drillAnswers[originalIndex];
  const selectedAnswerByKey = getExamProgress(exam.id).selectedAnswerByKey || {};
  return selectedAnswerByKey[questionKey(exam, originalIndex)];
}

function parseQuestionKey(key) {
  const [examId, index] = key.split(":");
  return { examId, index: Number(index) };
}

function saveExamProgress(examId, updater) {
  const store = readProgressStore();
  store[examId] = updater(getExamProgress(examId));
  writeProgressStore(store);
  if (examId === currentExamId) renderLearningStats(getCurrentExam());
  renderLocalProgress();
}

function replaceChildren(node, children) {
  node.replaceChildren(...children);
}

function createTextNode(tagName, text, className) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  node.textContent = text;
  return node;
}

function setPressLabel(node, text) {
  if (!node) return;
  node.replaceChildren(createTextNode("span", text, "press-label"));
}

function hydratePressLabels() {
  document.querySelectorAll(".primary-button, .ghost-button, .text-button, .header-cta").forEach((node) => {
    if (node.children.length === 1 && node.firstElementChild?.classList.contains("press-label")) return;
    setPressLabel(node, node.textContent.trim());
  });
}

function shuffleIndexes(length) {
  const indexes = Array.from({ length }, (_, index) => index);
  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }
  return indexes;
}

function getFilteredExams() {
  return ["capm", "pmp"]
    .map((id) => visibleExamCatalog.find((exam) => exam.id === id))
    .filter(Boolean);
}

function applyStaticTranslations() {
  document.documentElement.lang = t("htmlLang");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  const dailyGoal = document.querySelector("#daily-goal");
  if (dailyGoal) dailyGoal.textContent = t("dailyStudy");
}

function renderCatalog() {
  if (!elements.catalog || !elements.resultCount) return;
  const exams = getFilteredExams();
  const totalQuestions = exams.reduce((sum, exam) => sum + getPracticeQuestionCount(exam), 0);
  elements.resultCount.textContent = `Prepare for PMP and CAPM with ${totalQuestions.toLocaleString("en-US")} free practice questions and detailed explanations.`;
  const cards = exams.map((exam) => {
    const text = p(exam);
    const practiceCount = getPracticeQuestionCount(exam);
    const card = document.createElement("a");
    card.className = `exam-card ${requestedExamId && exam.id === currentExamId ? "selected" : ""}`;
    card.dataset.examId = exam.id;
    card.href = `./${exam.id}-questions.html`;

    const meta = document.createElement("div");
    meta.className = "exam-card-meta";
    meta.append(
      createTextNode("span", "FREE", `free-badge ${exam.id === "capm" ? "capm-free" : "pmp-free"}`),
      createTextNode("span", `${practiceCount.toLocaleString("en-US")} practice questions`, "question-count-label")
    );

    const title = exam.id === "capm" ? "CAPM Practice Questions" : "PMP Practice Questions";
    const description = exam.id === "capm"
      ? "Certified Associate in Project Management practice covering project management fundamentals, predictive methods, agile, and business analysis."
      : "Project Management Professional practice organized by PMBOK chapter with scenario-based explanations.";

    card.append(
      meta,
      createTextNode("h3", title),
      createTextNode("p", description)
    );
    return card;
  });

  replaceChildren(elements.catalog, cards);
}

function selectExam(examId, shouldScroll = false) {
  window.location.href = `./${examId}-questions.html`;
}

function getActiveQuestions(exam = getCurrentExam()) {
  const filterEntries = (entries) => entries.filter(({ question }) => {
    if (!isPracticeQuestion(question)) return false;
    if (selectedDomain && question.domain !== selectedDomain) return false;
    if (selectedChapter && question.chapterId !== selectedChapter) return false;
    return true;
  });

  if (!mistakeMode) {
    return filterEntries(exam.questions.map((question, index) => ({ question, index })));
  }

  const wrongIndexes = getExamProgress(exam.id).wrongQuestionKeys
    .map(parseQuestionKey)
    .filter((entry) => entry.examId === exam.id && Number.isInteger(entry.index))
    .map((entry) => entry.index)
    .filter((index) => exam.questions[index]);
  return filterEntries([...new Set(wrongIndexes)].map((index) => ({ question: exam.questions[index], index })));
}

function getLocalWeakArea(exam, progress) {
  if (!progress.wrongQuestionKeys.length) return t("weakNone");
  const tag = progress.wrongQuestionKeys
    .map((key) => Number(key.split(":").pop()))
    .map((index) => exam.questions[index]?.tag)
    .find(Boolean);
  return tag || t("weakNone");
}

function renderLearningStats(exam) {
  if (!document.querySelector("#readiness")) return;
  const progress = getExamProgress(exam.id);
  const accuracy = progress.answered ? Math.round((progress.correct / progress.answered) * 100) : 0;
  const volumeBonus = Math.min(20, Math.floor(progress.answered / 3) * 5);
  const readiness = progress.answered ? Math.min(99, Math.round(accuracy * 0.8 + volumeBonus)) : 0;
  const days = Math.max(1, Math.ceil((30 - Math.min(progress.answered, 30)) / 5));
  document.querySelector("#readiness").textContent = `${readiness}%`;
  document.querySelector("#questions-done").textContent = progress.answered;
  document.querySelector("#accuracy").textContent = `${accuracy}%`;
  document.querySelector("#weak-area").textContent = getLocalWeakArea(exam, progress);
  document.querySelector("#eta").textContent = progress.answered ? t("etaDays", days) : t("etaStart");
  const ring = document.querySelector(".ring");
  if (ring) ring.style.background = `conic-gradient(var(--green) ${readiness}%, #e2e8df 0)`;
}

function renderLocalProgress() {
  if (!document.querySelector("#local-answered")) return;
  const progress = getExamProgress();
  const accuracy = progress.answered ? Math.round((progress.correct / progress.answered) * 100) : 0;
  const wrongCount = progress.wrongQuestionKeys.length;
  document.querySelector("#local-answered").textContent = progress.answered;
  document.querySelector("#local-accuracy").textContent = `${accuracy}%`;
  document.querySelector("#local-wrong").textContent = wrongCount;
  document.querySelector("#local-score").textContent = progress.lastScore === null ? t("localNone") : `${progress.lastScore}%`;
  document.querySelector("#local-title").textContent = t("localTitle");
  document.querySelector("#local-subtitle").textContent = t("localSubtitle");
  document.querySelector("#local-answered-label").textContent = t("localAnswered");
  document.querySelector("#local-accuracy-label").textContent = t("localAccuracy");
  document.querySelector("#local-wrong-label").textContent = t("localWrong");
  document.querySelector("#local-score-label").textContent = t("localScore");
  setPressLabel(document.querySelector("#clear-local-button"), t("localClear"));
  setPressLabel(elements.reviewMistakesButton, t("reviewMistakes"));
  elements.reviewMistakesButton.disabled = wrongCount === 0;
  setPressLabel(elements.clearMistakesButton, t("clearMistakes"));
  elements.clearMistakesButton.disabled = wrongCount === 0;
}

function getModeHelp(exam) {
  const practiceCount = getPracticeQuestionCount(exam);
  return `${p(exam).badge}: practice ${practiceCount} questions in short knowledge-point sessions. Explanations appear immediately after each answer.`;
}

function renderStudyPlan(exam) {
  const studyPlan = document.querySelector("#study-plan");
  if (!studyPlan) return;
  const practiceCount = getPracticeQuestionCount(exam);
  const plan = [
    t("planWeak", getLocalWeakArea(exam, getExamProgress(exam.id))),
    `Work through the ${practiceCount}-question bank in short sessions.`,
    "Read each explanation before moving to the next knowledge point."
  ];
  replaceChildren(studyPlan, plan.map((item) => createTextNode("li", item)));
}

function renderBankProgress(exam) {
  if (!elements.bankCompletion) return;
  const progress = getExamProgress(exam.id);
  const totalQuestions = exam.examConfig?.practiceQuestionCount || exam.questions.length;
  const answeredCount = progress.answered || 0;
  const accuracy = answeredCount ? Math.round((progress.correct / answeredCount) * 100) : 0;
  const completion = totalQuestions ? Math.min(100, Math.round((answeredCount / totalQuestions) * 100)) : 0;
  const mistakeCount = (progress.wrongQuestionKeys || [])
    .map(parseQuestionKey)
    .filter((entry) => entry.examId === exam.id && Number.isInteger(entry.index))
    .length;

  elements.bankCompletion.textContent = `${completion}%`;
  elements.bankAnswered.textContent = answeredCount.toLocaleString("en-US");
  elements.bankAccuracy.textContent = `${accuracy}%`;
  elements.bankMistakes.textContent = mistakeCount.toLocaleString("en-US");
  if (elements.outlineReviewMistakesButton) elements.outlineReviewMistakesButton.disabled = mistakeCount === 0;
}

function getDomainProgress(exam, domainName) {
  const progress = getExamProgress(exam.id);
  const domainIndexes = new Set(exam.questions
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => question.domain === domainName)
    .map(({ index }) => index));
  const belongsToDomain = (key) => {
    const parsed = parseQuestionKey(key);
    return parsed.examId === exam.id && domainIndexes.has(parsed.index);
  };
  const answeredCount = (progress.answeredQuestionKeys || []).filter(belongsToDomain).length;
  const correctCount = (progress.correctQuestionKeys || []).filter(belongsToDomain).length;
  const mistakeCount = (progress.wrongQuestionKeys || []).filter(belongsToDomain).length;
  const totalCount = domainIndexes.size;

  return {
    answeredCount,
    correctCount,
    mistakeCount,
    completion: totalCount ? Math.min(100, Math.round((answeredCount / totalCount) * 100)) : 0,
    accuracy: answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0
  };
}

function resetDomainProgress(domainName) {
  const exam = getCurrentExam();
  const domainIndexes = new Set(exam.questions
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => question.domain === domainName)
    .map(({ index }) => index));
  const outsideDomain = (key) => {
    const parsed = parseQuestionKey(key);
    return parsed.examId !== exam.id || !domainIndexes.has(parsed.index);
  };

  saveExamProgress(exam.id, (progress) => {
    const answeredQuestionKeys = (progress.answeredQuestionKeys || []).filter(outsideDomain);
    const correctQuestionKeys = (progress.correctQuestionKeys || []).filter(outsideDomain);
    const selectedAnswerByKey = Object.fromEntries(
      Object.entries(progress.selectedAnswerByKey || {}).filter(([key]) => outsideDomain(key))
    );
    return {
      ...progress,
      answered: answeredQuestionKeys.length,
      correct: correctQuestionKeys.length,
      answeredQuestionKeys,
      correctQuestionKeys,
      wrongQuestionKeys: (progress.wrongQuestionKeys || []).filter(outsideDomain),
      selectedAnswerByKey,
      lastScore: null,
      lastStudiedAt: new Date().toISOString()
    };
  });
  renderDomainOutline(exam);
}

function reviewDomainMistakes(domainName) {
  const exam = getCurrentExam();
  const domainProgress = getDomainProgress(exam, domainName);
  if (!domainProgress.mistakeCount) return;
  const params = new URLSearchParams({ exam: exam.id, domain: domainName, mode: "mistakes" });
  window.location.href = `./drill.html?${params.toString()}`;
}

function selectChapter(chapterId) {
  const exam = getCurrentExam();
  if (!isValidChapter(exam, chapterId)) return;
  const params = new URLSearchParams({ exam: exam.id, chapter: chapterId });
  window.location.href = `./drill.html?${params.toString()}`;
}

function renderGuideVisibility() {
  const pmpGuides = document.querySelector(".pmp-guide-section");
  const capmGuides = document.querySelector(".capm-guide-section");
  if (pmpGuides) pmpGuides.hidden = false;
  if (capmGuides) capmGuides.hidden = false;
}

function renderDomainOutline(exam) {
  if (!elements.domainList || !elements.domainOutline) return;
  const domains = getDomainTargets(exam);
  const text = p(exam);
  elements.domainOutline.hidden = false;
  if (elements.domainOutlineCount) {
    elements.domainOutlineCount.textContent = exam.id === "pmp"
    ? "2026 official PMP exam outline: 1069 practice questions across People 33%, Process 41%, and Business Environment 26%."
      : `${text.badge}: ${domains.reduce((sum, domain) => sum + domain.count, 0)} practice questions across ${domains.length} domains.`;
  }

  replaceChildren(elements.domainList, domains.map((domain) => {
    const card = document.createElement("article");
    card.className = `domain-card domain-unit-card ${selectedDomain === domain.name ? "selected" : ""}`;
    card.dataset.unit = domain.name;
    const progress = getDomainProgress(exam, domain.name);

    const content = document.createElement("span");
    content.className = "domain-card-copy";
    content.append(
      createTextNode("span", `${text.badge} domain`, "domain-card-kicker"),
      createTextNode("strong", domain.name, "domain-card-title"),
      createTextNode("span", exam.id === "pmp" ? `${domain.weight}% of the 2026 official PMP exam outline` : `${domain.weight}% of this exam outline`, "domain-card-note")
    );

    const count = document.createElement("span");
    count.className = "domain-card-count";
    count.append(
      createTextNode("strong", String(domain.count)),
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
    const practiceButton = document.createElement("button");
    practiceButton.className = "primary-button";
    practiceButton.type = "button";
    setPressLabel(practiceButton, "Practice this unit");
    practiceButton.addEventListener("click", () => selectDomain(domain.name));
    const reviewButton = document.createElement("button");
    reviewButton.className = "ghost-button";
    reviewButton.type = "button";
    reviewButton.disabled = progress.mistakeCount === 0;
    setPressLabel(reviewButton, "Review mistakes");
    reviewButton.addEventListener("click", () => reviewDomainMistakes(domain.name));
    const resetButton = document.createElement("button");
    resetButton.className = "text-button domain-reset-button";
    resetButton.type = "button";
    setPressLabel(resetButton, "Reset unit progress");
    resetButton.addEventListener("click", () => resetDomainProgress(domain.name));
    actions.append(practiceButton, reviewButton, resetButton);

    card.append(content, count, metrics, actions);
    return card;
  }));
}

function selectDomain(domainName) {
  const exam = getCurrentExam();
  if (!isValidDomain(exam, domainName)) return;
  const params = new URLSearchParams({ exam: exam.id, domain: domainName });
  window.location.href = `./drill.html?${params.toString()}`;
}

function renderExam() {
  const exam = getCurrentExam();
  const text = p(exam);
  if (elements.trackRegion) elements.trackRegion.textContent = `${exam.country} / ${exam.region}`;
  if (elements.trackTitle) elements.trackTitle.textContent = text.title;
  const sourceName = document.querySelector("#source-name");
  const sourceCoverage = document.querySelector("#source-coverage");
  const sourceUpdated = document.querySelector("#source-updated");
  if (sourceName) sourceName.textContent = exam.source;
  if (sourceCoverage) sourceCoverage.textContent = text.coverage.join(listSeparator());
  if (sourceUpdated) sourceUpdated.textContent = exam.updated;
  if (elements.modeHelp) elements.modeHelp.textContent = getModeHelp(exam);
  const dailyGoal = document.querySelector("#daily-goal");
  if (dailyGoal) dailyGoal.textContent = t("dailyStudy");
  renderLearningStats(exam);
  renderStudyPlan(exam);
  renderLocalProgress();
  renderBankProgress(exam);
  renderGuideVisibility();
  renderDomainOutline(exam);
  renderQuestion();
}

function renderQuestion() {
  if (!elements.questionCard || !elements.answers || !elements.explanation) return;
  answered = false;
  const exam = getCurrentExam();
  if (!selectedDomain && !selectedChapter && !mistakeMode) {
    renderDrillBreadcrumb(exam);
    if (elements.sourceStrip) elements.sourceStrip.hidden = true;
    if (elements.questionCard) elements.questionCard.hidden = true;
    return;
  }
  renderDrillBreadcrumb(exam);
  if (elements.sourceStrip) elements.sourceStrip.hidden = false;
  if (elements.questionCard) elements.questionCard.hidden = false;
  const activeQuestions = getActiveQuestions(exam);
  if (questionIndex >= activeQuestions.length) questionIndex = 0;
  if (!activeQuestions.length) {
    document.querySelector("#question-tag").textContent = t("reviewMistakes");
    document.querySelector("#question-progress").textContent = "0 / 0";
    document.querySelector("#question-text").textContent = t("noMistakes");
    elements.explanation.textContent = t("noMistakesDetail");
    elements.explanation.classList.remove("hidden");
    elements.answers.replaceChildren();
    if (elements.previousButton) elements.previousButton.disabled = true;
    if (elements.skipButton) elements.skipButton.hidden = true;
    elements.nextButton.disabled = true;
    setPressLabel(elements.nextButton, "Next \u2192");
    return;
  }
  elements.nextButton.disabled = false;
  if (elements.previousButton) elements.previousButton.disabled = questionIndex === 0;
  const { question, index: originalIndex } = activeQuestions[questionIndex];
  document.querySelector("#question-tag").textContent = question.tag;
  document.querySelector("#question-progress").textContent = t("progress", questionIndex + 1, activeQuestions.length);
  document.querySelector("#question-text").textContent = question.text;
  elements.explanation.classList.add("hidden");
  elements.explanation.textContent = "";
  elements.answers.replaceChildren();
  if (elements.skipButton) elements.skipButton.hidden = false;
  setPressLabel(elements.nextButton, "Next \u2192");
  hydratePressLabels();
  currentChoiceOrder = question.choices.map((_, index) => index);
  currentChoiceOrder.forEach((choiceIndex, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.append(
      createTextNode("span", String.fromCharCode(65 + index), "answer-key"),
      createTextNode("span", question.choices[choiceIndex], "answer-text")
    );
    button.addEventListener("click", () => selectAnswer(choiceIndex));
    elements.answers.appendChild(button);
  });
  const storedAnswer = getStoredAnswer(exam, originalIndex);
  if (storedAnswer !== undefined) {
    showAnsweredQuestion(question, storedAnswer);
  }
}

function showAnsweredQuestion(question, selectedIndex) {
  answered = true;
  const isCorrect = selectedIndex === question.correct;
  Array.from(elements.answers.children).forEach((button, buttonIndex) => {
    const originalChoiceIndex = currentChoiceOrder[buttonIndex];
    button.disabled = true;
    if (originalChoiceIndex === question.correct) button.classList.add("correct");
    if (originalChoiceIndex === selectedIndex) button.classList.add("selected-answer");
    if (originalChoiceIndex === selectedIndex && !isCorrect) button.classList.add("wrong");
  });
  elements.explanation.textContent = question.explanation;
  elements.explanation.classList.remove("hidden");
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  const exam = getCurrentExam();
  const activeQuestion = getActiveQuestions(exam)[questionIndex];
  if (!activeQuestion) return;
  const { question, index: originalIndex } = activeQuestion;
  const isCorrect = index === question.correct;
  drillAnswers[originalIndex] = index;
  saveExamProgress(exam.id, (progress) => {
    const wrongSet = new Set(progress.wrongQuestionKeys || []);
    const answeredSet = new Set(progress.answeredQuestionKeys || []);
    const correctSet = new Set(progress.correctQuestionKeys || []);
    const key = questionKey(exam, originalIndex);
    const wasAnswered = answeredSet.has(key);
    const selectedAnswerByKey = {
      ...(progress.selectedAnswerByKey || {}),
      [key]: index
    };
    answeredSet.add(key);
    if (isCorrect) wrongSet.delete(key);
    else wrongSet.add(key);
    if (isCorrect) correctSet.add(key);
    else correctSet.delete(key);
    return {
      ...progress,
      answered: wasAnswered ? progress.answered : progress.answered + 1,
      correct: wasAnswered ? correctSet.size : progress.correct + (isCorrect ? 1 : 0),
      answeredQuestionKeys: Array.from(answeredSet),
      correctQuestionKeys: Array.from(correctSet),
      wrongQuestionKeys: Array.from(wrongSet),
      selectedAnswerByKey,
      lastStudiedAt: new Date().toISOString()
    };
  });
  showAnsweredQuestion(question, index);
}

function advanceQuestion() {
  const exam = getCurrentExam();
  const activeQuestions = getActiveQuestions(exam);
  if (!activeQuestions.length) return;
  questionIndex = (questionIndex + 1) % activeQuestions.length;
  renderQuestion();
}

function previousQuestion() {
  const exam = getCurrentExam();
  const activeQuestions = getActiveQuestions(exam);
  if (!activeQuestions.length || questionIndex === 0) return;
  questionIndex -= 1;
  renderQuestion();
}

function resetSession() {
  questionIndex = 0;
  drillAnswers = [];
  answered = false;
  renderQuestion();
}

function refreshForFilters() {
  const matches = getFilteredExams();
  if (matches[0] && !matches.some((exam) => exam.id === currentExamId)) {
    currentExamId = matches[0].id;
    questionIndex = 0;
  }
  renderExam();
  renderCatalog();
}

function setLanguage(language) {
  currentLanguage = language;
  applyStaticTranslations();
  refreshForFilters();
}

function clearCurrentLocalProgress() {
  const store = readProgressStore();
  delete store[currentExamId];
  writeProgressStore(store);
  mistakeMode = false;
  renderLearningStats(getCurrentExam());
  renderStudyPlan(getCurrentExam());
  renderLocalProgress();
  renderBankProgress(getCurrentExam());
  resetSession();
}

function reviewMistakes() {
  if (!getExamProgress().wrongQuestionKeys.length) return;
  mistakeMode = true;
  selectedDomain = null;
  selectedChapter = null;
  questionIndex = 0;
  drillAnswers = [];
  const url = new URL(window.location.href);
  url.searchParams.set("exam", currentExamId);
  url.searchParams.delete("domain");
  url.searchParams.delete("chapter");
  url.hash = "practice-workspace";
  window.history.replaceState(null, "", url);
  renderExam();
  elements.questionCard?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function clearCurrentMistakes() {
  saveExamProgress(currentExamId, (progress) => ({
    ...progress,
    wrongQuestionKeys: []
  }));
  mistakeMode = false;
  renderBankProgress(getCurrentExam());
  resetSession();
}

function reviewOutlineMistakes() {
  const progress = getExamProgress(currentExamId);
  if (!progress.wrongQuestionKeys.length) return;
  const params = new URLSearchParams({ exam: currentExamId, mode: "mistakes" });
  window.location.href = `./drill.html?${params.toString()}`;
}

if (elements.language) {
  elements.language.addEventListener("change", () => setLanguage(elements.language.value));
}
if (elements.startDrillButton) {
  elements.startDrillButton.addEventListener("click", () => {
    document.querySelector("#bank-selector-title")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
if (elements.previousButton) elements.previousButton.addEventListener("click", previousQuestion);
if (elements.nextButton) elements.nextButton.addEventListener("click", advanceQuestion);
if (elements.skipButton) elements.skipButton.addEventListener("click", advanceQuestion);
if (elements.resetButton) elements.resetButton.addEventListener("click", resetSession);
if (elements.clearLocalButton) elements.clearLocalButton.addEventListener("click", clearCurrentLocalProgress);
if (elements.reviewMistakesButton) elements.reviewMistakesButton.addEventListener("click", reviewMistakes);
if (elements.clearMistakesButton) elements.clearMistakesButton.addEventListener("click", clearCurrentMistakes);
if (elements.outlineResetButton) elements.outlineResetButton.addEventListener("click", clearCurrentLocalProgress);
if (elements.outlineReviewMistakesButton) elements.outlineReviewMistakesButton.addEventListener("click", reviewOutlineMistakes);

hydratePressLabels();
applyStaticTranslations();
renderExam();
renderCatalog();

