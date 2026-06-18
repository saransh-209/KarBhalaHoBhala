"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function FAQ() {
  const { t } = useLang();
  const f = t.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5">

        <div className="text-center">
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            {f.badge}
          </span>
          <h2 className="heading-font text-5xl font-bold mt-6">
            {f.heading1}
            <span className="text-orange-600"> {f.heading2}</span>
          </h2>
          <p className="mt-6 text-gray-600">
            {f.desc}
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {f.items.map((item, i) => (
            <div key={i} className="bg-[#FDF8F2] rounded-2xl border border-orange-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left p-5"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={18} className="text-orange-500 shrink-0" />
                  <h3 className="font-semibold text-gray-800">{item.q}</h3>
                </div>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={18} className="text-gray-400 shrink-0" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-gray-600 text-sm leading-7 pl-12">{item.a}</p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}