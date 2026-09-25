import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  SectionLabel,
  useLanguage,
  Arrow,
} from "../components/site";
import { primaryUnits, units } from "../lib/content";
import researchLightImg from "../assets/research_light.jpg";
import { Building2, Layers, Sparkles, Network, FlaskConical, Share2, Compass, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/units")({
  head: () => ({
    meta: [
      {
        title: "Center Units & Labs — Dr. Abdulmohsen Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Discover the four foundational institutional units and seven specialized research laboratories driving cognitive sovereignty, conscious leadership, and civilizational futures.",
      },
      {
        property: "og:title",
        content: "Institutional Units & Research Labs | Alrohaimi Center",
      },
      {
        property: "og:description",
        content:
          "Four Primary Units and Seven Specialized Laboratories translating thought into measurable impact.",
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

  return (
    <>
      {/* =====================================================================
          1. THINK-TANK CAMPUS HERO
          ===================================================================== */}
      <PageHero
        label={ar ? "البنية المؤسسية والبحثية" : "Institutional & Research Architecture"}
        title={
          ar
            ? "وحدات المركز ومختبراته المتخصصة"
            : "The Center's Units & Research Labs"
        }
        description={
          ar
            ? "أربع وحدات مؤسسية رئيسية وسبعة مختبرات ومنصات بحثية متكاملة تعمل بتناغم منهجي لبناء المعرفة وتطوير الأدوات المعيارية وتحويل الفكر إلى أثر حضاري ملموس."
            : "Four foundational institutional units and seven specialized research laboratories operating in systematic harmony to construct original theories, calibrate diagnostic metrics, and translate ideas into measurable impact."
        }
        image={researchLightImg}
        alt={ar ? "المكتبة البحثية ومختبرات المركز" : "Research Think Tank & Knowledge Hub"}
      />

      {/* =====================================================================
          2. THE FOUR FOUNDATIONAL UNITS: Architectural Colonnade
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "الوحدات المؤسسية الكبرى" : "Core Primary Units"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "الوحدات القيادية الأربع للمركز" : "The Four Foundational Units"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "تشكل هذه الوحدات الأربع الركيزة الإدارية والعلمية الكبرى لمشروع المركز الفكري."
                : "These four units constitute the primary scholarly and executive pillars governing the Center's intellectual project."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {primaryUnits[lang].map((unit, i) => (
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
                    <Building2 size={22} className="text-[#b88a3b]" />
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
                    {ar ? "المحاور والمجالات البحثية الرئيسية:" : "Core Focus Areas & Responsibilities:"}
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
            ))}
          </div>

          {/* Institutional Distinction Callout: 6 Research Domains across 4 Units (Point 9 & 35) */}
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
          3. THE SEVEN RESEARCH LABS: Scientific Console Matrix (Zero Cards)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "المختبرات والمنصات التخصصية" : "Specialized Laboratories"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar
                ? "سبعة مختبرات ومنصات بحثية متقدمة"
                : "Seven Specialized Research Labs & Platforms"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "أذرع تجريبية وتطبيقية متخصصة تترجم المفاهيم النظرية إلى أبحاث ميدانية وأدوات قياس محكمة."
                : "Specialized empirical and applied entities translating theoretical concepts into field studies and verified diagnostic tools."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {units[lang].map((lab, i) => (
              <div
                key={lab[0]}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-7 transition-all duration-300 hover:border-[#b88a3b]/50 hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                      LAB 0{i + 1}
                    </span>
                    <span className="rounded-full bg-[#f5f0e6] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#0c1836]">
                      {lab[2]}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
                    {lab[0]}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                    {lab[1]}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#0c1836]/10 pt-4 text-xs font-bold text-[#b88a3b]">
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>{ar ? "مختبر بحثي نشط" : "Active Research Platform"}</span>
                  </span>
                  <FlaskConical size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* Applied Translational Extension: AI Drug Innovation Accelerator */}
          <div className="mt-12 rounded-3xl border border-[#b88a3b]/40 bg-white p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#0c1836]/10 pb-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#b88a3b]">
                  {ar ? "الامتداد التطبيقي والشراكات الحيوية" : "Applied Translational Extension"}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-[#0c1836]">
                  {ar
                    ? "الربط مع مسرّعة ابتكار الدواء بالذكاء الاصطناعي (ترخيص منشآت 1171)"
                    : "Integration with AI Drug Innovation Accelerator (Monsha'at 1171)"}
                </h3>
              </div>
              <Link
                to="/partnerships"
                className="inline-flex items-center gap-2 rounded-full border border-[#b88a3b]/40 bg-[#fbf9f5] px-5 py-2 text-xs font-bold text-[#0c1836] hover:bg-[#f5f0e6] self-start lg:self-center"
              >
                <span>{ar ? "استعراض المنظومة والموافقات" : "View Accelerator & SDAIA Tracks"}</span>
                <Arrow />
              </Link>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[#4e5e7b]">
              {ar
                ? "يرتبط مختبر الأنظمة الحية والإدراك الحيوي تشغيلياً وبحثياً مع مسرّعة ابتكار الدواء بالذكاء الاصطناعي وجمعية (WAII) الخاضعة للإشراف الفني لـ سدايا، بهدف ترجمة النماذج المعرفية للأنظمة الحية إلى وحدات تدريبية متخصصة لاكتشاف الأدوية ومشاريع حيوية ناشئة تدعم الأمن الدوائي والسيادة الصحية الوطنية."
                : "The Living Systems & Biological Cognition Lab collaborates directly with the National AI Drug Innovation Accelerator and the WAII ecosystem under SDAIA supervision, bridging biological cognition models with computational drug design, specialized training units, and investable biotech ventures."}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. BILATERAL RESEARCH PROTOCOLS
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
          <div className="relative rounded-3xl border border-[#0c1836]/15 bg-white p-8 text-center shadow-sm lg:p-12">
            <Network className="mx-auto text-[#b88a3b]" size={42} />
            <h3 className="mt-4 font-display text-2xl font-bold text-[#0c1836] md:text-3xl">
              {ar ? "بناء مشروعات بحثية مشتركة مع المركز" : "Initiate Joint Scholarly Programs"}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "ترحب وحدات المركز ومختبراته بالشراكات الأكاديمية مع الأقسام المتخصصة في كبرى الجامعات السعودية والعالمية لدراسة نماذج المركز واختبارها عبر بيئات متنوعة."
                : "The Center's units actively invite scientific partnerships with leading academic faculties worldwide to study, test, and adapt its models across diverse institutional contexts."}
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
