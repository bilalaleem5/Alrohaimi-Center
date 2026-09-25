import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Mail,
  Send,
  Building2,
  Globe2,
  Sparkles,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { nav, centerInfo, type Lang } from "../lib/content";
import { SearchModal } from "./SearchModal";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export const useLanguage = () => useContext(LanguageContext);

export function Button({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 disabled:opacity-50 active:scale-95 ${className}`}
      {...props}
    />
  );
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = sessionStorage.getItem("alrohaimi-lang");
    if (saved === "ar") setLangState("ar");
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    sessionStorage.setItem("alrohaimi-lang", next);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Authentic Royal Emblem matching client wireframe:
 * Left: Neural brain network & synaptic circuits
 * Apex: "CAI" with golden flame of enlightenment
 * Base: "AI" circuit node
 * Right: Riyadh modern architectural skyline (Kingdom Tower & Faisaliah)
 * Enclosing: Circular gold calligraphy ring
 */
export function RoyalEmblem({ size = 48 }: { size?: number }) {
  return (
    <div 
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center shrink-0"
    >
      <img
        src="/favicon.png"
        alt="Alrohaimi Center Official Crest"
        className="w-full h-full object-contain transition-transform duration-500 hover:rotate-3"
        aria-label="Alrohaimi Center Official Crest"
      />
    </div>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  // Dynamic Scroll Listener for Header Animation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ar = lang === "ar";

  const researchSubLinks = [
    {
      to: "/intellectual-system",
      label: ar ? "المنظومة الفكرية للرحيمي" : "Alrohaimi Intellectual System",
      desc: ar ? "المفاهيم الشاملة والانتقال من الكمون للأثر" : "Comprehensive system from latency to impact",
    },
    {
      to: "/theory",
      label: ar ? "نظرية الرحيمي" : "Alrohaimi Theory",
      desc: ar ? "المراحل الست لبناء الأثر الحضاري" : "Six developmental stages to civilizational impact",
    },
    {
      to: "/foundational-works",
      label: ar ? "المصنفات الفكرية التأسيسية" : "Foundational Intellectual Works",
      desc: ar ? "المؤلفات والكتب الستة التأسيسية للدكتور الرحيمي" : "Six foundational reference treatises",
    },
    {
      to: "/research-series",
      label: ar ? "سلسلة أبحاث المركز" : "Alrohaimi Research Series",
      desc: ar ? "الأوراق والدراسات العلمية المحكمة" : "Research studies and monographs",
    },
    {
      to: "/research",
      label: ar ? "الأبحاث والنشر" : "Research & Publications",
      desc: ar ? "مجالات البحث الستة والأولويات العلمية" : "Six research domains and publications",
    },
  ];

  const isResearchActive = [
    "/intellectual-system",
    "/theory",
    "/foundational-works",
    "/research-series",
    "/research",
  ].some((p) => pathname === p || pathname.startsWith(p + "/"));

  return (
    <div className={`min-h-screen bg-[#fbf9f5] text-[#0c1836] ${ar ? "font-ar" : "font-body"}`}>
      {/* Global Search Dialog Modal (Kept for Ctrl+K keyboard shortcut) */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Ultra-Modern Floating Glass Island Header */}
      <div className={`sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-6 lg:px-8 transition-all duration-500`}>
        <div className="relative mx-auto max-w-[1600px]">
          {/* Subtle Mirror Floor Reflection */}
          <div
            className={`pointer-events-none absolute -bottom-3 inset-x-10 h-4 rounded-full transition-all duration-700 ${
              scrolled
                ? "bg-gradient-to-b from-amber-400/20 via-white/40 to-transparent blur-md opacity-70"
                : "opacity-0"
            }`}
          />

          <header
            className={`relative mx-auto flex w-full items-center justify-between rounded-2xl md:rounded-full border transition-all duration-500 ${
              scrolled
                ? "h-[66px] bg-[#f5f0e6]/95 px-5 lg:px-8 border-[#b88a3b]/40 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.7),_inset_0_-1px_1px_rgba(184,138,59,0.15),_0_18px_45px_-10px_rgba(12,24,54,0.15)] backdrop-blur-2xl scale-[0.995]"
                : "h-[78px] bg-[#f5f0e6]/90 px-6 lg:px-10 border-amber-900/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),_0_8px_30px_-5px_rgba(12,24,54,0.06)] backdrop-blur-xl"
            }`}
          >
            {/* Mirror Top Specular Reflection Glare */}
            <div className="pointer-events-none absolute inset-x-12 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />
            
            {/* Subtle Diagonal Mirror Glass Sheen */}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-white/60 transition-opacity duration-700 ${
                scrolled ? "opacity-100" : "opacity-40"
              }`}
            />

            {/* Left: Brand Identity */}
            <div className="relative z-10 flex flex-1 items-center justify-start min-w-0">
              <Link
                to="/"
                className="group flex shrink-0 items-center gap-3 transition-transform duration-300 hover:scale-[1.01]"
                aria-label={ar ? "الرئيسية" : "Home"}
              >
                <div
                  className="relative flex shrink-0 items-center justify-center transition-all duration-500 group-hover:scale-105"
                >
                  <RoyalEmblem size={scrolled ? 48 : 58} />
                </div>

                {/* Name Split */}
                <div className="flex flex-col min-w-0 justify-center">
                  <div className="flex items-center">
                    <span className="font-sans text-[11px] lg:text-[12px] font-semibold uppercase tracking-wider text-amber-800/90 leading-tight whitespace-nowrap">
                      {ar ? "الدكتور عبدالمحسن" : "Dr. Abdulmohsen"}
                    </span>
                  </div>

                  <span className="font-serif text-[15px] lg:text-[17px] font-bold text-[#0c1836] tracking-tight transition-colors group-hover:text-amber-800 leading-tight whitespace-nowrap">
                    {ar ? "مركز الرحيمي" : "Alrohaimi Center"}
                  </span>

                  <span className="hidden sm:block font-mono text-[8.5px] uppercase tracking-wider text-amber-700/80 font-medium leading-tight whitespace-nowrap">
                    {ar ? "للسيادة الإدراكية والتحول الحضاري" : "Cognitive Sovereignty & Civilizational Transformation"}
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Clean Primary Navigation Island (ZERO HORIZONTAL SCROLLBAR) */}
            <div className="relative z-20 hidden xl:flex items-center justify-center shrink-0">
              <nav
                className={`flex items-center gap-1 rounded-full border border-amber-900/10 bg-[#f4efe4]/90 p-1 shadow-inner backdrop-blur-md transition-all duration-300 ${
                  scrolled ? "scale-[0.98] py-0.5" : "py-1"
                }`}
                aria-label="Primary Navigation"
              >
                {/* 1. Home */}
                <Link
                  to="/"
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold tracking-normal transition-all duration-200 ${
                    pathname === "/"
                      ? "bg-[#0c1836] text-[#dfbe7a] shadow-md scale-[1.02]"
                      : "text-[#0c1836]/75 hover:bg-white/85 hover:text-[#0c1836]"
                  }`}
                >
                  {ar ? "الرئيسية" : "Home"}
                </Link>

                {/* 2. About */}
                <Link
                  to="/about"
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold tracking-normal transition-all duration-200 ${
                    pathname === "/about" || pathname.startsWith("/about/")
                      ? "bg-[#0c1836] text-[#dfbe7a] shadow-md scale-[1.02]"
                      : "text-[#0c1836]/75 hover:bg-white/85 hover:text-[#0c1836]"
                  }`}
                >
                  {ar ? "عن المركز" : "About"}
                </Link>

                {/* 3. Dropdown: Intellectual System & Research */}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDropdownOpen((v) => !v);
                    }}
                    className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold tracking-normal transition-all duration-200 ${
                      isResearchActive
                        ? "bg-[#0c1836] text-[#dfbe7a] shadow-md scale-[1.02]"
                        : "text-[#0c1836]/75 hover:bg-white/85 hover:text-[#0c1836]"
                    }`}
                  >
                    <span>{ar ? "المنظومة الفكرية والأبحاث" : "Research & System"}</span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180 text-amber-700" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div
                      className={`absolute top-full pt-2 w-80 z-50 animate-fadeIn ${
                        ar ? "right-0 text-right" : "left-0 text-left"
                      }`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-2xl border border-amber-900/15 bg-white/95 p-2 shadow-2xl backdrop-blur-2xl">
                        <div className="space-y-1">
                          {researchSubLinks.map((item) => {
                            const isSubActive = pathname === item.to;
                            return (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setDropdownOpen(false)}
                                className={`block rounded-xl px-3.5 py-2.5 transition-all ${
                                  isSubActive
                                    ? "bg-[#0c1836] text-[#dfbe7a]"
                                    : "text-[#0c1836] hover:bg-[#f5f0e6]"
                                }`}
                              >
                                <div className="font-display text-xs font-bold">{item.label}</div>
                                <div
                                  className={`mt-0.5 text-[10px] leading-tight ${
                                    isSubActive ? "text-[#dfbe7a]/80" : "text-[#718096]"
                                  }`}
                                >
                                  {item.desc}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. Programs */}
                <Link
                  to="/programs"
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold tracking-normal transition-all duration-200 ${
                    pathname === "/programs" || pathname.startsWith("/programs/")
                      ? "bg-[#0c1836] text-[#dfbe7a] shadow-md scale-[1.02]"
                      : "text-[#0c1836]/75 hover:bg-white/85 hover:text-[#0c1836]"
                  }`}
                >
                  {ar ? "البرامج" : "Programs"}
                </Link>

                {/* 5. Units */}
                <Link
                  to="/units"
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold tracking-normal transition-all duration-200 ${
                    pathname === "/units" || pathname.startsWith("/units/")
                      ? "bg-[#0c1836] text-[#dfbe7a] shadow-md scale-[1.02]"
                      : "text-[#0c1836]/75 hover:bg-white/85 hover:text-[#0c1836]"
                  }`}
                >
                  {ar ? "الوحدات" : "Units"}
                </Link>

                {/* 6. Partnerships */}
                <Link
                  to="/partnerships"
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold tracking-normal transition-all duration-200 ${
                    pathname === "/partnerships" || pathname.startsWith("/partnerships/")
                      ? "bg-[#0c1836] text-[#dfbe7a] shadow-md scale-[1.02]"
                      : "text-[#0c1836]/75 hover:bg-white/85 hover:text-[#0c1836]"
                  }`}
                >
                  {ar ? "الشراكات" : "Partnerships"}
                </Link>

                {/* 7. Contact */}
                <Link
                  to="/contact"
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold tracking-normal transition-all duration-200 ${
                    pathname === "/contact" || pathname.startsWith("/contact/")
                      ? "bg-[#0c1836] text-[#dfbe7a] shadow-md scale-[1.02]"
                      : "text-[#0c1836]/75 hover:bg-white/85 hover:text-[#0c1836]"
                  }`}
                >
                  {ar ? "تواصل معنا" : "Contact"}
                </Link>
              </nav>
            </div>

            {/* Right: Language Switcher Pill + Mobile Menu Toggle (Search Button Removed) */}
            <div className="relative z-10 flex flex-1 items-center justify-end gap-1.5 sm:gap-2.5 min-w-0">
              {/* Sleek Modern Language Toggle Pill */}
              <div className="flex items-center rounded-full border border-amber-900/15 bg-[#f5f0e6]/90 p-0.5 sm:p-1 shadow-xs">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-full px-2 sm:px-2.5 py-1 text-xs font-bold transition-all duration-200 ${
                    lang === "en"
                      ? "bg-[#0c1836] text-[#dfbe7a] shadow-sm"
                      : "text-slate-600 hover:text-[#0c1836]"
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("ar")}
                  className={`rounded-full px-2 sm:px-2.5 py-1 text-xs font-bold transition-all duration-200 ${
                    lang === "ar"
                      ? "bg-[#0c1836] text-[#dfbe7a] shadow-sm"
                      : "text-slate-600 hover:text-[#0c1836]"
                  }`}
                  aria-label="Switch to Arabic"
                >
                  AR
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full border border-amber-900/15 bg-white text-[#0c1836] shadow-sm transition-colors hover:bg-[#f5f0e6] xl:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </header>

          {/* Mobile Navigation Drawer (Floating Card) */}
          {open && (
            <nav className="mt-2 rounded-2xl border border-amber-900/15 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl xl:hidden">
              <div className="grid gap-1">
                <Link
                  to="/"
                  className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    pathname === "/" ? "bg-[#0c1836] text-[#dfbe7a]" : "text-[#0c1836] hover:bg-[#f5f0e6]"
                  }`}
                >
                  {ar ? "الرئيسية" : "Home"}
                </Link>

                <Link
                  to="/about"
                  className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    pathname === "/about" ? "bg-[#0c1836] text-[#dfbe7a]" : "text-[#0c1836] hover:bg-[#f5f0e6]"
                  }`}
                >
                  {ar ? "عن المركز" : "About the Center"}
                </Link>

                {/* Mobile Submenu Accordion */}
                <div className="rounded-xl border border-amber-900/10 bg-[#fbf9f5] p-2">
                  <button
                    type="button"
                    onClick={() => setMobileResearchOpen((v) => !v)}
                    className={`flex w-full items-center justify-between px-3 py-2 text-sm font-bold transition-all ${
                      isResearchActive ? "text-amber-800" : "text-[#0c1836]"
                    }`}
                  >
                    <span>{ar ? "المنظومة الفكرية والأبحاث" : "Intellectual System & Research"}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileResearchOpen ? "rotate-180 text-amber-700" : ""
                      }`}
                    />
                  </button>
                  {mobileResearchOpen && (
                    <div className="mt-1 space-y-1 border-t border-amber-900/10 pt-2 ps-2">
                      {researchSubLinks.map((item) => {
                        const isSubActive = pathname === item.to;
                        return (
                          <Link
                            key={item.to}
                            to={item.to}
                            className={`block rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                              isSubActive
                                ? "bg-[#0c1836] text-[#dfbe7a]"
                                : "text-[#4e5e7b] hover:bg-white hover:text-[#0c1836]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Link
                  to="/programs"
                  className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    pathname === "/programs" ? "bg-[#0c1836] text-[#dfbe7a]" : "text-[#0c1836] hover:bg-[#f5f0e6]"
                  }`}
                >
                  {ar ? "البرامج" : "Programs"}
                </Link>

                <Link
                  to="/units"
                  className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    pathname === "/units" ? "bg-[#0c1836] text-[#dfbe7a]" : "text-[#0c1836] hover:bg-[#f5f0e6]"
                  }`}
                >
                  {ar ? "الوحدات والمختبرات" : "Units & Labs"}
                </Link>

                <Link
                  to="/partnerships"
                  className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    pathname === "/partnerships" ? "bg-[#0c1836] text-[#dfbe7a]" : "text-[#0c1836] hover:bg-[#f5f0e6]"
                  }`}
                >
                  {ar ? "الشراكات" : "Partnerships"}
                </Link>

                <Link
                  to="/contact"
                  className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    pathname === "/contact" ? "bg-[#0c1836] text-[#dfbe7a]" : "text-[#0c1836] hover:bg-[#f5f0e6]"
                  }`}
                >
                  {ar ? "تواصل معنا" : "Contact"}
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Main Page Flow */}
      <main key={`${pathname}-${lang}`} className="page-enter">
        {children}
      </main>

      {/* Prestige Royal Navy Footer */}
      <Footer />
    </div>
  );
}

function Footer() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="mt-0 border-t border-amber-900/15 bg-[#f5f0e6] text-[#0c1836]">
      {/* Ticker Banner (Royal Navy Blue Ribbon) */}
      <div className="overflow-hidden border-b border-amber-500/25 bg-[#0a1532] py-4">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-base font-bold italic text-amber-200/90">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            (ar
              ? [
                  "المعرفة",
                  "الإنسان",
                  "الأنظمة",
                  "السيادة الإدراكية",
                  "التحول الحضاري",
                  "مستقبل أكثر إنسانية",
                ]
              : [
                  "Knowledge",
                  "Humanity",
                  "Systems",
                  "Cognitive Sovereignty",
                  "Civilizational Transformation",
                  "A More Human Future",
                ]
            ).map((x, j) => (
              <span key={`${i}-${j}`} className="flex items-center gap-6">
                <span>{x}</span>
                <span className="text-amber-400 text-xs">◆</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-12 lg:px-12 lg:py-20">
        {/* Brand & Purpose */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3.5">
            <RoyalEmblem size={96} />
            <div>
              <strong className="block font-display text-base font-bold text-[#0c1836] md:text-lg">
                {ar ? centerInfo.name.ar : centerInfo.name.en}
              </strong>
              <p className="text-xs text-amber-800 font-semibold mt-0.5">
                {ar ? "المؤسس: الدكتور عبدالمحسن حميد الرحيمي" : `Founder: ${centerInfo.founder.en}`}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#4e5e7b]">
            {ar ? centerInfo.mission.ar : centerInfo.mission.en}
          </p>

          {/* Newsletter Dispatch */}
          <div className="mt-8 max-w-md">
            <p className="font-mono text-xs uppercase tracking-wider text-amber-900 font-bold">
              {ar ? "النشرة المعرفية الدورية للمركز" : "Center Knowledge Dispatch"}
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={ar ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                  className="h-10 w-full rounded-lg border border-amber-900/20 bg-white px-3.5 text-xs text-[#0c1836] placeholder:text-slate-400 focus:border-amber-600 focus:outline-none shadow-xs"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#b88a3b] to-[#996515] px-4 text-xs font-bold text-white shadow-gold transition-all hover:scale-105"
                >
                  <Send size={13} />
                  <span>{ar ? "اشتراك" : "Subscribe"}</span>
                </button>
              </form>
            ) : (
              <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <CheckCircle2 size={16} className="text-amber-700" />
                <span>{ar ? "شكرًا لاشتراككم في النشرة الفكرية." : "Thank you for subscribing."}</span>
              </p>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-wider text-amber-900 font-bold">
            {ar ? "بوابة المركز" : "Center Portal"}
          </p>
          <div className="mt-4 space-y-2.5">
            {nav[lang].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="block text-sm text-[#4e5e7b] transition-colors hover:text-[#0c1836] hover:underline underline-offset-4 decoration-amber-600/40"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Institutional Contact & Domain */}
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-wider text-amber-900 font-bold">
            {ar ? "الاعتماد والتواصل المؤسسي" : "Institutional Contact"}
          </p>
          <div className="mt-4 space-y-3 text-sm text-[#4e5e7b]">
            <div className="flex items-center gap-2.5">
              <Globe2 size={16} className="text-amber-700 shrink-0" />
              <span className="font-mono text-amber-900 font-bold">{centerInfo.website}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Building2 size={16} className="text-amber-700 shrink-0" />
              <span>{ar ? centerInfo.location.ar : centerInfo.location.en}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-amber-700 shrink-0" />
              <span className="font-mono text-[#0c1836] font-medium">{centerInfo.email}</span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-900/15 bg-white/70 p-4 text-xs text-[#4e5e7b] shadow-xs">
            <p>
              {ar
                ? "تُعد النماذج النظرية والأطر الفكرية المختارة أصولاً فكرية محمية، وتبقى مفتوحة للبحث التجريبي المستمر والتعاون الأكاديمي الدولي."
                : "Selected theoretical models and intellectual frameworks are protected intellectual assets and remain open to ongoing empirical research and academic collaboration."}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-900/15 bg-[#ede4d3]/50">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 px-6 py-5 text-xs text-slate-500 font-medium sm:flex-row lg:px-12">
          <p className="font-medium tracking-wide">
            {ar
              ? "المعرفة · الإنسان · الأنظمة · السيادة الإدراكية · التحول الحضاري"
              : "Knowledge · Humanity · Systems · Cognitive Sovereignty · Civilizational Transformation"}
          </p>
          <div className="flex flex-col gap-1 sm:items-end">
            <p>
              © 2026 {ar ? centerInfo.name.ar : centerInfo.name.en}.{" "}
              {ar ? "جميع الحقوق محفوظة." : "All Rights Reserved."}
            </p>
            <p className="text-[10px] sm:text-xs">
              {ar ? "تم الإنشاء بواسطة" : "Created by"}{" "}
              <a href="https://zetamize.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-amber-700 transition-colors">
                Zetamize
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Arrow() {
  const { lang } = useLanguage();
  return lang === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <span className="pulse-gold-light size-2 rounded-full bg-amber-600" />
      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-800">
        {children}
      </p>
    </div>
  );
}

export function PageHero({
  label,
  title,
  description,
  image,
  alt,
}: {
  label: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="glow-ambient-light relative overflow-hidden border-b border-amber-900/10 bg-[#fbf9f5]">
      <div className="mx-auto grid min-h-[60vh] max-w-[1440px] items-center gap-10 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className={`${image ? "lg:col-span-7" : "lg:col-span-9"} relative z-10`}>
          <SectionLabel>{label}</SectionLabel>
          <h1 className="max-w-[18ch] text-balance font-display text-4xl font-black leading-[1.12] text-[#0c1836] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="editorial-rule-gold mt-6 h-0.5 w-32" />
          <p className="mt-6 max-w-[58ch] text-pretty text-lg leading-relaxed text-[#4e5e7b] md:text-xl">
            {description}
          </p>
        </div>

        {image && (
          <div className="depth-stage relative lg:col-span-5">
            <div className="absolute -inset-4 translate-x-4 translate-y-4 rounded-2xl border border-amber-600/25" />
            <div className="depth-image overflow-hidden rounded-2xl border border-amber-600/30 bg-white shadow-elevated">
              <img
                src={image}
                alt={alt ?? "Hero visual"}
                width={1536}
                height={1024}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <span className="absolute -bottom-3 -left-3 rounded-md bg-[#b88a3b] px-3.5 py-1.5 font-mono text-[9px] font-bold uppercase text-white shadow-md">
              Alrohaimi Archive · 2026
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export function Section({
  label,
  title,
  description,
  children,
  dark = false,
}: {
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden border-b border-amber-900/10 py-20 lg:py-28 ${dark ? "bg-[#f5f0e6]" : "bg-[#fbf9f5]"}`}>
      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="max-w-[20ch] text-balance font-display text-3xl font-extrabold leading-tight text-[#0c1836] md:text-5xl">
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-[56ch] self-end leading-relaxed text-[#4e5e7b] lg:col-span-4 text-base">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function NumberGrid({
  items,
  columns = 3,
}: {
  items: readonly (readonly string[])[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 4
      ? "grid gap-px bg-[#0c1836]/10 md:grid-cols-2 lg:grid-cols-4 border border-[#0c1836]/10"
      : columns === 2
      ? "grid gap-px bg-[#0c1836]/10 md:grid-cols-2 border border-[#0c1836]/10"
      : "grid gap-px bg-[#0c1836]/10 md:grid-cols-2 lg:grid-cols-3 border border-[#0c1836]/10";

  return (
    <div className={`overflow-hidden rounded-2xl ${colClass}`}>
      {items.map((item, i) => (
        <article
          key={item[0]}
          className="group relative flex flex-col justify-between bg-[#fbf9f5] p-7 transition-all duration-300 hover:bg-[#fffdf9]"
        >
          {/* Subtle top indicator bar */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-transparent transition-colors group-hover:bg-[#b88a3b]" />
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-black tracking-widest text-[#b88a3b]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Sparkles size={14} className="text-[#b88a3b]/40 transition-colors group-hover:text-[#b88a3b]" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold leading-snug text-[#0c1836] transition-colors group-hover:text-[#b88a3b]">
              {item[0]}
            </h3>
            {item[1] && (
              <p className="mt-3 text-sm leading-relaxed text-[#4e5e7b]">
                {item[1]}
              </p>
            )}
          </div>
          {item[2] && (
            <div className="mt-6 border-t border-[#0c1836]/10 pt-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#b88a3b]">
                {item[2]}
              </span>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

export function Flow({ items }: { items: readonly string[] }) {
  return (
    <div className="relative grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 bg-gradient-to-r from-amber-400 via-amber-600 to-sky-600 lg:block" />
      {items.map((item, i) => (
        <div
          key={item}
          className="card-3d-light group relative z-10 flex min-h-32 flex-col justify-between rounded-xl p-5 shadow-luxury"
        >
          <span className="font-mono text-xs font-bold text-amber-700">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-4 font-display text-base font-bold text-[#0c1836] group-hover:text-amber-800 transition-colors">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}