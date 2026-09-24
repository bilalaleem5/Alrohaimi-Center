import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage, Arrow } from "./site";
import {
  Brain,
  BarChart3,
  BookMarked,
  HeartHandshake,
  Compass,
  GraduationCap,
  ShieldAlert,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ChevronRight,
  Layers,
} from "lucide-react";

export function UnitsInteractive() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const [activeUnit, setActiveUnit] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const unitsData = [
    {
      num: "01",
      icon: Brain,
      title: {
        en: "Living Systems & Biological Cognition Lab",
        ar: "مختبر الأنظمة الحية والإدراك البيولوجي",
      },
      tag: { en: "Bio-Cognition", ar: "الإدراك الحيوي" },
      description: {
        en: "Explores the biological, ecological, and living system foundations of cognition, awareness, adaptation, and sound decision-making across complex environments.",
        ar: "يستكشف الأسس البيولوجية والحيوية للإدراك والوعي والتكيف وصناعة القرار في الأنظمة الحية والبيئات المتغيرة.",
      },
      vectors: {
        en: ["Biological Neural Networks", "Adaptive Decision Ecology", "Living Homeostasis"],
        ar: ["الشبكات العصبية الحيوية", "بيئة اتخاذ القرار التكيفية", "الاتزان الحيوي للأنظمة"],
      },
      type: "bio",
    },
    {
      num: "02",
      icon: BarChart3,
      title: {
        en: "Applied Transformation & Metrics Unit",
        ar: "وحدة التحول التطبيقي والمقاييس",
      },
      tag: { en: "Metrics & Indicators", ar: "المقاييس والمؤشرات" },
      description: {
        en: "Develops empirical diagnostic instruments, proprietary indicators, and applied frameworks for transformation assessment across sovereign institutions.",
        ar: "تطور أدوات القياس التطبيقية والمؤشرات المعيارية والأطر العملية لتقييم التحول المؤسسي وقياس الأثر الحضاري.",
      },
      vectors: {
        en: ["AICT Readiness Index", "Empirical Transformation Audit", "Impact Scorecards"],
        ar: ["مؤشر الجاهزية AICT", "تدقيق التحول التطبيقي", "لوحات قياس الأثر"],
      },
      type: "metrics",
    },
    {
      num: "03",
      icon: BookMarked,
      title: {
        en: "Cognitive & Conceptual Lexicon Unit",
        ar: "وحدة المعجم الإدراكي والمفاهيمي",
      },
      tag: { en: "Conceptual Architecture", ar: "البناء المفاهيمي" },
      description: {
        en: "Constructs the specialized vocabulary, philosophical taxonomies, and conceptual definitions that anchor the Center's intellectual publications.",
        ar: "تبني المفردات المفاهيمية والأطر التعريفية المنهجية والمعاجم التي ترتكز عليها منظومة المركز الفكرية والعلمية.",
      },
      vectors: {
        en: ["Epistemic Taxonomy", "Conceptual Linguistics", "Civilizational Ontology"],
        ar: ["التصنيف الإبستيمولوجي", "لسانيات الوعي والمعنى", "الأنطولوجيا الحضارية"],
      },
      type: "lexicon",
    },
    {
      num: "04",
      icon: HeartHandshake,
      title: {
        en: "Existential Resilience Literature Lab",
        ar: "مختبر أدبيات المرونة الوجودية",
      },
      tag: { en: "Resilience & Meaning", ar: "المرونة والمعنى" },
      description: {
        en: "Studies philosophical meaning, cultural heritage, and human endurance when confronting systemic disruption, scarcity, and rapid historical transformation.",
        ar: "يستكشف الأدب والمعنى الفلسفي والأصالة وقدرة الإنسان على مواجهة التحولات الجذرية والأزمات في بيئات عدم اليقين.",
      },
      vectors: {
        en: ["Existential Integrity", "Scarcity Resilience", "Human Dignity Preservation"],
        ar: ["التماسك الوجودي", "مرونة بيئات الشح", "صون الكرامة الإنسانية"],
      },
      type: "resilience",
    },
    {
      num: "05",
      icon: Compass,
      title: {
        en: "Civilizational Futures Platform",
        ar: "منصة المستقبل والتحول الحضاري",
      },
      tag: { en: "Futures & Foresight", ar: "استشراف المستقبل" },
      description: {
        en: "Explores macro-historical trajectories, long-range civilizational foresight, and knowledge-driven pathways for sustainable global flourishing.",
        ar: "تستشرف مسارات التحول الحضاري، والدراسات المستقبلية الكبرى، وصناعة الأثر العالمي المرتكز إلى المعرفة الرصينة.",
      },
      vectors: {
        en: ["Strategic Foresight 2030+", "Macro-Civilizational Trajectories", "Global Impact Models"],
        ar: ["الاستشراف الاستراتيجي 2030+", "المسارات الحضارية الكبرى", "نماذج الأثر الدولي"],
      },
      type: "futures",
    },
    {
      num: "06",
      icon: GraduationCap,
      title: {
        en: "Saudi School of Conscious Leadership",
        ar: "المدرسة السعودية للقيادة الواعية",
      },
      tag: { en: "Executive Academy", ar: "التمكين القيادي" },
      description: {
        en: "The executive education arm translating foundational discovery into leadership excellence, strategic foresight, and sustainable institutional transformation.",
        ar: "الذراع التنفيذي للتدريب القيادي وتمكين صناع القرار، ينقل المعرفة النظرية إلى ممارسة قيادية حية تغير الواقع.",
      },
      vectors: {
        en: ["Sovereign Decision Immersion", "Executive Foresight Clinics", "Algorithmic Autonomy Training"],
        ar: ["معايشة القرار السيادي", "عيادات الاستشراف القيادي", "التدريب على الاستقلال الإدراكي"],
      },
      type: "leadership",
    },
    {
      num: "07",
      icon: ShieldAlert,
      title: {
        en: "Cognitive Sovereignty & AI Lab",
        ar: "مختبر السيادة الإدراكية والذكاء الاصطناعي",
      },
      tag: { en: "AI & Sovereignty", ar: "السيادة والذكاء الاصطناعي" },
      description: {
        en: "Develops protocols, audit frameworks, and applied safeguards protecting institutional judgment and human agency in the age of algorithmic hegemony.",
        ar: "يطور أطر العمل الرائدة وأدوات التدقيق المعرفي لتعزيز السيادة الإدراكية وحماية القرار الوطني في عصر الهيمنة الخوارزمية.",
      },
      vectors: {
        en: ["Algorithmic Agency Defense", "Decision Integrity Audits", "Human-AI Symbiosis Governance"],
        ar: ["حماية الاستقلال الخوارزمي", "تدقيق نزاهة القرارات", "حوكمة التناغم البشري التقني"],
      },
      type: "sovereignty",
    },
  ];

  // Auto-cycle through the 7 units smoothly
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveUnit((prev) => (prev + 1) % unitsData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, unitsData.length]);

  const current = unitsData[activeUnit];

  return (
    <section className="relative overflow-hidden border-b border-amber-900/10 bg-[#fbf9f5] py-20 lg:py-28">
      {/* Daylight Atmospheric Ambient Lights - Zero Cards */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full bg-amber-200/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 h-[600px] w-[600px] rounded-full bg-sky-200/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* =====================================================================
            1. SECTION HEADER (Monumental Editorial Typography)
            ===================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-amber-900/15 pb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-amber-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-900">
                {ar ? "البنية المؤسسية التخصصية" : "THE INSTITUTIONAL APPARATUS"}
              </span>
            </div>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#0c1836] tracking-tight">
              {ar ? (
                <>
                  وحدات المركز{" "}
                  <span className="gold-text-light italic font-serif font-normal">ومختبراته التخصصية</span>
                </>
              ) : (
                <>
                  Specialized Laboratories{" "}
                  <span className="gold-text-light italic font-serif font-normal">& Institutional Units</span>
                </>
              )}
            </h2>

            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#4e5e7b]">
              {ar
                ? "منظومة بحثية متكاملة تضم سبعة مختبرات تخصصية تبني المعرفة وتطور أدوات التحول الحضاري."
                : "An integrated intellectual architecture of seven specialized laboratories developing rigorous theoretical discoveries and applied transformative tools."}
            </p>
          </div>

          {/* Real-Time Scan Status Pill */}
          <div className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-amber-600" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
              {isPaused
                ? ar
                  ? "فحص تفاعلي موجه"
                  : "Interactive Inspection"
                : ar
                  ? "تدفق استكشافي مستمر (07 مختبرات)"
                  : "Continuous Roster Cycle (07 Labs)"}
            </span>
          </div>
        </div>

        {/* =====================================================================
            2. INTERACTIVE MASTER ROSTER & KINETIC LAB OBSERVATORY (ZERO CARDS!)
            ===================================================================== */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Column (5 Cols): The Master Roster (Open Editorial List // Zero Boxes) */}
          <div className="lg:col-span-5 divide-y divide-amber-900/15">
            {unitsData.map((unit, idx) => {
              const isSelected = activeUnit === idx;
              const IconComp = unit.icon;

              return (
                <button
                  key={unit.num}
                  type="button"
                  onClick={() => {
                    setActiveUnit(idx);
                    setIsPaused(true);
                  }}
                  className={`w-full group py-4 text-start transition-all duration-300 flex items-center justify-between focus:outline-none ${
                    isSelected ? "opacity-100" : "opacity-45 hover:opacity-85"
                  }`}
                >
                  <div className="flex items-baseline gap-3.5">
                    {/* Laser Coordinate Indicator */}
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isSelected ? "text-amber-800 font-black" : "text-slate-400 group-hover:text-amber-800"
                      }`}
                    >
                      {unit.num}
                    </span>

                    <div>
                      <h3
                        className={`font-display text-base font-bold transition-colors ${
                          isSelected
                            ? "text-[#0c1836] underline underline-offset-4 decoration-amber-600"
                            : "text-[#334155] group-hover:text-[#0c1836]"
                        }`}
                      >
                        {unit.title[lang]}
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-amber-900/80 mt-0.5 font-semibold">
                        {unit.tag[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`grid size-7 place-items-center rounded-full border transition-all ${
                        isSelected
                          ? "border-amber-600 bg-[#0c1836] text-amber-300 shadow-xs"
                          : "border-amber-900/15 text-slate-400 group-hover:border-amber-600 group-hover:text-amber-800"
                      }`}
                    >
                      <IconComp size={13} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (7 Cols): The Living Laboratory Showcase (Zero Cards, Pure Editorial Space) */}
          <div className="lg:col-span-7 relative flex flex-col justify-between min-h-[460px] border-t lg:border-t-0 lg:border-l border-amber-900/15 pt-8 lg:pt-0 lg:pl-12 rtl:lg:border-l-0 rtl:lg:border-r rtl:lg:pl-0 rtl:lg:pr-12">
            {/* Watermark Giant Ghost Numeral */}
            <div className="pointer-events-none absolute right-4 top-0 font-serif text-[180px] font-black text-amber-900/[0.04] leading-none select-none">
              {current.num}
            </div>

            <div>
              {/* Unit Meta Tag */}
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                  {current.tag[lang]}
                </span>
                <span className="text-slate-300">|</span>
                <span className="font-mono text-xs text-slate-500 uppercase">
                  {ar ? "مختبر تخصصي متقدم" : "Specialized Research Lab"}
                </span>
              </div>

              {/* Unit Title */}
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-[#0c1836] leading-tight">
                {current.title[lang]}
              </h3>

              {/* Research Mandate */}
              <p className="mt-4 font-serif text-lg italic leading-relaxed text-[#334155] max-w-xl">
                “{current.description[lang]}”
              </p>

              {/* Investigation Vectors (Open Architectural Tags) */}
              <div className="mt-8">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {ar ? "محاور البحث والاستكشاف الرئيسية:" : "Core Research & Inquiry Vectors:"}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {current.vectors[lang].map((vec, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs font-semibold text-[#0c1836] bg-amber-900/5 border border-amber-900/15 px-3 py-1.5 rounded-full hover:border-amber-600/50 hover:bg-amber-900/10 transition-colors"
                    >
                      {vec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Kinetic Lab Topology SVG (Motion Engine!) */}
              <div className="mt-8 pt-6 border-t border-amber-900/15">
                <div className="h-28 w-full relative flex items-center justify-center overflow-hidden">
                  {/* Subtle Grid Canvas */}
                  <svg className="w-full h-full" viewBox="0 0 500 100" fill="none">
                    <defs>
                      <linearGradient id="waveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#b88a3b" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#b88a3b" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>

                    {/* Reference Matrix Hairlines */}
                    <line x1="0" y1="50" x2="500" y2="50" stroke="#b88a3b" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.3" />
                    <line x1="125" y1="0" x2="125" y2="100" stroke="#b88a3b" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.2" />
                    <line x1="250" y1="0" x2="250" y2="100" stroke="#b88a3b" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.2" />
                    <line x1="375" y1="0" x2="375" y2="100" stroke="#b88a3b" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.2" />

                    {/* Dynamic Oscillating Sine Wave corresponding to the unit */}
                    <path
                      d={
                        activeUnit % 2 === 0
                          ? "M0,50 Q125,10 250,50 T500,50"
                          : "M0,50 Q125,90 250,50 T500,50"
                      }
                      fill="none"
                      stroke="url(#waveGlow)"
                      strokeWidth="2"
                      className="transition-all duration-700 ease-in-out"
                    />

                    {/* Secondary Echo Wave */}
                    <path
                      d={
                        activeUnit % 2 === 0
                          ? "M0,50 Q125,80 250,50 T500,50"
                          : "M0,50 Q125,20 250,50 T500,50"
                      }
                      fill="none"
                      stroke="#0c1836"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.2"
                      className="transition-all duration-700 ease-in-out"
                    />

                    {/* Active Traveling Pulse Node */}
                    <circle
                      cx={100 + (activeUnit * 50)}
                      cy="50"
                      r="4"
                      fill="#b88a3b"
                      className="transition-all duration-500"
                    />
                    <circle
                      cx={100 + (activeUnit * 50)}
                      cy="50"
                      r="12"
                      stroke="#b88a3b"
                      strokeWidth="1"
                      className="animate-ping"
                      style={{ animationDuration: "2s" }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Editorial Action Link (ZERO CARDS, Pure Underline Link) */}
            <div className="mt-8 pt-6 border-t border-amber-900/15 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/units"
                className="group inline-flex items-center gap-3 font-display text-sm sm:text-base font-bold text-amber-900 hover:text-amber-950 transition-colors"
              >
                <span className="underline underline-offset-8 decoration-amber-600/50 group-hover:decoration-amber-600">
                  {ar
                    ? `استكشف أبحاث ومنشورات ${current.title.ar}`
                    : `Explore Research & Publications from ${current.title.en}`}
                </span>
                <span className="grid size-8 place-items-center rounded-full border border-amber-900/20 bg-white text-[#0c1836] shadow-xs transition-all duration-300 group-hover:bg-[#0c1836] group-hover:text-white group-hover:translate-x-1">
                  {ar ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </span>
              </Link>

              <Link
                to="/units"
                className="font-mono text-xs font-semibold text-slate-500 hover:text-amber-900 transition-colors"
              >
                {ar ? "دليل كافة المختبرات والوحدات ←" : "Complete Units Directory →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
