"use client";

import { useLang } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/translations";

const options: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हिंदी" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 border border-orange-200 rounded-full px-2 py-1">
      {options.map((opt, i) => (
        <span key={opt.code} className="flex items-center">
          <button
            onClick={() => setLang(opt.code)}
            className={`px-2 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
              lang === opt.code
                ? "bg-orange-600 text-white"
                : "text-gray-600 hover:text-orange-600"
            }`}
          >
            {opt.label}
          </button>
          {i < options.length - 1 && (
            <span className="text-gray-300 text-xs">|</span>
          )}
        </span>
      ))}
    </div>
  );
}