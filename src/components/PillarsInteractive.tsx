import { useState, useEffect, useRef, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  Compass,
  Brain,
  Layers,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useLanguage } from "./site";

interface PillarDetail {
  number: string;
  name: { en: string; ar: string };
  inquiry: { en: string; ar: string };
  desc: { en: string; ar: string };
  concept: { en: string; ar: string };
  accentColor: string;
  glowColor: string;
  borderColor: string;
  badge: { en: string; ar: string };
  themeBg: string;
  tags: { en: string[]; ar: string[] };
}

const PILLARS_DATA: PillarDetail[] = [
  {
    number: "01",
    name: { en: "Humanity", ar: "الإنسان" },
    inquiry: {
      en: "How does latent potential awaken into conscious agency?",
      ar: "كيف يستيقظ الإمكان الكامن لدى الإنسان إلى فاعلية واعية؟",
    },
    desc: {
      en: "Understanding humanity, existential meaning, and latent capability as the prime ontological anchor of civilizational renewal.",
      ar: "فهم الإنسان والمعنى والقدرة الكامنة بوصفها المحرك الجوهري والمنطلق التأسيسي للنهوض الحضاري.",
    },
    concept: { en: "Latent Potential // الكمون الإنساني", ar: "الكمون الإنساني والفاعلية" },
    accentColor: "#b88a3b",
    glowColor: "rgba(184, 138, 59, 0.4)",
    borderColor: "rgba(184, 138, 59, 0.75)",
    badge: { en: "Ontological Root", ar: "المنطلق التأسيسي" },
    themeBg: "from-amber-500/12 via-amber-400/5 to-white",
    tags: {
      en: ["Ontological Core", "Latent Potential", "Existential Agency", "Human Dignity"],
      ar: ["المنطلق التأسيسي", "الكمون الإنساني", "الفاعلية الواعية", "الكرامة الإنسانية"],
    },
  },
  {
    number: "02",
    name: { en: "Cognition", ar: "الإدراك" },
    inquiry: {
      en: "How is perception transformed into sound ethical decisions?",
      ar: "كيف يتحول الوعي والإدراك إلى قرارات رشيدة في عصر الذكاء الاصطناعي؟",
    },
    desc: {
      en: "Deciphering awareness, perceptual architecture, and cognitive sovereignty in individual leaders and institutional minds.",
      ar: "فك شفرة الوعي وهندسة الإدراك والسيادة الإدراكية لدى القادة والمؤسسات في عصر الخوارزميات.",
    },
    concept: { en: "Cognitive Sovereignty // السيادة الإدراكية", ar: "السيادة الإدراكية والقرار" },
    accentColor: "#0284c7",
    glowColor: "rgba(2, 132, 199, 0.4)",
    borderColor: "rgba(2, 132, 199, 0.75)",
    badge: { en: "Epistemic Anchor", ar: "المرتكز الإدراكي" },
    themeBg: "from-sky-500/12 via-blue-400/5 to-white",
    tags: {
      en: ["Perceptual Architecture", "Algorithmic Independence", "Critical Judgment", "Cognitive Sovereignty"],
      ar: ["هندسة الإدراك", "الاستقلال الخوارزمي", "الحكم النقدي", "السيادة الإدراكية"],
    },
  },
  {
    number: "03",
    name: { en: "Systems", ar: "الأنظمة" },
    inquiry: {
      en: "How do complex institutional interdependencies interact?",
      ar: "كيف تتفاعل شبكات الاعتماد المتبادل عبر البيئات المؤسسية المعقدة؟",
    },
    desc: {
      en: "Navigating non-linear adaptive networks, institutional feedback loops, and emergent socio-technical dynamics.",
      ar: "قراءة الشبكات التكيفية المعقدة وحلقات التغذية الراجعة المؤسسية والديناميكيات الاجتماعية والتقنية.",
    },
    concept: { en: "Complex Dynamics // تعقيد الأنظمة", ar: "الأنظمة المعقدة والتكيف" },
    accentColor: "#059669",
    glowColor: "rgba(5, 150, 105, 0.4)",
    borderColor: "rgba(5, 150, 105, 0.75)",
    badge: { en: "Structural Architecture", ar: "البناء المؤسسي" },
    themeBg: "from-emerald-500/12 via-teal-400/5 to-white",
    tags: {
      en: ["Complex Adaptive Systems", "Institutional Feedback", "Emergence", "Systemic Resilience"],
      ar: ["الأنظمة التكيفية المعقدة", "التغذية الراجعة المؤسسية", "الانبثاق", "المرونة الهيكلية"],
    },
  },
  {
    number: "04",
    name: { en: "Transformation", ar: "التحول" },
    inquiry: {
      en: "How is theoretical knowledge engineered into historic impact?",
      ar: "كيف تُحوَّل المعرفة النظرية والقدرة الكامنة إلى أثر حضاري دائم؟",
    },
    desc: {
      en: "Translating theoretical models into empirical executive academies, sovereign metrics, and enduring civilizational transformation.",
      ar: "تحويل النماذج النظرية إلى أكاديميات قيادية ومؤشرات قياس معيارية تصنع أثراً حضارياً مستداماً.",
    },
    concept: { en: "Historic Impact // الأثر الحضاري", ar: "صناعة الأثر المستدام" },
    accentColor: "#b88a3b",
    glowColor: "rgba(184, 138, 59, 0.45)",
    borderColor: "rgba(184, 138, 59, 0.8)",
    badge: { en: "Civilizational Apex", ar: "الأثر والتحول" },
    themeBg: "from-amber-600/15 via-yellow-500/6 to-white",
    tags: {
      en: ["Enduring Civilizational Impact", "Executive Academies", "Sovereign Metrics", "Vision 2030 Alignment"],
      ar: ["الأثر الحضاري المستدام", "الأكاديميات التنفيذية", "المؤشرات السيادية", "مواءمة رؤية 2030"],
    },
  },
];

export function PillarsInteractive() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [activePillar, setActivePillar] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const startTimeRef = useRef<number>(Date.now());
  const activePillarRef = useRef<number>(0);

  // Keep activePillarRef in sync
  useEffect(() => {
    activePillarRef.current = activePillar;
  }, [activePillar]);

  // Robust Sequential Progression: strictly 1 -> 2 -> 3 -> 4 -> 1
  useEffect(() => {
    const STEP_DURATION = 4200; // 4.2s per pillar
    const TICK_INTERVAL = 35;

    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;

      if (elapsed >= STEP_DURATION) {
        // Step forward strictly by +1
        startTimeRef.current = Date.now();
        const nextIdx = (activePillarRef.current + 1) % PILLARS_DATA.length;
        activePillarRef.current = nextIdx;
        setActivePillar(nextIdx);
        setProgress(0);
      } else {
        setProgress(Math.min(100, (elapsed / STEP_DURATION) * 100));
      }
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const selectPillar = (idx: number) => {
    activePillarRef.current = idx;
    setActivePillar(idx);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  const nextPillar = () => {
    const nextIdx = (activePillarRef.current + 1) % PILLARS_DATA.length;
    selectPillar(nextIdx);
  };

  const prevPillar = () => {
    const prevIdx = (activePillarRef.current - 1 + PILLARS_DATA.length) % PILLARS_DATA.length;
    selectPillar(prevIdx);
  };

  return (
    <section className="relative overflow-hidden border-b border-amber-900/10 bg-[#fbf9f5] pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Ambient Lighting Cones & Atmospheric Radiance */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[1100px] rounded-full bg-gradient-to-b from-amber-300/18 via-amber-100/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full bg-amber-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-sky-400/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1536px] px-5 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-white/95 px-4 py-1.5 shadow-xs backdrop-blur-md">
            <span className="size-2 rounded-full bg-amber-600 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
              {ar ? "الركائز الأربع التأسيسية للمركز" : "The Four Foundational Pillars"}
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl font-black text-[#0c1836] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]">
            {ar ? (
              <>
                من فهم الإنسان والإدراك إلى{" "}
                <span className="gold-text-light block sm:inline">صناعة التحول</span>
              </>
            ) : (
              <>
                From Understanding to{" "}
                <span className="gold-text-light block sm:inline">Civilizational Impact</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#4e5e7b] sm:text-lg">
            {ar
              ? "أربع ركائز منهجية مترابطة تُشكّل معاً السلسلة المعرفية المتكاملة لنظرية الرحيمي والمشروعات الفكرية والتطبيقية للمركز."
              : "Four interconnected epistemic pillars forming the sequential pathway through which latent human capacity translates into enduring civilizational impact."}
          </p>
        </div>

        {/* 3D Interconnected Energy Conduit Pipeline Track */}
        <div className="relative mt-12 hidden lg:block">
          {/* Base Inactive Track */}
          <div className="absolute left-[10%] right-[10%] top-5 h-1.5 -translate-y-1/2 rounded-full bg-amber-900/10" />

          {/* Active Flowing Energy Beam (dynamically flows across 1 -> 2 -> 3 -> 4) */}
          <div
            className="absolute left-[10%] top-5 h-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-500 via-sky-500 to-amber-600 transition-all duration-100 shadow-[0_0_12px_rgba(184,138,59,0.5)]"
            style={{
              width: `${Math.min(80, ((activePillar + progress / 100) / 3) * 80)}%`,
            }}
          />

          {/* Stepping Node Indicators with Progress Rings & Hover Jump */}
          <div className="relative flex justify-between px-[8%]">
            {PILLARS_DATA.map((p, idx) => {
              const isSelected = activePillar === idx;
              const isPast = activePillar > idx;
              return (
                <button
                  key={p.number}
                  onClick={() => selectPillar(idx)}
                  className="group flex flex-col items-center gap-2 focus:outline-none transition-transform"
                  aria-label={`Select ${p.name.en}`}
                >
                  <div
                    className={`relative grid size-11 place-items-center rounded-full border-2 transition-all duration-300 ${
                      isSelected
                        ? "scale-125 border-amber-600 bg-[#0c1836] text-amber-300 shadow-xl shadow-amber-600/35 ring-4 ring-amber-500/20"
                        : isPast
                        ? "border-amber-600/60 bg-amber-50 text-amber-900 hover:scale-110"
                        : "border-amber-900/20 bg-white text-slate-600 hover:border-amber-600 hover:scale-110"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold">{p.number}</span>
                    {isSelected && (
                      <span className="absolute -inset-1.5 rounded-full border-2 border-amber-500/80 animate-ping" />
                    )}
                  </div>
                  <div className="text-center">
                    <span
                      className={`block font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
                        isSelected ? "text-amber-900 font-black" : "text-slate-500 group-hover:text-amber-700"
                      }`}
                    >
                      {p.name[lang]}
                    </span>
                    <span className="block font-mono text-[10px] text-slate-400 group-hover:text-amber-800/80">
                      {p.badge[lang]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Pillars Interactive 3D Cards Grid with Auto-Cycling */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS_DATA.map((pillar, idx) => (
            <Pillar3DCard
              key={pillar.number}
              pillar={pillar}
              index={idx}
              lang={lang}
              isActive={activePillar === idx}
              progress={activePillar === idx ? progress : 0}
              onActivate={() => selectPillar(idx)}
            />
          ))}
        </div>

        {/* Enhanced Cinematic Pipeline Synthesis Terminal */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-amber-900/15 bg-white/95 shadow-luxury backdrop-blur-xl transition-all duration-500">
          {/* Top Terminal Pipeline Breadcrumb Strip */}
          <div className="flex flex-wrap items-center justify-between border-b border-amber-900/10 bg-[#faf6ed]/70 px-6 py-3 sm:px-8">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-amber-600" />
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                {ar ? "السلسلة المعرفية المتكاملة // التوليف النشط" : "Active Epistemic Chain Synthesis"}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-3 font-mono text-xs">
              <span className="text-slate-400">{ar ? "المسار:" : "Pathway:"}</span>
              {PILLARS_DATA.map((p, i) => (
                <div key={p.number} className="flex items-center gap-1.5">
                  <span
                    className={`font-semibold transition-colors ${
                      activePillar === i ? "text-amber-800 font-bold" : "text-slate-400"
                    }`}
                  >
                    {p.name[lang]}
                  </span>
                  {i < PILLARS_DATA.length - 1 && <span className="text-slate-300">➔</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Main Terminal Interior */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              {/* Left Column: Stage Name & Concept */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-amber-50/80 px-3 py-1 font-mono text-xs font-bold text-amber-900">
                  <Sparkles size={14} className="text-amber-600" />
                  <span>
                    {ar ? `المرحلة 0${activePillar + 1}: ${PILLARS_DATA[activePillar].badge.ar}` : `STAGE 0${activePillar + 1} // ${PILLARS_DATA[activePillar].badge.en}`}
                  </span>
                </div>

                <div className="mt-3 flex items-baseline gap-3">
                  <h3 className="font-display text-3xl font-black text-[#0c1836] sm:text-4xl">
                    {PILLARS_DATA[activePillar].name[lang]}
                  </h3>
                  <span className="font-mono text-xs font-bold text-amber-700">
                    PILLAR {PILLARS_DATA[activePillar].number}
                  </span>
                </div>

                <p className="mt-2 font-mono text-xs font-bold text-amber-800">
                  {PILLARS_DATA[activePillar].concept[lang]}
                </p>

                {/* Conceptual Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {PILLARS_DATA[activePillar].tags[lang].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md border border-amber-900/10 bg-[#f7f3ea] px-2.5 py-1 font-mono text-[10px] font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Middle Column: Epistemic Inquiry & Description */}
              <div className="border-t border-amber-900/10 pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 rtl:lg:border-r rtl:lg:border-l-0 rtl:lg:pr-8 rtl:lg:pl-0">
                <div className="flex items-start gap-2">
                  <span className="font-serif text-3xl font-bold text-amber-700 leading-none">“</span>
                  <p className="font-display text-lg italic leading-relaxed text-[#0c1836] font-medium">
                    {PILLARS_DATA[activePillar].inquiry[lang]}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                  {PILLARS_DATA[activePillar].desc[lang]}
                </p>
              </div>

              {/* Right Column: Controls & Deep-Dive Link */}
              <div className="flex flex-col items-start lg:items-end justify-center gap-3 border-t border-amber-900/10 pt-4 lg:col-span-2 lg:border-t-0 lg:pt-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevPillar}
                    className="grid size-10 place-items-center rounded-full border border-amber-900/15 bg-[#fbf9f5] text-[#0c1836] shadow-xs transition-all hover:bg-white hover:border-amber-600 hover:scale-105"
                    aria-label="Previous Pillar"
                  >
                    {ar ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                  </button>
                  <button
                    onClick={nextPillar}
                    className="grid size-10 place-items-center rounded-full border border-amber-900/15 bg-[#fbf9f5] text-[#0c1836] shadow-xs transition-all hover:bg-white hover:border-amber-600 hover:scale-105"
                    aria-label="Next Pillar"
                  >
                    {ar ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                  </button>
                </div>

                <Link
                  to="/theory"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-amber-800 transition-colors hover:text-amber-950 hover:underline"
                >
                  <span>{ar ? "استكشف البناء النظري" : "Explore Theory"}</span>
                  {ar ? <ArrowLeft size={13} /> : <ArrowRight size={13} />}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar3DCard({
  pillar,
  index,
  lang,
  isActive,
  progress,
  onActivate,
}: {
  pillar: PillarDetail;
  index: number;
  lang: "en" | "ar";
  isActive: boolean;
  progress: number;
  onActivate: () => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const ar = lang === "ar";

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((p) => ({ ...p, opacity: 0 }));
  };

  const icons = [
    <Compass key="compass" className="text-amber-700 transition-transform duration-500 group-hover:rotate-45" size={32} />,
    <Brain key="brain" className="text-sky-700 transition-transform duration-500 group-hover:scale-110" size={32} />,
    <Layers key="layers" className="text-emerald-700 transition-transform duration-500 group-hover:scale-110" size={32} />,
    <TrendingUp key="trending" className="text-amber-800 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" size={32} />,
  ];

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative cursor-pointer"
      onClick={onActivate}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
            isActive ? "translateZ(18px) scale(1.025) translateY(-6px)" : "translateZ(0px)"
          }`,
          transformStyle: "preserve-3d",
          boxShadow: isActive
            ? `0 26px 50px -12px ${pillar.glowColor}, 0 0 0 2px ${pillar.borderColor}`
            : "0 10px 25px -8px rgba(12, 24, 54, 0.08)",
        }}
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border bg-white p-7 transition-all duration-500 ${
          isActive
            ? `bg-gradient-to-b ${pillar.themeBg}`
            : "border-amber-900/15 hover:border-amber-500/40 hover:shadow-lg hover:-translate-y-1"
        }`}
      >
        {/* Dynamic Continuous Laser Progress Beam at Card Top */}
        {isActive ? (
          <div className="absolute inset-x-0 top-0 h-1.5 bg-amber-900/15 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-amber-600 to-sky-600 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        ) : (
          <div className="absolute inset-x-0 top-0 h-1 bg-transparent group-hover:bg-amber-500/30 transition-colors" />
        )}

        {/* Dynamic Specular Light Glare following mouse */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 70%)`,
            opacity: glarePos.opacity,
          }}
        />

        {/* Top Watermark Numeral in 3D Background */}
        <div
          style={{ transform: "translateZ(-15px)" }}
          className={`pointer-events-none absolute top-3 right-5 font-serif text-6xl font-black select-none transition-transform duration-500 group-hover:scale-110 ${
            isActive ? "text-amber-950/[0.08]" : "text-amber-950/[0.04]"
          }`}
        >
          {pillar.number}
        </div>

        {/* Card Body */}
        <div style={{ transform: "translateZ(25px)" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">
                PILLAR {pillar.number}
              </span>
              {isActive && (
                <span className="flex items-center gap-1 rounded-full bg-amber-600/10 px-2 py-0.5 font-mono text-[9px] font-bold text-amber-900">
                  <span className="size-1.5 rounded-full bg-amber-600 animate-pulse" />
                  <span>{ar ? "نشط" : "ACTIVE"}</span>
                </span>
              )}
            </div>

            <span
              className={`rounded-full border px-2.5 py-0.5 font-mono text-[9px] font-semibold transition-all ${
                isActive
                  ? "border-amber-600/40 bg-white/95 text-amber-900 shadow-xs font-bold"
                  : "border-amber-900/10 bg-[#f5f0e6] text-slate-700"
              }`}
            >
              {pillar.badge[lang]}
            </span>
          </div>

          {/* 3D Floating Icon Vault */}
          <div
            style={{ transform: "translateZ(35px)" }}
            className={`mt-5 grid size-16 place-items-center rounded-2xl border transition-all duration-500 ${
              isActive
                ? "border-amber-500/50 bg-white shadow-lg scale-110 ring-2 ring-amber-500/20"
                : "border-amber-900/10 bg-[#f7f3ea]/80 group-hover:scale-110 group-hover:bg-white"
            }`}
          >
            {icons[index]}
          </div>

          {/* Title & Inquiry */}
          <h3 className="mt-5 font-display text-2xl font-bold text-[#0c1836] transition-colors group-hover:text-amber-800">
            {pillar.name[lang]}
          </h3>

          <p className="mt-2.5 font-display text-xs italic font-semibold leading-relaxed text-amber-900/90">
            “{pillar.inquiry[lang]}”
          </p>

          <p className="mt-2 text-xs leading-relaxed text-[#4e5e7b]">
            {pillar.desc[lang]}
          </p>
        </div>

        {/* Card Footer */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="mt-6 border-t border-amber-900/10 pt-4"
        >
          <div className="flex items-center justify-between text-xs font-bold text-amber-800 transition-transform group-hover:translate-x-1">
            <span className="font-mono text-[10px] uppercase tracking-wider">
              {pillar.concept[lang]}
            </span>
            {ar ? (
              <ArrowLeft
                size={14}
                className={`transition-transform ${isActive ? "-translate-x-1" : ""}`}
              />
            ) : (
              <ArrowRight
                size={14}
                className={`transition-transform ${isActive ? "translate-x-1" : ""}`}
              />
            )}
          </div>

          {/* Active Energy Line */}
          <div
            className={`mt-3 h-1 w-full rounded-full transition-all duration-500 ${
              isActive
                ? "bg-gradient-to-r from-amber-500 via-amber-600 to-sky-600 opacity-100"
                : "bg-amber-900/10 opacity-30 group-hover:opacity-80"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
