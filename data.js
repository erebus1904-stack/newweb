const examCatalog = [
  {
    "id": "pmp",
    "track": "project",
    "country": "Global",
    "region": "Project Management",
    "examType": "Project Management",
    "title": "PMP scenario practice bank",
    "subtitle": "PMI project management certification",
    "badge": "PMP",
    "questionCount": 250,
    "updated": "2026",
    "source": "PMI PMP Examination Content Outline",
    "coverage": [
      "People",
      "Process",
      "Business Environment",
      "Agile",
      "Hybrid",
      "Predictive"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "250-question PMP practice bank with a 180-question mock exam drawn by domain weight.",
    "questions": [
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented conflicting expectations in the decision log during a sponsor checkpoint 1. What should the project manager do first?",
        "choices": [
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 0,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 1; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the decision log during a backlog refinement session 2. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Facilitate a focused discussion so the team can compare options and decide",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team"
        ],
        "correct": 1,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 2; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented conflicting expectations in the decision log during a baseline review 3. What should the project manager review?",
        "choices": [
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Review stakeholder information needs and update the communication approach if needed",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 2,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 3; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the decision log during a release readiness meeting 4. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker",
          "Make the impediment visible and help remove the environment access blocker"
        ],
        "correct": 3,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 4; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented conflicting expectations in the decision log during a vendor coordination call 5. What is the best next action?",
        "choices": [
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 0,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 5; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Virtual teams",
        "domain": "People",
        "topic": "Distributed collaboration",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "create working agreements for distributed collaboration.",
        "text": "During a regulatory implementation, a customer representative finds handoffs are missed because team members rely on scattered messages; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the decision log during a steering committee update 6. What should be improved?",
        "choices": [
          "Require everyone to work the same time zone for the whole project",
          "Create working agreements for handoffs, response times, and shared information locations",
          "Stop written communication because messages created confusion",
          "Escalate every missed handoff before discussing working norms"
        ],
        "correct": 1,
        "explanation": "Virtual teams need explicit norms for handoffs and information sharing. In this PMP scenario, the clue is \"finds handoffs are missed because team members rely on scattered messages\" and the disciplined response is to create working agreements for distributed collaboration. This item is unique to the People domain pattern 6; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Product Owner",
        "domain": "People",
        "topic": "Backlog priority",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "preserve Product Owner accountability for backlog order.",
        "text": "During a mobile product release, a senior stakeholder is pressured by two stakeholders to choose their backlog items first; the release date is fixed. The team has documented conflicting expectations in the decision log during a lessons-learned discussion 7. What should happen?",
        "choices": [
          "Let the loudest stakeholder choose the next backlog item",
          "Ask developers to choose whichever item is technically easiest",
          "Facilitate a value discussion and let the Product Owner order the backlog",
          "Split every sprint equally across stakeholder requests without value review"
        ],
        "correct": 2,
        "explanation": "Backlog priority belongs to the Product Owner, informed by stakeholder value. In this PMP scenario, the clue is \"is pressured by two stakeholders to choose their backlog items first\" and the disciplined response is to preserve product owner accountability for backlog order. This item is unique to the People domain pattern 7; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Coaching",
        "domain": "People",
        "topic": "Skill gap",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "address skill gaps with enablement before blame.",
        "text": "During a facility upgrade, an operations manager sees repeated mistakes after a new tool is introduced; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the decision log during an acceptance review 8. What should the project manager do first?",
        "choices": [
          "Replace the team members before offering support",
          "Ask the customer to accept lower quality while the team learns",
          "Stop using the tool without evaluating the skill gap",
          "Arrange focused training or support so the team can use the tool correctly"
        ],
        "correct": 3,
        "explanation": "A new tool often creates a training need rather than a performance issue. In this PMP scenario, the clue is \"sees repeated mistakes after a new tool is introduced\" and the disciplined response is to address skill gaps with enablement before blame. This item is unique to the People domain pattern 8; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Negotiation",
        "domain": "People",
        "topic": "Competing stakeholder needs",
        "approach": "Hybrid",
        "difficulty": "Hard",
        "decisionRule": "facilitate alignment when stakeholder needs compete.",
        "text": "During a training program, a project coordinator hears marketing wants an immediate launch date while operations says support is not ready; the release date is fixed. The team has documented conflicting expectations in the decision log during a risk review 9. What should the project manager do?",
        "choices": [
          "Facilitate alignment on launch readiness, operational constraints, and decision criteria",
          "Let marketing announce the date to pressure operations",
          "Delay the launch indefinitely because operations has concerns",
          "Ask the project team to decide without stakeholder involvement"
        ],
        "correct": 0,
        "explanation": "Competing stakeholder needs require shared decision criteria and transparent constraints. In this PMP scenario, the clue is \"hears marketing wants an immediate launch date while operations says support is not ready\" and the disciplined response is to facilitate alignment when stakeholder needs compete. This item is unique to the People domain pattern 9; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Escalation",
        "domain": "People",
        "topic": "Authority threshold",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "escalate with impact analysis when authority is exceeded.",
        "text": "During a vendor transition, a team lead faces an issue that now requires executive approval outside project authority; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the decision log during a team working session 10. What should the escalation include?",
        "choices": [
          "Send only the issue title because executives prefer short messages",
          "Escalate with facts, impact, options, recommendation, and the decision needed",
          "Continue team-level fixes even though approval is outside authority",
          "Hide the issue until the deadline is definitely missed"
        ],
        "correct": 1,
        "explanation": "Escalation is appropriate when a decision exceeds the project manager's authority. In this PMP scenario, the clue is \"faces an issue that now requires executive approval outside project authority\" and the disciplined response is to escalate with impact analysis when authority is exceeded. This item is unique to the People domain pattern 10; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented conflicting expectations in the issue register during a sponsor checkpoint 11. What should the project manager do first?",
        "choices": [
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 2,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 11; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the issue register during a backlog refinement session 12. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team",
          "Facilitate a focused discussion so the team can compare options and decide"
        ],
        "correct": 3,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 12; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented conflicting expectations in the issue register during a baseline review 13. What should the project manager review?",
        "choices": [
          "Review stakeholder information needs and update the communication approach if needed",
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 0,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 13; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the issue register during a release readiness meeting 14. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Make the impediment visible and help remove the environment access blocker",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker"
        ],
        "correct": 1,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 14; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented conflicting expectations in the issue register during a vendor coordination call 15. What is the best next action?",
        "choices": [
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 2,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 15; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Virtual teams",
        "domain": "People",
        "topic": "Distributed collaboration",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "create working agreements for distributed collaboration.",
        "text": "During a regulatory implementation, a customer representative finds handoffs are missed because team members rely on scattered messages; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the issue register during a steering committee update 16. What should be improved?",
        "choices": [
          "Require everyone to work the same time zone for the whole project",
          "Stop written communication because messages created confusion",
          "Escalate every missed handoff before discussing working norms",
          "Create working agreements for handoffs, response times, and shared information locations"
        ],
        "correct": 3,
        "explanation": "Virtual teams need explicit norms for handoffs and information sharing. In this PMP scenario, the clue is \"finds handoffs are missed because team members rely on scattered messages\" and the disciplined response is to create working agreements for distributed collaboration. This item is unique to the People domain pattern 16; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Product Owner",
        "domain": "People",
        "topic": "Backlog priority",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "preserve Product Owner accountability for backlog order.",
        "text": "During a mobile product release, a senior stakeholder is pressured by two stakeholders to choose their backlog items first; the release date is fixed. The team has documented conflicting expectations in the issue register during a lessons-learned discussion 17. What should happen?",
        "choices": [
          "Facilitate a value discussion and let the Product Owner order the backlog",
          "Let the loudest stakeholder choose the next backlog item",
          "Ask developers to choose whichever item is technically easiest",
          "Split every sprint equally across stakeholder requests without value review"
        ],
        "correct": 0,
        "explanation": "Backlog priority belongs to the Product Owner, informed by stakeholder value. In this PMP scenario, the clue is \"is pressured by two stakeholders to choose their backlog items first\" and the disciplined response is to preserve product owner accountability for backlog order. This item is unique to the People domain pattern 17; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Coaching",
        "domain": "People",
        "topic": "Skill gap",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "address skill gaps with enablement before blame.",
        "text": "During a facility upgrade, an operations manager sees repeated mistakes after a new tool is introduced; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the issue register during an acceptance review 18. What should the project manager do first?",
        "choices": [
          "Replace the team members before offering support",
          "Arrange focused training or support so the team can use the tool correctly",
          "Ask the customer to accept lower quality while the team learns",
          "Stop using the tool without evaluating the skill gap"
        ],
        "correct": 1,
        "explanation": "A new tool often creates a training need rather than a performance issue. In this PMP scenario, the clue is \"sees repeated mistakes after a new tool is introduced\" and the disciplined response is to address skill gaps with enablement before blame. This item is unique to the People domain pattern 18; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Negotiation",
        "domain": "People",
        "topic": "Competing stakeholder needs",
        "approach": "Hybrid",
        "difficulty": "Hard",
        "decisionRule": "facilitate alignment when stakeholder needs compete.",
        "text": "During a training program, a project coordinator hears marketing wants an immediate launch date while operations says support is not ready; the release date is fixed. The team has documented conflicting expectations in the issue register during a risk review 19. What should the project manager do?",
        "choices": [
          "Let marketing announce the date to pressure operations",
          "Delay the launch indefinitely because operations has concerns",
          "Facilitate alignment on launch readiness, operational constraints, and decision criteria",
          "Ask the project team to decide without stakeholder involvement"
        ],
        "correct": 2,
        "explanation": "Competing stakeholder needs require shared decision criteria and transparent constraints. In this PMP scenario, the clue is \"hears marketing wants an immediate launch date while operations says support is not ready\" and the disciplined response is to facilitate alignment when stakeholder needs compete. This item is unique to the People domain pattern 19; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Escalation",
        "domain": "People",
        "topic": "Authority threshold",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "escalate with impact analysis when authority is exceeded.",
        "text": "During a vendor transition, a team lead faces an issue that now requires executive approval outside project authority; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the issue register during a team working session 20. What should the escalation include?",
        "choices": [
          "Send only the issue title because executives prefer short messages",
          "Continue team-level fixes even though approval is outside authority",
          "Hide the issue until the deadline is definitely missed",
          "Escalate with facts, impact, options, recommendation, and the decision needed"
        ],
        "correct": 3,
        "explanation": "Escalation is appropriate when a decision exceeds the project manager's authority. In this PMP scenario, the clue is \"faces an issue that now requires executive approval outside project authority\" and the disciplined response is to escalate with impact analysis when authority is exceeded. This item is unique to the People domain pattern 20; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented conflicting expectations in the stakeholder register during a sponsor checkpoint 21. What should the project manager do first?",
        "choices": [
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 0,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 21; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the stakeholder register during a backlog refinement session 22. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Facilitate a focused discussion so the team can compare options and decide",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team"
        ],
        "correct": 1,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 22; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented conflicting expectations in the stakeholder register during a baseline review 23. What should the project manager review?",
        "choices": [
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Review stakeholder information needs and update the communication approach if needed",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 2,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 23; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the stakeholder register during a release readiness meeting 24. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker",
          "Make the impediment visible and help remove the environment access blocker"
        ],
        "correct": 3,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 24; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented conflicting expectations in the stakeholder register during a vendor coordination call 25. What is the best next action?",
        "choices": [
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 0,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 25; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Virtual teams",
        "domain": "People",
        "topic": "Distributed collaboration",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "create working agreements for distributed collaboration.",
        "text": "During a regulatory implementation, a customer representative finds handoffs are missed because team members rely on scattered messages; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the stakeholder register during a steering committee update 26. What should be improved?",
        "choices": [
          "Require everyone to work the same time zone for the whole project",
          "Create working agreements for handoffs, response times, and shared information locations",
          "Stop written communication because messages created confusion",
          "Escalate every missed handoff before discussing working norms"
        ],
        "correct": 1,
        "explanation": "Virtual teams need explicit norms for handoffs and information sharing. In this PMP scenario, the clue is \"finds handoffs are missed because team members rely on scattered messages\" and the disciplined response is to create working agreements for distributed collaboration. This item is unique to the People domain pattern 26; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Product Owner",
        "domain": "People",
        "topic": "Backlog priority",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "preserve Product Owner accountability for backlog order.",
        "text": "During a mobile product release, a senior stakeholder is pressured by two stakeholders to choose their backlog items first; the release date is fixed. The team has documented conflicting expectations in the stakeholder register during a lessons-learned discussion 27. What should happen?",
        "choices": [
          "Let the loudest stakeholder choose the next backlog item",
          "Ask developers to choose whichever item is technically easiest",
          "Facilitate a value discussion and let the Product Owner order the backlog",
          "Split every sprint equally across stakeholder requests without value review"
        ],
        "correct": 2,
        "explanation": "Backlog priority belongs to the Product Owner, informed by stakeholder value. In this PMP scenario, the clue is \"is pressured by two stakeholders to choose their backlog items first\" and the disciplined response is to preserve product owner accountability for backlog order. This item is unique to the People domain pattern 27; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Coaching",
        "domain": "People",
        "topic": "Skill gap",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "address skill gaps with enablement before blame.",
        "text": "During a facility upgrade, an operations manager sees repeated mistakes after a new tool is introduced; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the stakeholder register during an acceptance review 28. What should the project manager do first?",
        "choices": [
          "Replace the team members before offering support",
          "Ask the customer to accept lower quality while the team learns",
          "Stop using the tool without evaluating the skill gap",
          "Arrange focused training or support so the team can use the tool correctly"
        ],
        "correct": 3,
        "explanation": "A new tool often creates a training need rather than a performance issue. In this PMP scenario, the clue is \"sees repeated mistakes after a new tool is introduced\" and the disciplined response is to address skill gaps with enablement before blame. This item is unique to the People domain pattern 28; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Negotiation",
        "domain": "People",
        "topic": "Competing stakeholder needs",
        "approach": "Hybrid",
        "difficulty": "Hard",
        "decisionRule": "facilitate alignment when stakeholder needs compete.",
        "text": "During a training program, a project coordinator hears marketing wants an immediate launch date while operations says support is not ready; the release date is fixed. The team has documented conflicting expectations in the stakeholder register during a risk review 29. What should the project manager do?",
        "choices": [
          "Facilitate alignment on launch readiness, operational constraints, and decision criteria",
          "Let marketing announce the date to pressure operations",
          "Delay the launch indefinitely because operations has concerns",
          "Ask the project team to decide without stakeholder involvement"
        ],
        "correct": 0,
        "explanation": "Competing stakeholder needs require shared decision criteria and transparent constraints. In this PMP scenario, the clue is \"hears marketing wants an immediate launch date while operations says support is not ready\" and the disciplined response is to facilitate alignment when stakeholder needs compete. This item is unique to the People domain pattern 29; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Escalation",
        "domain": "People",
        "topic": "Authority threshold",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "escalate with impact analysis when authority is exceeded.",
        "text": "During a vendor transition, a team lead faces an issue that now requires executive approval outside project authority; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the stakeholder register during a team working session 30. What should the escalation include?",
        "choices": [
          "Send only the issue title because executives prefer short messages",
          "Escalate with facts, impact, options, recommendation, and the decision needed",
          "Continue team-level fixes even though approval is outside authority",
          "Hide the issue until the deadline is definitely missed"
        ],
        "correct": 1,
        "explanation": "Escalation is appropriate when a decision exceeds the project manager's authority. In this PMP scenario, the clue is \"faces an issue that now requires executive approval outside project authority\" and the disciplined response is to escalate with impact analysis when authority is exceeded. This item is unique to the People domain pattern 30; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented conflicting expectations in the risk response notes during a sponsor checkpoint 31. What should the project manager do first?",
        "choices": [
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 2,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 31; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the risk response notes during a backlog refinement session 32. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team",
          "Facilitate a focused discussion so the team can compare options and decide"
        ],
        "correct": 3,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 32; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented conflicting expectations in the risk response notes during a baseline review 33. What should the project manager review?",
        "choices": [
          "Review stakeholder information needs and update the communication approach if needed",
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 0,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 33; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the risk response notes during a release readiness meeting 34. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Make the impediment visible and help remove the environment access blocker",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker"
        ],
        "correct": 1,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 34; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented conflicting expectations in the risk response notes during a vendor coordination call 35. What is the best next action?",
        "choices": [
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 2,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 35; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Virtual teams",
        "domain": "People",
        "topic": "Distributed collaboration",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "create working agreements for distributed collaboration.",
        "text": "During a regulatory implementation, a customer representative finds handoffs are missed because team members rely on scattered messages; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the risk response notes during a steering committee update 36. What should be improved?",
        "choices": [
          "Require everyone to work the same time zone for the whole project",
          "Stop written communication because messages created confusion",
          "Escalate every missed handoff before discussing working norms",
          "Create working agreements for handoffs, response times, and shared information locations"
        ],
        "correct": 3,
        "explanation": "Virtual teams need explicit norms for handoffs and information sharing. In this PMP scenario, the clue is \"finds handoffs are missed because team members rely on scattered messages\" and the disciplined response is to create working agreements for distributed collaboration. This item is unique to the People domain pattern 36; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Product Owner",
        "domain": "People",
        "topic": "Backlog priority",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "preserve Product Owner accountability for backlog order.",
        "text": "During a mobile product release, a senior stakeholder is pressured by two stakeholders to choose their backlog items first; the release date is fixed. The team has documented conflicting expectations in the risk response notes during a lessons-learned discussion 37. What should happen?",
        "choices": [
          "Facilitate a value discussion and let the Product Owner order the backlog",
          "Let the loudest stakeholder choose the next backlog item",
          "Ask developers to choose whichever item is technically easiest",
          "Split every sprint equally across stakeholder requests without value review"
        ],
        "correct": 0,
        "explanation": "Backlog priority belongs to the Product Owner, informed by stakeholder value. In this PMP scenario, the clue is \"is pressured by two stakeholders to choose their backlog items first\" and the disciplined response is to preserve product owner accountability for backlog order. This item is unique to the People domain pattern 37; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Coaching",
        "domain": "People",
        "topic": "Skill gap",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "address skill gaps with enablement before blame.",
        "text": "During a facility upgrade, an operations manager sees repeated mistakes after a new tool is introduced; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the risk response notes during an acceptance review 38. What should the project manager do first?",
        "choices": [
          "Replace the team members before offering support",
          "Arrange focused training or support so the team can use the tool correctly",
          "Ask the customer to accept lower quality while the team learns",
          "Stop using the tool without evaluating the skill gap"
        ],
        "correct": 1,
        "explanation": "A new tool often creates a training need rather than a performance issue. In this PMP scenario, the clue is \"sees repeated mistakes after a new tool is introduced\" and the disciplined response is to address skill gaps with enablement before blame. This item is unique to the People domain pattern 38; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Negotiation",
        "domain": "People",
        "topic": "Competing stakeholder needs",
        "approach": "Hybrid",
        "difficulty": "Hard",
        "decisionRule": "facilitate alignment when stakeholder needs compete.",
        "text": "During a training program, a project coordinator hears marketing wants an immediate launch date while operations says support is not ready; the release date is fixed. The team has documented conflicting expectations in the risk response notes during a risk review 39. What should the project manager do?",
        "choices": [
          "Let marketing announce the date to pressure operations",
          "Delay the launch indefinitely because operations has concerns",
          "Facilitate alignment on launch readiness, operational constraints, and decision criteria",
          "Ask the project team to decide without stakeholder involvement"
        ],
        "correct": 2,
        "explanation": "Competing stakeholder needs require shared decision criteria and transparent constraints. In this PMP scenario, the clue is \"hears marketing wants an immediate launch date while operations says support is not ready\" and the disciplined response is to facilitate alignment when stakeholder needs compete. This item is unique to the People domain pattern 39; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Escalation",
        "domain": "People",
        "topic": "Authority threshold",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "escalate with impact analysis when authority is exceeded.",
        "text": "During a vendor transition, a team lead faces an issue that now requires executive approval outside project authority; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the risk response notes during a team working session 40. What should the escalation include?",
        "choices": [
          "Send only the issue title because executives prefer short messages",
          "Continue team-level fixes even though approval is outside authority",
          "Hide the issue until the deadline is definitely missed",
          "Escalate with facts, impact, options, recommendation, and the decision needed"
        ],
        "correct": 3,
        "explanation": "Escalation is appropriate when a decision exceeds the project manager's authority. In this PMP scenario, the clue is \"faces an issue that now requires executive approval outside project authority\" and the disciplined response is to escalate with impact analysis when authority is exceeded. This item is unique to the People domain pattern 40; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented conflicting expectations in the communications plan during a sponsor checkpoint 41. What should the project manager do first?",
        "choices": [
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 0,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 41; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the communications plan during a backlog refinement session 42. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Facilitate a focused discussion so the team can compare options and decide",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team"
        ],
        "correct": 1,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 42; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented conflicting expectations in the communications plan during a baseline review 43. What should the project manager review?",
        "choices": [
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Review stakeholder information needs and update the communication approach if needed",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 2,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 43; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the communications plan during a release readiness meeting 44. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker",
          "Make the impediment visible and help remove the environment access blocker"
        ],
        "correct": 3,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 44; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented conflicting expectations in the communications plan during a vendor coordination call 45. What is the best next action?",
        "choices": [
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 0,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 45; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Virtual teams",
        "domain": "People",
        "topic": "Distributed collaboration",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "create working agreements for distributed collaboration.",
        "text": "During a regulatory implementation, a customer representative finds handoffs are missed because team members rely on scattered messages; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the communications plan during a steering committee update 46. What should be improved?",
        "choices": [
          "Require everyone to work the same time zone for the whole project",
          "Create working agreements for handoffs, response times, and shared information locations",
          "Stop written communication because messages created confusion",
          "Escalate every missed handoff before discussing working norms"
        ],
        "correct": 1,
        "explanation": "Virtual teams need explicit norms for handoffs and information sharing. In this PMP scenario, the clue is \"finds handoffs are missed because team members rely on scattered messages\" and the disciplined response is to create working agreements for distributed collaboration. This item is unique to the People domain pattern 46; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Product Owner",
        "domain": "People",
        "topic": "Backlog priority",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "preserve Product Owner accountability for backlog order.",
        "text": "During a mobile product release, a senior stakeholder is pressured by two stakeholders to choose their backlog items first; the release date is fixed. The team has documented conflicting expectations in the communications plan during a lessons-learned discussion 47. What should happen?",
        "choices": [
          "Let the loudest stakeholder choose the next backlog item",
          "Ask developers to choose whichever item is technically easiest",
          "Facilitate a value discussion and let the Product Owner order the backlog",
          "Split every sprint equally across stakeholder requests without value review"
        ],
        "correct": 2,
        "explanation": "Backlog priority belongs to the Product Owner, informed by stakeholder value. In this PMP scenario, the clue is \"is pressured by two stakeholders to choose their backlog items first\" and the disciplined response is to preserve product owner accountability for backlog order. This item is unique to the People domain pattern 47; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Coaching",
        "domain": "People",
        "topic": "Skill gap",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "address skill gaps with enablement before blame.",
        "text": "During a facility upgrade, an operations manager sees repeated mistakes after a new tool is introduced; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the communications plan during an acceptance review 48. What should the project manager do first?",
        "choices": [
          "Replace the team members before offering support",
          "Ask the customer to accept lower quality while the team learns",
          "Stop using the tool without evaluating the skill gap",
          "Arrange focused training or support so the team can use the tool correctly"
        ],
        "correct": 3,
        "explanation": "A new tool often creates a training need rather than a performance issue. In this PMP scenario, the clue is \"sees repeated mistakes after a new tool is introduced\" and the disciplined response is to address skill gaps with enablement before blame. This item is unique to the People domain pattern 48; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Negotiation",
        "domain": "People",
        "topic": "Competing stakeholder needs",
        "approach": "Hybrid",
        "difficulty": "Hard",
        "decisionRule": "facilitate alignment when stakeholder needs compete.",
        "text": "During a training program, a project coordinator hears marketing wants an immediate launch date while operations says support is not ready; the release date is fixed. The team has documented conflicting expectations in the communications plan during a risk review 49. What should the project manager do?",
        "choices": [
          "Facilitate alignment on launch readiness, operational constraints, and decision criteria",
          "Let marketing announce the date to pressure operations",
          "Delay the launch indefinitely because operations has concerns",
          "Ask the project team to decide without stakeholder involvement"
        ],
        "correct": 0,
        "explanation": "Competing stakeholder needs require shared decision criteria and transparent constraints. In this PMP scenario, the clue is \"hears marketing wants an immediate launch date while operations says support is not ready\" and the disciplined response is to facilitate alignment when stakeholder needs compete. This item is unique to the People domain pattern 49; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Escalation",
        "domain": "People",
        "topic": "Authority threshold",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "escalate with impact analysis when authority is exceeded.",
        "text": "During a vendor transition, a team lead faces an issue that now requires executive approval outside project authority; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the communications plan during a team working session 50. What should the escalation include?",
        "choices": [
          "Send only the issue title because executives prefer short messages",
          "Escalate with facts, impact, options, recommendation, and the decision needed",
          "Continue team-level fixes even though approval is outside authority",
          "Hide the issue until the deadline is definitely missed"
        ],
        "correct": 1,
        "explanation": "Escalation is appropriate when a decision exceeds the project manager's authority. In this PMP scenario, the clue is \"faces an issue that now requires executive approval outside project authority\" and the disciplined response is to escalate with impact analysis when authority is exceeded. This item is unique to the People domain pattern 50; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented conflicting expectations in the change request queue during a sponsor checkpoint 51. What should the project manager do first?",
        "choices": [
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 2,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 51; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the change request queue during a backlog refinement session 52. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team",
          "Facilitate a focused discussion so the team can compare options and decide"
        ],
        "correct": 3,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 52; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented conflicting expectations in the change request queue during a baseline review 53. What should the project manager review?",
        "choices": [
          "Review stakeholder information needs and update the communication approach if needed",
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 0,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 53; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the change request queue during a release readiness meeting 54. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Make the impediment visible and help remove the environment access blocker",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker"
        ],
        "correct": 1,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 54; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented conflicting expectations in the change request queue during a vendor coordination call 55. What is the best next action?",
        "choices": [
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 2,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 55; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Virtual teams",
        "domain": "People",
        "topic": "Distributed collaboration",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "create working agreements for distributed collaboration.",
        "text": "During a regulatory implementation, a customer representative finds handoffs are missed because team members rely on scattered messages; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the change request queue during a steering committee update 56. What should be improved?",
        "choices": [
          "Require everyone to work the same time zone for the whole project",
          "Stop written communication because messages created confusion",
          "Escalate every missed handoff before discussing working norms",
          "Create working agreements for handoffs, response times, and shared information locations"
        ],
        "correct": 3,
        "explanation": "Virtual teams need explicit norms for handoffs and information sharing. In this PMP scenario, the clue is \"finds handoffs are missed because team members rely on scattered messages\" and the disciplined response is to create working agreements for distributed collaboration. This item is unique to the People domain pattern 56; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Product Owner",
        "domain": "People",
        "topic": "Backlog priority",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "preserve Product Owner accountability for backlog order.",
        "text": "During a mobile product release, a senior stakeholder is pressured by two stakeholders to choose their backlog items first; the release date is fixed. The team has documented conflicting expectations in the change request queue during a lessons-learned discussion 57. What should happen?",
        "choices": [
          "Facilitate a value discussion and let the Product Owner order the backlog",
          "Let the loudest stakeholder choose the next backlog item",
          "Ask developers to choose whichever item is technically easiest",
          "Split every sprint equally across stakeholder requests without value review"
        ],
        "correct": 0,
        "explanation": "Backlog priority belongs to the Product Owner, informed by stakeholder value. In this PMP scenario, the clue is \"is pressured by two stakeholders to choose their backlog items first\" and the disciplined response is to preserve product owner accountability for backlog order. This item is unique to the People domain pattern 57; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Coaching",
        "domain": "People",
        "topic": "Skill gap",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "address skill gaps with enablement before blame.",
        "text": "During a facility upgrade, an operations manager sees repeated mistakes after a new tool is introduced; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the change request queue during an acceptance review 58. What should the project manager do first?",
        "choices": [
          "Replace the team members before offering support",
          "Arrange focused training or support so the team can use the tool correctly",
          "Ask the customer to accept lower quality while the team learns",
          "Stop using the tool without evaluating the skill gap"
        ],
        "correct": 1,
        "explanation": "A new tool often creates a training need rather than a performance issue. In this PMP scenario, the clue is \"sees repeated mistakes after a new tool is introduced\" and the disciplined response is to address skill gaps with enablement before blame. This item is unique to the People domain pattern 58; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Negotiation",
        "domain": "People",
        "topic": "Competing stakeholder needs",
        "approach": "Hybrid",
        "difficulty": "Hard",
        "decisionRule": "facilitate alignment when stakeholder needs compete.",
        "text": "During a training program, a project coordinator hears marketing wants an immediate launch date while operations says support is not ready; the release date is fixed. The team has documented conflicting expectations in the change request queue during a risk review 59. What should the project manager do?",
        "choices": [
          "Let marketing announce the date to pressure operations",
          "Delay the launch indefinitely because operations has concerns",
          "Facilitate alignment on launch readiness, operational constraints, and decision criteria",
          "Ask the project team to decide without stakeholder involvement"
        ],
        "correct": 2,
        "explanation": "Competing stakeholder needs require shared decision criteria and transparent constraints. In this PMP scenario, the clue is \"hears marketing wants an immediate launch date while operations says support is not ready\" and the disciplined response is to facilitate alignment when stakeholder needs compete. This item is unique to the People domain pattern 59; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Escalation",
        "domain": "People",
        "topic": "Authority threshold",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "escalate with impact analysis when authority is exceeded.",
        "text": "During a vendor transition, a team lead faces an issue that now requires executive approval outside project authority; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the change request queue during a team working session 60. What should the escalation include?",
        "choices": [
          "Send only the issue title because executives prefer short messages",
          "Continue team-level fixes even though approval is outside authority",
          "Hide the issue until the deadline is definitely missed",
          "Escalate with facts, impact, options, recommendation, and the decision needed"
        ],
        "correct": 3,
        "explanation": "Escalation is appropriate when a decision exceeds the project manager's authority. In this PMP scenario, the clue is \"faces an issue that now requires executive approval outside project authority\" and the disciplined response is to escalate with impact analysis when authority is exceeded. This item is unique to the People domain pattern 60; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented conflicting expectations in the product backlog during a sponsor checkpoint 61. What should the project manager do first?",
        "choices": [
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 0,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 61; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the product backlog during a backlog refinement session 62. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Facilitate a focused discussion so the team can compare options and decide",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team"
        ],
        "correct": 1,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 62; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented conflicting expectations in the product backlog during a baseline review 63. What should the project manager review?",
        "choices": [
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Review stakeholder information needs and update the communication approach if needed",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 2,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 63; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the product backlog during a release readiness meeting 64. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker",
          "Make the impediment visible and help remove the environment access blocker"
        ],
        "correct": 3,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 64; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented conflicting expectations in the product backlog during a vendor coordination call 65. What is the best next action?",
        "choices": [
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 0,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 65; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Virtual teams",
        "domain": "People",
        "topic": "Distributed collaboration",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "create working agreements for distributed collaboration.",
        "text": "During a regulatory implementation, a customer representative finds handoffs are missed because team members rely on scattered messages; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the product backlog during a steering committee update 66. What should be improved?",
        "choices": [
          "Require everyone to work the same time zone for the whole project",
          "Create working agreements for handoffs, response times, and shared information locations",
          "Stop written communication because messages created confusion",
          "Escalate every missed handoff before discussing working norms"
        ],
        "correct": 1,
        "explanation": "Virtual teams need explicit norms for handoffs and information sharing. In this PMP scenario, the clue is \"finds handoffs are missed because team members rely on scattered messages\" and the disciplined response is to create working agreements for distributed collaboration. This item is unique to the People domain pattern 66; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Product Owner",
        "domain": "People",
        "topic": "Backlog priority",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "preserve Product Owner accountability for backlog order.",
        "text": "During a mobile product release, a senior stakeholder is pressured by two stakeholders to choose their backlog items first; the release date is fixed. The team has documented conflicting expectations in the product backlog during a lessons-learned discussion 67. What should happen?",
        "choices": [
          "Let the loudest stakeholder choose the next backlog item",
          "Ask developers to choose whichever item is technically easiest",
          "Facilitate a value discussion and let the Product Owner order the backlog",
          "Split every sprint equally across stakeholder requests without value review"
        ],
        "correct": 2,
        "explanation": "Backlog priority belongs to the Product Owner, informed by stakeholder value. In this PMP scenario, the clue is \"is pressured by two stakeholders to choose their backlog items first\" and the disciplined response is to preserve product owner accountability for backlog order. This item is unique to the People domain pattern 67; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Coaching",
        "domain": "People",
        "topic": "Skill gap",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "address skill gaps with enablement before blame.",
        "text": "During a facility upgrade, an operations manager sees repeated mistakes after a new tool is introduced; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the product backlog during an acceptance review 68. What should the project manager do first?",
        "choices": [
          "Replace the team members before offering support",
          "Ask the customer to accept lower quality while the team learns",
          "Stop using the tool without evaluating the skill gap",
          "Arrange focused training or support so the team can use the tool correctly"
        ],
        "correct": 3,
        "explanation": "A new tool often creates a training need rather than a performance issue. In this PMP scenario, the clue is \"sees repeated mistakes after a new tool is introduced\" and the disciplined response is to address skill gaps with enablement before blame. This item is unique to the People domain pattern 68; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Negotiation",
        "domain": "People",
        "topic": "Competing stakeholder needs",
        "approach": "Hybrid",
        "difficulty": "Hard",
        "decisionRule": "facilitate alignment when stakeholder needs compete.",
        "text": "During a training program, a project coordinator hears marketing wants an immediate launch date while operations says support is not ready; the release date is fixed. The team has documented conflicting expectations in the product backlog during a risk review 69. What should the project manager do?",
        "choices": [
          "Facilitate alignment on launch readiness, operational constraints, and decision criteria",
          "Let marketing announce the date to pressure operations",
          "Delay the launch indefinitely because operations has concerns",
          "Ask the project team to decide without stakeholder involvement"
        ],
        "correct": 0,
        "explanation": "Competing stakeholder needs require shared decision criteria and transparent constraints. In this PMP scenario, the clue is \"hears marketing wants an immediate launch date while operations says support is not ready\" and the disciplined response is to facilitate alignment when stakeholder needs compete. This item is unique to the People domain pattern 69; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Escalation",
        "domain": "People",
        "topic": "Authority threshold",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "escalate with impact analysis when authority is exceeded.",
        "text": "During a vendor transition, a team lead faces an issue that now requires executive approval outside project authority; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the product backlog during a team working session 70. What should the escalation include?",
        "choices": [
          "Send only the issue title because executives prefer short messages",
          "Escalate with facts, impact, options, recommendation, and the decision needed",
          "Continue team-level fixes even though approval is outside authority",
          "Hide the issue until the deadline is definitely missed"
        ],
        "correct": 1,
        "explanation": "Escalation is appropriate when a decision exceeds the project manager's authority. In this PMP scenario, the clue is \"faces an issue that now requires executive approval outside project authority\" and the disciplined response is to escalate with impact analysis when authority is exceeded. This item is unique to the People domain pattern 70; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented conflicting expectations in the requirements traceability matrix during a sponsor checkpoint 71. What should the project manager do first?",
        "choices": [
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 2,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 71; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the requirements traceability matrix during a backlog refinement session 72. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team",
          "Facilitate a focused discussion so the team can compare options and decide"
        ],
        "correct": 3,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 72; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented conflicting expectations in the requirements traceability matrix during a baseline review 73. What should the project manager review?",
        "choices": [
          "Review stakeholder information needs and update the communication approach if needed",
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 0,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 73; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the requirements traceability matrix during a release readiness meeting 74. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Make the impediment visible and help remove the environment access blocker",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker"
        ],
        "correct": 1,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 74; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented conflicting expectations in the requirements traceability matrix during a vendor coordination call 75. What is the best next action?",
        "choices": [
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 2,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 75; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Virtual teams",
        "domain": "People",
        "topic": "Distributed collaboration",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "create working agreements for distributed collaboration.",
        "text": "During a regulatory implementation, a customer representative finds handoffs are missed because team members rely on scattered messages; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the requirements traceability matrix during a steering committee update 76. What should be improved?",
        "choices": [
          "Require everyone to work the same time zone for the whole project",
          "Stop written communication because messages created confusion",
          "Escalate every missed handoff before discussing working norms",
          "Create working agreements for handoffs, response times, and shared information locations"
        ],
        "correct": 3,
        "explanation": "Virtual teams need explicit norms for handoffs and information sharing. In this PMP scenario, the clue is \"finds handoffs are missed because team members rely on scattered messages\" and the disciplined response is to create working agreements for distributed collaboration. This item is unique to the People domain pattern 76; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Product Owner",
        "domain": "People",
        "topic": "Backlog priority",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "preserve Product Owner accountability for backlog order.",
        "text": "During a mobile product release, a senior stakeholder is pressured by two stakeholders to choose their backlog items first; the release date is fixed. The team has documented conflicting expectations in the requirements traceability matrix during a lessons-learned discussion 77. What should happen?",
        "choices": [
          "Facilitate a value discussion and let the Product Owner order the backlog",
          "Let the loudest stakeholder choose the next backlog item",
          "Ask developers to choose whichever item is technically easiest",
          "Split every sprint equally across stakeholder requests without value review"
        ],
        "correct": 0,
        "explanation": "Backlog priority belongs to the Product Owner, informed by stakeholder value. In this PMP scenario, the clue is \"is pressured by two stakeholders to choose their backlog items first\" and the disciplined response is to preserve product owner accountability for backlog order. This item is unique to the People domain pattern 77; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Coaching",
        "domain": "People",
        "topic": "Skill gap",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "address skill gaps with enablement before blame.",
        "text": "During a facility upgrade, an operations manager sees repeated mistakes after a new tool is introduced; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the requirements traceability matrix during an acceptance review 78. What should the project manager do first?",
        "choices": [
          "Replace the team members before offering support",
          "Arrange focused training or support so the team can use the tool correctly",
          "Ask the customer to accept lower quality while the team learns",
          "Stop using the tool without evaluating the skill gap"
        ],
        "correct": 1,
        "explanation": "A new tool often creates a training need rather than a performance issue. In this PMP scenario, the clue is \"sees repeated mistakes after a new tool is introduced\" and the disciplined response is to address skill gaps with enablement before blame. This item is unique to the People domain pattern 78; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Negotiation",
        "domain": "People",
        "topic": "Competing stakeholder needs",
        "approach": "Hybrid",
        "difficulty": "Hard",
        "decisionRule": "facilitate alignment when stakeholder needs compete.",
        "text": "During a training program, a project coordinator hears marketing wants an immediate launch date while operations says support is not ready; the release date is fixed. The team has documented conflicting expectations in the requirements traceability matrix during a risk review 79. What should the project manager do?",
        "choices": [
          "Let marketing announce the date to pressure operations",
          "Delay the launch indefinitely because operations has concerns",
          "Facilitate alignment on launch readiness, operational constraints, and decision criteria",
          "Ask the project team to decide without stakeholder involvement"
        ],
        "correct": 2,
        "explanation": "Competing stakeholder needs require shared decision criteria and transparent constraints. In this PMP scenario, the clue is \"hears marketing wants an immediate launch date while operations says support is not ready\" and the disciplined response is to facilitate alignment when stakeholder needs compete. This item is unique to the People domain pattern 79; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Escalation",
        "domain": "People",
        "topic": "Authority threshold",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "escalate with impact analysis when authority is exceeded.",
        "text": "During a vendor transition, a team lead faces an issue that now requires executive approval outside project authority; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the requirements traceability matrix during a team working session 80. What should the escalation include?",
        "choices": [
          "Send only the issue title because executives prefer short messages",
          "Continue team-level fixes even though approval is outside authority",
          "Hide the issue until the deadline is definitely missed",
          "Escalate with facts, impact, options, recommendation, and the decision needed"
        ],
        "correct": 3,
        "explanation": "Escalation is appropriate when a decision exceeds the project manager's authority. In this PMP scenario, the clue is \"faces an issue that now requires executive approval outside project authority\" and the disciplined response is to escalate with impact analysis when authority is exceeded. This item is unique to the People domain pattern 80; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented conflicting expectations in the schedule baseline during a sponsor checkpoint 81. What should the project manager do first?",
        "choices": [
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 0,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 81; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the schedule baseline during a backlog refinement session 82. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Facilitate a focused discussion so the team can compare options and decide",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team"
        ],
        "correct": 1,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 82; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented conflicting expectations in the schedule baseline during a baseline review 83. What should the project manager review?",
        "choices": [
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Review stakeholder information needs and update the communication approach if needed",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 2,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 83; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the schedule baseline during a release readiness meeting 84. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker",
          "Make the impediment visible and help remove the environment access blocker"
        ],
        "correct": 3,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 84; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented conflicting expectations in the schedule baseline during a vendor coordination call 85. What is the best next action?",
        "choices": [
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 0,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 85; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Virtual teams",
        "domain": "People",
        "topic": "Distributed collaboration",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "create working agreements for distributed collaboration.",
        "text": "During a regulatory implementation, a customer representative finds handoffs are missed because team members rely on scattered messages; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the schedule baseline during a steering committee update 86. What should be improved?",
        "choices": [
          "Require everyone to work the same time zone for the whole project",
          "Create working agreements for handoffs, response times, and shared information locations",
          "Stop written communication because messages created confusion",
          "Escalate every missed handoff before discussing working norms"
        ],
        "correct": 1,
        "explanation": "Virtual teams need explicit norms for handoffs and information sharing. In this PMP scenario, the clue is \"finds handoffs are missed because team members rely on scattered messages\" and the disciplined response is to create working agreements for distributed collaboration. This item is unique to the People domain pattern 86; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Product Owner",
        "domain": "People",
        "topic": "Backlog priority",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "preserve Product Owner accountability for backlog order.",
        "text": "During a mobile product release, a senior stakeholder is pressured by two stakeholders to choose their backlog items first; the release date is fixed. The team has documented conflicting expectations in the schedule baseline during a lessons-learned discussion 87. What should happen?",
        "choices": [
          "Let the loudest stakeholder choose the next backlog item",
          "Ask developers to choose whichever item is technically easiest",
          "Facilitate a value discussion and let the Product Owner order the backlog",
          "Split every sprint equally across stakeholder requests without value review"
        ],
        "correct": 2,
        "explanation": "Backlog priority belongs to the Product Owner, informed by stakeholder value. In this PMP scenario, the clue is \"is pressured by two stakeholders to choose their backlog items first\" and the disciplined response is to preserve product owner accountability for backlog order. This item is unique to the People domain pattern 87; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Coaching",
        "domain": "People",
        "topic": "Skill gap",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "address skill gaps with enablement before blame.",
        "text": "During a facility upgrade, an operations manager sees repeated mistakes after a new tool is introduced; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the schedule baseline during an acceptance review 88. What should the project manager do first?",
        "choices": [
          "Replace the team members before offering support",
          "Ask the customer to accept lower quality while the team learns",
          "Stop using the tool without evaluating the skill gap",
          "Arrange focused training or support so the team can use the tool correctly"
        ],
        "correct": 3,
        "explanation": "A new tool often creates a training need rather than a performance issue. In this PMP scenario, the clue is \"sees repeated mistakes after a new tool is introduced\" and the disciplined response is to address skill gaps with enablement before blame. This item is unique to the People domain pattern 88; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Negotiation",
        "domain": "People",
        "topic": "Competing stakeholder needs",
        "approach": "Hybrid",
        "difficulty": "Hard",
        "decisionRule": "facilitate alignment when stakeholder needs compete.",
        "text": "During a training program, a project coordinator hears marketing wants an immediate launch date while operations says support is not ready; the release date is fixed. The team has documented conflicting expectations in the schedule baseline during a risk review 89. What should the project manager do?",
        "choices": [
          "Facilitate alignment on launch readiness, operational constraints, and decision criteria",
          "Let marketing announce the date to pressure operations",
          "Delay the launch indefinitely because operations has concerns",
          "Ask the project team to decide without stakeholder involvement"
        ],
        "correct": 0,
        "explanation": "Competing stakeholder needs require shared decision criteria and transparent constraints. In this PMP scenario, the clue is \"hears marketing wants an immediate launch date while operations says support is not ready\" and the disciplined response is to facilitate alignment when stakeholder needs compete. This item is unique to the People domain pattern 89; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Escalation",
        "domain": "People",
        "topic": "Authority threshold",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "escalate with impact analysis when authority is exceeded.",
        "text": "During a vendor transition, a team lead faces an issue that now requires executive approval outside project authority; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the schedule baseline during a team working session 90. What should the escalation include?",
        "choices": [
          "Send only the issue title because executives prefer short messages",
          "Escalate with facts, impact, options, recommendation, and the decision needed",
          "Continue team-level fixes even though approval is outside authority",
          "Hide the issue until the deadline is definitely missed"
        ],
        "correct": 1,
        "explanation": "Escalation is appropriate when a decision exceeds the project manager's authority. In this PMP scenario, the clue is \"faces an issue that now requires executive approval outside project authority\" and the disciplined response is to escalate with impact analysis when authority is exceeded. This item is unique to the People domain pattern 90; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented conflicting expectations in the acceptance criteria during a sponsor checkpoint 91. What should the project manager do first?",
        "choices": [
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 2,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 91; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the acceptance criteria during a backlog refinement session 92. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team",
          "Facilitate a focused discussion so the team can compare options and decide"
        ],
        "correct": 3,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 92; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented conflicting expectations in the acceptance criteria during a baseline review 93. What should the project manager review?",
        "choices": [
          "Review stakeholder information needs and update the communication approach if needed",
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 0,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 93; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the acceptance criteria during a release readiness meeting 94. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Make the impediment visible and help remove the environment access blocker",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker"
        ],
        "correct": 1,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 94; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented conflicting expectations in the acceptance criteria during a vendor coordination call 95. What is the best next action?",
        "choices": [
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 2,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 95; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Virtual teams",
        "domain": "People",
        "topic": "Distributed collaboration",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "create working agreements for distributed collaboration.",
        "text": "During a regulatory implementation, a customer representative finds handoffs are missed because team members rely on scattered messages; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the acceptance criteria during a steering committee update 96. What should be improved?",
        "choices": [
          "Require everyone to work the same time zone for the whole project",
          "Stop written communication because messages created confusion",
          "Escalate every missed handoff before discussing working norms",
          "Create working agreements for handoffs, response times, and shared information locations"
        ],
        "correct": 3,
        "explanation": "Virtual teams need explicit norms for handoffs and information sharing. In this PMP scenario, the clue is \"finds handoffs are missed because team members rely on scattered messages\" and the disciplined response is to create working agreements for distributed collaboration. This item is unique to the People domain pattern 96; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Product Owner",
        "domain": "People",
        "topic": "Backlog priority",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "preserve Product Owner accountability for backlog order.",
        "text": "During a mobile product release, a senior stakeholder is pressured by two stakeholders to choose their backlog items first; the release date is fixed. The team has documented conflicting expectations in the acceptance criteria during a lessons-learned discussion 97. What should happen?",
        "choices": [
          "Facilitate a value discussion and let the Product Owner order the backlog",
          "Let the loudest stakeholder choose the next backlog item",
          "Ask developers to choose whichever item is technically easiest",
          "Split every sprint equally across stakeholder requests without value review"
        ],
        "correct": 0,
        "explanation": "Backlog priority belongs to the Product Owner, informed by stakeholder value. In this PMP scenario, the clue is \"is pressured by two stakeholders to choose their backlog items first\" and the disciplined response is to preserve product owner accountability for backlog order. This item is unique to the People domain pattern 97; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Coaching",
        "domain": "People",
        "topic": "Skill gap",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "address skill gaps with enablement before blame.",
        "text": "During a facility upgrade, an operations manager sees repeated mistakes after a new tool is introduced; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the acceptance criteria during an acceptance review 98. What should the project manager do first?",
        "choices": [
          "Replace the team members before offering support",
          "Arrange focused training or support so the team can use the tool correctly",
          "Ask the customer to accept lower quality while the team learns",
          "Stop using the tool without evaluating the skill gap"
        ],
        "correct": 1,
        "explanation": "A new tool often creates a training need rather than a performance issue. In this PMP scenario, the clue is \"sees repeated mistakes after a new tool is introduced\" and the disciplined response is to address skill gaps with enablement before blame. This item is unique to the People domain pattern 98; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Negotiation",
        "domain": "People",
        "topic": "Competing stakeholder needs",
        "approach": "Hybrid",
        "difficulty": "Hard",
        "decisionRule": "facilitate alignment when stakeholder needs compete.",
        "text": "During a training program, a project coordinator hears marketing wants an immediate launch date while operations says support is not ready; the release date is fixed. The team has documented conflicting expectations in the acceptance criteria during a risk review 99. What should the project manager do?",
        "choices": [
          "Let marketing announce the date to pressure operations",
          "Delay the launch indefinitely because operations has concerns",
          "Facilitate alignment on launch readiness, operational constraints, and decision criteria",
          "Ask the project team to decide without stakeholder involvement"
        ],
        "correct": 2,
        "explanation": "Competing stakeholder needs require shared decision criteria and transparent constraints. In this PMP scenario, the clue is \"hears marketing wants an immediate launch date while operations says support is not ready\" and the disciplined response is to facilitate alignment when stakeholder needs compete. This item is unique to the People domain pattern 99; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Escalation",
        "domain": "People",
        "topic": "Authority threshold",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "escalate with impact analysis when authority is exceeded.",
        "text": "During a vendor transition, a team lead faces an issue that now requires executive approval outside project authority; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the acceptance criteria during a team working session 100. What should the escalation include?",
        "choices": [
          "Send only the issue title because executives prefer short messages",
          "Continue team-level fixes even though approval is outside authority",
          "Hide the issue until the deadline is definitely missed",
          "Escalate with facts, impact, options, recommendation, and the decision needed"
        ],
        "correct": 3,
        "explanation": "Escalation is appropriate when a decision exceeds the project manager's authority. In this PMP scenario, the clue is \"faces an issue that now requires executive approval outside project authority\" and the disciplined response is to escalate with impact analysis when authority is exceeded. This item is unique to the People domain pattern 100; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "People",
        "topic": "Stakeholder conflict",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify expectations before escalating.",
        "text": "During a software rollout, a sponsor gives direction that conflicts with the agreed communication path; the release date is fixed. The team has documented unclear ownership in the decision log during a sponsor checkpoint 101. What should the project manager do first?",
        "choices": [
          "Clarify expectations, decision rights, and the agreed communication path with the stakeholder",
          "Ask the team to follow the request because the stakeholder has influence",
          "Escalate immediately to the sponsor without first understanding the concern",
          "Tell the team to ignore all future input from that stakeholder"
        ],
        "correct": 0,
        "explanation": "Conflicting stakeholder direction should be addressed through direct clarification before stronger action is taken. In this PMP scenario, the clue is \"gives direction that conflicts with the agreed communication path\" and the disciplined response is to clarify expectations before escalating. This item is unique to the People domain pattern 101; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Team",
        "domain": "People",
        "topic": "Team conflict",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "facilitate team ownership of technical decisions.",
        "text": "During a customer portal, a product owner notices two experienced team members disagreeing about the technical approach; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the decision log during a backlog refinement session 102. What should the servant leader do next?",
        "choices": [
          "Choose the technical approach personally to save time",
          "Facilitate a focused discussion so the team can compare options and decide",
          "Remove both team members from the discussion until they agree",
          "Ask the sponsor to decide the technical design for the team"
        ],
        "correct": 1,
        "explanation": "A servant leader helps the team resolve conflict without taking away ownership. In this PMP scenario, the clue is \"notices two experienced team members disagreeing about the technical approach\" and the disciplined response is to facilitate team ownership of technical decisions. This item is unique to the People domain pattern 102; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Communication",
        "domain": "People",
        "topic": "Communication plan mismatch",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "adapt communication to stakeholder decision needs.",
        "text": "During a process improvement effort, a functional manager reports that project updates arrive too late for useful decisions; the release date is fixed. The team has documented unclear ownership in the decision log during a baseline review 103. What should the project manager review?",
        "choices": [
          "Continue the same reports because the plan was already approved",
          "Stop sending reports until the stakeholder creates a new template",
          "Review stakeholder information needs and update the communication approach if needed",
          "Invite the stakeholder to every technical meeting instead of tailoring reports"
        ],
        "correct": 2,
        "explanation": "Communication management should help stakeholders make timely decisions. In this PMP scenario, the clue is \"reports that project updates arrive too late for useful decisions\" and the disciplined response is to adapt communication to stakeholder decision needs. This item is unique to the People domain pattern 103; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Leadership",
        "domain": "People",
        "topic": "Servant leadership",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "remove impediments that are outside the team's control.",
        "text": "During a reporting automation project, a vendor lead says an environment access issue blocks several stories; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the decision log during a release readiness meeting 104. What should the Scrum Master do?",
        "choices": [
          "Tell the team to skip testing until access is available",
          "Ask the Product Owner to lower acceptance criteria",
          "Assign unrelated work without addressing the blocker",
          "Make the impediment visible and help remove the environment access blocker"
        ],
        "correct": 3,
        "explanation": "Servant leadership includes removing obstacles that prevent delivery. In this PMP scenario, the clue is \"says an environment access issue blocks several stories\" and the disciplined response is to remove impediments that are outside the team's control. This item is unique to the People domain pattern 104; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Engagement",
        "domain": "People",
        "topic": "Resistance to change",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "understand resistance before forcing adoption.",
        "text": "During a data migration, a compliance analyst learns users resist a new workflow because it slows daily work; the release date is fixed. The team has documented unclear ownership in the decision log during a vendor coordination call 105. What is the best next action?",
        "choices": [
          "Meet with users to understand adoption barriers and adjust the engagement plan",
          "Ask the sponsor to mandate adoption before understanding the barrier",
          "Remove the department from rollout metrics to protect reporting",
          "Repeat the same training without reviewing user concerns"
        ],
        "correct": 0,
        "explanation": "Resistance may reveal workflow, training, or expectation gaps. In this PMP scenario, the clue is \"learns users resist a new workflow because it slows daily work\" and the disciplined response is to understand resistance before forcing adoption. This item is unique to the People domain pattern 105; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a regulatory implementation, a customer representative asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the decision log during a steering committee update 106. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 1; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a mobile product release, a senior stakeholder reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented unclear ownership in the decision log during a lessons-learned discussion 107. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 2; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a facility upgrade, an operations manager discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the decision log during an acceptance review 108. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 3; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a training program, a project coordinator is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented unclear ownership in the decision log during a risk review 109. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 4; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a vendor transition, a team lead sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the decision log during a team working session 110. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 5; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Procurement",
        "domain": "Process",
        "topic": "Supplier dispute",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use contract evidence before taking punitive action.",
        "text": "During a software rollout, a sponsor receives a vendor complaint that acceptance criteria were unclear; the release date is fixed. The team has documented unclear ownership in the issue register during a sponsor checkpoint 111. What should be reviewed first?",
        "choices": [
          "Replace the vendor before checking contract terms",
          "Ask the customer to accept the delay automatically",
          "Review the contract, statement of work, and documented acceptance criteria",
          "Escalate to legal before reviewing project evidence"
        ],
        "correct": 2,
        "explanation": "Supplier disputes should start with agreed terms and objective evidence. In this PMP scenario, the clue is \"receives a vendor complaint that acceptance criteria were unclear\" and the disciplined response is to use contract evidence before taking punitive action. This item is unique to the Process domain pattern 6; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements",
        "domain": "Process",
        "topic": "Ambiguity",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify ambiguous requirements before committing work.",
        "text": "During a customer portal, a product owner finds two user groups describe the needed workflow differently; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the issue register during a backlog refinement session 112. What should the project manager do first?",
        "choices": [
          "Ask the team to build the faster workflow and adjust later",
          "Choose the workflow from the larger department",
          "Split the team to build both workflows without scope review",
          "Facilitate requirements clarification with both groups before commitment"
        ],
        "correct": 3,
        "explanation": "Ambiguous requirements create rework, conflict, and scope growth. In this PMP scenario, the clue is \"finds two user groups describe the needed workflow differently\" and the disciplined response is to clarify ambiguous requirements before committing work. This item is unique to the Process domain pattern 7; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Issue management",
        "domain": "Process",
        "topic": "Issue ownership",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "assign ownership and track active issues.",
        "text": "During a process improvement effort, a functional manager finds a critical integration defect and no team is taking ownership; the release date is fixed. The team has documented unclear ownership in the issue register during a baseline review 113. What is the next step?",
        "choices": [
          "Log the issue, assign an owner, and coordinate resolution across affected teams",
          "Wait for teams to decide ownership without project involvement",
          "Move the defect to the risk register because it may affect release",
          "Close testing until the sponsor selects a technical owner"
        ],
        "correct": 0,
        "explanation": "Active issues need ownership, coordination, and resolution tracking. In this PMP scenario, the clue is \"finds a critical integration defect and no team is taking ownership\" and the disciplined response is to assign ownership and track active issues. This item is unique to the Process domain pattern 8; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Configuration",
        "domain": "Process",
        "topic": "Version control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "control approved product information and versions.",
        "text": "During a reporting automation project, a vendor lead finds two teams building from different approved interface versions; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the issue register during a release readiness meeting 114. What should be strengthened?",
        "choices": [
          "Increase sponsor reporting frequency to align versions",
          "Strengthen configuration control so teams use the current approved version",
          "Run a morale workshop because integration defects imply conflict",
          "Ask procurement to renegotiate because documents are vendor materials"
        ],
        "correct": 1,
        "explanation": "Configuration control prevents inconsistent information from causing defects. In this PMP scenario, the clue is \"finds two teams building from different approved interface versions\" and the disciplined response is to control approved product information and versions. This item is unique to the Process domain pattern 9; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Lessons learned",
        "domain": "Process",
        "topic": "Knowledge transfer",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "capture useful lessons when they can still help.",
        "text": "During a data migration, a compliance analyst discovers a better way to coordinate regulatory reviews during the project; the release date is fixed. The team has documented unclear ownership in the issue register during a vendor coordination call 115. What should the project manager do?",
        "choices": [
          "Wait until closure because lessons are recorded only at the end",
          "Keep the lesson within the current team to avoid confusion",
          "Document and share the lesson through the knowledge management approach",
          "Replace the communication plan without stakeholder review"
        ],
        "correct": 2,
        "explanation": "Lessons learned are valuable during the project, not only at closure. In this PMP scenario, the clue is \"discovers a better way to coordinate regulatory reviews during the project\" and the disciplined response is to capture useful lessons when they can still help. This item is unique to the Process domain pattern 10; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Process",
        "topic": "Acceptance criteria",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "use agreed acceptance criteria to resolve completion disputes.",
        "text": "During a regulatory implementation, a customer representative hears a customer reject a deliverable despite the team saying it meets criteria; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the issue register during a steering committee update 116. What should be done first?",
        "choices": [
          "Mark it accepted because the team believes it meets the criteria",
          "Rebuild the deliverable immediately without reviewing criteria",
          "Ask the sponsor to force acceptance before hearing the concern",
          "Review the agreed acceptance criteria with the customer and team to identify the gap"
        ],
        "correct": 3,
        "explanation": "Acceptance disputes should be grounded in documented criteria and evidence. In this PMP scenario, the clue is \"hears a customer reject a deliverable despite the team saying it meets criteria\" and the disciplined response is to use agreed acceptance criteria to resolve completion disputes. This item is unique to the Process domain pattern 11; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Estimation",
        "domain": "Process",
        "topic": "Forecasting",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "investigate variance before using reserves or changing forecasts.",
        "text": "During a mobile product release, a senior stakeholder sees cost trending above plan for the first time; the release date is fixed. The team has documented unclear ownership in the issue register during a lessons-learned discussion 117. What should the project manager do first?",
        "choices": [
          "Analyze the cause and forecast impact before recommending corrective action",
          "Use reserve immediately because any increase should be covered",
          "Reduce quality activities to bring the report back under budget",
          "Tell the sponsor the variance is temporary without reviewing data"
        ],
        "correct": 0,
        "explanation": "A variance requires cause and trend analysis before action. In this PMP scenario, the clue is \"sees cost trending above plan for the first time\" and the disciplined response is to investigate variance before using reserves or changing forecasts. This item is unique to the Process domain pattern 12; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a facility upgrade, an operations manager asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the issue register during an acceptance review 118. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 13; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a training program, a project coordinator reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented unclear ownership in the issue register during a risk review 119. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 14; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a vendor transition, a team lead discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the issue register during a team working session 120. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 15; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a software rollout, a sponsor is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented unclear ownership in the stakeholder register during a sponsor checkpoint 121. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 16; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a customer portal, a product owner sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the stakeholder register during a backlog refinement session 122. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 17; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Procurement",
        "domain": "Process",
        "topic": "Supplier dispute",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use contract evidence before taking punitive action.",
        "text": "During a process improvement effort, a functional manager receives a vendor complaint that acceptance criteria were unclear; the release date is fixed. The team has documented unclear ownership in the stakeholder register during a baseline review 123. What should be reviewed first?",
        "choices": [
          "Replace the vendor before checking contract terms",
          "Ask the customer to accept the delay automatically",
          "Review the contract, statement of work, and documented acceptance criteria",
          "Escalate to legal before reviewing project evidence"
        ],
        "correct": 2,
        "explanation": "Supplier disputes should start with agreed terms and objective evidence. In this PMP scenario, the clue is \"receives a vendor complaint that acceptance criteria were unclear\" and the disciplined response is to use contract evidence before taking punitive action. This item is unique to the Process domain pattern 18; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements",
        "domain": "Process",
        "topic": "Ambiguity",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify ambiguous requirements before committing work.",
        "text": "During a reporting automation project, a vendor lead finds two user groups describe the needed workflow differently; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the stakeholder register during a release readiness meeting 124. What should the project manager do first?",
        "choices": [
          "Ask the team to build the faster workflow and adjust later",
          "Choose the workflow from the larger department",
          "Split the team to build both workflows without scope review",
          "Facilitate requirements clarification with both groups before commitment"
        ],
        "correct": 3,
        "explanation": "Ambiguous requirements create rework, conflict, and scope growth. In this PMP scenario, the clue is \"finds two user groups describe the needed workflow differently\" and the disciplined response is to clarify ambiguous requirements before committing work. This item is unique to the Process domain pattern 19; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Issue management",
        "domain": "Process",
        "topic": "Issue ownership",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "assign ownership and track active issues.",
        "text": "During a data migration, a compliance analyst finds a critical integration defect and no team is taking ownership; the release date is fixed. The team has documented unclear ownership in the stakeholder register during a vendor coordination call 125. What is the next step?",
        "choices": [
          "Log the issue, assign an owner, and coordinate resolution across affected teams",
          "Wait for teams to decide ownership without project involvement",
          "Move the defect to the risk register because it may affect release",
          "Close testing until the sponsor selects a technical owner"
        ],
        "correct": 0,
        "explanation": "Active issues need ownership, coordination, and resolution tracking. In this PMP scenario, the clue is \"finds a critical integration defect and no team is taking ownership\" and the disciplined response is to assign ownership and track active issues. This item is unique to the Process domain pattern 20; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Configuration",
        "domain": "Process",
        "topic": "Version control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "control approved product information and versions.",
        "text": "During a regulatory implementation, a customer representative finds two teams building from different approved interface versions; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the stakeholder register during a steering committee update 126. What should be strengthened?",
        "choices": [
          "Increase sponsor reporting frequency to align versions",
          "Strengthen configuration control so teams use the current approved version",
          "Run a morale workshop because integration defects imply conflict",
          "Ask procurement to renegotiate because documents are vendor materials"
        ],
        "correct": 1,
        "explanation": "Configuration control prevents inconsistent information from causing defects. In this PMP scenario, the clue is \"finds two teams building from different approved interface versions\" and the disciplined response is to control approved product information and versions. This item is unique to the Process domain pattern 21; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Lessons learned",
        "domain": "Process",
        "topic": "Knowledge transfer",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "capture useful lessons when they can still help.",
        "text": "During a mobile product release, a senior stakeholder discovers a better way to coordinate regulatory reviews during the project; the release date is fixed. The team has documented unclear ownership in the stakeholder register during a lessons-learned discussion 127. What should the project manager do?",
        "choices": [
          "Wait until closure because lessons are recorded only at the end",
          "Keep the lesson within the current team to avoid confusion",
          "Document and share the lesson through the knowledge management approach",
          "Replace the communication plan without stakeholder review"
        ],
        "correct": 2,
        "explanation": "Lessons learned are valuable during the project, not only at closure. In this PMP scenario, the clue is \"discovers a better way to coordinate regulatory reviews during the project\" and the disciplined response is to capture useful lessons when they can still help. This item is unique to the Process domain pattern 22; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Process",
        "topic": "Acceptance criteria",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "use agreed acceptance criteria to resolve completion disputes.",
        "text": "During a facility upgrade, an operations manager hears a customer reject a deliverable despite the team saying it meets criteria; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the stakeholder register during an acceptance review 128. What should be done first?",
        "choices": [
          "Mark it accepted because the team believes it meets the criteria",
          "Rebuild the deliverable immediately without reviewing criteria",
          "Ask the sponsor to force acceptance before hearing the concern",
          "Review the agreed acceptance criteria with the customer and team to identify the gap"
        ],
        "correct": 3,
        "explanation": "Acceptance disputes should be grounded in documented criteria and evidence. In this PMP scenario, the clue is \"hears a customer reject a deliverable despite the team saying it meets criteria\" and the disciplined response is to use agreed acceptance criteria to resolve completion disputes. This item is unique to the Process domain pattern 23; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Estimation",
        "domain": "Process",
        "topic": "Forecasting",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "investigate variance before using reserves or changing forecasts.",
        "text": "During a training program, a project coordinator sees cost trending above plan for the first time; the release date is fixed. The team has documented unclear ownership in the stakeholder register during a risk review 129. What should the project manager do first?",
        "choices": [
          "Analyze the cause and forecast impact before recommending corrective action",
          "Use reserve immediately because any increase should be covered",
          "Reduce quality activities to bring the report back under budget",
          "Tell the sponsor the variance is temporary without reviewing data"
        ],
        "correct": 0,
        "explanation": "A variance requires cause and trend analysis before action. In this PMP scenario, the clue is \"sees cost trending above plan for the first time\" and the disciplined response is to investigate variance before using reserves or changing forecasts. This item is unique to the Process domain pattern 24; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a vendor transition, a team lead asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the stakeholder register during a team working session 130. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 25; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a software rollout, a sponsor reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented unclear ownership in the risk response notes during a sponsor checkpoint 131. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 26; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a customer portal, a product owner discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the risk response notes during a backlog refinement session 132. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 27; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a process improvement effort, a functional manager is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented unclear ownership in the risk response notes during a baseline review 133. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 28; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a reporting automation project, a vendor lead sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the risk response notes during a release readiness meeting 134. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 29; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Procurement",
        "domain": "Process",
        "topic": "Supplier dispute",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use contract evidence before taking punitive action.",
        "text": "During a data migration, a compliance analyst receives a vendor complaint that acceptance criteria were unclear; the release date is fixed. The team has documented unclear ownership in the risk response notes during a vendor coordination call 135. What should be reviewed first?",
        "choices": [
          "Replace the vendor before checking contract terms",
          "Ask the customer to accept the delay automatically",
          "Review the contract, statement of work, and documented acceptance criteria",
          "Escalate to legal before reviewing project evidence"
        ],
        "correct": 2,
        "explanation": "Supplier disputes should start with agreed terms and objective evidence. In this PMP scenario, the clue is \"receives a vendor complaint that acceptance criteria were unclear\" and the disciplined response is to use contract evidence before taking punitive action. This item is unique to the Process domain pattern 30; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements",
        "domain": "Process",
        "topic": "Ambiguity",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify ambiguous requirements before committing work.",
        "text": "During a regulatory implementation, a customer representative finds two user groups describe the needed workflow differently; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the risk response notes during a steering committee update 136. What should the project manager do first?",
        "choices": [
          "Ask the team to build the faster workflow and adjust later",
          "Choose the workflow from the larger department",
          "Split the team to build both workflows without scope review",
          "Facilitate requirements clarification with both groups before commitment"
        ],
        "correct": 3,
        "explanation": "Ambiguous requirements create rework, conflict, and scope growth. In this PMP scenario, the clue is \"finds two user groups describe the needed workflow differently\" and the disciplined response is to clarify ambiguous requirements before committing work. This item is unique to the Process domain pattern 31; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Issue management",
        "domain": "Process",
        "topic": "Issue ownership",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "assign ownership and track active issues.",
        "text": "During a mobile product release, a senior stakeholder finds a critical integration defect and no team is taking ownership; the release date is fixed. The team has documented unclear ownership in the risk response notes during a lessons-learned discussion 137. What is the next step?",
        "choices": [
          "Log the issue, assign an owner, and coordinate resolution across affected teams",
          "Wait for teams to decide ownership without project involvement",
          "Move the defect to the risk register because it may affect release",
          "Close testing until the sponsor selects a technical owner"
        ],
        "correct": 0,
        "explanation": "Active issues need ownership, coordination, and resolution tracking. In this PMP scenario, the clue is \"finds a critical integration defect and no team is taking ownership\" and the disciplined response is to assign ownership and track active issues. This item is unique to the Process domain pattern 32; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Configuration",
        "domain": "Process",
        "topic": "Version control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "control approved product information and versions.",
        "text": "During a facility upgrade, an operations manager finds two teams building from different approved interface versions; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the risk response notes during an acceptance review 138. What should be strengthened?",
        "choices": [
          "Increase sponsor reporting frequency to align versions",
          "Strengthen configuration control so teams use the current approved version",
          "Run a morale workshop because integration defects imply conflict",
          "Ask procurement to renegotiate because documents are vendor materials"
        ],
        "correct": 1,
        "explanation": "Configuration control prevents inconsistent information from causing defects. In this PMP scenario, the clue is \"finds two teams building from different approved interface versions\" and the disciplined response is to control approved product information and versions. This item is unique to the Process domain pattern 33; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Lessons learned",
        "domain": "Process",
        "topic": "Knowledge transfer",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "capture useful lessons when they can still help.",
        "text": "During a training program, a project coordinator discovers a better way to coordinate regulatory reviews during the project; the release date is fixed. The team has documented unclear ownership in the risk response notes during a risk review 139. What should the project manager do?",
        "choices": [
          "Wait until closure because lessons are recorded only at the end",
          "Keep the lesson within the current team to avoid confusion",
          "Document and share the lesson through the knowledge management approach",
          "Replace the communication plan without stakeholder review"
        ],
        "correct": 2,
        "explanation": "Lessons learned are valuable during the project, not only at closure. In this PMP scenario, the clue is \"discovers a better way to coordinate regulatory reviews during the project\" and the disciplined response is to capture useful lessons when they can still help. This item is unique to the Process domain pattern 34; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Process",
        "topic": "Acceptance criteria",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "use agreed acceptance criteria to resolve completion disputes.",
        "text": "During a vendor transition, a team lead hears a customer reject a deliverable despite the team saying it meets criteria; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the risk response notes during a team working session 140. What should be done first?",
        "choices": [
          "Mark it accepted because the team believes it meets the criteria",
          "Rebuild the deliverable immediately without reviewing criteria",
          "Ask the sponsor to force acceptance before hearing the concern",
          "Review the agreed acceptance criteria with the customer and team to identify the gap"
        ],
        "correct": 3,
        "explanation": "Acceptance disputes should be grounded in documented criteria and evidence. In this PMP scenario, the clue is \"hears a customer reject a deliverable despite the team saying it meets criteria\" and the disciplined response is to use agreed acceptance criteria to resolve completion disputes. This item is unique to the Process domain pattern 35; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Estimation",
        "domain": "Process",
        "topic": "Forecasting",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "investigate variance before using reserves or changing forecasts.",
        "text": "During a software rollout, a sponsor sees cost trending above plan for the first time; the release date is fixed. The team has documented unclear ownership in the communications plan during a sponsor checkpoint 141. What should the project manager do first?",
        "choices": [
          "Analyze the cause and forecast impact before recommending corrective action",
          "Use reserve immediately because any increase should be covered",
          "Reduce quality activities to bring the report back under budget",
          "Tell the sponsor the variance is temporary without reviewing data"
        ],
        "correct": 0,
        "explanation": "A variance requires cause and trend analysis before action. In this PMP scenario, the clue is \"sees cost trending above plan for the first time\" and the disciplined response is to investigate variance before using reserves or changing forecasts. This item is unique to the Process domain pattern 36; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a customer portal, a product owner asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the communications plan during a backlog refinement session 142. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 37; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a process improvement effort, a functional manager reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented unclear ownership in the communications plan during a baseline review 143. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 38; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a reporting automation project, a vendor lead discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the communications plan during a release readiness meeting 144. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 39; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a data migration, a compliance analyst is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented unclear ownership in the communications plan during a vendor coordination call 145. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 40; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a regulatory implementation, a customer representative sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the communications plan during a steering committee update 146. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 41; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Procurement",
        "domain": "Process",
        "topic": "Supplier dispute",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use contract evidence before taking punitive action.",
        "text": "During a mobile product release, a senior stakeholder receives a vendor complaint that acceptance criteria were unclear; the release date is fixed. The team has documented unclear ownership in the communications plan during a lessons-learned discussion 147. What should be reviewed first?",
        "choices": [
          "Replace the vendor before checking contract terms",
          "Ask the customer to accept the delay automatically",
          "Review the contract, statement of work, and documented acceptance criteria",
          "Escalate to legal before reviewing project evidence"
        ],
        "correct": 2,
        "explanation": "Supplier disputes should start with agreed terms and objective evidence. In this PMP scenario, the clue is \"receives a vendor complaint that acceptance criteria were unclear\" and the disciplined response is to use contract evidence before taking punitive action. This item is unique to the Process domain pattern 42; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements",
        "domain": "Process",
        "topic": "Ambiguity",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify ambiguous requirements before committing work.",
        "text": "During a facility upgrade, an operations manager finds two user groups describe the needed workflow differently; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the communications plan during an acceptance review 148. What should the project manager do first?",
        "choices": [
          "Ask the team to build the faster workflow and adjust later",
          "Choose the workflow from the larger department",
          "Split the team to build both workflows without scope review",
          "Facilitate requirements clarification with both groups before commitment"
        ],
        "correct": 3,
        "explanation": "Ambiguous requirements create rework, conflict, and scope growth. In this PMP scenario, the clue is \"finds two user groups describe the needed workflow differently\" and the disciplined response is to clarify ambiguous requirements before committing work. This item is unique to the Process domain pattern 43; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Issue management",
        "domain": "Process",
        "topic": "Issue ownership",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "assign ownership and track active issues.",
        "text": "During a training program, a project coordinator finds a critical integration defect and no team is taking ownership; the release date is fixed. The team has documented unclear ownership in the communications plan during a risk review 149. What is the next step?",
        "choices": [
          "Log the issue, assign an owner, and coordinate resolution across affected teams",
          "Wait for teams to decide ownership without project involvement",
          "Move the defect to the risk register because it may affect release",
          "Close testing until the sponsor selects a technical owner"
        ],
        "correct": 0,
        "explanation": "Active issues need ownership, coordination, and resolution tracking. In this PMP scenario, the clue is \"finds a critical integration defect and no team is taking ownership\" and the disciplined response is to assign ownership and track active issues. This item is unique to the Process domain pattern 44; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Configuration",
        "domain": "Process",
        "topic": "Version control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "control approved product information and versions.",
        "text": "During a vendor transition, a team lead finds two teams building from different approved interface versions; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the communications plan during a team working session 150. What should be strengthened?",
        "choices": [
          "Increase sponsor reporting frequency to align versions",
          "Strengthen configuration control so teams use the current approved version",
          "Run a morale workshop because integration defects imply conflict",
          "Ask procurement to renegotiate because documents are vendor materials"
        ],
        "correct": 1,
        "explanation": "Configuration control prevents inconsistent information from causing defects. In this PMP scenario, the clue is \"finds two teams building from different approved interface versions\" and the disciplined response is to control approved product information and versions. This item is unique to the Process domain pattern 45; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Lessons learned",
        "domain": "Process",
        "topic": "Knowledge transfer",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "capture useful lessons when they can still help.",
        "text": "During a software rollout, a sponsor discovers a better way to coordinate regulatory reviews during the project; the release date is fixed. The team has documented unclear ownership in the change request queue during a sponsor checkpoint 151. What should the project manager do?",
        "choices": [
          "Wait until closure because lessons are recorded only at the end",
          "Keep the lesson within the current team to avoid confusion",
          "Document and share the lesson through the knowledge management approach",
          "Replace the communication plan without stakeholder review"
        ],
        "correct": 2,
        "explanation": "Lessons learned are valuable during the project, not only at closure. In this PMP scenario, the clue is \"discovers a better way to coordinate regulatory reviews during the project\" and the disciplined response is to capture useful lessons when they can still help. This item is unique to the Process domain pattern 46; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Process",
        "topic": "Acceptance criteria",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "use agreed acceptance criteria to resolve completion disputes.",
        "text": "During a customer portal, a product owner hears a customer reject a deliverable despite the team saying it meets criteria; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the change request queue during a backlog refinement session 152. What should be done first?",
        "choices": [
          "Mark it accepted because the team believes it meets the criteria",
          "Rebuild the deliverable immediately without reviewing criteria",
          "Ask the sponsor to force acceptance before hearing the concern",
          "Review the agreed acceptance criteria with the customer and team to identify the gap"
        ],
        "correct": 3,
        "explanation": "Acceptance disputes should be grounded in documented criteria and evidence. In this PMP scenario, the clue is \"hears a customer reject a deliverable despite the team saying it meets criteria\" and the disciplined response is to use agreed acceptance criteria to resolve completion disputes. This item is unique to the Process domain pattern 47; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Estimation",
        "domain": "Process",
        "topic": "Forecasting",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "investigate variance before using reserves or changing forecasts.",
        "text": "During a process improvement effort, a functional manager sees cost trending above plan for the first time; the release date is fixed. The team has documented unclear ownership in the change request queue during a baseline review 153. What should the project manager do first?",
        "choices": [
          "Analyze the cause and forecast impact before recommending corrective action",
          "Use reserve immediately because any increase should be covered",
          "Reduce quality activities to bring the report back under budget",
          "Tell the sponsor the variance is temporary without reviewing data"
        ],
        "correct": 0,
        "explanation": "A variance requires cause and trend analysis before action. In this PMP scenario, the clue is \"sees cost trending above plan for the first time\" and the disciplined response is to investigate variance before using reserves or changing forecasts. This item is unique to the Process domain pattern 48; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a reporting automation project, a vendor lead asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the change request queue during a release readiness meeting 154. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 49; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a data migration, a compliance analyst reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented unclear ownership in the change request queue during a vendor coordination call 155. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 50; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a regulatory implementation, a customer representative discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the change request queue during a steering committee update 156. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 51; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a mobile product release, a senior stakeholder is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented unclear ownership in the change request queue during a lessons-learned discussion 157. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 52; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a facility upgrade, an operations manager sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the change request queue during an acceptance review 158. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 53; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Procurement",
        "domain": "Process",
        "topic": "Supplier dispute",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use contract evidence before taking punitive action.",
        "text": "During a training program, a project coordinator receives a vendor complaint that acceptance criteria were unclear; the release date is fixed. The team has documented unclear ownership in the change request queue during a risk review 159. What should be reviewed first?",
        "choices": [
          "Replace the vendor before checking contract terms",
          "Ask the customer to accept the delay automatically",
          "Review the contract, statement of work, and documented acceptance criteria",
          "Escalate to legal before reviewing project evidence"
        ],
        "correct": 2,
        "explanation": "Supplier disputes should start with agreed terms and objective evidence. In this PMP scenario, the clue is \"receives a vendor complaint that acceptance criteria were unclear\" and the disciplined response is to use contract evidence before taking punitive action. This item is unique to the Process domain pattern 54; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements",
        "domain": "Process",
        "topic": "Ambiguity",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify ambiguous requirements before committing work.",
        "text": "During a vendor transition, a team lead finds two user groups describe the needed workflow differently; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the change request queue during a team working session 160. What should the project manager do first?",
        "choices": [
          "Ask the team to build the faster workflow and adjust later",
          "Choose the workflow from the larger department",
          "Split the team to build both workflows without scope review",
          "Facilitate requirements clarification with both groups before commitment"
        ],
        "correct": 3,
        "explanation": "Ambiguous requirements create rework, conflict, and scope growth. In this PMP scenario, the clue is \"finds two user groups describe the needed workflow differently\" and the disciplined response is to clarify ambiguous requirements before committing work. This item is unique to the Process domain pattern 55; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Issue management",
        "domain": "Process",
        "topic": "Issue ownership",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "assign ownership and track active issues.",
        "text": "During a software rollout, a sponsor finds a critical integration defect and no team is taking ownership; the release date is fixed. The team has documented unclear ownership in the product backlog during a sponsor checkpoint 161. What is the next step?",
        "choices": [
          "Log the issue, assign an owner, and coordinate resolution across affected teams",
          "Wait for teams to decide ownership without project involvement",
          "Move the defect to the risk register because it may affect release",
          "Close testing until the sponsor selects a technical owner"
        ],
        "correct": 0,
        "explanation": "Active issues need ownership, coordination, and resolution tracking. In this PMP scenario, the clue is \"finds a critical integration defect and no team is taking ownership\" and the disciplined response is to assign ownership and track active issues. This item is unique to the Process domain pattern 56; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Configuration",
        "domain": "Process",
        "topic": "Version control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "control approved product information and versions.",
        "text": "During a customer portal, a product owner finds two teams building from different approved interface versions; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the product backlog during a backlog refinement session 162. What should be strengthened?",
        "choices": [
          "Increase sponsor reporting frequency to align versions",
          "Strengthen configuration control so teams use the current approved version",
          "Run a morale workshop because integration defects imply conflict",
          "Ask procurement to renegotiate because documents are vendor materials"
        ],
        "correct": 1,
        "explanation": "Configuration control prevents inconsistent information from causing defects. In this PMP scenario, the clue is \"finds two teams building from different approved interface versions\" and the disciplined response is to control approved product information and versions. This item is unique to the Process domain pattern 57; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Lessons learned",
        "domain": "Process",
        "topic": "Knowledge transfer",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "capture useful lessons when they can still help.",
        "text": "During a process improvement effort, a functional manager discovers a better way to coordinate regulatory reviews during the project; the release date is fixed. The team has documented unclear ownership in the product backlog during a baseline review 163. What should the project manager do?",
        "choices": [
          "Wait until closure because lessons are recorded only at the end",
          "Keep the lesson within the current team to avoid confusion",
          "Document and share the lesson through the knowledge management approach",
          "Replace the communication plan without stakeholder review"
        ],
        "correct": 2,
        "explanation": "Lessons learned are valuable during the project, not only at closure. In this PMP scenario, the clue is \"discovers a better way to coordinate regulatory reviews during the project\" and the disciplined response is to capture useful lessons when they can still help. This item is unique to the Process domain pattern 58; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Process",
        "topic": "Acceptance criteria",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "use agreed acceptance criteria to resolve completion disputes.",
        "text": "During a reporting automation project, a vendor lead hears a customer reject a deliverable despite the team saying it meets criteria; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the product backlog during a release readiness meeting 164. What should be done first?",
        "choices": [
          "Mark it accepted because the team believes it meets the criteria",
          "Rebuild the deliverable immediately without reviewing criteria",
          "Ask the sponsor to force acceptance before hearing the concern",
          "Review the agreed acceptance criteria with the customer and team to identify the gap"
        ],
        "correct": 3,
        "explanation": "Acceptance disputes should be grounded in documented criteria and evidence. In this PMP scenario, the clue is \"hears a customer reject a deliverable despite the team saying it meets criteria\" and the disciplined response is to use agreed acceptance criteria to resolve completion disputes. This item is unique to the Process domain pattern 59; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Estimation",
        "domain": "Process",
        "topic": "Forecasting",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "investigate variance before using reserves or changing forecasts.",
        "text": "During a data migration, a compliance analyst sees cost trending above plan for the first time; the release date is fixed. The team has documented unclear ownership in the product backlog during a vendor coordination call 165. What should the project manager do first?",
        "choices": [
          "Analyze the cause and forecast impact before recommending corrective action",
          "Use reserve immediately because any increase should be covered",
          "Reduce quality activities to bring the report back under budget",
          "Tell the sponsor the variance is temporary without reviewing data"
        ],
        "correct": 0,
        "explanation": "A variance requires cause and trend analysis before action. In this PMP scenario, the clue is \"sees cost trending above plan for the first time\" and the disciplined response is to investigate variance before using reserves or changing forecasts. This item is unique to the Process domain pattern 60; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a regulatory implementation, a customer representative asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the product backlog during a steering committee update 166. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 61; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a mobile product release, a senior stakeholder reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented unclear ownership in the product backlog during a lessons-learned discussion 167. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 62; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a facility upgrade, an operations manager discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the product backlog during an acceptance review 168. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 63; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a training program, a project coordinator is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented unclear ownership in the product backlog during a risk review 169. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 64; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a vendor transition, a team lead sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the product backlog during a team working session 170. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 65; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Procurement",
        "domain": "Process",
        "topic": "Supplier dispute",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use contract evidence before taking punitive action.",
        "text": "During a software rollout, a sponsor receives a vendor complaint that acceptance criteria were unclear; the release date is fixed. The team has documented unclear ownership in the requirements traceability matrix during a sponsor checkpoint 171. What should be reviewed first?",
        "choices": [
          "Replace the vendor before checking contract terms",
          "Ask the customer to accept the delay automatically",
          "Review the contract, statement of work, and documented acceptance criteria",
          "Escalate to legal before reviewing project evidence"
        ],
        "correct": 2,
        "explanation": "Supplier disputes should start with agreed terms and objective evidence. In this PMP scenario, the clue is \"receives a vendor complaint that acceptance criteria were unclear\" and the disciplined response is to use contract evidence before taking punitive action. This item is unique to the Process domain pattern 66; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements",
        "domain": "Process",
        "topic": "Ambiguity",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify ambiguous requirements before committing work.",
        "text": "During a customer portal, a product owner finds two user groups describe the needed workflow differently; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the requirements traceability matrix during a backlog refinement session 172. What should the project manager do first?",
        "choices": [
          "Ask the team to build the faster workflow and adjust later",
          "Choose the workflow from the larger department",
          "Split the team to build both workflows without scope review",
          "Facilitate requirements clarification with both groups before commitment"
        ],
        "correct": 3,
        "explanation": "Ambiguous requirements create rework, conflict, and scope growth. In this PMP scenario, the clue is \"finds two user groups describe the needed workflow differently\" and the disciplined response is to clarify ambiguous requirements before committing work. This item is unique to the Process domain pattern 67; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Issue management",
        "domain": "Process",
        "topic": "Issue ownership",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "assign ownership and track active issues.",
        "text": "During a process improvement effort, a functional manager finds a critical integration defect and no team is taking ownership; the release date is fixed. The team has documented unclear ownership in the requirements traceability matrix during a baseline review 173. What is the next step?",
        "choices": [
          "Log the issue, assign an owner, and coordinate resolution across affected teams",
          "Wait for teams to decide ownership without project involvement",
          "Move the defect to the risk register because it may affect release",
          "Close testing until the sponsor selects a technical owner"
        ],
        "correct": 0,
        "explanation": "Active issues need ownership, coordination, and resolution tracking. In this PMP scenario, the clue is \"finds a critical integration defect and no team is taking ownership\" and the disciplined response is to assign ownership and track active issues. This item is unique to the Process domain pattern 68; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Configuration",
        "domain": "Process",
        "topic": "Version control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "control approved product information and versions.",
        "text": "During a reporting automation project, a vendor lead finds two teams building from different approved interface versions; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the requirements traceability matrix during a release readiness meeting 174. What should be strengthened?",
        "choices": [
          "Increase sponsor reporting frequency to align versions",
          "Strengthen configuration control so teams use the current approved version",
          "Run a morale workshop because integration defects imply conflict",
          "Ask procurement to renegotiate because documents are vendor materials"
        ],
        "correct": 1,
        "explanation": "Configuration control prevents inconsistent information from causing defects. In this PMP scenario, the clue is \"finds two teams building from different approved interface versions\" and the disciplined response is to control approved product information and versions. This item is unique to the Process domain pattern 69; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Lessons learned",
        "domain": "Process",
        "topic": "Knowledge transfer",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "capture useful lessons when they can still help.",
        "text": "During a data migration, a compliance analyst discovers a better way to coordinate regulatory reviews during the project; the release date is fixed. The team has documented unclear ownership in the requirements traceability matrix during a vendor coordination call 175. What should the project manager do?",
        "choices": [
          "Wait until closure because lessons are recorded only at the end",
          "Keep the lesson within the current team to avoid confusion",
          "Document and share the lesson through the knowledge management approach",
          "Replace the communication plan without stakeholder review"
        ],
        "correct": 2,
        "explanation": "Lessons learned are valuable during the project, not only at closure. In this PMP scenario, the clue is \"discovers a better way to coordinate regulatory reviews during the project\" and the disciplined response is to capture useful lessons when they can still help. This item is unique to the Process domain pattern 70; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Process",
        "topic": "Acceptance criteria",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "use agreed acceptance criteria to resolve completion disputes.",
        "text": "During a regulatory implementation, a customer representative hears a customer reject a deliverable despite the team saying it meets criteria; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the requirements traceability matrix during a steering committee update 176. What should be done first?",
        "choices": [
          "Mark it accepted because the team believes it meets the criteria",
          "Rebuild the deliverable immediately without reviewing criteria",
          "Ask the sponsor to force acceptance before hearing the concern",
          "Review the agreed acceptance criteria with the customer and team to identify the gap"
        ],
        "correct": 3,
        "explanation": "Acceptance disputes should be grounded in documented criteria and evidence. In this PMP scenario, the clue is \"hears a customer reject a deliverable despite the team saying it meets criteria\" and the disciplined response is to use agreed acceptance criteria to resolve completion disputes. This item is unique to the Process domain pattern 71; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Estimation",
        "domain": "Process",
        "topic": "Forecasting",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "investigate variance before using reserves or changing forecasts.",
        "text": "During a mobile product release, a senior stakeholder sees cost trending above plan for the first time; the release date is fixed. The team has documented unclear ownership in the requirements traceability matrix during a lessons-learned discussion 177. What should the project manager do first?",
        "choices": [
          "Analyze the cause and forecast impact before recommending corrective action",
          "Use reserve immediately because any increase should be covered",
          "Reduce quality activities to bring the report back under budget",
          "Tell the sponsor the variance is temporary without reviewing data"
        ],
        "correct": 0,
        "explanation": "A variance requires cause and trend analysis before action. In this PMP scenario, the clue is \"sees cost trending above plan for the first time\" and the disciplined response is to investigate variance before using reserves or changing forecasts. This item is unique to the Process domain pattern 72; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a facility upgrade, an operations manager asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the requirements traceability matrix during an acceptance review 178. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 73; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a training program, a project coordinator reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented unclear ownership in the requirements traceability matrix during a risk review 179. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 74; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a vendor transition, a team lead discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the requirements traceability matrix during a team working session 180. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 75; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a software rollout, a sponsor is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented unclear ownership in the schedule baseline during a sponsor checkpoint 181. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 76; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a customer portal, a product owner sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the schedule baseline during a backlog refinement session 182. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 77; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Procurement",
        "domain": "Process",
        "topic": "Supplier dispute",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use contract evidence before taking punitive action.",
        "text": "During a process improvement effort, a functional manager receives a vendor complaint that acceptance criteria were unclear; the release date is fixed. The team has documented unclear ownership in the schedule baseline during a baseline review 183. What should be reviewed first?",
        "choices": [
          "Replace the vendor before checking contract terms",
          "Ask the customer to accept the delay automatically",
          "Review the contract, statement of work, and documented acceptance criteria",
          "Escalate to legal before reviewing project evidence"
        ],
        "correct": 2,
        "explanation": "Supplier disputes should start with agreed terms and objective evidence. In this PMP scenario, the clue is \"receives a vendor complaint that acceptance criteria were unclear\" and the disciplined response is to use contract evidence before taking punitive action. This item is unique to the Process domain pattern 78; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements",
        "domain": "Process",
        "topic": "Ambiguity",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify ambiguous requirements before committing work.",
        "text": "During a reporting automation project, a vendor lead finds two user groups describe the needed workflow differently; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the schedule baseline during a release readiness meeting 184. What should the project manager do first?",
        "choices": [
          "Ask the team to build the faster workflow and adjust later",
          "Choose the workflow from the larger department",
          "Split the team to build both workflows without scope review",
          "Facilitate requirements clarification with both groups before commitment"
        ],
        "correct": 3,
        "explanation": "Ambiguous requirements create rework, conflict, and scope growth. In this PMP scenario, the clue is \"finds two user groups describe the needed workflow differently\" and the disciplined response is to clarify ambiguous requirements before committing work. This item is unique to the Process domain pattern 79; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Issue management",
        "domain": "Process",
        "topic": "Issue ownership",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "assign ownership and track active issues.",
        "text": "During a data migration, a compliance analyst finds a critical integration defect and no team is taking ownership; the release date is fixed. The team has documented unclear ownership in the schedule baseline during a vendor coordination call 185. What is the next step?",
        "choices": [
          "Log the issue, assign an owner, and coordinate resolution across affected teams",
          "Wait for teams to decide ownership without project involvement",
          "Move the defect to the risk register because it may affect release",
          "Close testing until the sponsor selects a technical owner"
        ],
        "correct": 0,
        "explanation": "Active issues need ownership, coordination, and resolution tracking. In this PMP scenario, the clue is \"finds a critical integration defect and no team is taking ownership\" and the disciplined response is to assign ownership and track active issues. This item is unique to the Process domain pattern 80; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Configuration",
        "domain": "Process",
        "topic": "Version control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "control approved product information and versions.",
        "text": "During a regulatory implementation, a customer representative finds two teams building from different approved interface versions; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the schedule baseline during a steering committee update 186. What should be strengthened?",
        "choices": [
          "Increase sponsor reporting frequency to align versions",
          "Strengthen configuration control so teams use the current approved version",
          "Run a morale workshop because integration defects imply conflict",
          "Ask procurement to renegotiate because documents are vendor materials"
        ],
        "correct": 1,
        "explanation": "Configuration control prevents inconsistent information from causing defects. In this PMP scenario, the clue is \"finds two teams building from different approved interface versions\" and the disciplined response is to control approved product information and versions. This item is unique to the Process domain pattern 81; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Lessons learned",
        "domain": "Process",
        "topic": "Knowledge transfer",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "capture useful lessons when they can still help.",
        "text": "During a mobile product release, a senior stakeholder discovers a better way to coordinate regulatory reviews during the project; the release date is fixed. The team has documented unclear ownership in the schedule baseline during a lessons-learned discussion 187. What should the project manager do?",
        "choices": [
          "Wait until closure because lessons are recorded only at the end",
          "Keep the lesson within the current team to avoid confusion",
          "Document and share the lesson through the knowledge management approach",
          "Replace the communication plan without stakeholder review"
        ],
        "correct": 2,
        "explanation": "Lessons learned are valuable during the project, not only at closure. In this PMP scenario, the clue is \"discovers a better way to coordinate regulatory reviews during the project\" and the disciplined response is to capture useful lessons when they can still help. This item is unique to the Process domain pattern 82; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Process",
        "topic": "Acceptance criteria",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "use agreed acceptance criteria to resolve completion disputes.",
        "text": "During a facility upgrade, an operations manager hears a customer reject a deliverable despite the team saying it meets criteria; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the schedule baseline during an acceptance review 188. What should be done first?",
        "choices": [
          "Mark it accepted because the team believes it meets the criteria",
          "Rebuild the deliverable immediately without reviewing criteria",
          "Ask the sponsor to force acceptance before hearing the concern",
          "Review the agreed acceptance criteria with the customer and team to identify the gap"
        ],
        "correct": 3,
        "explanation": "Acceptance disputes should be grounded in documented criteria and evidence. In this PMP scenario, the clue is \"hears a customer reject a deliverable despite the team saying it meets criteria\" and the disciplined response is to use agreed acceptance criteria to resolve completion disputes. This item is unique to the Process domain pattern 83; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Estimation",
        "domain": "Process",
        "topic": "Forecasting",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "investigate variance before using reserves or changing forecasts.",
        "text": "During a training program, a project coordinator sees cost trending above plan for the first time; the release date is fixed. The team has documented unclear ownership in the schedule baseline during a risk review 189. What should the project manager do first?",
        "choices": [
          "Analyze the cause and forecast impact before recommending corrective action",
          "Use reserve immediately because any increase should be covered",
          "Reduce quality activities to bring the report back under budget",
          "Tell the sponsor the variance is temporary without reviewing data"
        ],
        "correct": 0,
        "explanation": "A variance requires cause and trend analysis before action. In this PMP scenario, the clue is \"sees cost trending above plan for the first time\" and the disciplined response is to investigate variance before using reserves or changing forecasts. This item is unique to the Process domain pattern 84; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a vendor transition, a team lead asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the schedule baseline during a team working session 190. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 85; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a software rollout, a sponsor reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented unclear ownership in the acceptance criteria during a sponsor checkpoint 191. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 86; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a customer portal, a product owner discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the acceptance criteria during a backlog refinement session 192. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 87; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a process improvement effort, a functional manager is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented unclear ownership in the acceptance criteria during a baseline review 193. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 88; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a reporting automation project, a vendor lead sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the acceptance criteria during a release readiness meeting 194. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 89; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Procurement",
        "domain": "Process",
        "topic": "Supplier dispute",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use contract evidence before taking punitive action.",
        "text": "During a data migration, a compliance analyst receives a vendor complaint that acceptance criteria were unclear; the release date is fixed. The team has documented unclear ownership in the acceptance criteria during a vendor coordination call 195. What should be reviewed first?",
        "choices": [
          "Replace the vendor before checking contract terms",
          "Ask the customer to accept the delay automatically",
          "Review the contract, statement of work, and documented acceptance criteria",
          "Escalate to legal before reviewing project evidence"
        ],
        "correct": 2,
        "explanation": "Supplier disputes should start with agreed terms and objective evidence. In this PMP scenario, the clue is \"receives a vendor complaint that acceptance criteria were unclear\" and the disciplined response is to use contract evidence before taking punitive action. This item is unique to the Process domain pattern 90; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements",
        "domain": "Process",
        "topic": "Ambiguity",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify ambiguous requirements before committing work.",
        "text": "During a regulatory implementation, a customer representative finds two user groups describe the needed workflow differently; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the acceptance criteria during a steering committee update 196. What should the project manager do first?",
        "choices": [
          "Ask the team to build the faster workflow and adjust later",
          "Choose the workflow from the larger department",
          "Split the team to build both workflows without scope review",
          "Facilitate requirements clarification with both groups before commitment"
        ],
        "correct": 3,
        "explanation": "Ambiguous requirements create rework, conflict, and scope growth. In this PMP scenario, the clue is \"finds two user groups describe the needed workflow differently\" and the disciplined response is to clarify ambiguous requirements before committing work. This item is unique to the Process domain pattern 91; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Issue management",
        "domain": "Process",
        "topic": "Issue ownership",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "assign ownership and track active issues.",
        "text": "During a mobile product release, a senior stakeholder finds a critical integration defect and no team is taking ownership; the release date is fixed. The team has documented unclear ownership in the acceptance criteria during a lessons-learned discussion 197. What is the next step?",
        "choices": [
          "Log the issue, assign an owner, and coordinate resolution across affected teams",
          "Wait for teams to decide ownership without project involvement",
          "Move the defect to the risk register because it may affect release",
          "Close testing until the sponsor selects a technical owner"
        ],
        "correct": 0,
        "explanation": "Active issues need ownership, coordination, and resolution tracking. In this PMP scenario, the clue is \"finds a critical integration defect and no team is taking ownership\" and the disciplined response is to assign ownership and track active issues. This item is unique to the Process domain pattern 92; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Configuration",
        "domain": "Process",
        "topic": "Version control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "control approved product information and versions.",
        "text": "During a facility upgrade, an operations manager finds two teams building from different approved interface versions; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the acceptance criteria during an acceptance review 198. What should be strengthened?",
        "choices": [
          "Increase sponsor reporting frequency to align versions",
          "Strengthen configuration control so teams use the current approved version",
          "Run a morale workshop because integration defects imply conflict",
          "Ask procurement to renegotiate because documents are vendor materials"
        ],
        "correct": 1,
        "explanation": "Configuration control prevents inconsistent information from causing defects. In this PMP scenario, the clue is \"finds two teams building from different approved interface versions\" and the disciplined response is to control approved product information and versions. This item is unique to the Process domain pattern 93; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Lessons learned",
        "domain": "Process",
        "topic": "Knowledge transfer",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "capture useful lessons when they can still help.",
        "text": "During a training program, a project coordinator discovers a better way to coordinate regulatory reviews during the project; the release date is fixed. The team has documented unclear ownership in the acceptance criteria during a risk review 199. What should the project manager do?",
        "choices": [
          "Wait until closure because lessons are recorded only at the end",
          "Keep the lesson within the current team to avoid confusion",
          "Document and share the lesson through the knowledge management approach",
          "Replace the communication plan without stakeholder review"
        ],
        "correct": 2,
        "explanation": "Lessons learned are valuable during the project, not only at closure. In this PMP scenario, the clue is \"discovers a better way to coordinate regulatory reviews during the project\" and the disciplined response is to capture useful lessons when they can still help. This item is unique to the Process domain pattern 94; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Process",
        "topic": "Acceptance criteria",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "use agreed acceptance criteria to resolve completion disputes.",
        "text": "During a vendor transition, a team lead hears a customer reject a deliverable despite the team saying it meets criteria; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the acceptance criteria during a team working session 200. What should be done first?",
        "choices": [
          "Mark it accepted because the team believes it meets the criteria",
          "Rebuild the deliverable immediately without reviewing criteria",
          "Ask the sponsor to force acceptance before hearing the concern",
          "Review the agreed acceptance criteria with the customer and team to identify the gap"
        ],
        "correct": 3,
        "explanation": "Acceptance disputes should be grounded in documented criteria and evidence. In this PMP scenario, the clue is \"hears a customer reject a deliverable despite the team saying it meets criteria\" and the disciplined response is to use agreed acceptance criteria to resolve completion disputes. This item is unique to the Process domain pattern 95; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Estimation",
        "domain": "Process",
        "topic": "Forecasting",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "investigate variance before using reserves or changing forecasts.",
        "text": "During a software rollout, a sponsor sees cost trending above plan for the first time; the release date is fixed. The team has documented late feedback in the decision log during a sponsor checkpoint 201. What should the project manager do first?",
        "choices": [
          "Analyze the cause and forecast impact before recommending corrective action",
          "Use reserve immediately because any increase should be covered",
          "Reduce quality activities to bring the report back under budget",
          "Tell the sponsor the variance is temporary without reviewing data"
        ],
        "correct": 0,
        "explanation": "A variance requires cause and trend analysis before action. In this PMP scenario, the clue is \"sees cost trending above plan for the first time\" and the disciplined response is to investigate variance before using reserves or changing forecasts. This item is unique to the Process domain pattern 96; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a customer portal, a product owner asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented late feedback in the decision log during a backlog refinement session 202. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 97; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a process improvement effort, a functional manager reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented late feedback in the decision log during a baseline review 203. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 98; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a reporting automation project, a vendor lead discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented late feedback in the decision log during a release readiness meeting 204. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 99; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a data migration, a compliance analyst is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented late feedback in the decision log during a vendor coordination call 205. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 100; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a regulatory implementation, a customer representative sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented late feedback in the decision log during a steering committee update 206. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 101; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Procurement",
        "domain": "Process",
        "topic": "Supplier dispute",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use contract evidence before taking punitive action.",
        "text": "During a mobile product release, a senior stakeholder receives a vendor complaint that acceptance criteria were unclear; the release date is fixed. The team has documented late feedback in the decision log during a lessons-learned discussion 207. What should be reviewed first?",
        "choices": [
          "Replace the vendor before checking contract terms",
          "Ask the customer to accept the delay automatically",
          "Review the contract, statement of work, and documented acceptance criteria",
          "Escalate to legal before reviewing project evidence"
        ],
        "correct": 2,
        "explanation": "Supplier disputes should start with agreed terms and objective evidence. In this PMP scenario, the clue is \"receives a vendor complaint that acceptance criteria were unclear\" and the disciplined response is to use contract evidence before taking punitive action. This item is unique to the Process domain pattern 102; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements",
        "domain": "Process",
        "topic": "Ambiguity",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify ambiguous requirements before committing work.",
        "text": "During a facility upgrade, an operations manager finds two user groups describe the needed workflow differently; the sponsor wants evidence before approving changes. The team has documented late feedback in the decision log during an acceptance review 208. What should the project manager do first?",
        "choices": [
          "Ask the team to build the faster workflow and adjust later",
          "Choose the workflow from the larger department",
          "Split the team to build both workflows without scope review",
          "Facilitate requirements clarification with both groups before commitment"
        ],
        "correct": 3,
        "explanation": "Ambiguous requirements create rework, conflict, and scope growth. In this PMP scenario, the clue is \"finds two user groups describe the needed workflow differently\" and the disciplined response is to clarify ambiguous requirements before committing work. This item is unique to the Process domain pattern 103; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Issue management",
        "domain": "Process",
        "topic": "Issue ownership",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "assign ownership and track active issues.",
        "text": "During a training program, a project coordinator finds a critical integration defect and no team is taking ownership; the release date is fixed. The team has documented late feedback in the decision log during a risk review 209. What is the next step?",
        "choices": [
          "Log the issue, assign an owner, and coordinate resolution across affected teams",
          "Wait for teams to decide ownership without project involvement",
          "Move the defect to the risk register because it may affect release",
          "Close testing until the sponsor selects a technical owner"
        ],
        "correct": 0,
        "explanation": "Active issues need ownership, coordination, and resolution tracking. In this PMP scenario, the clue is \"finds a critical integration defect and no team is taking ownership\" and the disciplined response is to assign ownership and track active issues. This item is unique to the Process domain pattern 104; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Configuration",
        "domain": "Process",
        "topic": "Version control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "control approved product information and versions.",
        "text": "During a vendor transition, a team lead finds two teams building from different approved interface versions; the sponsor wants evidence before approving changes. The team has documented late feedback in the decision log during a team working session 210. What should be strengthened?",
        "choices": [
          "Increase sponsor reporting frequency to align versions",
          "Strengthen configuration control so teams use the current approved version",
          "Run a morale workshop because integration defects imply conflict",
          "Ask procurement to renegotiate because documents are vendor materials"
        ],
        "correct": 1,
        "explanation": "Configuration control prevents inconsistent information from causing defects. In this PMP scenario, the clue is \"finds two teams building from different approved interface versions\" and the disciplined response is to control approved product information and versions. This item is unique to the Process domain pattern 105; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Lessons learned",
        "domain": "Process",
        "topic": "Knowledge transfer",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "capture useful lessons when they can still help.",
        "text": "During a software rollout, a sponsor discovers a better way to coordinate regulatory reviews during the project; the release date is fixed. The team has documented late feedback in the issue register during a sponsor checkpoint 211. What should the project manager do?",
        "choices": [
          "Wait until closure because lessons are recorded only at the end",
          "Keep the lesson within the current team to avoid confusion",
          "Document and share the lesson through the knowledge management approach",
          "Replace the communication plan without stakeholder review"
        ],
        "correct": 2,
        "explanation": "Lessons learned are valuable during the project, not only at closure. In this PMP scenario, the clue is \"discovers a better way to coordinate regulatory reviews during the project\" and the disciplined response is to capture useful lessons when they can still help. This item is unique to the Process domain pattern 106; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Process",
        "topic": "Acceptance criteria",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "use agreed acceptance criteria to resolve completion disputes.",
        "text": "During a customer portal, a product owner hears a customer reject a deliverable despite the team saying it meets criteria; the sponsor wants evidence before approving changes. The team has documented late feedback in the issue register during a backlog refinement session 212. What should be done first?",
        "choices": [
          "Mark it accepted because the team believes it meets the criteria",
          "Rebuild the deliverable immediately without reviewing criteria",
          "Ask the sponsor to force acceptance before hearing the concern",
          "Review the agreed acceptance criteria with the customer and team to identify the gap"
        ],
        "correct": 3,
        "explanation": "Acceptance disputes should be grounded in documented criteria and evidence. In this PMP scenario, the clue is \"hears a customer reject a deliverable despite the team saying it meets criteria\" and the disciplined response is to use agreed acceptance criteria to resolve completion disputes. This item is unique to the Process domain pattern 107; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Estimation",
        "domain": "Process",
        "topic": "Forecasting",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "investigate variance before using reserves or changing forecasts.",
        "text": "During a process improvement effort, a functional manager sees cost trending above plan for the first time; the release date is fixed. The team has documented late feedback in the issue register during a baseline review 213. What should the project manager do first?",
        "choices": [
          "Analyze the cause and forecast impact before recommending corrective action",
          "Use reserve immediately because any increase should be covered",
          "Reduce quality activities to bring the report back under budget",
          "Tell the sponsor the variance is temporary without reviewing data"
        ],
        "correct": 0,
        "explanation": "A variance requires cause and trend analysis before action. In this PMP scenario, the clue is \"sees cost trending above plan for the first time\" and the disciplined response is to investigate variance before using reserves or changing forecasts. This item is unique to the Process domain pattern 108; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a reporting automation project, a vendor lead asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented late feedback in the issue register during a release readiness meeting 214. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 109; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a data migration, a compliance analyst reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented late feedback in the issue register during a vendor coordination call 215. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 110; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a regulatory implementation, a customer representative discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented late feedback in the issue register during a steering committee update 216. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 111; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a mobile product release, a senior stakeholder is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented late feedback in the issue register during a lessons-learned discussion 217. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 112; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a facility upgrade, an operations manager sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented late feedback in the issue register during an acceptance review 218. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 113; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Procurement",
        "domain": "Process",
        "topic": "Supplier dispute",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use contract evidence before taking punitive action.",
        "text": "During a training program, a project coordinator receives a vendor complaint that acceptance criteria were unclear; the release date is fixed. The team has documented late feedback in the issue register during a risk review 219. What should be reviewed first?",
        "choices": [
          "Replace the vendor before checking contract terms",
          "Ask the customer to accept the delay automatically",
          "Review the contract, statement of work, and documented acceptance criteria",
          "Escalate to legal before reviewing project evidence"
        ],
        "correct": 2,
        "explanation": "Supplier disputes should start with agreed terms and objective evidence. In this PMP scenario, the clue is \"receives a vendor complaint that acceptance criteria were unclear\" and the disciplined response is to use contract evidence before taking punitive action. This item is unique to the Process domain pattern 114; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements",
        "domain": "Process",
        "topic": "Ambiguity",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "clarify ambiguous requirements before committing work.",
        "text": "During a vendor transition, a team lead finds two user groups describe the needed workflow differently; the sponsor wants evidence before approving changes. The team has documented late feedback in the issue register during a team working session 220. What should the project manager do first?",
        "choices": [
          "Ask the team to build the faster workflow and adjust later",
          "Choose the workflow from the larger department",
          "Split the team to build both workflows without scope review",
          "Facilitate requirements clarification with both groups before commitment"
        ],
        "correct": 3,
        "explanation": "Ambiguous requirements create rework, conflict, and scope growth. In this PMP scenario, the clue is \"finds two user groups describe the needed workflow differently\" and the disciplined response is to clarify ambiguous requirements before committing work. This item is unique to the Process domain pattern 115; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Issue management",
        "domain": "Process",
        "topic": "Issue ownership",
        "approach": "Hybrid",
        "difficulty": "Easy",
        "decisionRule": "assign ownership and track active issues.",
        "text": "During a software rollout, a sponsor finds a critical integration defect and no team is taking ownership; the release date is fixed. The team has documented late feedback in the stakeholder register during a sponsor checkpoint 221. What is the next step?",
        "choices": [
          "Log the issue, assign an owner, and coordinate resolution across affected teams",
          "Wait for teams to decide ownership without project involvement",
          "Move the defect to the risk register because it may affect release",
          "Close testing until the sponsor selects a technical owner"
        ],
        "correct": 0,
        "explanation": "Active issues need ownership, coordination, and resolution tracking. In this PMP scenario, the clue is \"finds a critical integration defect and no team is taking ownership\" and the disciplined response is to assign ownership and track active issues. This item is unique to the Process domain pattern 116; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Configuration",
        "domain": "Process",
        "topic": "Version control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "control approved product information and versions.",
        "text": "During a customer portal, a product owner finds two teams building from different approved interface versions; the sponsor wants evidence before approving changes. The team has documented late feedback in the stakeholder register during a backlog refinement session 222. What should be strengthened?",
        "choices": [
          "Increase sponsor reporting frequency to align versions",
          "Strengthen configuration control so teams use the current approved version",
          "Run a morale workshop because integration defects imply conflict",
          "Ask procurement to renegotiate because documents are vendor materials"
        ],
        "correct": 1,
        "explanation": "Configuration control prevents inconsistent information from causing defects. In this PMP scenario, the clue is \"finds two teams building from different approved interface versions\" and the disciplined response is to control approved product information and versions. This item is unique to the Process domain pattern 117; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Lessons learned",
        "domain": "Process",
        "topic": "Knowledge transfer",
        "approach": "Predictive",
        "difficulty": "Easy",
        "decisionRule": "capture useful lessons when they can still help.",
        "text": "During a process improvement effort, a functional manager discovers a better way to coordinate regulatory reviews during the project; the release date is fixed. The team has documented late feedback in the stakeholder register during a baseline review 223. What should the project manager do?",
        "choices": [
          "Wait until closure because lessons are recorded only at the end",
          "Keep the lesson within the current team to avoid confusion",
          "Document and share the lesson through the knowledge management approach",
          "Replace the communication plan without stakeholder review"
        ],
        "correct": 2,
        "explanation": "Lessons learned are valuable during the project, not only at closure. In this PMP scenario, the clue is \"discovers a better way to coordinate regulatory reviews during the project\" and the disciplined response is to capture useful lessons when they can still help. This item is unique to the Process domain pattern 118; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Process",
        "topic": "Acceptance criteria",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "use agreed acceptance criteria to resolve completion disputes.",
        "text": "During a reporting automation project, a vendor lead hears a customer reject a deliverable despite the team saying it meets criteria; the sponsor wants evidence before approving changes. The team has documented late feedback in the stakeholder register during a release readiness meeting 224. What should be done first?",
        "choices": [
          "Mark it accepted because the team believes it meets the criteria",
          "Rebuild the deliverable immediately without reviewing criteria",
          "Ask the sponsor to force acceptance before hearing the concern",
          "Review the agreed acceptance criteria with the customer and team to identify the gap"
        ],
        "correct": 3,
        "explanation": "Acceptance disputes should be grounded in documented criteria and evidence. In this PMP scenario, the clue is \"hears a customer reject a deliverable despite the team saying it meets criteria\" and the disciplined response is to use agreed acceptance criteria to resolve completion disputes. This item is unique to the Process domain pattern 119; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Estimation",
        "domain": "Process",
        "topic": "Forecasting",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "investigate variance before using reserves or changing forecasts.",
        "text": "During a data migration, a compliance analyst sees cost trending above plan for the first time; the release date is fixed. The team has documented late feedback in the stakeholder register during a vendor coordination call 225. What should the project manager do first?",
        "choices": [
          "Analyze the cause and forecast impact before recommending corrective action",
          "Use reserve immediately because any increase should be covered",
          "Reduce quality activities to bring the report back under budget",
          "Tell the sponsor the variance is temporary without reviewing data"
        ],
        "correct": 0,
        "explanation": "A variance requires cause and trend analysis before action. In this PMP scenario, the clue is \"sees cost trending above plan for the first time\" and the disciplined response is to investigate variance before using reserves or changing forecasts. This item is unique to the Process domain pattern 120; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change control",
        "domain": "Process",
        "topic": "Baselined change",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "assess impact and follow change control for baseline changes.",
        "text": "During a regulatory implementation, a customer representative asks for an additional feature after the scope baseline has been approved; the sponsor wants evidence before approving changes. The team has documented late feedback in the stakeholder register during a steering committee update 226. What should the project manager do next?",
        "choices": [
          "Ask the team to add the feature because it appears small",
          "Document the request and evaluate impact through the formal change control process",
          "Reject the request because changes are never allowed after approval",
          "Use contingency reserve without reviewing scope or schedule impact"
        ],
        "correct": 1,
        "explanation": "A baselined change needs impact analysis before approval or rejection. In this PMP scenario, the clue is \"asks for an additional feature after the scope baseline has been approved\" and the disciplined response is to assess impact and follow change control for baseline changes. This item is unique to the Process domain pattern 121; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk",
        "domain": "Process",
        "topic": "Risk response",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "manage occurred risks as active issues.",
        "text": "During a mobile product release, a senior stakeholder reports that a previously identified supplier delay has now occurred; the release date is fixed. Which record should be updated first. The team has documented late feedback in the stakeholder register during a lessons-learned discussion 227. What is the best response?",
        "choices": [
          "Keep it only in the risk register because it was originally uncertain",
          "Update the project charter because the business need has changed",
          "Update the issue log and execute the planned response as appropriate",
          "Close the risk without assigning issue ownership"
        ],
        "correct": 2,
        "explanation": "Once an uncertain event happens, it becomes an issue to manage. In this PMP scenario, the clue is \"reports that a previously identified supplier delay has now occurred\" and the disciplined response is to manage occurred risks as active issues. This item is unique to the Process domain pattern 122; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scope",
        "domain": "Process",
        "topic": "Gold plating",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prevent unapproved extras from bypassing scope control.",
        "text": "During a facility upgrade, an operations manager discovers a team member added an unapproved dashboard because it looked useful; the sponsor wants evidence before approving changes. The team has documented late feedback in the stakeholder register during an acceptance review 228. What should happen?",
        "choices": [
          "Praise the extra feature and add it to the baseline after delivery",
          "Skip planned testing because extra features create more value",
          "Ask the customer to accept it before documenting impact",
          "Review the unapproved work against scope, impact, and change expectations"
        ],
        "correct": 3,
        "explanation": "Gold plating can create cost, quality, schedule, and support impacts. In this PMP scenario, the clue is \"discovers a team member added an unapproved dashboard because it looked useful\" and the disciplined response is to prevent unapproved extras from bypassing scope control. This item is unique to the Process domain pattern 123; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Process",
        "topic": "Schedule compression",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "evaluate schedule compression trade-offs before committing.",
        "text": "During a training program, a project coordinator is asked to finish two weeks earlier without reducing scope; the release date is fixed. The team has documented late feedback in the stakeholder register during a risk review 229. What should be done first?",
        "choices": [
          "Analyze compression options, risks, cost, and impact before recommending a path",
          "Add people immediately because crashing always shortens the schedule",
          "Remove quality reviews so the team can recover time",
          "Tell the sponsor dates cannot change under any circumstances"
        ],
        "correct": 0,
        "explanation": "Crashing and fast tracking create risks and trade-offs that need analysis. In this PMP scenario, the clue is \"is asked to finish two weeks earlier without reducing scope\" and the disciplined response is to evaluate schedule compression trade-offs before committing. This item is unique to the Process domain pattern 124; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Process",
        "topic": "Root cause",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "analyze root cause before prescribing corrective action.",
        "text": "During a vendor transition, a team lead sees the same deliverable fail inspection for the second time; the sponsor wants evidence before approving changes. The team has documented late feedback in the stakeholder register during a team working session 230. What should the project manager do first?",
        "choices": [
          "Replace the responsible engineer immediately",
          "Analyze the defect pattern with the team to identify root cause",
          "Ask the customer to relax the quality requirement",
          "Move the deliverable to accepted because two inspections are enough"
        ],
        "correct": 1,
        "explanation": "Repeated defects may come from process, tooling, requirements, or review gaps. In this PMP scenario, the clue is \"sees the same deliverable fail inspection for the second time\" and the disciplined response is to analyze root cause before prescribing corrective action. This item is unique to the Process domain pattern 125; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Benefits",
        "domain": "Business Environment",
        "topic": "Benefits realization",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "track whether delivery supports expected benefits.",
        "text": "During a software rollout, a sponsor learns delivered increments are on time but do not reduce processing time as expected; the release date is fixed. The team has documented late feedback in the risk response notes during a sponsor checkpoint 231. What should be reviewed?",
        "choices": [
          "Continue unchanged because increments were delivered on time",
          "Close benefits discussion until all planned scope is complete",
          "Review benefits assumptions with stakeholders and adjust the delivery plan if needed",
          "Ask users to wait for training before sharing feedback"
        ],
        "correct": 2,
        "explanation": "Outputs do not guarantee benefits; assumptions may need review. In this PMP scenario, the clue is \"learns delivered increments are on time but do not reduce processing time as expected\" and the disciplined response is to track whether delivery supports expected benefits. This item is unique to the Business Environment domain pattern 1; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Compliance",
        "domain": "Business Environment",
        "topic": "Regulatory impact",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "evaluate compliance constraints with the right stakeholders.",
        "text": "During a customer portal, a product owner finds a planned data feature may violate a new regulation; the sponsor wants evidence before approving changes. The team has documented late feedback in the risk response notes during a backlog refinement session 232. What should happen first?",
        "choices": [
          "Keep the feature because the business case depends on it",
          "Hide the feature until after the compliance audit",
          "Cancel all remaining work because a regulation changed",
          "Engage compliance and stakeholders to assess regulatory impact and response options"
        ],
        "correct": 3,
        "explanation": "Compliance concerns require expert input and stakeholder decisions. In this PMP scenario, the clue is \"finds a planned data feature may violate a new regulation\" and the disciplined response is to evaluate compliance constraints with the right stakeholders. This item is unique to the Business Environment domain pattern 2; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Strategy",
        "domain": "Business Environment",
        "topic": "Strategic alignment",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "confirm business value when strategy changes.",
        "text": "During a process improvement effort, a functional manager realizes a deliverable meets specifications but no longer supports strategy; the release date is fixed. The team has documented late feedback in the risk response notes during a baseline review 233. What should the project manager focus on?",
        "choices": [
          "Confirm whether the deliverable still supports business value and strategic alignment",
          "Celebrate completion because specification compliance is the only measure",
          "Rebuild the deliverable before discussing strategy with stakeholders",
          "Close the project because market changes are outside project control"
        ],
        "correct": 0,
        "explanation": "Project success depends on outcomes and alignment, not only outputs. In this PMP scenario, the clue is \"realizes a deliverable meets specifications but no longer supports strategy\" and the disciplined response is to confirm business value when strategy changes. This item is unique to the Business Environment domain pattern 3; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Organizational change",
        "domain": "Business Environment",
        "topic": "Transition readiness",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "plan adoption work when outcomes require behavior change.",
        "text": "During a reporting automation project, a vendor lead learns operations is not ready to change procedures after the technical solution is complete; the sponsor wants evidence before approving changes. The team has documented late feedback in the risk response notes during a release readiness meeting 234. What should be reviewed?",
        "choices": [
          "Only review final technical test results because adoption is outside the project",
          "Review transition, adoption, and change management activities needed for operations",
          "Close procurement records before discussing process readiness",
          "Reduce documentation because the project team understands the solution"
        ],
        "correct": 1,
        "explanation": "Value may depend on operational adoption, not only technical completion. In this PMP scenario, the clue is \"learns operations is not ready to change procedures after the technical solution is complete\" and the disciplined response is to plan adoption work when outcomes require behavior change. This item is unique to the Business Environment domain pattern 4; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Value",
        "domain": "Business Environment",
        "topic": "Value trade-off",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "use value and learning to guide limited capacity.",
        "text": "During a data migration, a compliance analyst can include only one feature in the release and one option tests the main benefit assumption; the release date is fixed. The team has documented late feedback in the risk response notes during a vendor coordination call 235. What should guide the decision?",
        "choices": [
          "Choose the largest feature because more work means more value",
          "Let developers choose the easiest item to code",
          "Discuss value, learning, and release goals with the Product Owner and stakeholders",
          "Choose the loudest stakeholder's request to reduce complaints"
        ],
        "correct": 2,
        "explanation": "Release choices should support value, learning, and business outcomes. In this PMP scenario, the clue is \"can include only one feature in the release and one option tests the main benefit assumption\" and the disciplined response is to use value and learning to guide limited capacity. This item is unique to the Business Environment domain pattern 5; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Benefits",
        "domain": "Business Environment",
        "topic": "Benefits realization",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "track whether delivery supports expected benefits.",
        "text": "During a regulatory implementation, a customer representative learns delivered increments are on time but do not reduce processing time as expected; the sponsor wants evidence before approving changes. The team has documented late feedback in the risk response notes during a steering committee update 236. What should be reviewed?",
        "choices": [
          "Continue unchanged because increments were delivered on time",
          "Close benefits discussion until all planned scope is complete",
          "Ask users to wait for training before sharing feedback",
          "Review benefits assumptions with stakeholders and adjust the delivery plan if needed"
        ],
        "correct": 3,
        "explanation": "Outputs do not guarantee benefits; assumptions may need review. In this PMP scenario, the clue is \"learns delivered increments are on time but do not reduce processing time as expected\" and the disciplined response is to track whether delivery supports expected benefits. This item is unique to the Business Environment domain pattern 6; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Compliance",
        "domain": "Business Environment",
        "topic": "Regulatory impact",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "evaluate compliance constraints with the right stakeholders.",
        "text": "During a mobile product release, a senior stakeholder finds a planned data feature may violate a new regulation; the release date is fixed. The team has documented late feedback in the risk response notes during a lessons-learned discussion 237. What should happen first?",
        "choices": [
          "Engage compliance and stakeholders to assess regulatory impact and response options",
          "Keep the feature because the business case depends on it",
          "Hide the feature until after the compliance audit",
          "Cancel all remaining work because a regulation changed"
        ],
        "correct": 0,
        "explanation": "Compliance concerns require expert input and stakeholder decisions. In this PMP scenario, the clue is \"finds a planned data feature may violate a new regulation\" and the disciplined response is to evaluate compliance constraints with the right stakeholders. This item is unique to the Business Environment domain pattern 7; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Strategy",
        "domain": "Business Environment",
        "topic": "Strategic alignment",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "confirm business value when strategy changes.",
        "text": "During a facility upgrade, an operations manager realizes a deliverable meets specifications but no longer supports strategy; the sponsor wants evidence before approving changes. The team has documented late feedback in the risk response notes during an acceptance review 238. What should the project manager focus on?",
        "choices": [
          "Celebrate completion because specification compliance is the only measure",
          "Confirm whether the deliverable still supports business value and strategic alignment",
          "Rebuild the deliverable before discussing strategy with stakeholders",
          "Close the project because market changes are outside project control"
        ],
        "correct": 1,
        "explanation": "Project success depends on outcomes and alignment, not only outputs. In this PMP scenario, the clue is \"realizes a deliverable meets specifications but no longer supports strategy\" and the disciplined response is to confirm business value when strategy changes. This item is unique to the Business Environment domain pattern 8; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Organizational change",
        "domain": "Business Environment",
        "topic": "Transition readiness",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "plan adoption work when outcomes require behavior change.",
        "text": "During a training program, a project coordinator learns operations is not ready to change procedures after the technical solution is complete; the release date is fixed. The team has documented late feedback in the risk response notes during a risk review 239. What should be reviewed?",
        "choices": [
          "Only review final technical test results because adoption is outside the project",
          "Close procurement records before discussing process readiness",
          "Review transition, adoption, and change management activities needed for operations",
          "Reduce documentation because the project team understands the solution"
        ],
        "correct": 2,
        "explanation": "Value may depend on operational adoption, not only technical completion. In this PMP scenario, the clue is \"learns operations is not ready to change procedures after the technical solution is complete\" and the disciplined response is to plan adoption work when outcomes require behavior change. This item is unique to the Business Environment domain pattern 9; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Value",
        "domain": "Business Environment",
        "topic": "Value trade-off",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "use value and learning to guide limited capacity.",
        "text": "During a vendor transition, a team lead can include only one feature in the release and one option tests the main benefit assumption; the sponsor wants evidence before approving changes. The team has documented late feedback in the risk response notes during a team working session 240. What should guide the decision?",
        "choices": [
          "Choose the largest feature because more work means more value",
          "Let developers choose the easiest item to code",
          "Choose the loudest stakeholder's request to reduce complaints",
          "Discuss value, learning, and release goals with the Product Owner and stakeholders"
        ],
        "correct": 3,
        "explanation": "Release choices should support value, learning, and business outcomes. In this PMP scenario, the clue is \"can include only one feature in the release and one option tests the main benefit assumption\" and the disciplined response is to use value and learning to guide limited capacity. This item is unique to the Business Environment domain pattern 10; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Benefits",
        "domain": "Business Environment",
        "topic": "Benefits realization",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "track whether delivery supports expected benefits.",
        "text": "During a software rollout, a sponsor learns delivered increments are on time but do not reduce processing time as expected; the release date is fixed. The team has documented late feedback in the communications plan during a sponsor checkpoint 241. What should be reviewed?",
        "choices": [
          "Review benefits assumptions with stakeholders and adjust the delivery plan if needed",
          "Continue unchanged because increments were delivered on time",
          "Close benefits discussion until all planned scope is complete",
          "Ask users to wait for training before sharing feedback"
        ],
        "correct": 0,
        "explanation": "Outputs do not guarantee benefits; assumptions may need review. In this PMP scenario, the clue is \"learns delivered increments are on time but do not reduce processing time as expected\" and the disciplined response is to track whether delivery supports expected benefits. This item is unique to the Business Environment domain pattern 11; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Compliance",
        "domain": "Business Environment",
        "topic": "Regulatory impact",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "evaluate compliance constraints with the right stakeholders.",
        "text": "During a customer portal, a product owner finds a planned data feature may violate a new regulation; the sponsor wants evidence before approving changes. The team has documented late feedback in the communications plan during a backlog refinement session 242. What should happen first?",
        "choices": [
          "Keep the feature because the business case depends on it",
          "Engage compliance and stakeholders to assess regulatory impact and response options",
          "Hide the feature until after the compliance audit",
          "Cancel all remaining work because a regulation changed"
        ],
        "correct": 1,
        "explanation": "Compliance concerns require expert input and stakeholder decisions. In this PMP scenario, the clue is \"finds a planned data feature may violate a new regulation\" and the disciplined response is to evaluate compliance constraints with the right stakeholders. This item is unique to the Business Environment domain pattern 12; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Strategy",
        "domain": "Business Environment",
        "topic": "Strategic alignment",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "confirm business value when strategy changes.",
        "text": "During a process improvement effort, a functional manager realizes a deliverable meets specifications but no longer supports strategy; the release date is fixed. The team has documented late feedback in the communications plan during a baseline review 243. What should the project manager focus on?",
        "choices": [
          "Celebrate completion because specification compliance is the only measure",
          "Rebuild the deliverable before discussing strategy with stakeholders",
          "Confirm whether the deliverable still supports business value and strategic alignment",
          "Close the project because market changes are outside project control"
        ],
        "correct": 2,
        "explanation": "Project success depends on outcomes and alignment, not only outputs. In this PMP scenario, the clue is \"realizes a deliverable meets specifications but no longer supports strategy\" and the disciplined response is to confirm business value when strategy changes. This item is unique to the Business Environment domain pattern 13; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Organizational change",
        "domain": "Business Environment",
        "topic": "Transition readiness",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "plan adoption work when outcomes require behavior change.",
        "text": "During a reporting automation project, a vendor lead learns operations is not ready to change procedures after the technical solution is complete; the sponsor wants evidence before approving changes. The team has documented late feedback in the communications plan during a release readiness meeting 244. What should be reviewed?",
        "choices": [
          "Only review final technical test results because adoption is outside the project",
          "Close procurement records before discussing process readiness",
          "Reduce documentation because the project team understands the solution",
          "Review transition, adoption, and change management activities needed for operations"
        ],
        "correct": 3,
        "explanation": "Value may depend on operational adoption, not only technical completion. In this PMP scenario, the clue is \"learns operations is not ready to change procedures after the technical solution is complete\" and the disciplined response is to plan adoption work when outcomes require behavior change. This item is unique to the Business Environment domain pattern 14; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Value",
        "domain": "Business Environment",
        "topic": "Value trade-off",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "use value and learning to guide limited capacity.",
        "text": "During a data migration, a compliance analyst can include only one feature in the release and one option tests the main benefit assumption; the release date is fixed. The team has documented late feedback in the communications plan during a vendor coordination call 245. What should guide the decision?",
        "choices": [
          "Discuss value, learning, and release goals with the Product Owner and stakeholders",
          "Choose the largest feature because more work means more value",
          "Let developers choose the easiest item to code",
          "Choose the loudest stakeholder's request to reduce complaints"
        ],
        "correct": 0,
        "explanation": "Release choices should support value, learning, and business outcomes. In this PMP scenario, the clue is \"can include only one feature in the release and one option tests the main benefit assumption\" and the disciplined response is to use value and learning to guide limited capacity. This item is unique to the Business Environment domain pattern 15; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Benefits",
        "domain": "Business Environment",
        "topic": "Benefits realization",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "track whether delivery supports expected benefits.",
        "text": "During a regulatory implementation, a customer representative learns delivered increments are on time but do not reduce processing time as expected; the sponsor wants evidence before approving changes. The team has documented late feedback in the communications plan during a steering committee update 246. What should be reviewed?",
        "choices": [
          "Continue unchanged because increments were delivered on time",
          "Review benefits assumptions with stakeholders and adjust the delivery plan if needed",
          "Close benefits discussion until all planned scope is complete",
          "Ask users to wait for training before sharing feedback"
        ],
        "correct": 1,
        "explanation": "Outputs do not guarantee benefits; assumptions may need review. In this PMP scenario, the clue is \"learns delivered increments are on time but do not reduce processing time as expected\" and the disciplined response is to track whether delivery supports expected benefits. This item is unique to the Business Environment domain pattern 16; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Compliance",
        "domain": "Business Environment",
        "topic": "Regulatory impact",
        "approach": "Predictive",
        "difficulty": "Hard",
        "decisionRule": "evaluate compliance constraints with the right stakeholders.",
        "text": "During a mobile product release, a senior stakeholder finds a planned data feature may violate a new regulation; the release date is fixed. The team has documented late feedback in the communications plan during a lessons-learned discussion 247. What should happen first?",
        "choices": [
          "Keep the feature because the business case depends on it",
          "Hide the feature until after the compliance audit",
          "Engage compliance and stakeholders to assess regulatory impact and response options",
          "Cancel all remaining work because a regulation changed"
        ],
        "correct": 2,
        "explanation": "Compliance concerns require expert input and stakeholder decisions. In this PMP scenario, the clue is \"finds a planned data feature may violate a new regulation\" and the disciplined response is to evaluate compliance constraints with the right stakeholders. This item is unique to the Business Environment domain pattern 17; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Strategy",
        "domain": "Business Environment",
        "topic": "Strategic alignment",
        "approach": "Hybrid",
        "difficulty": "Medium",
        "decisionRule": "confirm business value when strategy changes.",
        "text": "During a facility upgrade, an operations manager realizes a deliverable meets specifications but no longer supports strategy; the sponsor wants evidence before approving changes. The team has documented late feedback in the communications plan during an acceptance review 248. What should the project manager focus on?",
        "choices": [
          "Celebrate completion because specification compliance is the only measure",
          "Rebuild the deliverable before discussing strategy with stakeholders",
          "Close the project because market changes are outside project control",
          "Confirm whether the deliverable still supports business value and strategic alignment"
        ],
        "correct": 3,
        "explanation": "Project success depends on outcomes and alignment, not only outputs. In this PMP scenario, the clue is \"realizes a deliverable meets specifications but no longer supports strategy\" and the disciplined response is to confirm business value when strategy changes. This item is unique to the Business Environment domain pattern 18; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Organizational change",
        "domain": "Business Environment",
        "topic": "Transition readiness",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "plan adoption work when outcomes require behavior change.",
        "text": "During a training program, a project coordinator learns operations is not ready to change procedures after the technical solution is complete; the release date is fixed. The team has documented late feedback in the communications plan during a risk review 249. What should be reviewed?",
        "choices": [
          "Review transition, adoption, and change management activities needed for operations",
          "Only review final technical test results because adoption is outside the project",
          "Close procurement records before discussing process readiness",
          "Reduce documentation because the project team understands the solution"
        ],
        "correct": 0,
        "explanation": "Value may depend on operational adoption, not only technical completion. In this PMP scenario, the clue is \"learns operations is not ready to change procedures after the technical solution is complete\" and the disciplined response is to plan adoption work when outcomes require behavior change. This item is unique to the Business Environment domain pattern 19; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Value",
        "domain": "Business Environment",
        "topic": "Value trade-off",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "use value and learning to guide limited capacity.",
        "text": "During a vendor transition, a team lead can include only one feature in the release and one option tests the main benefit assumption; the sponsor wants evidence before approving changes. The team has documented late feedback in the communications plan during a team working session 250. What should guide the decision?",
        "choices": [
          "Choose the largest feature because more work means more value",
          "Discuss value, learning, and release goals with the Product Owner and stakeholders",
          "Let developers choose the easiest item to code",
          "Choose the loudest stakeholder's request to reduce complaints"
        ],
        "correct": 1,
        "explanation": "Release choices should support value, learning, and business outcomes. In this PMP scenario, the clue is \"can include only one feature in the release and one option tests the main benefit assumption\" and the disciplined response is to use value and learning to guide limited capacity. This item is unique to the Business Environment domain pattern 20; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      }
    ],
    "examConfig": {
      "practiceQuestionCount": 250,
      "examQuestionCount": 180,
      "examDurationMinutes": 230,
      "modeLabels": {
        "practice": "Practice",
        "exam": "Mock Exam"
      },
      "domainTargets": [
        {
          "domain": "People",
          "weight": 42,
          "practiceCount": 105,
          "mockCount": 76
        },
        {
          "domain": "Process",
          "weight": 50,
          "practiceCount": 125,
          "mockCount": 90
        },
        {
          "domain": "Business Environment",
          "weight": 8,
          "practiceCount": 20,
          "mockCount": 14
        }
      ]
    }
  },
  {
    "id": "capm",
    "track": "project",
    "country": "Global",
    "region": "Project Management",
    "examType": "Project Management",
    "title": "CAPM fundamentals practice bank",
    "subtitle": "PMI entry-level project management certification",
    "badge": "CAPM",
    "questionCount": 200,
    "updated": "2026",
    "source": "PMI CAPM Exam Content Outline",
    "coverage": [
      "Project Management Fundamentals and Core Concepts",
      "Predictive, Plan-Based Methodologies",
      "Agile Frameworks and Methodologies",
      "Business Analysis Frameworks"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "200-question CAPM fundamentals practice bank with a 150-question mock exam drawn by domain weight.",
    "examConfig": {
      "practiceQuestionCount": 200,
      "examQuestionCount": 150,
      "examDurationMinutes": 180,
      "modeLabels": {
        "practice": "Practice",
        "exam": "Mock Exam"
      },
      "domainTargets": [
        {
          "domain": "Project Management Fundamentals and Core Concepts",
          "weight": 36,
          "practiceCount": 72,
          "mockCount": 54
        },
        {
          "domain": "Predictive, Plan-Based Methodologies",
          "weight": 17,
          "practiceCount": 34,
          "mockCount": 26
        },
        {
          "domain": "Agile Frameworks and Methodologies",
          "weight": 20,
          "practiceCount": 40,
          "mockCount": 30
        },
        {
          "domain": "Business Analysis Frameworks",
          "weight": 27,
          "practiceCount": 54,
          "mockCount": 40
        }
      ]
    },
    "questions": [
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a software rollout, a sponsor asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the decision log during a sponsor checkpoint 1. What is the best response?",
        "choices": [
          "A program, because related projects are coordinated together for shared benefits",
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 0,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 1; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a customer portal, a product owner confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the decision log during a backlog refinement session 2. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "The sponsor provides authority and support, while users work with the delivered result",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project"
        ],
        "correct": 1,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 2; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a process improvement effort, a functional manager describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the decision log during a baseline review 3. What is the best response?",
        "choices": [
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A risk, because the event is uncertain and has not happened yet",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 2,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 3; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a reporting automation project, a vendor lead asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the decision log during a release readiness meeting 4. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule",
          "The manual is the deliverable, and its approval is a milestone or acceptance event"
        ],
        "correct": 3,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 4; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a data migration, a compliance analyst states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the decision log during a vendor coordination call 5. What is the best response?",
        "choices": [
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 0,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 5; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a regulatory implementation, a customer representative asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the decision log during a steering committee update 6. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "A hybrid approach that combines plan-based control with iterative learning",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection"
        ],
        "correct": 1,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 6; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a mobile product release, a senior stakeholder asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the decision log during a lessons-learned discussion 7. What is the best response?",
        "choices": [
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "A program, because related projects are coordinated together for shared benefits",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 2,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 7; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a facility upgrade, an operations manager confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the decision log during an acceptance review 8. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project",
          "The sponsor provides authority and support, while users work with the delivered result"
        ],
        "correct": 3,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 8; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a training program, a project coordinator describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the decision log during a risk review 9. What is the best response?",
        "choices": [
          "A risk, because the event is uncertain and has not happened yet",
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 0,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 9; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a vendor transition, a team lead asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the decision log during a team working session 10. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The manual is the deliverable, and its approval is a milestone or acceptance event",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule"
        ],
        "correct": 1,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 10; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a software rollout, a sponsor states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the issue register during a sponsor checkpoint 11. What is the best response?",
        "choices": [
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 2,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 11; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a customer portal, a product owner asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the issue register during a backlog refinement session 12. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection",
          "A hybrid approach that combines plan-based control with iterative learning"
        ],
        "correct": 3,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 12; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a process improvement effort, a functional manager asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the issue register during a baseline review 13. What is the best response?",
        "choices": [
          "A program, because related projects are coordinated together for shared benefits",
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 0,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 13; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a reporting automation project, a vendor lead confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the issue register during a release readiness meeting 14. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "The sponsor provides authority and support, while users work with the delivered result",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project"
        ],
        "correct": 1,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 14; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a data migration, a compliance analyst describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the issue register during a vendor coordination call 15. What is the best response?",
        "choices": [
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A risk, because the event is uncertain and has not happened yet",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 2,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 15; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a regulatory implementation, a customer representative asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the issue register during a steering committee update 16. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule",
          "The manual is the deliverable, and its approval is a milestone or acceptance event"
        ],
        "correct": 3,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 16; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a mobile product release, a senior stakeholder states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the issue register during a lessons-learned discussion 17. What is the best response?",
        "choices": [
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 0,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 17; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a facility upgrade, an operations manager asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the issue register during an acceptance review 18. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "A hybrid approach that combines plan-based control with iterative learning",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection"
        ],
        "correct": 1,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 18; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a training program, a project coordinator asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the issue register during a risk review 19. What is the best response?",
        "choices": [
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "A program, because related projects are coordinated together for shared benefits",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 2,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 19; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a vendor transition, a team lead confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the issue register during a team working session 20. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project",
          "The sponsor provides authority and support, while users work with the delivered result"
        ],
        "correct": 3,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 20; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a software rollout, a sponsor describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the stakeholder register during a sponsor checkpoint 21. What is the best response?",
        "choices": [
          "A risk, because the event is uncertain and has not happened yet",
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 0,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 21; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a customer portal, a product owner asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the stakeholder register during a backlog refinement session 22. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The manual is the deliverable, and its approval is a milestone or acceptance event",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule"
        ],
        "correct": 1,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 22; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a process improvement effort, a functional manager states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the stakeholder register during a baseline review 23. What is the best response?",
        "choices": [
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 2,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 23; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a reporting automation project, a vendor lead asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the stakeholder register during a release readiness meeting 24. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection",
          "A hybrid approach that combines plan-based control with iterative learning"
        ],
        "correct": 3,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 24; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a data migration, a compliance analyst asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the stakeholder register during a vendor coordination call 25. What is the best response?",
        "choices": [
          "A program, because related projects are coordinated together for shared benefits",
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 0,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 25; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a regulatory implementation, a customer representative confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the stakeholder register during a steering committee update 26. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "The sponsor provides authority and support, while users work with the delivered result",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project"
        ],
        "correct": 1,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 26; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a mobile product release, a senior stakeholder describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the stakeholder register during a lessons-learned discussion 27. What is the best response?",
        "choices": [
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A risk, because the event is uncertain and has not happened yet",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 2,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 27; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a facility upgrade, an operations manager asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the stakeholder register during an acceptance review 28. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule",
          "The manual is the deliverable, and its approval is a milestone or acceptance event"
        ],
        "correct": 3,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 28; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a training program, a project coordinator states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the stakeholder register during a risk review 29. What is the best response?",
        "choices": [
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 0,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 29; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a vendor transition, a team lead asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the stakeholder register during a team working session 30. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "A hybrid approach that combines plan-based control with iterative learning",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection"
        ],
        "correct": 1,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 30; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a software rollout, a sponsor asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the risk response notes during a sponsor checkpoint 31. What is the best response?",
        "choices": [
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "A program, because related projects are coordinated together for shared benefits",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 2,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 31; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a customer portal, a product owner confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the risk response notes during a backlog refinement session 32. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project",
          "The sponsor provides authority and support, while users work with the delivered result"
        ],
        "correct": 3,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 32; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a process improvement effort, a functional manager describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the risk response notes during a baseline review 33. What is the best response?",
        "choices": [
          "A risk, because the event is uncertain and has not happened yet",
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 0,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 33; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a reporting automation project, a vendor lead asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the risk response notes during a release readiness meeting 34. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The manual is the deliverable, and its approval is a milestone or acceptance event",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule"
        ],
        "correct": 1,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 34; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a data migration, a compliance analyst states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the risk response notes during a vendor coordination call 35. What is the best response?",
        "choices": [
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 2,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 35; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a regulatory implementation, a customer representative asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the risk response notes during a steering committee update 36. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection",
          "A hybrid approach that combines plan-based control with iterative learning"
        ],
        "correct": 3,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 36; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a mobile product release, a senior stakeholder asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the risk response notes during a lessons-learned discussion 37. What is the best response?",
        "choices": [
          "A program, because related projects are coordinated together for shared benefits",
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 0,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 37; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a facility upgrade, an operations manager confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the risk response notes during an acceptance review 38. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "The sponsor provides authority and support, while users work with the delivered result",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project"
        ],
        "correct": 1,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 38; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a training program, a project coordinator describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the risk response notes during a risk review 39. What is the best response?",
        "choices": [
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A risk, because the event is uncertain and has not happened yet",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 2,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 39; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a vendor transition, a team lead asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the risk response notes during a team working session 40. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule",
          "The manual is the deliverable, and its approval is a milestone or acceptance event"
        ],
        "correct": 3,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 40; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a software rollout, a sponsor states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the communications plan during a sponsor checkpoint 41. What is the best response?",
        "choices": [
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 0,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 41; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a customer portal, a product owner asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the communications plan during a backlog refinement session 42. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "A hybrid approach that combines plan-based control with iterative learning",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection"
        ],
        "correct": 1,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 42; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a process improvement effort, a functional manager asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the communications plan during a baseline review 43. What is the best response?",
        "choices": [
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "A program, because related projects are coordinated together for shared benefits",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 2,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 43; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a reporting automation project, a vendor lead confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the communications plan during a release readiness meeting 44. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project",
          "The sponsor provides authority and support, while users work with the delivered result"
        ],
        "correct": 3,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 44; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a data migration, a compliance analyst describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the communications plan during a vendor coordination call 45. What is the best response?",
        "choices": [
          "A risk, because the event is uncertain and has not happened yet",
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 0,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 45; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a regulatory implementation, a customer representative asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the communications plan during a steering committee update 46. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The manual is the deliverable, and its approval is a milestone or acceptance event",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule"
        ],
        "correct": 1,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 46; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a mobile product release, a senior stakeholder states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the communications plan during a lessons-learned discussion 47. What is the best response?",
        "choices": [
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 2,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 47; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a facility upgrade, an operations manager asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the communications plan during an acceptance review 48. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection",
          "A hybrid approach that combines plan-based control with iterative learning"
        ],
        "correct": 3,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 48; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a training program, a project coordinator asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the communications plan during a risk review 49. What is the best response?",
        "choices": [
          "A program, because related projects are coordinated together for shared benefits",
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 0,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 49; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a vendor transition, a team lead confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the communications plan during a team working session 50. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "The sponsor provides authority and support, while users work with the delivered result",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project"
        ],
        "correct": 1,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 50; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a software rollout, a sponsor describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the change request queue during a sponsor checkpoint 51. What is the best response?",
        "choices": [
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A risk, because the event is uncertain and has not happened yet",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 2,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 51; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a customer portal, a product owner asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the change request queue during a backlog refinement session 52. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule",
          "The manual is the deliverable, and its approval is a milestone or acceptance event"
        ],
        "correct": 3,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 52; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a process improvement effort, a functional manager states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the change request queue during a baseline review 53. What is the best response?",
        "choices": [
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 0,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 53; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a reporting automation project, a vendor lead asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the change request queue during a release readiness meeting 54. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "A hybrid approach that combines plan-based control with iterative learning",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection"
        ],
        "correct": 1,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 54; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a data migration, a compliance analyst asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the change request queue during a vendor coordination call 55. What is the best response?",
        "choices": [
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "A program, because related projects are coordinated together for shared benefits",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 2,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 55; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a regulatory implementation, a customer representative confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the change request queue during a steering committee update 56. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project",
          "The sponsor provides authority and support, while users work with the delivered result"
        ],
        "correct": 3,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 56; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a mobile product release, a senior stakeholder describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the change request queue during a lessons-learned discussion 57. What is the best response?",
        "choices": [
          "A risk, because the event is uncertain and has not happened yet",
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 0,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 57; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a facility upgrade, an operations manager asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the change request queue during an acceptance review 58. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The manual is the deliverable, and its approval is a milestone or acceptance event",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule"
        ],
        "correct": 1,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 58; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a training program, a project coordinator states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the change request queue during a risk review 59. What is the best response?",
        "choices": [
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 2,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 59; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a vendor transition, a team lead asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the change request queue during a team working session 60. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection",
          "A hybrid approach that combines plan-based control with iterative learning"
        ],
        "correct": 3,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 60; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a software rollout, a sponsor asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the product backlog during a sponsor checkpoint 61. What is the best response?",
        "choices": [
          "A program, because related projects are coordinated together for shared benefits",
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 0,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 61; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a customer portal, a product owner confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the product backlog during a backlog refinement session 62. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "The sponsor provides authority and support, while users work with the delivered result",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project"
        ],
        "correct": 1,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 62; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a process improvement effort, a functional manager describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the product backlog during a baseline review 63. What is the best response?",
        "choices": [
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A risk, because the event is uncertain and has not happened yet",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 2,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 63; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a reporting automation project, a vendor lead asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the product backlog during a release readiness meeting 64. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule",
          "The manual is the deliverable, and its approval is a milestone or acceptance event"
        ],
        "correct": 3,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 64; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a data migration, a compliance analyst states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the product backlog during a vendor coordination call 65. What is the best response?",
        "choices": [
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 0,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 65; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a regulatory implementation, a customer representative asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the product backlog during a steering committee update 66. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "A hybrid approach that combines plan-based control with iterative learning",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection"
        ],
        "correct": 1,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 66; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Project basics",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Project program portfolio",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "distinguish project, program, and portfolio by purpose.",
        "text": "During a mobile product release, a senior stakeholder asks whether a group of related projects managed together is a project, program, or portfolio; the release date is fixed. Which concept best fits the situation. The team has documented conflicting expectations in the product backlog during a lessons-learned discussion 67. What is the best response?",
        "choices": [
          "A single project, because every effort with a deadline is one project",
          "A portfolio, because any group of work is automatically strategic investment governance",
          "A program, because related projects are coordinated together for shared benefits",
          "An operation, because related project work is always ongoing routine work"
        ],
        "correct": 2,
        "explanation": "CAPM fundamentals require clear separation of temporary work, coordinated related work, and strategic investment grouping. In this CAPM scenario, the clue is \"asks whether a group of related projects managed together is a project, program, or portfolio\" and the disciplined response is to distinguish project, program, and portfolio by purpose. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 67; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholders",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Stakeholder sponsor user",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "separate stakeholder roles by responsibility.",
        "text": "During a facility upgrade, an operations manager confuses the sponsor with users who will operate the final deliverable; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the product backlog during an acceptance review 68. What is the best distinction?",
        "choices": [
          "The sponsor and users are always the same people in project management",
          "Users approve funding and sponsors only test the final deliverable",
          "Stakeholders exclude anyone who does not pay for the project",
          "The sponsor provides authority and support, while users work with the delivered result"
        ],
        "correct": 3,
        "explanation": "Different project roles have different authority, needs, and involvement. In this CAPM scenario, the clue is \"confuses the sponsor with users who will operate the final deliverable\" and the disciplined response is to separate stakeholder roles by responsibility. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 68; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Risk issue",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Risk versus issue",
        "approach": "Foundational",
        "difficulty": "Easy",
        "decisionRule": "treat uncertain events as risks and occurred events as issues.",
        "text": "During a training program, a project coordinator describes a supplier delay that might happen next month; the release date is fixed. How should the situation be classified. The team has documented conflicting expectations in the product backlog during a risk review 69. What is the best response?",
        "choices": [
          "A risk, because the event is uncertain and has not happened yet",
          "An issue, because every supplier topic is already a problem",
          "A milestone, because delays are always schedule markers",
          "A deliverable, because supplier work produces project outputs"
        ],
        "correct": 0,
        "explanation": "Risk and issue classification determines the next management action. In this CAPM scenario, the clue is \"describes a supplier delay that might happen next month\" and the disciplined response is to treat uncertain events as risks and occurred events as issues. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 69; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Deliverables",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Deliverable milestone acceptance",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "distinguish outputs, timing markers, and acceptance rules.",
        "text": "During a vendor transition, a team lead asks whether approval of a completed training manual is the deliverable or a milestone; the sponsor wants evidence before approving changes. Which answer is most accurate. The team has documented conflicting expectations in the product backlog during a team working session 70. What is the best response?",
        "choices": [
          "The approval is the deliverable because no work matters until it is approved",
          "The manual is the deliverable, and its approval is a milestone or acceptance event",
          "The milestone is the physical output the project creates",
          "Acceptance criteria are the same thing as the project schedule"
        ],
        "correct": 1,
        "explanation": "Beginners often confuse the thing produced with the event that marks progress. In this CAPM scenario, the clue is \"asks whether approval of a completed training manual is the deliverable or a milestone\" and the disciplined response is to distinguish outputs, timing markers, and acceptance rules. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 70; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Constraints",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Assumption versus constraint",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "separate planning beliefs from limiting factors.",
        "text": "During a software rollout, a sponsor states the team believes a specialist will be available while the budget limit is fixed; the release date is fixed. Which classification is correct. The team has documented conflicting expectations in the requirements traceability matrix during a sponsor checkpoint 71. What is the best response?",
        "choices": [
          "Both are issues because they affect planning",
          "Both are deliverables because they shape project output",
          "Specialist availability is an assumption, and the fixed budget is a constraint",
          "The fixed budget is an assumption and specialist availability is a milestone"
        ],
        "correct": 2,
        "explanation": "Assumptions and constraints affect planning in different ways. In this CAPM scenario, the clue is \"states the team believes a specialist will be available while the budget limit is fixed\" and the disciplined response is to separate planning beliefs from limiting factors. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 71; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Life cycles",
        "domain": "Project Management Fundamentals and Core Concepts",
        "topic": "Predictive agile hybrid",
        "approach": "Foundational",
        "difficulty": "Medium",
        "decisionRule": "recognize predictive, agile, and hybrid ways of working.",
        "text": "During a customer portal, a product owner asks why some work is planned up front while other work is refined through feedback; the sponsor wants evidence before approving changes. Which life cycle idea is being described. The team has documented conflicting expectations in the requirements traceability matrix during a backlog refinement session 72. What is the best response?",
        "choices": [
          "A purely predictive approach with no adaptation",
          "An operation because feedback means the work is not a project",
          "A portfolio because all hybrid work is strategic selection",
          "A hybrid approach that combines plan-based control with iterative learning"
        ],
        "correct": 3,
        "explanation": "CAPM expects candidates to understand different project life cycles. In this CAPM scenario, the clue is \"asks why some work is planned up front while other work is refined through feedback\" and the disciplined response is to recognize predictive, agile, and hybrid ways of working. This item is unique to the Project Management Fundamentals and Core Concepts domain pattern 72; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "WBS",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Scope decomposition",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use the WBS to decompose predictive project scope.",
        "text": "During a process improvement effort, a functional manager needs a structured way to break approved scope into manageable work; the release date is fixed. Which tool or concept is most appropriate. The team has documented conflicting expectations in the requirements traceability matrix during a baseline review 73. What is the best response?",
        "choices": [
          "A work breakdown structure that decomposes project scope into work packages",
          "A stakeholder register that decomposes every deliverable by influence",
          "A risk matrix that lists the detailed work required for scope",
          "A product backlog ordered only by changing stakeholder preferences"
        ],
        "correct": 0,
        "explanation": "The WBS organizes scope into manageable pieces for planning and control. In this CAPM scenario, the clue is \"needs a structured way to break approved scope into manageable work\" and the disciplined response is to use the wbs to decompose predictive project scope. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 1; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Critical path",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prioritize schedule work by critical path impact.",
        "text": "During a reporting automation project, a vendor lead finds one delayed activity has float while another delayed activity is on the critical path; the sponsor wants evidence before approving changes. Which activity needs more immediate schedule attention. The team has documented conflicting expectations in the requirements traceability matrix during a release readiness meeting 74. What is the best response?",
        "choices": [
          "The activity with float because it has more available time",
          "The critical path activity because it can directly delay the project finish date",
          "Both activities equally without checking finish-date impact",
          "Neither activity until the customer asks for a forecast"
        ],
        "correct": 1,
        "explanation": "Critical path activities drive the project finish date. In this CAPM scenario, the clue is \"finds one delayed activity has float while another delayed activity is on the critical path\" and the disciplined response is to prioritize schedule work by critical path impact. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 2; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Cost",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Cost baseline",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use baselines as approved performance references.",
        "text": "During a data migration, a compliance analyst compares actual cost against the approved reference for measuring performance; the release date is fixed. The team has documented conflicting expectations in the requirements traceability matrix during a vendor coordination call 75. What is being used?",
        "choices": [
          "The issue log, because all cost differences are issues",
          "The stakeholder register, because sponsors approve money",
          "The cost baseline, because it is the approved reference for cost performance",
          "The product roadmap, because it shows customer value"
        ],
        "correct": 2,
        "explanation": "Baselines support comparison between plan and actual performance. In this CAPM scenario, the clue is \"compares actual cost against the approved reference for measuring performance\" and the disciplined response is to use baselines as approved performance references. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 3; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Acceptance criteria",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use acceptance criteria to verify deliverables.",
        "text": "During a regulatory implementation, a customer representative needs objective conditions to decide whether a deliverable is acceptable; the sponsor wants evidence before approving changes. Which item best supports the decision. The team has documented conflicting expectations in the requirements traceability matrix during a steering committee update 76. What is the best response?",
        "choices": [
          "A milestone list because dates prove the deliverable is acceptable",
          "A team preference statement because the team built the product",
          "A communication channel because reporting replaces acceptance",
          "Acceptance criteria that define the conditions the deliverable must meet"
        ],
        "correct": 3,
        "explanation": "Acceptance should be based on agreed criteria, not informal opinion. In this CAPM scenario, the clue is \"needs objective conditions to decide whether a deliverable is acceptable\" and the disciplined response is to use acceptance criteria to verify deliverables. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 4; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Change control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "route baseline changes through change control.",
        "text": "During a mobile product release, a senior stakeholder receives a requested change after the schedule baseline is approved; the release date is fixed. The team has documented conflicting expectations in the requirements traceability matrix during a lessons-learned discussion 77. What should happen next?",
        "choices": [
          "Document the request and assess impact through the approved change process",
          "Start the work because requested changes should always satisfy customers",
          "Reject the request automatically because baselines never change",
          "Ask the team to hide the effort inside existing tasks"
        ],
        "correct": 0,
        "explanation": "Change control protects scope, schedule, cost, and stakeholder expectations. In this CAPM scenario, the clue is \"receives a requested change after the schedule baseline is approved\" and the disciplined response is to route baseline changes through change control. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 5; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "WBS",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Scope decomposition",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use the WBS to decompose predictive project scope.",
        "text": "During a facility upgrade, an operations manager needs a structured way to break approved scope into manageable work; the sponsor wants evidence before approving changes. Which tool or concept is most appropriate. The team has documented conflicting expectations in the requirements traceability matrix during an acceptance review 78. What is the best response?",
        "choices": [
          "A stakeholder register that decomposes every deliverable by influence",
          "A work breakdown structure that decomposes project scope into work packages",
          "A risk matrix that lists the detailed work required for scope",
          "A product backlog ordered only by changing stakeholder preferences"
        ],
        "correct": 1,
        "explanation": "The WBS organizes scope into manageable pieces for planning and control. In this CAPM scenario, the clue is \"needs a structured way to break approved scope into manageable work\" and the disciplined response is to use the wbs to decompose predictive project scope. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 6; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Critical path",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prioritize schedule work by critical path impact.",
        "text": "During a training program, a project coordinator finds one delayed activity has float while another delayed activity is on the critical path; the release date is fixed. Which activity needs more immediate schedule attention. The team has documented conflicting expectations in the requirements traceability matrix during a risk review 79. What is the best response?",
        "choices": [
          "The activity with float because it has more available time",
          "Both activities equally without checking finish-date impact",
          "The critical path activity because it can directly delay the project finish date",
          "Neither activity until the customer asks for a forecast"
        ],
        "correct": 2,
        "explanation": "Critical path activities drive the project finish date. In this CAPM scenario, the clue is \"finds one delayed activity has float while another delayed activity is on the critical path\" and the disciplined response is to prioritize schedule work by critical path impact. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 7; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Cost",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Cost baseline",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use baselines as approved performance references.",
        "text": "During a vendor transition, a team lead compares actual cost against the approved reference for measuring performance; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the requirements traceability matrix during a team working session 80. What is being used?",
        "choices": [
          "The issue log, because all cost differences are issues",
          "The stakeholder register, because sponsors approve money",
          "The product roadmap, because it shows customer value",
          "The cost baseline, because it is the approved reference for cost performance"
        ],
        "correct": 3,
        "explanation": "Baselines support comparison between plan and actual performance. In this CAPM scenario, the clue is \"compares actual cost against the approved reference for measuring performance\" and the disciplined response is to use baselines as approved performance references. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 8; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Acceptance criteria",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use acceptance criteria to verify deliverables.",
        "text": "During a software rollout, a sponsor needs objective conditions to decide whether a deliverable is acceptable; the release date is fixed. Which item best supports the decision. The team has documented conflicting expectations in the schedule baseline during a sponsor checkpoint 81. What is the best response?",
        "choices": [
          "Acceptance criteria that define the conditions the deliverable must meet",
          "A milestone list because dates prove the deliverable is acceptable",
          "A team preference statement because the team built the product",
          "A communication channel because reporting replaces acceptance"
        ],
        "correct": 0,
        "explanation": "Acceptance should be based on agreed criteria, not informal opinion. In this CAPM scenario, the clue is \"needs objective conditions to decide whether a deliverable is acceptable\" and the disciplined response is to use acceptance criteria to verify deliverables. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 9; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Change control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "route baseline changes through change control.",
        "text": "During a customer portal, a product owner receives a requested change after the schedule baseline is approved; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the schedule baseline during a backlog refinement session 82. What should happen next?",
        "choices": [
          "Start the work because requested changes should always satisfy customers",
          "Document the request and assess impact through the approved change process",
          "Reject the request automatically because baselines never change",
          "Ask the team to hide the effort inside existing tasks"
        ],
        "correct": 1,
        "explanation": "Change control protects scope, schedule, cost, and stakeholder expectations. In this CAPM scenario, the clue is \"receives a requested change after the schedule baseline is approved\" and the disciplined response is to route baseline changes through change control. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 10; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "WBS",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Scope decomposition",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use the WBS to decompose predictive project scope.",
        "text": "During a process improvement effort, a functional manager needs a structured way to break approved scope into manageable work; the release date is fixed. Which tool or concept is most appropriate. The team has documented conflicting expectations in the schedule baseline during a baseline review 83. What is the best response?",
        "choices": [
          "A stakeholder register that decomposes every deliverable by influence",
          "A risk matrix that lists the detailed work required for scope",
          "A work breakdown structure that decomposes project scope into work packages",
          "A product backlog ordered only by changing stakeholder preferences"
        ],
        "correct": 2,
        "explanation": "The WBS organizes scope into manageable pieces for planning and control. In this CAPM scenario, the clue is \"needs a structured way to break approved scope into manageable work\" and the disciplined response is to use the wbs to decompose predictive project scope. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 11; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Critical path",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prioritize schedule work by critical path impact.",
        "text": "During a reporting automation project, a vendor lead finds one delayed activity has float while another delayed activity is on the critical path; the sponsor wants evidence before approving changes. Which activity needs more immediate schedule attention. The team has documented conflicting expectations in the schedule baseline during a release readiness meeting 84. What is the best response?",
        "choices": [
          "The activity with float because it has more available time",
          "Both activities equally without checking finish-date impact",
          "Neither activity until the customer asks for a forecast",
          "The critical path activity because it can directly delay the project finish date"
        ],
        "correct": 3,
        "explanation": "Critical path activities drive the project finish date. In this CAPM scenario, the clue is \"finds one delayed activity has float while another delayed activity is on the critical path\" and the disciplined response is to prioritize schedule work by critical path impact. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 12; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Cost",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Cost baseline",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use baselines as approved performance references.",
        "text": "During a data migration, a compliance analyst compares actual cost against the approved reference for measuring performance; the release date is fixed. The team has documented conflicting expectations in the schedule baseline during a vendor coordination call 85. What is being used?",
        "choices": [
          "The cost baseline, because it is the approved reference for cost performance",
          "The issue log, because all cost differences are issues",
          "The stakeholder register, because sponsors approve money",
          "The product roadmap, because it shows customer value"
        ],
        "correct": 0,
        "explanation": "Baselines support comparison between plan and actual performance. In this CAPM scenario, the clue is \"compares actual cost against the approved reference for measuring performance\" and the disciplined response is to use baselines as approved performance references. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 13; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Acceptance criteria",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use acceptance criteria to verify deliverables.",
        "text": "During a regulatory implementation, a customer representative needs objective conditions to decide whether a deliverable is acceptable; the sponsor wants evidence before approving changes. Which item best supports the decision. The team has documented conflicting expectations in the schedule baseline during a steering committee update 86. What is the best response?",
        "choices": [
          "A milestone list because dates prove the deliverable is acceptable",
          "Acceptance criteria that define the conditions the deliverable must meet",
          "A team preference statement because the team built the product",
          "A communication channel because reporting replaces acceptance"
        ],
        "correct": 1,
        "explanation": "Acceptance should be based on agreed criteria, not informal opinion. In this CAPM scenario, the clue is \"needs objective conditions to decide whether a deliverable is acceptable\" and the disciplined response is to use acceptance criteria to verify deliverables. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 14; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Change control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "route baseline changes through change control.",
        "text": "During a mobile product release, a senior stakeholder receives a requested change after the schedule baseline is approved; the release date is fixed. The team has documented conflicting expectations in the schedule baseline during a lessons-learned discussion 87. What should happen next?",
        "choices": [
          "Start the work because requested changes should always satisfy customers",
          "Reject the request automatically because baselines never change",
          "Document the request and assess impact through the approved change process",
          "Ask the team to hide the effort inside existing tasks"
        ],
        "correct": 2,
        "explanation": "Change control protects scope, schedule, cost, and stakeholder expectations. In this CAPM scenario, the clue is \"receives a requested change after the schedule baseline is approved\" and the disciplined response is to route baseline changes through change control. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 15; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "WBS",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Scope decomposition",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use the WBS to decompose predictive project scope.",
        "text": "During a facility upgrade, an operations manager needs a structured way to break approved scope into manageable work; the sponsor wants evidence before approving changes. Which tool or concept is most appropriate. The team has documented conflicting expectations in the schedule baseline during an acceptance review 88. What is the best response?",
        "choices": [
          "A stakeholder register that decomposes every deliverable by influence",
          "A risk matrix that lists the detailed work required for scope",
          "A product backlog ordered only by changing stakeholder preferences",
          "A work breakdown structure that decomposes project scope into work packages"
        ],
        "correct": 3,
        "explanation": "The WBS organizes scope into manageable pieces for planning and control. In this CAPM scenario, the clue is \"needs a structured way to break approved scope into manageable work\" and the disciplined response is to use the wbs to decompose predictive project scope. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 16; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Critical path",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prioritize schedule work by critical path impact.",
        "text": "During a training program, a project coordinator finds one delayed activity has float while another delayed activity is on the critical path; the release date is fixed. Which activity needs more immediate schedule attention. The team has documented conflicting expectations in the schedule baseline during a risk review 89. What is the best response?",
        "choices": [
          "The critical path activity because it can directly delay the project finish date",
          "The activity with float because it has more available time",
          "Both activities equally without checking finish-date impact",
          "Neither activity until the customer asks for a forecast"
        ],
        "correct": 0,
        "explanation": "Critical path activities drive the project finish date. In this CAPM scenario, the clue is \"finds one delayed activity has float while another delayed activity is on the critical path\" and the disciplined response is to prioritize schedule work by critical path impact. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 17; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Cost",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Cost baseline",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use baselines as approved performance references.",
        "text": "During a vendor transition, a team lead compares actual cost against the approved reference for measuring performance; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the schedule baseline during a team working session 90. What is being used?",
        "choices": [
          "The issue log, because all cost differences are issues",
          "The cost baseline, because it is the approved reference for cost performance",
          "The stakeholder register, because sponsors approve money",
          "The product roadmap, because it shows customer value"
        ],
        "correct": 1,
        "explanation": "Baselines support comparison between plan and actual performance. In this CAPM scenario, the clue is \"compares actual cost against the approved reference for measuring performance\" and the disciplined response is to use baselines as approved performance references. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 18; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Acceptance criteria",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use acceptance criteria to verify deliverables.",
        "text": "During a software rollout, a sponsor needs objective conditions to decide whether a deliverable is acceptable; the release date is fixed. Which item best supports the decision. The team has documented conflicting expectations in the acceptance criteria during a sponsor checkpoint 91. What is the best response?",
        "choices": [
          "A milestone list because dates prove the deliverable is acceptable",
          "A team preference statement because the team built the product",
          "Acceptance criteria that define the conditions the deliverable must meet",
          "A communication channel because reporting replaces acceptance"
        ],
        "correct": 2,
        "explanation": "Acceptance should be based on agreed criteria, not informal opinion. In this CAPM scenario, the clue is \"needs objective conditions to decide whether a deliverable is acceptable\" and the disciplined response is to use acceptance criteria to verify deliverables. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 19; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Change control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "route baseline changes through change control.",
        "text": "During a customer portal, a product owner receives a requested change after the schedule baseline is approved; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the acceptance criteria during a backlog refinement session 92. What should happen next?",
        "choices": [
          "Start the work because requested changes should always satisfy customers",
          "Reject the request automatically because baselines never change",
          "Ask the team to hide the effort inside existing tasks",
          "Document the request and assess impact through the approved change process"
        ],
        "correct": 3,
        "explanation": "Change control protects scope, schedule, cost, and stakeholder expectations. In this CAPM scenario, the clue is \"receives a requested change after the schedule baseline is approved\" and the disciplined response is to route baseline changes through change control. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 20; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "WBS",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Scope decomposition",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use the WBS to decompose predictive project scope.",
        "text": "During a process improvement effort, a functional manager needs a structured way to break approved scope into manageable work; the release date is fixed. Which tool or concept is most appropriate. The team has documented conflicting expectations in the acceptance criteria during a baseline review 93. What is the best response?",
        "choices": [
          "A work breakdown structure that decomposes project scope into work packages",
          "A stakeholder register that decomposes every deliverable by influence",
          "A risk matrix that lists the detailed work required for scope",
          "A product backlog ordered only by changing stakeholder preferences"
        ],
        "correct": 0,
        "explanation": "The WBS organizes scope into manageable pieces for planning and control. In this CAPM scenario, the clue is \"needs a structured way to break approved scope into manageable work\" and the disciplined response is to use the wbs to decompose predictive project scope. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 21; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Critical path",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prioritize schedule work by critical path impact.",
        "text": "During a reporting automation project, a vendor lead finds one delayed activity has float while another delayed activity is on the critical path; the sponsor wants evidence before approving changes. Which activity needs more immediate schedule attention. The team has documented conflicting expectations in the acceptance criteria during a release readiness meeting 94. What is the best response?",
        "choices": [
          "The activity with float because it has more available time",
          "The critical path activity because it can directly delay the project finish date",
          "Both activities equally without checking finish-date impact",
          "Neither activity until the customer asks for a forecast"
        ],
        "correct": 1,
        "explanation": "Critical path activities drive the project finish date. In this CAPM scenario, the clue is \"finds one delayed activity has float while another delayed activity is on the critical path\" and the disciplined response is to prioritize schedule work by critical path impact. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 22; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Cost",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Cost baseline",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use baselines as approved performance references.",
        "text": "During a data migration, a compliance analyst compares actual cost against the approved reference for measuring performance; the release date is fixed. The team has documented conflicting expectations in the acceptance criteria during a vendor coordination call 95. What is being used?",
        "choices": [
          "The issue log, because all cost differences are issues",
          "The stakeholder register, because sponsors approve money",
          "The cost baseline, because it is the approved reference for cost performance",
          "The product roadmap, because it shows customer value"
        ],
        "correct": 2,
        "explanation": "Baselines support comparison between plan and actual performance. In this CAPM scenario, the clue is \"compares actual cost against the approved reference for measuring performance\" and the disciplined response is to use baselines as approved performance references. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 23; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Acceptance criteria",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use acceptance criteria to verify deliverables.",
        "text": "During a regulatory implementation, a customer representative needs objective conditions to decide whether a deliverable is acceptable; the sponsor wants evidence before approving changes. Which item best supports the decision. The team has documented conflicting expectations in the acceptance criteria during a steering committee update 96. What is the best response?",
        "choices": [
          "A milestone list because dates prove the deliverable is acceptable",
          "A team preference statement because the team built the product",
          "A communication channel because reporting replaces acceptance",
          "Acceptance criteria that define the conditions the deliverable must meet"
        ],
        "correct": 3,
        "explanation": "Acceptance should be based on agreed criteria, not informal opinion. In this CAPM scenario, the clue is \"needs objective conditions to decide whether a deliverable is acceptable\" and the disciplined response is to use acceptance criteria to verify deliverables. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 24; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Change control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "route baseline changes through change control.",
        "text": "During a mobile product release, a senior stakeholder receives a requested change after the schedule baseline is approved; the release date is fixed. The team has documented conflicting expectations in the acceptance criteria during a lessons-learned discussion 97. What should happen next?",
        "choices": [
          "Document the request and assess impact through the approved change process",
          "Start the work because requested changes should always satisfy customers",
          "Reject the request automatically because baselines never change",
          "Ask the team to hide the effort inside existing tasks"
        ],
        "correct": 0,
        "explanation": "Change control protects scope, schedule, cost, and stakeholder expectations. In this CAPM scenario, the clue is \"receives a requested change after the schedule baseline is approved\" and the disciplined response is to route baseline changes through change control. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 25; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "WBS",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Scope decomposition",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use the WBS to decompose predictive project scope.",
        "text": "During a facility upgrade, an operations manager needs a structured way to break approved scope into manageable work; the sponsor wants evidence before approving changes. Which tool or concept is most appropriate. The team has documented conflicting expectations in the acceptance criteria during an acceptance review 98. What is the best response?",
        "choices": [
          "A stakeholder register that decomposes every deliverable by influence",
          "A work breakdown structure that decomposes project scope into work packages",
          "A risk matrix that lists the detailed work required for scope",
          "A product backlog ordered only by changing stakeholder preferences"
        ],
        "correct": 1,
        "explanation": "The WBS organizes scope into manageable pieces for planning and control. In this CAPM scenario, the clue is \"needs a structured way to break approved scope into manageable work\" and the disciplined response is to use the wbs to decompose predictive project scope. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 26; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Critical path",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prioritize schedule work by critical path impact.",
        "text": "During a training program, a project coordinator finds one delayed activity has float while another delayed activity is on the critical path; the release date is fixed. Which activity needs more immediate schedule attention. The team has documented conflicting expectations in the acceptance criteria during a risk review 99. What is the best response?",
        "choices": [
          "The activity with float because it has more available time",
          "Both activities equally without checking finish-date impact",
          "The critical path activity because it can directly delay the project finish date",
          "Neither activity until the customer asks for a forecast"
        ],
        "correct": 2,
        "explanation": "Critical path activities drive the project finish date. In this CAPM scenario, the clue is \"finds one delayed activity has float while another delayed activity is on the critical path\" and the disciplined response is to prioritize schedule work by critical path impact. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 27; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Cost",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Cost baseline",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use baselines as approved performance references.",
        "text": "During a vendor transition, a team lead compares actual cost against the approved reference for measuring performance; the sponsor wants evidence before approving changes. The team has documented conflicting expectations in the acceptance criteria during a team working session 100. What is being used?",
        "choices": [
          "The issue log, because all cost differences are issues",
          "The stakeholder register, because sponsors approve money",
          "The product roadmap, because it shows customer value",
          "The cost baseline, because it is the approved reference for cost performance"
        ],
        "correct": 3,
        "explanation": "Baselines support comparison between plan and actual performance. In this CAPM scenario, the clue is \"compares actual cost against the approved reference for measuring performance\" and the disciplined response is to use baselines as approved performance references. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 28; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Acceptance criteria",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use acceptance criteria to verify deliverables.",
        "text": "During a software rollout, a sponsor needs objective conditions to decide whether a deliverable is acceptable; the release date is fixed. Which item best supports the decision. The team has documented unclear ownership in the decision log during a sponsor checkpoint 101. What is the best response?",
        "choices": [
          "Acceptance criteria that define the conditions the deliverable must meet",
          "A milestone list because dates prove the deliverable is acceptable",
          "A team preference statement because the team built the product",
          "A communication channel because reporting replaces acceptance"
        ],
        "correct": 0,
        "explanation": "Acceptance should be based on agreed criteria, not informal opinion. In this CAPM scenario, the clue is \"needs objective conditions to decide whether a deliverable is acceptable\" and the disciplined response is to use acceptance criteria to verify deliverables. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 29; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Change",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Change control",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "route baseline changes through change control.",
        "text": "During a customer portal, a product owner receives a requested change after the schedule baseline is approved; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the decision log during a backlog refinement session 102. What should happen next?",
        "choices": [
          "Start the work because requested changes should always satisfy customers",
          "Document the request and assess impact through the approved change process",
          "Reject the request automatically because baselines never change",
          "Ask the team to hide the effort inside existing tasks"
        ],
        "correct": 1,
        "explanation": "Change control protects scope, schedule, cost, and stakeholder expectations. In this CAPM scenario, the clue is \"receives a requested change after the schedule baseline is approved\" and the disciplined response is to route baseline changes through change control. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 30; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "WBS",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Scope decomposition",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use the WBS to decompose predictive project scope.",
        "text": "During a process improvement effort, a functional manager needs a structured way to break approved scope into manageable work; the release date is fixed. Which tool or concept is most appropriate. The team has documented unclear ownership in the decision log during a baseline review 103. What is the best response?",
        "choices": [
          "A stakeholder register that decomposes every deliverable by influence",
          "A risk matrix that lists the detailed work required for scope",
          "A work breakdown structure that decomposes project scope into work packages",
          "A product backlog ordered only by changing stakeholder preferences"
        ],
        "correct": 2,
        "explanation": "The WBS organizes scope into manageable pieces for planning and control. In this CAPM scenario, the clue is \"needs a structured way to break approved scope into manageable work\" and the disciplined response is to use the wbs to decompose predictive project scope. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 31; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Schedule",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Critical path",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "prioritize schedule work by critical path impact.",
        "text": "During a reporting automation project, a vendor lead finds one delayed activity has float while another delayed activity is on the critical path; the sponsor wants evidence before approving changes. Which activity needs more immediate schedule attention. The team has documented unclear ownership in the decision log during a release readiness meeting 104. What is the best response?",
        "choices": [
          "The activity with float because it has more available time",
          "Both activities equally without checking finish-date impact",
          "Neither activity until the customer asks for a forecast",
          "The critical path activity because it can directly delay the project finish date"
        ],
        "correct": 3,
        "explanation": "Critical path activities drive the project finish date. In this CAPM scenario, the clue is \"finds one delayed activity has float while another delayed activity is on the critical path\" and the disciplined response is to prioritize schedule work by critical path impact. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 32; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Cost",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Cost baseline",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use baselines as approved performance references.",
        "text": "During a data migration, a compliance analyst compares actual cost against the approved reference for measuring performance; the release date is fixed. The team has documented unclear ownership in the decision log during a vendor coordination call 105. What is being used?",
        "choices": [
          "The cost baseline, because it is the approved reference for cost performance",
          "The issue log, because all cost differences are issues",
          "The stakeholder register, because sponsors approve money",
          "The product roadmap, because it shows customer value"
        ],
        "correct": 0,
        "explanation": "Baselines support comparison between plan and actual performance. In this CAPM scenario, the clue is \"compares actual cost against the approved reference for measuring performance\" and the disciplined response is to use baselines as approved performance references. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 33; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Quality",
        "domain": "Predictive, Plan-Based Methodologies",
        "topic": "Acceptance criteria",
        "approach": "Predictive",
        "difficulty": "Medium",
        "decisionRule": "use acceptance criteria to verify deliverables.",
        "text": "During a regulatory implementation, a customer representative needs objective conditions to decide whether a deliverable is acceptable; the sponsor wants evidence before approving changes. Which item best supports the decision. The team has documented unclear ownership in the decision log during a steering committee update 106. What is the best response?",
        "choices": [
          "A milestone list because dates prove the deliverable is acceptable",
          "Acceptance criteria that define the conditions the deliverable must meet",
          "A team preference statement because the team built the product",
          "A communication channel because reporting replaces acceptance"
        ],
        "correct": 1,
        "explanation": "Acceptance should be based on agreed criteria, not informal opinion. In this CAPM scenario, the clue is \"needs objective conditions to decide whether a deliverable is acceptable\" and the disciplined response is to use acceptance criteria to verify deliverables. This item is unique to the Predictive, Plan-Based Methodologies domain pattern 34; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum roles",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Product Owner",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "assign backlog ordering to the Product Owner.",
        "text": "During a mobile product release, a senior stakeholder asks who should order the backlog based on product value; the release date is fixed. Which role is responsible. The team has documented unclear ownership in the decision log during a lessons-learned discussion 107. What is the best response?",
        "choices": [
          "The Scrum Master, because facilitation means choosing product priority",
          "The development team, because technical ease should decide value",
          "The Product Owner, because backlog ordering is part of value management",
          "The sponsor alone, because all backlog items are funding decisions"
        ],
        "correct": 2,
        "explanation": "Agile foundations include clear role accountability. In this CAPM scenario, the clue is \"asks who should order the backlog based on product value\" and the disciplined response is to assign backlog ordering to the product owner. This item is unique to the Agile Frameworks and Methodologies domain pattern 1; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum Master",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Impediment removal",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "make blockers visible and help remove them.",
        "text": "During a facility upgrade, an operations manager says a team blocker is outside the team's control; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the decision log during an acceptance review 108. What should the Scrum Master do?",
        "choices": [
          "Tell the team to ignore the blocker until the next release",
          "Lower the definition of done so the blocker disappears",
          "Privately assign extra work without discussing the impediment",
          "Help make the impediment visible and work to remove it"
        ],
        "correct": 3,
        "explanation": "A Scrum Master supports flow by helping remove impediments. In this CAPM scenario, the clue is \"says a team blocker is outside the team's control\" and the disciplined response is to make blockers visible and help remove them. This item is unique to the Agile Frameworks and Methodologies domain pattern 2; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Events",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Review versus retrospective",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "separate product feedback from team process improvement.",
        "text": "During a training program, a project coordinator needs stakeholder feedback on the increment and team improvement discussion; the release date is fixed. Which events fit these needs. The team has documented unclear ownership in the decision log during a risk review 109. What is the best response?",
        "choices": [
          "Use the review for product feedback and the retrospective for team process improvement",
          "Use the daily standup for formal stakeholder acceptance and process blame",
          "Skip the retrospective because stakeholders already gave feedback",
          "Use backlog refinement to assign responsibility for every defect"
        ],
        "correct": 0,
        "explanation": "Agile events inspect different things and should not be merged into blame sessions. In this CAPM scenario, the clue is \"needs stakeholder feedback on the increment and team improvement discussion\" and the disciplined response is to separate product feedback from team process improvement. This item is unique to the Agile Frameworks and Methodologies domain pattern 3; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Backlog",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Refinement",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "refine upcoming work before sprint commitment.",
        "text": "During a vendor transition, a team lead finds stories repeatedly enter the iteration with unclear details; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the decision log during a team working session 110. What practice should improve?",
        "choices": [
          "Longer daily standups where all requirements are rewritten",
          "Backlog refinement with clear acceptance criteria before items are selected",
          "Automatic acceptance of unfinished stories at the end of each iteration",
          "A rule that stakeholders cannot suggest changes"
        ],
        "correct": 1,
        "explanation": "Refinement reduces unclear work and avoidable carryover. In this CAPM scenario, the clue is \"finds stories repeatedly enter the iteration with unclear details\" and the disciplined response is to refine upcoming work before sprint commitment. This item is unique to the Agile Frameworks and Methodologies domain pattern 4; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Agile mindset",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Value delivery",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "prioritize agile work by value and learning.",
        "text": "During a software rollout, a sponsor has limited release capacity and must choose between several features; the release date is fixed. The team has documented unclear ownership in the issue register during a sponsor checkpoint 111. What should guide selection?",
        "choices": [
          "The feature requested by the highest title should always come first",
          "The largest feature creates the most value automatically",
          "Value, learning, and product goals should guide backlog priority",
          "Developers should choose only the easiest feature"
        ],
        "correct": 2,
        "explanation": "Agile delivery emphasizes value, feedback, and product goals. In this CAPM scenario, the clue is \"has limited release capacity and must choose between several features\" and the disciplined response is to prioritize agile work by value and learning. This item is unique to the Agile Frameworks and Methodologies domain pattern 5; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum roles",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Product Owner",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "assign backlog ordering to the Product Owner.",
        "text": "During a customer portal, a product owner asks who should order the backlog based on product value; the sponsor wants evidence before approving changes. Which role is responsible. The team has documented unclear ownership in the issue register during a backlog refinement session 112. What is the best response?",
        "choices": [
          "The Scrum Master, because facilitation means choosing product priority",
          "The development team, because technical ease should decide value",
          "The sponsor alone, because all backlog items are funding decisions",
          "The Product Owner, because backlog ordering is part of value management"
        ],
        "correct": 3,
        "explanation": "Agile foundations include clear role accountability. In this CAPM scenario, the clue is \"asks who should order the backlog based on product value\" and the disciplined response is to assign backlog ordering to the product owner. This item is unique to the Agile Frameworks and Methodologies domain pattern 6; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum Master",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Impediment removal",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "make blockers visible and help remove them.",
        "text": "During a process improvement effort, a functional manager says a team blocker is outside the team's control; the release date is fixed. The team has documented unclear ownership in the issue register during a baseline review 113. What should the Scrum Master do?",
        "choices": [
          "Help make the impediment visible and work to remove it",
          "Tell the team to ignore the blocker until the next release",
          "Lower the definition of done so the blocker disappears",
          "Privately assign extra work without discussing the impediment"
        ],
        "correct": 0,
        "explanation": "A Scrum Master supports flow by helping remove impediments. In this CAPM scenario, the clue is \"says a team blocker is outside the team's control\" and the disciplined response is to make blockers visible and help remove them. This item is unique to the Agile Frameworks and Methodologies domain pattern 7; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Events",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Review versus retrospective",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "separate product feedback from team process improvement.",
        "text": "During a reporting automation project, a vendor lead needs stakeholder feedback on the increment and team improvement discussion; the sponsor wants evidence before approving changes. Which events fit these needs. The team has documented unclear ownership in the issue register during a release readiness meeting 114. What is the best response?",
        "choices": [
          "Use the daily standup for formal stakeholder acceptance and process blame",
          "Use the review for product feedback and the retrospective for team process improvement",
          "Skip the retrospective because stakeholders already gave feedback",
          "Use backlog refinement to assign responsibility for every defect"
        ],
        "correct": 1,
        "explanation": "Agile events inspect different things and should not be merged into blame sessions. In this CAPM scenario, the clue is \"needs stakeholder feedback on the increment and team improvement discussion\" and the disciplined response is to separate product feedback from team process improvement. This item is unique to the Agile Frameworks and Methodologies domain pattern 8; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Backlog",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Refinement",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "refine upcoming work before sprint commitment.",
        "text": "During a data migration, a compliance analyst finds stories repeatedly enter the iteration with unclear details; the release date is fixed. The team has documented unclear ownership in the issue register during a vendor coordination call 115. What practice should improve?",
        "choices": [
          "Longer daily standups where all requirements are rewritten",
          "Automatic acceptance of unfinished stories at the end of each iteration",
          "Backlog refinement with clear acceptance criteria before items are selected",
          "A rule that stakeholders cannot suggest changes"
        ],
        "correct": 2,
        "explanation": "Refinement reduces unclear work and avoidable carryover. In this CAPM scenario, the clue is \"finds stories repeatedly enter the iteration with unclear details\" and the disciplined response is to refine upcoming work before sprint commitment. This item is unique to the Agile Frameworks and Methodologies domain pattern 9; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Agile mindset",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Value delivery",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "prioritize agile work by value and learning.",
        "text": "During a regulatory implementation, a customer representative has limited release capacity and must choose between several features; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the issue register during a steering committee update 116. What should guide selection?",
        "choices": [
          "The feature requested by the highest title should always come first",
          "The largest feature creates the most value automatically",
          "Developers should choose only the easiest feature",
          "Value, learning, and product goals should guide backlog priority"
        ],
        "correct": 3,
        "explanation": "Agile delivery emphasizes value, feedback, and product goals. In this CAPM scenario, the clue is \"has limited release capacity and must choose between several features\" and the disciplined response is to prioritize agile work by value and learning. This item is unique to the Agile Frameworks and Methodologies domain pattern 10; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum roles",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Product Owner",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "assign backlog ordering to the Product Owner.",
        "text": "During a mobile product release, a senior stakeholder asks who should order the backlog based on product value; the release date is fixed. Which role is responsible. The team has documented unclear ownership in the issue register during a lessons-learned discussion 117. What is the best response?",
        "choices": [
          "The Product Owner, because backlog ordering is part of value management",
          "The Scrum Master, because facilitation means choosing product priority",
          "The development team, because technical ease should decide value",
          "The sponsor alone, because all backlog items are funding decisions"
        ],
        "correct": 0,
        "explanation": "Agile foundations include clear role accountability. In this CAPM scenario, the clue is \"asks who should order the backlog based on product value\" and the disciplined response is to assign backlog ordering to the product owner. This item is unique to the Agile Frameworks and Methodologies domain pattern 11; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum Master",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Impediment removal",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "make blockers visible and help remove them.",
        "text": "During a facility upgrade, an operations manager says a team blocker is outside the team's control; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the issue register during an acceptance review 118. What should the Scrum Master do?",
        "choices": [
          "Tell the team to ignore the blocker until the next release",
          "Help make the impediment visible and work to remove it",
          "Lower the definition of done so the blocker disappears",
          "Privately assign extra work without discussing the impediment"
        ],
        "correct": 1,
        "explanation": "A Scrum Master supports flow by helping remove impediments. In this CAPM scenario, the clue is \"says a team blocker is outside the team's control\" and the disciplined response is to make blockers visible and help remove them. This item is unique to the Agile Frameworks and Methodologies domain pattern 12; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Events",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Review versus retrospective",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "separate product feedback from team process improvement.",
        "text": "During a training program, a project coordinator needs stakeholder feedback on the increment and team improvement discussion; the release date is fixed. Which events fit these needs. The team has documented unclear ownership in the issue register during a risk review 119. What is the best response?",
        "choices": [
          "Use the daily standup for formal stakeholder acceptance and process blame",
          "Skip the retrospective because stakeholders already gave feedback",
          "Use the review for product feedback and the retrospective for team process improvement",
          "Use backlog refinement to assign responsibility for every defect"
        ],
        "correct": 2,
        "explanation": "Agile events inspect different things and should not be merged into blame sessions. In this CAPM scenario, the clue is \"needs stakeholder feedback on the increment and team improvement discussion\" and the disciplined response is to separate product feedback from team process improvement. This item is unique to the Agile Frameworks and Methodologies domain pattern 13; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Backlog",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Refinement",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "refine upcoming work before sprint commitment.",
        "text": "During a vendor transition, a team lead finds stories repeatedly enter the iteration with unclear details; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the issue register during a team working session 120. What practice should improve?",
        "choices": [
          "Longer daily standups where all requirements are rewritten",
          "Automatic acceptance of unfinished stories at the end of each iteration",
          "A rule that stakeholders cannot suggest changes",
          "Backlog refinement with clear acceptance criteria before items are selected"
        ],
        "correct": 3,
        "explanation": "Refinement reduces unclear work and avoidable carryover. In this CAPM scenario, the clue is \"finds stories repeatedly enter the iteration with unclear details\" and the disciplined response is to refine upcoming work before sprint commitment. This item is unique to the Agile Frameworks and Methodologies domain pattern 14; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Agile mindset",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Value delivery",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "prioritize agile work by value and learning.",
        "text": "During a software rollout, a sponsor has limited release capacity and must choose between several features; the release date is fixed. The team has documented unclear ownership in the stakeholder register during a sponsor checkpoint 121. What should guide selection?",
        "choices": [
          "Value, learning, and product goals should guide backlog priority",
          "The feature requested by the highest title should always come first",
          "The largest feature creates the most value automatically",
          "Developers should choose only the easiest feature"
        ],
        "correct": 0,
        "explanation": "Agile delivery emphasizes value, feedback, and product goals. In this CAPM scenario, the clue is \"has limited release capacity and must choose between several features\" and the disciplined response is to prioritize agile work by value and learning. This item is unique to the Agile Frameworks and Methodologies domain pattern 15; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum roles",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Product Owner",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "assign backlog ordering to the Product Owner.",
        "text": "During a customer portal, a product owner asks who should order the backlog based on product value; the sponsor wants evidence before approving changes. Which role is responsible. The team has documented unclear ownership in the stakeholder register during a backlog refinement session 122. What is the best response?",
        "choices": [
          "The Scrum Master, because facilitation means choosing product priority",
          "The Product Owner, because backlog ordering is part of value management",
          "The development team, because technical ease should decide value",
          "The sponsor alone, because all backlog items are funding decisions"
        ],
        "correct": 1,
        "explanation": "Agile foundations include clear role accountability. In this CAPM scenario, the clue is \"asks who should order the backlog based on product value\" and the disciplined response is to assign backlog ordering to the product owner. This item is unique to the Agile Frameworks and Methodologies domain pattern 16; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum Master",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Impediment removal",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "make blockers visible and help remove them.",
        "text": "During a process improvement effort, a functional manager says a team blocker is outside the team's control; the release date is fixed. The team has documented unclear ownership in the stakeholder register during a baseline review 123. What should the Scrum Master do?",
        "choices": [
          "Tell the team to ignore the blocker until the next release",
          "Lower the definition of done so the blocker disappears",
          "Help make the impediment visible and work to remove it",
          "Privately assign extra work without discussing the impediment"
        ],
        "correct": 2,
        "explanation": "A Scrum Master supports flow by helping remove impediments. In this CAPM scenario, the clue is \"says a team blocker is outside the team's control\" and the disciplined response is to make blockers visible and help remove them. This item is unique to the Agile Frameworks and Methodologies domain pattern 17; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Events",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Review versus retrospective",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "separate product feedback from team process improvement.",
        "text": "During a reporting automation project, a vendor lead needs stakeholder feedback on the increment and team improvement discussion; the sponsor wants evidence before approving changes. Which events fit these needs. The team has documented unclear ownership in the stakeholder register during a release readiness meeting 124. What is the best response?",
        "choices": [
          "Use the daily standup for formal stakeholder acceptance and process blame",
          "Skip the retrospective because stakeholders already gave feedback",
          "Use backlog refinement to assign responsibility for every defect",
          "Use the review for product feedback and the retrospective for team process improvement"
        ],
        "correct": 3,
        "explanation": "Agile events inspect different things and should not be merged into blame sessions. In this CAPM scenario, the clue is \"needs stakeholder feedback on the increment and team improvement discussion\" and the disciplined response is to separate product feedback from team process improvement. This item is unique to the Agile Frameworks and Methodologies domain pattern 18; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Backlog",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Refinement",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "refine upcoming work before sprint commitment.",
        "text": "During a data migration, a compliance analyst finds stories repeatedly enter the iteration with unclear details; the release date is fixed. The team has documented unclear ownership in the stakeholder register during a vendor coordination call 125. What practice should improve?",
        "choices": [
          "Backlog refinement with clear acceptance criteria before items are selected",
          "Longer daily standups where all requirements are rewritten",
          "Automatic acceptance of unfinished stories at the end of each iteration",
          "A rule that stakeholders cannot suggest changes"
        ],
        "correct": 0,
        "explanation": "Refinement reduces unclear work and avoidable carryover. In this CAPM scenario, the clue is \"finds stories repeatedly enter the iteration with unclear details\" and the disciplined response is to refine upcoming work before sprint commitment. This item is unique to the Agile Frameworks and Methodologies domain pattern 19; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Agile mindset",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Value delivery",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "prioritize agile work by value and learning.",
        "text": "During a regulatory implementation, a customer representative has limited release capacity and must choose between several features; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the stakeholder register during a steering committee update 126. What should guide selection?",
        "choices": [
          "The feature requested by the highest title should always come first",
          "Value, learning, and product goals should guide backlog priority",
          "The largest feature creates the most value automatically",
          "Developers should choose only the easiest feature"
        ],
        "correct": 1,
        "explanation": "Agile delivery emphasizes value, feedback, and product goals. In this CAPM scenario, the clue is \"has limited release capacity and must choose between several features\" and the disciplined response is to prioritize agile work by value and learning. This item is unique to the Agile Frameworks and Methodologies domain pattern 20; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum roles",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Product Owner",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "assign backlog ordering to the Product Owner.",
        "text": "During a mobile product release, a senior stakeholder asks who should order the backlog based on product value; the release date is fixed. Which role is responsible. The team has documented unclear ownership in the stakeholder register during a lessons-learned discussion 127. What is the best response?",
        "choices": [
          "The Scrum Master, because facilitation means choosing product priority",
          "The development team, because technical ease should decide value",
          "The Product Owner, because backlog ordering is part of value management",
          "The sponsor alone, because all backlog items are funding decisions"
        ],
        "correct": 2,
        "explanation": "Agile foundations include clear role accountability. In this CAPM scenario, the clue is \"asks who should order the backlog based on product value\" and the disciplined response is to assign backlog ordering to the product owner. This item is unique to the Agile Frameworks and Methodologies domain pattern 21; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum Master",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Impediment removal",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "make blockers visible and help remove them.",
        "text": "During a facility upgrade, an operations manager says a team blocker is outside the team's control; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the stakeholder register during an acceptance review 128. What should the Scrum Master do?",
        "choices": [
          "Tell the team to ignore the blocker until the next release",
          "Lower the definition of done so the blocker disappears",
          "Privately assign extra work without discussing the impediment",
          "Help make the impediment visible and work to remove it"
        ],
        "correct": 3,
        "explanation": "A Scrum Master supports flow by helping remove impediments. In this CAPM scenario, the clue is \"says a team blocker is outside the team's control\" and the disciplined response is to make blockers visible and help remove them. This item is unique to the Agile Frameworks and Methodologies domain pattern 22; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Events",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Review versus retrospective",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "separate product feedback from team process improvement.",
        "text": "During a training program, a project coordinator needs stakeholder feedback on the increment and team improvement discussion; the release date is fixed. Which events fit these needs. The team has documented unclear ownership in the stakeholder register during a risk review 129. What is the best response?",
        "choices": [
          "Use the review for product feedback and the retrospective for team process improvement",
          "Use the daily standup for formal stakeholder acceptance and process blame",
          "Skip the retrospective because stakeholders already gave feedback",
          "Use backlog refinement to assign responsibility for every defect"
        ],
        "correct": 0,
        "explanation": "Agile events inspect different things and should not be merged into blame sessions. In this CAPM scenario, the clue is \"needs stakeholder feedback on the increment and team improvement discussion\" and the disciplined response is to separate product feedback from team process improvement. This item is unique to the Agile Frameworks and Methodologies domain pattern 23; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Backlog",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Refinement",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "refine upcoming work before sprint commitment.",
        "text": "During a vendor transition, a team lead finds stories repeatedly enter the iteration with unclear details; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the stakeholder register during a team working session 130. What practice should improve?",
        "choices": [
          "Longer daily standups where all requirements are rewritten",
          "Backlog refinement with clear acceptance criteria before items are selected",
          "Automatic acceptance of unfinished stories at the end of each iteration",
          "A rule that stakeholders cannot suggest changes"
        ],
        "correct": 1,
        "explanation": "Refinement reduces unclear work and avoidable carryover. In this CAPM scenario, the clue is \"finds stories repeatedly enter the iteration with unclear details\" and the disciplined response is to refine upcoming work before sprint commitment. This item is unique to the Agile Frameworks and Methodologies domain pattern 24; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Agile mindset",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Value delivery",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "prioritize agile work by value and learning.",
        "text": "During a software rollout, a sponsor has limited release capacity and must choose between several features; the release date is fixed. The team has documented unclear ownership in the risk response notes during a sponsor checkpoint 131. What should guide selection?",
        "choices": [
          "The feature requested by the highest title should always come first",
          "The largest feature creates the most value automatically",
          "Value, learning, and product goals should guide backlog priority",
          "Developers should choose only the easiest feature"
        ],
        "correct": 2,
        "explanation": "Agile delivery emphasizes value, feedback, and product goals. In this CAPM scenario, the clue is \"has limited release capacity and must choose between several features\" and the disciplined response is to prioritize agile work by value and learning. This item is unique to the Agile Frameworks and Methodologies domain pattern 25; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum roles",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Product Owner",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "assign backlog ordering to the Product Owner.",
        "text": "During a customer portal, a product owner asks who should order the backlog based on product value; the sponsor wants evidence before approving changes. Which role is responsible. The team has documented unclear ownership in the risk response notes during a backlog refinement session 132. What is the best response?",
        "choices": [
          "The Scrum Master, because facilitation means choosing product priority",
          "The development team, because technical ease should decide value",
          "The sponsor alone, because all backlog items are funding decisions",
          "The Product Owner, because backlog ordering is part of value management"
        ],
        "correct": 3,
        "explanation": "Agile foundations include clear role accountability. In this CAPM scenario, the clue is \"asks who should order the backlog based on product value\" and the disciplined response is to assign backlog ordering to the product owner. This item is unique to the Agile Frameworks and Methodologies domain pattern 26; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum Master",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Impediment removal",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "make blockers visible and help remove them.",
        "text": "During a process improvement effort, a functional manager says a team blocker is outside the team's control; the release date is fixed. The team has documented unclear ownership in the risk response notes during a baseline review 133. What should the Scrum Master do?",
        "choices": [
          "Help make the impediment visible and work to remove it",
          "Tell the team to ignore the blocker until the next release",
          "Lower the definition of done so the blocker disappears",
          "Privately assign extra work without discussing the impediment"
        ],
        "correct": 0,
        "explanation": "A Scrum Master supports flow by helping remove impediments. In this CAPM scenario, the clue is \"says a team blocker is outside the team's control\" and the disciplined response is to make blockers visible and help remove them. This item is unique to the Agile Frameworks and Methodologies domain pattern 27; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Events",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Review versus retrospective",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "separate product feedback from team process improvement.",
        "text": "During a reporting automation project, a vendor lead needs stakeholder feedback on the increment and team improvement discussion; the sponsor wants evidence before approving changes. Which events fit these needs. The team has documented unclear ownership in the risk response notes during a release readiness meeting 134. What is the best response?",
        "choices": [
          "Use the daily standup for formal stakeholder acceptance and process blame",
          "Use the review for product feedback and the retrospective for team process improvement",
          "Skip the retrospective because stakeholders already gave feedback",
          "Use backlog refinement to assign responsibility for every defect"
        ],
        "correct": 1,
        "explanation": "Agile events inspect different things and should not be merged into blame sessions. In this CAPM scenario, the clue is \"needs stakeholder feedback on the increment and team improvement discussion\" and the disciplined response is to separate product feedback from team process improvement. This item is unique to the Agile Frameworks and Methodologies domain pattern 28; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Backlog",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Refinement",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "refine upcoming work before sprint commitment.",
        "text": "During a data migration, a compliance analyst finds stories repeatedly enter the iteration with unclear details; the release date is fixed. The team has documented unclear ownership in the risk response notes during a vendor coordination call 135. What practice should improve?",
        "choices": [
          "Longer daily standups where all requirements are rewritten",
          "Automatic acceptance of unfinished stories at the end of each iteration",
          "Backlog refinement with clear acceptance criteria before items are selected",
          "A rule that stakeholders cannot suggest changes"
        ],
        "correct": 2,
        "explanation": "Refinement reduces unclear work and avoidable carryover. In this CAPM scenario, the clue is \"finds stories repeatedly enter the iteration with unclear details\" and the disciplined response is to refine upcoming work before sprint commitment. This item is unique to the Agile Frameworks and Methodologies domain pattern 29; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Agile mindset",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Value delivery",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "prioritize agile work by value and learning.",
        "text": "During a regulatory implementation, a customer representative has limited release capacity and must choose between several features; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the risk response notes during a steering committee update 136. What should guide selection?",
        "choices": [
          "The feature requested by the highest title should always come first",
          "The largest feature creates the most value automatically",
          "Developers should choose only the easiest feature",
          "Value, learning, and product goals should guide backlog priority"
        ],
        "correct": 3,
        "explanation": "Agile delivery emphasizes value, feedback, and product goals. In this CAPM scenario, the clue is \"has limited release capacity and must choose between several features\" and the disciplined response is to prioritize agile work by value and learning. This item is unique to the Agile Frameworks and Methodologies domain pattern 30; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum roles",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Product Owner",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "assign backlog ordering to the Product Owner.",
        "text": "During a mobile product release, a senior stakeholder asks who should order the backlog based on product value; the release date is fixed. Which role is responsible. The team has documented unclear ownership in the risk response notes during a lessons-learned discussion 137. What is the best response?",
        "choices": [
          "The Product Owner, because backlog ordering is part of value management",
          "The Scrum Master, because facilitation means choosing product priority",
          "The development team, because technical ease should decide value",
          "The sponsor alone, because all backlog items are funding decisions"
        ],
        "correct": 0,
        "explanation": "Agile foundations include clear role accountability. In this CAPM scenario, the clue is \"asks who should order the backlog based on product value\" and the disciplined response is to assign backlog ordering to the product owner. This item is unique to the Agile Frameworks and Methodologies domain pattern 31; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum Master",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Impediment removal",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "make blockers visible and help remove them.",
        "text": "During a facility upgrade, an operations manager says a team blocker is outside the team's control; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the risk response notes during an acceptance review 138. What should the Scrum Master do?",
        "choices": [
          "Tell the team to ignore the blocker until the next release",
          "Help make the impediment visible and work to remove it",
          "Lower the definition of done so the blocker disappears",
          "Privately assign extra work without discussing the impediment"
        ],
        "correct": 1,
        "explanation": "A Scrum Master supports flow by helping remove impediments. In this CAPM scenario, the clue is \"says a team blocker is outside the team's control\" and the disciplined response is to make blockers visible and help remove them. This item is unique to the Agile Frameworks and Methodologies domain pattern 32; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Events",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Review versus retrospective",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "separate product feedback from team process improvement.",
        "text": "During a training program, a project coordinator needs stakeholder feedback on the increment and team improvement discussion; the release date is fixed. Which events fit these needs. The team has documented unclear ownership in the risk response notes during a risk review 139. What is the best response?",
        "choices": [
          "Use the daily standup for formal stakeholder acceptance and process blame",
          "Skip the retrospective because stakeholders already gave feedback",
          "Use the review for product feedback and the retrospective for team process improvement",
          "Use backlog refinement to assign responsibility for every defect"
        ],
        "correct": 2,
        "explanation": "Agile events inspect different things and should not be merged into blame sessions. In this CAPM scenario, the clue is \"needs stakeholder feedback on the increment and team improvement discussion\" and the disciplined response is to separate product feedback from team process improvement. This item is unique to the Agile Frameworks and Methodologies domain pattern 33; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Backlog",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Refinement",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "refine upcoming work before sprint commitment.",
        "text": "During a vendor transition, a team lead finds stories repeatedly enter the iteration with unclear details; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the risk response notes during a team working session 140. What practice should improve?",
        "choices": [
          "Longer daily standups where all requirements are rewritten",
          "Automatic acceptance of unfinished stories at the end of each iteration",
          "A rule that stakeholders cannot suggest changes",
          "Backlog refinement with clear acceptance criteria before items are selected"
        ],
        "correct": 3,
        "explanation": "Refinement reduces unclear work and avoidable carryover. In this CAPM scenario, the clue is \"finds stories repeatedly enter the iteration with unclear details\" and the disciplined response is to refine upcoming work before sprint commitment. This item is unique to the Agile Frameworks and Methodologies domain pattern 34; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Agile mindset",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Value delivery",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "prioritize agile work by value and learning.",
        "text": "During a software rollout, a sponsor has limited release capacity and must choose between several features; the release date is fixed. The team has documented unclear ownership in the communications plan during a sponsor checkpoint 141. What should guide selection?",
        "choices": [
          "Value, learning, and product goals should guide backlog priority",
          "The feature requested by the highest title should always come first",
          "The largest feature creates the most value automatically",
          "Developers should choose only the easiest feature"
        ],
        "correct": 0,
        "explanation": "Agile delivery emphasizes value, feedback, and product goals. In this CAPM scenario, the clue is \"has limited release capacity and must choose between several features\" and the disciplined response is to prioritize agile work by value and learning. This item is unique to the Agile Frameworks and Methodologies domain pattern 35; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum roles",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Product Owner",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "assign backlog ordering to the Product Owner.",
        "text": "During a customer portal, a product owner asks who should order the backlog based on product value; the sponsor wants evidence before approving changes. Which role is responsible. The team has documented unclear ownership in the communications plan during a backlog refinement session 142. What is the best response?",
        "choices": [
          "The Scrum Master, because facilitation means choosing product priority",
          "The Product Owner, because backlog ordering is part of value management",
          "The development team, because technical ease should decide value",
          "The sponsor alone, because all backlog items are funding decisions"
        ],
        "correct": 1,
        "explanation": "Agile foundations include clear role accountability. In this CAPM scenario, the clue is \"asks who should order the backlog based on product value\" and the disciplined response is to assign backlog ordering to the product owner. This item is unique to the Agile Frameworks and Methodologies domain pattern 36; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Scrum Master",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Impediment removal",
        "approach": "Agile",
        "difficulty": "Easy",
        "decisionRule": "make blockers visible and help remove them.",
        "text": "During a process improvement effort, a functional manager says a team blocker is outside the team's control; the release date is fixed. The team has documented unclear ownership in the communications plan during a baseline review 143. What should the Scrum Master do?",
        "choices": [
          "Tell the team to ignore the blocker until the next release",
          "Lower the definition of done so the blocker disappears",
          "Help make the impediment visible and work to remove it",
          "Privately assign extra work without discussing the impediment"
        ],
        "correct": 2,
        "explanation": "A Scrum Master supports flow by helping remove impediments. In this CAPM scenario, the clue is \"says a team blocker is outside the team's control\" and the disciplined response is to make blockers visible and help remove them. This item is unique to the Agile Frameworks and Methodologies domain pattern 37; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Events",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Review versus retrospective",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "separate product feedback from team process improvement.",
        "text": "During a reporting automation project, a vendor lead needs stakeholder feedback on the increment and team improvement discussion; the sponsor wants evidence before approving changes. Which events fit these needs. The team has documented unclear ownership in the communications plan during a release readiness meeting 144. What is the best response?",
        "choices": [
          "Use the daily standup for formal stakeholder acceptance and process blame",
          "Skip the retrospective because stakeholders already gave feedback",
          "Use backlog refinement to assign responsibility for every defect",
          "Use the review for product feedback and the retrospective for team process improvement"
        ],
        "correct": 3,
        "explanation": "Agile events inspect different things and should not be merged into blame sessions. In this CAPM scenario, the clue is \"needs stakeholder feedback on the increment and team improvement discussion\" and the disciplined response is to separate product feedback from team process improvement. This item is unique to the Agile Frameworks and Methodologies domain pattern 38; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Backlog",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Refinement",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "refine upcoming work before sprint commitment.",
        "text": "During a data migration, a compliance analyst finds stories repeatedly enter the iteration with unclear details; the release date is fixed. The team has documented unclear ownership in the communications plan during a vendor coordination call 145. What practice should improve?",
        "choices": [
          "Backlog refinement with clear acceptance criteria before items are selected",
          "Longer daily standups where all requirements are rewritten",
          "Automatic acceptance of unfinished stories at the end of each iteration",
          "A rule that stakeholders cannot suggest changes"
        ],
        "correct": 0,
        "explanation": "Refinement reduces unclear work and avoidable carryover. In this CAPM scenario, the clue is \"finds stories repeatedly enter the iteration with unclear details\" and the disciplined response is to refine upcoming work before sprint commitment. This item is unique to the Agile Frameworks and Methodologies domain pattern 39; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Agile mindset",
        "domain": "Agile Frameworks and Methodologies",
        "topic": "Value delivery",
        "approach": "Agile",
        "difficulty": "Medium",
        "decisionRule": "prioritize agile work by value and learning.",
        "text": "During a regulatory implementation, a customer representative has limited release capacity and must choose between several features; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the communications plan during a steering committee update 146. What should guide selection?",
        "choices": [
          "The feature requested by the highest title should always come first",
          "Value, learning, and product goals should guide backlog priority",
          "The largest feature creates the most value automatically",
          "Developers should choose only the easiest feature"
        ],
        "correct": 1,
        "explanation": "Agile delivery emphasizes value, feedback, and product goals. In this CAPM scenario, the clue is \"has limited release capacity and must choose between several features\" and the disciplined response is to prioritize agile work by value and learning. This item is unique to the Agile Frameworks and Methodologies domain pattern 40; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Needs assessment",
        "domain": "Business Analysis Frameworks",
        "topic": "Problem understanding",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "understand the need before recommending a solution.",
        "text": "During a mobile product release, a senior stakeholder hears users request a new report because the current workflow is slow; the release date is fixed. The team has documented unclear ownership in the communications plan during a lessons-learned discussion 147. What should happen before designing the report?",
        "choices": [
          "Build the requested report immediately because users named a solution",
          "Reject the request because users should not suggest features",
          "Clarify the business need, workflow problem, and expected outcome",
          "Ask developers to estimate the report before understanding the need"
        ],
        "correct": 2,
        "explanation": "Business analysis starts with the problem and expected value, not a premature solution. In this CAPM scenario, the clue is \"hears users request a new report because the current workflow is slow\" and the disciplined response is to understand the need before recommending a solution. This item is unique to the Business Analysis Frameworks domain pattern 1; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Elicitation",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements elicitation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "elicit requirements from relevant stakeholders.",
        "text": "During a facility upgrade, an operations manager needs information from several user groups with different workflows; the sponsor wants evidence before approving changes. Which activity is most useful. The team has documented unclear ownership in the communications plan during an acceptance review 148. What is the best response?",
        "choices": [
          "Use only the sponsor's opinion because users disagree",
          "Write requirements privately without stakeholder input",
          "Wait for testing to discover what users need",
          "Use elicitation techniques to gather and compare stakeholder requirements"
        ],
        "correct": 3,
        "explanation": "Requirements should be discovered through structured engagement with stakeholders. In this CAPM scenario, the clue is \"needs information from several user groups with different workflows\" and the disciplined response is to elicit requirements from relevant stakeholders. This item is unique to the Business Analysis Frameworks domain pattern 2; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Traceability",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements traceability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "trace requirements through delivery and acceptance.",
        "text": "During a training program, a project coordinator must show how a delivered feature connects to an approved requirement; the release date is fixed. Which concept helps most. The team has documented unclear ownership in the communications plan during a risk review 149. What is the best response?",
        "choices": [
          "Requirements traceability from need to requirement, design, test, and acceptance",
          "A team morale chart because it shows who liked the feature",
          "A milestone list because dates explain requirement origin",
          "A risk heat map because every feature is a risk"
        ],
        "correct": 0,
        "explanation": "Traceability connects business needs, requirements, work, testing, and acceptance. In this CAPM scenario, the clue is \"must show how a delivered feature connects to an approved requirement\" and the disciplined response is to trace requirements through delivery and acceptance. This item is unique to the Business Analysis Frameworks domain pattern 3; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Business Analysis Frameworks",
        "topic": "Solution evaluation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "evaluate whether the solution meets the business need.",
        "text": "During a vendor transition, a team lead learns the solution was delivered but users say it does not solve the original problem; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the communications plan during a team working session 150. What should be evaluated?",
        "choices": [
          "Close the project because delivery means the solution worked",
          "Evaluate solution performance against the original need and acceptance measures",
          "Ask users to stop giving feedback after acceptance",
          "Measure only whether the project team followed its internal schedule"
        ],
        "correct": 1,
        "explanation": "Business analysis includes checking whether the solution actually delivers expected value. In this CAPM scenario, the clue is \"learns the solution was delivered but users say it does not solve the original problem\" and the disciplined response is to evaluate whether the solution meets the business need. This item is unique to the Business Analysis Frameworks domain pattern 4; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholder analysis",
        "domain": "Business Analysis Frameworks",
        "topic": "Stakeholder needs",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "tailor engagement to influence, interest, and need.",
        "text": "During a software rollout, a sponsor finds a low-interest stakeholder has high authority over process approval; the release date is fixed. How should this stakeholder be treated. The team has documented unclear ownership in the change request queue during a sponsor checkpoint 151. What is the best response?",
        "choices": [
          "Remove the stakeholder because low interest means no influence",
          "Send every technical detail so the stakeholder becomes fully involved",
          "Keep the stakeholder appropriately engaged with concise decision-focused information",
          "Avoid contact until final acceptance because authority is inconvenient"
        ],
        "correct": 2,
        "explanation": "Stakeholder analysis supports the right level of involvement and communication. In this CAPM scenario, the clue is \"finds a low-interest stakeholder has high authority over process approval\" and the disciplined response is to tailor engagement to influence, interest, and need. This item is unique to the Business Analysis Frameworks domain pattern 5; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements quality",
        "domain": "Business Analysis Frameworks",
        "topic": "Acceptance testability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "make requirements clear and testable.",
        "text": "During a customer portal, a product owner sees a requirement written as the system should be easy to use; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the change request queue during a backlog refinement session 152. What is the main problem?",
        "choices": [
          "The requirement is complete because easy to use is always measurable",
          "The requirement belongs only in the risk register",
          "The requirement should be removed because users mentioned usability",
          "The requirement is not testable enough without clearer acceptance criteria"
        ],
        "correct": 3,
        "explanation": "Vague requirements create acceptance disputes and rework. In this CAPM scenario, the clue is \"sees a requirement written as the system should be easy to use\" and the disciplined response is to make requirements clear and testable. This item is unique to the Business Analysis Frameworks domain pattern 6; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Needs assessment",
        "domain": "Business Analysis Frameworks",
        "topic": "Problem understanding",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "understand the need before recommending a solution.",
        "text": "During a process improvement effort, a functional manager hears users request a new report because the current workflow is slow; the release date is fixed. The team has documented unclear ownership in the change request queue during a baseline review 153. What should happen before designing the report?",
        "choices": [
          "Clarify the business need, workflow problem, and expected outcome",
          "Build the requested report immediately because users named a solution",
          "Reject the request because users should not suggest features",
          "Ask developers to estimate the report before understanding the need"
        ],
        "correct": 0,
        "explanation": "Business analysis starts with the problem and expected value, not a premature solution. In this CAPM scenario, the clue is \"hears users request a new report because the current workflow is slow\" and the disciplined response is to understand the need before recommending a solution. This item is unique to the Business Analysis Frameworks domain pattern 7; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Elicitation",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements elicitation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "elicit requirements from relevant stakeholders.",
        "text": "During a reporting automation project, a vendor lead needs information from several user groups with different workflows; the sponsor wants evidence before approving changes. Which activity is most useful. The team has documented unclear ownership in the change request queue during a release readiness meeting 154. What is the best response?",
        "choices": [
          "Use only the sponsor's opinion because users disagree",
          "Use elicitation techniques to gather and compare stakeholder requirements",
          "Write requirements privately without stakeholder input",
          "Wait for testing to discover what users need"
        ],
        "correct": 1,
        "explanation": "Requirements should be discovered through structured engagement with stakeholders. In this CAPM scenario, the clue is \"needs information from several user groups with different workflows\" and the disciplined response is to elicit requirements from relevant stakeholders. This item is unique to the Business Analysis Frameworks domain pattern 8; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Traceability",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements traceability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "trace requirements through delivery and acceptance.",
        "text": "During a data migration, a compliance analyst must show how a delivered feature connects to an approved requirement; the release date is fixed. Which concept helps most. The team has documented unclear ownership in the change request queue during a vendor coordination call 155. What is the best response?",
        "choices": [
          "A team morale chart because it shows who liked the feature",
          "A milestone list because dates explain requirement origin",
          "Requirements traceability from need to requirement, design, test, and acceptance",
          "A risk heat map because every feature is a risk"
        ],
        "correct": 2,
        "explanation": "Traceability connects business needs, requirements, work, testing, and acceptance. In this CAPM scenario, the clue is \"must show how a delivered feature connects to an approved requirement\" and the disciplined response is to trace requirements through delivery and acceptance. This item is unique to the Business Analysis Frameworks domain pattern 9; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Business Analysis Frameworks",
        "topic": "Solution evaluation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "evaluate whether the solution meets the business need.",
        "text": "During a regulatory implementation, a customer representative learns the solution was delivered but users say it does not solve the original problem; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the change request queue during a steering committee update 156. What should be evaluated?",
        "choices": [
          "Close the project because delivery means the solution worked",
          "Ask users to stop giving feedback after acceptance",
          "Measure only whether the project team followed its internal schedule",
          "Evaluate solution performance against the original need and acceptance measures"
        ],
        "correct": 3,
        "explanation": "Business analysis includes checking whether the solution actually delivers expected value. In this CAPM scenario, the clue is \"learns the solution was delivered but users say it does not solve the original problem\" and the disciplined response is to evaluate whether the solution meets the business need. This item is unique to the Business Analysis Frameworks domain pattern 10; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholder analysis",
        "domain": "Business Analysis Frameworks",
        "topic": "Stakeholder needs",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "tailor engagement to influence, interest, and need.",
        "text": "During a mobile product release, a senior stakeholder finds a low-interest stakeholder has high authority over process approval; the release date is fixed. How should this stakeholder be treated. The team has documented unclear ownership in the change request queue during a lessons-learned discussion 157. What is the best response?",
        "choices": [
          "Keep the stakeholder appropriately engaged with concise decision-focused information",
          "Remove the stakeholder because low interest means no influence",
          "Send every technical detail so the stakeholder becomes fully involved",
          "Avoid contact until final acceptance because authority is inconvenient"
        ],
        "correct": 0,
        "explanation": "Stakeholder analysis supports the right level of involvement and communication. In this CAPM scenario, the clue is \"finds a low-interest stakeholder has high authority over process approval\" and the disciplined response is to tailor engagement to influence, interest, and need. This item is unique to the Business Analysis Frameworks domain pattern 11; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements quality",
        "domain": "Business Analysis Frameworks",
        "topic": "Acceptance testability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "make requirements clear and testable.",
        "text": "During a facility upgrade, an operations manager sees a requirement written as the system should be easy to use; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the change request queue during an acceptance review 158. What is the main problem?",
        "choices": [
          "The requirement is complete because easy to use is always measurable",
          "The requirement is not testable enough without clearer acceptance criteria",
          "The requirement belongs only in the risk register",
          "The requirement should be removed because users mentioned usability"
        ],
        "correct": 1,
        "explanation": "Vague requirements create acceptance disputes and rework. In this CAPM scenario, the clue is \"sees a requirement written as the system should be easy to use\" and the disciplined response is to make requirements clear and testable. This item is unique to the Business Analysis Frameworks domain pattern 12; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Needs assessment",
        "domain": "Business Analysis Frameworks",
        "topic": "Problem understanding",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "understand the need before recommending a solution.",
        "text": "During a training program, a project coordinator hears users request a new report because the current workflow is slow; the release date is fixed. The team has documented unclear ownership in the change request queue during a risk review 159. What should happen before designing the report?",
        "choices": [
          "Build the requested report immediately because users named a solution",
          "Reject the request because users should not suggest features",
          "Clarify the business need, workflow problem, and expected outcome",
          "Ask developers to estimate the report before understanding the need"
        ],
        "correct": 2,
        "explanation": "Business analysis starts with the problem and expected value, not a premature solution. In this CAPM scenario, the clue is \"hears users request a new report because the current workflow is slow\" and the disciplined response is to understand the need before recommending a solution. This item is unique to the Business Analysis Frameworks domain pattern 13; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Elicitation",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements elicitation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "elicit requirements from relevant stakeholders.",
        "text": "During a vendor transition, a team lead needs information from several user groups with different workflows; the sponsor wants evidence before approving changes. Which activity is most useful. The team has documented unclear ownership in the change request queue during a team working session 160. What is the best response?",
        "choices": [
          "Use only the sponsor's opinion because users disagree",
          "Write requirements privately without stakeholder input",
          "Wait for testing to discover what users need",
          "Use elicitation techniques to gather and compare stakeholder requirements"
        ],
        "correct": 3,
        "explanation": "Requirements should be discovered through structured engagement with stakeholders. In this CAPM scenario, the clue is \"needs information from several user groups with different workflows\" and the disciplined response is to elicit requirements from relevant stakeholders. This item is unique to the Business Analysis Frameworks domain pattern 14; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Traceability",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements traceability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "trace requirements through delivery and acceptance.",
        "text": "During a software rollout, a sponsor must show how a delivered feature connects to an approved requirement; the release date is fixed. Which concept helps most. The team has documented unclear ownership in the product backlog during a sponsor checkpoint 161. What is the best response?",
        "choices": [
          "Requirements traceability from need to requirement, design, test, and acceptance",
          "A team morale chart because it shows who liked the feature",
          "A milestone list because dates explain requirement origin",
          "A risk heat map because every feature is a risk"
        ],
        "correct": 0,
        "explanation": "Traceability connects business needs, requirements, work, testing, and acceptance. In this CAPM scenario, the clue is \"must show how a delivered feature connects to an approved requirement\" and the disciplined response is to trace requirements through delivery and acceptance. This item is unique to the Business Analysis Frameworks domain pattern 15; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Business Analysis Frameworks",
        "topic": "Solution evaluation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "evaluate whether the solution meets the business need.",
        "text": "During a customer portal, a product owner learns the solution was delivered but users say it does not solve the original problem; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the product backlog during a backlog refinement session 162. What should be evaluated?",
        "choices": [
          "Close the project because delivery means the solution worked",
          "Evaluate solution performance against the original need and acceptance measures",
          "Ask users to stop giving feedback after acceptance",
          "Measure only whether the project team followed its internal schedule"
        ],
        "correct": 1,
        "explanation": "Business analysis includes checking whether the solution actually delivers expected value. In this CAPM scenario, the clue is \"learns the solution was delivered but users say it does not solve the original problem\" and the disciplined response is to evaluate whether the solution meets the business need. This item is unique to the Business Analysis Frameworks domain pattern 16; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholder analysis",
        "domain": "Business Analysis Frameworks",
        "topic": "Stakeholder needs",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "tailor engagement to influence, interest, and need.",
        "text": "During a process improvement effort, a functional manager finds a low-interest stakeholder has high authority over process approval; the release date is fixed. How should this stakeholder be treated. The team has documented unclear ownership in the product backlog during a baseline review 163. What is the best response?",
        "choices": [
          "Remove the stakeholder because low interest means no influence",
          "Send every technical detail so the stakeholder becomes fully involved",
          "Keep the stakeholder appropriately engaged with concise decision-focused information",
          "Avoid contact until final acceptance because authority is inconvenient"
        ],
        "correct": 2,
        "explanation": "Stakeholder analysis supports the right level of involvement and communication. In this CAPM scenario, the clue is \"finds a low-interest stakeholder has high authority over process approval\" and the disciplined response is to tailor engagement to influence, interest, and need. This item is unique to the Business Analysis Frameworks domain pattern 17; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements quality",
        "domain": "Business Analysis Frameworks",
        "topic": "Acceptance testability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "make requirements clear and testable.",
        "text": "During a reporting automation project, a vendor lead sees a requirement written as the system should be easy to use; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the product backlog during a release readiness meeting 164. What is the main problem?",
        "choices": [
          "The requirement is complete because easy to use is always measurable",
          "The requirement belongs only in the risk register",
          "The requirement should be removed because users mentioned usability",
          "The requirement is not testable enough without clearer acceptance criteria"
        ],
        "correct": 3,
        "explanation": "Vague requirements create acceptance disputes and rework. In this CAPM scenario, the clue is \"sees a requirement written as the system should be easy to use\" and the disciplined response is to make requirements clear and testable. This item is unique to the Business Analysis Frameworks domain pattern 18; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Needs assessment",
        "domain": "Business Analysis Frameworks",
        "topic": "Problem understanding",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "understand the need before recommending a solution.",
        "text": "During a data migration, a compliance analyst hears users request a new report because the current workflow is slow; the release date is fixed. The team has documented unclear ownership in the product backlog during a vendor coordination call 165. What should happen before designing the report?",
        "choices": [
          "Clarify the business need, workflow problem, and expected outcome",
          "Build the requested report immediately because users named a solution",
          "Reject the request because users should not suggest features",
          "Ask developers to estimate the report before understanding the need"
        ],
        "correct": 0,
        "explanation": "Business analysis starts with the problem and expected value, not a premature solution. In this CAPM scenario, the clue is \"hears users request a new report because the current workflow is slow\" and the disciplined response is to understand the need before recommending a solution. This item is unique to the Business Analysis Frameworks domain pattern 19; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Elicitation",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements elicitation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "elicit requirements from relevant stakeholders.",
        "text": "During a regulatory implementation, a customer representative needs information from several user groups with different workflows; the sponsor wants evidence before approving changes. Which activity is most useful. The team has documented unclear ownership in the product backlog during a steering committee update 166. What is the best response?",
        "choices": [
          "Use only the sponsor's opinion because users disagree",
          "Use elicitation techniques to gather and compare stakeholder requirements",
          "Write requirements privately without stakeholder input",
          "Wait for testing to discover what users need"
        ],
        "correct": 1,
        "explanation": "Requirements should be discovered through structured engagement with stakeholders. In this CAPM scenario, the clue is \"needs information from several user groups with different workflows\" and the disciplined response is to elicit requirements from relevant stakeholders. This item is unique to the Business Analysis Frameworks domain pattern 20; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Traceability",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements traceability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "trace requirements through delivery and acceptance.",
        "text": "During a mobile product release, a senior stakeholder must show how a delivered feature connects to an approved requirement; the release date is fixed. Which concept helps most. The team has documented unclear ownership in the product backlog during a lessons-learned discussion 167. What is the best response?",
        "choices": [
          "A team morale chart because it shows who liked the feature",
          "A milestone list because dates explain requirement origin",
          "Requirements traceability from need to requirement, design, test, and acceptance",
          "A risk heat map because every feature is a risk"
        ],
        "correct": 2,
        "explanation": "Traceability connects business needs, requirements, work, testing, and acceptance. In this CAPM scenario, the clue is \"must show how a delivered feature connects to an approved requirement\" and the disciplined response is to trace requirements through delivery and acceptance. This item is unique to the Business Analysis Frameworks domain pattern 21; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Business Analysis Frameworks",
        "topic": "Solution evaluation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "evaluate whether the solution meets the business need.",
        "text": "During a facility upgrade, an operations manager learns the solution was delivered but users say it does not solve the original problem; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the product backlog during an acceptance review 168. What should be evaluated?",
        "choices": [
          "Close the project because delivery means the solution worked",
          "Ask users to stop giving feedback after acceptance",
          "Measure only whether the project team followed its internal schedule",
          "Evaluate solution performance against the original need and acceptance measures"
        ],
        "correct": 3,
        "explanation": "Business analysis includes checking whether the solution actually delivers expected value. In this CAPM scenario, the clue is \"learns the solution was delivered but users say it does not solve the original problem\" and the disciplined response is to evaluate whether the solution meets the business need. This item is unique to the Business Analysis Frameworks domain pattern 22; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholder analysis",
        "domain": "Business Analysis Frameworks",
        "topic": "Stakeholder needs",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "tailor engagement to influence, interest, and need.",
        "text": "During a training program, a project coordinator finds a low-interest stakeholder has high authority over process approval; the release date is fixed. How should this stakeholder be treated. The team has documented unclear ownership in the product backlog during a risk review 169. What is the best response?",
        "choices": [
          "Keep the stakeholder appropriately engaged with concise decision-focused information",
          "Remove the stakeholder because low interest means no influence",
          "Send every technical detail so the stakeholder becomes fully involved",
          "Avoid contact until final acceptance because authority is inconvenient"
        ],
        "correct": 0,
        "explanation": "Stakeholder analysis supports the right level of involvement and communication. In this CAPM scenario, the clue is \"finds a low-interest stakeholder has high authority over process approval\" and the disciplined response is to tailor engagement to influence, interest, and need. This item is unique to the Business Analysis Frameworks domain pattern 23; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements quality",
        "domain": "Business Analysis Frameworks",
        "topic": "Acceptance testability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "make requirements clear and testable.",
        "text": "During a vendor transition, a team lead sees a requirement written as the system should be easy to use; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the product backlog during a team working session 170. What is the main problem?",
        "choices": [
          "The requirement is complete because easy to use is always measurable",
          "The requirement is not testable enough without clearer acceptance criteria",
          "The requirement belongs only in the risk register",
          "The requirement should be removed because users mentioned usability"
        ],
        "correct": 1,
        "explanation": "Vague requirements create acceptance disputes and rework. In this CAPM scenario, the clue is \"sees a requirement written as the system should be easy to use\" and the disciplined response is to make requirements clear and testable. This item is unique to the Business Analysis Frameworks domain pattern 24; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Needs assessment",
        "domain": "Business Analysis Frameworks",
        "topic": "Problem understanding",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "understand the need before recommending a solution.",
        "text": "During a software rollout, a sponsor hears users request a new report because the current workflow is slow; the release date is fixed. The team has documented unclear ownership in the requirements traceability matrix during a sponsor checkpoint 171. What should happen before designing the report?",
        "choices": [
          "Build the requested report immediately because users named a solution",
          "Reject the request because users should not suggest features",
          "Clarify the business need, workflow problem, and expected outcome",
          "Ask developers to estimate the report before understanding the need"
        ],
        "correct": 2,
        "explanation": "Business analysis starts with the problem and expected value, not a premature solution. In this CAPM scenario, the clue is \"hears users request a new report because the current workflow is slow\" and the disciplined response is to understand the need before recommending a solution. This item is unique to the Business Analysis Frameworks domain pattern 25; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Elicitation",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements elicitation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "elicit requirements from relevant stakeholders.",
        "text": "During a customer portal, a product owner needs information from several user groups with different workflows; the sponsor wants evidence before approving changes. Which activity is most useful. The team has documented unclear ownership in the requirements traceability matrix during a backlog refinement session 172. What is the best response?",
        "choices": [
          "Use only the sponsor's opinion because users disagree",
          "Write requirements privately without stakeholder input",
          "Wait for testing to discover what users need",
          "Use elicitation techniques to gather and compare stakeholder requirements"
        ],
        "correct": 3,
        "explanation": "Requirements should be discovered through structured engagement with stakeholders. In this CAPM scenario, the clue is \"needs information from several user groups with different workflows\" and the disciplined response is to elicit requirements from relevant stakeholders. This item is unique to the Business Analysis Frameworks domain pattern 26; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Traceability",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements traceability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "trace requirements through delivery and acceptance.",
        "text": "During a process improvement effort, a functional manager must show how a delivered feature connects to an approved requirement; the release date is fixed. Which concept helps most. The team has documented unclear ownership in the requirements traceability matrix during a baseline review 173. What is the best response?",
        "choices": [
          "Requirements traceability from need to requirement, design, test, and acceptance",
          "A team morale chart because it shows who liked the feature",
          "A milestone list because dates explain requirement origin",
          "A risk heat map because every feature is a risk"
        ],
        "correct": 0,
        "explanation": "Traceability connects business needs, requirements, work, testing, and acceptance. In this CAPM scenario, the clue is \"must show how a delivered feature connects to an approved requirement\" and the disciplined response is to trace requirements through delivery and acceptance. This item is unique to the Business Analysis Frameworks domain pattern 27; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Business Analysis Frameworks",
        "topic": "Solution evaluation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "evaluate whether the solution meets the business need.",
        "text": "During a reporting automation project, a vendor lead learns the solution was delivered but users say it does not solve the original problem; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the requirements traceability matrix during a release readiness meeting 174. What should be evaluated?",
        "choices": [
          "Close the project because delivery means the solution worked",
          "Evaluate solution performance against the original need and acceptance measures",
          "Ask users to stop giving feedback after acceptance",
          "Measure only whether the project team followed its internal schedule"
        ],
        "correct": 1,
        "explanation": "Business analysis includes checking whether the solution actually delivers expected value. In this CAPM scenario, the clue is \"learns the solution was delivered but users say it does not solve the original problem\" and the disciplined response is to evaluate whether the solution meets the business need. This item is unique to the Business Analysis Frameworks domain pattern 28; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholder analysis",
        "domain": "Business Analysis Frameworks",
        "topic": "Stakeholder needs",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "tailor engagement to influence, interest, and need.",
        "text": "During a data migration, a compliance analyst finds a low-interest stakeholder has high authority over process approval; the release date is fixed. How should this stakeholder be treated. The team has documented unclear ownership in the requirements traceability matrix during a vendor coordination call 175. What is the best response?",
        "choices": [
          "Remove the stakeholder because low interest means no influence",
          "Send every technical detail so the stakeholder becomes fully involved",
          "Keep the stakeholder appropriately engaged with concise decision-focused information",
          "Avoid contact until final acceptance because authority is inconvenient"
        ],
        "correct": 2,
        "explanation": "Stakeholder analysis supports the right level of involvement and communication. In this CAPM scenario, the clue is \"finds a low-interest stakeholder has high authority over process approval\" and the disciplined response is to tailor engagement to influence, interest, and need. This item is unique to the Business Analysis Frameworks domain pattern 29; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements quality",
        "domain": "Business Analysis Frameworks",
        "topic": "Acceptance testability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "make requirements clear and testable.",
        "text": "During a regulatory implementation, a customer representative sees a requirement written as the system should be easy to use; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the requirements traceability matrix during a steering committee update 176. What is the main problem?",
        "choices": [
          "The requirement is complete because easy to use is always measurable",
          "The requirement belongs only in the risk register",
          "The requirement should be removed because users mentioned usability",
          "The requirement is not testable enough without clearer acceptance criteria"
        ],
        "correct": 3,
        "explanation": "Vague requirements create acceptance disputes and rework. In this CAPM scenario, the clue is \"sees a requirement written as the system should be easy to use\" and the disciplined response is to make requirements clear and testable. This item is unique to the Business Analysis Frameworks domain pattern 30; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Needs assessment",
        "domain": "Business Analysis Frameworks",
        "topic": "Problem understanding",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "understand the need before recommending a solution.",
        "text": "During a mobile product release, a senior stakeholder hears users request a new report because the current workflow is slow; the release date is fixed. The team has documented unclear ownership in the requirements traceability matrix during a lessons-learned discussion 177. What should happen before designing the report?",
        "choices": [
          "Clarify the business need, workflow problem, and expected outcome",
          "Build the requested report immediately because users named a solution",
          "Reject the request because users should not suggest features",
          "Ask developers to estimate the report before understanding the need"
        ],
        "correct": 0,
        "explanation": "Business analysis starts with the problem and expected value, not a premature solution. In this CAPM scenario, the clue is \"hears users request a new report because the current workflow is slow\" and the disciplined response is to understand the need before recommending a solution. This item is unique to the Business Analysis Frameworks domain pattern 31; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Elicitation",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements elicitation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "elicit requirements from relevant stakeholders.",
        "text": "During a facility upgrade, an operations manager needs information from several user groups with different workflows; the sponsor wants evidence before approving changes. Which activity is most useful. The team has documented unclear ownership in the requirements traceability matrix during an acceptance review 178. What is the best response?",
        "choices": [
          "Use only the sponsor's opinion because users disagree",
          "Use elicitation techniques to gather and compare stakeholder requirements",
          "Write requirements privately without stakeholder input",
          "Wait for testing to discover what users need"
        ],
        "correct": 1,
        "explanation": "Requirements should be discovered through structured engagement with stakeholders. In this CAPM scenario, the clue is \"needs information from several user groups with different workflows\" and the disciplined response is to elicit requirements from relevant stakeholders. This item is unique to the Business Analysis Frameworks domain pattern 32; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Traceability",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements traceability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "trace requirements through delivery and acceptance.",
        "text": "During a training program, a project coordinator must show how a delivered feature connects to an approved requirement; the release date is fixed. Which concept helps most. The team has documented unclear ownership in the requirements traceability matrix during a risk review 179. What is the best response?",
        "choices": [
          "A team morale chart because it shows who liked the feature",
          "A milestone list because dates explain requirement origin",
          "Requirements traceability from need to requirement, design, test, and acceptance",
          "A risk heat map because every feature is a risk"
        ],
        "correct": 2,
        "explanation": "Traceability connects business needs, requirements, work, testing, and acceptance. In this CAPM scenario, the clue is \"must show how a delivered feature connects to an approved requirement\" and the disciplined response is to trace requirements through delivery and acceptance. This item is unique to the Business Analysis Frameworks domain pattern 33; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Business Analysis Frameworks",
        "topic": "Solution evaluation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "evaluate whether the solution meets the business need.",
        "text": "During a vendor transition, a team lead learns the solution was delivered but users say it does not solve the original problem; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the requirements traceability matrix during a team working session 180. What should be evaluated?",
        "choices": [
          "Close the project because delivery means the solution worked",
          "Ask users to stop giving feedback after acceptance",
          "Measure only whether the project team followed its internal schedule",
          "Evaluate solution performance against the original need and acceptance measures"
        ],
        "correct": 3,
        "explanation": "Business analysis includes checking whether the solution actually delivers expected value. In this CAPM scenario, the clue is \"learns the solution was delivered but users say it does not solve the original problem\" and the disciplined response is to evaluate whether the solution meets the business need. This item is unique to the Business Analysis Frameworks domain pattern 34; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholder analysis",
        "domain": "Business Analysis Frameworks",
        "topic": "Stakeholder needs",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "tailor engagement to influence, interest, and need.",
        "text": "During a software rollout, a sponsor finds a low-interest stakeholder has high authority over process approval; the release date is fixed. How should this stakeholder be treated. The team has documented unclear ownership in the schedule baseline during a sponsor checkpoint 181. What is the best response?",
        "choices": [
          "Keep the stakeholder appropriately engaged with concise decision-focused information",
          "Remove the stakeholder because low interest means no influence",
          "Send every technical detail so the stakeholder becomes fully involved",
          "Avoid contact until final acceptance because authority is inconvenient"
        ],
        "correct": 0,
        "explanation": "Stakeholder analysis supports the right level of involvement and communication. In this CAPM scenario, the clue is \"finds a low-interest stakeholder has high authority over process approval\" and the disciplined response is to tailor engagement to influence, interest, and need. This item is unique to the Business Analysis Frameworks domain pattern 35; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements quality",
        "domain": "Business Analysis Frameworks",
        "topic": "Acceptance testability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "make requirements clear and testable.",
        "text": "During a customer portal, a product owner sees a requirement written as the system should be easy to use; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the schedule baseline during a backlog refinement session 182. What is the main problem?",
        "choices": [
          "The requirement is complete because easy to use is always measurable",
          "The requirement is not testable enough without clearer acceptance criteria",
          "The requirement belongs only in the risk register",
          "The requirement should be removed because users mentioned usability"
        ],
        "correct": 1,
        "explanation": "Vague requirements create acceptance disputes and rework. In this CAPM scenario, the clue is \"sees a requirement written as the system should be easy to use\" and the disciplined response is to make requirements clear and testable. This item is unique to the Business Analysis Frameworks domain pattern 36; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Needs assessment",
        "domain": "Business Analysis Frameworks",
        "topic": "Problem understanding",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "understand the need before recommending a solution.",
        "text": "During a process improvement effort, a functional manager hears users request a new report because the current workflow is slow; the release date is fixed. The team has documented unclear ownership in the schedule baseline during a baseline review 183. What should happen before designing the report?",
        "choices": [
          "Build the requested report immediately because users named a solution",
          "Reject the request because users should not suggest features",
          "Clarify the business need, workflow problem, and expected outcome",
          "Ask developers to estimate the report before understanding the need"
        ],
        "correct": 2,
        "explanation": "Business analysis starts with the problem and expected value, not a premature solution. In this CAPM scenario, the clue is \"hears users request a new report because the current workflow is slow\" and the disciplined response is to understand the need before recommending a solution. This item is unique to the Business Analysis Frameworks domain pattern 37; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Elicitation",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements elicitation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "elicit requirements from relevant stakeholders.",
        "text": "During a reporting automation project, a vendor lead needs information from several user groups with different workflows; the sponsor wants evidence before approving changes. Which activity is most useful. The team has documented unclear ownership in the schedule baseline during a release readiness meeting 184. What is the best response?",
        "choices": [
          "Use only the sponsor's opinion because users disagree",
          "Write requirements privately without stakeholder input",
          "Wait for testing to discover what users need",
          "Use elicitation techniques to gather and compare stakeholder requirements"
        ],
        "correct": 3,
        "explanation": "Requirements should be discovered through structured engagement with stakeholders. In this CAPM scenario, the clue is \"needs information from several user groups with different workflows\" and the disciplined response is to elicit requirements from relevant stakeholders. This item is unique to the Business Analysis Frameworks domain pattern 38; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Traceability",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements traceability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "trace requirements through delivery and acceptance.",
        "text": "During a data migration, a compliance analyst must show how a delivered feature connects to an approved requirement; the release date is fixed. Which concept helps most. The team has documented unclear ownership in the schedule baseline during a vendor coordination call 185. What is the best response?",
        "choices": [
          "Requirements traceability from need to requirement, design, test, and acceptance",
          "A team morale chart because it shows who liked the feature",
          "A milestone list because dates explain requirement origin",
          "A risk heat map because every feature is a risk"
        ],
        "correct": 0,
        "explanation": "Traceability connects business needs, requirements, work, testing, and acceptance. In this CAPM scenario, the clue is \"must show how a delivered feature connects to an approved requirement\" and the disciplined response is to trace requirements through delivery and acceptance. This item is unique to the Business Analysis Frameworks domain pattern 39; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Business Analysis Frameworks",
        "topic": "Solution evaluation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "evaluate whether the solution meets the business need.",
        "text": "During a regulatory implementation, a customer representative learns the solution was delivered but users say it does not solve the original problem; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the schedule baseline during a steering committee update 186. What should be evaluated?",
        "choices": [
          "Close the project because delivery means the solution worked",
          "Evaluate solution performance against the original need and acceptance measures",
          "Ask users to stop giving feedback after acceptance",
          "Measure only whether the project team followed its internal schedule"
        ],
        "correct": 1,
        "explanation": "Business analysis includes checking whether the solution actually delivers expected value. In this CAPM scenario, the clue is \"learns the solution was delivered but users say it does not solve the original problem\" and the disciplined response is to evaluate whether the solution meets the business need. This item is unique to the Business Analysis Frameworks domain pattern 40; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholder analysis",
        "domain": "Business Analysis Frameworks",
        "topic": "Stakeholder needs",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "tailor engagement to influence, interest, and need.",
        "text": "During a mobile product release, a senior stakeholder finds a low-interest stakeholder has high authority over process approval; the release date is fixed. How should this stakeholder be treated. The team has documented unclear ownership in the schedule baseline during a lessons-learned discussion 187. What is the best response?",
        "choices": [
          "Remove the stakeholder because low interest means no influence",
          "Send every technical detail so the stakeholder becomes fully involved",
          "Keep the stakeholder appropriately engaged with concise decision-focused information",
          "Avoid contact until final acceptance because authority is inconvenient"
        ],
        "correct": 2,
        "explanation": "Stakeholder analysis supports the right level of involvement and communication. In this CAPM scenario, the clue is \"finds a low-interest stakeholder has high authority over process approval\" and the disciplined response is to tailor engagement to influence, interest, and need. This item is unique to the Business Analysis Frameworks domain pattern 41; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements quality",
        "domain": "Business Analysis Frameworks",
        "topic": "Acceptance testability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "make requirements clear and testable.",
        "text": "During a facility upgrade, an operations manager sees a requirement written as the system should be easy to use; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the schedule baseline during an acceptance review 188. What is the main problem?",
        "choices": [
          "The requirement is complete because easy to use is always measurable",
          "The requirement belongs only in the risk register",
          "The requirement should be removed because users mentioned usability",
          "The requirement is not testable enough without clearer acceptance criteria"
        ],
        "correct": 3,
        "explanation": "Vague requirements create acceptance disputes and rework. In this CAPM scenario, the clue is \"sees a requirement written as the system should be easy to use\" and the disciplined response is to make requirements clear and testable. This item is unique to the Business Analysis Frameworks domain pattern 42; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Needs assessment",
        "domain": "Business Analysis Frameworks",
        "topic": "Problem understanding",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "understand the need before recommending a solution.",
        "text": "During a training program, a project coordinator hears users request a new report because the current workflow is slow; the release date is fixed. The team has documented unclear ownership in the schedule baseline during a risk review 189. What should happen before designing the report?",
        "choices": [
          "Clarify the business need, workflow problem, and expected outcome",
          "Build the requested report immediately because users named a solution",
          "Reject the request because users should not suggest features",
          "Ask developers to estimate the report before understanding the need"
        ],
        "correct": 0,
        "explanation": "Business analysis starts with the problem and expected value, not a premature solution. In this CAPM scenario, the clue is \"hears users request a new report because the current workflow is slow\" and the disciplined response is to understand the need before recommending a solution. This item is unique to the Business Analysis Frameworks domain pattern 43; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Elicitation",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements elicitation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "elicit requirements from relevant stakeholders.",
        "text": "During a vendor transition, a team lead needs information from several user groups with different workflows; the sponsor wants evidence before approving changes. Which activity is most useful. The team has documented unclear ownership in the schedule baseline during a team working session 190. What is the best response?",
        "choices": [
          "Use only the sponsor's opinion because users disagree",
          "Use elicitation techniques to gather and compare stakeholder requirements",
          "Write requirements privately without stakeholder input",
          "Wait for testing to discover what users need"
        ],
        "correct": 1,
        "explanation": "Requirements should be discovered through structured engagement with stakeholders. In this CAPM scenario, the clue is \"needs information from several user groups with different workflows\" and the disciplined response is to elicit requirements from relevant stakeholders. This item is unique to the Business Analysis Frameworks domain pattern 44; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Traceability",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements traceability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "trace requirements through delivery and acceptance.",
        "text": "During a software rollout, a sponsor must show how a delivered feature connects to an approved requirement; the release date is fixed. Which concept helps most. The team has documented unclear ownership in the acceptance criteria during a sponsor checkpoint 191. What is the best response?",
        "choices": [
          "A team morale chart because it shows who liked the feature",
          "A milestone list because dates explain requirement origin",
          "Requirements traceability from need to requirement, design, test, and acceptance",
          "A risk heat map because every feature is a risk"
        ],
        "correct": 2,
        "explanation": "Traceability connects business needs, requirements, work, testing, and acceptance. In this CAPM scenario, the clue is \"must show how a delivered feature connects to an approved requirement\" and the disciplined response is to trace requirements through delivery and acceptance. This item is unique to the Business Analysis Frameworks domain pattern 45; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Business Analysis Frameworks",
        "topic": "Solution evaluation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "evaluate whether the solution meets the business need.",
        "text": "During a customer portal, a product owner learns the solution was delivered but users say it does not solve the original problem; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the acceptance criteria during a backlog refinement session 192. What should be evaluated?",
        "choices": [
          "Close the project because delivery means the solution worked",
          "Ask users to stop giving feedback after acceptance",
          "Measure only whether the project team followed its internal schedule",
          "Evaluate solution performance against the original need and acceptance measures"
        ],
        "correct": 3,
        "explanation": "Business analysis includes checking whether the solution actually delivers expected value. In this CAPM scenario, the clue is \"learns the solution was delivered but users say it does not solve the original problem\" and the disciplined response is to evaluate whether the solution meets the business need. This item is unique to the Business Analysis Frameworks domain pattern 46; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholder analysis",
        "domain": "Business Analysis Frameworks",
        "topic": "Stakeholder needs",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "tailor engagement to influence, interest, and need.",
        "text": "During a process improvement effort, a functional manager finds a low-interest stakeholder has high authority over process approval; the release date is fixed. How should this stakeholder be treated. The team has documented unclear ownership in the acceptance criteria during a baseline review 193. What is the best response?",
        "choices": [
          "Keep the stakeholder appropriately engaged with concise decision-focused information",
          "Remove the stakeholder because low interest means no influence",
          "Send every technical detail so the stakeholder becomes fully involved",
          "Avoid contact until final acceptance because authority is inconvenient"
        ],
        "correct": 0,
        "explanation": "Stakeholder analysis supports the right level of involvement and communication. In this CAPM scenario, the clue is \"finds a low-interest stakeholder has high authority over process approval\" and the disciplined response is to tailor engagement to influence, interest, and need. This item is unique to the Business Analysis Frameworks domain pattern 47; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements quality",
        "domain": "Business Analysis Frameworks",
        "topic": "Acceptance testability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "make requirements clear and testable.",
        "text": "During a reporting automation project, a vendor lead sees a requirement written as the system should be easy to use; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the acceptance criteria during a release readiness meeting 194. What is the main problem?",
        "choices": [
          "The requirement is complete because easy to use is always measurable",
          "The requirement is not testable enough without clearer acceptance criteria",
          "The requirement belongs only in the risk register",
          "The requirement should be removed because users mentioned usability"
        ],
        "correct": 1,
        "explanation": "Vague requirements create acceptance disputes and rework. In this CAPM scenario, the clue is \"sees a requirement written as the system should be easy to use\" and the disciplined response is to make requirements clear and testable. This item is unique to the Business Analysis Frameworks domain pattern 48; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Needs assessment",
        "domain": "Business Analysis Frameworks",
        "topic": "Problem understanding",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "understand the need before recommending a solution.",
        "text": "During a data migration, a compliance analyst hears users request a new report because the current workflow is slow; the release date is fixed. The team has documented unclear ownership in the acceptance criteria during a vendor coordination call 195. What should happen before designing the report?",
        "choices": [
          "Build the requested report immediately because users named a solution",
          "Reject the request because users should not suggest features",
          "Clarify the business need, workflow problem, and expected outcome",
          "Ask developers to estimate the report before understanding the need"
        ],
        "correct": 2,
        "explanation": "Business analysis starts with the problem and expected value, not a premature solution. In this CAPM scenario, the clue is \"hears users request a new report because the current workflow is slow\" and the disciplined response is to understand the need before recommending a solution. This item is unique to the Business Analysis Frameworks domain pattern 49; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Elicitation",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements elicitation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "elicit requirements from relevant stakeholders.",
        "text": "During a regulatory implementation, a customer representative needs information from several user groups with different workflows; the sponsor wants evidence before approving changes. Which activity is most useful. The team has documented unclear ownership in the acceptance criteria during a steering committee update 196. What is the best response?",
        "choices": [
          "Use only the sponsor's opinion because users disagree",
          "Write requirements privately without stakeholder input",
          "Wait for testing to discover what users need",
          "Use elicitation techniques to gather and compare stakeholder requirements"
        ],
        "correct": 3,
        "explanation": "Requirements should be discovered through structured engagement with stakeholders. In this CAPM scenario, the clue is \"needs information from several user groups with different workflows\" and the disciplined response is to elicit requirements from relevant stakeholders. This item is unique to the Business Analysis Frameworks domain pattern 50; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Traceability",
        "domain": "Business Analysis Frameworks",
        "topic": "Requirements traceability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "trace requirements through delivery and acceptance.",
        "text": "During a mobile product release, a senior stakeholder must show how a delivered feature connects to an approved requirement; the release date is fixed. Which concept helps most. The team has documented unclear ownership in the acceptance criteria during a lessons-learned discussion 197. What is the best response?",
        "choices": [
          "Requirements traceability from need to requirement, design, test, and acceptance",
          "A team morale chart because it shows who liked the feature",
          "A milestone list because dates explain requirement origin",
          "A risk heat map because every feature is a risk"
        ],
        "correct": 0,
        "explanation": "Traceability connects business needs, requirements, work, testing, and acceptance. In this CAPM scenario, the clue is \"must show how a delivered feature connects to an approved requirement\" and the disciplined response is to trace requirements through delivery and acceptance. This item is unique to the Business Analysis Frameworks domain pattern 51; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Acceptance",
        "domain": "Business Analysis Frameworks",
        "topic": "Solution evaluation",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "evaluate whether the solution meets the business need.",
        "text": "During a facility upgrade, an operations manager learns the solution was delivered but users say it does not solve the original problem; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the acceptance criteria during an acceptance review 198. What should be evaluated?",
        "choices": [
          "Close the project because delivery means the solution worked",
          "Evaluate solution performance against the original need and acceptance measures",
          "Ask users to stop giving feedback after acceptance",
          "Measure only whether the project team followed its internal schedule"
        ],
        "correct": 1,
        "explanation": "Business analysis includes checking whether the solution actually delivers expected value. In this CAPM scenario, the clue is \"learns the solution was delivered but users say it does not solve the original problem\" and the disciplined response is to evaluate whether the solution meets the business need. This item is unique to the Business Analysis Frameworks domain pattern 52; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Stakeholder analysis",
        "domain": "Business Analysis Frameworks",
        "topic": "Stakeholder needs",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "tailor engagement to influence, interest, and need.",
        "text": "During a training program, a project coordinator finds a low-interest stakeholder has high authority over process approval; the release date is fixed. How should this stakeholder be treated. The team has documented unclear ownership in the acceptance criteria during a risk review 199. What is the best response?",
        "choices": [
          "Remove the stakeholder because low interest means no influence",
          "Send every technical detail so the stakeholder becomes fully involved",
          "Keep the stakeholder appropriately engaged with concise decision-focused information",
          "Avoid contact until final acceptance because authority is inconvenient"
        ],
        "correct": 2,
        "explanation": "Stakeholder analysis supports the right level of involvement and communication. In this CAPM scenario, the clue is \"finds a low-interest stakeholder has high authority over process approval\" and the disciplined response is to tailor engagement to influence, interest, and need. This item is unique to the Business Analysis Frameworks domain pattern 53; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      },
      {
        "tag": "Requirements quality",
        "domain": "Business Analysis Frameworks",
        "topic": "Acceptance testability",
        "approach": "Business Analysis",
        "difficulty": "Medium",
        "decisionRule": "make requirements clear and testable.",
        "text": "During a vendor transition, a team lead sees a requirement written as the system should be easy to use; the sponsor wants evidence before approving changes. The team has documented unclear ownership in the acceptance criteria during a team working session 200. What is the main problem?",
        "choices": [
          "The requirement is complete because easy to use is always measurable",
          "The requirement belongs only in the risk register",
          "The requirement should be removed because users mentioned usability",
          "The requirement is not testable enough without clearer acceptance criteria"
        ],
        "correct": 3,
        "explanation": "Vague requirements create acceptance disputes and rework. In this CAPM scenario, the clue is \"sees a requirement written as the system should be easy to use\" and the disciplined response is to make requirements clear and testable. This item is unique to the Business Analysis Frameworks domain pattern 54; the weaker options either skip analysis, use the wrong authority, hide information, or treat the project context as irrelevant."
      }
    ]
  }
];
