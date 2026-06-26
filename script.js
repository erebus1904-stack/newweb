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
      description: "Practice 250 PMP scenario questions with immediate explanations and local mistake review.",
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
const requestedExamId = new URLSearchParams(window.location.search).get("exam");
let currentExamId = visibleExamCatalog.some((exam) => exam.id === requestedExamId) ? requestedExamId : defaultExam.id;
let questionIndex = 0;
let answered = false;
const mode = "study";
let drillAnswers = [];
let mistakeMode = false;
let currentChoiceOrder = [];
const storageKey = "licenseAtlasLocalProgress";

const elements = {
  answers: document.querySelector("#answers"),
  explanation: document.querySelector("#explanation"),
  nextButton: document.querySelector("#next-button"),
  skipButton: document.querySelector("#skip-button"),
  resetButton: document.querySelector("#reset-button"),
  startDrillButton: document.querySelector("#start-exam-button"),
  catalog: document.querySelector("#catalog-grid"),
  resultCount: document.querySelector("#result-count"),
  modeHelp: document.querySelector("#mode-help"),
  language: document.querySelector("#language-select"),
  clearLocalButton: document.querySelector("#clear-local-button"),
  reviewMistakesButton: document.querySelector("#review-mistakes-button"),
  clearMistakesButton: document.querySelector("#clear-mistakes-button")
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
    wrongQuestionKeys: [],
    lastScore: null,
    lastStudiedAt: null
  };
}

function questionKey(exam, index) {
  return `${exam.id}:${index}`;
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
  return visibleExamCatalog;
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
  const exams = getFilteredExams();
  elements.resultCount.textContent = `${exams.length} practice tracks available`;
  replaceChildren(elements.catalog, exams.map((exam) => {
    const text = p(exam);
    const examConfig = exam.examConfig || {};
    const card = document.createElement("article");
    card.className = `exam-card ${exam.id === currentExamId ? "selected" : ""}`;
    card.dataset.examId = exam.id;
    card.append(
      createTextNode("span", text.badge, "card-badge"),
      createTextNode("h3", text.title),
      createTextNode("p", text.description)
    );

    const list = document.createElement("dl");
    list.className = "cred-list";
    [
      [t("source"), exam.source],
      [t("coverage"), text.coverage.slice(0, 3).join(listSeparator())]
    ].forEach(([label, value]) => {
      const row = document.createElement("div");
      row.append(createTextNode("dt", label), createTextNode("dd", value));
      list.appendChild(row);
    });

    const footer = document.createElement("div");
    footer.className = "card-footer";
    footer.append(
      createTextNode("span", `${examConfig.practiceQuestionCount || exam.questionCount} practice questions`),
      createTextNode("span", `${text.coverage.length} focus areas`)
    );

    const actions = document.createElement("div");
    actions.className = "exam-card-actions";
    const practiceButton = document.createElement("button");
    practiceButton.className = "ghost-button";
    practiceButton.type = "button";
    setPressLabel(practiceButton, exam.id === currentExamId ? `Selected ${text.badge}` : `Choose ${text.badge}`);
    practiceButton.addEventListener("click", () => selectExam(exam.id, true));
    const detailsLink = document.createElement("a");
    detailsLink.className = "text-button";
    detailsLink.href = `./programs/${exam.id}.html`;
    setPressLabel(detailsLink, t("detailsAction"));
    actions.append(practiceButton, detailsLink);

    card.append(list, footer, actions);
    return card;
  }));
}

function selectExam(examId, shouldScroll = false) {
  currentExamId = examId;
  questionIndex = 0;
  drillAnswers = [];
  answered = false;
  mistakeMode = false;
  const url = new URL(window.location.href);
  url.searchParams.set("exam", examId);
  url.hash = shouldScroll ? "practice-workspace" : window.location.hash.replace("#", "");
  window.history.replaceState(null, "", url);
  renderExam();
  renderCatalog();
  if (shouldScroll) {
    document.querySelector(".question-card")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function getActiveQuestions(exam = getCurrentExam()) {
  if (!mistakeMode) {
    return exam.questions.map((question, index) => ({ question, index }));
  }
  const wrongIndexes = getExamProgress(exam.id).wrongQuestionKeys
    .map(parseQuestionKey)
    .filter((entry) => entry.examId === exam.id && Number.isInteger(entry.index))
    .map((entry) => entry.index)
    .filter((index) => exam.questions[index]);
  return [...new Set(wrongIndexes)].map((index) => ({ question: exam.questions[index], index }));
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
  document.querySelector(".ring").style.background = `conic-gradient(var(--green) ${readiness}%, #e2e8df 0)`;
}

function renderLocalProgress() {
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
  const config = exam.examConfig || {};
  const practiceCount = config.practiceQuestionCount || exam.questions.length;
  return `${p(exam).badge}: practice ${practiceCount} questions in short knowledge-point sessions. Explanations appear immediately after each answer.`;
}

function renderStudyPlan(exam) {
  const config = exam.examConfig || {};
  const practiceCount = config.practiceQuestionCount || exam.questions.length;
  const plan = [
    t("planWeak", getLocalWeakArea(exam, getExamProgress(exam.id))),
    `Work through the ${practiceCount}-question bank in short sessions.`,
    "Read each explanation before moving to the next knowledge point."
  ];
  replaceChildren(document.querySelector("#study-plan"), plan.map((item) => createTextNode("li", item)));
}

function renderGuideVisibility() {
  const pmpGuides = document.querySelector(".pmp-guide-section");
  const capmGuides = document.querySelector(".capm-guide-section");
  if (pmpGuides) pmpGuides.hidden = false;
  if (capmGuides) capmGuides.hidden = false;
}

function renderExam() {
  const exam = getCurrentExam();
  const text = p(exam);
  document.querySelector("#track-region").textContent = `${exam.country} / ${exam.region}`;
  document.querySelector("#track-title").textContent = text.title;
  document.querySelector("#source-name").textContent = exam.source;
  document.querySelector("#source-coverage").textContent = text.coverage.join(listSeparator());
  document.querySelector("#source-updated").textContent = exam.updated;
  if (elements.modeHelp) elements.modeHelp.textContent = getModeHelp(exam);
  const dailyGoal = document.querySelector("#daily-goal");
  if (dailyGoal) dailyGoal.textContent = t("dailyStudy");
  renderLearningStats(exam);
  renderStudyPlan(exam);
  renderLocalProgress();
  renderGuideVisibility();
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const exam = getCurrentExam();
  const activeQuestions = getActiveQuestions(exam);
  if (questionIndex >= activeQuestions.length) questionIndex = 0;
  if (!activeQuestions.length) {
    document.querySelector("#question-tag").textContent = t("reviewMistakes");
    document.querySelector("#question-progress").textContent = "0 / 0";
    document.querySelector("#question-text").textContent = t("noMistakes");
    elements.explanation.textContent = t("noMistakesDetail");
    elements.explanation.classList.remove("hidden");
    elements.answers.replaceChildren();
    elements.skipButton.hidden = true;
    elements.nextButton.disabled = true;
    setPressLabel(elements.nextButton, t("next"));
    return;
  }
  elements.nextButton.disabled = false;
  const { question } = activeQuestions[questionIndex];
  document.querySelector("#question-tag").textContent = question.tag;
  document.querySelector("#question-progress").textContent = t("progress", questionIndex + 1, activeQuestions.length);
  document.querySelector("#question-text").textContent = question.text;
  elements.explanation.classList.add("hidden");
  elements.explanation.textContent = "";
  elements.answers.replaceChildren();
  elements.skipButton.hidden = false;
  setPressLabel(elements.nextButton, t("next"));
  hydratePressLabels();
  currentChoiceOrder = shuffleIndexes(question.choices.length);
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
  Array.from(elements.answers.children).forEach((button, buttonIndex) => {
    const originalChoiceIndex = currentChoiceOrder[buttonIndex];
    if (originalChoiceIndex === question.correct) button.classList.add("correct");
    if (originalChoiceIndex === index && !isCorrect) button.classList.add("wrong");
  });
  saveExamProgress(exam.id, (progress) => {
    const wrongSet = new Set(progress.wrongQuestionKeys || []);
    if (isCorrect) wrongSet.delete(questionKey(exam, originalIndex));
    else wrongSet.add(questionKey(exam, originalIndex));
    return {
      ...progress,
      answered: progress.answered + 1,
      correct: progress.correct + (isCorrect ? 1 : 0),
      wrongQuestionKeys: Array.from(wrongSet),
      lastStudiedAt: new Date().toISOString()
    };
  });
  elements.explanation.textContent = question.explanation;
  elements.explanation.classList.remove("hidden");
}

function advanceQuestion() {
  const exam = getCurrentExam();
  const activeQuestions = getActiveQuestions(exam);
  if (!activeQuestions.length) return;
  questionIndex = (questionIndex + 1) % activeQuestions.length;
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
  resetSession();
}

function reviewMistakes() {
  if (!getExamProgress().wrongQuestionKeys.length) return;
  mistakeMode = true;
  questionIndex = 0;
  drillAnswers = [];
  renderExam();
}

function clearCurrentMistakes() {
  saveExamProgress(currentExamId, (progress) => ({
    ...progress,
    wrongQuestionKeys: []
  }));
  mistakeMode = false;
  resetSession();
}

if (elements.language) {
  elements.language.addEventListener("change", () => setLanguage(elements.language.value));
}
elements.startDrillButton.addEventListener("click", () => {
  document.querySelector("#bank-selector-title")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
elements.nextButton.addEventListener("click", advanceQuestion);
elements.skipButton.addEventListener("click", advanceQuestion);
elements.resetButton.addEventListener("click", resetSession);
elements.clearLocalButton.addEventListener("click", clearCurrentLocalProgress);
elements.reviewMistakesButton.addEventListener("click", reviewMistakes);
elements.clearMistakesButton.addEventListener("click", clearCurrentMistakes);

hydratePressLabels();
applyStaticTranslations();
renderExam();
renderCatalog();

