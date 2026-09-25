import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X, BookOpen, Layers, Award, Sparkles, Building2 } from "lucide-react";
import { useLanguage } from "./site";
import { leadershipPrograms, primaryUnits, publications, research, alrohaimiResearchSeries, foundationalIntellectualWorks } from "../lib/content";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { lang } = useLanguage();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search through ARS
  const matchingARS = alrohaimiResearchSeries.filter(
    (item) =>
      item.arsNumber.toLowerCase().includes(q) ||
      item.title.toLowerCase().includes(q) ||
      item.abstract.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.toLowerCase().includes(q))
  );

  // Search through FIW
  const matchingFIW = foundationalIntellectualWorks.filter(
    (w) =>
      w.fiwNumber.toLowerCase().includes(q) ||
      w.title.toLowerCase().includes(q) ||
      w.arabicTitle.includes(q) ||
      w.description.en.toLowerCase().includes(q) ||
      w.description.ar.includes(q)
  );

  // Search through programs
  const matchingPrograms = leadershipPrograms.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.arabicTitle.includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.arabicDescription.includes(q)
  );

  // Search through units
  const matchingUnits = primaryUnits[lang].filter(
    (u) =>
      u.title.toLowerCase().includes(q) ||
      u.description.toLowerCase().includes(q)
  );

  // Search through publications
  const matchingPubs = publications.filter(
    (p) =>
      p.title.en.toLowerCase().includes(q) ||
      p.title.ar.includes(q) ||
      p.description.en.toLowerCase().includes(q) ||
      p.description.ar.includes(q)
  );

  // Search research pillars
  const matchingResearch = research[lang].filter(
    ([title, desc]) => title.toLowerCase().includes(q) || desc.toLowerCase().includes(q)
  );

  const hasResults =
    matchingARS.length > 0 ||
    matchingFIW.length > 0 ||
    matchingPrograms.length > 0 ||
    matchingUnits.length > 0 ||
    matchingPubs.length > 0 ||
    matchingResearch.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#070f24]/60 p-4 pt-20 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="card-3d-light relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-amber-900/10 bg-[#fbf9f5] px-5 py-4">
          <Search size={20} className="text-amber-700 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === "ar"
                ? "ابحث في النظريات، البرامج، الوحدات، والمخرجات المعرفية..."
                : "Search theories, programs, units, and knowledge..."
            }
            className="w-full bg-transparent text-base text-[#0c1836] placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-[#0c1836]"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded-md border border-amber-900/20 bg-white px-2 py-1 font-mono text-[10px] text-amber-800 hover:bg-[#f5f0e6]"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-5 space-y-5">
          {!query ? (
            <div className="py-8 text-center text-sm text-[#4e5e7b]">
              <Sparkles className="mx-auto mb-2 text-amber-600" size={26} />
              <p>
                {lang === "ar"
                  ? "اكتب كلمة للبحث الفوري في كامل منظومة المركز المعرفية"
                  : "Type a keyword to explore the Center's knowledge system"}
              </p>
            </div>
          ) : !hasResults ? (
            <div className="py-8 text-center text-sm text-[#4e5e7b]">
              <p>{lang === "ar" ? "لم يتم العثور على نتائج مطابقة." : "No matching results found."}</p>
            </div>
          ) : (
            <>
              {/* Alrohaimi Research Series (ARS) */}
              {matchingARS.length > 0 && (
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#b88a3b]">
                    <Sparkles size={13} />
                    <span>{lang === "ar" ? "سلسلة أبحاث الرحيمي (ARS)" : "Alrohaimi Research Series (ARS)"}</span>
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {matchingARS.map((item) => (
                      <Link
                        key={item.id}
                        to="/research-series"
                        onClick={onClose}
                        className="block rounded-xl border border-amber-900/10 bg-[#fbf9f5] p-3.5 transition hover:border-amber-600 hover:bg-white hover:shadow-sm"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-display text-sm font-bold text-[#0c1836]">
                            <span className="font-mono text-xs text-[#b88a3b] me-2 font-bold">{item.arsNumber}:</span>
                            {item.title}
                          </p>
                          <span className="shrink-0 rounded-full bg-[#f5f0e6] px-2 py-0.5 font-mono text-[9px] text-[#718096]">
                            {item.scientificStatus}
                          </span>
                        </div>
                        <p className="line-clamp-1 mt-1 text-xs text-[#4e5e7b]">
                          {item.abstract}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Foundational Intellectual Works (FIW) */}
              {matchingFIW.length > 0 && (
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-900">
                    <BookOpen size={13} />
                    <span>{lang === "ar" ? "الأعمال الفكرية التأسيسية (FIW)" : "Foundational Intellectual Works (FIW)"}</span>
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {matchingFIW.map((w) => (
                      <Link
                        key={w.id}
                        to="/foundational-works"
                        onClick={onClose}
                        className="block rounded-xl border border-amber-900/10 bg-[#fbf9f5] p-3.5 transition hover:border-amber-600 hover:bg-white hover:shadow-sm"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-display text-sm font-bold text-[#0c1836]">
                            <span className="font-mono text-xs text-[#b88a3b] me-2 font-bold">{w.fiwNumber}:</span>
                            {lang === "ar" ? w.arabicTitle : w.title}
                          </p>
                          <span className="shrink-0 rounded-full bg-[#f5f0e6] px-2 py-0.5 font-mono text-[9px] text-[#718096]">
                            {w.workType}
                          </span>
                        </div>
                        <p className="line-clamp-1 mt-1 text-xs text-[#4e5e7b]">
                          {lang === "ar" ? w.description.ar : w.description.en}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Programs */}
              {matchingPrograms.length > 0 && (
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    <Award size={13} />
                    <span>{lang === "ar" ? "البرامج القيادية" : "Leadership Programs"}</span>
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {matchingPrograms.map((p) => (
                      <Link
                        key={p.id}
                        to="/programs"
                        onClick={onClose}
                        className="block rounded-xl border border-amber-900/10 bg-[#fbf9f5] p-3.5 transition hover:border-amber-600 hover:bg-white hover:shadow-sm"
                      >
                        <p className="font-display text-sm font-bold text-[#0c1836]">
                          {lang === "ar" ? p.arabicTitle : p.title}
                        </p>
                        <p className="line-clamp-1 mt-1 text-xs text-[#4e5e7b]">
                          {lang === "ar" ? p.arabicDescription : p.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Research Pillars */}
              {matchingResearch.length > 0 && (
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-sky-700">
                    <Layers size={13} />
                    <span>{lang === "ar" ? "الركائز البحثية والنظرية" : "Research & Theories"}</span>
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {matchingResearch.map(([title, desc]) => (
                      <Link
                        key={title}
                        to="/theory"
                        onClick={onClose}
                        className="block rounded-xl border border-amber-900/10 bg-[#fbf9f5] p-3.5 transition hover:border-amber-600 hover:bg-white hover:shadow-sm"
                      >
                        <p className="font-display text-sm font-bold text-[#0c1836]">{title}</p>
                        <p className="line-clamp-1 mt-1 text-xs text-[#4e5e7b]">{desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Units */}
              {matchingUnits.length > 0 && (
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    <Building2 size={13} />
                    <span>{lang === "ar" ? "وحدات المركز" : "Center Units"}</span>
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {matchingUnits.map((u) => (
                      <Link
                        key={u.id}
                        to="/units"
                        onClick={onClose}
                        className="block rounded-xl border border-amber-900/10 bg-[#fbf9f5] p-3.5 transition hover:border-amber-600 hover:bg-white hover:shadow-sm"
                      >
                        <p className="font-display text-sm font-bold text-[#0c1836]">{u.title}</p>
                        <p className="line-clamp-1 mt-1 text-xs text-[#4e5e7b]">{u.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Publications */}
              {matchingPubs.length > 0 && (
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-purple-700">
                    <BookOpen size={13} />
                    <span>{lang === "ar" ? "المخرجات والكتب" : "Publications & Books"}</span>
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {matchingPubs.map((pub) => (
                      <Link
                        key={pub.id}
                        to="/knowledge"
                        onClick={onClose}
                        className="block rounded-xl border border-amber-900/10 bg-[#fbf9f5] p-3.5 transition hover:border-amber-600 hover:bg-white hover:shadow-sm"
                      >
                        <p className="font-display text-sm font-bold text-[#0c1836]">
                          {lang === "ar" ? pub.title.ar : pub.title.en}
                        </p>
                        <p className="line-clamp-1 mt-1 text-xs text-[#4e5e7b]">
                          {lang === "ar" ? pub.description.ar : pub.description.en}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
