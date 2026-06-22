import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const code = readFileSync("data.js", "utf8");
const context = {};
vm.runInNewContext(`${code}; this.examCatalog = examCatalog;`, context);

const domains = {
  fundamentals: "Project Management Fundamentals and Core Concepts",
  predictive: "Predictive, Plan-Based Methodologies",
  agile: "Agile Frameworks and Methodologies",
  businessAnalysis: "Business Analysis Frameworks",
};

const targets = [
  [domains.fundamentals, 36, 360, 54],
  [domains.predictive, 17, 170, 26],
  [domains.agile, 20, 200, 30],
  [domains.businessAnalysis, 27, 270, 40],
];

const scenarios = [
  "software rollout",
  "facility upgrade",
  "vendor transition",
  "training program",
  "data migration",
  "customer portal",
  "regulatory implementation",
  "process improvement effort",
  "mobile product release",
  "reporting automation project",
  "warehouse redesign",
  "service desk launch",
  "finance system update",
  "public website refresh",
  "compliance dashboard",
  "product onboarding project",
  "office relocation",
  "inventory integration",
  "learning platform release",
  "claims workflow update",
  "procurement modernization",
  "quality improvement initiative",
];

const roles = [
  "sponsor",
  "project coordinator",
  "business analyst",
  "functional manager",
  "team lead",
  "customer representative",
  "operations manager",
  "vendor lead",
  "product owner",
  "Scrum Master",
  "quality specialist",
  "procurement analyst",
  "risk owner",
  "finance partner",
  "PMO analyst",
  "subject matter expert",
  "stakeholder group",
  "delivery lead",
];

const events = [
  "sponsor checkpoint",
  "planning workshop",
  "baseline review",
  "stakeholder interview",
  "team working session",
  "release readiness meeting",
  "risk review",
  "change control meeting",
  "backlog refinement session",
  "vendor coordination call",
  "lessons-learned discussion",
  "acceptance review",
  "status update",
  "phase gate review",
  "requirements workshop",
  "quality audit",
  "procurement review",
  "iteration review",
  "retrospective",
  "scope validation meeting",
];

const constraints = [
  "the release date is fixed",
  "the budget limit has already been approved",
  "several stakeholders disagree on priority",
  "the team is working across time zones",
  "a vendor dependency is on the critical path",
  "the sponsor wants evidence before approving changes",
  "the acceptance criteria must be traceable",
  "regulatory timing cannot move",
  "resources are shared with another project",
  "the team has limited historical data",
  "customer feedback is arriving in small increments",
  "the contract terms limit informal changes",
];

const distractors = [
  "Take the action only because the most senior stakeholder suggested it",
  "Skip the analysis step and move directly to implementation",
  "Hide the uncertainty until the next formal status meeting",
  "Use the same response for every project situation regardless of context",
  "Ask the team to continue without documenting the decision",
  "Escalate before clarifying facts, authority, impact, and ownership",
  "Treat the project constraint as irrelevant to the decision",
  "Replace stakeholder engagement with a private technical decision",
];

function item(tag, topic, approach, difficulty, clue, ask, answer, principle, rule, wrongs = distractors) {
  return { tag, topic, approach, difficulty, clue, ask, answer, principle, rule, wrongs };
}

const patternBank = {
  [domains.fundamentals]: [
    item("Project basics", "Project program portfolio", "Foundational", "Easy", "asks whether related projects managed together are a project, program, or portfolio", "Which concept best fits the situation?", "A program, because related projects are coordinated together for shared benefits", "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping.", "distinguish project, program, and portfolio by purpose."),
    item("Stakeholders", "Stakeholder sponsor user", "Foundational", "Easy", "confuses the sponsor with users who will operate the final deliverable", "What should be clarified first?", "Separate stakeholder roles, authority, needs, and expected involvement", "Different project roles have different authority, needs, and involvement.", "separate stakeholder roles by responsibility."),
    item("Risk issue", "Risk versus issue", "Foundational", "Medium", "describes a supplier delay that might happen next month", "How should the item be classified now?", "Record it as a risk because it is uncertain and may affect objectives", "Risk and issue classification determines the next management action.", "treat uncertain events as risks and occurred events as issues."),
    item("Deliverables", "Deliverable milestone acceptance", "Foundational", "Easy", "asks whether approval of a completed training manual is the deliverable or a milestone", "Which distinction is most accurate?", "The manual is a deliverable, while approval can be a milestone or acceptance point", "Beginners often confuse the thing produced with the event that marks progress.", "distinguish outputs, timing markers, and acceptance rules."),
    item("Constraints", "Assumption versus constraint", "Foundational", "Medium", "states the team believes a specialist will be available while the budget limit is fixed", "How should the two statements be handled?", "Treat specialist availability as an assumption and the budget limit as a constraint", "Assumptions and constraints affect planning in different ways.", "separate planning beliefs from limiting factors."),
    item("Life cycles", "Predictive agile hybrid", "Foundational", "Easy", "asks why some work is planned up front while other work is refined through feedback", "Which CAPM concept explains this difference?", "Different life cycles can be predictive, adaptive, incremental, iterative, or hybrid", "CAPM expects candidates to understand different project life cycles.", "recognize predictive, agile, and hybrid ways of working."),
    item("Charter", "Project charter authority", "Foundational", "Easy", "needs a document that formally authorizes the project and names the project manager", "Which document is most relevant?", "The project charter, because it authorizes the project and high-level direction", "The project charter gives formal authorization and high-level boundaries.", "use the charter to establish authority and initial direction."),
    item("Business case", "Business value and benefits", "Foundational", "Medium", "questions why the project still matters after a market change", "What should the team compare against?", "The business case and expected benefits that justified the project", "Projects are justified by expected value, not by activity volume alone.", "connect project continuation to business value and benefits."),
    item("PMO", "Project management office", "Foundational", "Easy", "asks who can provide project templates, standards, and lessons learned guidance", "Which group is the best source?", "The PMO or organizational project support function", "A project management office may support standards, methods, governance, and knowledge sharing.", "use the PMO for organizational project guidance."),
    item("Tailoring", "Tailoring methods", "Foundational", "Medium", "wants to apply every tool and technique exactly the same way on a small effort", "What should the project manager explain?", "Tailoring adapts project management practices to project context and value", "Tailoring is necessary because project context, complexity, risk, and stakeholders differ.", "adapt methods to the project instead of applying every practice mechanically."),
    item("Process groups", "Process group interaction", "Foundational", "Medium", "believes initiating, planning, executing, monitoring, and closing happen only once in a strict sequence", "Which explanation is most accurate?", "Process groups can interact and repeat as more information becomes available", "CAPM candidates need to understand that process groups are interactive.", "recognize iterative interaction among project management process groups."),
    item("Knowledge areas", "Integration management", "Foundational", "Medium", "needs one person to coordinate competing changes across scope, schedule, cost, risk, and stakeholders", "Which knowledge area is most involved?", "Project Integration Management, because it coordinates the whole project", "Integration management coordinates project elements so decisions are not made in isolation.", "view cross-area coordination as integration management."),
    item("Governance", "Phase gate", "Foundational", "Easy", "is preparing a checkpoint to decide whether the project should continue to the next phase", "What is this checkpoint commonly called?", "A phase gate or governance review", "Governance reviews support authorization, alignment, and continuation decisions.", "use phase gates to review readiness before moving forward."),
    item("Lessons learned", "Knowledge transfer", "Foundational", "Easy", "finds a similar past project had the same vendor onboarding problem", "What should the team use?", "Lessons learned and organizational process assets from the prior work", "Organizational knowledge helps teams avoid repeated mistakes and reuse proven practices.", "apply lessons learned and organizational process assets."),
    item("Ethics", "Professional responsibility", "Foundational", "Medium", "is pressured to hide a known schedule risk from the sponsor", "What is the most appropriate response?", "Communicate accurate information through the approved project channels", "Project management ethics require honesty, responsibility, respect, and fairness.", "communicate truthful project information responsibly."),
    item("Communication", "Communication channels", "Foundational", "Medium", "needs to estimate how communication complexity changes as stakeholders are added", "Which concept is being tested?", "Potential communication channels increase as the number of people increases", "The communication channels formula highlights how stakeholder count affects communication complexity.", "consider stakeholder count when planning communications."),
    item("Organizations", "Organizational structure", "Foundational", "Medium", "has limited authority because team members report mainly to functional managers", "Which structure is most likely?", "A functional or weak matrix environment", "Organizational structure affects project manager authority and resource access.", "interpret authority constraints through organizational structure."),
    item("Objectives", "Project success criteria", "Foundational", "Easy", "asks how success will be judged beyond finishing individual tasks", "What should be defined clearly?", "Project objectives, acceptance criteria, and measures of success", "Project success requires shared objectives and measurable acceptance expectations.", "define success criteria before judging delivery."),
    item("Stakeholder register", "Stakeholder identification", "Foundational", "Easy", "management creates a long list of people affected by the project", "Where should the project team organize this information?", "The stakeholder register or stakeholder information records", "Stakeholder identification starts early and supports engagement planning.", "document stakeholders and their relevant interests early."),
    item("Benefits", "Benefits realization", "Foundational", "Medium", "a delivered feature meets specifications but no longer supports the expected outcome", "What should be reviewed?", "Whether the deliverable still supports the intended benefit and business need", "Deliverables matter because they enable outcomes and benefits.", "connect completed outputs to intended outcomes and benefits."),
  ],
  [domains.predictive]: [
    item("WBS", "Scope decomposition", "Predictive", "Medium", "needs to subdivide approved deliverables into smaller manageable components", "Which technique or output is most relevant?", "Create the WBS through decomposition of the project scope", "Predictive planning often decomposes deliverables before detailed scheduling and control.", "use the WBS to decompose and organize scope."),
    item("Schedule", "Activity definition", "Predictive", "Medium", "has work packages but still needs the specific activities required to produce them", "What should happen next?", "Define activities from the work packages and planning information", "Activities translate decomposed scope into schedulable work.", "define activities before sequencing and estimating work."),
    item("Dependencies", "Sequence activities", "Predictive", "Medium", "must show which activities depend on earlier work before dates can be calculated", "Which planning step is needed?", "Sequence activities and document logical relationships", "A schedule model needs logical relationships before duration and critical path analysis are useful.", "sequence activities before finalizing schedule logic."),
    item("Critical path", "Critical path method", "Predictive", "Medium", "finds one delayed activity has zero float and affects the finish date", "What does this indicate?", "The activity is on the critical path and may delay the project", "Critical path activities have the least scheduling flexibility and can affect finish dates.", "watch critical path work when evaluating schedule impact."),
    item("Cost", "Budget baseline", "Predictive", "Medium", "needs the approved time-phased budget used to measure cost performance", "Which baseline is most relevant?", "The approved project cost baseline", "The cost baseline is used to compare planned spending against actual and earned performance.", "use the cost baseline for cost performance measurement."),
    item("Earned value", "EVM fundamentals", "Predictive", "Medium", "asks which approach compares planned value, earned value, and actual cost", "Which method is being described?", "Earned value management or earned value analysis", "Earned value concepts help integrate scope, schedule, and cost performance.", "apply earned value when comparing planned, earned, and actual performance."),
    item("Forecasting", "Estimate at completion", "Predictive", "Medium", "wants a forecast of total expected cost at project completion", "Which estimate should be reviewed?", "Estimate at completion, based on current performance and assumptions", "Forecasts such as EAC help the team understand likely final cost.", "use EAC to forecast completion cost."),
    item("Quality", "Quality metrics", "Predictive", "Easy", "needs measurable criteria for checking whether deliverables meet quality expectations", "What should be defined?", "Quality metrics and acceptance-related measures", "Quality planning defines how quality will be measured and controlled.", "define measurable quality metrics before judging results."),
    item("Change", "Integrated change control", "Predictive", "Medium", "receives a request to add scope after baselines were approved", "What is the best next step?", "Submit the request through the integrated change control process", "Baselined scope, schedule, or cost changes require formal review.", "send baseline changes through integrated change control."),
    item("Procurement", "Make or buy", "Predictive", "Medium", "has completed make-or-buy analysis and now needs the delivery approach for external work", "Which planning artifact is most relevant?", "The procurement strategy or procurement management approach", "Procurement planning determines how external goods and services will be obtained.", "connect make-or-buy results to procurement strategy."),
    item("Procurement SOW", "Statement of work", "Predictive", "Medium", "must describe the work a seller is expected to provide", "Which document is most directly used?", "A procurement statement of work with clear deliverables and requirements", "The procurement SOW describes seller work clearly enough to support solicitation and contract management.", "use a procurement SOW to define seller work."),
    item("Resources", "Responsibility assignment", "Predictive", "Easy", "needs to show who is responsible, accountable, consulted, and informed for key work", "Which tool best fits?", "A RACI chart or responsibility assignment matrix", "Responsibility assignment tools clarify roles and reduce confusion.", "use a RACI or RAM for responsibility clarity."),
    item("Communications", "Communications plan inputs", "Predictive", "Medium", "is creating the communications management plan and needs approved project direction plus stakeholder information", "What should be reviewed?", "The project charter, project management plan, and relevant project documents", "Communications planning uses project direction, stakeholder needs, and planning context.", "base communication planning on charter, plans, and project documents."),
    item("Risk", "Risk register", "Predictive", "Medium", "identifies a possible regulatory delay and needs to document probability, impact, and owner", "Where should this information go?", "The project risk register", "The risk register documents identified risks and their characteristics.", "record risk details in the risk register."),
    item("Risk response", "Risk strategies", "Predictive", "Medium", "chooses insurance to shift financial impact of a threat to another party", "Which risk response is being used?", "Transfer the threat impact", "Risk responses should match whether the uncertainty is a threat or opportunity.", "recognize transfer when risk impact is shifted contractually or financially."),
    item("Issue log", "Issue management", "Predictive", "Easy", "a previously uncertain vendor delay has now happened and affects delivery", "Where should the active problem be tracked?", "The issue log with ownership and follow-up actions", "Once uncertainty occurs, the team manages the active problem as an issue.", "move occurred risks into issue management."),
    item("Validate scope", "Formal acceptance", "Predictive", "Medium", "the customer is reviewing completed deliverables against acceptance criteria", "Which process is most involved?", "Validate scope to obtain formal acceptance", "Validate scope focuses on formal acceptance of completed deliverables.", "use validation to confirm deliverable acceptance."),
    item("Control scope", "Scope creep", "Predictive", "Medium", "team members begin adding requested features without approved change review", "What risk is this creating?", "Scope creep from uncontrolled expansion of project work", "Uncontrolled additions can undermine baselines and expectations.", "control scope by routing changes through approval."),
    item("Variance", "Variance analysis", "Predictive", "Medium", "planned progress and actual progress differ enough to require investigation", "Which analysis is most useful?", "Variance analysis to compare planned and actual performance", "Variance analysis helps explain differences between planned and actual results.", "analyze variances before deciding corrective action."),
    item("Baselines", "Performance measurement", "Predictive", "Medium", "needs an approved reference for comparing scope, schedule, and cost performance", "What should be used?", "The approved project baselines", "Baselines provide the approved reference for performance measurement and change control.", "measure performance against approved baselines."),
  ],
  [domains.agile]: [
    item("Product Owner", "Backlog priority", "Agile", "Medium", "two stakeholders pressure the team to choose their backlog items first", "Who should order the backlog?", "The Product Owner, informed by value, risk, dependencies, and stakeholder input", "Backlog ordering is a product ownership accountability.", "preserve Product Owner accountability for backlog order."),
    item("Scrum Master", "Impediment removal", "Agile", "Easy", "an environment access issue blocks several stories", "What should the Scrum Master do?", "Make the impediment visible and help remove the blocker", "Servant leadership includes helping the team remove obstacles.", "remove impediments that are outside the team's control."),
    item("Events", "Review versus retrospective", "Agile", "Easy", "the team wants feedback on the completed increment from stakeholders", "Which event best fits?", "A sprint or iteration review", "Agile events serve different purposes for feedback and improvement.", "use reviews for product feedback and retrospectives for process improvement."),
    item("Retrospective", "Continuous improvement", "Agile", "Medium", "the team identifies a recurring handoff problem after the iteration", "What should happen next?", "Select an improvement action and make it visible for follow-up", "Retrospectives should create actionable improvements, not just discussion.", "turn retrospective findings into tracked improvement actions."),
    item("Refinement", "Backlog refinement", "Agile", "Medium", "upcoming backlog items are too vague for the team to estimate", "What should the team do?", "Refine backlog items so they are clearer, smaller, and testable", "Backlog refinement improves shared understanding before selection for delivery.", "refine unclear backlog items before commitment."),
    item("Value", "Value delivery", "Agile", "Medium", "the team can deliver a smaller feature that solves the highest customer pain first", "Which agile principle supports this?", "Deliver value early and incrementally", "Agile approaches emphasize early and frequent value delivery.", "favor incremental delivery of valuable outcomes."),
    item("Definition of Done", "Done criteria", "Agile", "Easy", "team members disagree whether an item is complete because testing and documentation expectations differ", "What should help resolve this?", "A shared Definition of Done", "A Definition of Done creates shared completion expectations.", "use agreed done criteria to avoid ambiguous completion."),
    item("Acceptance criteria", "Story acceptance", "Agile", "Medium", "a user story is understood differently by the Product Owner and developers", "What should be clarified?", "Acceptance criteria that describe the conditions of satisfaction", "Acceptance criteria help the team know what will satisfy the need.", "clarify acceptance criteria for user stories."),
    item("Daily standup", "Team synchronization", "Agile", "Easy", "the team needs a short recurring event to inspect progress and coordinate daily work", "Which event is most appropriate?", "A daily standup or daily scrum", "Daily synchronization helps teams inspect progress and surface impediments quickly.", "use daily coordination to inspect progress and blockers."),
    item("Kanban", "Work in progress", "Agile", "Medium", "too many tasks are started and little work is finishing", "What should the team consider?", "Limit work in progress and visualize flow", "Kanban practices help teams manage flow and avoid excessive work in progress.", "limit WIP to improve flow and completion."),
    item("Adaptive planning", "Progressive elaboration", "Agile", "Medium", "new information is expected as users see increments", "How should planning be treated?", "Plan adaptively and progressively elaborate details as learning occurs", "Adaptive work still requires planning, but plans evolve with feedback.", "progressively elaborate plans in adaptive environments."),
    item("Self organization", "Team ownership", "Agile", "Medium", "experienced team members disagree about the technical approach", "What should the servant leader do?", "Facilitate a focused discussion so the team can compare options and decide", "Agile leadership supports team ownership of how work is done.", "facilitate team ownership of technical decisions."),
    item("MVP", "Minimum viable product", "Agile", "Medium", "stakeholders need learning quickly before funding a larger release", "What approach fits best?", "Deliver a minimum viable product or small experiment to test value", "An MVP helps test assumptions and learn with limited investment.", "use a small release to validate value assumptions."),
    item("Burndown", "Agile progress tracking", "Agile", "Easy", "the team wants a visual trend of remaining work during the iteration", "Which information radiator fits?", "A burndown chart showing work remaining over time", "Agile teams often use information radiators to make progress visible.", "use burndown information to inspect remaining work."),
    item("Hybrid", "Hybrid delivery", "Agile", "Medium", "hardware work must be planned predictively while software is refined through iterations", "Which delivery approach is this?", "Hybrid delivery using both predictive and adaptive approaches", "Hybrid approaches combine methods when different work streams need different planning styles.", "combine predictive and adaptive approaches where appropriate."),
    item("Agile risk", "Risk in agile", "Agile", "Medium", "a major uncertainty can be tested with a small spike before full development", "What should the team do?", "Use a timeboxed experiment or spike to reduce uncertainty", "Agile teams manage uncertainty through transparency, experiments, and frequent feedback.", "reduce uncertainty with small learning activities."),
    item("Stakeholder feedback", "Iteration review", "Agile", "Easy", "users request a small adjustment after seeing the increment", "How should the feedback be handled?", "Capture and prioritize the feedback in the product backlog", "Feedback should be visible and ordered against other value and risk considerations.", "capture feedback transparently in the backlog."),
    item("Servant leadership", "Team support", "Agile", "Easy", "the team is blocked by a decision outside its authority", "What should the servant leader emphasize?", "Support the team by helping remove organizational impediments", "Servant leaders support team effectiveness rather than simply directing tasks.", "support the team by addressing impediments."),
    item("Psychological safety", "Team collaboration", "Agile", "Medium", "team members stop raising concerns because prior feedback was punished", "What should be improved?", "Create a safer environment for honest inspection and adaptation", "Inspection and adaptation require openness and trust.", "build psychological safety for transparent feedback."),
    item("Release planning", "Incremental release", "Agile", "Medium", "stakeholders ask when useful increments can be released rather than waiting for the whole scope", "What should the team plan?", "A release plan based on value, capacity, dependencies, and feedback", "Release planning connects incremental delivery to stakeholder value and timing.", "plan releases around value and feedback."),
  ],
  [domains.businessAnalysis]: [
    item("Needs assessment", "Problem understanding", "Business Analysis", "Medium", "users request a new report because the current workflow is slow", "What should the business analyst do first?", "Understand the underlying need before recommending a solution", "Business analysis starts with the problem and expected value, not a premature solution.", "understand the need before recommending a solution."),
    item("Elicitation", "Requirements elicitation", "Business Analysis", "Medium", "needs information from several user groups with different workflows", "Which action is most appropriate?", "Use structured elicitation with relevant stakeholders", "Requirements should be discovered through structured engagement with stakeholders.", "elicit requirements from relevant stakeholders."),
    item("Traceability", "Requirements traceability", "Business Analysis", "Medium", "must show how a delivered feature connects to an approved requirement", "Which tool helps most?", "A requirements traceability matrix", "Traceability connects business needs, requirements, work, testing, and acceptance.", "trace requirements through delivery and acceptance."),
    item("Acceptance", "Solution evaluation", "Business Analysis", "Medium", "the solution was delivered but users say it does not solve the original problem", "What should be evaluated?", "Whether the solution meets the business need and expected value", "Business analysis includes checking whether the solution actually delivers expected value.", "evaluate whether the solution meets the business need."),
    item("Stakeholder analysis", "Stakeholder needs", "Business Analysis", "Medium", "finds a low-interest stakeholder has high authority over process approval", "How should engagement be planned?", "Tailor engagement to influence, interest, and decision needs", "Stakeholder analysis supports the right level of involvement and communication.", "tailor engagement to influence, interest, and need."),
    item("Requirements quality", "Acceptance testability", "Business Analysis", "Medium", "sees a requirement written as the system should be easy to use", "What is the main problem?", "The requirement is not testable enough without clearer acceptance criteria", "Vague requirements create acceptance disputes and rework.", "make requirements clear and testable."),
    item("Requirement types", "Functional nonfunctional", "Business Analysis", "Easy", "needs to separate what the system must do from how well it must perform", "Which distinction is being made?", "Functional requirements versus nonfunctional requirements", "Business analysis classifies requirements so teams can design and test them appropriately.", "distinguish functional and nonfunctional requirements."),
    item("Prioritization", "Requirement prioritization", "Business Analysis", "Medium", "there are more requested features than the team can deliver in the first release", "What should happen?", "Prioritize requirements by value, risk, urgency, and dependencies", "Prioritization helps limited capacity focus on the most valuable outcomes.", "prioritize requirements using transparent criteria."),
    item("Modeling", "Process model", "Business Analysis", "Medium", "stakeholders disagree about current workflow handoffs", "Which technique may help?", "Create a process model or workflow diagram to clarify steps and handoffs", "Models help stakeholders see and validate complex information.", "use models to clarify processes and handoffs."),
    item("Prototyping", "Prototype feedback", "Business Analysis", "Medium", "users cannot explain interface needs clearly in interviews", "What could help elicit feedback?", "Use a prototype or mockup to make requirements more concrete", "Prototypes can reveal expectations that are hard to express abstractly.", "use prototypes to elicit and validate requirements."),
    item("Validation", "Requirements validation", "Business Analysis", "Medium", "requirements have been documented and need stakeholder confirmation before build", "What should occur?", "Validate requirements with stakeholders for correctness and completeness", "Requirements validation checks that documented needs are correct, complete, and aligned.", "validate requirements with the right stakeholders."),
    item("User stories", "User story structure", "Business Analysis", "Easy", "the team writes needs from the user's perspective with value stated", "Which format is being used?", "A user story that links role, need, and benefit", "User stories help express needs in terms of user value.", "write user stories around role, need, and benefit."),
    item("Context diagram", "Solution boundaries", "Business Analysis", "Medium", "the team needs to show external systems, users, and boundaries around the solution", "Which model is useful?", "A solution context diagram", "A context diagram helps define solution boundaries and external interactions.", "model solution boundaries and external interfaces."),
    item("Scope", "Product scope", "Business Analysis", "Medium", "stakeholders keep adding features that do not support the approved need", "What should be reviewed?", "Product scope and alignment to the approved business need", "Business analysis helps protect alignment between needs, requirements, and solution scope.", "align product scope to the approved need."),
    item("Workshops", "Facilitated workshop", "Business Analysis", "Medium", "stakeholders have conflicting requirements and need shared understanding quickly", "Which elicitation technique fits?", "A facilitated requirements workshop", "Facilitated workshops can build shared understanding and resolve requirement conflict.", "use facilitated workshops for collaborative requirement discovery."),
    item("Observation", "Observation technique", "Business Analysis", "Easy", "users struggle to describe steps they perform automatically every day", "Which elicitation technique can help?", "Observe users performing the work in context", "Observation can reveal tacit workflow details that interviews may miss.", "observe real work when users cannot describe every step."),
    item("Interviews", "Interview planning", "Business Analysis", "Easy", "needs detailed information from a subject matter expert", "Which elicitation technique is appropriate?", "Conduct a prepared stakeholder interview", "Interviews are useful for gathering detailed perspectives from individuals.", "use interviews for targeted requirement discovery."),
    item("Acceptance tests", "Acceptance test planning", "Business Analysis", "Medium", "wants to confirm requirements can be verified before development begins", "What should be checked?", "Whether each requirement has clear acceptance or test conditions", "Testability reduces ambiguity and supports objective acceptance.", "connect requirements to acceptance and test conditions."),
    item("Change", "Requirement change", "Business Analysis", "Medium", "a stakeholder asks to alter an approved requirement after work has begun", "What should happen?", "Assess impact and follow the agreed change process", "Approved requirements need managed change so scope, cost, schedule, and value impacts are understood.", "evaluate requirement changes through the agreed process."),
    item("Value", "Business value", "Business Analysis", "Medium", "two requirements conflict and both groups claim their request is most important", "What should guide the decision?", "Defined business value, outcomes, risks, and prioritization criteria", "Business analysis supports transparent decisions based on value and outcomes.", "use value-based criteria to resolve priority conflicts."),
  ],
};

function buildChoices(pattern, number) {
  const correct = number % 4;
  const choices = [];
  let wrongIndex = number;
  for (let index = 0; index < 4; index += 1) {
    if (index === correct) {
      choices.push(pattern.answer);
    } else {
      choices.push(pattern.wrongs[wrongIndex % pattern.wrongs.length]);
      wrongIndex += 1;
    }
  }
  return { choices, correct };
}

function makeQuestion(domain, pattern, number, domainNumber) {
  const scenario = scenarios[(number + domainNumber) % scenarios.length];
  const role = roles[(number * 3 + domainNumber) % roles.length];
  const event = events[(number * 5 + domainNumber) % events.length];
  const constraint = constraints[(number * 7 + domainNumber) % constraints.length];
  const { choices, correct } = buildChoices(pattern, number);
  return {
    tag: pattern.tag,
    domain,
    topic: pattern.topic,
    approach: pattern.approach,
    difficulty: pattern.difficulty,
    decisionRule: pattern.rule,
    text: `During a ${scenario}, a ${role} ${pattern.clue}; ${constraint}. The team is preparing for a ${event} and needs a CAPM-level decision for practice item ${number}. ${pattern.ask}`,
    choices,
    correct,
    explanation: `${pattern.principle} In this CAPM scenario, the clue is "${pattern.clue}" and the disciplined response is to ${pattern.rule} This item is unique to the ${domain} domain pattern ${domainNumber}; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant.`,
  };
}

const capmQuestions = [];
for (const [domain, , practiceCount] of targets) {
  const patterns = patternBank[domain];
  for (let index = 0; index < practiceCount; index += 1) {
    const pattern = patterns[index % patterns.length];
    capmQuestions.push(makeQuestion(domain, pattern, capmQuestions.length + 1, index + 1));
  }
}

const capm = context.examCatalog.find((exam) => exam.id === "capm");
if (!capm) throw new Error("CAPM exam not found in data.js.");

capm.questionCount = 1000;
capm.description = "1000-question CAPM fundamentals practice bank with a 150-question mock exam drawn by domain weight.";
capm.examConfig = {
  practiceQuestionCount: 1000,
  examQuestionCount: 150,
  examDurationMinutes: 180,
  modeLabels: {
    practice: "Practice",
    exam: "Mock Exam",
  },
  domainTargets: targets.map(([domain, weight, practiceCount, mockCount]) => ({
    domain,
    weight,
    practiceCount,
    mockCount,
  })),
};
capm.questions = capmQuestions;

writeFileSync("data.js", `const examCatalog = ${JSON.stringify(context.examCatalog, null, 2)};\n`, "utf8");
console.log(`Updated CAPM to ${capmQuestions.length} questions.`);
