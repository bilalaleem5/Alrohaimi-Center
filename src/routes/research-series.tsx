import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  SectionLabel,
  useLanguage,
  Arrow,
  Button,
} from "../components/site";
import {
  alrohaimiResearchSeries,
  centerInfo,
  type ARSPublication,
} from "../lib/content";
import {
  BookOpen,
  FileText,
  Copy,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Download,
  Share2,
  X,
  Mail,
  Filter,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/research-series")({
  head: () => ({
    meta: [
      {
        title: "Alrohaimi Research Series (ARS) — Dr. Abdulmohsen Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "The Alrohaimi Research Series (ARS-001 to ARS-005) presents developing theoretical frameworks, conceptual models, applied research programs, and research instruments open to peer engagement and empirical validation.",
      },
      {
        property: "og:title",
        content: "Alrohaimi Research Series | Dr. Abdulmohsen Alrohaimi Center",
      },
      {
        property: "og:description",
        content:
          "Official research publication series of the Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ResearchSeriesPage,
});

function ResearchSeriesPage() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [selectedPublication, setSelectedPublication] = useState<ARSPublication | null>(null);
  const [peerModalPub, setPeerModalPub] = useState<ARSPublication | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCitation = (citation: string, id: string) => {
    navigator.clipboard.writeText(citation);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        label={ar ? "سلسلة الأبحاث المؤسسية الرسمية" : "Official Institutional Research Series"}
        title={ar ? "سلسلة أبحاث الرحيمي" : "Alrohaimi Research Series (ARS)"}
        description={
          ar
            ? "سلسلة النشر البحثي لمركز الدكتور عبدالمحسن الرحيمي للسيادة الإدراكية والتحول الحضاري. تقدم السلسلة الأطر النظرية المطورة، والنماذج المفاهيمية، والبرامج البحثية التطبيقية، وأدوات القياس. تُعرض كل ورقة بوضعها العلمي وتظل مفتوحة للمشاركة العلمية والتحقق التجريبي والتعاون البحثي الدولي."
            : "A Research Publication Series of the Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation. The series presents the Center’s developing theoretical frameworks, conceptual models, applied research programs, and research instruments. Each publication is presented with its scientific status and remains open to peer engagement, empirical validation, and international research collaboration."
        }
      />

      {/* 2. Scientific Responsibility Notice (Point 2, 28, 42) */}
      <section className="border-b border-amber-900/15 bg-white py-8 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-amber-800 shrink-0" size={24} />
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                {ar ? "معايير النشر والوضع العلمي" : "Academic Integrity & Scientific Status Policy"}
              </span>
              <p className="text-xs sm:text-sm text-[#4e5e7b] mt-0.5">
                {ar
                  ? "تلتزم المنشورات بالدقة الأكاديمية وتمييز البناء النظري عن النتائج التجريبية. لا يُستخدم مصطلح 'مثبت تجريبياً' إلا بوجود أدلة وبراهين ميدانية مستندة."
                  : "All publications adhere to academic responsibility, distinguishing theoretical constructs from empirical findings. 'Empirically Validated' is strictly reserved for documented experimental validation."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-xs font-bold text-amber-800 bg-[#f5f0e6] px-3.5 py-1.5 rounded-full border border-amber-900/10">
              5 {ar ? "منشورات بحثية مفهرسة" : "Indexed Research Works"}
            </span>
          </div>
        </div>
      </section>

      {/* 3. The 5 ARS Publications Grid */}
      <section className="border-b border-amber-900/15 bg-[#fbf9f5] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {alrohaimiResearchSeries.map((pub) => {
              const isCopied = copiedId === pub.id;
              return (
                <div
                  key={pub.id}
                  className="group flex flex-col justify-between rounded-3xl border border-amber-900/15 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#b88a3b]/50 hover:shadow-xl"
                >
                  <div>
                    {/* Header: ARS Code + Scientific Status Badge */}
                    <div className="flex items-center justify-between gap-2 border-b border-amber-900/10 pb-4">
                      <span className="font-mono text-sm font-black text-amber-900 bg-[#f5f0e6] px-3 py-1 rounded-full border border-amber-900/10">
                        {pub.code}
                      </span>
                      <span className="rounded-full bg-[#0c1836]/5 px-3 py-1 font-mono text-[11px] font-bold text-[#0c1836] border border-[#0c1836]/10">
                        {ar ? pub.arabicScientificStatus : pub.scientificStatus}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-display text-xl font-bold leading-snug text-[#0c1836] group-hover:text-amber-800 transition-colors">
                      {ar ? pub.title.ar : pub.title.en}
                    </h3>

                    {/* Author & Affiliation */}
                    <p className="mt-2 text-xs font-semibold text-amber-900">
                      {ar ? pub.author.ar : pub.author.en}
                    </p>
                    <p className="font-mono text-[10px] text-[#718096] mt-0.5">
                      {ar ? pub.affiliation.ar : pub.affiliation.en}
                    </p>

                    {/* Abstract snippet */}
                    <p className="mt-4 text-xs leading-relaxed text-[#4e5e7b] line-clamp-4">
                      {ar ? pub.abstract.ar : pub.abstract.en}
                    </p>

                    {/* Keywords */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {(ar ? pub.arabicKeywords : pub.keywords).slice(0, 4).map((kw, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-[#fbf9f5] border border-amber-900/10 px-2 py-0.5 font-mono text-[10px] text-[#4e5e7b]"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 pt-5 border-t border-amber-900/10 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#718096]">
                      <span>{pub.date} · {pub.version}</span>
                      <span className="text-amber-800 font-bold">{pub.doi}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedPublication(pub)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0c1836] py-2 px-3 text-xs font-bold text-[#dfbe7a] transition-all hover:bg-[#182952]"
                      >
                        <FileText size={14} />
                        <span>{ar ? "عرض التفاصيل الكاملة" : "View Full Details"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopyCitation(pub.citation, pub.id)}
                        className="grid size-9 place-items-center rounded-xl border border-amber-900/15 bg-[#fbf9f5] text-[#0c1836] hover:bg-white transition-colors"
                        title={ar ? "نسخ التوثيق الأكاديمي" : "Copy Academic Citation"}
                        aria-label="Copy citation"
                      >
                        {isCopied ? <CheckCircle2 size={15} className="text-emerald-600" /> : <Copy size={15} />}
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setPeerModalPub(pub)}
                      className="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold text-amber-800 hover:text-[#0c1836] transition-colors py-1"
                    >
                      <Sparkles size={12} />
                      <span>{ar ? "طلب مشاركة علمية / تحكيم" : "Request Peer Review / Collaboration"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Publication Detail Full-Page Modal (Point 28) */}
      {selectedPublication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative my-8 w-full max-w-4xl rounded-3xl border border-amber-900/20 bg-white p-6 sm:p-10 shadow-2xl">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedPublication(null)}
              className="absolute top-6 right-6 grid size-10 place-items-center rounded-full border border-amber-900/15 bg-[#fbf9f5] text-[#0c1836] hover:bg-white transition-colors"
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            {/* Header info */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm font-black text-amber-900 bg-[#f5f0e6] px-3.5 py-1 rounded-full border border-amber-900/15">
                {selectedPublication.code}
              </span>
              <span className="rounded-full bg-[#0c1836] px-3.5 py-1 font-mono text-xs font-bold text-[#dfbe7a]">
                {ar ? selectedPublication.arabicScientificStatus : selectedPublication.scientificStatus}
              </span>
              <span className="font-mono text-xs text-[#718096]">
                {selectedPublication.version} · {selectedPublication.date}
              </span>
            </div>

            <h2 className="mt-4 font-display text-2xl sm:text-3xl font-black text-[#0c1836]">
              {ar ? selectedPublication.title.ar : selectedPublication.title.en}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
              <span className="font-semibold text-amber-900">
                {ar ? selectedPublication.author.ar : selectedPublication.author.en}
              </span>
              <span className="text-[#718096]">|</span>
              <span className="font-mono text-[#718096]">
                {ar ? selectedPublication.affiliation.ar : selectedPublication.affiliation.en}
              </span>
              {selectedPublication.doi && (
                <>
                  <span className="text-[#718096]">|</span>
                  <span className="font-mono font-bold text-amber-800">DOI: {selectedPublication.doi}</span>
                </>
              )}
            </div>

            {/* Abstract Section */}
            <div className="mt-6 rounded-2xl border border-amber-900/10 bg-[#fbf9f5] p-5 sm:p-6">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-900 block mb-2">
                {ar ? "الملخص الأكاديمي (Abstract)" : "Official Abstract"}
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-[#0c1836]">
                {ar ? selectedPublication.abstract.ar : selectedPublication.abstract.en}
              </p>
            </div>

            {/* Key Information Matrix */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-amber-900/10 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">
                  {ar ? "المرحلة البحثية" : "Research Stage"}
                </span>
                <p className="font-display text-sm font-bold text-[#0c1836] mt-1">
                  {ar ? selectedPublication.researchStage.ar : selectedPublication.researchStage.en}
                </p>
              </div>

              <div className="rounded-xl border border-amber-900/10 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">
                  {ar ? "المشاركة العلمية" : "Peer Engagement"}
                </span>
                <p className="font-display text-sm font-bold text-amber-800 mt-1">
                  {ar ? selectedPublication.peerEngagement.ar : selectedPublication.peerEngagement.en}
                </p>
              </div>

              <div className="rounded-xl border border-amber-900/10 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">
                  {ar ? "الأبحاث المرتبطة" : "Related Research"}
                </span>
                <ul className="mt-1 space-y-1 text-xs text-[#4e5e7b]">
                  {selectedPublication.relatedResearch.map((r, i) => (
                    <li key={i}>• {r}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-amber-900/10 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">
                  {ar ? "الأطر والنماذج المرتبطة" : "Related Frameworks"}
                </span>
                <ul className="mt-1 space-y-1 text-xs text-[#4e5e7b]">
                  {selectedPublication.relatedFrameworks.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Citation Box */}
            <div className="mt-6 rounded-2xl border border-amber-900/15 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                  {ar ? "بيانات التوثيق الأكاديمي (APA Citation)" : "APA Citation"}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyCitation(selectedPublication.citation, selectedPublication.id)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-amber-800 hover:text-[#0c1836]"
                >
                  {copiedId === selectedPublication.id ? (
                    <>
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span>{ar ? "تم النسخ" : "Copied!"}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>{ar ? "نسخ التوثيق" : "Copy Citation"}</span>
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 font-mono text-xs text-[#4e5e7b] bg-[#fbf9f5] p-3 rounded-lg border border-amber-900/10 select-all">
                {selectedPublication.citation}
              </p>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-amber-900/15 pt-6">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${centerInfo.email}?subject=Inquiry on ${selectedPublication.code}: ${selectedPublication.title.en}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-amber-900/20 bg-[#f5f0e6] px-4 py-2 text-xs font-bold text-[#0c1836] hover:bg-[#0c1836] hover:text-[#dfbe7a] transition-colors"
                >
                  <Mail size={14} />
                  <span>{ar ? "مراسلة الفريق البحثي" : "Email Research Team"}</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const pub = selectedPublication;
                    setSelectedPublication(null);
                    setPeerModalPub(pub);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-5 py-2 text-xs font-bold text-white shadow-gold hover:scale-105 transition-all"
                >
                  <Sparkles size={14} />
                  <span>{ar ? "طلب مشاركة علمية / تحكيم" : "Propose Collaboration / Peer Review"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Peer Review & Collaboration Modal */}
      {peerModalPub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-amber-900/20 bg-white p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setPeerModalPub(null)}
              className="absolute top-6 right-6 grid size-8 place-items-center rounded-full border border-amber-900/15 text-slate-500 hover:text-[#0c1836]"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
              {ar ? "بوابة التحكيم والمشاركة العلمية" : "Peer Review & Research Collaboration"}
            </span>
            <h3 className="mt-1 font-display text-xl font-bold text-[#0c1836]">
              {peerModalPub.code}: {ar ? peerModalPub.title.ar : peerModalPub.title.en}
            </h3>
            <p className="mt-2 text-xs text-[#4e5e7b] leading-relaxed">
              {ar
                ? "يرحب المركز بالتعاون البحثي مع الجامعات والباحثين المستقلين ومراجعات النظراء لهذه الورقة."
                : "The Center welcomes peer feedback, research replication, and empirical testing partnerships for this publication."}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(ar ? "شكرًا لاهتمامكم. سيتواصل معكم الفريق الأكاديمي للمركز." : "Thank you for your interest. The Center academic team will contact you shortly.");
                setPeerModalPub(null);
              }}
              className="mt-5 space-y-3"
            >
              <div>
                <label className="block text-xs font-semibold text-[#0c1836] mb-1">
                  {ar ? "الاسم واللقب الأكاديمي" : "Full Name & Academic Title"}
                </label>
                <input
                  required
                  type="text"
                  placeholder={ar ? "مثال: د. فهد الأحمدي" : "e.g. Dr. Jane Smith"}
                  className="w-full rounded-xl border border-amber-900/20 px-3.5 py-2 text-xs focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0c1836] mb-1">
                  {ar ? "الجامعة أو المؤسسة البحثية" : "University or Affiliation"}
                </label>
                <input
                  required
                  type="text"
                  placeholder={ar ? "جامعة الملك سعود / Harvard University" : "Institution name"}
                  className="w-full rounded-xl border border-amber-900/20 px-3.5 py-2 text-xs focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0c1836] mb-1">
                  {ar ? "البريد الإلكتروني المؤسسي" : "Institutional Email"}
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@university.edu"
                  className="w-full rounded-xl border border-amber-900/20 px-3.5 py-2 text-xs focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0c1836] mb-1">
                  {ar ? "طبيعة المشاركة المقترحة" : "Collaboration Scope"}
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder={ar ? "اكتب نبذة عن مساهمتك البحثية أو مقترح التحكيم..." : "Describe your intended research contribution or peer critique..."}
                  className="w-full rounded-xl border border-amber-900/20 px-3.5 py-2 text-xs focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setPeerModalPub(null)}
                  className="rounded-xl border border-amber-900/20 px-4 py-2 text-xs font-semibold text-[#0c1836]"
                >
                  {ar ? "إلغاء" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#0c1836] px-5 py-2 text-xs font-bold text-[#dfbe7a] hover:bg-[#182952]"
                >
                  {ar ? "إرسال الطلب" : "Submit Proposal"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
