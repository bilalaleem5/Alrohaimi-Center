import { useState, useEffect, useRef, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "./site";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Activity,
  Atom,
  Binary,
} from "lucide-react";

interface Discipline2060 {
  id: string;
  code: string;
  num: string;
  name: { en: string; ar: string };
  category: { en: string; ar: string };
  desc: { en: string; ar: string };
  guidingQuestion: { en: string; ar: string };
  formula: string;
  formulaNote: { en: string; ar: string };
  lab: { en: string; ar: string };
  metrics: { label: { en: string; ar: string }; value: string; pct: number }[];
  accentColor: string;
  glowColor: string;
  orbitAngle: number;
}

const DISCIPLINES: Discipline2060[] = [
  {
    id: "theory",
    code: "CORE-01",
    num: "01",
    name: { en: "Alrohaimi Theory", ar: "نظرية الرحيمي" },
    category: { en: "Foundational Epistemology", ar: "البناء الإبستيمولوجي التأسيسي" },
    desc: {
      en: "A seminal intellectual architecture deciphering the six-stage movement from latent human potential to conscious civilizational transformation.",
      ar: "بناء فكري تأسيسي وأصيل يستكشف حركة المراحل الست من الكمون الإنساني إلى صناعة التحول والأثر الحضاري المستدام.",
    },
    guidingQuestion: {
      en: "How does latent human capability transform into enduring civilizational impact?",
      ar: "كيف يتحول الإمكان الإنساني الكامن إلى قدرة وفعل وأثر حضاري عابر للزمان والمكان؟",
    },
    formula: "L₀ ➔ Cognition ➔ Meaning ➔ Decision ➔ Transformation ➔ Ω(Impact)",
    formulaNote: {
      en: "Continuous Epistemic Pathway from Latency to Apex",
      ar: "المسار المعرفي المستمر من الكمون إلى صناعة الأثر",
    },
    lab: { en: "Knowledge, Theories & Research Unit", ar: "وحدة المعرفة والنظريات والبحوث" },
    metrics: [
      { label: { en: "Theoretical Rigor", ar: "الرصانة المعرفية" }, value: "99.8%", pct: 99 },
      { label: { en: "Epistemic Stages", ar: "المراحل التأسيسية" }, value: "06 Stages", pct: 100 },
    ],
    accentColor: "#b88a3b",
    glowColor: "rgba(184, 138, 59, 0.45)",
    orbitAngle: 0,
  },
  {
    id: "sovereignty",
    code: "CORE-02",
    num: "02",
    name: { en: "Cognitive Sovereignty", ar: "السيادة الإدراكية" },
    category: { en: "Algorithmic Independence", ar: "الاستقلال المعرفي والخوارزمي" },
    desc: {
      en: "Safeguarding human and institutional decision autonomy against algorithmic capture, synthetic bias, and epistemic saturation.",
      ar: "صيانة استقلالية القرار الإنساني والمؤسسي وحمايته من الارتهان الخوارزمي والتشتت المعرفي في عصر الذكاء الاصطناعي.",
    },
    guidingQuestion: {
      en: "How do sovereign leaders retain critical judgment amidst algorithmic hegemony?",
      ar: "كيف يصون القادة استقلالية قراراتهم ونزاهة إدراكهم في بيئة تهيمن عليها الخوارزميات؟",
    },
    formula: "Ψ_Sovereignty = lim[AI → ∞] (Human Agency / Algorithmic Capture) ≥ 1.0",
    formulaNote: {
      en: "Sovereign Decision Autonomy Threshold in AI Environments",
      ar: "معيار صيانة القرار المستقل في عصر الذكاء الاصطناعي",
    },
    lab: { en: "Cognitive Sovereignty Lab", ar: "مختبر السيادة الإدراكية" },
    metrics: [
      { label: { en: "Algorithmic Autonomy", ar: "الاستقلال الخوارزمي" }, value: "100%", pct: 100 },
      { label: { en: "Audit Protocols", ar: "بروتوكولات التدقيق" }, value: "Active", pct: 95 },
    ],
    accentColor: "#0284c7",
    glowColor: "rgba(2, 132, 199, 0.45)",
    orbitAngle: 60,
  },
  {
    id: "leadership",
    code: "CORE-03",
    num: "03",
    name: { en: "Conscious Leadership", ar: "القيادة الواعية" },
    category: { en: "Executive Wisdom & Ethics", ar: "الرشاد القيادي والأخلاقي" },
    desc: {
      en: "Reconceptualizing executive stewardship as heightened self-awareness, moral clarity, and non-linear strategic orchestration.",
      ar: "إعادة بناء الممارسة القيادية بوصفها وعياً ذاتياً عميقاً ورشاداً أخلاقياً وقيادة للتحولات غير الخطية.",
    },
    guidingQuestion: {
      en: "How is heightened perception translated into sound ethical decisions under high-stakes pressure?",
      ar: "كيف يتحول الإدراك العميق إلى قرارات أخلاقية رشيدة تحت ضغوط عدم اليقين؟",
    },
    formula: "Λ_Leadership = ∫ (Perceptual Clarity ⊗ Ethical Meaning ⊗ Strategic Will) dt",
    formulaNote: {
      en: "Integration of Awareness, Purpose, and Execution",
      ar: "تكامل الوعي والمعنى والإرادة الاستراتيجية",
    },
    lab: { en: "Saudi School of Conscious Leadership", ar: "المدرسة السعودية للقيادة الواعية" },
    metrics: [
      { label: { en: "Leadership Immersions", ar: "البرامج التنفيذية" }, value: "08 Tracks", pct: 92 },
      { label: { en: "Decision Soundness", ar: "رشاد القرار" }, value: "Optimal", pct: 96 },
    ],
    accentColor: "#7c3aed",
    glowColor: "rgba(124, 58, 237, 0.45)",
    orbitAngle: 120,
  },
  {
    id: "systems",
    code: "CORE-04",
    num: "04",
    name: { en: "Complex Systems", ar: "الأنظمة المعقدة" },
    category: { en: "Adaptive Interdependency", ar: "الشبكات التكيفية والاعتماد المتبادل" },
    desc: {
      en: "Modeling non-linear feedback dynamics, systemic tipping points, and emergent socio-technical behaviors across institutions.",
      ar: "نمذجة حلقات التغذية الراجعة غير الخطية ونقاط التحول الحرجة وديناميكيات الانبثاق في البيئات المؤسسية.",
    },
    guidingQuestion: {
      en: "How do hidden institutional feedback loops drive sudden structural shifts?",
      ar: "كيف تؤثر حلقات الاعتماد المتبادل الخفية في توجيه مسارات التحول المنظومي؟",
    },
    formula: "∇ × F_Systems = ∂(Emergent Behavior)/∂t + ∑ Feedback_Loops",
    formulaNote: {
      en: "Dynamic Non-linear Feedback and Institutional Adaptation",
      ar: "ديناميكيات التكيف والانبثاق في الأنظمة المركبة",
    },
    lab: { en: "Living Systems & Biological Cognition Lab", ar: "مختبر الأنظمة الحية والإدراك البيولوجي" },
    metrics: [
      { label: { en: "Network Topology", ar: "طوبولوجيا الشبكات" }, value: "Adaptive", pct: 94 },
      { label: { en: "Intervention Leverage", ar: "نقاط التأثير الفارق" }, value: "High", pct: 88 },
    ],
    accentColor: "#059669",
    glowColor: "rgba(5, 150, 105, 0.45)",
    orbitAngle: 180,
  },
  {
    id: "resilience",
    code: "CORE-05",
    num: "05",
    name: { en: "Existential Resilience", ar: "المرونة الوجودية" },
    category: { en: "Human Dignity & Fortitude", ar: "الكرامة الإنسانية والمعنى الوجودي" },
    desc: {
      en: "Unearthing humanity's profound capacity to absorb systemic shock, preserve moral dignity, and extract strength from adversity.",
      ar: "استكشاف قدرة الإنسان والمجتمعات على استيعاب الصدمات وصيانة الكرامة وتحويل الضغوط إلى طاقة نهوض.",
    },
    guidingQuestion: {
      en: "What anchors moral fortitude and human purpose when institutional frameworks fracture?",
      ar: "ما الذي يثبت الكرامة والمعنى الإنساني حين تتداعى البنى المادية والمؤسسية؟",
    },
    formula: "R_Existential = (Existential Meaning × Inviolable Dignity) / (Systemic Entropy)",
    formulaNote: {
      en: "Preservation of Purpose Under Environmental Stress",
      ar: "معادلة ثبات المعنى والكرامة في مواجهة التغيرات المتسارعة",
    },
    lab: { en: "Existential Resilience Literature Lab", ar: "مختبر أدب المرونة الوجودية" },
    metrics: [
      { label: { en: "Ontological Fortitude", ar: "الثبات الوجودي" }, value: "Unbounded", pct: 98 },
      { label: { en: "Stress Absorption", ar: "امتصاص الصدمات" }, value: "97.4%", pct: 97 },
    ],
    accentColor: "#d97706",
    glowColor: "rgba(217, 119, 6, 0.45)",
    orbitAngle: 240,
  },
  {
    id: "transformation",
    code: "CORE-06",
    num: "06",
    name: { en: "Civilizational Transformation", ar: "التحول الحضاري" },
    category: { en: "Macro Strategic Impact", ar: "الأثر الاستراتيجي ورؤية 2030" },
    desc: {
      en: "Translating theoretical breakthroughs into sovereign national metrics, executive governance systems, and multi-generational global impact.",
      ar: "تحويل النماذج النظرية إلى مؤشرات وطنية سيادية وممارسات تنفيذية تصنع أثراً حضارياً ملموساً متوافقاً مع رؤية 2030.",
    },
    guidingQuestion: {
      en: "How does authentic theorizing culminate in measurable, generational global impact?",
      ar: "كيف يترجم التنظير الرصين إلى أثر حضاري ملموس ومستدام يعبر الأجيال؟",
    },
    formula: "Ω_Civilization = ∑ [ Latent_Potential_k × Epistemic_Soundness_k ] • Vision 2030",
    formulaNote: {
      en: "Aggregation of Sovereign Theoretical Output into Civilizational Impact",
      ar: "مصفوفة ترجمة الإنتاج المعرفي إلى أثر حضاري مستدام",
    },
    lab: { en: "Applied Transformation & Metrics Unit", ar: "وحدة التحول التطبيقي والمقاييس" },
    metrics: [
      { label: { en: "Vision 2030 Alignment", ar: "مواءمة رؤية 2030" }, value: "100%", pct: 100 },
      { label: { en: "AICT Metric Readiness", ar: "مؤشر الرحيمي للتحول" }, value: "Empirical", pct: 95 },
    ],
    accentColor: "#c026d3",
    glowColor: "rgba(192, 38, 211, 0.45)",
    orbitAngle: 300,
  },
];

export function ResearchObservatory2060() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; isDown: boolean }>({ x: 0, y: 0, isDown: false });
  const rotationAngleRef = useRef<number>(0);
  const targetRotationRef = useRef<number>(0);
  const activeIdxRef = useRef<number>(0);
  const timerRef = useRef<number>(Date.now());

  const activeItem = DISCIPLINES[activeIdx];

  useEffect(() => {
    activeIdxRef.current = activeIdx;
    targetRotationRef.current = -(DISCIPLINES[activeIdx].orbitAngle * Math.PI) / 180;
  }, [activeIdx]);

  // Auto-Progression Cycle (every 5 seconds)
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveIdx((curr) => (curr + 1) % DISCIPLINES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // 3D Canvas Kinetic Gyroscope Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 540);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 540;
      height = canvas.height = canvas.parentElement.clientHeight || 500;
    };

    window.addEventListener("resize", handleResize);

    let angle = 0;
    let radarSweep = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.38;

      // Smooth rotation toward target angle
      rotationAngleRef.current += (targetRotationRef.current - rotationAngleRef.current) * 0.08;
      angle += 0.003;
      radarSweep = (radarSweep + 0.02) % (Math.PI * 2);

      // --- Draw Ambient Tech Grid Floor & Radial Coordinate Rings ---
      ctx.save();
      ctx.translate(centerX, centerY);

      // Soft glow background
      const ambientGlow = ctx.createRadialGradient(0, 0, 10, 0, 0, baseRadius * 1.3);
      ambientGlow.addColorStop(0, "rgba(184, 138, 59, 0.08)");
      ambientGlow.addColorStop(0.5, "rgba(12, 24, 54, 0.03)");
      ambientGlow.addColorStop(1, "transparent");
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Concentric Calibration Rings
      [0.35, 0.65, 1.0, 1.15].forEach((scale, i) => {
        ctx.beginPath();
        ctx.arc(0, 0, baseRadius * scale, 0, Math.PI * 2);
        ctx.strokeStyle = i === 2 ? "rgba(184, 138, 59, 0.35)" : "rgba(12, 24, 54, 0.08)";
        ctx.lineWidth = i === 2 ? 1.5 : 1;
        if (i === 1 || i === 3) ctx.setLineDash([4, 6]);
        else ctx.setLineDash([]);
        ctx.stroke();
      });

      // Radar Sweep Vector
      ctx.save();
      ctx.rotate(radarSweep);
      const sweepGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, baseRadius * 1.1);
      sweepGrad.addColorStop(0, "rgba(184, 138, 59, 0.25)");
      sweepGrad.addColorStop(1, "transparent");
      ctx.fillStyle = sweepGrad;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, baseRadius * 1.1, 0, Math.PI / 4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Axis Crosshairs
      ctx.strokeStyle = "rgba(184, 138, 59, 0.15)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.moveTo(-baseRadius * 1.2, 0);
      ctx.lineTo(baseRadius * 1.2, 0);
      ctx.moveTo(0, -baseRadius * 1.2);
      ctx.lineTo(0, baseRadius * 1.2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 3D Perspective Tilt on Orbital Rings
      const tiltX = (mouseRef.current.y / height - 0.5) * 0.35;
      const tiltY = (mouseRef.current.x / width - 0.5) * 0.35;

      // Draw Rotating 3D Gyroscope Rings
      for (let r = 0; r < 3; r++) {
        ctx.save();
        ctx.rotate(rotationAngleRef.current * (r % 2 === 0 ? 1 : -0.7) + angle * (r + 1) * 0.5);
        ctx.scale(1 + tiltY * 0.3, 0.85 + tiltX * 0.3);

        ctx.beginPath();
        ctx.arc(0, 0, baseRadius * (0.8 + r * 0.12), 0, Math.PI * 2);
        ctx.strokeStyle =
          r === 1
            ? "rgba(184, 138, 59, 0.5)"
            : r === 0
            ? "rgba(2, 132, 199, 0.35)"
            : "rgba(12, 24, 54, 0.12)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Marker ticks along the ring
        for (let t = 0; t < 12; t++) {
          const tickA = (t * Math.PI * 2) / 12;
          const tr = baseRadius * (0.8 + r * 0.12);
          ctx.beginPath();
          ctx.arc(Math.cos(tickA) * tr, Math.sin(tickA) * tr, 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(184, 138, 59, 0.4)";
          ctx.fill();
        }
        ctx.restore();
      }

      // Draw Core Reactor (Center Sun)
      const corePulse = Math.sin(Date.now() * 0.004) * 4;
      const coreGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, 42 + corePulse);
      coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      coreGrad.addColorStop(0.3, DISCIPLINES[activeIdxRef.current].accentColor);
      coreGrad.addColorStop(0.8, "rgba(12, 24, 54, 0.2)");
      coreGrad.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(0, 0, 38 + corePulse, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // Core Outer Ring
      ctx.beginPath();
      ctx.arc(0, 0, 24, 0, Math.PI * 2);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Center Icon Emblem
      ctx.fillStyle = "#0c1836";
      ctx.font = "bold 11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("2060", 0, 0);

      // --- Draw 6 Orbital Satellites & Energy Laser Conduits ---
      DISCIPLINES.forEach((disc, i) => {
        const theta = ((disc.orbitAngle * Math.PI) / 180) + rotationAngleRef.current;
        const x = Math.cos(theta) * baseRadius;
        const y = Math.sin(theta) * baseRadius;
        const isActive = activeIdxRef.current === i;
        const isHovered = hoveredNode === i;

        // Energy Laser Conduit from Center to Node
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
        if (isActive) {
          ctx.strokeStyle = disc.accentColor;
          ctx.lineWidth = 2.5;
          ctx.setLineDash([]);
        } else {
          ctx.strokeStyle = "rgba(12, 24, 54, 0.12)";
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 4]);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Active Pulse Wave traveling along the laser
        if (isActive) {
          const pulseT = (Date.now() * 0.002) % 1;
          const px = x * pulseT;
          const py = y * pulseT;
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = disc.accentColor;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Orbital Node Satellite Outer Aura
        if (isActive || isHovered) {
          const auraPulse = Math.sin(Date.now() * 0.005) * 5;
          ctx.beginPath();
          ctx.arc(x, y, 28 + auraPulse, 0, Math.PI * 2);
          ctx.fillStyle = disc.glowColor;
          ctx.fill();
        }

        // Orbital Node Body
        ctx.beginPath();
        ctx.arc(x, y, isActive ? 22 : 17, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? "#0c1836" : "#ffffff";
        ctx.strokeStyle = isActive ? disc.accentColor : "rgba(12, 24, 54, 0.25)";
        ctx.lineWidth = isActive ? 3 : 1.5;
        ctx.fill();
        ctx.stroke();

        // Node Inner Label / Number
        ctx.fillStyle = isActive ? disc.accentColor : "#4e5e7b";
        ctx.font = isActive ? "bold 11px monospace" : "10px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(disc.num, x, y);

        // Orbital Node Title Label (Floating Beside Node)
        const labelDist = baseRadius + (isActive ? 38 : 32);
        const lx = Math.cos(theta) * labelDist;
        const ly = Math.sin(theta) * labelDist;

        ctx.font = isActive ? "bold 11px 'Playfair Display', serif" : "10px sans-serif";
        ctx.fillStyle = isActive ? "#0c1836" : "#718096";
        ctx.textAlign = lx > 0 ? "left" : "right";
        ctx.fillText(disc.name[lang], lx, ly);
      });

      ctx.restore();
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [lang]);

  const handleCanvasMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseRef.current = { x, y, isDown: false };

    // Check hit test for 6 orbital nodes
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const baseRadius = Math.min(rect.width, rect.height) * 0.38;

    let hit: number | null = null;
    DISCIPLINES.forEach((disc, i) => {
      const theta = ((disc.orbitAngle * Math.PI) / 180) + rotationAngleRef.current;
      const nx = centerX + Math.cos(theta) * baseRadius;
      const ny = centerY + Math.sin(theta) * baseRadius;
      const dist = Math.hypot(x - nx, y - ny);
      if (dist < 26) hit = i;
    });

    setHoveredNode(hit);
  };

  const handleCanvasClick = () => {
    if (hoveredNode !== null) {
      setActiveIdx(hoveredNode);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-amber-900/10 bg-[#fbf9f5] py-20 lg:py-28">
      {/* 2060 Ambient Radiance Cones */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[600px] w-[600px] rounded-full bg-amber-400/8 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-[500px] w-[500px] rounded-full bg-sky-400/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1536px] px-5 lg:px-10">
        {/* =====================================================================
            SECTION HEADER: Riyadh 2060 Quantum Knowledge Core
            ===================================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-white/95 px-4 py-1.5 shadow-xs backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-amber-600" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
              {ar ? "مرصد المعرفة والبحث المتقدم 2060" : "Riyadh 2060 // Epistemic Research Core"}
            </span>
          </div>

          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c1836] leading-[1.12] tracking-tight">
            {ar ? (
              <>
                المجالات البحثية الستة:{" "}
                <span className="gold-text-light block sm:inline">منظومة الاستكشاف المعرفي</span>
              </>
            ) : (
              <>
                What Do We Study?{" "}
                <span className="gold-text-light block sm:inline">Six Core Disciplines</span>
              </>
            )}
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#4e5e7b] leading-relaxed">
            {ar
              ? "مصفوفة بحثية تفاعلية ثلاثية الأبعاد تستكشف الأسئلة الوجودية والأنظمة المعقدة والسيادة الإدراكية وصناعة القرار في عصر الذكاء الاصطناعي."
              : "An interactive 3D multidimensional epistemic matrix exploring existential inquiry, complex systems, cognitive sovereignty, and ethical decision-making in the era of artificial intelligence."}
          </p>
        </div>

        {/* =====================================================================
            MAIN OBSERVATORY COCKPIT: 3D Quantum Gyroscope (Left) + 2060 Telemetry HUD (Right)
            ===================================================================== */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-12">
          {/* Left Wing: 3D Holographic Kinetic Gyroscope Reactor */}
          <div className="relative lg:col-span-6 h-[460px] sm:h-[520px] lg:h-[580px] rounded-3xl border border-amber-900/15 bg-white/80 p-3 shadow-luxury backdrop-blur-xl overflow-hidden">
            {/* Top HUD Telemetry Coordinates Bar */}
            <div className="absolute left-6 right-6 top-5 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 rounded-full border border-amber-900/15 bg-white/90 px-3 py-1 font-mono text-[10px] font-bold text-amber-900 shadow-xs">
                <Atom size={13} className="text-amber-700 animate-spin" />
                <span>HEXA-CORE OBSERVATORY // 3D MATRIX</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>60 FPS // KINETIC</span>
              </div>
            </div>

            {/* Interactive 3D Canvas */}
            <canvas
              ref={canvasRef}
              onMouseMove={handleCanvasMouseMove}
              onClick={handleCanvasClick}
              className="h-full w-full cursor-pointer touch-none"
            />

            {/* Bottom Telemetry Overlay Guide */}
            <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between pointer-events-none font-mono text-[10px] text-slate-400">
              <span className="hidden sm:inline">INTERACTION: CLICK / HOVER NODES</span>
              <span className="text-amber-800 font-bold uppercase">
                ACTIVE FOCUS: {activeItem.code} ({activeItem.name.en})
              </span>
            </div>
          </div>

          {/* Right Wing: Futuristic 2060 Epistemic Intelligence Telemetry Terminal */}
          <div className="lg:col-span-6 rounded-3xl border border-amber-900/15 bg-white p-7 sm:p-9 shadow-luxury transition-all duration-500">
            {/* Terminal Top Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-900/10 pb-5">
              <div className="flex items-center gap-2">
                <span
                  className="grid size-8 place-items-center rounded-lg font-mono text-xs font-black text-white shadow-sm"
                  style={{ backgroundColor: activeItem.accentColor }}
                >
                  {activeItem.num}
                </span>
                <div>
                  <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    SYSTEM DESIGNATION
                  </span>
                  <span className="font-mono text-xs font-black text-[#0c1836]">
                    {activeItem.code} // {activeItem.category[lang]}
                  </span>
                </div>
              </div>

              {/* Auto-Cycle Play/Pause Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded-full border border-amber-900/15 bg-[#faf6ed] px-3 py-1 font-mono text-[10px] font-bold text-amber-900 transition hover:bg-amber-100"
                >
                  {isPlaying ? "AUTO-SCAN: ON" : "AUTO-SCAN: PAUSED"}
                </button>
                <div className="flex items-center gap-1 font-mono text-xs font-bold text-slate-400">
                  <span className="text-amber-800">{activeItem.num}</span>
                  <span>/</span>
                  <span>06</span>
                </div>
              </div>
            </div>

            {/* Discipline Title & Epistemic Framing */}
            <div className="mt-6">
              <h3 className="font-display text-3xl sm:text-4xl font-black text-[#0c1836] leading-tight">
                {activeItem.name[lang]}
              </h3>

              <div className="mt-3.5 flex items-start gap-2.5 rounded-xl border border-amber-900/10 bg-[#faf6ed]/70 p-3.5">
                <Sparkles size={16} className="text-amber-700 shrink-0 mt-0.5" />
                <p className="font-display text-sm italic font-medium leading-relaxed text-[#0c1836]">
                  “{activeItem.guidingQuestion[lang]}”
                </p>
              </div>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#4e5e7b]">
                {activeItem.desc[lang]}
              </p>
            </div>

            {/* 2060 Conceptual Mathematical / Vector Formula HUD */}
            <div className="mt-6 rounded-2xl border border-amber-900/15 bg-[#0c1836] p-4 text-white shadow-inner">
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5">
                  <Binary size={12} className="text-amber-400" />
                  <span>Epistemic Formulation // الصيغة المفهومية</span>
                </span>
                <span className="text-slate-400">2060 THEOREM</span>
              </div>
              <code className="block font-mono text-xs sm:text-sm font-bold text-amber-200 tracking-wide overflow-x-auto whitespace-nowrap py-1">
                {activeItem.formula}
              </code>
              <p className="mt-2 text-[10px] font-mono text-slate-400">
                // {activeItem.formulaNote[lang]}
              </p>
            </div>

            {/* Diagnostic Telemetry Dual Parameter Gauges */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {activeItem.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="rounded-xl border border-amber-900/10 bg-[#f7f3ea]/60 p-3.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase">
                      {m.label[lang]}
                    </span>
                    <span className="font-mono text-xs font-black text-[#0c1836]">
                      {m.value}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-amber-900/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${m.pct}%`,
                        backgroundColor: activeItem.accentColor,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dedicated Research Unit Attribution & Navigation */}
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-amber-900/10 pt-5">
              <div className="flex items-center gap-2">
                <Activity size={15} className="text-amber-700" />
                <span className="font-mono text-xs font-bold text-slate-700">
                  {activeItem.lab[lang]}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActiveIdx((curr) => (curr - 1 + DISCIPLINES.length) % DISCIPLINES.length)
                  }
                  className="grid size-9 place-items-center rounded-full border border-amber-900/15 bg-white text-[#0c1836] transition hover:bg-amber-50 hover:border-amber-600"
                  aria-label="Previous Discipline"
                >
                  {ar ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>

                <button
                  onClick={() => setActiveIdx((curr) => (curr + 1) % DISCIPLINES.length)}
                  className="grid size-9 place-items-center rounded-full border border-amber-900/15 bg-white text-[#0c1836] transition hover:bg-amber-50 hover:border-amber-600"
                  aria-label="Next Discipline"
                >
                  {ar ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </button>

                <Link
                  to="/theory"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-4 py-2 text-xs font-bold text-white shadow-gold transition hover:scale-105"
                >
                  <span>{ar ? "استكشف البناء النظري" : "Explore Methodology"}</span>
                  {ar ? <ArrowLeft size={13} /> : <ArrowRight size={13} />}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            LOWER 6-NODE ORBITAL FREQUENCY TRACKER (Direct Jump Selector)
            ===================================================================== */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {DISCIPLINES.map((d, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={d.id}
                onClick={() => setActiveIdx(idx)}
                className={`group relative flex flex-col justify-between rounded-2xl border p-4 text-left rtl:text-right transition-all duration-300 ${
                  isSelected
                    ? "border-amber-600/60 bg-white shadow-md -translate-y-1 ring-2 ring-amber-500/20"
                    : "border-amber-900/10 bg-white/70 hover:bg-white hover:border-amber-500/30"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-xs font-bold text-amber-800">
                    {d.code}
                  </span>
                  <span
                    className="size-2 rounded-full transition-transform"
                    style={{
                      backgroundColor: isSelected ? d.accentColor : "#cbd5e1",
                      transform: isSelected ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                </div>

                <div className="mt-3">
                  <p className="font-display text-sm font-bold text-[#0c1836] transition-colors group-hover:text-amber-800">
                    {d.name[lang]}
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] text-slate-400 truncate">
                    {d.category[lang]}
                  </p>
                </div>

                {/* Bottom Active Glow Laser */}
                {isSelected ? (
                  <div
                    className="mt-3 h-0.5 w-full rounded-full transition-all duration-300"
                    style={{ backgroundColor: d.accentColor }}
                  />
                ) : (
                  <div className="mt-3 h-0.5 w-0 bg-transparent group-hover:w-full group-hover:bg-amber-300/60 transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
