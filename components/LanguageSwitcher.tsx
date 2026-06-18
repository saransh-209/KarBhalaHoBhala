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
    <div className="flex items-center justify-center gap-1 border border-orange-200 rounded-full px-2 py-1.5 w-full max-w-xs mx-auto md:w-auto md:max-w-none">
      {options.map((opt, i) => (
        <span key={opt.code} className="flex items-center justify-center flex-1 md:flex-initial">
          <button
            onClick={() => setLang(opt.code)}
            className={`w-full md:w-auto px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 text-center leading-none ${
              lang === opt.code
                ? "bg-orange-600 text-white"
                : "text-gray-600 hover:text-orange-600"
            }`}
          >
            {opt.label}
          </button>
          {i < options.length - 1 && (
            <span className="text-gray-300 text-xs shrink-0">|</span>
          )}
        </span>
      ))}
    </div>
  );
}