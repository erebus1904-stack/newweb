const examCatalog = [
  {
    "id": "nclex-rn",
    "track": "medical",
    "country": "United States",
    "region": "Nursing",
    "examType": "Medical & Nursing",
    "title": "NCLEX-RN题库",
    "subtitle": "美国护士题库",
    "badge": "护理",
    "questionCount": 100,
    "updated": "2026",
    "source": "NCLEX-RN test plan",
    "coverage": [
      "Adult health",
      "Pharmacology",
      "Maternal newborn",
      "Pediatrics",
      "Safety"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "CAT自适应训练、错题集、全英文病例解析，适合海外护士短期冲刺。",
    "questions": [
      {
        "tag": "Prioritization",
        "text": "NCLEX-RN initial review 1: A client has new shortness of breath and chest tightness. What should the nurse do first?",
        "choices": [
          "Assess airway, breathing, oxygen saturation, and circulation",
          "Offer oral fluids",
          "Document and wait for rounds",
          "Start discharge teaching"
        ],
        "correct": 0,
        "explanation": "Priority questions generally begin with immediate assessment of airway, breathing, and circulation."
      },
      {
        "tag": "Pharmacology",
        "text": "NCLEX-RN initial review 2: Which finding should be clarified before administering a cardiac glycoside?",
        "choices": [
          "Pain score of two",
          "Apical pulse below the ordered safety threshold",
          "Normal temperature",
          "Pain score of two"
        ],
        "correct": 1,
        "explanation": "Bradycardia can indicate toxicity risk and should be addressed before giving digoxin-like medications."
      },
      {
        "tag": "Safety",
        "text": "NCLEX-RN initial review 3: Which postoperative client requires the most immediate nursing assessment?",
        "choices": [
          "A client awaiting discharge papers",
          "A stable client asking about diet",
          "A client with new confusion and falling oxygen saturation",
          "A client awaiting discharge papers"
        ],
        "correct": 2,
        "explanation": "Acute confusion with oxygen change may indicate hypoxia, bleeding, infection, or neurologic change."
      },
      {
        "tag": "Infection control",
        "text": "NCLEX-RN initial review 4: What is the best action before entering a room under contact precautions?",
        "choices": [
          "Wear only eye protection",
          "Use sterile gloves without a gown",
          "Skip hand hygiene if gloves are used",
          "Apply gown and gloves according to facility policy"
        ],
        "correct": 3,
        "explanation": "Contact precautions reduce transmission through direct contact and contaminated surfaces."
      },
      {
        "tag": "Maternal newborn",
        "text": "NCLEX-RN initial review 5: Which postpartum finding is most concerning?",
        "choices": [
          "Saturating a perineal pad in a short period",
          "Firm fundus at midline",
          "Mild cramping with breastfeeding",
          "Lochia rubra on day one"
        ],
        "correct": 0,
        "explanation": "Heavy bleeding can indicate postpartum hemorrhage and requires prompt evaluation."
      },
      {
        "tag": "Pediatrics",
        "text": "NCLEX-RN initial review 6: Which parent statement shows correct oral rehydration teaching?",
        "choices": [
          "I will give antidiarrheal medicine first",
          "I will offer small frequent sips of oral rehydration solution",
          "I will use only caffeinated soda",
          "I will give antidiarrheal medicine first"
        ],
        "correct": 1,
        "explanation": "Small frequent amounts help replace fluid without worsening vomiting."
      },
      {
        "tag": "Delegation",
        "text": "NCLEX-RN initial review 7: Which task is most appropriate to delegate for a stable client?",
        "choices": [
          "Assess new chest pain",
          "Teach insulin injection",
          "Obtain and record routine vital signs",
          "Assess new chest pain"
        ],
        "correct": 2,
        "explanation": "Routine data collection may be delegated; assessment, teaching, and evaluation remain nursing duties."
      },
      {
        "tag": "Mental health",
        "text": "NCLEX-RN initial review 8: A client states that they do not want to live anymore. What is the priority response?",
        "choices": [
          "Leave the client alone to rest",
          "Promise secrecy",
          "Change the topic",
          "Ask directly about suicidal thoughts, plan, and safety"
        ],
        "correct": 3,
        "explanation": "Direct suicide assessment is required when self-harm risk is expressed."
      },
      {
        "tag": "Medication math",
        "text": "NCLEX-RN initial review 9: The order is 500 mL over 4 hours. What rate should the nurse set?",
        "choices": [
          "125 mL/hr",
          "50 mL/hr",
          "100 mL/hr",
          "250 mL/hr"
        ],
        "correct": 0,
        "explanation": "Divide 500 mL by 4 hours to calculate 125 mL/hr."
      },
      {
        "tag": "Client teaching",
        "text": "NCLEX-RN initial review 10: Which instruction is most important for a client prescribed warfarin?",
        "choices": [
          "Double the dose after a missed dose",
          "Report unusual bleeding or bruising promptly",
          "Take aspirin freely",
          "Double the dose after a missed dose"
        ],
        "correct": 1,
        "explanation": "Warfarin increases bleeding risk, so bleeding signs require follow-up."
      },
      {
        "tag": "Nutrition",
        "text": "NCLEX-RN initial review 11: Which food choice best supports iron-deficiency anemia?",
        "choices": [
          "Low-protein broth only",
          "Candy and soda",
          "Lean meat with vitamin C-containing fruit",
          "Low-protein broth only"
        ],
        "correct": 2,
        "explanation": "Iron-rich foods and vitamin C can support iron absorption."
      },
      {
        "tag": "Diabetes care",
        "text": "NCLEX-RN initial review 12: Which finding suggests hypoglycemia?",
        "choices": [
          "Increased height",
          "Slow gradual weight gain only",
          "Warm dry skin after exercise",
          "Sweating, shakiness, and confusion"
        ],
        "correct": 3,
        "explanation": "Adrenergic and neurologic symptoms can indicate low blood glucose."
      },
      {
        "tag": "Respiratory",
        "text": "NCLEX-RN initial review 13: Which position usually helps a client with dyspnea breathe more effectively?",
        "choices": [
          "High Fowler position",
          "Trendelenburg position",
          "Knees locked while standing",
          "Flat supine position"
        ],
        "correct": 0,
        "explanation": "Upright positioning supports chest expansion and ventilation."
      },
      {
        "tag": "Renal",
        "text": "NCLEX-RN initial review 14: Which finding should be monitored closely in a client receiving loop diuretics?",
        "choices": [
          "Shoe size",
          "Potassium level",
          "Hair color",
          "Shoe size"
        ],
        "correct": 1,
        "explanation": "Loop diuretics can promote potassium loss and electrolyte imbalance."
      },
      {
        "tag": "Cardiac",
        "text": "NCLEX-RN initial review 15: Which symptom is most consistent with left-sided heart failure?",
        "choices": [
          "Localized rash after tape",
          "Isolated ankle sprain",
          "Crackles and shortness of breath",
          "Localized rash after tape"
        ],
        "correct": 2,
        "explanation": "Pulmonary congestion is commonly associated with left-sided heart failure."
      },
      {
        "tag": "Neurologic",
        "text": "NCLEX-RN initial review 16: Which stroke warning sign requires emergency response?",
        "choices": [
          "Longstanding fatigue",
          "Seasonal sneezing",
          "Expected soreness after exercise",
          "Sudden facial droop and arm weakness"
        ],
        "correct": 3,
        "explanation": "Sudden focal neurologic deficits require urgent stroke evaluation."
      },
      {
        "tag": "GI",
        "text": "NCLEX-RN initial review 17: Which finding after abdominal surgery should be reported promptly?",
        "choices": [
          "Rigid abdomen with increasing pain",
          "Using an incentive spirometer",
          "Mild incisional soreness",
          "Passing flatus"
        ],
        "correct": 0,
        "explanation": "Worsening rigidity and pain can suggest bleeding, infection, or peritonitis."
      },
      {
        "tag": "Legal ethics",
        "text": "NCLEX-RN initial review 18: What best protects client confidentiality?",
        "choices": [
          "Leave records open at the desk",
          "Discuss client information only with authorized care team members",
          "Post a client photo online",
          "Leave records open at the desk"
        ],
        "correct": 1,
        "explanation": "Confidential information should be shared only for legitimate care purposes."
      },
      {
        "tag": "Emergency",
        "text": "NCLEX-RN initial review 19: What is the first action when finding an unresponsive adult?",
        "choices": [
          "Offer oral medication",
          "Start discharge planning",
          "Check responsiveness and call for help according to BLS sequence",
          "Offer oral medication"
        ],
        "correct": 2,
        "explanation": "BLS begins with assessing responsiveness, activating help, and checking breathing and pulse per protocol."
      },
      {
        "tag": "Wound care",
        "text": "NCLEX-RN initial review 20: Which wound finding suggests infection?",
        "choices": [
          "Clean dry dressing",
          "Decreased drainage over time",
          "Edges approximated",
          "Increasing redness, warmth, swelling, and purulent drainage"
        ],
        "correct": 3,
        "explanation": "Local inflammatory signs with purulent drainage suggest infection."
      },
      {
        "tag": "Prioritization",
        "text": "NCLEX-RN timed drill 21: A client has new shortness of breath and chest tightness. What should the nurse do first?",
        "choices": [
          "Assess airway, breathing, oxygen saturation, and circulation",
          "Start discharge teaching",
          "Offer oral fluids",
          "Document and wait for rounds"
        ],
        "correct": 0,
        "explanation": "Priority questions generally begin with immediate assessment of airway, breathing, and circulation."
      },
      {
        "tag": "Pharmacology",
        "text": "NCLEX-RN timed drill 22: Which finding should be clarified before administering a cardiac glycoside?",
        "choices": [
          "Normal temperature",
          "Apical pulse below the ordered safety threshold",
          "Meal tray at bedside",
          "Normal temperature"
        ],
        "correct": 1,
        "explanation": "Bradycardia can indicate toxicity risk and should be addressed before giving digoxin-like medications."
      },
      {
        "tag": "Safety",
        "text": "NCLEX-RN timed drill 23: Which postoperative client requires the most immediate nursing assessment?",
        "choices": [
          "A client requesting a blanket",
          "A client awaiting discharge papers",
          "A client with new confusion and falling oxygen saturation",
          "A client requesting a blanket"
        ],
        "correct": 2,
        "explanation": "Acute confusion with oxygen change may indicate hypoxia, bleeding, infection, or neurologic change."
      },
      {
        "tag": "Infection control",
        "text": "NCLEX-RN timed drill 24: What is the best action before entering a room under contact precautions?",
        "choices": [
          "Skip hand hygiene if gloves are used",
          "Wear only eye protection",
          "Use sterile gloves without a gown",
          "Apply gown and gloves according to facility policy"
        ],
        "correct": 3,
        "explanation": "Contact precautions reduce transmission through direct contact and contaminated surfaces."
      },
      {
        "tag": "Maternal newborn",
        "text": "NCLEX-RN timed drill 25: Which postpartum finding is most concerning?",
        "choices": [
          "Saturating a perineal pad in a short period",
          "Lochia rubra on day one",
          "Firm fundus at midline",
          "Mild cramping with breastfeeding"
        ],
        "correct": 0,
        "explanation": "Heavy bleeding can indicate postpartum hemorrhage and requires prompt evaluation."
      },
      {
        "tag": "Pediatrics",
        "text": "NCLEX-RN timed drill 26: Which parent statement shows correct oral rehydration teaching?",
        "choices": [
          "I will use only caffeinated soda",
          "I will offer small frequent sips of oral rehydration solution",
          "I will stop all fluids for a day",
          "I will use only caffeinated soda"
        ],
        "correct": 1,
        "explanation": "Small frequent amounts help replace fluid without worsening vomiting."
      },
      {
        "tag": "Delegation",
        "text": "NCLEX-RN timed drill 27: Which task is most appropriate to delegate for a stable client?",
        "choices": [
          "Evaluate wound healing",
          "Assess new chest pain",
          "Obtain and record routine vital signs",
          "Evaluate wound healing"
        ],
        "correct": 2,
        "explanation": "Routine data collection may be delegated; assessment, teaching, and evaluation remain nursing duties."
      },
      {
        "tag": "Mental health",
        "text": "NCLEX-RN timed drill 28: A client states that they do not want to live anymore. What is the priority response?",
        "choices": [
          "Change the topic",
          "Leave the client alone to rest",
          "Promise secrecy",
          "Ask directly about suicidal thoughts, plan, and safety"
        ],
        "correct": 3,
        "explanation": "Direct suicide assessment is required when self-harm risk is expressed."
      },
      {
        "tag": "Medication math",
        "text": "NCLEX-RN timed drill 29: The order is 500 mL over 4 hours. What rate should the nurse set?",
        "choices": [
          "125 mL/hr",
          "250 mL/hr",
          "50 mL/hr",
          "100 mL/hr"
        ],
        "correct": 0,
        "explanation": "Divide 500 mL by 4 hours to calculate 125 mL/hr."
      },
      {
        "tag": "Client teaching",
        "text": "NCLEX-RN timed drill 30: Which instruction is most important for a client prescribed warfarin?",
        "choices": [
          "Take aspirin freely",
          "Report unusual bleeding or bruising promptly",
          "Stop all vegetables permanently",
          "Take aspirin freely"
        ],
        "correct": 1,
        "explanation": "Warfarin increases bleeding risk, so bleeding signs require follow-up."
      },
      {
        "tag": "Nutrition",
        "text": "NCLEX-RN timed drill 31: Which food choice best supports iron-deficiency anemia?",
        "choices": [
          "Tea with every meal",
          "Low-protein broth only",
          "Lean meat with vitamin C-containing fruit",
          "Tea with every meal"
        ],
        "correct": 2,
        "explanation": "Iron-rich foods and vitamin C can support iron absorption."
      },
      {
        "tag": "Diabetes care",
        "text": "NCLEX-RN timed drill 32: Which finding suggests hypoglycemia?",
        "choices": [
          "Warm dry skin after exercise",
          "Increased height",
          "Slow gradual weight gain only",
          "Sweating, shakiness, and confusion"
        ],
        "correct": 3,
        "explanation": "Adrenergic and neurologic symptoms can indicate low blood glucose."
      },
      {
        "tag": "Respiratory",
        "text": "NCLEX-RN timed drill 33: Which position usually helps a client with dyspnea breathe more effectively?",
        "choices": [
          "High Fowler position",
          "Flat supine position",
          "Trendelenburg position",
          "Knees locked while standing"
        ],
        "correct": 0,
        "explanation": "Upright positioning supports chest expansion and ventilation."
      },
      {
        "tag": "Renal",
        "text": "NCLEX-RN timed drill 34: Which finding should be monitored closely in a client receiving loop diuretics?",
        "choices": [
          "Hair color",
          "Potassium level",
          "Ear temperature only",
          "Hair color"
        ],
        "correct": 1,
        "explanation": "Loop diuretics can promote potassium loss and electrolyte imbalance."
      },
      {
        "tag": "Cardiac",
        "text": "NCLEX-RN timed drill 35: Which symptom is most consistent with left-sided heart failure?",
        "choices": [
          "Improved exercise tolerance",
          "Localized rash after tape",
          "Crackles and shortness of breath",
          "Improved exercise tolerance"
        ],
        "correct": 2,
        "explanation": "Pulmonary congestion is commonly associated with left-sided heart failure."
      },
      {
        "tag": "Neurologic",
        "text": "NCLEX-RN timed drill 36: Which stroke warning sign requires emergency response?",
        "choices": [
          "Expected soreness after exercise",
          "Longstanding fatigue",
          "Seasonal sneezing",
          "Sudden facial droop and arm weakness"
        ],
        "correct": 3,
        "explanation": "Sudden focal neurologic deficits require urgent stroke evaluation."
      },
      {
        "tag": "GI",
        "text": "NCLEX-RN timed drill 37: Which finding after abdominal surgery should be reported promptly?",
        "choices": [
          "Rigid abdomen with increasing pain",
          "Passing flatus",
          "Using an incentive spirometer",
          "Mild incisional soreness"
        ],
        "correct": 0,
        "explanation": "Worsening rigidity and pain can suggest bleeding, infection, or peritonitis."
      },
      {
        "tag": "Legal ethics",
        "text": "NCLEX-RN timed drill 38: What best protects client confidentiality?",
        "choices": [
          "Post a client photo online",
          "Discuss client information only with authorized care team members",
          "Discuss details in the elevator",
          "Post a client photo online"
        ],
        "correct": 1,
        "explanation": "Confidential information should be shared only for legitimate care purposes."
      },
      {
        "tag": "Emergency",
        "text": "NCLEX-RN timed drill 39: What is the first action when finding an unresponsive adult?",
        "choices": [
          "Give food and water",
          "Offer oral medication",
          "Check responsiveness and call for help according to BLS sequence",
          "Give food and water"
        ],
        "correct": 2,
        "explanation": "BLS begins with assessing responsiveness, activating help, and checking breathing and pulse per protocol."
      },
      {
        "tag": "Wound care",
        "text": "NCLEX-RN timed drill 40: Which wound finding suggests infection?",
        "choices": [
          "Edges approximated",
          "Clean dry dressing",
          "Decreased drainage over time",
          "Increasing redness, warmth, swelling, and purulent drainage"
        ],
        "correct": 3,
        "explanation": "Local inflammatory signs with purulent drainage suggest infection."
      },
      {
        "tag": "Prioritization",
        "text": "NCLEX-RN case analysis 41: A client has new shortness of breath and chest tightness. What should the nurse do first?",
        "choices": [
          "Assess airway, breathing, oxygen saturation, and circulation",
          "Document and wait for rounds",
          "Start discharge teaching",
          "Offer oral fluids"
        ],
        "correct": 0,
        "explanation": "Priority questions generally begin with immediate assessment of airway, breathing, and circulation."
      },
      {
        "tag": "Pharmacology",
        "text": "NCLEX-RN case analysis 42: Which finding should be clarified before administering a cardiac glycoside?",
        "choices": [
          "Meal tray at bedside",
          "Apical pulse below the ordered safety threshold",
          "Pain score of two",
          "Meal tray at bedside"
        ],
        "correct": 1,
        "explanation": "Bradycardia can indicate toxicity risk and should be addressed before giving digoxin-like medications."
      },
      {
        "tag": "Safety",
        "text": "NCLEX-RN case analysis 43: Which postoperative client requires the most immediate nursing assessment?",
        "choices": [
          "A stable client asking about diet",
          "A client requesting a blanket",
          "A client with new confusion and falling oxygen saturation",
          "A stable client asking about diet"
        ],
        "correct": 2,
        "explanation": "Acute confusion with oxygen change may indicate hypoxia, bleeding, infection, or neurologic change."
      },
      {
        "tag": "Infection control",
        "text": "NCLEX-RN case analysis 44: What is the best action before entering a room under contact precautions?",
        "choices": [
          "Use sterile gloves without a gown",
          "Skip hand hygiene if gloves are used",
          "Wear only eye protection",
          "Apply gown and gloves according to facility policy"
        ],
        "correct": 3,
        "explanation": "Contact precautions reduce transmission through direct contact and contaminated surfaces."
      },
      {
        "tag": "Maternal newborn",
        "text": "NCLEX-RN case analysis 45: Which postpartum finding is most concerning?",
        "choices": [
          "Saturating a perineal pad in a short period",
          "Mild cramping with breastfeeding",
          "Lochia rubra on day one",
          "Firm fundus at midline"
        ],
        "correct": 0,
        "explanation": "Heavy bleeding can indicate postpartum hemorrhage and requires prompt evaluation."
      },
      {
        "tag": "Pediatrics",
        "text": "NCLEX-RN case analysis 46: Which parent statement shows correct oral rehydration teaching?",
        "choices": [
          "I will stop all fluids for a day",
          "I will offer small frequent sips of oral rehydration solution",
          "I will give antidiarrheal medicine first",
          "I will stop all fluids for a day"
        ],
        "correct": 1,
        "explanation": "Small frequent amounts help replace fluid without worsening vomiting."
      },
      {
        "tag": "Delegation",
        "text": "NCLEX-RN case analysis 47: Which task is most appropriate to delegate for a stable client?",
        "choices": [
          "Teach insulin injection",
          "Evaluate wound healing",
          "Obtain and record routine vital signs",
          "Teach insulin injection"
        ],
        "correct": 2,
        "explanation": "Routine data collection may be delegated; assessment, teaching, and evaluation remain nursing duties."
      },
      {
        "tag": "Mental health",
        "text": "NCLEX-RN case analysis 48: A client states that they do not want to live anymore. What is the priority response?",
        "choices": [
          "Promise secrecy",
          "Change the topic",
          "Leave the client alone to rest",
          "Ask directly about suicidal thoughts, plan, and safety"
        ],
        "correct": 3,
        "explanation": "Direct suicide assessment is required when self-harm risk is expressed."
      },
      {
        "tag": "Medication math",
        "text": "NCLEX-RN case analysis 49: The order is 500 mL over 4 hours. What rate should the nurse set?",
        "choices": [
          "125 mL/hr",
          "100 mL/hr",
          "250 mL/hr",
          "50 mL/hr"
        ],
        "correct": 0,
        "explanation": "Divide 500 mL by 4 hours to calculate 125 mL/hr."
      },
      {
        "tag": "Client teaching",
        "text": "NCLEX-RN case analysis 50: Which instruction is most important for a client prescribed warfarin?",
        "choices": [
          "Stop all vegetables permanently",
          "Report unusual bleeding or bruising promptly",
          "Double the dose after a missed dose",
          "Stop all vegetables permanently"
        ],
        "correct": 1,
        "explanation": "Warfarin increases bleeding risk, so bleeding signs require follow-up."
      },
      {
        "tag": "Nutrition",
        "text": "NCLEX-RN case analysis 51: Which food choice best supports iron-deficiency anemia?",
        "choices": [
          "Candy and soda",
          "Tea with every meal",
          "Lean meat with vitamin C-containing fruit",
          "Candy and soda"
        ],
        "correct": 2,
        "explanation": "Iron-rich foods and vitamin C can support iron absorption."
      },
      {
        "tag": "Diabetes care",
        "text": "NCLEX-RN case analysis 52: Which finding suggests hypoglycemia?",
        "choices": [
          "Slow gradual weight gain only",
          "Warm dry skin after exercise",
          "Increased height",
          "Sweating, shakiness, and confusion"
        ],
        "correct": 3,
        "explanation": "Adrenergic and neurologic symptoms can indicate low blood glucose."
      },
      {
        "tag": "Respiratory",
        "text": "NCLEX-RN case analysis 53: Which position usually helps a client with dyspnea breathe more effectively?",
        "choices": [
          "High Fowler position",
          "Knees locked while standing",
          "Flat supine position",
          "Trendelenburg position"
        ],
        "correct": 0,
        "explanation": "Upright positioning supports chest expansion and ventilation."
      },
      {
        "tag": "Renal",
        "text": "NCLEX-RN case analysis 54: Which finding should be monitored closely in a client receiving loop diuretics?",
        "choices": [
          "Ear temperature only",
          "Potassium level",
          "Shoe size",
          "Ear temperature only"
        ],
        "correct": 1,
        "explanation": "Loop diuretics can promote potassium loss and electrolyte imbalance."
      },
      {
        "tag": "Cardiac",
        "text": "NCLEX-RN case analysis 55: Which symptom is most consistent with left-sided heart failure?",
        "choices": [
          "Isolated ankle sprain",
          "Improved exercise tolerance",
          "Crackles and shortness of breath",
          "Isolated ankle sprain"
        ],
        "correct": 2,
        "explanation": "Pulmonary congestion is commonly associated with left-sided heart failure."
      },
      {
        "tag": "Neurologic",
        "text": "NCLEX-RN case analysis 56: Which stroke warning sign requires emergency response?",
        "choices": [
          "Seasonal sneezing",
          "Expected soreness after exercise",
          "Longstanding fatigue",
          "Sudden facial droop and arm weakness"
        ],
        "correct": 3,
        "explanation": "Sudden focal neurologic deficits require urgent stroke evaluation."
      },
      {
        "tag": "GI",
        "text": "NCLEX-RN case analysis 57: Which finding after abdominal surgery should be reported promptly?",
        "choices": [
          "Rigid abdomen with increasing pain",
          "Mild incisional soreness",
          "Passing flatus",
          "Using an incentive spirometer"
        ],
        "correct": 0,
        "explanation": "Worsening rigidity and pain can suggest bleeding, infection, or peritonitis."
      },
      {
        "tag": "Legal ethics",
        "text": "NCLEX-RN case analysis 58: What best protects client confidentiality?",
        "choices": [
          "Discuss details in the elevator",
          "Discuss client information only with authorized care team members",
          "Leave records open at the desk",
          "Discuss details in the elevator"
        ],
        "correct": 1,
        "explanation": "Confidential information should be shared only for legitimate care purposes."
      },
      {
        "tag": "Emergency",
        "text": "NCLEX-RN case analysis 59: What is the first action when finding an unresponsive adult?",
        "choices": [
          "Start discharge planning",
          "Give food and water",
          "Check responsiveness and call for help according to BLS sequence",
          "Start discharge planning"
        ],
        "correct": 2,
        "explanation": "BLS begins with assessing responsiveness, activating help, and checking breathing and pulse per protocol."
      },
      {
        "tag": "Wound care",
        "text": "NCLEX-RN case analysis 60: Which wound finding suggests infection?",
        "choices": [
          "Decreased drainage over time",
          "Edges approximated",
          "Clean dry dressing",
          "Increasing redness, warmth, swelling, and purulent drainage"
        ],
        "correct": 3,
        "explanation": "Local inflammatory signs with purulent drainage suggest infection."
      },
      {
        "tag": "Prioritization",
        "text": "NCLEX-RN readiness check 61: A client has new shortness of breath and chest tightness. What should the nurse do first?",
        "choices": [
          "Assess airway, breathing, oxygen saturation, and circulation",
          "Offer oral fluids",
          "Document and wait for rounds",
          "Start discharge teaching"
        ],
        "correct": 0,
        "explanation": "Priority questions generally begin with immediate assessment of airway, breathing, and circulation."
      },
      {
        "tag": "Pharmacology",
        "text": "NCLEX-RN readiness check 62: Which finding should be clarified before administering a cardiac glycoside?",
        "choices": [
          "Pain score of two",
          "Apical pulse below the ordered safety threshold",
          "Normal temperature",
          "Pain score of two"
        ],
        "correct": 1,
        "explanation": "Bradycardia can indicate toxicity risk and should be addressed before giving digoxin-like medications."
      },
      {
        "tag": "Safety",
        "text": "NCLEX-RN readiness check 63: Which postoperative client requires the most immediate nursing assessment?",
        "choices": [
          "A client awaiting discharge papers",
          "A stable client asking about diet",
          "A client with new confusion and falling oxygen saturation",
          "A client awaiting discharge papers"
        ],
        "correct": 2,
        "explanation": "Acute confusion with oxygen change may indicate hypoxia, bleeding, infection, or neurologic change."
      },
      {
        "tag": "Infection control",
        "text": "NCLEX-RN readiness check 64: What is the best action before entering a room under contact precautions?",
        "choices": [
          "Wear only eye protection",
          "Use sterile gloves without a gown",
          "Skip hand hygiene if gloves are used",
          "Apply gown and gloves according to facility policy"
        ],
        "correct": 3,
        "explanation": "Contact precautions reduce transmission through direct contact and contaminated surfaces."
      },
      {
        "tag": "Maternal newborn",
        "text": "NCLEX-RN readiness check 65: Which postpartum finding is most concerning?",
        "choices": [
          "Saturating a perineal pad in a short period",
          "Firm fundus at midline",
          "Mild cramping with breastfeeding",
          "Lochia rubra on day one"
        ],
        "correct": 0,
        "explanation": "Heavy bleeding can indicate postpartum hemorrhage and requires prompt evaluation."
      },
      {
        "tag": "Pediatrics",
        "text": "NCLEX-RN readiness check 66: Which parent statement shows correct oral rehydration teaching?",
        "choices": [
          "I will give antidiarrheal medicine first",
          "I will offer small frequent sips of oral rehydration solution",
          "I will use only caffeinated soda",
          "I will give antidiarrheal medicine first"
        ],
        "correct": 1,
        "explanation": "Small frequent amounts help replace fluid without worsening vomiting."
      },
      {
        "tag": "Delegation",
        "text": "NCLEX-RN readiness check 67: Which task is most appropriate to delegate for a stable client?",
        "choices": [
          "Assess new chest pain",
          "Teach insulin injection",
          "Obtain and record routine vital signs",
          "Assess new chest pain"
        ],
        "correct": 2,
        "explanation": "Routine data collection may be delegated; assessment, teaching, and evaluation remain nursing duties."
      },
      {
        "tag": "Mental health",
        "text": "NCLEX-RN readiness check 68: A client states that they do not want to live anymore. What is the priority response?",
        "choices": [
          "Leave the client alone to rest",
          "Promise secrecy",
          "Change the topic",
          "Ask directly about suicidal thoughts, plan, and safety"
        ],
        "correct": 3,
        "explanation": "Direct suicide assessment is required when self-harm risk is expressed."
      },
      {
        "tag": "Medication math",
        "text": "NCLEX-RN readiness check 69: The order is 500 mL over 4 hours. What rate should the nurse set?",
        "choices": [
          "125 mL/hr",
          "50 mL/hr",
          "100 mL/hr",
          "250 mL/hr"
        ],
        "correct": 0,
        "explanation": "Divide 500 mL by 4 hours to calculate 125 mL/hr."
      },
      {
        "tag": "Client teaching",
        "text": "NCLEX-RN readiness check 70: Which instruction is most important for a client prescribed warfarin?",
        "choices": [
          "Double the dose after a missed dose",
          "Report unusual bleeding or bruising promptly",
          "Take aspirin freely",
          "Double the dose after a missed dose"
        ],
        "correct": 1,
        "explanation": "Warfarin increases bleeding risk, so bleeding signs require follow-up."
      },
      {
        "tag": "Nutrition",
        "text": "NCLEX-RN readiness check 71: Which food choice best supports iron-deficiency anemia?",
        "choices": [
          "Low-protein broth only",
          "Candy and soda",
          "Lean meat with vitamin C-containing fruit",
          "Low-protein broth only"
        ],
        "correct": 2,
        "explanation": "Iron-rich foods and vitamin C can support iron absorption."
      },
      {
        "tag": "Diabetes care",
        "text": "NCLEX-RN readiness check 72: Which finding suggests hypoglycemia?",
        "choices": [
          "Increased height",
          "Slow gradual weight gain only",
          "Warm dry skin after exercise",
          "Sweating, shakiness, and confusion"
        ],
        "correct": 3,
        "explanation": "Adrenergic and neurologic symptoms can indicate low blood glucose."
      },
      {
        "tag": "Respiratory",
        "text": "NCLEX-RN readiness check 73: Which position usually helps a client with dyspnea breathe more effectively?",
        "choices": [
          "High Fowler position",
          "Trendelenburg position",
          "Knees locked while standing",
          "Flat supine position"
        ],
        "correct": 0,
        "explanation": "Upright positioning supports chest expansion and ventilation."
      },
      {
        "tag": "Renal",
        "text": "NCLEX-RN readiness check 74: Which finding should be monitored closely in a client receiving loop diuretics?",
        "choices": [
          "Shoe size",
          "Potassium level",
          "Hair color",
          "Shoe size"
        ],
        "correct": 1,
        "explanation": "Loop diuretics can promote potassium loss and electrolyte imbalance."
      },
      {
        "tag": "Cardiac",
        "text": "NCLEX-RN readiness check 75: Which symptom is most consistent with left-sided heart failure?",
        "choices": [
          "Localized rash after tape",
          "Isolated ankle sprain",
          "Crackles and shortness of breath",
          "Localized rash after tape"
        ],
        "correct": 2,
        "explanation": "Pulmonary congestion is commonly associated with left-sided heart failure."
      },
      {
        "tag": "Neurologic",
        "text": "NCLEX-RN readiness check 76: Which stroke warning sign requires emergency response?",
        "choices": [
          "Longstanding fatigue",
          "Seasonal sneezing",
          "Expected soreness after exercise",
          "Sudden facial droop and arm weakness"
        ],
        "correct": 3,
        "explanation": "Sudden focal neurologic deficits require urgent stroke evaluation."
      },
      {
        "tag": "GI",
        "text": "NCLEX-RN readiness check 77: Which finding after abdominal surgery should be reported promptly?",
        "choices": [
          "Rigid abdomen with increasing pain",
          "Using an incentive spirometer",
          "Mild incisional soreness",
          "Passing flatus"
        ],
        "correct": 0,
        "explanation": "Worsening rigidity and pain can suggest bleeding, infection, or peritonitis."
      },
      {
        "tag": "Legal ethics",
        "text": "NCLEX-RN readiness check 78: What best protects client confidentiality?",
        "choices": [
          "Leave records open at the desk",
          "Discuss client information only with authorized care team members",
          "Post a client photo online",
          "Leave records open at the desk"
        ],
        "correct": 1,
        "explanation": "Confidential information should be shared only for legitimate care purposes."
      },
      {
        "tag": "Emergency",
        "text": "NCLEX-RN readiness check 79: What is the first action when finding an unresponsive adult?",
        "choices": [
          "Offer oral medication",
          "Start discharge planning",
          "Check responsiveness and call for help according to BLS sequence",
          "Offer oral medication"
        ],
        "correct": 2,
        "explanation": "BLS begins with assessing responsiveness, activating help, and checking breathing and pulse per protocol."
      },
      {
        "tag": "Wound care",
        "text": "NCLEX-RN readiness check 80: Which wound finding suggests infection?",
        "choices": [
          "Clean dry dressing",
          "Decreased drainage over time",
          "Edges approximated",
          "Increasing redness, warmth, swelling, and purulent drainage"
        ],
        "correct": 3,
        "explanation": "Local inflammatory signs with purulent drainage suggest infection."
      },
      {
        "tag": "Prioritization",
        "text": "NCLEX-RN weak-area review 81: A client has new shortness of breath and chest tightness. What should the nurse do first?",
        "choices": [
          "Assess airway, breathing, oxygen saturation, and circulation",
          "Start discharge teaching",
          "Offer oral fluids",
          "Document and wait for rounds"
        ],
        "correct": 0,
        "explanation": "Priority questions generally begin with immediate assessment of airway, breathing, and circulation."
      },
      {
        "tag": "Pharmacology",
        "text": "NCLEX-RN weak-area review 82: Which finding should be clarified before administering a cardiac glycoside?",
        "choices": [
          "Normal temperature",
          "Apical pulse below the ordered safety threshold",
          "Meal tray at bedside",
          "Normal temperature"
        ],
        "correct": 1,
        "explanation": "Bradycardia can indicate toxicity risk and should be addressed before giving digoxin-like medications."
      },
      {
        "tag": "Safety",
        "text": "NCLEX-RN weak-area review 83: Which postoperative client requires the most immediate nursing assessment?",
        "choices": [
          "A client requesting a blanket",
          "A client awaiting discharge papers",
          "A client with new confusion and falling oxygen saturation",
          "A client requesting a blanket"
        ],
        "correct": 2,
        "explanation": "Acute confusion with oxygen change may indicate hypoxia, bleeding, infection, or neurologic change."
      },
      {
        "tag": "Infection control",
        "text": "NCLEX-RN weak-area review 84: What is the best action before entering a room under contact precautions?",
        "choices": [
          "Skip hand hygiene if gloves are used",
          "Wear only eye protection",
          "Use sterile gloves without a gown",
          "Apply gown and gloves according to facility policy"
        ],
        "correct": 3,
        "explanation": "Contact precautions reduce transmission through direct contact and contaminated surfaces."
      },
      {
        "tag": "Maternal newborn",
        "text": "NCLEX-RN weak-area review 85: Which postpartum finding is most concerning?",
        "choices": [
          "Saturating a perineal pad in a short period",
          "Lochia rubra on day one",
          "Firm fundus at midline",
          "Mild cramping with breastfeeding"
        ],
        "correct": 0,
        "explanation": "Heavy bleeding can indicate postpartum hemorrhage and requires prompt evaluation."
      },
      {
        "tag": "Pediatrics",
        "text": "NCLEX-RN weak-area review 86: Which parent statement shows correct oral rehydration teaching?",
        "choices": [
          "I will use only caffeinated soda",
          "I will offer small frequent sips of oral rehydration solution",
          "I will stop all fluids for a day",
          "I will use only caffeinated soda"
        ],
        "correct": 1,
        "explanation": "Small frequent amounts help replace fluid without worsening vomiting."
      },
      {
        "tag": "Delegation",
        "text": "NCLEX-RN weak-area review 87: Which task is most appropriate to delegate for a stable client?",
        "choices": [
          "Evaluate wound healing",
          "Assess new chest pain",
          "Obtain and record routine vital signs",
          "Evaluate wound healing"
        ],
        "correct": 2,
        "explanation": "Routine data collection may be delegated; assessment, teaching, and evaluation remain nursing duties."
      },
      {
        "tag": "Mental health",
        "text": "NCLEX-RN weak-area review 88: A client states that they do not want to live anymore. What is the priority response?",
        "choices": [
          "Change the topic",
          "Leave the client alone to rest",
          "Promise secrecy",
          "Ask directly about suicidal thoughts, plan, and safety"
        ],
        "correct": 3,
        "explanation": "Direct suicide assessment is required when self-harm risk is expressed."
      },
      {
        "tag": "Medication math",
        "text": "NCLEX-RN weak-area review 89: The order is 500 mL over 4 hours. What rate should the nurse set?",
        "choices": [
          "125 mL/hr",
          "250 mL/hr",
          "50 mL/hr",
          "100 mL/hr"
        ],
        "correct": 0,
        "explanation": "Divide 500 mL by 4 hours to calculate 125 mL/hr."
      },
      {
        "tag": "Client teaching",
        "text": "NCLEX-RN weak-area review 90: Which instruction is most important for a client prescribed warfarin?",
        "choices": [
          "Take aspirin freely",
          "Report unusual bleeding or bruising promptly",
          "Stop all vegetables permanently",
          "Take aspirin freely"
        ],
        "correct": 1,
        "explanation": "Warfarin increases bleeding risk, so bleeding signs require follow-up."
      },
      {
        "tag": "Nutrition",
        "text": "NCLEX-RN weak-area review 91: Which food choice best supports iron-deficiency anemia?",
        "choices": [
          "Tea with every meal",
          "Low-protein broth only",
          "Lean meat with vitamin C-containing fruit",
          "Tea with every meal"
        ],
        "correct": 2,
        "explanation": "Iron-rich foods and vitamin C can support iron absorption."
      },
      {
        "tag": "Diabetes care",
        "text": "NCLEX-RN weak-area review 92: Which finding suggests hypoglycemia?",
        "choices": [
          "Warm dry skin after exercise",
          "Increased height",
          "Slow gradual weight gain only",
          "Sweating, shakiness, and confusion"
        ],
        "correct": 3,
        "explanation": "Adrenergic and neurologic symptoms can indicate low blood glucose."
      },
      {
        "tag": "Respiratory",
        "text": "NCLEX-RN weak-area review 93: Which position usually helps a client with dyspnea breathe more effectively?",
        "choices": [
          "High Fowler position",
          "Flat supine position",
          "Trendelenburg position",
          "Knees locked while standing"
        ],
        "correct": 0,
        "explanation": "Upright positioning supports chest expansion and ventilation."
      },
      {
        "tag": "Renal",
        "text": "NCLEX-RN weak-area review 94: Which finding should be monitored closely in a client receiving loop diuretics?",
        "choices": [
          "Hair color",
          "Potassium level",
          "Ear temperature only",
          "Hair color"
        ],
        "correct": 1,
        "explanation": "Loop diuretics can promote potassium loss and electrolyte imbalance."
      },
      {
        "tag": "Cardiac",
        "text": "NCLEX-RN weak-area review 95: Which symptom is most consistent with left-sided heart failure?",
        "choices": [
          "Improved exercise tolerance",
          "Localized rash after tape",
          "Crackles and shortness of breath",
          "Improved exercise tolerance"
        ],
        "correct": 2,
        "explanation": "Pulmonary congestion is commonly associated with left-sided heart failure."
      },
      {
        "tag": "Neurologic",
        "text": "NCLEX-RN weak-area review 96: Which stroke warning sign requires emergency response?",
        "choices": [
          "Expected soreness after exercise",
          "Longstanding fatigue",
          "Seasonal sneezing",
          "Sudden facial droop and arm weakness"
        ],
        "correct": 3,
        "explanation": "Sudden focal neurologic deficits require urgent stroke evaluation."
      },
      {
        "tag": "GI",
        "text": "NCLEX-RN weak-area review 97: Which finding after abdominal surgery should be reported promptly?",
        "choices": [
          "Rigid abdomen with increasing pain",
          "Passing flatus",
          "Using an incentive spirometer",
          "Mild incisional soreness"
        ],
        "correct": 0,
        "explanation": "Worsening rigidity and pain can suggest bleeding, infection, or peritonitis."
      },
      {
        "tag": "Legal ethics",
        "text": "NCLEX-RN weak-area review 98: What best protects client confidentiality?",
        "choices": [
          "Post a client photo online",
          "Discuss client information only with authorized care team members",
          "Discuss details in the elevator",
          "Post a client photo online"
        ],
        "correct": 1,
        "explanation": "Confidential information should be shared only for legitimate care purposes."
      },
      {
        "tag": "Emergency",
        "text": "NCLEX-RN weak-area review 99: What is the first action when finding an unresponsive adult?",
        "choices": [
          "Give food and water",
          "Offer oral medication",
          "Check responsiveness and call for help according to BLS sequence",
          "Give food and water"
        ],
        "correct": 2,
        "explanation": "BLS begins with assessing responsiveness, activating help, and checking breathing and pulse per protocol."
      },
      {
        "tag": "Wound care",
        "text": "NCLEX-RN weak-area review 100: Which wound finding suggests infection?",
        "choices": [
          "Edges approximated",
          "Clean dry dressing",
          "Decreased drainage over time",
          "Increasing redness, warmth, swelling, and purulent drainage"
        ],
        "correct": 3,
        "explanation": "Local inflammatory signs with purulent drainage suggest infection."
      }
    ]
  },
  {
    "id": "usmle",
    "track": "medical",
    "country": "United States",
    "region": "Medicine",
    "examType": "Medical & Nursing",
    "title": "USMLE执医",
    "subtitle": "美国医生Step1-3",
    "badge": "医学",
    "questionCount": 100,
    "updated": "2026",
    "source": "USMLE content outline",
    "coverage": [
      "Pathology",
      "Physiology",
      "Pharmacology",
      "Biostatistics",
      "Clinical cases"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "高分案例分析、解剖/病理高频图谱刷题，适合医学生和外籍医生冲刺。",
    "questions": [
      {
        "tag": "Pathology",
        "text": "USMLE initial review 1: Caseating granulomas in lung tissue are most associated with which cell response?",
        "choices": [
          "Activated macrophages forming epithelioid cells",
          "Platelet aggregation only",
          "Basophil histamine release only",
          "Eosinophil degranulation only"
        ],
        "correct": 0,
        "explanation": "Granulomatous inflammation is driven by activated macrophages and T-cell mediated immunity."
      },
      {
        "tag": "Biostatistics",
        "text": "USMLE initial review 2: Which measure changes most with disease prevalence?",
        "choices": [
          "Specificity",
          "Positive predictive value",
          "Sensitivity",
          "Specificity"
        ],
        "correct": 1,
        "explanation": "Predictive values depend on prevalence; sensitivity and specificity are test characteristics."
      },
      {
        "tag": "Pharmacology",
        "text": "USMLE initial review 3: Which drug class may cause dry cough through bradykinin accumulation?",
        "choices": [
          "Statins",
          "Beta blockers",
          "ACE inhibitors",
          "Statins"
        ],
        "correct": 2,
        "explanation": "ACE inhibitors decrease bradykinin breakdown, which can cause cough and angioedema."
      },
      {
        "tag": "Physiology",
        "text": "USMLE initial review 4: Which chamber ejects blood into the pulmonary artery?",
        "choices": [
          "Left atrium",
          "Left ventricle",
          "Right atrium",
          "Right ventricle"
        ],
        "correct": 3,
        "explanation": "The right ventricle pumps deoxygenated blood to the lungs through the pulmonary artery."
      },
      {
        "tag": "Microbiology",
        "text": "USMLE initial review 5: Gram-positive cocci in clusters most strongly suggest which organism group?",
        "choices": [
          "Staphylococcus species",
          "Vibrio species",
          "Streptococcus species",
          "Neisseria species"
        ],
        "correct": 0,
        "explanation": "Staphylococci classically appear as Gram-positive cocci in clusters."
      },
      {
        "tag": "Immunology",
        "text": "USMLE initial review 6: Which immunoglobulin is dominant in many mucosal secretions?",
        "choices": [
          "IgM",
          "IgA",
          "IgG",
          "IgM"
        ],
        "correct": 1,
        "explanation": "IgA is the major antibody in mucosal secretions such as saliva and breast milk."
      },
      {
        "tag": "Anatomy",
        "text": "USMLE initial review 7: Which nerve provides motor innervation to the diaphragm?",
        "choices": [
          "Vagus nerve",
          "Accessory nerve",
          "Phrenic nerve",
          "Vagus nerve"
        ],
        "correct": 2,
        "explanation": "The phrenic nerve arises from C3-C5 and drives diaphragm contraction."
      },
      {
        "tag": "Ethics",
        "text": "USMLE initial review 8: A capacitated patient refuses a recommended procedure. Which principle is most relevant?",
        "choices": [
          "Nonmaleficence only",
          "Confidentiality only",
          "Justice only",
          "Autonomy"
        ],
        "correct": 3,
        "explanation": "Patient autonomy supports the right to make informed decisions, including refusal."
      },
      {
        "tag": "Cardiology",
        "text": "USMLE initial review 9: Which change usually occurs when systemic vascular resistance acutely increases?",
        "choices": [
          "Afterload increases",
          "Afterload decreases",
          "Preload becomes zero",
          "Oxygen content must double"
        ],
        "correct": 0,
        "explanation": "Afterload reflects resistance the ventricle must overcome to eject blood."
      },
      {
        "tag": "Renal",
        "text": "USMLE initial review 10: Which nephron segment is impermeable to water and reabsorbs sodium, potassium, and chloride?",
        "choices": [
          "Collecting duct without ADH",
          "Thick ascending limb",
          "Thin descending limb",
          "Collecting duct without ADH"
        ],
        "correct": 1,
        "explanation": "The thick ascending limb dilutes tubular fluid and reabsorbs Na-K-2Cl."
      },
      {
        "tag": "Endocrine",
        "text": "USMLE initial review 11: Which laboratory pattern is most consistent with primary hypothyroidism?",
        "choices": [
          "High TSH with high T4",
          "Low TSH with low cortisol",
          "High TSH with low free T4",
          "High TSH with high T4"
        ],
        "correct": 2,
        "explanation": "Primary thyroid failure reduces T4 and increases pituitary TSH."
      },
      {
        "tag": "Neurology",
        "text": "USMLE initial review 12: Damage to the upper motor neuron pathway most commonly causes which finding?",
        "choices": [
          "Fasciculations as the primary finding",
          "Flaccid paralysis only",
          "Absent reflexes only",
          "Spasticity and hyperreflexia"
        ],
        "correct": 3,
        "explanation": "Upper motor neuron lesions often cause increased tone and reflexes."
      },
      {
        "tag": "Psychiatry",
        "text": "USMLE initial review 13: Which medication class is first-line maintenance therapy for bipolar disorder in many patients?",
        "choices": [
          "Mood stabilizers such as lithium",
          "Topical steroids only",
          "Antihistamines only",
          "Short-acting antibiotics"
        ],
        "correct": 0,
        "explanation": "Mood stabilizers are central in long-term bipolar disorder management."
      },
      {
        "tag": "Epidemiology",
        "text": "USMLE initial review 14: A study following exposed and unexposed groups over time is best described as what?",
        "choices": [
          "Cross-sectional survey only",
          "Cohort study",
          "Case-control study",
          "Cross-sectional survey only"
        ],
        "correct": 1,
        "explanation": "Cohort studies classify by exposure and follow outcomes over time."
      },
      {
        "tag": "Genetics",
        "text": "USMLE initial review 15: A disease appearing in every generation and affecting males and females equally suggests which inheritance pattern?",
        "choices": [
          "Autosomal recessive always",
          "Mitochondrial only",
          "Autosomal dominant",
          "Autosomal recessive always"
        ],
        "correct": 2,
        "explanation": "Autosomal dominant conditions commonly show vertical transmission across generations."
      },
      {
        "tag": "Hematology",
        "text": "USMLE initial review 16: Microcytic anemia with low ferritin most strongly suggests what?",
        "choices": [
          "Vitamin B12 deficiency",
          "Folate deficiency",
          "Acute hemolysis only",
          "Iron deficiency anemia"
        ],
        "correct": 3,
        "explanation": "Low ferritin indicates depleted iron stores."
      },
      {
        "tag": "Pulmonary",
        "text": "USMLE initial review 17: Obstructive lung disease usually shows which spirometry pattern?",
        "choices": [
          "Decreased FEV1/FVC ratio",
          "Always increased DLCO",
          "Increased FEV1/FVC ratio",
          "Normal lung volumes only"
        ],
        "correct": 0,
        "explanation": "Airflow obstruction lowers FEV1 disproportionately to FVC."
      },
      {
        "tag": "Gastroenterology",
        "text": "USMLE initial review 18: Painless jaundice with a pancreatic head mass most directly results from obstruction of what?",
        "choices": [
          "Left ureter",
          "Common bile duct",
          "Inferior vena cava only",
          "Left ureter"
        ],
        "correct": 1,
        "explanation": "A pancreatic head mass can compress the common bile duct and cause obstructive jaundice."
      },
      {
        "tag": "Reproductive",
        "text": "USMLE initial review 19: Which hormone surge directly triggers ovulation?",
        "choices": [
          "Prolactin drop",
          "TSH surge",
          "LH surge",
          "Prolactin drop"
        ],
        "correct": 2,
        "explanation": "The mid-cycle LH surge triggers ovulation."
      },
      {
        "tag": "Musculoskeletal",
        "text": "USMLE initial review 20: Which cell type primarily resorbs bone?",
        "choices": [
          "Chondrocyte",
          "Fibroblast",
          "Osteoblast",
          "Osteoclast"
        ],
        "correct": 3,
        "explanation": "Osteoclasts are multinucleated cells responsible for bone resorption."
      },
      {
        "tag": "Pathology",
        "text": "USMLE timed drill 21: Caseating granulomas in lung tissue are most associated with which cell response?",
        "choices": [
          "Activated macrophages forming epithelioid cells",
          "Eosinophil degranulation only",
          "Platelet aggregation only",
          "Basophil histamine release only"
        ],
        "correct": 0,
        "explanation": "Granulomatous inflammation is driven by activated macrophages and T-cell mediated immunity."
      },
      {
        "tag": "Biostatistics",
        "text": "USMLE timed drill 22: Which measure changes most with disease prevalence?",
        "choices": [
          "Sensitivity",
          "Positive predictive value",
          "Likelihood ratio positive",
          "Sensitivity"
        ],
        "correct": 1,
        "explanation": "Predictive values depend on prevalence; sensitivity and specificity are test characteristics."
      },
      {
        "tag": "Pharmacology",
        "text": "USMLE timed drill 23: Which drug class may cause dry cough through bradykinin accumulation?",
        "choices": [
          "Thiazides",
          "Statins",
          "ACE inhibitors",
          "Thiazides"
        ],
        "correct": 2,
        "explanation": "ACE inhibitors decrease bradykinin breakdown, which can cause cough and angioedema."
      },
      {
        "tag": "Physiology",
        "text": "USMLE timed drill 24: Which chamber ejects blood into the pulmonary artery?",
        "choices": [
          "Right atrium",
          "Left atrium",
          "Left ventricle",
          "Right ventricle"
        ],
        "correct": 3,
        "explanation": "The right ventricle pumps deoxygenated blood to the lungs through the pulmonary artery."
      },
      {
        "tag": "Microbiology",
        "text": "USMLE timed drill 25: Gram-positive cocci in clusters most strongly suggest which organism group?",
        "choices": [
          "Staphylococcus species",
          "Neisseria species",
          "Vibrio species",
          "Streptococcus species"
        ],
        "correct": 0,
        "explanation": "Staphylococci classically appear as Gram-positive cocci in clusters."
      },
      {
        "tag": "Immunology",
        "text": "USMLE timed drill 26: Which immunoglobulin is dominant in many mucosal secretions?",
        "choices": [
          "IgG",
          "IgA",
          "IgE",
          "IgG"
        ],
        "correct": 1,
        "explanation": "IgA is the major antibody in mucosal secretions such as saliva and breast milk."
      },
      {
        "tag": "Anatomy",
        "text": "USMLE timed drill 27: Which nerve provides motor innervation to the diaphragm?",
        "choices": [
          "Hypoglossal nerve",
          "Vagus nerve",
          "Phrenic nerve",
          "Hypoglossal nerve"
        ],
        "correct": 2,
        "explanation": "The phrenic nerve arises from C3-C5 and drives diaphragm contraction."
      },
      {
        "tag": "Ethics",
        "text": "USMLE timed drill 28: A capacitated patient refuses a recommended procedure. Which principle is most relevant?",
        "choices": [
          "Justice only",
          "Nonmaleficence only",
          "Confidentiality only",
          "Autonomy"
        ],
        "correct": 3,
        "explanation": "Patient autonomy supports the right to make informed decisions, including refusal."
      },
      {
        "tag": "Cardiology",
        "text": "USMLE timed drill 29: Which change usually occurs when systemic vascular resistance acutely increases?",
        "choices": [
          "Afterload increases",
          "Oxygen content must double",
          "Afterload decreases",
          "Preload becomes zero"
        ],
        "correct": 0,
        "explanation": "Afterload reflects resistance the ventricle must overcome to eject blood."
      },
      {
        "tag": "Renal",
        "text": "USMLE timed drill 30: Which nephron segment is impermeable to water and reabsorbs sodium, potassium, and chloride?",
        "choices": [
          "Thin descending limb",
          "Thick ascending limb",
          "Proximal tubule only",
          "Thin descending limb"
        ],
        "correct": 1,
        "explanation": "The thick ascending limb dilutes tubular fluid and reabsorbs Na-K-2Cl."
      },
      {
        "tag": "Endocrine",
        "text": "USMLE timed drill 31: Which laboratory pattern is most consistent with primary hypothyroidism?",
        "choices": [
          "Low TSH with high T4",
          "High TSH with high T4",
          "High TSH with low free T4",
          "Low TSH with high T4"
        ],
        "correct": 2,
        "explanation": "Primary thyroid failure reduces T4 and increases pituitary TSH."
      },
      {
        "tag": "Neurology",
        "text": "USMLE timed drill 32: Damage to the upper motor neuron pathway most commonly causes which finding?",
        "choices": [
          "Absent reflexes only",
          "Fasciculations as the primary finding",
          "Flaccid paralysis only",
          "Spasticity and hyperreflexia"
        ],
        "correct": 3,
        "explanation": "Upper motor neuron lesions often cause increased tone and reflexes."
      },
      {
        "tag": "Psychiatry",
        "text": "USMLE timed drill 33: Which medication class is first-line maintenance therapy for bipolar disorder in many patients?",
        "choices": [
          "Mood stabilizers such as lithium",
          "Short-acting antibiotics",
          "Topical steroids only",
          "Antihistamines only"
        ],
        "correct": 0,
        "explanation": "Mood stabilizers are central in long-term bipolar disorder management."
      },
      {
        "tag": "Epidemiology",
        "text": "USMLE timed drill 34: A study following exposed and unexposed groups over time is best described as what?",
        "choices": [
          "Case-control study",
          "Cohort study",
          "Case report",
          "Case-control study"
        ],
        "correct": 1,
        "explanation": "Cohort studies classify by exposure and follow outcomes over time."
      },
      {
        "tag": "Genetics",
        "text": "USMLE timed drill 35: A disease appearing in every generation and affecting males and females equally suggests which inheritance pattern?",
        "choices": [
          "X-linked recessive only",
          "Autosomal recessive always",
          "Autosomal dominant",
          "X-linked recessive only"
        ],
        "correct": 2,
        "explanation": "Autosomal dominant conditions commonly show vertical transmission across generations."
      },
      {
        "tag": "Hematology",
        "text": "USMLE timed drill 36: Microcytic anemia with low ferritin most strongly suggests what?",
        "choices": [
          "Acute hemolysis only",
          "Vitamin B12 deficiency",
          "Folate deficiency",
          "Iron deficiency anemia"
        ],
        "correct": 3,
        "explanation": "Low ferritin indicates depleted iron stores."
      },
      {
        "tag": "Pulmonary",
        "text": "USMLE timed drill 37: Obstructive lung disease usually shows which spirometry pattern?",
        "choices": [
          "Decreased FEV1/FVC ratio",
          "Normal lung volumes only",
          "Always increased DLCO",
          "Increased FEV1/FVC ratio"
        ],
        "correct": 0,
        "explanation": "Airflow obstruction lowers FEV1 disproportionately to FVC."
      },
      {
        "tag": "Gastroenterology",
        "text": "USMLE timed drill 38: Painless jaundice with a pancreatic head mass most directly results from obstruction of what?",
        "choices": [
          "Inferior vena cava only",
          "Common bile duct",
          "Splenic artery",
          "Inferior vena cava only"
        ],
        "correct": 1,
        "explanation": "A pancreatic head mass can compress the common bile duct and cause obstructive jaundice."
      },
      {
        "tag": "Reproductive",
        "text": "USMLE timed drill 39: Which hormone surge directly triggers ovulation?",
        "choices": [
          "Cortisol nadir",
          "Prolactin drop",
          "LH surge",
          "Cortisol nadir"
        ],
        "correct": 2,
        "explanation": "The mid-cycle LH surge triggers ovulation."
      },
      {
        "tag": "Musculoskeletal",
        "text": "USMLE timed drill 40: Which cell type primarily resorbs bone?",
        "choices": [
          "Osteoblast",
          "Chondrocyte",
          "Fibroblast",
          "Osteoclast"
        ],
        "correct": 3,
        "explanation": "Osteoclasts are multinucleated cells responsible for bone resorption."
      },
      {
        "tag": "Pathology",
        "text": "USMLE case analysis 41: Caseating granulomas in lung tissue are most associated with which cell response?",
        "choices": [
          "Activated macrophages forming epithelioid cells",
          "Basophil histamine release only",
          "Eosinophil degranulation only",
          "Platelet aggregation only"
        ],
        "correct": 0,
        "explanation": "Granulomatous inflammation is driven by activated macrophages and T-cell mediated immunity."
      },
      {
        "tag": "Biostatistics",
        "text": "USMLE case analysis 42: Which measure changes most with disease prevalence?",
        "choices": [
          "Likelihood ratio positive",
          "Positive predictive value",
          "Specificity",
          "Likelihood ratio positive"
        ],
        "correct": 1,
        "explanation": "Predictive values depend on prevalence; sensitivity and specificity are test characteristics."
      },
      {
        "tag": "Pharmacology",
        "text": "USMLE case analysis 43: Which drug class may cause dry cough through bradykinin accumulation?",
        "choices": [
          "Beta blockers",
          "Thiazides",
          "ACE inhibitors",
          "Beta blockers"
        ],
        "correct": 2,
        "explanation": "ACE inhibitors decrease bradykinin breakdown, which can cause cough and angioedema."
      },
      {
        "tag": "Physiology",
        "text": "USMLE case analysis 44: Which chamber ejects blood into the pulmonary artery?",
        "choices": [
          "Left ventricle",
          "Right atrium",
          "Left atrium",
          "Right ventricle"
        ],
        "correct": 3,
        "explanation": "The right ventricle pumps deoxygenated blood to the lungs through the pulmonary artery."
      },
      {
        "tag": "Microbiology",
        "text": "USMLE case analysis 45: Gram-positive cocci in clusters most strongly suggest which organism group?",
        "choices": [
          "Staphylococcus species",
          "Streptococcus species",
          "Neisseria species",
          "Vibrio species"
        ],
        "correct": 0,
        "explanation": "Staphylococci classically appear as Gram-positive cocci in clusters."
      },
      {
        "tag": "Immunology",
        "text": "USMLE case analysis 46: Which immunoglobulin is dominant in many mucosal secretions?",
        "choices": [
          "IgE",
          "IgA",
          "IgM",
          "IgE"
        ],
        "correct": 1,
        "explanation": "IgA is the major antibody in mucosal secretions such as saliva and breast milk."
      },
      {
        "tag": "Anatomy",
        "text": "USMLE case analysis 47: Which nerve provides motor innervation to the diaphragm?",
        "choices": [
          "Accessory nerve",
          "Hypoglossal nerve",
          "Phrenic nerve",
          "Accessory nerve"
        ],
        "correct": 2,
        "explanation": "The phrenic nerve arises from C3-C5 and drives diaphragm contraction."
      },
      {
        "tag": "Ethics",
        "text": "USMLE case analysis 48: A capacitated patient refuses a recommended procedure. Which principle is most relevant?",
        "choices": [
          "Confidentiality only",
          "Justice only",
          "Nonmaleficence only",
          "Autonomy"
        ],
        "correct": 3,
        "explanation": "Patient autonomy supports the right to make informed decisions, including refusal."
      },
      {
        "tag": "Cardiology",
        "text": "USMLE case analysis 49: Which change usually occurs when systemic vascular resistance acutely increases?",
        "choices": [
          "Afterload increases",
          "Preload becomes zero",
          "Oxygen content must double",
          "Afterload decreases"
        ],
        "correct": 0,
        "explanation": "Afterload reflects resistance the ventricle must overcome to eject blood."
      },
      {
        "tag": "Renal",
        "text": "USMLE case analysis 50: Which nephron segment is impermeable to water and reabsorbs sodium, potassium, and chloride?",
        "choices": [
          "Proximal tubule only",
          "Thick ascending limb",
          "Collecting duct without ADH",
          "Proximal tubule only"
        ],
        "correct": 1,
        "explanation": "The thick ascending limb dilutes tubular fluid and reabsorbs Na-K-2Cl."
      },
      {
        "tag": "Endocrine",
        "text": "USMLE case analysis 51: Which laboratory pattern is most consistent with primary hypothyroidism?",
        "choices": [
          "Low TSH with low cortisol",
          "Low TSH with high T4",
          "High TSH with low free T4",
          "Low TSH with low cortisol"
        ],
        "correct": 2,
        "explanation": "Primary thyroid failure reduces T4 and increases pituitary TSH."
      },
      {
        "tag": "Neurology",
        "text": "USMLE case analysis 52: Damage to the upper motor neuron pathway most commonly causes which finding?",
        "choices": [
          "Flaccid paralysis only",
          "Absent reflexes only",
          "Fasciculations as the primary finding",
          "Spasticity and hyperreflexia"
        ],
        "correct": 3,
        "explanation": "Upper motor neuron lesions often cause increased tone and reflexes."
      },
      {
        "tag": "Psychiatry",
        "text": "USMLE case analysis 53: Which medication class is first-line maintenance therapy for bipolar disorder in many patients?",
        "choices": [
          "Mood stabilizers such as lithium",
          "Antihistamines only",
          "Short-acting antibiotics",
          "Topical steroids only"
        ],
        "correct": 0,
        "explanation": "Mood stabilizers are central in long-term bipolar disorder management."
      },
      {
        "tag": "Epidemiology",
        "text": "USMLE case analysis 54: A study following exposed and unexposed groups over time is best described as what?",
        "choices": [
          "Case report",
          "Cohort study",
          "Cross-sectional survey only",
          "Case report"
        ],
        "correct": 1,
        "explanation": "Cohort studies classify by exposure and follow outcomes over time."
      },
      {
        "tag": "Genetics",
        "text": "USMLE case analysis 55: A disease appearing in every generation and affecting males and females equally suggests which inheritance pattern?",
        "choices": [
          "Mitochondrial only",
          "X-linked recessive only",
          "Autosomal dominant",
          "Mitochondrial only"
        ],
        "correct": 2,
        "explanation": "Autosomal dominant conditions commonly show vertical transmission across generations."
      },
      {
        "tag": "Hematology",
        "text": "USMLE case analysis 56: Microcytic anemia with low ferritin most strongly suggests what?",
        "choices": [
          "Folate deficiency",
          "Acute hemolysis only",
          "Vitamin B12 deficiency",
          "Iron deficiency anemia"
        ],
        "correct": 3,
        "explanation": "Low ferritin indicates depleted iron stores."
      },
      {
        "tag": "Pulmonary",
        "text": "USMLE case analysis 57: Obstructive lung disease usually shows which spirometry pattern?",
        "choices": [
          "Decreased FEV1/FVC ratio",
          "Increased FEV1/FVC ratio",
          "Normal lung volumes only",
          "Always increased DLCO"
        ],
        "correct": 0,
        "explanation": "Airflow obstruction lowers FEV1 disproportionately to FVC."
      },
      {
        "tag": "Gastroenterology",
        "text": "USMLE case analysis 58: Painless jaundice with a pancreatic head mass most directly results from obstruction of what?",
        "choices": [
          "Splenic artery",
          "Common bile duct",
          "Left ureter",
          "Splenic artery"
        ],
        "correct": 1,
        "explanation": "A pancreatic head mass can compress the common bile duct and cause obstructive jaundice."
      },
      {
        "tag": "Reproductive",
        "text": "USMLE case analysis 59: Which hormone surge directly triggers ovulation?",
        "choices": [
          "TSH surge",
          "Cortisol nadir",
          "LH surge",
          "TSH surge"
        ],
        "correct": 2,
        "explanation": "The mid-cycle LH surge triggers ovulation."
      },
      {
        "tag": "Musculoskeletal",
        "text": "USMLE case analysis 60: Which cell type primarily resorbs bone?",
        "choices": [
          "Fibroblast",
          "Osteoblast",
          "Chondrocyte",
          "Osteoclast"
        ],
        "correct": 3,
        "explanation": "Osteoclasts are multinucleated cells responsible for bone resorption."
      },
      {
        "tag": "Pathology",
        "text": "USMLE readiness check 61: Caseating granulomas in lung tissue are most associated with which cell response?",
        "choices": [
          "Activated macrophages forming epithelioid cells",
          "Platelet aggregation only",
          "Basophil histamine release only",
          "Eosinophil degranulation only"
        ],
        "correct": 0,
        "explanation": "Granulomatous inflammation is driven by activated macrophages and T-cell mediated immunity."
      },
      {
        "tag": "Biostatistics",
        "text": "USMLE readiness check 62: Which measure changes most with disease prevalence?",
        "choices": [
          "Specificity",
          "Positive predictive value",
          "Sensitivity",
          "Specificity"
        ],
        "correct": 1,
        "explanation": "Predictive values depend on prevalence; sensitivity and specificity are test characteristics."
      },
      {
        "tag": "Pharmacology",
        "text": "USMLE readiness check 63: Which drug class may cause dry cough through bradykinin accumulation?",
        "choices": [
          "Statins",
          "Beta blockers",
          "ACE inhibitors",
          "Statins"
        ],
        "correct": 2,
        "explanation": "ACE inhibitors decrease bradykinin breakdown, which can cause cough and angioedema."
      },
      {
        "tag": "Physiology",
        "text": "USMLE readiness check 64: Which chamber ejects blood into the pulmonary artery?",
        "choices": [
          "Left atrium",
          "Left ventricle",
          "Right atrium",
          "Right ventricle"
        ],
        "correct": 3,
        "explanation": "The right ventricle pumps deoxygenated blood to the lungs through the pulmonary artery."
      },
      {
        "tag": "Microbiology",
        "text": "USMLE readiness check 65: Gram-positive cocci in clusters most strongly suggest which organism group?",
        "choices": [
          "Staphylococcus species",
          "Vibrio species",
          "Streptococcus species",
          "Neisseria species"
        ],
        "correct": 0,
        "explanation": "Staphylococci classically appear as Gram-positive cocci in clusters."
      },
      {
        "tag": "Immunology",
        "text": "USMLE readiness check 66: Which immunoglobulin is dominant in many mucosal secretions?",
        "choices": [
          "IgM",
          "IgA",
          "IgG",
          "IgM"
        ],
        "correct": 1,
        "explanation": "IgA is the major antibody in mucosal secretions such as saliva and breast milk."
      },
      {
        "tag": "Anatomy",
        "text": "USMLE readiness check 67: Which nerve provides motor innervation to the diaphragm?",
        "choices": [
          "Vagus nerve",
          "Accessory nerve",
          "Phrenic nerve",
          "Vagus nerve"
        ],
        "correct": 2,
        "explanation": "The phrenic nerve arises from C3-C5 and drives diaphragm contraction."
      },
      {
        "tag": "Ethics",
        "text": "USMLE readiness check 68: A capacitated patient refuses a recommended procedure. Which principle is most relevant?",
        "choices": [
          "Nonmaleficence only",
          "Confidentiality only",
          "Justice only",
          "Autonomy"
        ],
        "correct": 3,
        "explanation": "Patient autonomy supports the right to make informed decisions, including refusal."
      },
      {
        "tag": "Cardiology",
        "text": "USMLE readiness check 69: Which change usually occurs when systemic vascular resistance acutely increases?",
        "choices": [
          "Afterload increases",
          "Afterload decreases",
          "Preload becomes zero",
          "Oxygen content must double"
        ],
        "correct": 0,
        "explanation": "Afterload reflects resistance the ventricle must overcome to eject blood."
      },
      {
        "tag": "Renal",
        "text": "USMLE readiness check 70: Which nephron segment is impermeable to water and reabsorbs sodium, potassium, and chloride?",
        "choices": [
          "Collecting duct without ADH",
          "Thick ascending limb",
          "Thin descending limb",
          "Collecting duct without ADH"
        ],
        "correct": 1,
        "explanation": "The thick ascending limb dilutes tubular fluid and reabsorbs Na-K-2Cl."
      },
      {
        "tag": "Endocrine",
        "text": "USMLE readiness check 71: Which laboratory pattern is most consistent with primary hypothyroidism?",
        "choices": [
          "High TSH with high T4",
          "Low TSH with low cortisol",
          "High TSH with low free T4",
          "High TSH with high T4"
        ],
        "correct": 2,
        "explanation": "Primary thyroid failure reduces T4 and increases pituitary TSH."
      },
      {
        "tag": "Neurology",
        "text": "USMLE readiness check 72: Damage to the upper motor neuron pathway most commonly causes which finding?",
        "choices": [
          "Fasciculations as the primary finding",
          "Flaccid paralysis only",
          "Absent reflexes only",
          "Spasticity and hyperreflexia"
        ],
        "correct": 3,
        "explanation": "Upper motor neuron lesions often cause increased tone and reflexes."
      },
      {
        "tag": "Psychiatry",
        "text": "USMLE readiness check 73: Which medication class is first-line maintenance therapy for bipolar disorder in many patients?",
        "choices": [
          "Mood stabilizers such as lithium",
          "Topical steroids only",
          "Antihistamines only",
          "Short-acting antibiotics"
        ],
        "correct": 0,
        "explanation": "Mood stabilizers are central in long-term bipolar disorder management."
      },
      {
        "tag": "Epidemiology",
        "text": "USMLE readiness check 74: A study following exposed and unexposed groups over time is best described as what?",
        "choices": [
          "Cross-sectional survey only",
          "Cohort study",
          "Case-control study",
          "Cross-sectional survey only"
        ],
        "correct": 1,
        "explanation": "Cohort studies classify by exposure and follow outcomes over time."
      },
      {
        "tag": "Genetics",
        "text": "USMLE readiness check 75: A disease appearing in every generation and affecting males and females equally suggests which inheritance pattern?",
        "choices": [
          "Autosomal recessive always",
          "Mitochondrial only",
          "Autosomal dominant",
          "Autosomal recessive always"
        ],
        "correct": 2,
        "explanation": "Autosomal dominant conditions commonly show vertical transmission across generations."
      },
      {
        "tag": "Hematology",
        "text": "USMLE readiness check 76: Microcytic anemia with low ferritin most strongly suggests what?",
        "choices": [
          "Vitamin B12 deficiency",
          "Folate deficiency",
          "Acute hemolysis only",
          "Iron deficiency anemia"
        ],
        "correct": 3,
        "explanation": "Low ferritin indicates depleted iron stores."
      },
      {
        "tag": "Pulmonary",
        "text": "USMLE readiness check 77: Obstructive lung disease usually shows which spirometry pattern?",
        "choices": [
          "Decreased FEV1/FVC ratio",
          "Always increased DLCO",
          "Increased FEV1/FVC ratio",
          "Normal lung volumes only"
        ],
        "correct": 0,
        "explanation": "Airflow obstruction lowers FEV1 disproportionately to FVC."
      },
      {
        "tag": "Gastroenterology",
        "text": "USMLE readiness check 78: Painless jaundice with a pancreatic head mass most directly results from obstruction of what?",
        "choices": [
          "Left ureter",
          "Common bile duct",
          "Inferior vena cava only",
          "Left ureter"
        ],
        "correct": 1,
        "explanation": "A pancreatic head mass can compress the common bile duct and cause obstructive jaundice."
      },
      {
        "tag": "Reproductive",
        "text": "USMLE readiness check 79: Which hormone surge directly triggers ovulation?",
        "choices": [
          "Prolactin drop",
          "TSH surge",
          "LH surge",
          "Prolactin drop"
        ],
        "correct": 2,
        "explanation": "The mid-cycle LH surge triggers ovulation."
      },
      {
        "tag": "Musculoskeletal",
        "text": "USMLE readiness check 80: Which cell type primarily resorbs bone?",
        "choices": [
          "Chondrocyte",
          "Fibroblast",
          "Osteoblast",
          "Osteoclast"
        ],
        "correct": 3,
        "explanation": "Osteoclasts are multinucleated cells responsible for bone resorption."
      },
      {
        "tag": "Pathology",
        "text": "USMLE weak-area review 81: Caseating granulomas in lung tissue are most associated with which cell response?",
        "choices": [
          "Activated macrophages forming epithelioid cells",
          "Eosinophil degranulation only",
          "Platelet aggregation only",
          "Basophil histamine release only"
        ],
        "correct": 0,
        "explanation": "Granulomatous inflammation is driven by activated macrophages and T-cell mediated immunity."
      },
      {
        "tag": "Biostatistics",
        "text": "USMLE weak-area review 82: Which measure changes most with disease prevalence?",
        "choices": [
          "Sensitivity",
          "Positive predictive value",
          "Likelihood ratio positive",
          "Sensitivity"
        ],
        "correct": 1,
        "explanation": "Predictive values depend on prevalence; sensitivity and specificity are test characteristics."
      },
      {
        "tag": "Pharmacology",
        "text": "USMLE weak-area review 83: Which drug class may cause dry cough through bradykinin accumulation?",
        "choices": [
          "Thiazides",
          "Statins",
          "ACE inhibitors",
          "Thiazides"
        ],
        "correct": 2,
        "explanation": "ACE inhibitors decrease bradykinin breakdown, which can cause cough and angioedema."
      },
      {
        "tag": "Physiology",
        "text": "USMLE weak-area review 84: Which chamber ejects blood into the pulmonary artery?",
        "choices": [
          "Right atrium",
          "Left atrium",
          "Left ventricle",
          "Right ventricle"
        ],
        "correct": 3,
        "explanation": "The right ventricle pumps deoxygenated blood to the lungs through the pulmonary artery."
      },
      {
        "tag": "Microbiology",
        "text": "USMLE weak-area review 85: Gram-positive cocci in clusters most strongly suggest which organism group?",
        "choices": [
          "Staphylococcus species",
          "Neisseria species",
          "Vibrio species",
          "Streptococcus species"
        ],
        "correct": 0,
        "explanation": "Staphylococci classically appear as Gram-positive cocci in clusters."
      },
      {
        "tag": "Immunology",
        "text": "USMLE weak-area review 86: Which immunoglobulin is dominant in many mucosal secretions?",
        "choices": [
          "IgG",
          "IgA",
          "IgE",
          "IgG"
        ],
        "correct": 1,
        "explanation": "IgA is the major antibody in mucosal secretions such as saliva and breast milk."
      },
      {
        "tag": "Anatomy",
        "text": "USMLE weak-area review 87: Which nerve provides motor innervation to the diaphragm?",
        "choices": [
          "Hypoglossal nerve",
          "Vagus nerve",
          "Phrenic nerve",
          "Hypoglossal nerve"
        ],
        "correct": 2,
        "explanation": "The phrenic nerve arises from C3-C5 and drives diaphragm contraction."
      },
      {
        "tag": "Ethics",
        "text": "USMLE weak-area review 88: A capacitated patient refuses a recommended procedure. Which principle is most relevant?",
        "choices": [
          "Justice only",
          "Nonmaleficence only",
          "Confidentiality only",
          "Autonomy"
        ],
        "correct": 3,
        "explanation": "Patient autonomy supports the right to make informed decisions, including refusal."
      },
      {
        "tag": "Cardiology",
        "text": "USMLE weak-area review 89: Which change usually occurs when systemic vascular resistance acutely increases?",
        "choices": [
          "Afterload increases",
          "Oxygen content must double",
          "Afterload decreases",
          "Preload becomes zero"
        ],
        "correct": 0,
        "explanation": "Afterload reflects resistance the ventricle must overcome to eject blood."
      },
      {
        "tag": "Renal",
        "text": "USMLE weak-area review 90: Which nephron segment is impermeable to water and reabsorbs sodium, potassium, and chloride?",
        "choices": [
          "Thin descending limb",
          "Thick ascending limb",
          "Proximal tubule only",
          "Thin descending limb"
        ],
        "correct": 1,
        "explanation": "The thick ascending limb dilutes tubular fluid and reabsorbs Na-K-2Cl."
      },
      {
        "tag": "Endocrine",
        "text": "USMLE weak-area review 91: Which laboratory pattern is most consistent with primary hypothyroidism?",
        "choices": [
          "Low TSH with high T4",
          "High TSH with high T4",
          "High TSH with low free T4",
          "Low TSH with high T4"
        ],
        "correct": 2,
        "explanation": "Primary thyroid failure reduces T4 and increases pituitary TSH."
      },
      {
        "tag": "Neurology",
        "text": "USMLE weak-area review 92: Damage to the upper motor neuron pathway most commonly causes which finding?",
        "choices": [
          "Absent reflexes only",
          "Fasciculations as the primary finding",
          "Flaccid paralysis only",
          "Spasticity and hyperreflexia"
        ],
        "correct": 3,
        "explanation": "Upper motor neuron lesions often cause increased tone and reflexes."
      },
      {
        "tag": "Psychiatry",
        "text": "USMLE weak-area review 93: Which medication class is first-line maintenance therapy for bipolar disorder in many patients?",
        "choices": [
          "Mood stabilizers such as lithium",
          "Short-acting antibiotics",
          "Topical steroids only",
          "Antihistamines only"
        ],
        "correct": 0,
        "explanation": "Mood stabilizers are central in long-term bipolar disorder management."
      },
      {
        "tag": "Epidemiology",
        "text": "USMLE weak-area review 94: A study following exposed and unexposed groups over time is best described as what?",
        "choices": [
          "Case-control study",
          "Cohort study",
          "Case report",
          "Case-control study"
        ],
        "correct": 1,
        "explanation": "Cohort studies classify by exposure and follow outcomes over time."
      },
      {
        "tag": "Genetics",
        "text": "USMLE weak-area review 95: A disease appearing in every generation and affecting males and females equally suggests which inheritance pattern?",
        "choices": [
          "X-linked recessive only",
          "Autosomal recessive always",
          "Autosomal dominant",
          "X-linked recessive only"
        ],
        "correct": 2,
        "explanation": "Autosomal dominant conditions commonly show vertical transmission across generations."
      },
      {
        "tag": "Hematology",
        "text": "USMLE weak-area review 96: Microcytic anemia with low ferritin most strongly suggests what?",
        "choices": [
          "Acute hemolysis only",
          "Vitamin B12 deficiency",
          "Folate deficiency",
          "Iron deficiency anemia"
        ],
        "correct": 3,
        "explanation": "Low ferritin indicates depleted iron stores."
      },
      {
        "tag": "Pulmonary",
        "text": "USMLE weak-area review 97: Obstructive lung disease usually shows which spirometry pattern?",
        "choices": [
          "Decreased FEV1/FVC ratio",
          "Normal lung volumes only",
          "Always increased DLCO",
          "Increased FEV1/FVC ratio"
        ],
        "correct": 0,
        "explanation": "Airflow obstruction lowers FEV1 disproportionately to FVC."
      },
      {
        "tag": "Gastroenterology",
        "text": "USMLE weak-area review 98: Painless jaundice with a pancreatic head mass most directly results from obstruction of what?",
        "choices": [
          "Inferior vena cava only",
          "Common bile duct",
          "Splenic artery",
          "Inferior vena cava only"
        ],
        "correct": 1,
        "explanation": "A pancreatic head mass can compress the common bile duct and cause obstructive jaundice."
      },
      {
        "tag": "Reproductive",
        "text": "USMLE weak-area review 99: Which hormone surge directly triggers ovulation?",
        "choices": [
          "Cortisol nadir",
          "Prolactin drop",
          "LH surge",
          "Cortisol nadir"
        ],
        "correct": 2,
        "explanation": "The mid-cycle LH surge triggers ovulation."
      },
      {
        "tag": "Musculoskeletal",
        "text": "USMLE weak-area review 100: Which cell type primarily resorbs bone?",
        "choices": [
          "Osteoblast",
          "Chondrocyte",
          "Fibroblast",
          "Osteoclast"
        ],
        "correct": 3,
        "explanation": "Osteoclasts are multinucleated cells responsible for bone resorption."
      }
    ]
  },
  {
    "id": "uscpa",
    "track": "finance",
    "country": "United States",
    "region": "Accounting",
    "examType": "Finance & Accounting",
    "title": "USCPA财会",
    "subtitle": "美国CPA四科",
    "badge": "财会",
    "questionCount": 100,
    "updated": "2026",
    "source": "AICPA CPA exam blueprint",
    "coverage": [
      "FAR",
      "AUD",
      "REG",
      "ISC",
      "TBS simulations"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "FAR/AUD/REG/ISC 分科训练，加入TBS大题和手写板模拟思路。",
    "questions": [
      {
        "tag": "FAR",
        "text": "USCPA initial review 1: Which statement reports financial position at a point in time?",
        "choices": [
          "Balance sheet",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "The balance sheet reports assets, liabilities, and equity at a specific date."
      },
      {
        "tag": "AUD",
        "text": "USCPA initial review 2: Audit risk consists of inherent risk, control risk, and what other risk?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Detection risk",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Audit risk includes detection risk."
      },
      {
        "tag": "REG",
        "text": "USCPA initial review 3: Which entity is generally treated as a pass-through for federal income tax?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "S corporation",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "S corporations generally pass income through to shareholders."
      },
      {
        "tag": "ISC",
        "text": "USCPA initial review 4: Which control best supports authorized access to accounting systems?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Role-based access control"
        ],
        "correct": 3,
        "explanation": "Role-based access limits privileges according to job responsibilities."
      },
      {
        "tag": "FAR",
        "text": "USCPA initial review 5: Depreciation of equipment primarily allocates what?",
        "choices": [
          "Cost over useful life",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Depreciation systematically allocates depreciable cost over useful life."
      },
      {
        "tag": "AUD",
        "text": "USCPA initial review 6: External confirmations are especially useful for testing which assertion for receivables?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Existence",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Confirming with customers provides evidence that receivables exist."
      },
      {
        "tag": "Tax",
        "text": "USCPA initial review 7: A tax credit differs from a deduction because it directly reduces what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Tax liability",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Credits directly reduce tax due."
      },
      {
        "tag": "BEC",
        "text": "USCPA initial review 8: Which control activity separates custody of assets from recordkeeping?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Segregation of duties"
        ],
        "correct": 3,
        "explanation": "Segregation reduces opportunity for errors or fraud."
      },
      {
        "tag": "FAR",
        "text": "USCPA initial review 9: Revenue is generally recognized when which condition is met under the core model?",
        "choices": [
          "Performance obligation is satisfied",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Revenue recognition is tied to transfer of control."
      },
      {
        "tag": "AUD",
        "text": "USCPA initial review 10: Professional skepticism requires the auditor to do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Maintain a questioning mind and critically assess evidence",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Professional skepticism is central to audit evidence evaluation."
      },
      {
        "tag": "REG",
        "text": "USCPA initial review 11: Which filing status may apply to an unmarried taxpayer maintaining a home for a qualifying child?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Head of household",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Head of household may apply when statutory tests are met."
      },
      {
        "tag": "ISC",
        "text": "USCPA initial review 12: Which process helps recover systems after a disruption?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Disaster recovery planning"
        ],
        "correct": 3,
        "explanation": "Disaster recovery plans define technology restoration steps."
      },
      {
        "tag": "FAR",
        "text": "USCPA initial review 13: Which account is usually a current asset?",
        "choices": [
          "Accounts receivable",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Receivables expected within the operating cycle are current assets."
      },
      {
        "tag": "AUD",
        "text": "USCPA initial review 14: Which procedure tests whether recorded sales occurred?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Vouch sales entries to shipping and customer documents",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Vouching from records to source documents tests occurrence."
      },
      {
        "tag": "Cost accounting",
        "text": "USCPA initial review 15: A favorable variance generally indicates what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Actual results improved income relative to standard or budget",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Favorable variances increase income compared with expected results."
      },
      {
        "tag": "REG",
        "text": "USCPA initial review 16: Which contract defense may arise when one party lacked legal capacity?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Voidable contract by the protected party"
        ],
        "correct": 3,
        "explanation": "Lack of capacity can make a contract voidable."
      },
      {
        "tag": "FAR",
        "text": "USCPA initial review 17: Which lease classification generally records a right-of-use asset and lease liability?",
        "choices": [
          "Finance lease",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Finance leases are recognized on the balance sheet by lessees."
      },
      {
        "tag": "AUD",
        "text": "USCPA initial review 18: A material weakness relates to which area?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Internal control over financial reporting",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "A material weakness is a significant internal control deficiency."
      },
      {
        "tag": "Tax",
        "text": "USCPA initial review 19: Which item is generally included in gross income unless excluded?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Compensation for services",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Compensation for services is generally taxable income."
      },
      {
        "tag": "BEC",
        "text": "USCPA initial review 20: Which ratio measures ability to pay current liabilities with current assets?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Current ratio"
        ],
        "correct": 3,
        "explanation": "Current ratio equals current assets divided by current liabilities."
      },
      {
        "tag": "FAR",
        "text": "USCPA timed drill 21: Which statement reports financial position at a point in time?",
        "choices": [
          "Balance sheet",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "The balance sheet reports assets, liabilities, and equity at a specific date."
      },
      {
        "tag": "AUD",
        "text": "USCPA timed drill 22: Audit risk consists of inherent risk, control risk, and what other risk?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Detection risk",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Audit risk includes detection risk."
      },
      {
        "tag": "REG",
        "text": "USCPA timed drill 23: Which entity is generally treated as a pass-through for federal income tax?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "S corporation",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "S corporations generally pass income through to shareholders."
      },
      {
        "tag": "ISC",
        "text": "USCPA timed drill 24: Which control best supports authorized access to accounting systems?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Role-based access control"
        ],
        "correct": 3,
        "explanation": "Role-based access limits privileges according to job responsibilities."
      },
      {
        "tag": "FAR",
        "text": "USCPA timed drill 25: Depreciation of equipment primarily allocates what?",
        "choices": [
          "Cost over useful life",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Depreciation systematically allocates depreciable cost over useful life."
      },
      {
        "tag": "AUD",
        "text": "USCPA timed drill 26: External confirmations are especially useful for testing which assertion for receivables?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Existence",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Confirming with customers provides evidence that receivables exist."
      },
      {
        "tag": "Tax",
        "text": "USCPA timed drill 27: A tax credit differs from a deduction because it directly reduces what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Tax liability",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Credits directly reduce tax due."
      },
      {
        "tag": "BEC",
        "text": "USCPA timed drill 28: Which control activity separates custody of assets from recordkeeping?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Segregation of duties"
        ],
        "correct": 3,
        "explanation": "Segregation reduces opportunity for errors or fraud."
      },
      {
        "tag": "FAR",
        "text": "USCPA timed drill 29: Revenue is generally recognized when which condition is met under the core model?",
        "choices": [
          "Performance obligation is satisfied",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Revenue recognition is tied to transfer of control."
      },
      {
        "tag": "AUD",
        "text": "USCPA timed drill 30: Professional skepticism requires the auditor to do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Maintain a questioning mind and critically assess evidence",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Professional skepticism is central to audit evidence evaluation."
      },
      {
        "tag": "REG",
        "text": "USCPA timed drill 31: Which filing status may apply to an unmarried taxpayer maintaining a home for a qualifying child?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Head of household",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Head of household may apply when statutory tests are met."
      },
      {
        "tag": "ISC",
        "text": "USCPA timed drill 32: Which process helps recover systems after a disruption?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Disaster recovery planning"
        ],
        "correct": 3,
        "explanation": "Disaster recovery plans define technology restoration steps."
      },
      {
        "tag": "FAR",
        "text": "USCPA timed drill 33: Which account is usually a current asset?",
        "choices": [
          "Accounts receivable",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Receivables expected within the operating cycle are current assets."
      },
      {
        "tag": "AUD",
        "text": "USCPA timed drill 34: Which procedure tests whether recorded sales occurred?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Vouch sales entries to shipping and customer documents",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Vouching from records to source documents tests occurrence."
      },
      {
        "tag": "Cost accounting",
        "text": "USCPA timed drill 35: A favorable variance generally indicates what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Actual results improved income relative to standard or budget",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Favorable variances increase income compared with expected results."
      },
      {
        "tag": "REG",
        "text": "USCPA timed drill 36: Which contract defense may arise when one party lacked legal capacity?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Voidable contract by the protected party"
        ],
        "correct": 3,
        "explanation": "Lack of capacity can make a contract voidable."
      },
      {
        "tag": "FAR",
        "text": "USCPA timed drill 37: Which lease classification generally records a right-of-use asset and lease liability?",
        "choices": [
          "Finance lease",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Finance leases are recognized on the balance sheet by lessees."
      },
      {
        "tag": "AUD",
        "text": "USCPA timed drill 38: A material weakness relates to which area?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Internal control over financial reporting",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "A material weakness is a significant internal control deficiency."
      },
      {
        "tag": "Tax",
        "text": "USCPA timed drill 39: Which item is generally included in gross income unless excluded?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Compensation for services",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Compensation for services is generally taxable income."
      },
      {
        "tag": "BEC",
        "text": "USCPA timed drill 40: Which ratio measures ability to pay current liabilities with current assets?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Current ratio"
        ],
        "correct": 3,
        "explanation": "Current ratio equals current assets divided by current liabilities."
      },
      {
        "tag": "FAR",
        "text": "USCPA case analysis 41: Which statement reports financial position at a point in time?",
        "choices": [
          "Balance sheet",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "The balance sheet reports assets, liabilities, and equity at a specific date."
      },
      {
        "tag": "AUD",
        "text": "USCPA case analysis 42: Audit risk consists of inherent risk, control risk, and what other risk?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Detection risk",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Audit risk includes detection risk."
      },
      {
        "tag": "REG",
        "text": "USCPA case analysis 43: Which entity is generally treated as a pass-through for federal income tax?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "S corporation",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "S corporations generally pass income through to shareholders."
      },
      {
        "tag": "ISC",
        "text": "USCPA case analysis 44: Which control best supports authorized access to accounting systems?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Role-based access control"
        ],
        "correct": 3,
        "explanation": "Role-based access limits privileges according to job responsibilities."
      },
      {
        "tag": "FAR",
        "text": "USCPA case analysis 45: Depreciation of equipment primarily allocates what?",
        "choices": [
          "Cost over useful life",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Depreciation systematically allocates depreciable cost over useful life."
      },
      {
        "tag": "AUD",
        "text": "USCPA case analysis 46: External confirmations are especially useful for testing which assertion for receivables?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Existence",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Confirming with customers provides evidence that receivables exist."
      },
      {
        "tag": "Tax",
        "text": "USCPA case analysis 47: A tax credit differs from a deduction because it directly reduces what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Tax liability",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Credits directly reduce tax due."
      },
      {
        "tag": "BEC",
        "text": "USCPA case analysis 48: Which control activity separates custody of assets from recordkeeping?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Segregation of duties"
        ],
        "correct": 3,
        "explanation": "Segregation reduces opportunity for errors or fraud."
      },
      {
        "tag": "FAR",
        "text": "USCPA case analysis 49: Revenue is generally recognized when which condition is met under the core model?",
        "choices": [
          "Performance obligation is satisfied",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Revenue recognition is tied to transfer of control."
      },
      {
        "tag": "AUD",
        "text": "USCPA case analysis 50: Professional skepticism requires the auditor to do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Maintain a questioning mind and critically assess evidence",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Professional skepticism is central to audit evidence evaluation."
      },
      {
        "tag": "REG",
        "text": "USCPA case analysis 51: Which filing status may apply to an unmarried taxpayer maintaining a home for a qualifying child?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Head of household",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Head of household may apply when statutory tests are met."
      },
      {
        "tag": "ISC",
        "text": "USCPA case analysis 52: Which process helps recover systems after a disruption?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Disaster recovery planning"
        ],
        "correct": 3,
        "explanation": "Disaster recovery plans define technology restoration steps."
      },
      {
        "tag": "FAR",
        "text": "USCPA case analysis 53: Which account is usually a current asset?",
        "choices": [
          "Accounts receivable",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Receivables expected within the operating cycle are current assets."
      },
      {
        "tag": "AUD",
        "text": "USCPA case analysis 54: Which procedure tests whether recorded sales occurred?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Vouch sales entries to shipping and customer documents",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Vouching from records to source documents tests occurrence."
      },
      {
        "tag": "Cost accounting",
        "text": "USCPA case analysis 55: A favorable variance generally indicates what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Actual results improved income relative to standard or budget",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Favorable variances increase income compared with expected results."
      },
      {
        "tag": "REG",
        "text": "USCPA case analysis 56: Which contract defense may arise when one party lacked legal capacity?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Voidable contract by the protected party"
        ],
        "correct": 3,
        "explanation": "Lack of capacity can make a contract voidable."
      },
      {
        "tag": "FAR",
        "text": "USCPA case analysis 57: Which lease classification generally records a right-of-use asset and lease liability?",
        "choices": [
          "Finance lease",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Finance leases are recognized on the balance sheet by lessees."
      },
      {
        "tag": "AUD",
        "text": "USCPA case analysis 58: A material weakness relates to which area?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Internal control over financial reporting",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "A material weakness is a significant internal control deficiency."
      },
      {
        "tag": "Tax",
        "text": "USCPA case analysis 59: Which item is generally included in gross income unless excluded?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Compensation for services",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Compensation for services is generally taxable income."
      },
      {
        "tag": "BEC",
        "text": "USCPA case analysis 60: Which ratio measures ability to pay current liabilities with current assets?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Current ratio"
        ],
        "correct": 3,
        "explanation": "Current ratio equals current assets divided by current liabilities."
      },
      {
        "tag": "FAR",
        "text": "USCPA readiness check 61: Which statement reports financial position at a point in time?",
        "choices": [
          "Balance sheet",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "The balance sheet reports assets, liabilities, and equity at a specific date."
      },
      {
        "tag": "AUD",
        "text": "USCPA readiness check 62: Audit risk consists of inherent risk, control risk, and what other risk?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Detection risk",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Audit risk includes detection risk."
      },
      {
        "tag": "REG",
        "text": "USCPA readiness check 63: Which entity is generally treated as a pass-through for federal income tax?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "S corporation",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "S corporations generally pass income through to shareholders."
      },
      {
        "tag": "ISC",
        "text": "USCPA readiness check 64: Which control best supports authorized access to accounting systems?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Role-based access control"
        ],
        "correct": 3,
        "explanation": "Role-based access limits privileges according to job responsibilities."
      },
      {
        "tag": "FAR",
        "text": "USCPA readiness check 65: Depreciation of equipment primarily allocates what?",
        "choices": [
          "Cost over useful life",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Depreciation systematically allocates depreciable cost over useful life."
      },
      {
        "tag": "AUD",
        "text": "USCPA readiness check 66: External confirmations are especially useful for testing which assertion for receivables?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Existence",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Confirming with customers provides evidence that receivables exist."
      },
      {
        "tag": "Tax",
        "text": "USCPA readiness check 67: A tax credit differs from a deduction because it directly reduces what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Tax liability",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Credits directly reduce tax due."
      },
      {
        "tag": "BEC",
        "text": "USCPA readiness check 68: Which control activity separates custody of assets from recordkeeping?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Segregation of duties"
        ],
        "correct": 3,
        "explanation": "Segregation reduces opportunity for errors or fraud."
      },
      {
        "tag": "FAR",
        "text": "USCPA readiness check 69: Revenue is generally recognized when which condition is met under the core model?",
        "choices": [
          "Performance obligation is satisfied",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Revenue recognition is tied to transfer of control."
      },
      {
        "tag": "AUD",
        "text": "USCPA readiness check 70: Professional skepticism requires the auditor to do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Maintain a questioning mind and critically assess evidence",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Professional skepticism is central to audit evidence evaluation."
      },
      {
        "tag": "REG",
        "text": "USCPA readiness check 71: Which filing status may apply to an unmarried taxpayer maintaining a home for a qualifying child?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Head of household",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Head of household may apply when statutory tests are met."
      },
      {
        "tag": "ISC",
        "text": "USCPA readiness check 72: Which process helps recover systems after a disruption?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Disaster recovery planning"
        ],
        "correct": 3,
        "explanation": "Disaster recovery plans define technology restoration steps."
      },
      {
        "tag": "FAR",
        "text": "USCPA readiness check 73: Which account is usually a current asset?",
        "choices": [
          "Accounts receivable",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Receivables expected within the operating cycle are current assets."
      },
      {
        "tag": "AUD",
        "text": "USCPA readiness check 74: Which procedure tests whether recorded sales occurred?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Vouch sales entries to shipping and customer documents",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Vouching from records to source documents tests occurrence."
      },
      {
        "tag": "Cost accounting",
        "text": "USCPA readiness check 75: A favorable variance generally indicates what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Actual results improved income relative to standard or budget",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Favorable variances increase income compared with expected results."
      },
      {
        "tag": "REG",
        "text": "USCPA readiness check 76: Which contract defense may arise when one party lacked legal capacity?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Voidable contract by the protected party"
        ],
        "correct": 3,
        "explanation": "Lack of capacity can make a contract voidable."
      },
      {
        "tag": "FAR",
        "text": "USCPA readiness check 77: Which lease classification generally records a right-of-use asset and lease liability?",
        "choices": [
          "Finance lease",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Finance leases are recognized on the balance sheet by lessees."
      },
      {
        "tag": "AUD",
        "text": "USCPA readiness check 78: A material weakness relates to which area?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Internal control over financial reporting",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "A material weakness is a significant internal control deficiency."
      },
      {
        "tag": "Tax",
        "text": "USCPA readiness check 79: Which item is generally included in gross income unless excluded?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Compensation for services",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Compensation for services is generally taxable income."
      },
      {
        "tag": "BEC",
        "text": "USCPA readiness check 80: Which ratio measures ability to pay current liabilities with current assets?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Current ratio"
        ],
        "correct": 3,
        "explanation": "Current ratio equals current assets divided by current liabilities."
      },
      {
        "tag": "FAR",
        "text": "USCPA weak-area review 81: Which statement reports financial position at a point in time?",
        "choices": [
          "Balance sheet",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "The balance sheet reports assets, liabilities, and equity at a specific date."
      },
      {
        "tag": "AUD",
        "text": "USCPA weak-area review 82: Audit risk consists of inherent risk, control risk, and what other risk?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Detection risk",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Audit risk includes detection risk."
      },
      {
        "tag": "REG",
        "text": "USCPA weak-area review 83: Which entity is generally treated as a pass-through for federal income tax?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "S corporation",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "S corporations generally pass income through to shareholders."
      },
      {
        "tag": "ISC",
        "text": "USCPA weak-area review 84: Which control best supports authorized access to accounting systems?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Role-based access control"
        ],
        "correct": 3,
        "explanation": "Role-based access limits privileges according to job responsibilities."
      },
      {
        "tag": "FAR",
        "text": "USCPA weak-area review 85: Depreciation of equipment primarily allocates what?",
        "choices": [
          "Cost over useful life",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Depreciation systematically allocates depreciable cost over useful life."
      },
      {
        "tag": "AUD",
        "text": "USCPA weak-area review 86: External confirmations are especially useful for testing which assertion for receivables?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Existence",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Confirming with customers provides evidence that receivables exist."
      },
      {
        "tag": "Tax",
        "text": "USCPA weak-area review 87: A tax credit differs from a deduction because it directly reduces what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Tax liability",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Credits directly reduce tax due."
      },
      {
        "tag": "BEC",
        "text": "USCPA weak-area review 88: Which control activity separates custody of assets from recordkeeping?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Segregation of duties"
        ],
        "correct": 3,
        "explanation": "Segregation reduces opportunity for errors or fraud."
      },
      {
        "tag": "FAR",
        "text": "USCPA weak-area review 89: Revenue is generally recognized when which condition is met under the core model?",
        "choices": [
          "Performance obligation is satisfied",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Revenue recognition is tied to transfer of control."
      },
      {
        "tag": "AUD",
        "text": "USCPA weak-area review 90: Professional skepticism requires the auditor to do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Maintain a questioning mind and critically assess evidence",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Professional skepticism is central to audit evidence evaluation."
      },
      {
        "tag": "REG",
        "text": "USCPA weak-area review 91: Which filing status may apply to an unmarried taxpayer maintaining a home for a qualifying child?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Head of household",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Head of household may apply when statutory tests are met."
      },
      {
        "tag": "ISC",
        "text": "USCPA weak-area review 92: Which process helps recover systems after a disruption?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Disaster recovery planning"
        ],
        "correct": 3,
        "explanation": "Disaster recovery plans define technology restoration steps."
      },
      {
        "tag": "FAR",
        "text": "USCPA weak-area review 93: Which account is usually a current asset?",
        "choices": [
          "Accounts receivable",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Receivables expected within the operating cycle are current assets."
      },
      {
        "tag": "AUD",
        "text": "USCPA weak-area review 94: Which procedure tests whether recorded sales occurred?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Vouch sales entries to shipping and customer documents",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Vouching from records to source documents tests occurrence."
      },
      {
        "tag": "Cost accounting",
        "text": "USCPA weak-area review 95: A favorable variance generally indicates what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Actual results improved income relative to standard or budget",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Favorable variances increase income compared with expected results."
      },
      {
        "tag": "REG",
        "text": "USCPA weak-area review 96: Which contract defense may arise when one party lacked legal capacity?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Voidable contract by the protected party"
        ],
        "correct": 3,
        "explanation": "Lack of capacity can make a contract voidable."
      },
      {
        "tag": "FAR",
        "text": "USCPA weak-area review 97: Which lease classification generally records a right-of-use asset and lease liability?",
        "choices": [
          "Finance lease",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Finance leases are recognized on the balance sheet by lessees."
      },
      {
        "tag": "AUD",
        "text": "USCPA weak-area review 98: A material weakness relates to which area?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Internal control over financial reporting",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "A material weakness is a significant internal control deficiency."
      },
      {
        "tag": "Tax",
        "text": "USCPA weak-area review 99: Which item is generally included in gross income unless excluded?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Compensation for services",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Compensation for services is generally taxable income."
      },
      {
        "tag": "BEC",
        "text": "USCPA weak-area review 100: Which ratio measures ability to pay current liabilities with current assets?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Current ratio"
        ],
        "correct": 3,
        "explanation": "Current ratio equals current assets divided by current liabilities."
      }
    ]
  },
  {
    "id": "cfa",
    "track": "finance",
    "country": "Global",
    "region": "Investment",
    "examType": "Finance & Accounting",
    "title": "CFA金融圈",
    "subtitle": "CFA一级/二级/三级",
    "badge": "金融",
    "questionCount": 100,
    "updated": "2026",
    "source": "CFA program curriculum",
    "coverage": [
      "Ethics",
      "Quant",
      "Portfolio",
      "Equity",
      "Fixed income"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "公式表在线查询、限时训练、打卡抱团班式刷题路径。",
    "questions": [
      {
        "tag": "Ethics",
        "text": "CFA initial review 1: Which action best supports fair dealing with clients?",
        "choices": [
          "Disseminate investment recommendations fairly to clients",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Fair dealing requires equitable treatment."
      },
      {
        "tag": "Quant",
        "text": "CFA initial review 2: About what percentage of normal observations falls within one standard deviation?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "68%",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "The empirical rule says about 68%."
      },
      {
        "tag": "Fixed income",
        "text": "CFA initial review 3: When market yields rise, a plain vanilla bond price generally does what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Falls",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Bond prices and yields move inversely."
      },
      {
        "tag": "Portfolio",
        "text": "CFA initial review 4: Diversification primarily reduces which risk?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Unsystematic risk"
        ],
        "correct": 3,
        "explanation": "Diversification reduces asset-specific risk."
      },
      {
        "tag": "Equity",
        "text": "CFA initial review 5: A price-to-earnings ratio compares price with what?",
        "choices": [
          "Earnings per share",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "P/E equals price per share divided by EPS."
      },
      {
        "tag": "Derivatives",
        "text": "CFA initial review 6: A call option gives the holder the right to do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Buy the underlying asset",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "A call gives the right to buy."
      },
      {
        "tag": "Economics",
        "text": "CFA initial review 7: A binding price ceiling below equilibrium typically creates what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Shortage",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Quantity demanded exceeds quantity supplied."
      },
      {
        "tag": "Financial reporting",
        "text": "CFA initial review 8: Which ratio is most tied to short-term liquidity?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Current ratio"
        ],
        "correct": 3,
        "explanation": "Current ratio compares current assets with current liabilities."
      },
      {
        "tag": "Corporate issuers",
        "text": "CFA initial review 9: Net present value is positive when present value of benefits exceeds what?",
        "choices": [
          "Present value of costs",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Positive NPV indicates value creation."
      },
      {
        "tag": "Alternative investments",
        "text": "CFA initial review 10: Real estate income approach focuses on what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Expected income generated by the property",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "The income approach discounts or capitalizes expected income."
      },
      {
        "tag": "Ethics",
        "text": "CFA initial review 11: Which conduct best protects independence and objectivity?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Disclose conflicts and avoid improper influence",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Conflicts should be disclosed and managed."
      },
      {
        "tag": "Quant",
        "text": "CFA initial review 12: Standard deviation primarily measures what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Dispersion around the mean"
        ],
        "correct": 3,
        "explanation": "Standard deviation measures variability."
      },
      {
        "tag": "Fixed income",
        "text": "CFA initial review 13: Duration is most closely related to bond sensitivity to what?",
        "choices": [
          "Interest rate changes",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Duration approximates price sensitivity to yield changes."
      },
      {
        "tag": "Portfolio",
        "text": "CFA initial review 14: The capital market line uses the risk-free asset and which portfolio?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Market portfolio",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "The CML combines the risk-free asset and market portfolio."
      },
      {
        "tag": "Derivatives",
        "text": "CFA initial review 15: A forward contract is typically what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Customized and traded over the counter",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Forwards are OTC and customizable."
      },
      {
        "tag": "Economics",
        "text": "CFA initial review 16: If demand increases while supply is unchanged, equilibrium price usually does what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Rises"
        ],
        "correct": 3,
        "explanation": "A rightward demand shift raises equilibrium price."
      },
      {
        "tag": "Financial reporting",
        "text": "CFA initial review 17: Inventory turnover is COGS divided by what?",
        "choices": [
          "Average inventory",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Inventory turnover measures how often inventory is sold and replaced."
      },
      {
        "tag": "Corporate issuers",
        "text": "CFA initial review 18: WACC is often used as what in capital budgeting?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "A discount rate for projects with similar risk",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "WACC discounts cash flows of similar-risk projects."
      },
      {
        "tag": "Alternative investments",
        "text": "CFA initial review 19: Hedge funds may differ from mutual funds by using what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Greater leverage and flexible strategies",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Hedge funds may use leverage and shorting."
      },
      {
        "tag": "Equity",
        "text": "CFA initial review 20: Higher expected dividends generally do what to dividend discount value?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Increase value"
        ],
        "correct": 3,
        "explanation": "Higher expected cash flows increase estimated value."
      },
      {
        "tag": "Ethics",
        "text": "CFA timed drill 21: Which action best supports fair dealing with clients?",
        "choices": [
          "Disseminate investment recommendations fairly to clients",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Fair dealing requires equitable treatment."
      },
      {
        "tag": "Quant",
        "text": "CFA timed drill 22: About what percentage of normal observations falls within one standard deviation?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "68%",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "The empirical rule says about 68%."
      },
      {
        "tag": "Fixed income",
        "text": "CFA timed drill 23: When market yields rise, a plain vanilla bond price generally does what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Falls",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Bond prices and yields move inversely."
      },
      {
        "tag": "Portfolio",
        "text": "CFA timed drill 24: Diversification primarily reduces which risk?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Unsystematic risk"
        ],
        "correct": 3,
        "explanation": "Diversification reduces asset-specific risk."
      },
      {
        "tag": "Equity",
        "text": "CFA timed drill 25: A price-to-earnings ratio compares price with what?",
        "choices": [
          "Earnings per share",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "P/E equals price per share divided by EPS."
      },
      {
        "tag": "Derivatives",
        "text": "CFA timed drill 26: A call option gives the holder the right to do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Buy the underlying asset",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "A call gives the right to buy."
      },
      {
        "tag": "Economics",
        "text": "CFA timed drill 27: A binding price ceiling below equilibrium typically creates what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Shortage",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Quantity demanded exceeds quantity supplied."
      },
      {
        "tag": "Financial reporting",
        "text": "CFA timed drill 28: Which ratio is most tied to short-term liquidity?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Current ratio"
        ],
        "correct": 3,
        "explanation": "Current ratio compares current assets with current liabilities."
      },
      {
        "tag": "Corporate issuers",
        "text": "CFA timed drill 29: Net present value is positive when present value of benefits exceeds what?",
        "choices": [
          "Present value of costs",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Positive NPV indicates value creation."
      },
      {
        "tag": "Alternative investments",
        "text": "CFA timed drill 30: Real estate income approach focuses on what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Expected income generated by the property",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "The income approach discounts or capitalizes expected income."
      },
      {
        "tag": "Ethics",
        "text": "CFA timed drill 31: Which conduct best protects independence and objectivity?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Disclose conflicts and avoid improper influence",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Conflicts should be disclosed and managed."
      },
      {
        "tag": "Quant",
        "text": "CFA timed drill 32: Standard deviation primarily measures what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Dispersion around the mean"
        ],
        "correct": 3,
        "explanation": "Standard deviation measures variability."
      },
      {
        "tag": "Fixed income",
        "text": "CFA timed drill 33: Duration is most closely related to bond sensitivity to what?",
        "choices": [
          "Interest rate changes",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Duration approximates price sensitivity to yield changes."
      },
      {
        "tag": "Portfolio",
        "text": "CFA timed drill 34: The capital market line uses the risk-free asset and which portfolio?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Market portfolio",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "The CML combines the risk-free asset and market portfolio."
      },
      {
        "tag": "Derivatives",
        "text": "CFA timed drill 35: A forward contract is typically what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Customized and traded over the counter",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Forwards are OTC and customizable."
      },
      {
        "tag": "Economics",
        "text": "CFA timed drill 36: If demand increases while supply is unchanged, equilibrium price usually does what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Rises"
        ],
        "correct": 3,
        "explanation": "A rightward demand shift raises equilibrium price."
      },
      {
        "tag": "Financial reporting",
        "text": "CFA timed drill 37: Inventory turnover is COGS divided by what?",
        "choices": [
          "Average inventory",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Inventory turnover measures how often inventory is sold and replaced."
      },
      {
        "tag": "Corporate issuers",
        "text": "CFA timed drill 38: WACC is often used as what in capital budgeting?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "A discount rate for projects with similar risk",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "WACC discounts cash flows of similar-risk projects."
      },
      {
        "tag": "Alternative investments",
        "text": "CFA timed drill 39: Hedge funds may differ from mutual funds by using what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Greater leverage and flexible strategies",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Hedge funds may use leverage and shorting."
      },
      {
        "tag": "Equity",
        "text": "CFA timed drill 40: Higher expected dividends generally do what to dividend discount value?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Increase value"
        ],
        "correct": 3,
        "explanation": "Higher expected cash flows increase estimated value."
      },
      {
        "tag": "Ethics",
        "text": "CFA case analysis 41: Which action best supports fair dealing with clients?",
        "choices": [
          "Disseminate investment recommendations fairly to clients",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Fair dealing requires equitable treatment."
      },
      {
        "tag": "Quant",
        "text": "CFA case analysis 42: About what percentage of normal observations falls within one standard deviation?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "68%",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "The empirical rule says about 68%."
      },
      {
        "tag": "Fixed income",
        "text": "CFA case analysis 43: When market yields rise, a plain vanilla bond price generally does what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Falls",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Bond prices and yields move inversely."
      },
      {
        "tag": "Portfolio",
        "text": "CFA case analysis 44: Diversification primarily reduces which risk?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Unsystematic risk"
        ],
        "correct": 3,
        "explanation": "Diversification reduces asset-specific risk."
      },
      {
        "tag": "Equity",
        "text": "CFA case analysis 45: A price-to-earnings ratio compares price with what?",
        "choices": [
          "Earnings per share",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "P/E equals price per share divided by EPS."
      },
      {
        "tag": "Derivatives",
        "text": "CFA case analysis 46: A call option gives the holder the right to do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Buy the underlying asset",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "A call gives the right to buy."
      },
      {
        "tag": "Economics",
        "text": "CFA case analysis 47: A binding price ceiling below equilibrium typically creates what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Shortage",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Quantity demanded exceeds quantity supplied."
      },
      {
        "tag": "Financial reporting",
        "text": "CFA case analysis 48: Which ratio is most tied to short-term liquidity?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Current ratio"
        ],
        "correct": 3,
        "explanation": "Current ratio compares current assets with current liabilities."
      },
      {
        "tag": "Corporate issuers",
        "text": "CFA case analysis 49: Net present value is positive when present value of benefits exceeds what?",
        "choices": [
          "Present value of costs",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Positive NPV indicates value creation."
      },
      {
        "tag": "Alternative investments",
        "text": "CFA case analysis 50: Real estate income approach focuses on what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Expected income generated by the property",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "The income approach discounts or capitalizes expected income."
      },
      {
        "tag": "Ethics",
        "text": "CFA case analysis 51: Which conduct best protects independence and objectivity?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Disclose conflicts and avoid improper influence",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Conflicts should be disclosed and managed."
      },
      {
        "tag": "Quant",
        "text": "CFA case analysis 52: Standard deviation primarily measures what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Dispersion around the mean"
        ],
        "correct": 3,
        "explanation": "Standard deviation measures variability."
      },
      {
        "tag": "Fixed income",
        "text": "CFA case analysis 53: Duration is most closely related to bond sensitivity to what?",
        "choices": [
          "Interest rate changes",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Duration approximates price sensitivity to yield changes."
      },
      {
        "tag": "Portfolio",
        "text": "CFA case analysis 54: The capital market line uses the risk-free asset and which portfolio?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Market portfolio",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "The CML combines the risk-free asset and market portfolio."
      },
      {
        "tag": "Derivatives",
        "text": "CFA case analysis 55: A forward contract is typically what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Customized and traded over the counter",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Forwards are OTC and customizable."
      },
      {
        "tag": "Economics",
        "text": "CFA case analysis 56: If demand increases while supply is unchanged, equilibrium price usually does what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Rises"
        ],
        "correct": 3,
        "explanation": "A rightward demand shift raises equilibrium price."
      },
      {
        "tag": "Financial reporting",
        "text": "CFA case analysis 57: Inventory turnover is COGS divided by what?",
        "choices": [
          "Average inventory",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Inventory turnover measures how often inventory is sold and replaced."
      },
      {
        "tag": "Corporate issuers",
        "text": "CFA case analysis 58: WACC is often used as what in capital budgeting?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "A discount rate for projects with similar risk",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "WACC discounts cash flows of similar-risk projects."
      },
      {
        "tag": "Alternative investments",
        "text": "CFA case analysis 59: Hedge funds may differ from mutual funds by using what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Greater leverage and flexible strategies",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Hedge funds may use leverage and shorting."
      },
      {
        "tag": "Equity",
        "text": "CFA case analysis 60: Higher expected dividends generally do what to dividend discount value?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Increase value"
        ],
        "correct": 3,
        "explanation": "Higher expected cash flows increase estimated value."
      },
      {
        "tag": "Ethics",
        "text": "CFA readiness check 61: Which action best supports fair dealing with clients?",
        "choices": [
          "Disseminate investment recommendations fairly to clients",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Fair dealing requires equitable treatment."
      },
      {
        "tag": "Quant",
        "text": "CFA readiness check 62: About what percentage of normal observations falls within one standard deviation?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "68%",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "The empirical rule says about 68%."
      },
      {
        "tag": "Fixed income",
        "text": "CFA readiness check 63: When market yields rise, a plain vanilla bond price generally does what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Falls",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Bond prices and yields move inversely."
      },
      {
        "tag": "Portfolio",
        "text": "CFA readiness check 64: Diversification primarily reduces which risk?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Unsystematic risk"
        ],
        "correct": 3,
        "explanation": "Diversification reduces asset-specific risk."
      },
      {
        "tag": "Equity",
        "text": "CFA readiness check 65: A price-to-earnings ratio compares price with what?",
        "choices": [
          "Earnings per share",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "P/E equals price per share divided by EPS."
      },
      {
        "tag": "Derivatives",
        "text": "CFA readiness check 66: A call option gives the holder the right to do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Buy the underlying asset",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "A call gives the right to buy."
      },
      {
        "tag": "Economics",
        "text": "CFA readiness check 67: A binding price ceiling below equilibrium typically creates what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Shortage",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Quantity demanded exceeds quantity supplied."
      },
      {
        "tag": "Financial reporting",
        "text": "CFA readiness check 68: Which ratio is most tied to short-term liquidity?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Current ratio"
        ],
        "correct": 3,
        "explanation": "Current ratio compares current assets with current liabilities."
      },
      {
        "tag": "Corporate issuers",
        "text": "CFA readiness check 69: Net present value is positive when present value of benefits exceeds what?",
        "choices": [
          "Present value of costs",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Positive NPV indicates value creation."
      },
      {
        "tag": "Alternative investments",
        "text": "CFA readiness check 70: Real estate income approach focuses on what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Expected income generated by the property",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "The income approach discounts or capitalizes expected income."
      },
      {
        "tag": "Ethics",
        "text": "CFA readiness check 71: Which conduct best protects independence and objectivity?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Disclose conflicts and avoid improper influence",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Conflicts should be disclosed and managed."
      },
      {
        "tag": "Quant",
        "text": "CFA readiness check 72: Standard deviation primarily measures what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Dispersion around the mean"
        ],
        "correct": 3,
        "explanation": "Standard deviation measures variability."
      },
      {
        "tag": "Fixed income",
        "text": "CFA readiness check 73: Duration is most closely related to bond sensitivity to what?",
        "choices": [
          "Interest rate changes",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Duration approximates price sensitivity to yield changes."
      },
      {
        "tag": "Portfolio",
        "text": "CFA readiness check 74: The capital market line uses the risk-free asset and which portfolio?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Market portfolio",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "The CML combines the risk-free asset and market portfolio."
      },
      {
        "tag": "Derivatives",
        "text": "CFA readiness check 75: A forward contract is typically what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Customized and traded over the counter",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Forwards are OTC and customizable."
      },
      {
        "tag": "Economics",
        "text": "CFA readiness check 76: If demand increases while supply is unchanged, equilibrium price usually does what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Rises"
        ],
        "correct": 3,
        "explanation": "A rightward demand shift raises equilibrium price."
      },
      {
        "tag": "Financial reporting",
        "text": "CFA readiness check 77: Inventory turnover is COGS divided by what?",
        "choices": [
          "Average inventory",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Inventory turnover measures how often inventory is sold and replaced."
      },
      {
        "tag": "Corporate issuers",
        "text": "CFA readiness check 78: WACC is often used as what in capital budgeting?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "A discount rate for projects with similar risk",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "WACC discounts cash flows of similar-risk projects."
      },
      {
        "tag": "Alternative investments",
        "text": "CFA readiness check 79: Hedge funds may differ from mutual funds by using what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Greater leverage and flexible strategies",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Hedge funds may use leverage and shorting."
      },
      {
        "tag": "Equity",
        "text": "CFA readiness check 80: Higher expected dividends generally do what to dividend discount value?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Increase value"
        ],
        "correct": 3,
        "explanation": "Higher expected cash flows increase estimated value."
      },
      {
        "tag": "Ethics",
        "text": "CFA weak-area review 81: Which action best supports fair dealing with clients?",
        "choices": [
          "Disseminate investment recommendations fairly to clients",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Fair dealing requires equitable treatment."
      },
      {
        "tag": "Quant",
        "text": "CFA weak-area review 82: About what percentage of normal observations falls within one standard deviation?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "68%",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "The empirical rule says about 68%."
      },
      {
        "tag": "Fixed income",
        "text": "CFA weak-area review 83: When market yields rise, a plain vanilla bond price generally does what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Falls",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Bond prices and yields move inversely."
      },
      {
        "tag": "Portfolio",
        "text": "CFA weak-area review 84: Diversification primarily reduces which risk?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Unsystematic risk"
        ],
        "correct": 3,
        "explanation": "Diversification reduces asset-specific risk."
      },
      {
        "tag": "Equity",
        "text": "CFA weak-area review 85: A price-to-earnings ratio compares price with what?",
        "choices": [
          "Earnings per share",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "P/E equals price per share divided by EPS."
      },
      {
        "tag": "Derivatives",
        "text": "CFA weak-area review 86: A call option gives the holder the right to do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Buy the underlying asset",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "A call gives the right to buy."
      },
      {
        "tag": "Economics",
        "text": "CFA weak-area review 87: A binding price ceiling below equilibrium typically creates what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Shortage",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Quantity demanded exceeds quantity supplied."
      },
      {
        "tag": "Financial reporting",
        "text": "CFA weak-area review 88: Which ratio is most tied to short-term liquidity?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Current ratio"
        ],
        "correct": 3,
        "explanation": "Current ratio compares current assets with current liabilities."
      },
      {
        "tag": "Corporate issuers",
        "text": "CFA weak-area review 89: Net present value is positive when present value of benefits exceeds what?",
        "choices": [
          "Present value of costs",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Positive NPV indicates value creation."
      },
      {
        "tag": "Alternative investments",
        "text": "CFA weak-area review 90: Real estate income approach focuses on what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Expected income generated by the property",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "The income approach discounts or capitalizes expected income."
      },
      {
        "tag": "Ethics",
        "text": "CFA weak-area review 91: Which conduct best protects independence and objectivity?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Disclose conflicts and avoid improper influence",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Conflicts should be disclosed and managed."
      },
      {
        "tag": "Quant",
        "text": "CFA weak-area review 92: Standard deviation primarily measures what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Dispersion around the mean"
        ],
        "correct": 3,
        "explanation": "Standard deviation measures variability."
      },
      {
        "tag": "Fixed income",
        "text": "CFA weak-area review 93: Duration is most closely related to bond sensitivity to what?",
        "choices": [
          "Interest rate changes",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Duration approximates price sensitivity to yield changes."
      },
      {
        "tag": "Portfolio",
        "text": "CFA weak-area review 94: The capital market line uses the risk-free asset and which portfolio?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Market portfolio",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "The CML combines the risk-free asset and market portfolio."
      },
      {
        "tag": "Derivatives",
        "text": "CFA weak-area review 95: A forward contract is typically what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Customized and traded over the counter",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Forwards are OTC and customizable."
      },
      {
        "tag": "Economics",
        "text": "CFA weak-area review 96: If demand increases while supply is unchanged, equilibrium price usually does what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Rises"
        ],
        "correct": 3,
        "explanation": "A rightward demand shift raises equilibrium price."
      },
      {
        "tag": "Financial reporting",
        "text": "CFA weak-area review 97: Inventory turnover is COGS divided by what?",
        "choices": [
          "Average inventory",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Inventory turnover measures how often inventory is sold and replaced."
      },
      {
        "tag": "Corporate issuers",
        "text": "CFA weak-area review 98: WACC is often used as what in capital budgeting?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "A discount rate for projects with similar risk",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "WACC discounts cash flows of similar-risk projects."
      },
      {
        "tag": "Alternative investments",
        "text": "CFA weak-area review 99: Hedge funds may differ from mutual funds by using what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Greater leverage and flexible strategies",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Hedge funds may use leverage and shorting."
      },
      {
        "tag": "Equity",
        "text": "CFA weak-area review 100: Higher expected dividends generally do what to dividend discount value?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Increase value"
        ],
        "correct": 3,
        "explanation": "Higher expected cash flows increase estimated value."
      }
    ]
  },
  {
    "id": "finra",
    "track": "finance",
    "country": "United States",
    "region": "Securities",
    "examType": "Finance & Accounting",
    "title": "FINRA证券牌照",
    "subtitle": "SIE & Series 7",
    "badge": "证券",
    "questionCount": 100,
    "updated": "2026",
    "source": "FINRA exam content outline",
    "coverage": [
      "SIE",
      "Series 7",
      "Regulation",
      "Suitability",
      "Products"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "法规常识快速判断、合规陷阱题专项，适合证券牌照短训。",
    "questions": [
      {
        "tag": "Suitability",
        "text": "FINRA initial review 1: What is the main purpose of suitability obligations?",
        "choices": [
          "Ensure recommendations fit the customer profile",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Recommendations should align with objectives and risk tolerance."
      },
      {
        "tag": "Products",
        "text": "FINRA initial review 2: A bond coupon rate primarily states what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Annual interest rate based on par value",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Coupon rate is the stated interest rate."
      },
      {
        "tag": "Markets",
        "text": "FINRA initial review 3: Newly issued securities are sold in which market?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Primary market",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Issuers sell new securities in the primary market."
      },
      {
        "tag": "Orders",
        "text": "FINRA initial review 4: Which order seeks immediate execution at best available price?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Market order"
        ],
        "correct": 3,
        "explanation": "Market orders prioritize execution."
      },
      {
        "tag": "Regulation",
        "text": "FINRA initial review 5: Which activity is generally prohibited?",
        "choices": [
          "Making unsuitable recommendations",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Suitability standards prohibit inappropriate recommendations."
      },
      {
        "tag": "Equity",
        "text": "FINRA initial review 6: Common stockholders generally have which right?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Voting for directors",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Common shareholders often vote on directors."
      },
      {
        "tag": "Options",
        "text": "FINRA initial review 7: Buying a put option is most consistent with what view?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Bearish view on the underlying",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "A put benefits when the underlying declines."
      },
      {
        "tag": "Customer accounts",
        "text": "FINRA initial review 8: Which account allows borrowing from a broker-dealer to buy securities?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Margin account"
        ],
        "correct": 3,
        "explanation": "Margin accounts permit borrowing subject to requirements."
      },
      {
        "tag": "Municipal securities",
        "text": "FINRA initial review 9: Interest from many municipal bonds is commonly exempt from what?",
        "choices": [
          "Federal income tax",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Many municipal bonds pay federally tax-exempt interest."
      },
      {
        "tag": "Mutual funds",
        "text": "FINRA initial review 10: Open-end mutual fund shares transact at what price?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Net asset value calculated after market close",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Mutual funds use forward-priced NAV."
      },
      {
        "tag": "AML",
        "text": "FINRA initial review 11: Customer identification procedures support what compliance goal?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Anti-money laundering controls",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "CIP helps verify identities and detect suspicious activity."
      },
      {
        "tag": "Communications",
        "text": "FINRA initial review 12: Retail communications should generally be what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Fair, balanced, and not misleading"
        ],
        "correct": 3,
        "explanation": "FINRA communication standards require balanced presentation."
      },
      {
        "tag": "Retirement accounts",
        "text": "FINRA initial review 13: Early withdrawals from qualified accounts may create what?",
        "choices": [
          "Tax and penalty consequences",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Early distributions can trigger taxes and penalties."
      },
      {
        "tag": "Bonds",
        "text": "FINRA initial review 14: When interest rates rise, existing bond prices generally do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Decrease",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Bond prices and yields typically move inversely."
      },
      {
        "tag": "Options",
        "text": "FINRA initial review 15: Covered call writing involves owning stock and doing what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Selling call options on that stock",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "A covered call combines long stock with short call."
      },
      {
        "tag": "Customer profile",
        "text": "FINRA initial review 16: Time horizon helps determine what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Investment strategy suitability"
        ],
        "correct": 3,
        "explanation": "Time horizon affects risk capacity and product suitability."
      },
      {
        "tag": "Settlement",
        "text": "FINRA initial review 17: Trade confirmations primarily provide what?",
        "choices": [
          "Details of the executed transaction",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Confirmations disclose key trade information."
      },
      {
        "tag": "SIE basics",
        "text": "FINRA initial review 18: Diversification is intended to reduce what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Security-specific risk",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Diversification can reduce unsystematic risk."
      },
      {
        "tag": "Variable annuities",
        "text": "FINRA initial review 19: Variable annuity returns depend mainly on what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Performance of selected subaccounts",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Value fluctuates with underlying subaccounts."
      },
      {
        "tag": "Ethics",
        "text": "FINRA initial review 20: Front-running customer orders violates which principle?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Putting customer interests ahead of representative trading"
        ],
        "correct": 3,
        "explanation": "Trading ahead of customers is prohibited."
      },
      {
        "tag": "Suitability",
        "text": "FINRA timed drill 21: What is the main purpose of suitability obligations?",
        "choices": [
          "Ensure recommendations fit the customer profile",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Recommendations should align with objectives and risk tolerance."
      },
      {
        "tag": "Products",
        "text": "FINRA timed drill 22: A bond coupon rate primarily states what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Annual interest rate based on par value",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Coupon rate is the stated interest rate."
      },
      {
        "tag": "Markets",
        "text": "FINRA timed drill 23: Newly issued securities are sold in which market?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Primary market",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Issuers sell new securities in the primary market."
      },
      {
        "tag": "Orders",
        "text": "FINRA timed drill 24: Which order seeks immediate execution at best available price?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Market order"
        ],
        "correct": 3,
        "explanation": "Market orders prioritize execution."
      },
      {
        "tag": "Regulation",
        "text": "FINRA timed drill 25: Which activity is generally prohibited?",
        "choices": [
          "Making unsuitable recommendations",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Suitability standards prohibit inappropriate recommendations."
      },
      {
        "tag": "Equity",
        "text": "FINRA timed drill 26: Common stockholders generally have which right?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Voting for directors",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Common shareholders often vote on directors."
      },
      {
        "tag": "Options",
        "text": "FINRA timed drill 27: Buying a put option is most consistent with what view?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Bearish view on the underlying",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "A put benefits when the underlying declines."
      },
      {
        "tag": "Customer accounts",
        "text": "FINRA timed drill 28: Which account allows borrowing from a broker-dealer to buy securities?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Margin account"
        ],
        "correct": 3,
        "explanation": "Margin accounts permit borrowing subject to requirements."
      },
      {
        "tag": "Municipal securities",
        "text": "FINRA timed drill 29: Interest from many municipal bonds is commonly exempt from what?",
        "choices": [
          "Federal income tax",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Many municipal bonds pay federally tax-exempt interest."
      },
      {
        "tag": "Mutual funds",
        "text": "FINRA timed drill 30: Open-end mutual fund shares transact at what price?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Net asset value calculated after market close",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Mutual funds use forward-priced NAV."
      },
      {
        "tag": "AML",
        "text": "FINRA timed drill 31: Customer identification procedures support what compliance goal?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Anti-money laundering controls",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "CIP helps verify identities and detect suspicious activity."
      },
      {
        "tag": "Communications",
        "text": "FINRA timed drill 32: Retail communications should generally be what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Fair, balanced, and not misleading"
        ],
        "correct": 3,
        "explanation": "FINRA communication standards require balanced presentation."
      },
      {
        "tag": "Retirement accounts",
        "text": "FINRA timed drill 33: Early withdrawals from qualified accounts may create what?",
        "choices": [
          "Tax and penalty consequences",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Early distributions can trigger taxes and penalties."
      },
      {
        "tag": "Bonds",
        "text": "FINRA timed drill 34: When interest rates rise, existing bond prices generally do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Decrease",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Bond prices and yields typically move inversely."
      },
      {
        "tag": "Options",
        "text": "FINRA timed drill 35: Covered call writing involves owning stock and doing what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Selling call options on that stock",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "A covered call combines long stock with short call."
      },
      {
        "tag": "Customer profile",
        "text": "FINRA timed drill 36: Time horizon helps determine what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Investment strategy suitability"
        ],
        "correct": 3,
        "explanation": "Time horizon affects risk capacity and product suitability."
      },
      {
        "tag": "Settlement",
        "text": "FINRA timed drill 37: Trade confirmations primarily provide what?",
        "choices": [
          "Details of the executed transaction",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Confirmations disclose key trade information."
      },
      {
        "tag": "SIE basics",
        "text": "FINRA timed drill 38: Diversification is intended to reduce what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Security-specific risk",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Diversification can reduce unsystematic risk."
      },
      {
        "tag": "Variable annuities",
        "text": "FINRA timed drill 39: Variable annuity returns depend mainly on what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Performance of selected subaccounts",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Value fluctuates with underlying subaccounts."
      },
      {
        "tag": "Ethics",
        "text": "FINRA timed drill 40: Front-running customer orders violates which principle?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Putting customer interests ahead of representative trading"
        ],
        "correct": 3,
        "explanation": "Trading ahead of customers is prohibited."
      },
      {
        "tag": "Suitability",
        "text": "FINRA case analysis 41: What is the main purpose of suitability obligations?",
        "choices": [
          "Ensure recommendations fit the customer profile",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Recommendations should align with objectives and risk tolerance."
      },
      {
        "tag": "Products",
        "text": "FINRA case analysis 42: A bond coupon rate primarily states what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Annual interest rate based on par value",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Coupon rate is the stated interest rate."
      },
      {
        "tag": "Markets",
        "text": "FINRA case analysis 43: Newly issued securities are sold in which market?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Primary market",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Issuers sell new securities in the primary market."
      },
      {
        "tag": "Orders",
        "text": "FINRA case analysis 44: Which order seeks immediate execution at best available price?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Market order"
        ],
        "correct": 3,
        "explanation": "Market orders prioritize execution."
      },
      {
        "tag": "Regulation",
        "text": "FINRA case analysis 45: Which activity is generally prohibited?",
        "choices": [
          "Making unsuitable recommendations",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Suitability standards prohibit inappropriate recommendations."
      },
      {
        "tag": "Equity",
        "text": "FINRA case analysis 46: Common stockholders generally have which right?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Voting for directors",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Common shareholders often vote on directors."
      },
      {
        "tag": "Options",
        "text": "FINRA case analysis 47: Buying a put option is most consistent with what view?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Bearish view on the underlying",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "A put benefits when the underlying declines."
      },
      {
        "tag": "Customer accounts",
        "text": "FINRA case analysis 48: Which account allows borrowing from a broker-dealer to buy securities?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Margin account"
        ],
        "correct": 3,
        "explanation": "Margin accounts permit borrowing subject to requirements."
      },
      {
        "tag": "Municipal securities",
        "text": "FINRA case analysis 49: Interest from many municipal bonds is commonly exempt from what?",
        "choices": [
          "Federal income tax",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Many municipal bonds pay federally tax-exempt interest."
      },
      {
        "tag": "Mutual funds",
        "text": "FINRA case analysis 50: Open-end mutual fund shares transact at what price?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Net asset value calculated after market close",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Mutual funds use forward-priced NAV."
      },
      {
        "tag": "AML",
        "text": "FINRA case analysis 51: Customer identification procedures support what compliance goal?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Anti-money laundering controls",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "CIP helps verify identities and detect suspicious activity."
      },
      {
        "tag": "Communications",
        "text": "FINRA case analysis 52: Retail communications should generally be what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Fair, balanced, and not misleading"
        ],
        "correct": 3,
        "explanation": "FINRA communication standards require balanced presentation."
      },
      {
        "tag": "Retirement accounts",
        "text": "FINRA case analysis 53: Early withdrawals from qualified accounts may create what?",
        "choices": [
          "Tax and penalty consequences",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Early distributions can trigger taxes and penalties."
      },
      {
        "tag": "Bonds",
        "text": "FINRA case analysis 54: When interest rates rise, existing bond prices generally do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Decrease",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Bond prices and yields typically move inversely."
      },
      {
        "tag": "Options",
        "text": "FINRA case analysis 55: Covered call writing involves owning stock and doing what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Selling call options on that stock",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "A covered call combines long stock with short call."
      },
      {
        "tag": "Customer profile",
        "text": "FINRA case analysis 56: Time horizon helps determine what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Investment strategy suitability"
        ],
        "correct": 3,
        "explanation": "Time horizon affects risk capacity and product suitability."
      },
      {
        "tag": "Settlement",
        "text": "FINRA case analysis 57: Trade confirmations primarily provide what?",
        "choices": [
          "Details of the executed transaction",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Confirmations disclose key trade information."
      },
      {
        "tag": "SIE basics",
        "text": "FINRA case analysis 58: Diversification is intended to reduce what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Security-specific risk",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Diversification can reduce unsystematic risk."
      },
      {
        "tag": "Variable annuities",
        "text": "FINRA case analysis 59: Variable annuity returns depend mainly on what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Performance of selected subaccounts",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Value fluctuates with underlying subaccounts."
      },
      {
        "tag": "Ethics",
        "text": "FINRA case analysis 60: Front-running customer orders violates which principle?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Putting customer interests ahead of representative trading"
        ],
        "correct": 3,
        "explanation": "Trading ahead of customers is prohibited."
      },
      {
        "tag": "Suitability",
        "text": "FINRA readiness check 61: What is the main purpose of suitability obligations?",
        "choices": [
          "Ensure recommendations fit the customer profile",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Recommendations should align with objectives and risk tolerance."
      },
      {
        "tag": "Products",
        "text": "FINRA readiness check 62: A bond coupon rate primarily states what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Annual interest rate based on par value",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Coupon rate is the stated interest rate."
      },
      {
        "tag": "Markets",
        "text": "FINRA readiness check 63: Newly issued securities are sold in which market?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Primary market",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Issuers sell new securities in the primary market."
      },
      {
        "tag": "Orders",
        "text": "FINRA readiness check 64: Which order seeks immediate execution at best available price?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Market order"
        ],
        "correct": 3,
        "explanation": "Market orders prioritize execution."
      },
      {
        "tag": "Regulation",
        "text": "FINRA readiness check 65: Which activity is generally prohibited?",
        "choices": [
          "Making unsuitable recommendations",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Suitability standards prohibit inappropriate recommendations."
      },
      {
        "tag": "Equity",
        "text": "FINRA readiness check 66: Common stockholders generally have which right?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Voting for directors",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Common shareholders often vote on directors."
      },
      {
        "tag": "Options",
        "text": "FINRA readiness check 67: Buying a put option is most consistent with what view?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Bearish view on the underlying",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "A put benefits when the underlying declines."
      },
      {
        "tag": "Customer accounts",
        "text": "FINRA readiness check 68: Which account allows borrowing from a broker-dealer to buy securities?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Margin account"
        ],
        "correct": 3,
        "explanation": "Margin accounts permit borrowing subject to requirements."
      },
      {
        "tag": "Municipal securities",
        "text": "FINRA readiness check 69: Interest from many municipal bonds is commonly exempt from what?",
        "choices": [
          "Federal income tax",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Many municipal bonds pay federally tax-exempt interest."
      },
      {
        "tag": "Mutual funds",
        "text": "FINRA readiness check 70: Open-end mutual fund shares transact at what price?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Net asset value calculated after market close",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Mutual funds use forward-priced NAV."
      },
      {
        "tag": "AML",
        "text": "FINRA readiness check 71: Customer identification procedures support what compliance goal?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Anti-money laundering controls",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "CIP helps verify identities and detect suspicious activity."
      },
      {
        "tag": "Communications",
        "text": "FINRA readiness check 72: Retail communications should generally be what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Fair, balanced, and not misleading"
        ],
        "correct": 3,
        "explanation": "FINRA communication standards require balanced presentation."
      },
      {
        "tag": "Retirement accounts",
        "text": "FINRA readiness check 73: Early withdrawals from qualified accounts may create what?",
        "choices": [
          "Tax and penalty consequences",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Early distributions can trigger taxes and penalties."
      },
      {
        "tag": "Bonds",
        "text": "FINRA readiness check 74: When interest rates rise, existing bond prices generally do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Decrease",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Bond prices and yields typically move inversely."
      },
      {
        "tag": "Options",
        "text": "FINRA readiness check 75: Covered call writing involves owning stock and doing what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Selling call options on that stock",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "A covered call combines long stock with short call."
      },
      {
        "tag": "Customer profile",
        "text": "FINRA readiness check 76: Time horizon helps determine what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Investment strategy suitability"
        ],
        "correct": 3,
        "explanation": "Time horizon affects risk capacity and product suitability."
      },
      {
        "tag": "Settlement",
        "text": "FINRA readiness check 77: Trade confirmations primarily provide what?",
        "choices": [
          "Details of the executed transaction",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Confirmations disclose key trade information."
      },
      {
        "tag": "SIE basics",
        "text": "FINRA readiness check 78: Diversification is intended to reduce what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Security-specific risk",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Diversification can reduce unsystematic risk."
      },
      {
        "tag": "Variable annuities",
        "text": "FINRA readiness check 79: Variable annuity returns depend mainly on what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Performance of selected subaccounts",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Value fluctuates with underlying subaccounts."
      },
      {
        "tag": "Ethics",
        "text": "FINRA readiness check 80: Front-running customer orders violates which principle?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Putting customer interests ahead of representative trading"
        ],
        "correct": 3,
        "explanation": "Trading ahead of customers is prohibited."
      },
      {
        "tag": "Suitability",
        "text": "FINRA weak-area review 81: What is the main purpose of suitability obligations?",
        "choices": [
          "Ensure recommendations fit the customer profile",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Recommendations should align with objectives and risk tolerance."
      },
      {
        "tag": "Products",
        "text": "FINRA weak-area review 82: A bond coupon rate primarily states what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Annual interest rate based on par value",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Coupon rate is the stated interest rate."
      },
      {
        "tag": "Markets",
        "text": "FINRA weak-area review 83: Newly issued securities are sold in which market?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Primary market",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Issuers sell new securities in the primary market."
      },
      {
        "tag": "Orders",
        "text": "FINRA weak-area review 84: Which order seeks immediate execution at best available price?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Market order"
        ],
        "correct": 3,
        "explanation": "Market orders prioritize execution."
      },
      {
        "tag": "Regulation",
        "text": "FINRA weak-area review 85: Which activity is generally prohibited?",
        "choices": [
          "Making unsuitable recommendations",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Suitability standards prohibit inappropriate recommendations."
      },
      {
        "tag": "Equity",
        "text": "FINRA weak-area review 86: Common stockholders generally have which right?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Voting for directors",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Common shareholders often vote on directors."
      },
      {
        "tag": "Options",
        "text": "FINRA weak-area review 87: Buying a put option is most consistent with what view?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Bearish view on the underlying",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "A put benefits when the underlying declines."
      },
      {
        "tag": "Customer accounts",
        "text": "FINRA weak-area review 88: Which account allows borrowing from a broker-dealer to buy securities?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Margin account"
        ],
        "correct": 3,
        "explanation": "Margin accounts permit borrowing subject to requirements."
      },
      {
        "tag": "Municipal securities",
        "text": "FINRA weak-area review 89: Interest from many municipal bonds is commonly exempt from what?",
        "choices": [
          "Federal income tax",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Many municipal bonds pay federally tax-exempt interest."
      },
      {
        "tag": "Mutual funds",
        "text": "FINRA weak-area review 90: Open-end mutual fund shares transact at what price?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Net asset value calculated after market close",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Mutual funds use forward-priced NAV."
      },
      {
        "tag": "AML",
        "text": "FINRA weak-area review 91: Customer identification procedures support what compliance goal?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Anti-money laundering controls",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "CIP helps verify identities and detect suspicious activity."
      },
      {
        "tag": "Communications",
        "text": "FINRA weak-area review 92: Retail communications should generally be what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Fair, balanced, and not misleading"
        ],
        "correct": 3,
        "explanation": "FINRA communication standards require balanced presentation."
      },
      {
        "tag": "Retirement accounts",
        "text": "FINRA weak-area review 93: Early withdrawals from qualified accounts may create what?",
        "choices": [
          "Tax and penalty consequences",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Early distributions can trigger taxes and penalties."
      },
      {
        "tag": "Bonds",
        "text": "FINRA weak-area review 94: When interest rates rise, existing bond prices generally do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Decrease",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Bond prices and yields typically move inversely."
      },
      {
        "tag": "Options",
        "text": "FINRA weak-area review 95: Covered call writing involves owning stock and doing what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Selling call options on that stock",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "A covered call combines long stock with short call."
      },
      {
        "tag": "Customer profile",
        "text": "FINRA weak-area review 96: Time horizon helps determine what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Investment strategy suitability"
        ],
        "correct": 3,
        "explanation": "Time horizon affects risk capacity and product suitability."
      },
      {
        "tag": "Settlement",
        "text": "FINRA weak-area review 97: Trade confirmations primarily provide what?",
        "choices": [
          "Details of the executed transaction",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Confirmations disclose key trade information."
      },
      {
        "tag": "SIE basics",
        "text": "FINRA weak-area review 98: Diversification is intended to reduce what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Security-specific risk",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Diversification can reduce unsystematic risk."
      },
      {
        "tag": "Variable annuities",
        "text": "FINRA weak-area review 99: Variable annuity returns depend mainly on what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Performance of selected subaccounts",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Value fluctuates with underlying subaccounts."
      },
      {
        "tag": "Ethics",
        "text": "FINRA weak-area review 100: Front-running customer orders violates which principle?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Putting customer interests ahead of representative trading"
        ],
        "correct": 3,
        "explanation": "Trading ahead of customers is prohibited."
      }
    ]
  },
  {
    "id": "fe-pe",
    "track": "engineering",
    "country": "United States",
    "region": "Engineering",
    "examType": "Engineering & IT",
    "title": "FE/PE工程师",
    "subtitle": "美国注册工程师",
    "badge": "工程",
    "questionCount": 100,
    "updated": "2026",
    "source": "NCEES exam specifications",
    "coverage": [
      "Engineering economics",
      "Statics",
      "Fluids",
      "Ethics",
      "Handbook lookup"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "工程经济学计算器、参考手册检索练习、公式型题目短训。",
    "questions": [
      {
        "tag": "Economics",
        "text": "FE/PE initial review 1: If the interest rate is positive, present value is generally what relative to future value?",
        "choices": [
          "Lower",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Positive discounting makes present value lower."
      },
      {
        "tag": "Ethics",
        "text": "FE/PE initial review 2: An engineer should sign and seal work only when what condition is met?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "The work is within the engineer's competence",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Engineers should practice within competence."
      },
      {
        "tag": "Statics",
        "text": "FE/PE initial review 3: For static equilibrium, sums of forces and moments must be what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Zero",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Static equilibrium requires no net force or moment."
      },
      {
        "tag": "Fluids",
        "text": "FE/PE initial review 4: For steady incompressible flow, continuity primarily conserves what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Mass"
        ],
        "correct": 3,
        "explanation": "Continuity is based on mass conservation."
      },
      {
        "tag": "Materials",
        "text": "FE/PE initial review 5: Normal stress is force divided by what?",
        "choices": [
          "Area",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Stress equals force over area."
      },
      {
        "tag": "Electrical",
        "text": "FE/PE initial review 6: Ohm's law relates voltage, current, and what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Resistance",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Ohm's law is V = IR."
      },
      {
        "tag": "Thermodynamics",
        "text": "FE/PE initial review 7: Which law is associated with conservation of energy?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "First law",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "The first law expresses conservation of energy."
      },
      {
        "tag": "Probability",
        "text": "FE/PE initial review 8: Independent probabilities 0.5 and 0.2 have what joint probability?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "0.1"
        ],
        "correct": 3,
        "explanation": "Multiply independent probabilities."
      },
      {
        "tag": "Dynamics",
        "text": "FE/PE initial review 9: Newton's second law relates force to mass and what?",
        "choices": [
          "Acceleration",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "F = ma."
      },
      {
        "tag": "Mechanics",
        "text": "FE/PE initial review 10: Hooke's law for a linear spring relates force to what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Displacement",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "F = kx."
      },
      {
        "tag": "Surveying",
        "text": "FE/PE initial review 11: A benchmark provides a known reference for what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Elevation",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Benchmarks are fixed points with known elevations."
      },
      {
        "tag": "Environmental",
        "text": "FE/PE initial review 12: Biochemical oxygen demand measures what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Oxygen consumed by biological decomposition"
        ],
        "correct": 3,
        "explanation": "BOD reflects oxygen demand from biodegradable matter."
      },
      {
        "tag": "Transportation",
        "text": "FE/PE initial review 13: Stopping sight distance includes perception-reaction distance plus what?",
        "choices": [
          "Braking distance",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "SSD includes reaction and braking distance."
      },
      {
        "tag": "Structures",
        "text": "FE/PE initial review 14: A simply supported beam with center point load has maximum moment where?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "At midspan",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Symmetric center loading produces maximum moment at midspan."
      },
      {
        "tag": "Geotechnical",
        "text": "FE/PE initial review 15: Effective stress is total stress minus what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Pore water pressure",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Effective stress governs soil skeleton behavior."
      },
      {
        "tag": "Chemical",
        "text": "FE/PE initial review 16: A first-order reaction rate is proportional to what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Reactant concentration"
        ],
        "correct": 3,
        "explanation": "First-order kinetics depend linearly on concentration."
      },
      {
        "tag": "Industrial",
        "text": "FE/PE initial review 17: A bottleneck is the process step with what?",
        "choices": [
          "Lowest effective capacity",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "The bottleneck limits throughput."
      },
      {
        "tag": "Controls",
        "text": "FE/PE initial review 18: Negative feedback usually helps a system do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Reduce error from a setpoint",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Negative feedback corrects deviations."
      },
      {
        "tag": "Math",
        "text": "FE/PE initial review 19: The derivative of x squared with respect to x is what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "2x",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Power rule gives 2x."
      },
      {
        "tag": "Engineering economy",
        "text": "FE/PE initial review 20: A benefit-cost ratio greater than one indicates what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Benefits exceed costs on the chosen basis"
        ],
        "correct": 3,
        "explanation": "B/C greater than one supports economic acceptability."
      },
      {
        "tag": "Economics",
        "text": "FE/PE timed drill 21: If the interest rate is positive, present value is generally what relative to future value?",
        "choices": [
          "Lower",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Positive discounting makes present value lower."
      },
      {
        "tag": "Ethics",
        "text": "FE/PE timed drill 22: An engineer should sign and seal work only when what condition is met?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "The work is within the engineer's competence",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Engineers should practice within competence."
      },
      {
        "tag": "Statics",
        "text": "FE/PE timed drill 23: For static equilibrium, sums of forces and moments must be what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Zero",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Static equilibrium requires no net force or moment."
      },
      {
        "tag": "Fluids",
        "text": "FE/PE timed drill 24: For steady incompressible flow, continuity primarily conserves what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Mass"
        ],
        "correct": 3,
        "explanation": "Continuity is based on mass conservation."
      },
      {
        "tag": "Materials",
        "text": "FE/PE timed drill 25: Normal stress is force divided by what?",
        "choices": [
          "Area",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Stress equals force over area."
      },
      {
        "tag": "Electrical",
        "text": "FE/PE timed drill 26: Ohm's law relates voltage, current, and what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Resistance",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Ohm's law is V = IR."
      },
      {
        "tag": "Thermodynamics",
        "text": "FE/PE timed drill 27: Which law is associated with conservation of energy?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "First law",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "The first law expresses conservation of energy."
      },
      {
        "tag": "Probability",
        "text": "FE/PE timed drill 28: Independent probabilities 0.5 and 0.2 have what joint probability?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "0.1"
        ],
        "correct": 3,
        "explanation": "Multiply independent probabilities."
      },
      {
        "tag": "Dynamics",
        "text": "FE/PE timed drill 29: Newton's second law relates force to mass and what?",
        "choices": [
          "Acceleration",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "F = ma."
      },
      {
        "tag": "Mechanics",
        "text": "FE/PE timed drill 30: Hooke's law for a linear spring relates force to what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Displacement",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "F = kx."
      },
      {
        "tag": "Surveying",
        "text": "FE/PE timed drill 31: A benchmark provides a known reference for what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Elevation",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Benchmarks are fixed points with known elevations."
      },
      {
        "tag": "Environmental",
        "text": "FE/PE timed drill 32: Biochemical oxygen demand measures what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Oxygen consumed by biological decomposition"
        ],
        "correct": 3,
        "explanation": "BOD reflects oxygen demand from biodegradable matter."
      },
      {
        "tag": "Transportation",
        "text": "FE/PE timed drill 33: Stopping sight distance includes perception-reaction distance plus what?",
        "choices": [
          "Braking distance",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "SSD includes reaction and braking distance."
      },
      {
        "tag": "Structures",
        "text": "FE/PE timed drill 34: A simply supported beam with center point load has maximum moment where?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "At midspan",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Symmetric center loading produces maximum moment at midspan."
      },
      {
        "tag": "Geotechnical",
        "text": "FE/PE timed drill 35: Effective stress is total stress minus what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Pore water pressure",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Effective stress governs soil skeleton behavior."
      },
      {
        "tag": "Chemical",
        "text": "FE/PE timed drill 36: A first-order reaction rate is proportional to what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Reactant concentration"
        ],
        "correct": 3,
        "explanation": "First-order kinetics depend linearly on concentration."
      },
      {
        "tag": "Industrial",
        "text": "FE/PE timed drill 37: A bottleneck is the process step with what?",
        "choices": [
          "Lowest effective capacity",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "The bottleneck limits throughput."
      },
      {
        "tag": "Controls",
        "text": "FE/PE timed drill 38: Negative feedback usually helps a system do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Reduce error from a setpoint",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Negative feedback corrects deviations."
      },
      {
        "tag": "Math",
        "text": "FE/PE timed drill 39: The derivative of x squared with respect to x is what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "2x",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Power rule gives 2x."
      },
      {
        "tag": "Engineering economy",
        "text": "FE/PE timed drill 40: A benefit-cost ratio greater than one indicates what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Benefits exceed costs on the chosen basis"
        ],
        "correct": 3,
        "explanation": "B/C greater than one supports economic acceptability."
      },
      {
        "tag": "Economics",
        "text": "FE/PE case analysis 41: If the interest rate is positive, present value is generally what relative to future value?",
        "choices": [
          "Lower",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Positive discounting makes present value lower."
      },
      {
        "tag": "Ethics",
        "text": "FE/PE case analysis 42: An engineer should sign and seal work only when what condition is met?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "The work is within the engineer's competence",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Engineers should practice within competence."
      },
      {
        "tag": "Statics",
        "text": "FE/PE case analysis 43: For static equilibrium, sums of forces and moments must be what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Zero",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Static equilibrium requires no net force or moment."
      },
      {
        "tag": "Fluids",
        "text": "FE/PE case analysis 44: For steady incompressible flow, continuity primarily conserves what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Mass"
        ],
        "correct": 3,
        "explanation": "Continuity is based on mass conservation."
      },
      {
        "tag": "Materials",
        "text": "FE/PE case analysis 45: Normal stress is force divided by what?",
        "choices": [
          "Area",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Stress equals force over area."
      },
      {
        "tag": "Electrical",
        "text": "FE/PE case analysis 46: Ohm's law relates voltage, current, and what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Resistance",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Ohm's law is V = IR."
      },
      {
        "tag": "Thermodynamics",
        "text": "FE/PE case analysis 47: Which law is associated with conservation of energy?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "First law",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "The first law expresses conservation of energy."
      },
      {
        "tag": "Probability",
        "text": "FE/PE case analysis 48: Independent probabilities 0.5 and 0.2 have what joint probability?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "0.1"
        ],
        "correct": 3,
        "explanation": "Multiply independent probabilities."
      },
      {
        "tag": "Dynamics",
        "text": "FE/PE case analysis 49: Newton's second law relates force to mass and what?",
        "choices": [
          "Acceleration",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "F = ma."
      },
      {
        "tag": "Mechanics",
        "text": "FE/PE case analysis 50: Hooke's law for a linear spring relates force to what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Displacement",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "F = kx."
      },
      {
        "tag": "Surveying",
        "text": "FE/PE case analysis 51: A benchmark provides a known reference for what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Elevation",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Benchmarks are fixed points with known elevations."
      },
      {
        "tag": "Environmental",
        "text": "FE/PE case analysis 52: Biochemical oxygen demand measures what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Oxygen consumed by biological decomposition"
        ],
        "correct": 3,
        "explanation": "BOD reflects oxygen demand from biodegradable matter."
      },
      {
        "tag": "Transportation",
        "text": "FE/PE case analysis 53: Stopping sight distance includes perception-reaction distance plus what?",
        "choices": [
          "Braking distance",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "SSD includes reaction and braking distance."
      },
      {
        "tag": "Structures",
        "text": "FE/PE case analysis 54: A simply supported beam with center point load has maximum moment where?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "At midspan",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Symmetric center loading produces maximum moment at midspan."
      },
      {
        "tag": "Geotechnical",
        "text": "FE/PE case analysis 55: Effective stress is total stress minus what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Pore water pressure",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Effective stress governs soil skeleton behavior."
      },
      {
        "tag": "Chemical",
        "text": "FE/PE case analysis 56: A first-order reaction rate is proportional to what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Reactant concentration"
        ],
        "correct": 3,
        "explanation": "First-order kinetics depend linearly on concentration."
      },
      {
        "tag": "Industrial",
        "text": "FE/PE case analysis 57: A bottleneck is the process step with what?",
        "choices": [
          "Lowest effective capacity",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "The bottleneck limits throughput."
      },
      {
        "tag": "Controls",
        "text": "FE/PE case analysis 58: Negative feedback usually helps a system do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Reduce error from a setpoint",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Negative feedback corrects deviations."
      },
      {
        "tag": "Math",
        "text": "FE/PE case analysis 59: The derivative of x squared with respect to x is what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "2x",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Power rule gives 2x."
      },
      {
        "tag": "Engineering economy",
        "text": "FE/PE case analysis 60: A benefit-cost ratio greater than one indicates what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Benefits exceed costs on the chosen basis"
        ],
        "correct": 3,
        "explanation": "B/C greater than one supports economic acceptability."
      },
      {
        "tag": "Economics",
        "text": "FE/PE readiness check 61: If the interest rate is positive, present value is generally what relative to future value?",
        "choices": [
          "Lower",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Positive discounting makes present value lower."
      },
      {
        "tag": "Ethics",
        "text": "FE/PE readiness check 62: An engineer should sign and seal work only when what condition is met?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "The work is within the engineer's competence",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Engineers should practice within competence."
      },
      {
        "tag": "Statics",
        "text": "FE/PE readiness check 63: For static equilibrium, sums of forces and moments must be what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Zero",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Static equilibrium requires no net force or moment."
      },
      {
        "tag": "Fluids",
        "text": "FE/PE readiness check 64: For steady incompressible flow, continuity primarily conserves what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Mass"
        ],
        "correct": 3,
        "explanation": "Continuity is based on mass conservation."
      },
      {
        "tag": "Materials",
        "text": "FE/PE readiness check 65: Normal stress is force divided by what?",
        "choices": [
          "Area",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Stress equals force over area."
      },
      {
        "tag": "Electrical",
        "text": "FE/PE readiness check 66: Ohm's law relates voltage, current, and what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Resistance",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Ohm's law is V = IR."
      },
      {
        "tag": "Thermodynamics",
        "text": "FE/PE readiness check 67: Which law is associated with conservation of energy?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "First law",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "The first law expresses conservation of energy."
      },
      {
        "tag": "Probability",
        "text": "FE/PE readiness check 68: Independent probabilities 0.5 and 0.2 have what joint probability?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "0.1"
        ],
        "correct": 3,
        "explanation": "Multiply independent probabilities."
      },
      {
        "tag": "Dynamics",
        "text": "FE/PE readiness check 69: Newton's second law relates force to mass and what?",
        "choices": [
          "Acceleration",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "F = ma."
      },
      {
        "tag": "Mechanics",
        "text": "FE/PE readiness check 70: Hooke's law for a linear spring relates force to what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Displacement",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "F = kx."
      },
      {
        "tag": "Surveying",
        "text": "FE/PE readiness check 71: A benchmark provides a known reference for what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Elevation",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Benchmarks are fixed points with known elevations."
      },
      {
        "tag": "Environmental",
        "text": "FE/PE readiness check 72: Biochemical oxygen demand measures what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Oxygen consumed by biological decomposition"
        ],
        "correct": 3,
        "explanation": "BOD reflects oxygen demand from biodegradable matter."
      },
      {
        "tag": "Transportation",
        "text": "FE/PE readiness check 73: Stopping sight distance includes perception-reaction distance plus what?",
        "choices": [
          "Braking distance",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "SSD includes reaction and braking distance."
      },
      {
        "tag": "Structures",
        "text": "FE/PE readiness check 74: A simply supported beam with center point load has maximum moment where?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "At midspan",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Symmetric center loading produces maximum moment at midspan."
      },
      {
        "tag": "Geotechnical",
        "text": "FE/PE readiness check 75: Effective stress is total stress minus what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Pore water pressure",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Effective stress governs soil skeleton behavior."
      },
      {
        "tag": "Chemical",
        "text": "FE/PE readiness check 76: A first-order reaction rate is proportional to what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Reactant concentration"
        ],
        "correct": 3,
        "explanation": "First-order kinetics depend linearly on concentration."
      },
      {
        "tag": "Industrial",
        "text": "FE/PE readiness check 77: A bottleneck is the process step with what?",
        "choices": [
          "Lowest effective capacity",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "The bottleneck limits throughput."
      },
      {
        "tag": "Controls",
        "text": "FE/PE readiness check 78: Negative feedback usually helps a system do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Reduce error from a setpoint",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Negative feedback corrects deviations."
      },
      {
        "tag": "Math",
        "text": "FE/PE readiness check 79: The derivative of x squared with respect to x is what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "2x",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Power rule gives 2x."
      },
      {
        "tag": "Engineering economy",
        "text": "FE/PE readiness check 80: A benefit-cost ratio greater than one indicates what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Benefits exceed costs on the chosen basis"
        ],
        "correct": 3,
        "explanation": "B/C greater than one supports economic acceptability."
      },
      {
        "tag": "Economics",
        "text": "FE/PE weak-area review 81: If the interest rate is positive, present value is generally what relative to future value?",
        "choices": [
          "Lower",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Positive discounting makes present value lower."
      },
      {
        "tag": "Ethics",
        "text": "FE/PE weak-area review 82: An engineer should sign and seal work only when what condition is met?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "The work is within the engineer's competence",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Engineers should practice within competence."
      },
      {
        "tag": "Statics",
        "text": "FE/PE weak-area review 83: For static equilibrium, sums of forces and moments must be what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Zero",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Static equilibrium requires no net force or moment."
      },
      {
        "tag": "Fluids",
        "text": "FE/PE weak-area review 84: For steady incompressible flow, continuity primarily conserves what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Mass"
        ],
        "correct": 3,
        "explanation": "Continuity is based on mass conservation."
      },
      {
        "tag": "Materials",
        "text": "FE/PE weak-area review 85: Normal stress is force divided by what?",
        "choices": [
          "Area",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Stress equals force over area."
      },
      {
        "tag": "Electrical",
        "text": "FE/PE weak-area review 86: Ohm's law relates voltage, current, and what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Resistance",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Ohm's law is V = IR."
      },
      {
        "tag": "Thermodynamics",
        "text": "FE/PE weak-area review 87: Which law is associated with conservation of energy?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "First law",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "The first law expresses conservation of energy."
      },
      {
        "tag": "Probability",
        "text": "FE/PE weak-area review 88: Independent probabilities 0.5 and 0.2 have what joint probability?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "0.1"
        ],
        "correct": 3,
        "explanation": "Multiply independent probabilities."
      },
      {
        "tag": "Dynamics",
        "text": "FE/PE weak-area review 89: Newton's second law relates force to mass and what?",
        "choices": [
          "Acceleration",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "F = ma."
      },
      {
        "tag": "Mechanics",
        "text": "FE/PE weak-area review 90: Hooke's law for a linear spring relates force to what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Displacement",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "F = kx."
      },
      {
        "tag": "Surveying",
        "text": "FE/PE weak-area review 91: A benchmark provides a known reference for what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Elevation",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Benchmarks are fixed points with known elevations."
      },
      {
        "tag": "Environmental",
        "text": "FE/PE weak-area review 92: Biochemical oxygen demand measures what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Oxygen consumed by biological decomposition"
        ],
        "correct": 3,
        "explanation": "BOD reflects oxygen demand from biodegradable matter."
      },
      {
        "tag": "Transportation",
        "text": "FE/PE weak-area review 93: Stopping sight distance includes perception-reaction distance plus what?",
        "choices": [
          "Braking distance",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "SSD includes reaction and braking distance."
      },
      {
        "tag": "Structures",
        "text": "FE/PE weak-area review 94: A simply supported beam with center point load has maximum moment where?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "At midspan",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Symmetric center loading produces maximum moment at midspan."
      },
      {
        "tag": "Geotechnical",
        "text": "FE/PE weak-area review 95: Effective stress is total stress minus what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Pore water pressure",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Effective stress governs soil skeleton behavior."
      },
      {
        "tag": "Chemical",
        "text": "FE/PE weak-area review 96: A first-order reaction rate is proportional to what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Reactant concentration"
        ],
        "correct": 3,
        "explanation": "First-order kinetics depend linearly on concentration."
      },
      {
        "tag": "Industrial",
        "text": "FE/PE weak-area review 97: A bottleneck is the process step with what?",
        "choices": [
          "Lowest effective capacity",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "The bottleneck limits throughput."
      },
      {
        "tag": "Controls",
        "text": "FE/PE weak-area review 98: Negative feedback usually helps a system do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Reduce error from a setpoint",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Negative feedback corrects deviations."
      },
      {
        "tag": "Math",
        "text": "FE/PE weak-area review 99: The derivative of x squared with respect to x is what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "2x",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Power rule gives 2x."
      },
      {
        "tag": "Engineering economy",
        "text": "FE/PE weak-area review 100: A benefit-cost ratio greater than one indicates what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Benefits exceed costs on the chosen basis"
        ],
        "correct": 3,
        "explanation": "B/C greater than one supports economic acceptability."
      }
    ]
  },
  {
    "id": "cloud-architect",
    "track": "engineering",
    "country": "Global",
    "region": "Cloud",
    "examType": "Engineering & IT",
    "title": "云架构师认证",
    "subtitle": "AWS & GCP题库",
    "badge": "云",
    "questionCount": 100,
    "updated": "2026",
    "source": "AWS and Google Cloud exam guides",
    "coverage": [
      "Architecture",
      "Security",
      "Networking",
      "Reliability",
      "Cost"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "场景选择题快速解析、架构图识别、云服务组合训练。",
    "questions": [
      {
        "tag": "Reliability",
        "text": "Cloud architect initial review 1: Which design improves availability within a cloud region?",
        "choices": [
          "Deploy across multiple availability zones",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Multi-zone designs reduce single-zone failure impact."
      },
      {
        "tag": "Security",
        "text": "Cloud architect initial review 2: Which IAM practice best supports least privilege?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Grant only permissions required for the task",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Least privilege limits access to minimum needed."
      },
      {
        "tag": "Cost",
        "text": "Cloud architect initial review 3: Which option can reduce cost for predictable long-running workloads?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Reserved or committed capacity",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Committed discounts fit steady workloads."
      },
      {
        "tag": "Networking",
        "text": "Cloud architect initial review 4: Which control filters inbound and outbound workload traffic?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Security group or firewall rule"
        ],
        "correct": 3,
        "explanation": "Network security controls restrict traffic."
      },
      {
        "tag": "Storage",
        "text": "Cloud architect initial review 5: Which storage type fits static assets and backups?",
        "choices": [
          "Object storage",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Object storage is durable and scalable."
      },
      {
        "tag": "Disaster recovery",
        "text": "Cloud architect initial review 6: Which design improves recovery after a regional outage?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Cross-region backup or replication",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Cross-region copies support recovery."
      },
      {
        "tag": "Operations",
        "text": "Cloud architect initial review 7: Which capability helps detect latency and service errors?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Monitoring and logging",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Observability tools reveal errors and performance."
      },
      {
        "tag": "Database",
        "text": "Cloud architect initial review 8: Which database fits key-value access at high scale?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Managed NoSQL key-value database"
        ],
        "correct": 3,
        "explanation": "NoSQL key-value systems fit high-scale access patterns."
      },
      {
        "tag": "Architecture",
        "text": "Cloud architect initial review 9: A loosely coupled workload usually communicates through what?",
        "choices": [
          "Queues or event streams",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Asynchronous messaging decouples producers and consumers."
      },
      {
        "tag": "Security",
        "text": "Cloud architect initial review 10: Secrets should generally be stored where?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Managed secrets service with access controls",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Managed secrets services support rotation and access policies."
      },
      {
        "tag": "Compute",
        "text": "Cloud architect initial review 11: Which compute model runs code without managing servers?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Serverless functions",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Serverless abstracts server management."
      },
      {
        "tag": "Networking",
        "text": "Cloud architect initial review 12: Private subnets are used for resources without what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Direct public internet exposure"
        ],
        "correct": 3,
        "explanation": "Private subnets reduce direct exposure."
      },
      {
        "tag": "Reliability",
        "text": "Cloud architect initial review 13: Auto scaling responds primarily to what?",
        "choices": [
          "Demand changes or health signals",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Auto scaling adjusts capacity based on metrics."
      },
      {
        "tag": "Cost",
        "text": "Cloud architect initial review 14: Which practice helps control unexpected cloud spending?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Budgets and cost alerts",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Budgets and alerts detect spend trends early."
      },
      {
        "tag": "Data",
        "text": "Cloud architect initial review 15: Which approach fits analytics over large columnar datasets?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Data warehouse or lake query service",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Analytical services optimize scans and aggregation."
      },
      {
        "tag": "Migration",
        "text": "Cloud architect initial review 16: A lift-and-shift migration means what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Rehosting applications with minimal redesign"
        ],
        "correct": 3,
        "explanation": "Rehosting moves workloads with limited redesign."
      },
      {
        "tag": "Identity",
        "text": "Cloud architect initial review 17: Federation allows users to authenticate through what?",
        "choices": [
          "An external identity provider",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Federation trusts external identities."
      },
      {
        "tag": "Compliance",
        "text": "Cloud architect initial review 18: Encryption at rest primarily protects what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Stored data",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "At-rest encryption protects persisted data."
      },
      {
        "tag": "Resilience",
        "text": "Cloud architect initial review 19: Health checks usually support which action?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Routing traffic away from unhealthy targets",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Health checks help avoid failed endpoints."
      },
      {
        "tag": "Performance",
        "text": "Cloud architect initial review 20: A CDN improves global static asset delivery by doing what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Caching content near users"
        ],
        "correct": 3,
        "explanation": "CDNs reduce latency through edge caching."
      },
      {
        "tag": "Reliability",
        "text": "Cloud architect timed drill 21: Which design improves availability within a cloud region?",
        "choices": [
          "Deploy across multiple availability zones",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Multi-zone designs reduce single-zone failure impact."
      },
      {
        "tag": "Security",
        "text": "Cloud architect timed drill 22: Which IAM practice best supports least privilege?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Grant only permissions required for the task",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Least privilege limits access to minimum needed."
      },
      {
        "tag": "Cost",
        "text": "Cloud architect timed drill 23: Which option can reduce cost for predictable long-running workloads?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Reserved or committed capacity",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Committed discounts fit steady workloads."
      },
      {
        "tag": "Networking",
        "text": "Cloud architect timed drill 24: Which control filters inbound and outbound workload traffic?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Security group or firewall rule"
        ],
        "correct": 3,
        "explanation": "Network security controls restrict traffic."
      },
      {
        "tag": "Storage",
        "text": "Cloud architect timed drill 25: Which storage type fits static assets and backups?",
        "choices": [
          "Object storage",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Object storage is durable and scalable."
      },
      {
        "tag": "Disaster recovery",
        "text": "Cloud architect timed drill 26: Which design improves recovery after a regional outage?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Cross-region backup or replication",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Cross-region copies support recovery."
      },
      {
        "tag": "Operations",
        "text": "Cloud architect timed drill 27: Which capability helps detect latency and service errors?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Monitoring and logging",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Observability tools reveal errors and performance."
      },
      {
        "tag": "Database",
        "text": "Cloud architect timed drill 28: Which database fits key-value access at high scale?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Managed NoSQL key-value database"
        ],
        "correct": 3,
        "explanation": "NoSQL key-value systems fit high-scale access patterns."
      },
      {
        "tag": "Architecture",
        "text": "Cloud architect timed drill 29: A loosely coupled workload usually communicates through what?",
        "choices": [
          "Queues or event streams",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Asynchronous messaging decouples producers and consumers."
      },
      {
        "tag": "Security",
        "text": "Cloud architect timed drill 30: Secrets should generally be stored where?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Managed secrets service with access controls",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Managed secrets services support rotation and access policies."
      },
      {
        "tag": "Compute",
        "text": "Cloud architect timed drill 31: Which compute model runs code without managing servers?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Serverless functions",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Serverless abstracts server management."
      },
      {
        "tag": "Networking",
        "text": "Cloud architect timed drill 32: Private subnets are used for resources without what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Direct public internet exposure"
        ],
        "correct": 3,
        "explanation": "Private subnets reduce direct exposure."
      },
      {
        "tag": "Reliability",
        "text": "Cloud architect timed drill 33: Auto scaling responds primarily to what?",
        "choices": [
          "Demand changes or health signals",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Auto scaling adjusts capacity based on metrics."
      },
      {
        "tag": "Cost",
        "text": "Cloud architect timed drill 34: Which practice helps control unexpected cloud spending?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Budgets and cost alerts",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Budgets and alerts detect spend trends early."
      },
      {
        "tag": "Data",
        "text": "Cloud architect timed drill 35: Which approach fits analytics over large columnar datasets?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Data warehouse or lake query service",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Analytical services optimize scans and aggregation."
      },
      {
        "tag": "Migration",
        "text": "Cloud architect timed drill 36: A lift-and-shift migration means what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Rehosting applications with minimal redesign"
        ],
        "correct": 3,
        "explanation": "Rehosting moves workloads with limited redesign."
      },
      {
        "tag": "Identity",
        "text": "Cloud architect timed drill 37: Federation allows users to authenticate through what?",
        "choices": [
          "An external identity provider",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Federation trusts external identities."
      },
      {
        "tag": "Compliance",
        "text": "Cloud architect timed drill 38: Encryption at rest primarily protects what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Stored data",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "At-rest encryption protects persisted data."
      },
      {
        "tag": "Resilience",
        "text": "Cloud architect timed drill 39: Health checks usually support which action?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Routing traffic away from unhealthy targets",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Health checks help avoid failed endpoints."
      },
      {
        "tag": "Performance",
        "text": "Cloud architect timed drill 40: A CDN improves global static asset delivery by doing what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Caching content near users"
        ],
        "correct": 3,
        "explanation": "CDNs reduce latency through edge caching."
      },
      {
        "tag": "Reliability",
        "text": "Cloud architect case analysis 41: Which design improves availability within a cloud region?",
        "choices": [
          "Deploy across multiple availability zones",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Multi-zone designs reduce single-zone failure impact."
      },
      {
        "tag": "Security",
        "text": "Cloud architect case analysis 42: Which IAM practice best supports least privilege?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Grant only permissions required for the task",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Least privilege limits access to minimum needed."
      },
      {
        "tag": "Cost",
        "text": "Cloud architect case analysis 43: Which option can reduce cost for predictable long-running workloads?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Reserved or committed capacity",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Committed discounts fit steady workloads."
      },
      {
        "tag": "Networking",
        "text": "Cloud architect case analysis 44: Which control filters inbound and outbound workload traffic?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Security group or firewall rule"
        ],
        "correct": 3,
        "explanation": "Network security controls restrict traffic."
      },
      {
        "tag": "Storage",
        "text": "Cloud architect case analysis 45: Which storage type fits static assets and backups?",
        "choices": [
          "Object storage",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Object storage is durable and scalable."
      },
      {
        "tag": "Disaster recovery",
        "text": "Cloud architect case analysis 46: Which design improves recovery after a regional outage?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Cross-region backup or replication",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Cross-region copies support recovery."
      },
      {
        "tag": "Operations",
        "text": "Cloud architect case analysis 47: Which capability helps detect latency and service errors?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Monitoring and logging",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Observability tools reveal errors and performance."
      },
      {
        "tag": "Database",
        "text": "Cloud architect case analysis 48: Which database fits key-value access at high scale?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Managed NoSQL key-value database"
        ],
        "correct": 3,
        "explanation": "NoSQL key-value systems fit high-scale access patterns."
      },
      {
        "tag": "Architecture",
        "text": "Cloud architect case analysis 49: A loosely coupled workload usually communicates through what?",
        "choices": [
          "Queues or event streams",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Asynchronous messaging decouples producers and consumers."
      },
      {
        "tag": "Security",
        "text": "Cloud architect case analysis 50: Secrets should generally be stored where?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Managed secrets service with access controls",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Managed secrets services support rotation and access policies."
      },
      {
        "tag": "Compute",
        "text": "Cloud architect case analysis 51: Which compute model runs code without managing servers?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Serverless functions",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Serverless abstracts server management."
      },
      {
        "tag": "Networking",
        "text": "Cloud architect case analysis 52: Private subnets are used for resources without what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Direct public internet exposure"
        ],
        "correct": 3,
        "explanation": "Private subnets reduce direct exposure."
      },
      {
        "tag": "Reliability",
        "text": "Cloud architect case analysis 53: Auto scaling responds primarily to what?",
        "choices": [
          "Demand changes or health signals",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Auto scaling adjusts capacity based on metrics."
      },
      {
        "tag": "Cost",
        "text": "Cloud architect case analysis 54: Which practice helps control unexpected cloud spending?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Budgets and cost alerts",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Budgets and alerts detect spend trends early."
      },
      {
        "tag": "Data",
        "text": "Cloud architect case analysis 55: Which approach fits analytics over large columnar datasets?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Data warehouse or lake query service",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Analytical services optimize scans and aggregation."
      },
      {
        "tag": "Migration",
        "text": "Cloud architect case analysis 56: A lift-and-shift migration means what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Rehosting applications with minimal redesign"
        ],
        "correct": 3,
        "explanation": "Rehosting moves workloads with limited redesign."
      },
      {
        "tag": "Identity",
        "text": "Cloud architect case analysis 57: Federation allows users to authenticate through what?",
        "choices": [
          "An external identity provider",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Federation trusts external identities."
      },
      {
        "tag": "Compliance",
        "text": "Cloud architect case analysis 58: Encryption at rest primarily protects what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Stored data",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "At-rest encryption protects persisted data."
      },
      {
        "tag": "Resilience",
        "text": "Cloud architect case analysis 59: Health checks usually support which action?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Routing traffic away from unhealthy targets",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Health checks help avoid failed endpoints."
      },
      {
        "tag": "Performance",
        "text": "Cloud architect case analysis 60: A CDN improves global static asset delivery by doing what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Caching content near users"
        ],
        "correct": 3,
        "explanation": "CDNs reduce latency through edge caching."
      },
      {
        "tag": "Reliability",
        "text": "Cloud architect readiness check 61: Which design improves availability within a cloud region?",
        "choices": [
          "Deploy across multiple availability zones",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Multi-zone designs reduce single-zone failure impact."
      },
      {
        "tag": "Security",
        "text": "Cloud architect readiness check 62: Which IAM practice best supports least privilege?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Grant only permissions required for the task",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Least privilege limits access to minimum needed."
      },
      {
        "tag": "Cost",
        "text": "Cloud architect readiness check 63: Which option can reduce cost for predictable long-running workloads?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Reserved or committed capacity",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Committed discounts fit steady workloads."
      },
      {
        "tag": "Networking",
        "text": "Cloud architect readiness check 64: Which control filters inbound and outbound workload traffic?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Security group or firewall rule"
        ],
        "correct": 3,
        "explanation": "Network security controls restrict traffic."
      },
      {
        "tag": "Storage",
        "text": "Cloud architect readiness check 65: Which storage type fits static assets and backups?",
        "choices": [
          "Object storage",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Object storage is durable and scalable."
      },
      {
        "tag": "Disaster recovery",
        "text": "Cloud architect readiness check 66: Which design improves recovery after a regional outage?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Cross-region backup or replication",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Cross-region copies support recovery."
      },
      {
        "tag": "Operations",
        "text": "Cloud architect readiness check 67: Which capability helps detect latency and service errors?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Monitoring and logging",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Observability tools reveal errors and performance."
      },
      {
        "tag": "Database",
        "text": "Cloud architect readiness check 68: Which database fits key-value access at high scale?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Managed NoSQL key-value database"
        ],
        "correct": 3,
        "explanation": "NoSQL key-value systems fit high-scale access patterns."
      },
      {
        "tag": "Architecture",
        "text": "Cloud architect readiness check 69: A loosely coupled workload usually communicates through what?",
        "choices": [
          "Queues or event streams",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Asynchronous messaging decouples producers and consumers."
      },
      {
        "tag": "Security",
        "text": "Cloud architect readiness check 70: Secrets should generally be stored where?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Managed secrets service with access controls",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Managed secrets services support rotation and access policies."
      },
      {
        "tag": "Compute",
        "text": "Cloud architect readiness check 71: Which compute model runs code without managing servers?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Serverless functions",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Serverless abstracts server management."
      },
      {
        "tag": "Networking",
        "text": "Cloud architect readiness check 72: Private subnets are used for resources without what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Direct public internet exposure"
        ],
        "correct": 3,
        "explanation": "Private subnets reduce direct exposure."
      },
      {
        "tag": "Reliability",
        "text": "Cloud architect readiness check 73: Auto scaling responds primarily to what?",
        "choices": [
          "Demand changes or health signals",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Auto scaling adjusts capacity based on metrics."
      },
      {
        "tag": "Cost",
        "text": "Cloud architect readiness check 74: Which practice helps control unexpected cloud spending?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Budgets and cost alerts",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Budgets and alerts detect spend trends early."
      },
      {
        "tag": "Data",
        "text": "Cloud architect readiness check 75: Which approach fits analytics over large columnar datasets?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Data warehouse or lake query service",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Analytical services optimize scans and aggregation."
      },
      {
        "tag": "Migration",
        "text": "Cloud architect readiness check 76: A lift-and-shift migration means what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Rehosting applications with minimal redesign"
        ],
        "correct": 3,
        "explanation": "Rehosting moves workloads with limited redesign."
      },
      {
        "tag": "Identity",
        "text": "Cloud architect readiness check 77: Federation allows users to authenticate through what?",
        "choices": [
          "An external identity provider",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Federation trusts external identities."
      },
      {
        "tag": "Compliance",
        "text": "Cloud architect readiness check 78: Encryption at rest primarily protects what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Stored data",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "At-rest encryption protects persisted data."
      },
      {
        "tag": "Resilience",
        "text": "Cloud architect readiness check 79: Health checks usually support which action?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Routing traffic away from unhealthy targets",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Health checks help avoid failed endpoints."
      },
      {
        "tag": "Performance",
        "text": "Cloud architect readiness check 80: A CDN improves global static asset delivery by doing what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Caching content near users"
        ],
        "correct": 3,
        "explanation": "CDNs reduce latency through edge caching."
      },
      {
        "tag": "Reliability",
        "text": "Cloud architect weak-area review 81: Which design improves availability within a cloud region?",
        "choices": [
          "Deploy across multiple availability zones",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Multi-zone designs reduce single-zone failure impact."
      },
      {
        "tag": "Security",
        "text": "Cloud architect weak-area review 82: Which IAM practice best supports least privilege?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Grant only permissions required for the task",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Least privilege limits access to minimum needed."
      },
      {
        "tag": "Cost",
        "text": "Cloud architect weak-area review 83: Which option can reduce cost for predictable long-running workloads?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Reserved or committed capacity",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Committed discounts fit steady workloads."
      },
      {
        "tag": "Networking",
        "text": "Cloud architect weak-area review 84: Which control filters inbound and outbound workload traffic?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Security group or firewall rule"
        ],
        "correct": 3,
        "explanation": "Network security controls restrict traffic."
      },
      {
        "tag": "Storage",
        "text": "Cloud architect weak-area review 85: Which storage type fits static assets and backups?",
        "choices": [
          "Object storage",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Object storage is durable and scalable."
      },
      {
        "tag": "Disaster recovery",
        "text": "Cloud architect weak-area review 86: Which design improves recovery after a regional outage?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Cross-region backup or replication",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Cross-region copies support recovery."
      },
      {
        "tag": "Operations",
        "text": "Cloud architect weak-area review 87: Which capability helps detect latency and service errors?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Monitoring and logging",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Observability tools reveal errors and performance."
      },
      {
        "tag": "Database",
        "text": "Cloud architect weak-area review 88: Which database fits key-value access at high scale?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Managed NoSQL key-value database"
        ],
        "correct": 3,
        "explanation": "NoSQL key-value systems fit high-scale access patterns."
      },
      {
        "tag": "Architecture",
        "text": "Cloud architect weak-area review 89: A loosely coupled workload usually communicates through what?",
        "choices": [
          "Queues or event streams",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Asynchronous messaging decouples producers and consumers."
      },
      {
        "tag": "Security",
        "text": "Cloud architect weak-area review 90: Secrets should generally be stored where?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Managed secrets service with access controls",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Managed secrets services support rotation and access policies."
      },
      {
        "tag": "Compute",
        "text": "Cloud architect weak-area review 91: Which compute model runs code without managing servers?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Serverless functions",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Serverless abstracts server management."
      },
      {
        "tag": "Networking",
        "text": "Cloud architect weak-area review 92: Private subnets are used for resources without what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Direct public internet exposure"
        ],
        "correct": 3,
        "explanation": "Private subnets reduce direct exposure."
      },
      {
        "tag": "Reliability",
        "text": "Cloud architect weak-area review 93: Auto scaling responds primarily to what?",
        "choices": [
          "Demand changes or health signals",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Auto scaling adjusts capacity based on metrics."
      },
      {
        "tag": "Cost",
        "text": "Cloud architect weak-area review 94: Which practice helps control unexpected cloud spending?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Budgets and cost alerts",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Budgets and alerts detect spend trends early."
      },
      {
        "tag": "Data",
        "text": "Cloud architect weak-area review 95: Which approach fits analytics over large columnar datasets?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Data warehouse or lake query service",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Analytical services optimize scans and aggregation."
      },
      {
        "tag": "Migration",
        "text": "Cloud architect weak-area review 96: A lift-and-shift migration means what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Rehosting applications with minimal redesign"
        ],
        "correct": 3,
        "explanation": "Rehosting moves workloads with limited redesign."
      },
      {
        "tag": "Identity",
        "text": "Cloud architect weak-area review 97: Federation allows users to authenticate through what?",
        "choices": [
          "An external identity provider",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Federation trusts external identities."
      },
      {
        "tag": "Compliance",
        "text": "Cloud architect weak-area review 98: Encryption at rest primarily protects what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Stored data",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "At-rest encryption protects persisted data."
      },
      {
        "tag": "Resilience",
        "text": "Cloud architect weak-area review 99: Health checks usually support which action?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Routing traffic away from unhealthy targets",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Health checks help avoid failed endpoints."
      },
      {
        "tag": "Performance",
        "text": "Cloud architect weak-area review 100: A CDN improves global static asset delivery by doing what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Caching content near users"
        ],
        "correct": 3,
        "explanation": "CDNs reduce latency through edge caching."
      }
    ]
  },
  {
    "id": "pmp",
    "track": "project",
    "country": "Global",
    "region": "Project Management",
    "examType": "Project Management",
    "title": "PMP Project Management",
    "subtitle": "PMI project management certification",
    "badge": "PMP",
    "questionCount": 100,
    "updated": "2026",
    "source": "PMI PMP Examination Content Outline",
    "coverage": [
      "People",
      "Process",
      "Business environment",
      "Agile",
      "Hybrid delivery"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "Scenario-based PMP practice for people, process, business environment, agile, hybrid, and predictive delivery.",
    "questions": [
      {
        "tag": "People",
        "text": "PMP initial review 1: A stakeholder bypasses the project manager with conflicting direction. What should happen first?",
        "choices": [
          "Meet with the stakeholder to clarify expectations and channels",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Direct communication should be attempted before escalation."
      },
      {
        "tag": "Change control",
        "text": "PMP initial review 2: A customer requests new scope after baseline approval. What is the best next step?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Submit the request through integrated change control",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Baselined scope changes require formal review."
      },
      {
        "tag": "Agile",
        "text": "PMP initial review 3: A product owner asks to replace sprint work with urgent work. What should the Scrum Master do?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Facilitate discussion while protecting the sprint goal",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Agile leadership emphasizes facilitation and transparency."
      },
      {
        "tag": "Risk",
        "text": "PMP initial review 4: A previously identified risk occurs and affects delivery. What should be updated first?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Issue log"
        ],
        "correct": 3,
        "explanation": "Once a risk occurs, it becomes an issue."
      },
      {
        "tag": "Business Environment",
        "text": "PMP initial review 5: A deliverable meets specs but no longer supports strategy. What should be the focus?",
        "choices": [
          "Confirm business value and strategic alignment",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Project success depends on value delivery."
      },
      {
        "tag": "Stakeholders",
        "text": "PMP initial review 6: A stakeholder has high influence but low interest. What engagement approach is common?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Keep satisfied",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "High-power, low-interest stakeholders are usually kept satisfied."
      },
      {
        "tag": "Quality",
        "text": "PMP initial review 7: Repeated defects occur at the same step. What should be encouraged?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Root cause analysis",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Root cause analysis identifies underlying causes."
      },
      {
        "tag": "Agile",
        "text": "PMP initial review 8: A retrospective identifies an improvement action. What should happen next?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Track the action in the next iteration"
        ],
        "correct": 3,
        "explanation": "Retrospective actions should be visible and followed up."
      },
      {
        "tag": "Schedule",
        "text": "PMP initial review 9: A critical path activity is delayed. What is the likely impact?",
        "choices": [
          "Project finish date may be delayed",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Critical path delays can delay completion."
      },
      {
        "tag": "Procurement",
        "text": "PMP initial review 10: A fixed-price contract primarily shifts cost overrun risk to whom?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Seller",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Fixed-price contracts place more cost risk on the seller."
      },
      {
        "tag": "Communications",
        "text": "PMP initial review 11: A distributed team misses key decisions. What should improve?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Communication management plan and information radiators",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Clear communication methods align distributed teams."
      },
      {
        "tag": "Resources",
        "text": "PMP initial review 12: Two managers need the same specialist. What should the PM do?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Negotiate resource priorities using the resource management plan"
        ],
        "correct": 3,
        "explanation": "Resource conflicts are resolved through planning and negotiation."
      },
      {
        "tag": "Scope",
        "text": "PMP initial review 13: Work added informally by team members is called what?",
        "choices": [
          "Scope creep",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Uncontrolled expansion of scope is scope creep."
      },
      {
        "tag": "Cost",
        "text": "PMP initial review 14: Cost performance index is earned value divided by what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Actual cost",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "CPI = EV / AC."
      },
      {
        "tag": "Risk",
        "text": "PMP initial review 15: Purchasing insurance is which risk response?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Transfer",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Insurance transfers some financial impact."
      },
      {
        "tag": "Leadership",
        "text": "PMP initial review 16: A servant leader primarily focuses on what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Removing impediments and supporting the team"
        ],
        "correct": 3,
        "explanation": "Servant leadership enables team performance."
      },
      {
        "tag": "Hybrid",
        "text": "PMP initial review 17: Predictive planning for hardware and agile for software is what approach?",
        "choices": [
          "Hybrid delivery",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Hybrid delivery combines predictive and adaptive practices."
      },
      {
        "tag": "Benefits",
        "text": "PMP initial review 18: Benefits realization should be reviewed against what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Business case and benefits management plan",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Benefits are tracked against expected value."
      },
      {
        "tag": "Conflict",
        "text": "PMP initial review 19: Two team members disagree on technical approach. What should the PM do first?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Facilitate collaborative problem solving",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Collaboration preserves team ownership."
      },
      {
        "tag": "Governance",
        "text": "PMP initial review 20: A phase gate is used primarily to do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Review whether to continue to the next phase"
        ],
        "correct": 3,
        "explanation": "Phase gates support go/no-go decisions."
      },
      {
        "tag": "People",
        "text": "PMP timed drill 21: A stakeholder bypasses the project manager with conflicting direction. What should happen first?",
        "choices": [
          "Meet with the stakeholder to clarify expectations and channels",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Direct communication should be attempted before escalation."
      },
      {
        "tag": "Change control",
        "text": "PMP timed drill 22: A customer requests new scope after baseline approval. What is the best next step?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Submit the request through integrated change control",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Baselined scope changes require formal review."
      },
      {
        "tag": "Agile",
        "text": "PMP timed drill 23: A product owner asks to replace sprint work with urgent work. What should the Scrum Master do?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Facilitate discussion while protecting the sprint goal",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Agile leadership emphasizes facilitation and transparency."
      },
      {
        "tag": "Risk",
        "text": "PMP timed drill 24: A previously identified risk occurs and affects delivery. What should be updated first?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Issue log"
        ],
        "correct": 3,
        "explanation": "Once a risk occurs, it becomes an issue."
      },
      {
        "tag": "Business Environment",
        "text": "PMP timed drill 25: A deliverable meets specs but no longer supports strategy. What should be the focus?",
        "choices": [
          "Confirm business value and strategic alignment",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Project success depends on value delivery."
      },
      {
        "tag": "Stakeholders",
        "text": "PMP timed drill 26: A stakeholder has high influence but low interest. What engagement approach is common?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Keep satisfied",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "High-power, low-interest stakeholders are usually kept satisfied."
      },
      {
        "tag": "Quality",
        "text": "PMP timed drill 27: Repeated defects occur at the same step. What should be encouraged?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Root cause analysis",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Root cause analysis identifies underlying causes."
      },
      {
        "tag": "Agile",
        "text": "PMP timed drill 28: A retrospective identifies an improvement action. What should happen next?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Track the action in the next iteration"
        ],
        "correct": 3,
        "explanation": "Retrospective actions should be visible and followed up."
      },
      {
        "tag": "Schedule",
        "text": "PMP timed drill 29: A critical path activity is delayed. What is the likely impact?",
        "choices": [
          "Project finish date may be delayed",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Critical path delays can delay completion."
      },
      {
        "tag": "Procurement",
        "text": "PMP timed drill 30: A fixed-price contract primarily shifts cost overrun risk to whom?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Seller",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Fixed-price contracts place more cost risk on the seller."
      },
      {
        "tag": "Communications",
        "text": "PMP timed drill 31: A distributed team misses key decisions. What should improve?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Communication management plan and information radiators",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Clear communication methods align distributed teams."
      },
      {
        "tag": "Resources",
        "text": "PMP timed drill 32: Two managers need the same specialist. What should the PM do?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Negotiate resource priorities using the resource management plan"
        ],
        "correct": 3,
        "explanation": "Resource conflicts are resolved through planning and negotiation."
      },
      {
        "tag": "Scope",
        "text": "PMP timed drill 33: Work added informally by team members is called what?",
        "choices": [
          "Scope creep",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Uncontrolled expansion of scope is scope creep."
      },
      {
        "tag": "Cost",
        "text": "PMP timed drill 34: Cost performance index is earned value divided by what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Actual cost",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "CPI = EV / AC."
      },
      {
        "tag": "Risk",
        "text": "PMP timed drill 35: Purchasing insurance is which risk response?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Transfer",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Insurance transfers some financial impact."
      },
      {
        "tag": "Leadership",
        "text": "PMP timed drill 36: A servant leader primarily focuses on what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Removing impediments and supporting the team"
        ],
        "correct": 3,
        "explanation": "Servant leadership enables team performance."
      },
      {
        "tag": "Hybrid",
        "text": "PMP timed drill 37: Predictive planning for hardware and agile for software is what approach?",
        "choices": [
          "Hybrid delivery",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Hybrid delivery combines predictive and adaptive practices."
      },
      {
        "tag": "Benefits",
        "text": "PMP timed drill 38: Benefits realization should be reviewed against what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Business case and benefits management plan",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Benefits are tracked against expected value."
      },
      {
        "tag": "Conflict",
        "text": "PMP timed drill 39: Two team members disagree on technical approach. What should the PM do first?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Facilitate collaborative problem solving",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Collaboration preserves team ownership."
      },
      {
        "tag": "Governance",
        "text": "PMP timed drill 40: A phase gate is used primarily to do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Review whether to continue to the next phase"
        ],
        "correct": 3,
        "explanation": "Phase gates support go/no-go decisions."
      },
      {
        "tag": "People",
        "text": "PMP case analysis 41: A stakeholder bypasses the project manager with conflicting direction. What should happen first?",
        "choices": [
          "Meet with the stakeholder to clarify expectations and channels",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Direct communication should be attempted before escalation."
      },
      {
        "tag": "Change control",
        "text": "PMP case analysis 42: A customer requests new scope after baseline approval. What is the best next step?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Submit the request through integrated change control",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Baselined scope changes require formal review."
      },
      {
        "tag": "Agile",
        "text": "PMP case analysis 43: A product owner asks to replace sprint work with urgent work. What should the Scrum Master do?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Facilitate discussion while protecting the sprint goal",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Agile leadership emphasizes facilitation and transparency."
      },
      {
        "tag": "Risk",
        "text": "PMP case analysis 44: A previously identified risk occurs and affects delivery. What should be updated first?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Issue log"
        ],
        "correct": 3,
        "explanation": "Once a risk occurs, it becomes an issue."
      },
      {
        "tag": "Business Environment",
        "text": "PMP case analysis 45: A deliverable meets specs but no longer supports strategy. What should be the focus?",
        "choices": [
          "Confirm business value and strategic alignment",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Project success depends on value delivery."
      },
      {
        "tag": "Stakeholders",
        "text": "PMP case analysis 46: A stakeholder has high influence but low interest. What engagement approach is common?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Keep satisfied",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "High-power, low-interest stakeholders are usually kept satisfied."
      },
      {
        "tag": "Quality",
        "text": "PMP case analysis 47: Repeated defects occur at the same step. What should be encouraged?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Root cause analysis",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Root cause analysis identifies underlying causes."
      },
      {
        "tag": "Agile",
        "text": "PMP case analysis 48: A retrospective identifies an improvement action. What should happen next?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Track the action in the next iteration"
        ],
        "correct": 3,
        "explanation": "Retrospective actions should be visible and followed up."
      },
      {
        "tag": "Schedule",
        "text": "PMP case analysis 49: A critical path activity is delayed. What is the likely impact?",
        "choices": [
          "Project finish date may be delayed",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Critical path delays can delay completion."
      },
      {
        "tag": "Procurement",
        "text": "PMP case analysis 50: A fixed-price contract primarily shifts cost overrun risk to whom?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Seller",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Fixed-price contracts place more cost risk on the seller."
      },
      {
        "tag": "Communications",
        "text": "PMP case analysis 51: A distributed team misses key decisions. What should improve?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Communication management plan and information radiators",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Clear communication methods align distributed teams."
      },
      {
        "tag": "Resources",
        "text": "PMP case analysis 52: Two managers need the same specialist. What should the PM do?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Negotiate resource priorities using the resource management plan"
        ],
        "correct": 3,
        "explanation": "Resource conflicts are resolved through planning and negotiation."
      },
      {
        "tag": "Scope",
        "text": "PMP case analysis 53: Work added informally by team members is called what?",
        "choices": [
          "Scope creep",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Uncontrolled expansion of scope is scope creep."
      },
      {
        "tag": "Cost",
        "text": "PMP case analysis 54: Cost performance index is earned value divided by what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Actual cost",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "CPI = EV / AC."
      },
      {
        "tag": "Risk",
        "text": "PMP case analysis 55: Purchasing insurance is which risk response?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Transfer",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Insurance transfers some financial impact."
      },
      {
        "tag": "Leadership",
        "text": "PMP case analysis 56: A servant leader primarily focuses on what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Removing impediments and supporting the team"
        ],
        "correct": 3,
        "explanation": "Servant leadership enables team performance."
      },
      {
        "tag": "Hybrid",
        "text": "PMP case analysis 57: Predictive planning for hardware and agile for software is what approach?",
        "choices": [
          "Hybrid delivery",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Hybrid delivery combines predictive and adaptive practices."
      },
      {
        "tag": "Benefits",
        "text": "PMP case analysis 58: Benefits realization should be reviewed against what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Business case and benefits management plan",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Benefits are tracked against expected value."
      },
      {
        "tag": "Conflict",
        "text": "PMP case analysis 59: Two team members disagree on technical approach. What should the PM do first?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Facilitate collaborative problem solving",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Collaboration preserves team ownership."
      },
      {
        "tag": "Governance",
        "text": "PMP case analysis 60: A phase gate is used primarily to do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Review whether to continue to the next phase"
        ],
        "correct": 3,
        "explanation": "Phase gates support go/no-go decisions."
      },
      {
        "tag": "People",
        "text": "PMP readiness check 61: A stakeholder bypasses the project manager with conflicting direction. What should happen first?",
        "choices": [
          "Meet with the stakeholder to clarify expectations and channels",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Direct communication should be attempted before escalation."
      },
      {
        "tag": "Change control",
        "text": "PMP readiness check 62: A customer requests new scope after baseline approval. What is the best next step?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Submit the request through integrated change control",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Baselined scope changes require formal review."
      },
      {
        "tag": "Agile",
        "text": "PMP readiness check 63: A product owner asks to replace sprint work with urgent work. What should the Scrum Master do?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Facilitate discussion while protecting the sprint goal",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Agile leadership emphasizes facilitation and transparency."
      },
      {
        "tag": "Risk",
        "text": "PMP readiness check 64: A previously identified risk occurs and affects delivery. What should be updated first?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Issue log"
        ],
        "correct": 3,
        "explanation": "Once a risk occurs, it becomes an issue."
      },
      {
        "tag": "Business Environment",
        "text": "PMP readiness check 65: A deliverable meets specs but no longer supports strategy. What should be the focus?",
        "choices": [
          "Confirm business value and strategic alignment",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Project success depends on value delivery."
      },
      {
        "tag": "Stakeholders",
        "text": "PMP readiness check 66: A stakeholder has high influence but low interest. What engagement approach is common?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Keep satisfied",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "High-power, low-interest stakeholders are usually kept satisfied."
      },
      {
        "tag": "Quality",
        "text": "PMP readiness check 67: Repeated defects occur at the same step. What should be encouraged?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Root cause analysis",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Root cause analysis identifies underlying causes."
      },
      {
        "tag": "Agile",
        "text": "PMP readiness check 68: A retrospective identifies an improvement action. What should happen next?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Track the action in the next iteration"
        ],
        "correct": 3,
        "explanation": "Retrospective actions should be visible and followed up."
      },
      {
        "tag": "Schedule",
        "text": "PMP readiness check 69: A critical path activity is delayed. What is the likely impact?",
        "choices": [
          "Project finish date may be delayed",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Critical path delays can delay completion."
      },
      {
        "tag": "Procurement",
        "text": "PMP readiness check 70: A fixed-price contract primarily shifts cost overrun risk to whom?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Seller",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Fixed-price contracts place more cost risk on the seller."
      },
      {
        "tag": "Communications",
        "text": "PMP readiness check 71: A distributed team misses key decisions. What should improve?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Communication management plan and information radiators",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Clear communication methods align distributed teams."
      },
      {
        "tag": "Resources",
        "text": "PMP readiness check 72: Two managers need the same specialist. What should the PM do?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Negotiate resource priorities using the resource management plan"
        ],
        "correct": 3,
        "explanation": "Resource conflicts are resolved through planning and negotiation."
      },
      {
        "tag": "Scope",
        "text": "PMP readiness check 73: Work added informally by team members is called what?",
        "choices": [
          "Scope creep",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Uncontrolled expansion of scope is scope creep."
      },
      {
        "tag": "Cost",
        "text": "PMP readiness check 74: Cost performance index is earned value divided by what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Actual cost",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "CPI = EV / AC."
      },
      {
        "tag": "Risk",
        "text": "PMP readiness check 75: Purchasing insurance is which risk response?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Transfer",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Insurance transfers some financial impact."
      },
      {
        "tag": "Leadership",
        "text": "PMP readiness check 76: A servant leader primarily focuses on what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Removing impediments and supporting the team"
        ],
        "correct": 3,
        "explanation": "Servant leadership enables team performance."
      },
      {
        "tag": "Hybrid",
        "text": "PMP readiness check 77: Predictive planning for hardware and agile for software is what approach?",
        "choices": [
          "Hybrid delivery",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Hybrid delivery combines predictive and adaptive practices."
      },
      {
        "tag": "Benefits",
        "text": "PMP readiness check 78: Benefits realization should be reviewed against what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Business case and benefits management plan",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Benefits are tracked against expected value."
      },
      {
        "tag": "Conflict",
        "text": "PMP readiness check 79: Two team members disagree on technical approach. What should the PM do first?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Facilitate collaborative problem solving",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Collaboration preserves team ownership."
      },
      {
        "tag": "Governance",
        "text": "PMP readiness check 80: A phase gate is used primarily to do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Review whether to continue to the next phase"
        ],
        "correct": 3,
        "explanation": "Phase gates support go/no-go decisions."
      },
      {
        "tag": "People",
        "text": "PMP weak-area review 81: A stakeholder bypasses the project manager with conflicting direction. What should happen first?",
        "choices": [
          "Meet with the stakeholder to clarify expectations and channels",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Direct communication should be attempted before escalation."
      },
      {
        "tag": "Change control",
        "text": "PMP weak-area review 82: A customer requests new scope after baseline approval. What is the best next step?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Submit the request through integrated change control",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Baselined scope changes require formal review."
      },
      {
        "tag": "Agile",
        "text": "PMP weak-area review 83: A product owner asks to replace sprint work with urgent work. What should the Scrum Master do?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Facilitate discussion while protecting the sprint goal",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Agile leadership emphasizes facilitation and transparency."
      },
      {
        "tag": "Risk",
        "text": "PMP weak-area review 84: A previously identified risk occurs and affects delivery. What should be updated first?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Issue log"
        ],
        "correct": 3,
        "explanation": "Once a risk occurs, it becomes an issue."
      },
      {
        "tag": "Business Environment",
        "text": "PMP weak-area review 85: A deliverable meets specs but no longer supports strategy. What should be the focus?",
        "choices": [
          "Confirm business value and strategic alignment",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Project success depends on value delivery."
      },
      {
        "tag": "Stakeholders",
        "text": "PMP weak-area review 86: A stakeholder has high influence but low interest. What engagement approach is common?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Keep satisfied",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "High-power, low-interest stakeholders are usually kept satisfied."
      },
      {
        "tag": "Quality",
        "text": "PMP weak-area review 87: Repeated defects occur at the same step. What should be encouraged?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Root cause analysis",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Root cause analysis identifies underlying causes."
      },
      {
        "tag": "Agile",
        "text": "PMP weak-area review 88: A retrospective identifies an improvement action. What should happen next?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Track the action in the next iteration"
        ],
        "correct": 3,
        "explanation": "Retrospective actions should be visible and followed up."
      },
      {
        "tag": "Schedule",
        "text": "PMP weak-area review 89: A critical path activity is delayed. What is the likely impact?",
        "choices": [
          "Project finish date may be delayed",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Critical path delays can delay completion."
      },
      {
        "tag": "Procurement",
        "text": "PMP weak-area review 90: A fixed-price contract primarily shifts cost overrun risk to whom?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Seller",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Fixed-price contracts place more cost risk on the seller."
      },
      {
        "tag": "Communications",
        "text": "PMP weak-area review 91: A distributed team misses key decisions. What should improve?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Communication management plan and information radiators",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Clear communication methods align distributed teams."
      },
      {
        "tag": "Resources",
        "text": "PMP weak-area review 92: Two managers need the same specialist. What should the PM do?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Negotiate resource priorities using the resource management plan"
        ],
        "correct": 3,
        "explanation": "Resource conflicts are resolved through planning and negotiation."
      },
      {
        "tag": "Scope",
        "text": "PMP weak-area review 93: Work added informally by team members is called what?",
        "choices": [
          "Scope creep",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Uncontrolled expansion of scope is scope creep."
      },
      {
        "tag": "Cost",
        "text": "PMP weak-area review 94: Cost performance index is earned value divided by what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Actual cost",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "CPI = EV / AC."
      },
      {
        "tag": "Risk",
        "text": "PMP weak-area review 95: Purchasing insurance is which risk response?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Transfer",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Insurance transfers some financial impact."
      },
      {
        "tag": "Leadership",
        "text": "PMP weak-area review 96: A servant leader primarily focuses on what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Removing impediments and supporting the team"
        ],
        "correct": 3,
        "explanation": "Servant leadership enables team performance."
      },
      {
        "tag": "Hybrid",
        "text": "PMP weak-area review 97: Predictive planning for hardware and agile for software is what approach?",
        "choices": [
          "Hybrid delivery",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Hybrid delivery combines predictive and adaptive practices."
      },
      {
        "tag": "Benefits",
        "text": "PMP weak-area review 98: Benefits realization should be reviewed against what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Business case and benefits management plan",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Benefits are tracked against expected value."
      },
      {
        "tag": "Conflict",
        "text": "PMP weak-area review 99: Two team members disagree on technical approach. What should the PM do first?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Facilitate collaborative problem solving",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Collaboration preserves team ownership."
      },
      {
        "tag": "Governance",
        "text": "PMP weak-area review 100: A phase gate is used primarily to do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Review whether to continue to the next phase"
        ],
        "correct": 3,
        "explanation": "Phase gates support go/no-go decisions."
      }
    ]
  },
  {
    "id": "bar",
    "track": "law",
    "country": "United States",
    "region": "NY / CA",
    "examType": "Law & Public Service",
    "title": "美国律考Bar",
    "subtitle": "NY & CA Bar",
    "badge": "法律",
    "questionCount": 100,
    "updated": "2026",
    "source": "UBE and state bar outlines",
    "coverage": [
      "MBE",
      "MEE",
      "Evidence",
      "Contracts",
      "Constitutional law"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "MBE多选倒计时严训、MEE范文对比、长文阅读夜间模式。",
    "questions": [
      {
        "tag": "Contracts",
        "text": "US Bar initial review 1: Which element is generally required for a valid contract?",
        "choices": [
          "Consideration",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Contracts generally require offer, acceptance, consideration, and no defense."
      },
      {
        "tag": "Evidence",
        "text": "US Bar initial review 2: Hearsay is an out-of-court statement offered for what purpose?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "To prove the truth of the matter asserted",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "That is the basic hearsay definition."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar initial review 3: Strict scrutiny requires narrow tailoring to serve what interest?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Compelling government interest",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Strict scrutiny requires a compelling interest and narrow tailoring."
      },
      {
        "tag": "Torts",
        "text": "US Bar initial review 4: Negligence generally requires duty, breach, causation, and what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Damages"
        ],
        "correct": 3,
        "explanation": "Damages are an element of negligence."
      },
      {
        "tag": "Criminal law",
        "text": "US Bar initial review 5: Common law burglary traditionally required entry with what intent?",
        "choices": [
          "Intent to commit a felony inside",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Traditional burglary includes felony intent."
      },
      {
        "tag": "Property",
        "text": "US Bar initial review 6: A leasehold estate primarily gives a tenant what right?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Possession for a period of time",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Leaseholds create possessory rights for a term."
      },
      {
        "tag": "Civil procedure",
        "text": "US Bar initial review 7: Personal jurisdiction concerns what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "A court's power over a party",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Personal jurisdiction asks whether the court can bind the defendant."
      },
      {
        "tag": "Contracts",
        "text": "US Bar initial review 8: A material breach generally allows the nonbreaching party to do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Suspend performance and seek damages"
        ],
        "correct": 3,
        "explanation": "Material breach can excuse further performance."
      },
      {
        "tag": "Evidence",
        "text": "US Bar initial review 9: Which privilege protects confidential attorney-client communications for legal advice?",
        "choices": [
          "Attorney-client privilege",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "The privilege protects qualifying confidential legal communications."
      },
      {
        "tag": "Property",
        "text": "US Bar initial review 10: Adverse possession usually requires possession that is actual, open, notorious, exclusive, hostile, and what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Continuous for the statutory period",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Continuity for the required period is a common element."
      },
      {
        "tag": "Criminal procedure",
        "text": "US Bar initial review 11: Miranda warnings are generally required before custodial what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Interrogation",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Miranda applies to custodial interrogation."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar initial review 12: Rational basis review requires a law to be rationally related to what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Legitimate government interest"
        ],
        "correct": 3,
        "explanation": "Rational basis requires a legitimate interest."
      },
      {
        "tag": "Torts",
        "text": "US Bar initial review 13: Battery generally requires harmful or offensive contact and what mental state?",
        "choices": [
          "Intent",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Battery is an intentional tort."
      },
      {
        "tag": "Civil procedure",
        "text": "US Bar initial review 14: Subject matter jurisdiction concerns what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "A court's power to hear the type of case",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Subject matter jurisdiction is authority over the category of dispute."
      },
      {
        "tag": "Contracts",
        "text": "US Bar initial review 15: The parol evidence rule limits evidence that would vary what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "A final integrated written agreement",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "The rule restricts prior or contemporaneous contradictory evidence."
      },
      {
        "tag": "Evidence",
        "text": "US Bar initial review 16: Relevant evidence must tend to make a fact more or less probable and be what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Of consequence to the action"
        ],
        "correct": 3,
        "explanation": "Relevance requires probative value and materiality."
      },
      {
        "tag": "Property",
        "text": "US Bar initial review 17: A fee simple absolute is best described as what?",
        "choices": [
          "The broadest present possessory estate",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Fee simple absolute is potentially infinite and transferable."
      },
      {
        "tag": "Criminal law",
        "text": "US Bar initial review 18: Larceny traditionally requires intent to do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Permanently deprive the owner",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Intent to permanently deprive is central."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar initial review 19: Content-based speech restrictions usually receive what review?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Strict scrutiny",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Content-based restrictions are generally subject to strict scrutiny."
      },
      {
        "tag": "Torts",
        "text": "US Bar initial review 20: Strict products liability generally focuses on what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Defective product causing injury"
        ],
        "correct": 3,
        "explanation": "Strict products liability applies when a defective product causes harm."
      },
      {
        "tag": "Contracts",
        "text": "US Bar timed drill 21: Which element is generally required for a valid contract?",
        "choices": [
          "Consideration",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Contracts generally require offer, acceptance, consideration, and no defense."
      },
      {
        "tag": "Evidence",
        "text": "US Bar timed drill 22: Hearsay is an out-of-court statement offered for what purpose?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "To prove the truth of the matter asserted",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "That is the basic hearsay definition."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar timed drill 23: Strict scrutiny requires narrow tailoring to serve what interest?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Compelling government interest",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Strict scrutiny requires a compelling interest and narrow tailoring."
      },
      {
        "tag": "Torts",
        "text": "US Bar timed drill 24: Negligence generally requires duty, breach, causation, and what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Damages"
        ],
        "correct": 3,
        "explanation": "Damages are an element of negligence."
      },
      {
        "tag": "Criminal law",
        "text": "US Bar timed drill 25: Common law burglary traditionally required entry with what intent?",
        "choices": [
          "Intent to commit a felony inside",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Traditional burglary includes felony intent."
      },
      {
        "tag": "Property",
        "text": "US Bar timed drill 26: A leasehold estate primarily gives a tenant what right?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Possession for a period of time",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Leaseholds create possessory rights for a term."
      },
      {
        "tag": "Civil procedure",
        "text": "US Bar timed drill 27: Personal jurisdiction concerns what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "A court's power over a party",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Personal jurisdiction asks whether the court can bind the defendant."
      },
      {
        "tag": "Contracts",
        "text": "US Bar timed drill 28: A material breach generally allows the nonbreaching party to do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Suspend performance and seek damages"
        ],
        "correct": 3,
        "explanation": "Material breach can excuse further performance."
      },
      {
        "tag": "Evidence",
        "text": "US Bar timed drill 29: Which privilege protects confidential attorney-client communications for legal advice?",
        "choices": [
          "Attorney-client privilege",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "The privilege protects qualifying confidential legal communications."
      },
      {
        "tag": "Property",
        "text": "US Bar timed drill 30: Adverse possession usually requires possession that is actual, open, notorious, exclusive, hostile, and what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Continuous for the statutory period",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Continuity for the required period is a common element."
      },
      {
        "tag": "Criminal procedure",
        "text": "US Bar timed drill 31: Miranda warnings are generally required before custodial what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Interrogation",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Miranda applies to custodial interrogation."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar timed drill 32: Rational basis review requires a law to be rationally related to what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Legitimate government interest"
        ],
        "correct": 3,
        "explanation": "Rational basis requires a legitimate interest."
      },
      {
        "tag": "Torts",
        "text": "US Bar timed drill 33: Battery generally requires harmful or offensive contact and what mental state?",
        "choices": [
          "Intent",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Battery is an intentional tort."
      },
      {
        "tag": "Civil procedure",
        "text": "US Bar timed drill 34: Subject matter jurisdiction concerns what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "A court's power to hear the type of case",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Subject matter jurisdiction is authority over the category of dispute."
      },
      {
        "tag": "Contracts",
        "text": "US Bar timed drill 35: The parol evidence rule limits evidence that would vary what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "A final integrated written agreement",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "The rule restricts prior or contemporaneous contradictory evidence."
      },
      {
        "tag": "Evidence",
        "text": "US Bar timed drill 36: Relevant evidence must tend to make a fact more or less probable and be what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Of consequence to the action"
        ],
        "correct": 3,
        "explanation": "Relevance requires probative value and materiality."
      },
      {
        "tag": "Property",
        "text": "US Bar timed drill 37: A fee simple absolute is best described as what?",
        "choices": [
          "The broadest present possessory estate",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Fee simple absolute is potentially infinite and transferable."
      },
      {
        "tag": "Criminal law",
        "text": "US Bar timed drill 38: Larceny traditionally requires intent to do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Permanently deprive the owner",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Intent to permanently deprive is central."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar timed drill 39: Content-based speech restrictions usually receive what review?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Strict scrutiny",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Content-based restrictions are generally subject to strict scrutiny."
      },
      {
        "tag": "Torts",
        "text": "US Bar timed drill 40: Strict products liability generally focuses on what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Defective product causing injury"
        ],
        "correct": 3,
        "explanation": "Strict products liability applies when a defective product causes harm."
      },
      {
        "tag": "Contracts",
        "text": "US Bar case analysis 41: Which element is generally required for a valid contract?",
        "choices": [
          "Consideration",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Contracts generally require offer, acceptance, consideration, and no defense."
      },
      {
        "tag": "Evidence",
        "text": "US Bar case analysis 42: Hearsay is an out-of-court statement offered for what purpose?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "To prove the truth of the matter asserted",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "That is the basic hearsay definition."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar case analysis 43: Strict scrutiny requires narrow tailoring to serve what interest?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Compelling government interest",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Strict scrutiny requires a compelling interest and narrow tailoring."
      },
      {
        "tag": "Torts",
        "text": "US Bar case analysis 44: Negligence generally requires duty, breach, causation, and what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Damages"
        ],
        "correct": 3,
        "explanation": "Damages are an element of negligence."
      },
      {
        "tag": "Criminal law",
        "text": "US Bar case analysis 45: Common law burglary traditionally required entry with what intent?",
        "choices": [
          "Intent to commit a felony inside",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Traditional burglary includes felony intent."
      },
      {
        "tag": "Property",
        "text": "US Bar case analysis 46: A leasehold estate primarily gives a tenant what right?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Possession for a period of time",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Leaseholds create possessory rights for a term."
      },
      {
        "tag": "Civil procedure",
        "text": "US Bar case analysis 47: Personal jurisdiction concerns what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "A court's power over a party",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Personal jurisdiction asks whether the court can bind the defendant."
      },
      {
        "tag": "Contracts",
        "text": "US Bar case analysis 48: A material breach generally allows the nonbreaching party to do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Suspend performance and seek damages"
        ],
        "correct": 3,
        "explanation": "Material breach can excuse further performance."
      },
      {
        "tag": "Evidence",
        "text": "US Bar case analysis 49: Which privilege protects confidential attorney-client communications for legal advice?",
        "choices": [
          "Attorney-client privilege",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "The privilege protects qualifying confidential legal communications."
      },
      {
        "tag": "Property",
        "text": "US Bar case analysis 50: Adverse possession usually requires possession that is actual, open, notorious, exclusive, hostile, and what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Continuous for the statutory period",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Continuity for the required period is a common element."
      },
      {
        "tag": "Criminal procedure",
        "text": "US Bar case analysis 51: Miranda warnings are generally required before custodial what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Interrogation",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Miranda applies to custodial interrogation."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar case analysis 52: Rational basis review requires a law to be rationally related to what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Legitimate government interest"
        ],
        "correct": 3,
        "explanation": "Rational basis requires a legitimate interest."
      },
      {
        "tag": "Torts",
        "text": "US Bar case analysis 53: Battery generally requires harmful or offensive contact and what mental state?",
        "choices": [
          "Intent",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Battery is an intentional tort."
      },
      {
        "tag": "Civil procedure",
        "text": "US Bar case analysis 54: Subject matter jurisdiction concerns what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "A court's power to hear the type of case",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Subject matter jurisdiction is authority over the category of dispute."
      },
      {
        "tag": "Contracts",
        "text": "US Bar case analysis 55: The parol evidence rule limits evidence that would vary what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "A final integrated written agreement",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "The rule restricts prior or contemporaneous contradictory evidence."
      },
      {
        "tag": "Evidence",
        "text": "US Bar case analysis 56: Relevant evidence must tend to make a fact more or less probable and be what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Of consequence to the action"
        ],
        "correct": 3,
        "explanation": "Relevance requires probative value and materiality."
      },
      {
        "tag": "Property",
        "text": "US Bar case analysis 57: A fee simple absolute is best described as what?",
        "choices": [
          "The broadest present possessory estate",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Fee simple absolute is potentially infinite and transferable."
      },
      {
        "tag": "Criminal law",
        "text": "US Bar case analysis 58: Larceny traditionally requires intent to do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Permanently deprive the owner",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Intent to permanently deprive is central."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar case analysis 59: Content-based speech restrictions usually receive what review?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Strict scrutiny",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Content-based restrictions are generally subject to strict scrutiny."
      },
      {
        "tag": "Torts",
        "text": "US Bar case analysis 60: Strict products liability generally focuses on what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Defective product causing injury"
        ],
        "correct": 3,
        "explanation": "Strict products liability applies when a defective product causes harm."
      },
      {
        "tag": "Contracts",
        "text": "US Bar readiness check 61: Which element is generally required for a valid contract?",
        "choices": [
          "Consideration",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Contracts generally require offer, acceptance, consideration, and no defense."
      },
      {
        "tag": "Evidence",
        "text": "US Bar readiness check 62: Hearsay is an out-of-court statement offered for what purpose?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "To prove the truth of the matter asserted",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "That is the basic hearsay definition."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar readiness check 63: Strict scrutiny requires narrow tailoring to serve what interest?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Compelling government interest",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Strict scrutiny requires a compelling interest and narrow tailoring."
      },
      {
        "tag": "Torts",
        "text": "US Bar readiness check 64: Negligence generally requires duty, breach, causation, and what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Damages"
        ],
        "correct": 3,
        "explanation": "Damages are an element of negligence."
      },
      {
        "tag": "Criminal law",
        "text": "US Bar readiness check 65: Common law burglary traditionally required entry with what intent?",
        "choices": [
          "Intent to commit a felony inside",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Traditional burglary includes felony intent."
      },
      {
        "tag": "Property",
        "text": "US Bar readiness check 66: A leasehold estate primarily gives a tenant what right?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Possession for a period of time",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Leaseholds create possessory rights for a term."
      },
      {
        "tag": "Civil procedure",
        "text": "US Bar readiness check 67: Personal jurisdiction concerns what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "A court's power over a party",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Personal jurisdiction asks whether the court can bind the defendant."
      },
      {
        "tag": "Contracts",
        "text": "US Bar readiness check 68: A material breach generally allows the nonbreaching party to do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Suspend performance and seek damages"
        ],
        "correct": 3,
        "explanation": "Material breach can excuse further performance."
      },
      {
        "tag": "Evidence",
        "text": "US Bar readiness check 69: Which privilege protects confidential attorney-client communications for legal advice?",
        "choices": [
          "Attorney-client privilege",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "The privilege protects qualifying confidential legal communications."
      },
      {
        "tag": "Property",
        "text": "US Bar readiness check 70: Adverse possession usually requires possession that is actual, open, notorious, exclusive, hostile, and what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Continuous for the statutory period",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Continuity for the required period is a common element."
      },
      {
        "tag": "Criminal procedure",
        "text": "US Bar readiness check 71: Miranda warnings are generally required before custodial what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Interrogation",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Miranda applies to custodial interrogation."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar readiness check 72: Rational basis review requires a law to be rationally related to what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Legitimate government interest"
        ],
        "correct": 3,
        "explanation": "Rational basis requires a legitimate interest."
      },
      {
        "tag": "Torts",
        "text": "US Bar readiness check 73: Battery generally requires harmful or offensive contact and what mental state?",
        "choices": [
          "Intent",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Battery is an intentional tort."
      },
      {
        "tag": "Civil procedure",
        "text": "US Bar readiness check 74: Subject matter jurisdiction concerns what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "A court's power to hear the type of case",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Subject matter jurisdiction is authority over the category of dispute."
      },
      {
        "tag": "Contracts",
        "text": "US Bar readiness check 75: The parol evidence rule limits evidence that would vary what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "A final integrated written agreement",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "The rule restricts prior or contemporaneous contradictory evidence."
      },
      {
        "tag": "Evidence",
        "text": "US Bar readiness check 76: Relevant evidence must tend to make a fact more or less probable and be what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Of consequence to the action"
        ],
        "correct": 3,
        "explanation": "Relevance requires probative value and materiality."
      },
      {
        "tag": "Property",
        "text": "US Bar readiness check 77: A fee simple absolute is best described as what?",
        "choices": [
          "The broadest present possessory estate",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Fee simple absolute is potentially infinite and transferable."
      },
      {
        "tag": "Criminal law",
        "text": "US Bar readiness check 78: Larceny traditionally requires intent to do what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Permanently deprive the owner",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Intent to permanently deprive is central."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar readiness check 79: Content-based speech restrictions usually receive what review?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Strict scrutiny",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Content-based restrictions are generally subject to strict scrutiny."
      },
      {
        "tag": "Torts",
        "text": "US Bar readiness check 80: Strict products liability generally focuses on what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Defective product causing injury"
        ],
        "correct": 3,
        "explanation": "Strict products liability applies when a defective product causes harm."
      },
      {
        "tag": "Contracts",
        "text": "US Bar weak-area review 81: Which element is generally required for a valid contract?",
        "choices": [
          "Consideration",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Contracts generally require offer, acceptance, consideration, and no defense."
      },
      {
        "tag": "Evidence",
        "text": "US Bar weak-area review 82: Hearsay is an out-of-court statement offered for what purpose?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "To prove the truth of the matter asserted",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "That is the basic hearsay definition."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar weak-area review 83: Strict scrutiny requires narrow tailoring to serve what interest?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Compelling government interest",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Strict scrutiny requires a compelling interest and narrow tailoring."
      },
      {
        "tag": "Torts",
        "text": "US Bar weak-area review 84: Negligence generally requires duty, breach, causation, and what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Damages"
        ],
        "correct": 3,
        "explanation": "Damages are an element of negligence."
      },
      {
        "tag": "Criminal law",
        "text": "US Bar weak-area review 85: Common law burglary traditionally required entry with what intent?",
        "choices": [
          "Intent to commit a felony inside",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Traditional burglary includes felony intent."
      },
      {
        "tag": "Property",
        "text": "US Bar weak-area review 86: A leasehold estate primarily gives a tenant what right?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Possession for a period of time",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Leaseholds create possessory rights for a term."
      },
      {
        "tag": "Civil procedure",
        "text": "US Bar weak-area review 87: Personal jurisdiction concerns what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "A court's power over a party",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Personal jurisdiction asks whether the court can bind the defendant."
      },
      {
        "tag": "Contracts",
        "text": "US Bar weak-area review 88: A material breach generally allows the nonbreaching party to do what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Suspend performance and seek damages"
        ],
        "correct": 3,
        "explanation": "Material breach can excuse further performance."
      },
      {
        "tag": "Evidence",
        "text": "US Bar weak-area review 89: Which privilege protects confidential attorney-client communications for legal advice?",
        "choices": [
          "Attorney-client privilege",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "The privilege protects qualifying confidential legal communications."
      },
      {
        "tag": "Property",
        "text": "US Bar weak-area review 90: Adverse possession usually requires possession that is actual, open, notorious, exclusive, hostile, and what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Continuous for the statutory period",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Continuity for the required period is a common element."
      },
      {
        "tag": "Criminal procedure",
        "text": "US Bar weak-area review 91: Miranda warnings are generally required before custodial what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Interrogation",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Miranda applies to custodial interrogation."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar weak-area review 92: Rational basis review requires a law to be rationally related to what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Legitimate government interest"
        ],
        "correct": 3,
        "explanation": "Rational basis requires a legitimate interest."
      },
      {
        "tag": "Torts",
        "text": "US Bar weak-area review 93: Battery generally requires harmful or offensive contact and what mental state?",
        "choices": [
          "Intent",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Battery is an intentional tort."
      },
      {
        "tag": "Civil procedure",
        "text": "US Bar weak-area review 94: Subject matter jurisdiction concerns what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "A court's power to hear the type of case",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Subject matter jurisdiction is authority over the category of dispute."
      },
      {
        "tag": "Contracts",
        "text": "US Bar weak-area review 95: The parol evidence rule limits evidence that would vary what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "A final integrated written agreement",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "The rule restricts prior or contemporaneous contradictory evidence."
      },
      {
        "tag": "Evidence",
        "text": "US Bar weak-area review 96: Relevant evidence must tend to make a fact more or less probable and be what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Of consequence to the action"
        ],
        "correct": 3,
        "explanation": "Relevance requires probative value and materiality."
      },
      {
        "tag": "Property",
        "text": "US Bar weak-area review 97: A fee simple absolute is best described as what?",
        "choices": [
          "The broadest present possessory estate",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Fee simple absolute is potentially infinite and transferable."
      },
      {
        "tag": "Criminal law",
        "text": "US Bar weak-area review 98: Larceny traditionally requires intent to do what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Permanently deprive the owner",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Intent to permanently deprive is central."
      },
      {
        "tag": "Constitutional law",
        "text": "US Bar weak-area review 99: Content-based speech restrictions usually receive what review?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Strict scrutiny",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Content-based restrictions are generally subject to strict scrutiny."
      },
      {
        "tag": "Torts",
        "text": "US Bar weak-area review 100: Strict products liability generally focuses on what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Defective product causing injury"
        ],
        "correct": 3,
        "explanation": "Strict products liability applies when a defective product causes harm."
      }
    ]
  },
  {
    "id": "real-estate",
    "track": "law",
    "country": "United States",
    "region": "State-specific",
    "examType": "Law & Public Service",
    "title": "美国地产经纪人",
    "subtitle": "房产执照模考",
    "badge": "地产",
    "questionCount": 100,
    "updated": "2026",
    "source": "State real estate licensing outlines",
    "coverage": [
      "Agency",
      "Contracts",
      "Property rights",
      "State law",
      "Real estate math"
    ],
    "readiness": 0,
    "done": 0,
    "accuracy": 0,
    "weak": "None",
    "eta": "Start to estimate",
    "description": "各州法律切换、房产计算专项题、经纪人执照短期训练。",
    "questions": [
      {
        "tag": "Agency",
        "text": "Real estate initial review 1: What does fiduciary duty require from a real estate agent?",
        "choices": [
          "Putting the client's interests first within the law",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Fiduciary duties include loyalty, disclosure, obedience, confidentiality, accounting, and care."
      },
      {
        "tag": "Contracts",
        "text": "Real estate initial review 2: Which element is normally required for a valid real estate contract?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Legal purpose",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Valid contracts require legal purpose and other elements."
      },
      {
        "tag": "Math",
        "text": "Real estate initial review 3: A property sells for $400,000 with a 6% commission. What is the commission?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "$24,000",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "$400,000 x 0.06 = $24,000."
      },
      {
        "tag": "Licensing",
        "text": "Real estate initial review 4: A salesperson generally performs licensed activities under whose supervision?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "A licensed broker"
        ],
        "correct": 3,
        "explanation": "Salespersons typically operate under a broker's supervision."
      },
      {
        "tag": "Disclosure",
        "text": "Real estate initial review 5: Which action best supports proper disclosure practice?",
        "choices": [
          "Disclose known material facts",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Known material facts should be disclosed according to law and duties."
      },
      {
        "tag": "Fair housing",
        "text": "Real estate initial review 6: Which practice best reflects fair housing compliance?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Apply qualification standards consistently",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Consistent lawful standards reduce discrimination risk."
      },
      {
        "tag": "Property rights",
        "text": "Real estate initial review 7: An easement most commonly gives what right?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Use another person's land for a specific purpose",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Easements create nonpossessory use rights."
      },
      {
        "tag": "Finance",
        "text": "Real estate initial review 8: In a mortgage loan, principal balance means what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "The unpaid loan amount"
        ],
        "correct": 3,
        "explanation": "Principal is the unpaid amount borrowed."
      },
      {
        "tag": "Appraisal",
        "text": "Real estate initial review 9: The sales comparison approach estimates value mainly by using what?",
        "choices": [
          "Recent comparable sales",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Comparable sales help estimate market value."
      },
      {
        "tag": "Escrow",
        "text": "Real estate initial review 10: Escrow is best described as what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Neutral holding of funds or documents until conditions are met",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Escrow protects parties while closing conditions are satisfied."
      },
      {
        "tag": "Title",
        "text": "Real estate initial review 11: Title insurance primarily protects against what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Covered title defects",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Title insurance covers certain ownership or lien defects."
      },
      {
        "tag": "Leases",
        "text": "Real estate initial review 12: A lease gives the tenant which interest?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Possessory right for the lease term"
        ],
        "correct": 3,
        "explanation": "Leases grant possession subject to lease terms."
      },
      {
        "tag": "Zoning",
        "text": "Real estate initial review 13: Zoning laws primarily regulate what?",
        "choices": [
          "Land use",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Zoning controls permitted uses, density, and development standards."
      },
      {
        "tag": "Math",
        "text": "Real estate initial review 14: A buyer puts 20% down on a $300,000 property. What is the down payment?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "$60,000",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "$300,000 x 0.20 = $60,000."
      },
      {
        "tag": "Agency",
        "text": "Real estate initial review 15: Dual agency generally requires what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Disclosure and informed consent where permitted",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Disclosure and consent are central where dual agency is allowed."
      },
      {
        "tag": "Contracts",
        "text": "Real estate initial review 16: Earnest money is usually intended to show what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Buyer good faith in the transaction"
        ],
        "correct": 3,
        "explanation": "Earnest money demonstrates seriousness."
      },
      {
        "tag": "Transfer",
        "text": "Real estate initial review 17: A deed is primarily used to transfer what?",
        "choices": [
          "Real property ownership interest",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Deeds convey interests in real property."
      },
      {
        "tag": "Liens",
        "text": "Real estate initial review 18: A mortgage is best described as what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "A lien securing repayment of a loan",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "A mortgage secures debt with real property."
      },
      {
        "tag": "Environmental",
        "text": "Real estate initial review 19: Lead-based paint disclosure is especially associated with homes built before what year?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "1978",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Federal lead-based paint disclosure rules apply to many pre-1978 homes."
      },
      {
        "tag": "Closing",
        "text": "Real estate initial review 20: Proration at closing is used to allocate what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Shared expenses between buyer and seller"
        ],
        "correct": 3,
        "explanation": "Taxes, rent, and similar items may be prorated."
      },
      {
        "tag": "Agency",
        "text": "Real estate timed drill 21: What does fiduciary duty require from a real estate agent?",
        "choices": [
          "Putting the client's interests first within the law",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Fiduciary duties include loyalty, disclosure, obedience, confidentiality, accounting, and care."
      },
      {
        "tag": "Contracts",
        "text": "Real estate timed drill 22: Which element is normally required for a valid real estate contract?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Legal purpose",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Valid contracts require legal purpose and other elements."
      },
      {
        "tag": "Math",
        "text": "Real estate timed drill 23: A property sells for $400,000 with a 6% commission. What is the commission?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "$24,000",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "$400,000 x 0.06 = $24,000."
      },
      {
        "tag": "Licensing",
        "text": "Real estate timed drill 24: A salesperson generally performs licensed activities under whose supervision?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "A licensed broker"
        ],
        "correct": 3,
        "explanation": "Salespersons typically operate under a broker's supervision."
      },
      {
        "tag": "Disclosure",
        "text": "Real estate timed drill 25: Which action best supports proper disclosure practice?",
        "choices": [
          "Disclose known material facts",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Known material facts should be disclosed according to law and duties."
      },
      {
        "tag": "Fair housing",
        "text": "Real estate timed drill 26: Which practice best reflects fair housing compliance?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Apply qualification standards consistently",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Consistent lawful standards reduce discrimination risk."
      },
      {
        "tag": "Property rights",
        "text": "Real estate timed drill 27: An easement most commonly gives what right?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Use another person's land for a specific purpose",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Easements create nonpossessory use rights."
      },
      {
        "tag": "Finance",
        "text": "Real estate timed drill 28: In a mortgage loan, principal balance means what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "The unpaid loan amount"
        ],
        "correct": 3,
        "explanation": "Principal is the unpaid amount borrowed."
      },
      {
        "tag": "Appraisal",
        "text": "Real estate timed drill 29: The sales comparison approach estimates value mainly by using what?",
        "choices": [
          "Recent comparable sales",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Comparable sales help estimate market value."
      },
      {
        "tag": "Escrow",
        "text": "Real estate timed drill 30: Escrow is best described as what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Neutral holding of funds or documents until conditions are met",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Escrow protects parties while closing conditions are satisfied."
      },
      {
        "tag": "Title",
        "text": "Real estate timed drill 31: Title insurance primarily protects against what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Covered title defects",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Title insurance covers certain ownership or lien defects."
      },
      {
        "tag": "Leases",
        "text": "Real estate timed drill 32: A lease gives the tenant which interest?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Possessory right for the lease term"
        ],
        "correct": 3,
        "explanation": "Leases grant possession subject to lease terms."
      },
      {
        "tag": "Zoning",
        "text": "Real estate timed drill 33: Zoning laws primarily regulate what?",
        "choices": [
          "Land use",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Zoning controls permitted uses, density, and development standards."
      },
      {
        "tag": "Math",
        "text": "Real estate timed drill 34: A buyer puts 20% down on a $300,000 property. What is the down payment?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "$60,000",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "$300,000 x 0.20 = $60,000."
      },
      {
        "tag": "Agency",
        "text": "Real estate timed drill 35: Dual agency generally requires what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Disclosure and informed consent where permitted",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Disclosure and consent are central where dual agency is allowed."
      },
      {
        "tag": "Contracts",
        "text": "Real estate timed drill 36: Earnest money is usually intended to show what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Buyer good faith in the transaction"
        ],
        "correct": 3,
        "explanation": "Earnest money demonstrates seriousness."
      },
      {
        "tag": "Transfer",
        "text": "Real estate timed drill 37: A deed is primarily used to transfer what?",
        "choices": [
          "Real property ownership interest",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Deeds convey interests in real property."
      },
      {
        "tag": "Liens",
        "text": "Real estate timed drill 38: A mortgage is best described as what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "A lien securing repayment of a loan",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "A mortgage secures debt with real property."
      },
      {
        "tag": "Environmental",
        "text": "Real estate timed drill 39: Lead-based paint disclosure is especially associated with homes built before what year?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "1978",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Federal lead-based paint disclosure rules apply to many pre-1978 homes."
      },
      {
        "tag": "Closing",
        "text": "Real estate timed drill 40: Proration at closing is used to allocate what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Shared expenses between buyer and seller"
        ],
        "correct": 3,
        "explanation": "Taxes, rent, and similar items may be prorated."
      },
      {
        "tag": "Agency",
        "text": "Real estate case analysis 41: What does fiduciary duty require from a real estate agent?",
        "choices": [
          "Putting the client's interests first within the law",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Fiduciary duties include loyalty, disclosure, obedience, confidentiality, accounting, and care."
      },
      {
        "tag": "Contracts",
        "text": "Real estate case analysis 42: Which element is normally required for a valid real estate contract?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Legal purpose",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Valid contracts require legal purpose and other elements."
      },
      {
        "tag": "Math",
        "text": "Real estate case analysis 43: A property sells for $400,000 with a 6% commission. What is the commission?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "$24,000",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "$400,000 x 0.06 = $24,000."
      },
      {
        "tag": "Licensing",
        "text": "Real estate case analysis 44: A salesperson generally performs licensed activities under whose supervision?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "A licensed broker"
        ],
        "correct": 3,
        "explanation": "Salespersons typically operate under a broker's supervision."
      },
      {
        "tag": "Disclosure",
        "text": "Real estate case analysis 45: Which action best supports proper disclosure practice?",
        "choices": [
          "Disclose known material facts",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Known material facts should be disclosed according to law and duties."
      },
      {
        "tag": "Fair housing",
        "text": "Real estate case analysis 46: Which practice best reflects fair housing compliance?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Apply qualification standards consistently",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Consistent lawful standards reduce discrimination risk."
      },
      {
        "tag": "Property rights",
        "text": "Real estate case analysis 47: An easement most commonly gives what right?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Use another person's land for a specific purpose",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Easements create nonpossessory use rights."
      },
      {
        "tag": "Finance",
        "text": "Real estate case analysis 48: In a mortgage loan, principal balance means what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "The unpaid loan amount"
        ],
        "correct": 3,
        "explanation": "Principal is the unpaid amount borrowed."
      },
      {
        "tag": "Appraisal",
        "text": "Real estate case analysis 49: The sales comparison approach estimates value mainly by using what?",
        "choices": [
          "Recent comparable sales",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Comparable sales help estimate market value."
      },
      {
        "tag": "Escrow",
        "text": "Real estate case analysis 50: Escrow is best described as what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Neutral holding of funds or documents until conditions are met",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Escrow protects parties while closing conditions are satisfied."
      },
      {
        "tag": "Title",
        "text": "Real estate case analysis 51: Title insurance primarily protects against what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Covered title defects",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Title insurance covers certain ownership or lien defects."
      },
      {
        "tag": "Leases",
        "text": "Real estate case analysis 52: A lease gives the tenant which interest?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Possessory right for the lease term"
        ],
        "correct": 3,
        "explanation": "Leases grant possession subject to lease terms."
      },
      {
        "tag": "Zoning",
        "text": "Real estate case analysis 53: Zoning laws primarily regulate what?",
        "choices": [
          "Land use",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Zoning controls permitted uses, density, and development standards."
      },
      {
        "tag": "Math",
        "text": "Real estate case analysis 54: A buyer puts 20% down on a $300,000 property. What is the down payment?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "$60,000",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "$300,000 x 0.20 = $60,000."
      },
      {
        "tag": "Agency",
        "text": "Real estate case analysis 55: Dual agency generally requires what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Disclosure and informed consent where permitted",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Disclosure and consent are central where dual agency is allowed."
      },
      {
        "tag": "Contracts",
        "text": "Real estate case analysis 56: Earnest money is usually intended to show what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Buyer good faith in the transaction"
        ],
        "correct": 3,
        "explanation": "Earnest money demonstrates seriousness."
      },
      {
        "tag": "Transfer",
        "text": "Real estate case analysis 57: A deed is primarily used to transfer what?",
        "choices": [
          "Real property ownership interest",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Deeds convey interests in real property."
      },
      {
        "tag": "Liens",
        "text": "Real estate case analysis 58: A mortgage is best described as what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "A lien securing repayment of a loan",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "A mortgage secures debt with real property."
      },
      {
        "tag": "Environmental",
        "text": "Real estate case analysis 59: Lead-based paint disclosure is especially associated with homes built before what year?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "1978",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Federal lead-based paint disclosure rules apply to many pre-1978 homes."
      },
      {
        "tag": "Closing",
        "text": "Real estate case analysis 60: Proration at closing is used to allocate what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Shared expenses between buyer and seller"
        ],
        "correct": 3,
        "explanation": "Taxes, rent, and similar items may be prorated."
      },
      {
        "tag": "Agency",
        "text": "Real estate readiness check 61: What does fiduciary duty require from a real estate agent?",
        "choices": [
          "Putting the client's interests first within the law",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Fiduciary duties include loyalty, disclosure, obedience, confidentiality, accounting, and care."
      },
      {
        "tag": "Contracts",
        "text": "Real estate readiness check 62: Which element is normally required for a valid real estate contract?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Legal purpose",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Valid contracts require legal purpose and other elements."
      },
      {
        "tag": "Math",
        "text": "Real estate readiness check 63: A property sells for $400,000 with a 6% commission. What is the commission?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "$24,000",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "$400,000 x 0.06 = $24,000."
      },
      {
        "tag": "Licensing",
        "text": "Real estate readiness check 64: A salesperson generally performs licensed activities under whose supervision?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "A licensed broker"
        ],
        "correct": 3,
        "explanation": "Salespersons typically operate under a broker's supervision."
      },
      {
        "tag": "Disclosure",
        "text": "Real estate readiness check 65: Which action best supports proper disclosure practice?",
        "choices": [
          "Disclose known material facts",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Known material facts should be disclosed according to law and duties."
      },
      {
        "tag": "Fair housing",
        "text": "Real estate readiness check 66: Which practice best reflects fair housing compliance?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Apply qualification standards consistently",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Consistent lawful standards reduce discrimination risk."
      },
      {
        "tag": "Property rights",
        "text": "Real estate readiness check 67: An easement most commonly gives what right?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Use another person's land for a specific purpose",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Easements create nonpossessory use rights."
      },
      {
        "tag": "Finance",
        "text": "Real estate readiness check 68: In a mortgage loan, principal balance means what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "The unpaid loan amount"
        ],
        "correct": 3,
        "explanation": "Principal is the unpaid amount borrowed."
      },
      {
        "tag": "Appraisal",
        "text": "Real estate readiness check 69: The sales comparison approach estimates value mainly by using what?",
        "choices": [
          "Recent comparable sales",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Comparable sales help estimate market value."
      },
      {
        "tag": "Escrow",
        "text": "Real estate readiness check 70: Escrow is best described as what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Neutral holding of funds or documents until conditions are met",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Escrow protects parties while closing conditions are satisfied."
      },
      {
        "tag": "Title",
        "text": "Real estate readiness check 71: Title insurance primarily protects against what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Covered title defects",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Title insurance covers certain ownership or lien defects."
      },
      {
        "tag": "Leases",
        "text": "Real estate readiness check 72: A lease gives the tenant which interest?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Possessory right for the lease term"
        ],
        "correct": 3,
        "explanation": "Leases grant possession subject to lease terms."
      },
      {
        "tag": "Zoning",
        "text": "Real estate readiness check 73: Zoning laws primarily regulate what?",
        "choices": [
          "Land use",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Zoning controls permitted uses, density, and development standards."
      },
      {
        "tag": "Math",
        "text": "Real estate readiness check 74: A buyer puts 20% down on a $300,000 property. What is the down payment?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "$60,000",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "$300,000 x 0.20 = $60,000."
      },
      {
        "tag": "Agency",
        "text": "Real estate readiness check 75: Dual agency generally requires what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Disclosure and informed consent where permitted",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Disclosure and consent are central where dual agency is allowed."
      },
      {
        "tag": "Contracts",
        "text": "Real estate readiness check 76: Earnest money is usually intended to show what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Buyer good faith in the transaction"
        ],
        "correct": 3,
        "explanation": "Earnest money demonstrates seriousness."
      },
      {
        "tag": "Transfer",
        "text": "Real estate readiness check 77: A deed is primarily used to transfer what?",
        "choices": [
          "Real property ownership interest",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Deeds convey interests in real property."
      },
      {
        "tag": "Liens",
        "text": "Real estate readiness check 78: A mortgage is best described as what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "A lien securing repayment of a loan",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "A mortgage secures debt with real property."
      },
      {
        "tag": "Environmental",
        "text": "Real estate readiness check 79: Lead-based paint disclosure is especially associated with homes built before what year?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "1978",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Federal lead-based paint disclosure rules apply to many pre-1978 homes."
      },
      {
        "tag": "Closing",
        "text": "Real estate readiness check 80: Proration at closing is used to allocate what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Shared expenses between buyer and seller"
        ],
        "correct": 3,
        "explanation": "Taxes, rent, and similar items may be prorated."
      },
      {
        "tag": "Agency",
        "text": "Real estate weak-area review 81: What does fiduciary duty require from a real estate agent?",
        "choices": [
          "Putting the client's interests first within the law",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Fiduciary duties include loyalty, disclosure, obedience, confidentiality, accounting, and care."
      },
      {
        "tag": "Contracts",
        "text": "Real estate weak-area review 82: Which element is normally required for a valid real estate contract?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Legal purpose",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "Valid contracts require legal purpose and other elements."
      },
      {
        "tag": "Math",
        "text": "Real estate weak-area review 83: A property sells for $400,000 with a 6% commission. What is the commission?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "$24,000",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "$400,000 x 0.06 = $24,000."
      },
      {
        "tag": "Licensing",
        "text": "Real estate weak-area review 84: A salesperson generally performs licensed activities under whose supervision?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "A licensed broker"
        ],
        "correct": 3,
        "explanation": "Salespersons typically operate under a broker's supervision."
      },
      {
        "tag": "Disclosure",
        "text": "Real estate weak-area review 85: Which action best supports proper disclosure practice?",
        "choices": [
          "Disclose known material facts",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Known material facts should be disclosed according to law and duties."
      },
      {
        "tag": "Fair housing",
        "text": "Real estate weak-area review 86: Which practice best reflects fair housing compliance?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Apply qualification standards consistently",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "Consistent lawful standards reduce discrimination risk."
      },
      {
        "tag": "Property rights",
        "text": "Real estate weak-area review 87: An easement most commonly gives what right?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Use another person's land for a specific purpose",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Easements create nonpossessory use rights."
      },
      {
        "tag": "Finance",
        "text": "Real estate weak-area review 88: In a mortgage loan, principal balance means what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "The unpaid loan amount"
        ],
        "correct": 3,
        "explanation": "Principal is the unpaid amount borrowed."
      },
      {
        "tag": "Appraisal",
        "text": "Real estate weak-area review 89: The sales comparison approach estimates value mainly by using what?",
        "choices": [
          "Recent comparable sales",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 0,
        "explanation": "Comparable sales help estimate market value."
      },
      {
        "tag": "Escrow",
        "text": "Real estate weak-area review 90: Escrow is best described as what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Neutral holding of funds or documents until conditions are met",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 1,
        "explanation": "Escrow protects parties while closing conditions are satisfied."
      },
      {
        "tag": "Title",
        "text": "Real estate weak-area review 91: Title insurance primarily protects against what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Covered title defects",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 2,
        "explanation": "Title insurance covers certain ownership or lien defects."
      },
      {
        "tag": "Leases",
        "text": "Real estate weak-area review 92: A lease gives the tenant which interest?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Possessory right for the lease term"
        ],
        "correct": 3,
        "explanation": "Leases grant possession subject to lease terms."
      },
      {
        "tag": "Zoning",
        "text": "Real estate weak-area review 93: Zoning laws primarily regulate what?",
        "choices": [
          "Land use",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 0,
        "explanation": "Zoning controls permitted uses, density, and development standards."
      },
      {
        "tag": "Math",
        "text": "Real estate weak-area review 94: A buyer puts 20% down on a $300,000 property. What is the down payment?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "$60,000",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 1,
        "explanation": "$300,000 x 0.20 = $60,000."
      },
      {
        "tag": "Agency",
        "text": "Real estate weak-area review 95: Dual agency generally requires what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Disclosure and informed consent where permitted",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 2,
        "explanation": "Disclosure and consent are central where dual agency is allowed."
      },
      {
        "tag": "Contracts",
        "text": "Real estate weak-area review 96: Earnest money is usually intended to show what?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Buyer good faith in the transaction"
        ],
        "correct": 3,
        "explanation": "Earnest money demonstrates seriousness."
      },
      {
        "tag": "Transfer",
        "text": "Real estate weak-area review 97: A deed is primarily used to transfer what?",
        "choices": [
          "Real property ownership interest",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered"
        ],
        "correct": 0,
        "explanation": "Deeds convey interests in real property."
      },
      {
        "tag": "Liens",
        "text": "Real estate weak-area review 98: A mortgage is best described as what?",
        "choices": [
          "Choose the option only because it sounds familiar",
          "A lien securing repayment of a loan",
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar"
        ],
        "correct": 1,
        "explanation": "A mortgage secures debt with real property."
      },
      {
        "tag": "Environmental",
        "text": "Real estate weak-area review 99: Lead-based paint disclosure is especially associated with homes built before what year?",
        "choices": [
          "Ignore the constraint stated in the scenario",
          "Delay the decision until unrelated information is gathered",
          "1978",
          "Ignore the constraint stated in the scenario"
        ],
        "correct": 2,
        "explanation": "Federal lead-based paint disclosure rules apply to many pre-1978 homes."
      },
      {
        "tag": "Closing",
        "text": "Real estate weak-area review 100: Proration at closing is used to allocate what?",
        "choices": [
          "Delay the decision until unrelated information is gathered",
          "Choose the option only because it sounds familiar",
          "Ignore the constraint stated in the scenario",
          "Shared expenses between buyer and seller"
        ],
        "correct": 3,
        "explanation": "Taxes, rent, and similar items may be prorated."
      }
    ]
  }
];
