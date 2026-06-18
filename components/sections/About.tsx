"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <img src="/images/hero.jpg" alt="Volunteers Helping Patients"
              className="rounded-3xl shadow-2xl w-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">{a.badge}</span>
            <h2 className="heading-font text-5xl font-bold mt-6">
              {a.heading1}<span className="text-orange-600"> {a.heading2}</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-8">{a.desc}</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-orange-50 rounded-3xl p-8">
            <Target size={40} className="text-orange-600" />
            <h3 className="text-2xl font-bold mt-4">{a.mission.title}</h3>
            <p className="mt-4 text-gray-600">{a.mission.desc}</p>
          </div>
          <div className="bg-green-50 rounded-3xl p-8">
            <Eye size={40} className="text-green-600" />
            <h3 className="text-2xl font-bold mt-4">{a.vision.title}</h3>
            <p className="mt-4 text-gray-600">{a.vision.desc}</p>
          </div>
          <div className="bg-yellow-50 rounded-3xl p-8">
            <ShieldCheck size={40} className="text-yellow-600" />
            <h3 className="text-2xl font-bold mt-4">{a.transparency.title}</h3>
            <p className="mt-4 text-gray-600">{a.transparency.desc}</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-600 to-green-600 rounded-3xl p-10 text-white">
          <h3 className="text-3xl font-bold">{a.credentials.title}</h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div><p className="font-semibold">{a.credentials.reg}</p><p>XXXX/2018</p></div>
            <div><p className="font-semibold">{a.credentials.g80}</p><p>{a.credentials.available}</p></div>
            <div><p className="font-semibold">{a.credentials.a12}</p><p>{a.credentials.verified}</p></div>
            <div><p className="font-semibold">{a.credentials.years}</p><p>8+</p></div>
          </div>
        </div>

      </div>
    </section>
  );
}