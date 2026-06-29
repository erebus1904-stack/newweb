import { readFileSync, writeFileSync } from "node:fs";

const guideTitles = {
  "guides/capm-domain-study-plan.html": "How to split CAPM study time across the four exam domains",
  "guides/capm-exam-timing-strategy.html": "CAPM 150 questions, 180 minutes: how to practice timing",
  "guides/capm-core-concepts.html": "20 project management concepts CAPM beginners confuse most",
  "guides/capm-predictive-project-management.html": "How to study predictive project management for CAPM",
  "guides/capm-agile-scrum-kanban.html": "CAPM agile questions: Scrum, Kanban, iterations, and retrospectives",
  "guides/capm-business-analysis-study.html": "Why business analysis is 27% of CAPM and how to study it",
  "guides/capm-to-pmp-study-bridge.html": "CAPM to PMP study bridge: topics that help both exams",
  "guides/capm-next-step-scenario-questions.html": "CAPM scenario questions: how to answer what should be done next",
  "guides/capm-study-materials-plan.html": "How to choose CAPM study materials",
  "guides/capm-mistake-review-method.html": "CAPM mistake review method: find the cause, not the answer",
  "guides/capm-online-vs-test-center.html": "CAPM online exam vs Pearson VUE test center",
  "guides/pmp-study-plan.html": "30-day PMP study plan",
  "guides/pmp-situational-questions.html": "How to answer PMP situational questions",
  "guides/pmp-agile-hybrid-predictive.html": "PMP agile vs hybrid vs predictive delivery",
  "guides/pmp-change-control.html": "PMP change control questions",
  "guides/pmp-risk-issues.html": "PMP risk, issue, assumption, and dependency questions",
  "guides/pmp-stakeholder-communication.html": "PMP stakeholder communication questions",
  "guides/pmp-2026-exam-version.html": "Which PMP exam version should you study for in July 2026?",
  "guides/pmp-next-best-action.html": "PMP situational question thinking",
  "guides/pmp-delivery-approaches.html": "Agile, hybrid, or predictive? How to recognize the PMP scenario",
  "guides/pmp-agile-roles.html": "PMP agile roles: Scrum Master, Product Owner, and self-organizing teams",
  "guides/pmp-process-map.html": "PMP process review map"
};

const relatedPaths = {
  "guides/capm-domain-study-plan.html": [
    "guides/capm-core-concepts.html",
    "guides/capm-predictive-project-management.html",
    "guides/capm-agile-scrum-kanban.html",
    "guides/capm-business-analysis-study.html"
  ],
  "guides/capm-exam-timing-strategy.html": [
    "guides/capm-domain-study-plan.html",
    "guides/capm-mistake-review-method.html",
    "guides/capm-online-vs-test-center.html",
    "guides/capm-next-step-scenario-questions.html"
  ],
  "guides/capm-core-concepts.html": [
    "guides/capm-domain-study-plan.html",
    "guides/capm-predictive-project-management.html",
    "guides/capm-agile-scrum-kanban.html",
    "guides/capm-business-analysis-study.html"
  ],
  "guides/capm-predictive-project-management.html": [
    "guides/capm-core-concepts.html",
    "guides/capm-domain-study-plan.html",
    "guides/capm-next-step-scenario-questions.html",
    "guides/capm-mistake-review-method.html"
  ],
  "guides/capm-agile-scrum-kanban.html": [
    "guides/capm-core-concepts.html",
    "guides/capm-business-analysis-study.html",
    "guides/capm-next-step-scenario-questions.html",
    "guides/capm-to-pmp-study-bridge.html"
  ],
  "guides/capm-business-analysis-study.html": [
    "guides/capm-core-concepts.html",
    "guides/capm-agile-scrum-kanban.html",
    "guides/capm-next-step-scenario-questions.html",
    "guides/capm-mistake-review-method.html"
  ],
  "guides/capm-to-pmp-study-bridge.html": [
    "guides/capm-core-concepts.html",
    "guides/capm-next-step-scenario-questions.html",
    "guides/capm-mistake-review-method.html",
    "guides/capm-domain-study-plan.html"
  ],
  "guides/capm-next-step-scenario-questions.html": [
    "guides/capm-business-analysis-study.html",
    "guides/capm-predictive-project-management.html",
    "guides/capm-agile-scrum-kanban.html",
    "guides/capm-mistake-review-method.html"
  ],
  "guides/capm-study-materials-plan.html": [
    "guides/capm-domain-study-plan.html",
    "guides/capm-core-concepts.html",
    "guides/capm-exam-timing-strategy.html",
    "guides/capm-mistake-review-method.html"
  ],
  "guides/capm-mistake-review-method.html": [
    "guides/capm-next-step-scenario-questions.html",
    "guides/capm-core-concepts.html",
    "guides/capm-business-analysis-study.html",
    "guides/capm-exam-timing-strategy.html"
  ],
  "guides/capm-online-vs-test-center.html": [
    "guides/capm-exam-timing-strategy.html",
    "guides/capm-study-materials-plan.html",
    "guides/capm-domain-study-plan.html",
    "guides/capm-mistake-review-method.html"
  ],
  "guides/pmp-study-plan.html": [
    "guides/pmp-2026-exam-version.html",
    "guides/pmp-next-best-action.html",
    "guides/pmp-delivery-approaches.html",
    "guides/pmp-process-map.html"
  ],
  "guides/pmp-situational-questions.html": [
    "guides/pmp-next-best-action.html",
    "guides/pmp-change-control.html",
    "guides/pmp-risk-issues.html",
    "guides/pmp-stakeholder-communication.html"
  ],
  "guides/pmp-agile-hybrid-predictive.html": [
    "guides/pmp-delivery-approaches.html",
    "guides/pmp-agile-roles.html",
    "guides/pmp-next-best-action.html",
    "guides/pmp-change-control.html"
  ],
  "guides/pmp-change-control.html": [
    "guides/pmp-next-best-action.html",
    "guides/pmp-risk-issues.html",
    "guides/pmp-process-map.html",
    "guides/pmp-situational-questions.html"
  ],
  "guides/pmp-risk-issues.html": [
    "guides/pmp-change-control.html",
    "guides/pmp-process-map.html",
    "guides/pmp-stakeholder-communication.html",
    "guides/pmp-next-best-action.html"
  ],
  "guides/pmp-stakeholder-communication.html": [
    "guides/pmp-situational-questions.html",
    "guides/pmp-next-best-action.html",
    "guides/pmp-risk-issues.html",
    "guides/pmp-process-map.html"
  ],
  "guides/pmp-2026-exam-version.html": [
    "guides/pmp-study-plan.html",
    "guides/pmp-next-best-action.html",
    "guides/pmp-delivery-approaches.html",
    "guides/pmp-process-map.html"
  ],
  "guides/pmp-next-best-action.html": [
    "guides/pmp-situational-questions.html",
    "guides/pmp-change-control.html",
    "guides/pmp-risk-issues.html",
    "guides/pmp-stakeholder-communication.html"
  ],
  "guides/pmp-delivery-approaches.html": [
    "guides/pmp-agile-hybrid-predictive.html",
    "guides/pmp-agile-roles.html",
    "guides/pmp-change-control.html",
    "guides/pmp-next-best-action.html"
  ],
  "guides/pmp-agile-roles.html": [
    "guides/pmp-agile-hybrid-predictive.html",
    "guides/pmp-delivery-approaches.html",
    "guides/pmp-next-best-action.html",
    "guides/pmp-stakeholder-communication.html"
  ],
  "guides/pmp-process-map.html": [
    "guides/pmp-risk-issues.html",
    "guides/pmp-change-control.html",
    "guides/pmp-stakeholder-communication.html",
    "guides/pmp-next-best-action.html"
  ]
};

function relativeGuideHref(path) {
  return `../${path}`;
}

function relatedSection(file) {
  const exam = file.includes("/capm-") ? "capm" : "pmp";
  const label = exam.toUpperCase();
  const links = [
    `<li><a href="../programs/${exam}.html">${label} Study Hub</a></li>`,
    `<li><a href="../index.html?exam=${exam}#practice-workspace">Practice ${label} questions</a></li>`,
    ...relatedPaths[file].map((path) => `<li><a href="${relativeGuideHref(path)}">${guideTitles[path]}</a></li>`)
  ];

  return `        <section class="legal-section related-guides" aria-labelledby="related-guides-title">
          <h2 id="related-guides-title">Related study path</h2>
          <ul class="guide-link-list">
            ${links.join("\n            ")}
          </ul>
        </section>
`;
}

for (const file of Object.keys(relatedPaths)) {
  let html = readFileSync(file, "utf8");
  if (html.includes('class="legal-section related-guides"')) continue;
  html = html.replace("      </article>", `${relatedSection(file)}      </article>`);
  writeFileSync(file, html);
}
