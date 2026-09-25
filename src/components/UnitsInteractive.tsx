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
      icon: ShieldAlert,
      title: {
        en: "Cognitive Sovereignty Unit",
        ar: "وحدة السيادة الإدراكية",
      },
      tag: { en: "Epistemic Independence & AI", ar: "السيادة الإدراكية والذكاء الاصطناعي" },
      description: {
        en: "Developing knowledge, methodologies, and frameworks related to human cognition, critical discernment, decision-making, and ethical governance in the age of algorithmic and AI systems.",
        ar: "تطوير المعرفة والأطر المنهجية المتعلقة بالإدراك وصناعة القرار والإنسان في عصر الأنظمة الخوارزمية والذكاء الاصطناعي.",
      },
      vectors: {
        en: ["Algorithmic Agency Defense", "Decision Integrity Audits", "Epistemic Independence", "Human-AI Symbiosis"],
        ar: ["الفاعلية الخوارزمية", "تدقيق نزاهة القرارات", "الاستقلال المعرفي", "التناغم الإنساني التقني"],
      },
      type: "sovereignty",
    },
    {
      num: "02",
      icon: GraduationCap,
      title: {
        en: "Conscious Leadership & Civilizational Transformation Unit",
        ar: "وحدة القيادة الواعية والتحول الحضاري",
      },
      tag: { en: "Leadership & Civilizational Horizons", ar: "القيادة الواعية والتحول الحضاري" },
      description: {
        en: "Developing advanced leadership models, strategic foresight frameworks, transformation management paradigms, and sustainable civilizational impact programs for public and private institutions.",
        ar: "تطوير مفاهيم القيادة المتقدمة، وصناعة الرؤية، وإدارة التحول، وتحقيق الأثر الحضاري المستدام للمؤسسات القيادية.",
      },
      vectors: {
        en: ["Executive Discernment", "Saudi School of Conscious Leadership", "Civilizational Strategy", "Institutional Regeneration"],
        ar: ["الرشاد القيادي", "المدرسة السعودية للقيادة الواعية", "الاستراتيجية الحضارية", "التجديد المؤسسي"],
      },
      type: "leadership",
    },
    {
      num: "03",
      icon: BookMarked,
      title: {
        en: "Knowledge, Theories & Research Unit",
        ar: "وحدة المعرفة والنظريات والأبحاث",
      },
      tag: { en: "Theoretical Architecture & Complexity", ar: "المعرفة والنظريات والأبحاث" },
      description: {
        en: "Constructing foundational theories, scientific concepts, analytical models, and research publications anchoring Alrohaimi Theory, living systems, and complex systems scholarship.",
        ar: "بناء النظريات التأسيسية، والمفاهيم، والنماذج، والمؤشرات، وإجراء البحوث النظرية والتطبيقية التي ترتكز عليها نظرية الرحيمي والأنظمة المعقدة.",
      },
      vectors: {
        en: ["Theoretical Architecture", "Alrohaimi Theory Development", "Complexity Modeling", "Research Studies & Strategic Whitepapers"],
        ar: ["البناء النظري", "تطوير نظرية الرحيمي", "نمذجة التعقيد", "الدراسات البحثية والأوراق الاستراتيجية"],
      },
      type: "theories",
    },
    {
      num: "04",
      icon: Compass,
      title: {
        en: "Thought, Future & Impact Unit",
        ar: "وحدة الفكر والمستقبل والأثر",
      },
      tag: { en: "Futures & Impact Assessment", ar: "الفكر والمستقبل والأثر" },
      description: {
        en: "Develops prototype diagnostic tools, developing indicators, and applied frameworks for exploring transformation assessment across institutional contexts.",
        ar: "تطور أدوات تشخيصية أولية ومؤشرات قيد التطوير وأطراً تطبيقية لاستكشاف تقييم التحول وربط الفكر الاستشرافي بالأثر المؤسسي والمجتمعي.",
      },
      vectors: {
        en: ["Civilizational Foresight", "Prototype Diagnostic Scorecards", "Developing Transformation Indicators", "Global Academic Dialogue"],
        ar: ["استشراف المستقبل الحضاري", "لوحات القياس التشخيصية الأولية", "مؤشرات التحول قيد التطوير", "الحوار العلمي الدولي"],
      },
      type: "impact",
    },
  ];

  // Auto-cycle through the 4 institutional units smoothly
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
                {ar ? "البنية المؤسسية المعتمدة" : "THE INSTITUTIONAL ARCHITECTURE"}
              </span>
            </div>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#0c1836] tracking-tight">
              {ar ? (
                <>
                  الوحدات المؤسسية{" "}
                  <span className="gold-text-light italic font-serif font-normal">الأربع الكبرى</span>
                </>
              ) : (
                <>
                  Four Foundational{" "}
                  <span className="gold-text-light italic font-serif font-normal">Institutional Units</span>
                </>
              )}
            </h2>

            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#4e5e7b]">
              {ar
                ? "أربع وحدات مؤسسية تقود السيادة الإدراكية، والقيادة الواعية، وبناء النظريات، والدراسات المستقبلية عبر ستة مجالات بحثية متكاملة."
                : "An integrated intellectual architecture of four institutional units driving cognitive sovereignty, conscious leadership, theoretical scholarship, and civilizational futures across six interdisciplinary research domains."}
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
                  ? "الوحدات المؤسسية الأربع (04 وحدات)"
                  : "Four Institutional Units (04 Units)"}
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
                  {ar ? "وحدة مؤسسية كبرى" : "Core Institutional Unit"}
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
                {ar ? "استعراض الوحدات المؤسسية الأربع ←" : "Explore Four Institutional Units →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
