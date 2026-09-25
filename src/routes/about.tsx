import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  SectionLabel,
  useLanguage,
  Arrow,
} from "../components/site";
import { centerInfo } from "../lib/content";
import founderLightImg from "../assets/founder_light.jpg";
import { Award, ShieldCheck, Milestone, Compass, Sparkles, Building2, Quote, CheckCircle2, ChevronRight, Globe, Layers, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About the Center & Founder — Dr. Abdulmohsen Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Learn about the Center's vision, mission, founder Dr. Abdulmohsen Hameed Alrohaimi, and the intellectual journey from the desert to global impact.",
      },
      {
        property: "og:title",
        content: "About Dr. Abdulmohsen Alrohaimi Center",
      },
      {
        property: "og:description",
        content:
          "A multidisciplinary intellectual and applied center connecting humanity, cognition, systems, and transformation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [activeChronology, setActiveChronology] = useState<number>(3);
  const [activeTreatise, setActiveTreatise] = useState<number>(0);

  const chronology = [
    {
      year: "1998",
      arabicYear: "١٩٩٨",
      epoch: ar ? "مرحلة الرصد والتأسيس" : "Observation Epoch",
      title: ar ? "ملاحظة الشح وقراءة الواقع" : "Observation of Scarcity & Reality",
      desc: ar
        ? "البدايات الأولى في بيئة شحيحة الموارد؛ حيث تم رصد أن الفاعلية الإنسانية لا تتأتى بوفرة الإمكانات المادية بل بالقدرة على قراءة الواقع وإدارة الممكن بأعلى درجات الوعي."
        : "Early observations in resource-scarce environments, discovering that human capability emerges from reading reality rather than material abundance.",
      takeaway: ar ? "القيمة تنبع من الوعي وليس من وفرة العتاد." : "True value originates from discernment, not resource surplus.",
    },
    {
      year: "2010",
      arabicYear: "٢٠١٠",
      epoch: ar ? "مرحلة التبلور الفلسفي" : "Philosophical Synthesis",
      title: ar ? "تبلور الأسئلة الفلسفية والإدراكية" : "Formulation of the Governing Inquiries",
      desc: ar
        ? "طرح السؤال المحوري: كيف يتحول الإمكان الكامن إلى قرارات رشيدة تصنع تحولاً حقيقياً؟ وبداية كتابة المسودات التأسيسية لنظرية الرحيمي في عمق الإنسان والأنظمة."
        : "Articulating the central inquiry: how latent potential transitions into sound decisions that craft systemic transformation, beginning foundational treatise drafts.",
      takeaway: ar ? "الكمون يسبق الموارد، والإدراك يوجه القرار." : "Latency precedes resources, cognition steers decision.",
    },
    {
      year: "2020",
      arabicYear: "٢٠٢٠",
      epoch: ar ? "مرحلة نمذجة المؤشرات" : "Diagnostic Framework Modeling",
      title: ar ? "بناء إطار مؤشر التحول (AICT)" : "Engineering the Alrohaimi Index",
      desc: ar
        ? "تطوير إطار تشخيصي مركب يربط بين المفاهيم النظرية والأبعاد الميدانية الملموسة لقياس جاهزية المؤسسات للسيادة الإدراكية عبر أربعة أبعاد جوهرية."
        : "Developing the composite diagnostic framework connecting theoretical constructs with operational metrics of institutional cognitive sovereignty across four core dimensions.",
      takeaway: ar ? "ربط البناءات النظرية بالنماذج التشغيلية والمقاييس التشخيصية." : "Connecting theoretical constructs with operational models and diagnostic metrics.",
    },
    {
      year: "2026",
      arabicYear: "٢٠٢٦",
      epoch: ar ? "مرحلة الإطلاق المؤسسي للمركز" : "Institutional Launch",
      title: ar ? "إطلاق المركز والمدرسة السعودية" : "Inauguration of the Sovereign Center",
      desc: ar
        ? "تأسيس الصرح الأكاديمي الشامل في الرياض وإطلاق المدرسة السعودية للقيادة الواعية والوحدات المؤسسية المتخصصة لخدمة المملكة والعالم في عصر الذكاء الاصطناعي."
        : "Inaugurating the comprehensive Riyadh research center, the Saudi School of Conscious Leadership, and specialized institutional units to advance research in the algorithmic era.",
      takeaway: ar ? "صرح فكري وبحثي ذو أثر حضاري ممتد." : "An intellectual and research institution delivering sustained civilizational impact.",
    },
  ];

  const intellectualTreatises = [
    {
      title: ar ? "نظرية الرحيمي: من الكمون إلى الأثر" : "Alrohaimi Theory: From Latent Potential to Impact",
      category: ar ? "المنظومة التأسيسية" : "Foundational Paradigm",
      scope: ar ? "تفكيك حركة الإمكان البشري والمؤسسي عبر ست مراحل متتالية تبدأ من الطور الكامن وتتوج بالأثر الحضاري المستدام." : "Deconstructing human and institutional capability movement across six sequential stages from latency to generational impact.",
      year: "2026",
    },
    {
      title: ar ? "مصفوفة السيادة الإدراكية في عصر الذكاء الاصطناعي" : "Cognitive Sovereignty Matrix in the AI Algorithmic Era",
      category: ar ? "الحوكمة المعرفية" : "Epistemic Governance",
      scope: ar ? "تحصين استقلالية القرار الإنساني ضد التبعية الخوارزمية والانحيازات الاصطناعية الموجهة." : "Safeguarding human decision autonomy against algorithmic dependency and synthetic distortions.",
      year: "2025",
    },
    {
      title: ar ? "المدرسة السعودية للقيادة الواعية وأطر صناعة القرار" : "Saudi School of Conscious Leadership Decision Architectures",
      category: ar ? "القيادة التنفيذية" : "Executive Leadership",
      scope: ar ? "نموذج قيادي أصيل ينطلق من العمق الإدراكي والقيمي لمواجهة الأزمات المعقدة والتحولات المنظومية الكبرى." : "An original leadership model anchored in cognitive depth and ethical grounding for navigating extreme complexity.",
      year: "2024",
    },
    {
      title: ar ? "مؤشر الرحيمي للتحول الحضاري (AICT)" : "The Alrohaimi Index for Civilizational Transformation (AICT)",
      category: ar ? "أدوات القياس" : "Diagnostic Instrument",
      scope: ar ? "مؤشر مركب يقيس الجاهزية الإدراكية، والتكيف المنظومي، وتعبئة الطاقات غير المفعلة في المؤسسات الكبرى." : "A composite metric measuring cognitive readiness, systemic adaptability, and latent capacity mobilization.",
      year: "2023",
    },
    {
      title: ar ? "نظرية الكمون الجيني والحيوي في مواجهة الأزمات" : "Gene Latency Theory & Existential Resilience",
      category: ar ? "الأنظمة الحية" : "Living Systems",
      scope: ar ? "استكشاف الجذور البيولوجية للقدرات الكامنة وكيفية تحفيزها في فترات الصدمات والتحولات التاريخية." : "Exploring the biological foundations of unactivated capability and mechanisms of systemic activation under shock.",
      year: "2022",
    },
    {
      title: ar ? "نموذج التجسير القيادي: من النظرية إلى الممارسة" : "The Leadership Bridging Model: Theory to Execution",
      category: ar ? "التطبيق المؤسسي" : "Applied Governance",
      scope: ar ? "آليات الربط المنهجي بين الرؤى النظرية العميقة والقرارات الميدانية اليومية لكبار صناع القرار." : "Actionable mechanisms bridging high-order philosophy with daily frontline decisions of sovereign leaders.",
      year: "2021",
    },
  ];

  return (
    <>
      {/* =====================================================================
          1. INSTITUTIONAL DOSSIER HERO: Museum Architectural Layout (No Cards)
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-[#0c1836]/10 bg-[#fbf9f5] pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-gradient-to-br from-[#b88a3b]/10 to-transparent blur-3xl" />
        
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>{ar ? "الملف المؤسسي والتأسيس" : "Institutional Dossier"}</SectionLabel>
              <h1 className="mt-2 max-w-[18ch] text-balance font-display text-4xl font-black leading-[1.12] text-[#0c1836] md:text-5xl lg:text-6xl">
                {ar
                  ? "معرفة تصل الإنسان بالإدراك والتحول الحضاري"
                  : "Knowledge Connecting Humanity, Cognition & Transformation"}
              </h1>
              <div className="mt-6 h-0.5 w-32 bg-[#b88a3b]" />
              <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[#4e5e7b] md:text-lg">
                {ar
                  ? "مركز الدكتور عبدالمحسن الرحيمي للسيادة الإدراكية والتحول الحضاري هو مركز فكري وبحثي مكرس لتعميق فهم الإنسان والإدراك والأنظمة المعقدة والقيادة والتحول الحضاري. يطور المركز نظريات ومفاهيم وأطراً بحثية وبرامج تعليمية وأدوات تطبيقية مصممة لاستكشاف كيفية انتقال المعرفة والقدرة الكامنة نحو أثر ذي مغزى. ويلتزم المركز بالحوار العلمي المفتوح، والتحكيم الأكاديمي، والبحث التجريبي، والتعاون الدولي."
                  : "The Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation is an intellectual and research center dedicated to deepening the understanding of humanity, cognition, complex systems, leadership, and civilizational transformation. The Center develops theories, concepts, research frameworks, educational programs, and applied tools designed to explore how knowledge and latent capability can move toward meaningful impact. The Center is committed to open scientific dialogue, peer engagement, empirical research, and international collaboration."}
              </p>

              {/* Verified Credentials Pills */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0c1836]/15 bg-white/80 px-4 py-1.5 font-mono text-xs font-bold text-[#0c1836] shadow-xs">
                  <span className="size-2 rounded-full bg-[#b88a3b]" />
                  RIYADH · SAUDI ARABIA
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0c1836]/15 bg-white/80 px-4 py-1.5 font-mono text-xs font-bold text-[#0c1836] shadow-xs">
                  <Globe size={13} className="text-[#b88a3b]" />
                  alrohaimicenter.org
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#b88a3b]/30 bg-[#f5f0e6] px-4 py-1.5 font-mono text-xs font-bold text-[#b88a3b] shadow-xs">
                  <Sparkles size={13} />
                  {ar ? "أصالة التراث، رؤية 2030، والعمق الحضاري" : "SAUDI HERITAGE & VISION 2030 DEPTH"}
                </span>
              </div>
            </div>

            {/* Founder High-Res Archival Study Image - Architectural Frame */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-[#0c1836]/15 bg-white p-3 shadow-md">
                {/* Golden corner brackets */}
                <div className="absolute top-2 left-2 size-4 border-t-2 border-l-2 border-[#b88a3b]" />
                <div className="absolute top-2 right-2 size-4 border-t-2 border-r-2 border-[#b88a3b]" />
                <div className="absolute bottom-2 left-2 size-4 border-b-2 border-l-2 border-[#b88a3b]" />
                <div className="absolute bottom-2 right-2 size-4 border-b-2 border-r-2 border-[#b88a3b]" />
                
                <img
                  src={founderLightImg}
                  alt={ar ? "دراسة وأرشيف المؤسس" : "Founder's Study & Archive"}
                  width={1536}
                  height={1024}
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-display text-sm font-bold text-[#0c1836]">
                    {ar ? "أرشيف دراسات المؤسس · الرياض" : "Founder's Scholarly Study · Riyadh"}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#b88a3b]">
                    ARCHIVE SERIAL: ALR-2026-FND · CONFIDENTIAL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. CENTRAL QUESTION INSTALLATION: Typographic Monument
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-10">
          <Quote className="mx-auto text-[#b88a3b]/70" size={48} />
          <p className="mt-4 font-mono text-xs font-bold uppercase tracking-widest text-[#b88a3b]">
            {ar ? "السؤال المحوري الذي يوجه كافة أبحاث المركز" : "The Core Question That Anchors All Research"}
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-2xl font-bold leading-relaxed text-[#0c1836] md:text-4xl">
            {ar ? centerInfo.centralQuestion.ar : `"${centerInfo.centralQuestion.en}"`}
          </h2>
          <div className="mx-auto mt-8 h-0.5 w-32 bg-[#b88a3b]" />
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#4e5e7b] md:text-lg">
            {ar
              ? "ينطلق المركز من قناعة راسخة بأن مواجهة تحديات عصر الذكاء الاصطناعي والأنظمة الخوارزمية لا تتطلب فقط حلولاً تقنية، بل تتطلب بالأساس فهماً إدراكياً عميقاً للإنسان، ووضوحاً قيمياً يحول المعرفة والقدرة الكامنة إلى قرارات حكيمة وأثر حضاري ملموس ومستدام."
              : "The Center is anchored in the firm conviction that confronting the disruptions of artificial intelligence and algorithmic systems requires more than technical countermeasures; it demands profound cognitive discernment, ethical grounding, and the disciplined translation of latent capability into sound decisions and generational impact."}
          </p>
        </div>
      </section>

      {/* =====================================================================
          3. KINETIC CHRONOLOGY (1998 ➔ 2026): Bespoke Epistemic Conduit
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "محطات التطور الفكري" : "Epistemic Timeline"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "مسار تحول الفكرة من الرصد إلى الأثر العالمي" : "The Evolution from Observation to Civilizational Impact"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "تتبع المراحل الأربع الكبرى التي تشكل عبرها المشروع الفكري للمركز على مدى قرابة ثلاثة عقود."
                : "Explore the four foundational epochs through which the Center's intellectual project evolved over three decades."}
            </p>
          </div>

          {/* Dynamic Laser Timeline Track */}
          <div className="relative mt-12 mb-10">
            {/* Base timeline rail */}
            <div className="relative h-1.5 w-full rounded-full bg-[#0c1836]/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#b88a3b] via-[#d4af37] to-[#0c1836] transition-all duration-700 ease-out"
                style={{ width: `${((activeChronology + 1) / chronology.length) * 100}%` }}
              />
            </div>

            {/* 4 Interactive Chronology Pins */}
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {chronology.map((c, i) => {
                const isActive = activeChronology === i;
                const isPassed = i < activeChronology;
                return (
                  <button
                    key={c.year}
                    onClick={() => setActiveChronology(i)}
                    className={`group relative flex flex-col items-start rounded-2xl p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-2 border-[#b88a3b] bg-white shadow-md scale-[1.02]"
                        : isPassed
                        ? "border border-[#b88a3b]/30 bg-white/70 hover:border-[#b88a3b]"
                        : "border border-[#0c1836]/10 bg-[#f5f0e6]/40 hover:border-[#b88a3b]/40"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-mono text-sm font-black text-[#b88a3b]">
                        {ar ? c.arabicYear : c.year}
                      </span>
                      <span
                        className={`size-2.5 rounded-full transition-transform ${
                          isActive
                            ? "bg-[#b88a3b] ring-4 ring-[#b88a3b]/20 scale-125"
                            : isPassed
                            ? "bg-[#b88a3b]/70"
                            : "bg-[#0c1836]/20"
                        }`}
                      />
                    </div>
                    <span className="mt-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#718096]">
                      {c.epoch}
                    </span>
                    <h4 className="mt-1 font-display text-base font-bold text-[#0c1836]">
                      {c.title}
                    </h4>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Epoch Cinematic Showcase (Open Architectural Panel) */}
          <div className="relative overflow-hidden rounded-3xl border border-[#0c1836]/10 bg-white p-8 lg:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-black text-[#b88a3b]">
                    {ar ? chronology[activeChronology].arabicYear : chronology[activeChronology].year}
                  </span>
                  <span className="h-4 w-px bg-[#0c1836]/20" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#718096]">
                    {chronology[activeChronology].epoch}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-black text-[#0c1836] md:text-3xl">
                  {chronology[activeChronology].title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#4e5e7b] md:text-lg">
                  {chronology[activeChronology].desc}
                </p>

                <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-[#b88a3b]/30 bg-[#fbf9f5] p-4 text-xs md:text-sm font-semibold text-[#0c1836]">
                  <Sparkles size={16} className="mt-0.5 shrink-0 text-[#b88a3b]" />
                  <span>
                    <strong className="text-[#b88a3b]">{ar ? "الفرضية المركزية: " : "Central Proposition: "}</strong>
                    {chronology[activeChronology].takeaway}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l lg:border-[#0c1836]/10 pt-6 lg:pt-0 lg:pl-8">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#b88a3b]">
                  {ar ? "السياق التاريخي والمعرفي" : "Epistemic Context"}
                </p>
                <div className="mt-4 space-y-3 text-xs text-[#4e5e7b]">
                  <div className="flex items-center justify-between border-b border-[#0c1836]/10 pb-2">
                    <span>{ar ? "نطاق التأثير" : "Scope"}</span>
                    <span className="font-semibold text-[#0c1836]">{ar ? "منظومي وحضاري" : "Systemic & Global"}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#0c1836]/10 pb-2">
                    <span>{ar ? "نوع النتاج" : "Output Type"}</span>
                    <span className="font-semibold text-[#0c1836]">{ar ? "تأسيس نظري ومعياري" : "Theoretical & Metric"}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#0c1836]/10 pb-2">
                    <span>{ar ? "الاعتماد الأكاديمي" : "Validation"}</span>
                    <span className="font-semibold text-[#0c1836]">Dr. Abdulmohsen Alrohaimi</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/theory"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b88a3b] hover:text-[#0c1836] transition-colors"
                  >
                    <span>{ar ? "استكشف أبعاد النظرية بالتفصيل" : "Explore Full Theory"}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. FOUNDER'S INTELLECTUAL TREATISES: Open Editorial Gallery (No Cards)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* Left: Founder Dossier Bio */}
            <div className="lg:col-span-5">
              <SectionLabel>{ar ? "المؤسس والمنظر الرئيسي" : "Founder & Originator"}</SectionLabel>
              <h2 className="mt-2 font-display text-3xl font-black text-[#0c1836] md:text-5xl">
                {ar ? centerInfo.founder.ar : centerInfo.founder.en}
              </h2>
              <div className="mt-4 h-0.5 w-24 bg-[#b88a3b]" />
              <p className="mt-6 text-base leading-relaxed text-[#4e5e7b] md:text-lg">
                {ar ? centerInfo.founder.bio.ar : centerInfo.founder.bio.en}
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold text-[#0c1836]">
                  <CheckCircle2 size={16} className="text-[#b88a3b]" />
                  <span>{ar ? "صاحب نظرية الرحيمي للتحول من الكمون للأثر" : "Originator of Alrohaimi Theory: Latency to Impact"}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-[#0c1836]">
                  <CheckCircle2 size={16} className="text-[#b88a3b]" />
                  <span>{ar ? "مؤسس المدرسة السعودية للقيادة الواعية" : "Founder of Saudi School of Conscious Leadership"}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-[#0c1836]">
                  <CheckCircle2 size={16} className="text-[#b88a3b]" />
                  <span>{ar ? "مطور مؤشر الرحيمي للتحول الحضاري (AICT)" : "Architect of the Alrohaimi Index (AICT)"}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-[#0c1836]">
                  <CheckCircle2 size={16} className="text-[#b88a3b]" />
                  <span>{ar ? "رئيس مجلس إدارة جمعية بالذكاء الاصطناعي نبتكر الدواء (بإشراف سدايا)" : "Chairman of AI for Drug Innovation Society (SDAIA Supervised)"}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-[#0c1836]">
                  <CheckCircle2 size={16} className="text-[#b88a3b]" />
                  <span>{ar ? "المشرف على مسرّعة ابتكار الدواء بالذكاء الاصطناعي (ترخيص منشآت 1171)" : "Supervisor of AI Drug Innovation Accelerator (Monsha'at 1171)"}</span>
                </div>
              </div>
            </div>

            {/* Right: Foundational Treatises Interactive Monograph List */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between border-b border-[#0c1836]/10 pb-4">
                <h3 className="font-display text-xl font-bold text-[#0c1836]">
                  {ar ? "المصنفات الفكرية الست التأسيسية" : "The Six Foundational Treatises"}
                </h3>
                <span className="font-mono text-xs font-bold text-[#b88a3b]">06 TREATISES</span>
              </div>

              <div className="mt-4 divide-y divide-[#0c1836]/10">
                {intellectualTreatises.map((treatise, idx) => {
                  const isSelected = activeTreatise === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveTreatise(idx)}
                      className={`group cursor-pointer py-4 px-3 rounded-xl transition-all duration-200 ${
                        isSelected ? "bg-white shadow-xs" : "hover:bg-white/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <span className="font-mono text-xs font-black text-[#b88a3b] mt-0.5">
                            0{idx + 1}
                          </span>
                          <div>
                            <h4 className="font-display text-base font-bold text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
                              {treatise.title}
                            </h4>
                            <span className="mt-1 inline-block font-mono text-[10px] font-bold uppercase tracking-wider text-[#718096]">
                              {treatise.category} · {treatise.year}
                            </span>
                            {isSelected && (
                              <p className="mt-3 text-xs leading-relaxed text-[#4e5e7b] animate-fadeIn">
                                {treatise.scope}
                              </p>
                            )}
                          </div>
                        </div>
                        <ChevronRight
                          size={16}
                          className={`mt-1 text-[#718096] transition-transform ${
                            isSelected ? "rotate-90 text-[#b88a3b]" : "group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. VISION & MISSION: Architectural Twin Colonnade (No Cards)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-14 text-center">
            <SectionLabel>{ar ? "البوصلة المؤسسية" : "Institutional Direction"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "الرؤية والرسالة والغاية الحضارية" : "Vision, Mission & Generational Intent"}
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            {/* Vision Colonnade */}
            <div className="relative border-t-2 border-[#b88a3b] pt-8">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#b88a3b]">
                {ar ? "رؤية المركز" : "Our Vision"}
              </span>
              <h3 className="mt-3 font-display text-3xl font-black text-[#0c1836]">
                {ar ? "مستقبل أكثر إنسانية" : "A More Human Future"}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4e5e7b] md:text-lg">
                {ar ? centerInfo.vision.ar : centerInfo.vision.en}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-[#0c1836]/10 pt-4 text-xs font-bold text-[#b88a3b]">
                <span>{ar ? "غاية استراتيجية مستدامة" : "Sustainable Generational Impact"}</span>
                <Sparkles size={16} />
              </div>
            </div>

            {/* Mission Colonnade */}
            <div className="relative border-t-2 border-[#0c1836] pt-8">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#0c1836]">
                {ar ? "رسالة المركز" : "Our Mission"}
              </span>
              <h3 className="mt-3 font-display text-3xl font-black text-[#0c1836]">
                {ar ? "منظومة متكاملة من المعرفة للأثر" : "Integrated System for Impact"}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4e5e7b] md:text-lg">
                {ar ? centerInfo.mission.ar : centerInfo.mission.en}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-[#0c1836]/10 pt-4 text-xs font-bold text-[#0c1836]">
                <span>{ar ? "تحويل الإمكان إلى إنجاز" : "From Latency to Execution"}</span>
                <Compass size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. CHARTER OF ACADEMIC INTEGRITY: Diplomatic Treaty Installation
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
          <div className="relative rounded-3xl border border-[#0c1836]/15 bg-white p-8 shadow-sm md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0c1836]/10 pb-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#b88a3b]" size={36} />
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#0c1836] md:text-3xl">
                    {ar ? "ميثاق النزاهة العلمية والإسناد الفكري" : "Charter of Academic Integrity & Intellectual Attribution"}
                  </h3>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#b88a3b]">
                    ALROHAIMI CHARTER · DOCUMENT REF: ALR-ETH-2026
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-[#f5f0e6] px-3.5 py-1 font-mono text-xs font-bold text-[#0c1836]">
                RESEARCH STANDARDS
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-[#4e5e7b]">
              {ar
                ? "تؤكد المنظومة الفكرية للمركز على التمييز الصارم بين مرحلة البناء والتنظير الفلسفي من جهة، وبين النتائج المثبتة عبر الأبحاث التجريبية والمقاييس التطبيقية من جهة أخرى. وتخضع كافة مذكرات التفاهم والبرامج البحثية لاتفاقيات توثيق الملكية الفكرية والإسناد الأكاديمي المعتمدة دولياً لضمان أصالة المخرجات المعرفية الصادرة عن المركز والمؤسس الدكتور عبدالمحسن حميد الرحيمي."
                : "The Center's intellectual framework strictly maintains clear delineation between philosophical theoretical construction and empirically validated findings derived from diagnostic metric applications. All collaborative protocols and research memoranda uphold international academic peer-review standards and recognized intellectual attribution conventions for foundational works authored by Founder Dr. Abdulmohsen Hameed Alrohaimi."}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-[#0c1836]/10 pt-6">
              <Link
                to="/theory"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-6 py-2.5 text-xs font-bold text-white shadow-gold hover:from-[#c59642] hover:to-[#a77019]"
              >
                <span>{ar ? "استكشف نظرية الرحيمي" : "Explore Alrohaimi Theory"}</span>
                <Arrow />
              </Link>
              <Link
                to="/knowledge"
                className="inline-flex items-center gap-2 rounded-full border border-[#0c1836]/20 bg-[#fbf9f5] px-6 py-2.5 text-xs font-semibold text-[#0c1836] hover:bg-white"
              >
                <span>{ar ? "الإصدارات والبحوث المحكمة" : "Explore Research Publications"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
