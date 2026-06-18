"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardCheck, HeartHandshake, RefreshCcw } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const icons = [Phone, ClipboardCheck, HeartHandshake, RefreshCcw];

export default function HowItWorks() {
  const { t } = useLang();
  const h = t.howItWorks;

  return (
    <section className="py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">{h.badge}</span>
          <h2 className="heading-font text-5xl font-bold mt-6">
            {h.heading1}<span className="text-orange-600"> {h.heading2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {h.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={index} whileHover={{ y: -8 }} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <Icon size={28} className="text-orange-600" />
                  </div>
                  <div className="mt-5 text-sm font-bold text-orange-600">STEP {index + 1}</div>
                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}