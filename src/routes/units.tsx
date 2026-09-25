import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  SectionLabel,
  useLanguage,
  Arrow,
} from "../components/site";
import { primaryUnits } from "../lib/content";
import researchLightImg from "../assets/research_light.jpg";
import { Building2, Layers, Sparkles, Network, Share2, Compass, ArrowUpRight, CheckCircle2, ShieldAlert, GraduationCap, BookMarked, Cpu } from "lucide-react";

export const Route = createFileRoute("/units")({
  head: () => ({
    meta: [
      {
        title: "Four Institutional Units — Dr. Abdulmohsen Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Discover the four foundational institutional units and six interdisciplinary research domains driving cognitive sovereignty, conscious leadership, and civilizational futures.",
      },
      {
        property: "og:title",
        content: "The Four Institutional Units | Alrohaimi Center",
      },
      {
        property: "og:description",
        content:
          "Four Primary Institutional Units translating thought into measurable civilizational impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Units,
});

function Units() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [activeUnit, setActiveUnit] = useState<number>(0);

  const unitIcons = [ShieldAlert, GraduationCap, BookMarked, Compass];

  return (
    <>
      {/* =====================================================================
          1. THINK-TANK CAMPUS HERO
          ===================================================================== */}
      <PageHero
        label={ar ? "البنية المؤسسية المعتمدة" : "Approved Institutional Architecture"}
        title={
          ar
            ? "الوحدات المؤسسية الأربع للمركز"
            : "The Center's Four Institutional Units"
        }
        description={
          ar
            ? "أربع وحدات مؤسسية رئيسية وستة مجالات بحثية بينية تعمل بتناغم منهجي لبناء المعرفة وتطوير الأدوات المعيارية وتحويل الفكر إلى أثر حضاري ملموس."
            : "Four foundational institutional units and six interdisciplinary research domains operating in systematic harmony to construct original theories, develop prototype diagnostic tools, and translate ideas into measurable civilizational impact."
        }
        image={researchLightImg}
        alt={ar ? "المكتبة البحثية ومرافق المركز" : "Research Think Tank & Knowledge Hub"}
      />

      {/* =====================================================================
          2. THE FOUR FOUNDATIONAL UNITS: Architectural Colonnade
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "الهيكلية المؤسسية الكبرى" : "Core Institutional Pillars"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "الوحدات المؤسسية الأربع" : "The Four Institutional Units"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "تشكل هذه الوحدات الأربع الركيزة الإدارية والعلمية الكبرى لمشروع المركز الفكري وتعمل كحواضن للبحث والتطوير."
                : "These four units constitute the primary scholarly and institutional pillars governing the Center's intellectual project."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {primaryUnits[lang].map((unit, i) => {
              const IconComp = unitIcons[i % unitIcons.length];
              return (
                <div
                  key={unit.id}
                  onClick={() => setActiveUnit(i)}
                  className={`group cursor-pointer relative flex flex-col justify-between rounded-3xl border p-8 lg:p-10 transition-all duration-300 ${
                    activeUnit === i
                      ? "border-[#b88a3b] bg-white shadow-md"
                      : "border-[#0c1836]/10 bg-white/70 hover:border-[#b88a3b]/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                        DIRECTORATE 0{i + 1}
                      </span>
                      <IconComp size={22} className="text-[#b88a3b]" />
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
                      {unit.title}
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-[#4e5e7b]">
                      {unit.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-[#0c1836]/10 pt-5">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#b88a3b] font-bold">
                      {ar ? "المحاور والمجالات التخصصية:" : "Core Focus Areas & Responsibilities:"}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {unit.focus.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-[#0c1836]/10 bg-[#fbf9f5] px-3 py-1 text-xs font-semibold text-[#0c1836] shadow-2xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Institutional Distinction Callout: 6 Research Domains across 4 Units (Section 4 & 5 of Master Revision) */}
          <div className="mt-12 rounded-3xl border border-[#b88a3b]/40 bg-white p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#0c1836]/10 pb-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#b88a3b]">
                  {ar ? "التمايز المؤسسي والمنهجي" : "Institutional & Epistemic Architecture"}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-[#0c1836]">
                  {ar
                    ? "مجالات البحث الستة تعمل عبر الوحدات المؤسسية الأربع"
                    : "Six Research Domains Operating Across Four Institutional Units"}
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[#4e5e7b]">
                {ar
                  ? "يميز المركز بدقة بين بنيته المؤسسية (الوحدات الأربع) ومجالاته البحثية التخصصية التي تنشط عبر هذه الوحدات لتحقيق الأثر المعرفي والحضاري."
                  : "The Center clearly distinguishes between its four operational units and its six interdisciplinary research domains that function collaboratively across them."}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { en: "Alrohaimi Theory", ar: "نظرية الرحيمي" },
                { en: "Cognitive Sovereignty", ar: "السيادة الإدراكية" },
                { en: "Conscious Leadership", ar: "القيادة الواعية" },
                { en: "Complex Systems", ar: "الأنظمة المعقدة" },
                { en: "Existential Resilience", ar: "المرونة الوجودية" },
                { en: "Civilizational Transformation", ar: "التحول الحضاري" },
              ].map((domain, idx) => (
                <div key={idx} className="rounded-2xl border border-[#0c1836]/10 bg-[#fbf9f5] p-3 text-center">
                  <span className="font-mono text-[10px] font-bold text-[#b88a3b]">0{idx + 1}</span>
                  <p className="mt-1 font-display text-xs font-bold text-[#0c1836]">
                    {ar ? domain.ar : domain.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. APPLIED TRANSLATIONAL EXTENSION & NATIONAL ACCELERATOR
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="rounded-3xl border border-[#b88a3b]/40 bg-white p-8 lg:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#0c1836]/10 pb-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#b88a3b]">
                  {ar ? "الامتداد التطبيقي والمبادرات الوطنية" : "Applied Translational Extension"}
                </span>
                <h3 className="mt-2 font-display text-2xl lg:text-3xl font-bold text-[#0c1836]">
                  {ar
                    ? "الربط مع مسرّعة ابتكار الدواء بالذكاء الاصطناعي (ترخيص منشآت 1171)"
                    : "Integration with AI Drug Innovation Accelerator (Monsha'at License No. 1171)"}
                </h3>
              </div>
              <Link
                to="/partnerships"
                className="inline-flex items-center gap-2 rounded-full border border-[#b88a3b]/40 bg-[#fbf9f5] px-6 py-2.5 text-xs font-bold text-[#0c1836] hover:bg-[#f5f0e6] self-start lg:self-center transition-colors"
              >
                <span>{ar ? "استعراض المنظومة والموافقات" : "View Accelerator & SDAIA Tracks"}</span>
                <Arrow />
              </Link>
            </div>

            <p className="mt-6 text-base leading-relaxed text-[#4e5e7b]">
              {ar
                ? "ترتبط أبحاث الأنظمة الحية والنمذجة المعقدة مع مسرّعة ابتكار الدواء بالذكاء الاصطناعي وجمعية (WAII) الخاضعة للإشراف الفني لـ سدايا، بهدف ترجمة النماذج المعرفية للأنظمة الحية إلى وحدات تدريبية متخصصة لاكتشاف الأدوية ومشاريع حيوية ناشئة تدعم الأمن الدوائي والسيادة الصحية الوطنية."
                : "The Center's living systems and complex modeling research collaborates directly with the National AI Drug Innovation Accelerator and the WAII ecosystem under SDAIA supervision, bridging biological cognition models with computational drug design, specialized training units, and investable biotech ventures."}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#0c1836]/10 bg-[#fbf9f5] p-5">
                <span className="font-mono text-xs font-bold text-[#b88a3b]">01 // SDAIA SUPERVISION</span>
                <h4 className="mt-1 font-display text-sm font-bold text-[#0c1836]">
                  {ar ? "الإشراف الفني لـ سدايا" : "Technical Supervision by SDAIA"}
                </h4>
                <p className="mt-1 text-xs text-[#4e5e7b]">
                  {ar ? "مواءمة معايير الذكاء الاصطناعي والأمن الرقمي الوطني." : "Aligning computational biopharma models with sovereign standards."}
                </p>
              </div>
              <div className="rounded-2xl border border-[#0c1836]/10 bg-[#fbf9f5] p-5">
                <span className="font-mono text-xs font-bold text-[#b88a3b]">02 // MONSHA'AT LICENSE 1171</span>
                <h4 className="mt-1 font-display text-sm font-bold text-[#0c1836]">
                  {ar ? "ترخيص حاضنة ومسرّعة منشآت" : "Monsha'at Licensed Accelerator"}
                </h4>
                <p className="mt-1 text-xs text-[#4e5e7b]">
                  {ar ? "تأهيل الشركات الحيوية الناشئة ونقل التقنية المتقدمة." : "Incubating emerging pharmaceutical and therapeutic biotech ventures."}
                </p>
              </div>
              <div className="rounded-2xl border border-[#0c1836]/10 bg-[#fbf9f5] p-5">
                <span className="font-mono text-xs font-bold text-[#b88a3b]">03 // HEALTH SOVEREIGNTY</span>
                <h4 className="mt-1 font-display text-sm font-bold text-[#0c1836]">
                  {ar ? "الأمن الدوائي والسيادة الصحية" : "National Health Sovereignty"}
                </h4>
                <p className="mt-1 text-xs text-[#4e5e7b]">
                  {ar ? "توطين سلاسل القيمة الدوائية واكتشاف المركبات العلاجية." : "Accelerating indigenous pharmaceutical discovery pipelines."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. BILATERAL RESEARCH PROTOCOLS & SCHOLARLY PARTNERSHIPS
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
          <div className="relative rounded-3xl border border-[#0c1836]/15 bg-white p-8 text-center shadow-sm lg:p-12">
            <Network className="mx-auto text-[#b88a3b]" size={42} />
            <h3 className="mt-4 font-display text-2xl font-bold text-[#0c1836] md:text-3xl">
              {ar ? "بناء مشروعات بحثية وشراكات علمية مع المركز" : "Initiate Academic Collaboration & Joint Programs"}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "يرحب المركز ويطور شراكات علمية وبحثية مع الجامعات العالمية والمؤسسات البحثية والجهات المؤسسية لتعزيز السيادة الإدراكية وصناعة أثر حضاري مستدام."
                : "The Center welcomes and develops partnerships with international universities, research institutions, and institutional stakeholders to advance cognitive sovereignty and create enduring civilizational impact."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/partnerships"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-7 py-3 text-sm font-bold text-white shadow-gold hover:from-[#c59642] hover:to-[#a77019]"
              >
                <span>{ar ? "استعراض آليات الشراكة" : "Explore Partnership Protocols"}</span>
                <Arrow />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#0c1836]/20 bg-[#fbf9f5] px-6 py-3 text-sm font-semibold text-[#0c1836] hover:bg-white"
              >
                <span>{ar ? "التواصل مع إدارة الأبحاث" : "Contact Research Directorate"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
