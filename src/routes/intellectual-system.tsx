import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  SectionLabel,
  useLanguage,
  Arrow,
} from "../components/site";
import { centerInfo, intellectualSystemHierarchy, nav } from "../lib/content";
import {
  Brain,
  Layers,
  Sparkles,
  ShieldCheck,
  Compass,
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  Award,
  Globe2,
  CheckCircle2,
  Share2,
} from "lucide-react";

export const Route = createFileRoute("/intellectual-system")({
  head: () => ({
    meta: [
      {
        title: "The Alrohaimi Intellectual System — Dr. Abdulmohsen Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Explore the architectural hierarchy of the Alrohaimi Intellectual System: Theory, Concepts, Models & Frameworks, Research Series, Foundational Works, Tools, Validation, and Applied Programs.",
      },
      {
        property: "og:title",
        content:
          "The Alrohaimi Intellectual System | Dr. Abdulmohsen Alrohaimi Center for Cognitive Sovereignty & Civilizational Transformation",
      },
      {
        property: "og:description",
        content:
          "A systematic theoretical and applied architecture connecting latent human potential with sovereign decisions and civilizational impact.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IntellectualSystemPage,
});

function IntellectualSystemPage() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [activeTier, setActiveTier] = useState<number>(0);

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        label={ar ? "الهيكلية المعرفية الشاملة" : "Comprehensive Knowledge Architecture"}
        title={ar ? "المنظومة الفكرية للرحيمي" : "The Alrohaimi Intellectual System"}
        description={
          ar
            ? "بناء معرفي متكامل يربط بين التنظير التأسيسي، والمفاهيم البينية، والنماذج التشغيلية، وسلسلة الأبحاث، والأعمال التأسيسية، وأدوات المحاكاة، وصولاً إلى مسارات التحقق العلمي والتطبيق الحضاري."
            : "An integrated knowledge architecture connecting foundational theorizing, interdisciplinary concepts, operational frameworks, research publications, foundational works, and simulation instruments to empirical validation and civilizational application."
        }
      />

      {/* 2. Scientific Principle & Positioning Charter */}
      <section className="border-b border-amber-900/15 bg-white py-12 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-3xl border border-amber-900/20 bg-gradient-to-br from-[#fbf9f5] via-[#f5f0e6]/60 to-white p-8 lg:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-amber-900/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#0c1836] text-[#dfbe7a]">
                  <Compass size={24} />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                    {ar ? "المبدأ العلمي الموجه (المادة 47)" : "Guiding Scientific Principle"}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-[#0c1836]">
                    {ar
                      ? "تأصيل فكري رصين دون مبالغة في دعاوى التحقق العلمي"
                      : "Strong Intellectual Positioning Without Overstating Scientific Validation"}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#718096]">
                <span>{ar ? "مسار التطوير المنهجي:" : "Methodological Pathway:"}</span>
                <span className="font-bold text-[#0c1836]">
                  {ar
                    ? "النظرية ← المفاهيم ← النماذج ← الأبحاث ← الأدوات ← التحقق ← التطبيق"
                    : "Theory → Concepts → Models → Research → Tools → Validation → Applications"}
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm lg:text-base leading-relaxed text-[#4e5e7b]">
              {ar
                ? "تطرح المنظومة الفكرية للمركز بوصفها مشروعاً معرفياً نامياً ومتكاملاً. ويعمل المركز على التمييز الصارم بين البناءات النظرية والمفاهيمية من جهة، وبين النتائج المستقاة من دراسات التحقق التجريبي الميداني والشراكات الأكاديمية الدولية من جهة أخرى."
                : "The Alrohaimi Intellectual System is presented as a coherent, developing knowledge endeavor. The Center rigorously distinguishes theoretical constructs and conceptual frameworks from empirical findings that emerge from ongoing and future validation research and international academic partnerships."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. The 8-Tier Visual Architecture Pipeline */}
      <section className="border-b border-amber-900/15 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>{ar ? "الهيكلية المعمارية" : "System Architecture"}</SectionLabel>
            <h2 className="mt-2 font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "سلسلة الانتقال المعرفي والتطبيقي" : "The 8-Tier Knowledge & Impact Cascade"}
            </h2>
            <p className="mt-4 text-base text-[#4e5e7b]">
              {ar
                ? "انقر على أي مرحلة من المراحل الثماني لاستكشاف موقعها ودورها المعرفي داخل منظومة الرحيمي."
                : "Explore each level of the Alrohaimi Intellectual System and understand how higher-order theoretical inquiry cascades into sovereign executive practice."}
            </p>
          </div>

          <div className="space-y-6">
            {intellectualSystemHierarchy.map((tier, idx) => {
              const isActive = activeTier === idx;
              return (
                <div
                  key={tier.level}
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isActive
                      ? "border-[#b88a3b] bg-white shadow-xl scale-[1.008]"
                      : "border-amber-900/15 bg-white/70 hover:bg-white hover:border-amber-900/30 shadow-xs"
                  }`}
                >
                  <div
                    onClick={() => setActiveTier(idx)}
                    className="cursor-pointer p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                      <div
                        className={`size-14 rounded-2xl grid place-items-center font-mono text-lg font-black transition-colors shrink-0 ${
                          isActive
                            ? "bg-[#0c1836] text-[#dfbe7a]"
                            : "bg-[#f5f0e6] text-[#0c1836] group-hover:bg-[#0c1836] group-hover:text-[#dfbe7a]"
                        }`}
                      >
                        {tier.level}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-800">
                            {ar ? tier.arabicTag : tier.tag}
                          </span>
                          {tier.status && (
                            <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber-900">
                              {ar ? tier.arabicStatus : tier.status}
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0c1836] mt-1">
                          {ar ? tier.arabicTitle : tier.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-end md:self-auto shrink-0">
                      <Link
                        to={tier.link}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 rounded-full border border-amber-900/20 bg-[#f5f0e6] px-4 py-1.5 text-xs font-bold text-[#0c1836] hover:bg-[#0c1836] hover:text-[#dfbe7a] transition-colors"
                      >
                        <span>{ar ? "استعراض" : "Explore"}</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Expanded Content View */}
                  {isActive && (
                    <div className="border-t border-amber-900/10 bg-[#fbf9f5]/80 p-6 sm:p-8">
                      {tier.description && (
                        <p className="text-sm sm:text-base leading-relaxed text-[#4e5e7b] max-w-3xl">
                          {ar ? tier.arabicDescription : tier.description}
                        </p>
                      )}

                      {tier.items && (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
                          {tier.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="rounded-2xl border border-amber-900/10 bg-white p-4 shadow-2xs"
                            >
                              <strong className="block font-display text-sm font-bold text-[#0c1836]">
                                {ar ? item.arName : item.name}
                              </strong>
                              <p className="mt-1.5 text-xs text-[#718096] leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Visual cascade indicator */}
                  {idx < intellectualSystemHierarchy.length - 1 && (
                    <div className="hidden md:flex justify-center -mb-3 relative z-10 pointer-events-none">
                      <div className="size-6 rounded-full bg-[#f5f0e6] border border-amber-900/15 grid place-items-center text-amber-800">
                        <ArrowDown size={12} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Strategic Linkage: Distinction of Sections (Point 30) */}
      <section className="border-b border-amber-900/15 bg-white py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-amber-900/15 bg-[#f5f0e6]/40 p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-800">
                {ar ? "القسم الأول" : "PRIMARY PILLAR I"}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-[#0c1836]">
                {ar ? "سلسلة أبحاث الرحيمي (ARS)" : "Alrohaimi Research Series (ARS)"}
              </h3>
              <p className="mt-3 text-sm text-[#4e5e7b] leading-relaxed">
                {ar
                  ? "مخصص للأبحاث، والنظريات، والنماذج المفاهيمية، والأطر المنهجية، والمؤشرات التشخيصية الجاري تطويرها في المركز. تُطرح كل ورقة بوضعها العلمي وتظل مفتوحة للتحكيم والتحقق التجريبي."
                  : "Dedicated to the Center's developing theoretical frameworks, conceptual models, applied research programs, and research instruments. Each publication is presented with its scientific status."}
              </p>
              <Link
                to="/research-series"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold text-amber-800 hover:text-[#0c1836]"
              >
                <span>{ar ? "استعراض سلسلة الأبحاث (ARS-001 ← ARS-005)" : "Explore Research Series (ARS-001 → ARS-005)"}</span>
                <Arrow />
              </Link>
            </div>

            <div className="rounded-3xl border border-amber-900/15 bg-[#f5f0e6]/40 p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-800">
                {ar ? "القسم الثاني" : "PRIMARY PILLAR II"}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-[#0c1836]">
                {ar ? "الأعمال الفكرية التأسيسية (FIW)" : "Foundational Intellectual Works (FIW)"}
              </h3>
              <p className="mt-3 text-sm text-[#4e5e7b] leading-relaxed">
                {ar
                  ? "مخصص للكتب التأسيسية، والمصنفات الفكرية، والمراجع المصطلحية، والبيانات الفلسفية التي تصيغ المنطلقات الفلسفية الكبرى لنظام الرحيمي ومدرسته للقيادة الواعية."
                  : "Dedicated to the foundational volumes, conceptual references, and intellectual manifestos shaping the broader philosophical foundations of the Alrohaimi system."}
              </p>
              <Link
                to="/foundational-works"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold text-amber-800 hover:text-[#0c1836]"
              >
                <span>{ar ? "استعراض الأعمال التأسيسية (FIW-001 ← FIW-003)" : "Explore Foundational Works (FIW-001 → FIW-003)"}</span>
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Institutional Engagement Callout */}
      <section className="bg-[#0c1836] text-white py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
              {ar ? "الشراكات والتحقق الأكاديمي الدولي" : "International Academic Engagement"}
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
              {ar ? "المشاركة في تحكيم المنظومة وتطويرها" : "Participate in System Validation & Peer Review"}
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              {ar
                ? "يرحب المركز بالتعاون البحثي مع الجامعات والمراكز العالمية لاختبار النماذج وتطوير مقاييس السيادة الإدراكية."
                : "The Center welcomes peer critique, interdisciplinary research replication, and empirical testing partnerships with universities worldwide."}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-6 py-3 text-xs font-bold text-white shadow-gold hover:scale-105 transition-all"
            >
              <span>{ar ? "شراكات التحقق العلمي" : "Academic Partnerships"}</span>
              <Arrow />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold text-white hover:bg-white/20 transition-all"
            >
              <span>{ar ? "تواصل مع المركز" : "Contact the Center"}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
