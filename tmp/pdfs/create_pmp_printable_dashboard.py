from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[2]
OUTPUT_PDF = ROOT / "output" / "pdf" / "PMP_Exam_Study_Progress_Dashboard.pdf"

NAVY = colors.HexColor("#0B2F66")
BLUE = colors.HexColor("#174F9F")
LIGHT_BLUE = colors.HexColor("#CFE0F5")
PALE_BLUE = colors.HexColor("#EEF5FF")
GRID = colors.HexColor("#536C99")
TEXT = colors.HexColor("#102B5D")
MUTED = colors.HexColor("#52627A")

PLAN = [
    ("Week 1", "Introduction", [
        "What Is a Project and the History of Project Management",
        "Basic Project Elements",
        "Organizational Project Management",
        "Project Life Cycle and Project Phases",
        "Core Project Management Methodology",
        "Project Management Business Documents",
    ]),
    ("Week 2", "Project Operating Environment", [
        "Two Major Factors Influencing Projects",
        "Organizational Systems",
    ]),
    ("Week 3", "The Role of the Project Manager", [
        "Role of the Project Manager 01",
        "Role of the Project Manager 02",
        "Role of the Project Manager 03",
    ]),
    ("Week 4", "Project Integration Management", [
        "What Is Integration Management",
        "Develop Project Charter",
        "Develop Project Management Plan",
        "Direct and Manage Project Work",
        "Manage Project Knowledge",
        "Monitor and Control Project Work",
        "Perform Integrated Change Control",
        "Close Project or Phase",
    ]),
    ("Week 5", "Project Scope Management", [
        "Meaning of Scope Management",
        "Collect Requirements",
        "Define Scope",
        "Create WBS",
        "Validate Scope",
        "Control Scope",
    ]),
    ("Weeks 6-7", "Project Schedule Management", [
        "Concepts of Project Schedule Management",
        "Plan Schedule Management",
        "Define Activities",
        "Sequence Activities",
        "Estimate Activity Durations",
        "Develop Schedule",
        "Control Schedule",
    ]),
    ("Weeks 8-9", "Project Cost Management", [
        "Concepts of Project Cost Management",
        "Cost Management Steps",
        "Plan Cost Management",
        "Estimate Costs",
        "Determine Budget",
        "Control Costs",
    ]),
    ("Weeks 10-11", "Project Quality Management", [
        "Meaning of Quality Management",
        "Quality Management Levels and Effectiveness",
        "Quality Management Process",
        "Inputs and Outputs of Quality Management",
        "Quality Management Tools and Techniques",
    ]),
    ("Weeks 12-13", "Project Resource Management", [
        "Concepts of Project Resource Management",
        "Plan Resource Management",
        "Estimate Activity Resources",
        "Acquire Resources",
        "Develop Team",
        "Manage Team",
        "Control Resources",
    ]),
    ("Week 14", "Project Communications Management", [
        "Concepts of Project Communications Management",
        "Plan Communications Management",
        "Manage Communications",
        "Monitor Communications",
    ]),
    ("Weeks 15-16", "Project Risk Management", [
        "Meaning of Risk Management",
        "Risk Management ITTO",
        "Plan Risk Management",
        "Identify Risks",
        "Perform Qualitative Risk Analysis",
        "Perform Quantitative Risk Analysis",
        "Plan Risk Responses",
        "Implement Risk Responses",
        "Monitor Risks",
    ]),
    ("Week 17", "Project Procurement Management", [
        "Meaning of Procurement Management",
        "Plan Procurement Management",
        "Conduct Procurements",
        "Control Procurements",
    ]),
    ("Week 18", "Project Stakeholder Management", [
        "Concepts of Stakeholder Management",
        "Identify Stakeholders",
        "Plan Stakeholder Engagement",
        "Manage Stakeholder Engagement",
        "Monitor Stakeholder Engagement",
    ]),
    ("Weeks 19-20", "Agile Project Management", [
        "Concepts of Agile Project Management",
        "Agile Life Cycle",
        "Agile Mindset",
        "Scrum Practices",
        "Agile Backlog",
        "Agile Delivery Process",
        "Agile Delivery Team",
        "Servant Leadership",
        "Agile Conflict",
        "Agile Performance Management",
        "Kanban Method",
        "Agile Retrospective",
        "Agile Backlog Items",
        "Agile Triangle",
        "Agile Charter",
        "Agile Adaptive Planning",
        "Agile Contracts",
    ]),
    ("Week 21", "Agile Terms and Exam Vocabulary", [
        "Requirements Analyst and Business Analyst",
        "Steering Committee",
        "Emotional Intelligence",
        "Blueprint and Related Terms",
        "Compliance",
        "Dashboards",
        "Drivers and Consultations",
        "Big Bang",
        "Epics and Stories",
        "Large-Scale Agile",
        "Wrap-Up",
    ]),
]


def register_fonts():
    pdfmetrics.registerFont(TTFont("TimesNewRoman", "C:/Windows/Fonts/times.ttf"))
    pdfmetrics.registerFont(TTFont("TimesNewRoman-Bold", "C:/Windows/Fonts/timesbd.ttf"))
    pdfmetrics.registerFont(TTFont("Arial", "C:/Windows/Fonts/arial.ttf"))
    pdfmetrics.registerFont(TTFont("Arial-Bold", "C:/Windows/Fonts/arialbd.ttf"))


def build_rows():
    rows = []
    for week, chapter, topics in PLAN:
        for section, topic in enumerate(topics, start=1):
            rows.append(
                {
                    "week": week,
                    "chapter": chapter,
                    "section": str(section),
                    "topic": topic,
                }
            )
    if len(rows) != 100:
        raise ValueError(f"Expected 100 study units, found {len(rows)}.")
    return rows


def fit_lines(text, font, size, max_width, max_lines=3):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        if pdfmetrics.stringWidth(trial, font, size) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    if len(lines) > max_lines:
        lines = lines[:max_lines]
        while lines[-1] and pdfmetrics.stringWidth(lines[-1] + "...", font, size) > max_width:
            lines[-1] = lines[-1][:-1].rstrip()
        lines[-1] += "..."
    return lines


def draw_centered_wrapped(c, text, x, y, w, h, font, size, max_lines=4):
    c.setFont(font, size)
    c.setFillColor(TEXT)
    lines = fit_lines(text, font, size, w - 7, max_lines)
    line_height = size + 1.4
    start_y = y + (h + (len(lines) - 1) * line_height) / 2 - size * 0.35
    for i, line in enumerate(lines):
        c.drawCentredString(x + w / 2, start_y - i * line_height, line)


def draw_left_wrapped(c, text, x, y, w, h, font, size, max_lines=2):
    c.setFont(font, size)
    c.setFillColor(TEXT)
    lines = fit_lines(text, font, size, w - 8, max_lines)
    line_height = size + 1.3
    start_y = y + (h + (len(lines) - 1) * line_height) / 2 - size * 0.35
    for i, line in enumerate(lines):
        c.drawString(x + 4, start_y - i * line_height, line)


def draw_page_header(c, page_number, page_count, width, height):
    if page_number == 1:
        c.setFont("TimesNewRoman-Bold", 25)
        c.setFillColor(NAVY)
        c.drawCentredString(width / 2, height - 39, "PMP Exam Study Progress Dashboard")
        c.setFont("Arial-Bold", 9.4)
        c.drawCentredString(
            width / 2,
            height - 58,
            "PMBOK Guide Eighth Edition - Agile Practice Guide - Process Groups: A Practice Guide",
        )
        y = height - 82
    else:
        c.setFont("TimesNewRoman-Bold", 17)
        c.setFillColor(NAVY)
        c.drawString(28, height - 38, "PMP Exam Study Progress Dashboard")
        c.setFont("Arial", 8)
        c.setFillColor(MUTED)
        c.drawRightString(width - 28, height - 36, f"Study Plan Detail - Page {page_number}")
        y = height - 64

    c.setStrokeColor(BLUE)
    c.setLineWidth(1.1)
    c.line(18, y + 9, width - 18, y + 9)
    return y


def draw_footer(c, page_number, page_count, width):
    y = 22
    c.setStrokeColor(BLUE)
    c.setLineWidth(0.9)
    c.line(18, y + 17, width - 18, y + 17)
    c.setFont("Arial", 7.2)
    c.setFillColor(MUTED)
    c.drawString(18, y + 3, "Printable study tracker")
    c.drawRightString(width - 18, y + 3, f"Page {page_number} of {page_count}")


def draw_table(c, rows, start_index, end_index, y_top):
    left = 18
    col_widths = [56, 80, 28, 223, 42, 48, 42, 40]
    headers = ["Week", "Chapter", "No.", "Study Unit", "Lesson", "Reading", "Practice", "Done"]
    header_h = 22
    row_h = 18.45
    x_positions = [left]
    for w in col_widths:
        x_positions.append(x_positions[-1] + w)
    table_w = sum(col_widths)
    row_count = end_index - start_index
    body_top = y_top - header_h
    body_bottom = body_top - row_count * row_h

    c.setFillColor(PALE_BLUE)
    c.rect(left, y_top - header_h, table_w, header_h, fill=1, stroke=0)
    c.setStrokeColor(GRID)
    c.setLineWidth(0.85)
    c.rect(left, y_top - header_h, table_w, header_h + row_count * row_h, fill=0, stroke=1)
    c.setFont("TimesNewRoman-Bold", 9.4)
    c.setFillColor(TEXT)
    for i, label in enumerate(headers):
        c.drawCentredString(x_positions[i] + col_widths[i] / 2, y_top - header_h + 7.4, label)

    for x in x_positions:
        c.line(x, y_top, x, body_bottom)
    c.line(left + table_w, y_top, left + table_w, body_bottom)
    c.line(left, y_top, left + table_w, y_top)
    c.line(left, body_top, left + table_w, body_top)

    for local_i, row in enumerate(rows[start_index:end_index]):
        y = body_top - (local_i + 1) * row_h
        row_index = start_index + local_i
        c.setFillColor(LIGHT_BLUE)
        c.rect(x_positions[2], y, col_widths[2], row_h, fill=1, stroke=0)

        boundary = row_index + 1 == len(rows) or rows[row_index + 1]["week"] != row["week"] or rows[row_index + 1]["chapter"] != row["chapter"]
        line_left = left if boundary else x_positions[2]
        c.setStrokeColor(GRID)
        c.setLineWidth(0.45)
        c.line(line_left, y, left + table_w, y)

        c.setFillColor(TEXT)
        c.setFont("Arial", 7.7)
        c.drawCentredString(x_positions[2] + col_widths[2] / 2, y + 6.2, row["section"])
        draw_left_wrapped(c, row["topic"], x_positions[3], y, col_widths[3], row_h, "TimesNewRoman", 8.2)

    visible = rows[start_index:end_index]
    for key, col, font_size in (("week", 0, 8.5), ("chapter", 1, 7.4)):
        segment_start = 0
        while segment_start < len(visible):
            segment_value = visible[segment_start][key]
            segment_end = segment_start + 1
            while segment_end < len(visible) and visible[segment_end][key] == segment_value:
                segment_end += 1
            seg_y = body_top - segment_end * row_h
            seg_h = (segment_end - segment_start) * row_h
            c.setFillColor(colors.white)
            c.rect(x_positions[col], seg_y, col_widths[col], seg_h, fill=1, stroke=0)
            c.setStrokeColor(GRID)
            c.setLineWidth(0.65)
            c.rect(x_positions[col], seg_y, col_widths[col], seg_h, fill=0, stroke=1)
            draw_centered_wrapped(c, segment_value, x_positions[col], seg_y, col_widths[col], seg_h, "TimesNewRoman-Bold", font_size, 5)
            segment_start = segment_end


def make_pdf():
    register_fonts()
    rows = build_rows()
    OUTPUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    width, height = A4
    page_slices = [(0, 32), (32, 67), (67, 100)]
    c = canvas.Canvas(str(OUTPUT_PDF), pagesize=A4)
    c.setTitle("PMP Exam Study Progress Dashboard")
    c.setAuthor("Codex")
    c.setSubject("Printable PMP study progress tracker")
    for page_number, (start, end) in enumerate(page_slices, start=1):
        y_top = draw_page_header(c, page_number, len(page_slices), width, height)
        draw_table(c, rows, start, end, y_top)
        draw_footer(c, page_number, len(page_slices), width)
        c.showPage()
    c.save()
    print(OUTPUT_PDF)


if __name__ == "__main__":
    make_pdf()
