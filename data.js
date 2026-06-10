const examCatalog = [
  {
    id: "nclex-rn",
    track: "medical",
    country: "United States",
    region: "Nursing",
    examType: "Medical & Nursing",
    title: "NCLEX-RN题库",
    subtitle: "美国护士题库",
    badge: "护理",
    questionCount: 8,
    updated: "2026",
    source: "NCLEX-RN test plan",
    coverage: ["Adult health", "Pharmacology", "Maternal newborn", "Pediatrics", "Safety"],
    readiness: 0,
    done: 0,
    accuracy: 0,
    weak: "None",
    eta: "Start to estimate",
    description: "CAT自适应训练、错题集、全英文病例解析，适合海外护士短期冲刺。",
    questions: [
      {
        tag: "Prioritization",
        text: "A client reports shortness of breath and chest tightness. What is the nurse's priority action?",
        choices: ["Document the complaint", "Assess airway and oxygen saturation", "Offer oral fluids", "Schedule discharge teaching"],
        correct: 1,
        explanation: "NCLEX priority questions often begin with airway, breathing, and circulation before documentation or teaching."
      },
      {
        tag: "Pharmacology",
        text: "Which finding should be reported before administering digoxin?",
        choices: ["Heart rate of 54/min", "Blood pressure of 126/78", "Respiratory rate of 18/min", "Temperature of 98.6 F"],
        correct: 0,
        explanation: "Bradycardia can indicate digoxin toxicity risk. The nurse should hold the medication and notify the provider."
      },
      {
        tag: "Safety",
        text: "Which client should the nurse see first?",
        choices: ["A client requesting pain medication", "A client with new confusion after surgery", "A client awaiting discharge paperwork", "A client asking about diet instructions"],
        correct: 1,
        explanation: "New confusion can signal hypoxia, infection, bleeding, or neurologic change and requires prompt assessment."
      },
      {
        tag: "Infection control",
        text: "Which action best reduces transmission risk before entering a room under contact precautions?",
        choices: ["Apply gown and gloves", "Wear only a surgical mask", "Keep the door open", "Use sterile gloves only"],
        correct: 0,
        explanation: "Contact precautions generally require gown and gloves to reduce spread through direct contact and contaminated surfaces."
      },
      {
        tag: "Maternal newborn",
        text: "Which postpartum finding should be reported promptly?",
        choices: ["Firm fundus at the umbilicus", "Saturating one pad in 15 minutes", "Mild uterine cramping during breastfeeding", "Lochia rubra on day one"],
        correct: 1,
        explanation: "Heavy bleeding can indicate postpartum hemorrhage and requires prompt assessment."
      },
      {
        tag: "Pediatrics",
        text: "Which statement by a parent shows correct understanding of oral rehydration therapy?",
        choices: ["I will give small frequent sips", "I will stop all fluids for a full day", "I will use only diet soda", "I will give anti-diarrheal medicine first"],
        correct: 0,
        explanation: "Small frequent amounts of oral rehydration solution can help prevent dehydration."
      },
      {
        tag: "Delegation",
        text: "Which task is most appropriate to delegate to assistive personnel?",
        choices: ["Assess new chest pain", "Teach insulin injection", "Record routine vital signs", "Evaluate wound healing"],
        correct: 2,
        explanation: "Routine vital signs for a stable client are commonly delegable; assessment, teaching, and evaluation remain nursing responsibilities."
      },
      {
        tag: "Mental health",
        text: "A client says, \"I do not want to live anymore.\" What is the nurse's priority response?",
        choices: ["Ask directly about suicide plans", "Change the subject", "Leave the client alone to rest", "Tell the client things will improve"],
        correct: 0,
        explanation: "Directly assessing suicidal intent and plan is a priority safety intervention."
      }
    ]
  },
  {
    id: "usmle",
    track: "medical",
    country: "United States",
    region: "Medicine",
    examType: "Medical & Nursing",
    title: "USMLE执医",
    subtitle: "美国医生Step1-3",
    badge: "医学",
    questionCount: 8,
    updated: "2026",
    source: "USMLE content outline",
    coverage: ["Pathology", "Physiology", "Pharmacology", "Biostatistics", "Clinical cases"],
    readiness: 0,
    done: 0,
    accuracy: 0,
    weak: "None",
    eta: "Start to estimate",
    description: "高分案例分析、解剖/病理高频图谱刷题，适合医学生和外籍医生冲刺。",
    questions: [
      {
        tag: "Pathology",
        text: "A patient has caseating granulomas in the lung. Which cell type is most associated with this response?",
        choices: ["Neutrophils", "Epithelioid macrophages", "Eosinophils", "Plasma cells"],
        correct: 1,
        explanation: "Granulomatous inflammation is driven by activated macrophages that become epithelioid cells."
      },
      {
        tag: "Biostatistics",
        text: "Which measure is most affected when disease prevalence changes?",
        choices: ["Sensitivity", "Specificity", "Positive predictive value", "Likelihood ratio positive"],
        correct: 2,
        explanation: "Predictive values depend on disease prevalence, while sensitivity and specificity are test characteristics."
      },
      {
        tag: "Pharmacology",
        text: "Which drug class commonly causes a dry cough through bradykinin accumulation?",
        choices: ["Beta blockers", "ACE inhibitors", "Calcium channel blockers", "Thiazide diuretics"],
        correct: 1,
        explanation: "ACE inhibitors reduce bradykinin breakdown, which can cause dry cough and angioedema."
      },
      {
        tag: "Physiology",
        text: "Which chamber pumps blood into the pulmonary artery?",
        choices: ["Left atrium", "Left ventricle", "Right atrium", "Right ventricle"],
        correct: 3,
        explanation: "The right ventricle pumps deoxygenated blood through the pulmonary artery to the lungs."
      },
      {
        tag: "Microbiology",
        text: "A Gram-positive organism in clusters most strongly suggests which organism?",
        choices: ["Staphylococcus species", "Streptococcus species", "Neisseria species", "Vibrio species"],
        correct: 0,
        explanation: "Staphylococci classically appear as Gram-positive cocci in clusters."
      },
      {
        tag: "Immunology",
        text: "Which immunoglobulin is most associated with mucosal secretions?",
        choices: ["IgA", "IgE", "IgG", "IgM"],
        correct: 0,
        explanation: "IgA is the dominant immunoglobulin in many mucosal secretions."
      },
      {
        tag: "Anatomy",
        text: "Which nerve is primarily responsible for diaphragm motor function?",
        choices: ["Vagus nerve", "Phrenic nerve", "Accessory nerve", "Hypoglossal nerve"],
        correct: 1,
        explanation: "The phrenic nerve, from C3-C5 roots, provides motor innervation to the diaphragm."
      },
      {
        tag: "Ethics",
        text: "A patient with decision-making capacity refuses a recommended procedure. Which principle is most relevant?",
        choices: ["Autonomy", "Justice only", "Nonmaleficence only", "Confidentiality only"],
        correct: 0,
        explanation: "Respect for autonomy supports a competent patient's right to refuse treatment."
      }
    ]
  },
  {
    id: "uscpa",
    track: "finance",
    country: "United States",
    region: "Accounting",
    examType: "Finance & Accounting",
    title: "USCPA财会",
    subtitle: "美国CPA四科",
    badge: "财会",
    questionCount: 8,
    updated: "2026",
    source: "AICPA CPA exam blueprint",
    coverage: ["FAR", "AUD", "REG", "ISC", "TBS simulations"],
    readiness: 0,
    done: 0,
    accuracy: 0,
    weak: "None",
    eta: "Start to estimate",
    description: "FAR/AUD/REG/ISC 分科训练，加入TBS大题和手写板模拟思路。",
    questions: [
      {
        tag: "FAR",
        text: "Which financial statement reports a company's financial position at a specific date?",
        choices: ["Income statement", "Balance sheet", "Statement of cash flows", "Statement of retained earnings"],
        correct: 1,
        explanation: "The balance sheet reports assets, liabilities, and equity at a point in time."
      },
      {
        tag: "AUD",
        text: "Audit risk is composed of inherent risk, control risk, and what other risk?",
        choices: ["Detection risk", "Market risk", "Liquidity risk", "Credit risk"],
        correct: 0,
        explanation: "Audit risk equals inherent risk multiplied by control risk and detection risk."
      },
      {
        tag: "REG",
        text: "Which entity generally avoids entity-level federal income tax?",
        choices: ["C corporation", "S corporation", "Public corporation", "Municipal corporation"],
        correct: 1,
        explanation: "An S corporation is typically a pass-through entity for federal income tax purposes."
      },
      {
        tag: "FAR",
        text: "Which account is normally classified as a current asset?",
        choices: ["Accounts receivable", "Bonds payable", "Common stock", "Accumulated depreciation"],
        correct: 0,
        explanation: "Accounts receivable is generally expected to be collected within the operating cycle and is a current asset."
      },
      {
        tag: "AUD",
        text: "Which procedure most directly tests whether recorded sales actually occurred?",
        choices: ["Trace shipping documents to sales invoices", "Vouch sales entries to supporting customer orders and shipping records", "Recalculate depreciation", "Inspect board minutes for dividends"],
        correct: 1,
        explanation: "Vouching from recorded entries to source documents helps test occurrence."
      },
      {
        tag: "BEC",
        text: "A favorable variance generally means what?",
        choices: ["Actual results improved income compared with budget", "Actual costs always increased", "The budget was not approved", "Controls failed automatically"],
        correct: 0,
        explanation: "A favorable variance improves operating income relative to the flexible budget or standard."
      },
      {
        tag: "ISC",
        text: "Which control helps ensure only authorized users access an accounting system?",
        choices: ["Role-based access control", "Unrestricted shared passwords", "Disabling audit logs", "Posting credentials in the office"],
        correct: 0,
        explanation: "Role-based access control limits access based on job responsibilities."
      },
      {
        tag: "Tax",
        text: "Which item is generally included in gross income unless a specific exclusion applies?",
        choices: ["Compensation for services", "Municipal bond interest only", "Qualified gift from a parent only", "Return of capital only"],
        correct: 0,
        explanation: "Compensation for services is generally included in gross income."
      }
    ]
  },
  {
    id: "cfa",
    track: "finance",
    country: "Global",
    region: "Investment",
    examType: "Finance & Accounting",
    title: "CFA金融圈",
    subtitle: "CFA一级/二级/三级",
    badge: "金融",
    questionCount: 8,
    updated: "2026",
    source: "CFA program curriculum",
    coverage: ["Ethics", "Quant", "Portfolio", "Equity", "Fixed income"],
    readiness: 0,
    done: 0,
    accuracy: 0,
    weak: "None",
    eta: "Start to estimate",
    description: "公式表在线查询、限时训练、打卡抱团班式刷题路径。",
    questions: [
      {
        tag: "Ethics",
        text: "Which action best supports fair dealing with clients?",
        choices: ["Notify largest clients first", "Disseminate investment changes to all clients fairly", "Delay records until after trading", "Share only verbal recommendations"],
        correct: 1,
        explanation: "Fair dealing requires equitable treatment of clients when disseminating investment recommendations."
      },
      {
        tag: "Quant",
        text: "If returns are normally distributed, approximately what percentage lies within one standard deviation of the mean?",
        choices: ["34%", "50%", "68%", "95%"],
        correct: 2,
        explanation: "The empirical rule says about 68% of observations fall within one standard deviation."
      },
      {
        tag: "Fixed income",
        text: "When interest rates rise, the price of a plain vanilla bond generally does what?",
        choices: ["Rises", "Falls", "Stays unchanged", "Becomes par immediately"],
        correct: 1,
        explanation: "Bond prices and yields generally move inversely."
      },
      {
        tag: "Portfolio",
        text: "Diversification primarily reduces which type of risk?",
        choices: ["Unsystematic risk", "Market risk", "Inflation risk", "Interest rate risk for all assets"],
        correct: 0,
        explanation: "Diversification can reduce asset-specific unsystematic risk, but not broad market risk."
      },
      {
        tag: "Equity",
        text: "In a constant-growth dividend discount model, value increases when which input increases, all else equal?",
        choices: ["Required return", "Expected dividend", "Risk premium only", "Discount rate"],
        correct: 1,
        explanation: "A higher expected dividend raises estimated value when other inputs are unchanged."
      },
      {
        tag: "Derivatives",
        text: "A call option gives the holder the right to do what?",
        choices: ["Buy the underlying asset", "Sell the underlying asset", "Receive coupon payments", "Vote shares without ownership"],
        correct: 0,
        explanation: "A call option gives the holder the right, not the obligation, to buy the underlying asset."
      },
      {
        tag: "Economics",
        text: "If demand increases while supply is unchanged, equilibrium price usually does what?",
        choices: ["Falls", "Rises", "Must stay unchanged", "Becomes negative"],
        correct: 1,
        explanation: "An increase in demand shifts the demand curve right, generally increasing equilibrium price."
      },
      {
        tag: "Financial reporting",
        text: "Which ratio is most directly related to short-term liquidity?",
        choices: ["Current ratio", "Gross margin", "Debt-to-equity only", "Return on equity"],
        correct: 0,
        explanation: "The current ratio compares current assets with current liabilities."
      }
    ]
  },
  {
    id: "finra",
    track: "finance",
    country: "United States",
    region: "Securities",
    examType: "Finance & Accounting",
    title: "FINRA证券牌照",
    subtitle: "SIE & Series 7",
    badge: "证券",
    questionCount: 8,
    updated: "2026",
    source: "FINRA exam content outline",
    coverage: ["SIE", "Series 7", "Regulation", "Suitability", "Products"],
    readiness: 0,
    done: 0,
    accuracy: 0,
    weak: "None",
    eta: "Start to estimate",
    description: "法规常识快速判断、合规陷阱题专项，适合证券牌照短训。",
    questions: [
      {
        tag: "Suitability",
        text: "Suitability rules are mainly intended to ensure what?",
        choices: ["Recommendations fit the customer's profile", "All trades are profitable", "Brokers avoid documentation", "Customers never lose principal"],
        correct: 0,
        explanation: "Suitability connects recommendations to the customer's objectives, risk tolerance, financial profile, and needs."
      },
      {
        tag: "Products",
        text: "A bond's coupon rate primarily describes what?",
        choices: ["The issuer's credit rating", "The stated annual interest rate", "The market price", "The maturity date"],
        correct: 1,
        explanation: "The coupon rate is the stated annual interest rate paid by a bond, usually based on par value."
      },
      {
        tag: "Markets",
        text: "Which market is used for newly issued securities?",
        choices: ["Secondary market", "Primary market", "Auction market only", "Money market only"],
        correct: 1,
        explanation: "New issues are sold in the primary market; later trading happens in the secondary market."
      },
      {
        tag: "Orders",
        text: "Which order type is designed to execute immediately at the best available price?",
        choices: ["Market order", "Limit order", "Stop limit order", "Good-till-canceled order only"],
        correct: 0,
        explanation: "A market order prioritizes immediate execution at the best available market price."
      },
      {
        tag: "Regulation",
        text: "Which activity is generally prohibited for a registered representative?",
        choices: ["Making unsuitable recommendations", "Documenting customer objectives", "Explaining product risks", "Following firm procedures"],
        correct: 0,
        explanation: "Recommendations must be suitable based on the customer's profile and investment objectives."
      },
      {
        tag: "Products",
        text: "Common stockholders generally have which right?",
        choices: ["Voting for directors", "Guaranteed dividends", "Priority over bondholders in liquidation", "Fixed coupon payments"],
        correct: 0,
        explanation: "Common shareholders often have voting rights, including voting for directors."
      },
      {
        tag: "Options",
        text: "Buying a put option is most consistent with which market view?",
        choices: ["Bearish on the underlying", "Neutral only", "Expecting no volatility", "Guaranteed income"],
        correct: 0,
        explanation: "A put option increases in value when the underlying generally falls, all else equal."
      },
      {
        tag: "Customer accounts",
        text: "Which account allows borrowing from a broker-dealer to purchase securities?",
        choices: ["Margin account", "Cash account only", "Custodial savings account", "Transfer agent account"],
        correct: 0,
        explanation: "A margin account permits borrowing subject to regulatory and firm requirements."
      }
    ]
  },
  {
    id: "fe-pe",
    track: "engineering",
    country: "United States",
    region: "Engineering",
    examType: "Engineering & IT",
    title: "FE/PE工程师",
    subtitle: "美国注册工程师",
    badge: "工程",
    questionCount: 8,
    updated: "2026",
    source: "NCEES exam specifications",
    coverage: ["Engineering economics", "Statics", "Fluids", "Ethics", "Handbook lookup"],
    readiness: 0,
    done: 0,
    accuracy: 0,
    weak: "None",
    eta: "Start to estimate",
    description: "工程经济学计算器、参考手册检索练习、公式型题目短训。",
    questions: [
      {
        tag: "Economics",
        text: "If the interest rate is positive, present value is generally what compared with future value?",
        choices: ["Higher", "Lower", "Equal", "Negative"],
        correct: 1,
        explanation: "With positive interest, present value discounts a future value and is therefore lower."
      },
      {
        tag: "Ethics",
        text: "An engineer should sign and seal work only when what condition is met?",
        choices: ["The client asks urgently", "The work is within the engineer's competence", "The fee has been paid", "The drawing is already printed"],
        correct: 1,
        explanation: "Professional engineering ethics require practicing within areas of competence."
      },
      {
        tag: "Statics",
        text: "For a body in static equilibrium, the sum of forces and the sum of moments must be what?",
        choices: ["Maximum", "Minimum", "Zero", "Equal to weight only"],
        correct: 2,
        explanation: "Static equilibrium requires net force and net moment to be zero."
      },
      {
        tag: "Fluids",
        text: "For steady incompressible flow, the continuity equation primarily conserves what?",
        choices: ["Mass", "Temperature", "Entropy only", "Voltage"],
        correct: 0,
        explanation: "Continuity for incompressible flow is based on conservation of mass."
      },
      {
        tag: "Materials",
        text: "Stress is commonly calculated as force divided by what?",
        choices: ["Area", "Volume", "Density", "Time"],
        correct: 0,
        explanation: "Normal stress is force divided by cross-sectional area."
      },
      {
        tag: "Electrical",
        text: "Ohm's law relates voltage, current, and what other quantity?",
        choices: ["Resistance", "Mass", "Frequency only", "Pressure"],
        correct: 0,
        explanation: "Ohm's law is V = IR, relating voltage, current, and resistance."
      },
      {
        tag: "Thermodynamics",
        text: "Which law of thermodynamics is commonly associated with conservation of energy?",
        choices: ["First law", "Second law", "Third law only", "Zeroth law only"],
        correct: 0,
        explanation: "The first law of thermodynamics expresses conservation of energy."
      },
      {
        tag: "Probability",
        text: "If two independent events have probabilities 0.5 and 0.2, their joint probability is what?",
        choices: ["0.1", "0.3", "0.7", "1.0"],
        correct: 0,
        explanation: "For independent events, multiply probabilities: 0.5 x 0.2 = 0.1."
      }
    ]
  },
  {
    id: "cloud-architect",
    track: "engineering",
    country: "Global",
    region: "Cloud",
    examType: "Engineering & IT",
    title: "云架构师认证",
    subtitle: "AWS & GCP题库",
    badge: "云",
    questionCount: 8,
    updated: "2026",
    source: "AWS and Google Cloud exam guides",
    coverage: ["Architecture", "Security", "Networking", "Reliability", "Cost"],
    readiness: 0,
    done: 0,
    accuracy: 0,
    weak: "None",
    eta: "Start to estimate",
    description: "场景选择题快速解析、架构图识别、云服务组合训练。",
    questions: [
      {
        tag: "Reliability",
        text: "Which design improves availability across a cloud region?",
        choices: ["Single instance in one zone", "Multi-zone deployment", "Manual backup only", "One public subnet"],
        correct: 1,
        explanation: "Deploying across multiple zones reduces the impact of a single-zone failure."
      },
      {
        tag: "Security",
        text: "Which principle grants users only the permissions needed for their tasks?",
        choices: ["Least privilege", "Open access", "Shared root account", "Public by default"],
        correct: 0,
        explanation: "Least privilege limits permissions to the minimum required for a role or task."
      },
      {
        tag: "Cost",
        text: "Which action can reduce cost for predictable long-running workloads?",
        choices: ["Use only on-demand instances", "Purchase reserved or committed capacity", "Disable monitoring", "Duplicate all resources"],
        correct: 1,
        explanation: "Reserved or committed usage discounts are useful for predictable sustained workloads."
      },
      {
        tag: "Networking",
        text: "Which component commonly controls inbound and outbound traffic at an instance or workload level?",
        choices: ["Security group or firewall rule", "Billing export", "Object lifecycle policy only", "Tagging policy only"],
        correct: 0,
        explanation: "Security groups and firewall rules are used to control network access."
      },
      {
        tag: "Storage",
        text: "Which storage type is usually best for static website assets and backups?",
        choices: ["Object storage", "CPU cache", "Ephemeral process memory", "Single local temp file only"],
        correct: 0,
        explanation: "Object storage is commonly used for durable static assets, backups, and unstructured data."
      },
      {
        tag: "Identity",
        text: "Which practice best supports least privilege in cloud IAM?",
        choices: ["Grant only required permissions", "Use one shared admin account", "Disable logs", "Make all resources public"],
        correct: 0,
        explanation: "Least privilege means granting only the permissions required for a task."
      },
      {
        tag: "Reliability",
        text: "Which design improves recovery after a regional outage?",
        choices: ["Cross-region backup or replication", "Single-zone deployment only", "Manual notes only", "No health checks"],
        correct: 0,
        explanation: "Cross-region backup or replication can support recovery when one region is unavailable."
      },
      {
        tag: "Operations",
        text: "Which tool category helps detect service errors and latency changes?",
        choices: ["Monitoring and logging", "Logo generator", "Static color palette", "Manual billing notes only"],
        correct: 0,
        explanation: "Monitoring and logging help teams observe errors, latency, and service health."
      }
    ]
  },
  {
    id: "pmp",
    track: "project",
    country: "Global",
    region: "Project Management",
    examType: "Project Management",
    title: "PMP Project Management",
    subtitle: "PMI project management certification",
    badge: "PMP",
    questionCount: 8,
    updated: "2026",
    source: "PMI PMP Examination Content Outline",
    coverage: ["People", "Process", "Business environment", "Agile", "Hybrid delivery"],
    readiness: 0,
    done: 0,
    accuracy: 0,
    weak: "None",
    eta: "Start to estimate",
    description: "Scenario-based PMP practice for people, process, business environment, agile, hybrid, and predictive delivery.",
    questions: [
      {
        tag: "People",
        text: "A key stakeholder repeatedly bypasses the project manager and gives conflicting direction to team members. What should the project manager do first?",
        choices: ["Escalate the stakeholder to the sponsor immediately", "Meet with the stakeholder to clarify expectations and communication channels", "Tell the team to ignore all stakeholder requests", "Update the schedule baseline to absorb the disruption"],
        correct: 1,
        explanation: "PMP situational questions often expect collaboration and direct communication before escalation when the issue can still be resolved by the project manager."
      },
      {
        tag: "Process",
        text: "A customer requests a new feature after the project scope baseline has been approved. What is the best next step?",
        choices: ["Add the feature because the customer requested it", "Reject the request because the baseline is approved", "Submit the request through the integrated change control process", "Ask the team to complete it only if there is extra time"],
        correct: 2,
        explanation: "A scope change after baseline approval should be evaluated through formal change control before implementation."
      },
      {
        tag: "Agile",
        text: "During a sprint, the product owner asks the team to add urgent work that would replace committed sprint items. What should the Scrum Master do?",
        choices: ["Protect the sprint goal and facilitate a discussion with the product owner and team", "Accept the change and assign overtime", "Cancel the retrospective", "Move the request directly to done"],
        correct: 0,
        explanation: "Agile PMP questions emphasize servant leadership, protecting the team, and facilitating tradeoff discussions rather than forcing unplanned work."
      },
      {
        tag: "Risk",
        text: "A previously identified risk has occurred and is now affecting project delivery. Which document should be updated first to manage the active situation?",
        choices: ["Issue log", "Risk register only", "Lessons learned register only", "Procurement statement of work"],
        correct: 0,
        explanation: "Once a risk occurs, it becomes an issue. The issue log tracks ownership, actions, and status for active problems."
      },
      {
        tag: "Business Environment",
        text: "A project deliverable meets technical requirements, but the business sponsor says it no longer supports the organization's strategic objective. What should the project manager focus on?",
        choices: ["Completing the remaining tasks exactly as planned", "Confirming business value and alignment with the sponsor", "Reducing quality standards to finish faster", "Removing the sponsor from the stakeholder register"],
        correct: 1,
        explanation: "The PMP exam includes business environment questions where project success depends on delivering business value, not only technical completion."
      },
      {
        tag: "Stakeholders",
        text: "A stakeholder has high influence but low interest in the project. What is usually the best engagement approach?",
        choices: ["Keep satisfied", "Ignore completely", "Manage only at closure", "Assign all tasks to the stakeholder"],
        correct: 0,
        explanation: "High influence and low interest stakeholders are commonly kept satisfied with appropriate communication."
      },
      {
        tag: "Quality",
        text: "A team finds repeated defects from the same process step. What should the project manager encourage first?",
        choices: ["Root cause analysis", "Hide the defects until delivery", "Remove quality checks", "Skip retrospectives"],
        correct: 0,
        explanation: "Root cause analysis helps identify and address the underlying source of recurring defects."
      },
      {
        tag: "Agile",
        text: "During a retrospective, team members identify an improvement action. What should happen next?",
        choices: ["Track the action in the next iteration", "Discard it after the meeting", "Send it only to procurement", "Add it to the product backlog as a user feature automatically"],
        correct: 0,
        explanation: "Retrospective improvements should be made visible and tracked in upcoming work."
      }
    ]
  },
  {
    id: "bar",
    track: "law",
    country: "United States",
    region: "NY / CA",
    examType: "Law & Public Service",
    title: "美国律考Bar",
    subtitle: "NY & CA Bar",
    badge: "法律",
    questionCount: 8,
    updated: "2026",
    source: "UBE and state bar outlines",
    coverage: ["MBE", "MEE", "Evidence", "Contracts", "Constitutional law"],
    readiness: 0,
    done: 0,
    accuracy: 0,
    weak: "None",
    eta: "Start to estimate",
    description: "MBE多选倒计时严训、MEE范文对比、长文阅读夜间模式。",
    questions: [
      {
        tag: "Contracts",
        text: "Which element is generally required to form a valid contract?",
        choices: ["Consideration", "A notarized signature in all cases", "A court filing", "A criminal penalty"],
        correct: 0,
        explanation: "A valid contract generally requires offer, acceptance, consideration, and no applicable defense."
      },
      {
        tag: "Evidence",
        text: "Hearsay is generally an out-of-court statement offered for what purpose?",
        choices: ["To show effect on listener", "To prove the truth of the matter asserted", "To impeach only", "To refresh recollection only"],
        correct: 1,
        explanation: "Hearsay is an out-of-court statement offered to prove the truth of what it asserts, unless an exclusion or exception applies."
      },
      {
        tag: "Con law",
        text: "Strict scrutiny usually requires a law to be narrowly tailored to serve what kind of interest?",
        choices: ["Any rational interest", "A compelling government interest", "A private business interest", "A speculative interest"],
        correct: 1,
        explanation: "Strict scrutiny requires a compelling government interest and narrow tailoring."
      },
      {
        tag: "Torts",
        text: "Negligence generally requires duty, breach, causation, and what other element?",
        choices: ["Damages", "A written contract", "Criminal intent", "Strict scrutiny"],
        correct: 0,
        explanation: "A negligence claim generally requires duty, breach, causation, and damages."
      },
      {
        tag: "Criminal law",
        text: "Burglary at common law traditionally required breaking and entering a dwelling at night with what intent?",
        choices: ["Intent to commit a felony inside", "Intent to pay rent", "Intent to create a contract", "Intent to vote"],
        correct: 0,
        explanation: "Traditional burglary includes intent to commit a felony within the dwelling."
      },
      {
        tag: "Property",
        text: "A leasehold estate primarily gives the tenant what right?",
        choices: ["Possession for a period of time", "Automatic ownership forever", "Power to tax land", "Right to ignore all covenants"],
        correct: 0,
        explanation: "A leasehold gives possessory rights for the lease term, subject to the lease."
      },
      {
        tag: "Civil procedure",
        text: "Personal jurisdiction is mainly concerned with what?",
        choices: ["A court's power over a party", "The spelling of pleadings", "The jury's verdict form only", "The color of exhibits"],
        correct: 0,
        explanation: "Personal jurisdiction concerns whether a court has authority over the parties."
      },
      {
        tag: "Contracts",
        text: "A material breach generally gives the nonbreaching party which remedy?",
        choices: ["Suspend performance and seek damages", "Must continue without objection", "Lose all rights automatically", "Become a criminal defendant"],
        correct: 0,
        explanation: "A material breach can excuse further performance and support a claim for damages."
      }
    ]
  },
  {
    id: "real-estate",
    track: "law",
    country: "United States",
    region: "State-specific",
    examType: "Law & Public Service",
    title: "美国地产经纪人",
    subtitle: "房产执照模考",
    badge: "地产",
    questionCount: 8,
    updated: "2026",
    source: "State real estate licensing outlines",
    coverage: ["Agency", "Contracts", "Property rights", "State law", "Real estate math"],
    readiness: 0,
    done: 0,
    accuracy: 0,
    weak: "None",
    eta: "Start to estimate",
    description: "各州法律切换、房产计算专项题、经纪人执照短期训练。",
    questions: [
      {
        tag: "Agency",
        text: "What does fiduciary duty require from a real estate agent?",
        choices: ["Acting primarily for the broker", "Putting the client's interests first within the law", "Guaranteeing a sale price", "Avoiding all written disclosures"],
        correct: 1,
        explanation: "A fiduciary relationship requires loyalty, disclosure, confidentiality, obedience, accounting, and reasonable care."
      },
      {
        tag: "Contracts",
        text: "Which element is normally required for a valid real estate contract?",
        choices: ["Verbal acceptance only", "Legal purpose", "No consideration", "No competent parties"],
        correct: 1,
        explanation: "A valid contract generally needs competent parties, mutual consent, consideration, legal purpose, and proper form."
      },
      {
        tag: "Math",
        text: "A property sells for $400,000 with a 6% commission. What is the total commission?",
        choices: ["$12,000", "$18,000", "$24,000", "$30,000"],
        correct: 2,
        explanation: "$400,000 multiplied by 6% equals $24,000."
      },
      {
        tag: "Licensing",
        text: "A salesperson generally performs licensed real estate activities under whose supervision?",
        choices: ["A licensed broker", "Any home seller", "A county recorder only", "A mortgage borrower"],
        correct: 0,
        explanation: "A real estate salesperson typically acts under the supervision of a licensed broker."
      },
      {
        tag: "Disclosure",
        text: "Which action best supports proper disclosure practice?",
        choices: ["Disclose known material facts", "Hide defects until closing", "Avoid written records", "Tell only the buyer's lender"],
        correct: 0,
        explanation: "Known material facts should be disclosed according to applicable real estate law and duties."
      },
      {
        tag: "Fair housing",
        text: "Which statement best reflects fair housing compliance?",
        choices: ["Apply qualification standards consistently", "Steer buyers based on protected class", "Refuse families with children automatically", "Advertise a preference for one religion"],
        correct: 0,
        explanation: "Consistent, lawful standards help avoid discriminatory housing practices."
      },
      {
        tag: "Property rights",
        text: "An easement most commonly gives a person what right?",
        choices: ["Use another person's land for a specific purpose", "Own all minerals automatically", "Cancel a deed at will", "Avoid property taxes forever"],
        correct: 0,
        explanation: "An easement is a nonpossessory right to use land for a defined purpose."
      },
      {
        tag: "Finance",
        text: "In a mortgage loan, the principal balance refers to what?",
        choices: ["The unpaid loan amount", "The broker's commission", "The property tax rate", "The appraisal license number"],
        correct: 0,
        explanation: "Principal is the amount borrowed that remains unpaid, excluding interest."
      }
    ]
  }
];
