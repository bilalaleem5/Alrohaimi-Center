import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Arrow,
  Section,
  SectionLabel,
  useLanguage,
  Button,
  RoyalEmblem,
} from "../components/site";
import {
  centerInfo,
  type ProgramItem,
} from "../lib/content";
import { CognitiveSphereCanvas } from "../components/CognitiveSphereCanvas";
import { UnitsInteractive } from "../components/UnitsInteractive";
import { ProgramModal } from "../components/ProgramModal";
import { PillarsInteractive } from "../components/PillarsInteractive";
import { StoryInteractive } from "../components/StoryInteractive";
import { ResearchShowcase } from "../components/ResearchShowcase";
import { DualFlagshipShowcase } from "../components/DualFlagshipShowcase";
import { OutputsShowcase } from "../components/OutputsShowcase";

import heroLightImg from "../assets/hero_light.jpg";
import theoryLightImg from "../assets/theory_light.jpg";
import leadershipLightImg from "../assets/leadership_light.jpg";
import researchLightImg from "../assets/research_light.jpg";

import {
  Sparkles,
  Award,
  Layers,
  Building2,
  BookOpen,
  Compass,
  Brain,
  Shield,
  Zap,
  Target,
  Globe2,
  TrendingUp,
  UserCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "A prestigious multidisciplinary Saudi intellectual and applied research center connecting humanity, cognition, systems, conscious leadership, and civilizational transformation in the age of AI.",
      },
      {
        property: "og:title",
        content: "Prof. Abdulmohsen Alrohaimi Center | alrohaimitheory.org",
      },
      {
        property: "og:description",
        content: "From Understanding Humanity and Cognition to Shaping Transformation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  return (
    <>
      <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />

      {/* =====================================================================
          FLAGSHIP HERO: Royal Ivory Space + 3D Canvas + Matching Client Mockup
          ===================================================================== */}
      <section className="glow-ambient-light relative overflow-hidden border-b border-amber-900/10 bg-[#fbf9f5] pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left: 3D Interactive Mind Sphere Canvas & Dedicated Quote Box */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-4">
              {/* Unobstructed 3D Sphere Canvas Card */}
              <div className="relative mx-auto h-[440px] w-full max-w-[480px] overflow-hidden rounded-3xl border border-amber-900/15 bg-white/90 p-4 shadow-luxury backdrop-blur-xl lg:h-[480px]">
                {/* Floating Top Badge */}
                <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-amber-900/15 bg-white/95 px-3.5 py-1 text-[11px] font-semibold text-amber-900 shadow-sm backdrop-blur-md">
                  <span className="pulse-gold-light size-2 rounded-full bg-amber-600" />
                  <span className="font-mono uppercase">
                    {ar ? "السيادة الإدراكية ثلاثية الأبعاد" : "3D Cognitive Sovereignty Matrix"}
                  </span>
                </div>

                {/* 3D Sphere Canvas - Completely Clear & Unblocked */}
                <CognitiveSphereCanvas className="h-full w-full" />
              </div>

              {/* Dedicated Founder Quote Box with Zero Overlap */}
              <div className="mx-auto w-full max-w-[480px] rounded-2xl border border-amber-900/15 bg-white/90 p-4 shadow-sm backdrop-blur-md transition-all hover:border-amber-600/30">
                <div className="flex items-start gap-3">
                  <span className="font-serif text-2xl font-bold text-amber-700 leading-none">“</span>
                  <div className="flex-1">
                    <p className="font-display text-xs italic text-[#0c1836] leading-relaxed">
                      {ar
                        ? "«الإدراك هو جوهر الفاعلية في عصر الخوارزميات»"
                        : "“Cognition is the anchor of agency in the algorithmic era.”"}
                    </p>
                    <div className="mt-2 flex items-center justify-between border-t border-amber-900/10 pt-2">
                      <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-amber-800">
                        {ar ? "أ.د. عبدالمحسن الرحيمي" : "Prof. Abdulmohsen Alrohaimi"}
                      </p>
                      <p className="font-mono text-[8.5px] uppercase tracking-wider text-slate-500">
                        {ar ? "المؤسس والمنظر الرئيسي" : "Founder & Lead Theorist"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Authentic Monumental Typography & Actions */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              {/* Institution Hierarchy Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-[#f5f0e6] px-4 py-1.5 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                  {ar ? "المعرفة · الإنسان · التحول الحضاري" : "Knowledge · Humanity · Transformation"}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-6 max-w-[18ch] text-balance font-display text-4xl font-black leading-[1.12] text-[#0c1836] sm:text-5xl md:text-6xl lg:text-[3.8rem]">
                {ar ? (
                  <>
                    <span className="block text-[#0c1836]">مركز البروفيسور</span>
                    <span className="gold-text-light block">عبدالمحسن الرحيمي</span>
                    <span className="block text-2xl font-bold text-[#334155] sm:text-3xl md:text-4xl mt-1">
                      للسيادة الإدراكية والتحول الحضاري
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block text-[#0c1836]">Prof. Abdulmohsen</span>
                    <span className="gold-text-light block">Alrohaimi Center</span>
                    <span className="block text-2xl font-bold text-[#334155] sm:text-3xl md:text-4xl mt-1">
                      for Cognitive Sovereignty & Civilizational Transformation
                    </span>
                  </>
                )}
              </h1>

              {/* Gold Tagline (Directly from Client Wireframe) */}
              <p className="mt-5 max-w-[48ch] font-display text-xl font-bold italic leading-relaxed text-amber-800 sm:text-2xl">
                {ar ? centerInfo.tagline.ar : `"${centerInfo.tagline.en}"`}
              </p>

              {/* Mission / Paragraph */}
              <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-[#4e5e7b] sm:text-lg">
                {ar
                  ? "مركز فكري وبحثي وتطبيقي متعدد التخصصات يستكشف العلاقة بين الإنسان والإدراك والأنظمة والقيادة والتحول الحضاري في عصر الذكاء الاصطناعي."
                  : "A multidisciplinary intellectual, research, and applied center exploring the relationship between humanity, cognition, systems, leadership, and civilizational transformation in the age of artificial intelligence."}
              </p>

              {/* Dual Action CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-7 py-3.5 text-sm font-bold text-white shadow-gold transition-all hover:from-[#c59642] hover:to-[#a77019] hover:scale-105"
                >
                  <span>{ar ? "اكتشف المركز" : "Discover the Center"}</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </Link>

                <Link
                  to="/knowledge"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-900/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#0c1836] shadow-sm transition-all hover:border-amber-600 hover:bg-[#f7f3ea]"
                >
                  <span>{ar ? "استكشف منظومتنا المعرفية" : "Explore Our Knowledge System"}</span>
                </Link>
              </div>

              {/* Guiding Question Callout */}
              <div className="mt-8 rounded-2xl border border-amber-900/15 bg-white p-5 shadow-luxury sm:max-w-xl">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800">
                  {ar ? "السؤال المحوري للمركز" : "The Guiding Question"}
                </p>
                <p className="mt-2 font-display text-sm italic leading-relaxed text-[#0c1836]">
                  {ar ? centerInfo.centralQuestion.ar : `"${centerInfo.centralQuestion.en}"`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Strategic Statistics Island */}
        <div className="mx-auto mt-14 max-w-[1440px] px-5 lg:px-10">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-amber-900/15 bg-white p-6 shadow-luxury sm:grid-cols-3 lg:grid-cols-6">
            <div className="flex flex-col items-start">
              <p className="font-display text-3xl font-black text-amber-800">06</p>
              <p className="text-xs font-semibold text-[#4e5e7b]">
                {ar ? "مجالات بحثية تأسيسية" : "Research Pillars"}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-display text-3xl font-black text-sky-700">08</p>
              <p className="text-xs font-semibold text-[#4e5e7b]">
                {ar ? "برامج قيادية تنفيذية" : "Leadership Programs"}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-display text-3xl font-black text-amber-800">04</p>
              <p className="text-xs font-semibold text-[#4e5e7b]">
                {ar ? "وحدات مؤسسية كبرى" : "Core Primary Units"}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-display text-3xl font-black text-emerald-700">07</p>
              <p className="text-xs font-semibold text-[#4e5e7b]">
                {ar ? "مختبرات تخصصية" : "Specialized Labs"}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-display text-3xl font-black text-purple-700">100%</p>
              <p className="text-xs font-semibold text-[#4e5e7b]">
                {ar ? "سيادة إدراكية واستقلالية" : "Cognitive Sovereignty"}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-display text-3xl font-black text-amber-800">2030</p>
              <p className="text-xs font-semibold text-[#4e5e7b]">
                {ar ? "مواءمة مع رؤية المملكة" : "Vision 2030 Aligned"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 1: The Four Pillars (3D Kinetic, Specular Physics & Epistemic Conduit)
          ===================================================================== */}
      <PillarsInteractive />

      {/* =====================================================================
          SECTION 2: From the Desert to Impact (Kinetic 3D Parallax & Phase Stepper)
          ===================================================================== */}
      <StoryInteractive />

      {/* =====================================================================
          SECTION 3: What Do We Study? (Kinetic Expanding Photographic Pavilion)
          ===================================================================== */}
      <ResearchShowcase />

      {/* =====================================================================
          SECTION 4: Dual Flagship Horizons (Unified Epistemic Engines)
          ===================================================================== */}
      <DualFlagshipShowcase />

      {/* =====================================================================
          SECTION 5: The Center's Units & Specialized Labs (Kinetic Master Roster)
          ===================================================================== */}
      <UnitsInteractive />

      {/* =====================================================================
          SECTION 6: What Do We Create? (Polished Knowledge Outputs & Charter)
          ===================================================================== */}
      <OutputsShowcase />
    </>
  );
}