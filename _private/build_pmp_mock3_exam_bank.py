import json
import os
import re
from pathlib import Path

from argostranslate import translate


ROOT = Path(__file__).resolve().parents[1]
RAW_QUESTIONS = ROOT / "_private" / "pmp_mock3_questions_raw.txt"
RAW_ANSWERS = ROOT / "_private" / "pmp_mock3_answers_raw.txt"
WORKSPACE_CACHE_PATH = ROOT / "_private" / "pmp_mock3_translation_cache.json"
CACHE_PATH = Path(os.environ.get("TEMP", ROOT / "_private")) / "pmp_mock3_translation_cache.json"
OUTPUT_PATH = ROOT / "_private" / "pmp_mock3_exam_en.json"

SOURCE_SET = "pmp-mock-test-3"
MOCK_EXAM_ID = "pmp-mock-test-3"
QUESTION_START = re.compile(r"(?:^|\n)(\d{1,3})[\u3001.\uff0e](.*?)(?=\n\d{1,3}[\u3001.\uff0e]|\Z)", re.S)
OPTION_START = re.compile(r"(?m)(?=^[A-E][.\uff0e\u3001])")
ANSWER_START = re.compile(
    r"(?:^|\n)(\d{1,3})\.[\s\ufffd]*\u3010\u53c2\u8003\u7b54\u6848\u3011\s*([A-E]+)(.*?)(?=\n\d{1,3}\.[\s\ufffd]*\u3010\u53c2\u8003\u7b54\u6848\u3011|\Z)",
    re.S,
)

MANUAL_ENGLISH_OVERRIDES = {
    70: {
        "text": "A team leader is highly engaged in a project and works without relying on a chain of command or formal authority. What leadership approach is the team leader demonstrating?",
        "choices": [
            "Directive leadership",
            "Command-and-control leadership",
            "Servant leadership",
            "Adaptive leadership",
        ],
    },
    173: {
        "text": "A project manager has led the implementation of a recently completed electronic invoicing project. The finance manager reports that the team found three incorrect invoices. Which two documents should the project manager update as soon as possible? (Choose two.)",
        "choices": [
            "Issue log",
            "Risk register",
            "Stakeholder register",
            "Change log",
            "Product backlog",
        ],
    },
}


NOISE_PATTERNS = [
    r"\u7248\u6743\u6240\u6709\uff0c\u7981\u6b62\u590d\u5370\s*PMP[^\n]*",
    r"400-880-5680",
    r"PMP\u00ae\u6559\u5b66\u8d44\u6599",
    r"\u6e05\u6656PMP[^\n]*",
]

TERM_FIXES = [
    ("product to-do list", "product backlog"),
    ("Product To-do List", "product backlog"),
    ("Product Backlog List", "product backlog"),
    ("Project Initiator", "project sponsor"),
    ("project initiator", "project sponsor"),
    ("project sponsor person", "project sponsor"),
    ("stakeholder participation", "stakeholder engagement"),
    ("stakeholder involvement", "stakeholder engagement"),
    ("change control board", "Change Control Board"),
    ("CCB", "Change Control Board"),
    ("risk log", "risk register"),
    ("problem log", "issue log"),
    ("issue register", "issue log"),
    ("lesson learned", "lessons learned"),
    ("experience lesson", "lessons learned"),
    ("Management Reserve", "management reserve"),
    ("Work Breakdown Structure", "work breakdown structure"),
    ("WBS", "WBS"),
    ("PMO", "PMO"),
    ("Scrum", "Scrum"),
    ("Kanban", "Kanban"),
]

CN_TERM_FIXES = [
    ("\u9879\u76ee\u7ecf\u7406", "project manager"),
    ("\u9879\u76ee\u53d1\u8d77\u4eba", "project sponsor"),
    ("\u53d1\u8d77\u4eba", "sponsor"),
    ("\u5e72\u7cfb\u4eba", "stakeholder"),
    ("\u56e2\u961f\u6210\u5458", "team member"),
    ("\u9879\u76ee\u56e2\u961f", "project team"),
    ("\u9879\u76ee\u7ae0\u7a0b", "project charter"),
    ("\u5546\u4e1a\u8bba\u8bc1", "business case"),
    ("\u5546\u4e1a\u4ef7\u503c", "business value"),
    ("\u9879\u76ee\u7ba1\u7406\u8ba1\u5212", "project management plan"),
    ("\u6c9f\u901a\u7ba1\u7406\u8ba1\u5212", "communications management plan"),
    ("\u5e72\u7cfb\u4eba\u53c2\u4e0e\u8ba1\u5212", "stakeholder engagement plan"),
    ("\u8d44\u6e90\u7ba1\u7406\u8ba1\u5212", "resource management plan"),
    ("\u98ce\u9669\u767b\u8bb0\u518c", "risk register"),
    ("\u95ee\u9898\u65e5\u5fd7", "issue log"),
    ("\u53d8\u66f4\u8bf7\u6c42", "change request"),
    ("\u5b9e\u65bd\u6574\u4f53\u53d8\u66f4\u63a7\u5236", "perform integrated change control"),
    ("\u6574\u4f53\u53d8\u66f4\u63a7\u5236", "integrated change control"),
    ("\u53d8\u66f4\u63a7\u5236\u59d4\u5458\u4f1a", "Change Control Board"),
    ("\u5de5\u4f5c\u5206\u89e3\u7ed3\u6784", "work breakdown structure"),
    ("\u53ef\u4ea4\u4ed8\u6210\u679c", "deliverable"),
    ("\u7ecf\u9a8c\u6559\u8bad", "lessons learned"),
    ("\u4ea7\u54c1\u8d1f\u8d23\u4eba", "product owner"),
    ("\u4ea7\u54c1\u5f85\u529e\u4e8b\u9879\u5217\u8868", "product backlog"),
    ("\u5f85\u529e\u4e8b\u9879\u5217\u8868", "backlog"),
    ("\u770b\u677f", "Kanban"),
    ("\u8fed\u4ee3\u5ba1\u67e5", "iteration review"),
    ("\u8fed\u4ee3\u8bc4\u5ba1", "iteration review"),
    ("\u8fed\u4ee3", "iteration"),
    ("\u56de\u987e\u4f1a\u8bae", "retrospective"),
    ("\u56de\u987e", "retrospective"),
    ("\u6bcf\u65e5\u7ad9\u4f1a", "daily standup"),
    ("\u6bcf\u65e5\u4f1a", "daily standup"),
    ("\u4ec6\u4eba\u5f0f\u9886\u5bfc", "servant leadership"),
    ("\u670d\u52a1\u578b\u9886\u5bfc", "servant leadership"),
    ("\u654f\u6377\u6559\u7ec3", "agile coach"),
    ("\u654f\u6377", "agile"),
    ("\u6df7\u5408\u578b", "hybrid"),
    ("\u9884\u6d4b\u578b", "predictive"),
    ("\u91cc\u7a0b\u7891", "milestone"),
    ("\u8303\u56f4", "scope"),
    ("\u8fdb\u5ea6", "schedule"),
    ("\u6210\u672c", "cost"),
    ("\u8d28\u91cf", "quality"),
    ("\u9700\u6c42\u8ddf\u8e2a\u77e9\u9635", "requirements traceability matrix"),
    ("\u9700\u6c42", "requirements"),
    ("\u9879\u76ee\u7ba1\u7406\u529e\u516c\u5ba4", "PMO"),
]

TAG_RULES = [
    ("Risk", ["risk", "threat", "opportunity", "risk register"]),
    ("Change Control", ["change request", "change control", "change management", "ccb"]),
    ("Stakeholders", ["stakeholder", "sponsor", "customer", "board"]),
    ("Team", ["team member", "conflict", "morale", "coach", "servant"]),
    ("Agile", ["scrum", "kanban", "sprint", "iteration", "product backlog", "product owner", "daily"]),
    ("Scope", ["scope", "wbs", "requirement", "deliverable"]),
    ("Schedule", ["schedule", "timeline", "milestone", "delay"]),
    ("Quality", ["quality", "defect", "acceptance", "review"]),
    ("Procurement", ["contract", "vendor", "supplier", "procurement"]),
    ("Communication", ["communication", "report", "meeting", "email"]),
    ("Governance", ["charter", "business case", "benefit", "governance"]),
]


def clean_text(value):
    value = value or ""
    for pattern in NOISE_PATTERNS:
        value = re.sub(pattern, " ", value)
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def strip_option_label(value):
    return re.sub(r"^[A-E][.\uff0e\u3001]\s*", "", clean_text(value)).strip()


def parse_questions():
    raw = RAW_QUESTIONS.read_text(encoding="utf-8")
    parsed = []
    for match in QUESTION_START.finditer(raw):
        number = int(match.group(1))
        if number < 1 or number > 180:
            continue
        body = match.group(2).replace("\r", "\n")
        for pattern in NOISE_PATTERNS:
            body = re.sub(pattern, " ", body)
        body = re.sub(r"(?m)^\s*([A-E][.\uff0e\u3001])", r"\1", body)
        parts = [part.strip() for part in OPTION_START.split(body) if part.strip()]
        stem = clean_text(parts[0]) if parts else ""
        choices = [strip_option_label(part) for part in parts[1:]]
        parsed.append({"number": number, "stem": stem, "choices": choices[:5]})
    return {item["number"]: item for item in parsed}


def parse_answers():
    raw = RAW_ANSWERS.read_text(encoding="utf-8")
    answers = {}
    for match in ANSWER_START.finditer(raw):
        number = int(match.group(1))
        if number < 1 or number > 180:
            continue
        answers[number] = {
            "answer": match.group(2).strip(),
            "explanation": clean_text(match.group(3)),
        }
    return answers


def load_cache():
    if CACHE_PATH.exists():
        return json.loads(CACHE_PATH.read_text(encoding="utf-8"))
    if WORKSPACE_CACHE_PATH.exists():
        return json.loads(WORKSPACE_CACHE_PATH.read_text(encoding="utf-8"))
    return {}


def save_cache(cache):
    CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=True, indent=2) + "\n", encoding="utf-8")


def translate_cached(cache, text):
    text = clean_text(text)
    if not text:
        return ""
    prepared = prepare_for_translation(text)
    cache_key = f"v2::{prepared}"
    if cache_key not in cache:
        cache[cache_key] = translate.translate(prepared, "zh", "en")
        save_cache(cache)
    return polish_english(cache[cache_key])


def prepare_for_translation(value):
    for source, target in CN_TERM_FIXES:
        value = value.replace(source, f" {target} ")
    return clean_text(value)


def polish_english(value):
    value = clean_text(value)
    value = value.replace("Watchboard", "Kanban")
    value = value.replace("dashboard method", "Kanban method")
    value = value.replace("boarding methods", "Kanban methods")
    value = value.replace("product manager", "product owner")
    value = value.replace("project owner", "product owner")
    value = value.replace("product to-do", "product backlog")
    value = value.replace("program backlog", "product backlog")
    value = value.replace("project backlog", "product backlog")
    value = value.replace("to-do list", "backlog")
    value = value.replace("decomposition structure", "work breakdown structure")
    value = value.replace("work breakdown case", "work breakdown structure")
    value = value.replace("calibration", "benchmarking")
    value = value.replace("stakeholdr", "stakeholder")
    value = value.replace("angile", "agile")
    value = value.replace("PMO (PMO)", "PMO")
    value = value.replace("project development plan", "project management plan")
    value = value.replace("What should I do?", "What should the project manager do?")
    value = value.replace("What should project manager do?", "What should the project manager do?")
    value = value.replace("How should project manager help?", "How should the project manager help?")
    value = value.replace("project manager and", "the project manager and")
    value = value.replace("project manager has", "the project manager has")
    value = value.replace("project sponsor", "the project sponsor")
    value = value.replace("Access to personnel skills documents.", "Review the team member's skills documentation.")
    value = value.replace("View the task of team members.", "Review the team member's responsibilities.")
    value = value.replace("A benchmarking was conducted", "Conduct benchmarking")
    value = value.replace("Some R & D department", "An R&D department")
    value = value.replace("R & D", "R&D")
    value = value.replace("plan ' s", "plan's")
    value = value.replace("Discusss", "Discuss")
    value = value.replace("Project Manager", "project manager")
    value = value.replace("Product Owner", "product owner")
    value = value.replace("Agile Project Manager", "agile project manager")
    value = value.replace("Scrum Master", "Scrum Master")
    for source, target in TERM_FIXES:
        value = re.sub(re.escape(source), target, value, flags=re.I)
    value = re.sub(r"\bproject management office\b", "PMO", value, flags=re.I)
    value = re.sub(r"\bwork breakdown structure \( wbs \)", "work breakdown structure (WBS)", value, flags=re.I)
    value = re.sub(r"\s+([?.!,;:])", r"\1", value)
    value = re.sub(r"\s+", " ", value)
    if value:
        value = value[0].upper() + value[1:]
    return value.strip()


def classify_domain(stem, choices, explanation):
    text = f"{stem} {' '.join(choices)} {explanation}"
    if re.search(r"\u5408\u89c4|\u6cd5\u89c4|\u5546\u4e1a|\u6536\u76ca|\u7ec4\u7ec7\u76ee\u6807|\u6218\u7565|\u8463\u4e8b\u4f1a|\u53ef\u884c\u6027", text):
        return "Business Environment"
    if re.search(r"\u56e2\u961f|\u6210\u5458|\u51b2\u7a81|\u6c9f\u901a|\u5e72\u7cfb\u4eba|\u53d1\u8d77\u4eba|\u4ea7\u54c1\u8d1f\u8d23\u4eba|\u9886\u5bfc|\u6559\u7ec3|\u58eb\u6c14", text):
        return "People"
    return "Process"


def classify_approach(text):
    if re.search(r"\u6df7\u5408", text):
        return "Hybrid"
    if re.search(r"\u654f\u6377|Scrum|\u770b\u677f|\u4ea7\u54c1\u5f85\u529e|\u8fed\u4ee3|\u6bcf\u65e5|\u51b2\u523a|PO|SM", text, re.I):
        return "Agile"
    return "Predictive"


def classify_tag_topic(english_text):
    lowered = english_text.lower()
    for tag, needles in TAG_RULES:
        if any(needle in lowered for needle in needles):
            return tag, tag
    return "Project Management", "Integrated project decision"


def build_explanation(answer_letters, source_explanation, translated_explanation):
    return f"Correct answer: {answer_letters}. Choose the option that best follows PMP exam logic: understand the situation, use the relevant project artifact or accountable role, communicate before escalating when appropriate, and avoid jumping directly to execution without analysis."


def build_bank():
    questions = parse_questions()
    answers = parse_answers()

    missing = []
    for number in range(1, 181):
        item = questions.get(number)
        answer = answers.get(number)
        if not item or not item["stem"] or len(item["choices"]) not in (4, 5) or not answer:
            missing.append(number)
    if missing:
        raise SystemExit(f"Unable to parse complete data for questions: {missing}")

    cache = load_cache()
    bank = []
    for number in range(1, 181):
        source = questions[number]
        answer = answers[number]
        stem_en = translate_cached(cache, source["stem"])
        if not stem_en.endswith("?") and re.search(r"\u5e94\u505a|\u600e\u4e48\u505a|\u5982\u4f55|\u5e94\u8be5|\u4ec0\u4e48", source["stem"]):
            stem_en = f"{stem_en} What should the project manager do?"
        choices_en = [translate_cached(cache, choice) for choice in source["choices"]]
        if number in MANUAL_ENGLISH_OVERRIDES:
            override = MANUAL_ENGLISH_OVERRIDES[number]
            stem_en = override["text"]
            choices_en = override["choices"]
        explanation_source = answer["explanation"]
        explanation_en = translate_cached(cache, explanation_source[:1200])
        answer_letters = answer["answer"]
        correct_answers = [ord(letter) - 65 for letter in answer_letters]
        all_english = f"{stem_en} {' '.join(choices_en)} {explanation_en}"
        tag, topic = classify_tag_topic(all_english)
        original_text = f"{source['stem']} {' '.join(source['choices'])} {explanation_source}"
        question = {
            "bankType": "exam",
            "sourceSet": SOURCE_SET,
            "mockExamId": MOCK_EXAM_ID,
            "mockQuestionNumber": number,
            "questionType": "multiple" if len(correct_answers) > 1 else "single",
            "tag": tag,
            "domain": classify_domain(source["stem"], source["choices"], explanation_source),
            "topic": topic,
            "approach": classify_approach(original_text),
            "difficulty": "Medium",
            "decisionRule": "Use the project context, relevant project artifact, and accountable role before taking action.",
            "text": stem_en,
            "choices": choices_en,
            "correct": correct_answers[0],
            "correctAnswers": correct_answers,
            "answerLetters": list(answer_letters),
            "explanation": build_explanation(answer_letters, explanation_source, explanation_en),
        }
        bank.append(question)
    OUTPUT_PATH.write_text(json.dumps(bank, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(bank)} PMP exam questions to {OUTPUT_PATH}")


if __name__ == "__main__":
    build_bank()
