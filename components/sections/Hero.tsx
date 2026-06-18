"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium">
              {h.badge}
            </motion.span>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-font mt-8 text-5xl md:text-7xl font-bold leading-tight">
              {h.heading1}<br />{h.heading2}
              <span className="text-orange-600"> {h.heading3}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg text-gray-600 max-w-xl">
              {h.desc}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-10">
              <button onClick={() => scrollTo("donate")}
                className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 hover:scale-105 transition-all duration-200 shadow-md">
                {h.donateBtn}
              </button>
              <button onClick={() => scrollTo("about")}
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-200">
                {h.missionBtn}
              </button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <img src="/images/hero.jpg" alt="Helping Patients" className="rounded-3xl shadow-2xl w-full object-cover" />
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl shadow-xl">
              <p className="font-bold text-2xl text-orange-600">50+</p>
              <p className="text-gray-500">{h.stat}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}