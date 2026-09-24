import { useState, type FormEvent } from "react";
import { X, CheckCircle2, Award, Clock, Users, BookOpen } from "lucide-react";
import { type ProgramItem } from "../lib/content";
import { useLanguage, Button } from "./site";

interface ProgramModalProps {
  program: ProgramItem | null;
  onClose: () => void;
}

export function ProgramModal({ program, onClose }: ProgramModalProps) {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  if (!program) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#070f24]/60 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="card-3d-light relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-8 text-[#0c1836]">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-amber-900/15 bg-[#fbf9f5] text-[#0c1836] transition hover:border-amber-600 hover:text-amber-800"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
              <Award size={16} />
              <span>
                {lang === "ar"
                  ? "المدرسة السعودية للقيادة الواعية"
                  : "Saudi School of Conscious Leadership"}
              </span>
            </div>

            <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-[#0c1836] md:text-3xl">
              {lang === "ar" ? program.arabicTitle : program.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b] md:text-base">
              {lang === "ar" ? program.arabicDescription : program.description}
            </p>

            {/* Program Metadata badges */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-amber-900/15 bg-[#fbf9f5] p-3.5">
                <Clock className="text-amber-700 shrink-0" size={18} />
                <div>
                  <p className="text-[10px] uppercase font-bold text-amber-800">
                    {lang === "ar" ? "المدة والمسار" : "Duration & Track"}
                  </p>
                  <p className="font-display text-xs font-semibold text-[#0c1836]">
                    {lang === "ar" ? program.arabicDuration : program.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-sky-900/15 bg-[#fbf9f5] p-3.5">
                <Users className="text-sky-700 shrink-0" size={18} />
                <div>
                  <p className="text-[10px] uppercase font-bold text-sky-800">
                    {lang === "ar" ? "الفئة المستهدفة" : "Target Audience"}
                  </p>
                  <p className="font-display text-xs font-semibold text-[#0c1836]">
                    {lang === "ar" ? program.arabicAudience : program.audience}
                  </p>
                </div>
              </div>
            </div>

            {/* Modules List */}
            <div className="mt-6">
              <h4 className="flex items-center gap-2 font-display text-sm font-bold text-amber-800">
                <BookOpen size={16} className="text-amber-700" />
                <span>{lang === "ar" ? "المحاور والوحدات التدريبية" : "Curriculum Modules"}</span>
              </h4>
              <ul className="mt-3 space-y-2">
                {(lang === "ar" ? program.arabicModules : program.modules).map((mod, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-amber-900/10 bg-[#fbf9f5] p-3 text-xs md:text-sm"
                  >
                    <span className="font-mono text-xs font-bold text-amber-700">
                      0{i + 1}
                    </span>
                    <span className="text-[#0c1836] font-medium">{mod}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nomination / Application Form */}
            <div className="mt-8 border-t border-amber-900/10 pt-6">
              <h4 className="font-display text-base font-bold text-[#0c1836]">
                {lang === "ar" ? "طلب الترشح / التسجيل في البرنامج" : "Apply / Nominate for this Program"}
              </h4>
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    required
                    placeholder={lang === "ar" ? "الاسم الكامل" : "Full Name"}
                    className="h-10 rounded-lg border border-amber-900/20 bg-white px-3 text-sm text-[#0c1836] placeholder:text-slate-400 focus:border-amber-600 focus:outline-none shadow-sm"
                  />
                  <input
                    required
                    type="email"
                    placeholder={lang === "ar" ? "البريد الإلكتروني المؤسسي" : "Official Email"}
                    className="h-10 rounded-lg border border-amber-900/20 bg-white px-3 text-sm text-[#0c1836] placeholder:text-slate-400 focus:border-amber-600 focus:outline-none shadow-sm"
                  />
                </div>
                <input
                  required
                  placeholder={lang === "ar" ? "الجهة / المؤسسة والمنصب" : "Organization & Title"}
                  className="h-10 w-full rounded-lg border border-amber-900/20 bg-white px-3 text-sm text-[#0c1836] placeholder:text-slate-400 focus:border-amber-600 focus:outline-none shadow-sm"
                />
                <Button type="submit" className="mt-2 w-full bg-[#b88a3b] text-white font-bold hover:bg-[#996515] shadow-gold">
                  {lang === "ar" ? "إرسال طلب الترشح" : "Submit Nomination"}
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div className="py-12 text-center">
            <CheckCircle2 className="mx-auto text-amber-700" size={54} />
            <h3 className="mt-4 font-display text-2xl font-bold text-[#0c1836]">
              {lang === "ar" ? "تم استلام طلب ترشحكم بنجاح" : "Nomination Received Successfully"}
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-[#4e5e7b]">
              {lang === "ar"
                ? "سيتواصل فريق القبول بالمدرسة السعودية للقيادة الواعية معكم لتأكيد تفاصيل الدفعة والجدول الزمني."
                : "The admissions committee at the Saudi School of Conscious Leadership will review your details and contact you with cohort schedules."}
            </p>
            <Button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 bg-[#b88a3b] text-white font-bold hover:bg-[#996515]"
            >
              {lang === "ar" ? "إغلاق" : "Close"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
