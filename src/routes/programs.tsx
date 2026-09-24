import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  SectionLabel,
  useLanguage,
  Button,
  Arrow,
} from "../components/site";
import { leadershipPrograms, type ProgramItem } from "../lib/content";
import { ProgramModal } from "../components/ProgramModal";
import leadershipLightImg from "../assets/leadership_light.jpg";
import { Clock, Users, BookOpen, Award, CheckCircle2, Calendar, Sparkles, Building, Landmark, Compass, ArrowUpRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      {
        title:
          "Programs — Saudi School of Conscious Leadership | Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Explore the eight specialized executive leadership programs of the Saudi School of Conscious Leadership, translating cognition, systems, AI, and civilizational transformation into practice.",
      },
      {
        property: "og:title",
        content: "Saudi School of Conscious Leadership | Alrohaimi Center",
      },
      {
        property: "og:description",
        content:
          "Transforming Theoretical Insight into Sovereign Executive Leadership Practice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Programs,
});

function Programs() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeDelivery, setActiveDelivery] = useState<number>(0);

  const deliveryFormats = [
    {
      title: ar ? "معايشات تنفيذية حضورية مغلقة" : "In-Person Executive Immersions",
      desc: ar
        ? "جلسات مكثفة تنعقد في الرياض وتجمع كبار المسؤولين والوزراء لمناقشة التحديات الاستراتيجية وحل المعضلات المعقدة في بيئات تفكير مغلقة وآمنة."
        : "Intensive high-table masterclasses held in Riyadh, convening ministers and C-suite leaders for strategic deliberations in confidential Chatham House settings.",
      format: ar ? "حضوري · الرياض" : "On-Campus · Riyadh",
      features: ar
        ? ["طاولات حوار وزارية مغلقة", "معايشة قيادية مكثفة لـ 3 أيام", "محاكاة واقعية لإدارة الأزمات"]
        : ["Chatham House Rules", "3-Day Intensive Residency", "Crisis Simulation Labs"],
    },
    {
      title: ar ? "منصات التعلم التفاعلي المتقدم" : "Live Interactive Digital Masterclasses",
      desc: ar
        ? "برامج رقمية متزامنة تتيح للقادة المشاركة الفاعلة والمستمرة دون الانقطاع عن مسؤولياتهم الوطنية والتنفيذية اليومية مع دراسات حالة معمقة."
        : "Flexible, high-engagement digital sessions designed for sovereign and corporate leaders with demanding schedules, featuring deep live case studies.",
      format: ar ? "افتراضي متزامن" : "Synchronous Virtual",
      features: ar
        ? ["جلسات أسبوعية تفاعلية", "غرف تفكير ومداولة قيادية", "متابعة استشارية مباشرة"]
        : ["Weekly Live Colloquia", "Peer Deliberation Rooms", "Executive Advisory Office Hours"],
    },
    {
      title: ar ? "التعلم المدمج والمحاكاة المنظومية" : "Blended Learning & Strategic Simulation",
      desc: ar
        ? "تكامل ثنائي يجمع بين الدراسة النظرية المعمقة المستقلة والتطبيقات الميدانية وحلقات المحاكاة المنظومية للقرارات في عصر الذكاء الاصطناعي."
        : "A multi-tiered methodology combining deep theoretical preparation with live institutional crisis simulations in the age of algorithmic governance.",
      format: ar ? "نموذج هجين متقدم" : "Advanced Hybrid Format",
      features: ar
        ? ["مختبرات محاكاة خوارزمية", "مشروع تحول مؤسسي تطبيقي", "اعتماد مؤشر الرحيمي (AICT)"]
        : ["Algorithmic Simulation Labs", "Applied Capstone Transformation", "Alrohaimi Index Certification"],
    },
  ];

  const filterTabs = [
    { id: "all", label: ar ? "كافة البرامج (08)" : "All Programs (08)" },
    { id: "csuite", label: ar ? "الوزراء والقيادات العليا" : "Ministers & C-Suite" },
    { id: "digital", label: ar ? "الذكاء الاصطناعي والتحول" : "AI & Digital Agency" },
    { id: "academic", label: ar ? "القيادات الجامعية" : "University Leaders" },
  ];

  const filteredPrograms = leadershipPrograms.filter((p) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "csuite") return p.id.includes("decision") || p.id.includes("civilizational");
    if (selectedFilter === "digital") return p.id.includes("ai") || p.id.includes("cognitive");
    if (selectedFilter === "academic") return p.id.includes("university") || p.id.includes("human");
    return true;
  });

  return (
    <>
      <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />

      {/* =====================================================================
          1. EXECUTIVE ACADEMY HERO
          ===================================================================== */}
      <PageHero
        label={ar ? "الذراع القيادي والتنفيذي" : "Executive Leadership Arm"}
        title={
          ar
            ? "المدرسة السعودية للقيادة الواعية"
            : "Saudi School of Conscious Leadership"
        }
        description={
          ar
            ? "مسار المركز التدريبي لتحويل المعرفة والنظريات إلى ممارسة قيادية رشيدة، يربط التفكير النظري بالقيادة العملية عبر القرار، والسيادة الإدراكية، والتحول الحضاري، والذكاء الاصطناعي، والتفكير المنظومي."
            : "The Center's executive training pathway for transforming knowledge and theory into conscious leadership practice, connecting theoretical thinking with practical leadership through decision-making, cognitive sovereignty, civilizational transformation, AI, and systems thinking."
        }
        image={leadershipLightImg}
        alt={ar ? "قاعة القيادة الواعية" : "Saudi School of Conscious Leadership Chamber"}
      />

      {/* =====================================================================
          2. ADMISSIONS STATUS MARQUEE
          ===================================================================== */}
      <div className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-3.5">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 text-xs font-semibold text-[#0c1836] lg:px-10">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-600 pulse-gold-light" />
            <span className="font-mono text-[#b88a3b] font-black uppercase">
              {ar ? "القبول متاح لدفعات عام 2026" : "2026 Cohort Nominations Open"}
            </span>
          </div>
          <p className="hidden md:inline font-display italic text-[#4e5e7b]">
            {ar
              ? "برامج مصممة خصيصاً للوزارات والجهات السيادية والشركات الوطنية الرائدة"
              : "Bespoke executive cohorts for ministries, sovereign authorities, and national champions"}
          </p>
          <button
            onClick={() => setSelectedProgram(leadershipPrograms[0])}
            className="font-bold text-[#b88a3b] hover:text-[#0c1836] transition-colors"
          >
            {ar ? "طلب ترشيح مؤسسي ←" : "Request Nomination ←"}
          </button>
        </div>
      </div>

      {/* =====================================================================
          3. PEDAGOGICAL PHILOSOPHY: Open Keynote
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-10">
          <SectionLabel>{ar ? "الفلسفة البيداغوجية" : "Pedagogical Foundation"}</SectionLabel>
          <h2 className="mt-2 font-display text-3xl font-black text-[#0c1836] md:text-5xl">
            {ar
              ? "قيادة ترتكز إلى عمق الإدراك والمسؤولية الحضارية"
              : "Leadership Grounded in Deep Cognition & Civilizational Responsibility"}
          </h2>
          <div className="mx-auto mt-6 h-0.5 w-24 bg-[#b88a3b]" />
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#4e5e7b] md:text-lg">
            {ar
              ? "لا تكتفي المدرسة بتعليم الأدوات الإدارية التقليدية؛ بل تعيد صياغة العدسة الإدراكية للقائد ليصبح قادراً على تفكيك الأنظمة المعقدة، والتحرر من التبعية الخوارزمية، وقيادة التحولات الكبرى بإرادة واعية وكرامة إنسانية راسخة."
              : "The School transcends conventional management toolkits; it reprograms the leader's perceptual lens, fostering the capacity to deconstruct complex systemic dynamics, overcome algorithmic vulnerabilities, and direct civilizational transformation with conscious intent and unwavering human dignity."}
          </p>
        </div>
      </section>

      {/* =====================================================================
          4. THE EIGHT PROGRAMS: Executive Master Roster (No Cards)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <SectionLabel>{ar ? "المحفظة التدريبية" : "Program Portfolio"}</SectionLabel>
              <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-4xl">
                {ar ? "البرامج القيادية الثمانية المتخصصة" : "The Eight Specialized Programs"}
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    selectedFilter === tab.id
                      ? "bg-[#b88a3b] text-white shadow-gold font-bold"
                      : "border border-[#0c1836]/15 bg-white text-[#4e5e7b] hover:border-[#b88a3b]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Programs Architectural Roster */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                onClick={() => setSelectedProgram(prog)}
                className="group cursor-pointer relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-8 transition-all duration-300 hover:border-[#b88a3b]/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                      PROGRAM 0{leadershipPrograms.findIndex((x) => x.id === prog.id) + 1}
                    </span>
                    <span className="rounded-full bg-[#f5f0e6] px-3 py-1 font-mono text-[10px] font-bold text-[#0c1836]">
                      {ar ? prog.arabicDuration : prog.duration}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
                    {ar ? prog.arabicTitle : prog.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                    {ar ? prog.arabicDescription : prog.description}
                  </p>

                  <div className="mt-6 rounded-xl border border-[#0c1836]/10 bg-[#fbf9f5] p-3.5">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-[#b88a3b] font-bold">
                      {ar ? "الفئة المستهدفة" : "Target Audience"}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#0c1836]">
                      {ar ? prog.arabicAudience : prog.audience}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#0c1836]/10 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b88a3b] group-hover:text-[#0c1836] transition-colors">
                    <BookOpen size={14} />
                    <span>{ar ? "عرض تفاصيل المنهج والتسجيل" : "View Syllabus & Apply"}</span>
                  </span>
                  <Arrow />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. DELIVERY MODELS: Interactive 3-Column Executive Immersion Pavilion
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "صيغ التدريب والتقديم" : "Delivery Formats"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "خيارات دراسية تناسب القيادات العليا" : "Flexible Executive Delivery Models"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "صممت مسارات التدريب لتلائم الجداول المزدحمة للقيادات التنفيذية وصناع القرار مع أقصى درجات التركيز."
                : "Program structures engineered specifically around the high-demand schedules of senior government and corporate leaders."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {deliveryFormats.map((item, idx) => (
              <div
                key={item.format}
                onClick={() => setActiveDelivery(idx)}
                className={`group cursor-pointer relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 ${
                  activeDelivery === idx
                    ? "border-[#b88a3b] bg-white shadow-md"
                    : "border-[#0c1836]/10 bg-[#fbf9f5] hover:border-[#b88a3b]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                      MODEL 0{idx + 1}
                    </span>
                    <span className="rounded-full bg-[#f5f0e6] px-3 py-1 font-mono text-[10px] font-bold text-[#0c1836]">
                      {item.format}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                    {item.desc}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-[#0c1836]/10 pt-4">
                    {item.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-[#0c1836]">
                        <CheckCircle2 size={13} className="text-[#b88a3b]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-[#0c1836]/10 pt-4 text-xs font-bold text-[#b88a3b]">
                  <span>{ar ? "معتمد لكافة الدفعات" : "Standard Cohort Track"}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cohort Reservation Callout (Open Architectural Salon) */}
          <div className="mt-14 rounded-3xl border border-[#b88a3b]/30 bg-white p-8 text-center shadow-sm lg:p-12">
            <h3 className="font-display text-2xl font-bold text-[#0c1836] md:text-3xl">
              {ar
                ? "ترشيح القيادات لدفعات المدرسة السعودية للقيادة الواعية"
                : "Executive Nomination & Institutional Cohorts"}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "تتيح المدرسة للمؤسسات والوزارات والجامعات ترشيح فرق القيادة العليا لبرامج مخصصة وحصرية تلبي أولويات التحول المؤسسي ورؤية المملكة 2030."
                : "Custom executive cohorts and closed ministerial immersions are available for sovereign entities and enterprise organizations upon consultation."}
            </p>
            <div className="mt-8">
              <Button
                onClick={() => setSelectedProgram(leadershipPrograms[0])}
                className="bg-gradient-to-r from-[#b88a3b] to-[#996515] text-white font-bold shadow-gold hover:from-[#c59642] hover:to-[#a77019]"
              >
                {ar ? "تقديم طلب ترشيح لمؤسستك" : "Request Institutional Cohort Consultation"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
