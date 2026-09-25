import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  SectionLabel,
  useLanguage,
  Arrow,
} from "../components/site";
import {
  alrohaimiResearchSeries,
  foundationalIntellectualWorks,
  publications,
  researchDomainsNote,
} from "../lib/content";
import researchLightImg from "../assets/research_light.jpg";
import {
  BookOpen,
  Search,
  Download,
  FileText,
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
  Scale,
  Compass,
  Check,
  Copy,
  Users,
  Globe2,
} from "lucide-react";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      {
        title: "Research & Publications — Dr. Abdulmohsen Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Official research portal, theoretical treatises, empirical programs, Alrohaimi Research Series, and peer-review opportunities from the Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation.",
      },
      {
        property: "og:title",
        content: "Research & Publications | Alrohaimi Center",
      },
      {
        property: "og:description",
        content:
          "Original research series, theoretical models, foundational works, and empirical validation programs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredPubs = publications.filter((p) => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return true;
    return (
      p.title.en.toLowerCase().includes(q) ||
      p.title.ar.includes(q) ||
      p.description.en.toLowerCase().includes(q) ||
      p.description.ar.includes(q) ||
      p.author.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* =====================================================================
          1. RESEARCH & PUBLICATIONS HERO
          ===================================================================== */}
      <PageHero
        label={ar ? "المنصة البحثية والأكاديمية" : "Research & Academic Platform"}
        title={
          ar
            ? "الأبحاث والنشر العلمي المحكم"
            : "Research & Scholarly Publications"
        }
        description={
          ar
            ? "المنصة الرسمية لنشر الأطر النظرية، وسلسلة أبحاث الرحيمي، والأعمال التأسيسية، والنماذج التشخيصية المطروحة للحوار الأكاديمي والتحقق التجريبي الدولي."
            : "The official academic portal presenting the Center's theoretical frameworks, research monographs, foundational treatises, and diagnostic instruments open to peer engagement and international empirical testing."
        }
        image={researchLightImg}
        alt={ar ? "الأبحاث والنشر الأكاديمي" : "Academic Research & Publications"}
      />

      {/* =====================================================================
          2. EPISTEMIC CHARTER: Theoretical Construction vs. Empirical Findings (Point 25 & 26)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="rounded-3xl border border-[#b88a3b]/40 bg-white p-8 lg:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-[#0c1836]/10 pb-8">
              <div className="max-w-2xl">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#b88a3b]">
                  {ar ? "الميثاق العلمي المعياري" : "Scientific Positioning Principle"}
                </span>
                <h2 className="mt-2 font-display text-2xl font-black text-[#0c1836] md:text-3xl">
                  {ar
                    ? "التمييز المنهجي بين البناء النظري والنتائج التجريبية"
                    : "Distinction Between Theoretical Construction & Empirical Findings"}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4e5e7b]">
                  {ar
                    ? "يميز المركز بدقة بين البناء النظري والنمذجة المفاهيمية من جهة، والنتائج التجريبية التي تنبثق عن دراسات التحقق الحالية أو المستقبلية من جهة أخرى. وتُطرح هذه الأطر كنماذج معرفية حية ومفتوحة للمراجعة الأكاديمية والتحقق التجريبي الدولي."
                    : "The Center distinguishes between theoretical construction and conceptual modeling on the one hand, and empirical findings that emerge from ongoing or future validation studies on the other. The frameworks are presented as living knowledge projects open to peer engagement and international empirical testing."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  to="/research-series"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0c1836] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#dfbe7a] shadow-md transition-all hover:bg-[#1a2d5a]"
                >
                  <span>{ar ? "استعراض سلسلة الأبحاث" : "Explore Research Series"}</span>
                  <Arrow className="size-4" />
                </Link>
                <Link
                  to="/intellectual-system"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0c1836]/20 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0c1836] shadow-2xs transition-all hover:border-[#b88a3b]"
                >
                  <span>{ar ? "المنظومة الفكرية" : "Intellectual System"}</span>
                  <ArrowUpRight size={14} className="text-[#b88a3b]" />
                </Link>
              </div>
            </div>

            {/* Scientific Development Pathway (Point 47) */}
            <div className="mt-8">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#718096]">
                {ar ? "مسار التطور العلمي المعتمد:" : "Center Development Pathway:"}
              </span>
              <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs font-semibold text-[#0c1836]">
                <span className="rounded-lg bg-[#f5f0e6] px-3 py-1.5 border border-[#0c1836]/10">
                  {ar ? "النظرية" : "Theory"}
                </span>
                <span className="text-[#b88a3b]">→</span>
                <span className="rounded-lg bg-[#f5f0e6] px-3 py-1.5 border border-[#0c1836]/10">
                  {ar ? "المفاهيم" : "Concepts"}
                </span>
                <span className="text-[#b88a3b]">→</span>
                <span className="rounded-lg bg-[#f5f0e6] px-3 py-1.5 border border-[#0c1836]/10">
                  {ar ? "النماذج والأطر" : "Models & Frameworks"}
                </span>
                <span className="text-[#b88a3b]">→</span>
                <span className="rounded-lg bg-[#f5f0e6] px-3 py-1.5 border border-[#0c1836]/10">
                  {ar ? "الأبحاث (ARS)" : "Research (ARS)"}
                </span>
                <span className="text-[#b88a3b]">→</span>
                <span className="rounded-lg bg-[#f5f0e6] px-3 py-1.5 border border-[#0c1836]/10">
                  {ar ? "الأدوات والمحاكاة" : "Tools & Simulations"}
                </span>
                <span className="text-[#b88a3b]">→</span>
                <span className="rounded-lg bg-[#f5f0e6] px-3 py-1.5 border border-[#0c1836]/10">
                  {ar ? "التحقق التجريبي" : "Empirical Validation"}
                </span>
                <span className="text-[#b88a3b]">→</span>
                <span className="rounded-lg bg-[#0c1836] text-[#dfbe7a] px-3 py-1.5 shadow-sm">
                  {ar ? "التطبيقات الحضارية" : "Applications"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. DUAL INTELLECTUAL PILLARS: ARS vs. FIW (Point 27, 29, 30)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "أعمدة الإنتاج العلمي والمعرفي" : "Dual Scholarly Pillars"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar
                ? "سلسلة الأبحاث والأعمال الفكرية التأسيسية"
                : "Research Series & Foundational Works"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "يميز المركز بين مسارين رئيسيين: سلسلة أبحاث الرحيمي الموجهة للتحقق الأكاديمي، والأعمال التأسيسية التي تصوغ المفاهيم والمعاجم الكبرى."
                : "The Center strictly delineates two major publication wings: the Alrohaimi Research Series focused on conceptual models & diagnostic development, and Foundational Intellectual Works shaping the overarching worldview."}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Wing 1: Alrohaimi Research Series */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-8 lg:p-10 shadow-sm transition-all duration-300 hover:border-[#b88a3b]/50">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                    MAJOR SERIES // ARS-001 → ARS-005
                  </span>
                  <FileText className="text-[#b88a3b]" size={24} />
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-[#0c1836]">
                  {ar ? "سلسلة أبحاث الرحيمي" : "Alrohaimi Research Series (ARS)"}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                  {ar
                    ? "تقدم سلسلة أبحاث الرحيمي الأطر النظرية المتطورة للمركز، والنماذج المفاهيمية، والبرامج البحثية التطبيقية، وأدوات التشخيص. تنشر كل دراسة بحالتها العلمية وتظل مفتوحة للحوار والتحقق التجريبي الدولي."
                    : "Presents the Center’s developing theoretical frameworks, conceptual models, applied research programs, and research instruments. Each publication is presented with its scientific status and remains open to peer engagement and international empirical validation."}
                </p>

                <div className="mt-6 space-y-2.5">
                  {alrohaimiResearchSeries.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-xl border border-[#0c1836]/10 bg-[#fbf9f5] px-4 py-2.5 text-xs font-semibold"
                    >
                      <span className="font-mono text-[#b88a3b] font-bold">{item.code}</span>
                      <span className="text-[#0c1836] truncate px-3">
                        {ar ? item.title.ar : item.title.en}
                      </span>
                      <span className="shrink-0 rounded-full bg-[#f5f0e6] px-2 py-0.5 text-[10px] text-[#718096]">
                        {ar ? item.arabicScientificStatus : item.scientificStatus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-[#0c1836]/10 pt-5">
                <Link
                  to="/research-series"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88a3b] hover:text-[#0c1836]"
                >
                  <span>{ar ? "عرض جميع دراسات السلسلة والتحميل" : "View Complete ARS Archive"}</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            {/* Wing 2: Foundational Intellectual Works */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-8 lg:p-10 shadow-sm transition-all duration-300 hover:border-[#b88a3b]/50">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                    CANONICAL WORKS // FIW-001 → FIW-003
                  </span>
                  <BookOpen className="text-[#b88a3b]" size={24} />
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-[#0c1836]">
                  {ar ? "الأعمال الفكرية التأسيسية" : "Foundational Intellectual Works (FIW)"}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                  {ar
                    ? "المؤلفات والأعمال الفكرية والمراجع المفاهيمية التي تصوغ الأسس المعرفية والفلسفية لمنظومة الرحيمي الفكرية، وتوفر المعاجم والمفردات التأصيلية للقيادة والتحول الحضاري."
                    : "Foundational books, intellectual works, conceptual references, and manifestos shaping the broader intellectual system. Includes The Saudi School of Conscious Leadership, Literature of Existential Resistance, and Conceptual Lexicon."}
                </p>

                <div className="mt-6 space-y-2.5">
                  {foundationalIntellectualWorks.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-xl border border-[#0c1836]/10 bg-[#fbf9f5] px-4 py-2.5 text-xs font-semibold"
                    >
                      <span className="font-mono text-[#b88a3b] font-bold">{item.code}</span>
                      <span className="text-[#0c1836] truncate px-3">
                        {ar ? item.title.ar : item.title.en}
                      </span>
                      <span className="shrink-0 rounded-full bg-[#f5f0e6] px-2 py-0.5 text-[10px] text-[#718096]">
                        {ar ? item.classification.ar : item.classification.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-[#0c1836]/10 pt-5">
                <Link
                  to="/foundational-works"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88a3b] hover:text-[#0c1836]"
                >
                  <span>{ar ? "استعراض الأعمال التأسيسية والمعاجم" : "Explore Foundational Works"}</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. GLOBAL ACADEMIC POSITIONING (Point 42)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "التعاون الأكاديمي الدولي" : "International Academic Engagement"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar
                ? "مجالات التعاون البحثي والشراكات العلمية"
                : "Research Collaboration & Peer Engagement"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "يرحب المركز بالتعاون البحثي مع الجامعات العالمية والمؤسسات الأكاديمية في مسارات التحقق الميداني والسيادة الإدراكية."
                : "The Center actively welcomes academic faculties, research laboratories, and think tanks for joint empirical research, replication studies, and peer dialogue."}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                en: "International Research Collaboration",
                ar: "التعاون البحثي الدولي",
                desc: ar ? "شراكات مع جامعات ومراكز فكر عالمية" : "Joint research projects with global universities & institutes.",
              },
              {
                en: "University Partnerships",
                ar: "الشراكات الجامعية",
                desc: ar ? "تطوير مناهج وبرامج بحث مشتركة" : "Curriculum development and graduate research exchanges.",
              },
              {
                en: "Peer Engagement & Review",
                ar: "الحوار والتحكيم الأكاديمي",
                desc: ar ? "مراجعة نقدية للأطر والنماذج التأسيسية" : "Critical appraisal of theoretical models and constructs.",
              },
              {
                en: "Empirical Validation Studies",
                ar: "دراسات التحقق التجريبي",
                desc: ar ? "اختبار ميداني لمؤشر الرحيمي ومصفوفات القياس" : "Field testing of the Alrohaimi Index and diagnostic metrics.",
              },
              {
                en: "Research Replication",
                ar: "إعادة إنتاج الأبحاث وتكرارها",
                desc: ar ? "إتاحة المنهجيات والبيانات للمطابقة الأكاديمية" : "Open methodologies for rigorous replication in diverse contexts.",
              },
              {
                en: "AI Governance & Cognitive Sovereignty",
                ar: "حوكمة الذكاء الاصطناعي والسيادة الإدراكية",
                desc: ar ? "حماية القرار الإنساني من التشتت والتحيز الخوارزمي" : "Safeguarding human autonomy against algorithmic bias.",
              },
            ].map((collab, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#0c1836]/10 bg-white p-6 shadow-2xs transition-all hover:border-[#b88a3b]/40"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#b88a3b]">0{idx + 1}</span>
                  <h4 className="font-display text-base font-bold text-[#0c1836]">
                    {ar ? collab.ar : collab.en}
                  </h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#4e5e7b]">{collab.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 rounded-full bg-[#0c1836] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#dfbe7a] shadow-md transition-all hover:bg-[#1a2d5a]"
            >
              <span>{ar ? "تقديم طلب شراكة بحثية" : "Initiate Research Partnership"}</span>
              <Arrow className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. COMPLETE PUBLICATIONS CATALOG WITH SEARCH & CITATION
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0c1836]/10 pb-8">
            <div>
              <SectionLabel>{ar ? "الأرشيف الكامل للمنشورات" : "Publications Archive"}</SectionLabel>
              <h2 className="font-display text-3xl font-black text-[#0c1836]">
                {ar ? "فهرس الأوراق والمؤلفات" : "Monographs & Papers Index"}
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={ar ? "ابحث في العنوان أو المؤلف..." : "Search publications..."}
                className="w-full rounded-full border border-[#0c1836]/15 bg-white px-4 py-2.5 pl-10 text-xs text-[#0c1836] placeholder-[#718096] focus:border-[#b88a3b] focus:outline-hidden"
              />
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#718096]"
              />
            </div>
          </div>

          <div className="mt-8 divide-y divide-[#0c1836]/10">
            {filteredPubs.map((pub) => (
              <div
                key={pub.id}
                className="group flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-6 transition-colors hover:bg-white/60 rounded-2xl px-4"
              >
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#b88a3b]">
                      {ar ? pub.arabicCategory : pub.category}
                    </span>
                    <span className="text-[#0c1836]/20">·</span>
                    <span className="font-mono text-xs text-[#718096]">{pub.year}</span>
                    <span className="text-[#0c1836]/20">·</span>
                    <span className="rounded-full bg-[#f5f0e6] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#0c1836] border border-[#0c1836]/10">
                      {ar ? "بناء نظري" : "Theoretical Construct"}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-lg font-bold text-[#0c1836] group-hover:text-[#b88a3b] transition-colors">
                    {ar ? pub.title.ar : pub.title.en}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#4e5e7b]">
                    {ar ? pub.description.ar : pub.description.en}
                  </p>

                  <p className="mt-2 font-mono text-[11px] text-[#718096]">
                    {ar ? "المؤلف:" : "Author:"} {pub.author} · {pub.publisher}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(pub.id, pub.citation)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#0c1836]/15 bg-white px-4 py-2 text-xs font-bold text-[#0c1836] shadow-2xs hover:border-[#b88a3b] transition-all"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check size={13} className="text-emerald-600" />
                        <span>{ar ? "تم النسخ" : "Copied"}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>{ar ? "نسخ التوثيق" : "Cite"}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={pub.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#0c1836] px-4 py-2 text-xs font-bold text-[#dfbe7a] shadow-2xs hover:bg-[#1a2d5a] transition-all"
                  >
                    <Download size={13} />
                    <span>{ar ? "تحميل PDF" : "PDF"}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
