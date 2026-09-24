import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "../components/forms";
import {
  PageHero,
  SectionLabel,
  useLanguage,
} from "../components/site";
import { centerInfo } from "../lib/content";
import { Building2, Globe2, Mail, MessageSquare, ShieldCheck, Sparkles, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact & Institutional Dispatch — Alrohaimi Center",
      },
      {
        name: "description",
        content:
          "Institutional contact channels for research collaborations, leadership training inquiries, partnerships, and media requests.",
      },
      { property: "og:title", content: "Contact Alrohaimi Center" },
      {
        property: "og:description",
        content:
          "Begin a conversation regarding research, executive programs, or partnership.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const contactCategories = [
    {
      title: ar ? "التعاون البحثي والأكاديمي" : "Research & Academic Collaboration",
      desc: ar
        ? "لطلبات الشراكة مع الجامعات، وتبادل الباحثين، ودراسة أطر نظرية الرحيمي والسيادة الإدراكية."
        : "For university partnerships, scholar exchanges, and inquiries regarding Alrohaimi Theory and cognitive sovereignty frameworks.",
      email: "research@alrohaimitheory.org",
      dept: "RESEARCH-DIR",
    },
    {
      title: ar ? "المدرسة السعودية للقيادة الواعية" : "Executive Leadership Programs",
      desc: ar
        ? "لترشيح القيادات العليا، وحجز الدفعات المغلقة للجهات الحكومية والشركات، واستفسارات البرامج."
        : "For senior executive nominations, institutional cohort reservations, and curriculum consultations.",
      email: "admissions@alrohaimitheory.org",
      dept: "ACADEMY-DIR",
    },
    {
      title: ar ? "الإعلام والمشاركات والنشر" : "Media, Publishing & Keynotes",
      desc: ar
        ? "للتغطيات الإعلامية، وطلبات المشاركة في المؤتمرات الدولية، والحصول على تراخيص الإصدارات."
        : "For media briefings, international conference speaking requests, and publication licensing permissions.",
      email: "media@alrohaimitheory.org",
      dept: "MEDIA-DISPATCH",
    },
  ];

  return (
    <>
      {/* =====================================================================
          1. INSTITUTIONAL INQUIRIES HERO
          ===================================================================== */}
      <PageHero
        label={ar ? "التواصل المؤسسي" : "Institutional Enquiries"}
        title={ar ? "ابدأ حواراً معرفياً معنا" : "Begin a Scholarly Conversation"}
        description={
          ar
            ? "يرحب المركز بالتواصل مع الجامعات، والمؤسسات الحكومية، والقيادات التنفيذية، والباحثين لبناء شراكات معرفية تسهم في تعزيز السيادة الإدراكية ومستقبل أكثر إنسانية."
            : "The Center welcomes inquiries from academic faculties, sovereign institutions, enterprise executives, and scholars to forge intellectual collaborations advancing human-centered transformation."
        }
      />

      {/* =====================================================================
          2. OFFICIAL REGISTRY CREDENTIALS (Three-Pillar Architectural Matrix)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "بيانات الاعتماد والتواصل" : "Institutional Credentials"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "قنوات الاعتماد والتواصل الرسمي" : "Official Contact Credentials"}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Domain Pillar */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-8 transition-all duration-300 hover:border-[#b88a3b]/40 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Globe2 className="text-[#b88a3b]" size={28} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#b88a3b] bg-[#f5f0e6] px-2.5 py-1 rounded-full border border-[#0c1836]/10">
                    VERIFIED DOMAIN
                  </span>
                </div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#718096]">
                  {ar ? "الموقع الإلكتروني الرسمي" : "Official Domain"}
                </p>
                <p className="mt-2 font-display text-xl font-bold text-[#0c1836]">
                  {centerInfo.website}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#4e5e7b]">
                  {ar ? "البوابة الرقمية المعتمدة لنظرية الرحيمي ومخرجات المركز" : "The verified digital gateway for Alrohaimi Center outputs"}
                </p>
              </div>

              <div className="mt-6 border-t border-[#0c1836]/10 pt-4">
                <button
                  onClick={() => copyToClipboard("domain", "https://alrohaimitheory.org")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b88a3b] hover:text-[#0c1836]"
                >
                  {copiedKey === "domain" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedKey === "domain" ? (ar ? "تم النسخ" : "Copied") : (ar ? "نسخ الرابط" : "Copy URL")}</span>
                </button>
              </div>
            </div>

            {/* Headquarters Pillar */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-8 transition-all duration-300 hover:border-[#b88a3b]/40 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Building2 className="text-[#b88a3b]" size={28} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#b88a3b] bg-[#f5f0e6] px-2.5 py-1 rounded-full border border-[#0c1836]/10">
                    HEADQUARTERS
                  </span>
                </div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#718096]">
                  {ar ? "المقر والمملكة" : "Headquarters"}
                </p>
                <p className="mt-2 font-display text-xl font-bold text-[#0c1836]">
                  {ar ? centerInfo.location.ar : centerInfo.location.en}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#4e5e7b]">
                  {ar ? "المملكة العربية السعودية · منارة التحول الحضاري ورؤية 2030" : "Kingdom of Saudi Arabia · Civilizational Transformation & Vision 2030"}
                </p>
              </div>

              <div className="mt-6 border-t border-[#0c1836]/10 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c1836]">
                  <MapPin size={14} className="text-[#b88a3b]" />
                  <span>Riyadh, KSA</span>
                </span>
              </div>
            </div>

            {/* Central Dispatch Pillar */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-8 transition-all duration-300 hover:border-[#b88a3b]/40 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Mail className="text-[#b88a3b]" size={28} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#b88a3b] bg-[#f5f0e6] px-2.5 py-1 rounded-full border border-[#0c1836]/10">
                    CENTRAL DISPATCH
                  </span>
                </div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#718096]">
                  {ar ? "البريد المؤسسي الموحد" : "Central Dispatch"}
                </p>
                <p className="mt-2 font-display text-lg xl:text-xl font-bold text-[#0c1836] break-all">
                  contact@alrohaimitheory.org
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#4e5e7b]">
                  {ar ? "يُحال الاستفسار فوراً إلى الوحدة الأكاديمية المعنية خلال 24 ساعة" : "Inquiries are routed directly to the designated academic unit within 24 hours"}
                </p>
              </div>

              <div className="mt-6 border-t border-[#0c1836]/10 pt-4">
                <button
                  onClick={() => copyToClipboard("email", "contact@alrohaimitheory.org")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b88a3b] hover:text-[#0c1836]"
                >
                  {copiedKey === "email" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedKey === "email" ? (ar ? "تم النسخ" : "Copied") : (ar ? "نسخ البريد" : "Copy Email")}</span>
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Pillar */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-8 transition-all duration-300 hover:border-[#b88a3b]/40 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <MessageSquare className="text-[#b88a3b]" size={28} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#b88a3b] bg-[#f5f0e6] px-2.5 py-1 rounded-full border border-[#0c1836]/10">
                    DIRECT LINE
                  </span>
                </div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#718096]">
                  {ar ? "الواتساب المباشر" : "Direct WhatsApp"}
                </p>
                <p className="mt-2 font-display text-xl font-bold text-[#0c1836]" dir="ltr">
                  +966 50 521 0112
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#4e5e7b]">
                  {ar ? "للتواصل العاجل والاستفسارات المباشرة عبر تطبيق الواتساب" : "For urgent inquiries and direct communication via WhatsApp"}
                </p>
              </div>

              <div className="mt-6 border-t border-[#0c1836]/10 pt-4">
                <a
                  href="https://wa.me/966505210112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b88a3b] hover:text-[#0c1836]"
                >
                  <ArrowUpRight size={14} />
                  <span>{ar ? "ابدأ المحادثة" : "Start Chat"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. SPECIALIZED INQUIRIES ROUTING (Directorate Channels)
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#fbf9f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "مسارات التوجيه المتخصصة" : "Dedicated Pathways"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "توجيه الاستفسارات حسب الاختصاص" : "Specialized Inquiries Routing"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "وجه استفسارك مباشرة للقسم المختص لضمان سرعة الاستجابة ودقة المتابعة."
                : "Direct your correspondence to the relevant academic directorate for prompt review."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactCategories.map((cat) => (
              <div
                key={cat.dept}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#0c1836]/10 bg-white p-8 transition-all duration-300 hover:border-[#b88a3b]/40 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                      {cat.dept}
                    </span>
                    <Sparkles size={14} className="text-[#718096]/40 group-hover:text-[#b88a3b] transition-colors" />
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
                    {cat.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#0c1836]/10 pt-4">
                  <a
                    href={`mailto:${cat.email}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#b88a3b] hover:text-[#0c1836]"
                  >
                    <span>{cat.email}</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. INTERACTIVE DISPATCH FORM
          ===================================================================== */}
      <section className="border-b border-[#0c1836]/10 bg-[#f5f0e6] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 text-center">
            <SectionLabel>{ar ? "إرسال رسالة مباشرة" : "Send a Direct Message"}</SectionLabel>
            <h2 className="font-display text-3xl font-black text-[#0c1836] md:text-5xl">
              {ar ? "نموذج المراسلة المؤسسية" : "Institutional Dispatch Form"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4e5e7b]">
              {ar
                ? "يرجى تعبئة النموذج أدناه وتحديد موضوع الاستفسار، وسيتواصل معكم ممثل المركز خلال 24 ساعة عمل."
                : "Please complete the dispatch form below; our institutional liaison will reply within 24 business hours."}
            </p>
          </div>

          <InquiryForm />
        </div>
      </section>
    </>
  );
}
