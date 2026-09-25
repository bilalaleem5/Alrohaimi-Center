import { useState } from "react";
import { useLanguage, SectionLabel } from "./site";
import {
  ShieldCheck,
  Award,
  FlaskConical,
  Dna,
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink,
  ZoomIn,
  X,
  Building2,
  Globe2,
  Calendar,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

interface DocumentModalState {
  isOpen: boolean;
  src: string;
  title: string;
  caption: string;
}

export function NationalInitiativesShowcase() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const [activeTab, setActiveTab] = useState<"accelerator" | "programs" | "pipeline" | "leap">("accelerator");
  const [modalState, setModalState] = useState<DocumentModalState>({
    isOpen: false,
    src: "",
    title: "",
    caption: "",
  });

  const openImageModal = (src: string, title: string, caption: string) => {
    setModalState({
      isOpen: true,
      src,
      title,
      caption,
    });
  };

  const sdaiaApprovedPrograms = [
    {
      code: "ACTV107036",
      date: "2026-02-15",
      title: ar
        ? "تأسيس وحدة تدريب لاكتشاف الدواء باستخدام الذكاء الاصطناعي"
        : "Establishing an AI Drug Discovery Training Unit",
      scope: ar
        ? "تأهيل وبناء الكوادر الوطنية المتخصصة في تقنيات وخوارزميات اكتشاف الأدوية الحيوية، وتوفير بيئة تدريبية ومختبرات حاسوبية متقدمة تربط البحث بالصناعة."
        : "Qualifying national talent in computational drug discovery, machine learning pipelines, and advanced molecular docking to bridge laboratory science with pharmaceutical production.",
      authority: ar ? "إشراف سدايا والمركز الوطني" : "Supervised by SDAIA & NCENP",
      badge: ar ? "برنامج تأسيسي نوعي" : "Foundational Track",
    },
    {
      code: "ACTV102936",
      date: "2026-02-02",
      title: ar
        ? "هاكاثون 'بالذكاء الاصطناعي نبتكر الدواء'"
        : "AI Drug Innovation Hackathon",
      scope: ar
        ? "تحدي وطني يجمع نخبة الباحثين والمبرمجين وعلماء الصيدلة لابتكار حلول رقمية ونماذج ذكاء اصطناعي تعالج تحديات القطاع الصحي وتسرّع تطوير الأدوية."
        : "National competitive hackathon bringing together AI researchers, clinicians, and pharmaceutical scientists to build algorithmic models tackling key health challenges.",
      authority: ar ? "إشراف سدايا والمركز الوطني" : "Supervised by SDAIA & NCENP",
      badge: ar ? "ابتكار وطني تنافسي" : "National Challenge",
    },
    {
      code: "ACTV103342",
      date: "2026-02-02",
      title: ar
        ? "برنامج خطوة الألف ميل"
        : "The Thousand-Mile Step Program",
      scope: ar
        ? "بناء جيل ريادي من علماء وباحثي الدواء والذكاء الاصطناعي، وتزويدهم بمهارات تحويل الابتكارات المعملية إلى مشروعات ناشئة جاهزة للنمو والاستثمار."
        : "Nurturing an entrepreneurial generation in pharmacology and AI, providing researchers with pathways to transform bench discoveries into scalable ventures.",
      authority: ar ? "إشراف سدايا والمركز الوطني" : "Supervised by SDAIA & NCENP",
      badge: ar ? "ريادة الأعمال الحيوية" : "Biotech Entrepreneurship",
    },
    {
      code: "ACTV102938",
      date: "2026-02-01",
      title: ar
        ? "برنامج دوائي بطريقتي"
        : "Dawaii Bi-Tariqati (Personalized Drug Intelligence)",
      scope: ar
        ? "تمكين المجتمع بالمعرفة الدوائية الحديثة، ونشر الثقافة الصحية الرقمية، وتوظيف الذكاء الاصطناعي لرفع كفاءة الاستخدام الرشيد للأدوية وتفادي التداخلات."
        : "Empowering the public and healthcare workers with personalized drug intelligence, rational medicine awareness, and digital healthcare literacy.",
      authority: ar ? "إشراف سدايا والمركز الوطني" : "Supervised by SDAIA & NCENP",
      badge: ar ? "توعية مجتمعية وصحية" : "Community Healthcare",
    },
  ];

  const venturePipeline = [
    {
      name: "BioQentix",
      category: ar ? "محرك اكتشاف الأدوية بالذكاء الاصطناعي" : "AI Drug Discovery Engine",
      stage: ar ? "التحقق من المنصة والشراكات العلمية" : "Platform Validation & Partnerships",
      role: ar ? "مختبر الملكية الفكرية ونشر الدراسات السريرية" : "IP Lab & Publication Pipeline",
      investment: ar ? "استثمار بذري / مشاركة الإيرادات" : "Seed / Revenue Share",
      icon: Dna,
    },
    {
      name: "BHOC",
      category: ar ? "حامل الأكسجين الهيموغلوبيني الحيوي" : "Biological Hemoglobin Oxygen Carrier",
      stage: ar ? "التصنيع والشراكات السريرية المتقدمة" : "Manufacturing & Clinical Partnerships",
      role: ar ? "الترخيص التنظيمي وتطبيق معايير التصنيع الجيد (GMP)" : "Regulatory Compliance, GMP & Licensing",
      investment: ar ? "استثمار بذري / مشروع مشترك (JV)" : "Seed / Joint Venture",
      icon: FlaskConical,
    },
    {
      name: "SkinAI",
      category: ar ? "منصة الذكاء الاصطناعي للتشخيص الجلدي" : "Medical Dermatology AI Platform",
      stage: ar ? "جاهز للتوسع والتشغيل الميداني" : "Ready for Deployment & Hospital Integration",
      role: ar ? "الاعتماد التنظيمي وتوسيع الوصول للسوق" : "Regulatory Pathway & GTM Scaling",
      investment: ar ? "استثمار بذري / جولة أولى (Series A)" : "Seed / Series A",
      icon: Cpu,
    },
    {
      name: "DigiPharm",
      category: ar ? "منصة العقود الرقمية للصناعات الدوائية" : "Digital Contracting Platform for Pharma",
      stage: ar ? "ملاءمة المنتج للسوق وتوسيع المستشفيات" : "Product-Market Scaling & Onboarding",
      role: ar ? "ربط المستشفيات ومطابقة معايير الامتثال" : "Hospital Onboarding & Compliance",
      investment: ar ? "استثمار بذري وتوسع" : "Seed / Scale",
      icon: Layers,
    },
  ];

  const acceleratorPillars = [
    {
      num: "01",
      title: ar ? "التقييم العلمي والتقني" : "Scientific Assessment",
      desc: ar ? "تحديد الجدارة العلمية والقيمة الابتكارية للتقنية." : "Defining scientific rigor, IP strength, and market readiness.",
    },
    {
      num: "02",
      title: ar ? "التطوير والنمذجة" : "AI & Tech Development",
      desc: ar ? "تطوير النماذج اللغوية المتخصصة وخوارزميات الدواء." : "Enhancing proprietary AI models and biomedical datasets.",
    },
    {
      num: "03",
      title: ar ? "التحقق والاختبار" : "Validation & Benchmarking",
      desc: ar ? "اختبار الجاهزية العلمية والسريرية والتقنية." : "Testing scientific and technical readiness in certified labs.",
    },
    {
      num: "04",
      title: ar ? "حماية الملكية الفكرية" : "Intellectual Property",
      desc: ar ? "صياغة استراتيجية براءات الاختراع والترخيص التجاري." : "Structuring patent architecture and licensing agreements.",
    },
    {
      num: "05",
      title: ar ? "التسويق والنماذج التجارية" : "Commercialization",
      desc: ar ? "تأسيس نماذج الأعمال وتحويل التقنيات لشركات ناشئة." : "Forming spin-offs, licensing models, and commercial routes.",
    },
    {
      num: "06",
      title: ar ? "الاستثمار ورأس المال" : "Investment Readiness",
      desc: ar ? "ربط المشروعات برؤوس الأموال الاستثمارية والشركاء." : "Connecting founders with strategic capital and health funds.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#0c1836]/10 bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute -top-32 -left-32 size-[420px] rounded-full bg-gradient-to-br from-[#b88a3b]/10 to-transparent blur-3xl" />
        
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          {/* Institutional Anchor Header */}
          <div className="border-b border-[#0c1836]/10 pb-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <SectionLabel>{ar ? "المبادرات الوطنية السيادية التابعة" : "Affiliated Sovereign Initiatives"}</SectionLabel>
                <h2 className="mt-2 font-display text-3xl font-black text-[#0c1836] md:text-5xl">
                  {ar
                    ? "منظومة ابتكار الدواء بالذكاء الاصطناعي (WAII)"
                    : "AI for Drug Innovation Ecosystem (WAII)"}
                </h2>
              </div>

              {/* Official Credential Seals */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-2xl border border-[#0c1836]/10 bg-[#fbf9f5] px-4 py-2 shadow-2xs">
                  <span className="size-2 rounded-full bg-[#b88a3b]" />
                  <div className="text-right">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-[#718096]">
                      {ar ? "جهة الإشراف الفني" : "Supervisory Authority"}
                    </p>
                    <p className="font-display text-xs font-black text-[#0c1836]">
                      {ar ? "الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)" : "SDAIA (Saudi Data & AI Authority)"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-[#b88a3b]/30 bg-[#f5f0e6] px-4 py-2 shadow-2xs">
                  <Award size={18} className="text-[#b88a3b]" />
                  <div className="text-right">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-[#b88a3b]">
                      {ar ? "ترخيص مسرّعات منشآت" : "Monsha'at License"}
                    </p>
                    <p className="font-mono text-xs font-black text-[#0c1836]">
                      LICENSE NO. 1171
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-[#0c1836]/10 bg-[#fbf9f5] px-4 py-2 shadow-2xs">
                  <ShieldCheck size={18} className="text-[#0c1836]" />
                  <div className="text-right">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-[#718096]">
                      {ar ? "المركز الوطني للقطاع غير الربحي" : "NCENP Non-Profit Reg"}
                    </p>
                    <p className="font-mono text-xs font-black text-[#0c1836]">
                      NO. 1000706000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#4e5e7b] md:text-lg">
              {ar
                ? "مبادرة وطنية رائدة يقودها الدكتور عبدالمحسن الرحيمي (رئيس مجلس الإدارة)، تجمع بين البحث العلمي، الذكاء الاصطناعي، وتسريع اكتشاف الأدوية. تعمل تحت الإشراف الفني للهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)، وتدير مسرّعة متخصصة مرخصة من 'منشآت' برقم (1171) لتحويل الأبحاث المعملية إلى أصول علاجية واقتصادية استثمارية."
                : "A sovereign national initiative spearheaded by Dr. Abdulmohsen Alrohaimi (Chairman of the Board), synthesizing scientific research, advanced AI, and accelerated biopharmaceutical discovery. Operating under the technical supervision of SDAIA and running a specialized accelerator licensed by Monsha'at (No. 1171), the ecosystem transforms laboratory discoveries into investable therapeutic assets."}
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#0c1836]/10 pb-4">
            {[
              { id: "accelerator", label: ar ? "المسرّعة الوطنية (ترخيص 1171)" : "National Accelerator (License 1171)", icon: Cpu },
              { id: "programs", label: ar ? "الموافقات الفنية من سدايا (04)" : "SDAIA Approved Tracks (04)", icon: FileCheck2 },
              { id: "pipeline", label: ar ? "المحفظة الاستثمارية الحيوية" : "Strategic Venture Pipeline", icon: Dna },
              { id: "leap", label: ar ? "المشاركة الدولية (LEAP 2026)" : "LEAP 2026 Showcase", icon: Globe2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-xs md:text-sm font-bold transition-all duration-200 ${
                    isSelected
                      ? "border border-[#b88a3b] bg-[#0c1836] text-white shadow-sm"
                      : "border border-[#0c1836]/10 bg-[#fbf9f5] text-[#4e5e7b] hover:border-[#b88a3b]/40 hover:text-[#0c1836]"
                  }`}
                >
                  <Icon size={16} className={isSelected ? "text-[#b88a3b]" : "text-[#718096]"} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: National Accelerator & Pillars */}
          {activeTab === "accelerator" && (
            <div className="mt-10 grid gap-10 lg:grid-cols-12 items-start animate-fadeIn">
              <div className="lg:col-span-7 space-y-6">
                <div className="rounded-3xl border border-[#0c1836]/10 bg-[#fbf9f5] p-8 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                      ACCELERATOR BLUEPRINT
                    </span>
                    <span className="rounded-full bg-[#f5f0e6] px-3 py-1 font-mono text-[10px] font-bold text-[#0c1836]">
                      {ar ? "مستهدفات رؤية 2030" : "Vision 2030 Horizons"}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-[#0c1836]">
                    {ar
                      ? "مسرّعة ابتكار الدواء بالذكاء الاصطناعي (منشآت ترخيص 1171)"
                      : "AI Drug Innovation Accelerator (Monsha'at License No. 1171)"}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                    {ar
                      ? "منصة وطنية متخصصة لتسريع ابتكار الدواء باستخدام الذكاء الاصطناعي، وتحويل الأبحاث والتقنيات الحيوية إلى أصول استثمارية ومنتجات علاجية معتمدة. تقترح المسرعة تأسيس مراكز ومختبرات ابتكار داخل الجامعات والمجمعات الطبية الوطنية."
                      : "A specialized sovereign platform designed to accelerate drug innovation through artificial intelligence, transforming lab research into investable assets. The accelerator operates innovation hubs and dedicated lab facilities across Saudi universities and medical centers."}
                  </p>

                  {/* 6 Acceleration Steps Grid */}
                  <div className="mt-8 border-t border-[#0c1836]/10 pt-6">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#b88a3b]">
                      {ar ? "مسار التسريع المعتمد (06 مراحل):" : "The 6-Stage Acceleration Pathway:"}
                    </h4>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {acceleratorPillars.map((p) => (
                        <div key={p.num} className="rounded-2xl border border-[#0c1836]/10 bg-white p-4">
                          <span className="font-mono text-xs font-black text-[#b88a3b]">{p.num}</span>
                          <h5 className="mt-1 font-display text-sm font-bold text-[#0c1836]">{p.title}</h5>
                          <p className="mt-1 text-xs text-[#718096]">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* What We Offer / Accept Strip */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-[#0c1836]/10 bg-[#fbf9f5] p-6">
                    <h4 className="font-display text-base font-bold text-[#0c1836] flex items-center gap-2">
                      <Sparkles size={16} className="text-[#b88a3b]" />
                      <span>{ar ? "ماذا تستقبل المسرعة؟" : "What Do We Accept?"}</span>
                    </h4>
                    <ul className="mt-3 space-y-2 text-xs text-[#4e5e7b]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#b88a3b]" />
                        <span>{ar ? "مشاريع الأبحاث المتقدمة ونماذج الإثبات (POC)" : "Advanced research projects & Proof of Concept"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#b88a3b]" />
                        <span>{ar ? "نماذج الذكاء الاصطناعي والنماذج اللغوية (LLMs)" : "AI models and domain-specific LLMs"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#b88a3b]" />
                        <span>{ar ? "براءات الاختراع والتقنيات الحيوية الصيدلانية" : "Pharmaceutical patents & biotech prototypes"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#b88a3b]" />
                        <span>{ar ? "الشركات الصحية والدوائية الناشئة" : "Emerging health-tech & biotech startups"}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-[#0c1836]/10 bg-[#fbf9f5] p-6">
                    <h4 className="font-display text-base font-bold text-[#0c1836] flex items-center gap-2">
                      <TrendingUp size={16} className="text-[#b88a3b]" />
                      <span>{ar ? "مخرجات الجامعات والشراكات" : "Expected Institutional Outcomes"}</span>
                    </h4>
                    <ul className="mt-3 space-y-2 text-xs text-[#4e5e7b]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#b88a3b]" />
                        <span>{ar ? "تأسيس شركات منبثقة (Spin-offs) مرخصة" : "Licensed university spin-off companies"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#b88a3b]" />
                        <span>{ar ? "تسجيل براءات اختراع مشتركة وعقود امتياز" : "Joint patents & licensing commercialization"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#b88a3b]" />
                        <span>{ar ? "تدريب باحثين وكفاءات سعودية على تقنيات المستقبل" : "Deep-tech capability building for Saudi talent"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#b88a3b]" />
                        <span>{ar ? "جذب استثمارات محلية ودولية للمنظومة" : "Attracting domestic & global venture capital"}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: Infographic Visual Preview & Zoom Trigger */}
              <div className="lg:col-span-5">
                <div className="sticky top-28 rounded-3xl border border-[#b88a3b]/30 bg-white p-4 shadow-md">
                  <div className="relative overflow-hidden rounded-2xl border border-[#0c1836]/10">
                    <img
                      src="/images/waii-accelerator-infographic.jpg"
                      alt={ar ? "انفوجرافيك مسرعة ابتكار الدواء بالذكاء الاصطناعي" : "AI Drug Innovation Accelerator Infographic"}
                      className="w-full object-cover max-h-[500px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                      <button
                        onClick={() =>
                          openImageModal(
                            "/images/waii-accelerator-infographic.jpg",
                            ar ? "مسرّعة ابتكار الدواء بالذكاء الاصطناعي (ترخيص منشآت 1171)" : "AI Drug Innovation Accelerator (Monsha'at 1171)",
                            ar ? "المخطط الهيكلي الكامل للمسرعة والمسارات والشراكات الجامعية" : "Comprehensive Accelerator Blueprint, Ecosystem & University Pathways"
                          )
                        }
                        className="inline-flex items-center gap-2 rounded-full bg-[#b88a3b] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
                      >
                        <ZoomIn size={16} />
                        <span>{ar ? "تكبير واستعراض الوثيقة بدقة كاملة" : "Expand Full Document"}</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 p-2 text-center">
                    <p className="font-display text-sm font-bold text-[#0c1836]">
                      {ar ? "وثيقة الإطار التشغيلي للمسرعة" : "Accelerator Operational Framework"}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase text-[#b88a3b]">
                      ISSUED BY MONSHA'AT · LICENSE #1171 · RIYADH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: SDAIA Approved Programs */}
          {activeTab === "programs" && (
            <div className="mt-10 animate-fadeIn">
              <div className="rounded-3xl border border-[#0c1836]/10 bg-[#fbf9f5] p-8 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#b88a3b]">
                      OFFICIAL TECHNICAL APPROVALS
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-[#0c1836]">
                      {ar
                        ? "خطابات الموافقة الفنية الصادرة من سدايا والمركز الوطني"
                        : "Official Technical Approval Letters (SDAIA & NCENP)"}
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#f5f0e6] px-4 py-1.5 font-mono text-xs font-bold text-[#0c1836] border border-[#0c1836]/10">
                    ENTITY REG: 1000706000
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b] max-w-3xl">
                  {ar
                    ? "حصلت الجمعية على أربعة خطابات موافقة فنية رسمية صادرة بالتنسيق بين الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) والمركز الوطني لتنمية القطاع غير الربحي، لتدشين مسارات تدريبية وتطبيقية وطنية في اكتشاف الأدوية والذكاء الاصطناعي الصحي."
                    : "The Society has secured four formal technical approvals from the Saudi Data & AI Authority (SDAIA) and the National Center for Non-Profit Sector Development, launching national training, hackathons, and personalized pharmacology tracks."}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {sdaiaApprovedPrograms.map((program) => (
                  <div
                    key={program.code}
                    className="relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-7 transition-all duration-300 hover:border-[#b88a3b]/50 hover:shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                          REF: {program.code}
                        </span>
                        <span className="rounded-full bg-[#f5f0e6] px-3 py-0.5 font-mono text-[10px] font-bold text-[#0c1836]">
                          {program.date}
                        </span>
                      </div>

                      <div className="mt-3">
                        <span className="inline-block rounded-md bg-[#0c1836]/5 px-2.5 py-0.5 text-[10px] font-bold text-[#b88a3b]">
                          {program.badge}
                        </span>
                        <h4 className="mt-2 font-display text-lg font-bold text-[#0c1836]">
                          {program.title}
                        </h4>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-[#4e5e7b]">
                        {program.scope}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[#0c1836]/10 pt-4 text-xs font-semibold text-[#718096]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-emerald-600" />
                        <span>{program.authority}</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#b88a3b]">{ar ? "معتمد رسمياً" : "Authorized"}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Venture Pipeline */}
          {activeTab === "pipeline" && (
            <div className="mt-10 animate-fadeIn">
              <div className="rounded-3xl border border-[#0c1836]/10 bg-[#fbf9f5] p-8 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#b88a3b]">
                      VENTURES & CAPITAL ARM
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-[#0c1836]">
                      {ar
                        ? "محفظة الاستثمارات والمشاريع الاستراتيجية (WAII Ventures Holding)"
                        : "Strategic Venture Pipeline (WAII Ventures Holding)"}
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#b88a3b]/10 px-4 py-1.5 font-mono text-xs font-bold text-[#b88a3b]">
                    TARGET CAPITAL: $10M INITIAL FUND
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b] max-w-3xl">
                  {ar
                    ? "يعمل الذراع الاستثماري تحت مظلة الجمعية لتوفير التمويل البذري للشركات الناشئة المتخرجة من المسرّعة، وتوسيع نطاق التقنيات الحيوية وتسجيلها لدى الهيئات التنظيمية (SFDA / FDA / EMA) وصولاً إلى الطرح والترخيص التجاري الدولي."
                    : "The commercial investment vehicle operates under the non-profit umbrella to provide seed capital, regulatory pathways (SFDA / FDA / EMA), and commercial scaling for breakthrough biomedical innovations."}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {venturePipeline.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.name}
                      className="group relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-6 transition-all duration-300 hover:border-[#b88a3b]/50 hover:shadow-xs"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-display text-xl font-black text-[#0c1836] group-hover:text-[#b88a3b] transition-colors">
                            {v.name}
                          </span>
                          <Icon size={20} className="text-[#b88a3b]" />
                        </div>

                        <p className="mt-2 text-xs font-bold text-[#b88a3b]">{v.category}</p>

                        <div className="mt-4 space-y-2 border-t border-[#0c1836]/10 pt-3 text-[11px] text-[#4e5e7b]">
                          <div>
                            <span className="font-bold text-[#0c1836]">{ar ? "المرحلة: " : "Stage: "}</span>
                            <span>{v.stage}</span>
                          </div>
                          <div>
                            <span className="font-bold text-[#0c1836]">{ar ? "دور المسرعة: " : "Role: "}</span>
                            <span>{v.role}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-[#0c1836]/10 pt-3">
                        <span className="font-mono text-[10px] font-bold text-[#0c1836]">
                          {v.investment}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 4: LEAP 2026 Showcase */}
          {activeTab === "leap" && (
            <div className="mt-10 grid gap-10 lg:grid-cols-12 items-start animate-fadeIn">
              <div className="lg:col-span-7 space-y-6">
                <div className="rounded-3xl border border-[#0c1836]/10 bg-[#fbf9f5] p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                      GLOBAL TECH SUMMIT
                    </span>
                    <span className="rounded-full bg-[#f5f0e6] px-3 py-1 font-mono text-[10px] font-bold text-[#0c1836]">
                      {ar ? "31 أغسطس - 3 سبتمبر 2026 · الرياض" : "Aug 31 - Sep 3, 2026 · Riyadh"}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-[#0c1836]">
                    {ar
                      ? "مشاركة الجمعية في مؤتمر LEAP 2026 للتقنية بالرياض"
                      : "Official Society Showcase at LEAP 2026 Riyadh"}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                    {ar
                      ? "شاركت جمعية بالذكاء الاصطناعي نبتكر الدواء تحت الإشراف الفني لـ سدايا في مؤتمر LEAP 2026 التقني العالمي، حيث استعرضت إنجازاتها الوطنية وأثرها في تحويل المملكة إلى مركز عالمي في الابتكار الصحي واكتشاف الأدوية الذكية."
                      : "Presenting under SDAIA's technical supervision, the Society unveiled its national achievements and global partnerships at LEAP 2026, positioning the Kingdom as an epicenter for knowledge economy and AI medicine."}
                  </p>

                  {/* 4 Stat Badges from LEAP poster */}
                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#0c1836]/10 pt-6">
                    <div className="rounded-2xl border border-[#0c1836]/10 bg-white p-4 text-center">
                      <p className="font-display text-2xl font-black text-[#0c1836]">2024</p>
                      <p className="mt-1 text-[11px] text-[#718096]">{ar ? "سنة التأسيس" : "Founded"}</p>
                    </div>
                    <div className="rounded-2xl border border-[#0c1836]/10 bg-white p-4 text-center">
                      <p className="font-display text-2xl font-black text-[#b88a3b]">344+</p>
                      <p className="mt-1 text-[11px] text-[#718096]">{ar ? "مستفيداً من البرامج" : "Beneficiaries"}</p>
                    </div>
                    <div className="rounded-2xl border border-[#0c1836]/10 bg-white p-4 text-center">
                      <p className="font-display text-2xl font-black text-[#0c1836]">213+</p>
                      <p className="mt-1 text-[11px] text-[#718096]">{ar ? "متطوعاً معتمداً" : "Volunteers"}</p>
                    </div>
                    <div className="rounded-2xl border border-[#0c1836]/10 bg-white p-4 text-center">
                      <p className="font-display text-2xl font-black text-[#b88a3b]">391+</p>
                      <p className="mt-1 text-[11px] text-[#718096]">{ar ? "ساعة تطوعية" : "Volunteer Hours"}</p>
                    </div>
                  </div>
                </div>

                {/* Society Contact Strip */}
                <div className="rounded-3xl border border-[#b88a3b]/30 bg-white p-6 shadow-xs">
                  <h4 className="font-display text-base font-bold text-[#0c1836]">
                    {ar ? "القنوات الرسمية للتواصل والشراكات الدوائية:" : "Official Society Portals & Contacts:"}
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-[#0c1836]">
                    <a
                      href="https://www.aimedicine.org.sa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#b88a3b] hover:underline"
                    >
                      <Globe2 size={14} />
                      <span>www.aimedicine.org.sa</span>
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href="mailto:info@aimedicine.org.sa"
                      className="inline-flex items-center gap-1.5 text-[#4e5e7b] hover:text-[#0c1836]"
                    >
                      <span>info@aimedicine.org.sa</span>
                    </a>
                    <span className="font-mono text-[#718096]">
                      {ar ? "الرياض، المملكة العربية السعودية" : "Riyadh, Kingdom of Saudi Arabia"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: SDAIA + WAII Poster Preview */}
              <div className="lg:col-span-5">
                <div className="sticky top-28 rounded-3xl border border-[#b88a3b]/30 bg-white p-4 shadow-md">
                  <div className="relative overflow-hidden rounded-2xl border border-[#0c1836]/10">
                    <img
                      src="/images/waii-initiatives-sdaia.jpg"
                      alt={ar ? "مبادرات جمعية بالذكاء الاصطناعي نبتكر الدواء وسدايا" : "SDAIA & AI for Drug Innovation Society Initiatives"}
                      className="w-full object-cover max-h-[500px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                      <button
                        onClick={() =>
                          openImageModal(
                            "/images/waii-initiatives-sdaia.jpg",
                            ar ? "مبادرات الجمعية بالتعاون مع سدايا" : "Society Initiatives with SDAIA",
                            ar ? "نحو ابتكار صحي قائم على الذكاء الاصطناعي والمعرفة والبيانات" : "Towards Healthcare Innovation Powered by AI, Knowledge & Data"
                          )
                        }
                        className="inline-flex items-center gap-2 rounded-full bg-[#b88a3b] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
                      >
                        <ZoomIn size={16} />
                        <span>{ar ? "تكبير واستعراض الوثيقة بدقة كاملة" : "Expand Full Document"}</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 p-2 text-center">
                    <p className="font-display text-sm font-bold text-[#0c1836]">
                      {ar ? "وثيقة المبادرات الرسمية المشتركة مع سدايا" : "Official Joint Initiatives Document (SDAIA)"}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase text-[#b88a3b]">
                      SUPERVISED BY SAUDI DATA & AI AUTHORITY (SDAIA)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Full-Screen High-Res Zoom Modal */}
      {modalState.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fadeIn"
          onClick={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        >
          <div
            className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-3xl bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#0c1836]/10 pb-3 px-2">
              <div>
                <h4 className="font-display text-base font-bold text-[#0c1836]">
                  {modalState.title}
                </h4>
                <p className="font-mono text-xs text-[#718096]">{modalState.caption}</p>
              </div>
              <button
                onClick={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
                className="rounded-full p-1.5 text-[#718096] hover:bg-[#0c1836]/10 hover:text-[#0c1836]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-3 overflow-auto max-h-[78vh] flex justify-center rounded-xl bg-[#fbf9f5] p-2">
              <img
                src={modalState.src}
                alt={modalState.title}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
