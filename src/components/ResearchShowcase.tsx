import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "./site";

import theoryLightImg from "../assets/theory_light.jpg";
import heroLightImg from "../assets/hero_light.jpg";
import leadershipLightImg from "../assets/leadership_light.jpg";
import researchLightImg from "../assets/research_light.jpg";
import desertLightImg from "../assets/desert_light.jpg";
import founderLightImg from "../assets/founder_light.jpg";

import {
  Compass,
  Brain,
  Layers,
  Sparkles,
  TrendingUp,
  Globe2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface ResearchField {
  id: string;
  num: string;
  name: { en: string; ar: string };
  category: { en: string; ar: string };
  desc: { en: string; ar: string };
  inquiry: { en: string; ar: string };
  tags: { en: string[]; ar: string[] };
  image: string;
  accent: string;
}

const RESEARCH_FIELDS: ResearchField[] = [
  {
    id: "theory",
    num: "01",
    name: { en: "Alrohaimi Theory", ar: "نظرية الرحيمي" },
    category: { en: "Foundational Epistemic System", ar: "المنظومة الفكرية التأسيسية" },
    desc: {
      en: "A comprehensive intellectual architecture tracing human agency through six interconnected phases: from latent potential to enduring civilizational impact.",
      ar: "منظومة فكرية تأسيسية ورصينة تؤصل لمسار الفاعلية الإنسانية عبر ست مراحل متكاملة: من الكمون إلى صناعة الأثر الحضاري.",
    },
    inquiry: {
      en: "How does latent potential awaken and crystallize into enduring historic capability?",
      ar: "كيف يتحول الإمكان الإنساني الكامن إلى قدرة وفعل وأثر حضاري دائم؟",
    },
    tags: {
      en: ["Latency to Impact", "Epistemic Architecture", "Original Theorizing"],
      ar: ["من الكمون إلى الأثر", "البناء المعرفي الأصيل", "التنظير التأسيسي"],
    },
    image: theoryLightImg,
    accent: "#b88a3b",
  },
  {
    id: "sovereignty",
    num: "02",
    name: { en: "Cognitive Sovereignty", ar: "السيادة الإدراكية" },
    category: { en: "Decision Autonomy & AI Defense", ar: "استقلالية القرار والذكاء الاصطناعي" },
    desc: {
      en: "Empowering leaders and institutions to preserve sovereign critical judgment, interpret synthetic realities, and prevent algorithmic capture in the AI era.",
      ar: "تمكين القادة والمؤسسات من صيانة استقلالية القرار وحماية الإدراك والوعي النقدي في مواجهة الهيمنة الخوارزمية.",
    },
    inquiry: {
      en: "How do sovereign institutions retain authentic agency amidst algorithmic saturation?",
      ar: "كيف تصون المؤسسات سيادتها المعرفية واستقلالية قراراتها في عصر الذكاء الاصطناعي؟",
    },
    tags: {
      en: ["Algorithmic Agency", "Decision Auditing", "Epistemic Independence"],
      ar: ["الفاعلية الخوارزمية", "تدقيق القرارات", "الاستقلال المعرفي"],
    },
    image: heroLightImg,
    accent: "#0284c7",
  },
  {
    id: "leadership",
    num: "03",
    name: { en: "Conscious Leadership", ar: "القيادة الواعية" },
    category: { en: "Executive Wisdom & Ethics", ar: "الرشاد القيادي والأخلاقي" },
    desc: {
      en: "The executive arm translating theoretical models into practical leadership excellence, ethical vision creation, and complex institutional stewardship.",
      ar: "الذراع التنفيذي الذي يحول النماذج المعرفية إلى ممارسة قيادية رفيعة، ورشاد أخلاقي، وإدارة حكيمة للتحولات المؤسسية.",
    },
    inquiry: {
      en: "How is heightened perception transformed into sound stewardship under uncertainty?",
      ar: "كيف يتحول الوعي والإدراك العميق إلى رشاد قيادي في بيئات عدم اليقين؟",
    },
    tags: {
      en: ["Executive Academies", "Ethical Governance", "Strategic Foresight"],
      ar: ["الأكاديميات التنفيذية", "الحوكمة الأخلاقية", "الاستشراف الاستراتيجي"],
    },
    image: leadershipLightImg,
    accent: "#7c3aed",
  },
  {
    id: "systems",
    num: "04",
    name: { en: "Complex Systems", ar: "الأنظمة المعقدة" },
    category: { en: "Adaptive Institutional Dynamics", ar: "الشبكات التكيفية والديناميكيات المؤسسية" },
    desc: {
      en: "Rigorous scientific modeling of non-linear interdependencies, feedback mechanisms, and emergent structural phenomena across socio-technical systems.",
      ar: "دراسة ونمذجة علمية للشبكات التكيفية المعقدة وحلقات التغذية الراجعة غير الخطية والانبثاق المنظومي عبر المؤسسات.",
    },
    inquiry: {
      en: "How do complex institutional interdependencies configure adaptive resilience?",
      ar: "كيف تؤثر شبكات الاعتماد المتبادل وحلقات التغذية الراجعة في مرونة المنظومات الكبرى؟",
    },
    tags: {
      en: ["Non-Linear Dynamics", "Institutional Feedback", "Emergence"],
      ar: ["الديناميكيات غير الخطية", "التغذية الراجعة المؤسسية", "الانبثاق"],
    },
    image: researchLightImg,
    accent: "#059669",
  },
  {
    id: "resilience",
    num: "05",
    name: { en: "Existential Resilience", ar: "المرونة الوجودية" },
    category: { en: "Human Dignity & Meaning", ar: "المعنى الوجودي وثبات الكرامة" },
    desc: {
      en: "Examining the biological, psychological, and philosophical roots of resilience: how human dignity and purpose anchor fortitude during macro-shifts.",
      ar: "فحص الأسس الحيوية والنفسية والفلسفية للمرونة: كيف تثبت كرامة الإنسان وغايته قدرته على مواجهة الضغوط والتحولات الكبرى.",
    },
    inquiry: {
      en: "What anchors moral fortitude and human purpose when external structures fail?",
      ar: "ما الذي يثبت الكرامة والمعنى الإنساني حين تتداعى البنى المادية والمؤسسية؟",
    },
    tags: {
      en: ["Human Dignity", "Crisis Absorption", "Living Systems"],
      ar: ["الكرامة الإنسانية", "استيعاب الصدمات", "الأنظمة الحية"],
    },
    image: desertLightImg,
    accent: "#d97706",
  },
  {
    id: "transformation",
    num: "06",
    name: { en: "Civilizational Transformation", ar: "التحول الحضاري" },
    category: { en: "Macro Strategic Impact & 2030", ar: "التحول الشامل ورؤية 2030" },
    desc: {
      en: "Bridging theoretical knowledge into measurable societal outcomes, national indicators, and sovereign transformation aligned with Saudi Vision 2030.",
      ar: "تحويل الإنتاج النظري إلى ممارسات مجتمعية ومؤشرات قياس معيارية تصنع أثراً حضارياً ملموساً متوافقاً مع رؤية المملكة 2030.",
    },
    inquiry: {
      en: "How is theoretical knowledge engineered into enduring, multi-generational global impact?",
      ar: "كيف تُحوَّل المعرفة الأصيلة إلى أثر حضاري ملموس ومستدام يعبر الأجيال؟",
    },
    tags: {
      en: ["Sovereign Metrics", "Vision 2030 Aligned", "Historic Impact"],
      ar: ["المؤشرات السيادية", "مواءمة رؤية 2030", "الأثر التاريخي"],
    },
    image: founderLightImg,
    accent: "#b88a3b",
  },
];

export function ResearchShowcase() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const STEP_DURATION = 5000; // 5 seconds per slide
  const TICK_INTERVAL = 40;
  const startTimeRef = useRef<number>(Date.now());
  const activeIdxRef = useRef<number>(0);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  // Smooth Auto-Cycle Engine
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      if (elapsed >= STEP_DURATION) {
        startTimeRef.current = Date.now();
        const next = (activeIdxRef.current + 1) % RESEARCH_FIELDS.length;
        activeIdxRef.current = next;
        setActiveIdx(next);
        setProgress(0);
      } else {
        setProgress(Math.min(100, (elapsed / STEP_DURATION) * 100));
      }
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused]);

  const selectField = (idx: number) => {
    activeIdxRef.current = idx;
    setActiveIdx(idx);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const nextField = () => {
    selectField((activeIdx + 1) % RESEARCH_FIELDS.length);
  };

  const prevField = () => {
    selectField((activeIdx - 1 + RESEARCH_FIELDS.length) % RESEARCH_FIELDS.length);
  };

  const icons = [
    <Compass key="1" size={20} />,
    <Brain key="2" size={20} />,
    <Sparkles key="3" size={20} />,
    <Layers key="4" size={20} />,
    <Globe2 key="5" size={20} />,
    <TrendingUp key="6" size={20} />,
  ];

  return (
    <section className="relative overflow-hidden border-b border-amber-900/10 bg-[#fbf9f5] py-20 lg:py-28">
      {/* Daylight Ambient Glow */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-full bg-sky-400/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1536px] px-5 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-white/95 px-4 py-1.5 shadow-xs backdrop-blur-md">
            <span className="size-2 rounded-full bg-amber-600 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
              {ar ? "مجالات البحث الستة التأسيسية" : "Six Core Research Disciplines"}
            </span>
          </div>

          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c1836] leading-[1.12] tracking-tight">
            {ar ? (
              <>
                ما الذي ندرسه{" "}
                <span className="gold-text-light block sm:inline">ونبحث فيه؟</span>
              </>
            ) : (
              <>
                What Do We Study?{" "}
                <span className="gold-text-light block sm:inline">Our Research Pillars</span>
              </>
            )}
          </h2>

          <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-[#4e5e7b]">
            {ar
              ? "نستكشف أسئلة عصرنا التأسيسية لبناء منظومة معرفية أصيلة تصل الإنسان بالإدراك والأنظمة والتحول الحضاري."
              : "We explore the central questions of our era to build an integrated knowledge system connecting humanity, cognition, systems, and civilizational transformation."}
          </p>
        </div>

        {/* =========================================================================
            EXPANDING PHOTOGRAPHIC RESEARCH PAVILION (Dynamic Horizontal Accordion)
            ========================================================================= */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-12 hidden lg:flex h-[560px] gap-3 overflow-hidden rounded-3xl p-2 bg-[#f4eee1]/80 border border-amber-900/15 shadow-luxury"
        >
          {RESEARCH_FIELDS.map((field, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={field.id}
                onClick={() => selectField(idx)}
                className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? "flex-[4] shadow-elevated" : "flex-[0.9] hover:flex-[1.2] opacity-85 hover:opacity-100"
                }`}
              >
                {/* Background Image with Cinematic Light & Overlay */}
                <img
                  src={field.image}
                  alt={field.name[lang]}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out ${
                    isActive ? "scale-105" : "scale-100 filter brightness-90 saturate-85"
                  }`}
                />

                {/* Ambient Dynamic Gradients for Supreme Readability */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-[#0c1836]/95 via-[#0c1836]/50 to-transparent"
                      : "bg-[#0c1836]/60 hover:bg-[#0c1836]/40"
                  }`}
                />

                {/* Collapsed State: Sleek Vertical Pill Branding */}
                {!isActive && (
                  <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-black text-amber-300">
                        {field.num}
                      </span>
                      <div className="grid size-8 place-items-center rounded-full bg-white/20 backdrop-blur-md">
                        {icons[idx]}
                      </div>
                    </div>

                    <div className="my-auto py-8">
                      <p
                        style={{ writingMode: "vertical-rl" }}
                        className="font-display text-lg font-bold tracking-wide text-white rotate-180 select-none whitespace-nowrap"
                      >
                        {field.name[lang]}
                      </p>
                    </div>

                    <span className="size-2 rounded-full bg-amber-400 mx-auto" />
                  </div>
                )}

                {/* Expanded State: Grand Academic Showcase Card */}
                {isActive && (
                  <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10 text-white z-10 animate-in fade-in duration-500">
                    {/* Top Row: Meta Badge & Number */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-1.5 backdrop-blur-md shadow-sm">
                        <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                          DISCIPLINE {field.num} // {field.category[lang]}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 font-mono text-xs font-bold text-white/80 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                        <span>{field.num}</span>
                        <span>/</span>
                        <span>06</span>
                      </div>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="max-w-2xl">
                      <h3 className="font-display text-3xl lg:text-4xl font-black text-white leading-tight drop-shadow-md">
                        {field.name[lang]}
                      </h3>

                      {/* Guiding Question Callout */}
                      <p className="mt-3 font-display text-base lg:text-lg italic font-medium leading-relaxed text-amber-200/95 drop-shadow-sm">
                        “{field.inquiry[lang]}”
                      </p>

                      <p className="mt-3 text-sm lg:text-base leading-relaxed text-slate-200 drop-shadow-sm">
                        {field.desc[lang]}
                      </p>

                      {/* Key Conceptual Tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {field.tags[lang].map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-lg border border-white/20 bg-white/15 px-3 py-1 font-mono text-xs font-semibold text-white backdrop-blur-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Action Bar */}
                      <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-4">
                        <Link
                          to="/theory"
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-6 py-2.5 text-xs font-bold text-white shadow-gold transition hover:scale-105"
                        >
                          <span>{ar ? "تفاصيل البحث والنماذج" : "Explore Research & Methodology"}</span>
                          {ar ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                        </Link>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevField();
                            }}
                            className="grid size-9 place-items-center rounded-full border border-white/30 bg-black/40 text-white transition hover:bg-white hover:text-black"
                            aria-label="Previous Field"
                          >
                            {ar ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextField();
                            }}
                            className="grid size-9 place-items-center rounded-full border border-white/30 bg-black/40 text-white transition hover:bg-white hover:text-black"
                            aria-label="Next Field"
                          >
                            {ar ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Active Countdown Laser Beam */}
                      <div className="mt-4 h-1 w-full rounded-full bg-white/20 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-sky-300 transition-all duration-75"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            MOBILE RESPONSIVE SHOWCASE (Interactive Stacking Pavilion)
            ========================================================================= */}
        <div className="mt-8 lg:hidden flex flex-col gap-4">
          {/* Quick Tab Selector for Mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {RESEARCH_FIELDS.map((f, i) => (
              <button
                key={f.id}
                onClick={() => selectField(i)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-mono text-xs font-bold transition-all ${
                  activeIdx === i
                    ? "bg-[#0c1836] text-amber-300 shadow-md scale-105"
                    : "border border-amber-900/15 bg-white text-slate-700"
                }`}
              >
                {f.num} // {f.name[lang]}
              </button>
            ))}
          </div>

          {/* Active Mobile Showcase Card */}
          <div className="relative overflow-hidden rounded-3xl border border-amber-900/15 bg-white shadow-luxury">
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={RESEARCH_FIELDS[activeIdx].image}
                alt={RESEARCH_FIELDS[activeIdx].name[lang]}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 rounded-full border border-white/30 bg-black/40 px-3 py-1 font-mono text-[10px] font-bold text-amber-300 backdrop-blur-md">
                DISCIPLINE {RESEARCH_FIELDS[activeIdx].num}
              </div>
              <h3 className="absolute bottom-4 left-4 right-4 font-display text-2xl font-black text-white">
                {RESEARCH_FIELDS[activeIdx].name[lang]}
              </h3>
            </div>

            <div className="p-6">
              <p className="font-display text-sm italic font-semibold text-amber-800">
                “{RESEARCH_FIELDS[activeIdx].inquiry[lang]}”
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#4e5e7b]">
                {RESEARCH_FIELDS[activeIdx].desc[lang]}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {RESEARCH_FIELDS[activeIdx].tags[lang].map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-md border border-amber-900/10 bg-[#f7f3ea] px-2.5 py-1 font-mono text-[10px] font-semibold text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-amber-900/10 pt-4">
                <Link
                  to="/theory"
                  className="font-mono text-xs font-bold text-amber-800 hover:underline"
                >
                  {ar ? "تفاصيل البحث والنماذج ➔" : "Explore Methodology ➔"}
                </Link>

                <div className="flex gap-2">
                  <button
                    onClick={prevField}
                    className="grid size-8 place-items-center rounded-full border border-amber-900/15 bg-white text-[#0c1836]"
                  >
                    {ar ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                  </button>
                  <button
                    onClick={nextField}
                    className="grid size-8 place-items-center rounded-full border border-amber-900/15 bg-white text-[#0c1836]"
                  >
                    {ar ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
