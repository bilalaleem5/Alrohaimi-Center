import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "./site";
import { ArrowRight, ArrowLeft, Sparkles, Compass, Brain, Shield, ChevronRight } from "lucide-react";

export function DualFlagshipShowcase() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  // Active Horizon: 0 = Alrohaimi Theory, 1 = Saudi School of Conscious Leadership
  const [activeHorizon, setActiveHorizon] = useState<0 | 1>(0);

  // Active sub-item
  const [activeTheoryStage, setActiveTheoryStage] = useState<number>(0);
  const [activeLeadershipTrack, setActiveLeadershipTrack] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Theory 6 Epistemic Stages
  const theoryPhases = [
    {
      num: "01",
      en: "Latent Potential",
      ar: "الإمكان الكامن",
      tagline: {
        en: "Unactivated capability residing within human nature and culture.",
        ar: "القدرة الكامنة المستقرة في عمق الإنسان والمؤسسات والمجتمعات.",
      },
      epistemicMetric: "94% Mobilization Scope",
    },
    {
      num: "02",
      en: "Cognition",
      ar: "الإدراك",
      tagline: {
        en: "The perceptual architecture through which complex signals are interpreted.",
        ar: "هندسة الوعي التي من خلالها يُقرأ الواقع وتُفسَّر المتغيرات والأنظمة.",
      },
      epistemicMetric: "Sovereign Discernment",
    },
    {
      num: "03",
      en: "Meaning",
      ar: "المعنى",
      tagline: {
        en: "Integrating ethical purpose, human values, and existential resonance.",
        ar: "دمج الغاية والقيم الإنسانية والأصالة الحضارية في بنية الوعي والقرار.",
      },
      epistemicMetric: "Existential Alignment",
    },
    {
      num: "04",
      en: "Decision",
      ar: "القرار",
      tagline: {
        en: "The decisive turning point where awareness crystallizes into strategic will.",
        ar: "نقطة التحول التي يتبلور فيها الوعي إلى إرادة وقرار رشيد ومسؤول.",
      },
      epistemicMetric: "Ethical Agency Audit",
    },
    {
      num: "05",
      en: "Transformation",
      ar: "التحول",
      tagline: {
        en: "Systemic execution translating intent into institutional reality.",
        ar: "الانتقال البنيوي والسلوكي لتحويل الرؤية إلى واقع مؤسسي مستدام.",
      },
      epistemicMetric: "Systemic Evolution",
    },
    {
      num: "06",
      en: "Enduring Impact",
      ar: "الأثر المستدام",
      tagline: {
        en: "Enduring, measurable civilizational value created beyond space and time.",
        ar: "صناعة القيمة الحضارية المستدامة والقابلة للقياس عبر الأجيال.",
      },
      epistemicMetric: "Civilizational Footprint",
    },
  ];

  // Leadership 4 Executive Masterclass Tracks
  const leadershipTracks = [
    {
      num: "01",
      title: {
        en: "Conscious Decision-Making & Sovereign Leadership",
        ar: "القيادة الواعية وصناعة القرار الرشيد",
      },
      audience: {
        en: "C-Suite, Ministers & Sovereign Decision-Makers",
        ar: "القيادات العليا والوزراء وصناع القرار السيادي",
      },
      duration: {
        en: "4 Weeks · Executive Immersion & Simulation",
        ar: "٤ أسابيع · معايشة تنفيذية ومحاكاة استراتيجية",
      },
      focus: {
        en: "Cognitive autonomy under systemic ambiguity and existential risk.",
        ar: "استقلالية الوعي وصناعة القرار في ظل الضغوط والأنظمة المعقدة.",
      },
      angle: 0,
    },
    {
      num: "02",
      title: {
        en: "Cognitive Sovereignty in the Algorithmic Age",
        ar: "السيادة الإدراكية وعصر الذكاء الاصطناعي",
      },
      audience: {
        en: "Technology Strategists & Institutional Heads",
        ar: "رؤساء المؤسسات واستراتيجيو الذكاء الاصطناعي",
      },
      duration: {
        en: "3 Weeks · Advanced Intensive Masterclass",
        ar: "٣ أسابيع · تدريب استراتيجي متقدم",
      },
      focus: {
        en: "Safeguarding institutional agency against automated cognitive capture.",
        ar: "حماية استقلالية القرار الوطني من التبعية الخوارزمية والإدراكية.",
      },
      angle: 90,
    },
    {
      num: "03",
      title: {
        en: "Vision Creation & Civilizational Transformation",
        ar: "صناعة الرؤية وإدارة التحول الحضاري",
      },
      audience: {
        en: "Transformation Leaders & Vision Executives",
        ar: "قادة مكاتب تحقيق الرؤية ومسؤولو التحول",
      },
      duration: {
        en: "5 Weeks · Transformative Workshop Series",
        ar: "٥ أسابيع · ورش عمل استراتيجية تطبيقية",
      },
      focus: {
        en: "Synchronizing national Vision 2030 trajectories with enduring human impact.",
        ar: "مواءمة مسارات رؤية 2030 مع الأثر الحضاري الإنساني المستدام.",
      },
      angle: 180,
    },
    {
      num: "04",
      title: {
        en: "Systems Thinking for Sovereign Institutions",
        ar: "التفكير المنظومي للمؤسسات السيادية",
      },
      audience: {
        en: "Deputy Ministers, Policy Architects & Board Directors",
        ar: "وكلاء الوزارات ومصممو السياسات وأعضاء مجالس الإدارة",
      },
      duration: {
        en: "4 Weeks · Complex Systems Laboratory",
        ar: "٤ أسابيع · مختبر محاكاة الأنظمة المعقدة",
      },
      focus: {
        en: "Navigating non-linear feedback, multi-stakeholder dynamics, and emergence.",
        ar: "إدارة التفاعلات غير الخطية والشبكات المعقدة وصناعة السياسات المرنة.",
      },
      angle: 270,
    },
  ];

  // Auto-cycling ticker for kinetic motion
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (activeHorizon === 0) {
        setActiveTheoryStage((prev) => (prev + 1) % theoryPhases.length);
      } else {
        setActiveLeadershipTrack((prev) => (prev + 1) % leadershipTracks.length);
      }
    }, 4500);

    return () => clearInterval(timer);
  }, [activeHorizon, isPaused, theoryPhases.length, leadershipTracks.length]);

  return (
    <section className="relative overflow-hidden border-b border-amber-900/10 bg-[#fbf9f5] py-16 lg:py-20">
      {/* Daylight Atmospheric Ambient Lights - Zero Container Boxes */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-amber-200/15 via-amber-100/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-bl from-sky-200/15 via-blue-100/10 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* =====================================================================
            1. SECTION OVERTURE (Refined, Clean Editorial Typography)
            ===================================================================== */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-6 bg-amber-600" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-900">
              {ar ? "الأفقان التأسيسيان" : "DUAL FLAGSHIP HORIZONS"}
            </span>
          </div>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0c1836] tracking-tight">
            {ar ? (
              <>
                من النظرية التأسيسية{" "}
                <span className="gold-text-light italic font-serif font-normal">إلى القيادة السيادية</span>
              </>
            ) : (
              <>
                From Foundational Theory{" "}
                <span className="gold-text-light italic font-serif font-normal">to Sovereign Leadership</span>
              </>
            )}
          </h2>

          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#4e5e7b]">
            {ar
              ? "جسر معرفي وتطبيقي يربط البناء النظري الرصين بصناعة القرار والتحول القيادي."
              : "Bridging original epistemic discovery with executive transformation and sovereign decision-making."}
          </p>
        </div>

        {/* =====================================================================
            2. HORIZON SELECTOR CONDUIT (Architectural Switcher // Zero Boxes)
            ===================================================================== */}
        <div className="mt-12 border-b border-amber-900/15 pb-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
            {/* The Dual Pillars Tab Axis */}
            <div className="flex items-center gap-4 sm:gap-8">
              {/* Pillar 01: Alrohaimi Theory */}
              <button
                type="button"
                onClick={() => {
                  setActiveHorizon(0);
                  setIsPaused(false);
                }}
                className={`group relative text-start transition-all duration-300 pb-2 focus:outline-none ${
                  activeHorizon === 0 ? "opacity-100" : "opacity-45 hover:opacity-80"
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs font-bold text-amber-800">01 //</span>
                  <span className="font-display text-xl sm:text-2xl font-black text-[#0c1836]">
                    {ar ? "نظرية الرحيمي" : "Alrohaimi Theory"}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-amber-900 font-semibold">
                  {ar ? "من الكمون إلى الأثر · المنظومة الإبستيمولوجية" : "From Latency to Impact · Epistemic System"}
                </p>

                {/* Animated Golden Sliding Underline */}
                {activeHorizon === 0 && (
                  <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 shadow-sm" />
                )}
              </button>

              {/* Dividing Hairline */}
              <span className="hidden sm:block h-8 w-px bg-amber-900/20" />

              {/* Pillar 02: Saudi School of Conscious Leadership */}
              <button
                type="button"
                onClick={() => {
                  setActiveHorizon(1);
                  setIsPaused(false);
                }}
                className={`group relative text-start transition-all duration-300 pb-2 focus:outline-none ${
                  activeHorizon === 1 ? "opacity-100" : "opacity-45 hover:opacity-80"
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs font-bold text-sky-800">02 //</span>
                  <span className="font-display text-xl sm:text-2xl font-black text-[#0c1836]">
                    {ar ? "المدرسة السعودية للقيادة الواعية" : "Saudi School of Conscious Leadership"}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-sky-900 font-semibold">
                  {ar ? "الذراع القيادي والتنفيذي · البرامج السيادية" : "Executive Leadership Arm · Sovereign Cohorts"}
                </p>

                {/* Animated Sky Blue Sliding Underline */}
                {activeHorizon === 1 && (
                  <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 shadow-sm" />
                )}
              </button>
            </div>

            {/* Kinetic Auto-Pulse Indicator */}
            <div className="flex items-center gap-3">
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-75" />
                <span className="relative inline-flex rounded-full size-2.5 bg-amber-600" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {isPaused
                  ? ar
                    ? "استعراض تفاعلي موجه"
                    : "Interactive Focus Mode"
                  : ar
                    ? "تدفق استكشافي مستمر"
                    : "Continuous Epistemic Flow"}
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================================
            3. DYNAMIC ZERO-CARD HORIZON STAGE
            ===================================================================== */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-14 transition-all duration-500"
        >
          {activeHorizon === 0 ? (
            /* ===============================================================
               HORIZON 01: ALROHAIMI THEORY (Kinetic Epistemic Stream // Zero Cards)
               =============================================================== */
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: 6 Stages Epistemic Trajectory */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Brain className="size-4 text-amber-700" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                      {ar ? "المراحل الإبستيمولوجية الست" : "The 6 Epistemic Dimensions"}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-2xl sm:text-3xl font-bold text-[#0c1836]">
                    {theoryPhases[activeTheoryStage].num} · {theoryPhases[activeTheoryStage][lang]}
                  </h3>

                  {/* Active Phase Deep Thesis */}
                  <p className="mt-3 font-serif text-base sm:text-lg italic leading-relaxed text-[#334155] font-normal min-h-[52px]">
                    “{theoryPhases[activeTheoryStage].tagline[lang]}”
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-xs font-mono text-amber-800">
                    <span className="inline-flex items-center gap-1.5 font-bold">
                      <Sparkles size={13} className="text-amber-600" />
                      {theoryPhases[activeTheoryStage].epistemicMetric}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500 uppercase">
                      {ar ? "مرحلة فكرية تأسيسية" : "Foundational Epistemic Dimension"}
                    </span>
                  </div>

                  {/* The 6-Stage Open Architectural Timeline (ZERO BOXES, ZERO CARDS) */}
                  <div className="mt-10 pt-6 border-t border-amber-900/15">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                      {ar ? "المسار الانتقالي الكامل (انقر لاختيار المرحلة)" : "Full Transition Trajectory (Click to inspect)"}
                    </p>

                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      {theoryPhases.map((phase, i) => {
                        const isCurrent = activeTheoryStage === i;
                        return (
                          <button
                            key={phase.num}
                            onClick={() => {
                              setActiveTheoryStage(i);
                              setIsPaused(true);
                            }}
                            className={`group relative text-start transition-all duration-300 pb-3 border-b-2 focus:outline-none ${
                              isCurrent
                                ? "border-amber-600 opacity-100"
                                : "border-amber-900/15 opacity-40 hover:opacity-80 hover:border-amber-900/40"
                            }`}
                          >
                            <span
                              className={`font-mono text-xs font-bold block ${
                                isCurrent ? "text-amber-800" : "text-slate-500"
                              }`}
                            >
                              {phase.num}
                            </span>
                            <span
                              className={`mt-1 font-display text-sm font-bold block line-clamp-1 ${
                                isCurrent ? "text-[#0c1836]" : "text-slate-600"
                              }`}
                            >
                              {phase[lang]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Pure Editorial Action Link */}
                <div className="mt-10 pt-6">
                  <Link
                    to="/theory"
                    className="group inline-flex items-center gap-3 font-display text-base font-bold text-amber-900 hover:text-amber-950 transition-colors"
                  >
                    <span className="underline underline-offset-8 decoration-amber-600/50 group-hover:decoration-amber-600">
                      {ar ? "استكشف البناء النظري الكامل لنظرية الرحيمي" : "Explore the Complete Alrohaimi Epistemic Model"}
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-amber-900/20 bg-white text-[#0c1836] shadow-xs transition-all duration-300 group-hover:bg-[#0c1836] group-hover:text-white group-hover:translate-x-1">
                      {ar ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Kinetic Epistemic Nexus (Living SVG Visual Animation) */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative size-[340px] sm:size-[420px] select-none">
                  {/* Subtle Background Glow Pulse */}
                  <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-2xl animate-pulse" />

                  {/* SVG Living Epistemic Orbit */}
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Concentric Harmonic Rings */}
                    <circle
                      cx="200"
                      cy="200"
                      r="175"
                      stroke="#b88a3b"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                      className="opacity-25 animate-spin"
                      style={{ animationDuration: "60s" }}
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="135"
                      stroke="#0c1836"
                      strokeWidth="1"
                      strokeDasharray="2 4"
                      className="opacity-20 animate-spin"
                      style={{ animationDuration: "45s", animationDirection: "reverse" }}
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="85"
                      stroke="#b88a3b"
                      strokeWidth="1.5"
                      className="opacity-35"
                    />

                    {/* Central Core */}
                    <circle cx="200" cy="200" r="32" fill="#0c1836" />
                    <circle cx="200" cy="200" r="40" stroke="#b88a3b" strokeWidth="1" opacity="0.4" />
                    <text
                      x="200"
                      y="198"
                      textAnchor="middle"
                      fill="#e4c885"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="monospace"
                      letterSpacing="1"
                    >
                      AGENCY
                    </text>
                    <text
                      x="200"
                      y="210"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                    >
                      الإنسان
                    </text>

                    {/* 6 Nodes Around Perimeter (60 degrees apart) */}
                    {theoryPhases.map((phase, idx) => {
                      const angle = (idx * 60 - 90) * (Math.PI / 180);
                      const radius = 135;
                      const cx = 200 + radius * Math.cos(angle);
                      const cy = 200 + radius * Math.sin(angle);
                      const isCurrent = activeTheoryStage === idx;

                      return (
                        <g key={phase.num} className="transition-all duration-500 cursor-pointer" onClick={() => setActiveTheoryStage(idx)}>
                          {/* Radial Filament Connecting to Center */}
                          <line
                            x1="200"
                            y1="200"
                            x2={cx}
                            y2={cy}
                            stroke={isCurrent ? "#b88a3b" : "#b88a3b"}
                            strokeWidth={isCurrent ? "2" : "1"}
                            strokeDasharray={isCurrent ? "none" : "2 4"}
                            opacity={isCurrent ? 0.8 : 0.15}
                          />

                          {/* Outer Pulse Beacon for Active Node */}
                          {isCurrent && (
                            <circle
                              cx={cx}
                              cy={cy}
                              r="20"
                              fill="#b88a3b"
                              fillOpacity="0.2"
                              className="animate-ping"
                              style={{ animationDuration: "2.5s" }}
                            />
                          )}

                          {/* Node Disc */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isCurrent ? "14" : "9"}
                            fill={isCurrent ? "#0c1836" : "#fbf9f5"}
                            stroke={isCurrent ? "#b88a3b" : "#0c1836"}
                            strokeWidth={isCurrent ? "2.5" : "1.5"}
                            strokeOpacity={isCurrent ? 1 : 0.3}
                          />

                          {/* Node Number */}
                          <text
                            x={cx}
                            y={cy + 3.5}
                            textAnchor="middle"
                            fill={isCurrent ? "#e4c885" : "#4e5e7b"}
                            fontSize={isCurrent ? "9" : "7.5"}
                            fontWeight="bold"
                            fontFamily="monospace"
                          >
                            {phase.num}
                          </text>

                          {/* Node Name Label */}
                          <text
                            x={cx}
                            y={cy + (cy > 200 ? 24 : -18)}
                            textAnchor="middle"
                            fill={isCurrent ? "#0c1836" : "#94a3b8"}
                            fontSize={isCurrent ? "11" : "9"}
                            fontWeight={isCurrent ? "bold" : "normal"}
                            fontFamily="sans-serif"
                          >
                            {phase[lang]}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            /* ===============================================================
               HORIZON 02: SAUDI SCHOOL OF CONSCIOUS LEADERSHIP (Kinetic Compass & Rows)
               =============================================================== */
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Executive Leadership Tracks (Editorial Rows // Zero Cards) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Shield className="size-4 text-sky-700" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-900">
                      {ar ? "المسارات التنفيذية المتخصصة" : "Specialized Executive Cohorts"}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-[#0c1836]">
                    {leadershipTracks[activeLeadershipTrack].title[lang]}
                  </h3>

                  {/* Active Track Highlight */}
                  <p className="mt-3 font-serif text-base sm:text-lg italic leading-relaxed text-[#334155] font-normal min-h-[48px]">
                    “{leadershipTracks[activeLeadershipTrack].focus[lang]}”
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-sky-900">
                    <span className="font-bold text-sky-800">
                      {leadershipTracks[activeLeadershipTrack].duration[lang]}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-600">
                      {leadershipTracks[activeLeadershipTrack].audience[lang]}
                    </span>
                  </div>

                  {/* The 4 Executive Tracks (HAIRLINE ROWS, ZERO CARDS, ZERO BOXES) */}
                  <div className="mt-10 divide-y divide-amber-900/15 border-t border-b border-amber-900/15">
                    {leadershipTracks.map((track, idx) => {
                      const isCurrent = activeLeadershipTrack === idx;
                      return (
                        <button
                          key={track.num}
                          type="button"
                          onClick={() => {
                            setActiveLeadershipTrack(idx);
                            setIsPaused(true);
                          }}
                          className={`w-full group/row py-4 text-start transition-all duration-300 flex items-center justify-between focus:outline-none ${
                            isCurrent ? "opacity-100" : "opacity-45 hover:opacity-85"
                          }`}
                        >
                          <div className="flex items-baseline gap-3">
                            <span
                              className={`font-mono text-xs font-bold ${
                                isCurrent ? "text-sky-800" : "text-slate-400"
                              }`}
                            >
                              {track.num}
                            </span>
                            <span
                              className={`font-display text-base sm:text-lg font-bold transition-colors ${
                                isCurrent
                                  ? "text-[#0c1836] underline underline-offset-4 decoration-sky-600"
                                  : "text-[#334155] group-hover/row:text-[#0c1836]"
                              }`}
                            >
                              {track.title[lang]}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="hidden sm:inline font-mono text-[10px] font-semibold text-slate-500">
                              {track.duration[lang].split("·")[0]}
                            </span>
                            <ChevronRight
                              size={16}
                              className={`transition-transform ${
                                isCurrent
                                  ? "text-sky-700 translate-x-1"
                                  : "text-slate-400 group-hover/row:translate-x-0.5"
                              }`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Pure Editorial Action Link */}
                <div className="mt-10 pt-6">
                  <Link
                    to="/programs"
                    className="group inline-flex items-center gap-3 font-display text-base font-bold text-sky-900 hover:text-sky-950 transition-colors"
                  >
                    <span className="underline underline-offset-8 decoration-sky-600/50 group-hover:decoration-sky-600">
                      {ar ? "استعراض كافة البرامج التنفيذية وشروط القبول" : "Explore All Executive Cohorts & Admissions"}
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-sky-900/20 bg-white text-[#0c1836] shadow-xs transition-all duration-300 group-hover:bg-[#0c1836] group-hover:text-white group-hover:translate-x-1">
                      {ar ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Kinetic Leadership Compass (Living SVG Visual Animation) */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative size-[340px] sm:size-[420px] select-none">
                  {/* Subtle Background Glow Pulse */}
                  <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-2xl animate-pulse" />

                  {/* SVG Living Leadership Astrolabe */}
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Concentric Astrolabe Coordinate Rings */}
                    <circle
                      cx="200"
                      cy="200"
                      r="175"
                      stroke="#0284c7"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      className="opacity-25 animate-spin"
                      style={{ animationDuration: "70s" }}
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="135"
                      stroke="#0c1836"
                      strokeWidth="1"
                      className="opacity-20"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="90"
                      stroke="#0284c7"
                      strokeWidth="1.5"
                      strokeDasharray="2 4"
                      className="opacity-35 animate-spin"
                      style={{ animationDuration: "50s", animationDirection: "reverse" }}
                    />

                    {/* Cardinal Virtues on Perimeter */}
                    <text x="200" y="20" textAnchor="middle" fill="#0c1836" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                      {ar ? "الرشاد · WISDOM" : "WISDOM · الرشاد"}
                    </text>
                    <text x="380" y="204" textAnchor="end" fill="#0c1836" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                      {ar ? "السيادة · SOVEREIGNTY" : "SOVEREIGNTY · السيادة"}
                    </text>
                    <text x="200" y="390" textAnchor="middle" fill="#0c1836" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                      {ar ? "التحول · TRANSFORMATION" : "TRANSFORMATION · التحول"}
                    </text>
                    <text x="20" y="204" textAnchor="start" fill="#0c1836" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                      {ar ? "الاستشراف · FORESIGHT" : "FORESIGHT · الاستشراف"}
                    </text>

                    {/* Central Core Compass Hub */}
                    <circle cx="200" cy="200" r="34" fill="#0c1836" />
                    <circle cx="200" cy="200" r="42" stroke="#0284c7" strokeWidth="1" opacity="0.5" />
                    <text
                      x="200"
                      y="198"
                      textAnchor="middle"
                      fill="#7dd3fc"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="monospace"
                      letterSpacing="1"
                    >
                      LEADERSHIP
                    </text>
                    <text
                      x="200"
                      y="210"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                    >
                      القيادة
                    </text>

                    {/* Rotating Navigational Needle Pointing to Active Program Angle */}
                    <g
                      className="transition-transform duration-700 ease-out origin-center"
                      style={{
                        transform: `rotate(${leadershipTracks[activeLeadershipTrack].angle}deg)`,
                        transformOrigin: "200px 200px",
                      }}
                    >
                      {/* Needle Blade Pointing Up */}
                      <polygon
                        points="200,80 206,190 194,190"
                        fill="#0284c7"
                        opacity="0.85"
                      />
                      {/* Counter Balance */}
                      <polygon
                        points="200,260 204,210 196,210"
                        fill="#0c1836"
                        opacity="0.4"
                      />
                      {/* Needle Tip Indicator */}
                      <circle cx="200" cy="80" r="6" fill="#38bdf8" />
                      <circle cx="200" cy="80" r="12" stroke="#38bdf8" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: "2s" }} />
                    </g>

                    {/* 4 Cardinal Nodes */}
                    {leadershipTracks.map((tr, idx) => {
                      const angleRad = (tr.angle - 90) * (Math.PI / 180);
                      const r = 135;
                      const cx = 200 + r * Math.cos(angleRad);
                      const cy = 200 + r * Math.sin(angleRad);
                      const isCurrent = activeLeadershipTrack === idx;

                      return (
                        <g key={tr.num} className="cursor-pointer" onClick={() => setActiveLeadershipTrack(idx)}>
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isCurrent ? "13" : "8"}
                            fill={isCurrent ? "#0c1836" : "#fbf9f5"}
                            stroke={isCurrent ? "#0284c7" : "#0c1836"}
                            strokeWidth={isCurrent ? "2.5" : "1.5"}
                            strokeOpacity={isCurrent ? 1 : 0.3}
                          />
                          <text
                            x={cx}
                            y={cy + 3.5}
                            textAnchor="middle"
                            fill={isCurrent ? "#7dd3fc" : "#4e5e7b"}
                            fontSize={isCurrent ? "8.5" : "7"}
                            fontWeight="bold"
                            fontFamily="monospace"
                          >
                            {tr.num}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
