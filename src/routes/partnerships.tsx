import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "../components/forms";
import {
  PageHero,
  SectionLabel,
  useLanguage,
} from "../components/site";
import leadershipLightImg from "../assets/leadership_light.jpg";
import { Globe2, ShieldCheck, BookOpen, Users, Sparkles, Network, ArrowUpRight, CheckCircle2, Compass } from "lucide-react";
import { NationalInitiativesShowcase } from "../components/NationalInitiativesShowcase";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      {
        title: "Partnerships & International Reach — Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Collaborate with Dr. Abdulmohsen Alrohaimi Center on cutting-edge research, cognitive sovereignty frameworks, and international dialogue on humanity in the age of AI.",
      },
      {
        property: "og:title",
        content: "Partnerships | Alrohaimi Center",
      },
      {
        property: "og:description",
        content: "Global Academic Collaboration and Research Partnerships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Partnerships,
});

function Partnerships() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [activeNode, setActiveNode] = useState<string>("RUH");
  const [activeTrack, setActiveTrack] = useState<number>(0);

  const partnershipTracks = [
    {
      title: ar ? "الشراكات البحثية الأكاديمية" : "Academic Research Partnerships",
      desc: ar
        ? "تعاون مشترك مع الجامعات والمؤسسات العلمية الكبرى لاختبار نماذج نظرية الرحيمي وتطبيق مؤشرات التحول عبر بيئات متنوعة وتدريب الباحثين."
        : "Collaborative empirical research with universities and scientific institutes to test Alrohaimi Theory, calibrate transformation metrics, and mentor emerging fellows.",
      target: ar ? "جامعات ومراكز أبحاث دولية" : "Universities & Think Tanks",
      code: "TRACK-01",
      deliverables: ar
        ? ["مشاريع بحثية مشتركة", "أوراق علمية محكمة", "تطبيق مؤشر الرحيمي (AICT)"]
        : ["Joint Research Grants", "Peer-Reviewed Monographs", "Field Metric Calibration"],
    },
    {
      title: ar ? "التعاون المعرفي والثقافي" : "Knowledge & Cultural Collaboration",
      desc: ar
        ? "شراكات مع المنظمات الثقافية والمؤسسات الفكرية لإصدار المراجع المشتركة، وترجمة المصنفات، وعقد المؤتمرات الدولية المتخصصة."
        : "Strategic alliances with cultural entities to co-publish scholarly reference works, translate foundational treatises, and host symposia.",
      target: ar ? "مؤسسات ثقافية وفكرية" : "Cultural & Intellectual Bodies",
      code: "TRACK-02",
      deliverables: ar
        ? ["ترجمة المصنفات التأسيسية", "ندوات حوارية دورية", "إصدارات معرفية مشتركة"]
        : ["Treatise Translations", "Biannual Symposia", "Co-Authored Anthologies"],
    },
    {
      title: ar ? "الحوار الدولي واستشراف المستقبل" : "Global Dialogue on Human Futures",
      desc: ar
        ? "حوارات ومنتديات عالمية تجمع قادة الفكر وصناع القرار لبحث مستقبل القيادة والكرامة الإنسانية في عصر الأنظمة الخوارزمية والذكاء الاصطناعي."
        : "High-level international assemblies convening thought leaders to examine the future of human agency and conscious leadership in the algorithmic era.",
      target: ar ? "محافل وهيئات دولية" : "International Assemblies",
      code: "TRACK-03",
      deliverables: ar
        ? ["طاولات حوار وزارية", "ميثاق الأخلاقيات الإدراكية", "تقارير استشرافية سنوية"]
        : ["Ministerial Roundtables", "Cognitive Ethics Charter", "Annual Civilizational Outlook"],
    },
  ];

  const globalNodes = [
    { city: "Riyadh", arabicCity: "الرياض", label: "Center Headquarters", arabicLabel: "مقر المركز الرئيسي", code: "RUH", agenda: ar ? "المنطلق الفكري ومقر الإدارة الأكاديمية" : "Global Headquarters & Intellectual Origin" },
    { city: "Oxford", arabicCity: "أكسفورد", label: "Academic Exchange", arabicLabel: "حوار أكاديمي", code: "OXF", agenda: ar ? "ندوات الفلسفة الأخلاقية والإدراكية" : "Moral & Cognitive Epistemology Colloquia" },
    { city: "Cambridge", arabicCity: "كامبريدج", label: "Systems Research", arabicLabel: "أبحاث الأنظمة", code: "CAM", agenda: ar ? "نمذجة الأنظمة المعقدة والتكيف المؤسسي" : "Complex Systems Modeling & Governance" },
    { city: "Boston", arabicCity: "بوسطن", label: "Cognitive AI Studies", arabicLabel: "دراسات الإدراك والذكاء", code: "BOS", agenda: ar ? "أبحاث السيادة الإدراكية والذكاء الاصطناعي" : "Cognitive Sovereignty & Algorithmic Ethics" },
    { city: "Geneva", arabicCity: "جنيف", label: "Policy & Governance", arabicLabel: "حوكمة وسياسات", code: "GVA", agenda: ar ? "حوار السياسات الدولية وحقوق الوعي الإنساني" : "International Policy & Human Agency Treaties" },
    { city: "Tokyo", arabicCity: "طوكيو", label: "Bio-Systems Dialogue", arabicLabel: "حوار الأنظمة الحية", code: "HND", agenda: ar ? "دراسات الكمون الحيوي والتناغم التقني" : "Bio-Latency Dynamics & Technology Symbiosis" },
  ];

  const activeNodeData = globalNodes.find((n) => n.code === activeNode) || globalNodes[0];

  return (
    <>
      {/* =====================================================================
          1. CONSORTIUM & GLOBAL REACH HERO
          ===================================================================== */}
      <PageHero
        label={ar ? "الشراكات والامتداد الدولي" : "Partnerships & Global Reach"}
        title={
          ar
            ? "معرفة تتطور عبر الحوار والتعاون العلمي"
            : "Knowledge Advanced Through Rigorous Dialogue"
        }
        description={
          ar
            ? "يبني المركز تعاوناً بحثياً ومعرفياً وثيقاً مع الجامعات والمؤسسات العلمية والثقافية الرائدة، لتمكين مفاهيمه ونظرياته من الدراسة والاختبار والتطبيق عبر سياقات حضارية متعددة."
            : "The Center cultivates rigorous scientific and intellectual collaborations with leading universities, scientific institutions, and cultural organizations, enabling its concepts and theories to be studied, tested, developed, and applied across diverse civilizational contexts."
        }
        image={leadershipLightImg}
        alt={ar ? "حوار الشراكات الدولية" : "International Academic Dialogue"}
      />

      {/* =====================================================================
          2. SCHOLARLY PRINCIPLES & ATTRIBUTION (No Cards)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8">
              <SectionLabel>{ar ? "المنهج الفكري" : "Institutional Approach"}</SectionLabel>
              <h2 className="mt-2 font-display text-3xl font-black text-[#0c1836] md:text-5xl">
                {ar ? "أهداف الشراكة ومبادئ الإسناد العلمي" : "Scholarly Principles & Intellectual Attribution"}
              </h2>
              <div className="mt-4 h-0.5 w-24 bg-[#b88a3b]" />
              <p className="mt-6 text-base leading-relaxed text-[#4e5e7b] md:text-lg">
                {ar
                  ? "يستكشف المركز مسارات التعاون الدولي والحوار العالمي حول مستقبل القيادة والإنسان والإدراك في عصر الذكاء الاصطناعي. وتهدف الشراكات البحثية إلى دعم الدراسة والتطوير والتطبيق الميداني مع الحفاظ التام على الإسناد الفكري والعلمي الواضح للنظريات والنماذج والأعمال الأصيلة الصادرة عن المركز والمؤسس الدكتور عبدالمحسن حميد الرحيمي."
                  : "The Center explores pathways for international collaboration and global dialogue on the future of leadership, humanity, and cognition in the age of artificial intelligence. Research partnerships are explicitly structured to advance empirical testing, curriculum development, and applied governance while maintaining transparent intellectual attribution for the foundational theories, models, and original treatises created by Founder Dr. Abdulmohsen Hameed Alrohaimi."}
              </p>
            </div>

            {/* Academic Integrity Seal */}
            <div className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-3xl border border-[#b88a3b]/30 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[#b88a3b]" size={32} />
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#0c1836]">
                      {ar ? "ميثاق النزاهة العلمية" : "Charter of Academic Integrity"}
                    </h4>
                    <span className="font-mono text-[10px] font-bold text-[#b88a3b]">REF: MOU-ALR-2026</span>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#4e5e7b]">
                  {ar
                    ? "تخضع كافة مذكرات التفاهم والبرامج البحثية لاتفاقيات توثيق الملكية الفكرية والإسناد الأكاديمي المعتمدة دولياً لضمان أصالة المخرجات المعرفية الصادرة عن المركز."
                    : "All collaborative protocols uphold international academic peer-review standards and recognized intellectual attribution conventions to ensure scholarly rigor."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. COLLABORATION TRACKS: Open Architectural Pavilion
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "مسارات الشراكة" : "Partnership Tracks"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "مسارات التعاون الأكاديمي والاستراتيجي" : "Collaboration Typologies"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "برامج مصممة لربط المركز بالجامعات والمؤسسات البحثية الوطنية والدولية."
                : "Tailored engagement frameworks connecting the Center with universities, national agencies, and international bodies."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {partnershipTracks.map((track, idx) => (
              <div
                key={track.code}
                onClick={() => setActiveTrack(idx)}
                className={`group cursor-pointer relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 ${
                  activeTrack === idx
                    ? "border-[#b88a3b] bg-white shadow-md"
                    : "border-[#0c1836]/10 bg-white/70 hover:border-[#b88a3b]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                      {track.code}
                    </span>
                    <span className="rounded-full bg-[#f5f0e6] px-3 py-1 font-mono text-[10px] font-bold text-[#0c1836]">
                      {track.target}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
                    {track.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                    {track.desc}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-[#0c1836]/10 pt-4">
                    {track.deliverables.map((del) => (
                      <div key={del} className="flex items-center gap-2 text-xs font-semibold text-[#0c1836]">
                        <CheckCircle2 size={13} className="text-[#b88a3b]" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-[#0c1836]/10 pt-4 text-xs font-bold text-[#b88a3b]">
                  <span>{ar ? "متاح للجهات المعتمدة" : "Active Accreditation Protocol"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. AFFILIATED SOVEREIGN INITIATIVES & ACCELERATORS (WAII / SDAIA)
          ===================================================================== */}
      <NationalInitiativesShowcase />

      {/* =====================================================================
          5. GLOBAL DIALOGUE NODES: Interactive Radar Matrix (Zero Cards)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "شبكة الحوار الدولي" : "Global Corridors"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "آفاق الحوار العلمي الدولي" : "Global Intellectual Dialogue Nodes"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "جسور معرفية تصل الرياض بأبرز العواصم والمراكز الأكاديمية العالمية."
                : "Epistemic corridors connecting Riyadh to leading global academic capitals and research hubs."}
            </p>
          </div>

          {/* Interactive 6 Nodes Radar Strip */}
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {globalNodes.map((node) => {
              const isSelected = activeNode === node.code;
              return (
                <button
                  key={node.code}
                  onClick={() => setActiveNode(node.code)}
                  className={`group relative flex flex-col items-center justify-center rounded-2xl p-6 text-center transition-all duration-300 ${
                    isSelected
                      ? "border-2 border-[#b88a3b] bg-white shadow-md scale-105"
                      : "border border-[#0c1836]/10 bg-[#fbf9f5] hover:border-[#b88a3b]/40"
                  }`}
                >
                  <span className="font-mono text-xs font-black text-[#b88a3b]">
                    {node.code}
                  </span>
                  <Globe2
                    size={28}
                    className={`mt-2 transition-transform ${
                      isSelected ? "text-[#b88a3b] scale-110" : "text-[#718096] group-hover:text-[#b88a3b]"
                    }`}
                  />
                  <h4 className="mt-2 font-display text-base font-bold text-[#0c1836]">
                    {ar ? node.arabicCity : node.city}
                  </h4>
                  <p className="mt-1 font-mono text-[10px] text-[#718096]">
                    {ar ? node.arabicLabel : node.label}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Node Corridor Focus Panel */}
          <div className="mt-8 rounded-3xl border border-[#0c1836]/10 bg-white p-8 lg:p-10 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0c1836]/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-black text-[#b88a3b]">
                  {activeNodeData.code}
                </span>
                <span className="h-4 w-px bg-[#0c1836]/20" />
                <h4 className="font-display text-xl font-bold text-[#0c1836]">
                  {ar ? activeNodeData.arabicCity : activeNodeData.city} · {ar ? activeNodeData.arabicLabel : activeNodeData.label}
                </h4>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b88a3b]">
                <span className="size-2 rounded-full bg-[#b88a3b] animate-ping" />
                <span>{ar ? "ممر حوار نشط" : "Active Dialogue Corridor"}</span>
              </span>
            </div>

            <p className="mt-4 text-base text-[#4e5e7b]">
              <strong className="text-[#0c1836]">{ar ? "المحور الأكاديمي المشترك: " : "Collaborative Research Agenda: "}</strong>
              {activeNodeData.agenda}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. SUBMIT PARTNERSHIP PROPOSAL
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "نموذج الشراكة" : "Partner With Us"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "تقديم مقترح شراكة أو تعاون أكاديمي" : "Submit a Partnership Proposal"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "إذا كانت مؤسستكم ترغب في دراسة مفاهيم المركز أو تطوير برامج مشتركة، يرجى ملء النموذج أدناه."
                : "If your institution seeks to collaborate on research, pilot diagnostic frameworks, or host joint leadership cohorts, please submit the details below."}
            </p>
          </div>

          <InquiryForm partnership />
        </div>
      </section>
    </>
  );
}
