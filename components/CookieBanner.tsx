"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function CookieBanner() {
  const { t } = useLang();
  const c = t.cookie;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setShow(true);
  }, []);

  const accept = () => { localStorage.setItem("cookie-consent", "accepted"); setShow(false); };

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-auto md:w-[450px] bg-white shadow-2xl rounded-2xl p-5 z-50">
      <h3 className="font-bold text-lg">{c.title}</h3>
      <p className="text-gray-600 mt-2">{c.desc}</p>
      <button onClick={accept} className="mt-4 bg-orange-600 text-white px-5 py-3 rounded-xl hover:bg-orange-700 transition">
        {c.accept}
      </button>
    </div>
  );
}