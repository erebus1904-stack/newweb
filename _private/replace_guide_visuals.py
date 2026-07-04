import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
GUIDES = ROOT / "guides"


def flow(title, items, caption, kicker="Study diagram"):
    cards = "\n".join(
        f'            <div class="diagram-step"><span>{i}</span><strong>{heading}</strong><p>{body}</p></div>'
        for i, (heading, body) in enumerate(items, 1)
    )
    return f'''<figure class="article-visual" aria-label="{title} study diagram">
          <div class="article-diagram diagram-flow">
            <p class="diagram-kicker">{kicker}</p>
            <h2>{title}</h2>
            <div class="diagram-steps">
{cards}
            </div>
          </div>
          <figcaption>{caption}</figcaption>
        </figure>'''


def cards(title, items, caption, kicker="Key map"):
    cards_html = "\n".join(
        f'              <div class="diagram-card"><span>{label}</span><strong>{heading}</strong><p>{body}</p></div>'
        for label, heading, body in items
    )
    return f'''<figure class="article-visual" aria-label="{title} study diagram">
          <div class="article-diagram">
            <p class="diagram-kicker">{kicker}</p>
            <h2>{title}</h2>
            <div class="diagram-grid">
{cards_html}
            </div>
          </div>
          <figcaption>{caption}</figcaption>
        </figure>'''


def bars(title, items, caption, kicker="Exam weights"):
    rows = "\n".join(
        f'''              <div class="weight-row" style="--bar:{value}%">
                <div><strong>{label}</strong><span>{note}</span></div>
                <b>{value}%</b>
              </div>'''
        for label, value, note in items
    )
    return f'''<figure class="article-visual" aria-label="{title} diagram">
          <div class="article-diagram">
            <p class="diagram-kicker">{kicker}</p>
            <h2>{title}</h2>
            <div class="weight-list">
{rows}
            </div>
          </div>
          <figcaption>{caption}</figcaption>
        </figure>'''


def compare(title, left, right, caption, kicker="Comparison"):
    def column(data):
        heading, items = data
        bullets = "\n".join(f"                <li>{item}</li>" for item in items)
        return f'''              <div class="compare-card">
                <strong>{heading}</strong>
                <ul>
{bullets}
                </ul>
              </div>'''
    return f'''<figure class="article-visual" aria-label="{title} comparison diagram">
          <div class="article-diagram">
            <p class="diagram-kicker">{kicker}</p>
            <h2>{title}</h2>
            <div class="compare-grid">
{column(left)}
{column(right)}
            </div>
          </div>
          <figcaption>{caption}</figcaption>
        </figure>'''


VISUALS = {
    "pmp-study-plan.html": flow(
        "30-day review loop",
        [
            ("Map", "Separate People, Process, and Business Environment misses."),
            ("Drill", "Practice scenario sets and write one rule for each miss."),
            ("Review", "Retest weak patterns instead of rereading everything."),
        ],
        "The final month should move from domain mapping to decision practice and mistake-driven review.",
        "PMP study plan",
    ),
    "pmp-situational-questions.html": flow(
        "Situational answer order",
        [
            ("Read context", "Identify approach, role, constraint, and what has already happened."),
            ("Choose next step", "Prefer analyze, communicate, assess impact, or use the plan first."),
            ("Reject shortcuts", "Avoid immediate escalation, replacement, or execution unless justified."),
        ],
        "PMP scenario questions usually reward the next responsible action, not the loudest action.",
        "Decision pattern",
    ),
    "pmp-next-best-action.html": flow(
        "Next-step filter",
        [
            ("First", "Clarify facts and understand the stakeholder or team concern."),
            ("Then", "Check the relevant plan, artifact, or agreement."),
            ("After", "Act, request approval, or escalate only when authority is exceeded."),
        ],
        "The best answer is often the first disciplined step before execution.",
        "PMP judgment",
    ),
    "pmp-agile-hybrid-predictive.html": cards(
        "Delivery approach signals",
        [
            ("Agile", "Backlog and sprint", "Product Owner, iteration review, daily standup, retrospective."),
            ("Hybrid", "Mixed control", "Governance stays formal while delivery uses iteration feedback."),
            ("Predictive", "Baseline control", "Scope, schedule, cost, and formal change control matter most."),
        ],
        "Recognize the delivery approach before choosing the action.",
        "Approach map",
    ),
    "pmp-delivery-approaches.html": cards(
        "Scenario clues",
        [
            ("Clue", "Agile", "Backlog priority, sprint goal, team self-organization."),
            ("Clue", "Hybrid", "Fixed milestone with iterative product delivery."),
            ("Clue", "Predictive", "Approved baseline, change request, acceptance criteria."),
        ],
        "Small wording cues usually tell you which project method the question expects.",
        "Recognition guide",
    ),
    "pmp-agile-roles.html": cards(
        "Agile role boundaries",
        [
            ("PO", "Product Owner", "Orders the product backlog and maximizes value."),
            ("SM", "Scrum Master", "Removes impediments and coaches the process."),
            ("Team", "Developers", "Self-organize to deliver the increment."),
        ],
        "Most agile role questions are about ownership, not job titles.",
        "Role map",
    ),
    "pmp-process-map.html": cards(
        "Four frequent process threads",
        [
            ("Risk", "Uncertain event", "Plan responses and keep the risk register current."),
            ("Change", "Baseline impact", "Assess impact and follow integrated change control."),
            ("Stakeholder", "Engagement gap", "Analyze needs and tailor communication."),
            ("Comms", "Information need", "Use the communications management plan."),
        ],
        "Risk, change, stakeholders, and communication create many PMP scenario patterns.",
        "Process map",
    ),
    "pmp-risk-issues.html": cards(
        "Risk language",
        [
            ("Risk", "May happen", "Use risk responses and update the risk register."),
            ("Issue", "Has happened", "Use issue resolution and the issue log."),
            ("Assumption", "Believed true", "Validate when uncertainty increases."),
            ("Dependency", "Relies on another item", "Track timing and ownership."),
        ],
        "Separate future uncertainty from current problems before choosing an answer.",
        "Term map",
    ),
    "pmp-change-control.html": flow(
        "Change control path",
        [
            ("Capture", "Document the request and clarify what may change."),
            ("Assess", "Analyze scope, schedule, cost, risk, quality, and benefits impact."),
            ("Decide", "Route the change through the approved authority before implementation."),
        ],
        "Most change questions punish acting before impact analysis and approval.",
        "Change flow",
    ),
    "pmp-stakeholder-communication.html": flow(
        "Stakeholder communication loop",
        [
            ("Identify", "Know the stakeholder, interest, influence, and information need."),
            ("Tailor", "Use the communication method that supports the decision."),
            ("Adjust", "Update engagement when feedback shows the message is not working."),
        ],
        "Communication is judged by whether it helps the right stakeholder make the right decision.",
        "Communication map",
    ),
    "pmp-2026-exam-version.html": compare(
        "PMP version split",
        ("Before July 9, 2026", ["Current ECO applies", "People 42%", "Process 50%", "Business Environment 8%"]),
        ("From July 9, 2026", ["New ECO applies", "People 33%", "Process 41%", "Business Environment 26%"]),
        "Use the exam date to decide which PMP domain weights to study.",
        "Version guide",
    ),
    "capm-domain-study-plan.html": bars(
        "CAPM domain weights",
        [
            ("Project Management Fundamentals and Core Concepts", 36, "Start with roles, life cycles, and core terms."),
            ("Predictive, Plan-Based Methodologies", 17, "Review scope, schedule, cost, and quality planning."),
            ("Agile Frameworks and Methodologies", 20, "Know roles, events, backlog flow, and retrospectives."),
            ("Business Analysis Frameworks", 27, "Study requirements, traceability, stakeholders, and acceptance."),
        ],
        "The CAPM outline is uneven; study time should follow the domain weights.",
        "CAPM weights",
    ),
    "capm-exam-timing-strategy.html": flow(
        "180-minute pacing",
        [
            ("First pass", "Move steadily and mark uncertain questions without stopping too long."),
            ("Second pass", "Return to marked questions and use elimination."),
            ("Final check", "Use the remaining time to confirm skipped or flagged items."),
        ],
        "CAPM pacing is a practiced skill: 150 questions, 180 minutes, with room for review.",
        "Timing plan",
    ),
    "capm-core-concepts.html": cards(
        "Concept pairs to separate",
        [
            ("Scope", "Deliverable vs milestone", "One is an output; the other is a point in time."),
            ("Risk", "Risk vs issue", "One may happen; the other has happened."),
            ("Role", "Sponsor vs stakeholder", "The sponsor authorizes; stakeholders affect or are affected."),
        ],
        "CAPM becomes easier when similar terms stop blending together.",
        "Concept map",
    ),
    "capm-predictive-project-management.html": cards(
        "Predictive review lines",
        [
            ("Scope", "WBS and acceptance", "Define work and confirm completion criteria."),
            ("Schedule", "Sequence and critical path", "Understand dependencies and timing impact."),
            ("Cost", "Baseline and control", "Know estimate, budget, and variance logic."),
            ("Quality", "Standards and verification", "Check whether deliverables meet requirements."),
        ],
        "Predictive CAPM questions often connect planning artifacts to control decisions.",
        "Predictive map",
    ),
    "capm-agile-scrum-kanban.html": cards(
        "Agile exam anchors",
        [
            ("Scrum", "Roles and events", "Product Owner, Scrum Master, Daily Scrum, review, retrospective."),
            ("Kanban", "Flow and WIP", "Visualize work, limit work in progress, improve throughput."),
            ("Backlog", "Priority and value", "Order work by value, feedback, and readiness."),
        ],
        "Most CAPM agile questions reduce to role ownership, feedback, or flow.",
        "Agile map",
    ),
    "capm-business-analysis-study.html": cards(
        "Business analysis thread",
        [
            ("Elicit", "Collect needs", "Use interviews, workshops, observation, and stakeholder analysis."),
            ("Trace", "Connect requirements", "Link requirements to value, scope, tests, and acceptance."),
            ("Validate", "Confirm fit", "Use acceptance criteria and feedback before delivery is treated as done."),
        ],
        "Business analysis is not a side topic; it connects needs to accepted value.",
        "BA map",
    ),
    "capm-next-step-scenario-questions.html": flow(
        "CAPM next-step routine",
        [
            ("Analyze", "Read the trigger and decide whether it is risk, issue, change, or role confusion."),
            ("Check", "Use the plan, requirement, artifact, or accountable role."),
            ("Act", "Communicate or update records before escalating."),
        ],
        "Next-step questions reward disciplined sequence over fast action.",
        "Scenario routine",
    ),
    "capm-mistake-review-method.html": cards(
        "Mistake categories",
        [
            ("Concept", "Term not clear", "Rewrite the definition in plain English."),
            ("Keyword", "Trigger missed", "Mark the phrase that changed the answer."),
            ("Method", "Agile vs predictive mix-up", "Label the delivery approach before choosing."),
            ("Language", "English term confusion", "Add the official term to your review list."),
        ],
        "A missed question is useful only when you name the reason it was missed.",
        "Review map",
    ),
    "capm-online-vs-test-center.html": compare(
        "Delivery choice",
        ("Online proctored", ["Best with stable internet", "Requires clean room and system check", "Higher interruption risk"]),
        ("Pearson VUE center", ["Best for stable testing setup", "Requires travel and appointment time", "Less home-environment risk"]),
        "Choose the test format based on reliability, not convenience alone.",
        "Exam delivery",
    ),
    "capm-study-materials-plan.html": cards(
        "Resource mix",
        [
            ("Required", "23 education hours", "Use a course that documents completion clearly."),
            ("Reference", "PMBOK and PMI materials", "Check definitions and domain language."),
            ("Practice", "Question bank", "Turn concepts into exam decisions."),
            ("Review", "Mistake log", "Track why you missed each question."),
        ],
        "A good CAPM resource plan assigns one job to each resource.",
        "Study materials",
    ),
    "capm-to-pmp-study-bridge.html": compare(
        "CAPM to PMP bridge",
        ("CAPM asks", ["What is the term?", "Which role owns it?", "Which artifact records it?"]),
        ("PMP asks", ["What should happen next?", "Who should be engaged?", "How does the context change the action?"]),
        "Learn the concept once, then practice the PMP decision pattern separately.",
        "Bridge map",
    ),
}


def replace_visual(path, replacement):
    html = path.read_text(encoding="utf-8")
    updated, count = re.subn(r'<figure class="article-visual"[^>]*>.*?</figure>', replacement, html, count=1, flags=re.S)
    if count != 1:
        raise RuntimeError(f"Expected one article visual in {path}, replaced {count}")
    path.write_text(updated, encoding="utf-8")


def main():
    for name, replacement in VISUALS.items():
        replace_visual(GUIDES / name, replacement)
    print(f"Replaced {len(VISUALS)} guide visuals.")


if __name__ == "__main__":
    main()
