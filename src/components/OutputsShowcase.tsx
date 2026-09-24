import { Link } from "@tanstack/react-router";
import { useLanguage, Arrow } from "./site";
import {
  BookOpen,
  GraduationCap,
  Library,
  Layers,
  Gauge,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  Globe2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export function OutputsShowcase() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const outputsData = [
    {
      num: "01",
      icon: BookOpen,
      title: {
        en: "Research & Scholarly Studies",
        ar: "البحوث والدراسات العلمية المحكمة",
      },
      desc: {
        en: "Rigorous theoretical and applied research exploring human cognition, conscious leadership, complex adaptive systems, and civilizational transformation.",
        ar: "أبحاث نظرية وتطبيقية محكمة تستكشف الإدراك، والقيادة الواعية، والأنظمة المعقدة، والتحول الحضاري في عصر الذكاء الاصطناعي.",
      },
      deliverable: {
        en: "Peer-Reviewed Studies & Strategic Whitepapers",
        ar: "أوراق علمية محكمة وتقارير استراتيجية دورية",
      },
      link: "/research",
    },
    {
      num: "02",
      icon: GraduationCap,
      title: {
        en: "Executive Leadership Programs",
        ar: "البرامج القيادية والتنفيذية",
      },
      desc: {
        en: "The Saudi School of Conscious Leadership program portfolio for senior executives, ministers, university presidents, and national decision-makers.",
        ar: "محفظة برامج المدرسة السعودية للقيادة الواعية الموجهة لكبار التنفيذيين، والوزراء، ومديري الجامعات، وصناع القرار السيادي.",
      },
      deliverable: {
        en: "Executive Certifications, Immersions & Masterclasses",
        ar: "شهادات تنفيذية، ومعايشات استراتيجية، وورش عمل رفيعة",
      },
      link: "/programs",
    },
    {
      num: "03",
      icon: Library,
      title: {
        en: "Books & Epistemic Treatises",
        ar: "الكتب والمراجع الفكرية التأسيسية",
      },
      desc: {
        en: "Scholarly volumes, intellectual monographs, conceptual dictionaries, and specialized reference literature published globally by the Center.",
        ar: "مؤلفات أكاديمية، ومراجع فكرية، ومعاجم مفاهيمية متخصصة يصدرها المركز لتوثيق نظرية الرحيمي والسيادة الإدراكية.",
      },
      deliverable: {
        en: "Foundational Volumes & Reference Literature",
        ar: "مؤلفات تأسيسية ومراجع نظرية معتمدة عالمياً",
      },
      link: "/knowledge",
    },
    {
      num: "04",
      icon: Layers,
      title: {
        en: "Conceptual Models & Theories",
        ar: "النماذج والأطر النظرية الأصيلة",
      },
      desc: {
        en: "Original intellectual systems including Alrohaimi Theory, the Leadership Bridging Paradigm, and the Gene Latency Epistemic Architecture.",
        ar: "أطر فكرية ونظرية أصيلة تشمل نظرية الرحيمي، ونموذج التجسير القيادي، ونظرية الكمون الجيني المختبرة في البيئات المؤسسية.",
      },
      deliverable: {
        en: "Actionable Theoretical Blueprints & Schemas",
        ar: "نماذج بنائية وأطر مفاهيمية قابلة للتطبيق",
      },
      link: "/theory",
    },
    {
      num: "05",
      icon: Gauge,
      title: {
        en: "Measurement Tools & Indicators",
        ar: "الأدوات والمؤشرات المعيارية",
      },
      desc: {
        en: "Proprietary diagnostic instruments, including the Alrohaimi Index for Civilizational Transformation (AICT) and cognitive sovereignty audit scorecards.",
        ar: "أدوات قياس معيارية متقدمة، وفي طليعتها مؤشر الرحيمي للتحول الحضاري (AICT) وأدوات تدقيق السيادة الإدراكية.",
      },
      deliverable: {
        en: "Diagnostic Scorecards & Impact Metric Engines",
        ar: "لوحات قياس معيارية ومؤشرات تقييم الجاهزية",
      },
      link: "/theory",
    },
    {
      num: "06",
      icon: Briefcase,
      title: {
        en: "Sovereign Knowledge Advisory",
        ar: "الاستشارات المعرفية والسيادية",
      },
      desc: {
        en: "Applied consulting services assisting sovereign government entities, universities, and leading enterprises in cognitive governance and strategic foresight.",
        ar: "خدمات استشارية تطبيقية تقدم للجهات القيادية العليا، والوزارات، والجامعات لدعم استقلالية القرار وإدارة التحول الاستراتيجي.",
      },
      deliverable: {
        en: "Institutional Foresight & Strategic Counsel",
        ar: "استشارات استشرافية وتوجيه معرفي وسيادي مباشر",
      },
      link: "/partnerships",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-amber-900/10 bg-[#fbf9f5] py-20 lg:py-28">
      {/* Daylight Atmospheric Ambient Lights */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-amber-200/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[600px] w-[600px] rounded-full bg-sky-200/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* =====================================================================
            1. SECTION OVERTURE (Refined Editorial Header)
            ===================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-amber-900/15 pb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-amber-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-900">
                {ar ? "المخرجات المعرفية والتطبيقية" : "KNOWLEDGE DELIVERABLES & SOLUTIONS"}
              </span>
            </div>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#0c1836] tracking-tight">
              {ar ? (
                <>
                  ماذا نصنع؟{" "}
                  <span className="gold-text-light italic font-serif font-normal">
                    مخرجات معرفية وحلول عملية
                  </span>
                </>
              ) : (
                <>
                  What Do We Create?{" "}
                  <span className="gold-text-light italic font-serif font-normal">
                    Knowledge Outputs & Applied Solutions
                  </span>
                </>
              )}
            </h2>

            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#4e5e7b]">
              {ar
                ? "منظومة مخرجات رصينة تنقل الفكر من الفضاء النظري إلى أدوات تطبيقية، وبرامج قيادية، ومؤشرات قياس تسهم في صناعة الأثر الحضاري المستدام."
                : "A rigorous ecosystem of scholarly publications, executive leadership programs, diagnostic tools, and sovereign advisory translating intellect into civilizational reality."}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-amber-800">
            <Sparkles size={14} className="text-amber-600" />
            <span className="font-bold">
              {ar ? "٦ مسارات معرفية متكاملة" : "06 Integrated Knowledge Streams"}
            </span>
          </div>
        </div>

        {/* =====================================================================
            2. THE 6 EDITORIAL KNOWLEDGE MODULES (Refined Luxury Grid // Polished)
            ===================================================================== */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outputsData.map((item) => {
            const IconComponent = item.icon;

            return (
              <Link
                key={item.num}
                to={item.link}
                className="group relative flex flex-col justify-between rounded-2xl border border-amber-900/15 bg-white/70 p-7 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-amber-600/50 hover:bg-white hover:shadow-luxury hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Output Number & Category Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-800">
                      OUTPUT {item.num}
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-amber-900/10 bg-[#fbf9f5] text-amber-800 transition-colors duration-300 group-hover:bg-[#0c1836] group-hover:text-amber-300 group-hover:border-[#0c1836]">
                      <IconComponent size={16} />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-xl font-bold text-[#0c1836] transition-colors group-hover:text-amber-800">
                    {item.title[lang]}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm leading-relaxed text-[#4e5e7b]">
                    {item.desc[lang]}
                  </p>
                </div>

                {/* Bottom Deliverable Specification & Interactive Link Arrow */}
                <div className="mt-6 border-t border-amber-900/10 pt-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] font-semibold text-amber-900/80 line-clamp-1">
                    {item.deliverable[lang]}
                  </span>
                  <span className="text-amber-800 transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                    {ar ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* =====================================================================
            3. PRESTIGE SOVEREIGN DIALOGUE CHARTER (Deep Imperial Navy & Gold)
            ===================================================================== */}
        <div className="relative overflow-hidden mt-16 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-[#0c1836] via-[#081126] to-[#040814] p-8 sm:p-14 text-center shadow-2xl text-white">
          {/* Subtle Golden Ambient Glow within Dark Stage */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[500px] rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-sky-500/10 blur-2xl" />

          {/* Concentric Architectural Rings in Background */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
            <div className="size-[500px] rounded-full border border-amber-400/40" />
            <div className="absolute size-[350px] rounded-full border border-amber-400/30" />
            <div className="absolute size-[200px] rounded-full border border-amber-400/20" />
          </div>

          <div className="relative z-10">
            {/* Luminous Emblem */}
            <div className="mx-auto grid size-14 place-items-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 shadow-md shadow-amber-500/20 backdrop-blur-md">
              <Globe2 size={26} className="text-amber-300" />
            </div>

            <h3 className="mt-5 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {ar
                ? "هل ترغب في بناء شراكة بحثية أو طلب استشارة معرفية؟"
                : "Initiate Academic Collaboration or Strategic Consulting"}
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300/90 font-normal">
              {ar
                ? "يفتح مركز الدكتور عبدالمحسن الرحيمي مسارات التعاون العلمي الرفيع مع الجامعات العالمية، والمؤسسات الحكومية، وصناع القرار لتبادل المعرفة وصناعة الأثر التاريخي."
                : "The Center actively partners with international universities, research institutions, and sovereign executive bodies to advance cognitive sovereignty and create enduring civilizational impact."}
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://wa.me/966505210112"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c59642] to-[#b88a3b] px-8 py-3.5 text-sm font-black text-[#0c1836] shadow-gold transition-all duration-300 hover:scale-105 hover:from-[#e0be48] hover:to-[#c59642]"
              >
                <span>{ar ? "طلب شراكة عبر الواتساب" : "Partner with us"}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {ar ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </span>
              </a>

              <a
                href="https://wa.me/966505210112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10"
              >
                <span>{ar ? "تواصل مع قيادة المركز" : "Institutional Contact"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
