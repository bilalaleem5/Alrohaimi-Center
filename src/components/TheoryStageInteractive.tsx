import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play, Pause, Sparkles, Activity, ShieldCheck, Compass } from "lucide-react";
import { theoryStages } from "../lib/content";
import { useLanguage } from "./site";

export function TheoryStageInteractive() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const stages = theoryStages[lang];
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % stages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  const current = stages[activeIdx];
  const progressPercent = ((activeIdx + 1) / stages.length) * 100;

  // Astrolabe geometry angles for 6 stages
  const angles = [0, 60, 120, 180, 240, 300];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#0c1836]/10 bg-[#fbf9f5] p-6 lg:p-12 shadow-sm">
      {/* Subtle ambient golden gradient ring in the corner */}
      <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-gradient-to-br from-[#b88a3b]/10 via-[#d4af37]/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-gradient-to-tr from-[#0c1836]/5 via-[#b88a3b]/5 to-transparent blur-3xl" />

      {/* Top Header & Interactive Controls */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-6 border-b border-[#0c1836]/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b88a3b]/30 bg-[#f5f0e6] px-4 py-1 text-xs font-bold text-[#b88a3b]">
            <Compass size={14} className="animate-spin text-[#b88a3b]" style={{ animationDuration: "16s" }} />
            <span>
              {ar ? "المسار الحركي المعرفي لنظرية الرحيمي" : "Alrohaimi Theory Dynamic Kinetic Engine"}
            </span>
          </div>
          <h3 className="mt-3 font-display text-3xl font-black text-[#0c1836] md:text-4xl">
            {current.title}
          </h3>
          <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-[#b88a3b]">
            {ar ? `المرحلة المعرفية 0${activeIdx + 1} من 06` : `Epistemic Stage 0${activeIdx + 1} of 06`}
          </p>
        </div>

        {/* Playback & Step Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[#0c1836]/15 bg-white/90 px-4 text-xs font-bold text-[#0c1836] transition-all hover:border-[#b88a3b] hover:bg-white shadow-xs"
            title={isPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isPlaying ? <Pause size={14} className="text-[#b88a3b]" /> : <Play size={14} className="text-[#b88a3b]" />}
            <span>{isPlaying ? (ar ? "إيقاف مؤقت" : "Pause") : (ar ? "تشغيل تلقائي" : "Auto-advance")}</span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                setActiveIdx((prev) => (prev === 0 ? stages.length - 1 : prev - 1));
                setIsPlaying(false);
              }}
              className="grid size-10 place-items-center rounded-full border border-[#0c1836]/15 bg-white text-[#0c1836] transition hover:border-[#b88a3b] hover:text-[#b88a3b] hover:scale-105 shadow-xs"
              aria-label="Previous stage"
            >
              {ar ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            </button>
            <button
              onClick={() => {
                setActiveIdx((prev) => (prev + 1) % stages.length);
                setIsPlaying(false);
              }}
              className="grid size-10 place-items-center rounded-full border border-[#0c1836]/15 bg-white text-[#0c1836] transition hover:border-[#b88a3b] hover:text-[#b88a3b] hover:scale-105 shadow-xs"
              aria-label="Next stage"
            >
              {ar ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Laser Progression Ribbon */}
      <div className="relative my-8">
        {/* Track Line */}
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[#0c1836]/10">
          <div
            className="h-full bg-gradient-to-r from-[#b88a3b] via-[#d4af37] to-[#0c1836] transition-all duration-700 ease-out shadow-xs"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* 6 Stage Interactive Trigger Nodes */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stages.map((stg, i) => {
            const isActive = i === activeIdx;
            const isPassed = i < activeIdx;
            return (
              <button
                key={stg.id}
                onClick={() => {
                  setActiveIdx(i);
                  setIsPlaying(false);
                }}
                className={`group relative flex flex-col items-start rounded-2xl p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-2 border-[#b88a3b] bg-white shadow-md scale-[1.02]"
                    : isPassed
                    ? "border border-[#b88a3b]/30 bg-white/70 hover:border-[#b88a3b] shadow-xs"
                    : "border border-[#0c1836]/10 bg-[#f5f0e6]/50 hover:border-[#b88a3b]/40"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`font-mono text-xs font-black ${
                      isActive ? "text-[#b88a3b]" : "text-[#718096]"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`size-2 rounded-full transition-transform ${
                      isActive
                        ? "bg-[#b88a3b] ring-4 ring-[#b88a3b]/20 scale-125"
                        : isPassed
                        ? "bg-[#b88a3b]/60"
                        : "bg-[#0c1836]/20"
                    }`}
                  />
                </div>
                <span
                  className={`mt-2 line-clamp-1 font-display text-sm font-bold transition-colors ${
                    isActive ? "text-[#0c1836]" : "text-[#4e5e7b] group-hover:text-[#0c1836]"
                  }`}
                >
                  {stg.title}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-[#b88a3b]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Epistemic Stage Showcase Panel */}
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#0c1836]/10 bg-white p-8 lg:p-12 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          {/* Left Column: Stage Exposition */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#b88a3b]">
                {ar ? `المرحلة ${current.num} · المنظومة المعرفية` : `Stage ${current.num} · Theoretical Construct`}
              </span>
              <span className="size-1 rounded-full bg-[#b88a3b]" />
              <span className="text-xs font-bold text-[#718096]">
                {ar ? "نظرية الرحيمي" : "Alrohaimi Theory"}
              </span>
            </div>

            <h4 className="mt-3 font-display text-2xl font-bold leading-tight text-[#0c1836] md:text-3xl">
              {current.subtitle}
            </h4>

            <div className="mt-4 h-0.5 w-16 bg-[#b88a3b]" />

            <p className="mt-5 text-base leading-relaxed text-[#4e5e7b] md:text-lg">
              {current.detail}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#0c1836]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0c1836]/10 bg-[#fbf9f5] px-3.5 py-1.5">
                <ShieldCheck size={14} className="text-[#b88a3b]" />
                <span>{ar ? "موثق أكاديمياً" : "Academically Verified"}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0c1836]/10 bg-[#fbf9f5] px-3.5 py-1.5">
                <Activity size={14} className="text-[#0c1836]" />
                <span>{ar ? "مؤشر تطبيقي فعال" : "Empirical Calibration Active"}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Diagnostic & Radial Telemetry Display */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-[#b88a3b]/25 bg-gradient-to-br from-[#fbf9f5] via-white to-[#f5f0e6] p-7 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#0c1836]/10 pb-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#b88a3b]">
                  {ar ? "مقياس التحقق الميداني" : "Diagnostic Metric Output"}
                </span>
                <span className="font-mono text-xs font-bold text-[#0c1836]">
                  {current.num} / 06
                </span>
              </div>

              {/* Large Metric Display */}
              <div className="my-6">
                <p className="font-display text-2xl font-black text-[#0c1836]">
                  {current.metric}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#4e5e7b]">
                  {ar
                    ? "يقيس هذا المعيار درجة النضج الإدراكي والانتقال الفعلي من مرحلة الكمون إلى الأثر الحضاري المستدام."
                    : "Calibrates the maturity of transition from latent capability into sovereign decision and measurable societal footprint."}
                </p>
              </div>

              {/* Epistemic Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-mono font-bold text-[#718096]">
                  <span>{ar ? "اكتمال المسار" : "Continuum Progress"}</span>
                  <span className="text-[#b88a3b]">{Math.round(progressPercent)}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#0c1836]/10">
                  <div
                    className="h-full bg-[#b88a3b] transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[#0c1836]/10 pt-4 text-[11px]">
                <span className="text-[#718096]">
                  {ar ? "مركز الدكتور عبدالمحسن الرحيمي" : "Alrohaimi Center Riyadh"}
                </span>
                <span className="font-mono font-bold text-[#b88a3b]">alrohaimitheory.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
