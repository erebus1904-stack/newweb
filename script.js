const uiText = {
  zh: {
    htmlLang: "zh-CN",
    heroEyebrow: "Practice-first exam platform",
    heroTitle: "海外证照短期训练，一站式章节刷题",
    brandSubtitle: "海外证照学习库",
    navAll: "全部项目",
    navAllSmall: "按行业、证照和训练重点筛选",
    navMedical: "医疗护理",
    navMedicalSmall: "NCLEX-RN, USMLE",
    navFinance: "财税金融",
    navFinanceSmall: "USCPA, CFA, FINRA",
    navEngineering: "工程技术",
    navEngineeringSmall: "FE/PE, AWS, GCP",
    navLaw: "法律民生",
    navLawSmall: "Bar, Real Estate",
    todayGoal: "今日目标",
    languageLabel: "语言",
    startMock: "开始短训",
    searchLabel: "搜索",
    countryLabel: "国家",
    regionLabel: "地区",
    typeLabel: "类型",
    studyMode: "学习",
    examMode: "短训",
    sourceLabel: "来源依据",
    coverageLabel: "覆盖章节",
    updatedLabel: "更新时间",
    restart: "重新开始",
    skip: "跳过",
    next: "下一题",
    submit: "完成训练",
    reportTitle: "短训结果",
    scoreLabel: "得分",
    correctLabel: "答对",
    adviceLabel: "建议",
    doneLabel: "已刷题",
    accuracyLabel: "正确率",
    weakLabel: "弱项",
    etaLabel: "预计",
    nextStep: "下一步建议",
    catalogTitle: "按行业、证照和训练重点组织题库",
    all: "全部",
    programs: "个训练项目",
    source: "来源",
    coverage: "覆盖",
    questions: "题",
    updated: "更新",
    dailyStudy: "30 题 + 1 套错题复盘",
    dailyDrill: "完成 1 组短训并复盘错题",
    progress: (index, total) => `第 ${index} / ${total} 题`,
    hiddenExplanation: "短训模式下，解析会在完成后显示。",
    advicePass: "接近通过",
    advicePractice: "继续强化",
    adviceStudy: "回到学习模式",
    perfectReport: "本组短训全部答对。建议继续换一组题，确认不是记忆答案。",
    wrongReport: (tags) => `优先复盘：${tags}。建议切回学习模式逐题看解析。`,
    planWeak: (weak) => `先复习弱项：${weak}`,
    planPractice: (topic, count) => `完成 ${count} 道 ${topic} 相关练习`,
    planDrill: "短训结束后复盘所有错题解析",
    planStudy: "学习模式下每题读完解析再进入下一题",
    localTitle: "本地学习数据",
    localSubtitle: "只保存在当前浏览器",
    localAnswered: "本地已答",
    localAccuracy: "本地正确率",
    localWrong: "错题数",
    localScore: "最近成绩",
    localNone: "暂无",
    localClear: "清除本地数据",
    weakNone: "暂无",
    etaStart: "开始后估算",
    etaDays: (days) => `${days} 天`
  },
  en: {
    htmlLang: "en",
    heroEyebrow: "Practice-first training platform",
    heroTitle: "Short drills for overseas credentials and license prep",
    brandSubtitle: "Overseas credential study library",
    navAll: "All programs",
    navAllSmall: "Filter by industry, credential, and training focus",
    navMedical: "Medical & nursing",
    navMedicalSmall: "NCLEX-RN, USMLE",
    navFinance: "Finance & accounting",
    navFinanceSmall: "USCPA, CFA, FINRA",
    navEngineering: "Engineering & IT",
    navEngineeringSmall: "FE/PE, AWS, GCP",
    navLaw: "Law & public service",
    navLawSmall: "Bar, Real Estate",
    todayGoal: "Today",
    languageLabel: "Language",
    startMock: "Start short drill",
    searchLabel: "Search",
    countryLabel: "Country",
    regionLabel: "Area",
    typeLabel: "Category",
    studyMode: "Study",
    examMode: "Drill",
    sourceLabel: "Source",
    coverageLabel: "Coverage",
    updatedLabel: "Updated",
    restart: "Restart",
    skip: "Skip",
    next: "Next",
    submit: "Finish drill",
    reportTitle: "Drill report",
    scoreLabel: "Score",
    correctLabel: "Correct",
    adviceLabel: "Advice",
    doneLabel: "Done",
    accuracyLabel: "Accuracy",
    weakLabel: "Weak area",
    etaLabel: "ETA",
    nextStep: "Next steps",
    catalogTitle: "Question banks organized by industry, credential, and training focus",
    all: "All",
    programs: "programs",
    source: "Source",
    coverage: "Covers",
    questions: "questions",
    updated: "updated",
    dailyStudy: "30 questions + one mistake review",
    dailyDrill: "Finish one short drill and review mistakes",
    progress: (index, total) => `${index} / ${total}`,
    hiddenExplanation: "In drill mode, explanations appear after completion.",
    advicePass: "Nearly ready",
    advicePractice: "Keep strengthening",
    adviceStudy: "Return to study mode",
    perfectReport: "You answered every drill question correctly. Try another set to confirm mastery.",
    wrongReport: (tags) => `Review first: ${tags}. Switch to study mode to read each explanation.`,
    planWeak: (weak) => `Review weak area first: ${weak}`,
    planPractice: (topic, count) => `Complete ${count} practice questions on ${topic}`,
    planDrill: "After the drill, review every missed explanation",
    planStudy: "Read each explanation before moving to the next question",
    localTitle: "Local study data",
    localSubtitle: "Saved only in this browser",
    localAnswered: "Answered",
    localAccuracy: "Accuracy",
    localWrong: "Mistakes",
    localScore: "Last score",
    localNone: "None",
    localClear: "Clear local data",
    weakNone: "None",
    etaStart: "Start to estimate",
    etaDays: (days) => `${days} days`
  },
  ja: {
    htmlLang: "ja",
    heroEyebrow: "Practice-first training platform",
    heroTitle: "海外資格のための短期ドリル学習",
    brandSubtitle: "海外資格学習ライブラリ",
    navAll: "すべてのプログラム",
    navAllSmall: "業界・資格・学習重点で絞り込み",
    navMedical: "医療・看護",
    navMedicalSmall: "NCLEX-RN, USMLE",
    navFinance: "会計・金融",
    navFinanceSmall: "USCPA, CFA, FINRA",
    navEngineering: "工学・IT",
    navEngineeringSmall: "FE/PE, AWS, GCP",
    navLaw: "法律・公共サービス",
    navLawSmall: "Bar, Real Estate",
    todayGoal: "今日の目標",
    languageLabel: "言語",
    startMock: "短期ドリル開始",
    searchLabel: "検索",
    countryLabel: "国",
    regionLabel: "領域",
    typeLabel: "カテゴリ",
    studyMode: "学習",
    examMode: "ドリル",
    sourceLabel: "参照元",
    coverageLabel: "範囲",
    updatedLabel: "更新",
    restart: "最初から",
    skip: "スキップ",
    next: "次へ",
    submit: "完了",
    reportTitle: "ドリル結果",
    scoreLabel: "得点",
    correctLabel: "正解",
    adviceLabel: "提案",
    doneLabel: "完了数",
    accuracyLabel: "正答率",
    weakLabel: "弱点",
    etaLabel: "目安",
    nextStep: "次の学習",
    catalogTitle: "業界・資格・学習重点別の問題バンク",
    all: "すべて",
    programs: "件のプログラム",
    source: "参照元",
    coverage: "範囲",
    questions: "問",
    updated: "更新",
    dailyStudy: "30問 + 間違い復習",
    dailyDrill: "短期ドリルを1回完了し、間違いを復習",
    progress: (index, total) => `${index} / ${total} 問`,
    hiddenExplanation: "ドリルモードでは、解説は完了後に表示されます。",
    advicePass: "合格圏に近い",
    advicePractice: "さらに強化",
    adviceStudy: "学習モードへ",
    perfectReport: "全問正解です。別のセットでも確認しましょう。",
    wrongReport: (tags) => `まず復習: ${tags}。学習モードで解説を確認しましょう。`,
    planWeak: (weak) => `弱点を先に復習: ${weak}`,
    planPractice: (topic, count) => `${topic} の練習を ${count} 問解く`,
    planDrill: "ドリル後に間違えた問題の解説を復習",
    planStudy: "各問題の解説を読んでから次へ進む",
    localTitle: "ローカル学習データ",
    localSubtitle: "このブラウザにのみ保存",
    localAnswered: "回答済み",
    localAccuracy: "正答率",
    localWrong: "ミス",
    localScore: "直近スコア",
    localNone: "なし",
    localClear: "ローカルデータを削除",
    weakNone: "なし",
    etaStart: "開始後に推定",
    etaDays: (days) => `${days} 日`
  },
  ko: {
    htmlLang: "ko",
    heroEyebrow: "Practice-first training platform",
    heroTitle: "해외 자격을 위한 단기 드릴 학습",
    brandSubtitle: "해외 자격 학습 라이브러리",
    navAll: "전체 프로그램",
    navAllSmall: "산업, 자격, 학습 초점별 필터",
    navMedical: "의료 및 간호",
    navMedicalSmall: "NCLEX-RN, USMLE",
    navFinance: "회계 및 금융",
    navFinanceSmall: "USCPA, CFA, FINRA",
    navEngineering: "공학 및 IT",
    navEngineeringSmall: "FE/PE, AWS, GCP",
    navLaw: "법률 및 공공 서비스",
    navLawSmall: "Bar, Real Estate",
    todayGoal: "오늘 목표",
    languageLabel: "언어",
    startMock: "단기 드릴 시작",
    searchLabel: "검색",
    countryLabel: "국가",
    regionLabel: "영역",
    typeLabel: "분류",
    studyMode: "학습",
    examMode: "드릴",
    sourceLabel: "출처",
    coverageLabel: "범위",
    updatedLabel: "업데이트",
    restart: "다시 시작",
    skip: "건너뛰기",
    next: "다음",
    submit: "완료",
    reportTitle: "드릴 결과",
    scoreLabel: "점수",
    correctLabel: "정답",
    adviceLabel: "제안",
    doneLabel: "완료",
    accuracyLabel: "정답률",
    weakLabel: "약점",
    etaLabel: "예상",
    nextStep: "다음 학습",
    catalogTitle: "산업, 자격, 학습 초점별 문제 은행",
    all: "전체",
    programs: "개 프로그램",
    source: "출처",
    coverage: "범위",
    questions: "문항",
    updated: "업데이트",
    dailyStudy: "30문항 + 오답 복습 1회",
    dailyDrill: "단기 드릴 1회 완료 후 오답 복습",
    progress: (index, total) => `${index} / ${total} 문항`,
    hiddenExplanation: "드릴 모드에서는 완료 후 해설이 표시됩니다.",
    advicePass: "합격에 가까움",
    advicePractice: "계속 강화",
    adviceStudy: "학습 모드로",
    perfectReport: "모든 문항을 맞혔습니다. 다른 세트로 확인해 보세요.",
    wrongReport: (tags) => `우선 복습: ${tags}. 학습 모드에서 해설을 확인하세요.`,
    planWeak: (weak) => `약점 먼저 복습: ${weak}`,
    planPractice: (topic, count) => `${topic} 관련 ${count}문항 풀기`,
    planDrill: "드릴 후 틀린 문항 해설 복습",
    planStudy: "각 문항의 해설을 읽고 다음으로 이동",
    localTitle: "로컬 학습 데이터",
    localSubtitle: "이 브라우저에만 저장됨",
    localAnswered: "답변 수",
    localAccuracy: "정답률",
    localWrong: "오답",
    localScore: "최근 점수",
    localNone: "없음",
    localClear: "로컬 데이터 삭제",
    weakNone: "없음",
    etaStart: "시작 후 예상",
    etaDays: (days) => `${days}일`
  },
  es: {
    htmlLang: "es",
    heroEyebrow: "Practice-first training platform",
    heroTitle: "Entrenamiento breve para credenciales internacionales",
    brandSubtitle: "Biblioteca de estudio para credenciales internacionales",
    navAll: "Todos los programas",
    navAllSmall: "Filtra por industria, credencial y enfoque",
    navMedical: "Medicina y enfermería",
    navMedicalSmall: "NCLEX-RN, USMLE",
    navFinance: "Contabilidad y finanzas",
    navFinanceSmall: "USCPA, CFA, FINRA",
    navEngineering: "Ingeniería y TI",
    navEngineeringSmall: "FE/PE, AWS, GCP",
    navLaw: "Ley y servicio público",
    navLawSmall: "Bar, Real Estate",
    todayGoal: "Meta de hoy",
    languageLabel: "Idioma",
    startMock: "Iniciar práctica",
    searchLabel: "Buscar",
    countryLabel: "País",
    regionLabel: "Área",
    typeLabel: "Categoría",
    studyMode: "Estudio",
    examMode: "Práctica",
    sourceLabel: "Fuente",
    coverageLabel: "Cobertura",
    updatedLabel: "Actualizado",
    restart: "Reiniciar",
    skip: "Saltar",
    next: "Siguiente",
    submit: "Finalizar",
    reportTitle: "Resultado de práctica",
    scoreLabel: "Puntaje",
    correctLabel: "Correctas",
    adviceLabel: "Consejo",
    doneLabel: "Hechas",
    accuracyLabel: "Precisión",
    weakLabel: "Área débil",
    etaLabel: "Tiempo",
    nextStep: "Próximos pasos",
    catalogTitle: "Bancos de preguntas por industria, credencial y enfoque",
    all: "Todos",
    programs: "programas",
    source: "Fuente",
    coverage: "Cubre",
    questions: "preguntas",
    updated: "actualizado",
    dailyStudy: "30 preguntas + revisión de errores",
    dailyDrill: "Completa una práctica breve y revisa errores",
    progress: (index, total) => `${index} / ${total}`,
    hiddenExplanation: "En modo práctica, las explicaciones aparecen al finalizar.",
    advicePass: "Casi listo",
    advicePractice: "Seguir reforzando",
    adviceStudy: "Volver a estudiar",
    perfectReport: "Respondiste todo correctamente. Prueba otro set para confirmar dominio.",
    wrongReport: (tags) => `Revisa primero: ${tags}. Cambia a estudio para leer cada explicación.`,
    planWeak: (weak) => `Repasa primero el área débil: ${weak}`,
    planPractice: (topic, count) => `Completa ${count} preguntas sobre ${topic}`,
    planDrill: "Después de la práctica, revisa todas las explicaciones falladas",
    planStudy: "Lee cada explicación antes de pasar a la siguiente pregunta",
    localTitle: "Datos locales de estudio",
    localSubtitle: "Guardado solo en este navegador",
    localAnswered: "Respondidas",
    localAccuracy: "Precisión",
    localWrong: "Errores",
    localScore: "Último puntaje",
    localNone: "Ninguno",
    localClear: "Borrar datos locales",
    weakNone: "Ninguna",
    etaStart: "Empieza para estimar",
    etaDays: (days) => `${days} días`
  },
  fr: {
    htmlLang: "fr",
    heroEyebrow: "Practice-first training platform",
    heroTitle: "Entraînement court pour certifications internationales",
    brandSubtitle: "Bibliothèque d'étude des certifications internationales",
    navAll: "Tous les programmes",
    navAllSmall: "Filtrer par secteur, certification et objectif",
    navMedical: "Médecine et soins",
    navMedicalSmall: "NCLEX-RN, USMLE",
    navFinance: "Comptabilité et finance",
    navFinanceSmall: "USCPA, CFA, FINRA",
    navEngineering: "Ingénierie et IT",
    navEngineeringSmall: "FE/PE, AWS, GCP",
    navLaw: "Droit et service public",
    navLawSmall: "Bar, Real Estate",
    todayGoal: "Objectif du jour",
    languageLabel: "Langue",
    startMock: "Lancer l'entraînement",
    searchLabel: "Recherche",
    countryLabel: "Pays",
    regionLabel: "Domaine",
    typeLabel: "Catégorie",
    studyMode: "Étude",
    examMode: "Entraînement",
    sourceLabel: "Source",
    coverageLabel: "Couverture",
    updatedLabel: "Mis à jour",
    restart: "Recommencer",
    skip: "Passer",
    next: "Suivant",
    submit: "Terminer",
    reportTitle: "Résultat d'entraînement",
    scoreLabel: "Score",
    correctLabel: "Correctes",
    adviceLabel: "Conseil",
    doneLabel: "Faites",
    accuracyLabel: "Précision",
    weakLabel: "Point faible",
    etaLabel: "Délai",
    nextStep: "Prochaines étapes",
    catalogTitle: "Banques de questions par secteur, certification et objectif",
    all: "Tous",
    programs: "programmes",
    source: "Source",
    coverage: "Couvre",
    questions: "questions",
    updated: "mis à jour",
    dailyStudy: "30 questions + une révision des erreurs",
    dailyDrill: "Terminer un entraînement court et revoir les erreurs",
    progress: (index, total) => `${index} / ${total}`,
    hiddenExplanation: "En mode entraînement, les explications apparaissent à la fin.",
    advicePass: "Presque prêt",
    advicePractice: "Continuer à renforcer",
    adviceStudy: "Revenir au mode étude",
    perfectReport: "Toutes les réponses sont correctes. Essayez une autre série pour confirmer.",
    wrongReport: (tags) => `À revoir en priorité : ${tags}. Passez en mode étude pour lire les explications.`,
    planWeak: (weak) => `Revoir d'abord le point faible : ${weak}`,
    planPractice: (topic, count) => `Faire ${count} questions sur ${topic}`,
    planDrill: "Après l'entraînement, revoir toutes les explications des erreurs",
    planStudy: "Lire chaque explication avant de passer à la question suivante",
    localTitle: "Données locales d'étude",
    localSubtitle: "Enregistré uniquement dans ce navigateur",
    localAnswered: "Répondues",
    localAccuracy: "Précision",
    localWrong: "Erreurs",
    localScore: "Dernier score",
    localNone: "Aucun",
    localClear: "Effacer les données locales",
    weakNone: "Aucun",
    etaStart: "Commencez pour estimer",
    etaDays: (days) => `${days} jours`
  }
};

const programText = {
  zh: {
    "nclex-rn": { title: "NCLEX-RN题库", subtitle: "美国护士题库", badge: "护理", description: "CAT自适应训练、错题集、全英文病例解析，适合海外护士短期冲刺。", coverage: ["成人护理", "药理", "母婴", "儿科", "安全"] },
    usmle: { title: "USMLE执医", subtitle: "美国医生Step1-3", badge: "医学", description: "高分案例分析、解剖/病理高频图谱刷题，适合医学生和外籍医生冲刺。", coverage: ["病理", "生理", "药理", "生物统计", "临床病例"] },
    uscpa: { title: "USCPA财会", subtitle: "美国CPA四科", badge: "财会", description: "FAR/AUD/REG/ISC 分科训练，加入TBS大题和手写板模拟思路。", coverage: ["FAR", "AUD", "REG", "ISC", "TBS大题"] },
    cfa: { title: "CFA金融圈", subtitle: "CFA一级/二级/三级", badge: "金融", description: "公式表在线查询、限时训练、打卡抱团班式刷题路径。", coverage: ["职业伦理", "数量", "组合管理", "权益", "固收"] },
    finra: { title: "FINRA证券牌照", subtitle: "SIE & Series 7", badge: "证券", description: "法规常识快速判断、合规陷阱题专项，适合证券牌照短训。", coverage: ["SIE", "Series 7", "法规", "适当性", "产品"] },
    "fe-pe": { title: "FE/PE工程师", subtitle: "美国注册工程师", badge: "工程", description: "工程经济学计算器、参考手册检索练习、公式型题目短训。", coverage: ["工程经济", "静力学", "流体", "伦理", "手册检索"] },
    "cloud-architect": { title: "云架构师认证", subtitle: "AWS & GCP题库", badge: "云", description: "场景选择题快速解析、架构图识别、云服务组合训练。", coverage: ["架构", "安全", "网络", "可靠性", "成本"] },
    bar: { title: "美国律考Bar", subtitle: "NY & CA Bar", badge: "法律", description: "MBE多选倒计时严训、MEE范文对比、长文阅读夜间模式。", coverage: ["MBE", "MEE", "证据法", "合同", "宪法"] },
    "real-estate": { title: "美国地产经纪人", subtitle: "房产执照训练", badge: "地产", description: "各州法律切换、房产计算专项题、经纪人执照短期训练。", coverage: ["代理", "合同", "产权", "州法", "地产计算"] }
  },
  en: {
    "nclex-rn": { title: "NCLEX-RN Question Bank", subtitle: "US nursing license drills", badge: "Nursing", description: "CAT-style adaptive drills, mistake review, and English case explanations for short nursing prep.", coverage: ["Adult health", "Pharmacology", "Maternal newborn", "Pediatrics", "Safety"] },
    usmle: { title: "USMLE Medical Drills", subtitle: "US physician Step 1-3", badge: "Medicine", description: "High-yield case analysis plus anatomy and pathology image-style practice.", coverage: ["Pathology", "Physiology", "Pharmacology", "Biostatistics", "Clinical cases"] },
    uscpa: { title: "USCPA Accounting Drills", subtitle: "US CPA four sections", badge: "Accounting", description: "FAR/AUD/REG/ISC section practice with task-based simulation training ideas.", coverage: ["FAR", "AUD", "REG", "ISC", "TBS simulations"] },
    cfa: { title: "CFA Finance Drills", subtitle: "CFA Level I/II/III", badge: "Finance", description: "Formula lookup, timed drills, and structured practice for finance candidates.", coverage: ["Ethics", "Quant", "Portfolio", "Equity", "Fixed income"] },
    finra: { title: "FINRA Securities License", subtitle: "SIE & Series 7", badge: "Securities", description: "Fast regulation checks and compliance trap questions for securities license prep.", coverage: ["SIE", "Series 7", "Regulation", "Suitability", "Products"] },
    "fe-pe": { title: "FE/PE Engineer Drills", subtitle: "US professional engineer prep", badge: "Engineering", description: "Engineering economics, handbook lookup, and formula-driven short drills.", coverage: ["Engineering economics", "Statics", "Fluids", "Ethics", "Handbook lookup"] },
    "cloud-architect": { title: "Cloud Architect Certification", subtitle: "AWS & GCP question bank", badge: "Cloud", description: "Scenario questions, architecture diagram recognition, and cloud service selection practice.", coverage: ["Architecture", "Security", "Networking", "Reliability", "Cost"] },
    bar: { title: "US Bar Law Drills", subtitle: "NY & CA Bar", badge: "Law", description: "Timed MBE practice, MEE model-answer comparison, and long-reading training.", coverage: ["MBE", "MEE", "Evidence", "Contracts", "Constitutional law"] },
    "real-estate": { title: "US Real Estate Agent", subtitle: "Real estate license drills", badge: "Real estate", description: "State-specific law switching, real estate math, and license-focused short drills.", coverage: ["Agency", "Contracts", "Property rights", "State law", "Real estate math"] }
  },
  ja: {
    "nclex-rn": { title: "NCLEX-RN問題バンク", subtitle: "米国看護師ドリル", badge: "看護", description: "CAT風の適応型ドリル、間違い復習、英語ケース解説。", coverage: ["成人看護", "薬理", "母子", "小児", "安全"] },
    usmle: { title: "USMLE医師ドリル", subtitle: "米国医師 Step 1-3", badge: "医学", description: "高頻度ケース分析と解剖・病理画像型の練習。", coverage: ["病理", "生理", "薬理", "生物統計", "臨床ケース"] },
    uscpa: { title: "USCPA会計ドリル", subtitle: "米国CPA四科目", badge: "会計", description: "FAR/AUD/REG/ISC別の練習とTBS対策。", coverage: ["FAR", "AUD", "REG", "ISC", "TBS"] },
    cfa: { title: "CFA金融ドリル", subtitle: "CFAレベルI/II/III", badge: "金融", description: "公式確認、時間制限ドリル、体系的な金融練習。", coverage: ["倫理", "数量", "ポートフォリオ", "株式", "債券"] },
    finra: { title: "FINRA証券ライセンス", subtitle: "SIE & Series 7", badge: "証券", description: "規制判断とコンプライアンスの落とし穴問題。", coverage: ["SIE", "Series 7", "規制", "適合性", "商品"] },
    "fe-pe": { title: "FE/PEエンジニア", subtitle: "米国登録技術者対策", badge: "工学", description: "工学経済、ハンドブック検索、公式型問題の短期ドリル。", coverage: ["工学経済", "静力学", "流体", "倫理", "手冊検索"] },
    "cloud-architect": { title: "クラウドアーキテクト認定", subtitle: "AWS & GCP問題バンク", badge: "クラウド", description: "シナリオ問題、構成図認識、クラウドサービス選択練習。", coverage: ["アーキテクチャ", "セキュリティ", "ネットワーク", "信頼性", "コスト"] },
    bar: { title: "米国Bar法律ドリル", subtitle: "NY & CA Bar", badge: "法律", description: "MBE時間制限練習、MEE答案比較、長文読解トレーニング。", coverage: ["MBE", "MEE", "証拠法", "契約", "憲法"] },
    "real-estate": { title: "米国不動産エージェント", subtitle: "不動産免許ドリル", badge: "不動産", description: "州別法規、不動産計算、免許向け短期練習。", coverage: ["代理", "契約", "所有権", "州法", "不動産計算"] }
  },
  ko: {
    "nclex-rn": { title: "NCLEX-RN 문제은행", subtitle: "미국 간호사 드릴", badge: "간호", description: "CAT식 적응형 드릴, 오답 복습, 영어 사례 해설.", coverage: ["성인 간호", "약리", "모성/신생아", "소아", "안전"] },
    usmle: { title: "USMLE 의사 드릴", subtitle: "미국 의사 Step 1-3", badge: "의학", description: "고빈도 사례 분석과 해부/병리 이미지형 연습.", coverage: ["병리", "생리", "약리", "생물통계", "임상 사례"] },
    uscpa: { title: "USCPA 회계 드릴", subtitle: "미국 CPA 네 과목", badge: "회계", description: "FAR/AUD/REG/ISC 과목별 연습과 TBS 대비.", coverage: ["FAR", "AUD", "REG", "ISC", "TBS"] },
    cfa: { title: "CFA 금융 드릴", subtitle: "CFA Level I/II/III", badge: "금융", description: "공식 확인, 시간 제한 드릴, 체계적 금융 연습.", coverage: ["윤리", "퀀트", "포트폴리오", "주식", "채권"] },
    finra: { title: "FINRA 증권 라이선스", subtitle: "SIE & Series 7", badge: "증권", description: "규정 판단과 컴플라이언스 함정 문제 훈련.", coverage: ["SIE", "Series 7", "규정", "적합성", "상품"] },
    "fe-pe": { title: "FE/PE 엔지니어 드릴", subtitle: "미국 전문 엔지니어 대비", badge: "공학", description: "공학경제, 핸드북 검색, 공식형 문제 단기 드릴.", coverage: ["공학경제", "정역학", "유체", "윤리", "핸드북 검색"] },
    "cloud-architect": { title: "클라우드 아키텍트 인증", subtitle: "AWS & GCP 문제은행", badge: "클라우드", description: "시나리오 문제, 아키텍처 도식 인식, 클라우드 서비스 선택 연습.", coverage: ["아키텍처", "보안", "네트워킹", "신뢰성", "비용"] },
    bar: { title: "미국 Bar 법률 드릴", subtitle: "NY & CA Bar", badge: "법률", description: "MBE 시간 제한 연습, MEE 모범 답안 비교, 장문 독해 훈련.", coverage: ["MBE", "MEE", "증거법", "계약", "헌법"] },
    "real-estate": { title: "미국 부동산 중개인", subtitle: "부동산 면허 드릴", badge: "부동산", description: "주별 법규, 부동산 계산, 면허 중심 단기 훈련.", coverage: ["대리", "계약", "재산권", "주법", "부동산 계산"] }
  },
  es: {
    "nclex-rn": { title: "Banco NCLEX-RN", subtitle: "Drills de enfermería de EE. UU.", badge: "Enfermería", description: "Práctica adaptativa tipo CAT, revisión de errores y casos en inglés.", coverage: ["Salud adulta", "Farmacología", "Materno neonatal", "Pediatría", "Seguridad"] },
    usmle: { title: "Drills médicos USMLE", subtitle: "Médico de EE. UU. Step 1-3", badge: "Medicina", description: "Casos de alto rendimiento y práctica de anatomía/patología visual.", coverage: ["Patología", "Fisiología", "Farmacología", "Bioestadística", "Casos clínicos"] },
    uscpa: { title: "Drills USCPA", subtitle: "Cuatro secciones CPA", badge: "Contabilidad", description: "Práctica FAR/AUD/REG/ISC con enfoque en simulaciones TBS.", coverage: ["FAR", "AUD", "REG", "ISC", "TBS"] },
    cfa: { title: "Drills financieros CFA", subtitle: "CFA Nivel I/II/III", badge: "Finanzas", description: "Consulta de fórmulas, práctica cronometrada y ruta estructurada.", coverage: ["Ética", "Cuantitativo", "Portafolio", "Renta variable", "Renta fija"] },
    finra: { title: "Licencia FINRA", subtitle: "SIE & Series 7", badge: "Valores", description: "Regulación rápida y preguntas trampa de cumplimiento.", coverage: ["SIE", "Series 7", "Regulación", "Idoneidad", "Productos"] },
    "fe-pe": { title: "Drills FE/PE", subtitle: "Ingeniero profesional de EE. UU.", badge: "Ingeniería", description: "Economía de ingeniería, búsqueda en manual y problemas con fórmulas.", coverage: ["Economía", "Estática", "Fluidos", "Ética", "Manual"] },
    "cloud-architect": { title: "Arquitecto cloud", subtitle: "Banco AWS & GCP", badge: "Cloud", description: "Escenarios, diagramas de arquitectura y selección de servicios cloud.", coverage: ["Arquitectura", "Seguridad", "Redes", "Confiabilidad", "Costo"] },
    bar: { title: "Drills US Bar", subtitle: "NY & CA Bar", badge: "Derecho", description: "MBE cronometrado, comparación MEE y entrenamiento de lectura larga.", coverage: ["MBE", "MEE", "Evidencia", "Contratos", "Constitucional"] },
    "real-estate": { title: "Agente inmobiliario EE. UU.", subtitle: "Drills de licencia inmobiliaria", badge: "Inmobiliario", description: "Leyes estatales, matemáticas inmobiliarias y entrenamiento breve.", coverage: ["Agencia", "Contratos", "Propiedad", "Ley estatal", "Matemática inmobiliaria"] }
  },
  fr: {
    "nclex-rn": { title: "Banque NCLEX-RN", subtitle: "Entraînement infirmier US", badge: "Soins", description: "Drills adaptatifs type CAT, révision des erreurs et cas en anglais.", coverage: ["Santé adulte", "Pharmacologie", "Mère nouveau-né", "Pédiatrie", "Sécurité"] },
    usmle: { title: "Drills médicaux USMLE", subtitle: "Médecin US Step 1-3", badge: "Médecine", description: "Cas à haut rendement et pratique visuelle anatomie/pathologie.", coverage: ["Pathologie", "Physiologie", "Pharmacologie", "Biostatistiques", "Cas cliniques"] },
    uscpa: { title: "Drills USCPA", subtitle: "Quatre sections CPA", badge: "Comptabilité", description: "Pratique FAR/AUD/REG/ISC avec préparation aux simulations TBS.", coverage: ["FAR", "AUD", "REG", "ISC", "TBS"] },
    cfa: { title: "Drills finance CFA", subtitle: "CFA niveau I/II/III", badge: "Finance", description: "Formules, drills chronométrés et parcours structuré.", coverage: ["Éthique", "Quant", "Portefeuille", "Actions", "Obligations"] },
    finra: { title: "Licence FINRA", subtitle: "SIE & Series 7", badge: "Titres", description: "Jugement réglementaire rapide et pièges de conformité.", coverage: ["SIE", "Series 7", "Réglementation", "Adéquation", "Produits"] },
    "fe-pe": { title: "Drills FE/PE", subtitle: "Ingénieur professionnel US", badge: "Ingénierie", description: "Économie d'ingénierie, recherche manuel et problèmes de formules.", coverage: ["Économie", "Statique", "Fluides", "Éthique", "Manuel"] },
    "cloud-architect": { title: "Architecte cloud", subtitle: "Banque AWS & GCP", badge: "Cloud", description: "Scénarios, diagrammes d'architecture et choix de services cloud.", coverage: ["Architecture", "Sécurité", "Réseaux", "Fiabilité", "Coût"] },
    bar: { title: "Drills US Bar", subtitle: "NY & CA Bar", badge: "Droit", description: "MBE chronométré, comparaison MEE et entraînement à la lecture longue.", coverage: ["MBE", "MEE", "Preuve", "Contrats", "Constitutionnel"] },
    "real-estate": { title: "Agent immobilier US", subtitle: "Drills licence immobilière", badge: "Immobilier", description: "Lois par État, calcul immobilier et entraînement court.", coverage: ["Agence", "Contrats", "Propriété", "Loi d'État", "Calcul immobilier"] }
  }
};

let currentLanguage = "zh";
let selectedTrack = "all";
let currentExamId = examCatalog[0].id;
let questionIndex = 0;
let answered = false;
let mode = "study";
let drillAnswers = [];
const storageKey = "licenseAtlasLocalProgress";

const elements = {
  answers: document.querySelector("#answers"),
  explanation: document.querySelector("#explanation"),
  nextButton: document.querySelector("#next-button"),
  skipButton: document.querySelector("#skip-button"),
  resetButton: document.querySelector("#reset-button"),
  startDrillButton: document.querySelector("#start-exam-button"),
  search: document.querySelector("#exam-search"),
  country: document.querySelector("#country-filter"),
  region: document.querySelector("#region-filter"),
  type: document.querySelector("#type-filter"),
  catalog: document.querySelector("#catalog-grid"),
  resultCount: document.querySelector("#result-count"),
  report: document.querySelector("#report-panel"),
  language: document.querySelector("#language-select"),
  clearLocalButton: document.querySelector("#clear-local-button")
};

function t(key, ...args) {
  const value = uiText[currentLanguage][key] || uiText.en[key] || key;
  return typeof value === "function" ? value(...args) : value;
}

function p(exam) {
  return programText[currentLanguage]?.[exam.id] || programText.en[exam.id] || exam;
}

function getCurrentExam() {
  return examCatalog.find((exam) => exam.id === currentExamId) || examCatalog[0];
}

function listSeparator() {
  return currentLanguage === "zh" || currentLanguage === "ja" || currentLanguage === "ko" ? "、" : ", ";
}

function readProgressStore() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function writeProgressStore(store) {
  localStorage.setItem(storageKey, JSON.stringify(store));
}

function getExamProgress(examId = currentExamId) {
  return readProgressStore()[examId] || {
    answered: 0,
    correct: 0,
    wrongQuestionKeys: [],
    lastScore: null,
    lastStudiedAt: null
  };
}

function questionKey(exam, index) {
  return `${exam.id}:${index}`;
}

function saveExamProgress(examId, updater) {
  const store = readProgressStore();
  store[examId] = updater(getExamProgress(examId));
  writeProgressStore(store);
  if (examId === currentExamId) renderLearningStats(getCurrentExam());
  renderLocalProgress();
}

function uniqueValues(key) {
  return [t("all"), ...new Set(examCatalog.map((exam) => exam[key]))];
}

function populateFilters(preserve = true) {
  const previous = preserve
    ? { country: elements.country.value, region: elements.region.value, type: elements.type.value }
    : {};
  [
    [elements.country, uniqueValues("country"), previous.country],
    [elements.region, uniqueValues("region"), previous.region],
    [elements.type, uniqueValues("examType"), previous.type]
  ].forEach(([select, values, oldValue]) => {
    select.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join("");
    select.value = values.includes(oldValue) ? oldValue : t("all");
  });
}

function getFilterValue(select) {
  return select.value === t("all") ? "all" : select.value;
}

function getFilteredExams() {
  const query = elements.search.value.trim().toLowerCase();
  return examCatalog.filter((exam) => {
    const text = p(exam);
    const haystack = [
      text.title,
      text.subtitle,
      text.description,
      text.coverage.join(" "),
      exam.country,
      exam.region,
      exam.examType,
      exam.source
    ].join(" ").toLowerCase();
    return (!query || haystack.includes(query)) &&
      (selectedTrack === "all" || exam.track === selectedTrack) &&
      (getFilterValue(elements.country) === "all" || exam.country === elements.country.value) &&
      (getFilterValue(elements.region) === "all" || exam.region === elements.region.value) &&
      (getFilterValue(elements.type) === "all" || exam.examType === elements.type.value);
  });
}

function applyStaticTranslations() {
  document.documentElement.lang = t("htmlLang");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  elements.search.placeholder = "NCLEX-RN, USMLE, USCPA, CFA, FINRA...";
  document.querySelector("#daily-goal").textContent = mode === "exam" ? t("dailyDrill") : t("dailyStudy");
}

function renderCatalog() {
  const exams = getFilteredExams();
  elements.resultCount.textContent = `${exams.length} ${t("programs")}`;
  elements.catalog.innerHTML = exams.map((exam) => {
    const text = p(exam);
    return `
      <article class="exam-card ${exam.id === currentExamId ? "selected" : ""}" data-exam-id="${exam.id}">
        <span class="card-badge">${text.badge}</span>
        <h3>${text.title}</h3>
        <p>${text.description}</p>
        <dl class="cred-list">
          <div><dt>${t("source")}</dt><dd>${exam.source}</dd></div>
          <div><dt>${t("coverage")}</dt><dd>${text.coverage.slice(0, 3).join(listSeparator())}</dd></div>
        </dl>
        <div class="card-footer"><span>${exam.questionCount} ${t("questions")}</span><span>${exam.updated} ${t("updated")}</span></div>
      </article>
    `;
  }).join("");
  document.querySelectorAll(".exam-card").forEach((card) => {
    card.addEventListener("click", () => selectExam(card.dataset.examId));
  });
}

function selectExam(examId) {
  currentExamId = examId;
  questionIndex = 0;
  drillAnswers = [];
  answered = false;
  elements.report.classList.add("hidden");
  renderExam();
  renderCatalog();
}

function getLocalWeakArea(exam, progress) {
  if (!progress.wrongQuestionKeys.length) return t("weakNone");
  const tag = progress.wrongQuestionKeys
    .map((key) => Number(key.split(":").pop()))
    .map((index) => exam.questions[index]?.tag)
    .find(Boolean);
  return tag || t("weakNone");
}

function renderLearningStats(exam) {
  const progress = getExamProgress(exam.id);
  const accuracy = progress.answered ? Math.round((progress.correct / progress.answered) * 100) : 0;
  const volumeBonus = Math.min(20, Math.floor(progress.answered / 3) * 5);
  const readiness = progress.answered ? Math.min(99, Math.round(accuracy * 0.8 + volumeBonus)) : 0;
  const days = Math.max(1, Math.ceil((30 - Math.min(progress.answered, 30)) / 5));
  document.querySelector("#readiness").textContent = `${readiness}%`;
  document.querySelector("#questions-done").textContent = progress.answered;
  document.querySelector("#accuracy").textContent = `${accuracy}%`;
  document.querySelector("#weak-area").textContent = getLocalWeakArea(exam, progress);
  document.querySelector("#eta").textContent = progress.answered ? t("etaDays", days) : t("etaStart");
  document.querySelector(".ring").style.background = `conic-gradient(var(--green) ${readiness}%, #e2e8df 0)`;
}

function renderLocalProgress() {
  const progress = getExamProgress();
  const accuracy = progress.answered ? Math.round((progress.correct / progress.answered) * 100) : 0;
  document.querySelector("#local-answered").textContent = progress.answered;
  document.querySelector("#local-accuracy").textContent = `${accuracy}%`;
  document.querySelector("#local-wrong").textContent = progress.wrongQuestionKeys.length;
  document.querySelector("#local-score").textContent = progress.lastScore === null ? t("localNone") : `${progress.lastScore}%`;
  document.querySelector("#local-title").textContent = t("localTitle");
  document.querySelector("#local-subtitle").textContent = t("localSubtitle");
  document.querySelector("#local-answered-label").textContent = t("localAnswered");
  document.querySelector("#local-accuracy-label").textContent = t("localAccuracy");
  document.querySelector("#local-wrong-label").textContent = t("localWrong");
  document.querySelector("#local-score-label").textContent = t("localScore");
  document.querySelector("#clear-local-button").textContent = t("localClear");
}

function renderStudyPlan(exam) {
  const text = p(exam);
  const plan = [
    t("planWeak", getLocalWeakArea(exam, getExamProgress(exam.id))),
    t("planPractice", text.coverage[0], Math.min(30, exam.questions.length * 10)),
    mode === "exam" ? t("planDrill") : t("planStudy")
  ];
  document.querySelector("#study-plan").innerHTML = plan.map((item) => `<li>${item}</li>`).join("");
}

function renderExam() {
  const exam = getCurrentExam();
  const text = p(exam);
  document.querySelector("#track-region").textContent = `${exam.country} / ${exam.region}`;
  document.querySelector("#track-title").textContent = text.title;
  document.querySelector("#source-name").textContent = exam.source;
  document.querySelector("#source-coverage").textContent = text.coverage.join(listSeparator());
  document.querySelector("#source-updated").textContent = exam.updated;
  document.querySelector("#daily-goal").textContent = mode === "exam" ? t("dailyDrill") : t("dailyStudy");
  renderLearningStats(exam);
  renderStudyPlan(exam);
  renderLocalProgress();
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const exam = getCurrentExam();
  const question = exam.questions[questionIndex];
  document.querySelector("#question-tag").textContent = question.tag;
  document.querySelector("#question-progress").textContent = t("progress", questionIndex + 1, exam.questions.length);
  document.querySelector("#question-text").textContent = question.text;
  elements.explanation.classList.add("hidden");
  elements.explanation.textContent = mode === "exam" ? t("hiddenExplanation") : "";
  elements.answers.innerHTML = "";
  elements.skipButton.hidden = mode === "exam";
  elements.nextButton.textContent = mode === "exam" && questionIndex === exam.questions.length - 1 ? t("submit") : t("next");
  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.innerHTML = `<span class="answer-key">${String.fromCharCode(65 + index)}</span><span>${choice}</span>`;
    button.addEventListener("click", () => selectAnswer(index));
    elements.answers.appendChild(button);
  });
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  const exam = getCurrentExam();
  const question = exam.questions[questionIndex];
  const isCorrect = index === question.correct;
  drillAnswers[questionIndex] = index;
  Array.from(elements.answers.children).forEach((button, buttonIndex) => {
    if (mode === "study" && buttonIndex === question.correct) button.classList.add("correct");
    if (mode === "study" && buttonIndex === index && !isCorrect) button.classList.add("wrong");
    if (mode === "exam" && buttonIndex === index) button.classList.add("selected-answer");
  });
  if (mode === "study") {
    saveExamProgress(exam.id, (progress) => {
      const wrongSet = new Set(progress.wrongQuestionKeys || []);
      if (isCorrect) wrongSet.delete(questionKey(exam, questionIndex));
      else wrongSet.add(questionKey(exam, questionIndex));
      return {
        ...progress,
        answered: progress.answered + 1,
        correct: progress.correct + (isCorrect ? 1 : 0),
        wrongQuestionKeys: Array.from(wrongSet),
        lastStudiedAt: new Date().toISOString()
      };
    });
    elements.explanation.textContent = question.explanation;
    elements.explanation.classList.remove("hidden");
  }
}

function advanceQuestion() {
  const exam = getCurrentExam();
  if (mode === "exam" && questionIndex === exam.questions.length - 1) {
    showReport();
    return;
  }
  questionIndex = (questionIndex + 1) % exam.questions.length;
  renderQuestion();
}

function showReport() {
  const exam = getCurrentExam();
  const correctCount = exam.questions.reduce((total, question, index) => total + (drillAnswers[index] === question.correct ? 1 : 0), 0);
  const score = Math.round((correctCount / exam.questions.length) * 100);
  const wrongQuestions = exam.questions
    .map((question, index) => ({ question, index }))
    .filter(({ question, index }) => drillAnswers[index] !== question.correct);
  document.querySelector("#report-score").textContent = `${score}%`;
  document.querySelector("#report-correct").textContent = `${correctCount} / ${exam.questions.length}`;
  document.querySelector("#report-advice").textContent = score >= 80 ? t("advicePass") : score >= 60 ? t("advicePractice") : t("adviceStudy");
  document.querySelector("#report-detail").textContent = wrongQuestions.length === 0
    ? t("perfectReport")
    : t("wrongReport", wrongQuestions.map(({ question }) => question.tag).join(listSeparator()));
  saveExamProgress(exam.id, (progress) => {
    const wrongSet = new Set(progress.wrongQuestionKeys || []);
    exam.questions.forEach((question, index) => {
      if (drillAnswers[index] === question.correct) wrongSet.delete(questionKey(exam, index));
      else wrongSet.add(questionKey(exam, index));
    });
    return {
      ...progress,
      answered: progress.answered + exam.questions.length,
      correct: progress.correct + correctCount,
      wrongQuestionKeys: Array.from(wrongSet),
      lastScore: score,
      lastStudiedAt: new Date().toISOString()
    };
  });
  elements.report.classList.remove("hidden");
}

function resetSession() {
  questionIndex = 0;
  drillAnswers = [];
  answered = false;
  elements.report.classList.add("hidden");
  renderQuestion();
}

function setMode(nextMode) {
  mode = nextMode;
  document.querySelectorAll(".mode").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  resetSession();
  renderExam();
}

function refreshForFilters() {
  const matches = getFilteredExams();
  if (matches[0] && !matches.some((exam) => exam.id === currentExamId)) {
    currentExamId = matches[0].id;
    questionIndex = 0;
  }
  renderExam();
  renderCatalog();
}

function setLanguage(language) {
  currentLanguage = language;
  applyStaticTranslations();
  populateFilters(true);
  refreshForFilters();
}

function clearCurrentLocalProgress() {
  const store = readProgressStore();
  delete store[currentExamId];
  writeProgressStore(store);
  renderLearningStats(getCurrentExam());
  renderStudyPlan(getCurrentExam());
  renderLocalProgress();
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    selectedTrack = button.dataset.track;
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const firstMatch = getFilteredExams()[0];
    if (firstMatch) currentExamId = firstMatch.id;
    refreshForFilters();
  });
});

document.querySelectorAll(".mode").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

[elements.search, elements.country, elements.region, elements.type].forEach((control) => {
  control.addEventListener("input", refreshForFilters);
});

elements.language.addEventListener("change", () => setLanguage(elements.language.value));
elements.startDrillButton.addEventListener("click", () => setMode("exam"));
elements.nextButton.addEventListener("click", advanceQuestion);
elements.skipButton.addEventListener("click", advanceQuestion);
elements.resetButton.addEventListener("click", resetSession);
elements.clearLocalButton.addEventListener("click", clearCurrentLocalProgress);

populateFilters(false);
applyStaticTranslations();
renderExam();
renderCatalog();
