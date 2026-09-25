export type Lang = "en" | "ar";

export const pick = <T,>(lang: Lang, en: T, ar: T): T => (lang === "en" ? en : ar);

export const centerInfo = {
  name: {
    en: "Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation",
    ar: "مركز الدكتور عبدالمحسن الرحيمي للسيادة الإدراكية والتحول الحضاري",
  },
  shortName: {
    en: "Alrohaimi Center",
    ar: "مركز الرحيمي",
  },
  tagline: {
    en: "From Understanding Humanity and Cognition to Shaping Transformation",
    ar: "من فهم الإنسان والإدراك إلى صناعة التحول",
  },
  founder: {
    en: "Dr. Abdulmohsen Hameed Alrohaimi",
    ar: "الدكتور عبدالمحسن حميد الرحيمي",
    shortEn: "Dr. Abdulmohsen Alrohaimi",
    shortAr: "الدكتور عبدالمحسن الرحيمي",
    title: {
      en: "Founder: Dr. Abdulmohsen Hameed Alrohaimi",
      ar: "المؤسس: الدكتور عبدالمحسن حميد الرحيمي",
    },
    bio: {
      en: "Founder of the Center and the intellectual project associated with Alrohaimi Theory, Cognitive Sovereignty, the Saudi School of Conscious Leadership, and a range of developing research frameworks addressing leadership, cognition, complex systems, and civilizational transformation.",
      ar: "مؤسس المركز والمشروع الفكري المرتبط بنظرية الرحيمي، والسيادة الإدراكية، والمدرسة السعودية للقيادة الواعية، ومجموعة من الأطر والنماذج البحثية الرائدة المعنية بالقيادة والإدراك والأنظمة المعقدة والتحول الحضاري.",
    },
  },
  centralQuestion: {
    en: "How can human and institutional understanding, awareness, and latent capabilities be transformed into sound decisions, meaningful transformation, and sustainable impact?",
    ar: "كيف يمكن تحويل الفهم والوعي والقدرات الكامنة لدى الإنسان والمؤسسة إلى قرارات رشيدة وتحول ذي معنى وأثر مستدام؟",
  },
  vision: {
    en: "To contribute to a more human future by developing knowledge that connects humanity, cognition, systems, and transformation.",
    ar: "الإسهام في مستقبل أكثر إنسانية بتطوير معرفة تصل الإنسان والإدراك والأنظمة والتحول.",
  },
  mission: {
    en: "To develop an intellectual, research, and applied system that deepens understanding of humanity, cognition, and systems; transforms knowledge and capability into impact; and opens pathways for scientific collaboration and international dialogue.",
    ar: "تطوير منظومة فكرية وبحثية وتطبيقية تعمق فهم الإنسان والإدراك والأنظمة، وتحول المعرفة والقدرة إلى أثر، وتفتح مسارات للتعاون العلمي والحوار الدولي.",
  },
  scientificPositioning: {
    en: "Alrohaimi Theory is a developing intellectual and theoretical system that connects latent potential, cognition, meaning, decision, transformation, and impact. The Center develops conceptual models, applied frameworks, and prototype diagnostic tools derived from this system and makes them available for peer engagement, empirical validation, and international research collaboration.",
    ar: "تمثل نظرية الرحيمي منظومة فكرية ونظرية قيد التطوير تصل بين الإمكان الكامن والإدراك والمعنى والقرار والتحول والأثر. ويعمل المركز على تطوير نماذج مفاهيمية، وأطر تطبيقية، وأدوات تشخيصية أولية مشتقة من هذه المنظومة، وإتاحتها للتحكيم والمشاركة العلمية والتحقق التجريبي والتعاون البحثي الدولي.",
  },
  intellectualProperty: {
    en: "Selected theoretical models and intellectual frameworks are protected intellectual assets and remain open to ongoing empirical research and academic collaboration.",
    ar: "تُعد النماذج النظرية والأطر الفكرية المختارة أصولاً فكرية محمية، وتبقى مفتوحة للبحث التجريبي المستمر والتعاون الأكاديمي الدولي.",
  },
  website: "alrohaimicenter.org",
  theoryWebsite: "alrohaimitheory.org",
  email: "contact@alrohaimicenter.org",
  location: {
    en: "Riyadh, Kingdom of Saudi Arabia",
    ar: "الرياض، المملكة العربية السعودية",
  },
};

export const nav = {
  en: [
    ["/", "Home"],
    ["/about", "About the Center"],
    ["/intellectual-system", "Alrohaimi Intellectual System"],
    ["/theory", "Alrohaimi Theory"],
    ["/research-series", "Research Series"],
    ["/foundational-works", "Foundational Works"],
    ["/programs", "Programs"],
    ["/units", "Units"],
    ["/knowledge", "Knowledge"],
    ["/research", "Research & Publications"],
    ["/partnerships", "Partnerships"],
    ["/contact", "Contact"],
  ],
  ar: [
    ["/", "الرئيسية"],
    ["/about", "عن المركز"],
    ["/intellectual-system", "المنظومة الفكرية للرحيمي"],
    ["/theory", "نظرية الرحيمي"],
    ["/research-series", "سلسلة الأبحاث"],
    ["/foundational-works", "الأعمال التأسيسية"],
    ["/programs", "البرامج"],
    ["/units", "الوحدات"],
    ["/knowledge", "المعرفة"],
    ["/research", "الأبحاث والنشر"],
    ["/partnerships", "الشراكات"],
    ["/contact", "تواصل معنا"],
  ],
} as const;

export const pillars = {
  en: [
    [
      "Humanity",
      "Understanding human capability, meaning, dignity, and agency.",
    ],
    [
      "Cognition",
      "Exploring perception, interpretation, decision-making, and cognitive sovereignty.",
    ],
    [
      "Systems",
      "Studying institutions, complex systems, interdependencies, and adaptive transformation.",
    ],
    [
      "Transformation",
      "Exploring how knowledge and latent capability can move toward systemic and civilizational impact.",
    ],
  ],
  ar: [
    [
      "الإنسان",
      "فهم القدرة الإنسانية، والمعنى، والكرامة، والفاعلية.",
    ],
    [
      "الإدراك",
      "استكشاف الإدراك، والتفسير، وصناعة القرار، والسيادة الإدراكية.",
    ],
    [
      "الأنظمة",
      "دراسة المؤسسات، والأنظمة المعقدة، والترابطات المنظومية، والتحول التكيفي.",
    ],
    [
      "التحول",
      "استكشاف كيفية انتقال المعرفة والقدرة الكامنة نحو أثر منظومي وحضاري.",
    ],
  ],
};

export const researchDomainsNote = {
  en: "Six research domains operate across the Center’s four institutional units.",
  ar: "تعمل مجالات البحث الستة عبر الوحدات المؤسسية الأربع للمركز.",
};

export const research = {
  en: [
    [
      "Alrohaimi Theory",
      "A foundational intellectual system exploring the movement from latency to cognition, meaning, decision, transformation, and impact.",
    ],
    [
      "Cognitive Sovereignty",
      "The capacity of individuals and institutions to understand, interpret, and assume responsibility for decisions in the age of algorithmic and AI-enabled systems.",
    ],
    [
      "Conscious Leadership",
      "Leadership understood as an integrated process anchored in cognition, meaning, sound decision-making, and purposeful transformation.",
    ],
    [
      "Complex Systems",
      "The rigorous study of adaptive systems, emergent phenomena, interdependencies, and their structural effects on governance and transformation.",
    ],
    [
      "Existential Resilience",
      "Exploring the relationship between existential meaning, human dignity, and the sustained capacity to confront systemic pressure and rapid change.",
    ],
    [
      "Civilizational Transformation",
      "Latent knowledge and capability toward systemic, ethical, and historical impact.",
    ],
  ],
  ar: [
    [
      "نظرية الرحيمي",
      "منظومة فكرية تأسيسية تستكشف الانتقال من الكمون إلى الإدراك والمعنى والقرار والتحول والأثر.",
    ],
    [
      "السيادة الإدراكية",
      "قدرة الأفراد والمؤسسات على الفهم والتفسير وتحمل المسؤولية عن القرارات في عصر الأنظمة الخوارزمية والذكاء الاصطناعي.",
    ],
    [
      "القيادة الواعية",
      "فهم القيادة بوصفها عملية متكاملة ترتكز إلى الإدراك، والمعنى، وصناعة القرار الرشيد، والتحول الهادف.",
    ],
    [
      "الأنظمة المعقدة",
      "دراسة علمية للأنظمة التكيفية والتفاعلات المتشابكة وتأثيراتها البنيوية في الحوكمة وصناعة القرارات.",
    ],
    [
      "المرونة الوجودية",
      "استكشاف العلاقة بين المعنى والكرامة الإنسانية وقدرة المجتمعات على مواجهة الضغوط والتحولات المتسارعة.",
    ],
    [
      "التحول الحضاري",
      "انتقال المجتمعات والمؤسسات من المعرفة والقدرة الكامنة نحو التحول المنهجي والأثر الأخلاقي والتاريخي.",
    ],
  ],
};

export const theoryStages = {
  en: [
    {
      id: "latency",
      num: "01",
      title: "Latent Potential",
      subtitle: "The unactivated capability residing within individuals, cultures, and institutions.",
      detail: "In scarce or abundant settings, capability begins in latent form. Identifying latency requires deep cognitive perception before any resource mobilization.",
      metricLabel: "ILLUSTRATIVE DIAGNOSTIC OUTPUT",
      metric: "Illustrative Score: 94",
      disclaimer: "Illustrative model output for demonstration purposes; not an empirically validated population estimate.",
      status: "Theoretical Construct",
      progress: "Research Development Progress: 17%",
    },
    {
      id: "cognition",
      num: "02",
      title: "Cognition",
      subtitle: "The processes through which potential becomes perceived, interpreted, and understood.",
      detail: "Moving beyond passive data intake. Cognition forms the foundational awareness required to interpret algorithmic realities and environmental signals.",
      metricLabel: "ILLUSTRATIVE DIAGNOSTIC OUTPUT",
      metric: "Illustrative Score: 88",
      disclaimer: "Illustrative model output for demonstration purposes; not an empirically validated population estimate.",
      status: "Theoretical Construct",
      progress: "Research Development Progress: 33%",
    },
    {
      id: "meaning",
      num: "03",
      title: "Meaning",
      subtitle: "The formation of significance, context, and human interpretation.",
      detail: "Raw information without meaning breeds confusion. Meaning aligns perception with ethical purpose, enabling human-centered clarity.",
      metricLabel: "ILLUSTRATIVE DIAGNOSTIC OUTPUT",
      metric: "Illustrative Score: 91",
      disclaimer: "Illustrative model output for demonstration purposes; not an empirically validated population estimate.",
      status: "Theoretical Construct",
      progress: "Research Development Progress: 50%",
    },
    {
      id: "decision",
      num: "04",
      title: "Decision",
      subtitle: "The transition from understanding to responsible choice and action.",
      detail: "Decisions made with cognitive sovereignty transcend algorithmic compulsion, taking full institutional responsibility.",
      metricLabel: "ILLUSTRATIVE DIAGNOSTIC OUTPUT",
      metric: "Illustrative Score: 86",
      disclaimer: "Illustrative model output for demonstration purposes; not an empirically validated population estimate.",
      status: "Validation in Progress",
      progress: "Research Development Progress: 67%",
    },
    {
      id: "transformation",
      num: "05",
      title: "Transformation",
      subtitle: "The restructuring of capabilities, systems, behaviors, or institutions.",
      detail: "Transformation reshapes institutional architectures, deploying human and technological systems in synchronized harmony.",
      metricLabel: "ILLUSTRATIVE DIAGNOSTIC OUTPUT",
      metric: "Illustrative Score: 89",
      disclaimer: "Illustrative model output for demonstration purposes; not an empirically validated population estimate.",
      status: "Validation in Progress",
      progress: "Research Development Progress: 83%",
    },
    {
      id: "impact",
      num: "06",
      title: "Impact",
      subtitle: "The emergence of measurable, sustained, and meaningful effects.",
      detail: "Impact validates theory. It creates generational value, elevating societies and establishing human-centered civilizational milestones.",
      metricLabel: "ILLUSTRATIVE DIAGNOSTIC OUTPUT",
      metric: "Illustrative Score: 92",
      disclaimer: "Illustrative model output for demonstration purposes; not an empirically validated population estimate.",
      status: "Validation in Progress",
      progress: "Research Development Progress: 100%",
    },
  ],
  ar: [
    {
      id: "latency",
      num: "01",
      title: "الإمكان الكامن",
      subtitle: "القدرة غير المفعلة المستقرة في عمق الإنسان والمؤسسات والمجتمعات.",
      detail: "في بيئات الوفرة أو الشح، تبدأ القدرة في طور الكمون. ويتطلب كشف هذا الكمون وعياً إدراكياً عميقاً يسبق أي تعبئة للموارد.",
      metricLabel: "مخرج تشخيصي توضيحي",
      metric: "درجة توضيحية: 94",
      disclaimer: "مخرج نموذجي لأغراض التوضيح والنمذجة؛ وليس تقديرًا إحصائيًا مثبتًا تجريبيًا.",
      status: "بناء نظري",
      progress: "مستوى التطوير البحثي: 17%",
    },
    {
      id: "cognition",
      num: "02",
      title: "الإدراك",
      subtitle: "العمليات التي يُدرك من خلالها الإمكان ويُفسر ويُفهم.",
      detail: "الانتقال من مجرد استقبال البيانات إلى تشكيل الوعي المنهجي القادر على تفسير الواقع في عصر الخوارزميات.",
      metricLabel: "مخرج تشخيصي توضيحي",
      metric: "درجة توضيحية: 88",
      disclaimer: "مخرج نموذجي لأغراض التوضيح والنمذجة؛ وليس تقديرًا إحصائيًا مثبتًا تجريبيًا.",
      status: "بناء نظري",
      progress: "مستوى التطوير البحثي: 33%",
    },
    {
      id: "meaning",
      num: "03",
      title: "المعنى",
      subtitle: "تشكيل الدلالة والسياق والتفسير الإنساني.",
      detail: "المعلومة المجردة بلا معنى تقود للتشتت. المعنى يمنح الوعي بوصلته الأخلاقية، مما يوفر وضوحاً مرتكزاً إلى الإنسان.",
      metricLabel: "مخرج تشخيصي توضيحي",
      metric: "درجة توضيحية: 91",
      disclaimer: "مخرج نموذجي لأغراض التوضيح والنمذجة؛ وليس تقديرًا إحصائيًا مثبتًا تجريبيًا.",
      status: "بناء نظري",
      progress: "مستوى التطوير البحثي: 50%",
    },
    {
      id: "decision",
      num: "04",
      title: "القرار",
      subtitle: "الانتقال من الفهم إلى الاختيار والفعل المسؤول.",
      detail: "القرارات الناتجة عن السيادة الإدراكية تتحرر من التبعية الخوارزمية وتتحمل كامل المسؤولية الأخلاقية والمؤسسية.",
      metricLabel: "مخرج تشخيصي توضيحي",
      metric: "درجة توضيحية: 86",
      disclaimer: "مخرج نموذجي لأغراض التوضيح والنمذجة؛ وليس تقديرًا إحصائيًا مثبتًا تجريبيًا.",
      status: "قيد التحقق والتطوير",
      progress: "مستوى التطوير البحثي: 67%",
    },
    {
      id: "transformation",
      num: "05",
      title: "التحول",
      subtitle: "إعادة هيكلة القدرات والأنظمة والسلوكيات أو المؤسسات.",
      detail: "يعيد التحول تشكيل البنى المؤسسية وينسق بين الطاقات البشرية والحلول التقنية في تناغم مدروس.",
      metricLabel: "مخرج تشخيصي توضيحي",
      metric: "درجة توضيحية: 89",
      disclaimer: "مخرج نموذجي لأغراض التوضيح والنمذجة؛ وليس تقديرًا إحصائيًا مثبتًا تجريبيًا.",
      status: "قيد التحقق والتطوير",
      progress: "مستوى التطوير البحثي: 83%",
    },
    {
      id: "impact",
      num: "06",
      title: "الأثر",
      subtitle: "انبثاق آثار ملموسة ومستدامة وذات مغزى حضاري.",
      detail: "الأثر هو برهان النظرية. يصنع قيمة عابرة للأجيال ترتقي بالمجتمعات وتثبت ركائز النهضة الإنسانية.",
      metricLabel: "مخرج تشخيصي توضيحي",
      metric: "درجة توضيحية: 92",
      disclaimer: "مخرج نموذجي لأغراض التوضيح والنمذجة؛ وليس تقديرًا إحصائيًا مثبتًا تجريبيًا.",
      status: "قيد التحقق والتطوير",
      progress: "مستوى التطوير البحثي: 100%",
    },
  ],
};

export const theorySteps = {
  en: ["Latent Potential", "Cognition", "Meaning", "Decision", "Transformation", "Impact"],
  ar: ["الإمكان الكامن", "الإدراك", "المعنى", "القرار", "التحول", "الأثر"],
};

export const primaryUnits = {
  en: [
    {
      id: "cognitive-sovereignty",
      title: "Cognitive Sovereignty Unit",
      arabicTitle: "وحدة السيادة الإدراكية",
      description: "Developing knowledge, methodologies, and frameworks related to human cognition, critical discernment, decision-making, and ethical governance in the age of algorithmic and AI systems.",
      focus: ["Algorithmic Agency", "Decision Auditing", "Epistemic Independence", "Human-AI Symbiosis"],
    },
    {
      id: "conscious-leadership",
      title: "Conscious Leadership & Civilizational Transformation Unit",
      arabicTitle: "وحدة القيادة الواعية والتحول الحضاري",
      description: "Developing advanced leadership models, strategic foresight frameworks, transformation management paradigms, and sustainable civilizational impact programs for public and private institutions.",
      focus: ["Executive Discernment", "Vision Engineering", "Civilizational Strategy", "Institutional Regeneration"],
    },
    {
      id: "knowledge-theories",
      title: "Knowledge, Theories & Research Unit",
      arabicTitle: "وحدة المعرفة والنظريات والأبحاث",
      description: "Constructing foundational theories, scientific concepts, analytical models, and empirical research publications anchoring Alrohaimi Theory and complex systems scholarship.",
      focus: ["Theoretical Architecture", "Alrohaimi Theory Development", "Complexity Modeling", "Peer-Reviewed Studies"],
    },
    {
      id: "thought-future",
      title: "Thought, Future & Impact Unit",
      arabicTitle: "وحدة الفكر والمستقبل والأثر",
      description: "Connecting forward-looking intellectual inquiry with global scientific dialogues, futures studies, and the strategic translation of ideas into institutional and societal impact.",
      focus: ["Global Academic Dialogue", "Civilizational Foresight", "Impact Measurement", "Policy Consulting"],
    },
  ],
  ar: [
    {
      id: "cognitive-sovereignty",
      title: "وحدة السيادة الإدراكية",
      arabicTitle: "Cognitive Sovereignty Unit",
      description: "تطوير المعرفة والأطر المنهجية المتعلقة بالإدراك وصناعة القرار والإنسان في عصر الأنظمة الخوارزمية والذكاء الاصطناعي.",
      focus: ["الفاعلية الخوارزمية", "تدقيق القرارات", "الاستقلال المعرفي", "التناغم الإنساني التقني"],
    },
    {
      id: "conscious-leadership",
      title: "وحدة القيادة الواعية والتحول الحضاري",
      arabicTitle: "Conscious Leadership & Civilizational Transformation Unit",
      description: "تطوير مفاهيم القيادة المتقدمة، وصناعة الرؤية، وإدارة التحول، وتحقيق الأثر الحضاري المستدام للمؤسسات القيادية.",
      focus: ["الرشاد القيادي", "هندسة الرؤية", "الاستراتيجية الحضارية", "التجديد المؤسسي"],
    },
    {
      id: "knowledge-theories",
      title: "وحدة المعرفة والنظريات والأبحاث",
      arabicTitle: "Knowledge, Theories & Research Unit",
      description: "بناء النظريات التأسيسية، والمفاهيم، والنماذج، والمؤشرات، وإجراء البحوث النظرية والتطبيقية التي ترتكز عليها نظرية الرحيمي.",
      focus: ["البناء النظري", "تطوير نظرية الرحيمي", "نمذجة التعقيد", "الدراسات المحكمة"],
    },
    {
      id: "thought-future",
      title: "وحدة الفكر والمستقبل والأثر",
      arabicTitle: "Thought, Future & Impact Unit",
      description: "ربط الفكر الاستشرافي بالمستقبل والحوار الدولي، وتحويل المعرفة إلى أثر مؤسسي ومجتمعي ملموس.",
      focus: ["الحوار العلمي الدولي", "استشراف المستقبل الحضاري", "قياس الأثر", "الاستشارات السياساتية"],
    },
  ],
};

export const units = {
  en: [
    [
      "Living Systems & Biological Cognition Lab",
      "Explores the biological, ecological, and living system foundations of cognition, awareness, adaptation, and decision-making.",
      "Bio-Cognition",
    ],
    [
      "Applied Transformation & Metrics Unit",
      "Develops practical measurement tools, indicators, and applied frameworks for transformation assessment across institutions.",
      "Metrics & Indicators",
    ],
    [
      "Cognitive & Conceptual Lexicon Unit",
      "Builds the conceptual vocabulary and definitional frameworks that anchor the Center's intellectual and scholarly system.",
      "Conceptual Architecture",
    ],
    [
      "Existential Resilience Literature Lab",
      "Studies literature, philosophical meaning, and humanity's capacity to confront systemic transformation, uncertainty, and pressure.",
      "Resilience & Meaning",
    ],
    [
      "Civilizational Futures Platform",
      "Explores dynamic pathways for civilizational transformation, societal foresight, and knowledge-driven global impact.",
      "Futures & Foresight",
    ],
    [
      "Saudi School of Conscious Leadership",
      "The Center's executive training and leadership development arm — translating theoretical knowledge into practical leadership excellence.",
      "Executive Academy",
    ],
    [
      "Cognitive Sovereignty Lab",
      "Develops cutting-edge frameworks, audit protocols, and training tools for strengthening cognitive sovereignty in leaders and institutions.",
      "AI & Sovereignty",
    ],
  ],
  ar: [
    [
      "مختبر الأنظمة الحية والإدراك البيولوجي",
      "يستكشف الأسس البيولوجية والحيوية للإدراك والوعي والتكيف وصناعة القرار في الأنظمة الحية.",
      "الإدراك الحيوي",
    ],
    [
      "وحدة التحول التطبيقي والمقاييس",
      "تطور أدوات القياس التطبيقية والمؤشرات والأطر العملية لتقييم التحول المؤسسي وقياس الأثر.",
      "المقاييس والمؤشرات",
    ],
    [
      "وحدة المعجم الإدراكي والمفاهيمي",
      "تبني المفردات المفاهيمية والأطر التعريفية المنهجية التي ترتكز عليها منظومة المركز الفكرية.",
      "البناء المفاهيمي",
    ],
    [
      "مختبر أدب المرونة الوجودية",
      "يدرس الأدب والمعنى الإنساني وقدرة المجتمعات على مواجهة التحولات الكبرى وعدم اليقين والضغوط.",
      "المرونة والمعنى",
    ],
    [
      "منصة المستقبل الحضاري",
      "تستكشف مسارات التحول الحضاري، والمستقبل المجتمعي، والأثر العالمي المدفوع بإنتاج المعرفة.",
      "الاستشراف الحضاري",
    ],
    [
      "المدرسة السعودية للقيادة الواعية",
      "ذراع المركز التنفيذي للتدريب وتطوير القيادات، لتحويل المعرفة والنظريات إلى ممارسة قيادية رفيعة.",
      "أكاديمية القيادة",
    ],
    [
      "مختبر السيادة الإدراكية",
      "يطور أطراً وأدوات تدريبية ونماذج تدقيق متقدمة لفهم وتعزيز السيادة الإدراكية في مواجهة الأنظمة الخوارزمية.",
      "السيادة والذكاء الاصطناعي",
    ],
  ],
};

export const outputs = {
  en: [
    [
      "Research & Studies",
      "Rigorous theoretical and applied research exploring cognition, conscious leadership, complex systems, and civilizational transformation.",
      "Peer-reviewed publications, white papers, and academic monographs.",
    ],
    [
      "Training Programs",
      "The Saudi School of Conscious Leadership program portfolio for senior executives, university rectors, and national decision-makers.",
      "Executive certifications, immersions, and masterclasses.",
    ],
    [
      "Books & References",
      "Scholarly volumes, intellectual treatises, conceptual dictionaries, and reference literature published by the Center.",
      "Foundational literature on Alrohaimi Theory and cognitive sovereignty.",
    ],
    [
      "Models & Theories",
      "Original intellectual frameworks including Alrohaimi Theory, the Leadership Bridging Model, and Gene Latency Theory.",
      "Actionable conceptual blueprints tested across institutional environments.",
    ],
    [
      "Tools & Indicators",
      "Proprietary measurement instruments, including the Alrohaimi Index for Civilizational Transformation and cognitive audit tools.",
      "Diagnostic metrics and evaluation scorecards.",
    ],
    [
      "Knowledge Consulting",
      "Applied advisory services assisting sovereign entities, universities, and major corporations in strategic transformation.",
      "Bespoke institutional foresight and cognitive governance counsel.",
    ],
  ],
  ar: [
    [
      "البحوث والدراسات",
      "أبحاث نظرية وتطبيقية محكمة تستكشف الإدراك، والقيادة الواعية، والأنظمة المعقدة، والتحول الحضاري.",
      "أوراق علمية، ودراسات رصينة، وتقارير استراتيجية.",
    ],
    [
      "البرامج التدريبية",
      "محفظة برامج المدرسة السعودية للقيادة الواعية الموجهة لكبار التنفيذيين، ومديري الجامعات، وصناع القرار.",
      "شهادات تنفيذية، وورش عمل رفيعة المستوى.",
    ],
    [
      "الكتب والمراجع",
      "مؤلفات أكاديمية، ومراجع فكرية، ومعاجم مفاهيمية متخصصة يصدرها المركز عالمياً.",
      "المراجع التأسيسية لنظرية الرحيمي والسيادة الإدراكية.",
    ],
    [
      "النماذج والنظريات",
      "أطر فكرية ونظرية أصيلة تشمل نظرية الرحيمي، ونموذج التجسير القيادي، ونظرية الكمون الجيني.",
      "نماذج تطبيقية مختبرة في البيئات المؤسسية.",
    ],
    [
      "الأدوات والمؤشرات",
      "أدوات قياس معيارية، وفي مقدمتها مؤشر الرحيمي للتحول الحضاري وأدوات تدقيق السيادة الإدراكية.",
      "مؤشرات تشخيصية ولوحات قياس الأثر.",
    ],
    [
      "الاستشارات المعرفية",
      "خدمات استشارية تطبيقية تقدم للجهات القيادية والجامعات والمؤسسات الكبرى لدعم التحول وصناعة القرار.",
      "استشارات استشرافية وتوجيه معرفي استراتيجي.",
    ],
  ],
};

export interface ProgramItem {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  arabicDescription: string;
  duration: string;
  arabicDuration: string;
  audience: string;
  arabicAudience: string;
  modules: string[];
  arabicModules: string[];
}

export const leadershipPrograms: ProgramItem[] = [
  {
    id: "conscious-leadership-decision",
    title: "Conscious Leadership and Decision-Making",
    arabicTitle: "القيادة الواعية وصناعة القرار",
    description: "Explores the fundamental relationship between heightened self-awareness, cognitive clarity, epistemic integrity, and sound decision-making under uncertainty.",
    arabicDescription: "يستكشف العلاقة الجوهرية بين الوعي الذاتي، والوضوح الإدراكي، والنزاهة المعرفية، وصناعة القرار الرشيد في بيئات عدم اليقين.",
    duration: "4 Weeks · Executive Immersion",
    arabicDuration: "٤ أسابيع · معايشة تنفيذية",
    audience: "C-Suite Executives, Managing Directors, Senior Government Leaders",
    arabicAudience: "القيادات التنفيذية العليا، وكلاء الوزارات، وصناع القرار",
    modules: [
      "The Anatomy of Perceptual Latency in Leadership",
      "Cognitive Filters, Biases, and Algorithmic Vulnerabilities",
      "Sound Decision Architectures in High-Stakes Environments",
      "The Alrohaimi Latency-to-Decision Matrix",
    ],
    arabicModules: [
      "تشريح الإمكان الكامن في الممارسة القيادية",
      "المرشحات الإدراكية والتحيزات في البيئات المعقدة",
      "هندسة القرارات الرشيدة تحت الضغط الاستراتيجي",
      "مصفوفة الرحيمي من الكمون إلى القرار",
    ],
  },
  {
    id: "cognitive-sovereignty-leaders",
    title: "Cognitive Sovereignty for Leaders",
    arabicTitle: "السيادة الإدراكية للقادة",
    description: "Equips leaders with sovereign critical judgment to decipher synthetic data, mitigate algorithmic capture, and retain strategic epistemic control in AI-dominated ecosystems.",
    arabicDescription: "يمكن القادة من امتلاك الحصانة الإدراكية لتفسير البيانات، وتفادي التبعية الخوارزمية، وضمان السيادة المعرفية في عصر الذكاء الاصطناعي.",
    duration: "3 Weeks · Intensive Masterclass",
    arabicDuration: "٣ أسابيع · ماستر كلاس مكثف",
    audience: "Digital Transformation Directors, Chief Information Officers, Policy Strategists",
    arabicAudience: "مديرو التحول الرقمي، مسؤولو التقنية، وخبراء الاستراتيجية",
    modules: [
      "Principles of Cognitive Sovereignty vs Algorithmic Dependency",
      "Epistemic Defense in Information-Saturated Landscapes",
      "Human-Centered Auditing of Automated Recommendation Systems",
      "Strategic Autonomy in Civilizational Decision-Making",
    ],
    arabicModules: [
      "مبادئ السيادة الإدراكية مقابل التبعية الخوارزمية",
      "الدفاع المعرفي في بيئات التدفق المعلوماتي الكثيف",
      "التدقيق الإنساني لأنظمة الذكاء الاصطناعي المؤتمتة",
      "الاستقلالية الاستراتيجية في القرارات الحضارية",
    ],
  },
  {
    id: "leadership-civilizational-transformation",
    title: "Leadership and Civilizational Transformation",
    arabicTitle: "القيادة والتحول الحضاري",
    description: "Examines how visionary leadership navigates societal transitions, mobilizing deep cultural strengths and latent collective capabilities toward enduring civilizational milestones.",
    arabicDescription: "يبحث في كيفية قيادة التحولات الكبرى وتعبئة القدرات الكامنة في المجتمع نحو إنجازات حضارية تاريخية ومستدامة.",
    duration: "6 Weeks · Flagship Program",
    arabicDuration: "٦ أسابيع · البرنامج الرائد",
    audience: "National Vision Directors, Ministers, Cultural & Academic Leaders",
    arabicAudience: "قادة مكاتب تحقيق الرؤية، مدراء المبادرات الوطنية، والمفكرون",
    modules: [
      "Civilizational Cycles and Societal Momentum",
      "The Alrohaimi Index: Measuring Transformational Readiness",
      "Bridging Traditional Wisdom with Modern Innovation",
      "Sovereign Transformation Roadmaps: Case Studies from Saudi Vision 2030",
    ],
    arabicModules: [
      "الدورات الحضارية والزخم المجتمعي الفارق",
      "مؤشر الرحيمي: قياس الجاهزية للتحول الحضاري",
      "التجسير بين الموروث الحضاري والابتكار المعاصر",
      "خرائط التحول السيادي: دراسات حالة من رؤية السعودية 2030",
    ],
  },
  {
    id: "leadership-age-ai",
    title: "Leadership in the Age of Artificial Intelligence",
    arabicTitle: "القيادة في عصر الذكاء الاصطناعي",
    description: "Redefining executive stewardship, moral accountability, and human leadership capability alongside generative and autonomous intelligent systems.",
    arabicDescription: "إعادة تعريف المسؤولية القيادية والأخلاقية والتكامل الإنساني الذكي إلى جانب النظم الاصطناعية التوليدية والمستقلة.",
    duration: "4 Weeks · Applied Track",
    arabicDuration: "٤ أسابيع · مسار تطبيقي",
    audience: "Tech Sector Leaders, Institutional Innovators, Regulators",
    arabicAudience: "قادة قطاع التقنية، المبتكرون، والجهات التنظيمية",
    modules: [
      "Ethical Frontiers: Human Intent vs Algorithmic Execution",
      "Orchestrating Human-Machine Hybrid Decision Teams",
      "Preserving Human Empathy, Creativity, and Existential Purpose",
      "Institutional Governance Frameworks for Sovereign AI",
    ],
    arabicModules: [
      "الآفاق الأخلاقية: الإرادة الإنسانية مقابل التنفيذ الآلي",
      "قيادة فرق العمل الهجينة بين الإنسان والآلة",
      "حماية التعاطف الإنساني والإبداع والمعنى الوجودي",
      "أطر الحوكمة المؤسسية للذكاء الاصطناعي السيادي",
    ],
  },
  {
    id: "systems-thinking-leaders",
    title: "Systems Thinking for Leaders",
    arabicTitle: "التفكير المنظومي للقادة",
    description: "Developing the capacity to map multi-layered socio-technical ecosystems, uncover hidden feedback loops, and foresee second- and third-order consequences.",
    arabicDescription: "تطوير القدرة على فهم الأنظمة المعقدة المتداخلة، ورصد حلقات التغذية الراجعة الخفية، واستشراف الآثار المتتابعة.",
    duration: "3 Weeks · Interactive Simulation",
    arabicDuration: "٣ أسابيع · محاكاة تفاعلية",
    audience: "Strategy Consultants, Urban Planners, Enterprise Architects",
    arabicAudience: "مستشارو الاستراتيجية، المخططون الحضريون، ومعماريو المؤسسات",
    modules: [
      "Systemic Complexity, Feedback Loops, and Non-Linear Dynamics",
      "Identifying High-Leverage Intervention Points",
      "Avoiding Institutional Blind Spots and Cascade Failures",
      "Modeling Scalable Transformations in Complex Environments",
    ],
    arabicModules: [
      "التعقيد المنظومي والديناميكيات غير الخطية",
      "تحديد نقاط التأثير الفارق في المنظومات الكبرى",
      "تجنب الثغرات المؤسسية وتداعيات الانهيار المتسلسل",
      "نمذجة التحولات القابلة للتوسع في البيئات المعقدة",
    ],
  },
  {
    id: "vision-creation-transformation",
    title: "Vision Creation and Transformation Management",
    arabicTitle: "صناعة الرؤية وإدارة التحول",
    description: "The methodology of articulating transformative institutional visions and orchestrating the complex human, cultural, and operational phases required for realization.",
    arabicDescription: "منهجية صياغة الرؤى المؤسسية التحويلية وإدارة المراحل الإنسانية والثقافية والتشغيلية اللازمة لتحقيقها.",
    duration: "5 Weeks · Strategic Workshop",
    arabicDuration: "٥ أسابيع · ورشة استراتيجية",
    audience: "Founders, Strategy Directors, Change Management Executives",
    arabicAudience: "المؤسسون، رؤساء الاستراتيجية، وقادة إدارة التغيير",
    modules: [
      "From Latent Intention to Articulated Civilizational Vision",
      "Overcoming Institutional Inertia and Cognitive Resistance",
      "Architecting Adaptive Milestone Roadmaps",
      "Institutionalizing Sustainable Impact Metrics",
    ],
    arabicModules: [
      "من النية الكامنة إلى الرؤية الحضارية المعلنة",
      "تجاوز الجمود المؤسسي والمقاومة الإدراكية للتغيير",
      "بناء خرائط طريق تكيفية قائمة على مراحل دقيقة",
      "مأسسة مؤشرات الأثر المستدام",
    ],
  },
  {
    id: "human-centered-leadership-impact",
    title: "Human-Centered Leadership and Impact",
    arabicTitle: "القيادة المتمحورة حول الإنسان والأثر",
    description: "Anchoring leadership practice in the inviolable dignity of the human being, fostering institutional flourishing, and measuring leadership by societal enrichment.",
    arabicDescription: "ترسيخ الممارسة القيادية في كرامة الإنسان، وتحقيق ازدهار بيئات العمل، وقياس النجاح القيادي بمدى الإثراء المجتمعي.",
    duration: "3 Weeks · Seminar & Dialogue",
    arabicDuration: "٣ أسابيع · حوارات وندوات",
    audience: "Human Capital Officers, Healthcare & Education Executives, Social Impact Leaders",
    arabicAudience: "مسؤولو رأس المال البشري، قيادات التعليم والصحة، ورواد الأثر الاجتماعي",
    modules: [
      "The Human as Origin, Conduit, and Objective of Leadership",
      "Cultivating Existential Meaning and Organizational Resilience",
      "Empathy as a Strategic Cognitive Asset",
      "Measuring Authentic Impact: Beyond Financial Yardsticks",
    ],
    arabicModules: [
      "الإنسان بوصفه منطلق القيادة وغايتها الأسمى",
      "غرس المعنى الوجودي والمرونة في ثقافة المنظمات",
      "التعاطف بوصفه ركيزة إدراكية استراتيجية",
      "قياس الأثر الحقيقي: ما بعد المقاييس المالية المادية",
    ],
  },
  {
    id: "conscious-leadership-university-leaders",
    title: "Conscious Leadership for University Leaders",
    arabicTitle: "القيادة الواعية للقيادات الجامعية",
    description: "Tailored specifically for university rectors, deans, and academic governance bodies to navigate epistemic shifts, scientific research priorities, and academic transformation.",
    arabicDescription: "مخصص لمديري الجامعات والعمداء ومجالس الأمناء لقيادة التحولات المعرفية، وتطوير البحث العلمي، وتحديث التعليم العالي.",
    duration: "4 Weeks · Academic Forum",
    arabicDuration: "٤ أسابيع · منتدى أكاديمي",
    audience: "University Presidents, Vice Chancellors, College Deans, Research Council Chairs",
    arabicAudience: "رؤساء الجامعات، وكلاء الشؤون الأكاديمية، والعمداء، ورؤساء مراكز الأبحاث",
    modules: [
      "The University in the Era of Cognitive Sovereignty",
      "Restructuring Academic Curricula for AI Disruption",
      "Fostering Applied Knowledge Translation and Indigenous Theorizing",
      "Academic Governance, Research Integrity, and Global Recognition",
    ],
    arabicModules: [
      "الجامعة في عصر السيادة الإدراكية والمعرفية",
      "إعادة هيكلة المناهج لمواكبة تحولات الذكاء الاصطناعي",
      "تحفيز الإنتاج المعرفي الوطني والتنظير الأصيل",
      "الحوكمة الأكاديمية، والنزاهة البحثية، والريادة الدولية",
    ],
  },
];

export const story = {
  en: "The Center's intellectual perspective begins with a fundamental observation: capability may exist before it becomes visible, organized, or mobilized. The desert represents more than geography. It represents a context in which adaptation, perception, resourcefulness, resilience, and the management of possibility become essential forms of intelligence. From scarcity to capability, from capability to cognition, and from cognition to transformation, the Center explores how latent potential can become meaningful and measurable impact. “The desert is not merely geography. It is a school.”",
  ar: "ينطلق المنظور الفكري للمركز من ملاحظة جوهرية: قد توجد القدرة قبل أن تصبح مرئية أو منظمة أو معبأة. تمثل الصحراء أكثر من مجرد جغرافيا؛ إنها سياق يغدو فيه التكيف، والإدراك، وسعة الحيلة، والمرونة، وإدارة الممكن أشكالاً أساسية من الذكاء. من الشح إلى القدرة، ومن القدرة إلى الإدراك، ومن الإدراك إلى التحول، يستكشف المركز كيف يمكن للإمكان الكامن أن يتحول إلى أثر ذي مغزى وقابل للقياس. «الصحراء ليست مجرد جغرافيا، بل هي مدرسة».",
  pillars: {
    en: [
      { label: "A Nation", text: "Anchored in Saudi heritage, Vision 2030, and civilizational depth." },
      { label: "A Human Experience", text: "Born from reading reality, resilience, and extracting value from scarcity." },
      { label: "A Vision", text: "Theoretical rigor connecting cognition, decision, and systems." },
      { label: "A Global Impact", text: "Universal frameworks contributing to a more human future for all." },
    ],
    ar: [
      { label: "وطن", text: "مرتكز إلى العمق الحضاري للمملكة العربية السعودية ورؤية 2030." },
      { label: "تجربة إنسانية", text: "انبثقت من قراءة الواقع، والمرونة، وصناعة القيمة من المحدود." },
      { label: "رؤية فكرية", text: "بناء نظري رصين يصل الإدراك بالقرار والأنظمة." },
      { label: "أثر عالمي", text: "أطر عالمية تسهم في بناء مستقبل أكثر إنسانية للبشرية جمعاء." },
    ],
  },
};

export const publications = [
  {
    id: "pub-1",
    title: {
      en: "Alrohaimi Theory: Foundations, Epistemology, and Systemic Framework",
      ar: "نظرية الرحيمي: الأسس والإبستيمولوجيا والإطار المنظومي",
    },
    category: "Models & Theories",
    arabicCategory: "النماذج والنظريات",
    year: "2026",
    author: "Dr. Abdulmohsen Hameed Alrohaimi",
    pages: "348 pages · Academic Edition",
    description: {
      en: "The comprehensive treatise introducing the six-stage movement from latency to impact, offering an original intellectual architecture for human and institutional agency.",
      ar: "الأطروحة الشاملة التي تقدم مسار المراحل الست من الكمون إلى الأثر، وتؤسس لبنية فكرية أصيلة للفاعلية الإنسانية والمؤسسية.",
    },
  },
  {
    id: "pub-2",
    title: {
      en: "Cognitive Sovereignty in the Age of Algorithmic Hegemony",
      ar: "السيادة الإدراكية في عصر الهيمنة الخوارزمية والذكاء الاصطناعي",
    },
    category: "Research & Studies",
    arabicCategory: "البحوث والدراسات",
    year: "2025",
    author: "Alrohaimi Center Research Collective",
    pages: "Peer-Reviewed Research Paper · 48 pages",
    description: {
      en: "An empirical and theoretical examination of decision autonomy, cognitive capture, and frameworks for safeguarding institutional sovereign judgment.",
      ar: "دراسة نظرية وتطبيقية تفحص استقلالية القرار، والارتهان الإدراكي، وأطر صيانة القرار المؤسسي السيادي.",
    },
  },
  {
    id: "pub-3",
    title: {
      en: "The Alrohaimi Index: Composite Diagnostic Framework (AICT)",
      ar: "مؤشر الرحيمي للتحول الحضاري: إطار تشخيصي مركب للمقاييس والتقييم المؤسسي",
    },
    category: "Models & Frameworks",
    arabicCategory: "النماذج والأطر",
    year: "2026",
    author: "Applied Transformation & Metrics Unit",
    pages: "Methodological Framework Guidebook",
    description: {
      en: "The Alrohaimi Index is a composite diagnostic framework designed to explore institutional readiness to mobilize latent capacity toward sustainable transformation across four core dimensions.",
      ar: "مؤشر الرحيمي هو إطار تشخيصي مركب مصمم لاستكشاف الجاهزية المؤسسية لتعبئة القدرات الكامنة نحو التحول المستدام عبر أربعة أبعاد جوهرية.",
    },
  },
  {
    id: "pub-4",
    title: {
      en: "Conscious Leadership: Cognition, Meaning, and Decision",
      ar: "القيادة الواعية: الإدراك والمعنى والقرار في عصر التحولات الكبرى",
    },
    category: "Books & References",
    arabicCategory: "الكتب والمراجع",
    year: "2025",
    author: "Dr. Abdulmohsen Hameed Alrohaimi",
    pages: "Hardcover Book · 280 pages",
    description: {
      en: "A seminal reference text bridging classical wisdom and complex systems science for contemporary executive leaders.",
      ar: "مرجع فكري رصين يجسر بين الحكمة الإنسانية وعلم الأنظمة المعقدة لتمكين القيادات التنفيذية المعاصرة.",
    },
  },
  {
    id: "pub-5",
    title: {
      en: "Gene Latency and Existential Resilience Under Pressure",
      ar: "الكمون الجيني والمرونة الوجودية: الإنسان في مواجهة الضغوط والتغيير",
    },
    category: "Research & Studies",
    arabicCategory: "البحوث والدراسات",
    year: "2025",
    author: "Living Systems Lab & Resilience Lab",
    pages: "Scientific Monograph · 96 pages",
    description: {
      en: "An interdisciplinary study of the biological and systems-level roots of unexpressed capabilities and the mechanisms through which they may become activated under stress or disruption.",
      ar: "دراسة بينية للأسس البيولوجية والمنظومية للقدرات غير المفعلة والآليات التي يمكن من خلالها تنشيطها في ظل الضغوط والاضطرابات.",
    },
  },
  {
    id: "pub-6",
    title: {
      en: "Saudi School of Conscious Leadership: Curriculum & Executive Competencies",
      ar: "المدرسة السعودية للقيادة الواعية: وثيقة المنهج والجدارات القيادية",
    },
    category: "Training Materials",
    arabicCategory: "المواد التدريبية",
    year: "2026",
    author: "Executive Education Board",
    pages: "Institutional Syllabus & Assessment Framework",
    description: {
      en: "A foundational intellectual and educational framework exploring conscious leadership, meaning, cognition, responsibility, and transformation through a Saudi conceptual perspective.",
      ar: "إطار فكري وتربوي تأسيسي يستكشف القيادة الواعية والمعنى والإدراك والمسؤولية والتحول من منظور مفاهيمي سعودي.",
    },
  },
];

export interface ARSPublication {
  id: string;
  code: string;
  title: { en: string; ar: string };
  author: { en: string; ar: string };
  affiliation: { en: string; ar: string };
  abstract: { en: string; ar: string };
  keywords: string[];
  arabicKeywords: string[];
  date: string;
  version: string;
  scientificStatus: "Theoretical Construct" | "Conceptual Framework" | "Research Development Stage" | "Validation in Progress" | "Empirically Validated";
  arabicScientificStatus: string;
  doi?: string;
  pdfUrl: string;
  citation: string;
  relatedResearch: string[];
  relatedFrameworks: string[];
  researchStage: { en: string; ar: string };
  peerEngagement: { en: string; ar: string };
}

export const alrohaimiResearchSeries: ARSPublication[] = [
  {
    id: "ars-001",
    code: "ARS-001",
    title: {
      en: "Alrohaimi Theory: From Latency to Impact",
      ar: "نظرية الرحيمي: من الكمون إلى الأثر",
    },
    author: {
      en: "Dr. Abdulmohsen Hameed Alrohaimi",
      ar: "الدكتور عبدالمحسن حميد الرحيمي",
    },
    affiliation: {
      en: "Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation",
      ar: "مركز الدكتور عبدالمحسن الرحيمي للسيادة الإدراكية والتحول الحضاري",
    },
    abstract: {
      en: "Alrohaimi Theory represents a proposed systematic framework investigating how human and institutional latent potential transitions from an unactivated state through perception and meaning-making into sovereign decision, systemic transformation, and measurable civilizational impact. The theory extends beyond conceptual formulation by connecting theoretical constructs with operational models and diagnostic metrics.",
      ar: "تمثل نظرية الرحيمي إطارًا منهجيًا مقترحًا يبحث في كيفية انتقال الإمكان الكامن البشري والمؤسسي من حالة غير مفعلة، عبر الإدراك وصناعة المعنى، إلى القرار السيادي والتحول المنظومي والأثر الحضاري القابل للقياس. وتمتد النظرية إلى ما هو أبعد من الصياغة المفاهيمية بربط البناءات النظرية بالنماذج التشغيلية والمقاييس التشخيصية.",
    },
    keywords: ["Latency", "Cognition", "Meaning", "Decision", "Transformation", "Civilizational Impact", "Systems Theory"],
    arabicKeywords: ["الكمون", "الإدراك", "المعنى", "القرار", "التحول", "الأثر الحضاري", "نظرية الأنظمة"],
    date: "2026",
    version: "v2.4 (Research Draft)",
    scientificStatus: "Theoretical Construct",
    arabicScientificStatus: "بناء نظري",
    doi: "10.5281/zenodo.ars.001",
    pdfUrl: "#",
    citation: "Alrohaimi, A. H. (2026). Alrohaimi Theory: From Latency to Impact (ARS-001). Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation.",
    relatedResearch: ["ARS-002: Cognitive Sovereignty in the Algorithmic Era", "ARS-003: The Alrohaimi Index"],
    relatedFrameworks: ["Six Stages of Transformation", "Leadership Bridging Model"],
    researchStage: {
      en: "Theoretical Conceptualization & Model Development",
      ar: "التأصيل النظري وتطوير النماذج",
    },
    peerEngagement: {
      en: "Open to international research collaboration, empirical validation, and academic dialogue.",
      ar: "متاح للمشاركة العلمية والتحقق التجريبي والحوار الأكاديمي الدولي.",
    },
  },
  {
    id: "ars-002",
    code: "ARS-002",
    title: {
      en: "Cognitive Sovereignty in the Algorithmic Era",
      ar: "السيادة الإدراكية في العصر الخوارزمي",
    },
    author: {
      en: "Dr. Abdulmohsen Hameed Alrohaimi & Research Collective",
      ar: "الدكتور عبدالمحسن حميد الرحيمي والفريق البحثي للمركز",
    },
    affiliation: {
      en: "Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation",
      ar: "مركز الدكتور عبدالمحسن الرحيمي للسيادة الإدراكية والتحول الحضاري",
    },
    abstract: {
      en: "Investigates the capacity of individuals and institutions to understand, interpret, and assume responsibility for decisions in the age of algorithmic and AI-enabled systems. Presents a methodological framework for safeguarding human and institutional judgment autonomy against algorithmic vulnerability and algorithmic bias.",
      ar: "يبحث في قدرة الأفراد والمؤسسات على الفهم والتفسير وتحمل المسؤولية عن القرارات في عصر الأنظمة الخوارزمية وأنظمة الذكاء الاصطناعي. يقدم إطارًا منهجيًا لصيانة استقلالية الحكم الإنساني والمؤسسي ضد الهشاشة الخوارزمية والتحيز الخوارزمي.",
    },
    keywords: ["Cognitive Sovereignty", "Algorithmic Bias", "AI Governance", "Epistemic Autonomy", "Decision Auditing"],
    arabicKeywords: ["السيادة الإدراكية", "التحيز الخوارزمي", "حوكمة الذكاء الاصطناعي", "الاستقلال المعرفي", "تدقيق القرارات"],
    date: "2025",
    version: "v1.8",
    scientificStatus: "Conceptual Framework",
    arabicScientificStatus: "إطار مفاهيمي",
    doi: "10.5281/zenodo.ars.002",
    pdfUrl: "#",
    citation: "Alrohaimi, A. H. et al. (2025). Cognitive Sovereignty in the Algorithmic Era (ARS-002). Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation.",
    relatedResearch: ["ARS-001: Alrohaimi Theory", "ARS-003: The Alrohaimi Index"],
    relatedFrameworks: ["Cognitive Sovereignty Framework", "Algorithmic Agency Protocol"],
    researchStage: {
      en: "Framework Formulation & Protocol Prototyping",
      ar: "صياغة الأطر ونمذجة بروتوكولات الفحص",
    },
    peerEngagement: {
      en: "Open for interdisciplinary review and institutional cognitive audit trials.",
      ar: "متاح للمراجعة البينية وتجارب التدقيق المؤسسي.",
    },
  },
  {
    id: "ars-003",
    code: "ARS-003",
    title: {
      en: "The Alrohaimi Index",
      ar: "مؤشر الرحيمي",
    },
    author: {
      en: "Applied Transformation & Metrics Unit",
      ar: "وحدة التحول التطبيقي والمقاييس",
    },
    affiliation: {
      en: "Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation",
      ar: "مركز الدكتور عبدالمحسن الرحيمي للسيادة الإدراكية والتحول الحضاري",
    },
    abstract: {
      en: "The Alrohaimi Index is a composite diagnostic framework designed to explore institutional readiness to mobilize latent capacity toward sustainable transformation across four core dimensions: Cognitive Sovereignty & AI Independence, Systems Adaptability & Emergent Dynamics, Existential Resilience & Human Dignity, and Latent Potential Mobilization & Historical Impact.",
      ar: "مؤشر الرحيمي هو إطار تشخيصي مركب مصمم لاستكشاف الجاهزية المؤسسية لتعبئة القدرات الكامنة نحو التحول المستدام عبر أربعة أبعاد جوهرية: السيادة الإدراكية والاستقلال عن الذكاء الاصطناعي، التكيف المنظومي والديناميكيات الناشئة، المرونة الوجودية والكرامة الإنسانية، وتعبئة الإمكان الكامن والأثر التاريخي.",
    },
    keywords: ["Alrohaimi Index", "Diagnostic Framework", "Four Dimensions", "Readiness Simulation", "Systemic Transformation"],
    arabicKeywords: ["مؤشر الرحيمي", "إطار تشخيصي مركب", "الأبعاد الأربعة", "محاكاة الجاهزية", "التحول المنظومي"],
    date: "2026",
    version: "v2.0",
    scientificStatus: "Validation in Progress",
    arabicScientificStatus: "قيد التحقق والتطوير",
    doi: "10.5281/zenodo.ars.003",
    pdfUrl: "#",
    citation: "Applied Transformation & Metrics Unit. (2026). The Alrohaimi Index: Composite Diagnostic Framework (ARS-003). Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation.",
    relatedResearch: ["ARS-001: Alrohaimi Theory", "ARS-004: Leadership Bridging Model"],
    relatedFrameworks: ["Institutional Transformational Readiness Model", "Alrohaimi Index Simulator"],
    researchStage: {
      en: "Metric Calibration & Simulation Modeling",
      ar: "المعايرة المعيارية ونمذجة المحاكاة",
    },
    peerEngagement: {
      en: "Open for empirical calibration, field methodology partnerships, and academic validation.",
      ar: "متاح للمعايرة التجريبية وشراكات القياس الميداني والتحقق الأكاديمي.",
    },
  },
  {
    id: "ars-004",
    code: "ARS-004",
    title: {
      en: "Leadership Bridging Model",
      ar: "نموذج التجسير القيادي",
    },
    author: {
      en: "Dr. Abdulmohsen Hameed Alrohaimi",
      ar: "الدكتور عبدالمحسن حميد الرحيمي",
    },
    affiliation: {
      en: "Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation",
      ar: "مركز الدكتور عبدالمحسن الرحيمي للسيادة الإدراكية والتحول الحضاري",
    },
    abstract: {
      en: "An actionable operational model connecting higher-order theoretical insights with frontline executive decision-making under uncertainty. Addresses how leaders bridge complex epistemic insight and institutional execution during critical civilizational inflections.",
      ar: "نموذج تشغيلي إجرائي يربط بين الرؤى النظرية الرفيعة وصناعة القرار التنفيذي في الميدان تحت ظروف عدم اليقين. يعالج كيفية تجسير القادة بين الفهم المعرفي المعقد والتنفيذ المؤسسي أثناء المنعطفات الحضارية الحاسمة.",
    },
    keywords: ["Leadership Bridging", "Executive Decision-Making", "Uncertainty", "Operational Modeling", "Strategic Leadership"],
    arabicKeywords: ["التجسير القيادي", "صناعة القرار التنفيذي", "عدم اليقين", "النمذجة التشغيلية", "القيادة الاستراتيجية"],
    date: "2025",
    version: "v1.5",
    scientificStatus: "Research Development Stage",
    arabicScientificStatus: "مرحلة التطوير البحثي",
    doi: "10.5281/zenodo.ars.004",
    pdfUrl: "#",
    citation: "Alrohaimi, A. H. (2025). Leadership Bridging Model: Connecting Theory to Decision (ARS-004). Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation.",
    relatedResearch: ["ARS-001: Alrohaimi Theory", "ARS-003: The Alrohaimi Index"],
    relatedFrameworks: ["Saudi School of Conscious Leadership", "Executive Decision Architecture"],
    researchStage: {
      en: "Operational Framework Development",
      ar: "تطوير الإطار التشغيلي",
    },
    peerEngagement: {
      en: "Open for executive cohort feedback and leadership laboratory pilots.",
      ar: "متاح للتجريب في مختبرات القيادة واستطلاع آراء النخب التنفيذية.",
    },
  },
  {
    id: "ars-005",
    code: "ARS-005",
    title: {
      en: "Gene Latency Theory",
      ar: "نظرية الكمون الجيني",
    },
    author: {
      en: "Living Systems & Biological Cognition Lab",
      ar: "مختبر الأنظمة الحية والإدراك البيولوجي",
    },
    affiliation: {
      en: "Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation",
      ar: "مركز الدكتور عبدالمحسن الرحيمي للسيادة الإدراكية والتحول الحضاري",
    },
    abstract: {
      en: "An interdisciplinary study of the biological and systems-level roots of unexpressed capabilities and the mechanisms through which they may become activated under stress or disruption. Presented as an exploratory theoretical construct open to interdisciplinary scientific investigation.",
      ar: "دراسة بينية للأسس البيولوجية والمنظومية للقدرات غير المفعلة والآليات التي يمكن من خلالها تنشيطها في ظل الضغوط والاضطرابات. تُطرح كبناء نظري استكشافي مفتوح للبحث العلمي البيني.",
    },
    keywords: ["Gene Latency", "Biological Systems", "Epigenetic Activation", "Stress Adaptation", "Living Systems Theory"],
    arabicKeywords: ["الكمون الجيني", "الأنظمة البيولوجية", "التنشيط فوق الجيني", "التكيف مع الضغوط", "نظرية النظم الحية"],
    date: "2025",
    version: "v1.2",
    scientificStatus: "Theoretical Construct",
    arabicScientificStatus: "بناء نظري",
    doi: "10.5281/zenodo.ars.005",
    pdfUrl: "#",
    citation: "Living Systems Lab. (2025). Gene Latency Theory: Systems-Level Mechanisms of Activation (ARS-005). Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation.",
    relatedResearch: ["ARS-001: Alrohaimi Theory", "Literature of Existential Resistance"],
    relatedFrameworks: ["Existential Resilience Framework", "Living Systems Adaptation Model"],
    researchStage: {
      en: "Interdisciplinary Conceptual Synthesis",
      ar: "التوليف المفاهيمي البيني",
    },
    peerEngagement: {
      en: "Open for bio-cognitive research partnerships and multidisciplinary critique.",
      ar: "متاح لشراكات البحث البيولوجي الإدراكي والنقد الأكاديمي المتعدد التخصصات.",
    },
  },
];

export interface FoundationalWork {
  id: string;
  code: string;
  title: { en: string; ar: string };
  classification: { en: string; ar: string };
  description: { en: string; ar: string };
  scientificStatusNote: { en: string; ar: string };
  roleInSystem: { en: string; ar: string };
  supportedAreas: Array<{ en: string; ar: string }>;
  keyHighlights: Array<{ en: string; ar: string }>;
}

export const foundationalIntellectualWorks: FoundationalWork[] = [
  {
    id: "fiw-001",
    code: "FIW-001",
    title: {
      en: "The Saudi School of Conscious Leadership",
      ar: "المدرسة السعودية للقيادة الواعية",
    },
    classification: {
      en: "Foundational Intellectual & Educational Framework",
      ar: "إطار فكري وتربوي تأسيسي",
    },
    description: {
      en: "A foundational intellectual and educational framework exploring conscious leadership, meaning, cognition, responsibility, and transformation through a Saudi conceptual perspective.",
      ar: "إطار فكري وتربوي تأسيسي يستكشف القيادة الواعية والمعنى والإدراك والمسؤولية والتحول من منظور مفاهيمي سعودي.",
    },
    scientificStatusNote: {
      en: "Presented as a foundational intellectual and educational framework developed within the Alrohaimi intellectual system. The book is the foundational reference.",
      ar: "تُقدم بوصفها إطارًا فكريًا وتربويًا تأسيسيًا مطورًا ضمن منظومة الرحيمي الفكرية، حيث يمثل الكتاب المرجع التأسيسي لها.",
    },
    roleInSystem: {
      en: "The School functions as the applied leadership development vehicle of the Center, bridging deep cultural wisdom with modern institutional governance.",
      ar: "تعمل المدرسة كذراع لتطوير القيادات، مجسرة بين الحكمة الثقافية العميقة والحوكمة المؤسسية الحديثة.",
    },
    supportedAreas: [
      { en: "Leadership Education", ar: "التربية والتعليم القيادي" },
      { en: "Executive Learning", ar: "التعلم التنفيذي" },
      { en: "Research Programs", ar: "البرامج البحثية" },
      { en: "Workshops & Masterclasses", ar: "ورش العمل والماستر كلاس" },
      { en: "Applied Leadership Models", ar: "النماذج القيادية التطبيقية" },
      { en: "International Dialogue", ar: "الحوار الدولي" },
    ],
    keyHighlights: [
      { en: "Conscious Leadership Core: Anchored in cognition, meaning, sound decisions, and purposeful transformation.", ar: "جوهر القيادة الواعية: يرتكز إلى الإدراك والمعنى والقرار الرشيد والتحول الهادف." },
      { en: "Executive Competency Blueprint: Grounded in Saudi Vision 2030 and global civilizational demands.", ar: "مصفوفة الجدارات التنفيذية: مستندة إلى رؤية السعودية 2030 ومتطلبات الحوار الحضاري العالمي." },
      { en: "Institutional Sovereignty: Decision-making free from blind algorithmic dependence.", ar: "السيادة المؤسسية: صناعة قرارات متحررة من التبعية الخوارزمية العمياء." },
    ],
  },
  {
    id: "fiw-002",
    code: "FIW-002",
    title: {
      en: "Literature of Existential Resistance",
      ar: "أدب المقاومة الوجودية",
    },
    classification: {
      en: "Foundational Intellectual Work / Manifesto",
      ar: "عمل فكري تأسيسي / بيان فكري",
    },
    description: {
      en: "A foundational intellectual work exploring human meaning, dignity, existential resilience, resistance, and the preservation of agency under conditions of systemic and existential pressure.",
      ar: "عمل فكري تأسيسي يستكشف المعنى الإنساني، والكرامة، والمرونة الوجودية، والمقاومة، وصيانة الفاعلية في ظل ظروف الضغط المنظومي والوجودي.",
    },
    scientificStatusNote: {
      en: "Presented as a foundational intellectual work and philosophical manifesto; not an empirically validated scientific theory.",
      ar: "يُطرح بوصفه عملاً فكريًا تأسيسيًا وبيانًا فلسفيًا؛ وليس نظرية علمية مثبتة تجريبيًا.",
    },
    roleInSystem: {
      en: "Provides the humanistic, philosophical, and ethical backbone for the Center's inquiries into resilience and civilizational survival.",
      ar: "يوفر العمق الإنساني والفلسفي والأخلاقي لأبحاث المركز حول الصمود والاستدامة الحضارية.",
    },
    supportedAreas: [
      { en: "Philosophical & Existential Inquiries", ar: "الدراسات الفلسفية والوجودية" },
      { en: "Human Agency & Meaning-Making", ar: "الفاعلية الإنسانية وصناعة المعنى" },
      { en: "Crisis & Shock Resilience Research", ar: "أبحاث الصمود في الأزمات" },
      { en: "Cultural Thought & Dignity Studies", ar: "دراسات الفكر الثقافي والكرامة" },
    ],
    keyHighlights: [
      { en: "Agency Preservation: Safeguarding human autonomy and moral accountability against crushing pressures.", ar: "صيانة الفاعلية: حماية الاستقلالية الإنسانية والمسؤولية الأخلاقية أمام الضغوط الكبرى." },
      { en: "Dignity as an Invariable: Human dignity as the non-negotiable anchor of civilizational systems.", ar: "الكرامة كثابت: الكرامة الإنسانية كمرساة غير قابلة للتفاوض في النظم الحضارية." },
      { en: "Resilience Through Meaning: Victor Frankl-informed yet independently original civilizational perspective.", ar: "الصمود عبر المعنى: منظور حضاري أصيل يربط الإرادة بالمعنى الحضاري التراكمي." },
    ],
  },
  {
    id: "fiw-003",
    code: "FIW-003",
    title: {
      en: "The Conceptual Lexicon of Conscious Leadership",
      ar: "المعجم المفاهيمي للقيادة الواعية",
    },
    classification: {
      en: "Conceptual Reference",
      ar: "مرجع مفاهيمي ومعجم مصطلحي",
    },
    description: {
      en: "A conceptual reference work defining and organizing the terminology, concepts, and intellectual vocabulary of conscious leadership and meaning-centered transformation.",
      ar: "عمل مرجعي مفاهيمي يعرف وينظم المصطلحات، والمفاهيم، والمفردات الفكرية للقيادة الواعية والتحول المرتكز على المعنى.",
    },
    scientificStatusNote: {
      en: "Functions as the official terminology and conceptual vocabulary reference for the broader leadership framework.",
      ar: "يعمل كمرجع معجمي ومفاهيمي رسمي لضبط المصطلحات للأطر القيادية والفكرية للمركز.",
    },
    roleInSystem: {
      en: "Establishes unified, academically rigorous definitions across all Center publications, educational programs, and research domains.",
      ar: "يؤسس لتعريفات أكاديمية موحدة عبر جميع منشورات المركز، وبرامجه التعليمية، ومجالاته البحثية.",
    },
    supportedAreas: [
      { en: "Terminology Standardization", ar: "توحيد المصطلحات الأكاديمية" },
      { en: "Curriculum Integration", ar: "تضمين المناهج التعليمية" },
      { en: "Interdisciplinary Research Translation", ar: "ترجمة المفاهيم البينية" },
      { en: "Executive Training Lexicons", ar: "معاجم التدريب التنفيذي" },
    ],
    keyHighlights: [
      { en: "Standardized Definitions: Comprehensive taxonomy of 100+ concepts spanning latency, sovereignty, and transformation.", ar: "تعريفات معيارية: تصنيف شامل لأكثر من ١٠٠ مفهوم يغطي الكمون والسيادة والتحول." },
      { en: "Bilingual Epistemic Precision: Exact conceptual parity between Arabic and English terms.", ar: "دقة معرفية ثنائية اللغة: تماثل مفاهيمي دقيق بين المصطلحات العربية والإنجليزية." },
      { en: "Living Intellectual Asset: Continually curated with peer research inputs.", ar: "أصل معرفي حي: يُحدث دورياً بمساهمات ومراجعات النظراء." },
    ],
  },
];

export const intellectualSystemHierarchy = [
  {
    level: "01",
    tag: "THEORY",
    arabicTag: "النظرية",
    title: "Alrohaimi Theory",
    arabicTitle: "نظرية الرحيمي: من الكمون إلى الأثر",
    description: "The foundational intellectual system exploring the movement from latency to cognition, meaning, decision, transformation, and impact.",
    arabicDescription: "المنظومة الفكرية التأسيسية التي تستكشف حركة الإمكان من الكمون إلى الإدراك والمعنى والقرار والتحول والأثر.",
    status: "Theoretical Construct",
    arabicStatus: "بناء نظري",
    link: "/theory",
  },
  {
    level: "02",
    tag: "CONCEPTS",
    arabicTag: "المفاهيم",
    title: "Core Systemic Concepts",
    arabicTitle: "المفاهيم التأسيسية للمنظومة",
    items: [
      { name: "Cognitive Sovereignty", arName: "السيادة الإدراكية", desc: "The capacity to understand, interpret, and assume responsibility for decisions in the age of algorithmic and AI-enabled systems." },
      { name: "Gene Latency", arName: "الكمون الجيني", desc: "Biological and systems-level roots of unexpressed capabilities activated under stress." },
      { name: "Existential Resilience", arName: "المرونة الوجودية", desc: "Human meaning, dignity, and preservation of agency under systemic pressure." },
      { name: "Civilizational Transformation", arName: "التحول الحضاري", desc: "Latent capability mobilized toward systemic, ethical, and historical impact." },
    ],
    link: "/intellectual-system",
  },
  {
    level: "03",
    tag: "MODELS & FRAMEWORKS",
    arabicTag: "النماذج والأطر",
    title: "Operational Models & Frameworks",
    arabicTitle: "النماذج التشغيلية والأطر المنهجية",
    items: [
      { name: "The Alrohaimi Index", arName: "مؤشر الرحيمي", desc: "Composite diagnostic framework across four core dimensions." },
      { name: "Leadership Bridging Model", arName: "نموذج التجسير القيادي", desc: "Connecting higher-order theoretical insights with frontline executive decision-making." },
      { name: "Cognitive Sovereignty Framework", arName: "إطار السيادة الإدراكية", desc: "Methodological framework safeguarding human autonomy against algorithmic bias." },
      { name: "Institutional Transformational Readiness Model", arName: "نموذج الجاهزية المؤسسية للتحول", desc: "Exploring institutional sovereignty and civilizational momentum through scenario simulation." },
    ],
    link: "/intellectual-system",
  },
  {
    level: "04",
    tag: "RESEARCH",
    arabicTag: "الأبحاث والدراسات",
    title: "Alrohaimi Research Series (ARS)",
    arabicTitle: "سلسلة أبحاث الرحيمي (ARS-001 → ARS-005)",
    description: "Developing theoretical frameworks, conceptual models, applied research programs, and research instruments open to peer engagement and validation.",
    arabicDescription: "أطر نظرية ونماذج مفاهيمية وأدوات بحثية قيد التطوير ومفتوحة للمشاركة العلمية والتحقق الأكاديمي الدولي.",
    link: "/research-series",
  },
  {
    level: "05",
    tag: "FOUNDATIONAL WORKS",
    arabicTag: "الأعمال الفكرية التأسيسية",
    title: "Foundational Intellectual Works (FIW)",
    arabicTitle: "الأعمال الفكرية والمراجع التأسيسية (FIW-001 → FIW-003)",
    description: "Foundational works shaping the intellectual and conceptual foundations of the Alrohaimi system.",
    arabicDescription: "الأعمال المرجعية والتأسيسية التي تشكل المنطلقات الفكرية والمفاهيمية لمنظومة الرحيمي.",
    link: "/foundational-works",
  },
  {
    level: "06",
    tag: "TOOLS & SIMULATIONS",
    arabicTag: "الأدوات والمحاكاة",
    title: "Diagnostic Tools & Simulations",
    arabicTitle: "الأدوات التشخيصية ونماذج المحاكاة",
    items: [
      { name: "Alrohaimi Index Simulator", arName: "محاكي مؤشر الرحيمي", desc: "Interactive scenario-based simulation exploring four core dimensions." },
      { name: "Diagnostic Scenarios", arName: "السيناريوهات التشخيصية", desc: "Illustrative model demonstrations for vision alignment and crisis resilience." },
      { name: "Measurement Instruments", arName: "أدوات القياس والمؤشرات", desc: "Prototype scorecards and evaluation frameworks." },
    ],
    link: "/theory",
  },
  {
    level: "07",
    tag: "VALIDATION",
    arabicTag: "التحقق والتحكيم",
    title: "Scientific Validation Pathway",
    arabicTitle: "مسار التحقق العلمي والتحكيم الأكاديمي",
    description: "Active academic dialogue, peer review, empirical validation studies, and international university research collaboration.",
    arabicDescription: "الحوار الأكاديمي النشط، وتحكيم النظراء، ودراسات التحقق التجريبي، والشراكات البحثية الجامعية الدولية.",
    link: "/partnerships",
  },
  {
    level: "08",
    tag: "APPLICATION",
    arabicTag: "التطبيق والأثر",
    title: "Applied Programs & Societal Impact",
    arabicTitle: "البرامج التطبيقية والأثر المجتمعي",
    description: "Executive education via the Saudi School of Conscious Leadership, institutional advisory, foresight governance, and sustainable impact.",
    arabicDescription: "التعليم التنفيذي عبر المدرسة السعودية للقيادة الواعية، والاستشارات المؤسسية، وحوكمة الاستشراف، والأثر المستدام.",
    link: "/programs",
  },
];

