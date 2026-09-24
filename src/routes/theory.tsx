import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  SectionLabel,
  useLanguage,
  Arrow,
} from "../components/site";
import { research } from "../lib/content";
import { TheoryStageInteractive } from "../components/TheoryStageInteractive";
import { AlrohaimiIndexSimulator } from "../components/AlrohaimiIndexSimulator";
import theoryLightImg from "../assets/theory_light.jpg";
import { Brain, Shield, Layers, TrendingUp, Sparkles, BookOpen, CheckCircle2, Compass, Activity, ArrowUpRight, ShieldCheck, Quote } from "lucide-react";

export const Route = createFileRoute("/theory")({
  head: () => ({
    meta: [
      {
        title: "Alrohaimi Theory — Prof. Abdulmohsen Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Explore Alrohaimi Theory: a foundational intellectual system charting the movement from latent potential to cognition, meaning, decision, transformation, and impact.",
      },
      { property: "og:title", content: "Alrohaimi Theory | alrohaimitheory.org" },
      {
        property: "og:description",
        content: "From Latent Potential to Civilizational Impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Theory,
});

function Theory() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const relatedWorks = [
    {
      title: ar ? "مؤشر الرحيمي للتحول الحضاري (AICT)" : "The Alrohaimi Index for Civilizational Transformation (AICT)",
      desc: ar
        ? "مؤشر قياسي مركب يقيس جاهزية المؤسسات وقدرتها على تعبئة الموارد وتحويل الإمكان الكامن إلى أثر مستدام عبر ثلاثة محاور رئيسية."
        : "A standardized composite diagnostic instrument measuring organizational readiness to mobilize latent capacity into sustainable transformation across three core dimensions.",
      badge: ar ? "أداة قياس معيارية" : "Standardized Diagnostic Tool",
      tag: "INDEX-AICT",
    },
    {
      title: ar ? "نموذج التجسير القيادي (Leadership Bridging Model)" : "Leadership Bridging Model",
      desc: ar
        ? "إطار عملي للربط المنهجي بين الرؤى النظرية المعقدة والممارسات التنفيذية اليومية لكبار صناع القرار في البيئات عالية المخاطر."
        : "An actionable operational model connecting high-order theoretical insight with frontline executive decision-making under uncertainty.",
      badge: ar ? "نموذج تطبيقي" : "Applied Executive Framework",
      tag: "FRAMEWORK-LBM",
    },
    {
      title: ar ? "نظرية الكمون الجيني والحيوي (Gene Latency Theory)" : "Gene Latency Theory",
      desc: ar
        ? "دراسة للأسس البيولوجية والحيوية للقدرات غير المفعلة في النظم الحية وكيفية تحفيزها استجابة للضغوط والتحولات الكبرى."
        : "An interdisciplinary study into the biological and living system roots of unexpressed capabilities and mechanisms of systemic activation under shock.",
      badge: ar ? "بحث بيولوجي إدراكي" : "Bio-Cognitive Research",
      tag: "RESEARCH-GLT",
    },
    {
      title: ar ? "إطار السيادة الإدراكية (Cognitive Sovereignty Framework)" : "Cognitive Sovereignty Framework",
      desc: ar
        ? "مصفوفة تقييم وتحصين استقلالية القرار الإنساني والمؤسسي في مواجهة هيمنة الأنظمة الخوارزمية وتحديات الذكاء الاصطناعي."
        : "A robust methodology safeguarding human and institutional judgment autonomy against algorithmic vulnerability and synthetic bias.",
      badge: ar ? "إطار حوكمة معرفي" : "Epistemic Governance",
      tag: "GOVERNANCE-CSF",
    },
  ];

  return (
    <>
      {/* =====================================================================
          1. THEORY LABORATORY HERO
          ===================================================================== */}
      <PageHero
        label={ar ? "المنظومة الفكرية التأسيسية" : "Foundational Intellectual System"}
        title={ar ? "نظرية الرحيمي: من الكمون إلى الأثر" : "Alrohaimi Theory: From Latency to Impact"}
        description={
          ar
            ? "منظومة فكرية تأسيسية تستكشف حركة الإمكان من الكمون إلى الإدراك والمعنى والقرار والتحول والأثر، وتمثل مرساة أبحاث المركز وبرامجه وعمله التطبيقي."
            : "Alrohaimi Theory is a foundational intellectual system exploring the movement from latency to cognition, meaning, decision, transformation, and impact. It anchors all the Center's research, programs, and applied work."
        }
        image={theoryLightImg}
        alt={ar ? "النموذج البلوري لنظرية الرحيمي" : "Alrohaimi Theory Museum Gallery Installation"}
      />

      {/* =====================================================================
          2. EPISTEMIC MANIFESTO: Open Architectural Balance
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>{ar ? "المنطلق المعرفي" : "Theoretical Foundation"}</SectionLabel>
              <h2 className="mt-2 font-display text-3xl font-black text-[#0c1836] md:text-5xl">
                {ar ? "ما هي نظرية الرحيمي؟" : "What is Alrohaimi Theory?"}
              </h2>
              <div className="mt-4 h-0.5 w-24 bg-[#b88a3b]" />
              <p className="mt-6 text-lg leading-relaxed text-[#4e5e7b] md:text-xl">
                {ar
                  ? "تمثل نظرية الرحيمي محاولة منهجية رائدة للإجابة عن كيفية تحول الطاقة والإمكانات البشرية الكامنة إلى فاعلية حقيقية، ثم إلى قرارات رشيدة، ومن ثم إلى تحول منظومي وأثر يتجاوز حدود المكان والزمان."
                  : "Alrohaimi Theory represents an original systematic framework investigating how human and institutional latent potential transitions from an unactivated state through perception and meaning-making into sovereign decision, systemic transformation, and measurable civilizational impact."}
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4e5e7b]">
                {ar
                  ? "لا تقف النظرية عند حدود التوصيف الفلسفي، بل تنشئ جسراً متكاملاً يصل بين الرؤية النظرية العميقة والنماذج التطبيقية ومؤشرات القياس، لتزود قادة المؤسسات بأدوات عملية لمواجهة تعقيدات عصر الذكاء الاصطناعي."
                  : "The theory transcends speculative philosophy by creating an unbroken bridge from rigorous theoretical conceptualization to operational models and diagnostic metrics, equipping leaders with practical instruments to navigate the algorithmic era."}
              </p>
            </div>

            {/* Core Postulate Monolith (Open Architectural Seal) */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-[#b88a3b]/30 bg-white p-8 lg:p-10 shadow-sm text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-full bg-[#f5f0e6] text-[#b88a3b]">
                  <Quote size={24} />
                </div>
                <span className="mt-4 inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-[#b88a3b]">
                  CORE POSTULATE · الفرضية الجوهرية
                </span>
                <p className="mt-4 font-display text-xl font-bold italic leading-relaxed text-[#0c1836] md:text-2xl">
                  {ar
                    ? "«الكمون يسبق الموارد، والإدراك يوجه القرار، والقرار يصنع الأثر»"
                    : "“Latency precedes resources, cognition steers decision, and decision creates enduring impact.”"}
                </p>
                <div className="mx-auto mt-6 h-0.5 w-16 bg-[#b88a3b]" />
                <p className="mt-4 font-mono text-xs font-bold text-[#0c1836]">
                  Prof. Abdulmohsen Alrohaimi
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-[#718096]">
                  Riyadh · Kingdom of Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. THE SIX STAGES OF TRANSFORMATION: Kinetic Dynamic Engine
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "المسار الحركي للمراحل الست" : "The Progression Engine"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "مراحل الانتقال من الإمكان إلى الأثر" : "The Six Stages of Transformation"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "تفاعل مع مراحل النظرية الست لاكتشاف كيف تتكامل الأبعاد الإدراكية والتنفيذية في صناعة الأثر."
                : "Interact with the six stages of the theory to explore how cognition and executive decision converge into enduring impact."}
            </p>
          </div>

          <TheoryStageInteractive />
        </div>
      </section>

      {/* =====================================================================
          4. THE SIX RESEARCH PILLARS: Interactive Architectural Pavilion
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "الركائز البحثية" : "Research Pillars"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "مجالات البحث الستة المتفرعة عن النظرية" : "The Six Research Pillars"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "أبعاد معرفية متكاملة تستكشف طبيعة الإدراك والأنظمة والقيادة في عصر التحولات الكبرى."
                : "Integrated dimensions investigating the nature of cognition, complexity, and leadership during civilizational shifts."}
            </p>
          </div>

          {/* 6 Pillars Open Architectural Roster */}
          <div className="overflow-hidden rounded-3xl border border-[#0c1836]/10 bg-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-[#0c1836]/10">
              {research[lang].map((item, idx) => {
                const isSelected = selectedPillar === idx;
                return (
                  <div
                    key={item[0]}
                    onClick={() => setSelectedPillar(idx)}
                    className={`group cursor-pointer p-8 transition-all duration-300 ${
                      isSelected
                        ? "bg-[#fbf9f5]"
                        : "hover:bg-[#fffdf9]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                        PILLAR 0{idx + 1}
                      </span>
                      <Sparkles
                        size={14}
                        className={`transition-colors ${
                          isSelected ? "text-[#b88a3b]" : "text-[#718096]/40 group-hover:text-[#b88a3b]"
                        }`}
                      />
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
                      {item[0]}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                      {item[1]}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#0c1836]/10 pt-4 text-xs font-bold text-[#b88a3b]">
                      <span>{ar ? "محور بحثي نشط" : "Active Research Stream"}</span>
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. RELATED ORIGINAL FRAMEWORKS: High-Table Briefing (Zero Cards)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "المشروعات والنماذج المرتبطة" : "Related Original Frameworks"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "الأعمال والنماذج المنبثقة عن النظرية" : "Related Theoretical & Applied Work"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "نماذج ومؤشرات طورها المركز لتحويل النظرية إلى ممارسات تقييم واستشارات قيادية رفيعة."
                : "Actionable frameworks and diagnostic metrics developed to translate theory into empirical assessment and advisory practice."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {relatedWorks.map((work, idx) => (
              <div
                key={work.tag}
                className="relative overflow-hidden rounded-3xl border border-[#0c1836]/10 bg-white p-8 transition-all duration-300 hover:border-[#b88a3b]/40 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#b88a3b]">
                    {work.tag}
                  </span>
                  <span className="rounded-full bg-[#f5f0e6] px-3 py-1 font-mono text-[10px] font-bold text-[#0c1836]">
                    {work.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-[#0c1836]">
                  {work.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                  {work.desc}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#0c1836]/10 pt-4 text-xs">
                  <span className="text-[#718096]">
                    {ar ? "تطبيق معتمد لدى المركز" : "Center Verified Implementation"}
                  </span>
                  <Link
                    to="/programs"
                    className="font-bold text-[#b88a3b] hover:text-[#0c1836] transition-colors"
                  >
                    {ar ? "عرض التطبيق في البرامج ←" : "Explore in Programs ←"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. INTERACTIVE DIAGNOSTIC SIMULATOR
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "محاكي المؤشر" : "Interactive Simulator"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "محاكاة مؤشر الرحيمي للتحول الحضاري" : "Alrohaimi Index Simulator"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "اختبر مستويات السيادة الإدراكية، والتكيف المنظومي، والمرونة الوجودية، واستخرج معدل الجاهزية المؤسسية."
                : "Test parameters across cognitive sovereignty, systems adaptability, and existential resilience to calculate institutional readiness."}
            </p>
          </div>

          <AlrohaimiIndexSimulator />
        </div>
      </section>

      {/* =====================================================================
          7. EPISTEMOLOGY & METHODOLOGICAL BOUNDARIES CHARTER
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
          <div className="relative rounded-3xl border border-[#0c1836]/15 bg-white p-8 shadow-sm md:p-12">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#b88a3b]" size={36} />
              <h3 className="font-display text-2xl font-bold text-[#0c1836] md:text-3xl">
                {ar
                  ? "التمييز المنهجي بين البناء النظري والنتائج التجريبية"
                  : "Distinction Between Theoretical Construction & Empirical Findings"}
              </h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-[#4e5e7b]">
              {ar
                ? "تؤكد المنظومة الفكرية للمركز على التمييز الصارم بين مرحلة البناء والتنظير الفلسفي من جهة، وبين النتائج المثبتة عبر الأبحاث التجريبية والمقاييس التطبيقية من جهة أخرى. وتطرح كافة المفاهيم كنماذج علمية مفتوحة للتحقق والتعاون الأكاديمي الدولي المستمر."
                : "The Center strictly delineates between theoretical construction and conceptual modeling on one hand, and empirically verified findings derived from diagnostic metric applications on the other. All frameworks are published as living knowledge projects welcoming peer engagement and international empirical testing."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 border-t border-[#0c1836]/10 pt-6">
              <Link
                to="/knowledge"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-6 py-2.5 text-xs font-bold text-white shadow-gold hover:from-[#c59642] hover:to-[#a77019]"
              >
                <span>{ar ? "اطّلع على المخرجات والبحوث" : "Explore Publications & Research"}</span>
                <Arrow />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-[#0c1836]/20 bg-[#fbf9f5] px-6 py-2.5 text-xs font-semibold text-[#0c1836] hover:bg-white"
              >
                <span>{ar ? "برامج المدرسة السعودية للقيادة الواعية" : "Explore Leadership Programs"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
