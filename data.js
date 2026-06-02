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
    questionCount: 1280,
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
    questionCount: 2100,
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
    questionCount: 1650,
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
    questionCount: 1400,
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
    questionCount: 920,
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
    questionCount: 1180,
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
    questionCount: 860,
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
    questionCount: 1350,
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
    questionCount: 980,
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
      }
    ]
  }
];
