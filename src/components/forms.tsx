import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button, useLanguage } from "./site";

export function InquiryForm({ partnership = false }: { partnership?: boolean }) {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setErrors(true);
      form.reportValidity();
      return;
    }
    setErrors(false);
    setSent(true);
    form.reset();
  };

  if (sent)
    return (
      <div className="relative overflow-hidden rounded-3xl border border-[#b88a3b]/30 bg-[#fbf9f5] p-10 text-center shadow-lg">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#b88a3b]/15 text-[#b88a3b]">
          <CheckCircle2 size={38} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-[#0c1836]">
          {lang === "ar" ? "تم استلام مراسلتكم بنجاح" : "Your dispatch has been registered"}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#4e5e7b]">
          {lang === "ar"
            ? "شكرًا لتواصلكم مع مركز الدكتور عبدالمحسن الرحيمي. سيتواصل معكم ممثل الوحدة الأكاديمية المختصة في أقرب وقت."
            : "Thank you for reaching out to Dr. Abdulmohsen Alrohaimi Center. An academic liaison will review your proposal promptly."}
        </p>
        <Button
          onClick={() => setSent(false)}
          className="mt-6 border border-[#0c1836]/20 bg-[#0c1836] text-white hover:bg-[#1a2d5a]"
        >
          {lang === "ar" ? "إرسال مراسلة أخرى" : "Send another dispatch"}
        </Button>
      </div>
    );

  const field =
    "min-h-12 w-full rounded-xl border border-[#0c1836]/15 bg-white/90 px-4 text-sm text-[#0c1836] placeholder:text-[#4e5e7b]/50 outline-none transition focus:border-[#b88a3b] focus:ring-2 focus:ring-[#b88a3b]/20 shadow-xs";

  return (
    <form
      onSubmit={submit}
      className="relative overflow-hidden rounded-3xl border border-[#0c1836]/10 bg-[#fbf9f5] p-8 md:p-12 shadow-sm grid gap-6 md:grid-cols-2"
      noValidate
    >
      <label className="text-sm font-semibold text-[#0c1836]">
        {lang === "ar" ? "الاسم الكامل" : "Full Name"}
        <input required placeholder={lang === "ar" ? "د. محمد الأحمد" : "Dr. / Prof. / Full Name"} className={`${field} mt-2`} />
      </label>

      <label className="text-sm font-semibold text-[#0c1836]">
        {lang === "ar" ? "المنظمة / المؤسسة الأكاديمية" : "Organization / Institution"}
        <input required placeholder={lang === "ar" ? "جامعة الملك سعود / هيئة استشارية" : "University or Sovereign Entity"} className={`${field} mt-2`} />
      </label>

      {partnership ? (
        <>
          <label className="text-sm font-semibold text-[#0c1836]">
            {lang === "ar" ? "الدولة / المقر" : "Country / Region"}
            <input required placeholder={lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia, UK, etc."} className={`${field} mt-2`} />
          </label>
          <label className="text-sm font-semibold text-[#0c1836]">
            {lang === "ar" ? "نوع الشراكة المقترحة" : "Type of Partnership"}
            <select required className={`${field} mt-2 text-[#0c1836] bg-white`} defaultValue="">
              <option value="" disabled className="text-slate-400">
                {lang === "ar" ? "اختر مسار التعاون" : "Select partnership track"}
              </option>
              <option>
                {lang === "ar" ? "شراكة بحثية وتطبيق نماذج" : "Academic Research & Empirical Modeling"}
              </option>
              <option>
                {lang === "ar" ? "تعاون معرفي وترجمة ونشر" : "Knowledge Co-Publishing & Symposia"}
              </option>
              <option>
                {lang === "ar" ? "حوار دولي واستشراف المستقبل" : "Global Thought Assembly & Foresight"}
              </option>
            </select>
          </label>
        </>
      ) : (
        <>
          <label className="text-sm font-semibold text-[#0c1836]">
            {lang === "ar" ? "البريد الإلكتروني المؤسسي" : "Official Email Address"}
            <input required type="email" placeholder="name@institution.org" className={`${field} mt-2`} />
          </label>
          <label className="text-sm font-semibold text-[#0c1836]">
            {lang === "ar" ? "الموضوع / التخصص" : "Subject Directorate"}
            <select required className={`${field} mt-2 text-[#0c1836] bg-white`} defaultValue="">
              <option value="" disabled className="text-slate-400">
                {lang === "ar" ? "اختر موضوع المراسلة" : "Select subject category"}
              </option>
              {(lang === "ar"
                ? [
                    "التعاون البحثي ونظرية الرحيمي",
                    "المدرسة السعودية للقيادة الواعية (ترشيحات)",
                    "المختبرات والوحدات المعرفية المتخصصة",
                    "طلب مذكرات تفاهم وشراكات",
                    "الإعلام والنشر والمشاركات الدولية",
                    "أخرى",
                  ]
                : [
                    "Research Collaboration & Alrohaimi Theory",
                    "Saudi School of Conscious Leadership (Cohorts)",
                    "Cognitive Labs & Specialized Units",
                    "Strategic MOUs & Institutional Alliances",
                    "Media, Keynotes & Scholarly Publications",
                    "Other Inquiries",
                  ]
              ).map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
        </>
      )}

      <label className="text-sm font-semibold text-[#0c1836] md:col-span-2">
        {lang === "ar" ? "تفاصيل الرسالة أو المقترح" : "Detailed Message / Research Scope"}
        <textarea
          required
          rows={5}
          placeholder={
            lang === "ar"
              ? "يرجى كتابة نبذة موجزة عن موضوع التعاون أو الاستفسار..."
              : "Please describe your research scope, proposed collaboration, or institutional inquiry..."
          }
          className={`${field} mt-2 py-3`}
        />
      </label>

      {!partnership && (
        <label className="flex items-start gap-3 text-xs text-[#4e5e7b] md:col-span-2 cursor-pointer">
          <input type="checkbox" className="mt-1 size-4 rounded accent-amber-600" />
          <span>
            {lang === "ar"
              ? "أرغب في استلام النشرات الفكرية والمخرجات المعرفية المعتمدة الصادرة عن المركز."
              : "I wish to receive official whitepapers and knowledge outputs from Dr. Abdulmohsen Alrohaimi Center."}
          </span>
        </label>
      )}

      {errors && (
        <p role="alert" className="text-sm text-rose-600 md:col-span-2">
          {lang === "ar" ? "يرجى تعبئة كافة الحقول المطلوبة بشكل صحيح." : "Please fill out all required fields."}
        </p>
      )}

      <div className="md:col-span-2">
        <Button
          type="submit"
          className="bg-gradient-to-r from-[#b88a3b] to-[#996515] font-bold text-white shadow-gold hover:from-[#c59642] hover:to-[#a77019]"
        >
          <span className="flex items-center gap-2">
            <Send size={15} />
            <span>{lang === "ar" ? "إرسال المراسلة الرسمية" : "Dispatch Official Inquiry"}</span>
          </span>
        </Button>
      </div>
    </form>
  );
}
