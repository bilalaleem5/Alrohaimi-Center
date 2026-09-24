import { useState, useEffect, useRef, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage, Arrow } from "./site";
import { story } from "../lib/content";
import desertLightImg from "../assets/desert_light.jpg";
import theoryLightImg from "../assets/theory_light.jpg";
import leadershipLightImg from "../assets/leadership_light.jpg";
import {
  Award,
  Sparkles,
  Compass,
  Globe2,
} from "lucide-react";

export function StoryInteractive() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const [activeStoryPhase, setActiveStoryPhase] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [curtainState, setCurtainState] = useState<"idle" | "closing" | "opening">("idle");
  const [progress, setProgress] = useState<number>(0);
  const startTimeRef = useRef<number>(Date.now());
  const activePhaseRef = useRef<number>(0);
  const isTransitioningRef = useRef<boolean>(false);

  // 3D Parallax Tilt state for Image Showcase
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const imageCardRef = useRef<HTMLDivElement | null>(null);

  const PHASE_DURATION = 5200; // 5.2 seconds per narrative phase
  const TICK_INTERVAL = 40;

  // 3 Distinct Photographic Stages Matching the 3 Phases
  const phaseImages = [
    {
      src: desertLightImg,
      alt: {
        en: "From the Desert to Impact: Scarcity & Reading Reality",
        ar: "من الصحراء إلى الأثر: قراءة الواقع وإدارة الممكن",
      },
      tag: { en: "01 // THE ARABIAN DESERT", ar: "المرحلة 01 // منطلق الصحراء" },
      caption: {
        en: "Observation of Scarcity & Resource Realism",
        ar: "ملاحظة الشح وقراءة الواقع",
      },
    },
    {
      src: theoryLightImg,
      alt: {
        en: "Alrohaimi Theory: Scholarly Epistemic Architecture",
        ar: "نظرية الرحيمي: البناء النظري الرصين",
      },
      tag: { en: "02 // ALROHAIMI THEORY", ar: "المرحلة 02 // البناء النظري" },
      caption: {
        en: "Crystallization of the Epistemic Architecture",
        ar: "تبلور النموذج المعرفي الأصيل",
      },
    },
    {
      src: leadershipLightImg,
      alt: {
        en: "Civilizational Impact: Conscious Leadership Academy",
        ar: "الأثر الحضاري: المدرسة السعودية للقيادة الواعية",
      },
      tag: { en: "03 // CIVILIZATIONAL APEX", ar: "المرحلة 03 // صناعة الأثر" },
      caption: {
        en: "Executive Impact & Enduring Value",
        ar: "الأثر التنفيذي والقيمة المستدامة",
      },
    },
  ];

  const storyPhases = [
    {
      num: "01",
      title: ar ? "المرحلة 01: من شح الموارد إلى قراءة الواقع" : "Phase 01: Reading Reality in Scarcity",
      narrative: ar
        ? "بدأت الفكرة في بيئة شحيحة الموارد، حيث لم تكن القدرة كامنة في الوفرة، بل في قراءة الواقع، وإدارة الممكن، والتكيف والابتكار وصناعة القيمة من المحدود."
        : "The idea originated in an environment of scarce resources, where capability was not born of abundance, but from reading reality, managing the possible, and engineering value from the limited.",
      tag: ar ? "نقطة الانطلاق" : "The Genesis",
      quote: ar ? "القدرة تبدأ من قراءة الواقع لا من الوفرة" : "Capability begins by reading reality, not abundance.",
    },
    {
      num: "02",
      title: ar ? "المرحلة 02: من التجربة إلى البناء النظري الرصين" : "Phase 02: From Experience to Scholarly Theorizing",
      narrative: ar
        ? "من التجربة نشأ سؤال أوسع: كيف يمكن تحويل الإمكان الكامن إلى قدرة حقيقية؟ هنا تبلورت نظرية الرحيمي كبناء فكري يربط الكمون بالإدراك والمعنى والقرار."
        : "From this experience emerged the governing inquiry: How does latent potential become realized capability? Alrohaimi Theory was forged as a rigorous intellectual architecture.",
      tag: ar ? "التنظير الأصيل" : "Original Theorizing",
      quote: ar ? "تحويل الكمون الإنساني إلى بنية معرفية أصيلة" : "Transforming latent capability into rigorous epistemic architecture.",
    },
    {
      num: "03",
      title: ar ? "المرحلة 03: من النماذج إلى الأثر الحضاري العالمي" : "Phase 03: Measurable Civilizational Impact",
      narrative: ar
        ? "تحويل النظريات إلى أبحاث محكمة، ومدرسة للقيادة الواعية، ومؤشرات قياس معيارية تسهم في صياغة مستقبل أكثر إنسانية يتجاوز حدود المكان."
        : "Deploying theories into empirical research, executive leadership academies, and diagnostic indicators that forge enduring human-centered civilizational impact.",
      tag: ar ? "الأثر العالمي" : "Global Impact",
      quote: ar ? "صناعة أثر حضاري مستدام يتجاوز حدود المكان" : "Forging enduring civilizational impact beyond space and time.",
    },
  ];

  // Keep phase ref in sync
  useEffect(() => {
    activePhaseRef.current = activeStoryPhase;
  }, [activeStoryPhase]);

  // Cinematic Theatrical Curtain Transition Function
  const triggerCurtainTransition = (newIdx: number) => {
    if (newIdx === activePhaseRef.current || isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    // Step 1: Draw curtains closed
    setCurtainState("closing");

    setTimeout(() => {
      // Step 2: Swap active photo behind closed curtains
      setCurrentImageIndex(newIdx);
      activePhaseRef.current = newIdx;
      setActiveStoryPhase(newIdx);
      startTimeRef.current = Date.now();
      setProgress(0);

      // Step 3: Part curtains open to reveal new image
      setCurtainState("opening");

      setTimeout(() => {
        setCurtainState("idle");
        isTransitioningRef.current = false;
      }, 450);
    }, 420);
  };

  // Gentle Auto-Progression of Phases (1 -> 2 -> 3 -> 1)
  useEffect(() => {
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      if (elapsed >= PHASE_DURATION) {
        const next = (activePhaseRef.current + 1) % 3;
        triggerCurtainTransition(next);
      } else {
        setProgress(Math.min(100, (elapsed / PHASE_DURATION) * 100));
      }
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const handleSelectPhase = (idx: number) => {
    triggerCurtainTransition(idx);
  };

  // 3D Mouse Parallax calculation
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = imageCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

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

  const pillarIcons = [
    <Award key="award" size={18} className="text-amber-700 transition-transform duration-300 group-hover:scale-110" />,
    <Sparkles key="sparkles" size={18} className="text-amber-700 transition-transform duration-300 group-hover:scale-110" />,
    <Compass key="compass" size={18} className="text-amber-700 transition-transform duration-300 group-hover:rotate-45" />,
    <Globe2 key="globe" size={18} className="text-amber-700 transition-transform duration-300 group-hover:scale-110" />,
  ];

  return (
    <section className="relative overflow-hidden border-b border-amber-900/10 bg-[#f5f0e6] py-20 lg:py-28">
      {/* Sunlit Desert Atmospheric Ambient Radiance */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[550px] w-[550px] rounded-full bg-amber-400/12 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-amber-300/12 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* =========================================================================
              LEFT COLUMN: 3D Interactive Showcase with Theatrical Curtain Motion Reveal
              ========================================================================= */}
          <div
            className="group relative lg:col-span-6"
            style={{ perspective: 1200 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Architectural Floating Gold Frame in Background */}
            <div
              className="absolute -inset-4 rounded-3xl border-2 border-amber-600/30 transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:translate-y-6"
              style={{
                transform: `rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg) translateZ(-20px)`,
              }}
            />

            {/* Main Image Stage Container with 3D Depth */}
            <div
              ref={imageCardRef}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`,
                transformStyle: "preserve-3d",
              }}
              className="relative overflow-hidden rounded-3xl border-2 border-amber-600/35 bg-[#0c1836] shadow-elevated transition-transform duration-200 ease-out aspect-[16/10]"
            >
              {/* Active Photographic Layer */}
              <img
                src={phaseImages[currentImageIndex].src}
                alt={phaseImages[currentImageIndex].alt[lang]}
                width={1536}
                height={1024}
                className={`h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 ${
                  curtainState === "opening" ? "scale-105" : "scale-100"
                }`}
              />

              {/* Dynamic Specular Sunlight Sheen following mouse */}
              <div
                className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 70%)`,
                  opacity: glarePos.opacity,
                }}
              />

              {/* Top-Right Floating Phase Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-white/30 bg-black/40 px-3.5 py-1 text-[10px] font-mono font-bold tracking-wider text-amber-300 shadow-md backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{phaseImages[currentImageIndex].tag[lang]}</span>
              </div>

              {/* Bottom Subtle Gradient Shade for text contrast */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Bottom-Right Photo Caption */}
              <div className="absolute bottom-3.5 right-4 z-20 hidden sm:block text-right">
                <p className="font-mono text-[10px] uppercase tracking-wider text-amber-200/90 font-semibold drop-shadow-sm">
                  {phaseImages[currentImageIndex].caption[lang]}
                </p>
              </div>

              {/* =====================================================================
                  THEATRICAL DUAL CURTAIN REVEAL MECHANISM
                  ===================================================================== */}
              {/* Left Curtain Blade */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-30 w-1/2 bg-gradient-to-r from-[#0c1836] via-[#162752] to-[#b88a3b] shadow-2xl transition-transform duration-400 ease-in-out border-r border-amber-400/80"
                style={{
                  transform:
                    curtainState === "closing"
                      ? "translateX(0%)"
                      : "translateX(-100%)",
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.25),transparent_70%)]" />
              </div>

              {/* Right Curtain Blade */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-30 w-1/2 bg-gradient-to-l from-[#0c1836] via-[#162752] to-[#b88a3b] shadow-2xl transition-transform duration-400 ease-in-out border-l border-amber-400/80"
                style={{
                  transform:
                    curtainState === "closing"
                      ? "translateX(0%)"
                      : "translateX(100%)",
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.25),transparent_70%)]" />
              </div>

              {/* Central Golden Laser Seam (Flashes at center meeting point) */}
              <div
                className={`pointer-events-none absolute inset-y-0 left-1/2 z-40 w-1 -translate-x-1/2 bg-gradient-to-b from-amber-200 via-white to-amber-200 shadow-[0_0_25px_#ffffff] transition-opacity duration-200 ${
                  curtainState === "closing" ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Vision 2030 Floating Badge with 3D Elevation & Beacon */}
            <div
              style={{
                transform: `rotateX(${rotateX * 0.8}deg) rotateY(${rotateY * 0.8}deg) translateZ(35px)`,
              }}
              className="absolute -bottom-3 -left-3 z-30 flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#b88a3b] to-[#996515] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-lg shadow-amber-900/25 backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
              </span>
              <span>{ar ? "رؤية المملكة 2030" : "Vision 2030 Aligned"}</span>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Narrative Controller with Enhanced Visible Title & Stepper
              ========================================================================= */}
          <div className="lg:col-span-6">
            {/* Enhanced Visible Section Label Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/20 bg-white/95 px-4 py-1.5 shadow-xs backdrop-blur-md">
              <span className="size-2 rounded-full bg-amber-600 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                {ar ? "قصة المركز والمنطلق الحضاري" : "The Narrative Arc // Our Story"}
              </span>
            </div>

            {/* Magnified & High-Visibility Display Title */}
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c1836] leading-[1.12] tracking-tight">
              {ar ? (
                <>
                  من أصالة الصحراء{" "}
                  <span className="gold-text-light block sm:inline">إلى صناعة الأثر</span>
                </>
              ) : (
                <>
                  From the Desert{" "}
                  <span className="gold-text-light block sm:inline">to Enduring Impact</span>
                </>
              )}
            </h2>

            {/* High-Clarity Philosophical Sub-heading */}
            <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-[#4e5e7b] font-medium max-w-[55ch]">
              {ar
                ? "كيف تحولت تجربة قراءة الواقع وإدارة الممكن في بيئة شحيحة الموارد إلى بناء نظري ومؤسسي يصنع أثراً حضارياً مستداماً."
                : "How reading reality and managing scarcity in the Arabian desert forged an original epistemic architecture for civilizational transformation."}
            </p>

            {/* 3 Phases Animated Tabs with Countdown Beam */}
            <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 border-b border-amber-900/15 pb-4">
              {storyPhases.map((phase, idx) => {
                const isActive = activeStoryPhase === idx;
                return (
                  <button
                    key={phase.num}
                    onClick={() => handleSelectPhase(idx)}
                    className={`group relative flex items-center gap-2 rounded-full px-5 py-2 font-mono text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[#b88a3b] text-white shadow-gold scale-105"
                        : "border border-amber-900/20 bg-white/90 text-[#4e5e7b] hover:text-[#0c1836] hover:border-amber-600/40 hover:bg-white"
                    }`}
                    aria-label={`Switch to Phase ${idx + 1}`}
                  >
                    <span>{phase.num}</span>
                    <span className="hidden sm:inline text-[11px] font-medium opacity-90">
                      {phase.tag}
                    </span>

                    {/* Active Phase Countdown Laser Beam */}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-white/80 overflow-hidden">
                        <span
                          className="block h-full bg-amber-200 transition-all duration-75"
                          style={{ width: `${progress}%` }}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Narrative Card with Smooth Transition & Amber Beacon */}
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-amber-900/15 bg-white p-7 shadow-luxury transition-all duration-500">
              {/* Top Accent Energy Line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-sky-600" />

              <div key={activeStoryPhase} className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-800">
                    {storyPhases[activeStoryPhase].tag}
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-slate-400">
                    STAGE {storyPhases[activeStoryPhase].num} OF 03
                  </span>
                </div>

                <h3 className="mt-2 font-display text-2xl font-bold text-[#0c1836] transition-colors">
                  {storyPhases[activeStoryPhase].title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#4e5e7b]">
                  {storyPhases[activeStoryPhase].narrative}
                </p>

                {/* Conceptual Wisdom Callout */}
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-amber-50/70 px-3.5 py-2 border border-amber-900/10">
                  <Sparkles size={14} className="text-amber-600 shrink-0" />
                  <p className="font-display text-xs italic font-semibold text-amber-900">
                    “{storyPhases[activeStoryPhase].quote}”
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Pillars of Vision Cards with 3D Hover Lift & Micro-Icons */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {story.pillars[lang].map((p, idx) => (
                <div
                  key={p.label}
                  className="group relative flex flex-col justify-between rounded-xl border border-amber-900/10 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-amber-600/50 hover:shadow-md hover:-translate-y-1.5"
                >
                  <div>
                    <div className="mb-2 grid size-7 place-items-center rounded-lg bg-amber-50 border border-amber-900/10 group-hover:bg-amber-100/60 transition-colors">
                      {pillarIcons[idx]}
                    </div>
                    <p className="font-display text-sm font-bold text-[#0c1836] transition-colors group-hover:text-amber-800">
                      {p.label}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#4e5e7b]">
                      {p.text}
                    </p>
                  </div>

                  {/* Micro Glow Bottom Line on Hover */}
                  <div className="mt-2.5 h-0.5 w-0 bg-amber-600 rounded-full transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>

            {/* CTA Link with Smooth Hover Translation */}
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-display text-sm font-bold text-amber-800 transition hover:text-amber-950"
            >
              <span className="group-hover:underline underline-offset-4">
                {ar ? "اقرأ القصة الكاملة وفلسفة المركز" : "Read the Center's Full Story"}
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
