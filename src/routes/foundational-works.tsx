import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  SectionLabel,
  useLanguage,
  Arrow,
} from "../components/site";
import {
  foundationalIntellectualWorks,
  centerInfo,
  type FoundationalWork,
} from "../lib/content";
import {
  BookOpen,
  Compass,
  ShieldCheck,
  Award,
  Sparkles,
  Layers,
  ArrowUpRight,
  GraduationCap,
  Globe2,
  BookmarkCheck,
  FileCheck2,
} from "lucide-react";

export const Route = createFileRoute("/foundational-works")({
  head: () => ({
    meta: [
      {
        title: "Foundational Intellectual Works — Dr. Abdulmohsen Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Foundational works shaping the intellectual and conceptual foundations of the Alrohaimi system: The Saudi School of Conscious Leadership, Literature of Existential Resistance, and the Conceptual Lexicon.",
      },
      {
        property: "og:title",
        content:
          "Foundational Intellectual Works | Dr. Abdulmohsen Alrohaimi Center",
      },
      {
        property: "og:description",
        content:
          "Foundational works, conceptual lexicons, and educational frameworks shaping the Alrohaimi intellectual system.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FoundationalWorksPage,
});

function FoundationalWorksPage() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [activeTab, setActiveTab] = useState<string>("fiw-001");

  const currentWork =
    foundationalIntellectualWorks.find((w) => w.id === activeTab) ||
    foundationalIntellectualWorks[0];

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        label={ar ? "الأصول الفكرية والمراجع الكبرى" : "Foundational Intellectual Pillars"}
        title={ar ? "الأعمال الفكرية التأسيسية" : "Foundational Intellectual Works"}
        description={
          ar
            ? "الأعمال التأسيسية التي تصوغ المنطلقات الفكرية والمفاهيمية لمنظومة الرحيمي. تشمل المدرسة السعودية للقيادة الواعية، وأدب المقاومة الوجودية، والمعجم المفاهيمي للقيادة الواعية."
            : "Foundational works shaping the intellectual and conceptual foundations of the Alrohaimi system. Includes the Saudi School of Conscious Leadership, Literature of Existential Resistance, and the Conceptual Lexicon of Conscious Leadership."
        }
      />

      {/* 2. Critical Distinction Banner (Point 30) */}
      <section className="border-b border-amber-900/15 bg-white py-8 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Layers className="text-amber-800 shrink-0" size={24} />
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                {ar ? "تمايز الأقسام المعرفية (المادة 30)" : "Methodological Architecture Distinction"}
              </span>
              <p className="text-xs sm:text-sm text-[#4e5e7b] mt-0.5">
                {ar
                  ? "يمايز المركز بدقة بين 'سلسلة أبحاث الرحيمي' (المعنية بالنظريات والنماذج والمقاييس التشخيصية) وبين 'الأعمال الفكرية التأسيسية' (المعنية بالكتب والمراجع المفاهيمية والبيانات الفلسفية)."
                  : "The Center strictly distinguishes the Alrohaimi Research Series (theories, models, metrics) from Foundational Intellectual Works (books, conceptual lexicons, and philosophical manifestos)."}
              </p>
            </div>
          </div>

          <Link
            to="/research-series"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-amber-800 hover:text-[#0c1836] shrink-0"
          >
            <span>{ar ? "الانتقال إلى سلسلة الأبحاث ←" : "View Research Series →"}</span>
          </Link>
        </div>
      </section>

      {/* 3. Interactive Three Foundational Works Tabs */}
      <section className="border-b border-amber-900/15 bg-[#fbf9f5] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {foundationalIntellectualWorks.map((work) => {
              const isSelected = activeTab === work.id;
              return (
                <button
                  key={work.id}
                  type="button"
                  onClick={() => setActiveTab(work.id)}
                  className={`flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isSelected
                      ? "bg-[#0c1836] text-[#dfbe7a] shadow-md scale-105"
                      : "border border-amber-900/15 bg-white text-[#0c1836] hover:bg-[#f5f0e6]"
                  }`}
                >
                  <span className="font-mono text-xs text-amber-700">{work.code}</span>
                  <span>{ar ? work.title.ar : work.title.en}</span>
                </button>
              );
            })}
          </div>

          {/* Active Work Detailed Showcase */}
          <div className="rounded-3xl border border-amber-900/20 bg-white p-8 lg:p-14 shadow-lg">
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              {/* Left Column: Metadata & Core Conceptual Blueprint */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm font-black text-amber-900 bg-[#f5f0e6] px-3.5 py-1 rounded-full border border-amber-900/15">
                    {currentWork.code}
                  </span>
                  <span className="rounded-full bg-[#0c1836]/5 px-3.5 py-1 font-mono text-xs font-bold text-[#0c1836] border border-[#0c1836]/10">
                    {ar ? currentWork.classification.ar : currentWork.classification.en}
                  </span>
                </div>

                <h2 className="mt-4 font-display text-2xl sm:text-4xl font-black text-[#0c1836]">
                  {ar ? currentWork.title.ar : currentWork.title.en}
                </h2>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4e5e7b]">
                  {ar ? currentWork.description.ar : currentWork.description.en}
                </p>

                {/* Scientific Status & Framing Statement (Points 31, 32, 33) */}
                <div className="mt-6 rounded-2xl border border-amber-900/15 bg-[#fbf9f5] p-5">
                  <span className="font-mono text-[10px] uppercase font-bold text-amber-900 tracking-wider block mb-1">
                    {ar ? "الموقع المعرفي والتأطير الأكاديمي:" : "Epistemic Framing & Positioning:"}
                  </span>
                  <p className="text-xs sm:text-sm text-[#0c1836] leading-relaxed">
                    {ar ? currentWork.scientificStatusNote.ar : currentWork.scientificStatusNote.en}
                  </p>
                </div>

                {/* Key Conceptual Highlights */}
                <div className="mt-8 space-y-3">
                  <span className="font-mono text-xs uppercase font-bold text-amber-900 tracking-wider block">
                    {ar ? "الركائز المفاهيمية الجوهرية" : "Key Intellectual Highlights"}
                  </span>
                  {currentWork.keyHighlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#4e5e7b]">
                      <BookmarkCheck className="text-amber-800 shrink-0 mt-0.5" size={16} />
                      <p>{ar ? h.ar : h.en}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Supported Applications & Executive Vehicle */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div className="rounded-2xl border border-amber-900/15 bg-gradient-to-br from-[#fbf9f5] via-white to-[#f5f0e6] p-6 shadow-xs">
                  <div className="flex items-center gap-2 border-b border-amber-900/10 pb-3">
                    <GraduationCap className="text-amber-800" size={18} />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0c1836]">
                      {ar ? "مجالات الدعم والتطبيق المؤسسي" : "Supported Institutional Domains"}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-[#718096]">
                    {ar ? currentWork.roleInSystem.ar : currentWork.roleInSystem.en}
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentWork.supportedAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-amber-900/10 bg-white p-3 shadow-2xs flex items-center gap-2"
                      >
                        <Sparkles size={12} className="text-amber-700 shrink-0" />
                        <span className="text-xs font-bold text-[#0c1836]">
                          {ar ? area.ar : area.en}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Link to Applied Programs */}
                <div className="rounded-2xl border border-[#0c1836]/15 bg-[#0c1836] p-6 text-white shadow-xs">
                  <h4 className="font-display text-lg font-bold text-[#dfbe7a]">
                    {ar ? "برامج المدرسة السعودية للقيادة الواعية" : "Explore Leadership Programs"}
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {ar
                      ? "اطّلع على المحفظة التنفيذية لبرامج القيادة الواعية وصناعة القرار والسيادة الإدراكية."
                      : "Review the executive portfolio of conscious leadership programs, masterclasses, and executive certifications."}
                  </p>
                  <Link
                    to="/programs"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-5 py-2 text-xs font-bold text-white shadow-gold hover:scale-105 transition-all"
                  >
                    <span>{ar ? "استعراض البرامج التنفيذية" : "View Leadership Programs"}</span>
                    <Arrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Global Inquiries & Reference Access */}
      <section className="bg-white py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] text-center max-w-3xl">
          <SectionLabel>{ar ? "الوصول المعرفي" : "Knowledge Access"}</SectionLabel>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#0c1836]">
            {ar
              ? "طلب مراجع ومصنفات المدرسة السعودية للقيادة الواعية"
              : "Institutional Reference Copies & Academic Inquiries"}
          </h3>
          <p className="mt-3 text-sm text-[#4e5e7b] leading-relaxed">
            {ar
              ? "يتاح للمؤسسات الحكومية والجامعات والباحثين طلب نسخ من المعجم المفاهيمي وأدلة المدرسة السعودية للقيادة الواعية."
              : "Government entities, universities, and academic researchers may request reference copies of the Conceptual Lexicon and School frameworks."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0c1836] px-6 py-3 text-xs font-bold text-[#dfbe7a] hover:bg-[#182952] transition-colors"
            >
              <span>{ar ? "طلب تواصل واعتماد أكاديمي" : "Request Institutional Access"}</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
