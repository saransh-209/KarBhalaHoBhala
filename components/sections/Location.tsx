"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Location() {
  const { t } = useLang();
  const l = t.location;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">{l.badge}</span>
          <h2 className="heading-font text-5xl font-bold mt-6">{l.heading}</h2>
          <p className="mt-5 text-gray-600">{l.desc}</p>
        </div>
        <div className="mt-12 rounded-3xl overflow-hidden shadow-xl">
          <iframe src="https://www.google.com/maps?q=PGI%20Chandigarh&output=embed" width="100%" height="500" loading="lazy" style={{ border: 0 }} />
        </div>
      </div>
    </section>
  );
}