import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  SectionLabel,
  useLanguage,
  Arrow,
} from "../components/site";
import { outputs, publications } from "../lib/content";
import researchLightImg from "../assets/research_light.jpg";
import { BookOpen, Search, Download, FileText, Sparkles, HelpCircle, Check, Copy, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      {
        title: "Knowledge Repository — Prof. Abdulmohsen Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Access the Center's intellectual publications, research studies, academic books, theoretical models, and diagnostic indicators.",
      },
      {
        property: "og:title",
        content: "Knowledge Outputs | Alrohaimi Center",
      },
      {
        property: "og:description",
        content: "Research, Books, Models & Diagnostic Indicators.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Knowledge,
});

function Knowledge() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const categories = ar
    ? [
        "الكل",
        "البحوث والدراسات",
        "الكتب والمراجع",
        "النماذج والنظريات",
        "الأدوات والمؤشرات",
      ]
    : [
        "All",
        "Research & Studies",
        "Books & References",
        "Models & Theories",
        "Tools & Indicators",
      ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [citationCopied, setCitationCopied] = useState<string | null>(null);

  const filteredPubs = publications.filter((p) => {
    const matchesCategory =
      activeCategory === categories[0] ||
      (ar ? p.arabicCategory === activeCategory : p.category === activeCategory);

    const q = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.title.en.toLowerCase().includes(q) ||
      p.title.ar.includes(q) ||
      p.description.en.toLowerCase().includes(q) ||
      p.description.ar.includes(q) ||
      p.author.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  const handleCopyCitation = (id: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCitationCopied(id);
    setTimeout(() => setCitationCopied(null), 2500);
  };

  return (
    <>
      {/* =====================================================================
          1. SCHOLARLY REPOSITORY HERO
          ===================================================================== */}
      <PageHero
        label={ar ? "الإنتاج الفكري والمعرفي" : "Intellectual Production"}
        title={ar ? "المنظومة المعرفية للمركز" : "Knowledge Repository"}
        description={
          ar
            ? "مخرجات بحثية محكمة، ومؤلفات فكرية، ونماذج نظرية أصيلة، ومؤشرات معيارية تسهم في تعزيز السيادة الإدراكية وبناء مستقبل أكثر إنسانية."
            : "Peer-reviewed research monographs, theoretical treatises, original models, and diagnostic indicators advancing cognitive sovereignty and civilizational flourishing."
        }
        image={researchLightImg}
        alt={ar ? "أرشيف المعرفة والبحث" : "Knowledge Archive & Research Hub"}
      />

      {/* =====================================================================
          2. OUTPUT TYPOLOGIES: Open Editorial Index (No Cards)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "مجالات الإنتاج المعرفي" : "Output Categories"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "ما الذي نصنعه وننتجه؟" : "What Do We Create?"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "تتنوع مخرجات المركز لتغطي البناء الفكري، والأطر القيادية، والمقاييس التطبيقية، والاستشارات الاستراتيجية."
                : "The Center's outputs bridge fundamental theorizing, executive frameworks, empirical metrics, and sovereign consulting."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outputs[lang].map((out, i) => (
              <div
                key={out[0]}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-7 transition-all duration-300 hover:border-[#b88a3b]/50 hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                      CATEGORY 0{i + 1}
                    </span>
                    <FileText size={16} className="text-[#718096]/50 group-hover:text-[#b88a3b] transition-colors" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
                    {out[0]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                    {out[1]}
                  </p>
                </div>

                {out[2] && (
                  <div className="mt-6 border-t border-[#0c1836]/10 pt-3 text-xs font-bold text-[#b88a3b]">
                    {out[2]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. SEARCHABLE DIGITAL LIBRARY: Open Scholarly Catalog
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <SectionLabel>{ar ? "المكتبة الرقمية" : "Digital Library"}</SectionLabel>
              <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-4xl">
                {ar ? "المؤلفات والأوراق العلمية المحكمة" : "Monographs & Peer-Reviewed Papers"}
              </h2>
            </div>

            {/* Filter Input */}
            <div className="relative min-w-[280px]">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={ar ? "بحث في الإصدارات والمؤلفين..." : "Filter publications..."}
                className="h-10 w-full rounded-full border border-[#0c1836]/15 bg-white pl-10 pr-4 text-xs text-[#0c1836] placeholder:text-[#4e5e7b]/50 focus:border-[#b88a3b] focus:outline-none shadow-2xs"
              />
            </div>
          </div>

          {/* Category Chips */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#b88a3b] text-white shadow-gold font-bold"
                    : "border border-[#0c1836]/15 bg-white text-[#4e5e7b] hover:border-[#b88a3b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Publications Catalog Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPubs.map((pub) => {
              const isCopied = citationCopied === pub.id;
              const citationText = `${pub.author} (${pub.year}). ${pub.title.en}. Prof. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation.`;

              return (
                <div
                  key={pub.id}
                  className="group relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-8 transition-all duration-300 hover:border-[#b88a3b]/50 hover:shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="rounded-full bg-[#f5f0e6] px-3 py-1 font-mono text-[10px] font-bold text-[#0c1836]">
                        {ar ? pub.arabicCategory : pub.category}
                      </span>
                      <span className="font-mono font-black text-[#b88a3b]">{pub.year}</span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold leading-snug text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
                      {ar ? pub.title.ar : pub.title.en}
                    </h3>

                    <p className="mt-2 font-mono text-xs font-bold text-[#b88a3b]">
                      {pub.author} · {pub.pages}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-[#4e5e7b]">
                      {ar ? pub.description.ar : pub.description.en}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#0c1836]/10 pt-4 text-xs">
                    <button
                      onClick={() => handleCopyCitation(pub.id, citationText)}
                      className="inline-flex items-center gap-1.5 font-semibold text-[#4e5e7b] transition hover:text-[#b88a3b]"
                      title="Copy Academic Citation"
                    >
                      {isCopied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                      <span>{isCopied ? (ar ? "تم نسخ الإسناد" : "Citation Copied") : (ar ? "نسخ الإسناد العلمي" : "Copy Citation")}</span>
                    </button>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 font-bold text-[#b88a3b] hover:text-[#0c1836] transition-colors"
                    >
                      <span>{ar ? "طلب نسخة أكاديمية" : "Request Copy"}</span>
                      <Arrow />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. STRATEGIC ADVISORY GATEWAY: Ministerial Consultation Salon
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="relative rounded-3xl border border-[#0c1836]/15 bg-white p-8 shadow-sm lg:p-12">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-[#b88a3b]">
                  HIGH-LEVEL ADVISORY · الاستشارات الاستراتيجية
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-[#0c1836] md:text-3xl">
                  {ar
                    ? "تمكين المؤسسات من بناء استراتيجيات سيادية متوافقة مع الذكاء الاصطناعي"
                    : "Empowering Institutions to Achieve Sovereign Epistemic Agency in the AI Era"}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#4e5e7b]">
                  {ar
                    ? "يقدم المركز استشارات متقدمة للجهات الحكومية والجامعات والشركات الكبرى، تتضمن تدقيق السيادة الإدراكية، وهندسة الرؤية، وتطبيق مؤشر الرحيمي للتحول، وتصميم برامج قيادية مغلقة."
                    : "The Center provides bespoke advisory for ministerial bodies, universities, and sovereign institutions, including cognitive sovereignty audits, vision engineering, Alrohaimi Index calibration, and closed executive retreats."}
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-6 py-3.5 text-sm font-bold text-white shadow-gold hover:from-[#c59642] hover:to-[#a77019]"
                >
                  <span>{ar ? "طلب استشارة معرفية" : "Request Consulting Dossier"}</span>
                  <Arrow />
                </Link>
                <Link
                  to="/partnerships"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0c1836]/20 bg-[#fbf9f5] px-6 py-3.5 text-sm font-semibold text-[#0c1836] hover:bg-white"
                >
                  <span>{ar ? "الشراكات البحثية الدولية" : "International Research Partnerships"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
