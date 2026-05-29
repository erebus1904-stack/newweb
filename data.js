const examCatalog = [
  {
    id: "ca-dmv",
    track: "dmv",
    country: "United States",
    region: "California",
    examType: "Driver license",
    title: "California DMV Permit Test",
    subtitle: "DMV Permit + CDL Foundation",
    badge: "热门",
    questionCount: 620,
    updated: "2026",
    source: "California Driver Handbook",
    coverage: ["交通标志", "路权", "安全驾驶", "违规与处罚"],
    readiness: 68,
    done: 184,
    accuracy: 76,
    weak: "Road signs",
    eta: "9 天",
    description: "手册章节、交通标志、路权、安全驾驶与模拟考试。",
    questions: [
      {
        tag: "Rules of road",
        text: "When approaching a flashing red traffic signal, what should you do?",
        choices: ["Slow down and proceed carefully", "Stop completely, then proceed when safe", "Drive through if no cars are present", "Yield only to vehicles on your right"],
        correct: 1,
        explanation: "Flashing red is treated like a stop sign. You must stop completely and continue only when it is safe."
      },
      {
        tag: "Road signs",
        text: "A yellow diamond-shaped sign usually warns drivers about what?",
        choices: ["A service area", "A regulatory instruction", "A potential hazard ahead", "A parking restriction"],
        correct: 2,
        explanation: "Yellow diamond signs are warning signs, commonly used for curves, intersections, crossings, and other hazards."
      },
      {
        tag: "Safe driving",
        text: "What is the safest action when your vehicle begins to skid?",
        choices: ["Brake hard immediately", "Steer in the direction you want to go", "Accelerate to regain traction", "Turn sharply away from the skid"],
        correct: 1,
        explanation: "Ease off the accelerator and steer toward your intended path. Sudden braking or sharp steering can make the skid worse."
      }
    ]
  },
  {
    id: "ny-realestate",
    track: "realestate",
    country: "United States",
    region: "New York",
    examType: "Professional license",
    title: "Real Estate Salesperson",
    subtitle: "Real Estate Salesperson License",
    badge: "执照",
    questionCount: 980,
    updated: "2026",
    source: "State licensing outline",
    coverage: ["代理关系", "合同", "产权", "估价", "联邦法规"],
    readiness: 54,
    done: 96,
    accuracy: 69,
    weak: "Agency",
    eta: "16 天",
    description: "州法、合同、估价、产权、代理关系与联邦法规。",
    questions: [
      {
        tag: "Agency law",
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
        tag: "Property rights",
        text: "An easement gives someone what kind of right?",
        choices: ["Ownership of the land", "A limited right to use another person's land", "The right to cancel a deed", "A temporary mortgage interest"],
        correct: 1,
        explanation: "An easement is a non-possessory right to use land owned by another party for a specific purpose."
      }
    ]
  },
  {
    id: "can-citizenship",
    track: "citizenship",
    country: "Canada",
    region: "Federal",
    examType: "Citizenship",
    title: "Canadian Citizenship Test",
    subtitle: "Citizenship Test Prep",
    badge: "入籍",
    questionCount: 410,
    updated: "2026",
    source: "Discover Canada guide",
    coverage: ["政府制度", "历史", "地理", "权利义务"],
    readiness: 72,
    done: 231,
    accuracy: 81,
    weak: "History",
    eta: "6 天",
    description: "官方指南章节学习、历史、地理、政府制度和权利义务。",
    questions: [
      {
        tag: "Government",
        text: "In Canada, who represents the monarch at the federal level?",
        choices: ["The Prime Minister", "The Governor General", "The Chief Justice", "The Speaker of the House"],
        correct: 1,
        explanation: "The Governor General represents the monarch in Canada at the federal level."
      },
      {
        tag: "Rights",
        text: "Which document protects fundamental rights and freedoms in Canada?",
        choices: ["The Charter of Rights and Freedoms", "The Highway Traffic Act", "The Citizenship Guide only", "The Immigration Fee Schedule"],
        correct: 0,
        explanation: "The Canadian Charter of Rights and Freedoms is part of Canada's Constitution and protects core rights."
      },
      {
        tag: "Civics",
        text: "What is one responsibility of citizenship?",
        choices: ["Ignoring local laws", "Voting in elections", "Avoiding jury duty", "Refusing community participation"],
        correct: 1,
        explanation: "Voting is a key civic responsibility and one of the main topics in citizenship preparation."
      }
    ]
  },
  {
    id: "sie-series",
    track: "finance",
    country: "United States",
    region: "Federal",
    examType: "Financial license",
    title: "SIE + Series 7 Foundation",
    subtitle: "SIE + Series Exam Prep",
    badge: "金融",
    questionCount: 750,
    updated: "2026",
    source: "FINRA exam content outline",
    coverage: ["产品知识", "交易市场", "客户账户", "监管"],
    readiness: 47,
    done: 73,
    accuracy: 62,
    weak: "Options",
    eta: "21 天",
    description: "产品知识、交易市场、客户账户、监管和适当性原则。",
    questions: [
      {
        tag: "Securities products",
        text: "A bond's coupon rate primarily describes what?",
        choices: ["The issuer's credit rating", "The stated annual interest rate", "The market price", "The maturity date"],
        correct: 1,
        explanation: "The coupon rate is the stated annual interest rate paid by a bond, usually based on its par value."
      },
      {
        tag: "Regulation",
        text: "Suitability rules are mainly intended to ensure what?",
        choices: ["Recommendations fit the customer's profile", "All trades are profitable", "Brokers avoid documentation", "Customers never lose principal"],
        correct: 0,
        explanation: "Suitability connects recommendations to the customer's objectives, risk tolerance, financial profile, and needs."
      },
      {
        tag: "Markets",
        text: "Which market is used for newly issued securities?",
        choices: ["Secondary market", "Primary market", "Auction market only", "Money market only"],
        correct: 1,
        explanation: "New issues are sold in the primary market; later trading takes place in the secondary market."
      }
    ]
  },
  {
    id: "nclex-servsafe",
    track: "health",
    country: "Global",
    region: "Multiple",
    examType: "Healthcare and safety",
    title: "NCLEX + ServSafe Foundation",
    subtitle: "NCLEX + ServSafe Foundation",
    badge: "护理",
    questionCount: 690,
    updated: "2026",
    source: "Exam blueprint and safety guidelines",
    coverage: ["患者安全", "感染控制", "食品安全", "优先级判断"],
    readiness: 61,
    done: 142,
    accuracy: 71,
    weak: "Safety",
    eta: "12 天",
    description: "护理安全、感染控制、食品处理和优先级判断基础。",
    questions: [
      {
        tag: "Food safety",
        text: "Which practice helps prevent cross-contamination?",
        choices: ["Using the same board for raw chicken and salad", "Washing hands only at the end of a shift", "Separating raw and ready-to-eat foods", "Cooling food at room temperature overnight"],
        correct: 2,
        explanation: "Raw and ready-to-eat foods should be separated by tools, storage, and workflow to reduce contamination risk."
      },
      {
        tag: "Nursing safety",
        text: "What should be prioritized first in many patient safety questions?",
        choices: ["Documentation style", "Airway, breathing, and circulation", "Room decoration", "Discharge paperwork"],
        correct: 1,
        explanation: "NCLEX-style prioritization often begins with ABCs: airway, breathing, and circulation."
      },
      {
        tag: "Infection control",
        text: "Hand hygiene is most important at which time?",
        choices: ["Only before lunch", "Before and after patient or food contact", "Only when gloves are unavailable", "Only after visible spills"],
        correct: 1,
        explanation: "Hand hygiene before and after contact is a foundational infection-control practice."
      }
    ]
  }
];
