(() => {
  const EXAM_ID = "pmp";
  const MOCK_SIZE = 180;
  const DURATION_SECONDS = 240 * 60;
  const STORAGE_KEY = "passGridPmpMockExamState";

  const pmpExam = examCatalog.find((exam) => exam.id === EXAM_ID);
  const questions = (pmpExam?.questions || [])
    .filter((question) => question.bankType === "exam")
    .slice(0, MOCK_SIZE);

  const elements = {
    timer: document.querySelector("#mock-timer"),
    progressSummary: document.querySelector("#mock-progress-summary"),
    numberGrid: document.querySelector("#question-number-grid"),
    resultPanel: document.querySelector("#mock-result-panel"),
    resultTitle: document.querySelector("#mock-result-title"),
    resultDetail: document.querySelector("#mock-result-detail"),
    restartButton: document.querySelector("#restart-mock-button"),
    tag: document.querySelector("#mock-question-tag"),
    progress: document.querySelector("#mock-question-progress"),
    text: document.querySelector("#mock-question-text"),
    answers: document.querySelector("#mock-answers"),
    explanation: document.querySelector("#mock-explanation"),
    nextButton: document.querySelector("#mock-next-button"),
    submitButton: document.querySelector("#mock-submit-button")
  };

  let timerId = null;
  let state = loadState();

  function defaultState() {
    return {
      startedAt: Date.now(),
      currentIndex: 0,
      answers: {},
      submittedAt: null,
      score: null
    };
  }

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!parsed || typeof parsed !== "object") return defaultState();
      return {
        ...defaultState(),
        ...parsed,
        answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {}
      };
    } catch {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function formatTime(totalSeconds) {
    const safeSeconds = Math.max(0, Math.floor(totalSeconds));
    const hours = String(Math.floor(safeSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((safeSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(safeSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  function remainingSeconds() {
    if (state.submittedAt) return 0;
    return DURATION_SECONDS - Math.floor((Date.now() - state.startedAt) / 1000);
  }

  function getCorrectIndex(question) {
    if (Array.isArray(question.correctAnswers) && question.correctAnswers.length) {
      return question.correctAnswers[0];
    }
    return question.correct;
  }

  function scoreExam() {
    const correct = questions.reduce((sum, question, index) => {
      return sum + (Number(state.answers[index]) === getCorrectIndex(question) ? 1 : 0);
    }, 0);
    const answered = Object.keys(state.answers).length;
    const accuracy = questions.length ? Math.round((correct / questions.length) * 100) : 0;
    return { correct, answered, unanswered: Math.max(0, questions.length - answered), accuracy };
  }

  function submitExam() {
    if (state.submittedAt) return;
    state.submittedAt = Date.now();
    state.score = scoreExam();
    saveState();
    render();
  }

  function renderTimer() {
    const remaining = remainingSeconds();
    if (elements.timer) elements.timer.textContent = state.submittedAt ? "Submitted" : formatTime(remaining);
    if (remaining <= 0 && !state.submittedAt) submitExam();
  }

  function createNode(tagName, text, className) {
    const node = document.createElement(tagName);
    if (className) node.className = className;
    node.textContent = text;
    return node;
  }

  function renderQuestionNumbers() {
    if (!elements.numberGrid) return;
    const buttons = questions.map((question, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "question-number-button";
      if (index === state.currentIndex) button.classList.add("current");
      if (state.answers[index] !== undefined) button.classList.add("answered");
      if (state.submittedAt) {
        const isCorrect = Number(state.answers[index]) === getCorrectIndex(question);
        button.classList.add(isCorrect ? "is-correct" : "is-wrong");
      }
      button.textContent = String(index + 1);
      button.setAttribute("aria-label", `Go to question ${index + 1}`);
      button.addEventListener("click", () => {
        state.currentIndex = index;
        saveState();
        renderQuestion();
        renderQuestionNumbers();
      });
      return button;
    });
    elements.numberGrid.replaceChildren(...buttons);
  }

  function renderProgress() {
    const score = state.score || scoreExam();
    if (elements.progressSummary) {
      const suffix = state.submittedAt
        ? `Submitted · ${score.correct} correct · ${score.accuracy}% accuracy`
        : `${score.answered} answered / ${questions.length} questions`;
      elements.progressSummary.textContent = suffix;
    }
  }

  function renderResult() {
    if (!elements.resultPanel) return;
    if (!state.submittedAt) {
      elements.resultPanel.hidden = true;
      return;
    }
    const score = state.score || scoreExam();
    elements.resultPanel.hidden = false;
    if (elements.resultTitle) elements.resultTitle.textContent = `Accuracy: ${score.accuracy}%`;
    if (elements.resultDetail) {
      elements.resultDetail.textContent = `${score.correct} correct out of ${questions.length} questions. ${score.unanswered} questions were unanswered.`;
    }
  }

  function renderQuestion() {
    if (!questions.length) {
      if (elements.text) elements.text.textContent = "No PMP mock exam questions are available yet.";
      return;
    }

    const question = questions[state.currentIndex] || questions[0];
    const selected = state.answers[state.currentIndex];
    const correctIndex = getCorrectIndex(question);

    if (elements.tag) elements.tag.textContent = question.tag || question.domain || "PMP";
    if (elements.progress) elements.progress.textContent = `${state.currentIndex + 1} / ${questions.length}`;
    if (elements.text) elements.text.textContent = question.text;
    if (elements.nextButton) elements.nextButton.disabled = state.currentIndex === questions.length - 1;
    if (elements.submitButton) elements.submitButton.disabled = Boolean(state.submittedAt);

    const answerButtons = (question.choices || []).map((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer";
      if (Number(selected) === index) button.classList.add("selected-answer");
      if (state.submittedAt && index === correctIndex) button.classList.add("correct");
      if (state.submittedAt && Number(selected) === index && index !== correctIndex) button.classList.add("wrong");
      button.disabled = Boolean(state.submittedAt);
      button.append(
        createNode("span", String.fromCharCode(65 + index), "answer-key"),
        createNode("span", choice, "answer-text")
      );
      button.addEventListener("click", () => {
        if (state.submittedAt) return;
        state.answers[state.currentIndex] = index;
        saveState();
        renderQuestion();
        renderQuestionNumbers();
        renderProgress();
      });
      return button;
    });

    if (elements.answers) elements.answers.replaceChildren(...answerButtons);

    if (elements.explanation) {
      if (state.submittedAt) {
        elements.explanation.textContent = question.explanation || "Review the correct answer and compare it with the project management decision in the question.";
        elements.explanation.classList.remove("hidden");
      } else {
        elements.explanation.textContent = "";
        elements.explanation.classList.add("hidden");
      }
    }
  }

  function goToQuestion(offset) {
    state.currentIndex = Math.max(0, Math.min(questions.length - 1, state.currentIndex + offset));
    saveState();
    renderQuestion();
    renderQuestionNumbers();
  }

  function restartExam() {
    state = defaultState();
    saveState();
    render();
  }

  function render() {
    renderTimer();
    renderProgress();
    renderResult();
    renderQuestionNumbers();
    renderQuestion();
  }

  elements.nextButton?.addEventListener("click", () => goToQuestion(1));
  elements.submitButton?.addEventListener("click", submitExam);
  elements.restartButton?.addEventListener("click", restartExam);

  render();
  timerId = window.setInterval(renderTimer, 1000);
  window.addEventListener("beforeunload", () => {
    if (timerId) window.clearInterval(timerId);
  });
})();
