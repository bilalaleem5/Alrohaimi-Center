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
    title: {
      en: "Founder & Lead Theorist",
      ar: "المؤسس والمنظر الرئيسي",
    },
    bio: {
      en: "Founder of the Center and the intellectual project associated with Alrohaimi Theory, Cognitive Sovereignty, the Saudi School of Conscious Leadership, and a range of pioneering research models addressing leadership, cognition, complex systems, and civilizational transformation.",
      ar: "مؤسس المركز والمشروع الفكري المرتبط بنظرية الرحيمي، والسيادة الإدراكية، والمدرسة السعودية للقيادة الواعية، ومجموعة من النماذج والمشروعات البحثية الرائدة المعنية بالقيادة والإدراك والأنظمة المعقدة والتحول الحضاري.",
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
  website: "alrohaimitheory.org",
  location: {
    en: "Riyadh, Kingdom of Saudi Arabia",
    ar: "الرياض، المملكة العربية السعودية",
  },
};

export const nav = {
  en: [
    ["/", "Home"],
    ["/about", "About the Center"],
    ["/theory", "Alrohaimi Theory"],
    ["/programs", "Programs"],
    ["/units", "Units"],
    ["/knowledge", "Knowledge"],
    ["/partnerships", "Partnerships"],
    ["/contact", "Contact"],
  ],
  ar: [
    ["/", "الرئيسية"],
    ["/about", "عن المركز"],
    ["/theory", "نظرية الرحيمي"],
    ["/programs", "البرامج"],
    ["/units", "الوحدات"],
    ["/knowledge", "المعرفة"],
    ["/partnerships", "الشراكات"],
    ["/contact", "تواصل معنا"],
  ],
} as const;

export const pillars = {
  en: [
    [
      "Humanity",
      "Understanding humanity, meaning, and latent capability as the core driver of conscious civilization.",
    ],
    [
      "Cognition",
      "Understanding how awareness, perception, and sound decision-making are shaped in human and institutional minds.",
    ],
    [
      "Systems",
      "Reading complex systems, their interdependencies, and dynamics across socio-technical environments.",
    ],
    [
      "Transformation",
      "Turning theoretical knowledge and latent capacity into measurable, sustainable, and global impact.",
    ],
  ],
  ar: [
    [
      "الإنسان",
      "فهم الإنسان والمعنى والقدرة الكامنة بوصفها المحرك الجوهري للحضارة الواعية.",
    ],
    [
      "الإدراك",
      "فهم كيفية تشكّل الوعي والإدراك وصناعة القرار الرشيد لدى الأفراد والمؤسسات.",
    ],
    [
      "الأنظمة",
      "قراءة الأنظمة المعقدة وتفاعلاتها وشبكات الترابط عبر البيئات الاجتماعية والتقنية.",
    ],
    [
      "التحول",
      "تحويل المعرفة النظرية والقدرة الكامنة إلى أثر حضاري ملموس ومستدام وعالمي.",
    ],
  ],
};

export const research = {
  en: [
    [
      "Alrohaimi Theory",
      "A foundational intellectual system exploring the movement from latency to cognition, meaning, decision, transformation, and impact.",
    ],
    [
      "Cognitive Sovereignty",
      "The capacity of individuals and institutions to understand, interpret, and assume responsibility for decisions in the age of algorithmic and AI systems.",
    ],
    [
      "Conscious Leadership",
      "Leadership understood as an integrated process anchored in deep cognition, meaning, sound decision-making, and purposeful transformation.",
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
      "Investigating how societies and institutions move from latent knowledge and capability toward systemic, ethical, and historic impact.",
    ],
  ],
  ar: [
    [
      "نظرية الرحيمي",
      "منظومة فكرية تأسيسية تستكشف الانتقال من الكمون إلى الإدراك والمعنى والقرار والتحول والأثر.",
    ],
    [
      "السيادة الإدراكية",
      "قدرة الأفراد والمؤسسات على الفهم والتفسير والمسؤولية عن القرارات في عصر الأنظمة الخوارزمية والذكاء الاصطناعي.",
    ],
    [
      "القيادة الواعية",
      "فهم القيادة بوصفها عملية متكاملة ترتكز إلى عمق الإدراك، والمعنى، وصناعة القرار الرشيد، والتحول الهادف.",
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
      "دراسة انتقال المجتمعات والمؤسسات من المعرفة والقدرة الكامنة نحو التحول المنهجي والأثر التاريخي المستدام.",
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
      metric: "Potential Mobilization Index: 94%",
    },
    {
      id: "cognition",
      num: "02",
      title: "Cognition",
      subtitle: "The perceptual lens through which reality, systems, and constraints are comprehended.",
      detail: "Moving beyond passive data intake. Cognition forms the foundational awareness required to interpret algorithmic realities and environmental signals.",
      metric: "Cognitive Sovereignty: High",
    },
    {
      id: "meaning",
      num: "03",
      title: "Meaning",
      subtitle: "The integration of purpose, human values, and existential resonance into awareness.",
      detail: "Raw information without meaning breeds confusion. Meaning aligns perception with ethical purpose, enabling human-centered clarity.",
      metric: "Value Alignment: Optimal",
    },
    {
      id: "decision",
      num: "04",
      title: "Decision",
      subtitle: "The decisive turning point where awareness crystallizes into purposeful intent and strategy.",
      detail: "Decisions made with cognitive sovereignty transcend algorithmic compulsion, taking full institutional responsibility.",
      metric: "Strategic Soundness: Verified",
    },
    {
      id: "transformation",
      num: "05",
      title: "Transformation",
      subtitle: "The structural, behavioral, and systemic shift implemented across domains.",
      detail: "Transformation reshapes institutional architectures, deploying human and technological systems in synchronized harmony.",
      metric: "Systemic Adaptability: Active",
    },
    {
      id: "impact",
      num: "06",
      title: "Impact",
      subtitle: "The enduring, measurable civilizational value created beyond space and time.",
      detail: "Impact validates theory. It creates generational value, elevating societies and establishing human-centered civilizational milestones.",
      metric: "Civilizational Footprint: Global",
    },
  ],
  ar: [
    {
      id: "latency",
      num: "01",
      title: "الإمكان الكامن",
      subtitle: "القدرة غير المفعلة المستقرة في عمق الإنسان والمؤسسات والمجتمعات.",
      detail: "في بيئات الوفرة أو الشح، تبدأ القدرة في طور الكمون. ويتطلب كشف هذا الكمون وعياً إدراكياً عميقاً يسبق أي تعبئة للموارد.",
      metric: "مؤشر تعبئة الممكن: 94%",
    },
    {
      id: "cognition",
      num: "02",
      title: "الإدراك",
      subtitle: "العدسة المعرفية التي من خلالها يُقرأ الواقع وتُفهم الأنظمة المعقدة.",
      detail: "الانتقال من مجرد استقبال البيانات إلى تشكيل الوعي المنهجي القادر على تفسير الواقع في عصر الخوارزميات.",
      metric: "السيادة الإدراكية: مرتفعة",
    },
    {
      id: "meaning",
      num: "03",
      title: "المعنى",
      subtitle: "دمج الغاية والقيم الإنسانية والأصالة الحضارية في بنية الوعي.",
      detail: "المعلومة المجردة بلا معنى تقود للتشتت. المعنى يمنح الوعي بوصلته الأخلاقية، مما يوفر وضوحاً مرتكزاً إلى الإنسان.",
      metric: "التوافق القيمي: مثالي",
    },
    {
      id: "decision",
      num: "04",
      title: "القرار",
      subtitle: "نقطة التحول الحاسمة التي يتبلور فيها الوعي والمعنى إلى إرادة واستراتيجية.",
      detail: "القرارات الناتجة عن السيادة الإدراكية تتحرر من التبعية الخوارزمية وتتحمل كامل المسؤولية الأخلاقية والمؤسسية.",
      metric: "الرشاد الاستراتيجي: معتمد",
    },
    {
      id: "transformation",
      num: "05",
      title: "التحول",
      subtitle: "الانتقال البنيوي والسلوكي والمؤسسي عبر كافة مستويات المنظومة.",
      detail: "يعيد التحول تشكيل البنى المؤسسية وينسق بين الطاقات البشرية والحلول التقنية في تناغم مدروس.",
      metric: "التكيف المنظومي: نشط",
    },
    {
      id: "impact",
      num: "06",
      title: "الأثر",
      subtitle: "القيمة الحضارية المستدامة والقابلة للقياس التي تتجاوز حدود المكان والزمان.",
      detail: "الأثر هو برهان النظرية. يصنع قيمة عابرة للأجيال ترتقي بالمجتمعات وتثبت ركائز النهضة الإنسانية.",
      metric: "البصمة الحضارية: عالمية",
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
      arabicTitle: "وحدة المعرفة والنظريات والبحوث",
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
      title: "وحدة المعرفة والنظريات والبحوث",
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
  en: "The idea began in an environment of scarce resources, where capability was not found in abundance, but in the ability to read reality, manage what is possible, adapt, innovate, and create value from the limited. From this experience emerged a broader question about humanity, cognition, and transformation: How can latent potential be transformed into real capability, and then into impact that transcends place? This perspective represents one of the Center's intellectual starting points — moving from experience to knowledge, from knowledge to theorizing, and from theorizing to research, application, and impact.",
  ar: "بدأت الفكرة في بيئة شحيحة الموارد، حيث لم تكن القدرة كامنة في الوفرة، بل في قراءة الواقع، وإدارة الممكن، والتكيف والابتكار وصناعة القيمة من المحدود. ومن هذه التجربة نشأ سؤال أوسع حول الإنسان والإدراك والتحول: كيف يمكن تحويل الإمكان الكامن إلى قدرة حقيقية، ثم إلى أثر يتجاوز المكان؟ يمثل هذا المنظور إحدى نقاط الانطلاق الفكرية للمركز — من التجربة إلى المعرفة، ومن المعرفة إلى التنظير، ومن التنظير إلى البحث والتطبيق والأثر.",
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
      en: "The Alrohaimi Index for Civilizational Transformation (AICT)",
      ar: "مؤشر الرحيمي للتحول الحضاري: دليل المقاييس والتقييم المؤسسي",
    },
    category: "Tools & Indicators",
    arabicCategory: "الأدوات والمؤشرات",
    year: "2026",
    author: "Applied Transformation & Metrics Unit",
    pages: "Methodological Guidebook & Scoring Rubric",
    description: {
      en: "Standardized diagnostic indicator measuring an organization's capacity to convert latent resources into systemic, measurable transformation.",
      ar: "مؤشر تشخيصي معياري يقيس قدرة المنظمات والمجتمعات على تحويل الموارد الكامنة إلى تحول منظومي قابل للقياس.",
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
      en: "Exploring the biological and psychological parallels of latent capability activation during institutional crisis and civilizational shifts.",
      ar: "استكشاف التناغم الحيوي والنفسي لتفعيل القدرات الكامنة أثناء الأزمات المؤسسية والتحولات الحضارية.",
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
      en: "The pedagogical blueprint detailing competency rubrics, experiential modules, and leadership immersion criteria.",
      ar: "الوثيقة البيداغوجية التي تفصل معايير الجدارات القيادية ومسارات المعايشة والتقييم التنفيذي.",
    },
  },
];
