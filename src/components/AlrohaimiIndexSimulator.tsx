import { useState, useRef } from "react";
import { Gauge, Sparkles, Activity, ShieldCheck, Compass, RotateCcw } from "lucide-react";
import { useLanguage } from "./site";

export function AlrohaimiIndexSimulator() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const [metrics, setMetrics] = useState({
    sovereignty: 88,
    systems: 82,
    resilience: 92,
    latency: 86,
  });

  const [activePreset, setActivePreset] = useState<string>("custom");
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Smooth interpolation animation when selecting presets
  const animateTo = (target: typeof metrics, presetName: string) => {
    setActivePreset(presetName);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const start = { ...metrics };
    const startTime = performance.now();
    const duration = 650; // ms

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);

      setMetrics({
        sovereignty: Math.round(start.sovereignty + (target.sovereignty - start.sovereignty) * ease),
        systems: Math.round(start.systems + (target.systems - start.systems) * ease),
        resilience: Math.round(start.resilience + (target.resilience - start.resilience) * ease),
        latency: Math.round(start.latency + (target.latency - start.latency) * ease),
      });

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  const handleSliderChange = (key: keyof typeof metrics, val: number) => {
    setActivePreset("custom");
    setMetrics((prev) => ({ ...prev, [key]: val }));
  };

  const compositeScore = Math.round(
    (metrics.sovereignty * 0.3 +
      metrics.systems * 0.25 +
      metrics.resilience * 0.25 +
      metrics.latency * 0.2) *
      10
  ) / 10;

  // Radar geometry (center: 160, 160, max radius: 110)
  const cx = 160;
  const cy = 160;
  const maxR = 110;

  const getPoint = (score: number, angleDeg: number) => {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    const r = (score / 100) * maxR;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
      coordStr: `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`,
    };
  };

  const ptSov = getPoint(metrics.sovereignty, 0); // Top
  const ptSys = getPoint(metrics.systems, 90); // Right
  const ptRes = getPoint(metrics.resilience, 180); // Bottom
  const ptLat = getPoint(metrics.latency, 270); // Left
  const polygonPoints = `${ptSov.coordStr} ${ptSys.coordStr} ${ptRes.coordStr} ${ptLat.coordStr}`;

  return (
    <div className="relative">
      {/* Delicate Ambient Caustic Lights */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-200/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-[400px] w-[400px] rounded-full bg-sky-200/10 blur-3xl" />

      {/* =====================================================================
          1. SIMULATOR TELEMETRY HEADER (Open Architecture // Zero Cards)
          ===================================================================== */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-amber-900/15 pb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-amber-600" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
              {ar ? "أداة النمذجة التشخيصية الحية (AICT)" : "LIVE DIAGNOSTIC MODEL // AICT SIMULATOR"}
            </span>
          </div>

          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#0c1836]">
            {ar ? "نموذج الجاهزية والتحول الحضاري" : "Institutional Transformational Readiness Model"}
          </h3>
          <p className="mt-1 text-sm text-[#4e5e7b] max-w-xl">
            {ar
              ? "معايرة فورية للقدرة السيادية على توجيه القرار وتوليد الأثر في بيئات التعقيد والتسارع التقني."
              : "Calibrate institutional sovereignty, adaptive feedback loops, and civilizational momentum in real-time."}
          </p>

          {/* Diagnostic Presets (Architectural Hairline Pills // Zero Clutter) */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mr-1">
              {ar ? "سيناريوهات معيارية:" : "Diagnostic Scenarios:"}
            </span>

            <button
              type="button"
              onClick={() =>
                animateTo({ sovereignty: 96, systems: 94, resilience: 95, latency: 96 }, "vision")
              }
              className={`group flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none ${
                activePreset === "vision"
                  ? "bg-[#0c1836] text-amber-300 shadow-sm"
                  : "bg-amber-900/5 text-[#0c1836] hover:bg-amber-900/10 border border-amber-900/10"
              }`}
            >
              <Sparkles size={12} className={activePreset === "vision" ? "text-amber-300" : "text-amber-700"} />
              <span>{ar ? "رؤية 2030 السيادية (95.4)" : "Saudi Vision 2030 (95.4)"}</span>
            </button>

            <button
              type="button"
              onClick={() =>
                animateTo({ sovereignty: 91, systems: 86, resilience: 88, latency: 84 }, "thinktank")
              }
              className={`group flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none ${
                activePreset === "thinktank"
                  ? "bg-[#0c1836] text-sky-300 shadow-sm"
                  : "bg-sky-900/5 text-[#0c1836] hover:bg-sky-900/10 border border-sky-900/10"
              }`}
            >
              <Activity size={12} className={activePreset === "thinktank" ? "text-sky-300" : "text-sky-700"} />
              <span>{ar ? "صرح أكاديمي سيادي (87.7)" : "Sovereign Think Tank (87.7)"}</span>
            </button>

            <button
              type="button"
              onClick={() =>
                animateTo({ sovereignty: 84, systems: 80, resilience: 97, latency: 92 }, "crisis")
              }
              className={`group flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none ${
                activePreset === "crisis"
                  ? "bg-[#0c1836] text-emerald-300 shadow-sm"
                  : "bg-emerald-900/5 text-[#0c1836] hover:bg-emerald-900/10 border border-emerald-900/10"
              }`}
            >
              <ShieldCheck size={12} className={activePreset === "crisis" ? "text-emerald-300" : "text-emerald-700"} />
              <span>{ar ? "صمود الأزمات الوجودية (88.3)" : "Existential Crisis Resilience (88.3)"}</span>
            </button>

            {activePreset !== "custom" && (
              <button
                type="button"
                onClick={() =>
                  animateTo({ sovereignty: 88, systems: 82, resilience: 92, latency: 86 }, "custom")
                }
                className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-400 hover:text-amber-800 ml-1 transition-colors"
                title={ar ? "إعادة الضبط" : "Reset custom"}
              >
                <RotateCcw size={11} />
                <span>{ar ? "إعادة ضبط" : "Reset"}</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Composite Index Gauge - Typographic Masterpiece */}
        <div className="flex items-center gap-5 border-t lg:border-t-0 lg:border-l border-amber-900/15 pt-4 lg:pt-0 lg:pl-8 rtl:lg:border-l-0 rtl:lg:border-r rtl:lg:pl-0 rtl:lg:pr-8">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl sm:text-5xl font-black text-[#0c1836] tracking-tight">
                {compositeScore.toFixed(1)}
              </span>
              <span className="font-mono text-sm text-slate-400 font-bold">/100</span>
            </div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800 mt-0.5">
              {ar ? "المعدل التراكمي للجاهزية" : "COMPOSITE INDEX SCORE"}
            </p>
          </div>

          <div className="size-14 rounded-full border border-amber-900/20 bg-white grid place-items-center shadow-xs">
            <span className="font-mono text-xs font-black text-amber-800">
              {compositeScore >= 92 ? "AAA+" : compositeScore >= 85 ? "AA" : "A"}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. DYNAMIC WORKSPACE: 4 OPEN SLIDERS & KINETIC RADAR OBSERVATORY
          ===================================================================== */}
      <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left (7 Cols): 4 Open Dimension Sliders (HAIRLINE DIVIDERS // ZERO CARDS) */}
        <div className="lg:col-span-7 divide-y divide-amber-900/15">
          {/* Dimension 01: Cognitive Sovereignty */}
          <div
            onMouseEnter={() => setHoveredMetric("sovereignty")}
            onMouseLeave={() => setHoveredMetric(null)}
            className="py-5 first:pt-0 transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                  DIMENSION 01
                </span>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#0c1836]">
                  {ar ? "السيادة الإدراكية والاستقلال الخوارزمي" : "Cognitive Sovereignty & AI Independence"}
                </h4>
              </div>
              <span className="font-mono text-lg font-black text-amber-800">
                {metrics.sovereignty}%
              </span>
            </div>

            <div className="mt-3 relative flex items-center">
              <input
                type="range"
                min="40"
                max="100"
                value={metrics.sovereignty}
                onChange={(e) => handleSliderChange("sovereignty", Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-amber-900/15 accent-amber-600 focus:outline-none transition-all"
                aria-label="Cognitive Sovereignty slider"
              />
            </div>

            <p className="mt-2 text-xs text-[#4e5e7b] leading-relaxed">
              {ar
                ? "قدرة القادة والمؤسسة على اتخاذ قرارات مستقلة متحررة من الارتهان للأنظمة الخوارزمية المؤتمتة."
                : "Institutional capacity for autonomous judgment, critical discernment, and freedom from automated algorithmic capture."}
            </p>
          </div>

          {/* Dimension 02: Systems Adaptability */}
          <div
            onMouseEnter={() => setHoveredMetric("systems")}
            onMouseLeave={() => setHoveredMetric(null)}
            className="py-5 transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-sky-800 uppercase tracking-wider">
                  DIMENSION 02
                </span>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#0c1836]">
                  {ar ? "التكيف والتفكير المنظومي المعقد" : "Systems Adaptability & Emergent Dynamics"}
                </h4>
              </div>
              <span className="font-mono text-lg font-black text-sky-800">
                {metrics.systems}%
              </span>
            </div>

            <div className="mt-3 relative flex items-center">
              <input
                type="range"
                min="40"
                max="100"
                value={metrics.systems}
                onChange={(e) => handleSliderChange("systems", Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-sky-900/15 accent-sky-600 focus:outline-none transition-all"
                aria-label="Systems Adaptability slider"
              />
            </div>

            <p className="mt-2 text-xs text-[#4e5e7b] leading-relaxed">
              {ar
                ? "فهم شبكات التفاعل غير الخطية واستشراف الآثار المتتابعة للقرارات عبر مختلف القطاعات."
                : "Navigating non-linear feedback loops, emergent systemic interactions, and managing cascading institutional risk."}
            </p>
          </div>

          {/* Dimension 03: Existential Resilience */}
          <div
            onMouseEnter={() => setHoveredMetric("resilience")}
            onMouseLeave={() => setHoveredMetric(null)}
            className="py-5 transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                  DIMENSION 03
                </span>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#0c1836]">
                  {ar ? "المرونة الوجودية والكرامة الإنسانية" : "Existential Resilience & Human Dignity"}
                </h4>
              </div>
              <span className="font-mono text-lg font-black text-emerald-800">
                {metrics.resilience}%
              </span>
            </div>

            <div className="mt-3 relative flex items-center">
              <input
                type="range"
                min="40"
                max="100"
                value={metrics.resilience}
                onChange={(e) => handleSliderChange("resilience", Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-emerald-900/15 accent-emerald-600 focus:outline-none transition-all"
                aria-label="Existential Resilience slider"
              />
            </div>

            <p className="mt-2 text-xs text-[#4e5e7b] leading-relaxed">
              {ar
                ? "ثبات البوصلة القيمية وصلابة المعنى الإنساني تحت وطأة الضغوط والاضطرابات المتسارعة."
                : "Anchoring ethical purpose, civilizational identity, and human dignity amidst profound disruption and systemic shifts."}
            </p>
          </div>

          {/* Dimension 04: Latent Potential Mobilization */}
          <div
            onMouseEnter={() => setHoveredMetric("latency")}
            onMouseLeave={() => setHoveredMetric(null)}
            className="py-5 last:pb-0 transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                  DIMENSION 04
                </span>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#0c1836]">
                  {ar ? "تفعيل الإمكان الكامن وصناعة القيمة" : "Latent Potential Mobilization & Historic Impact"}
                </h4>
              </div>
              <span className="font-mono text-lg font-black text-amber-800">
                {metrics.latency}%
              </span>
            </div>

            <div className="mt-3 relative flex items-center">
              <input
                type="range"
                min="40"
                max="100"
                value={metrics.latency}
                onChange={(e) => handleSliderChange("latency", Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-amber-900/15 accent-amber-600 focus:outline-none transition-all"
                aria-label="Latent Potential Mobilization slider"
              />
            </div>

            <p className="mt-2 text-xs text-[#4e5e7b] leading-relaxed">
              {ar
                ? "استثمار الطاقات الكامنة واستخراج قيمة حضارية فارقة ومستدامة من الموارد المتاحة."
                : "Translating latent human and institutional capability into enduring, measurable civilizational value."}
            </p>
          </div>
        </div>

        {/* Right (5 Cols): Living 2026 Kinetic Radar Observatory (ZERO BOXES // 100% LIVING MOTION) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative size-[300px] sm:size-[340px] select-none">
            {/* Ambient Background Caustic Halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/15 via-sky-400/10 to-transparent blur-2xl" />

            <svg viewBox="0 0 320 320" className="w-full h-full overflow-visible">
              <defs>
                {/* Gradient for polygon fill */}
                <radialGradient id="radarFillGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#b88a3b" stopOpacity="0.35" />
                  <stop offset="70%" stopColor="#0c1836" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
                </radialGradient>

                {/* Laser scan line gradient */}
                <linearGradient id="scanBeamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#b88a3b" stopOpacity="0" />
                  <stop offset="70%" stopColor="#b88a3b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Rotating Outer Coordinate Ring with Degree Tick Marks */}
              <circle
                cx={cx}
                cy={cy}
                r="145"
                fill="none"
                stroke="#b88a3b"
                strokeWidth="0.8"
                strokeDasharray="2 6"
                className="opacity-25 animate-spin"
                style={{ animationDuration: "90s" }}
              />

              {/* Concentric Reference Scale Rings */}
              {[0.25, 0.5, 0.75, 1].map((pct, idx) => (
                <circle
                  key={idx}
                  cx={cx}
                  cy={cy}
                  r={maxR * pct}
                  fill="none"
                  stroke="#0c1836"
                  strokeWidth="0.8"
                  strokeDasharray={pct === 1 ? "none" : "3 4"}
                  className={pct === 1 ? "opacity-30" : "opacity-15"}
                />
              ))}

              {/* Orthogonal Coordinate Crosshairs */}
              <line x1={cx} y1={cy - maxR} x2={cx} y2={cy + maxR} stroke="#0c1836" strokeWidth="1" opacity="0.2" />
              <line x1={cx - maxR} y1={cy} x2={cx + maxR} y2={cy} stroke="#0c1836" strokeWidth="1" opacity="0.2" />

              {/* Diagonal Subtle Reference Lines */}
              <line x1={cx - 75} y1={cy - 75} x2={cx + 75} y2={cy + 75} stroke="#b88a3b" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.15" />
              <line x1={cx + 75} y1={cy - 75} x2={cx - 75} y2={cy + 75} stroke="#b88a3b" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.15" />

              {/* =============================================================
                  LIVING RADAR SCANNER BEAM (Continuous 360 Kinetic Sweep)
                  ============================================================= */}
              <g
                className="origin-center animate-spin"
                style={{
                  animationDuration: "5.5s",
                  animationTimingFunction: "linear",
                  transformOrigin: `${cx}px ${cy}px`,
                }}
              >
                <line
                  x1={cx}
                  y1={cy}
                  x2={cx}
                  y2={cy - maxR - 15}
                  stroke="url(#scanBeamGrad)"
                  strokeWidth="1.75"
                />
                <circle cx={cx} cy={cy - maxR - 15} r="3" fill="#f59e0b" />
              </g>

              {/* Dynamic Radar Polygon (Smooth Motion on Changes) */}
              <polygon
                points={polygonPoints}
                fill="url(#radarFillGrad)"
                stroke="#b88a3b"
                strokeWidth="2.5"
                strokeLinejoin="round"
                className="transition-all duration-500 ease-out"
              />

              {/* Polygon Vertex Nodes with Dynamic Pulsing */}
              {[
                { pt: ptSov, key: "sovereignty", color: "#b88a3b" },
                { pt: ptSys, key: "systems", color: "#0284c7" },
                { pt: ptRes, key: "resilience", color: "#059669" },
                { pt: ptLat, key: "latency", color: "#b88a3b" },
              ].map((node) => {
                const isHovered = hoveredMetric === node.key;
                return (
                  <g key={node.key} className="transition-all duration-300">
                    {isHovered && (
                      <circle
                        cx={node.pt.x}
                        cy={node.pt.y}
                        r="14"
                        fill={node.color}
                        fillOpacity="0.25"
                        className="animate-ping"
                      />
                    )}
                    <circle
                      cx={node.pt.x}
                      cy={node.pt.y}
                      r={isHovered ? "6.5" : "4.5"}
                      fill="#0c1836"
                      stroke={node.color}
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}

              {/* Central Core Dial */}
              <circle cx={cx} cy={cy} r="5" fill="#0c1836" />
              <circle cx={cx} cy={cy} r="9" stroke="#b88a3b" strokeWidth="1" opacity="0.4" />
            </svg>

            {/* Dimensional Cardinal Labels Floating Directly in Open Air */}
            <div className="absolute left-1/2 -top-5 -translate-x-1/2 text-center pointer-events-none">
              <span className={`font-mono text-[10px] font-bold uppercase tracking-wider block transition-colors ${
                hoveredMetric === "sovereignty" ? "text-amber-600 scale-110" : "text-amber-900"
              }`}>
                {ar ? "السيادة الإدراكية" : "SOVEREIGNTY"}
              </span>
              <span className="font-mono text-[9px] text-slate-400 font-semibold">{metrics.sovereignty}%</span>
            </div>

            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-start pointer-events-none">
              <span className={`font-mono text-[10px] font-bold uppercase tracking-wider block transition-colors ${
                hoveredMetric === "systems" ? "text-sky-600 scale-110" : "text-sky-900"
              }`}>
                {ar ? "الأنظمة" : "SYSTEMS"}
              </span>
              <span className="font-mono text-[9px] text-slate-400 font-semibold">{metrics.systems}%</span>
            </div>

            <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 text-center pointer-events-none">
              <span className={`font-mono text-[10px] font-bold uppercase tracking-wider block transition-colors ${
                hoveredMetric === "resilience" ? "text-emerald-600 scale-110" : "text-emerald-900"
              }`}>
                {ar ? "المرونة الوجودية" : "RESILIENCE"}
              </span>
              <span className="font-mono text-[9px] text-slate-400 font-semibold">{metrics.resilience}%</span>
            </div>

            <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-end pointer-events-none">
              <span className={`font-mono text-[10px] font-bold uppercase tracking-wider block transition-colors ${
                hoveredMetric === "latency" ? "text-amber-600 scale-110" : "text-amber-900"
              }`}>
                {ar ? "الكمون" : "LATENCY"}
              </span>
              <span className="font-mono text-[9px] text-slate-400 font-semibold">{metrics.latency}%</span>
            </div>
          </div>

          {/* Real-Time Strategic Diagnostic Readiness Telemetry Banner */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-white/80 px-4 py-1.5 shadow-xs backdrop-blur-sm">
              <Compass size={14} className="text-amber-700 animate-spin" style={{ animationDuration: "16s" }} />
              <span className="font-display text-xs font-bold text-[#0c1836]">
                {compositeScore >= 92
                  ? ar
                    ? "مستوى الجاهزية: تحول حضاري رائد ومستدام (AAA+)"
                    : "Readiness: Pioneering Civilizational Flourishing (AAA+)"
                  : compositeScore >= 85
                  ? ar
                    ? "مستوى الجاهزية: تحول مؤسسي سيادي متقدم (AA)"
                    : "Readiness: Sovereign Transformational Momentum (AA)"
                  : ar
                    ? "مستوى الجاهزية: قيد التطوير المنهجي والتأصيل (A)"
                    : "Readiness: Systematic Maturation Underway (A)"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
